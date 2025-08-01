'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  RocketLaunchIcon,
  BeakerIcon,
  CurrencyDollarIcon,
  AcademicCapIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  ArrowRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const programs = [
  {
    id: 'startup-support',
    title: 'Startup Support',
    subtitle: 'Accelerate Your Innovation Journey',
    description: 'Comprehensive support ecosystem designed to accelerate innovation at every stage of your startup journey.',
    icon: RocketLaunchIcon,
    color: 'from-primary-500 to-primary-600',
    features: [
      'iHatch Accelerator Program',
      'Mentorship & Coaching',
      'Business Development Support',
      'Market Access Programs'
    ],
    href: '/programmes/startup-support',
    stats: { value: '1,200+', label: 'Startups Supported' }
  },
  {
    id: 'regulatory-sandbox',
    title: 'Regulatory Sandbox',
    subtitle: 'Safe Innovation Environment',
    description: 'Test innovative solutions with regulatory support and fast-track approval processes in a controlled environment.',
    icon: BeakerIcon,
    color: 'from-secondary-500 to-secondary-600',
    features: [
      'Regulatory Framework Testing',
      'Compliance Guidance',
      'Fast-track Approvals',
      'Risk Assessment Support'
    ],
    href: '/programmes/regulatory-sandbox',
    stats: { value: '50+', label: 'Projects in Sandbox' }
  },
  {
    id: 'funding-incentives',
    title: 'Funding & Incentives',
    subtitle: 'Financial Support Ecosystem',
    description: 'Access grants, investment opportunities, and financial incentives to fuel your innovation and growth.',
    icon: CurrencyDollarIcon,
    color: 'from-accent-500 to-accent-600',
    features: [
      'Startup Grants & Funding',
      'Investment Readiness Programs',
      'Tax Incentives',
      'Partnership Funds'
    ],
    href: '/programmes/funding',
    stats: { value: '₦2B+', label: 'Funds Mobilized' }
  },
  {
    id: 'talent-development',
    title: 'Talent Development',
    subtitle: 'Building Digital Workforce',
    description: 'Comprehensive training programs, fellowships, and bootcamps to build Nigeria\'s digital workforce of the future.',
    icon: AcademicCapIcon,
    color: 'from-orange-500 to-orange-600',
    features: [
      'Tech Fellowships',
      'Coding Bootcamps',
      'Internship Programs',
      'Skills Development'
    ],
    href: '/programmes/talent',
    stats: { value: '5,000+', label: 'Talents Trained' }
  },
  {
    id: 'innovation-infrastructure',
    title: 'Innovation Infrastructure',
    subtitle: 'Physical & Digital Infrastructure',
    description: 'Access world-class innovation hubs, labs, and digital platforms to accelerate your innovation journey.',
    icon: BuildingOfficeIcon,
    color: 'from-teal-500 to-teal-600',
    features: [
      'Innovation Hubs Network',
      'Research Labs Access',
      'Digital Platforms',
      'Shared Workspaces'
    ],
    href: '/programmes/infrastructure',
    stats: { value: '25+', label: 'Innovation Hubs' }
  },
  {
    id: 'partnerships',
    title: 'Strategic Partnerships',
    subtitle: 'Collaborative Innovation',
    description: 'Connect with strategic partners, corporates, and international organizations to scale your innovation globally.',
    icon: UserGroupIcon,
    color: 'from-pink-500 to-pink-600',
    features: [
      'Corporate Partnerships',
      'International Collaborations',
      'Public-Private Partnerships',
      'Innovation Networks'
    ],
    href: '/programmes/partnerships',
    stats: { value: '150+', label: 'Strategic Partners' }
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1
  }
};

export default function ProgramCards() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
            Our
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent"> Programs </span>
            & Support
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive support ecosystem designed to accelerate innovation at every stage of your journey
          </p>
        </motion.div>

        {/* Program Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {programs.map((program) => (
            <motion.div
              key={program.id}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 h-full">
                {/* Card Header */}
                <div className={`bg-gradient-to-br ${program.color} p-6 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                  <div className="relative z-10">
                    <program.icon className="w-12 h-12 mb-4 text-white/90" />
                    <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                    <p className="text-white/90 text-sm font-medium">{program.subtitle}</p>
                    
                    {/* Stats Badge */}
                    <div className="mt-4 inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-sm font-bold">{program.stats.value}</span>
                      <span className="text-xs ml-1 text-white/80">{program.stats.label}</span>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {program.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-6">
                    {program.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircleIcon className="w-5 h-5 text-secondary-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Button */}
                  <Link
                    href={program.href}
                    className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold group-hover:gap-3 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Programs CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/programmes"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
          >
            <RocketLaunchIcon className="w-6 h-6" />
            View All Programs
            <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
          
          <p className="mt-4 text-gray-600">
            Discover how ONDI can accelerate your innovation journey
          </p>
        </motion.div>
      </div>
    </section>
  );
}
