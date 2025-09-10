#!/usr/bin/env node

/**
 * Download images for all real churches from Google Sheets
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

// Download an image
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    console.log(`📥 Downloading: ${path.basename(filepath)}`);
    
    const file = fs.createWriteStream(filepath);
    
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`HTTP ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        const stats = fs.statSync(filepath);
        console.log(`✅ Downloaded: ${path.basename(filepath)} (${Math.round(stats.size/1024)}KB)`);
        resolve();
      });
      
      file.on('error', (err) => {
        fs.unlink(filepath, () => {});
        reject(err);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function downloadAllChurches() {
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

  console.log(`📋 Found ${churches.length} churches to download`);
  
  // Ensure directory exists
  const churchesDir = path.join(__dirname, '..', 'public', 'images', 'churches');
  if (!fs.existsSync(churchesDir)) {
    fs.mkdirSync(churchesDir, { recursive: true });
  }

  let downloadedCount = 0;
  let skippedCount = 0;

  for (const church of churches) {
    try {
      const filepath = path.join(churchesDir, church.filename);
      
      // Skip if already exists and is not empty
      if (fs.existsSync(filepath)) {
        const stats = fs.statSync(filepath);
        if (stats.size > 1000) {
          console.log(`⏭️  Skipping ${church.filename} (already exists)`);
          skippedCount++;
          continue;
        }
      }

      console.log(`--- Processing: ${church.name} ---`);
      
      // Create Street View URL (using address from Google Sheets)
      const streetViewUrl = `https://maps.googleapis.com/maps/api/streetview?size=800x600&location=${encodeURIComponent(church.address)}&key=${apiKey}`;
      
      await downloadImage(streetViewUrl, filepath);
      downloadedCount++;
      
      // Be nice to the API
      await new Promise(resolve => setTimeout(resolve, 500));
      
    } catch (error) {
      console.error(`❌ Error processing ${church.name}:`, error.message);
    }
  }
  
  console.log(`\n🎉 Download complete!`);
  console.log(`📥 Downloaded: ${downloadedCount} new images`);
  console.log(`⏭️  Skipped: ${skippedCount} existing images`);
  console.log(`📊 Total churches: ${churches.length}`);
}

if (require.main === module) {
  downloadAllChurches().catch(console.error);
}