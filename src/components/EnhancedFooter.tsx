'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ArrowUpIcon,
  ChevronUpIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline';

const footerSections = [
  {
    title: 'About ONDI',
    links: [
      { name: 'Our Mission', href: '/about#mission' },
      { name: 'Leadership', href: '/about#leadership' },
      { name: 'Annual Reports', href: '/resources/reports' },
      { name: 'Careers', href: '/about/careers' },
      { name: 'News & Media', href: '/news' }
    ]
  },
  {
    title: 'Programs',
    links: [
      { name: 'iHatch Accelerator', href: '/programmes/startup-accelerator' },
      { name: 'Regulatory Sandbox', href: '/programmes/regulatory-sandbox' },
      { name: 'Innovation Infrastructure', href: '/programmes/infrastructure' },
      { name: 'Talent Development', href: '/programmes/talent-development' },
      { name: 'All Programs', href: '/programmes' }
    ]
  },
  {
    title: 'Opportunities',
    links: [
      { name: 'Open Calls', href: '/opportunities/calls' },
      { name: 'Partnerships', href: '/opportunities/partnerships' },
      { name: 'Events', href: '/opportunities/events' },
      { name: 'Grants & Funding', href: '/opportunities/funding' },
      { name: 'Apply Now', href: '/opportunities/apply' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { name: 'Startup Directory', href: '/directory' },
      { name: 'Research & Reports', href: '/resources/research' },
      { name: 'Guidelines', href: '/resources/guidelines' },
      { name: 'Downloads', href: '/resources/downloads' },
      { name: 'FAQs', href: '/resources/faq' }
    ]
  }
];

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/nitecsng', icon: '🐦' },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/nitda-nigeria', icon: '💼' },
  { name: 'Facebook', href: 'https://facebook.com/nitdang', icon: '📘' },
  { name: 'Instagram', href: 'https://instagram.com/nitda_ng', icon: '�' },
  { name: 'YouTube', href: 'https://youtube.com/@nitdangng', icon: '📹' }
];

export default function EnhancedFooter() {
  const [openSections, setOpenSections] = useState<string[]>([]);
  const [emailSubscription, setEmailSubscription] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const toggleSection = (title: string) => {
    setOpenSections(prev =>
      prev.includes(title)
        ? prev.filter(section => section !== title)
        : [...prev, title]
    );
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    setIsSubscribed(true);
    setTimeout(() => setIsSubscribed(false), 3000);
    setEmailSubscription('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white transition-colors duration-300">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Stay Updated with Nigerian Innovation
              </h3>
              <p className="text-gray-300 text-lg">
                Get the latest news, opportunities, and insights from Nigeria&apos;s digital innovation ecosystem delivered to your inbox.
              </p>
            </div>
            <div>
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={emailSubscription}
                  onChange={(e) => setEmailSubscription(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 bg-gray-800 dark:bg-gray-900 border border-gray-700 rounded-xl focus:ring-2 focus:ring-nitda-500 focus:border-transparent outline-none transition-all duration-200 text-white placeholder-gray-400"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-gradient-to-r from-nitda-500 to-teal-500 text-white font-semibold rounded-xl hover:shadow-lg transform transition-all duration-300 hover:scale-105 whitespace-nowrap"
                  disabled={isSubscribed}
                >
                  {isSubscribed ? 'Subscribed!' : 'Subscribe'}
                </button>
              </form>
              {isSubscribed && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 mt-2"
                >
                  Thank you for subscribing! 🎉
                </motion.p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-nitda-500 to-teal-500 rounded-xl flex items-center justify-center">
                <Image
                  src="/ondi-logo.svg"
                  alt="ONDI Logo"
                  width={32}
                  height={24}
                  className="object-contain"
                />
              </div>
              <div>
                <h4 className="text-xl font-bold">ONDI</h4>
                <p className="text-gray-400 text-sm">Office for Nigerian Digital Innovation</p>
              </div>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering Nigeria&apos;s digital future through innovation, entrepreneurship, and strategic partnerships.
              We are building Africa&apos;s largest digital economy, one startup at a time.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPinIcon className="h-5 w-5 text-nitda-400 flex-shrink-0" />
                <span className="text-gray-300">NCAIR Complex, Wuye District, Abuja FCT</span>
              </div>
              <div className="flex items-center space-x-3">
                <PhoneIcon className="h-5 w-5 text-nitda-400 flex-shrink-0" />
                <span className="text-gray-300">+234 (0) 9 123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <EnvelopeIcon className="h-5 w-5 text-nitda-400 flex-shrink-0" />
                <span className="text-gray-300">info@ondi.gov.ng</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-4">
            {/* Desktop Navigation */}
            <div className="hidden md:grid grid-cols-4 gap-8">
              {footerSections.map((section) => (
                <div key={section.title}>
                  <h5 className="text-lg font-semibold mb-4 text-white">{section.title}</h5>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className="text-gray-300 hover:text-nitda-400 transition-colors duration-200 text-sm"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Mobile Navigation (Accordion) */}
            <div className="md:hidden space-y-4">
              {footerSections.map((section) => (
                <div key={section.title} className="border-b border-gray-800 pb-4">
                  <button
                    onClick={() => toggleSection(section.title)}
                    className="flex items-center justify-between w-full text-left"
                  >
                    <h5 className="text-lg font-semibold text-white">{section.title}</h5>
                    {openSections.includes(section.title) ? (
                      <ChevronUpIcon className="h-5 w-5 text-gray-400" />
                    ) : (
                      <ChevronDownIcon className="h-5 w-5 text-gray-400" />
                    )}
                  </button>

                  {openSections.includes(section.title) && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 space-y-3"
                    >
                      {section.links.map((link) => (
                        <li key={link.name}>
                          <Link
                            href={link.href}
                            className="text-gray-300 hover:text-nitda-400 transition-colors duration-200 text-sm block"
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="border-t border-gray-800 dark:border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 dark:bg-gray-900 rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-nitda-500 hover:to-teal-500 transition-all duration-300 transform hover:scale-110 group"
                  aria-label={social.name}
                >
                  <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>

            <button
              onClick={scrollToTop}
              className="w-12 h-12 bg-gradient-to-r from-nitda-500 to-teal-500 rounded-xl flex items-center justify-center hover:shadow-lg transform transition-all duration-300 hover:scale-110 group"
              aria-label="Scroll to top"
            >
              <ArrowUpIcon className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
              <span>&copy; 2025 Office for Nigerian Digital Innovation (ONDI). All rights reserved.</span>
              <div className="flex space-x-4">
                <Link href="/privacy" className="hover:text-nitda-400 transition-colors duration-200">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-nitda-400 transition-colors duration-200">
                  Terms of Service
                </Link>
                <Link href="/accessibility" className="hover:text-nitda-400 transition-colors duration-200">
                  Accessibility
                </Link>
              </div>
            </div>

            <div className="text-sm text-gray-400">
              Built with ❤️ for Nigeria&apos;s Digital Future
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
