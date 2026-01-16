// src/components/ProgramsPage.tsx
import { WaveBackground } from '../components/WaveBackground';
import { ArrowRight, ExternalLink, Users, Calendar, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

const programs = [
  {
    title: 'We-Elevate',
    tag: 'Early-stage Support',
    description:
      'Empowering early-stage startups with mentorship, resources and curated opportunities to turn bold ideas into sustainable ventures.',
    image:
      'https://images.unsplash.com/photo-1759395162739-84190996783c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    href: 'https://programs.startup.gov.ng/we-elevate/',
    focus: ['Idea-stage founders', 'Mentorship & coaching', 'Access to opportunities'],
  },
  {
    title: 'iHatch',
    tag: 'Incubation',
    description:
      'A structured innovation incubator that provides workspaces, guidance and ecosystem linkages to help startups grow with confidence.',
    image:
      'https://images.unsplash.com/photo-1728044849242-516700295875?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    href: 'https://programs.startup.gov.ng/ihatch/',
    focus: ['Startup incubation', 'Workspace & community', 'Investor readiness'],
  },
  {
    title: 'NITDA Digital Innovation Centre',
    tag: 'National Facility',
    description:
      'A state-of-the-art centre designed to host collaboration, research and cutting-edge digital innovation initiatives across Nigeria.',
    image:
      'https://images.unsplash.com/photo-1664943861653-609134fb6b3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    href: 'https://programs.startup.gov.ng/ndic/',
    focus: ['National-scale projects', 'Collaboration hub', 'Research & experimentation'],
  },
];

export function ProgramsPage() {
  return (
    <main className="min-h-screen bg-[#F9FAFB]">
      {/* HERO */}
      <section className="relative pt-36 pb-20 px-6 bg-gradient-to-br from-[#081F11] via-[#0F3A20] to-[#134C28] overflow-hidden">
        <WaveBackground />

        {/* Soft glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-[-3rem] w-72 h-72 bg-[#32965B]/18 rounded-full blur-3xl" />
          <div className="absolute bottom-[-3rem] right-[-2rem] w-96 h-96 bg-[#3EBF75]/18 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/25 mb-4">
              <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-green-50">
                Programs &amp; Support
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Structured support for Nigerian innovators
            </h1>
           
          </div>
        </div>
      </section>

      {/* OVERVIEW STRIP */}
      <section className="bg-white border-b border-[#E5E7EB] py-8 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#134C28] mb-2">
              How ONDI supports you
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              Whether you&apos;re just starting, validating your product, or scaling across Nigeria,
              ONDI programs provide a clear pathway of support.
            </p>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-700">
            <div className="w-10 h-10 rounded-xl bg-[#134C28]/8 flex items-center justify-center">
              <Users className="w-5 h-5 text-[#134C28]" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">Founder-focused design</p>
              <p className="text-xs text-gray-600">
                Programs tailored to real startup needs: skills, networks, capital and policy support.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-700">
            <div className="w-10 h-10 rounded-xl bg-[#134C28]/8 flex items-center justify-center">
              <Calendar className="w-5 h-5 text-[#134C28]" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">Cohorts &amp; open calls</p>
              <p className="text-xs text-gray-600">
                Competitive selection through nationwide calls, ensuring transparent access to opportunity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS GRID */}
      <section className="py-20 px-6 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto">

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-14">
            {programs.map((program, index) => (
              <motion.article
                key={program.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="group relative bg-white rounded-2xl overflow-hidden border border-[#E5E7EB] 
                  hover:border-[#134C28] shadow-[0_18px_45px_rgba(15,58,32,0.10)] 
                  hover:shadow-[0_22px_55px_rgba(15,58,32,0.16)] transition-all duration-300 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                  <div className="absolute top-5 left-5">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/90 text-[11px] font-semibold text-[#134C28]">
                      {program.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 flex-1 flex flex-col">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                    {program.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 mb-4 leading-relaxed">
                    {program.description}
                  </p>

                  {/* Focus bullets */}
                  <ul className="space-y-1.5 mb-6">
                    {program.focus.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-xs md:text-sm text-gray-700">
                        <span className="mt-1 block w-1.5 h-1.5 rounded-full bg-[#134C28]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Footer CTA */}
                  <div className="mt-auto flex items-center justify-start">
                    <a
                      href={program.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center gap-2 px-5 py-2.5 rounded-lg 
                        bg-gradient-to-br from-[#F5F5F5] via-[#E5E5E5] to-[#D4D4D4] 
                        text-xs md:text-sm font-semibold text-[#134C28] shadow-sm hover:shadow-md 
                        hover:from-[#FFFFFF] hover:via-[#EDEDED] hover:to-[#D4D4D4] transition-all"
                    >
                      Visit program page
                      <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* LOCATION / ACCESS SECTION (subtle) */}
          

           
           
        </div>
      </section>
    </main>
  );
}
