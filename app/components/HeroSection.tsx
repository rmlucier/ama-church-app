'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Hero images with enhanced metadata
const heroImages = [
  {
    src: '/images/hero/ama-3-of-11.jpeg',
    alt: 'Albion Ministerial Association National Day of Prayer event - Community members gathered in prayer',
    priority: true
  },
  {
    src: '/images/hero/ama-10-of-11.jpeg', 
    alt: 'AMA community gathering and fellowship - Churches united in service',
    priority: false
  },
  {
    src: '/images/hero/ama-11-of-11.jpeg',
    alt: 'AMA leadership and community service - Faith leaders working together',
    priority: false
  }
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    // Preload all images
    const preloadImages = async () => {
      const imagePromises = heroImages.map((image) => {
        return new Promise((resolve, reject) => {
          const img = new window.Image();
          img.onload = () => resolve(img);
          img.onerror = reject;
          img.src = image.src;
        });
      });

      try {
        await Promise.all(imagePromises);
        setImagesLoaded(true);
      } catch (error) {
        console.error('Failed to preload some hero images:', error);
        setImagesLoaded(true); // Still show the hero even if some images fail
      }
    };

    preloadImages();
  }, []);

  useEffect(() => {
    if (!imagesLoaded) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [imagesLoaded]);

  return (
    <section className="relative bg-surface w-full py-12 lg:py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #6c584c 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Column */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="mb-8">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-accent/10 text-accent text-sm font-semibold rounded-full mb-6">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Established Faith Community
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-heading mb-6 leading-tight">
                Uniting Churches.{' '}
                <span className="text-accent">Serving Albion.</span>
              </h1>

              {/* Subheading */}
              <p className="text-lg lg:text-xl text-primary/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
                Supporting senior leaders and faith-based organizations in serving the community, advancing the message of Christ, and fulfilling the Great Commission through unity and collaboration.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/churches"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white text-lg font-semibold rounded-lg hover:bg-accent/90 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-transform duration-200"
              >
                Find a Church
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary text-lg font-semibold rounded-lg border-2 border-primary/10 hover:border-accent hover:text-accent transition-colors shadow-md hover:shadow-lg"
              >
                Learn More
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-accent">25+</div>
                <div className="text-sm text-primary/70">Member Churches</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-accent">50+</div>
                <div className="text-sm text-primary/70">Years of Service</div>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                {imagesLoaded ? (
                  heroImages.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-1000 ${
                        index === currentImageIndex 
                          ? 'opacity-100 scale-100' 
                          : 'opacity-0 scale-105'
                      }`}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                        priority={image.priority}
                        quality={90}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                    </div>
                  ))
                ) : (
                  <div className="absolute inset-0 bg-surface/50 animate-pulse flex items-center justify-center">
                    <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}

                {/* Image Overlay Content */}
                {imagesLoaded && (
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                      <p className="text-primary text-sm font-medium">
                        {heroImages[currentImageIndex]?.alt}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Slider Controls */}
              {imagesLoaded && (
                <div className="flex justify-center mt-6 space-x-3">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentImageIndex 
                          ? 'bg-accent scale-125 shadow-lg' 
                          : 'bg-secondary hover:bg-primary hover:scale-110'
                      }`}
                      aria-label={`View image ${index + 1}`}
                    />
                  ))}
                </div>
              )}

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 