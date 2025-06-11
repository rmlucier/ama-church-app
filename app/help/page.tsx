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
  const [filtered, setFiltered] = useState<Resource[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [typeFilter, setTypeFilter] = useState('All');
  const [sortField, setSortField] = useState<'Name' | 'Type'>('Name');

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchCsv<Resource>(SHEET_URL);
        setResources(data);
        setFiltered(data);
      } catch {
        setError('Unable to load resources at this time.');
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const uniqueTypes = Array.from(new Set(resources.map((r) => r.Type))).sort();

  const applyFilters = (searchTerm: string, type: string, sort: typeof sortField) => {
    let data = [...resources];

    if (type !== 'All') {
      data = data.filter((r) => r.Type === type);
    }

    if (searchTerm.trim()) {
      data = data.filter((res) =>
        Object.values(res)
          .join(' ')
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );
    }

    data.sort((a, b) => a[sort].localeCompare(b[sort]));

    setFiltered(data);
  };

  const handleSearchChange = (term: string) => {
    setSearch(term);
    applyFilters(term, typeFilter, sortField);
  };

  const handleTypeChange = (type: string) => {
    setTypeFilter(type);
    applyFilters(search, type, sortField);
  };

  const handleSortChange = (field: typeof sortField) => {
    setSortField(field);
    applyFilters(search, typeFilter, field);
  };

  return (
    <main className="bg-pink-100 min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">Get Help in Albion</h1>
        <p className="text-center text-gray-700 mb-8">
          Need food, clothing, housing, or other support? These local resources are here to help.
        </p>

        {/* Controls */}
        <div className="mb-6 flex flex-col md:flex-row justify-center items-center gap-4">
          <input
            type="text"
            value={search}
            onChange={(e) => handleSearchChange(e.target.value)}
            placeholder="Search by name, need, contact..."
            className="p-2 rounded-md border border-gray-300 w-full md:w-1/3"
          />
          <select
            value={typeFilter}
            onChange={(e) => handleTypeChange(e.target.value)}
            className="p-2 rounded-md border border-gray-300"
          >
            <option value="All">All Types</option>
            {uniqueTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <select
            value={sortField}
            onChange={(e) => handleSortChange(e.target.value as 'Name' | 'Type')}
            className="p-2 rounded-md border border-gray-300"
          >
            <option value="Name">Sort by Name</option>
            <option value="Type">Sort by Type</option>
          </select>
          <button
            onClick={() => window.print()}
            className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600"
          >
            Print
          </button>
        </div>

        {/* Loading / Error / Empty */}
        {loading && <p className="text-center text-gray-600">Loading resources...</p>}
        {error && <p className="text-center text-red-600">{error}</p>}
        {!loading && !error && filtered.length === 0 && (
          <p className="text-center text-gray-600">No matching resources found.</p>
        )}

        {/* Resource Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((resource, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md p-4 space-y-2 print:break-inside-avoid">
              <h2 className="text-xl font-semibold text-gray-800">{resource.Name}</h2>
              <p className="text-pink-700 font-medium">{resource.Type}</p>
              <p className="text-gray-600">{resource.Description}</p>
              {resource['Contact Name'] && (
                <p className="text-gray-600">Contact: {resource['Contact Name']}</p>
              )}
              {resource.Phone && <p className="text-gray-600">Phone: {resource.Phone}</p>}
              {resource.Email && (
                <p className="text-gray-600">
                  Email:{' '}
                  <a
                    href={`mailto:${resource.Email}`}
                    className="underline text-pink-600"
                  >
                    {resource.Email}
                  </a>
                </p>
              )}
              {resource.Hours && <p className="text-gray-600">Hours: {resource.Hours}</p>}
              {resource.Address && (
                <>
                  <p className="text-gray-600">Address: {resource.Address}</p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(resource.Address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline text-sm"
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