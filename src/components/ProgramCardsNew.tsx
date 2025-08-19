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
    color: 'from-blue-500 to-blue-600',
    features: [
      'iHatch Accelerator Program',
      'Mentorship & Coaching',
      'Business Development Support',
      'Market Access Programs'
    ],
    href: '/programmes/startup-support',
  },
  {
    id: 'regulatory-sandbox',
    title: 'Regulatory Sandbox',
    subtitle: 'Test Innovations Safely',
    description: 'Safe space for testing innovative solutions with relaxed regulatory requirements.',
    icon: BeakerIcon,
    color: 'from-emerald-500 to-emerald-600',
    features: [
      'Fintech Testing Environment',
      'Regulatory Guidance',
      'Compliance Support',
      'Market Entry Strategy'
    ],
    href: '/programmes/regulatory-sandbox',
  },
  {
    id: 'funding-access',
    title: 'Funding & Investment',
    subtitle: 'Connect with Capital',
    description: 'Access to diverse funding opportunities and investor networks to scale your innovation.',
    icon: CurrencyDollarIcon,
    color: 'from-purple-500 to-purple-600',
    features: [
      'Venture Capital Connections',
      'Grant Applications',
      'Angel Investor Network',
      'Funding Readiness Programs'
    ],
    href: '/programmes/funding',
  },
  {
    id: 'talent-development',
    title: 'Talent Development',
    subtitle: 'Build Digital Skills',
    description: 'Comprehensive training programs to develop Nigeria&apos;s digital workforce.',
    icon: AcademicCapIcon,
    color: 'from-orange-500 to-orange-600',
    features: [
      'Technical Skills Training',
      'Leadership Development',
      'Certification Programs',
      'Industry Partnerships'
    ],
    href: '/programmes/talent',
  },
  {
    id: 'infrastructure',
    title: 'Digital Infrastructure',
    subtitle: 'Enable Innovation',
    description: 'Building robust digital infrastructure to support Nigeria&apos;s innovation ecosystem.',
    icon: BuildingOfficeIcon,
    color: 'from-cyan-500 to-cyan-600',
    features: [
      'Innovation Hubs',
      'Tech Parks Development',
      'Connectivity Solutions',
      'Shared Resources'
    ],
    href: '/programmes/infrastructure',
  },
  {
    id: 'partnerships',
    title: 'Strategic Partnerships',
    subtitle: 'Collaborate for Impact',
    description: 'Building strategic alliances with global tech leaders and local institutions.',
    icon: UserGroupIcon,
    color: 'from-pink-500 to-pink-600',
    features: [
      'International Collaborations',
      'Academic Partnerships',
      'Corporate Alliances',
      'Government Partnerships'
    ],
    href: '/programmes/partnerships',
  },
];

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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Innovation Programs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive ecosystem of programs designed to accelerate Nigeria&apos;s digital transformation
            and empower the next generation of innovators.
          </p>
        </div>

        {/* Programs Grid */}
        <motion.div
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
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* Card Header */}
              <div className={`h-32 bg-gradient-to-r ${program.color} p-6 relative overflow-hidden`}>
                <program.icon className="w-12 h-12 text-white mb-4" />
                <div className="absolute top-4 right-4 opacity-20">
                  <program.icon className="w-20 h-20 text-white" />
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {program.title}
                </h3>
                <p className="text-blue-600 font-medium text-sm mb-3">
                  {program.subtitle}
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {program.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {program.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <CheckCircleIcon className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link href={program.href} className="group/link">
                  <button className="w-full bg-gray-100 hover:bg-blue-600 text-gray-700 hover:text-white px-4 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center group-hover:shadow-lg">
                    Learn More
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-6">
            Ready to join Nigeria&apos;s innovation ecosystem?
          </p>
          <Link href="/apply" className="group">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform group-hover:scale-105 shadow-lg">
              Apply to Programs
              <ArrowRightIcon className="w-5 h-5 inline-block ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
