// pages/programs/IHatchPage.tsx
import { motion } from 'motion/react';
import { Check, Clock, ClipboardCheck, Handshake, Presentation, BookOpen, Users, Briefcase } from 'lucide-react';
import { useState } from 'react';

// Cohort data
const cohorts = [
  {
    year: 2021,
    startups: 10,
    logos: [
      { name: 'Easorn', logo: '/images/cohorts/easorn.png' },
      { name: 'Dantop', logo: '/images/cohorts/dantop.png' },
      { name: 'Qompass', logo: '/images/cohorts/qompass.png' },
      { name: 'GICED', logo: '/images/cohorts/giced.png' },
      { name: 'Dartmark', logo: '/images/cohorts/dartmark.png' },
      { name: 'AIA', logo: '/images/cohorts/aia.png' },
    ],
  },
  {
    year: 2022,
    startups: 12,
    logos: [
      { name: 'Saft', logo: '/images/cohorts/saft.png' },
      { name: 'Cassorn', logo: '/images/cohorts/cassorn.png' },
      { name: 'PIGO', logo: '/images/cohorts/pigo.png' },
      { name: 'Gccors', logo: '/images/cohorts/gccors.png' },
      { name: 'Oasis', logo: '/images/cohorts/oasis.png' },
      { name: 'Morisan', logo: '/images/cohorts/morisan.png' },
    ],
  },
  {
    year: 2023,
    startups: 15,
    logos: [
      { name: 'Crisarts', logo: '/images/cohorts/crisarts.png' },
      { name: 'Bravefields', logo: '/images/cohorts/bravefields.png' },
      { name: 'Yeb', logo: '/images/cohorts/yeb.png' },
      { name: 'Morlisa', logo: '/images/cohorts/morlisa.png' },
      { name: 'Gcpajo', logo: '/images/cohorts/gcpajo.png' },
      { name: 'Inoknits', logo: '/images/cohorts/inoknits.png' },
    ],
  },
];

const programStructure = [
  {
    icon: Clock,
    title: '12 Weeks',
    description: 'Intensive Incubation Period',
  },
  {
    icon: ClipboardCheck,
    title: 'Onboarding',
    description: 'Orientation & Planning',
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
  'Committed Teams Ready to Scale',
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
  const [showCohortDetail, setShowCohortDetail] = useState<number | null>(null);

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#134C28] text-white py-16 md:py-24">
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
              with the tools and mentorship they need med to thrive.
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
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
              What You Gain
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
        <div className="max-w-6xl mx-auto px-6">
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

          <div className="grid md:grid-cols-3 gap-6">
            {cohorts.map((cohort, index) => (
              <motion.div
                key={cohort.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#134C28] rounded-2xl p-6 text-center cursor-pointer hover:bg-[#1a5f33] transition-colors"
                onClick={() => setShowCohortDetail(showCohortDetail === cohort.year ? null : cohort.year)}
              >
                <h3 className="text-xl font-bold text-white mb-2">
                  Cohort <span className="text-[#D4A74A]">{cohort.year}</span>
                </h3>
                <p className="text-[#D4A74A] font-semibold mb-4">
                  {cohort.startups} Startups Graduated
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {cohort.logos.map((startup) => (
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

      {/* Footer */}
      <footer className="bg-[#0d3a1e] py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
            <a href="#" className="text-white hover:text-[#D4A74A] transition-colors">About</a>
            <span className="hidden md:inline text-gray-500">|</span>
            <a href="#" className="text-white hover:text-[#D4A74A] transition-colors">Program</a>
            <span className="hidden md:inline text-gray-500">|</span>
            <a href="#past-cohorts" className="text-white hover:text-[#D4A74A] transition-colors">Cohorts</a>
            <span className="hidden md:inline text-gray-500">|</span>
            <a href="#/contact" className="text-white hover:text-[#D4A74A] transition-colors">Contact</a>
          </div>
          <p className="text-center text-gray-400 text-sm">
            © 2024 iHatch. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
