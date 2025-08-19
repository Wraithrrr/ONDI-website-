'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import {
  MapPinIcon,
  ClockIcon,
  PhoneIcon,
  EnvelopeIcon,
  ArrowTopRightOnSquareIcon,
  CalendarIcon,
  BuildingOfficeIcon,
  WifiIcon,
  UserGroupIcon,
  CameraIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const facilities = [
  {
    name: 'AI & Machine Learning Lab',
    description: 'State-of-the-art AI development and training facilities',
    icon: BuildingOfficeIcon,
    image: '/api/placeholder/300/200'
  },
  {
    name: 'Blockchain Development Center',
    description: 'Secure environment for blockchain and cryptocurrency projects',
    icon: BuildingOfficeIcon,
    image: '/api/placeholder/300/200'
  },
  {
    name: 'IoT Testing Environment',
    description: 'Comprehensive IoT device testing and integration lab',
    icon: WifiIcon,
    image: '/api/placeholder/300/200'
  },
  {
    name: 'Collaboration Spaces',
    description: 'Modern co-working areas and meeting rooms',
    icon: UserGroupIcon,
    image: '/api/placeholder/300/200'
  }
];

const amenities = [
  'High-speed fiber internet',
  'Free parking',
  'Cafeteria and food court',
  'Prayer/meditation rooms',
  'Conference facilities',
  'Security and access control',
  'Accessibility features',
  'Public transportation access'
];

const visitingHours = [
  { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM' },
  { day: 'Saturday', hours: '9:00 AM - 4:00 PM' },
  { day: 'Sunday', hours: 'Closed (Special events only)' }
];

export default function VisitONDISection() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedFacility, setSelectedFacility] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Visit ONDI
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Experience innovation firsthand at our world-class facility in Nigeria's capital
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-2 shadow-xl border border-gray-200 dark:border-gray-700">
            {['overview', 'facilities', 'directions'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 capitalize ${activeTab === tab
                    ? 'bg-gradient-to-r from-nitda-500 to-teal-500 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[600px]">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className="space-y-8">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-nitda-500 to-teal-500 rounded-xl flex items-center justify-center">
                      <MapPinIcon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">NCAIR, Wuye District</h3>
                      <p className="text-gray-600 dark:text-gray-300">National Centre for AI and Robotics</p>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    Our headquarters is strategically located in the prestigious National Centre for Artificial Intelligence
                    and Robotics (NCAIR) in Wuye District, Abuja. This state-of-the-art facility serves as the epicenter
                    of Nigeria's digital innovation ecosystem.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <MapPinIcon className="h-5 w-5 text-nitda-500" />
                      <span className="text-gray-700 dark:text-gray-300">Plot 1, NCAIR Complex, Wuye District, Abuja FCT</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <PhoneIcon className="h-5 w-5 text-nitda-500" />
                      <span className="text-gray-700 dark:text-gray-300">+234 (0) 9 123 4567</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <EnvelopeIcon className="h-5 w-5 text-nitda-500" />
                      <span className="text-gray-700 dark:text-gray-300">visit@ondi.gov.ng</span>
                    </div>
                  </div>
                </div>

                {/* Visiting Hours */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center space-x-3 mb-6">
                    <ClockIcon className="h-6 w-6 text-nitda-500" />
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">Visiting Hours</h4>
                  </div>
                  <div className="space-y-3">
                    {visitingHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700 last:border-0">
                        <span className="font-medium text-gray-700 dark:text-gray-300">{schedule.day}</span>
                        <span className="text-gray-600 dark:text-gray-400">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="flex-1 px-6 py-4 bg-gradient-to-r from-nitda-500 to-teal-500 text-white font-semibold rounded-xl text-center hover:shadow-lg transform transition-all duration-300 hover:scale-105 group"
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <CalendarIcon className="h-5 w-5" />
                      <span>Schedule a Visit</span>
                      <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </Link>
                  <button
                    onClick={() => setActiveTab('directions')}
                    className="flex-1 px-6 py-4 bg-white dark:bg-gray-700 text-nitda-600 dark:text-nitda-400 font-semibold rounded-xl text-center border-2 border-nitda-600 dark:border-nitda-400 hover:bg-nitda-50 dark:hover:bg-gray-600 transition-colors duration-300"
                  >
                    Get Directions
                  </button>
                </div>
              </div>

              {/* Interactive Map */}
              <div className="relative">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700">
                  <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-xl overflow-hidden relative group cursor-pointer">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.3094489430756!2d7.4474477147708165!3d9.041989491039392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0a5bdf4b8e53%3A0x1a8c0d0c0d0c0d0c!2sWuye%20District%2C%20Abuja%2C%20Nigeria!5e0!3m2!1sen!2s!4v1635789012345!5m2!1sen!2s"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="transition-transform duration-300 group-hover:scale-105"
                    ></iframe>

                    {/* Map Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 text-sm font-medium text-gray-900">
                        Click to interact with map
                      </div>
                    </div>
                  </div>

                  {/* Map Info */}
                  <div className="mt-4 flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                    <span>📍 NCAIR Complex, Wuye District</span>
                    <span>🚗 Free parking available</span>
                  </div>
                </div>

                {/* Nearby Amenities */}
                <div className="mt-6 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-4">Nearby Amenities</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {amenities.slice(0, 4).map((amenity, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-nitda-500 to-teal-500 rounded-full"></div>
                        <span className="text-sm text-gray-600 dark:text-gray-300">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Facilities Tab */}
          {activeTab === 'facilities' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-12"
            >
              {/* Facility Showcase */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700">
                    <div className="aspect-video relative">
                      <Image
                        src={facilities[selectedFacility].image}
                        alt={facilities[selectedFacility].name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {facilities[selectedFacility].name}
                        </h3>
                        <p className="text-white/90">
                          {facilities[selectedFacility].description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {facilities.map((facility, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedFacility(index)}
                      className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${selectedFacility === index
                          ? 'bg-gradient-to-r from-nitda-500 to-teal-500 text-white shadow-lg'
                          : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:shadow-lg border border-gray-200 dark:border-gray-700'
                        }`}
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${selectedFacility === index ? 'bg-white/20' : 'bg-gray-100 dark:bg-gray-700'
                          }`}>
                          <facility.icon className={`h-6 w-6 ${selectedFacility === index ? 'text-white' : 'text-nitda-500'
                            }`} />
                        </div>
                        <div>
                          <h4 className="font-bold mb-2">{facility.name}</h4>
                          <p className={`text-sm ${selectedFacility === index ? 'text-white/90' : 'text-gray-600 dark:text-gray-300'
                            }`}>
                            {facility.description}
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* All Amenities */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">All Amenities & Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="w-2 h-2 bg-gradient-to-r from-nitda-500 to-teal-500 rounded-full"></div>
                      <span className="text-sm text-gray-700 dark:text-gray-300">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Directions Tab */}
          {activeTab === 'directions' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            >
              <div className="space-y-8">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">How to Get Here</h3>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center space-x-2">
                        <span>🚗</span>
                        <span>By Car</span>
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-3">
                        Take the Airport Road and turn towards Wuye District. Follow signs to NCAIR Complex.
                      </p>
                      <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          <strong>Parking:</strong> Free parking available on-site with 24/7 security
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center space-x-2">
                        <span>🚌</span>
                        <span>Public Transportation</span>
                      </h4>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                        <li>• Take any bus to Wuye District</li>
                        <li>• Alight at NCAIR bus stop</li>
                        <li>• Short 5-minute walk to the facility</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center space-x-2">
                        <span>✈️</span>
                        <span>From Airport</span>
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Nnamdi Azikiwe International Airport is 45 minutes away by car.
                        Taxi and ride-sharing services are readily available.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <MapPinIcon className="h-5 w-5 text-nitda-500" />
                      <span className="text-gray-700 dark:text-gray-300">Plot 1, NCAIR Complex, Wuye District, Abuja FCT</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <PhoneIcon className="h-5 w-5 text-nitda-500" />
                      <span className="text-gray-700 dark:text-gray-300">+234 (0) 9 123 4567</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <EnvelopeIcon className="h-5 w-5 text-nitda-500" />
                      <span className="text-gray-700 dark:text-gray-300">visit@ondi.gov.ng</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Large Interactive Map */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Interactive Map</h3>
                <div className="aspect-[4/3] bg-gray-100 dark:bg-gray-700 rounded-xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.3094489430756!2d7.4474477147708165!3d9.041989491039392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0a5bdf4b8e53%3A0x1a8c0d0c0d0c0d0c!2sWuye%20District%2C%20Abuja%2C%20Nigeria!5e0!3m2!1sen!2s!4v1635789012345!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="mt-4 flex justify-center">
                  <a
                    href="https://maps.google.com/?q=Wuye+District+Abuja+Nigeria"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-nitda-500 to-teal-500 text-white rounded-lg hover:shadow-lg transition-all duration-300"
                  >
                    <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                    <span>Open in Google Maps</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
