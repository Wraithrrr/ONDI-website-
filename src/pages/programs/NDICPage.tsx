// pages/programs/NDICPage.tsx
import { motion } from 'motion/react';
import { Search, Users, TrendingUp, Lightbulb, GraduationCap, Handshake, DollarSign, Award, Package, ArrowLeft } from 'lucide-react';
import { useState } from 'react';

const aboutFeatures = [
  {
    icon: Lightbulb,
    title: 'Identify Innovative Solutions',
    description: 'Tech innovation programs: collaborative programs that drive solutions to major life challenges.',
  },
  {
    icon: Users,
    title: 'Support Tech Entrepreneurs',
    description: 'Host for bringing show tech startups around big ideas, backed with opportunity mentors.',
  },
  {
    icon: TrendingUp,
    title: 'Drive Socio-Economic Growth',
    description: 'Provide the groundwork. Challenge and recognize emerging sustainable business models.',
  },
];

const whoShouldApply = [
  {
    icon: Search,
    title: 'Tech Startups & Innovators',
    description: 'Lorem ipsum digita to a platformer resourceful digital innovation reach.',
  },
  {
    icon: GraduationCap,
    title: 'Researchers & Academics',
    description: 'Please see them as academic, textbook the respective narrative. Offering insights to Nigeria\'s.',
  },
  {
    icon: Lightbulb,
    title: 'Solution-Oriented Startups',
    description: 'With innovative forward focused, collaborative sit they to innovation with the essentials.',
  },
];

const whatParticipantsGain = [
  {
    icon: DollarSign,
    title: 'Funding & Grants',
    description: 'Lorem ipsum/opportunity, government funding network innovate they. Escalating perspectives at innovations.',
  },
  {
    icon: GraduationCap,
    title: 'Mentorship & Training',
    description: 'Lorem ipsum insurance transit. Retailers, government to go that tech-notching, participants technology digital innovative for investors.',
  },
  {
    icon: Handshake,
    title: 'Government Partnerships',
    description: 'Add the career opportunities on Quotes and Pauses.',
  },
];

// Cohort data
const cohorts = [
  {
    year: 2023,
    fundingSecured: '$300K',
    sectorsImpacted: 3,
    productsLaunched: 8,
    highlights: [
      { name: 'Alqat', description: 'Convex icy. Crvrate strampo earnelesa Eaccers.', fundingSecured: '$72k', industry: 'Fintech' },
      { name: 'Agrodomain', description: 'Startups. Laernet digites soun tilt xociety wast miet.', fundingSecured: '$0.006 Fermnut Bnactet', industry: 'Agritech' },
      { name: 'Medicity', description: 'Egnreeovs. Techwrimes os io a digital fontasy.', fundingSecured: 'Partnust with 16 Clafes', industry: 'Healthtech' },
    ],
  },
  {
    year: 2022,
    fundingSecured: '$220K',
    sectorsImpacted: 2,
    productsLaunched: 6,
    highlights: [
      { name: 'Vtrack', description: 'Responsivity. Save eyemony to streets territy dreamblex.', fundingSecured: '$22k', industry: 'Logistics' },
      { name: 'FundEase', description: 'Agoeronics. Tenor digiert ax anth xelt apptygivenees.', fundingSecured: '$6,006 Fermnut Reacbed', industry: 'Fintech' },
      { name: 'E-Learn+', description: 'Auxiliattoss. Sceremamita ad digital tacont oprutes.', fundingSecured: 'Partnust with 16 Clahtes', industry: 'Edtech' },
    ],
  },
];

export function NDICPage() {
  const [showPastCohorts, setShowPastCohorts] = useState(false);

  // Past Cohorts View
  if (showPastCohorts) {
    return (
      <main className="bg-white min-h-screen">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src="/images/logos/nitda-logo.webp" alt="NITDA" className="h-8" />
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <button onClick={() => setShowPastCohorts(false)} className="text-gray-600 hover:text-[#134C28]">About Challenge</button>
              <span className="text-[#134C28] font-medium">Past Cohorts</span>
              <a href="#/contact" className="text-gray-600 hover:text-[#134C28]">Contact</a>
            </nav>
            <a
              href="#"
              className="px-6 py-2 bg-[#D4A74A] hover:bg-[#c49a3d] text-white font-semibold rounded-full transition-colors text-sm"
            >
              Apply Now
            </a>
          </div>
        </header>

        {/* Past Cohorts Hero */}
        <section className="bg-[#134C28] text-white py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-6">
            <button
              onClick={() => setShowPastCohorts(false)}
              className="flex items-center gap-2 text-gray-300 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to About the Challenge
            </button>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Past Cohorts
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Discover Impact Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-[#134C28] mb-4">
                Discover the Impact of Past Winners
              </h2>
              <p className="text-gray-600 max-w-2xl">
                Explore the solutions that innovators who were sponsored and achieved challenges in previous editions of the NITDA Digital Innovation Challenge.
              </p>
            </motion.div>

            {/* Cohorts */}
            {cohorts.map((cohort, cohortIndex) => (
              <div key={cohort.year} className="mb-16">
                {/* Cohort Stats */}
                <div className="bg-[#F5F5F5] rounded-2xl p-6 mb-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <h3 className="text-2xl font-bold text-[#134C28]">Cohort {cohort.year}</h3>
                    <div className="flex flex-wrap gap-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#134C28]/10 rounded-lg flex items-center justify-center">
                          <DollarSign className="w-5 h-5 text-[#134C28]" />
                        </div>
                        <div>
                          <p className="text-xl font-bold text-[#134C28]">{cohort.fundingSecured}</p>
                          <p className="text-xs text-gray-600">Funding Secured</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#134C28]/10 rounded-lg flex items-center justify-center">
                          <Award className="w-5 h-5 text-[#134C28]" />
                        </div>
                        <div>
                          <p className="text-xl font-bold text-[#134C28]">{cohort.sectorsImpacted}</p>
                          <p className="text-xs text-gray-600">Sectors Impacted</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#134C28]/10 rounded-lg flex items-center justify-center">
                          <Package className="w-5 h-5 text-[#134C28]" />
                        </div>
                        <div>
                          <p className="text-xl font-bold text-[#134C28]">{cohort.productsLaunched}</p>
                          <p className="text-xs text-gray-600">Products Launched</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cohort Highlights */}
                <h4 className="text-xl font-bold text-[#134C28] mb-6">
                  Cohort {cohortIndex === 0 ? '12' : '11'} Highlights
                </h4>
                <div className="grid md:grid-cols-3 gap-6">
                  {cohort.highlights.map((startup, index) => (
                    <motion.div
                      key={startup.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow"
                    >
                      <div className="w-12 h-12 bg-[#134C28]/10 rounded-xl flex items-center justify-center mb-4">
                        <span className="text-[#134C28] font-bold text-lg">{startup.name.charAt(0)}</span>
                      </div>
                      <h5 className="text-lg font-bold text-[#134C28] mb-1">{startup.name}</h5>
                      <p className="text-xs text-[#D4A74A] font-medium mb-2">{startup.industry}</p>
                      <p className="text-gray-600 text-sm mb-3">{startup.description}</p>
                      <p className="text-xs text-gray-500 mb-4">{startup.fundingSecured} Funding Secured</p>
                      <button className="px-4 py-2 bg-[#D4A74A] hover:bg-[#c49a3d] text-white text-sm font-medium rounded-lg transition-colors">
                        View Details
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#134C28]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Become a Catalyst for Nigeria's Digital Future!
            </h2>
            <p className="text-gray-300 mb-8">
              Apply now to the NITDA Digital Innovation Challenge and make your mark!
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#D4A74A] hover:bg-[#c49a3d] text-white font-semibold rounded-full transition-colors"
            >
              Apply Now
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#0d3a1e] py-8">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
              <button onClick={() => setShowPastCohorts(false)} className="text-white hover:text-[#D4A74A] transition-colors">About Challenge</button>
              <span className="hidden md:inline text-gray-500">|</span>
              <span className="text-[#D4A74A]">Past Cohorts</span>
              <span className="hidden md:inline text-gray-500">|</span>
              <a href="#/contact" className="text-white hover:text-[#D4A74A] transition-colors">Contact</a>
            </div>
            <p className="text-center text-gray-400 text-sm">
              © 2024 NITDA. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    );
  }

  // Main NDIC Page
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#134C28] via-[#1a5f33] to-[#134C28] text-white overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-64 h-64 bg-[#D4A74A]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <span className="text-sm font-medium">About the NITDA Digital Innovation Challenge</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Driving Tech Innovation for Nigeria's Development
              </h1>
              <p className="text-gray-200 text-base md:text-lg mb-8 leading-relaxed">
                The NITDA Digital Innovation Challenge is an initiative aimed at harnessing the innovative capabilities of Nigerians to create digital solutions that address challenges in various sectors of the economy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-8 py-3 bg-[#D4A74A] hover:bg-[#c49a3d] text-white font-semibold rounded-full transition-colors"
                >
                  Apply Now
                </a>
                <button
                  onClick={() => setShowPastCohorts(true)}
                  className="inline-flex items-center justify-center px-8 py-3 bg-[#1a3d20] hover:bg-[#0d2a14] text-white font-semibold rounded-full transition-colors border border-white/20"
                >
                  View Past Cohorts
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden md:flex justify-center"
            >
              <div className="relative w-full max-w-md">
                <div className="bg-gradient-to-br from-[#D4A74A]/20 to-transparent rounded-3xl p-8">
                  <img
                    src="/assets/ndic-1.jpeg"
                    alt="Tech Innovation"
                    className="w-full h-64 object-cover rounded-2xl shadow-xl"
                  />
                  <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-xl p-3">
                    <TrendingUp className="w-8 h-8 text-[#D4A74A]" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About the Challenge Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#134C28] mb-4">
              About the Challenge
            </h2>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Changing the Game with Digital Solutions
            </h3>
            <p className="text-gray-600 max-w-3xl leading-relaxed">
              The NITDA Digital Innovation Challenge aims to identify and nurture the most promising tech-driven solutions that can propel Nigeria forward. Startups, innovators, and researchers are invited to submit solutions that leverage technology to solve critical national issues.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {aboutFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 mb-4 bg-[#134C28]/10 rounded-xl flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-[#134C28]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Should Apply Section */}
      <section className="py-16 md:py-20 bg-[#F5F5F5]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#134C28]">
              Who Should Apply?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {whoShouldApply.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-[#134C28]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-[#134C28]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Participants Gain Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#134C28]">
              What Participants Gain
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {whatParticipantsGain.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 mb-4 bg-[#134C28]/10 rounded-xl flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-[#134C28]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <button className="px-4 py-2 bg-[#D4A74A] hover:bg-[#c49a3d] text-white text-sm font-medium rounded-lg transition-colors">
                  View Details
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-[#134C28]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Become a Catalyst for Nigeria's Digital Future!
            </h2>
            <p className="text-gray-200 mb-8">
              Apply now to the NITDA Digital Innovation Challenge and make your mark!
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#D4A74A] hover:bg-[#c49a3d] text-white font-semibold rounded-full transition-colors"
            >
              Apply Now
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0d3a1e] py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
            <a href="#" className="text-white hover:text-[#D4A74A] transition-colors">About Challenge</a>
            <span className="hidden md:inline text-gray-500">|</span>
            <button onClick={() => setShowPastCohorts(true)} className="text-white hover:text-[#D4A74A] transition-colors">Past Cohorts</button>
            <span className="hidden md:inline text-gray-500">|</span>
            <a href="#/contact" className="text-white hover:text-[#D4A74A] transition-colors">Contact</a>
          </div>
          <p className="text-center text-gray-400 text-sm">
            © 2024 NITDA. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
