#!/usr/bin/env node

/**
 * Download Google Business photos for churches (prioritized over Street View)
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

// Load environment variables
function loadEnvFile() {
  const envPath = path.join(__dirname, '..', '.env.local');
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf8');
    envContent.split('\n').forEach(line => {
      const [key, value] = line.split('=');
      if (key && value) {
        process.env[key.trim()] = value.trim();
      }
    });
  }
}

loadEnvFile();

// Fetch church data from Google Sheets
async function fetchChurchData() {
  const SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSFvwE_5w0OCJ1qh5U6KXfVcxGVspcT4jADr4waYdEfGmAZwdxPEVQ4Yw6TOTreHWmuH-V8yjs-wZ23/pub?gid=0&single=true&output=csv';
  
  try {
    const response = await fetch(SHEET_URL);
    const text = await response.text();
    
    // Parse CSV
    const lines = text.split('\n');
    const headers = lines[0]?.split(',') || [];
    const churches = [];
    
    for (let i = 1; i < lines.length; i++) {
      if (lines[i].trim()) {
        const values = lines[i].split(',');
        const church = {};
        headers.forEach((header, index) => {
          church[header.trim()] = values[index]?.trim() || '';
        });
        if (church.Name && church.Address) {
          churches.push({
            name: church.Name,
            address: church.Address,
            filename: church.Name.toLowerCase().replace(/[^a-z0-9]/g, '-') + '.jpg'
          });
        }
      }
    }
    
    return churches;
  } catch (error) {
    console.error('Error fetching church data:', error);
    return [];
  }
}

// Search for a place and get photo URL (prioritizing business photos)
async function getChurchPhotoUrl(churchName, churchAddress, apiKey) {
  try {
    // Search for the place using Places API Text Search
    const searchQuery = encodeURIComponent(`${churchName} church ${churchAddress}`);
    const searchUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${searchQuery}&type=church&key=${apiKey}`;
    
    console.log(`🔍 Searching Places API for: ${churchName}`);
    
    const searchResponse = await fetch(searchUrl);
    const searchData = await searchResponse.json();
    
    if (searchData.status === 'REQUEST_DENIED') {
      console.error('❌ Places API request denied - check API key configuration');
      return null;
    }
    
    if (searchData.status !== 'OK' || searchData.results.length === 0) {
      console.log(`⚠️  No Places API results for: ${churchName}`);
      return null;
    }
    
    const place = searchData.results[0];
    console.log(`✅ Found place: ${place.name}`);
    
    if (place.photos && place.photos.length > 0) {
      // Get the first business photo (usually the best/primary photo)
      const photo = place.photos[0];
      const photoUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photo_reference=${photo.photo_reference}&key=${apiKey}`;
      console.log(`📸 Found business photo for: ${churchName}`);
      return {
        url: photoUrl,
        type: 'business',
        source: 'Google Places'
      };
    }
    
    console.log(`⚠️  No business photos found for: ${churchName}`);
    return null;
    
  } catch (error) {
    console.error(`❌ Error searching Places API for ${churchName}:`, error.message);
    return null;
  }
}

// Get Street View URL as fallback
function getStreetViewUrl(churchAddress, apiKey) {
  return {
    url: `https://maps.googleapis.com/maps/api/streetview?size=800x600&location=${encodeURIComponent(churchAddress)}&key=${apiKey}`,
    type: 'streetview',
    source: 'Google Street View'
  };
}

// Download an image with redirect handling
function downloadImage(photoInfo, filepath) {
  return new Promise((resolve, reject) => {
    console.log(`📥 Downloading ${photoInfo.type} image: ${path.basename(filepath)}`);
    
    const file = fs.createWriteStream(filepath);
    
    function makeRequest(currentUrl, redirectCount = 0) {
      if (redirectCount > 5) {
        reject(new Error('Too many redirects'));
        return;
      }
      
      https.get(currentUrl, (response) => {
        // Handle redirects
        if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
          console.log(`↻ Following redirect ${response.statusCode}`);
          makeRequest(response.headers.location, redirectCount + 1);
          return;
        }
        
        if (response.statusCode !== 200) {
          reject(new Error(`HTTP ${response.statusCode}`));
          return;
        }
        
        response.pipe(file);
        
        file.on('finish', () => {
          file.close();
          const stats = fs.statSync(filepath);
          console.log(`✅ Downloaded: ${path.basename(filepath)} (${Math.round(stats.size/1024)}KB) - ${photoInfo.source}`);
          resolve(photoInfo.type);
        });
        
        file.on('error', (err) => {
          fs.unlink(filepath, () => {});
          reject(err);
        });
      }).on('error', (err) => {
        reject(err);
      });
    }
    
    makeRequest(photoInfo.url);
  });
}

async function downloadBusinessPhotos() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY;
  
  if (!apiKey || apiKey === 'your_api_key_here') {
    console.error('❌ Google Places API key not configured');
    return;
  }

  console.log('🏛️ Fetching church data from Google Sheets...');
  const churches = await fetchChurchData();
  
  if (churches.length === 0) {
    console.error('❌ No church data found');
    return;
  }

  console.log(`📋 Found ${churches.length} churches to process`);
  
  // Ensure directory exists
  const churchesDir = path.join(__dirname, '..', 'public', 'images', 'churches');
  if (!fs.existsSync(churchesDir)) {
    fs.mkdirSync(churchesDir, { recursive: true });
  }

  let businessPhotos = 0;
  let streetViewFallbacks = 0;
  let skippedCount = 0;
  let errorCount = 0;

  for (const church of churches) {
    try {
      const filepath = path.join(churchesDir, church.filename);
      
      // Skip if already exists and is not empty, unless it's very small (likely a failed download)
      if (fs.existsSync(filepath)) {
        const stats = fs.statSync(filepath);
        if (stats.size > 10000) { // Skip if > 10KB (successful download)
          console.log(`⏭️  Skipping ${church.filename} (already exists, ${Math.round(stats.size/1024)}KB)`);
          skippedCount++;
          continue;
        } else {
          console.log(`🔄 Re-downloading ${church.filename} (file too small: ${stats.size} bytes)`);
        }
      }

      console.log(`\n--- Processing: ${church.name} ---`);
      
      // Try to get business photo first
      let photoInfo = await getChurchPhotoUrl(church.name, church.address, apiKey);
      
      // Fallback to Street View if no business photo
      if (!photoInfo) {
        console.log(`📷 Using Street View fallback for: ${church.name}`);
        photoInfo = getStreetViewUrl(church.address, apiKey);
      }
      
      const downloadedType = await downloadImage(photoInfo, filepath);
      
      if (downloadedType === 'business') {
        businessPhotos++;
      } else {
        streetViewFallbacks++;
      }
      
      // Be respectful to the API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
    } catch (error) {
      console.error(`❌ Error processing ${church.name}:`, error.message);
      errorCount++;
    }
  }
  
  console.log(`\n🎉 Download complete!`);
  console.log(`📸 Business photos: ${businessPhotos}`);
  console.log(`📷 Street View fallbacks: ${streetViewFallbacks}`);
  console.log(`⏭️  Skipped existing: ${skippedCount}`);
  console.log(`❌ Errors: ${errorCount}`);
  console.log(`📊 Total churches: ${churches.length}`);
}

if (require.main === module) {
  downloadBusinessPhotos().catch(console.error);
}