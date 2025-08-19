'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  RocketLaunchIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  BuildingOfficeIcon,
  ArrowRightIcon,
  PlayIcon,
  CheckCircleIcon,
  StarIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

const stats = [
  { name: 'Startups Supported', value: '1,200+', icon: RocketLaunchIcon },
  { name: 'Strategic Partnerships', value: '150+', icon: UserGroupIcon },
  { name: 'Funds Mobilized', value: '₦2B+', icon: CurrencyDollarIcon },
  { name: 'Innovation Hubs', value: '25+', icon: BuildingOfficeIcon },
];

const programs = [
  {
    id: 'startup-support',
    title: 'Startup Support',
    description: 'Comprehensive ecosystem for early-stage innovation',
    icon: RocketLaunchIcon,
    features: ['iHatch Accelerator', 'Mentorship Programs', 'Market Access'],
    href: '/programmes/startup-support'
  },
  {
    id: 'regulatory-sandbox',
    title: 'Regulatory Sandbox',
    description: 'Safe testing environment for innovative solutions',
    icon: CheckCircleIcon,
    features: ['Fintech Testing', 'Compliance Support', 'Policy Guidance'],
    href: '/programmes/regulatory-sandbox'
  },
  {
    id: 'innovation-infrastructure',
    title: 'Innovation Infrastructure',
    description: 'World-class facilities and digital infrastructure',
    icon: BuildingOfficeIcon,
    features: ['Tech Hubs', 'Innovation Labs', 'Digital Platforms'],
    href: '/programmes/infrastructure'
  }
];

const testimonials = [
  {
    name: 'Paystack',
    role: 'Payment Infrastructure Leader',
    content: 'From ONDI accelerator to Africa\'s leading payment platform',
    rating: 5
  },
  {
    name: 'Flutterwave',
    role: 'Fintech Unicorn',
    content: 'ONDI\'s support was instrumental in our global expansion',
    rating: 5
  }
];

export default function Homepage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-nitda-900 via-nitda-800 to-nitda-700">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-white/5"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-20 w-20 h-20 bg-nitda-500/20 rounded-full"
          />
          <motion.div
            animate={{ y: [0, 15, 0], rotate: [0, -3, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-40 right-32 w-16 h-16 bg-nitda-400/20 rounded-lg"
          />
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-32 left-32 w-12 h-12 bg-nitda-300/20 rounded-full"
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Government Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            {/* Main Headlines */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h3 className="text-3xl md:text-4xl text-nitda-400 font-bold mb-4">
              ONDI
            </h3>
            <h4 className="text-xl md:text-2xl text-white/90 mb-6">
              Office for Nigerian Digital Innovation
            </h4>
            <div className="text-nitda-300 text-xl font-semibold mb-2">
              The Innovation Command Center
            </div>
          </motion.div>

          {/* Hero Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Accelerating
            <span className="block bg-gradient-to-r from-nitda-400 to-nitda-200 bg-clip-text text-transparent">
              Nigeria&apos;s Digital Future
            </span>
          </motion.h1>

          {/* Quick Intro */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12"
          >
            <p className="text-xl md:text-2xl text-white/80 mb-4 max-w-4xl mx-auto leading-relaxed">
              Empowering Nigeria&apos;s next generation of innovators and entrepreneurs through
            </p>
            <div className="text-lg md:text-xl text-nitda-300 font-medium">
              strategic partnerships, funding opportunities, and world-class innovation programs
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Link href="/apply" className="group">
              <button className="bg-nitda-600 hover:bg-nitda-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform group-hover:scale-105 shadow-lg">
                Apply Now
                <ArrowRightIcon className="w-5 h-5 inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>

            <Link href="/partnerships" className="group">
              <button className="bg-white/10 hover:bg-white hover:text-nitda-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 backdrop-blur-sm border border-white/20">
                Partner with Us
              </button>
            </Link>

            <Link href="/innovations" className="group">
              <button className="border-2 border-white/30 hover:bg-white hover:text-nitda-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 backdrop-blur-sm">
                <PlayIcon className="w-5 h-5 inline-block mr-2" />
                Explore Innovations
              </button>
            </Link>
          </motion.div>

          {/* High-Impact Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat) => (
              <div key={stat.name} className="text-center group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
                  <stat.icon className="w-8 h-8 text-nitda-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-nitda-100 text-sm">{stat.name}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-nitda-600">Innovation Programs</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive ecosystem designed to accelerate Nigeria&apos;s digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {programs.map((program) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className="h-32 bg-gradient-to-r from-nitda-600 to-nitda-700 p-6 relative">
                  <program.icon className="w-12 h-12 text-white mb-4" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {program.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {program.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <CheckCircleIcon className="w-4 h-4 text-nitda-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link href={program.href}>
                    <button className="w-full bg-gray-100 hover:bg-nitda-600 text-gray-700 hover:text-white px-4 py-3 rounded-lg font-medium transition-all duration-300">
                      Learn More
                      <ArrowRightIcon className="w-4 h-4 inline-block ml-2" />
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/programmes">
              <button className="bg-nitda-600 hover:bg-nitda-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                View All Programs
                <ArrowRightIcon className="w-5 h-5 inline-block ml-2" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-nitda-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Success <span className="text-nitda-600">Stories</span>
            </h2>
            <p className="text-xl text-gray-600">
              Celebrating the achievements of our innovation ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 text-lg mb-6 italic">
                  &quot;{testimonial.content}&quot;
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-nitda-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-nitda-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Stay Connected with ONDI
          </h2>
          <p className="text-xl text-nitda-100 mb-8">
            Get the latest updates on innovation programs, funding opportunities, and success stories
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-nitda-300 focus:outline-none"
            />
            <button className="bg-nitda-800 hover:bg-nitda-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Location Map Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Visit <span className="text-nitda-600">ONDI</span>
            </h2>
            <p className="text-xl text-gray-600">
              Located at the National Centre for Artificial Intelligence and Robotics (NCAIR), Wuye
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Location</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <BuildingOfficeIcon className="w-6 h-6 text-nitda-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Address</h4>
                    <p className="text-gray-600">
                      National Centre for Artificial Intelligence and Robotics (NCAIR)<br />
                      Wuye District, Abuja, FCT, Nigeria
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ChartBarIcon className="w-6 h-6 text-nitda-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Innovation Hub</h4>
                    <p className="text-gray-600">
                      State-of-the-art facilities for AI research, robotics development, and digital innovation
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-96 bg-gray-300 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.312725474765!2d7.4898!3d9.0765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0a648d61765b%3A0x95d6e62fac72b04e!2sWuye%2C%20Abuja%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1633024800000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="NCAIR Wuye Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
