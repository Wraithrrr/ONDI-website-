'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  EnvelopeIcon,
  ArrowRightIcon,
  BellIcon
} from '@heroicons/react/24/outline';

export default function NewsletterAndCTA() {
  return (
    <section className="py-24 bg-gradient-to-b from-nitda-600 via-nitda-700 to-gray-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-nitda-600/80 via-nitda-700/60 to-gray-900/90"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Newsletter Content */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <BellIcon className="w-5 h-5 text-nitda-300" />
            <span className="text-nitda-100 text-sm font-medium">Stay Updated</span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-8">
            Never Miss an <span className="bg-gradient-to-r from-nitda-300 to-blue-300 bg-clip-text text-transparent">Innovation</span>
          </h2>
          <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            Get exclusive updates on innovation programs, funding opportunities, startup success stories,
            and the latest developments in Nigeria&apos;s digital ecosystem
          </p>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-12"
          >
            <div className="relative flex-1">
              <EnvelopeIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full pl-12 pr-4 py-4 rounded-xl border-0 focus:ring-2 focus:ring-nitda-300 focus:outline-none text-gray-900 placeholder-gray-500 shadow-lg"
              />
            </div>
            <button className="bg-nitda-800 hover:bg-nitda-900 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap">
              Subscribe Now
              <ArrowRightIcon className="w-5 h-5 inline-block ml-2" />
            </button>
          </motion.div>

          <p className="text-gray-300 text-sm">
            Join 25,000+ innovators, entrepreneurs, and tech leaders • Unsubscribe anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
}
