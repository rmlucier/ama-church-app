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
    <main className="bg-neutral min-h-screen p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6 text-primary">Contact Us</h1>

        {submitted ? (
          <div className="bg-surface text-primary p-4 rounded-md text-center">
            Thank you! Your message has been received.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md space-y-4">
            <div>
              <label className="block text-sm font-medium text-primary">Name</label>
              <input
                type="text"
                required
                className="mt-1 w-full p-2 border border-secondary rounded-md focus:border-accent focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-primary">Email</label>
              <input
                type="email"
                required
                className="mt-1 w-full p-2 border border-secondary rounded-md focus:border-accent focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-primary">Message</label>
              <textarea
                required
                rows={4}
                className="mt-1 w-full p-2 border border-secondary rounded-md focus:border-accent focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-accent text-white px-4 py-2 rounded-md hover:bg-primary transition"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </main>
  );
} 