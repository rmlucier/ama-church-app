import './globals.css';
import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import { Sidebar, MobileNav } from '@/components/Navigation';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

const SITE_NAME = 'Albion Ministerial Association';
const SITE_DESCRIPTION =
  'Churches of Albion, MI united in prayer, service, and the Great Commission. Find a church, upcoming events, and local help resources.';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.albionministers.org'),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: '/',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  alternates: { canonical: '/' },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="font-sans bg-neutral text-primary">
        {/* Keyboard users can jump past the navigation */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:bg-white focus:text-primary focus:px-4 focus:py-2 focus:rounded-md focus:shadow-lg focus:outline focus:outline-2 focus:outline-accent"
        >
          Skip to main content
        </a>

        {/* Desktop Sidebar */}
        <Sidebar />

        {/* Mobile Navigation */}
        <MobileNav />

        {/* Donate Button - Fixed to top-right corner (desktop only) */}
        <a
          href="https://cash.app/$AMA1Albion"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed top-4 right-4 z-50 bg-accent text-white text-sm font-medium px-4 py-2 rounded-full shadow-lg hover:bg-primary hover:scale-105 transition-all duration-200 hidden lg:block"
        >
          Donate
        </a>

        {/* Main Content */}
        <main id="main-content" tabIndex={-1} className="lg:ml-56 min-h-screen focus:outline-none">
          <div className="p-6 lg:p-8">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
