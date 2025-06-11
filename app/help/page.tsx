import { fetchCsv } from '../utils/csv';

type Resource = {
  name: string;
  type: string;
  description: string;
  contactName: string;
  phone?: string;
  email?: string;
  hours?: string;
  address?: string;
};

async function getResources(): Promise<Resource[]> {
  try {
    const resources = await fetchCsv('/data/resources.csv');
    return resources as Resource[];
  } catch (error) {
    console.error('Error loading resources:', error);
    return [];
  }
}

export default async function HelpPage() {
  const resources = await getResources();

  return (
    <main className="bg-pink-100 min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">Get Help in Albion</h1>
        <p className="text-center text-gray-700 mb-8">
          Need food, clothing, housing, or other support? These local resources are here to help.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md p-4 space-y-2">
              <h2 className="text-xl font-semibold text-gray-800">{resource.name}</h2>
              <p className="text-pink-700 font-medium">{resource.type}</p>
              <p className="text-gray-600">{resource.description}</p>
              {resource.contactName && (
                <p className="text-gray-600">Contact: {resource.contactName}</p>
              )}
              {resource.phone && <p className="text-gray-600">Phone: {resource.phone}</p>}
              {resource.email && (
                <p className="text-gray-600">
                  Email: <a href={`mailto:${resource.email}`} className="underline text-pink-600">{resource.email}</a>
                </p>
              )}
              {resource.hours && <p className="text-gray-600">Hours: {resource.hours}</p>}
              {resource.address && <p className="text-gray-600">Address: {resource.address}</p>}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 