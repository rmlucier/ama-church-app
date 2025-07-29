'use client';

import { useEffect, useState } from 'react';
import { fetchCsv } from '@/lib/fetchCsv';

const SHEET_URL =
  'https://docs.google.com/spreadsheets/d/1XlMPoLVhTYkYqNObg6uSVhHZBUknpbOoQk4Kqmh2pRQ/gviz/tq?tqx=out:csv&sheet=Resource%20Directory';

type Resource = {
  Name: string;
  Type: string;
  Description: string;
  'Contact Name': string;
  Phone?: string;
  Email?: string;
  Hours?: string;
  Address?: string;
};

export default function HelpPage() {
  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchCsv<Resource>(SHEET_URL);
        setResources(data);
      } catch {
        setError('Unable to load resources at this time.');
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  return (
    <main className="bg-neutral min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6 text-primary">Get Help in Albion</h1>
        <p className="text-center text-primary mb-8">
          Need food, clothing, housing, or other support? These local resources are here to help.
        </p>

        {/* Loading / Error / Empty */}
        {loading && <p className="text-center text-primary">Loading resources...</p>}
        {error && <p className="text-center text-red-600">{error}</p>}
        {!loading && !error && resources.length === 0 && (
          <p className="text-center text-primary">No resources found.</p>
        )}

        {/* Resource Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md p-4 space-y-2 print:break-inside-avoid">
              <h2 className="text-xl font-semibold text-primary">{resource.Name}</h2>
              <p className="text-secondary font-medium">{resource.Type}</p>
              <p className="text-primary">{resource.Description}</p>
              {resource['Contact Name'] && (
                <p className="text-primary">Contact: {resource['Contact Name']}</p>
              )}
              {resource.Phone && <p className="text-[#7A6A53]">Phone: {resource.Phone}</p>}
              {resource.Email && (
                <p className="text-primary">
                  Email:{' '}
                  <a
                    href={`mailto:${resource.Email}`}
                    className="underline text-accent hover:text-primary"
                  >
                    {resource.Email}
                  </a>
                </p>
              )}
              {resource.Hours && <p className="text-[#7A6A53]">Hours: {resource.Hours}</p>}
              {resource.Address && (
                <>
                  <p className="text-primary">Address: {resource.Address}</p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(resource.Address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline text-sm hover:text-primary"
                  >
                    Get Directions
                  </a>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 