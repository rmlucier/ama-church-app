'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/churches', label: 'Churches' },
  { href: '/help', label: 'Help' },
  { href: '/events', label: 'Events' },
  { href: '/contact', label: 'Contact' },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-full w-56 bg-white shadow-lg z-40 hidden lg:block flex flex-col">
      <div className="p-6 flex-1">
        {/* Logo */}
        <Link href="/" className="block mb-8">
          <h1 className="text-2xl font-bold text-[#7A6A53] hover:text-[#99B2B7] transition-colors">
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
                  ? 'bg-[#948C75] text-white font-semibold' 
                  : 'text-[#7A6A53] hover:bg-[#D9CEB2] hover:text-[#7A6A53]'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Footer in Sidebar */}
      <div className="p-6 border-t border-gray-200">
        <div className="text-xs text-[#7A6A53] text-center">
          © Albion Ministerial Association, {new Date().getFullYear()}<br />
          Made with love in Albion
        </div>
      </div>
    </aside>
  );
}

export function MobileNav() {
  const pathname = usePathname();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 lg:hidden">
      <nav className="px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-[#7A6A53]">
            AMA
          </Link>
          <div className="flex space-x-2">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                  pathname === href 
                    ? 'bg-[#948C75] text-white font-semibold' 
                    : 'text-[#7A6A53] hover:bg-[#D9CEB2] hover:text-[#7A6A53]'
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