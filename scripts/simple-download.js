#!/usr/bin/env node

/**
 * Simple script to download Street View images for churches
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
    address: '123 Faith Street Albion MI',
    filename: 'new-hope-church.jpg'
  },
  {
    name: 'Grace Baptist Church',
    address: '456 Grace Rd Albion MI',
    filename: 'grace-baptist-church.jpg'
  },
  {
    name: 'Unity Fellowship',
    address: '789 Unity Ave Albion MI',
    filename: 'unity-fellowship.jpg'
  },
  {
    name: 'St. Mary\'s Catholic Church',
    address: '321 Church St Albion MI',
    filename: 'st-marys-catholic-church.jpg'
  },
  {
    name: 'First Methodist Church',
    address: '654 Methodist Dr Albion MI',
    filename: 'first-methodist-church.jpg'
  }
];

// Function to download an image using https
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

async function downloadChurchImages() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY;
  
  if (!apiKey || apiKey === 'your_api_key_here') {
    console.error('❌ Google Places API key not configured');
    return;
  }

  console.log('🏛️ Downloading Street View images for churches...\n');

  for (const church of churches) {
    try {
      // Skip if already exists and is not empty
      const filepath = path.join(__dirname, '..', 'public', 'images', 'churches', church.filename);
      if (fs.existsSync(filepath)) {
        const stats = fs.statSync(filepath);
        if (stats.size > 1000) { // Skip if file exists and is > 1KB
          console.log(`⏭️  Skipping ${church.filename} (already exists)`);
          continue;
        }
      }

      console.log(`--- Processing: ${church.name} ---`);
      
      // Create Street View URL
      const streetViewUrl = `https://maps.googleapis.com/maps/api/streetview?size=800x600&location=${encodeURIComponent(church.address)}&key=${apiKey}`;
      
      await downloadImage(streetViewUrl, filepath);
      
      // Small delay to be nice to the API
      await new Promise(resolve => setTimeout(resolve, 500));
      
    } catch (error) {
      console.error(`❌ Error processing ${church.name}:`, error.message);
    }
  }
  
  console.log('\n🎉 Download complete!');
}

if (require.main === module) {
  downloadChurchImages().catch(console.error);
}