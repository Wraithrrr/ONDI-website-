import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { WaveBackground } from '../components/WaveBackground';
import {
  Sparkles,
  Users,
  TrendingUp,
  Award,
  ArrowRight,
  Rocket,
  Zap,
  Target,
  Mail,
  Phone,
  MapPin,
  Twitter,
  Facebook,
  Linkedin,
  Instagram,
  Briefcase
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function HomePage() {
  // rotating hero word
  const [currentWord, setCurrentWord] = useState(0);

  const words = ['Command Centre', 'Growth Hub', 'Launch Pad', 'Success Engine', 'Digital Gateway'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const carouselImages = [
    '/assets/hero-1.jpeg',
    '/assets/hero-2.jpeg',
    '/assets/hero-3.jpeg',
    '/assets/hero-4.jpeg'
  ];

  const SOCIAL_LINKS = {
    twitter: 'https://twitter.com/ONDINigeria',
    facebook: 'https://facebook.com/ONDINigeria',
    linkedin: 'https://www.linkedin.com/company/ondi-nigeria',
    instagram: 'https://www.instagram.com/ondinigeria',
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pb-28 px-6 overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <img src="/assets/ONDI-hero.jpeg" alt="" className="w-full h-full object-cover object-[70%_center] md:object-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#081F11]/70 via-[#0F3A20]/30 to-[#134C28]/50" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-8 md:mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-10">
              <div className="w-2 h-2 rounded-full bg-[#E8B923] animate-pulse" />
              <span className="text-sm tracking-wide text-white/90">
                Office for Nigerian Digital Innovation
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-tight text-white">
              Nigeria&apos;s Innovation
              <br />
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[currentWord]}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  className="inline-block text-[#E8B923]"
                >
                  {words[currentWord]}
                </motion.span>
              </AnimatePresence>
            </h1>

            <p className="text-xl md:text-2xl text-green-50/90 max-w-3xl mx-auto mb-12 leading-relaxed">
              Empowering Nigerian innovators to build, scale, and compete globally through strategic
              support, world-class resources, and sustainable partnerships
            </p>

            <div className="flex flex-wrap items-center justify-center gap-5 mb-16">

              {/* Explore Programs → scroll to programs section */}
              <a
                href="#programs"
                className=" px-12 py-5 rounded-lg bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 transition-all font-bold text-lg"
              >
                Explore Programs
              </a>
            </div>
          </div>

          {/* Image Carousel */}
          
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-24 px-6"
        style={{
          background: '#FEFDFB'
        }}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          {/* Left: NCAIR Image Card */}
          <div className="relative flex flex-col">
            {/* Spacer to align image top with the heading "Driving..." */}
            <div className="hidden md:block h-[52px]" />
            <div className="rounded-2xl overflow-hidden bg-white border border-[#E6E9E6] shadow-sm flex-1">
              <img
                src="/assets/ONDI-About.jpeg"
                alt="ONDI at Vivatech"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-4 left-4 px-4 py-2 rounded-full bg-white/95 shadow-md border border-[#E5E7EB] text-[11px] font-medium text-[#134C28]">
              ONDI at Vivatech
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="flex flex-col">
            <div className="mb-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#134C28]/10 border border-[#134C28]/20 mb-3">
                <span className="text-xs font-semibold tracking-[0.22em] uppercase text-[#134C28]">
                  About ONDI
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Driving Nigeria&apos;s Digital Innovation Agenda
              </h2>
            </div>

            <div className="flex-1">
              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 text-justify">
                The Office for Nigerian Digital Innovation (ONDI) is Nigeria&apos;s dedicated hub for
                digital transformation, innovation policy, and ecosystem support. We work with founders,
                investors, partners, and government institutions to unlock the country&apos;s full
                innovation potential.
              </p>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 text-justify">
                Through strategic programs, regulatory support, and access to world-class infrastructure
                like the National Centre for Artificial Intelligence and Robotics, we help innovators
                build scalable solutions that can compete globally.
              </p>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6 text-justify">
                Our mandate is to catalyse a vibrant digital economy by enabling startups, creators, and
                enterprises to grow, export, and create jobs at scale.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <button
                className="px-8 py-3.5 rounded-lg bg-[#E8B923] text-white text-sm md:text-base font-semibold hover:bg-[#D4A520] transition-all shadow-md hover:shadow-lg flex items-center gap-2"
                onClick={() => {
                  window.location.hash = '#/about';
                }}
              >
                Learn more
                <ArrowRight className="w-5 h-5" />
              </button>
              <a
                href="#/impact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border border-[#134C28] text-[#134C28] text-sm md:text-base font-semibold hover:bg-[#134C28] hover:text-white transition-all bg-white"
              >
                View our impact
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* GOALS & MILESTONES SECTION */}
      <section
        id="goals"
        className="py-24 px-6"
        style={{
          background: 'linear-gradient(to bottom, #F7F8FC 0%, #F9FAFB 100%)'
        }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#134C28]/10 border border-[#134C28]/20 mb-4">
              <span className="text-xs font-semibold tracking-[0.22em] uppercase text-[#134C28]">
                Goals &amp; Milestones
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Bringing innovative local content to your doorstep
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Our mission, vision and core values guide how ONDI grows Nigeria&apos;s digital
              innovation ecosystem and measures impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* LEFT: Mission / Vision / Core Values */}
            <div className="space-y-6">
              {/* Mission */}
              <div className="relative p-6 rounded-2xl bg-white border border-[#E6E9E6] shadow-sm">
                <div className="absolute -left-4 top-6 w-10 h-10 rounded-full bg-gradient-to-br from-[#3EBF75] to-[#277D49] flex items-center justify-center shadow-lg">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <p className="text-xs font-semibold tracking-[0.25em] uppercase text-gray-500 mb-2 pl-4">
                  Mission
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed text-justify pl-4">
                  To integrate indigenous technology and innovations in all facets of Nigerian society.
                </p>
              </div>

              {/* Vision */}
              <div className="relative p-6 rounded-2xl bg-white border border-[#E6E9E6] shadow-sm">
                <div className="absolute -left-4 top-6 w-10 h-10 rounded-full bg-gradient-to-br from-[#2F855A] to-[#134C28] flex items-center justify-center shadow-lg">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <p className="text-xs font-semibold tracking-[0.25em] uppercase text-gray-500 mb-2 pl-4">
                  Vision
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed text-justify pl-4">
                  To make Nigeria the foremost technology and innovation ecosystem in Africa.
                </p>
              </div>

              {/* Core Values */}
              <div className="relative p-6 rounded-2xl bg-white border border-[#E6E9E6] shadow-sm">
                <div className="absolute -left-4 top-6 w-10 h-10 rounded-full bg-gradient-to-br from-[#E8B923] to-[#CDA434] flex items-center justify-center shadow-lg">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <p className="text-xs font-semibold tracking-[0.25em] uppercase text-gray-500 mb-2 pl-4">
                  Core Values
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed pl-4">
                  Drive • Innovation • Collaboration. • Support • Excellence.
                </p>
              </div>
            </div>

            {/* RIGHT: Milestone stats */}
                <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  label: 'Startups Engaged',
                  value: '1000+',
                  icon: Users,
                  accent: 'from-[#3EBF75] to-[#277D49]'
                },
                {
                  label: 'Active Partnerships',
                  value: '100+',
                  icon: Briefcase,
                  accent: 'from-[#F59E0B] to-[#E08A00]'
                },
                /*{
                  label: 'Funding Facilitated',
                  value: '₦2.5B',
                  icon: TrendingUp,
                  accent: 'from-[#2563EB] to-[#1D4ED8]'
                },*/
                {
                  label: 'SCF Members Onboarded',
                  value: '200+',
                  icon: Rocket,
                  accent: 'from-[#EC4899] to-[#DB2777]'
                }
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-white border border-[#E6E9E6] hover:border-[#134C28] shadow-sm px-5 py-6 flex flex-col justify-between transition-all"
                >
                  <div className="mb-4">
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.accent} flex items-center justify-center shadow-md mb-3`}
                    >
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-base font-semibold text-gray-700">{item.label}</p>
                  </div>
                  <p className="text-3xl md:text-4xl font-bold text-[#134C28]">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FOCUS AREAS */}
          <div className="mt-14 pt-10 border-t border-[#E2E4DD]">
            <div className="text-center mb-6">
              <p className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-gray-500 mb-2">
                Focus Areas
              </p>
              <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                ONDI drives impact across key pillars of Nigeria&apos;s digital innovation ecosystem.
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
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-24 px-6 bg-[#FEFCF9]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#134C28]/10 border border-[#134C28]/20 mb-3">
              <span className="text-xs font-semibold tracking-[0.22em] uppercase text-[#134C28]">
                Programs &amp; Support
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Transformative Programs for Innovators
            </h2>

            <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover structured support for Nigerian innovators, from idea-stage founders to
              growing startups and national-scale initiatives.
            </p>
          </div>

          {/* Program cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            {[
              {
                title: 'We-Elevate',
                tag: 'Women Empowerment',
                description:
                  'The WE-Elevate Nigeria Program, led by the Digital Cooperation Organization (DCO) in partnership with NITDA/ONDI, is a transformative initiative designed to empower Female-owned micro, small, and medium enterprises (W-MSMEs) by integrating them into Nigeria\'s fast-growing digital economy.',
                image: '/assets/We-elevate.jpeg',
                href: '#/we-elevate'
              },
              {
                title: 'iHatch',
                tag: 'Startup Incubation',
                description:
                  'Nigeria\'s first truly nationwide incubation programme, operating across all 36 states and the FCT through a decentralised, hub-first model that strengthens the ecosystems around founders.',
                image: '/assets/iHatch.jpeg',
                href: '#/ihatch'
              },
              {
                title: 'NITDA Digital Innovation Challenge',
                tag: 'Innovation Challenge',
                description:
                  'A flagship national initiative designed to identify, nurture, and scale high-impact digital solutions that address Nigeria\'s most pressing socio-economic challenges through structured mentorship, funding, and institutional backing.',
                image: '/assets/ndic-1.jpeg',
                href: '#/ndic'
              }
            ].map((program) => (
              <div
                key={program.title}
                className="group relative bg-white rounded-2xl overflow-hidden border border-[#E6E9E6] hover:border-[#134C28] shadow-sm transition-all duration-300 flex flex-col"
              >
                {/* Images */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

                  <div className="absolute bottom-5 left-5">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/85 text-xs font-semibold text-[#134C28]">
                      {program.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                    {program.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 mb-5 leading-relaxed flex-1">
                    {program.description}
                  </p>

                  <div className="flex items-center justify-start">
                    <a
                      href={program.href}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white border border-[#D6E3D4] text-sm font-semibold text-[#134C28] hover:bg-[#F4F6F4] transition"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View all button */}
          <div className="text-center">
            <button
              className="inline-flex items-center gap-2 px-10 py-4 rounded-lg border border-[#134C28] text-[#134C28] 
              hover:bg-[#134C28] hover:text-white transition-all font-semibold text-sm md:text-base"
              onClick={() => {
                window.location.hash = '#/programs';
              }}
            >
              View Our Programs
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* NEWS SECTION – Coming Soon */}
      <section id="news" className="py-24 px-6 bg-[#FAFBFC] border-t border-[#E8E9EB]">

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#134C28]/10 border border-[#134C28]/20 mb-3">
              <span className="text-xs font-semibold tracking-[0.22em] uppercase text-[#134C28]">
                News &amp; Updates
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
              Latest from the ONDI ecosystem
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-xl mx-auto leading-relaxed">
              Headlines from programs, policy and ecosystem activity across Nigeria&apos;s digital
              innovation landscape.
            </p>
          </div>

          {/* Coming Soon Placeholder */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-2xl p-12 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#134C28]/10 flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-[#134C28]" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#111827] mb-3">
                Coming Soon
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                We&apos;re working on bringing you the latest news and updates from Nigeria&apos;s digital innovation ecosystem. Check back soon for exciting announcements, program updates, and success stories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA & CONTACT SECTION */}
      <section
        id="contact-section"
        className="relative py-24 px-6 bg-gradient-to-br from-[#081F11] via-[#0F3A20] to-[#134C28] overflow-hidden"
      >
        <WaveBackground />

        {/* Soft glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-[-4rem] w-80 h-80 bg-[#32965B]/25 rounded-full blur-3xl" />
          <div className="absolute bottom-[-4rem] left-[-2rem] w-96 h-96 bg-[#3EBF75]/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Section intro */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg.white/10 border border-white/25 mb-4">
              <span className="text-xs font-semibold tracking-[0.22em] uppercase text-green-50">
                Contact &amp; Partnerships
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Join Nigeria&apos;s Innovation Movement
            </h2>
            <p className="text-xl md:text-2xl text-green-50 max-w-3xl mx-auto leading-relaxed">
              Partner with ONDI to support the next generation of Nigerian innovators. Together,
              we&apos;re building Africa&apos;s digital future.
            </p>
          </div>

          {/* GET IN TOUCH – MAIN CARD */}
          <div className="max-w-4xl mx-auto">
            <div className="flex rounded-2xl bg-white/95 backdrop-blur-sm shadow-[0_20px_55px_rgba(0,0,0,0.38)] border border-[#D6E3D4] overflow-hidden">
              {/* Accent strip */}
              <div className="w-1.5 md:w-2 bg-gradient-to-b from-[#E8B923] via-[#F5C842] to-[#134C28]" />

              {/* Card body */}
              <div className="flex-1 px-6 py-7 md:px-8 md:py-8">
                {/* Heading */}
                <div className="flex flex-col md:flex-row md:items.end md:justify-between gap-4 mb-6">
                  <div>
                    <p className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-[#134C28] mb-2">

                    </p>
                    <h3 className="text-3xl md:text-4xl font-bold text-[#081F11]">
                      Contact Us.
                    </h3>
                  </div>
                  <p className="text-sm md:text-base text-gray-600 max-w-sm">
                    Reach out to ONDI for partnerships, program enquiries, and ecosystem collaborations.
                  </p>
                </div>

                {/* Content grid */}
                <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
                  {/* LEFT: Email, Phone, Socials */}
                  <div className="space-y-4">
                    {/* Email */}
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#DC2626] to-[#F97373] flex items-center justify-center flex-shrink-0 shadow-sm">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-[#081F11] mb-1">Email</h4>
                        <p className="text-sm text-gray-700">info@ondi.gov.ng</p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] flex items-center justify-center flex-shrink-0 shadow-sm">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-[#081F11] mb-1">Phone</h4>
                        <p className="text-sm text-gray-700">+234 813 738 3780</p>
                      </div>
                    </div>

                    {/* Socials */}
                    <div className="flex flex-col gap-2 pl-[2.75rem]">
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                        Social
                      </span>
                      <div className="flex gap-2">
                        <a
                          href={SOCIAL_LINKS.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full bg-[#0F172A] flex items-center justify-center hover:scale-105 transition-transform"
                          aria-label="ONDI on X (Twitter)"
                        >
                          <Twitter className="w-4 h-4 text-white" />
                        </a>
                        <a
                          href={SOCIAL_LINKS.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full bg-[#1D4ED8] flex items-center justify-center hover:scale-105 transition-transform"
                          aria-label="ONDI on Facebook"
                        >
                          <Facebook className="w-4 h-4 text-white" />
                        </a>
                        <a
                          href={SOCIAL_LINKS.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full bg-[#0A66C2] flex items-center justify-center hover:scale-105 transition-transform"
                          aria-label="ONDI on LinkedIn"
                        >
                          <Linkedin className="w-4 h-4 text-white" />
                        </a>
                        <a
                          href={SOCIAL_LINKS.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full bg-gradient-to-br from-[#F97316] via-[#DB2777] to-[#2563EB] flex items-center justify-center hover:scale-105 transition-transform"
                          aria-label="ONDI on Instagram"
                        >
                          <Instagram className="w-4 h-4 text-white" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT: Location + Map */}
                  <div className="rounded-xl border border-[#D6E3D4] bg-[#F7FBF8] overflow-hidden shadow-sm">
                    <div className="p-4 flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FB7185] to-[#F97373] flex items-center justify-center flex-shrink-0 shadow-sm">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-[#081F11] mb-1">Location</h4>
                        <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                          4th Floor, National Center for Artificial Intelligence and Robotics Building,
                          Wuye, Ankuru 900108, Federal Capital Territory.
                        </p>
                      </div>
                    </div>

                    <div className="h-32 md:h-40 bg-gray-200 relative">
                      <iframe
                        title="NCAIR Location Map"
                        src="https://www.google.com/maps?q=4th+Floor,+National+Center+for+Artificial+Intelligence+and+Robotics+Building,+Wuye,+Abuja&output=embed"
                        className="w-full h-full border-0 rounded-b-xl md:rounded-b-2xl"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>

                    <div className="px-4 py-3 border-t border-[#D6E3D4] flex items-center justify-between gap-3">
                      <span className="text-[10px] md:text-xs text-gray-600">
                        View directions to the NCAIR building on Google Maps.
                      </span>
                      <a
                        href="https://www.google.com/maps/place/4th+Floor,+National+Center+for+Artificial+Intelligence+and+Robotics+Building,+Wuye,+Abuja"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] md:text-xs font-semibold text-[#134C28] hover:text-[#0b3017]"
                      >
                        Open in Maps →
                      </a>
                    </div>
                  </div>
                </div>

                {/* Card footer CTAs */}
                <div className="mt-6 flex flex-wrap gap-3 justify-start">
                  <button
                    className="group inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-[#E8B923] to-[#D4A520] text-white text-base font-bold hover:from-[#F5C842] hover:to-[#E8B923] transition-all"
                    onClick={() => {
                      window.location.hash = '#/contact';
                    }}
                  >
                    Contact Us
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  {/* Learn More button removed as requested */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
