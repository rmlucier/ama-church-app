'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const images = [
  'https://source.unsplash.com/800x400/?church,stained-glass',
  'https://source.unsplash.com/800x400/?worship,community',
  'https://source.unsplash.com/800x400/?helping,volunteer'
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-pink-100 w-full py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title and Subheading */}
        <div className="mb-12">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-800">
            Uniting Churches. Serving Albion.
          </h1>
          <p className="text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            The Albion Ministerial Association exists to bring together local churches to share the love of Christ and serve our community.
          </p>
        </div>

        {/* Image Slider */}
        <div className="relative mb-12 max-w-4xl mx-auto">
          <div className="relative h-64 lg:h-80 rounded-xl overflow-hidden shadow-2xl">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={image}
                  alt={`Hero image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              </div>
            ))}
          </div>

          {/* Slider Indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentImageIndex 
                    ? 'bg-pink-600' 
                    : 'bg-gray-300 hover:bg-gray-400'
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
            className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Find a Church
          </Link>
        </div>
      </div>
    </section>
  );
} 