'use client';

export default function NightOfTreasuresPage() {
  return (
    <main className="bg-surface min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent to-secondary text-white py-16 px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-sm font-semibold opacity-90 mb-2">
            ALBION MINISTERIAL ASSOCIATION
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Night of Treasures
          </h1>
          <div className="text-2xl md:text-3xl font-bold opacity-95 mb-6">
            2024
          </div>
          <p className="text-xl md:text-2xl opacity-90 mb-6">
            Honoring Women Who Serve in Ministry and Entrepreneurship
          </p>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
            <div className="text-2xl font-bold mb-2">Sunday, November 3rd</div>
            <div className="text-lg">4:00 PM</div>
            <div className="text-base opacity-90 mt-2">Freeway Church, Albion</div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Event Overview */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">
              About Night of Treasures 2024
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-primary text-lg leading-relaxed mb-6">
                Join us as we celebrate and honor the incredible women who serve in ministry 
                and entrepreneurship throughout our Albion community. This special evening 
                recognizes the treasures these women bring to our churches, businesses, and 
                neighborhoods through their dedication, leadership, and service.
              </p>
              
              <div className="bg-accent/10 border-l-4 border-accent p-6 rounded">
                <h3 className="text-xl font-semibold text-primary mb-4">Event Details</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2 text-primary">
                    <p><span className="font-medium">Date:</span> Sunday, November 3rd, 2024</p>
                    <p><span className="font-medium">Time:</span> 4:00 PM</p>
                    <p><span className="font-medium">Location:</span> Freeway Church</p>
                    <p><span className="font-medium">Address:</span> 28900 B Drive North, Albion, MI</p>
                  </div>
                  <div className="space-y-2 text-primary">
                    <p><span className="font-medium">Theme:</span> Women in Ministry & Entrepreneurship</p>
                    <p><span className="font-medium">Host:</span> Albion Ministerial Association</p>
                    <p><span className="font-medium">Email:</span> albionministers@gmail.com</p>
                    <p><span className="font-medium">Phone:</span> (517) 494-0499</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Program */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">
              Featured Program
            </h2>
            
            {/* Main Speaker */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-primary mb-2">Keynote Speaker</h3>
                <div className="text-xl font-semibold text-accent">Dr. Carmen Thomas</div>
              </div>
              <p className="text-primary/80 text-center max-w-2xl mx-auto">
                Join us for an inspiring message from Dr. Carmen Thomas as we celebrate 
                women who are making a difference in ministry and entrepreneurship.
              </p>
            </div>

            {/* Program Highlights */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 3v10a2 2 0 002 2h6a2 2 0 002-2V7H7zM9 12h6m-6 4h6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">Clean Comedy</h3>
                <p className="text-primary/80">
                  Enjoy an evening of laughter with clean comedian <strong>Crystal P.</strong> bringing 
                  joy and humor to our celebration.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">Musical Worship</h3>
                <p className="text-primary/80">
                  Experience beautiful worship music with <strong>The Albion Community Choir</strong> 
                  under the direction of Ronnie Sims.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">Honor Women Leaders</h3>
                <p className="text-primary/80">
                  Celebrate and recognize women who serve with excellence in ministry 
                  and entrepreneurship throughout our community.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">Community Fellowship</h3>
                <p className="text-primary/80">
                  Connect with fellow believers from churches across Albion in an 
                  atmosphere of unity and celebration.
                </p>
              </div>
            </div>
          </div>

          {/* Registration/Contact Section */}
          <div className="bg-gradient-to-r from-accent/10 to-secondary/10 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Join Us for Night of Treasures
            </h2>
            <p className="text-lg text-primary/80 mb-6">
              Be part of this special evening celebrating our church community.
            </p>
            
            <div className="space-y-4">
              <p className="text-primary">
                For more information about Night of Treasures, please contact:
              </p>
              <div className="inline-flex items-center space-x-4">
                <a 
                  href="mailto:albionministers@gmail.com" 
                  className="bg-accent text-white px-6 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors"
                >
                  Contact Us
                </a>
                <a 
                  href="tel:517-494-0499" 
                  className="bg-secondary text-white px-6 py-3 rounded-lg font-medium hover:bg-secondary/90 transition-colors"
                >
                  Call (517) 494-0499
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}