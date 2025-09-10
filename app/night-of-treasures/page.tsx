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
            2025
          </div>
          <p className="text-xl md:text-2xl opacity-90 mb-6">
            Honoring Servant Leaders
          </p>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 max-w-3xl mx-auto">
            <div className="text-lg italic opacity-95 mb-4">
              &ldquo;Just as the Son of Man did not come to be served, but to serve, and to give his life as a ransom for many.&rdquo;
            </div>
            <div className="text-sm opacity-80 mb-4">Matthew 20:28 NIV</div>
            <div className="text-2xl font-bold mb-2">Sunday, November 2nd, 2025</div>
            <div className="text-lg">4:00 PM</div>
            <div className="text-base opacity-90 mt-2">Freeway Church, 28900 B-Drive N, Albion, MI 49224</div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Event Flyer */}
          <div className="mb-16 text-center">
            <img 
              src="/images/events/night-of-treasures-2025.png" 
              alt="Night of Treasures 2025 - Save the Date - Sunday, November 2, 2025 at 4:00 PM"
              className="max-w-2xl w-full mx-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Event Overview */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">
              About Night of Treasures 2025
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-primary text-lg leading-relaxed mb-6">
                Join us as we celebrate and honor servant leaders throughout our Albion 
                community. This special evening recognizes those who follow Christ&apos;s example 
                of serving others, giving of themselves for the betterment of our churches 
                and community.
              </p>
              
              <div className="bg-accent/10 border-l-4 border-accent p-6 rounded">
                <h3 className="text-xl font-semibold text-primary mb-4">Event Details</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2 text-primary">
                    <p><span className="font-medium">Date:</span> Sunday, November 2nd, 2025</p>
                    <p><span className="font-medium">Time:</span> 4:00 PM</p>
                    <p><span className="font-medium">Location:</span> Freeway Church</p>
                    <p><span className="font-medium">Address:</span> 28900 B-Drive N, Albion, MI 49224</p>
                  </div>
                  <div className="space-y-2 text-primary">
                    <p><span className="font-medium">Theme:</span> Honoring Servant Leaders</p>
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
              Join Us for an Evening of...
            </h2>
            
            {/* Program Highlights - Updated for 2025 */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 3v10a2 2 0 002 2h6a2 2 0 002-2V7H7zM9 12h6m-6 4h6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-accent mb-4">Clean Comedy</h3>
                <p className="text-primary/80 text-lg">
                  Enjoy uplifting entertainment that brings joy and laughter to our celebration of service.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4">Worship</h3>
                <p className="text-primary/80 text-lg">
                  Experience inspiring worship music that honors God and celebrates His faithful servants.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-accent mb-4">Community Awards</h3>
                <p className="text-primary/80 text-lg">
                  Recognize and celebrate servant leaders who exemplify Christ&apos;s heart for others.
                </p>
              </div>
            </div>

            {/* Biblical Foundation */}
            <div className="bg-gradient-to-r from-accent/5 to-secondary/5 rounded-lg p-8 mt-12 text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">Our Foundation</h3>
              <blockquote className="text-xl italic text-primary/90 mb-4 max-w-4xl mx-auto">
                &ldquo;Honoring servant leaders just as the Son of Man did not come to be served, 
                but to serve, and to give his life as a ransom for many.&rdquo;
              </blockquote>
              <cite className="text-lg font-medium text-accent">Matthew 20:28 NIV</cite>
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