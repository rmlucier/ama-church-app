'use client';

import { useEffect, useState } from 'react';
import { fetchCsv } from '@/lib/fetchCsv';
import ChurchImage from '@/components/ChurchImage';
import { Button } from '@/components/ui/button';
import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger, DrawerClose } from '@/components/ui/drawer';

// Temporarily use local CSV to test images
const SHEET_URL = '/data/churches.csv';
// Production URL (uncomment when images are working):
// const SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSFvwE_5w0OCJ1qh5U6KXfVcxGVspcT4jADr4waYdEfGmAZwdxPEVQ4Yw6TOTreHWmuH-V8yjs-wZ23/pub?gid=0&single=true&output=csv';

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

// Helper function to sanitize text and prevent auto-linking
const sanitizeText = (text: string): string => {
  if (!text) return '';
  // Remove any quotes that might be causing issues
  return text.replace(/[""]/g, '').trim();
};

export default function ChurchesPage() {
  const [churches, setChurches] = useState<Church[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchCsv<Church>(SHEET_URL);
        // Sanitize the data to prevent auto-linking issues
        const sanitizedData = data.map(church => ({
          ...church,
          Name: sanitizeText(church.Name),
          Denomination: sanitizeText(church.Denomination),
          Address: sanitizeText(church.Address),
          'Service Times': sanitizeText(church['Service Times']),
          Pastor: sanitizeText(church.Pastor),
          Phone: church.Phone ? sanitizeText(church.Phone) : undefined,
          Email: church.Email ? sanitizeText(church.Email) : undefined,
          Description: church.Description ? sanitizeText(church.Description) : undefined,
          Website: church.Website ? sanitizeText(church.Website) : undefined,
        }));
        setChurches(sanitizedData);
      } catch (err) {
        console.error('Error loading churches:', err);
        setError('Unable to load churches at this time.');
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  return (
    <main className="bg-surface min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 text-heading">
          Find a Church in Albion
        </h1>
        <p className="text-center text-primary mb-8">
          Discover local churches and find a community that fits you.
        </p>

        {/* Map Toggle */}
        <div className="my-6 text-center">
          <Button
            onClick={() => setShowMap((prev) => !prev)}
            variant="outline"
            size="lg"
          >
            {showMap ? 'Hide Map' : 'View Church Map'}
          </Button>

          {showMap && (
            <div className="mt-4 w-full max-w-3xl mx-auto aspect-video">
              <iframe
                src="https://www.google.com/maps/d/embed?mid=1e0NrD7g66qSGmI6YBAB_KXALKSUikzM&ehbc=2E312F&noprof=1"
                width="100%"
                height="100%"
                className="rounded-lg border"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          )}
        </div>

        {/* Feedback */}
        {loading && <p className="text-center text-primary">Loading churches...</p>}
        {error && <p className="text-center text-red-600">{error}</p>}
        {!loading && !error && churches.length === 0 && (
          <p className="text-center text-primary">No churches found.</p>
        )}

        {/* Separate churches into AMA members and non-members */}
        {(() => {
          const amaMembers = churches.filter(church => church['AMA Member?']?.toUpperCase() === 'YES');
          const nonMembers = churches.filter(church => church['AMA Member?']?.toUpperCase() !== 'YES');
          
          return (
            <>
              {/* AMA Member Churches */}
              {amaMembers.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-primary mb-4">AMA Member Churches</h2>
                  <p className="text-primary mb-6">Churches united in the Albion Ministerial Association</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {amaMembers.map((church, idx) => {
                      return (
                        <Drawer key={`ama-${idx}`}>
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
                                    if (!email) return;
                                    
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
                                  Get Pastor&apos;s Email
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
                </div>
              )}

              {/* Divider */}
              {amaMembers.length > 0 && nonMembers.length > 0 && (
                <hr className="my-12 border-t-2 border-surface" />
              )}

              {/* Other Churches */}
              {nonMembers.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-4">Other Churches in Albion</h2>
                  <p className="text-primary mb-6">Additional churches serving our community</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {nonMembers.map((church, idx) => {
                      return (
                        <Drawer key={`other-${idx}`}>
                          <DrawerTrigger asChild>
                            <div className="bg-white border rounded-lg p-4 cursor-pointer hover:shadow-xl hover:-translate-y-1 hover:border-accent transition-all duration-300 ease-out">
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
                                    if (!email) return;
                                    
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
                                  Get Pastor&apos;s Email
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
                </div>
              )}
            </>
          );
        })()}
      </div>
    </main>
  );
} 