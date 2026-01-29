// pages/programs/WeElevatePage.tsx
import { motion } from 'motion/react';
import { Check, Users, Rocket, Target, ClipboardList, GraduationCap, TrendingUp } from 'lucide-react';

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

const howItWorks = [
  {
    icon: ClipboardList,
    step: '1',
    title: 'Apply & Join',
    description: 'Submit your application to kickstart your entrepreneurial journey.',
  },
  {
    icon: GraduationCap,
    step: '2',
    title: 'Learn & Grow',
    description: 'Participate in workshops, mentorship sessions, and peer networking.',
  },
  {
    icon: TrendingUp,
    step: '3',
    title: 'Scale & Elevate',
    description: 'Leverage resources and connections to scale your business successfully.',
  },
];

const whoShouldApply = [
  'Ambitious Women Entrepreneurs',
  'Startups with a Scalable Business Model',
  'Women-Led Teams Focused on Growth',
];

export function WeElevatePage() {
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
                <button
                  onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
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
                {/* Illustration placeholder - women working with growth chart */}
                <div className="bg-gradient-to-br from-[#D4A74A]/20 to-transparent rounded-3xl p-8">
                  <img
                    src="/assets/hero-2.jpeg"
                    alt="Women entrepreneurs"
                    className="w-full h-64 object-cover rounded-2xl shadow-xl"
                  />
                  {/* Growth chart decoration */}
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
              We-Elevate is committed to bridging the gap for women in the entrepreneurial world. Through tailored support and a robust network, we're helping women-led startups overcome challenges and achieve sustainable growth. Learn more.
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

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 md:py-20 bg-[#F5F5F5]">
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
                How It Works
              </h2>
              <div className="h-px w-16 bg-[#134C28]" />
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
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

          <div className="grid md:grid-cols-3 gap-6">
            {whoShouldApply.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-[#134C28] flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700 text-base md:text-lg font-medium">{item}</span>
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
              Ready to Elevate Your Startup?
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

      {/* Footer */}
      <footer className="bg-[#0d3a1e] py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
            <a href="#" className="text-white hover:text-[#D4A74A] transition-colors">About</a>
            <span className="hidden md:inline text-gray-500">|</span>
            <a href="#how-it-works" className="text-white hover:text-[#D4A74A] transition-colors">Program</a>
            <span className="hidden md:inline text-gray-500">|</span>
            <a href="#" className="text-white hover:text-[#D4A74A] transition-colors">Cohorts</a>
            <span className="hidden md:inline text-gray-500">|</span>
            <a href="#/contact" className="text-white hover:text-[#D4A74A] transition-colors">Contact</a>
          </div>
          <p className="text-center text-gray-400 text-sm">
            © 2024 We-Elevate. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
