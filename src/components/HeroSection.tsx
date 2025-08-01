'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  RocketLaunchIcon, 
  UsersIcon, 
  CurrencyDollarIcon,
  BuildingOfficeIcon,
  ArrowRightIcon,
  PlayIcon
} from '@heroicons/react/24/outline';

const stats = [
  { name: 'Startups Supported', value: '1,200+', icon: RocketLaunchIcon },
  { name: 'Partnerships', value: '150+', icon: UsersIcon },
  { name: 'Funds Mobilized', value: '₦2B+', icon: CurrencyDollarIcon },
  { name: 'Innovation Hubs', value: '25+', icon: BuildingOfficeIcon },
];

const heroVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function HeroSection() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'The Innovation Command Center';

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-green-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-blue-50"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-20 h-20 bg-secondary-500/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -3, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-40 right-20 w-32 h-32 bg-accent-500/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            x: [0, 10, 0]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-40 left-1/4 w-16 h-16 bg-primary-400/20 rounded-full blur-xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              variants={heroVariants}
              className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-white/20"
            >
              <span className="text-white text-sm font-medium">🇳🇬                   Nigeria&apos;s Innovation Command Center</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={heroVariants}
              className="text-4xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight"
            >
              Accelerating
              <span className="block bg-gradient-to-r from-secondary-400 to-primary-400 bg-clip-text text-transparent">
                Nigeria&apos;s Digital Future
              </span>
            </motion.h1>

            {/* Typed Tagline */}
            <motion.div
              variants={heroVariants}
              className="mb-6"
            >
              <h2 className="text-2xl lg:text-3xl font-semibold text-secondary-200">
                {typedText}
                <span className="animate-pulse">|</span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={heroVariants}
              className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl"
            >
                              Empowering Nigeria&apos;s next generation of innovators and entrepreneurs through
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={heroVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <Link
                href="/opportunities/open-calls"
                className="group inline-flex items-center justify-center gap-3 bg-secondary-500 hover:bg-secondary-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <RocketLaunchIcon className="w-6 h-6" />
                Apply to Programs
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              
              <Link
                href="/directory"
                className="inline-flex items-center justify-center gap-3 border-2 border-white text-white hover:bg-white hover:text-primary-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
              >
                <UsersIcon className="w-6 h-6" />
                Explore Ecosystem
              </Link>
              
              <button className="inline-flex items-center justify-center gap-3 text-gray-300 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-300">
                <PlayIcon className="w-6 h-6" />
                Watch Story
              </button>
            </motion.div>
          </motion.div>

          {/* Hero Visual/Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Main Stats Card */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Our Impact</h3>
              
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="text-center group"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-secondary-400 to-primary-400 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-gray-300 text-sm font-medium">{stat.name}</div>
                  </motion.div>
                ))}
              </div>

              {/* Success Story Preview */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="mt-8 pt-6 border-t border-white/20"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary-500 to-primary-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                    P
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white">Success Story: Paystack</h4>
                    <p className="text-gray-300 text-sm">From ONDI accelerator to Africa&apos;s payment infrastructure leader</p>
                  </div>
                  <ArrowRightIcon className="w-5 h-5 text-gray-400" />
                </div>
              </motion.div>
            </div>

            {/* Floating Cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-secondary-500 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg"
            >
              🚀 1,200+ Startups
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-4 bg-accent-500 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg"
            >
              💡 25+ Innovation Hubs
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </motion.div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-16 text-white fill-current" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
    </section>
  );
}
