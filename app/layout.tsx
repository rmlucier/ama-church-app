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

function Sidebar({ currentPath }: { currentPath: string }) {
  return (
    <aside className="fixed left-0 top-0 h-full w-56 bg-white shadow-lg z-40 hidden lg:block">
      <div className="p-6">
        {/* Logo */}
        <Link href="/" className="block mb-8">
          <h1 className="text-2xl font-bold text-gray-800 hover:text-pink-600 transition-colors">
            AMA
          </h1>
        </Link>
        
        {/* Navigation */}
        <nav className="space-y-2">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`block px-4 py-3 rounded-lg transition-all duration-200 ${
                currentPath === href 
                  ? 'text-pink-600 font-semibold bg-pink-50 border-l-4 border-pink-600' 
                  : 'text-gray-700 hover:text-pink-600 hover:bg-pink-50 hover:border-l-4 hover:border-pink-300'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}

function MobileNav({ currentPath }: { currentPath: string }) {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50 lg:hidden">
      <nav className="px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-gray-800">
            AMA
          </Link>
          <div className="flex space-x-2">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                  currentPath === href 
                    ? 'text-pink-600 font-semibold bg-pink-50' 
                    : 'text-gray-700 hover:text-pink-600 hover:bg-pink-50'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
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
        {/* Desktop Sidebar */}
        <Sidebar currentPath={currentPath} />
        
        {/* Mobile Navigation */}
        <MobileNav currentPath={currentPath} />
        
        {/* Main Content */}
        <main className="lg:ml-56 min-h-screen">
          <div className="p-6 lg:p-8">
            {children}
          </div>
        </main>
        
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
