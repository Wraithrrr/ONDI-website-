// pages/programs/WeElevatePage.tsx
import { motion } from 'motion/react';
import { Check, Users, Rocket, Target, ClipboardList, GraduationCap, TrendingUp, Globe } from 'lucide-react';

const aboutFeatures = [
  {
    icon: Target,
    title: 'Equip & Empower',
    description: 'Submit your application to kickstart your entrepreneurial journey.',
  },
  {
    icon: Users,
    title: 'Create Community',
    description: 'Participate in workshops, mentorship sessions and peer networking.',
  },
  {
    icon: Rocket,
    title: 'Scale Startups',
    description: 'Leverage resources and connections to scale your business successfully.',
  },
];

const programObjectives = [
  'Equip W-MSMEs with digital skills to grow online.',
  'Improve digital literacy among Female entrepreneurs.',
  'Expand market reach through e-commerce platforms.',
  'Address logistical, regulatory, and financial barriers.',
  'Support Nigeria\'s national agenda for gender inclusivity in the digital economy.',
];

const howItWorks = [
  {
    icon: ClipboardList,
    step: '1',
    title: 'Digital Literacy & Skills Development',
    description: 'Training workshops to equip Female entrepreneurs with practical digital skills, online marketing strategies, and financial technology tools.',
  },
  {
    icon: Globe,
    step: '2',
    title: 'E-Commerce & Market Access',
    description: 'Helping W-MSMEs overcome barriers by onboarding them onto e-commerce platforms and connecting them to wider markets.',
  },
  {
    icon: TrendingUp,
    step: '3',
    title: 'Financial Inclusion',
    description: 'Promoting access to affordable digital payment solutions and financial services tailored to Female-owned enterprises.',
  },
  {
    icon: GraduationCap,
    step: '4',
    title: 'Mentorship & Support',
    description: 'Providing one-on-one guidance from industry experts, peer-to-peer learning opportunities, and access to digital resources.',
  },
];

const partners = [
  'Federal Ministry of Communications, Innovation, and Digital Economy (FMCIDE)',
  'NITDA/ONDI',
  'Federal Ministry of Female Affairs (FMWA)',
  'Federal Ministry of Industry, Trade, and Investment (FMITI)',
  'Small and Medium Enterprises Development Agency of Nigeria (SMEDAN)',
  'Digital Cooperation Organisation (DCO)',
];

const whoShouldApply = [
  'Female-owned micro, small, or medium enterprises (MSMEs).',
  'Striving Female entrepreneurs whose businesses have operated for at least 6 months.',
  'Women-Led Teams Focused on Growth.',
  'Women in retail, agriculture, manufacturing, services, and technology.',
];

export function WeElevatePage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#021A0B] via-[#0B6637] to-[#17944D] text-white overflow-hidden">
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
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Empowering Women Entrepreneurs to Soar
              </h1>
              <p className="text-gray-200 text-base md:text-lg mb-8 leading-relaxed">
                We-Elevate is designed to support and uplift women entrepreneurs by providing the resources, mentorship, and community needed to scale their startups and turn their visions into growth-focused businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="http://forms.gle/nwhrookiz3xywSC46"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 bg-[#D4A74A] hover:bg-[#c49a3d] text-white font-semibold rounded-full transition-colors"
                >
                  Apply for We-Elevate
                </a>
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
                    src="/assets/We-elevate.jpeg"
                    alt="Women entrepreneurs"
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

      {/* About We-Elevate Section */}
      <section className="py-16 md:py-20 bg-white">
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
                About We-Elevate
              </h2>
              <div className="h-px w-16 bg-[#134C28]" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Nurturing the Next Wave of Women Leaders
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The WE-Elevate Nigeria Program, led by the Digital Cooperation Organization (DCO) in partnership with NITDA/ONDI, is a transformative initiative designed to empower Female-owned micro, small, and medium enterprises (W-MSMEs). By integrating Female entrepreneurs into Nigeria's fast-growing digital economy, the program helps them harness the power of e-commerce, digital literacy, and financial technologies to expand their businesses and thrive in the digital age.
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
                className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-[#134C28]/10 rounded-xl flex items-center justify-center">
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

      {/* Program Objectives Section */}
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
                Program Objectives
              </h2>
              <div className="h-px w-16 bg-[#134C28]" />
            </div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {programObjectives.map((objective, index) => (
                <motion.div
                  key={objective}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200"
                >
                  <div className="w-6 h-6 rounded-full bg-[#134C28] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 text-base font-medium">{objective}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Program Benefits Section */}
      <section id="how-it-works" className="py-16 md:py-20 bg-white">
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
                Program Benefits
              </h2>
              <div className="h-px w-16 bg-[#134C28]" />
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {howItWorks.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-[#134C28]/10 rounded-xl flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-[#134C28]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.step}. {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners & Stakeholders Section */}
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
                Partners & Stakeholders
              </h2>
              <div className="h-px w-16 bg-[#134C28]" />
            </div>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              The program is implemented in collaboration with:
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {partners.map((partner, index) => (
                <motion.div
                  key={partner}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="bg-white p-4 rounded-xl border border-gray-200 flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-[#D4A74A] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 text-base font-medium">{partner}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Apply Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
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
              Ready to Elevate Your Business?
            </h2>
            <p className="text-gray-200 mb-8">
              Apply now and join the We-Elevate program to grow and scale your business!
            </p>
            <a
              href="http://forms.gle/nwhrookiz3xywSC46"
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
