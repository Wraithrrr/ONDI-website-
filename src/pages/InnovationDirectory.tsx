// components/InnovationDirectoryPage.tsx
import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { WaveBackground } from '../components/WaveBackground';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Building2, Users, Rocket, TrendingUp, Search } from 'lucide-react';

type DirectoryItem = {
  id: number;
  name: string;
  category: string;
  description: string;
  tags: string[];
  status: 'Active' | 'Success';
  image: string;
};

const directoryItems: DirectoryItem[] = [
  {
    id: 1,
    name: 'TechVenture Nigeria',
    category: 'Startups',
    description: 'AI-powered fintech solution revolutionizing payment systems across West Africa',
    tags: ['Fintech', 'AI', 'B2B'],
    status: 'Active',
    image:
      'https://images.unsplash.com/photo-1599592187465-6dc742367282?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
  },
  {
    id: 2,
    name: 'Innovation Hub Lagos',
    category: 'Accelerators',
    description: 'Leading innovation center providing world-class support to early-stage startups',
    tags: ['Co-working', 'Mentorship', 'Funding'],
    status: 'Active',
    image:
      'https://images.unsplash.com/photo-1736666835308-27fa97a0d660?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
  },
  {
    id: 3,
    name: 'Ventures Platform',
    category: 'Investors',
    description:
      'Early-stage VC fund investing in African tech startups with global ambitions',
    tags: ['Seed', 'Series A', 'Africa'],
    status: 'Active',
    image:
      'https://images.unsplash.com/photo-1728632286888-04c64f48e506?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
  },
  {
    id: 4,
    name: 'Microsoft Nigeria',
    category: 'Partners',
    description: 'Global technology partner supporting digital transformation initiatives',
    tags: ['Cloud', 'Enterprise', 'Training'],
    status: 'Active',
    image:
      'https://images.unsplash.com/photo-1628017974725-18928e8e8211?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
  },
  {
    id: 5,
    name: 'HealthTech Solutions',
    category: 'Success Stories',
    description: 'From ONDI incubation to serving 2M+ patients across Nigeria',
    tags: ['Healthcare', 'Scale-up', '2M+ Users'],
    status: 'Success',
    image:
      'https://images.unsplash.com/photo-1758691737138-7b9b1884b1db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
  },
  {
    id: 6,
    name: 'AgroTech Innovators',
    category: 'Startups',
    description: 'Using IoT and data analytics to transform agricultural productivity',
    tags: ['AgriTech', 'IoT', 'Data'],
    status: 'Active',
    image:
      'https://images.unsplash.com/photo-1609619385076-36a873425636?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
  }
];

const filters = ['All', 'Startups', 'Partners', 'Accelerators', 'Investors', 'Success Stories'];

function getCategoryIcon(category: string) {
  switch (category) {
    case 'Startups':
      return Rocket;
    case 'Partners':
      return Users;
    case 'Accelerators':
      return Building2;
    case 'Investors':
      return TrendingUp;
    default:
      return Building2;
  }
}

export function InnovationDirectory() {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredItems = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return directoryItems.filter((item) => {
      if (activeFilter !== 'All' && item.category !== activeFilter) return false;

      if (!q) return true;

      const haystack = (
        item.name +
        ' ' +
        item.description +
        ' ' +
        item.tags.join(' ')
      ).toLowerCase();

      return haystack.includes(q);
    });
  }, [activeFilter, searchQuery]);

  return (
    <>
      {/* HERO / HEADER */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-[#081F11] via-[#0F3A20] to-[#134C28] overflow-hidden">
        <WaveBackground />

        {/* Soft glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-16 left-10 w-64 h-64 bg-[#32965B]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#3EBF75]/16 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-5">
              <span className="w-2 h-2 rounded-full bg-[#E8B923] animate-pulse" />
              <span className="text-xs tracking-[0.24em] uppercase text-white/80">
                Innovation Directory
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Mapping Nigeria&apos;s
              <br />
              <span className="text-[#E8B923]">Digital Innovation Ecosystem</span>
            </h1>

            <p className="text-sm md:text-base lg:text-lg text-green-50/90 max-w-2xl leading-relaxed">
              Explore startups, partners, accelerators, investors and success stories supported by
              ONDI across Nigeria&apos;s innovation landscape.
            </p>
          </div>
        </div>
      </section>

      {/* DIRECTORY CONTENT */}
      <section
        id="directory"
        className="py-20 px-6"
        style={{ background: 'linear-gradient(to bottom, #F3F7F4 0%, #F9FAFB 100%)' }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Search + filters */}
          <div className="mb-10">
            {/* Search bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#628B35]" />
                <input
                  type="text"
                  placeholder="Search startups, partners, accelerators, investors..."
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-[#D1D5DB] bg-white/95 text-sm md:text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-[#134C28]/40 focus:border-[#134C28] transition-all"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-3">
              {filters.map((filter) => {
                const isActive = filter === activeFilter;
                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                    className={`px-4 py-2 rounded-full text-xs md:text-sm font-semibold border transition-all ${
                      isActive
                        ? 'bg-[#134C28] text-white border-[#134C28] shadow-md'
                        : 'bg-white text-[#134C28] border-[#D1D5DB] hover:border-[#134C28]/70 hover:bg-[#F3F4F6]'
                    }`}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => {
              const Icon = getCategoryIcon(item.category);
              const isSuccess = item.status === 'Success';

              return (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  className="group bg-white rounded-2xl overflow-hidden border border-[#E5E7EB] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer flex flex-col"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-transparent" />

                    {/* Status pill */}
                    <div className="absolute top-4 right-4">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold text-white shadow-sm ${
                          isSuccess ? 'bg-[#628B35]' : 'bg-[#EC9A29]'
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>

                    {/* Icon bubble */}
                    <div className="absolute bottom-4 left-4">
                      <div className="w-10 h-10 rounded-xl bg-white/90 flex items-center justify-center shadow-lg">
                        <Icon className="w-5 h-5 text-[#134C28]" />
                      </div>
                    </div>
                  </div>

                  {/* Text content */}
                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-xs font-semibold text-[#EC9A29] mb-1 uppercase tracking-wide">
                      {item.category}
                    </p>
                    <h3 className="text-lg md:text-xl font-bold text-[#111827] mb-2 leading-snug group-hover:text-[#134C28] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-700 mb-4 leading-relaxed flex-1">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-3 py-1 rounded-full border border-[#D6E3D4] text-[11px] font-medium text-[#134C28] bg-[#F7FBF8]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          {/* Empty state (if filters+search hide everything) */}
          {filteredItems.length === 0 && (
            <div className="mt-16 text-center text-sm md:text-base text-gray-500">
              No directory entries match your search yet. Try adjusting your filters.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
