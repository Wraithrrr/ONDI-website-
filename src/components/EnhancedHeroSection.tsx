'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  PlayIcon,
  ArrowRightIcon,
  SparklesIcon,
  RocketLaunchIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';

const taglines = [
  {
    text: "Empowering Nigeria's Digital Future",
    subtext: "Leading innovation and digital transformation across Africa's largest economy",
    icon: SparklesIcon
  },
  {
    text: "Funding Tomorrow's Innovators",
    subtext: "Supporting startups and entrepreneurs with capital, mentorship, and market access",
    icon: RocketLaunchIcon
  },
  {
    text: "Building Innovation Ecosystems",
    subtext: "Creating world-class infrastructure and regulatory frameworks for digital innovation",
    icon: LightBulbIcon
  }
];

const stats = [
  { value: '1,200+', label: 'Startups Supported', trend: '+23%' },
  { value: '₦200M+', label: 'Funds Mobilized', trend: '+45%' },
  { value: '150+', label: 'Partnerships', trend: '+18%' },
  { value: '25+', label: 'Innovation Hubs', trend: '+12%' }
];

export default function EnhancedHeroSection() {
  const [currentTagline, setCurrentTagline] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Rotate taglines every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const CurrentIcon = taglines[currentTagline].icon;

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        {/* Background Video/Image */}
        <div className="relative w-full h-full">
          <Image
            src="/api/placeholder/1920/1080"
            alt="Nigerian Digital Innovation Scene"
            fill
            className="object-cover"
            priority
            onLoad={() => setVideoLoaded(true)}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-nitda-900/90 via-nitda-800/80 to-teal-900/90" />

          {/* Animated Particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/20 rounded-full"
                initial={{ x: Math.random() * 1920, y: Math.random() * 1080 }}
                animate={{
                  x: Math.random() * 1920,
                  y: Math.random() * 1080,
                }}
                transition={{
                  duration: 20 + Math.random() * 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Icon and Badge */}
          <motion.div
            className="flex justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <div className="relative">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 shadow-2xl">
                <CurrentIcon className="h-10 w-10 text-white" />
              </div>
              <motion.div
                className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-2 h-2 bg-white rounded-full" />
              </motion.div>
            </div>
          </motion.div>

          {/* Rotating Taglines */}
          <div className="space-y-4">
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentTagline}
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {taglines[currentTagline].text}
              </motion.h1>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.p
                key={`sub-${currentTagline}`}
                className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {taglines[currentTagline].subtext}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Enhanced CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link
              href="/programmes"
              className="group relative px-8 py-4 bg-gradient-to-r from-nitda-500 to-teal-500 text-white font-semibold rounded-xl shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-nitda-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center space-x-2">
                <span>Explore Programs</span>
                <ArrowRightIcon className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-nitda-400 to-teal-400 blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
            </Link>

            <button
              className="group flex items-center space-x-3 px-6 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              onClick={() => {
                // Video modal functionality would go here
                console.log('Open video modal');
              }}
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                <PlayIcon className="h-6 w-6 ml-1" />
              </div>
              <span>Watch Our Story</span>
            </button>
          </motion.div>

          {/* Animated Statistics */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center group"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group-hover:shadow-2xl">
                  <motion.div
                    className="text-3xl lg:text-4xl font-bold text-white mb-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 + index * 0.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-white/80 font-medium">{stat.label}</div>
                  <div className="text-green-400 text-sm mt-1 flex items-center justify-center space-x-1">
                    <span>↗</span>
                    <span>{stat.trend}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  );
}
