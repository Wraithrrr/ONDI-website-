'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import {
  RocketLaunchIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  BuildingOfficeIcon,
  TrophyIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';

interface StatProps {
  icon: React.ComponentType<{ className?: string }>;
  value: number;
  suffix: string;
  label: string;
  description: string;
  color: string;
  trend: string;
  stories?: string[];
}

const stats: StatProps[] = [
  // Top 3 Most Impactful Metrics
  {
    icon: RocketLaunchIcon,
    value: 1200,
    suffix: '+',
    label: 'Startups Supported',
    description: 'Early-stage companies accelerated through our programs',
    color: 'from-nitda-500 to-nitda-600',
    trend: '+23% this year',
    stories: ['PayStack', 'Flutterwave', 'Kuda Bank']
  },
  {
    icon: CurrencyDollarIcon,
    value: 200,
    suffix: 'M+',
    label: 'Funds Mobilized',
    description: 'Total investment capital facilitated in Nigerian Naira',
    color: 'from-nitda-600 to-nitda-700',
    trend: '+45% growth',
    stories: ['Seed funding', 'Series A rounds', 'Growth capital']
  },
  {
    icon: BuildingOfficeIcon,
    value: 25,
    suffix: '+',
    label: 'Innovation Hubs',
    description: 'Physical and virtual spaces for entrepreneurs',
    color: 'from-nitda-500 to-nitda-600',
    trend: '+12% new hubs',
    stories: ['Lagos', 'Abuja', 'Port Harcourt']
  }
];

// Archived metrics for reference
const archivedStats = [
  {
    icon: UserGroupIcon,
    value: 150,
    suffix: '+',
    label: 'Strategic Partnerships',
    description: 'Global and local partnerships driving innovation',
    color: 'from-nitda-500 to-nitda-700',
    trend: '+18% expansion',
    stories: ['Microsoft', 'Google', 'MTN']
  },
  {
    icon: AcademicCapIcon,
    value: 5000,
    suffix: '+',
    label: 'Talents Trained',
    description: 'Professionals upskilled in digital innovation',
    color: 'from-nitda-500 to-nitda-600',
    trend: '+67% completion rate',
    stories: ['AI/ML', 'Blockchain', 'Fintech']
  },
  {
    icon: TrophyIcon,
    value: 89,
    suffix: '%',
    label: 'Success Rate',
    description: 'Startups that achieve sustainable growth',
    color: 'from-nitda-600 to-nitda-700',
    trend: '+8% improvement',
    stories: ['Sustainable growth', 'Market expansion', 'Job creation']
  }
];

function CountingNumber({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, inView]);

  const formatNumber = (num: number) => {
    if (suffix === 'B+') return (num / 1000).toFixed(1);
    if (suffix === 'M+') return num.toString();
    return num.toString();
  };

  return (
    <span>
      {formatNumber(count)}
      {suffix}
    </span>
  );
}

function StatCard({ stat, index }: { stat: StatProps; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: index * 0.1 }
      });
    }
  }, [isInView, controls, index]);

  const IconComponent = stat.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      className="group relative text-center"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      {/* Icon */}
      <div className="relative mb-8">
        <div className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center shadow-xl mx-auto transform group-hover:rotate-6 transition-all duration-300`}>
          <IconComponent className="h-10 w-10 text-white" />
        </div>
      </div>

      {/* Number */}
      <div className="relative mb-4">
        <motion.div
          className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
        >
          <CountingNumber value={stat.value} suffix={stat.suffix} inView={isInView} />
        </motion.div>
      </div>

      {/* Label */}
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        {stat.label}
      </h3>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 max-w-sm mx-auto">
        {stat.description}
      </p>

      {/* Trend */}
      <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r ${stat.color} text-white shadow-lg`}>
        <span className="mr-2">↗</span>
        {stat.trend}
      </div>

      {/* Success Stories */}
      {stat.stories && (
        <div className="mt-6 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex flex-wrap justify-center gap-2">
            {stat.stories.map((story, idx) => (
              <span key={idx} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs text-gray-600 dark:text-gray-300">
                {story}
              </span>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default function EnhancedStatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="bg-gradient-to-r from-nitda-600 to-nitda-800 bg-clip-text text-transparent">Impact</span> in Numbers
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Driving Nigeria's digital transformation through measurable results and sustainable innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Become part of Nigeria's largest innovation ecosystem and accelerate your startup journey
            </p>
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-nitda-500 to-nitda-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Apply to Programs
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
