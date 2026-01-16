// pages/programs/IHatchPage.tsx
import { motion } from 'motion/react';
import { ArrowRight, Target, Users, Briefcase, GraduationCap, Rocket, Building2, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

export function IHatchPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const benefits = [
    {
      title: 'Free Interactive Training',
      description: 'Free offline/online interactive trainings',
      icon: GraduationCap,
    },
    {
      title: 'Free Coworking Space',
      description: 'Access to free coworking space at assigned hubs',
      icon: Building2,
    },
    {
      title: 'Mentorship Sessions',
      description: 'Mentorship sessions with tech specialists',
      icon: Users,
    },
    {
      title: 'Funding Opportunities',
      description: 'Access to funding opportunities through investor connections',
      icon: Rocket,
    },
  ];

  const requirements = [
    'Individuals/groups with an innovative business plan with a product or prototype that would aid in developing the Nigerian economy',
    'Individuals/groups willing to establish a legal company and begin business operations in Nigeria',
    'Participants must be at least 18 years old',
    'All sectors include: Education Technology (Edtech), Agricultural Technology (Agritech), Health Technology (Healthtech), Financial Technology (Fintech), Logistics, Security, Government Technology (Govtech)',
  ];

  const objectives = [
    'Support entrepreneurs that use creative commercial services and products to address social challenges.',
    'Assist entrepreneurs in developing viable and scalable business models through a 5-month intensive incubation program involving coaching, lectures, and boot camps.',
    'Focus support on key IT sectors such as FinTech, AgriTech, HealthTech, EdTech, and GovTech to enhance Nigeria\'s digital innovation landscape.',
    'Create opportunities for startups to network with peers, industry experts, and potential partners through the program\'s events and coworking spaces.',
  ];

  const faqs = [
    {
      question: 'What is the iHatch Startup Incubation Programme?',
      answer: 'iHatch is a 5-month free intensive incubation program designed to help Nigerian entrepreneurs refine their business ideas into viable and scalable models. It includes coaching, lectures, boot camps, mentorship, and networking opportunities, focusing on youth, innovation, entrepreneurship, and technology.',
    },
    {
      question: 'Who is eligible to apply for the iHatch for Startups?',
      answer: 'Eligible applicants include individuals or groups with innovative business plans or prototypes that contribute to Nigeria\'s economy, are willing to establish a legal company and operate in Nigeria, and are at least 18 years old. The program is open to all sectors, with a focus on EdTech, AgriTech, HealthTech, FinTech, Logistics, Security, and GovTech.',
    },
    {
      question: 'Is there a cost to join the iHatch programme?',
      answer: 'No, the program is completely free. Participants receive free offline/online training, access to a free coworking space at assigned hubs, mentorship from tech specialists, networking opportunities with peers and industry experts, and access to funding opportunities through investor connections.',
    },
    {
      question: 'What is the application process for the iHatch for Startups?',
      answer: 'Interested applicants should visit the official application portal to apply. They must submit details of their innovative business plan or prototype and meet eligibility criteria. Specific application steps and deadlines are available on the official website.',
    },
    {
      question: 'What kind of support do startups receive during the iHatch programme?',
      answer: 'Startups receive comprehensive support, including coaching to refine business ideas, lectures on entrepreneurship and technology, boot camps for hands-on learning, mentorship from tech specialists, and access to a free coworking space.',
    },
  ];

  const partners = [
    { name: 'NITDA', logo: '/images/logos/nitda-logo.webp' },
    { name: 'Startup Nigeria', logo: '/images/logos/startup-nigeria-logo.webp' },
    { name: 'ONDI', logo: '/f6991c91763ebb8cb799949ee0cb356bdb7928ad.png' },
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[600px] bg-black text-white overflow-hidden flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/assets/hero-1.jpeg)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 to-black/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Introducing iHatch for Startups: Cohort 4
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Apply for iHatch's intensive incubation programme designed to help Nigerian innovators incubate their business venture
            </p>
            <a
              href="https://ihatch.spurt.tools/job/ihatch-cohort-4-startup-support-programme"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#628B35] hover:bg-[#4a6a28] text-white font-semibold rounded-lg transition-colors"
            >
              Apply Now
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-[#F8F8F8] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-12">
            {partners.map((partner) => (
              <img
                key={partner.name}
                src={partner.logo}
                alt={partner.name}
                className="h-12 md:h-16 object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#F0FAF7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold tracking-widest uppercase text-[#628B35] mb-2">
              Benefits
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Why you should apply
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl bg-[#628B35]/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-7 h-7 text-[#628B35]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <a
              href="https://ihatch.spurt.tools/job/ihatch-cohort-4-startup-support-programme"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#628B35] hover:bg-[#4a6a28] text-white font-semibold rounded-lg transition-colors"
            >
              Apply Now
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Who Can Apply Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold tracking-widest uppercase text-[#628B35] mb-2">
                Application
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Who can apply?
              </h2>

              <ul className="space-y-6">
                {requirements.map((req, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#628B35]/10 flex items-center justify-center flex-shrink-0">
                      <Target className="w-5 h-5 text-[#628B35]" />
                    </div>
                    <p className="text-gray-700">{req}</p>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <img
                src="/assets/hero-2.jpeg"
                alt="Application"
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-20 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="/assets/hero-3.jpeg"
                alt="Objectives"
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
            </div>

            <div className="order-1 md:order-2">
              <p className="text-sm font-semibold tracking-widest uppercase text-[#628B35] mb-2">
                Objectives
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                What are our objectives?
              </h2>

              <ul className="space-y-4">
                {objectives.map((obj, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl px-6 py-4 shadow-md text-gray-700"
                  >
                    {obj}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <a
              href="https://ihatch.spurt.tools/job/ihatch-cohort-4-startup-support-programme"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#628B35] hover:bg-[#4a6a28] text-white font-semibold rounded-lg transition-colors"
            >
              Apply Now
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold tracking-widest uppercase text-[#628B35] mb-2">
              FAQs
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-[#628B35]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#628B35]" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
