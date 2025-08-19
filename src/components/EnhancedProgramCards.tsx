'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  RocketLaunchIcon,
  ShieldCheckIcon,
  BuildingOfficeIcon,
  AcademicCapIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  ArrowRightIcon,
  PlayIcon,
  CheckCircleIcon,
  ClockIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

interface ProgramFeature {
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface ProgramCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  icon: React.ComponentType<{ className?: string }>;
  color: {
    primary: string;
    secondary: string;
    gradient: string;
    bg: string;
  };
  features: ProgramFeature[];
  stats: {
    participants: string;
    successRate: string;
    funding: string;
  };
  testimonial: {
    text: string;
    author: string;
    company: string;
    image: string;
  };
  cta: {
    primary: string;
    secondary: string;
  };
  href: string;
  duration: string;
  nextCohort: string;
  applicationDeadline: string;
}

const programs: ProgramCard[] = [
  {
    id: 'startup-accelerator',
    title: 'iHatch Startup Accelerator',
    subtitle: 'Early-Stage Innovation Program',
    description: 'Comprehensive 12-week program for early-stage startups with funding, mentorship, and market access',
    longDescription: 'Our flagship program designed to accelerate early-stage startups through intensive mentorship, funding opportunities, and access to global markets. Participants receive up to ₦50M in funding and ongoing support.',
    icon: RocketLaunchIcon,
    color: {
      primary: 'nitda-600',
      secondary: 'nitda-100',
      gradient: 'from-nitda-500 to-nitda-600',
      bg: 'bg-nitda-50 dark:bg-nitda-900/20'
    },
    features: [
      {
        name: 'Seed Funding',
        description: 'Up to ₦50M investment for qualified startups',
        icon: CurrencyDollarIcon
      },
      {
        name: 'Expert Mentorship',
        description: '1-on-1 guidance from industry leaders',
        icon: UserGroupIcon
      },
      {
        name: 'Market Access',
        description: 'Direct connections to customers and partners',
        icon: GlobeAltIcon
      }
    ],
    stats: {
      participants: '200+',
      successRate: '78%',
      funding: '₦2.1B'
    },
    testimonial: {
      text: 'iHatch transformed our startup from idea to market leader. The mentorship and funding were game-changing.',
      author: 'Adebayo Ogunlesi',
      company: 'TechNova Solutions',
      image: '/api/placeholder/64/64'
    },
    cta: {
      primary: 'Apply Now',
      secondary: 'Learn More'
    },
    href: '/programmes/startup-accelerator',
    duration: '12 weeks',
    nextCohort: 'March 2025',
    applicationDeadline: 'Feb 15, 2025'
  },
  {
    id: 'regulatory-sandbox',
    title: 'Regulatory Sandbox',
    subtitle: 'Safe Innovation Testing Environment',
    description: 'Regulatory framework for testing innovative financial and digital solutions in a controlled environment',
    longDescription: 'A controlled regulatory environment that allows fintech startups and established companies to test innovative products, services, and business models with relaxed regulatory requirements.',
    icon: ShieldCheckIcon,
    color: {
      primary: 'nitda-600',
      secondary: 'nitda-100',
      gradient: 'from-nitda-500 to-nitda-700',
      bg: 'bg-nitda-50 dark:bg-nitda-900/20'
    },
    features: [
      {
        name: 'Regulatory Relief',
        description: 'Relaxed compliance requirements for testing',
        icon: ShieldCheckIcon
      },
      {
        name: 'Expert Guidance',
        description: 'Direct support from regulatory experts',
        icon: AcademicCapIcon
      },
      {
        name: 'Market Testing',
        description: 'Real-world testing with limited customer base',
        icon: CheckCircleIcon
      }
    ],
    stats: {
      participants: '45+',
      successRate: '89%',
      funding: '₦800M'
    },
    testimonial: {
      text: 'The regulatory sandbox allowed us to innovate without the fear of compliance issues. It\'s a game-changer for fintech.',
      author: 'Kemi Adebisi',
      company: 'PayForward',
      image: '/api/placeholder/64/64'
    },
    cta: {
      primary: 'Apply for Sandbox',
      secondary: 'View Guidelines'
    },
    href: '/programmes/regulatory-sandbox',
    duration: '6-18 months',
    nextCohort: 'Rolling admissions',
    applicationDeadline: 'Ongoing'
  },
  {
    id: 'innovation-infrastructure',
    title: 'Innovation Infrastructure',
    subtitle: 'World-Class Facilities & Resources',
    description: 'State-of-the-art innovation hubs, labs, and digital platforms for entrepreneurs and established companies',
    longDescription: 'Access to cutting-edge facilities including AI labs, blockchain development centers, IoT testing environments, and collaboration spaces designed to foster innovation.',
    icon: BuildingOfficeIcon,
    color: {
      primary: 'purple-600',
      secondary: 'purple-100',
      gradient: 'from-purple-500 to-indigo-500',
      bg: 'bg-purple-50 dark:bg-purple-900/20'
    },
    features: [
      {
        name: 'Innovation Labs',
        description: 'AI, Blockchain, and IoT development facilities',
        icon: BuildingOfficeIcon
      },
      {
        name: 'Collaboration Spaces',
        description: 'Modern co-working and meeting facilities',
        icon: UserGroupIcon
      },
      {
        name: 'Digital Platforms',
        description: 'Cloud infrastructure and development tools',
        icon: GlobeAltIcon
      }
    ],
    stats: {
      participants: '500+',
      successRate: '92%',
      funding: '₦1.5B'
    },
    testimonial: {
      text: 'Having access to world-class labs and infrastructure accelerated our R&D by 300%. Incredible facilities!',
      author: 'Dr. Chioma Okeke',
      company: 'BioTech Innovations',
      image: '/api/placeholder/64/64'
    },
    cta: {
      primary: 'Book a Tour',
      secondary: 'View Facilities'
    },
    href: '/programmes/infrastructure',
    duration: 'Flexible',
    nextCohort: 'Available now',
    applicationDeadline: 'Open access'
  },
  {
    id: 'talent-development',
    title: 'Talent Development',
    subtitle: 'Skills for the Digital Future',
    description: 'Comprehensive training programs in emerging technologies and digital skills for professionals and students',
    longDescription: 'Upskill Nigeria\'s workforce with cutting-edge training in AI, machine learning, blockchain, cybersecurity, and digital transformation leadership.',
    icon: AcademicCapIcon,
    color: {
      primary: 'orange-600',
      secondary: 'orange-100',
      gradient: 'from-orange-500 to-red-500',
      bg: 'bg-orange-50 dark:bg-orange-900/20'
    },
    features: [
      {
        name: 'Certified Courses',
        description: 'Industry-recognized certifications',
        icon: AcademicCapIcon
      },
      {
        name: 'Hands-on Projects',
        description: 'Real-world project experience',
        icon: CheckCircleIcon
      },
      {
        name: 'Job Placement',
        description: 'Direct connections to employers',
        icon: UserGroupIcon
      }
    ],
    stats: {
      participants: '5,000+',
      successRate: '87%',
      funding: '₦300M'
    },
    testimonial: {
      text: 'The AI certification program opened doors I never imagined. Now I\'m leading digital transformation at my company.',
      author: 'Ibrahim Yusuf',
      company: 'First Bank Nigeria',
      image: '/api/placeholder/64/64'
    },
    cta: {
      primary: 'Enroll Now',
      secondary: 'View Courses'
    },
    href: '/programmes/talent-development',
    duration: '3-6 months',
    nextCohort: 'January 2025',
    applicationDeadline: 'Dec 30, 2024'
  }
];

function ProgramCard({ program, index }: { program: ProgramCard; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const IconComponent = program.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="h-full"
    >
      <div
        className={`relative h-full ${program.color.bg} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 overflow-hidden group`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className={`w-full h-full bg-gradient-to-br ${program.color.gradient}`} />
        </div>

        {/* Header */}
        <div className="relative p-8 pb-6">
          <div className="flex items-start justify-between mb-6">
            <div className={`w-16 h-16 bg-gradient-to-br ${program.color.gradient} rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
              <IconComponent className="h-8 w-8 text-white" />
            </div>

            <div className="flex space-x-2">
              <span className={`px-3 py-1 bg-${program.color.primary} bg-opacity-10 text-${program.color.primary} text-xs font-medium rounded-full`}>
                {program.duration}
              </span>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {program.title}
          </h3>
          <p className={`text-${program.color.primary} font-medium mb-4`}>
            {program.subtitle}
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {showFullDescription ? program.longDescription : program.description}
          </p>

          {program.longDescription !== program.description && (
            <button
              onClick={() => setShowFullDescription(!showFullDescription)}
              className={`text-${program.color.primary} text-sm font-medium mt-2 hover:underline transition-colors duration-200`}
            >
              {showFullDescription ? 'Show less' : 'Read more'}
            </button>
          )}
        </div>

        {/* Features */}
        <div className="px-8 pb-6">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Key Features</h4>
          <div className="space-y-3">
            {program.features.map((feature, idx) => {
              const FeatureIcon = feature.icon;
              return (
                <div key={idx} className="flex items-start space-x-3">
                  <div className={`w-8 h-8 bg-gradient-to-br ${program.color.gradient} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <FeatureIcon className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white text-sm">{feature.name}</p>
                    <p className="text-gray-600 dark:text-gray-300 text-xs">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="px-8 pb-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-xl font-bold text-gray-900 dark:text-white">{program.stats.participants}</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Participants</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-gray-900 dark:text-white">{program.stats.successRate}</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-gray-900 dark:text-white">{program.stats.funding}</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Total Funding</div>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="px-8 pb-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-300 italic mb-3">
              "{program.testimonial.text}"
            </p>
            <div className="flex items-center space-x-3">
              <Image
                src={program.testimonial.image}
                alt={program.testimonial.author}
                width={32}
                height={32}
                className="rounded-full"
              />
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">{program.testimonial.author}</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">{program.testimonial.company}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="px-8 pb-6">
          <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-2">
                <ClockIcon className="h-4 w-4 text-gray-500" />
                <span className="text-gray-600 dark:text-gray-300">Next Cohort: {program.nextCohort}</span>
              </div>
              <span className="text-gray-600 dark:text-gray-300">Deadline: {program.applicationDeadline}</span>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="p-8 pt-0">
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href={program.href}
              className={`flex-1 px-6 py-3 bg-gradient-to-r ${program.color.gradient} text-white font-semibold rounded-xl text-center hover:shadow-lg transform transition-all duration-300 hover:scale-105 group`}
            >
              <span className="flex items-center justify-center space-x-2">
                <span>{program.cta.primary}</span>
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
            <button
              className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-semibold rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300 flex items-center justify-center space-x-2"
              onClick={() => {
                // Video modal or detailed info modal
                console.log(`Show details for ${program.title}`);
              }}
            >
              <PlayIcon className="h-4 w-4" />
              <span>{program.cta.secondary}</span>
            </button>
          </div>
        </div>

        {/* Hover Overlay */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${program.color.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
          initial={false}
          animate={{ opacity: isHovered ? 0.05 : 0 }}
        />
      </div>
    </motion.div>
  );
}

export default function EnhancedProgramCards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="bg-gradient-to-r from-nitda-600 to-nitda-800 bg-clip-text text-transparent">Innovation Programs</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive programs designed to accelerate your innovation journey from idea to market success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <ProgramCard key={program.id} program={program} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
