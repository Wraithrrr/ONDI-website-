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

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-emerald-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-white/5"></div>
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
          className="absolute top-20 left-20 w-20 h-20 bg-blue-500/20 rounded-full"
        />

        <motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [0, -3, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-40 right-32 w-16 h-16 bg-emerald-500/20 rounded-lg"
        />

        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 2, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-32 left-32 w-12 h-12 bg-purple-500/20 rounded-full"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Government Header */}
        {/* Main Headlines */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroVariants}
          className="mb-8"
        >
          <h3 className="text-2xl md:text-3xl text-emerald-400 font-semibold mb-4">
            ONDI
          </h3>
          <h4 className="text-xl md:text-2xl text-white/80 mb-6">
            Office for Nigerian Digital Innovation
          </h4>
          <div className="text-emerald-300 text-lg mb-2">
            Nigeria&apos;s Innovation Command Center
          </div>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={heroVariants}
          className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight"
        >
          Accelerating
          <span className="block bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
            Nigeria&apos;s Digital Future
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroVariants}
          className="mb-12"
        >
          <p className="text-xl md:text-2xl text-white/80 mb-4 max-w-4xl mx-auto leading-relaxed">
            Empowering Nigeria&apos;s next generation of innovators and entrepreneurs through
          </p>
          <div className="text-lg md:text-xl text-emerald-300 font-medium">
            strategic partnerships, funding opportunities, and world-class innovation programs
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Link href="/programmes" className="group">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform group-hover:scale-105 shadow-lg">
              Explore Programs
              <ArrowRightIcon className="w-5 h-5 inline-block ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>

          <Link href="/about" className="group">
            <button className="border-2 border-white/30 hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 backdrop-blur-sm">
              <PlayIcon className="w-5 h-5 inline-block mr-2" />
              Watch Our Story
            </button>
          </Link>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroVariants}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat) => (
            <div key={stat.name} className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
                <stat.icon className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-blue-100 text-sm">{stat.name}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Success Story */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroVariants}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                P
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-white">Success Story: Paystack</h4>
                <p className="text-gray-300 text-sm">From ONDI accelerator to Africa&apos;s payment infrastructure leader</p>
              </div>
              <ArrowRightIcon className="w-5 h-5 text-gray-400" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
