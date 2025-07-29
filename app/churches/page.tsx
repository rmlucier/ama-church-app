'use client';

import { useEffect, useState } from 'react';
import { fetchCsv } from '@/lib/fetchCsv';
import ChurchImage from '@/components/ChurchImage';

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
      } catch {
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
          <button
            onClick={() => setShowMap((prev) => !prev)}
            className="btn-primary"
          >
            {showMap ? 'Hide Map' : 'View Church Map'}
          </button>

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
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {amaMembers.map((church, idx) => {
                      return (
                        <div key={`ama-${idx}`} className="bg-white rounded-xl shadow-md overflow-hidden print:break-inside-avoid border-2 border-accent">
                          {/* AMA Member Badge */}
                          <div className="bg-accent text-white text-xs font-semibold px-3 py-1 text-center">
                            AMA MEMBER
                          </div>
                          {/* Church Image */}
                          <ChurchImage
                            churchName={church.Name}
                            churchAddress={church.Address}
                            denomination={church.Denomination}
                          />
                          
                          {/* Church Info */}
                          <div className="p-4 space-y-2">
                            <h2 className="text-xl font-semibold text-primary">{church.Name}</h2>
                            <p className="text-accent font-medium">{church.Denomination}</p>
                            <p className="text-primary">{church.Address}</p>
                            {church['Service Times'] && (
                              <p className="text-primary">Service Times: {church['Service Times']}</p>
                            )}
                            {church.Pastor && <p className="text-primary">Pastor: {church.Pastor}</p>}
                            {church.Phone && <p className="text-primary">Phone: {church.Phone}</p>}
                            {church.Email && (
                              <button
                                onClick={() => window.location.href = `mailto:${church.Email}`}
                                className="w-full btn-primary text-sm"
                              >
                                Contact Pastor
                              </button>
                            )}
                            {church.Description && (
                              <p className="text-primary text-sm">{church.Description}</p>
                            )}
                            {church.Address && (
                              <a
                                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(church.Address)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block mt-2 btn-primary text-sm"
                              >
                                Get Directions
                              </a>
                            )}
                            {church.Website && (
                              <a
                                href={church.Website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block btn-primary text-sm"
                              >
                                Visit Website
                              </a>
                            )}
                          </div>
                        </div>
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
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {nonMembers.map((church, idx) => {
                      return (
                        <div key={`other-${idx}`} className="bg-white rounded-xl shadow-md overflow-hidden print:break-inside-avoid">
                          {/* Church Image */}
                          <ChurchImage
                            churchName={church.Name}
                            churchAddress={church.Address}
                            denomination={church.Denomination}
                          />
                          
                          {/* Church Info */}
                          <div className="p-4 space-y-2">
                            <h2 className="text-xl font-semibold text-primary">{church.Name}</h2>
                            <p className="text-accent font-medium">{church.Denomination}</p>
                            <p className="text-primary">{church.Address}</p>
                            {church['Service Times'] && (
                              <p className="text-primary">Service Times: {church['Service Times']}</p>
                            )}
                            {church.Pastor && <p className="text-primary">Pastor: {church.Pastor}</p>}
                            {church.Phone && <p className="text-primary">Phone: {church.Phone}</p>}
                            {church.Email && (
                              <button
                                onClick={() => window.location.href = `mailto:${church.Email}`}
                                className="w-full btn-primary text-sm"
                              >
                                Contact Pastor
                              </button>
                            )}
                            {church.Description && (
                              <p className="text-primary text-sm">{church.Description}</p>
                            )}
                            {church.Address && (
                              <a
                                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(church.Address)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block mt-2 btn-primary text-sm"
                              >
                                Get Directions
                              </a>
                            )}
                            {church.Website && (
                              <a
                                href={church.Website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block btn-primary text-sm"
                              >
                                Visit Website
                              </a>
                            )}
                          </div>
                        </div>
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