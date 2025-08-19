'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  UserIcon,
  FlagIcon,
  EyeIcon,
  RocketLaunchIcon,
  UserGroupIcon,
  CogIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

const focusAreas = [
  {
    title: 'Startup Ecosystem Development',
    description: 'Building a thriving environment for early-stage innovation and entrepreneurship',
    icon: RocketLaunchIcon
  },
  {
    title: 'Strategic Partnerships',
    description: 'Fostering collaborations between government, private sector, and academia',
    icon: UserGroupIcon
  },
  {
    title: 'Innovation Infrastructure',
    description: 'Developing world-class facilities and digital platforms for innovation',
    icon: CogIcon
  },
  {
    title: 'Policy & Regulatory Framework',
    description: 'Creating enabling policies for digital innovation and emerging technologies',
    icon: ChartBarIcon
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-nitda-900 to-nitda-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              About <span className="text-nitda-400">ONDI</span>
            </h1>
            <p className="text-xl text-nitda-100 max-w-3xl mx-auto">
              The Office for Nigerian Digital Innovation is Nigeria&apos;s innovation command center,
              driving the country&apos;s digital transformation agenda.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Meet the NC Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Meet the <span className="text-nitda-600">National Coordinator</span>
              </h2>
              <div className="bg-gray-100 rounded-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="w-20 h-20 bg-nitda-600 rounded-full flex items-center justify-center mr-6">
                    <UserIcon className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Dr. Amina Hassan</h3>
                    <p className="text-nitda-600 font-semibold">National Coordinator, ONDI</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  &quot;Our mission at ONDI is to transform Nigeria into a global hub for digital innovation.
                  We are committed to nurturing homegrown talent, supporting breakthrough technologies,
                  and creating an ecosystem where innovation thrives.&quot;
                </p>
                <p className="text-gray-600 text-sm">
                  With over 15 years of experience in technology leadership and innovation management,
                  Dr. Hassan leads ONDI&apos;s strategic initiatives to accelerate Nigeria&apos;s digital economy.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:text-right"
            >
              <div className="bg-nitda-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Leadership Team</h3>
                <div className="space-y-4">
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900">Dr. Chika Okonkwo</h4>
                    <p className="text-nitda-600 text-sm">Deputy Coordinator, Innovation Programs</p>
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900">Eng. Tunde Adebayo</h4>
                    <p className="text-nitda-600 text-sm">Head of Strategic Partnerships</p>
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900">Dr. Fatima Aliyu</h4>
                    <p className="text-nitda-600 text-sm">Director of Policy & Research</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mandate Section */}
      <section className="py-20 bg-nitda-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-nitda-600">Mandate</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Established as a special purpose vehicle of NITDA to accelerate Nigeria&apos;s digital innovation ecosystem
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8 shadow-lg"
            >
              <FlagIcon className="w-12 h-12 text-nitda-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To foster a vibrant digital innovation ecosystem that empowers Nigerian entrepreneurs,
                startups, and innovators to create world-class solutions that drive economic growth
                and social impact across Africa and beyond.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8 shadow-lg"
            >
              <EyeIcon className="w-12 h-12 text-nitda-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To position Nigeria as the innovation hub of Africa, where breakthrough technologies
                are developed, scaled, and exported globally, contributing to a knowledge-based economy
                and improved quality of life for all Nigerians.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What <span className="text-nitda-600">We Do</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our focus areas encompass the entire innovation value chain
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {focusAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-nitda-50 rounded-lg p-8 hover:shadow-lg transition-all duration-300"
              >
                <area.icon className="w-12 h-12 text-nitda-600 mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">{area.title}</h3>
                <p className="text-gray-700">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-nitda-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Join Our Innovation Ecosystem?
            </h2>
            <p className="text-xl text-nitda-100 mb-8">
              Whether you&apos;re a startup, investor, or partner, we&apos;re here to support your journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-nitda-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-nitda-50 transition-colors">
                Get Started
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-nitda-600 transition-colors">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
