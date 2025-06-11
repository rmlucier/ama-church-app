'use client';

import { useEffect, useState } from 'react';
import { fetchCsv } from '../utils/csv';

const SHEET_URL =
  'https://docs.google.com/spreadsheets/d/1XlMPoLVhTYkYqNObg6uSVhHZBUknpbOoQk4Kqmh2pRQ/gviz/tq?tqx=out:csv&sheet=Event%20Directory';

type Event = {
  Name: string;
  Date: string;
  Time: string;
  Type: string;
  Location: string;
  Description: string;
  'Contact Name': string;
  Email?: string;
};

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [filtered, setFiltered] = useState<Event[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchCsv(SHEET_URL) as Event[];
        // Sort events by date ascending
        const sortedData = data.sort((a: Event, b: Event) => {
          const dateA = new Date(a.Date);
          const dateB = new Date(b.Date);
          return dateA.getTime() - dateB.getTime();
        });
        setEvents(sortedData);
        setFiltered(sortedData);
      } catch {
        setError('Unable to load events at this time.');
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const handleSearch = (term: string) => {
    setSearch(term);
    if (term.trim() === '') {
      setFiltered(events);
    } else {
      const filteredData = events.filter((event) =>
        Object.values(event)
          .join(' ')
          .toLowerCase()
          .includes(term.toLowerCase())
      );
      setFiltered(filteredData);
    }
  };

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    } catch {
      return dateString;
    }
  };

  const isUpcoming = (dateString: string) => {
    try {
      const eventDate = new Date(dateString);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return eventDate >= today;
    } catch {
      return true;
    }
  };

  return (
    <main className="bg-pink-100 min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
          Upcoming Events in Albion
        </h1>
        <p className="text-center text-gray-700 mb-6">
          Discover community events, church activities, and opportunities to connect.
        </p>

        {/* Controls */}
        <div className="mb-6 flex flex-col md:flex-row justify-center items-center gap-4">
          <input
            type="text"
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search events by name, type, location, or description..."
            className="p-2 rounded-md border border-gray-300 w-full md:w-1/2"
          />
          <button
            onClick={() => window.print()}
            className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition-colors"
          >
            Print Events
          </button>
        </div>

        {/* Loading and Error States */}
        {loading && <p className="text-center text-gray-600">Loading events...</p>}
        {error && <p className="text-center text-red-600">{error}</p>}
        {!loading && !error && filtered.length === 0 && (
          <p className="text-center text-gray-600">No events found.</p>
        )}

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((event, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-xl shadow-md p-4 space-y-3 print:break-inside-avoid ${
                !isUpcoming(event.Date) ? 'opacity-60' : ''
              }`}
            >
              {/* Event Header */}
              <div className="border-b border-gray-200 pb-2">
                <h2 className="text-xl font-semibold text-gray-800 mb-1">{event.Name}</h2>
                <p className="text-pink-700 font-medium text-sm">{event.Type}</p>
              </div>

              {/* Date and Time */}
              <div className="space-y-1">
                <p className="text-gray-600">
                  <span className="font-medium">Date:</span> {formatDate(event.Date)}
                </p>
                {event.Time && (
                  <p className="text-gray-600">
                    <span className="font-medium">Time:</span> {event.Time}
                  </p>
                )}
              </div>

              {/* Location */}
              {event.Location && (
                <div className="space-y-1">
                  <p className="text-gray-600">
                    <span className="font-medium">Location:</span> {event.Location}
                  </p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.Location)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline text-sm hover:text-blue-800"
                  >
                    Get Directions
                  </a>
                </div>
              )}

              {/* Description */}
              {event.Description && (
                <p className="text-gray-600 text-sm leading-relaxed">{event.Description}</p>
              )}

              {/* Contact Information */}
              <div className="border-t border-gray-200 pt-2 space-y-1">
                {event['Contact Name'] && (
                  <p className="text-gray-600 text-sm">
                    <span className="font-medium">Contact:</span> {event['Contact Name']}
                  </p>
                )}
                {event.Email && (
                  <p className="text-gray-600 text-sm">
                    <span className="font-medium">Email:</span>{' '}
                    <a
                      href={`mailto:${event.Email}`}
                      className="underline text-pink-600 hover:text-pink-800"
                    >
                      {event.Email}
                    </a>
                  </p>
                )}
              </div>

              {/* Past Event Indicator */}
              {!isUpcoming(event.Date) && (
                <div className="bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded text-center">
                  Past Event
                </div>
              )}
            </div>
          ))}
        </div>

        {/* No Events Message */}
        {!loading && !error && filtered.length === 0 && search && (
          <div className="text-center py-8">
            <p className="text-gray-600 mb-4">No events match your search.</p>
            <button
              onClick={() => handleSearch('')}
              className="text-pink-600 underline hover:text-pink-800"
            >
              Clear search and show all events
            </button>
          </div>
        )}
      </div>
    </main>
  );
} 