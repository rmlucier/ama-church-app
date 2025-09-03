'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// Direct image paths for reliability
const heroImages = [
  {
    src: '/images/hero/ama-3-of-11.jpeg',
    alt: 'Albion Ministerial Association National Day of Prayer event'
  },
  {
    src: '/images/hero/ama-10-of-11.jpeg', 
    alt: 'AMA community gathering and fellowship'
  },
  {
    src: '/images/hero/ama-11-of-11.jpeg',
    alt: 'AMA leadership and community service'
  }
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-surface w-full py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title and Subheading */}
        <div className="mb-12">
          <h1 className="text-4xl lg:text-6xl text-heading mb-6">
            Uniting Churches. Serving Albion.
          </h1>
          <p className="text-lg lg:text-xl text-primary max-w-3xl mx-auto leading-relaxed">
            Supporting senior leaders and faith-based organizations in serving the community, advancing the message of Christ, and fulfilling the Great Commission through unity and collaboration.
          </p>
        </div>

        {/* Image Slider */}
        <div className="relative mb-12 max-w-4xl mx-auto">
          <div className="relative aspect-[2/1] rounded-xl overflow-hidden shadow-2xl">
            {heroImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              </div>
            ))}
          </div>

          {/* Slider Indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentImageIndex 
                    ? 'bg-accent' 
                    : 'bg-secondary hover:bg-primary'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mb-8">
          <Link
            href="/churches"
            className="btn-primary px-8 py-4 text-lg"
          >
            Find a Church
          </Link>
        </div>
      </div>
    </section>
  );
} 