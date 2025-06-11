import './globals.css';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Geist, Geist_Mono } from 'next/font/google';

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' });
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' });

export const metadata: Metadata = {
  title: 'Albion Ministerial Association',
  description: 'Connecting churches and serving Albion, MI.',
};

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/churches', label: 'Churches' },
  { href: '/help', label: 'Help' },
  { href: '/events', label: 'Events' },
  { href: '/contact', label: 'Contact' },
];

function Nav({ currentPath }: { currentPath: string }) {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-800">
          AMA
        </Link>
        <div className="space-x-4 text-sm font-medium">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`hover:text-pink-600 transition-colors px-2 py-1 rounded-md ${
                currentPath === href ? 'text-pink-600 font-semibold bg-pink-50' : 'text-gray-700'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-white shadow-inner mt-12">
      <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-center text-gray-600">
        © Albion Ministerial Association, {new Date().getFullYear()}<br />
        Made with love in Albion
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Use a client-side hook to get the current path for nav highlighting
  // This is a workaround for Next.js layouts being server components by default
  // and not having access to usePathname directly.
  // We'll use a dynamic import for the Nav to enable client-side hooks.
  // For now, we'll use a simple workaround with window.location.pathname if available.
  let currentPath = '/';
  if (typeof window !== 'undefined') {
    currentPath = window.location.pathname;
  }

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-pink-100 font-sans`}>
        {/* NavBar */}
        <Nav currentPath={currentPath} />
        {/* Main Content Wrapper */}
        <div className="min-h-screen max-w-6xl mx-auto px-4 py-8">
          {children}
        </div>
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
