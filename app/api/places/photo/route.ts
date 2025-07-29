import { NextRequest, NextResponse } from 'next/server';

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

export async function POST(request: NextRequest) {
  try {
    const { churchName, churchAddress } = await request.json();
    
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY;
    
    if (!apiKey || apiKey === 'your_api_key_here') {
      return NextResponse.json({ error: 'API key not configured' }, { status: 500 });
    }

    // Search for the place using Places API Text Search
    const searchQuery = encodeURIComponent(`${churchName} church ${churchAddress}`);
    const searchUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${searchQuery}&type=church&key=${apiKey}`;
    
    const searchResponse = await fetch(searchUrl);
    const searchData: PlaceSearchResponse = await searchResponse.json();
    
    if (searchData.status === 'REQUEST_DENIED') {
      console.error('Places API error:', searchData);
      return NextResponse.json({ error: 'API request denied - check API key configuration' }, { status: 403 });
    }
    
    if (searchData.status !== 'OK' || searchData.results.length === 0) {
      console.log(`No results found for: ${churchName}`);
      return NextResponse.json({ photoUrl: null });
    }
    
    // Get the first result
    const place = searchData.results[0];
    
    if (!place.photos || place.photos.length === 0) {
      console.log(`No photos found for: ${churchName}`);
      return NextResponse.json({ photoUrl: null });
    }
    
    // Get the first photo reference
    const photo = place.photos[0];
    
    // Construct the photo URL
    const photoUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photo_reference=${photo.photo_reference}&key=${apiKey}`;
    
    return NextResponse.json({ photoUrl });
  } catch (error) {
    console.error('Error in places API route:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}