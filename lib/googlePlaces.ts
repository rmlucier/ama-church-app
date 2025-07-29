// Google Places API integration for fetching church photos

interface PlacePhoto {
  photo_reference: string;
  height: number;
  width: number;
}

interface PlaceResult {
  place_id: string;
  name: string;
  photos?: PlacePhoto[];
  formatted_address?: string;
}

interface PlaceSearchResponse {
  results: PlaceResult[];
  status: string;
}

// Cache to store fetched images
const imageCache = new Map<string, string>();

export async function getChurchPhoto(churchName: string, churchAddress: string): Promise<string | null> {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY;
  
  if (!apiKey || apiKey === 'your_api_key_here') {
    console.warn('Google Places API key not configured');
    return null;
  }

  // Create a cache key
  const cacheKey = `${churchName}-${churchAddress}`;
  
  // Check cache first
  if (imageCache.has(cacheKey)) {
    return imageCache.get(cacheKey)!;
  }

  try {
    // Search for the place
    const searchQuery = encodeURIComponent(`${churchName} ${churchAddress}`);
    const searchUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${searchQuery}&type=church&key=${apiKey}`;
    
    const searchResponse = await fetch(searchUrl);
    const searchData: PlaceSearchResponse = await searchResponse.json();
    
    if (searchData.status !== 'OK' || searchData.results.length === 0) {
      console.log(`No results found for: ${churchName}`);
      return null;
    }
    
    const place = searchData.results[0];
    
    if (!place.photos || place.photos.length === 0) {
      console.log(`No photos found for: ${churchName}`);
      return null;
    }
    
    // Get the first photo
    const photo = place.photos[0];
    const photoUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photo_reference=${photo.photo_reference}&key=${apiKey}`;
    
    // Cache the result
    imageCache.set(cacheKey, photoUrl);
    
    return photoUrl;
  } catch (error) {
    console.error(`Error fetching photo for ${churchName}:`, error);
    return null;
  }
}

// Client-side version using Place Photos
export async function getChurchPhotoClient(churchName: string, churchAddress: string): Promise<string | null> {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY;
  
  if (!apiKey || apiKey === 'your_api_key_here') {
    console.warn('Google Places API key not configured');
    return null;
  }

  // Create a cache key
  const cacheKey = `${churchName}-${churchAddress}`;
  
  // Check cache first
  if (imageCache.has(cacheKey)) {
    return imageCache.get(cacheKey)!;
  }

  try {
    // Use a proxy endpoint to avoid CORS issues
    const response = await fetch('/api/places/photo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        churchName,
        churchAddress,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to fetch photo');
    }

    const data = await response.json();
    
    if (data.photoUrl) {
      // Cache the result
      imageCache.set(cacheKey, data.photoUrl);
      return data.photoUrl;
    }
    
    return null;
  } catch (error) {
    console.error(`Error fetching photo for ${churchName}:`, error);
    return null;
  }
}

// Function to get Street View image as an alternative
export function getStreetViewImage(address: string): string {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY;
  
  if (!apiKey || apiKey === 'your_api_key_here') {
    return '';
  }
  
  const location = encodeURIComponent(address);
  return `https://maps.googleapis.com/maps/api/streetview?size=800x600&location=${location}&key=${apiKey}`;
}