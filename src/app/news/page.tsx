'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  NewspaperIcon,
  MegaphoneIcon,
  PhotoIcon,
  EnvelopeIcon,
  CalendarDaysIcon,
  UserIcon,
  ArrowRightIcon,
  TagIcon,
  EyeIcon,
  ShareIcon
} from '@heroicons/react/24/outline';

const newsCategories = ['All', 'Announcements', 'Program Updates', 'Success Stories', 'Events', 'Policy'];

const featuredNews = {
  id: 1,
  title: 'ONDI Launches ₦2B Innovation Fund for Nigerian Startups',
  category: 'Announcements',
  date: '2024-01-15',
  author: 'ONDI Communications Team',
  excerpt: 'The Office for Nigerian Digital Innovation announces the launch of a groundbreaking ₦2 billion innovation fund designed to accelerate the growth of promising Nigerian startups.',
  image: '💰',
  readTime: '5 min read',
  views: '2.1k',
  featured: true
};

const newsArticles = [
  {
    id: 2,
    title: '50 Startups Graduate from ONDI Accelerator Program',
    category: 'Program Updates',
    date: '2024-01-12',
    author: 'Programs Team',
    excerpt: 'Another successful cohort completes our intensive 6-month acceleration program, with 80% securing follow-on funding.',
    image: '🎓',
    readTime: '3 min read',
    views: '1.8k',
    featured: false
  },
  {
    id: 3,
    title: 'Nigeria Digital Innovation Summit 2024: Key Takeaways',
    category: 'Events',
    date: '2024-01-10',
    author: 'Event Coverage Team',
    excerpt: 'Highlights from the largest digital innovation conference in West Africa, featuring 500+ participants and 50+ speakers.',
    image: '🎤',
    readTime: '7 min read',
    views: '3.2k',
    featured: false
  },
  {
    id: 4,
    title: 'New Policy Framework Supports Tech Startup Growth',
    category: 'Policy',
    date: '2024-01-08',
    author: 'Policy Team',
    excerpt: 'NITDA announces new regulatory frameworks designed to create a more enabling environment for technology startups.',
    image: '📋',
    readTime: '4 min read',
    views: '1.5k',
    featured: false
  },
  {
    id: 5,
    title: 'HealthTech Startup Receives International Recognition',
    category: 'Success Stories',
    date: '2024-01-05',
    author: 'Success Stories Team',
    excerpt: 'ONDI-supported startup wins global award for innovative healthcare solution serving rural communities.',
    image: '🏆',
    readTime: '6 min read',
    views: '2.7k',
    featured: false
  },
  {
    id: 6,
    title: 'Women in Tech Initiative Launches Nationwide',
    category: 'Program Updates',
    date: '2024-01-03',
    author: 'Inclusion Team',
    excerpt: 'New program aims to increase female participation in Nigeria\'s technology ecosystem through targeted support.',
    image: '👩‍💻',
    readTime: '4 min read',
    views: '1.9k',
    featured: false
  }
];

const pressReleases = [
  {
    id: 1,
    title: 'ONDI Partners with Major Tech Giants for Skills Development',
    date: '2024-01-14',
    type: 'Partnership'
  },
  {
    id: 2,
    title: 'Q4 2023 Impact Report: Record Growth in Innovation Ecosystem',
    date: '2024-01-10',
    type: 'Report'
  },
  {
    id: 3,
    title: 'ONDI Expands Operations to Three Additional States',
    date: '2024-01-08',
    type: 'Expansion'
  }
];

const mediaGallery = [
  { id: 1, type: 'image', title: 'Innovation Summit 2024', date: '2024-01-10' },
  { id: 2, type: 'video', title: 'Startup Success Stories', date: '2024-01-08' },
  { id: 3, type: 'image', title: 'Accelerator Demo Day', date: '2024-01-05' },
  { id: 4, type: 'video', title: 'Policy Roundtable Discussion', date: '2024-01-03' }
];

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeTab, setActiveTab] = useState('blog');

  const filteredNews = newsArticles.filter(article => 
    selectedCategory === 'All' || article.category === selectedCategory
  );

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
              News & <span className="text-nitda-400">Media</span>
            </h1>
            <p className="text-xl text-nitda-100 max-w-3xl mx-auto mb-8">
              Stay updated with the latest developments in Nigeria&apos;s innovation ecosystem
            </p>
            
            {/* Tab Navigation */}
            <div className="flex justify-center mb-8">
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-2 flex space-x-2">
                <button
                  onClick={() => setActiveTab('blog')}
                  className={`px-6 py-3 rounded-lg transition-colors ${
                    activeTab === 'blog' 
                      ? 'bg-white text-nitda-900' 
                      : 'text-white hover:bg-white/20'
                  }`}
                >
                  <NewspaperIcon className="w-5 h-5 inline mr-2" />
                  Blog
                </button>
                <button
                  onClick={() => setActiveTab('press')}
                  className={`px-6 py-3 rounded-lg transition-colors ${
                    activeTab === 'press' 
                      ? 'bg-white text-nitda-900' 
                      : 'text-white hover:bg-white/20'
                  }`}
                >
                  <MegaphoneIcon className="w-5 h-5 inline mr-2" />
                  Press
                </button>
                <button
                  onClick={() => setActiveTab('media')}
                  className={`px-6 py-3 rounded-lg transition-colors ${
                    activeTab === 'media' 
                      ? 'bg-white text-nitda-900' 
                      : 'text-white hover:bg-white/20'
                  }`}
                >
                  <PhotoIcon className="w-5 h-5 inline mr-2" />
                  Media
                </button>
                <button
                  onClick={() => setActiveTab('newsletter')}
                  className={`px-6 py-3 rounded-lg transition-colors ${
                    activeTab === 'newsletter' 
                      ? 'bg-white text-nitda-900' 
                      : 'text-white hover:bg-white/20'
                  }`}
                >
                  <EnvelopeIcon className="w-5 h-5 inline mr-2" />
                  Newsletter
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Tab */}
      {activeTab === 'blog' && (
        <>
          {/* Featured Article */}
          <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-nitda-50 rounded-lg p-8 mb-12"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <span className="bg-nitda-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                      Featured Story
                    </span>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{featuredNews.title}</h2>
                    <p className="text-gray-700 mb-6">{featuredNews.excerpt}</p>
                    <div className="flex items-center space-x-6 text-sm text-gray-600 mb-6">
                      <div className="flex items-center">
                        <CalendarDaysIcon className="w-4 h-4 mr-2" />
                        {new Date(featuredNews.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <UserIcon className="w-4 h-4 mr-2" />
                        {featuredNews.author}
                      </div>
                      <div className="flex items-center">
                        <EyeIcon className="w-4 h-4 mr-2" />
                        {featuredNews.views} views
                      </div>
                    </div>
                    <button className="bg-nitda-600 text-white px-6 py-3 rounded-lg hover:bg-nitda-700 transition-colors font-semibold">
                      Read Full Article
                    </button>
                  </div>
                  <div className="text-center">
                    <div className="text-8xl mb-4">{featuredNews.image}</div>
                    <span className="text-sm text-gray-600">{featuredNews.readTime}</span>
                  </div>
                </div>
              </motion.div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-4 mb-8">
                {newsCategories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      selectedCategory === category
                        ? 'bg-nitda-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* News Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredNews.map((article, index) => (
                  <motion.article
                    key={article.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="bg-nitda-50 text-nitda-700 px-3 py-1 rounded-full text-sm font-semibold">
                          {article.category}
                        </span>
                        <div className="text-3xl">{article.image}</div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <CalendarDaysIcon className="w-4 h-4 mr-1" />
                          {new Date(article.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center space-x-4">
                          <span>{article.readTime}</span>
                          <div className="flex items-center">
                            <EyeIcon className="w-4 h-4 mr-1" />
                            {article.views}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <button className="text-nitda-600 font-semibold hover:text-nitda-700 transition-colors flex items-center">
                          Read More <ArrowRightIcon className="w-4 h-4 ml-1" />
                        </button>
                        <button className="text-gray-400 hover:text-gray-600 transition-colors">
                          <ShareIcon className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Press Tab */}
      {activeTab === 'press' && (
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Press Releases</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Official announcements and updates from ONDI
              </p>
            </motion.div>

            <div className="space-y-6">
              {pressReleases.map((release, index) => (
                <motion.div
                  key={release.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold mr-4 ${
                          release.type === 'Partnership' ? 'bg-blue-100 text-blue-800' :
                          release.type === 'Report' ? 'bg-green-100 text-green-800' :
                          'bg-purple-100 text-purple-800'
                        }`}>
                          {release.type}
                        </span>
                        <span className="text-sm text-gray-500">
                          {new Date(release.date).toLocaleDateString()}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{release.title}</h3>
                    </div>
                    <div className="flex space-x-3">
                      <button className="bg-nitda-600 text-white px-4 py-2 rounded-lg hover:bg-nitda-700 transition-colors">
                        Download PDF
                      </button>
                      <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                        Share
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Media Tab */}
      {activeTab === 'media' && (
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Media Gallery</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Photos and videos from our events and activities
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {mediaGallery.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <div className="aspect-video bg-gradient-to-br from-nitda-600 to-nitda-700 flex items-center justify-center">
                    {item.type === 'video' ? (
                      <div className="text-white text-4xl">🎥</div>
                    ) : (
                      <div className="text-white text-4xl">📷</div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{new Date(item.date).toLocaleDateString()}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter Tab */}
      {activeTab === 'newsletter' && (
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Newsletter Signup</h2>
              <p className="text-xl text-gray-600 mb-8">
                Get the latest updates on innovation opportunities, events, and success stories
              </p>
              
              <div className="bg-nitda-50 rounded-lg p-8 mb-8">
                <div className="max-w-lg mx-auto">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nitda-500 focus:border-nitda-500"
                    />
                    <button className="bg-nitda-600 text-white px-8 py-3 rounded-lg hover:bg-nitda-700 transition-colors font-semibold">
                      Subscribe
                    </button>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    Join 5,000+ innovators who receive our weekly updates
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-4">📧</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Weekly Updates</h3>
                  <p className="text-gray-600">Latest news and opportunities</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Targeted Content</h3>
                  <p className="text-gray-600">Relevant to your interests</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Exclusive Access</h3>
                  <p className="text-gray-600">Early access to programs</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-nitda-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Share Your Innovation Story
            </h2>
            <p className="text-xl text-nitda-100 mb-8">
              Have news to share? We&apos;d love to feature your innovation journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-nitda-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-nitda-50 transition-colors">
                Submit Your Story
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-nitda-600 transition-colors">
                Media Inquiries
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
