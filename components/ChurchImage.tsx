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
        // First, try to get actual place photos
        const placePhoto = await getChurchPhotoClient(churchName, churchAddress);
        
        if (placePhoto) {
          setImageSrc(placePhoto);
        } else if (altPhoto && altPhoto.trim() !== '') {
          // Check for alt photo from Google Sheet
          setImageSrc(altPhoto);
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
        // Check for alt photo before falling back to placeholder
        if (altPhoto && altPhoto.trim() !== '') {
          setImageSrc(altPhoto);
        } else {
          setImageSrc(placeholderImage.src);
        }
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