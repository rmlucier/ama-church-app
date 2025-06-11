import HeroSection from './components/HeroSection';

// Placeholder church data
const churches = [
  {
    name: "New Hope Church",
    denomination: "Baptist",
    location: "Downtown Albion"
  },
  {
    name: "Grace Community Church",
    denomination: "Non-denominational",
    location: "West Side"
  },
  {
    name: "First United Methodist",
    denomination: "Methodist",
    location: "Historic District"
  },
  {
    name: "St. Mary's Catholic Church",
    denomination: "Catholic",
    location: "East Albion"
  },
  {
    name: "Albion Presbyterian",
    denomination: "Presbyterian",
    location: "North Side"
  },
  {
    name: "Faith Lutheran Church",
    denomination: "Lutheran",
    location: "South Albion"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Mission Section */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* Icon */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-6">
              <svg 
                className="w-8 h-8 text-pink-600" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" 
                />
              </svg>
            </div>
          </div>
          
          {/* Title */}
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
            Our Mission
          </h2>
          
          {/* Subtext */}
          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            The Albion Ministerial Association exists to unite the churches of Albion in prayer, service, and outreach. Together, we reflect the love of Jesus, foster unity, and meet the real needs of our neighbors—spiritually, emotionally, and physically.
          </p>
        </div>
      </section>

      {/* Churches United in Purpose Section */}
      <section className="bg-pink-100 py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Churches United in Purpose
            </h2>
            <p className="text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto">
              Dozens of churches working side by side for the good of Albion.
            </p>
          </div>

          {/* Church Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {churches.map((church, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {church.name}
                </h3>
                <p className="text-pink-600 font-medium mb-3">
                  {church.denomination}
                </p>
                <p className="text-gray-600 text-sm">
                  {church.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-3 text-gray-800">About AMA</h2>
              <p className="text-gray-600">Learn more about our mission and how we serve Albion.</p>
            </div>
            <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-3 text-gray-800">Find a Church</h2>
              <p className="text-gray-600">Discover local churches and find the right fit for you.</p>
            </div>
            <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-3 text-gray-800">Get Help</h2>
              <p className="text-gray-600">Find resources for food, shelter, clothing, and more.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
            Need Support? Start Here.
          </h2>
          <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8">
            Food, shelter, clothing, recovery, housing, and more — the Albion Ministerial Association helps connect you to the resources you need.
          </p>
          <a
            href="/help"
            className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-semibold px-10 py-4 rounded-full text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get Help
          </a>
        </div>
      </section>
    </main>
  );
}
