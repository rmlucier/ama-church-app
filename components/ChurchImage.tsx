'use client';

import { useState, useEffect } from 'react';
import { getChurchImage } from '@/lib/imagePlaceholders';
import { getStreetViewImage } from '@/lib/googlePlaces';

interface ChurchImageProps {
  churchName: string;
  churchAddress: string;
  denomination: string;
  className?: string;
}

export default function ChurchImage({ churchName, churchAddress, denomination, className = '' }: ChurchImageProps) {
  const [imageSrc, setImageSrc] = useState<string>('');
  const [imageError, setImageError] = useState(false);
  
  // Get placeholder image
  const placeholderImage = getChurchImage(denomination);
  
  useEffect(() => {
    // Start with Street View image
    const streetViewUrl = getStreetViewImage(churchAddress);
    if (streetViewUrl) {
      setImageSrc(streetViewUrl);
    } else {
      setImageSrc(placeholderImage.src);
    }
  }, [churchAddress, placeholderImage.src]);
  
  const handleImageError = () => {
    if (!imageError) {
      setImageError(true);
      // Fallback to placeholder image
      setImageSrc(placeholderImage.src);
    }
  };
  
  return (
    <div className={`relative ${placeholderImage.aspectRatio} overflow-hidden ${className}`}>
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