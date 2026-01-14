import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { WaveBackground } from '../components/WaveBackground';

const newsItems = [
  {
    id: 1,
    title: 'ONDI Launches ₦500M Innovation Fund for Nigerian Startups',
    category: 'Press Release',
    excerpt:
      'New fund aims to support 100+ early-stage startups across key sectors including fintech, healthtech, and agritech with non-dilutive grants.',
    fullText:
      'New fund aims to support 100+ early-stage startups across key sectors including fintech, healthtech, and agritech with non-dilutive grants. The initiative is targeted at founders building export-ready solutions and will provide tailored mentorship, market access and regulatory guidance. In collaboration with leading financial and development partners, ONDI will ensure that the fund reaches high-potential innovators across all regions of Nigeria, with a focus on inclusion, job creation and long-term sustainability.',
    date: 'November 1, 2025',
    readTime: '5 min read',
    image:
      'https://images.unsplash.com/photo-1556761175-129418cb2dfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
  },
  {
    id: 2,
    title: 'Nigerian Fintech Startup Raises $2M After ONDI Accelerator',
    category: 'Success Story',
    excerpt:
      'PayFlow Technologies secures Series A funding just six months after graduating from the ONDI accelerator program.',
    fullText:
      'PayFlow Technologies secures Series A funding just six months after graduating from the ONDI accelerator program. Through the accelerator, the team received tailored business advisory, investor readiness support and access to strategic partners. The new capital will be deployed towards product expansion, regional scaling and onboarding new engineering talent across Nigeria.',
    date: 'October 28, 2025',
    readTime: '4 min read',
    image:
      'https://images.unsplash.com/photo-1599592187465-6dc742367282?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
  },
  {
    id: 3,
    title: 'New Partnership with Microsoft to Train 10,000 Developers',
    category: 'Announcement',
    excerpt:
      'ONDI partners with Microsoft to launch comprehensive developer training program targeting youth across all 36 states.',
    fullText:
      'ONDI partners with Microsoft to launch a comprehensive developer training program targeting youth across all 36 states. Participants will gain access to cloud skills, AI fundamentals and modern software engineering practices. The program will blend virtual learning with physical hubs in key cities, and top performers will be linked to internships, jobs and startup support opportunities.',
    date: 'October 25, 2025',
    readTime: '3 min read',
    image:
      'https://images.unsplash.com/photo-1628017974725-18928e8e8211?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
  },
  {
    id: 4,
    title: 'Regulatory Sandbox Opens for Blockchain Startups',
    category: 'Policy Update',
    excerpt:
      'ONDI announces new regulatory sandbox program allowing blockchain and crypto startups to test innovations in controlled environment.',
    fullText:
      'ONDI announces a new regulatory sandbox program allowing blockchain and crypto startups to test innovations in a controlled environment. The sandbox will support founders to navigate applicable rules while co-designing safer, more inclusive digital financial services for the Nigerian market.',
    date: 'October 20, 2025',
    readTime: '6 min read',
    image:
      'https://images.unsplash.com/photo-1736666835308-27fa97a0d660?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
  },
  {
    id: 5,
    title: "ONDI Hosts Africa's Largest Tech Innovation Summit",
    category: 'Event',
    excerpt:
      'Over 5,000 participants expected at annual summit featuring keynotes from global tech leaders and startup pitch competitions.',
    fullText:
      'Over 5,000 participants are expected at the annual ONDI innovation summit, featuring keynotes from global tech leaders, masterclasses, founder clinics and high-stakes startup pitch competitions. The summit will showcase solutions built in Nigeria and connect founders to investors and partners across Africa and beyond.',
    date: 'October 15, 2025',
    readTime: '4 min read',
    image:
      'https://images.unsplash.com/photo-1609619385076-36a873425636?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
  },
  {
    id: 6,
    title: 'Q3 2025 Impact Report: 200+ Startups Supported',
    category: 'Report',
    excerpt:
      'Latest quarterly report shows significant growth in startup support, job creation, and ecosystem development across Nigeria.',
    fullText:
      'The latest ONDI impact report shows significant growth in startup support, job creation and ecosystem development across Nigeria. Over 200 startups received direct support in Q3 alone, resulting in new products, expanded teams, and increased access to local and international markets.',
    date: 'October 10, 2025',
    readTime: '8 min read',
    image:
      'https://images.unsplash.com/photo-1758691737138-7b9b1884b1db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
  }
];

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'Press Release':
      return '#628B35';
    case 'Success Story':
      return '#EC9A29';
    case 'Announcement':
      return '#284A26';
    case 'Policy Update':
      return '#A52422';
    case 'Event':
      return '#2563EB';
    case 'Report':
      return '#4B5563';
    default:
      return '#628B35';
  }
};

export function NewsPage() {
  const [featuredId, setFeaturedId] = useState<number>(newsItems[0].id);
  const [showFullFeatured, setShowFullFeatured] = useState<boolean>(false);

  const featuredNews = newsItems.find((n) => n.id === featuredId)!;
  const regularNews = newsItems.filter((n) => n.id !== featuredId);

  return (
    <main className="pt-32 pb-20 bg-[#FFFFFC]">
      {/* TOP HEADER / HERO with WaveBackground */}
      <section className="relative px-6 pb-12 bg-gradient-to-br from-[#081F11] via-[#0F3A20] to-[#134C28] overflow-hidden">
        <WaveBackground />

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-24 left-10 w-64 h-64 bg-[#32965B]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-6 right-10 w-80 h-80 bg-[#3EBF75]/18 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto py-10 relative z-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-green-100/80 mb-2">
              News &amp; Updates
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Latest from Nigeria&apos;s Innovation Ecosystem
            </h1>
            <p className="mt-4 text-sm md:text-base text-green-50/90 max-w-2xl">
              Official announcements, press releases, success stories and policy updates from the
              Office for Nigerian Digital Innovation (ONDI).
            </p>
          </div>

          <div className="text-xs md:text-sm text-green-100/80">
            <p>Home / News &amp; Updates</p>
            <p className="mt-1">
              Curated stories highlighting ONDI’s work across Nigeria&apos;s innovation ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN NEWS CONTENT */}
      <section className="px-6 mt-10">
        <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-[1.7fr,1.2fr]">
          {/* FEATURED STORY – LEFT CARD */}
          <motion.article
            key={featuredNews.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl overflow-hidden border border-[#E2E5E0] bg-white shadow-[0_18px_45px_rgba(15,58,32,0.12)]"
          >
            <div className="relative h-64 md:h-80">
              <ImageWithFallback
                src={featuredNews.image}
                alt={featuredNews.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent" />
              <span
                className="absolute top-5 left-5 inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-white"
                style={{ backgroundColor: getCategoryColor(featuredNews.category) }}
              >
                {featuredNews.category}
              </span>
            </div>

            <div className="p-7 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#081F11] mb-3">
                {featuredNews.title}
              </h2>

              <p className="text-sm md:text-base text-[#4B5563] mb-5 leading-relaxed">
                {showFullFeatured ? featuredNews.fullText : featuredNews.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-5 mb-6 text-xs md:text-sm text-[#6B7280]">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#628B35]" />
                  <span>{featuredNews.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#628B35]" />
                  <span>{featuredNews.readTime}</span>
                </div>
              </div>

              <button
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg 
                  bg-gradient-to-r from-[#E8B923] to-[#D4A520] text-white text-sm font-semibold
                  shadow-md shadow-[#E8B923]/30 hover:shadow-lg hover:shadow-[#E8B923]/40
                  hover:from-[#F5C842] hover:to-[#E8B923] transition-all"
                onClick={() => setShowFullFeatured((prev) => !prev)}
              >
                {showFullFeatured ? 'Show Less' : 'Read Full Article'}
                <ArrowRight
                  className={`w-4 h-4 transition-transform ${
                    showFullFeatured ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </div>
          </motion.article>

          {/* RIGHT COLUMN – LATEST LIST */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#6B7280] mb-2">
                  Latest
                </p>
                <h3 className="text-lg md:text-xl font-bold text-[#081F11]">
                  Recent announcements &amp; stories
                </h3>
              </div>
              <a
                href="#/"
                className="hidden md:inline-flex text-xs font-semibold text-[#134C28] hover:text-[#0B3017]"
              >
                Back to Home
              </a>
            </div>

            <div className="divide-y divide-[#E5E7EB] rounded-2xl border border-[#E2E5E0] bg-white">
              {regularNews.map((item, index) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex gap-4 p-4 md:p-5 hover:bg-[#F5F7F3] cursor-pointer transition-colors group"
                  onClick={() => {
                    setFeaturedId(item.id);
                    setShowFullFeatured(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  <div className="h-16 w-16 md:h-20 md:w-24 rounded-lg overflow-hidden flex-shrink-0">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-3 mb-1">
                      <span
                        className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold text-white"
                        style={{ backgroundColor: getCategoryColor(item.category) }}
                      >
                        {item.category}
                      </span>
                      <span className="text-[10px] text-[#6B7280] hidden sm:inline">
                        {item.readTime}
                      </span>
                    </div>
                    <h4 className="text-sm md:text-base font-semibold text-[#081F11] mb-1 line-clamp-2">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#4B5563] line-clamp-2 mb-1">
                      {item.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-[10px] text-[#6B7280]">
                      <Calendar className="w-3 h-3 text-[#9CA3AF]" />
                      <span>{item.date}</span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER CTA */}
      <section className="px-6 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto rounded-2xl bg-[#134C28] px-6 py-8 md:px-10 md:py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 shadow-[0_20px_55px_rgba(0,0,0,0.35)]"
        >
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
              Subscribe to ONDI Updates
            </h3>
            <p className="text-sm md:text-base text-green-100 max-w-xl">
              Receive official news, program updates and opportunities from ONDI directly in your
              inbox.
            </p>
          </div>

          <form
            className="w-full md:w-auto flex flex-col sm:flex-row gap-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="Enter your email address"
              className="flex-1 min-w-[0] px-4 py-3 rounded-lg text-sm outline-none border border-transparent
                         focus:border-[#F5C842] bg-[#F9FAFB] text-[#081F11]"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center px-5 py-3 rounded-lg text-sm font-semibold
                         bg-gradient-to-r from-[#E8B923] to-[#D4A520] text-white
                         hover:from-[#F5C842] hover:to-[#E8B923] transition-all shadow-md shadow-[#E8B923]/30"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </section>
    </main>
  );
}
