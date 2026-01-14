import { motion } from 'motion/react';
import { WaveBackground } from '../components/WaveBackground';
import {
  Calendar,
  DollarSign,
  Users,
  Award,
  Briefcase,
  TrendingUp
} from 'lucide-react';

export function OpportunitiesPage() {
  const opportunities = [
    {
      id: 1,
      title: 'Tech Startup Accelerator Program 2025',
      type: 'Accelerator',
      description:
        'Join our flagship 12-week intensive accelerator program for early-stage tech startups. Get access to mentorship, funding, and market connections.',
      deadline: 'March 15, 2025',
      funding: 'Up to ₦5M',
      icon: Briefcase,
      status: 'Open',
      category: 'Startups'
    },
    {
      id: 2,
      title: 'Innovation Grant 2025',
      type: 'Grant',
      description:
        'Non-dilutive grants for innovative technology solutions addressing key challenges in healthcare, education, agriculture, and fintech.',
      deadline: 'February 28, 2025',
      funding: '₦2M - ₦10M',
      icon: DollarSign,
      status: 'Open',
      category: 'Startups'
    },
    {
      id: 3,
      title: 'Corporate Partnership Opportunities',
      type: 'Partnership',
      description:
        "Partner with ONDI to support Nigeria's innovation ecosystem. Co-create programs, sponsor events, and access our startup pipeline.",
      deadline: 'Rolling',
      funding: 'Various',
      icon: Users,
      status: 'Open',
      category: 'Partners'
    },
    {
      id: 4,
      title: 'National Innovation Challenge',
      type: 'Hackathon',
      description:
        "48-hour intensive hackathon bringing together the brightest minds to solve Nigeria's most pressing challenges using technology.",
      deadline: 'April 30, 2025',
      funding: '₦15M Prize Pool',
      icon: Award,
      status: 'Coming Soon',
      category: 'Startups'
    },
    {
      id: 5,
      title: 'Angel Investor Network',
      type: 'Investment',
      description:
        'Join our curated network of angel investors and get exclusive access to vetted, high-potential startups in our portfolio.',
      deadline: 'Rolling',
      funding: 'Deal Flow Access',
      icon: TrendingUp,
      status: 'Open',
      category: 'Investors'
    },
    {
      id: 6,
      title: 'Startup Fellowship Program',
      type: 'Fellowship',
      description:
        'Six-month fellowship for exceptional entrepreneurs. Receive stipend, mentorship, co-working space, and investment readiness training.',
      deadline: 'March 31, 2025',
      funding: '₦250K/month stipend',
      icon: Calendar,
      status: 'Open',
      category: 'Startups'
    }
  ];

  const categories = [
    {
      name: 'For Startups',
      icon: Briefcase,
      description: 'Accelerators, grants, and support programs'
    },
    {
      name: 'For Investors',
      icon: TrendingUp,
      description: 'Access to vetted startup pipeline'
    },
    {
      name: 'For Partners',
      icon: Users,
      description: 'Corporate and institutional partnerships'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFFFFC]">
      {/* HERO / HEADER */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-[#081F11] via-[#0F3A20] to-[#134C28] overflow-hidden">
        <WaveBackground />

        {/* Soft glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-16 left-10 w-64 h-64 bg-[#32965B]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-[-3rem] w-80 h-80 bg-[#3EBF75]/18 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-5">
              <span className="w-2 h-2 rounded-full bg-[#E8B923] animate-pulse" />
              <span className="text-xs md:text-sm tracking-[0.22em] uppercase text-white/90">
                Opportunities within the ONDI ecosystem
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Funding, partnerships & growth pathways for innovators.
            </h1>

            <p className="text-sm md:text-base lg:text-lg text-green-50/90 max-w-2xl leading-relaxed">
              Explore accelerators, grants, partnerships and investment networks designed to help
              startups, investors and partners participate in Nigeria&apos;s digital innovation
              agenda.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-20 px-6" id="opportunities">
        <div className="max-w-7xl mx-auto">
          {/* CATEGORIES STRIP */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-14"
          >
            <div className="text-center mb-10">
              <p className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-[#134C28] mb-3">
                Who it&apos;s for
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-[#111827] mb-3">
                Pathways for startups, investors & partners
              </h2>
              <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
                ONDI creates structured entry points for different ecosystem players to engage with
                Nigeria&apos;s innovation pipeline.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="rounded-2xl border border-[#ECF3E6] bg-white shadow-[0_14px_35px_rgba(12,40,22,0.06)] px-6 py-7 text-center hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(12,40,22,0.10)] transition-all cursor-default"
                >
                  <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center bg-[#ECF3E6]">
                    <category.icon className="w-7 h-7" style={{ color: '#628B35' }} />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold mb-2 text-[#284A26]">
                    {category.name}
                  </h3>
                  <p className="text-sm text-[#628B35] leading-relaxed">
                    {category.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* OPPORTUNITIES GRID */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-[#134C28] mb-2">
                Open &amp; upcoming opportunities
              </p>
              <h2 className="text-xl md:text-2xl font-bold text-[#111827]">
                Explore current calls and programs
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {opportunities.map((opportunity, index) => {
              const Icon = opportunity.icon;
              const isOpen = opportunity.status === 'Open';
              const isComing = opportunity.status === 'Coming Soon';

              return (
                <motion.article
                  key={opportunity.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  className="rounded-2xl bg-[#FFFFFC] border border-[#E5E7EB] shadow-[0_10px_30px_rgba(12,40,22,0.06)] p-6 flex flex-col"
                >
                  {/* Top: icon + status pill */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#ECF3E6]">
                      <Icon className="w-6 h-6" style={{ color: '#628B35' }} />
                    </div>
                    <span
                      className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold text-white"
                      style={{
                        backgroundColor: isOpen ? '#628B35' : '#EC9A29'
                      }}
                    >
                      {opportunity.status}
                    </span>
                  </div>

                  {/* Type + title */}
                  <p className="text-xs font-semibold uppercase tracking-wide mb-1 text-[#EC9A29]">
                    {opportunity.type}
                  </p>
                  <h3 className="text-base md:text-lg font-semibold text-[#284A26] mb-3 leading-snug">
                    {opportunity.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#4B6B35] mb-5 flex-grow leading-relaxed">
                    {opportunity.description}
                  </p>

                  {/* Meta */}
                  <div className="space-y-2 mb-5">
                    <div className="flex items-center gap-2 text-sm text-[#628B35]">
                      <Calendar className="w-4 h-4" />
                      <span>Deadline: {opportunity.deadline}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#628B35]">
                      <DollarSign className="w-4 h-4" />
                      <span>{opportunity.funding}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <button
                    className={`w-full inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                      isOpen
                        ? 'bg-[#628B35] text-white hover:bg-[#51752C]'
                        : 'bg-[#E5E7EB] text-[#6B7280] cursor-not-allowed'
                    }`}
                    disabled={isComing}
                  >
                    {isOpen ? 'Apply Now' : 'Notify Me'}
                  </button>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
