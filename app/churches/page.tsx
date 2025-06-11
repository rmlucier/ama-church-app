'use client';

import { useEffect, useState } from 'react';
import { fetchCsv } from '@/lib/fetchCsv';

const SHEET_URL =
  'https://docs.google.com/spreadsheets/d/1XlMPoLVhTYkYqNObg6uSVhHZBUknpbOoQk4Kqmh2pRQ/gviz/tq?tqx=out:csv&sheet=Church%20Directory';

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
  const [filtered, setFiltered] = useState<Church[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [denominationFilter, setDenominationFilter] = useState('All');
  const [sortField, setSortField] = useState<'Name' | 'Denomination'>('Name');

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchCsv<Church>(SHEET_URL);
        setChurches(data);
        setFiltered(data);
      } catch {
        setError('Unable to load churches at this time.');
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const uniqueDenominations = Array.from(new Set(churches.map((c) => c.Denomination))).sort();

  const applyFilters = (term: string, denom: string, sort: typeof sortField) => {
    let data = [...churches];

    if (denom !== 'All') {
      data = data.filter((c) => c.Denomination === denom);
    }

    if (term.trim()) {
      data = data.filter((c) =>
        Object.values(c)
          .join(' ')
          .toLowerCase()
          .includes(term.toLowerCase())
      );
    }

    data.sort((a, b) => a[sort].localeCompare(b[sort]));

    setFiltered(data);
  };

  const handleSearch = (term: string) => {
    setSearch(term);
    applyFilters(term, denominationFilter, sortField);
  };

  const handleDenominationChange = (denom: string) => {
    setDenominationFilter(denom);
    applyFilters(search, denom, sortField);
  };

  const handleSortChange = (field: typeof sortField) => {
    setSortField(field);
    applyFilters(search, denominationFilter, field);
  };

  return (
    <main className="bg-pink-100 min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
          Find a Church in Albion
        </h1>
        <p className="text-center text-gray-700 mb-6">
          Discover local churches and find a community that fits you.
        </p>

        {/* Controls */}
        <div className="mb-6 flex flex-col md:flex-row justify-center items-center gap-4">
          <input
            type="text"
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search by name, pastor, or denomination..."
            className="p-2 rounded-md border border-gray-300 w-full md:w-1/3"
          />
          <select
            value={denominationFilter}
            onChange={(e) => handleDenominationChange(e.target.value)}
            className="p-2 rounded-md border border-gray-300"
          >
            <option value="All">All Denominations</option>
            {uniqueDenominations.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
          <select
            value={sortField}
            onChange={(e) => handleSortChange(e.target.value as 'Name' | 'Denomination')}
            className="p-2 rounded-md border border-gray-300"
          >
            <option value="Name">Sort by Name</option>
            <option value="Denomination">Sort by Denomination</option>
          </select>
          <button
            onClick={() => window.print()}
            className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600"
          >
            Print
          </button>
        </div>

        {/* Feedback */}
        {loading && <p className="text-center text-gray-600">Loading churches...</p>}
        {error && <p className="text-center text-red-600">{error}</p>}
        {!loading && !error && filtered.length === 0 && (
          <p className="text-center text-gray-600">No churches found.</p>
        )}

        {/* Church Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((church, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md p-4 space-y-2 print:break-inside-avoid">
              <h2 className="text-xl font-semibold text-gray-800">{church.Name}</h2>
              <p className="text-pink-700 font-medium">{church.Denomination}</p>
              <p className="text-gray-600">{church.Address}</p>
              {church['Service Times'] && (
                <p className="text-gray-600">Service Times: {church['Service Times']}</p>
              )}
              {church.Pastor && <p className="text-gray-600">Pastor: {church.Pastor}</p>}
              {church.Phone && <p className="text-gray-600">Phone: {church.Phone}</p>}
              {church.Email && (
                <p className="text-gray-600">
                  Email:{' '}
                  <a href={`mailto:${church.Email}`} className="underline text-pink-600">
                    {church.Email}
                  </a>
                </p>
              )}
              {church.Description && (
                <p className="text-gray-600 text-sm">{church.Description}</p>
              )}
              {church.Address && (
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(church.Address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline text-sm"
                >
                  Get Directions
                </a>
              )}
              {church.Website && (
                <a
                  href={church.Website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 underline text-sm"
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