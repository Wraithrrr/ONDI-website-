'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  DocumentTextIcon,
  BookOpenIcon,
  WrenchScrewdriverIcon,
  QuestionMarkCircleIcon,
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
  TagIcon,
  CalendarDaysIcon,
  EyeIcon,
  StarIcon
} from '@heroicons/react/24/outline';

const resourceCategories = ['All', 'Policy Documents', 'Guides & Toolkits', 'Research Reports', 'Templates', 'FAQs'];

const policyDocuments = [
  {
    id: 1,
    title: 'National Digital Innovation Policy Framework 2024',
    description: 'Comprehensive policy guidelines for digital innovation development in Nigeria',
    category: 'Policy Documents',
    type: 'PDF',
    size: '2.4 MB',
    downloads: '1,240',
    date: '2024-01-15',
    featured: true,
    tags: ['Policy', 'Innovation', 'Framework']
  },
  {
    id: 2,
    title: 'Startup Registration and Compliance Guide',
    description: 'Step-by-step guide for startup registration and regulatory compliance',
    category: 'Policy Documents',
    type: 'PDF',
    size: '890 KB',
    downloads: '856',
    date: '2024-01-10',
    featured: false,
    tags: ['Startup', 'Registration', 'Compliance']
  },
  {
    id: 3,
    title: 'Intellectual Property Protection for Tech Startups',
    description: 'Guidelines for protecting intellectual property in the Nigerian tech ecosystem',
    category: 'Policy Documents',
    type: 'PDF',
    size: '1.2 MB',
    downloads: '654',
    date: '2024-01-08',
    featured: false,
    tags: ['IP', 'Protection', 'Legal']
  }
];

const guidesToolkits = [
  {
    id: 4,
    title: 'Startup Pitch Deck Template',
    description: 'Professional template for creating compelling investor pitch presentations',
    category: 'Templates',
    type: 'PPTX',
    size: '3.1 MB',
    downloads: '2,340',
    date: '2024-01-12',
    featured: true,
    tags: ['Pitch', 'Template', 'Investment']
  },
  {
    id: 5,
    title: 'Business Model Canvas for Tech Startups',
    description: 'Interactive canvas template for developing and refining your business model',
    category: 'Templates',
    type: 'PDF',
    size: '450 KB',
    downloads: '1,890',
    date: '2024-01-05',
    featured: false,
    tags: ['Business Model', 'Canvas', 'Strategy']
  },
  {
    id: 6,
    title: 'Fundraising Strategy Toolkit',
    description: 'Comprehensive toolkit for planning and executing fundraising campaigns',
    category: 'Guides & Toolkits',
    type: 'PDF',
    size: '4.2 MB',
    downloads: '1,456',
    date: '2024-01-03',
    featured: true,
    tags: ['Fundraising', 'Strategy', 'Investment']
  }
];

const researchReports = [
  {
    id: 7,
    title: 'State of Nigerian Tech Ecosystem 2024',
    description: 'Annual comprehensive analysis of Nigeria\'s technology and innovation landscape',
    category: 'Research Reports',
    type: 'PDF',
    size: '8.7 MB',
    downloads: '3,120',
    date: '2024-01-01',
    featured: true,
    tags: ['Research', 'Ecosystem', 'Analysis']
  },
  {
    id: 8,
    title: 'Fintech Innovation Trends in West Africa',
    description: 'Deep dive into financial technology innovations and market opportunities',
    category: 'Research Reports',
    type: 'PDF',
    size: '5.4 MB',
    downloads: '987',
    date: '2023-12-28',
    featured: false,
    tags: ['Fintech', 'Trends', 'West Africa']
  }
];

const faqData = [
  {
    id: 1,
    category: 'General',
    question: 'What is ONDI and what does it do?',
    answer: 'The Office for Nigerian Digital Innovation (ONDI) is a special purpose vehicle of NITDA established to foster Nigeria\'s digital innovation ecosystem by supporting startups, facilitating partnerships, and creating enabling policies.'
  },
  {
    id: 2,
    category: 'Programs',
    question: 'How can I apply to ONDI programs?',
    answer: 'Applications to ONDI programs are typically done through our online portal. Each program has specific eligibility criteria and application processes detailed on our website.'
  },
  {
    id: 3,
    category: 'Funding',
    question: 'What types of funding does ONDI provide?',
    answer: 'ONDI provides various forms of support including grants, equity investments, and facilitating connections to investors. Funding depends on the program and stage of your startup.'
  },
  {
    id: 4,
    category: 'Eligibility',
    question: 'Who is eligible for ONDI support?',
    answer: 'Nigerian-based startups and innovators working on technology solutions are eligible. Specific criteria vary by program but generally include having a viable product or service and demonstrable market potential.'
  },
  {
    id: 5,
    category: 'Partnership',
    question: 'How can organizations partner with ONDI?',
    answer: 'Organizations can partner with ONDI through various channels including corporate partnership programs, academic collaborations, and strategic alliances. Contact our partnerships team for specific opportunities.'
  }
];

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('documents');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const allResources = [...policyDocuments, ...guidesToolkits, ...researchReports];

  const filteredResources = allResources.filter(resource => {
    const matchesCategory = selectedCategory === 'All' || resource.category === selectedCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'PDF': return '📄';
      case 'PPTX': return '📊';
      case 'DOCX': return '📝';
      default: return '📁';
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
              Resource <span className="text-nitda-400">Center</span>
            </h1>
            <p className="text-xl text-nitda-100 max-w-3xl mx-auto mb-8">
              Access comprehensive resources to accelerate your innovation journey
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-lg p-2 flex items-center">
                <MagnifyingGlassIcon className="w-6 h-6 text-gray-400 ml-3" />
                <input
                  type="text"
                  placeholder="Search resources, guides, and documents..."
                  className="flex-1 px-4 py-3 outline-none text-gray-700"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="bg-nitda-600 text-white px-6 py-3 rounded-lg hover:bg-nitda-700 transition-colors">
                  Search
                </button>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex justify-center mt-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-2 flex space-x-2">
                <button
                  onClick={() => setActiveTab('documents')}
                  className={`px-6 py-3 rounded-lg transition-colors ${activeTab === 'documents'
                      ? 'bg-white text-nitda-900'
                      : 'text-white hover:bg-white/20'
                    }`}
                >
                  <DocumentTextIcon className="w-5 h-5 inline mr-2" />
                  Documents
                </button>
                <button
                  onClick={() => setActiveTab('guides')}
                  className={`px-6 py-3 rounded-lg transition-colors ${activeTab === 'guides'
                      ? 'bg-white text-nitda-900'
                      : 'text-white hover:bg-white/20'
                    }`}
                >
                  <BookOpenIcon className="w-5 h-5 inline mr-2" />
                  Guides
                </button>
                <button
                  onClick={() => setActiveTab('tools')}
                  className={`px-6 py-3 rounded-lg transition-colors ${activeTab === 'tools'
                      ? 'bg-white text-nitda-900'
                      : 'text-white hover:bg-white/20'
                    }`}
                >
                  <WrenchScrewdriverIcon className="w-5 h-5 inline mr-2" />
                  Tools
                </button>
                <button
                  onClick={() => setActiveTab('faqs')}
                  className={`px-6 py-3 rounded-lg transition-colors ${activeTab === 'faqs'
                      ? 'bg-white text-nitda-900'
                      : 'text-white hover:bg-white/20'
                    }`}
                >
                  <QuestionMarkCircleIcon className="w-5 h-5 inline mr-2" />
                  FAQs
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Documents/Guides/Tools Tabs */}
      {(activeTab === 'documents' || activeTab === 'guides' || activeTab === 'tools') && (
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-4 mb-8">
              {resourceCategories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg transition-colors ${selectedCategory === category
                      ? 'bg-nitda-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Results Count */}
            <div className="mb-8">
              <p className="text-gray-600">
                {filteredResources.length} resource{filteredResources.length !== 1 ? 's' : ''} found
              </p>
            </div>

            {/* Resources Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResources.map((resource, index) => (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-white border-2 rounded-lg p-6 hover:shadow-xl transition-all duration-300 ${resource.featured ? 'border-nitda-400 ring-2 ring-nitda-400 ring-opacity-20' : 'border-gray-200'
                    }`}
                >
                  {resource.featured && (
                    <div className="bg-nitda-400 text-nitda-900 px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                      ⭐ Featured Resource
                    </div>
                  )}

                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{getFileIcon(resource.type)}</div>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold">
                      {resource.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">{resource.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{resource.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {resource.tags.map((tag, idx) => (
                      <span key={idx} className="bg-nitda-50 text-nitda-700 px-2 py-1 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6 text-sm text-gray-600">
                    <div className="text-center">
                      <CalendarDaysIcon className="w-4 h-4 mx-auto mb-1" />
                      <div>{new Date(resource.date).toLocaleDateString()}</div>
                    </div>
                    <div className="text-center">
                      <ArrowDownTrayIcon className="w-4 h-4 mx-auto mb-1" />
                      <div>{resource.downloads}</div>
                    </div>
                    <div className="text-center">
                      <DocumentTextIcon className="w-4 h-4 mx-auto mb-1" />
                      <div>{resource.size}</div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 bg-nitda-600 text-white px-4 py-2 rounded-lg hover:bg-nitda-700 transition-colors font-semibold flex items-center justify-center">
                      <ArrowDownTrayIcon className="w-4 h-4 mr-2" />
                      Download
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      <EyeIcon className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredResources.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">📂</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No resources found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your search terms or category filter</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                  }}
                  className="bg-nitda-600 text-white px-6 py-3 rounded-lg hover:bg-nitda-700 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* FAQs Tab */}
      {activeTab === 'faqs' && (
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Find answers to common questions about ONDI programs and services
              </p>
            </motion.div>

            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div>
                      <span className="bg-nitda-50 text-nitda-700 px-3 py-1 rounded-full text-sm font-semibold mr-4">
                        {faq.category}
                      </span>
                      <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                    </div>
                    <div className={`transform transition-transform ${expandedFaq === faq.id ? 'rotate-180' : ''
                      }`}>
                      ⌄
                    </div>
                  </button>
                  {expandedFaq === faq.id && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h3>
              <p className="text-gray-600 mb-6">
                Our team is here to help you navigate your innovation journey
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-nitda-600 text-white px-8 py-3 rounded-lg hover:bg-nitda-700 transition-colors font-semibold">
                  Contact Support
                </button>
                <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-semibold">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <section className="py-20 bg-nitda-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay Updated with New Resources
            </h2>
            <p className="text-xl text-nitda-100 mb-8">
              Be the first to access new guides, policies, and toolkits
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
