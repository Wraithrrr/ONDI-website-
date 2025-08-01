'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Bars3Icon, 
  XMarkIcon, 
  ChevronDownIcon,
  MagnifyingGlassIcon,
  GlobeAltIcon 
} from '@heroicons/react/24/outline';

interface NavItem {
  name: string;
  href: string;
  children?: NavItem[];
}

const navigation: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { 
    name: 'Programmes', 
    href: '/programmes',
    children: [
      { name: 'Startup Accelerator', href: '/programmes' },
      { name: 'Innovation Labs', href: '/programmes' },
      { name: 'Corporate Innovation', href: '/programmes' },
      { name: 'Talent Development', href: '/programmes' },
    ]
  },
  { name: 'Directory', href: '/directory' },
  { 
    name: 'Opportunities', 
    href: '/opportunities',
    children: [
      { name: 'Open Calls', href: '/opportunities' },
      { name: 'Partnerships', href: '/opportunities' },
      { name: 'Events', href: '/opportunities' },
    ]
  },
  { name: 'Impact', href: '/impact' },
  { name: 'News', href: '/news' },
  { name: 'Resources', href: '/resources' },
  { name: 'Contact', href: '/contact' },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownToggle = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-white/20' : 'bg-gradient-professional'
    }`}>
      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30 shadow-lg">
                <Image
                  src="/ondi-logo.svg"
                  alt="ONDI Logo"
                  width={56}
                  height={42}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className={`font-bold text-xl ${scrolled ? 'text-gray-900' : 'text-white drop-shadow-sm'}`}>ONDI</span>
                <span className={`text-sm font-medium ${scrolled ? 'text-gray-600' : 'text-white/90 drop-shadow-sm'}`}>Office for Nigerian Digital Innovation</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.children ? (
                  <div>
                    <button
                      className={`flex items-center space-x-1 font-medium transition-colors duration-200 ${
                        scrolled 
                          ? 'text-gray-700 hover:text-nitda-600' 
                          : 'text-white/90 hover:text-white'
                      }`}
                      onClick={() => handleDropdownToggle(item.name)}
                    >
                      <span>{item.name}</span>
                      <ChevronDownIcon className={`h-4 w-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>
                    {/* Dropdown Menu */}
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-nitda-50 hover:text-nitda-600 transition-colors duration-150"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`font-medium transition-colors duration-200 ${
                      scrolled 
                        ? 'text-gray-700 hover:text-nitda-600' 
                        : 'text-white/90 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              type="button"
              className={`p-2 rounded-md transition-colors duration-200 ${
                scrolled 
                  ? 'text-gray-400 hover:text-gray-500 hover:bg-gray-100' 
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <div>
                      <button
                        className="flex w-full items-center justify-between px-3 py-2 text-gray-700 hover:text-primary-600 font-medium"
                        onClick={() => handleDropdownToggle(item.name)}
                      >
                        <span>{item.name}</span>
                        <ChevronDownIcon className={`h-4 w-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      {activeDropdown === item.name && (
                        <div className="pl-6 space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="block py-2 text-sm text-gray-600 hover:text-primary-600"
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setActiveDropdown(null);
                              }}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
