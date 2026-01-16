// pages/programs/WeElevatePage.tsx
import { motion } from 'motion/react';
import { ArrowRight, Mail, Phone } from 'lucide-react';

export function WeElevatePage() {
  const benefits = [
    {
      title: 'Digital Skills Training',
      description: 'Learn practical, hands-on digital tools, from social media marketing to online payments and e-commerce operations, so you can confidently run your business in today\'s digital-first world.',
      icon: '&#128187;',
    },
    {
      title: 'Global Market Access',
      description: 'Go beyond local sales. Gain exposure to global e-commerce platforms that connect you with customers across Africa and beyond, opening doors to new markets and bigger opportunities.',
      icon: '&#127758;',
    },
    {
      title: 'Business Growth',
      description: 'Turn knowledge into results. Expand your customer base, build stronger revenue streams, and create sustainable jobs that impact your community while securing your financial independence.',
      icon: '&#128200;',
    },
    {
      title: 'Mentorship',
      description: 'Get guidance from seasoned entrepreneurs, business experts and industry leaders who will share real-world insights to help you avoid mistakes and scale faster.',
      icon: '&#127891;',
    },
  ];

  const sponsors = [
    { name: 'ONDI', logo: '/f6991c91763ebb8cb799949ee0cb356bdb7928ad.png' },
    { name: 'NITDA', logo: '/images/logos/nitda-logo.webp' },
    { name: 'Startup Nigeria', logo: '/images/logos/startup-nigeria-logo.webp' },
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section
        className="min-h-[500px] md:min-h-[600px] relative text-white overflow-hidden flex items-center justify-center"
        style={{ backgroundColor: '#628B35' }}
      >
        <div className="max-w-4xl mx-auto text-center py-16 md:py-24 px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="mb-1 font-bold text-2xl md:text-3xl lg:text-4xl">
              WE-Elevate is here in
            </h1>
            <h1 className="mb-6 font-bold text-4xl md:text-5xl lg:text-6xl text-[#E8B923]">
              Nigeria
            </h1>
            <p className="mb-8 text-sm md:text-base max-w-2xl mx-auto">
              Empowering opportunities to women-led MSMEs to scale globally. Applications now open. Limited slots available.
            </p>

            {/* Images Grid */}
            <div className="flex items-center justify-center gap-4 md:gap-6 mb-8">
              <div className="w-32 h-44 sm:w-40 sm:h-52 md:w-48 md:h-64 lg:w-56 lg:h-72 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform">
                <img src="/assets/hero-1.jpeg" alt="Woman entrepreneur" className="w-full h-full object-cover" />
              </div>
              <div className="w-32 h-44 sm:w-40 sm:h-52 md:w-48 md:h-64 lg:w-56 lg:h-72 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform mt-8">
                <img src="/assets/hero-2.jpeg" alt="Woman entrepreneur" className="w-full h-full object-cover" />
              </div>
              <div className="w-32 h-44 sm:w-40 sm:h-52 md:w-48 md:h-64 lg:w-56 lg:h-72 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform">
                <img src="/assets/hero-3.jpeg" alt="Woman entrepreneur" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="bg-white py-12 md:py-14">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-gray-700 text-sm md:text-base font-medium mb-8">
            Proudly sponsored by
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
            {sponsors.map((sponsor) => (
              <img
                key={sponsor.name}
                src={sponsor.logo}
                alt={sponsor.name}
                className="h-10 md:h-12 object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-14 sm:py-20 bg-[#F5F5F5]" id="about">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#134C28] text-white rounded-2xl p-8 md:p-12 text-center"
          >
            <h2 className="text-xl md:text-2xl font-bold mb-6">
              What you need to know about this program
            </h2>

            <div className="space-y-4 text-sm md:text-base leading-relaxed">
              <p>
                WE-Elevate is a capacity-building programme equipping female entrepreneurs with
                digital, financial, and entrepreneurial skills. It combines online learning modules,
                mentorship, and access to global e-commerce trading platforms to help women-led MSMEs transition
                from offline to online operations.
              </p>

              <p>
                Through tailored, step-by-step training, participants progress from being
                e-commerce aware to e-commerce scalable, ultimately formalising their businesses, expanding their
                customer bases, and creating sustainable jobs.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="http://forms.gle/nwhrookiz3xywSC46"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#134C28] hover:bg-gray-100 font-semibold rounded-lg px-6 py-3 text-sm md:text-base transition-colors"
              >
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-14 sm:py-20" id="benefits">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-900 mb-12">
            What you'll gain
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#F0FAF7] border-2 border-[#628B35]/30 rounded-xl p-6 md:p-8 hover:border-[#628B35]/50 transition-colors"
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-3xl" dangerouslySetInnerHTML={{ __html: benefit.icon }} />
                  <h3 className="text-base md:text-lg font-bold text-gray-900 flex-1">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 leading-tight">
              Your business deserves more
            </h2>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 leading-tight">
              than survival, it deserves
            </h2>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 leading-tight">
              visibility, growth, and <span className="text-[#628B35]">global</span>
            </h2>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-10 leading-tight">
              <span className="text-[#628B35]">opportunities</span>
            </h2>

            <a
              href="http://forms.gle/nwhrookiz3xywSC46"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#628B35] hover:bg-[#4a6a28] text-white font-semibold rounded-lg px-6 md:px-8 py-3 text-sm md:text-base transition-colors"
            >
              Apply Now
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-14 sm:py-20 bg-white" id="contact">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-12">
            Reach out to us
          </h2>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Email Address */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#F0FAF7] rounded-xl p-6 md:p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#134C28] flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                  Email Address
                </h3>
              </div>
              <p className="text-gray-600 text-sm md:text-base mb-2">
                Send us an email at{' '}
                <a href="mailto:info@startup.gov.ng" className="text-[#134C28] hover:underline font-medium">
                  info@startup.gov.ng
                </a>
                . Response time is approximately 2 hours.
              </p>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#F0FAF7] rounded-xl p-6 md:p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#134C28] flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                  Phone
                </h3>
              </div>
              <p className="text-gray-600 text-sm md:text-base mb-2">
                Estimated response time is less than 1 hour.
              </p>
              <a href="tel:+2348182887766" className="text-lg md:text-xl font-semibold text-[#134C28] hover:underline">
                +234 818 2887 766
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
