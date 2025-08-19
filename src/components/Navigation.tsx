'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  GlobeAltIcon,
  SunIcon,
  MoonIcon
} from '@heroicons/react/24/outline';

interface NavItem {
  name: string;
  href: string;
  children?: NavItem[];
  description?: string;
}

const navigation: NavItem[] = [
  { name: 'Home', href: '/', description: 'ONDI Homepage' },
  { name: 'About', href: '/about', description: 'Learn about our mission' },
  {
    name: 'Programmes',
    href: '/programmes',
    description: 'Innovation programs and initiatives',
    children: [
      { name: 'Startup Accelerator', href: '/programmes/startup-accelerator', description: 'iHatch program for early-stage startups' },
      { name: 'Innovation Labs', href: '/programmes/innovation-labs', description: 'State-of-the-art research facilities' },
      { name: 'Corporate Innovation', href: '/programmes/corporate', description: 'Enterprise innovation partnerships' },
      { name: 'Talent Development', href: '/programmes/talent', description: 'Skills development and capacity building' },
    ]
  },
  { name: 'Directory', href: '/directory', description: 'Startup and innovation ecosystem directory' },
  {
    name: 'Opportunities',
    href: '/opportunities',
    description: 'Current opportunities and partnerships',
    children: [
      { name: 'Open Calls', href: '/opportunities/calls', description: 'Active funding and program calls' },
      { name: 'Partnerships', href: '/opportunities/partnerships', description: 'Strategic partnership opportunities' },
      { name: 'Events', href: '/opportunities/events', description: 'Upcoming events and workshops' },
    ]
  },
  { name: 'Impact', href: '/impact', description: 'Our impact and success stories' },
  { name: 'News', href: '/news', description: 'Latest news and updates' },
  { name: 'Resources', href: '/resources', description: 'Tools and resources for innovators' },
  { name: 'Contact', href: '/contact', description: 'Get in touch with ONDI' },
];

const searchableContent = [
  ...navigation.map(item => ({ name: item.name, href: item.href, type: 'page' })),
  { name: 'Apply for iHatch', href: '/programmes/startup-accelerator', type: 'action' },
  { name: 'Innovation Funding', href: '/opportunities/calls', type: 'action' },
  { name: 'Partnership Opportunities', href: '/opportunities/partnerships', type: 'action' },
  { name: 'Success Stories', href: '/impact', type: 'content' },
  { name: 'Tech Hubs', href: '/directory', type: 'content' },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<typeof searchableContent>([]);
  const [darkMode, setDarkMode] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Search functionality
  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = searchableContent.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filtered.slice(0, 5)); // Limit to 5 results
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  // Click outside to close search
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Dark mode toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Keyboard navigation for search
  const handleSearchKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  // Focus search when opened
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

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
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-white/20' : 'bg-gradient-to-r from-nitda-500 to-nitda-600'
      }`}>
      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <div className="relative">
                <Image
                  src="/ondi-logo.svg"
                  alt="ONDI - Office for Nigerian Digital Innovation"
                  width={140}
                  height={52}
                  className="object-contain hover:scale-105 transition-transform duration-300 drop-shadow-lg"
                />
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
                      className={`flex items-center space-x-1 font-medium transition-all duration-300 transform hover:scale-105 ${scrolled
                          ? 'text-gray-700 hover:text-nitda-600'
                          : 'text-white/90 hover:text-white'
                        } relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-current after:transition-all after:duration-300 hover:after:w-full`}
                      onClick={() => handleDropdownToggle(item.name)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          handleDropdownToggle(item.name);
                        }
                      }}
                      aria-expanded={activeDropdown === item.name}
                      aria-haspopup="true"
                      aria-label={`${item.name} menu`}
                    >
                      <span>{item.name}</span>
                      <ChevronDownIcon className={`h-4 w-4 transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                    </button>
                    {/* Enhanced Dropdown Menu */}
                    {activeDropdown === item.name && (
                      <div
                        className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 py-3 z-50 animate-in slide-in-from-top-2 duration-200"
                        role="menu"
                      >
                        <div className="px-4 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide border-b border-gray-100 dark:border-gray-700">
                          {item.description}
                        </div>
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-nitda-50 dark:hover:bg-gray-700 hover:text-nitda-600 dark:hover:text-nitda-400 transition-all duration-200 transform hover:translate-x-1"
                            onClick={() => setActiveDropdown(null)}
                            role="menuitem"
                          >
                            <div className="font-medium">{child.name}</div>
                            {child.description && (
                              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{child.description}</div>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`font-medium transition-all duration-300 transform hover:scale-105 ${scrolled
                        ? 'text-gray-700 hover:text-nitda-600'
                        : 'text-white/90 hover:text-white'
                      } relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-current after:transition-all after:duration-300 hover:after:w-full`}
                    aria-label={item.description}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Search and Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}
            <div className="relative" ref={searchRef}>
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className={`p-2 rounded-lg transition-all duration-200 transform hover:scale-110 ${scrolled
                    ? 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                aria-label="Search"
              >
                <MagnifyingGlassIcon className="h-5 w-5" />
              </button>

              {/* Search Dropdown */}
              {searchOpen && (
                <div className="absolute right-0 top-full mt-2 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 z-50 animate-in slide-in-from-top-2 duration-200">
                  <div className="p-4">
                    <input
                      ref={searchInputRef}
                      type="text"
                      placeholder="Search ONDI..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyDown={handleSearchKeyDown}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-nitda-500 focus:border-transparent outline-none transition-all duration-200"
                      aria-label="Search input"
                    />
                  </div>

                  {searchResults.length > 0 && (
                    <div className="border-t border-gray-200 dark:border-gray-700">
                      <div className="px-4 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                        Results
                      </div>
                      {searchResults.map((result, index) => (
                        <Link
                          key={index}
                          href={result.href}
                          className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-nitda-50 dark:hover:bg-gray-700 hover:text-nitda-600 dark:hover:text-nitda-400 transition-all duration-200"
                          onClick={() => {
                            setSearchOpen(false);
                            setSearchQuery('');
                          }}
                        >
                          <div className="flex justify-between items-center">
                            <span className="font-medium">{result.name}</span>
                            <span className="text-xs text-gray-400 capitalize">{result.type}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}

                  {searchQuery && searchResults.length === 0 && (
                    <div className="px-4 py-6 text-center text-sm text-gray-500 dark:text-gray-400">
                      No results found for "{searchQuery}"
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-all duration-200 transform hover:scale-110 ${scrolled
                  ? 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              type="button"
              className={`p-2 rounded-md transition-colors duration-200 ${scrolled
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
                        <ChevronDownIcon className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''
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
