'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/churches', label: 'Churches' },
  { href: '/help', label: 'Help' },
  { href: '/events', label: 'Events' },
  { href: '/volunteer', label: 'Get Involved' },
  { href: '/donate', label: 'Donate' },
  { href: '/contact', label: 'Contact' },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-full w-56 bg-white shadow-lg z-40 hidden lg:block flex flex-col">
      <div className="p-6 flex-1">
        {/* Logo */}
        <Link href="/" className="block mb-8">
          <h1 className="text-2xl text-heading hover:text-secondary transition-colors">
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
                pathname === href 
                  ? 'bg-accent text-white font-semibold' 
                  : 'text-primary hover:bg-surface hover:text-primary'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Footer in Sidebar */}
      <div className="p-6 border-t border-gray-200">
        <div className="text-xs text-primary text-center space-y-2">
          <div className="flex justify-center space-x-4">
            <Link href="/privacy" className="hover:text-accent transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-accent transition-colors">Terms</Link>
          </div>
          <div>
            © Albion Ministerial Association, {new Date().getFullYear()}<br />
            Made with love in Albion
          </div>
        </div>
      </div>
    </aside>
  );
}

export function MobileNav() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 lg:hidden">
      <nav className="px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-xl text-heading">
            AMA
          </Link>
          
          {/* Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md text-primary hover:bg-surface transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Dropdown Menu */}
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white rounded-lg shadow-lg mt-4 border border-gray-100">
            <nav className="py-2">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  className={`block px-4 py-3 text-sm font-medium transition-colors ${
                    pathname === href 
                      ? 'bg-accent text-white' 
                      : 'text-primary hover:bg-surface hover:text-accent'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </nav>
    </header>
  );
} 