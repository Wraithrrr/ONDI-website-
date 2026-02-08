// pages/programs/IHatchPage.tsx
import { motion } from 'motion/react';
import { Check, Clock, ClipboardCheck, Handshake, Presentation, BookOpen, Users, Briefcase, ArrowLeft, DollarSign, Rocket, BriefcaseBusiness, MapPin, Building2, Trophy } from 'lucide-react';
import { useState } from 'react';

// Cohort data
const cohorts = [
  {
    id: 3,
    name: 'Cohort 3',
    startups: 39,
    fundingSecured: '$37K',
    marketReadyProducts: 3,
    jobsCreated: '20+',
    description: 'Cohort 3 brought together 39 promising startups across the six geo-political zones focusing on innovative solutions, resulting in funding for the top 3 startups.',
    startupsList: [
      { name: 'Connected', industry: 'AI & Machine Learning', isTop3: true, isTop12: false },
      { name: 'Dopals Technologies', industry: 'Mobility & Logistics', isTop3: true, isTop12: false },
      { name: 'Northino', industry: 'EdTech', isTop3: true, isTop12: false },
    ],
   
  },
  {
    id: 4,
    name: 'Cohort 4',
    startups: 160,
    fundingSecured: '$37K',
    marketReadyProducts: 5,
    jobsCreated: '500+',
    description: "iHatch Cohort 4 was designed around a two-stage, ecosystem-strengthening approach that first built up innovation hubs and then supported the startups that operate through those hubs. At its core, the programme didn't just train founders — it trained and equipped the enablers around them",
    startupsList: [
      { name: 'Ahioma', industry: 'E-commerce, AgriTech', isTop3: false, isTop12: true },
      { name: 'Chapta', industry: 'EdTech', isTop3: false, isTop12: true },
      { name: 'Cohortly App', industry: 'EdTech', isTop3: false, isTop12: true },
      { name: 'EasyBuy4me', industry: 'E-commerce, Logistics & Mobility', isTop3: false, isTop12: true },
      { name: 'Eventro', industry: 'Outsourcing & IT Services', isTop3: false, isTop12: true },
      { name: 'Ficore Africa', industry: 'E-commerce, Fintech, EdTech', isTop3: false, isTop12: true },
      { name: 'Garden in a Box Africa', industry: 'AgriTech', isTop3: false, isTop12: true },
      { name: 'Grabb 24/7', industry: 'AgriTech', isTop3: false, isTop12: true },
      { name: 'Interface Innovations Ltd', industry: 'Fintech, CleanTech & EnergyTech', isTop3: false, isTop12: true },
      { name: 'Linia Finance', industry: 'FinTech', isTop3: false, isTop12: true },
      { name: 'PPTLinks', industry: 'EdTech', isTop3: false, isTop12: true },
      { name: 'Softdrop', industry: 'Fintech, Logistics & Mobility', isTop3: false, isTop12: true },
    ],
    hubsList: [
      { name: '02 INNOVATIONS LAB', location: 'Nasarawa' },
      { name: 'AHLAM IT AND NETWORK SOLUTION', location: 'Yobe' },
      { name: 'AIKPEROKHA', location: 'Kogi' },
      { name: 'AlphaZone Tech Hub Ltd', location: 'Ebonyi' },
      { name: 'BENSAN TECHNOLOGY', location: 'Bayelsa' },
      { name: 'Center-ECD (African Center for Enterprise & Capacity Development)', location: 'Edo' },
      { name: 'CIATECH Africa', location: 'Borno' },
      { name: 'Climate Emerge Innovation Development Hub (CEID Hub)', location: 'Oyo' },
      { name: 'Codeant Technology Hub', location: 'Imo' },
      { name: 'Coriftech Solutions Hub', location: 'Delta' },
      { name: 'Cypherdevs', location: 'Kwara' },
      { name: 'FutureLabs', location: 'Akwa Ibom' },
      { name: 'Grazac Innovation Hub (Grazac Technologies)', location: 'Ogun' },
      { name: 'Guru Innovation Hub', location: 'Cross River' },
      { name: 'Ikwaire Computing Services and Academy Limited', location: 'Kebbi' },
      { name: 'Innovation Growth Hub (IgHub) Onitsha', location: 'Anambra' },
      { name: 'Innovate Ondo', location: 'Ondo' },
      { name: 'Insest Tech', location: 'Ekiti' },
      { name: 'IT Central Kaduna', location: 'Kaduna' },
      { name: 'KIRKIRA INNOVATION HUB', location: 'Katsina' },
      { name: 'Knots Technology Nig Ltd', location: 'Taraba' },
      { name: 'Labspace By JD Lab', location: 'Niger' },
      { name: 'Mindztech Hub', location: 'Gombe' },
      { name: 'Moolu Venture Lab (Moolu Ventures Limited)', location: 'FCT Abuja' },
      { name: 'nHub', location: 'Plateau' },
      { name: 'NorthDemy Limited', location: 'Jigawa' },
      { name: 'Olotu Square', location: 'Rivers' },
      { name: 'RAD5 Tech Hub', location: 'Abia' },
      { name: 'Rural Information Technology Hub (RITH3)', location: 'Adamawa' },
      { name: 'Sparks Ventures Hub', location: 'Enugu' },
      { name: 'Startup Kano', location: 'Kano' },
      { name: 'Startup Sokoto', location: 'Sokoto' },
      { name: 'Startup Zamfara', location: 'Zamfara' },
      { name: 'Uplift Hub', location: 'Bauchi' },
      { name: 'WeGoHostU ICT Hub', location: 'Osun' },
      { name: 'Wennovation Hub', location: 'Lagos' },
      { name: 'Zevsj Limited', location: 'Benue' },
    ],
  
  },
];

const programStructure = [
  {
    icon: ClipboardCheck,
    title: 'Call for Applications',
    description: 'Open Application Period',
  },
  {
    icon: Users,
    title: 'Onboarding',
    description: 'Orientation & Planning',
  },
  {
    icon: Clock,
    title: '1 Year',
    description: 'Hub Upskilling and startup training period',
  },
  {
    icon: Handshake,
    title: 'Mentorship',
    description: 'Expert Guidance & Support',
  },
  {
    icon: Presentation,
    title: 'Demo Day',
    description: 'Pitch to Investors',
  },
];

const whoCanApply = [
  'Early-stage Startups',
  'Innovative Entrepreneurs',
  'Hub Managers Ready to Upskill',
];

const whatYouGain = [
  {
    icon: BookOpen,
    title: 'Hands-On Training',
    description: 'Business & Skills Workshops',
  },
  {
    icon: Users,
    title: 'Mentorship & Networking',
    description: 'Guidance from Industry Experts',
  },
  {
    icon: Briefcase,
    title: 'Access to Resources',
    description: 'Funding & Market Opportunities',
  },
];

export function IHatchPage() {
  const [selectedCohort, setSelectedCohort] = useState<number | null>(null);
  const [industryFilter, setIndustryFilter] = useState<string>('All');
  const [rankingFilter, setRankingFilter] = useState<'All' | 'Top 3' | 'Top 12'>('All');

  const currentCohort = cohorts.find(c => c.id === selectedCohort);

  // Get unique industries for filter
  const industries = ['All', ...new Set(cohorts.flatMap(c => c.startupsList.map(s => s.industry)))];

  // Check which ranking options are available for the current cohort
  const hasTop3 = currentCohort?.startupsList.some(s => s.isTop3) ?? false;
  const hasTop12 = currentCohort?.startupsList.some(s => s.isTop12) ?? false;

  // Filter startups by industry and ranking
  const filteredStartups = currentCohort?.startupsList.filter(s => {
    const matchesIndustry = industryFilter === 'All' || s.industry === industryFilter;
    const matchesRanking =
      rankingFilter === 'All' ||
      (rankingFilter === 'Top 3' && s.isTop3) ||
      (rankingFilter === 'Top 12' && s.isTop12);
    return matchesIndustry && matchesRanking;
  }) || [];

  // Cohort Detail View
  if (selectedCohort && currentCohort) {
    return (
      <main className="bg-white min-h-screen">
       

        {/* Cohort Hero */}
        <section className="bg-[#006B2D] text-white py-8 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <button
              onClick={() => setSelectedCohort(null)}
              className="flex items-center gap-2 text-gray-300 hover:text-white mb-4 md:mb-6 transition-colors text-sm md:text-base"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to All Cohorts
            </button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                {currentCohort.name}
              </h1>
              <p className="text-[#D4A74A] font-semibold text-base md:text-lg mb-3 md:mb-4">
                {currentCohort.startups} Startups Graduated
              </p>
              <p className="text-gray-300 max-w-2xl text-sm md:text-base">
                {currentCohort.description}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Cohort Highlights */}
        <section className="py-8 md:py-12 bg-[#F5F5F5]">
          <div className="max-w-5xl mx-auto px-4 md:px-6">
            <h2 className="text-xl md:text-2xl font-bold text-[#006B2D] text-center mb-6 md:mb-8">
              Cohort Highlights
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 flex items-center gap-3 md:gap-4 shadow-sm"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-[#006B2D]/10 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-6 h-6 md:w-7 md:h-7 text-[#006B2D]" />
                </div>
                <div>
                  <p className="text-xl md:text-2xl font-bold text-[#006B2D]">{currentCohort.fundingSecured}</p>
                  <p className="text-gray-600 text-xs md:text-sm">Funding Secured</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 flex items-center gap-3 md:gap-4 shadow-sm"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-[#006B2D]/10 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                  <Rocket className="w-6 h-6 md:w-7 md:h-7 text-[#006B2D]" />
                </div>
                <div>
                  <p className="text-xl md:text-2xl font-bold text-[#006B2D]">{currentCohort.marketReadyProducts}</p>
                  <p className="text-gray-600 text-xs md:text-sm">Market-Ready Products</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 flex items-center gap-3 md:gap-4 shadow-sm"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-[#006B2D]/10 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                  <BriefcaseBusiness className="w-6 h-6 md:w-7 md:h-7 text-[#006B2D]" />
                </div>
                <div>
                  <p className="text-xl md:text-2xl font-bold text-[#006B2D]">{currentCohort.jobsCreated}</p>
                  <p className="text-gray-600 text-xs md:text-sm">Jobs Created</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Startups Grid */}
        <section className="py-8 md:py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 md:mb-6 gap-3 md:gap-4">
              <h2 className="text-lg md:text-2xl font-bold text-[#006B2D]">
                Most innovative Startups from {currentCohort.name}
              </h2>
              <div className="flex items-center gap-2">
                <span className="text-gray-600 text-xs md:text-sm whitespace-nowrap">Filter by Industry</span>
                <select
                  value={industryFilter}
                  onChange={(e) => setIndustryFilter(e.target.value)}
                  className="px-3 md:px-4 py-2 border border-gray-300 rounded-lg bg-white text-[#006B2D] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#006B2D] max-w-[180px] md:max-w-none"
                >
                  {industries.map(industry => (
                    <option key={industry} value={industry}>{industry}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Ranking Filter */}
            {(hasTop3 || hasTop12) && (
              <div className="flex items-center gap-2 mb-6 md:mb-8 flex-wrap">
                <Trophy className="w-4 h-4 text-[#D4A74A]" />
                <span className="text-gray-600 text-xs md:text-sm font-medium mr-1">Ranking:</span>
                <button
                  onClick={() => setRankingFilter('All')}
                  className={`px-3 md:px-4 py-1.5 rounded-full text-xs md:text-sm font-medium transition-colors ${
                    rankingFilter === 'All'
                      ? 'bg-[#006B2D] text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  All
                </button>
                {hasTop3 && (
                  <button
                    onClick={() => setRankingFilter('Top 3')}
                    className={`px-3 md:px-4 py-1.5 rounded-full text-xs md:text-sm font-medium transition-colors ${
                      rankingFilter === 'Top 3'
                        ? 'bg-[#D4A74A] text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    Top 3
                  </button>
                )}
                {hasTop12 && (
                  <button
                    onClick={() => setRankingFilter('Top 12')}
                    className={`px-3 md:px-4 py-1.5 rounded-full text-xs md:text-sm font-medium transition-colors ${
                      rankingFilter === 'Top 12'
                        ? 'bg-[#D4A74A] text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    Top 12
                  </button>
                )}
              </div>
            )}

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {filteredStartups.map((startup, index) => (
                <motion.div
                  key={startup.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white border border-gray-200 rounded-lg md:rounded-xl p-3 md:p-4 hover:shadow-md transition-shadow"
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-[#006B2D]/10 rounded-lg flex items-center justify-center mb-2 md:mb-3">
                    <span className="text-[#006B2D] font-bold text-sm md:text-base">{startup.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-xs md:text-sm font-bold text-[#006B2D] mb-1 line-clamp-2">{startup.name}</h3>
                  <p className="text-[10px] md:text-xs text-[#D4A74A] font-medium line-clamp-2">{startup.industry}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Hub Managers Section - Only for Cohort 4 */}
        {currentCohort.id === 4 && 'hubsList' in currentCohort && (
          <section className="py-8 md:py-12 bg-[#F5F5F5]">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 md:mb-8 gap-3 md:gap-4">
                <div>
                  <h2 className="text-lg md:text-2xl font-bold text-[#006B2D] mb-1 md:mb-2">
                    Partner Innovation Hubs
                  </h2>
                  <p className="text-gray-600 text-sm">37 Innovation Hubs across all 36 states and FCT</p>
                </div>
                <div className="flex items-center gap-2 bg-white px-3 md:px-4 py-2 rounded-full border border-gray-200">
                  <Building2 className="w-4 h-4 md:w-5 md:h-5 text-[#006B2D]" />
                  <span className="text-[#006B2D] font-semibold text-sm">37 Hubs</span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                {(currentCohort as typeof currentCohort & { hubsList: Array<{ name: string; location: string }> }).hubsList.map((hub, index) => (
                  <motion.div
                    key={hub.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.02 }}
                    className="bg-white border border-gray-200 rounded-lg md:rounded-xl p-3 md:p-4 hover:shadow-md transition-shadow"
                  >
                    <h3 className="text-xs md:text-sm font-bold text-[#006B2D] mb-1 md:mb-2 line-clamp-2">{hub.name}</h3>
                    <div className="flex items-center gap-1 text-gray-500">
                      <MapPin className="w-3 h-3 flex-shrink-0" />
                      <span className="text-[10px] md:text-xs">{hub.location}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

       

        {/* CTA */}
        <section className="py-12 md:py-16 bg-[#006B2D]">
          <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
            <h2 className="text-xl md:text-3xl font-bold text-white mb-3 md:mb-4">
              Join the Next iHatch Cohort
            </h2>
            <p className="text-gray-300 text-sm md:text-base mb-6 md:mb-8">
              Apply now and take your startup to the next level!
            </p>
            <a
              href="https://ihatch.spurt.tools/job/ihatch-cohort-4-startup-support-programme"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 md:px-8 py-2.5 md:py-3 bg-[#D4A74A] hover:bg-[#c49a3d] text-white font-semibold rounded-full transition-colors text-sm md:text-base"
            >
              Apply for iHatch
            </a>
          </div>
        </section>

       
      </main>
    );
  }

  // Main iHatch Page
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#006B2D] text-white py-16 md:py-28 lg:py-36">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 italic">
              Empowering Startups to Succeed
            </h1>
            <p className="text-sm md:text-lg text-gray-200 mb-6 md:mb-8 max-w-2xl mx-auto">
              iHatch is a startup incubation program designed to support early-stage entrepreneurs
              with the tools and mentorship they need to thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <a
                href="https://ihatch.spurt.tools/job/ihatch-cohort-4-startup-support-programme"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 md:px-8 py-2.5 md:py-3 bg-[#D4A74A] hover:bg-[#c49a3d] text-white font-semibold rounded-full transition-colors text-sm md:text-base"
              >
                Apply for iHatch
              </a>
              <button
                onClick={() => document.getElementById('past-cohorts')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center px-6 md:px-8 py-2.5 md:py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors text-sm md:text-base"
              >
                View Past Cohorts
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#006B2D] mb-6">
              About the iHatch Program
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              iHatch is designed to nurture innovative startups through mentorship, training,
              and access to a thriving entrepreneurial ecosystem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Program Structure Section */}
      <section className="py-12 md:py-20 bg-[#006B2D]">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-xl md:text-3xl font-bold text-white">
              Program Structure & Duration
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-6">
            {programStructure.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white rounded-xl md:rounded-2xl p-4 md:p-6 text-center shadow-lg ${index === 4 ? 'col-span-2 sm:col-span-1' : ''}`}
              >
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 bg-[#006B2D]/10 rounded-lg md:rounded-xl flex items-center justify-center">
                  <item.icon className="w-6 h-6 md:w-8 md:h-8 text-[#006B2D]" />
                </div>
                <h3 className="text-sm md:text-xl font-bold text-[#D4A74A] mb-1 md:mb-2">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Can Apply Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#006B2D] mb-8">
              Who Can Apply?
            </h2>
            <div className="space-y-4 max-w-md mx-auto">
              {whoCanApply.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3 text-left"
                >
                  <div className="w-6 h-6 rounded-full bg-[#006B2D] flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 text-base md:text-lg">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What You Gain Section */}
      <section className="py-16 md:py-20 bg-[#006B2D]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Program Benefits
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {whatYouGain.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-lg"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-[#006B2D]/10 rounded-xl flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-[#006B2D]" />
                </div>
                <h3 className="text-lg font-bold text-[#006B2D] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Cohorts Section */}
      <section id="past-cohorts" className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#006B2D]">
              Our Past Cohorts
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {cohorts.map((cohort, index) => (
              <motion.div
                key={cohort.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#006B2D] rounded-2xl p-6 md:p-8 cursor-pointer hover:bg-[#008537] transition-all hover:shadow-xl"
                onClick={() => setSelectedCohort(cohort.id)}
              >
                <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-2">
                  {cohort.name}
                </h3>
                <p className="text-[#D4A74A] font-semibold text-center mb-6">
                  {cohort.startups} Startups Graduated
                </p>
                <div className={`grid gap-2 ${cohort.startupsList.length <= 3 ? 'grid-cols-1 sm:grid-cols-3' : 'grid-cols-2 sm:grid-cols-3'}`}>
                  {cohort.startupsList.slice(0, 6).map((startup) => (
                    <div
                      key={startup.name}
                      className="bg-white rounded-lg py-3 px-2 flex items-center justify-center"
                    >
                      <span className="text-xs font-semibold text-[#006B2D] text-center leading-tight">
                        {startup.name}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-white/70 text-xs text-center mt-4">
                  Click to view all startups
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-[#006B2D]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Launch Your Startup Journey?
            </h2>
            <p className="text-gray-200 mb-8">
              Apply now and join the iHatch program today!
            </p>
            <a
              href="https://ihatch.spurt.tools/job/ihatch-cohort-4-startup-support-programme"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#D4A74A] hover:bg-[#c49a3d] text-white font-semibold rounded-full transition-colors"
            >
              Apply Now
            </a>
          </motion.div>
        </div>
      </section>


    </main>
  );
}
