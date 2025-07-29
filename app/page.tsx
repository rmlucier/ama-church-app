'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import HeroSection from './components/HeroSection';
import ChurchImage from '@/components/ChurchImage';
import { fetchCsv } from '@/lib/fetchCsv';

const SHEET_URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vSFvwE_5w0OCJ1qh5U6KXfVcxGVspcT4jADr4waYdEfGmAZwdxPEVQ4Yw6TOTreHWmuH-V8yjs-wZ23/pub?gid=0&single=true&output=csv';

type Church = {
  Name: string;
  Denomination: string;
  Address: string;
  'Service Times': string;
  Pastor: string;
  Website?: string;
  Email?: string;
  Phone?: string;
  Description?: string;
  'AMA Member?': string;
  'Alt Photo'?: string;
};

export default function Home() {
  const [churches, setChurches] = useState<Church[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchCsv<Church>(SHEET_URL);
        // Filter only AMA members for homepage
        const amaMembers = data.filter(church => church['AMA Member?']?.toUpperCase() === 'YES');
        setChurches(amaMembers.slice(0, 6)); // Show first 6 AMA members
      } catch {
        // If loading fails, don't show error on homepage
        setChurches([]);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Mission Section */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* Icon */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-surface rounded-full mb-6">
              <svg 
                className="w-8 h-8 text-accent" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" 
                />
              </svg>
            </div>
          </div>
          
          {/* Title */}
          <h2 className="text-3xl lg:text-4xl text-heading mb-6">
            Our Mission
          </h2>
          
          {/* Subtext */}
          <p className="text-lg lg:text-xl text-primary leading-relaxed max-w-3xl mx-auto">
            The Albion Ministerial Association exists to foster unity, shared purpose, and collaboration among churches. We support senior leaders and faith-based organizations in serving the community, advancing the message of Christ, fulfilling the Great Commission, and encouraging mutual support in both faith and action.
          </p>
        </div>
      </section>

      {/* Churches United in Purpose Section */}
      <section className="bg-surface py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl text-heading mb-4">
              Churches United in Purpose
            </h2>
            <p className="text-lg lg:text-xl text-primary max-w-3xl mx-auto">
              Dozens of churches working side by side for the good of Albion.
            </p>
          </div>

          {/* Church Cards Grid */}
          {loading ? (
            <div className="text-center py-12">
              <p className="text-primary">Loading member churches...</p>
            </div>
          ) : churches.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {churches.map((church, index) => {
                return (
                  <div 
                    key={index}
                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border-2 border-accent"
                  >
                    {/* AMA Member Badge */}
                    <div className="bg-accent text-white text-xs font-semibold px-3 py-1 text-center">
                      AMA MEMBER
                    </div>
                    {/* Church Image */}
                    <ChurchImage
                      churchName={church.Name}
                      churchAddress={church.Address}
                      denomination={church.Denomination}
                      altPhoto={church['Alt Photo']}
                    />
                    
                    {/* Church Info */}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-primary mb-2">
                        {church.Name}
                      </h3>
                      <p className="text-accent font-medium mb-3">
                        {church.Denomination}
                      </p>
                      <p className="text-primary text-sm">
                        {church.Address}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-primary">Member churches information coming soon.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/about" className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow block hover:scale-105 transform duration-200">
              <h2 className="text-xl font-semibold mb-3 text-primary">About AMA</h2>
              <p className="text-primary">Learn more about our mission and how we serve Albion.</p>
            </Link>
            <Link href="/churches" className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow block hover:scale-105 transform duration-200">
              <h2 className="text-xl font-semibold mb-3 text-primary">Find a Church</h2>
              <p className="text-primary">Discover local churches and find the right fit for you.</p>
            </Link>
            <Link href="/help" className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow block hover:scale-105 transform duration-200">
              <h2 className="text-xl font-semibold mb-3 text-primary">Get Help</h2>
              <p className="text-primary">Find resources for food, shelter, clothing, and more.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-white py-16 lg:py-20 mx-6 rounded-xl shadow-md">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl text-heading mb-6">
            Need Support? Start Here.
          </h2>
          <p className="text-lg lg:text-xl text-primary leading-relaxed mb-8">
            Food, shelter, clothing, recovery, housing, and more — the Albion Ministerial Association helps connect you to the resources you need.
          </p>
          <a
            href="/help"
            className="btn-primary px-10 py-4 text-lg"
          >
            Get Help
          </a>
        </div>
      </section>
    </main>
  );
}
