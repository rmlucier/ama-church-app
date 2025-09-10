# Church Image Management Scripts

This folder contains scripts for managing church images in the AMA website.

## Scripts Overview

### `download-business-photos.js` - Current Production Script ⭐
**Purpose**: Downloads Google Business photos (prioritized) with Street View fallback
**Usage**: `node scripts/download-business-photos.js`
**What it does**:
- **Priority 1**: Searches Google Places API for official business photos
- **Fallback**: Uses Google Street View if no business photos available
- Downloads images for all churches from live Google Sheets data
- Handles redirects properly for Google Photos URLs
- Provides detailed reporting on photo sources

### `simple-download.js` - Legacy Script
**Purpose**: Downloads Street View images only
**Status**: Superseded by `download-business-photos.js`

### `download-church-images.js` - Advanced Script (Backup)
**Purpose**: More complex script that tries Google Places photos first
**Usage**: `node scripts/download-church-images.js`
**Features**:
- Attempts to get actual church photos from Google Places
- Falls back to Street View if no photos available
- Handles redirects and API complexities

## Image Management Workflow

### Initial Setup (One-time)
1. Run the download script: `node scripts/download-business-photos.js`
2. This downloads the best available photos for all churches:
   - Google Business photos (when available)
   - Google Street View (fallback)
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
- **Best Quality**: Prioritizes official business photos over street views
- **Automatic Fallback**: Uses Street View when business photos unavailable
- **Performance**: Images are served locally (fast loading)
- **Consistency**: All churches have professional-looking images
- **Flexibility**: Easy to replace with custom photos
- **Reliability**: No API calls during page load

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