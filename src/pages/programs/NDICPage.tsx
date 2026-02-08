// pages/programs/NDICPage.tsx
import { motion } from 'motion/react';
import {
  Search,
  Users,
  TrendingUp,
  GraduationCap,
  Handshake,
  DollarSign,
  Target,
  Eye,
  Rocket,
  Globe,
  Check,
  Megaphone,
  BrainCircuit,
} from 'lucide-react';

const objectives = [
  {
    icon: Search,
    title: 'Identify Scalable Solutions',
    description: 'Identify scalable digital solutions that address national development challenges.',
  },
  {
    icon: Rocket,
    title: 'Support Startups',
    description: 'Support early-stage and growth-stage startups through structured competition.',
  },
  {
    icon: BrainCircuit,
    title: 'Promote Emerging Tech',
    description: 'Promote the use of emerging technologies such as AI, blockchain, data analytics, and cybersecurity.',
  },
  {
    icon: Handshake,
    title: 'Strengthen Collaboration',
    description: 'Strengthen collaboration between innovators, government, and industry.',
  },
  {
    icon: TrendingUp,
    title: 'Create Pathways',
    description: 'Create pathways for startups to access funding, partnerships, and policy support.',
  },
];

const impactItems = [
  {
    icon: DollarSign,
    title: 'Funding & Recognition',
    description: 'Winners receive financial awards and support to scale their solutions.',
  },
  {
    icon: GraduationCap,
    title: 'Capacity Building',
    description: 'Participants gain mentorship, exposure, and opportunities to scale their solutions.',
  },
  {
    icon: Globe,
    title: 'National Development',
    description: 'Innovative projects contribute to better infrastructure planning and digital inclusion.',
  },
];

const whoShouldApply = [
  'Nigerian startups and innovation-driven enterprises',
  'Technology-enabled founders and teams',
  'Sector-focused innovators addressing public or private-sector challenges',
  'Early-stage to growth-stage ventures with deployable solutions',
];

const participantGains = [
  { icon: Megaphone, text: 'National visibility and recognition' },
  { icon: Users, text: 'Access to mentorship and expert feedback' },
  { icon: Handshake, text: 'Opportunities for partnerships and pilot deployments' },
  { icon: Eye, text: 'Exposure to investors and ecosystem stakeholders' },
  { icon: Target, text: 'Alignment with national digital transformation priorities' },
];

export function NDICPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#062A16] via-[#0E4D2E] to-[#1A7A45] text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-64 h-64 bg-[#D4A74A]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <span className="text-sm font-medium">NITDA Digital Innovation Challenge</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Driving Tech Innovation for Nigeria's Development
              </h1>
              <p className="text-gray-200 text-base md:text-lg mb-8 leading-relaxed">
                A flagship national initiative designed to identify, nurture, and scale high-impact
                digital solutions that address Nigeria's most pressing socio-economic challenges.
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-3 bg-[#D4A74A] hover:bg-[#c49a3d] text-white font-semibold rounded-full transition-colors"
              >
                Apply Now
              </a>
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
                    alt="NDIC Innovation Challenge"
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

      {/* About the Challenge */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-[#134C28]" />
              <h2 className="text-2xl md:text-3xl font-bold text-[#134C28]">
                About the Challenge
              </h2>
              <div className="h-px w-16 bg-[#134C28]" />
            </div>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 max-w-4xl mx-auto">
              The NITDA Digital Innovation Challenge (NDIC) is a flagship national initiative designed
              to identify, nurture, and scale high-impact digital solutions that address Nigeria's most
              pressing socio-economic challenges. Anchored by the National Information Technology
              Development Agency (NITDA), the Challenge serves as a strategic pipeline for discovering
              innovative talent, supporting early-stage startups, and accelerating the commercialization
              of indigenous digital products.
            </p>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 max-w-4xl mx-auto">
              The Challenge brings together innovators, startups, ecosystem partners, government
              institutions, and private-sector stakeholders in a structured, competitive process that
              rewards creativity, feasibility, and real-world impact.
            </p>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
              Through NDIC, NITDA reinforces its mandate to drive inclusive digital transformation,
              support local innovation, and position Nigeria as a leading digital economy in Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-16 md:py-20 bg-[#134C28]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Objectives
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Driving innovation with clear, measurable goals for Nigeria's digital future.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {objectives.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white rounded-2xl p-6 text-center shadow-lg ${index >= 3 ? 'md:col-span-1' : ''}`}
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-[#134C28]/10 rounded-xl flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-[#134C28]" />
                </div>
                <h3 className="text-base md:text-lg font-bold text-[#134C28] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16 md:py-20 bg-[#F5F5F5]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-[#134C28]" />
              <h2 className="text-2xl md:text-3xl font-bold text-[#134C28]">
                Impact
              </h2>
              <div className="h-px w-16 bg-[#134C28]" />
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {impactItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-[#D4A74A]/10 rounded-xl flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-[#D4A74A]" />
                </div>
                <h3 className="text-lg font-bold text-[#134C28] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Should Apply */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-[#134C28]" />
              <h2 className="text-2xl md:text-3xl font-bold text-[#134C28]">
                Who Should Apply?
              </h2>
              <div className="h-px w-16 bg-[#134C28]" />
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {whoShouldApply.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-3 bg-[#F9FAFB] rounded-xl p-4 border border-gray-100"
              >
                <div className="w-6 h-6 rounded-full bg-[#134C28] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700 text-sm md:text-base font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Participants Gain */}
      <section className="py-16 md:py-20 bg-[#F5F5F5]">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-[#134C28]" />
              <h2 className="text-2xl md:text-3xl font-bold text-[#134C28]">
                What Participants Gain
              </h2>
              <div className="h-px w-16 bg-[#134C28]" />
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {participantGains.map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white rounded-xl p-5 flex items-start gap-4 border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 bg-[#134C28]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-[#134C28]" />
                </div>
                <p className="text-gray-700 text-sm md:text-base font-medium leading-snug">{item.text}</p>
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
    </main>
  );
}
