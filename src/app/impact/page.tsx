'use client';

import { motion } from 'framer-motion';
import { 
  ChartBarIcon,
  TrophyIcon,
  UserGroupIcon,
  BuildingOffice2Icon,
  CurrencyDollarIcon,
  GlobeAltIcon,
  ArrowTrendingUpIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

const impactStats = [
  {
    number: '250+',
    label: 'Startups Supported',
    description: 'Innovative companies accelerated through our programs',
    icon: BuildingOffice2Icon,
    color: 'nitda-600'
  },
  {
    number: '₦5.2B',
    label: 'Funding Facilitated',
    description: 'Total investment secured by our portfolio companies',
    icon: CurrencyDollarIcon,
    color: 'green-600'
  },
  {
    number: '1,200+',
    label: 'Jobs Created',
    description: 'Direct employment opportunities generated',
    icon: UserGroupIcon,
    color: 'blue-600'
  },
  {
    number: '12',
    label: 'States Reached',
    description: 'Geographic coverage across Nigeria',
    icon: GlobeAltIcon,
    color: 'purple-600'
  }
];

const successStories = [
  {
    id: 1,
    company: 'HealthTech Solutions',
    founder: 'Dr. Amina Kano',
    sector: 'HealthTech',
    achievement: 'Scaled to 50,000+ users across 6 states',
    impact: 'Improved healthcare access in rural communities',
    funding: '₦150M Series A',
    image: '🏥',
    quote: "ONDI's support transformed our vision into a reality that's now serving thousands of Nigerians.",
    featured: true
  },
  {
    id: 2,
    company: 'AgroConnect',
    founder: 'Ibrahim Musa',
    sector: 'AgriTech',
    achievement: 'Connected 10,000+ farmers to markets',
    impact: 'Increased farmer income by average 40%',
    funding: '₦80M Seed Round',
    image: '🌾',
    quote: "The mentorship and network access provided by ONDI was instrumental in our growth.",
    featured: false
  },
  {
    id: 3,
    company: 'EduLearn Nigeria',
    founder: 'Fatima Abubakar',
    sector: 'EdTech',
    achievement: 'Reached 100,000+ students',
    impact: 'Improved learning outcomes in underserved areas',
    funding: '₦120M Growth Capital',
    image: '📚',
    quote: "ONDI helped us navigate the challenges of scaling educational technology in Nigeria.",
    featured: true
  }
];

const ecosystemGrowth = [
  {
    year: '2020',
    startups: 25,
    funding: 500,
    jobs: 150,
    partnerships: 5
  },
  {
    year: '2021',
    startups: 65,
    funding: 1200,
    jobs: 380,
    partnerships: 12
  },
  {
    year: '2022',
    startups: 125,
    funding: 2800,
    jobs: 720,
    partnerships: 25
  },
  {
    year: '2023',
    startups: 180,
    funding: 4100,
    jobs: 950,
    partnerships: 40
  },
  {
    year: '2024',
    startups: 250,
    funding: 5200,
    jobs: 1200,
    partnerships: 58
  }
];

const sectorImpact = [
  { sector: 'FinTech', companies: 68, funding: '₦2.1B', jobs: 420 },
  { sector: 'HealthTech', companies: 45, funding: '₦1.3B', jobs: 280 },
  { sector: 'EdTech', companies: 38, funding: '₦890M', jobs: 190 },
  { sector: 'AgriTech', companies: 42, funding: '₦750M', jobs: 210 },
  { sector: 'CleanTech', companies: 25, funding: '₦420M', jobs: 85 },
  { sector: 'LogTech', companies: 32, funding: '₦640M', jobs: 155 }
];

export default function ImpactPage() {
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
              Our <span className="text-nitda-400">Impact</span>
            </h1>
            <p className="text-xl text-nitda-100 max-w-3xl mx-auto mb-8">
              Transforming Nigeria&apos;s innovation ecosystem through measurable results and lasting change
            </p>
            <div className="flex justify-center">
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-left max-w-2xl">
                <h3 className="text-lg font-semibold text-white mb-2">Latest Milestone</h3>
                <p className="text-nitda-100">
                  🎉 Our portfolio companies have now created over 1,200 jobs and secured ₦5.2B in funding!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Impact by the <span className="text-nitda-600">Numbers</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quantifiable results from our innovation ecosystem initiatives
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-16 h-16 bg-${stat.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                <h4 className="text-xl font-semibold text-nitda-600 mb-3">{stat.label}</h4>
                <p className="text-gray-600">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Success <span className="text-nitda-600">Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the innovators who are changing Nigeria through technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  story.featured ? 'ring-2 ring-nitda-400' : ''
                }`}
              >
                {story.featured && (
                  <div className="bg-nitda-400 text-nitda-900 px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                    ⭐ Featured Success
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{story.image}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{story.company}</h3>
                  <p className="text-nitda-600 font-semibold mb-1">{story.founder}</p>
                  <span className="bg-nitda-50 text-nitda-700 px-3 py-1 rounded-full text-sm">
                    {story.sector}
                  </span>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Achievement</h4>
                    <p className="text-gray-700 text-sm">{story.achievement}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Impact</h4>
                    <p className="text-gray-700 text-sm">{story.impact}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Funding</h4>
                    <p className="text-nitda-600 font-semibold text-sm">{story.funding}</p>
                  </div>
                </div>

                <blockquote className="italic text-gray-600 border-l-4 border-nitda-400 pl-4 mb-6">
                  &quot;{story.quote}&quot;
                </blockquote>

                <button className="w-full bg-nitda-600 text-white px-4 py-2 rounded-lg hover:bg-nitda-700 transition-colors font-semibold">
                  Read Full Story
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Growth Chart */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Ecosystem <span className="text-nitda-600">Growth</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our consistent growth trajectory over the past five years
            </p>
          </motion.div>

          <div className="bg-gray-50 rounded-lg p-8">
            <div className="grid grid-cols-5 gap-4">
              {ecosystemGrowth.map((year, index) => (
                <motion.div
                  key={year.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{year.year}</h3>
                    <div className="space-y-2">
                      <div className="bg-nitda-600 text-white p-3 rounded-lg">
                        <div className="text-2xl font-bold">{year.startups}</div>
                        <div className="text-xs">Startups</div>
                      </div>
                      <div className="bg-green-600 text-white p-3 rounded-lg">
                        <div className="text-lg font-bold">₦{year.funding}M</div>
                        <div className="text-xs">Funding</div>
                      </div>
                      <div className="bg-blue-600 text-white p-3 rounded-lg">
                        <div className="text-lg font-bold">{year.jobs}</div>
                        <div className="text-xs">Jobs</div>
                      </div>
                      <div className="bg-purple-600 text-white p-3 rounded-lg">
                        <div className="text-lg font-bold">{year.partnerships}</div>
                        <div className="text-xs">Partners</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sector Impact */}
      <section className="py-20 bg-nitda-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Impact by <span className="text-nitda-600">Sector</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Diversified support across key technology sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectorImpact.map((sector, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{sector.sector}</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-nitda-600">{sector.companies}</div>
                    <div className="text-sm text-gray-600">Companies</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">{sector.funding}</div>
                    <div className="text-sm text-gray-600">Funding</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600">{sector.jobs}</div>
                    <div className="text-sm text-gray-600">Jobs</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
            <SparklesIcon className="w-16 h-16 text-nitda-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">
              Be Part of Our Success Story
            </h2>
            <p className="text-xl text-nitda-100 mb-8">
              Join the innovators who are transforming Nigeria&apos;s digital landscape
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-nitda-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-nitda-50 transition-colors">
                Apply to Programs
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-nitda-600 transition-colors">
                Partner with Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
