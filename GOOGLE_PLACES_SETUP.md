# Google Places API Setup Guide

## Overview
The AMA website uses Google Places API to automatically fetch church images based on their name and address. This provides real photos of church buildings instead of generic placeholders.

## Setup Steps

### 1. Get a Google Cloud Account
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable billing (required for APIs, but includes free tier)

### 2. Enable Required APIs
In your Google Cloud project, enable these APIs:
1. **Places API** - For fetching place information
2. **Maps Static API** - For static map images
3. **Street View Static API** - For street view images of churches

To enable APIs:
- Go to "APIs & Services" > "Library"
- Search for each API and click "Enable"

### 3. Create API Key
1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "API Key"
3. Copy the generated key

### 4. Restrict API Key (Important!)
1. Click on your API key in the credentials list
2. Under "Application restrictions":
   - Choose "HTTP referrers"
   - Add your domains:
     - `https://yourdomain.com/*`
     - `http://localhost:3000/*` (for development)
3. Under "API restrictions":
   - Select "Restrict key"
   - Choose only the APIs you enabled above

### 5. Add Key to Your Project

#### For Local Development:
1. Copy the `.env.local` file content
2. Replace `your_api_key_here` with your actual API key
3. Restart your development server

#### For Vercel Deployment:
1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add: `NEXT_PUBLIC_GOOGLE_PLACES_API_KEY` with your API key value

## How It Works

The site attempts to load church images in this order:
1. **Google Places Photos**: Actual photos from the church's Google Maps profile (uploaded by users)
2. **Google Street View**: Street-level view of the church address (if no Places photos exist)
3. **Placeholder Images**: Falls back to denomination-based stock photos if both fail

## Costs
- Google provides $200 free credit monthly
- Street View Static API: $7 per 1,000 requests
- Places API: $17 per 1,000 requests
- For a church directory, costs should remain within free tier

## Troubleshooting

### Images not loading:
1. Check browser console for API errors
2. Verify API key is set correctly
3. Ensure APIs are enabled in Google Cloud Console
4. Check API key restrictions match your domain

### "API key not valid" error:
- API key might be restricted incorrectly
- Try removing restrictions temporarily to test

### No Street View available:
- Some addresses might not have Street View coverage
- Site automatically falls back to placeholder images