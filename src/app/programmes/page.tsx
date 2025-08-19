'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  RocketLaunchIcon,
  UserGroupIcon,
  BuildingOffice2Icon,
  CogIcon,
  ArrowRightIcon,
  ClockIcon,
  UserIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';

const programs = [
  {
    id: 'startup-accelerator',
    title: 'ONDI Startup Accelerator',
    category: 'Early Stage',
    duration: '6 months',
    participants: '20-30 startups',
    funding: 'Up to ₦10M',
    description: 'Intensive acceleration program for early-stage startups with market-ready solutions.',
    features: [
      'Mentorship from industry leaders',
      'Technical infrastructure access',
      'Go-to-market strategy development',
      'Investor pitch preparation',
      'Regulatory guidance'
    ],
    icon: RocketLaunchIcon,
    color: 'nitda-600',
    status: 'Open for Applications'
  },
  {
    id: 'innovation-labs',
    title: 'ONDI Innovation Labs',
    category: 'Research & Development',
    duration: '12 months',
    participants: '15-20 teams',
    funding: 'Up to ₦25M',
    description: 'Advanced R&D program for breakthrough technology development in emerging fields.',
    features: [
      'State-of-the-art lab facilities',
      'Technical research support',
      'Patent application assistance',
      'Commercialization pathway',
      'International collaboration opportunities'
    ],
    icon: CogIcon,
    color: 'blue-600',
    status: 'Coming Soon'
  },
  {
    id: 'corporate-innovation',
    title: 'Corporate Innovation Program',
    category: 'Enterprise',
    duration: '9 months',
    participants: '10-15 corporates',
    funding: 'Partnership based',
    description: 'Collaboration program between established corporations and innovative startups.',
    features: [
      'Innovation challenges design',
      'Startup-corporate matchmaking',
      'Pilot project facilitation',
      'Strategic partnership development',
      'Digital transformation support'
    ],
    icon: BuildingOffice2Icon,
    color: 'purple-600',
    status: 'Active'
  },
  {
    id: 'talent-development',
    title: 'Digital Talent Development',
    category: 'Capacity Building',
    duration: '3-6 months',
    participants: '100+ individuals',
    funding: 'Fully sponsored',
    description: 'Comprehensive training programs to build Nigeria\'s digital innovation workforce.',
    features: [
      'Technical skills training',
      'Innovation methodology',
      'Entrepreneurship bootcamps',
      'Certification programs',
      'Job placement assistance'
    ],
    icon: UserGroupIcon,
    color: 'green-600',
    status: 'Ongoing'
  }
];

const applicationProcess = [
  {
    step: '01',
    title: 'Submit Application',
    description: 'Complete our online application form with your innovation proposal'
  },
  {
    step: '02',
    title: 'Initial Review',
    description: 'Our team conducts a preliminary assessment of your submission'
  },
  {
    step: '03',
    title: 'Pitch Presentation',
    description: 'Selected candidates present their ideas to our evaluation panel'
  },
  {
    step: '04',
    title: 'Final Selection',
    description: 'Successful applicants are notified and onboarded into the program'
  }
];

export default function ProgrammesPage() {
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
              Innovation <span className="text-nitda-400">Programmes</span>
            </h1>
            <p className="text-xl text-nitda-100 max-w-3xl mx-auto mb-8">
              Comprehensive support programs designed to accelerate Nigeria&apos;s digital innovation ecosystem
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-nitda-400 text-nitda-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-nitda-300 transition-colors">
                Apply Now
              </button>
              <button className="border-2 border-nitda-400 text-nitda-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-nitda-400 hover:text-nitda-900 transition-colors">
                Download Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-nitda-600">Programs</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the program that best fits your innovation journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 bg-${program.color} rounded-lg flex items-center justify-center`}>
                    <program.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${program.status === 'Open for Applications' ? 'bg-green-100 text-green-800' :
                      program.status === 'Active' ? 'bg-blue-100 text-blue-800' :
                        program.status === 'Ongoing' ? 'bg-purple-100 text-purple-800' :
                          'bg-gray-100 text-gray-800'
                    }`}>
                    {program.status}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">{program.title}</h3>
                <p className="text-nitda-600 font-semibold mb-4">{program.category}</p>
                <p className="text-gray-700 mb-6">{program.description}</p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <ClockIcon className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">{program.duration}</p>
                  </div>
                  <div className="text-center">
                    <UserIcon className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">{program.participants}</p>
                  </div>
                  <div className="text-center">
                    <CurrencyDollarIcon className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">{program.funding}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Program Features:</h4>
                  <ul className="space-y-2">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-nitda-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/programmes/${program.id}`}
                  className="inline-flex items-center text-nitda-600 font-semibold hover:text-nitda-700 transition-colors"
                >
                  Learn More <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Application <span className="text-nitda-600">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple steps to join our innovation programs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applicationProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-nitda-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-20 bg-nitda-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Join Our Programs?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-nitda-400 rounded-full mr-4 mt-1"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">World-Class Mentorship</h3>
                    <p className="text-nitda-100">Access to industry experts and successful entrepreneurs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-nitda-400 rounded-full mr-4 mt-1"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Funding Opportunities</h3>
                    <p className="text-nitda-100">Access to grants, investments, and financial support</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-nitda-400 rounded-full mr-4 mt-1"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Network Access</h3>
                    <p className="text-nitda-100">Connect with peers, partners, and potential customers</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-nitda-400 rounded-full mr-4 mt-1"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Market Access</h3>
                    <p className="text-nitda-100">Pathways to local and international markets</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to Apply?</h3>
              <p className="text-gray-700 mb-6">
                Join hundreds of innovators who have transformed their ideas into successful ventures through our programs.
              </p>
              <div className="space-y-4">
                <button className="w-full bg-nitda-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-nitda-700 transition-colors">
                  Start Application
                </button>
                <button className="w-full border-2 border-nitda-600 text-nitda-600 px-6 py-3 rounded-lg font-semibold hover:bg-nitda-50 transition-colors">
                  Schedule Consultation
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
