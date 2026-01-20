// pages/programs/NDICPage.tsx
import { motion } from 'motion/react';
import { ArrowRight, Search, Monitor, Users, Presentation, Package, FileCheck, DollarSign, Database, Store, UserCircle } from 'lucide-react';

export function NDICPage() {
  const focusAreas = [
    { title: 'Inventory and logistics optimization', icon: Package },
    { title: 'Business compliance automation', icon: FileCheck },
    { title: 'Access to finance and credit for MSMEs', icon: DollarSign },
    { title: 'MSME data collection & decision-making', icon: Database },
    { title: 'Digital storefronts & marketplace platforms', icon: Store },
    { title: 'Women-led or informal MSME digitization', icon: UserCircle },
  ];

  const howItWorks = [
    {
      step: 1,
      title: 'Identify a core MSME pain point in your state',
      description: 'Pinpoint a pressing problem faced by MSMEs in your state that needs an innovative solution.',
      icon: Search,
      highlighted: true,
    },
    {
      step: 2,
      title: 'Build a simple tech-driven product idea',
      description: 'Build a simple tech-driven product idea that addresses the problem you\'ve identified.',
      icon: Monitor,
      highlighted: false,
    },
    {
      step: 3,
      title: 'Participate in a sprint with expert mentors',
      description: 'Join a fast-paced sprint with expert mentors who\'ll help you refine and improve your solution.',
      icon: Users,
      highlighted: true,
    },
    {
      step: 4,
      title: 'Present your solution to a panel of judges',
      description: 'Present your refined solution to a panel of expert judges who will evaluate your innovation.',
      icon: Presentation,
      highlighted: false,
    },
  ];

  const timeline = [
    { dates: '26 - 15', month: 'May - June', year: '2025', title: 'Application window (State-Level)', description: 'State level applications open' },
    { dates: '16 - 22', month: 'June', year: '2025', title: 'State Evaluation', description: 'Evaluation of competing teams start at the state level' },
    { dates: '30 - 06', month: 'June - July', year: '2025', title: 'Regional Hackathons', description: 'Regional hackathons across the country' },
    { dates: '21 - 27', month: 'July', year: '2025', title: 'National Demo Day', description: 'Top teams present at the national demo day' },
    { dates: '28 - 03', month: 'July - Aug', year: '2025', title: 'Post Program Support', description: 'Continued support for winning teams' },
  ];

  const eligibility = [
    { title: 'Teams', description: 'Teams of 2-5 people, combining tech and business skillsets.', image: '/assets/ndic-2.jpeg' },
    { title: 'Nationality', description: 'Must represent a Nigerian state based on familiarity or affiliation.', image: '/assets/ndic-1.jpeg' },
    { title: 'Age', description: 'All team members must be 18 years or older.', image: '/assets/hero-4.jpeg' },
  ];

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col items-center justify-center text-center py-20 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto px-6"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#2D1B69] mb-8 leading-tight">
            2025 NITDA
            <br />
            Digital Innovation
            <br />
            Challenge
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-12">
            Empowering MSMEs through Emerging Technology
          </p>
          <button className="px-10 py-4 bg-[#2D7A2D] text-white rounded-xl text-lg font-semibold hover:bg-[#245A24] transition-colors">
            Apply
          </button>
        </motion.div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8 flex items-center justify-center gap-4 flex-wrap">
              <span>Solutions That</span>
              <div className="inline-flex w-20 h-20 md:w-24 md:h-24 bg-black rounded-full items-center justify-center">
                <span className="text-white text-2xl">&#9650;</span>
              </div>
              <span>Move The Needle</span>
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
            <p>
              This edition of the NDIC invites innovators to build bold, practical solutions that solve
              challenges for Nigeria's micro, small, and medium enterprises (MSMEs).
            </p>
            <p>
              From automating business processes to improving market access, teams will apply
              emerging tech to enable growth, resilience, and digital inclusion for MSMEs.
            </p>
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/assets/ndic-1.jpeg"
                alt="Focus Area"
                className="rounded-3xl object-cover w-full h-[400px] lg:h-[500px] shadow-xl"
              />
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#2D174D] mb-4">Focus Areas</h2>
              <p className="text-xl text-[#2D174D] mb-8">
                Tackle real challenges MSMEs face by building a solution in one of these key impact areas.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {focusAreas.map((area, index) => (
                  <motion.div
                    key={area.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#2D174D]/10 flex items-center justify-center flex-shrink-0">
                      <area.icon className="w-5 h-5 text-[#2D174D]" />
                    </div>
                    <span className="font-semibold text-[#181028]">{area.title}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2D174D] mb-4">
              How the Challenge Works
            </h2>
            <p className="text-lg md:text-xl text-gray-700">
              From problem to pitch, here's what you'll do, step by step.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {howItWorks.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center mb-6 shadow-lg border border-gray-100">
                  <item.icon className="w-10 h-10 text-[#2D174D]" />
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-6xl font-bold text-black flex-shrink-0">{item.step}</div>
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-black mb-3">
                      {item.highlighted ? (
                        <span className="bg-[#C6E045] px-1">{item.title}</span>
                      ) : (
                        item.title
                      )}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2D174D]">Competition Timeline</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {timeline.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-8"
              >
                <div className="flex flex-col items-end min-w-[80px]">
                  <div className="text-2xl md:text-3xl font-bold text-[#181028] leading-none">{event.dates}</div>
                  <div className="text-sm md:text-base text-[#181028]/80">{event.month}</div>
                  <div className="text-xs text-[#181028]/60">{event.year}</div>
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-bold mb-2">
                    <span className="bg-[#C6E045] px-2">{event.title}</span>
                  </div>
                  <div className="text-lg text-[#181028]">{event.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-[#2D174D]">Eligibility Criteria</h2>

          <div className="grid md:grid-cols-3 gap-12">
            {eligibility.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="rounded-2xl overflow-hidden mb-4 shadow-lg w-full">
                  <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                </div>
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#fdf6ea] flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto px-6"
        >
          <div className="text-5xl mb-6">&#10024;</div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D174D] mb-8 leading-tight">
            Join 500 teams building products that shape the country
          </h2>
          <button className="px-16 py-4 bg-black text-white rounded-xl text-xl font-semibold hover:bg-[#2D174D] transition-colors">
            Apply
          </button>
        </motion.div>
      </section>
    </main>
  );
}
