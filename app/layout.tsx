import './globals.css';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Sidebar, MobileNav } from '@/components/Navigation';

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' });
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' });

export const metadata: Metadata = {
  title: 'Albion Ministerial Association',
  description: 'Connecting churches and serving Albion, MI.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-[#F5F5F2] font-sans text-[#7A6A53]`}>
        {/* Desktop Sidebar */}
        <Sidebar />
        
        {/* Mobile Navigation */}
        <MobileNav />
        
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
