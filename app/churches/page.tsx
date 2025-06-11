import { fetchCsv } from '../utils/csv';

type Church = {
  name: string;
  denomination: string;
  address: string;
  serviceTimes: string;
  pastor: string;
  website?: string;
};

async function getChurches(): Promise<Church[]> {
  try {
    const churches = await fetchCsv('/data/churches.csv');
    return churches as Church[];
  } catch (error) {
    console.error('Error loading churches:', error);
    return [];
  }
}

export default async function ChurchesPage() {
  const churches = await getChurches();

  return (
    <main className="bg-pink-100 min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Find a Church in Albion</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {churches.map((church, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md p-4 space-y-2">
              <h2 className="text-xl font-semibold text-gray-800">{church.name}</h2>
              <p className="text-gray-600">{church.denomination}</p>
              <p className="text-gray-600">{church.address}</p>
              <p className="text-gray-600">{church.serviceTimes}</p>
              <p className="text-gray-600">Pastor: {church.pastor}</p>
              {church.website && (
                <a
                  href={church.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 underline text-sm"
                >
                  Visit Website
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 