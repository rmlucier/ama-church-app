'use client';

import { useEffect, useState } from 'react';
import { fetchCsv } from '@/lib/fetchCsv';
import { Button } from '@/components/ui/button';
import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger, DrawerClose } from '@/components/ui/drawer';

const SHEET_URL =
  'https://docs.google.com/spreadsheets/d/1XlMPoLVhTYkYqNObg6uSVhHZBUknpbOoQk4Kqmh2pRQ/gviz/tq?tqx=out:csv&sheet=Resource%20Directory';

type Resource = {
  Name: string;
  Type: string;
  Description: string;
  'Contact Name': string;
  Phone?: string;
  Email?: string;
  Hours?: string;
  Address?: string;
};

export default function HelpPage() {
  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchCsv<Resource>(SHEET_URL);
        setResources(data);
      } catch {
        setError('Unable to load resources at this time.');
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  return (
    <main className="bg-neutral min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6 text-primary">Get Help in Albion</h1>
        <p className="text-center text-primary mb-8">
          Need food, clothing, housing, or other support? These local resources are here to help.
        </p>

        {/* Loading / Error / Empty */}
        {loading && <p className="text-center text-primary">Loading resources...</p>}
        {error && <p className="text-center text-red-600">{error}</p>}
        {!loading && !error && resources.length === 0 && (
          <p className="text-center text-primary">No resources found.</p>
        )}

        {/* Resource Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {resources.map((resource, idx) => (
            <Drawer key={idx}>
              <DrawerTrigger asChild>
                <div className="bg-white border rounded-lg p-4 cursor-pointer hover:shadow-xl hover:-translate-y-1 hover:border-accent transition-all duration-300 ease-out">
                  {/* Resource Type Badge */}
                  <div className="bg-secondary text-white text-xs font-semibold px-2 py-1 rounded text-center mb-3">
                    {resource.Type}
                  </div>
                  
                  {/* Basic Info */}
                  <h3 className="font-semibold text-primary text-sm mb-1">{resource.Name}</h3>
                  <p className="text-primary text-xs line-clamp-2 mb-2">{resource.Description}</p>
                  {resource['Contact Name'] && (
                    <p className="text-accent text-xs">Contact: {resource['Contact Name']}</p>
                  )}
                </div>
              </DrawerTrigger>
              
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle className="text-xl text-primary">{resource.Name}</DrawerTitle>
                  <DrawerDescription className="text-secondary font-medium text-base">{resource.Type}</DrawerDescription>
                </DrawerHeader>
                
                <div className="px-4 pb-4">
                  {/* Resource Information List - Responsive Columns */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                    {/* Column 1 - Basic Info */}
                    <div className="space-y-4">
                      {/* Description */}
                      <div className="border-b border-gray-100 pb-3">
                        <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">Description</h4>
                        <p className="text-primary">{resource.Description}</p>
                      </div>
                      
                      {/* Contact Person */}
                      {resource['Contact Name'] && (
                        <div className="border-b border-gray-100 pb-3">
                          <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">Contact Person</h4>
                          <p className="text-primary">{resource['Contact Name']}</p>
                        </div>
                      )}
                      
                      {/* Hours */}
                      {resource.Hours && (
                        <div className="border-b border-gray-100 pb-3">
                          <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">Hours</h4>
                          <p className="text-primary">{resource.Hours}</p>
                        </div>
                      )}
                    </div>
                    
                    {/* Column 2 - Contact & Location Info */}
                    <div className="space-y-4">
                      {/* Contact Information */}
                      {(resource.Phone || resource.Email) && (
                        <div className="border-b border-gray-100 pb-3">
                          <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">Contact Info</h4>
                          <div className="space-y-1">
                            {resource.Phone && <p className="text-primary">{resource.Phone}</p>}
                            {resource.Email && <p className="text-primary">{resource.Email}</p>}
                          </div>
                        </div>
                      )}
                      
                      {/* Address */}
                      {resource.Address && (
                        <div className="border-b border-gray-100 pb-3">
                          <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">Address</h4>
                          <p className="text-primary">{resource.Address}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                <DrawerFooter className="flex-col space-y-2">
                  {resource.Email && (
                    <Button
                      onClick={() => {
                        const email = resource.Email;
                        if (!email) return;
                        
                        // Copy email to clipboard for security
                        if (navigator.clipboard) {
                          navigator.clipboard.writeText(email).then(() => {
                            alert(`Contact email (${email}) copied to clipboard!`);
                          });
                        } else {
                          // Fallback: Show email in alert for manual copy
                          alert(`Contact email: ${email}\n\nPlease copy this email address to contact them.`);
                        }
                      }}
                      className="w-full"
                      variant="outline"
                    >
                      Get Contact Email
                    </Button>
                  )}
                  {resource.Phone && (
                    <Button
                      onClick={() => {
                        const phone = resource.Phone;
                        if (!phone) return;
                        
                        // Copy phone to clipboard
                        if (navigator.clipboard) {
                          navigator.clipboard.writeText(phone).then(() => {
                            alert(`Phone number (${phone}) copied to clipboard!`);
                          });
                        } else {
                          // Fallback: Show phone in alert for manual copy
                          alert(`Phone number: ${phone}\n\nPlease copy this number to contact them.`);
                        }
                      }}
                      className="w-full"
                      variant="outline"
                    >
                      Get Phone Number
                    </Button>
                  )}
                  {resource.Address && (
                    <Button
                      asChild
                      className="w-full"
                      variant="outline"
                    >
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(resource.Address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Get Directions
                      </a>
                    </Button>
                  )}
                  <DrawerClose asChild>
                    <Button variant="outline">Close</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          ))}
        </div>
      </div>
    </main>
  );
} 