// components/AboutPage.tsx
import { motion } from 'motion/react';
import { Target, Rocket, Briefcase, Eye, Award, Users2, Lightbulb, TrendingUp, Globe, ShieldCheck, BarChart3, Handshake } from 'lucide-react';

export function AboutPage() {
  const whatWeDo = [
    {
      icon: Lightbulb,
      title: 'Build a thriving innovation economy',
      description: 'We drive programmes and policies that support digital innovation and indigenous content development, while catalysing market-creating innovation and startup formation at scale.',
    },
    {
      icon: Rocket,
      title: 'Accelerate startups and unlock capital',
      description: 'We support startups, hubs, technology parks, and venture initiatives—mobilising partnerships and mechanisms that improve access to funding, strengthen enterprise capacity, and accelerate growth.',
    },
    {
      icon: ShieldCheck,
      title: 'Execute policy, strengthen trust, and protect local value',
      description: 'We monitor implementation and drive compliance with key innovation and local content instruments—protecting indigenous enterprises and raising quality to globally competitive standards.',
    },
    {
      icon: BarChart3,
      title: 'Build with data and insight',
      description: 'We maintain and expand a comprehensive ecosystem database, produce actionable research, and deploy digital dashboards so programmes and policies are guided by evidence—not assumptions.',
    },
    {
      icon: Globe,
      title: 'Open markets—Nigeria to the world',
      description: 'We grow demand and market access for Nigerian digital companies through trade facilitation, partnerships, and strategic engagements that expand export readiness and cross-border collaboration.',
    },
    {
      icon: Handshake,
      title: 'Mobilise partnerships that compound impact',
      description: 'ONDI convenes government, private sector, investors, academia, development partners, and global ecosystems to co-design and deliver interventions with scale, speed, and accountability.',
    },
  ];

  const focusAreas = [
    {
      icon: Award,
      title: 'Digital Innovation & Indigenous Content',
      description: 'Drive programs and policies that support digital innovation and indigenous content.',
    },
    {
      icon: Briefcase,
      title: 'Indigenous IDE Expansion',
      description: 'Increase the number of indigenous innovation-driven enterprises (IDEs).',
    },
    {
      icon: TrendingUp,
      title: 'Digital Industry Growth',
      description: 'Drive the growth of the digital industry to significantly boost the national economy',
    },
    {
      icon: Users2,
      title: 'Startup & Innovation Promotion',
      description: 'Facilitate the emergence of market-creating innovations and start-ups.',
    },
    {
      icon: Rocket,
      title: 'Market Access for Tech Companies',
      description: 'Expand market opportunities for Nigerian digital and technology companies.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation Hubs & VC Support',
      description: 'Support innovation hubs, technology parks, and venture capital initiatives.',
    },
  ];

  return (
    <main className="pt-28 pb-20 px-6 bg-[#F9FAFB] ">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* PAGE HEADER */}
        <motion.section
          id="about"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-[#134C28] mb-3">
            About ONDI
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#081F11] mb-4 leading-tight">
            Driving Nigeria&apos;s Digital Innovation Agenda
          </h1>
          <p className="text-sm md:text-base text-[#628B35] max-w-3xl mx-auto leading-relaxed">
            The Office for Nigerian Digital Innovation (ONDI) coordinates and drives Nigeria&apos;s
            digital transformation through innovation, collaboration and strategic ecosystem support.
          </p>
        </motion.section>

        {/* NATIONAL COORDINATOR SECTION */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden bg-white border border-[#E5DED0] shadow-[0_18px_45px_rgba(15,58,32,0.14)]">
            {/* Image */}
            <div className="relative h-80 md:h-full">
              <img
                src="/assets/nc-picture.jpeg"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent" />
              <div className="absolute bottom-5 left-5 bg-white/90 px-4 py-2 rounded-full text-xs font-medium text-[#134C28] border border-[#E5DED0]">
                Natiional Coordinator
              </div>
            </div>

            {/* Text */}
            <div
              className="p-8 md:p-10 flex flex-col justify-center"
              style={{ backgroundColor: '#134c28' }}
            >
              <p
                className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase mb-3"
                style={{ color: '#E8B923' }}
              >
                Message from the National Coordinator
              </p>
              <h2
                className="text-2xl md:text-3xl font-bold mb-5"
                style={{ color: '#f0eee1' }}
              >
                Driving Innovation for National Development
              </h2>
              <p
                className="text-sm md:text-base leading-relaxed mb-3 text-justify"
                style={{ color: '#e4f2e9' }}
              >
                &quot;At the Office for Nigerian Digital Innovation (ONDI), we believe innovation is central to Nigeria’s digital and economic future. Our mandate is to enable Nigerian startups and innovators to access the support, partnerships, and platforms needed to build and scale globally competitive solutions. We coordinate across government, industry, academia, and global partners to align policy with the realities of entrepreneurship.&quot;
              </p>
              <p
                className="text-sm md:text-base leading-relaxed mb-5 text-justify"
                style={{ color: '#e4f2e9' }}
              >
                &quot;Beyond individual startups, ONDI focuses on strengthening Nigeria’s innovation ecosystem as a whole. Through public-private collaboration, international partnerships, and the implementation of the Nigeria Startup Act, we are institutionalising innovation as a driver of inclusive growth. We are shaping a nation of innovators and positioning Nigeria to lead Africa’s digital transformation.&quot;
              </p>
              <div>
                <p className="text-sm md:text-base font-semibold" style={{ color: '#D4A520' }}>
                  Victoria Fabunmi
                </p>
                <p className="text-xs md:text-sm" style={{ color: '#e4f2e9' }}>
                  National Coordinator, Office for Nigerian Digital Innovation (ONDI)
                </p>
              </div>
            </div>
          </div>
        </motion.section>


        {/* GOAL/ VISION / MISSION */}
        <section className="grid md:grid-cols-3 gap-8">
          {/* Goal */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="rounded-2xl bg-white border border-[#D6E3D4] hover:border-[#134C28] shadow-[0_14px_35px_rgba(12,40,22,0.08)] px-6 py-7 md:px-7 md:py-8 transition-all"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#EC9A29] to-[#F5C842] flex items-center justify-center mb-4 shadow-md">
              <Target className="w-6 h-6 text-white" />
            </div>
            <p className="text-xs font-semibold tracking-[0.22em] uppercase text-gray-500 mb-2">
              Our Goal
            </p>
            <p className="text-sm md:text-base text-black leading-relaxed">
              To coordinate and drive digital innovation initiatives across Nigeria.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="rounded-2xl bg-white border border-[#D6E3D4] hover:border-[#134C28] shadow-[0_14px_35px_rgba(12,40,22,0.08)] px-6 py-7 md:px-7 md:py-8 transition-all"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#3EBF75] to-[#277D49] flex items-center justify-center mb-4 shadow-md">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <p className="text-xs font-semibold tracking-[0.22em] uppercase text-gray-500 mb-2">
              Our Vision
            </p>
            <p className="text-sm md:text-base text-black leading-relaxed">
              To make Nigeria the foremost technology and innovation ecosystem in Africa.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="rounded-2xl bg-white border border-[#D6E3D4] hover:border-[#134C28] shadow-[0_14px_35px_rgba(12,40,22,0.08)] px-6 py-7 md:px-7 md:py-8 transition-all"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#628B35] to-[#284A26] flex items-center justify-center mb-4 shadow-md">
              <Award className="w-6 h-6 text-white" />
            </div>
            <p className="text-xs font-semibold tracking-[0.22em] uppercase text-gray-500 mb-2">
              Our Mission
            </p>
            <p className="text-sm md:text-base text-black leading-relaxed">
              To integrate indigenous technology and innovations in all facets of Nigerian society.
            </p>
            
          </motion.div>
           {/* FOCUS AREAS */}
          <div className="mt-14 pt-10 border-t border-[#E2E4DD]">
            <div className="text-center mb-6">
              <p className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-gray-500 mb-2">
                Focus Area
              </p>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
               ONDI is structured to deliver outcomes across;
              </p>
            </div>

            <div className="flex flex-wrap gap-3 justify-center">
              {[
                'Strategic human capacity development',
                'Funding & ecosystem support',
                'Research & insight',
                'Monitoring & compliance',
                'Partnerships',
                'Innovation policy & guidelines'
              ].map((area) => (
                <span
                  key={area}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-[#D6E3D4] text-sm text-[#134C28] shadow-sm"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* OUR MANDATE*/}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-white border border-[#E2E5E0] px-6 md:px-8 lg:px-10 py-10 md:py-12 shadow-[0_18px_45px_rgba(15,58,32,0.10)]"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
            <div>
              <p className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-[#134C28] mb-2">
                Our Mandate
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#081F11]">
                Building a resilient, inclusive innovation ecosystem
              </h2>
            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {focusAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-2xl border border-[#D6E3D4] bg-[#FFFFFC] px-6 py-6 hover:border-[#134C28] hover:shadow-[0_16px_40px_rgba(12,40,22,0.12)] transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E8F3DA] to-[#D6E3D4] flex items-center justify-center mb-4">
                  <area.icon className="w-5 h-5 text-[#628B35]" />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-[#284A26] mb-2">
                  {area.title}
                </h3>
                <p className="text-sm md:text-base text-[#4B6A31] leading-relaxed">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* What We Do */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-[#134C28] px-6 md:px-8 lg:px-10 py-10 md:py-12 shadow-[0_18px_45px_rgba(15,58,32,0.14)]"
        >
          <div className="text-center mb-10">
            <p className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-[#D4A520] mb-3">
              What We Do
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              End-to-End Ecosystem Support
            </h2>
            <p className="text-sm md:text-base text-gray-300 max-w-3xl mx-auto leading-relaxed">
              ONDI strengthens the innovation ecosystem end-to-end—policy to product, talent to capital, research to scale, and local value creation to global competitiveness.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatWeDo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 px-6 py-6 hover:bg-white/15 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-[#D4A520]/20 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-[#D4A520]" />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>










      </div>
    </main>
  );
}
