import { motion } from 'motion/react';
import {
  ArrowLeft,
  Check,
  BadgeCheck,
  Briefcase,
  Landmark,
  Rocket,
  Eye,
} from 'lucide-react';

const actFocus = [
  'Supporting technology-enabled startups',
  'Simplifying regulatory processes',
  'Encouraging local and international investment',
  'Strengthening collaboration between startups, government, and the private sector',
];

const startupLabelBenefits = [
  { icon: Landmark, title: 'Access to Government Support' },
  { icon: BadgeCheck, title: 'Regulatory Support' },
  { icon: Briefcase, title: 'Investment Opportunities' },
  { icon: Eye, title: 'Ecosystem Visibility' },
];

const eligibility = [
  'Is registered and operates in Nigeria',
  'Is innovation-driven or technology-enabled',
  'Develops scalable products, services, or platforms',
  'Meets the eligibility criteria defined under the Nigeria Startup Act',
];

const processSteps = [
  {
    title: 'Create your account',
    description: 'Create an account on the National Startup Portal as a recognised Nigerian startup.',
  },
  {
    title: 'Complete your profile',
    description: 'Submit your startup profile, founders information, and required supporting documents.',
  },
  {
    title: 'Review and validation',
    description: 'Relevant authorities review your application against the criteria in the Nigeria Startup Act.',
  },
  {
    title: 'Receive your Startup Label',
    description: 'If approved, your company is officially labelled and can access incentives and support.',
  },
];

export function NigeriaStartupActPage() {
  return (
    <main className="bg-white">
      <section className="relative bg-gradient-to-br from-[#021A0B] via-[#0B6637] to-[#17944D] text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-64 h-64 bg-[#D4A74A]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24">
          <a
            href="#/programs"
            className="inline-flex items-center gap-2 text-white hover:text-[#D4A74A] transition-colors mb-5"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-medium">Back to Programs</span>
          </a>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <span className="text-sm font-medium">Nigeria Startup Act</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Powering the Next Generation of Nigerian Innovation
              </h1>
              <p className="text-gray-200 text-base md:text-lg mb-8 leading-relaxed">
                The Nigeria Startup Act is a national policy designed to strengthen Nigeria&apos;s startup
                ecosystem by creating an enabling environment for innovation-driven enterprises.
              </p>
              <a
                href="#apply"
                className="inline-flex items-center justify-center px-8 py-3 bg-[#D4A74A] hover:bg-[#c49a3d] text-white font-semibold rounded-full transition-colors"
              >
                Explore Labelling
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
                    alt="Nigeria Startup Act"
                    className="w-full h-64 object-cover rounded-2xl shadow-xl"
                  />
                  <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-xl p-3">
                    <Rocket className="w-8 h-8 text-[#D4A74A]" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

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
                What is the Nigeria Startup Act?
              </h2>
              <div className="h-px w-16 bg-[#134C28]" />
            </div>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-4xl mx-auto mb-8">
              The Act establishes a legal and institutional framework to support startups in Nigeria,
              improve ease of doing business, and accelerate innovation-led economic growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#F9FAFB] rounded-2xl border border-gray-200 p-6"
            >
              <h3 className="text-xl font-bold text-[#134C28] mb-4">The Act Focuses On</h3>
              <ul className="space-y-3">
                {actFocus.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#134C28] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="bg-[#F9FAFB] rounded-2xl border border-gray-200 p-6"
            >
              <h3 className="text-xl font-bold text-[#134C28] mb-4">Benefits of Startup Labelling</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {startupLabelBenefits.map((item) => (
                  <div
                    key={item.title}
                    className="bg-white border border-gray-100 rounded-xl p-4 flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#134C28]/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-[#134C28]" />
                    </div>
                    <span className="text-sm font-medium text-gray-800">{item.title}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#134C28]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 border border-white/15 rounded-2xl p-6"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Who Can Apply?</h3>
              <ul className="space-y-3">
                {eligibility.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-[#D4A74A] flex-shrink-0" />
                    <span className="text-gray-100">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="bg-white rounded-2xl border border-gray-200 p-6"
            >
              <h3 className="text-2xl font-bold text-[#134C28] mb-4">Ready to Apply?</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
                The Startup Label unlocks structured incentives, visibility, and support under the Nigeria
                Startup Act. Review who can apply, then follow the step-by-step labelling process below.
              </p>
              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById('labelling-process')
                    ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#134C28] text-white text-sm font-semibold hover:bg-[#0b3a1e] transition-colors"
              >
                View Labelling Steps
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        id="labelling-process"
        className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#134C28]/5 border border-[#134C28]/15 mb-4">
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#134C28]">
                Process
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#134C28] mb-3">
              How the Labelling Process Works
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
              Follow these four clear stages to complete your Startup Labelling journey.
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden lg:block absolute left-0 right-0 top-10 h-px bg-gradient-to-r from-transparent via-[#134C28]/30 to-transparent" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group"
              >
                <div className="h-full rounded-2xl border border-gray-200 bg-white p-5 md:p-6 shadow-[0_14px_32px_rgba(15,58,32,0.08)] hover:shadow-[0_20px_40px_rgba(15,58,32,0.14)] hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center justify-center rounded-full bg-[#134C28] text-white text-xs font-semibold px-3 py-1">
                      Step {index + 1}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-[#134C28]/10 text-[#134C28] text-sm font-bold inline-flex items-center justify-center">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-gray-900 mb-3 min-h-[3.2rem]">
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="mt-4 h-1.5 rounded-full bg-gray-100 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#134C28] to-[#2F7A4B]"
                      style={{ width: `${(index + 1) * 25}%` }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#0E3E22]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Build the Future with the Nigeria Startup Act
            </h2>
            <p className="text-gray-200 mb-8">
              Position your startup for growth, visibility, and structured support through Startup
              Labelling.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#D4A74A] hover:bg-[#c49a3d] text-white font-semibold rounded-full transition-colors"
            >
              Apply for Labelling
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
