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
  // start index of the first visible news card
  const [newsPage, setNewsPage] = useState(0);

  const words = ['Command Centre', 'Growth Hub', 'Launch Pad', 'Success Engine', 'Digital Gateway'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);




  const carouselImages = [
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
    'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80',
    'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&q=80',
    'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80'
  ];

  const newsItems = [
    {
      title: 'ONDI Launches ₦500M Innovation Fund for Nigerian Startups',
      date: 'November 2025',
      tag: 'Funding & Investment',
      img: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=900&q=80'
    },
    {
      title: '10,000 Developers to Be Trained Through New Capacity Program',
      date: 'October 2025',
      tag: 'Capacity Building',
      img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80'
    },
    {
      title: 'Regulatory Sandbox Opens for AI & Fintech Innovation',
      date: 'October 2025',
      tag: 'Regulatory Sandbox',
      img: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=900&q=80'
    },
    {
      title: 'ONDI Hosts National Digital Innovation Policy Roundtable',
      date: 'September 2025',
      tag: 'Policy & Ecosystem',
      img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&q=80'
    },
    {
      title: 'Quarterly Impact Report: 200+ Startups Supported',
      date: 'September 2025',
      tag: 'Impact & Results',
      img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&q=80'
    },
    {
      title: "Nigeria's Innovation Ecosystem Records Strong Growth",
      date: 'August 2025',
      tag: 'Ecosystem Insight',
      img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&q=80'
    }
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
      <section className="relative pt-40 pb-28 px-6 bg-gradient-to-br from-[#081F11] via-[#0F3A20] to-[#134C28] overflow-hidden">
        {/* Abstract Wave Background */}
        <WaveBackground />

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#32965B]/15 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#3EBF75]/15 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
              <div className="w-2 h-2 rounded-full bg-[#E8B923] animate-pulse" />
              <span className="text-sm tracking-wide text-white/90">
                Office for Nigerian Digital Innovation
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-white">
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

            <p className="text-xl md:text-2xl text-green-50/90 max-w-4xl mx-auto mb-12 leading-relaxed">
              Empowering Nigerian innovators to build, scale, and compete globally through strategic
              support, world-class resources, and sustainable partnerships
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-20">

              {/* Explore Programs → scroll to programs section */}
              <a
                href="#programs"
                className="px-10 py-4 rounded-lg bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 transition-all font-semibold"
              >
                Explore Programs
              </a>
            </div>
          </div>

          {/* Image Carousel */}
          <div className="max-w-6xl mx-auto">
            <div className="overflow-hidden rounded-2xl shadow-2xl border-2 border-white/10">
              <motion.div
                className="flex gap-6"
                animate={{
                  x: [0, -1680]
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: 25,
                    ease: 'linear'
                  }
                }}
              >
                {[...carouselImages, ...carouselImages].map((image, i) => (
                  <div key={i} className="flex-shrink-0 w-96 h-56">
                    <ImageWithFallback
                      src={image}
                      alt={`Innovation ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-24 px-6"
        style={{
          background: 'linear-gradient(to bottom, #F5F1EA 0%, #FBF9F6 100%)'
        }}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Left: NCAIR Image Card */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden bg-white border border-[#E5E7EB] shadow-[0_18px_45px_rgba(15,58,32,0.12)]">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D22AQHSp6FXAseL-Q/feedshare-shrink_800/B4DZm5fdDCJgAg-/0/1759753662865?e=2147483647&v=beta&t=-6Tl9DlFkjCHcN8vT3SjU_Jk_77SPhjE_U4WDbDwn-E"
                alt="National Center for Artificial Intelligence and Robotics, Abuja"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-4 left-4 px-4 py-2 rounded-full bg-white/95 shadow-md border border-[#E5E7EB] text-[11px] font-medium text-[#134C28]">
              National Centre for Artificial Intelligence &amp; Robotics (NCAIR)
            </div>
          </div>

          {/* Right: Text Content */}
          <div>
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
          background: 'linear-gradient(to bottom, #FBF9F6 0%, #F9FAFB 100%)'
        }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#134C28]/10 border border-[#134C28]/20 mb-3">
              <span className="text-xs font-semibold tracking-[0.22em] uppercase text-[#134C28]">
                Goals &amp; Milestones
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Bringing innovative local content to your doorstep
            </h2>
            <p className="text-sm md:text-base text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Our mission, vision and core values guide how ONDI grows Nigeria&apos;s digital
              innovation ecosystem and measures impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* LEFT: Mission / Vision / Core Values */}
            <div className="space-y-6">
              {/* Mission */}
              <div className="relative p-6 rounded-2xl bg-white border border-[#E5E7EB] shadow-[0_14px_35px_rgba(12,40,22,0.10)]">
                <div className="absolute -left-4 top-6 w-10 h-10 rounded-full bg-gradient-to-br from-[#3EBF75] to-[#277D49] flex items-center justify-center shadow-lg">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <p className="text-xs font-semibold tracking-[0.25em] uppercase text-gray-500 mb-2 pl-4">
                  Mission
                </p>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed text-justify pl-4">
                  To integrate indigenous technology and innovations in all facets of Nigerian society.
                </p>
              </div>

              {/* Vision */}
              <div className="relative p-6 rounded-2xl bg-white border border-[#E5E7EB] shadow-[0_14px_35px_rgba(12,40,22,0.10)]">
                <div className="absolute -left-4 top-6 w-10 h-10 rounded-full bg-gradient-to-br from-[#2F855A] to-[#134C28] flex items-center justify-center shadow-lg">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <p className="text-xs font-semibold tracking-[0.25em] uppercase text-gray-500 mb-2 pl-4">
                  Vision
                </p>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed text-justify pl-4">
                  To make Nigeria the foremost technology and innovation ecosystem in Africa.
                </p>
              </div>

              {/* Core Values */}
              <div className="relative p-6 rounded-2xl bg-white border border-[#E5E7EB] shadow-[0_14px_35px_rgba(12,40,22,0.10)]">
                <div className="absolute -left-4 top-6 w-10 h-10 rounded-full bg-gradient-to-br from-[#E8B923] to-[#CDA434] flex items-center justify-center shadow-lg">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <p className="text-xs font-semibold tracking-[0.25em] uppercase text-gray-500 mb-2 pl-4">
                  Core Values
                </p>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed pl-4">
                  Drive • InnOvation • Collaboration. • Support • Excellence.
                </p>
              </div>
            </div>

            {/* RIGHT: Milestone stats */}
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  label: 'Startups Supported',
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
                  className="rounded-2xl bg-white border border-[#E5E7EB] hover:border-[#134C28] shadow-[0_16px_40px_rgba(12,40,22,0.10)] px-5 py-6 flex flex-col justify-between transition-all"
                >
                  <div className="mb-4">
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.accent} flex items-center justify-center shadow-md mb-3`}
                    >
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-sm font-medium text-gray-700">{item.label}</p>
                  </div>
                  <p className="text-3xl md:text-4xl font-bold text-[#134C28]">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FOCUS AREAS */}
          <div className="mt-12 pt-8 border-t border-[#E2E4DD]">
            <div className="text-center mb-4">
              <p className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-gray-500 mb-2">
                Focus Areas
              </p>
              <p className="text-sm md:text-base text-gray-700 max-w-3xl mx-auto leading-relaxed">
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
      <section id="programs" className="py-24 px-6 bg-[#F9FAFB]">
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
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: 'We-Elevate',
                tag: 'Early-stage Support',
                description:
                  'A capacity-building and growth program designed to support entrepreneurs—especially women-led startups—with skills, mentorship, and access to opportunities that help scale sustainable businesses.',
                image:
                  'https://images.unsplash.com/photo-1759395162739-84190996783c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
                href: 'https://programs.startup.gov.ng/we-elevate/'
              },
              {
                title: 'iHatch',
                tag: 'Incubation',
                description:
                  'A startup incubation and acceleration program focused on early-stage tech founders, providing training, mentorship, and ecosystem support to transform ideas into viable products and businesses.',
                image:
                  'https://images.unsplash.com/photo-1728044849242-516700295875?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
                href: 'https://programs.startup.gov.ng/ihatch/'
              },
              {
                title: 'NITDA Digital Innovation Centre(NDIC)',
                tag: 'National Facility',
                description:
                  'A national competition that identifies, nurtures, and rewards innovative digital solutions addressing priority national and sector-specific challenges through technology.',
                image:
                  'https://images.unsplash.com/photo-1664943861653-609134fb6b3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
                href: 'https://programs.startup.gov.ng/ndic/'
              }
            ].map((program) => (
              <div
                key={program.title}
                className="group relative bg-white rounded-2xl overflow-hidden border border-[#E5E7EB] 
                hover:border-[#134C28] shadow-[0_18px_45px_rgba(15,58,32,0.12)] 
                hover:shadow-[0_22px_55px_rgba(15,58,32,0.18)] transition-all duration-300 flex flex-col"
              >
                {/* Image */}
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
                <div className="p-7 flex-1 flex flex-col">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                    {program.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed flex-1">
                    {program.description}
                  </p>

                  <div className="flex items-center justify-start">
                    <a
                      href={program.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center gap-2 px-5 py-2.5 rounded-lg 
                      bg-gradient-to-br from-[#F5F5F5] via-[#E5E5E5] to-[#D4D4D4] 
                      text-xs md:text-sm font-semibold text-[#134C28] shadow-sm hover:shadow-md 
                      hover:from-[#FFFFFF] hover:via-[#EDEDED] hover:to-[#D4D4D4] transition-all"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
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

      {/* NEWS SECTION – homepage preview */}
      <section id="news" className="py-24 px-6 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          {/* Header + arrows */}
          <div className="flex items-center justify-between mb-8">
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#134C28]/10 border border-[#134C28]/20 mb-3">
                <span className="text-xs font-semibold tracking-[0.22em] uppercase text-[#134C28]">
                  News &amp; Updates
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-2">
                Latest from the ONDI ecosystem
              </h2>
              <p className="text-sm md:text-base text-gray-600 max-w-xl leading-relaxed">
                Headlines from programs, policy and ecosystem activity across Nigeria&apos;s digital
                innovation landscape.
              </p>
            </div>

            {/* Left & Right arrows – slide one card at a time */}
            <div className="hidden md:flex items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  const visibleCount = 3;
                  const maxIndex = Math.max(0, newsItems.length - visibleCount);
                  setNewsPage((prev) => (prev <= 0 ? maxIndex : prev - 1));
                }}
                className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-[#D1D5DB] bg-white hover:bg-[#F3F4F6] hover:border-[#134C28] shadow-sm hover:shadow-md transition-all"
                aria-label="Previous news"
              >
                <ArrowRight className="w-5 h-5 text-[#134C28] rotate-180" />
              </button>

              <button
                type="button"
                onClick={() => {
                  const visibleCount = 3;
                  const maxIndex = Math.max(0, newsItems.length - visibleCount);
                  setNewsPage((prev) => (prev >= maxIndex ? 0 : prev + 1));
                }}
                className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-[#D1D5DB] bg-white hover:bg-[#F3F4F6] hover:border-[#134C28] shadow-sm hover:shadow-md transition-all"
                aria-label="Next news"
              >
                <ArrowRight className="w-5 h-5 text-[#134C28]" />
              </button>
            </div>
          </div>

          {/* Sliding news window – 3 cards visible, slide by 1 */}
          {(() => {
            const visibleCount = 3;
            const maxIndex = Math.max(0, newsItems.length - visibleCount);
            const startIndex = Math.min(newsPage, maxIndex);
            const pageItems = newsItems.slice(startIndex, startIndex + visibleCount);

            return (
              <motion.div
                key={startIndex}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="grid md:grid-cols-3 gap-8 mb-12"
              >
                {pageItems.map((item) => (
                  <article
                    key={item.title}
                    className="group bg-white rounded-2xl overflow-hidden border border-[#E5E7EB] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer flex flex-col"
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/30 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/90 text-[11px] font-semibold text-[#134C28]">
                          {item.tag}
                        </span>
                      </div>
                    </div>

                    {/* Text */}
                    <div className="p-6 flex flex-col flex-1">
                      <p className="text-xs text-gray-500 mb-2">{item.date}</p>
                      <h3 className="text-base md:text-lg font-semibold text-[#111827] mb-3 leading-snug group-hover:text-[#134C28] transition-colors">
                        {item.title}
                      </h3>
                      <div className="mt-auto flex items-center justify-between pt-2 text-xs text-[#134C28]">

                        <span className="text-[10px] text-gray-500">From ONDI News Desk</span>
                      </div>
                    </div>
                  </article>
                ))}
              </motion.div>
            );
          })()}

          {/* “Show more” → go to News page */}
          <div className="flex justify-center">
            <a
              href="#/news"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white border border-[#D1D5DB] hover:border-[#134C28] hover:bg-[#F3F4F6] transition-all text-sm font-semibold text-[#134C28]"
            >
              Show more news &amp; updates
              <ArrowRight className="w-4 h-4" />
            </a>
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
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg.white/10 border border-white/25 mb-3">
              <span className="text-xs font-semibold tracking-[0.22em] uppercase text-green-50">
                Contact &amp; Partnerships
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Join Nigeria&apos;s Innovation Movement
            </h2>
            <p className="text-lg md:text-xl text-green-50 max-w-3xl mx-auto leading-relaxed">
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
                    <h3 className="text-2xl md:text-3xl font-bold text-[#081F11]">
                      Contact Us.
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-gray-600 max-w-sm">
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
                        <p className="text-sm text-gray-700">+234 800 000 0000</p>
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
                    className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[#E8B923] to-[#D4A520] text-white text-sm font-semibold hover:from-[#F5C842] hover:to-[#E8B923] transition-all"
                    onClick={() => {
                      window.location.hash = '#/contact';
                    }}
                  >
                    Contact Us
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
