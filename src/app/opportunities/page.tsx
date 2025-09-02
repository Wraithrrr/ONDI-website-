'use client';

import { motion } from 'framer-motion';
import {
  MegaphoneIcon,
  CalendarDaysIcon,
  MapPinIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline';

const openCalls = [
  {
    id: 1,
    title: 'Digital Health Innovation Challenge',
    category: 'Open Call',
    amount: '₦50M',
    deadline: '2024-03-15',
    location: 'National',
    applicants: '150+',
    description: 'Seeking innovative digital health solutions to improve healthcare delivery in rural Nigeria',
    requirements: [
      'Nigerian-based startup or company',
      'Prototype or MVP ready',
      'Clear go-to-market strategy',
      'Team with relevant experience'
    ],
    status: 'Open',
    featured: true
  },
  {
    id: 2,
    title: 'AgriTech Solutions Fund',
    category: 'Grant',
    amount: '₦25M',
    deadline: '2024-02-28',
    location: 'Northern Nigeria',
    applicants: '89',
    description: 'Supporting technology solutions that address agricultural challenges in Northern Nigeria',
    requirements: [
      'Focus on Northern Nigeria',
      'Agricultural technology solution',
      'Pilot program completed',
      'Measurable impact metrics'
    ],
    status: 'Open',
    featured: false
  },
  {
    id: 3,
    title: 'Fintech Innovation Competition',
    category: 'Competition',
    amount: '₦30M',
    deadline: '2024-04-20',
    location: 'Lagos, Abuja',
    applicants: '200+',
    description: 'Competition for financial technology innovations promoting financial inclusion',
    requirements: [
      'Fintech solution',
      'Focus on financial inclusion',
      'Working prototype',
      'Regulatory compliance plan'
    ],
    status: 'Opening Soon',
    featured: true
  }
];

const partnerships = [
  {
    id: 1,
    type: 'Corporate Partnership',
    partner: 'MTN Nigeria',
    focus: 'Telecommunications & Digital Services',
    description: 'Collaboration opportunities in 5G technology, IoT solutions, and digital transformation',
    benefits: ['Market access', 'Technical mentorship', 'Pilot opportunities', 'Investment potential'],
    deadline: 'Ongoing'
  },
  {
    id: 2,
    type: 'Academic Partnership',
    partner: 'University of Lagos',
    focus: 'Research & Development',
    description: 'Joint research programs in AI, blockchain, and emerging technologies',
    benefits: ['Research facilities', 'Student talent', 'Publication opportunities', 'Grant applications'],
    deadline: 'Rolling'
  },
  {
    id: 3,
    type: 'International Partnership',
    partner: 'UK-Nigeria Tech Hub',
    focus: 'Global Market Access',
    description: 'Support for Nigerian tech companies to expand to UK and European markets',
    benefits: ['Market entry support', 'Regulatory guidance', 'Network access', 'Funding opportunities'],
    deadline: 'Quarterly'
  }
];

const upcomingEvents = [
  {
    title: 'Nigeria Innovation Summit 2024',
    date: '2024-03-10',
    time: '9:00 AM - 6:00 PM',
    location: 'Abuja International Conference Centre',
    type: 'Conference',
    price: 'Free'
  },
  {
    title: 'Startup Pitch Competition',
    date: '2024-02-25',
    time: '10:00 AM - 4:00 PM',
    location: 'Lagos Tech Hub',
    type: 'Competition',
    price: 'Free'
  },
  {
    title: 'AI in Healthcare Workshop',
    date: '2024-03-05',
    time: '2:00 PM - 5:00 PM',
    location: 'Virtual',
    type: 'Workshop',
    price: 'Free'
  }
];

export default function OpportunitiesPage() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open': return 'bg-green-100 text-green-800';
      case 'Opening Soon': return 'bg-blue-100 text-blue-800';
      case 'Closed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

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
              <span className="text-nitda-400">Opportunities</span> Await
            </h1>
            <p className="text-xl text-nitda-100 max-w-3xl mx-auto mb-8">
              Discover funding opportunities, partnerships, and events to accelerate your innovation journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-nitda-400 text-nitda-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-nitda-300 transition-colors">
                View Open Calls
              </button>
              <button className="border-2 border-nitda-400 text-nitda-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-nitda-400 hover:text-nitda-900 transition-colors">
                Subscribe to Updates
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Open Calls Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Open <span className="text-nitda-600">Calls</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Current funding opportunities and competitions for innovative solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {openCalls.map((call, index) => (
              <motion.div
                key={call.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white border-2 rounded-lg p-6 hover:shadow-xl transition-all duration-300 ${call.featured ? 'border-nitda-400 ring-2 ring-nitda-400 ring-opacity-20' : 'border-gray-200'
                  }`}
              >
                {call.featured && (
                  <div className="bg-nitda-400 text-nitda-900 px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                    🌟 Featured Opportunity
                  </div>
                )}

                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <MegaphoneIcon className="w-8 h-8 text-nitda-600 mr-3" />
                    <span className="text-sm font-semibold text-nitda-600 bg-nitda-50 px-3 py-1 rounded-full">
                      {call.category}
                    </span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(call.status)}`}>
                    {call.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{call.title}</h3>
                <p className="text-gray-700 mb-6">{call.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div className="flex items-center text-gray-600">
                    <CurrencyDollarIcon className="w-4 h-4 mr-2" />
                    {call.amount}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <CalendarDaysIcon className="w-4 h-4 mr-2" />
                    {new Date(call.deadline).toLocaleDateString()}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPinIcon className="w-4 h-4 mr-2" />
                    {call.location}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <UserGroupIcon className="w-4 h-4 mr-2" />
                    {call.applicants} applicants
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {call.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700">
                        <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 bg-nitda-600 text-white px-4 py-2 rounded-lg hover:bg-nitda-700 transition-colors font-semibold">
                    Apply Now
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <ArrowRightIcon className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Strategic <span className="text-nitda-600">Partnerships</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Collaborate with industry leaders, academic institutions, and international organizations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {partnerships.map((partnership, index) => (
              <motion.div
                key={partnership.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <BuildingOfficeIcon className="w-8 h-8 text-nitda-600 mr-3" />
                  <span className="text-sm font-semibold text-nitda-600 bg-nitda-50 px-3 py-1 rounded-full">
                    {partnership.type}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{partnership.partner}</h3>
                <p className="text-nitda-600 font-semibold mb-3">{partnership.focus}</p>
                <p className="text-gray-700 mb-6">{partnership.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {partnership.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-nitda-600 rounded-full mr-3"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">
                    <ClockIcon className="w-4 h-4 inline mr-1" />
                    {partnership.deadline}
                  </span>
                  <button className="bg-nitda-600 text-white px-4 py-2 rounded-lg hover:bg-nitda-700 transition-colors text-sm font-semibold">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Upcoming <span className="text-nitda-600">Events</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join us at conferences, workshops, and networking events
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-nitda-50 rounded-lg p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-nitda-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {event.type}
                  </span>
                  <span className="text-sm font-semibold text-green-600">{event.price}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>

                <div className="space-y-2 mb-6 text-sm text-gray-600">
                  <div className="flex items-center">
                    <CalendarDaysIcon className="w-4 h-4 mr-2" />
                    {new Date(event.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <ClockIcon className="w-4 h-4 mr-2" />
                    {event.time}
                  </div>
                  <div className="flex items-center">
                    <MapPinIcon className="w-4 h-4 mr-2" />
                    {event.location}
                  </div>
                </div>

                <button className="w-full bg-nitda-600 text-white px-4 py-2 rounded-lg hover:bg-nitda-700 transition-colors font-semibold">
                  Register
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-nitda-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Never Miss an Opportunity
            </h2>
            <p className="text-xl text-nitda-100 mb-8">
              Subscribe to our newsletter for the latest funding opportunities, events, and partnerships
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-nitda-400"
              />
              <button className="bg-nitda-400 text-nitda-900 px-8 py-3 rounded-lg font-semibold hover:bg-nitda-300 transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
