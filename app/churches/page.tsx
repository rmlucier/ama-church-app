'use client';

import { useEffect, useState } from 'react';
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
        setChurches(data);
      } catch {
        setError('Unable to load churches at this time.');
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  return (
    <main className="bg-[#D5DED9] min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 text-[#7A6A53]">
          Find a Church in Albion
        </h1>
        <p className="text-center text-[#7A6A53] mb-8">
          Discover local churches and find a community that fits you.
        </p>

        {/* Map Toggle */}
        <div className="my-6 text-center">
          <button
            onClick={() => setShowMap((prev) => !prev)}
            className="bg-[#948C75] text-white px-4 py-2 rounded-md hover:bg-[#7A6A53] transition"
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
        {loading && <p className="text-center text-[#7A6A53]">Loading churches...</p>}
        {error && <p className="text-center text-red-600">{error}</p>}
        {!loading && !error && churches.length === 0 && (
          <p className="text-center text-[#7A6A53]">No churches found.</p>
        )}

        {/* Church Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {churches.map((church, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md p-4 space-y-2 print:break-inside-avoid">
              <h2 className="text-xl font-semibold text-[#7A6A53]">{church.Name}</h2>
              <p className="text-[#948C75] font-medium">{church.Denomination}</p>
              <p className="text-[#7A6A53]">{church.Address}</p>
              {church['Service Times'] && (
                <p className="text-[#7A6A53]">Service Times: {church['Service Times']}</p>
              )}
              {church.Pastor && <p className="text-[#7A6A53]">Pastor: {church.Pastor}</p>}
              {church.Phone && <p className="text-[#7A6A53]">Phone: {church.Phone}</p>}
              {church.Email && (
                <button
                  onClick={() => window.location.href = `mailto:${church.Email}`}
                  className="w-full bg-[#948C75] text-white text-center px-3 py-2 rounded-md hover:bg-[#7A6A53] transition"
                >
                  Contact Pastor
                </button>
              )}
              {church.Description && (
                <p className="text-[#7A6A53] text-sm">{church.Description}</p>
              )}
              {church.Address && (
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(church.Address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-2 bg-[#948C75] text-white text-center px-3 py-2 rounded-md hover:bg-[#7A6A53] transition"
                >
                  Get Directions
                </a>
              )}
              {church.Website && (
                <a
                  href={church.Website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-[#948C75] text-white text-center px-3 py-2 rounded-md hover:bg-[#7A6A53] transition"
                >
                  Visit Website
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 