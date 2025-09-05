'use client';

import { useState } from 'react';
import Image from 'next/image';
import { getChurchImage } from '@/lib/imagePlaceholders';

interface ChurchImageProps {
  churchName: string;
  churchAddress: string;
  denomination: string;
  altPhoto?: string;
  className?: string;
}

export default function ChurchImage({ churchName, denomination, altPhoto, className = '' }: ChurchImageProps) {
  const [imageError, setImageError] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Get denomination-specific placeholder image
  const placeholderImage = getChurchImage(denomination);
  
  // Priority order for image sources
  const imageSources = [
    // 1. Alt photo from Google Sheet (if provided and valid)
    altPhoto && altPhoto.trim() !== '' && altPhoto.startsWith('http') ? altPhoto : null,
    // 2. Static local image if it exists (check for common church name patterns)
    `/images/churches/${churchName.toLowerCase().replace(/[^a-z0-9]/g, '-')}.jpg`,
    // 3. Denomination-specific placeholder
    placeholderImage.src
  ].filter(Boolean) as string[];
  
  const handleImageError = () => {
    if (currentImageIndex < imageSources.length - 1) {
      setCurrentImageIndex(prev => prev + 1);
    } else {
      setImageError(true);
    }
  };

  const currentImageSrc = imageSources[currentImageIndex] || placeholderImage.src;

  return (
    <div className={`relative ${placeholderImage.aspectRatio} overflow-hidden ${className}`}>
      {imageError ? (
        // Fallback content when all images fail
        <div className="w-full h-full bg-surface/50 flex flex-col items-center justify-center p-4 text-center">
          <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-2">
            <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <div className="text-sm font-medium text-primary/70 mb-1">{churchName}</div>
          <div className="text-xs text-primary/50">{denomination}</div>
        </div>
      ) : (
        <Image
          src={currentImageSrc}
          alt={`${churchName} - ${denomination} church in Albion`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover"
          loading="lazy"
          onError={handleImageError}
          quality={75}
        />
      )}
    </div>
  );
}