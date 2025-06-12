export default function AboutPage() {
  return (
    <main className="bg-[#F5F5F2] min-h-screen p-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4 text-[#7A6A53]">About AMA</h1>
        <p className="text-lg text-[#7A6A53] mb-8">
          The Albion Ministerial Association exists to unite local churches in the mission of
          serving our community, sharing the love of Christ, and building bridges between pastors,
          ministries, and neighborhoods.
        </p>

        <section className="bg-[#D5DED9] p-6 rounded-xl shadow-md text-left">
          <h2 className="text-2xl font-semibold mb-2 text-[#7A6A53]">Our Mission</h2>
          <p className="text-[#7A6A53] mb-4">
            To foster unity among the churches of Albion and collaborate in meeting the spiritual,
            emotional, and physical needs of our neighbors.
          </p>

          <h2 className="text-2xl font-semibold mb-2 text-[#7A6A53]">Our Vision</h2>
          <p className="text-[#7A6A53]">
            A unified body of Christ-centered churches working together to transform Albion through
            prayer, service, worship, and outreach.
          </p>
        </section>
      </div>
    </main>
  );
} 