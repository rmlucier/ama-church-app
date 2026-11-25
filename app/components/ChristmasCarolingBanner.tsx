'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

// Banner hides itself automatically once the event is over.
// Hidden starting Dec 13, 2026 (local time).
const HIDE_AFTER = new Date('2026-12-13T00:00:00');

const FLYER_SRC = '/images/events/christmas-caroling-2026.jpg';
const ADDRESS = 'St. Paul Lutheran Church, 100 Luther Blvd, Albion, MI';

const GOOGLE_CAL_URL =
  'https://calendar.google.com/calendar/render?action=TEMPLATE' +
  '&text=' + encodeURIComponent('Community Christmas Caroling Celebration') +
  '&dates=20261212T150000/20261212T170000' +
  '&ctz=America/Detroit' +
  '&details=' +
  encodeURIComponent(
    'An afternoon of Christmas carols, praise, fellowship, and community unity. Hosted by the Albion Ministerial Association in collaboration with the NAACP. All are welcome! Refreshments will be served.'
  ) +
  '&location=' + encodeURIComponent(ADDRESS);

const DIRECTIONS_URL =
  'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(ADDRESS);

export default function ChristmasCarolingBanner() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (new Date() >= HIDE_AFTER) setVisible(false);
  }, []);

  if (!visible) return null;

  return (
    <section
      aria-labelledby="caroling-heading"
      className="relative overflow-hidden text-white"
      style={{
        background:
          'radial-gradient(ellipse at top, #b3122a 0%, #7a0b1c 55%, #4a0611 100%)',
      }}
    >
      {/* Soft sparkle texture */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #f5d47a 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
      />
      {/* Gold rule top and bottom */}
      <div aria-hidden className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#b8862b] via-[#f5d47a] to-[#b8862b]" />
      <div aria-hidden className="absolute bottom-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#b8862b] via-[#f5d47a] to-[#b8862b]" />

      <div className="relative max-w-6xl mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
          {/* Flyer */}
          <div className="md:col-span-2">
            <a
              href={FLYER_SRC}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="relative aspect-[1199/1312] max-w-sm mx-auto rounded-xl overflow-hidden ring-4 ring-[#f5d47a]/70 shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]">
                <Image
                  src={FLYER_SRC}
                  alt="Flyer: Albion Ministerial Association, in collaboration with the NAACP, invites the whole community and churches to a Community Christmas Caroling Celebration, Saturday, December 12, 2026 at 3:00 PM at St. Paul Lutheran Church, 100 Luther Blvd., Albion, MI. All are welcome. Refreshments will be served."
                  fill
                  sizes="(max-width: 768px) 90vw, 384px"
                  className="object-cover"
                  priority
                />
              </div>
              <p className="text-center text-sm text-[#f5d47a] mt-3 group-hover:underline">
                Tap to view full flyer
              </p>
            </a>
          </div>

          {/* Details */}
          <div className="md:col-span-3 text-center md:text-left">
            <p className="uppercase tracking-[0.2em] text-xs sm:text-sm font-semibold text-[#f5d47a] mb-3">
              AMA &middot; In collaboration with the NAACP
            </p>
            <h2
              id="caroling-heading"
              className="font-serif text-4xl lg:text-5xl font-bold leading-tight mb-4"
            >
              Community Christmas{' '}
              <span className="text-[#f5d47a]">Caroling Celebration</span>
            </h2>
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed mb-8 max-w-2xl mx-auto md:mx-0">
              Join the whole community and churches of Albion for an afternoon of
              Christmas carols, praise, fellowship, and unity as we celebrate the
              birth of our Lord and Savior, Jesus Christ!
            </p>

            {/* Date / time / place */}
            <dl className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-[#f5d47a]/30">
                <dt className="text-xs uppercase tracking-wide text-[#f5d47a] mb-1">When</dt>
                <dd className="font-semibold">Saturday, Dec 12, 2026</dd>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-[#f5d47a]/30">
                <dt className="text-xs uppercase tracking-wide text-[#f5d47a] mb-1">Time</dt>
                <dd className="font-semibold">3:00 PM</dd>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:col-span-2 xl:col-span-1 border border-[#f5d47a]/30">
                <dt className="text-xs uppercase tracking-wide text-[#f5d47a] mb-1">Where</dt>
                <dd className="font-semibold leading-snug">
                  St. Paul Lutheran Church
                  <span className="block font-normal text-white/80 text-sm">100 Luther Blvd., Albion</span>
                </dd>
              </div>
            </dl>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start mb-6">
              <a
                href={GOOGLE_CAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-[#4a0611] bg-gradient-to-b from-[#f9e29a] to-[#d9a93f] shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                Add to Calendar
              </a>
              <a
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold border-2 border-[#f5d47a] text-white hover:bg-white/10 transition-colors"
              >
                Get Directions
              </a>
            </div>

            <p className="text-white/90 font-semibold">
              All are welcome! <span className="font-normal text-white/75">Refreshments will be served.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
