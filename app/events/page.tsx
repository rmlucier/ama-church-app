'use client';

import { useEffect, useState } from 'react';
import { fetchGoogleCalendarEvents, GoogleCalendarEvent } from '@/lib/fetchGoogleCalendarEvents';

export default function EventsPage() {
  const [events, setEvents] = useState<GoogleCalendarEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const data = await fetchGoogleCalendarEvents();
        setEvents(data);
      } catch (err) {
        setError('Unable to load events at this time.');
        console.error('Error loading events:', err);
      } finally {
        setLoading(false);
      }
    };
    loadEvents();
  }, []);

  const formatDateBox = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase();
    return `${day} ${month}`;
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
    });
  };

  return (
    <main className="bg-surface min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 text-heading">
          Upcoming Events
        </h1>
        <p className="text-center text-primary mb-8">
          Join us for these upcoming events in the Albion community.
        </p>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <p className="text-primary text-lg">Loading events...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-12">
            <p className="text-red-600 mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="btn-primary"
            >
              Try Again
            </button>
          </div>
        )}

        {/* No Events State */}
        {!loading && !error && events.length === 0 && (
          <div className="text-center py-12">
            <p className="text-primary text-lg">No upcoming events at this time.</p>
            <p className="text-accent mt-2">Check back soon for new events!</p>
          </div>
        )}

        {/* Events Grid */}
        {!loading && !error && events.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => {
              return (
                <div 
                  key={event.id} 
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border-l-4 border-accent"
                >
                  {/* Event Content */}
                  <div className="p-6 space-y-4">
                    {/* Date Box */}
                    <div className="flex items-start justify-between">
                      <div className="bg-accent text-white px-3 py-2 rounded-md text-center min-w-[80px]">
                        <div className="text-sm font-semibold">
                          {formatDateBox(event.start.dateTime || event.start.date || '')}
                        </div>
                      </div>
                      <a
                        href={event.htmlLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary hover:text-primary transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>

                    {/* Event Title */}
                    <h2 className="text-xl font-semibold text-primary leading-tight">
                      {event.title}
                    </h2>
                    
                    {/* Time Information */}
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-secondary">⏰</span>
                        <span className="text-primary text-sm">
                          {event.start.dateTime ? (
                            <>
                              {formatTime(event.start.dateTime)}
                              {event.end.dateTime && event.end.dateTime !== event.start.dateTime && (
                                <> - {formatTime(event.end.dateTime)}</>
                              )}
                            </>
                          ) : (
                            'All Day'
                          )}
                        </span>
                      </div>
                      
                      {/* Location */}
                      {event.location && (
                        <div className="flex items-start space-x-2">
                          <span className="text-secondary mt-0.5">📍</span>
                          <span className="text-primary text-sm leading-relaxed">
                            {event.location}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    {event.description && (
                      <div className="pt-3 border-t border-gray-100">
                        <p className="text-accent text-sm leading-relaxed">
                          {event.description.length > 150 
                            ? `${event.description.substring(0, 150)}...` 
                            : event.description
                          }
                        </p>
                      </div>
                    )}

                    {/* View in Calendar Button */}
                    <div className="pt-2">
                      <a
                        href={event.htmlLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block w-full btn-primary text-sm"
                      >
                        View in Calendar
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
} 