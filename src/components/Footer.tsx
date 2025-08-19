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
  {
    name: 'Twitter',
    href: 'https://twitter.com/nitecsng',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      </svg>
    )
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/nitda-nigeria',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    )
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com/nitdang',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    )
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/nitda_ng',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.986 11.988 11.986 6.618 0 11.986-5.368 11.986-11.986C24.003 5.367 18.635.001 12.017.001zM8.449 16.988c-2.297 0-4.163-1.866-4.163-4.163S6.152 8.662 8.449 8.662s4.163 1.866 4.163 4.163-1.866 4.163-4.163 4.163zm7.718 0c-2.297 0-4.163-1.866-4.163-4.163s1.866-4.163 4.163-4.163 4.163 1.866 4.163 4.163-1.866 4.163-4.163 4.163z" />
      </svg>
    )
  },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white">
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
                <span className="text-gray-400 text-sm">+2348182887766</span>
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
                  className="w-10 h-10 bg-gray-800 hover:bg-nitda-600 rounded-lg flex items-center justify-center transition-colors duration-200 group"
                  title={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-200">
                    {social.icon}
                  </span>
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
