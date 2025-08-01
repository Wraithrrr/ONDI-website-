'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MagnifyingGlassIcon,
  FunnelIcon,
  MapPinIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  ClockIcon,
  TagIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline';

const innovationData = [
  {
    id: 1,
    name: 'TechMed Solutions',
    category: 'HealthTech',
    stage: 'Growth',
    location: 'Lagos',
    founded: 2021,
    employees: '11-50',
    funding: '₦50M-₦100M',
    description: 'AI-powered diagnostic platform for rural healthcare delivery',
    tags: ['AI', 'Healthcare', 'Rural Access', 'Diagnostics'],
    logo: '🏥',
    featured: true
  },
  {
    id: 2,
    name: 'AgroConnect',
    category: 'AgriTech',
    stage: 'Seed',
    location: 'Abuja',
    founded: 2022,
    employees: '1-10',
    funding: '₦10M-₦25M',
    description: 'Digital marketplace connecting farmers directly to consumers',
    tags: ['Agriculture', 'Marketplace', 'Farmers', 'Supply Chain'],
    logo: '🌾',
    featured: false
  },
  {
    id: 3,
    name: 'EduTech Nigeria',
    category: 'EdTech',
    stage: 'Early',
    location: 'Kano',
    founded: 2023,
    employees: '1-10',
    funding: '₦5M-₦10M',
    description: 'Personalized learning platform for Nigerian students',
    tags: ['Education', 'Personalized Learning', 'Students', 'Digital Learning'],
    logo: '📚',
    featured: true
  },
  {
    id: 4,
    name: 'FinanceFlow',
    category: 'FinTech',
    stage: 'Growth',
    location: 'Lagos',
    founded: 2020,
    employees: '51-100',
    funding: '₦100M+',
    description: 'Digital banking solutions for underserved communities',
    tags: ['Banking', 'Financial Inclusion', 'Digital Payments', 'Communities'],
    logo: '💳',
    featured: false
  },
  {
    id: 5,
    name: 'CleanEnergy Hub',
    category: 'CleanTech',
    stage: 'Seed',
    location: 'Port Harcourt',
    founded: 2023,
    employees: '1-10',
    funding: '₦25M-₦50M',
    description: 'Solar energy solutions for rural electrification',
    tags: ['Solar Energy', 'Rural Electrification', 'Clean Energy', 'Sustainability'],
    logo: '☀️',
    featured: true
  },
  {
    id: 6,
    name: 'LogiTrack',
    category: 'LogTech',
    stage: 'Early',
    location: 'Abuja',
    founded: 2022,
    employees: '11-50',
    funding: '₦10M-₦25M',
    description: 'Smart logistics and supply chain optimization platform',
    tags: ['Logistics', 'Supply Chain', 'Optimization', 'Smart Systems'],
    logo: '🚛',
    featured: false
  }
];

const categories = ['All', 'HealthTech', 'AgriTech', 'EdTech', 'FinTech', 'CleanTech', 'LogTech'];
const stages = ['All', 'Early', 'Seed', 'Growth'];
const locations = ['All', 'Lagos', 'Abuja', 'Kano', 'Port Harcourt'];

export default function DirectoryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStage, setSelectedStage] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

  const filteredInnovations = innovationData.filter(innovation => {
    const matchesSearch = innovation.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         innovation.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         innovation.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || innovation.category === selectedCategory;
    const matchesStage = selectedStage === 'All' || innovation.stage === selectedStage;
    const matchesLocation = selectedLocation === 'All' || innovation.location === selectedLocation;

    return matchesSearch && matchesCategory && matchesStage && matchesLocation;
  });

  const getStageColor = (stage: string) => {
    switch (stage) {
      case 'Early': return 'bg-blue-100 text-blue-800';
      case 'Seed': return 'bg-green-100 text-green-800';
      case 'Growth': return 'bg-purple-100 text-purple-800';
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
              Innovation <span className="text-nitda-400">Directory</span>
            </h1>
            <p className="text-xl text-nitda-100 max-w-3xl mx-auto mb-8">
              Discover and connect with Nigeria&apos;s most promising startups and innovations
            </p>
            <div className="flex justify-center">
              <div className="bg-white rounded-lg p-2 flex items-center max-w-2xl w-full">
                <MagnifyingGlassIcon className="w-6 h-6 text-gray-400 ml-3" />
                <input
                  type="text"
                  placeholder="Search innovations, companies, or technologies..."
                  className="flex-1 px-4 py-3 outline-none text-gray-700"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button 
                  onClick={() => setShowFilters(!showFilters)}
                  className="bg-nitda-600 text-white px-6 py-3 rounded-lg hover:bg-nitda-700 transition-colors flex items-center"
                >
                  <FunnelIcon className="w-5 h-5 mr-2" />
                  Filters
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      {showFilters && (
        <motion.section
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="bg-gray-50 py-8"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nitda-500 focus:border-nitda-500"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Stage</label>
                <select
                  value={selectedStage}
                  onChange={(e) => setSelectedStage(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nitda-500 focus:border-nitda-500"
                >
                  {stages.map(stage => (
                    <option key={stage} value={stage}>{stage}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Location</label>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nitda-500 focus:border-nitda-500"
                >
                  {locations.map(location => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </motion.section>
      )}

      {/* Results Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {filteredInnovations.length} Innovation{filteredInnovations.length !== 1 ? 's' : ''} Found
            </h2>
            <div className="flex gap-2">
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                Grid View
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                List View
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredInnovations.map((innovation, index) => (
              <motion.div
                key={innovation.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${
                  innovation.featured ? 'ring-2 ring-nitda-400' : ''
                }`}
              >
                {innovation.featured && (
                  <div className="bg-nitda-400 text-nitda-900 px-4 py-2 text-sm font-semibold">
                    ⭐ Featured Innovation
                  </div>
                )}
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <span className="text-3xl mr-3">{innovation.logo}</span>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{innovation.name}</h3>
                        <p className="text-nitda-600 font-semibold">{innovation.category}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStageColor(innovation.stage)}`}>
                      {innovation.stage}
                    </span>
                  </div>

                  <p className="text-gray-700 mb-4 line-clamp-2">{innovation.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <MapPinIcon className="w-4 h-4 mr-2" />
                      {innovation.location}
                    </div>
                    <div className="flex items-center">
                      <ClockIcon className="w-4 h-4 mr-2" />
                      {innovation.founded}
                    </div>
                    <div className="flex items-center">
                      <UserGroupIcon className="w-4 h-4 mr-2" />
                      {innovation.employees}
                    </div>
                    <div className="flex items-center">
                      <CurrencyDollarIcon className="w-4 h-4 mr-2" />
                      {innovation.funding}
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {innovation.tags.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                      {innovation.tags.length > 3 && (
                        <span className="text-gray-500 text-xs">+{innovation.tags.length - 3} more</span>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button className="flex-1 bg-nitda-600 text-white px-4 py-2 rounded-lg hover:bg-nitda-700 transition-colors text-sm font-semibold">
                      View Profile
                    </button>
                    <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      <ArrowTopRightOnSquareIcon className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredInnovations.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No innovations found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search criteria or filters</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                  setSelectedStage('All');
                  setSelectedLocation('All');
                }}
                className="bg-nitda-600 text-white px-6 py-3 rounded-lg hover:bg-nitda-700 transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-nitda-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Join Our Innovation Network
            </h2>
            <p className="text-xl text-nitda-100 mb-8">
              Connect with innovators, investors, and partners to accelerate your growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-nitda-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-nitda-50 transition-colors">
                List Your Innovation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-nitda-600 transition-colors">
                Become a Partner
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
