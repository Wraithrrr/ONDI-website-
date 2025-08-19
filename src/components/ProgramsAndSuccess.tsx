'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  RocketLaunchIcon,
  CheckCircleIcon,
  BuildingOfficeIcon,
  ArrowRightIcon,
  StarIcon,
  UserIcon
} from '@heroicons/react/24/outline';

const programs = [
  {
    id: 'startup-support',
    title: 'Startup Support',
    description: 'Comprehensive ecosystem for early-stage innovation',
    icon: RocketLaunchIcon,
    features: ['iHatch Accelerator', 'Mentorship Programs', 'Market Access'],
    color: 'from-blue-500 to-blue-600',
    href: '/programmes/startup-support'
  },
  {
    id: 'regulatory-sandbox',
    title: 'Regulatory Sandbox',
    description: 'Safe testing environment for innovative solutions',
    icon: CheckCircleIcon,
    features: ['Fintech Testing', 'Compliance Support', 'Policy Guidance'],
    color: 'from-green-500 to-green-600',
    href: '/programmes/regulatory-sandbox'
  },
  {
    id: 'innovation-infrastructure',
    title: 'Innovation Infrastructure',
    description: 'World-class facilities and digital infrastructure',
    icon: BuildingOfficeIcon,
    features: ['Tech Hubs', 'Innovation Labs', 'Digital Platforms'],
    color: 'from-purple-500 to-purple-600',
    href: '/programmes/infrastructure'
  }
];

const testimonials = [
  {
    name: 'Paystack',
    role: 'Payment Infrastructure Leader',
    content: 'From ONDI accelerator to Africa\'s leading payment platform',
    rating: 5,
    impact: '$2B+ processed'
  },
  {
    name: 'Flutterwave',
    role: 'Fintech Unicorn',
    content: 'ONDI\'s support was instrumental in our global expansion',
    rating: 5,
    impact: '290M+ people reached'
  },
  {
    name: 'Kobo360',
    role: 'Logistics Innovation',
    content: 'Transformed freight and logistics across Africa with ONDI partnership',
    rating: 5,
    impact: '10,000+ trucks networked'
  }
];

export default function ProgramsAndSuccess() {
  return (
    <>
      {/* Programs Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Innovation <span className="text-nitda-600">Programs</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive ecosystem designed to accelerate Nigeria&apos;s digital transformation
              and empower the next generation of innovators
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className={`h-40 bg-gradient-to-r ${program.color} p-8 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <program.icon className="w-14 h-14 text-white mb-4 relative z-10" />
                  <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full"></div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {program.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <CheckCircleIcon className="w-5 h-5 text-nitda-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href={program.href}>
                    <button className="w-full bg-gray-100 hover:bg-nitda-600 text-gray-700 hover:text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 group-hover:shadow-lg">
                      Learn More
                      <ArrowRightIcon className="w-5 h-5 inline-block ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link href="/programmes">
              <button className="bg-nitda-600 hover:bg-nitda-700 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                View All Programs
                <ArrowRightIcon className="w-5 h-5 inline-block ml-2" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Success <span className="text-nitda-600">Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Celebrating the achievements of our innovation ecosystem and the unicorns that started their journey with ONDI
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-gray-700 text-lg mb-6 italic leading-relaxed">
                  &quot;{testimonial.content}&quot;
                </blockquote>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-nitda-500 to-nitda-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                      {testimonial.name[0]}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="text-sm text-nitda-600 font-semibold">
                    Impact: {testimonial.impact}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link href="/success-stories">
              <button className="bg-gray-100 hover:bg-nitda-600 text-gray-700 hover:text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                View All Success Stories
                <ArrowRightIcon className="w-5 h-5 inline-block ml-2" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
