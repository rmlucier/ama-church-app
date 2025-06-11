export default function Home() {
  return (
    <main className="bg-pink-100 min-h-screen p-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Albion Ministerial Association
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Uniting churches, serving Albion, and sharing the love of Christ together.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-xl p-4">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">About AMA</h2>
            <p className="text-gray-600">Learn more about our mission and how we serve Albion.</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-4">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">Find a Church</h2>
            <p className="text-gray-600">Discover local churches and find the right fit for you.</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-4">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">Get Help</h2>
            <p className="text-gray-600">Find resources for food, shelter, clothing, and more.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
