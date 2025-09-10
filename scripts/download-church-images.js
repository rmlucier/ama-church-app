#!/usr/bin/env node

/**
 * Script to download church images from Google Places API and save them locally
 * This creates a one-time download of consistent images that can be replaced with custom ones later
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

// Load environment variables from .env.local if it exists
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

// Church data from CSV
const churches = [
  {
    name: 'New Hope Church',
    denomination: 'Assemblies of God',
    address: '123 Faith Street Albion MI',
    filename: 'new-hope-church.jpg'
  },
  {
    name: 'Grace Baptist Church',
    denomination: 'Baptist',
    address: '456 Grace Rd Albion MI',
    filename: 'grace-baptist-church.jpg'
  },
  {
    name: 'Unity Fellowship',
    denomination: 'Non-denominational',
    address: '789 Unity Ave Albion MI',
    filename: 'unity-fellowship.jpg'
  },
  {
    name: 'St. Mary\'s Catholic Church',
    denomination: 'Catholic',
    address: '321 Church St Albion MI',
    filename: 'st-marys-catholic-church.jpg'
  },
  {
    name: 'First Methodist Church',
    denomination: 'Methodist',
    address: '654 Methodist Dr Albion MI',
    filename: 'first-methodist-church.jpg'
  }
];

// Ensure directories exist
const publicDir = path.join(__dirname, '..', 'public');
const imagesDir = path.join(publicDir, 'images');
const churchesDir = path.join(imagesDir, 'churches');
const downloadedDir = path.join(churchesDir, 'downloaded');

[publicDir, imagesDir, churchesDir, downloadedDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
});

// Function to search for a place and get photo URL
async function getChurchPhotoUrl(churchName, churchAddress) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY;
  
  if (!apiKey || apiKey === 'your_api_key_here') {
    throw new Error('Google Places API key not configured');
  }

  // Search for the place
  const searchQuery = encodeURIComponent(`${churchName} church ${churchAddress}`);
  const searchUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${searchQuery}&type=church&key=${apiKey}`;
  
  console.log(`Searching for: ${churchName}`);
  
  try {
    const searchResponse = await fetch(searchUrl);
    const searchData = await searchResponse.json();
    
    if (searchData.status !== 'OK' || searchData.results.length === 0) {
      console.log(`❌ No results found for: ${churchName}`);
      // Fallback to Street View image
      const streetViewUrl = `https://maps.googleapis.com/maps/api/streetview?size=800x600&location=${encodeURIComponent(churchAddress)}&key=${apiKey}`;
      console.log(`📷 Using Street View for: ${churchName}`);
      return streetViewUrl;
    }
    
    const place = searchData.results[0];
    
    if (!place.photos || place.photos.length === 0) {
      console.log(`❌ No photos found for: ${churchName}`);
      // Fallback to Street View image
      const streetViewUrl = `https://maps.googleapis.com/maps/api/streetview?size=800x600&location=${encodeURIComponent(churchAddress)}&key=${apiKey}`;
      console.log(`📷 Using Street View for: ${churchName}`);
      return streetViewUrl;
    }
    
    // Get the first photo
    const photo = place.photos[0];
    const photoUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photo_reference=${photo.photo_reference}&key=${apiKey}`;
    
    console.log(`✅ Found photo for: ${churchName}`);
    return photoUrl;
  } catch (error) {
    console.error(`❌ Error searching for ${churchName}:`, error.message);
    // Fallback to Street View image
    const streetViewUrl = `https://maps.googleapis.com/maps/api/streetview?size=800x600&location=${encodeURIComponent(churchAddress)}&key=${apiKey}`;
    console.log(`📷 Using Street View fallback for: ${churchName}`);
    return streetViewUrl;
  }
}

// Function to download an image using fetch (better for API redirects)
async function downloadImage(url, filepath) {
  console.log(`📥 Downloading image to: ${filepath}`);
  
  try {
    // Use dynamic import for fetch in Node.js
    const fetch = (await import('node-fetch')).default;
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const buffer = await response.buffer();
    fs.writeFileSync(filepath, buffer);
    
    console.log(`✅ Downloaded: ${path.basename(filepath)} (${buffer.length} bytes)`);
  } catch (error) {
    console.error(`❌ Download failed: ${error.message}`);
    throw error;
  }
}

// Main function to download all church images
async function downloadAllChurchImages() {
  console.log('🏛️  Starting church image download...\n');
  
  for (const church of churches) {
    try {
      console.log(`\n--- Processing: ${church.name} ---`);
      
      // Get photo URL
      const photoUrl = await getChurchPhotoUrl(church.name, church.address);
      
      // Download to both locations
      const downloadedPath = path.join(downloadedDir, church.filename);
      const churchesPath = path.join(churchesDir, church.filename);
      
      // Download to downloaded folder
      await downloadImage(photoUrl, downloadedPath);
      
      // Copy to main churches folder
      fs.copyFileSync(downloadedPath, churchesPath);
      console.log(`📋 Copied to main folder: ${church.filename}`);
      
      // Add a small delay to be respectful to the API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
    } catch (error) {
      console.error(`❌ Error processing ${church.name}:`, error.message);
    }
  }
  
  console.log('\n🎉 Church image download complete!');
  console.log('\n📁 Images saved to:');
  console.log(`   - /public/images/churches/ (for immediate use)`);
  console.log(`   - /public/images/churches/downloaded/ (backup originals)`);
  console.log('\n💡 You can now replace any image in the churches folder with custom photos');
}

// Check if this is run directly
if (require.main === module) {
  downloadAllChurchImages().catch(console.error);
}

module.exports = { downloadAllChurchImages };