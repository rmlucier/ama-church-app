import './globals.css';
import type { Metadata } from 'next';
import { Sidebar, MobileNav } from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Albion Ministerial Association',
  description: 'Connecting churches and serving Albion, MI.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans bg-neutral text-primary">
        {/* Desktop Sidebar */}
        <Sidebar />
        
        {/* Mobile Navigation */}
        <MobileNav />
        
        {/* Donate Button - Fixed to top-right corner */}
        <a
          href="https://cash.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed top-4 right-4 z-50 bg-accent/90 text-white text-sm font-medium px-4 py-2 rounded-full shadow-lg hover:bg-accent hover:scale-105 transition-all duration-200"
        >
          Donate
        </a>
        
        {/* Main Content */}
        <main className="lg:ml-56 min-h-screen">
          <div className="p-6 lg:p-8">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
