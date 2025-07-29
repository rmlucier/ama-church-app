'use client';

import { useState, useEffect } from 'react';
import { getChurchImage } from '@/lib/imagePlaceholders';
import { getChurchPhotoClient, getStreetViewImage } from '@/lib/googlePlaces';

interface ChurchImageProps {
  churchName: string;
  churchAddress: string;
  denomination: string;
  className?: string;
}

export default function ChurchImage({ churchName, churchAddress, denomination, className = '' }: ChurchImageProps) {
  const [imageSrc, setImageSrc] = useState<string>('');
  const [imageError, setImageError] = useState(false);
  const [loadingPhoto, setLoadingPhoto] = useState(true);
  
  // Get placeholder image
  const placeholderImage = getChurchImage(denomination);
  
  useEffect(() => {
    async function loadChurchPhoto() {
      setLoadingPhoto(true);
      
      try {
        // First, try to get actual place photos
        const placePhoto = await getChurchPhotoClient(churchName, churchAddress);
        
        if (placePhoto) {
          setImageSrc(placePhoto);
        } else {
          // Fallback to Street View
          const streetViewUrl = getStreetViewImage(churchAddress);
          if (streetViewUrl) {
            setImageSrc(streetViewUrl);
          } else {
            setImageSrc(placeholderImage.src);
          }
        }
      } catch (error) {
        console.error('Error loading church photo:', error);
        // Fallback to placeholder
        setImageSrc(placeholderImage.src);
      } finally {
        setLoadingPhoto(false);
      }
    }
    
    loadChurchPhoto();
  }, [churchName, churchAddress, placeholderImage.src]);
  
  const handleImageError = () => {
    if (!imageError) {
      setImageError(true);
      // Try Street View as fallback
      const streetViewUrl = getStreetViewImage(churchAddress);
      if (streetViewUrl && imageSrc !== streetViewUrl) {
        setImageSrc(streetViewUrl);
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