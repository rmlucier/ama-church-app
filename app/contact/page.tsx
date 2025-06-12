'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Placeholder for future form handling logic
    setSubmitted(true);
  };

  return (
    <main className="bg-[#F5F5F2] min-h-screen p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6 text-[#7A6A53]">Contact Us</h1>

        {submitted ? (
          <div className="bg-[#D5DED9] text-[#7A6A53] p-4 rounded-md text-center">
            Thank you! Your message has been received.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#7A6A53]">Name</label>
              <input
                type="text"
                required
                className="mt-1 w-full p-2 border border-[#99B2B7] rounded-md focus:border-[#948C75] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#7A6A53]">Email</label>
              <input
                type="email"
                required
                className="mt-1 w-full p-2 border border-[#99B2B7] rounded-md focus:border-[#948C75] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#7A6A53]">Message</label>
              <textarea
                required
                rows={4}
                className="mt-1 w-full p-2 border border-[#99B2B7] rounded-md focus:border-[#948C75] focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#948C75] text-white px-4 py-2 rounded-md hover:bg-[#7A6A53] transition"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </main>
  );
} 