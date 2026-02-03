// pages/programs/IHatchPage.tsx
import { motion } from 'motion/react';
import { Check, Clock, ClipboardCheck, Handshake, Presentation, BookOpen, Users, Briefcase, ArrowLeft, DollarSign, Rocket, BriefcaseBusiness, MapPin, Building2 } from 'lucide-react';
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
      { name: 'Northino', industry: 'EdTech' },
      { name: 'Connected', industry: 'AI & Machine Learning' },
      { name: 'Dopals Technologies', industry: 'Mobility & Logistics' },
    ],
    testimonial: {
      quote: 'The iHatch program was instrumental in helping us refine our business model and connect with investors.',
      author: 'Michael Okonkwo',
      role: 'CEO of Northino',
    },
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
      { name: 'Eventro', industry: 'Outsourcing & IT Services' },
      { name: 'Chapta', industry: 'EdTech' },
      { name: 'Cohortly App', industry: 'EdTech' },
      { name: 'Interface Innovations Ltd', industry: 'Fintech, CleanTech & EnergyTech' },
      { name: 'Ahioma', industry: 'E-commerce, AgriTech' },
      { name: 'Linia Finance', industry: 'FinTech' },
      { name: 'Grabb 24/7', industry: 'AgriTech' },
      { name: 'EasyBuy4me', industry: 'E-commerce, Logistics & Mobility' },
      { name: 'Garden in a Box Africa', industry: 'AgriTech' },
      { name: 'Softdrop', industry: 'Fintech, Logistics & Mobility' },
      { name: 'PPTLinks', industry: 'EdTech' },
      { name: 'Ficore Africa', industry: 'E-commerce, Fintech, EdTech' },
    ],
    hubsList: [
      { name: 'RAD5 Tech Hub', location: 'Abia' },
      { name: 'Rural Information Technology Hub (RITH3)', location: 'Adamawa' },
      { name: 'FutureLabs', location: 'Akwa Ibom' },
      { name: 'Innovation Growth Hub (IgHub) Onitsha', location: 'Anambra' },
      { name: 'Uplift Hub', location: 'Bauchi' },
      { name: 'BENSAN TECHNOLOGY', location: 'Bayelsa' },
      { name: 'Zevsj Limited', location: 'Benue' },
      { name: 'CIATECH Africa', location: 'Borno' },
      { name: 'Guru Innovation Hub', location: 'Cross River' },
      { name: 'Coriftech Solutions Hub', location: 'Delta' },
      { name: 'AlphaZone Tech Hub Ltd', location: 'Ebonyi' },
      { name: 'Center-ECD (African Center for Enterprise & Capacity Development)', location: 'Edo' },
      { name: 'Insest Tech', location: 'Ekiti' },
      { name: 'Sparks Ventures Hub', location: 'Enugu' },
      { name: 'Moolu Venture Lab (Moolu Ventures Limited)', location: 'FCT Abuja' },
      { name: 'Mindztech Hub', location: 'Gombe' },
      { name: 'Codeant Technology Hub', location: 'Imo' },
      { name: 'NorthDemy Limited', location: 'Jigawa' },
      { name: 'IT Central Kaduna', location: 'Kaduna' },
      { name: 'Startup Kano', location: 'Kano' },
      { name: 'KIRKIRA INNOVATION HUB', location: 'Katsina' },
      { name: 'Ikwaire Computing Services and Academy Limited', location: 'Kebbi' },
      { name: 'AIKPEROKHA', location: 'Kogi' },
      { name: 'Cypherdevs', location: 'Kwara' },
      { name: 'Wennovation Hub', location: 'Lagos' },
      { name: '02 INNOVATIONS LAB', location: 'Nasarawa' },
      { name: 'Labspace By JD Lab', location: 'Niger' },
      { name: 'Grazac Innovation Hub (Grazac Technologies)', location: 'Ogun' },
      { name: 'Innovate Ondo', location: 'Ondo' },
      { name: 'WeGoHostU ICT Hub', location: 'Osun' },
      { name: 'Climate Emerge Innovation Development Hub (CEID Hub)', location: 'Oyo' },
      { name: 'nHub', location: 'Plateau' },
      { name: 'Olotu Square', location: 'Rivers' },
      { name: 'Startup Sokoto', location: 'Sokoto' },
      { name: 'Knots Technology Nig Ltd', location: 'Taraba' },
      { name: 'AHLAM IT AND NETWORK SOLUTION', location: 'Yobe' },
      { name: 'Startup Zamfara', location: 'Zamfara' },
    ],
    testimonial: {
      quote: 'The iHatch program was a game-changer for our startup. The mentorship and resources helped us secure funding and launch our product successfully!',
      author: 'Sarah Johnson',
      role: 'CEO of Easoon',
    },
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

  const currentCohort = cohorts.find(c => c.id === selectedCohort);

  // Get unique industries for filter
  const industries = ['All', ...new Set(cohorts.flatMap(c => c.startupsList.map(s => s.industry)))];

  // Filter startups by industry
  const filteredStartups = currentCohort?.startupsList.filter(
    s => industryFilter === 'All' || s.industry === industryFilter
  ) || [];

  // Cohort Detail View
  if (selectedCohort && currentCohort) {
    return (
      <main className="bg-white min-h-screen">
       

        {/* Cohort Hero */}
        <section className="bg-[#134C28] text-white py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-6">
            <button
              onClick={() => setSelectedCohort(null)}
              className="flex items-center gap-2 text-gray-300 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to All Cohorts
            </button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                {currentCohort.name}
              </h1>
              <p className="text-[#D4A74A] font-semibold text-lg mb-4">
                {currentCohort.startups} Startups Graduated
              </p>
              <p className="text-gray-300 max-w-2xl">
                {currentCohort.description}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Cohort Highlights */}
        <section className="py-12 bg-[#F5F5F5]">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-[#134C28] text-center mb-8">
              Cohort Highlights
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 flex items-center gap-4 shadow-sm"
              >
                <div className="w-14 h-14 bg-[#134C28]/10 rounded-xl flex items-center justify-center">
                  <DollarSign className="w-7 h-7 text-[#134C28]" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#134C28]">{currentCohort.fundingSecured}</p>
                  <p className="text-gray-600 text-sm">Funding Secured</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl p-6 flex items-center gap-4 shadow-sm"
              >
                <div className="w-14 h-14 bg-[#134C28]/10 rounded-xl flex items-center justify-center">
                  <Rocket className="w-7 h-7 text-[#134C28]" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#134C28]">{currentCohort.marketReadyProducts}</p>
                  <p className="text-gray-600 text-sm">Market-Ready Products</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl p-6 flex items-center gap-4 shadow-sm"
              >
                <div className="w-14 h-14 bg-[#134C28]/10 rounded-xl flex items-center justify-center">
                  <BriefcaseBusiness className="w-7 h-7 text-[#134C28]" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#134C28]">{currentCohort.jobsCreated}</p>
                  <p className="text-gray-600 text-sm">Jobs Created</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Startups Grid */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
              <h2 className="text-2xl font-bold text-[#134C28]">
                Innovative Startups from {currentCohort.name}
              </h2>
              <div className="flex items-center gap-2">
                <span className="text-gray-600 text-sm">Filter by Industry</span>
                <select
                  value={industryFilter}
                  onChange={(e) => setIndustryFilter(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-[#134C28] font-medium focus:outline-none focus:ring-2 focus:ring-[#134C28]"
                >
                  {industries.map(industry => (
                    <option key={industry} value={industry}>{industry}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredStartups.map((startup, index) => (
                <motion.div
                  key={startup.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 bg-[#134C28]/10 rounded-lg flex items-center justify-center mb-3">
                    <span className="text-[#134C28] font-bold">{startup.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-sm font-bold text-[#134C28] mb-1">{startup.name}</h3>
                  <p className="text-xs text-[#D4A74A] font-medium">{startup.industry}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Hub Managers Section - Only for Cohort 4 */}
        {currentCohort.id === 4 && 'hubsList' in currentCohort && (
          <section className="py-12 bg-[#F5F5F5]">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-[#134C28] mb-2">
                    Partner Innovation Hubs
                  </h2>
                  <p className="text-gray-600">37 Innovation Hubs across all 36 states and FCT</p>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200">
                  <Building2 className="w-5 h-5 text-[#134C28]" />
                  <span className="text-[#134C28] font-semibold">37 Hubs</span>
                </div>
              </div>

              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                {(currentCohort as typeof currentCohort & { hubsList: Array<{ name: string; location: string }> }).hubsList.map((hub, index) => (
                  <motion.div
                    key={hub.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.02 }}
                    className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow"
                  >
                    <h3 className="text-sm font-bold text-[#134C28] mb-2 line-clamp-2">{hub.name}</h3>
                    <div className="flex items-center gap-1 text-gray-500">
                      <MapPin className="w-3 h-3" />
                      <span className="text-xs">{hub.location}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Testimonial */}
        <section className="py-12 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="text-5xl text-[#D4A74A] mb-4">"</div>
                <p className="text-gray-700 text-lg mb-2">
                  The <span className="font-semibold text-[#134C28]">iHatch</span> program was a game-changer for our startup.
                </p>
                <p className="text-gray-600 mb-6">
                  {currentCohort.testimonial.quote}
                </p>
                <p className="font-bold text-[#134C28]">{currentCohort.testimonial.author}</p>
                <p className="text-gray-500 text-sm">{currentCohort.testimonial.role}</p>
              </div>
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#134C28]/20 flex items-center justify-center">
                <Users className="w-16 h-16 text-[#134C28]" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#134C28]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Join the Next iHatch Cohort
            </h2>
            <p className="text-gray-300 mb-8">
              Apply now and take your startup to the next level!
            </p>
            <a
              href="https://ihatch.spurt.tools/job/ihatch-cohort-4-startup-support-programme"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#D4A74A] hover:bg-[#c49a3d] text-white font-semibold rounded-full transition-colors"
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
      <section className="bg-[#134C28] text-white py-24 md:py-36">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 italic">
              Empowering Startups to Succeed
            </h1>
            <p className="text-base md:text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
              iHatch is a startup incubation program designed to support early-stage entrepreneurs
              with the tools and mentorship they need to thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ihatch.spurt.tools/job/ihatch-cohort-4-startup-support-programme"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 bg-[#D4A74A] hover:bg-[#c49a3d] text-white font-semibold rounded-full transition-colors"
              >
                Apply for iHatch
              </a>
              <button
                onClick={() => document.getElementById('past-cohorts')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
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
            <h2 className="text-2xl md:text-3xl font-bold text-[#134C28] mb-6">
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
      <section className="py-16 md:py-20 bg-[#134C28]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Program Structure & Duration
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {programStructure.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-lg"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-[#134C28]/10 rounded-xl flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-[#134C28]" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-[#D4A74A] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.description}</p>
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
            <h2 className="text-2xl md:text-3xl font-bold text-[#134C28] mb-8">
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
                  <div className="w-6 h-6 rounded-full bg-[#134C28] flex items-center justify-center flex-shrink-0">
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
      <section className="py-16 md:py-20 bg-[#134C28]">
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
                <div className="w-16 h-16 mx-auto mb-4 bg-[#134C28]/10 rounded-xl flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-[#134C28]" />
                </div>
                <h3 className="text-lg font-bold text-[#134C28] mb-2">
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
            <h2 className="text-2xl md:text-3xl font-bold text-[#134C28]">
              Our Past Cohorts
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {cohorts.map((cohort, index) => (
              <motion.div
                key={cohort.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#134C28] rounded-2xl p-6 text-center cursor-pointer hover:bg-[#1a5f33] transition-colors"
                onClick={() => setSelectedCohort(cohort.id)}
              >

                <p className="text-[#D4A74A] font-semibold mb-4">
                  {cohort.startups} Startups Graduated
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {cohort.startupsList.slice(0, 6).map((startup) => (
                    <div
                      key={startup.name}
                      className="bg-white rounded-lg p-2 h-12 flex items-center justify-center"
                    >
                      <span className="text-xs font-semibold text-[#134C28] truncate px-1">
                        {startup.name}
                      </span>
                    </div>
                  ))}
                </div>
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
