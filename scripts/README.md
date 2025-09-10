# Church Image Management Scripts

This folder contains scripts for managing church images in the AMA website.

## Scripts Overview

### `simple-download.js` - Current Production Script
**Purpose**: Downloads consistent Street View images for all churches
**Usage**: `node scripts/simple-download.js`
**What it does**:
- Downloads Google Street View images for all 5 churches
- Saves them with standardized filenames (e.g., `new-hope-church.jpg`)
- Skips churches that already have images
- Creates consistent, professional-looking church photos

### `download-church-images.js` - Advanced Script (Backup)
**Purpose**: More complex script that tries Google Places photos first
**Usage**: `node scripts/download-church-images.js`
**Features**:
- Attempts to get actual church photos from Google Places
- Falls back to Street View if no photos available
- Handles redirects and API complexities

## Image Management Workflow

### Initial Setup (One-time)
1. Run the download script: `node scripts/simple-download.js`
2. This creates consistent images for all churches
3. Images are saved to `/public/images/churches/`

### Custom Image Updates
To replace downloaded images with custom church photos:

1. **Add your custom image** to `/public/images/churches/`
2. **Use the same filename** as the original (e.g., `grace-baptist-church.jpg`)
3. **Recommended specs**: 800x600px, JPG format, under 200KB

### File Naming Convention
Churches use these exact filenames:
- `new-hope-church.jpg` - New Hope Church
- `grace-baptist-church.jpg` - Grace Baptist Church  
- `unity-fellowship.jpg` - Unity Fellowship
- `st-marys-catholic-church.jpg` - St. Mary's Catholic Church
- `first-methodist-church.jpg` - First Methodist Church

## How It Works

### ChurchImage Component Priority
1. **Alt Photo URL** - From Google Sheets (if provided)
2. **Local Images** - Downloaded or custom images in `/churches/` folder
3. **SVG Placeholders** - Denomination-specific fallbacks

### Benefits of This System
- **Consistency**: All churches have professional-looking images
- **Performance**: Images are served locally (fast loading)
- **Flexibility**: Easy to replace with custom photos
- **Reliability**: No API calls during page load
- **Backup**: Original downloads preserved in `/downloaded/` folder

## Environment Requirements

The scripts require a Google Places API key in `.env.local`:
```
NEXT_PUBLIC_GOOGLE_PLACES_API_KEY=your_api_key_here
```

## Future Updates

To update church images in the future:
1. Edit church data in `/public/data/churches.csv`
2. Update the church arrays in the scripts
3. Run `simple-download.js` to get images for new churches