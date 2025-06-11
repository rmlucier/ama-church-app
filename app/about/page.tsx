export default function AboutPage() {
  return (
    <main className="bg-pink-100 min-h-screen p-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">About AMA</h1>
        <p className="text-lg text-gray-700 mb-8">
          The Albion Ministerial Association exists to unite local churches in the mission of
          serving our community, sharing the love of Christ, and building bridges between pastors,
          ministries, and neighborhoods.
        </p>

        <section className="bg-white p-6 rounded-xl shadow-md text-left">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            To foster unity among the churches of Albion and collaborate in meeting the spiritual,
            emotional, and physical needs of our neighbors.
          </p>

          <h2 className="text-2xl font-semibold mb-2 text-gray-800">Our Vision</h2>
          <p className="text-gray-700">
            A unified body of Christ-centered churches working together to transform Albion through
            prayer, service, worship, and outreach.
          </p>
        </section>
      </div>
    </main>
  );
} 