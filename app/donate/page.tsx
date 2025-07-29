export default function DonatePage() {
  return (
    <main className="bg-neutral min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-primary text-center">Support Our Mission</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* How Your Donation Helps */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-6 text-primary">How Your Donation Helps</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-accent mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-secondary mb-1">Community Outreach</h3>
                  <p className="text-primary text-sm">Supporting programs that provide food, shelter, clothing, and essential services to those in need.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-accent mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <div>
                  <h3 className="font-semibold text-secondary mb-1">Church Unity Initiatives</h3>
                  <p className="text-primary text-sm">Facilitating collaboration and partnership among local churches to strengthen our collective impact.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-accent mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 6l6 6M6 7h12m0 0l-6 6-6-6" />
                </svg>
                <div>
                  <h3 className="font-semibold text-secondary mb-1">Leadership Development</h3>
                  <p className="text-primary text-sm">Supporting and equipping ministry leaders through fellowship, training, and resources.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-accent mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                <div>
                  <h3 className="font-semibold text-secondary mb-1">Community Events</h3>
                  <p className="text-primary text-sm">Organizing events that bring churches and community members together in fellowship and service.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Donation Options */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-6 text-primary">Make a Donation</h2>
            
            <div className="space-y-6">
              {/* Cash App */}
              <div className="bg-surface p-6 rounded-lg text-center">
                <div className="mb-4">
                  <svg className="w-12 h-12 text-accent mx-auto mb-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.59 3.475c-.09.26-.23.48-.42.65l-1.62 1.44c-.2.18-.43.31-.67.4-.25.08-.5.12-.76.12-.53 0-1.04-.21-1.41-.59-.38-.38-.59-.89-.59-1.41 0-.26.04-.51.12-.76.09-.24.22-.47.4-.67l1.44-1.62c.17-.19.37-.33.65-.42.27-.09.56-.09.83 0 .26.09.49.23.68.42l.3.3c.19.19.33.42.42.68.09.27.09.56 0 .83zM7.36 7.68c.39.39 1.02.39 1.41 0l6.36-6.36c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L7.36 6.27c-.39.39-.39 1.02 0 1.41zm8.5 8.5c-.39-.39-1.02-.39-1.41 0l-6.36 6.36c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l6.36-6.36c.39-.39.39-1.02 0-1.41z"/>
                  </svg>
                  <h3 className="text-lg font-semibold text-primary">Cash App</h3>
                  <p className="text-sm text-primary mb-4">Quick and secure mobile donations</p>
                </div>
                <a
                  href="https://cash.app/$AMA1Albion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent text-white px-6 py-3 rounded-lg font-medium hover:bg-primary transition-colors inline-block"
                >
                  Donate via Cash App: $AMA1Albion
                </a>
              </div>

              {/* Mail Donations */}
              <div className="bg-surface p-6 rounded-lg">
                <div className="flex items-start space-x-4">
                  <svg className="w-8 h-8 text-accent mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Mail a Check</h3>
                    <p className="text-sm text-primary mb-3">You can also mail donations directly to us:</p>
                    <div className="bg-white p-3 rounded border">
                      <p className="text-primary text-sm">
                        <strong>Albion Ministerial Association</strong><br />
                        PO Box 481<br />
                        Albion, MI 49224
                      </p>
                    </div>
                    <p className="text-xs text-primary mt-2">
                      Please make checks payable to "Albion Ministerial Association"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Commitment */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-primary text-center">Our Commitment to You</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-surface p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold text-primary mb-2">Transparency</h3>
              <p className="text-sm text-primary">All donations are managed with complete transparency and accountability.</p>
            </div>

            <div className="text-center">
              <div className="bg-surface p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-primary mb-2">Faithful Stewardship</h3>
              <p className="text-sm text-primary">Every dollar is used purposefully to advance our mission in the community.</p>
            </div>

            <div className="text-center">
              <div className="bg-surface p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-primary mb-2">Maximum Impact</h3>
              <p className="text-sm text-primary">Your donation creates lasting change in our community through collaborative ministry.</p>
            </div>
          </div>
        </div>

        {/* Questions Section */}
        <div className="bg-surface p-8 rounded-xl shadow-md mt-8 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Questions About Donating?</h2>
          <p className="text-primary mb-6">
            We're here to help! Contact us for more information about how your donation will be used 
            or if you need assistance with your contribution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:517-494-0499"
              className="bg-secondary text-white px-6 py-3 rounded-lg font-medium hover:bg-accent transition-colors"
            >
              Call: 517-494-0499
            </a>
            <a
              href="mailto:Albionministers@gmail.com"
              className="bg-secondary text-white px-6 py-3 rounded-lg font-medium hover:bg-accent transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}