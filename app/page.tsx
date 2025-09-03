'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import HeroSection from './components/HeroSection';
import ChurchImage from '@/components/ChurchImage';
import { fetchCsv } from '@/lib/fetchCsv';
import { Button } from '@/components/ui/button';
import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger, DrawerClose } from '@/components/ui/drawer';

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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {churches.map((church, index) => {
                return (
                  <Drawer key={index}>
                    <DrawerTrigger asChild>
                      <div className="bg-white border-2 border-accent rounded-lg p-4 cursor-pointer hover:shadow-xl hover:-translate-y-1 hover:border-secondary transition-all duration-300 ease-out">
                        {/* AMA Member Badge */}
                        <div className="bg-accent text-white text-xs font-semibold px-2 py-1 rounded text-center mb-3">
                          AMA MEMBER
                        </div>
                        
                        {/* Minimal Church Image */}
                        <div className="aspect-video mb-3 rounded overflow-hidden">
                          <ChurchImage
                            churchName={church.Name}
                            churchAddress={church.Address}
                            denomination={church.Denomination}
                            altPhoto={church['Alt Photo']}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        {/* Basic Info */}
                        <h3 className="font-semibold text-primary text-sm mb-1">{church.Name}</h3>
                        <p className="text-accent text-xs font-medium mb-2">{church.Denomination}</p>
                        <p className="text-primary text-xs truncate">{church.Address}</p>
                      </div>
                    </DrawerTrigger>
                    
                    <DrawerContent>
                      <DrawerHeader>
                        <DrawerTitle className="text-xl text-primary">{church.Name}</DrawerTitle>
                        <DrawerDescription className="text-accent font-medium text-base">{church.Denomination}</DrawerDescription>
                      </DrawerHeader>
                      
                      <div className="px-4 pb-4">
                        {/* Church Information List - Responsive Columns */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                          {/* Column 1 - Basic Info */}
                          <div className="space-y-4">
                            {/* Address */}
                            <div className="border-b border-gray-100 pb-3">
                              <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">Address</h4>
                              <p className="text-primary">{church.Address}</p>
                            </div>
                            
                            {/* Service Times */}
                            {church['Service Times'] && (
                              <div className="border-b border-gray-100 pb-3">
                                <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">Service Times</h4>
                                <p className="text-primary">{church['Service Times']}</p>
                              </div>
                            )}
                            
                            {/* Pastor */}
                            {church.Pastor && (
                              <div className="border-b border-gray-100 pb-3">
                                <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">Pastor</h4>
                                <p className="text-primary">{church.Pastor}</p>
                              </div>
                            )}
                          </div>
                          
                          {/* Column 2 - Contact & Additional Info */}
                          <div className="space-y-4">
                            {/* Contact Information */}
                            {(church.Phone || church.Email) && (
                              <div className="border-b border-gray-100 pb-3">
                                <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">Contact</h4>
                                <div className="space-y-1">
                                  {church.Phone && <p className="text-primary">{church.Phone}</p>}
                                  {church.Email && <p className="text-primary">{church.Email}</p>}
                                </div>
                              </div>
                            )}
                            
                            {/* Website */}
                            {church.Website && (
                              <div className="border-b border-gray-100 pb-3">
                                <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">Website</h4>
                                <a href={church.Website} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline break-all">
                                  {church.Website}
                                </a>
                              </div>
                            )}
                          </div>
                          
                          {/* Description - Full Width on Desktop */}
                          {church.Description && (
                            <div className="md:col-span-2 pt-2">
                              <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">About</h4>
                              <p className="text-primary leading-relaxed">{church.Description}</p>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <DrawerFooter className="flex-col space-y-2">
                        {church.Email && (
                          <Button
                            onClick={() => {
                              const email = church.Email;
                              const subject = `Inquiry about ${church.Name}`;
                              
                              // Copy email to clipboard for security
                              if (navigator.clipboard) {
                                navigator.clipboard.writeText(email).then(() => {
                                  alert(`Pastor's email (${email}) copied to clipboard!`);
                                });
                              } else {
                                // Fallback: Show email in alert for manual copy
                                alert(`Pastor's email: ${email}\n\nPlease copy this email address to contact the pastor.`);
                              }
                            }}
                            className="w-full"
                            variant="outline"
                          >
                            Get Pastor's Email
                          </Button>
                        )}
                        {church.Address && (
                          <Button
                            asChild
                            className="w-full"
                            variant="outline"
                          >
                            <a
                              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(church.Address)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Get Directions
                            </a>
                          </Button>
                        )}
                        {church.Website && (
                          <Button
                            asChild
                            className="w-full"
                            variant="outline"
                          >
                            <a
                              href={church.Website}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Visit Website
                            </a>
                          </Button>
                        )}
                        <DrawerClose asChild>
                          <Button variant="outline">Close</Button>
                        </DrawerClose>
                      </DrawerFooter>
                    </DrawerContent>
                  </Drawer>
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
