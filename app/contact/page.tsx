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
    <main className="bg-pink-100 min-h-screen p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">Contact Us</h1>

        {submitted ? (
          <div className="bg-green-100 text-green-800 p-4 rounded-md text-center">
            Thank you! Your message has been received.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                required
                className="mt-1 w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                required
                className="mt-1 w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                required
                rows={4}
                className="mt-1 w-full p-2 border border-gray-300 rounded-md"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </main>
  );
} 