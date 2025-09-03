'use client';

import { useState, useEffect } from 'react';
import { getChurchImage } from '@/lib/imagePlaceholders';
import { getChurchPhotoClient, getStreetViewImage } from '@/lib/googlePlaces';

interface ChurchImageProps {
  churchName: string;
  churchAddress: string;
  denomination: string;
  altPhoto?: string;
  className?: string;
}

export default function ChurchImage({ churchName, churchAddress, denomination, altPhoto, className = '' }: ChurchImageProps) {
  const [imageSrc, setImageSrc] = useState<string>('');
  const [imageError, setImageError] = useState(false);
  const [loadingPhoto, setLoadingPhoto] = useState(true);
  
  // Get placeholder image
  const placeholderImage = getChurchImage(denomination);
  
  useEffect(() => {
    async function loadChurchPhoto() {
      setLoadingPhoto(true);
      
      try {
        let imageUrl = null;
        
        // First, check for alt photo from Google Sheet (fastest option)
        if (altPhoto && altPhoto.trim() !== '') {
          imageUrl = altPhoto;
        } else {
          // Try to get actual place photos (slower, may fail)
          try {
            const placePhoto = await getChurchPhotoClient(churchName, churchAddress);
            if (placePhoto) {
              imageUrl = placePhoto;
            }
          } catch (apiError) {
            console.warn(`Places API failed for ${churchName}:`, apiError);
          }
          
          // If no place photo, fallback to Street View
          if (!imageUrl && churchAddress) {
            const streetViewUrl = getStreetViewImage(churchAddress);
            if (streetViewUrl) {
              imageUrl = streetViewUrl;
            }
          }
        }
        
        // Set the image or fallback to placeholder
        setImageSrc(imageUrl || placeholderImage.src);
        
      } catch (error) {
        console.error('Error loading church photo:', error);
        // Final fallback to alt photo or placeholder
        const fallbackUrl = (altPhoto && altPhoto.trim() !== '') ? altPhoto : placeholderImage.src;
        setImageSrc(fallbackUrl);
      } finally {
        setLoadingPhoto(false);
      }
    }
    
    loadChurchPhoto();
  }, [churchName, churchAddress, altPhoto, placeholderImage.src]);
  
  const handleImageError = () => {
    if (!imageError) {
      setImageError(true);
      // Check if we have an alt photo and haven't tried it yet
      if (altPhoto && altPhoto.trim() !== '' && imageSrc !== altPhoto) {
        setImageSrc(altPhoto);
      } else if (imageSrc !== getStreetViewImage(churchAddress)) {
        // Try Street View as fallback
        const streetViewUrl = getStreetViewImage(churchAddress);
        if (streetViewUrl) {
          setImageSrc(streetViewUrl);
        } else {
          // Final fallback to placeholder
          setImageSrc(placeholderImage.src);
        }
      } else {
        // Final fallback to placeholder
        setImageSrc(placeholderImage.src);
      }
    }
  };
  
  return (
    <div className={`relative ${placeholderImage.aspectRatio} overflow-hidden ${className}`}>
      {loadingPhoto && (
        <div className="absolute inset-0 bg-surface animate-pulse" />
      )}
      <img
        src={imageSrc}
        alt={`${churchName} - ${denomination} church in Albion`}
        className="w-full h-full object-cover"
        loading="lazy"
        onError={handleImageError}
      />
    </div>
  );
}