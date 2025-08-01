'use client';

import Link from 'next/link';
import { 
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const footerLinks = {
  'About ONDI': [
    { name: 'Our Mandate', href: '/about#mandate' },
    { name: 'Mission & Vision', href: '/about#mission' },
    { name: 'Leadership', href: '/about#leadership' },
    { name: 'What We Do', href: '/about#what-we-do' },
  ],
  'Programs': [
    { name: 'Startup Support', href: '/programmes/startup-support' },
    { name: 'Funding & Incentives', href: '/programmes/funding' },
    { name: 'Talent Development', href: '/programmes/talent' },
    { name: 'Innovation Infrastructure', href: '/programmes/infrastructure' },
  ],
  'Resources': [
    { name: 'Policy Documents', href: '/resources/policies' },
    { name: 'Innovation Guides', href: '/resources/guides' },
    { name: 'Toolkits & Templates', href: '/resources/toolkits' },
    { name: 'FAQs', href: '/resources/faqs' },
  ],
  'Quick Links': [
    { name: 'Innovation Directory', href: '/directory' },
    { name: 'Open Calls', href: '/opportunities/open-calls' },
    { name: 'Success Stories', href: '/impact' },
    { name: 'Contact Us', href: '/contact' },
  ],
};

const socialLinks = [
  { name: 'Twitter', href: '#', icon: '🐦' },
  { name: 'LinkedIn', href: '#', icon: '💼' },
  { name: 'Facebook', href: '#', icon: '📘' },
  { name: 'YouTube', href: '#', icon: '📺' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with ONDI
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Get the latest news on innovation programs, funding opportunities, and success stories from Nigeria&apos;s digital ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600"
              />
              <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">ONDI</span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-lg">ONDI</span>
                <span className="text-sm text-gray-400">Office for Nigerian Digital Innovation</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering Nigeria&apos;s digital future through innovation, talent development, and strategic partnerships. 
              A special purpose vehicle of NITDA.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPinIcon className="w-5 h-5 text-gray-400" />
                <span className="text-gray-400 text-sm">
                  No. 28, Port Harcourt Crescent, Area 11, Garki, Abuja, Nigeria
                </span>
              </div>
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-5 h-5 text-gray-400" />
                <span className="text-gray-400 text-sm">+234 (0) 9 461 0005</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-5 h-5 text-gray-400" />
                <span className="text-gray-400 text-sm">info@ondi.gov.ng</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © 2025 Office for Nigerian Digital Innovation (ONDI). All rights reserved.
            </div>

            {/* Government Links */}
            <div className="flex items-center gap-6 text-sm">
              <Link href="https://nitda.gov.ng" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-1">
                <GlobeAltIcon className="w-4 h-4" />
                NITDA
              </Link>
              <Link href="https://nigeria.gov.ng" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-1">
                <GlobeAltIcon className="w-4 h-4" />
                Nigeria.gov.ng
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                  title={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Government Badge */}
      <div className="bg-government-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="text-center text-white text-sm">
            🇳🇬 An Official Website of the Federal Republic of Nigeria
          </div>
        </div>
      </div>
    </footer>
  );
}
