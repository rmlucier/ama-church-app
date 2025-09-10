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
    // 2. Downloaded images (consistent Google Street View/Places images)
    `/images/churches/${churchName.toLowerCase().replace(/[^a-z0-9]/g, '-')}.jpg`,
    `/images/churches/${churchName.toLowerCase().replace(/[^a-z0-9]/g, '-')}.jpeg`,
    `/images/churches/${churchName.toLowerCase().replace(/[^a-z0-9]/g, '-')}.png`,
    // 3. Alternative naming patterns for custom images
    `/images/churches/${churchName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}.jpg`,
    // 4. Denomination-specific SVG placeholder (last resort)
    placeholderImage.src
  ].filter(Boolean) as string[];
  
  const handleImageError = () => {
    console.log(`Image failed to load: ${imageSources[currentImageIndex]} for ${churchName}`);
    if (currentImageIndex < imageSources.length - 1) {
      setCurrentImageIndex(prev => prev + 1);
    } else {
      console.log(`All image sources failed for ${churchName}, showing fallback`);
      setImageError(true);
    }
  };

  const currentImageSrc = imageSources[currentImageIndex] || placeholderImage.src;

  return (
    <div className={`relative ${placeholderImage.aspectRatio} overflow-hidden ${className}`}>
      {imageError ? (
        // Fallback content when all images fail - enhanced visual design
        <div className="w-full h-full bg-gradient-to-br from-[#dde5b6] to-[#adc178] flex flex-col items-center justify-center p-4 text-center">
          <div className="w-16 h-16 bg-[#6c584c]/20 rounded-full flex items-center justify-center mb-3 shadow-sm">
            <svg className="w-8 h-8 text-[#6c584c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <div className="text-sm font-semibold text-[#6c584c] mb-1 leading-tight">{churchName}</div>
          <div className="text-xs text-[#6c584c]/70 font-medium">{denomination}</div>
          <div className="text-xs text-[#6c584c]/50 mt-1">Photo Coming Soon</div>
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