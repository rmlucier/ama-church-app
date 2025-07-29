export default function VolunteerPage() {
  return (
    <main className="bg-neutral min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-primary text-center">Get Involved</h1>
        
        {/* Hero Section */}
        <div className="bg-white p-8 rounded-xl shadow-md mb-8 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Join Us in Transforming Albion</h2>
          <p className="text-lg text-primary max-w-3xl mx-auto">
            The Albion Ministerial Association is always looking for passionate individuals who want to make a 
            difference in our community. Whether you're looking to volunteer, partner with us, or get your 
            church involved, there are many ways to join our mission.
          </p>
        </div>

        {/* Volunteer Opportunities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-6 text-primary">Volunteer Opportunities</h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-accent pl-4">
                <h3 className="text-lg font-semibold text-secondary mb-2">Community Outreach</h3>
                <p className="text-primary text-sm mb-2">
                  Help distribute food, clothing, and essential supplies to families in need throughout Albion.
                </p>
                <ul className="text-xs text-primary list-disc list-inside space-y-1">
                  <li>Food distribution events</li>
                  <li>Clothing drives and distribution</li>
                  <li>Community resource fairs</li>
                </ul>
              </div>

              <div className="border-l-4 border-accent pl-4">
                <h3 className="text-lg font-semibold text-secondary mb-2">Event Support</h3>
                <p className="text-primary text-sm mb-2">
                  Assist with planning and executing community events, church unity gatherings, and special programs.
                </p>
                <ul className="text-xs text-primary list-disc list-inside space-y-1">
                  <li>Event setup and coordination</li>
                  <li>Registration and check-in</li>
                  <li>Hospitality and guest services</li>
                </ul>
              </div>

              <div className="border-l-4 border-accent pl-4">
                <h3 className="text-lg font-semibold text-secondary mb-2">Administrative Support</h3>
                <p className="text-primary text-sm mb-2">
                  Help with office tasks, communications, and organizational needs.
                </p>
                <ul className="text-xs text-primary list-disc list-inside space-y-1">
                  <li>Data entry and record keeping</li>
                  <li>Communications and social media</li>
                  <li>Resource research and coordination</li>
                </ul>
              </div>

              <div className="border-l-4 border-accent pl-4">
                <h3 className="text-lg font-semibold text-secondary mb-2">Prayer Ministry</h3>
                <p className="text-primary text-sm mb-2">
                  Join our prayer team to support the spiritual backbone of all our community work.
                </p>
                <ul className="text-xs text-primary list-disc list-inside space-y-1">
                  <li>Regular prayer meetings</li>
                  <li>Prayer support for events</li>
                  <li>Community prayer initiatives</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-6 text-primary">Church Partnership</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-secondary mb-3">Become an AMA Member Church</h3>
                <p className="text-primary text-sm mb-4">
                  Join our network of churches working together to serve Albion. Member churches benefit from:
                </p>
                <ul className="text-sm text-primary list-disc list-inside space-y-2">
                  <li>Collaborative ministry opportunities</li>
                  <li>Shared resources and expertise</li>
                  <li>Leadership fellowship and support</li>
                  <li>Unified community outreach initiatives</li>
                  <li>Joint events and celebrations</li>
                </ul>
              </div>

              <div className="bg-surface p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">Membership Requirements</h4>
                <ul className="text-sm text-primary list-disc list-inside space-y-1">
                  <li>Commitment to our core values and mission</li>
                  <li>Regular participation in AMA meetings</li>
                  <li>Support for collaborative community initiatives</li>
                  <li>Biblical foundation and Christ-centered ministry</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Opportunities */}
        <div className="bg-white p-8 rounded-xl shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-primary text-center">Leadership Opportunities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-secondary mb-3">Committee Participation</h3>
              <p className="text-primary text-sm mb-3">
                Join one of our working committees to help guide specific areas of our ministry:
              </p>
              <ul className="text-sm text-primary list-disc list-inside space-y-1">
                <li>Community Outreach Committee</li>
                <li>Events and Programming Committee</li>
                <li>Resource Development Committee</li>
                <li>Communications Committee</li>
              </ul>
            </div>

            <div className="bg-surface p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-secondary mb-3">Board Positions</h3>
              <p className="text-primary text-sm mb-3">
                We periodically have openings for board positions and officer roles:
              </p>
              <ul className="text-sm text-primary list-disc list-inside space-y-1">
                <li>Executive Committee positions</li>
                <li>Committee chair roles</li>
                <li>Advisory board positions</li>
                <li>Specialized ministry leadership</li>
              </ul>
            </div>
          </div>
        </div>

        {/* How to Get Started */}
        <div className="bg-surface p-8 rounded-xl shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-primary text-center">How to Get Started</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <div className="bg-accent text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="font-semibold text-primary mb-2">Contact Us</h3>
              <p className="text-sm text-primary">Reach out to learn more about available opportunities and how to get involved.</p>
            </div>

            <div className="text-center">
              <div className="bg-accent text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="font-semibold text-primary mb-2">Meet & Connect</h3>
              <p className="text-sm text-primary">Attend one of our monthly meetings or events to meet our team and learn about our work.</p>
            </div>

            <div className="text-center">
              <div className="bg-accent text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="font-semibold text-primary mb-2">Start Serving</h3>
              <p className="text-sm text-primary">Begin volunteering in an area that matches your interests and availability.</p>
            </div>
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:517-494-0499"
                className="bg-accent text-white px-6 py-3 rounded-lg font-medium hover:bg-primary transition-colors"
              >
                Call: 517-494-0499
              </a>
              <a
                href="mailto:Albionministers@gmail.com"
                className="bg-secondary text-white px-6 py-3 rounded-lg font-medium hover:bg-accent transition-colors"
              >
                Email: Albionministers@gmail.com
              </a>
              <a
                href="/events"
                className="bg-white text-primary border-2 border-accent px-6 py-3 rounded-lg font-medium hover:bg-accent hover:text-white transition-colors"
              >
                View Upcoming Events
              </a>
            </div>
          </div>
        </div>

        {/* Current Needs */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-primary text-center">Current Volunteer Needs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-secondary mb-3">Immediate Opportunities</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <span className="text-primary text-sm">Food distribution volunteers (weekends)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <span className="text-primary text-sm">Event setup assistance</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <span className="text-primary text-sm">Social media and communications support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  <span className="text-primary text-sm">Prayer team members</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-secondary mb-3">Special Skills Needed</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-secondary rounded-full"></span>
                  <span className="text-primary text-sm">Graphic design and marketing</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-secondary rounded-full"></span>
                  <span className="text-primary text-sm">Website and technology support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-secondary rounded-full"></span>
                  <span className="text-primary text-sm">Grant writing and fundraising</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-secondary rounded-full"></span>
                  <span className="text-primary text-sm">Event planning and coordination</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}