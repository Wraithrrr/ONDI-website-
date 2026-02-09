// pages/programs/IHatchPage.tsx
import { motion } from "motion/react";
import {
  Check,
  Clock,
  ClipboardCheck,
  Handshake,
  Presentation,
  BookOpen,
  Users,
  Briefcase,
  ArrowLeft,
  DollarSign,
  Rocket,
  BriefcaseBusiness,
  MapPin,
  Building2,
  Globe,
  Target,
  Lightbulb,
  TrendingUp,
  Network,
} from "lucide-react";
import { useState } from "react";

interface Startup {
  name: string;
  industry: string;
  topPick?: boolean;
}

interface Hub {
  name: string;
  location: string;
}

interface Cohort {
  id: number;
  name: string;
  startups: number;
  fundingSecured: string;
  marketReadyProducts: number;
  jobsCreated: string;
  description: string;
  startupsList: Startup[];
  hubsList?: Hub[];
}

// Cohort data with sorted startups and hubs
const cohorts: Cohort[] = [
  {
    id: 3,
    name: "Cohort 3",
    startups: 39,
    fundingSecured: "$37K",
    marketReadyProducts: 3,
    jobsCreated: "20+",
    description:
      "Cohort 3 brought together 39 promising startups across the six geo-political zones focusing on innovative solutions, resulting in funding for the top 3 startups.",
    startupsList: [
      { name: "Connected", industry: "AI & Machine Learning", topPick: true },
      {
        name: "Dopals Technologies",
        industry: "Mobility & Logistics",
        topPick: true,
      },
      { name: "Northino", industry: "EdTech", topPick: true },
    ],
  },
  {
    id: 4,
    name: "Cohort 4",
    startups: 160,
    fundingSecured: "$37K",
    marketReadyProducts: 5,
    jobsCreated: "500+",
    description:
      "iHatch Cohort 4 was designed around a two-stage, ecosystem-strengthening approach that first built up innovation hubs and then supported the startups that operate through those hubs. At its core, the programme didn't just train founders — it trained and equipped the enablers around them",
    startupsList: [
      { name: "Ahioma", industry: "E-commerce, AgriTech", topPick: true },
      { name: "Chapta", industry: "EdTech", topPick: true },
      { name: "Cohortly App", industry: "EdTech", topPick: true },
      {
        name: "EasyBuy4me",
        industry: "E-commerce, Logistics & Mobility",
        topPick: true,
      },
      { name: "Eventro", industry: "Outsourcing & IT Services", topPick: true },
      {
        name: "Ficore Africa",
        industry: "E-commerce, Fintech, EdTech",
        topPick: true,
      },
      { name: "Garden in a Box Africa", industry: "AgriTech", topPick: true },
      { name: "Grabb 24/7", industry: "AgriTech", topPick: true },
      {
        name: "Interface Innovations Ltd",
        industry: "Fintech, CleanTech & EnergyTech",
        topPick: true,
      },
      { name: "Linia Finance", industry: "FinTech", topPick: true },
      { name: "PPTLinks", industry: "EdTech", topPick: true },
      {
        name: "Softdrop",
        industry: "Fintech, Logistics & Mobility",
        topPick: true,
      },
    ],
    hubsList: [
      { name: "02 INNOVATIONS LAB", location: "Nasarawa" },
      { name: "AHLAM IT AND NETWORK SOLUTION", location: "Yobe" },
      { name: "AIKPEROKHA", location: "Kogi" },
      { name: "AlphaZone Tech Hub Ltd", location: "Ebonyi" },
      { name: "BENSAN TECHNOLOGY", location: "Bayelsa" },
      {
        name: "Center-ECD (African Center for Enterprise & Capacity Development)",
        location: "Edo",
      },
      { name: "CIATECH Africa", location: "Borno" },
      {
        name: "Climate Emerge Innovation Development Hub (CEID Hub)",
        location: "Oyo",
      },
      { name: "Codeant Technology Hub", location: "Imo" },
      { name: "Coriftech Solutions Hub", location: "Delta" },
      { name: "Cypherdevs", location: "Kwara" },
      { name: "FutureLabs", location: "Akwa Ibom" },
      { name: "Grazac Innovation Hub (Grazac Technologies)", location: "Ogun" },
      { name: "Guru Innovation Hub", location: "Cross River" },
      {
        name: "Ikwaire Computing Services and Academy Limited",
        location: "Kebbi",
      },
      { name: "Innovation Growth Hub (IgHub) Onitsha", location: "Anambra" },
      { name: "Innovate Ondo", location: "Ondo" },
      { name: "Insest Tech", location: "Ekiti" },
      { name: "IT Central Kaduna", location: "Kaduna" },
      { name: "KIRKIRA INNOVATION HUB", location: "Katsina" },
      { name: "Knots Technology Nig Ltd", location: "Taraba" },
      { name: "Labspace By JD Lab", location: "Niger" },
      { name: "Mindztech Hub", location: "Gombe" },
      {
        name: "Moolu Venture Lab (Moolu Ventures Limited)",
        location: "FCT Abuja",
      },
      { name: "nHub", location: "Plateau" },
      { name: "NorthDemy Limited", location: "Jigawa" },
      { name: "Olotu Square", location: "Rivers" },
      { name: "RAD5 Tech Hub", location: "Abia" },
      { name: "Rural Information Technology Hub (RITH3)", location: "Adamawa" },
      { name: "Sparks Ventures Hub", location: "Enugu" },
      { name: "Startup Kano", location: "Kano" },
      { name: "Startup Sokoto", location: "Sokoto" },
      { name: "Startup Zamfara", location: "Zamfara" },
      { name: "Uplift Hub", location: "Bauchi" },
      { name: "WeGoHostU ICT Hub", location: "Osun" },
      { name: "Wennovation Hub", location: "Lagos" },
      { name: "Zevsj Limited", location: "Benue" },
    ],
  },
];

const programStructure = [
  {
    icon: ClipboardCheck,
    title: "Call for Applications",
    description:
      "Open call for innovation hubs and startups across all 36 states and FCT",
  },
  {
    icon: Users,
    title: "Hub Onboarding",
    description:
      "Training and certification of innovation hubs including assessment at the tiered ranking",
  },
  {
    icon: Clock,
    title: "Startup Incubation",
    description:
      "MVP development, legal incorporation, market validation and sector-specific training",
  },
  {
    icon: Handshake,
    title: "Mentorship & Monitoring",
    description:
      "Expert mentorship, hub coaching, real-time tracking and performance monitoring",
  },
  {
    icon: Presentation,
    title: "Demo Day & Scale",
    description:
      "Regional and national demo days,investor engagement and post-programme support",
  },
];

const whoCanApply = [
  "Early-stage Startups",
  "Innovative Entrepreneurs",
  "Hub Managers Ready to Upskill",
];

const whatYouGain = [
  {
    icon: BookOpen,
    title: "Hands-On Training",
    description: "Business & Skills Workshops",
  },
  {
    icon: Users,
    title: "Mentorship & Networking",
    description: "Guidance from Industry Experts",
  },
  {
    icon: Briefcase,
    title: "Access to Resources",
    description: "Funding & Market Opportunities",
  },
];

// Nationwide Impact Data
const impactMetrics = [
  {
    icon: Target,
    number: "200+",
    label: "Startups Supported",
    description: "Across multiple cohorts",
  },
  {
    icon: Building2,
    number: "37",
    label: "Innovation Hubs",
    description: "Nationwide network trained",
  },
  {
    icon: BriefcaseBusiness,
    number: "1,000+",
    label: "Direct Jobs Created",
    description: "With thousands more indirect",
  },
  {
    icon: TrendingUp,
    number: "100+",
    label: "Market-Ready MVPs",
    description: "Ready for market deployment",
  },
];

// Focus Areas Data
const focusAreas = [
  {
    title: "FinTech",
    icon: DollarSign,
    description:
      "Financial technology solutions for banking, lending, and payments",
  },
  {
    title: "AgriTech",
    icon: Rocket,
    description: "Agricultural innovation for productivity and market access",
  },
  {
    title: "HealthTech",
    icon: Users,
    description: "Digital health solutions and telemedicine platforms",
  },
  {
    title: "EdTech",
    icon: BookOpen,
    description: "Educational technology and digital learning solutions",
  },
  {
    title: "CleanTech",
    icon: Lightbulb,
    description: "Environmental and sustainable energy solutions",
  },
  {
    title: "Logistics & Security",
    icon: Target,
    description: "Civic technology and security innovation",
  },
];

// Ecosystem Building Pillars
const ecosystemPillars = [
  {
    icon: TrendingUp,
    title: "Regional Innovation Capacity",
    description:
      "Strengthens innovation hub infrastructure and capabilities across all geo-political zones",
  },
  {
    icon: Globe,
    title: "Inclusive Participation",
    description:
      "Promotes participation across underserved areas with targeted support and resources",
  },
  {
    icon: Network,
    title: "Cross-Sector Collaboration",
    description:
      "Encourages collaboration between startups, hubs, government, investors, and partners",
  },
  {
    icon: Building2,
    title: "Long-term Sustainability",
    description:
      "Lays foundation for ecosystem sustainability beyond the programme cycle",
  },
];

export function IHatchPage() {
  const [selectedCohort, setSelectedCohort] = useState<number | null>(null);
  const [industryFilter, setIndustryFilter] = useState<string>("All");
  const [startupFilter, setStartupFilter] = useState<
    "All" | "Top 3" | "Top 12"
  >("All");

  const currentCohort = cohorts.find((c) => c.id === selectedCohort);

  // Get unique industries for filter
  const industries = [
    "All",
    ...new Set(cohorts.flatMap((c) => c.startupsList.map((s) => s.industry))),
  ];

  // Filter startups by industry and top pick status
  let filteredStartups =
    currentCohort?.startupsList.filter(
      (s) => industryFilter === "All" || s.industry === industryFilter,
    ) || [];

  // Apply top pick filter
  if (startupFilter === "Top 3") {
    filteredStartups = filteredStartups
      .filter((s: Startup) => s.topPick)
      .slice(0, 3);
  } else if (startupFilter === "Top 12") {
    filteredStartups = filteredStartups
      .filter((s: Startup) => s.topPick)
      .slice(0, 12);
  }

  // Cohort Detail View
  if (selectedCohort && currentCohort) {
    return (
      <main className="bg-white min-h-screen">
        {/* Cohort Hero */}
        <section className="bg-[#134C28] text-white py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-6">
            <button
              onClick={() => setSelectedCohort(null)}
              className="flex items-center gap-2 text-gray-300 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to All Cohorts
            </button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
                {currentCohort.name}
              </h1>
              <p className="text-[#D4A74A] font-semibold text-lg mb-4">
                {currentCohort.startups} Startups Graduated
              </p>
              <p className="text-gray-300 max-w-2xl">
                {currentCohort.description}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Cohort Highlights */}
        <section className="py-12 bg-[#F5F5F5]">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-[#134C28] text-center mb-8">
              Cohort Highlights
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-6 flex items-center gap-4 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-[#134C28]/10 rounded-xl flex items-center justify-center">
                  <DollarSign className="w-7 h-7 text-[#134C28]" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#134C28]">
                    {currentCohort.fundingSecured}
                  </p>
                  <p className="text-gray-600 text-sm">Funding Secured</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-2xl p-6 flex items-center gap-4 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-[#134C28]/10 rounded-xl flex items-center justify-center">
                  <Rocket className="w-7 h-7 text-[#134C28]" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#134C28]">
                    {currentCohort.marketReadyProducts}
                  </p>
                  <p className="text-gray-600 text-sm">Market-Ready Products</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-2xl p-6 flex items-center gap-4 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-[#134C28]/10 rounded-xl flex items-center justify-center">
                  <BriefcaseBusiness className="w-7 h-7 text-[#134C28]" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#134C28]">
                    {currentCohort.jobsCreated}
                  </p>
                  <p className="text-gray-600 text-sm">Jobs Created</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Startups Grid */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
              <h2 className="text-2xl font-bold text-[#134C28]">
                Innovative Startups from {currentCohort.name}
              </h2>
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-gray-600 text-sm">Filter:</span>
                <select
                  value={startupFilter}
                  onChange={(e) =>
                    setStartupFilter(
                      e.target.value as "All" | "Top 3" | "Top 12",
                    )
                  }
                  className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-[#134C28] font-medium focus:outline-none focus:ring-2 focus:ring-[#134C28]"
                >
                  <option value="All">All Startups</option>
                  <option value="Top 3">Top 3</option>
                  <option value="Top 12">Top 12</option>
                </select>
                <select
                  value={industryFilter}
                  onChange={(e) => setIndustryFilter(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-[#134C28] font-medium focus:outline-none focus:ring-2 focus:ring-[#134C28]"
                >
                  {industries.map((industry) => (
                    <option key={industry} value={industry}>
                      {industry}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredStartups.map((startup, index) => (
                <motion.div
                  key={startup.name}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03 }}
                  className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-all cursor-pointer"
                >
                  <div className="w-10 h-10 bg-[#134C28]/10 rounded-lg flex items-center justify-center mb-3">
                    <span className="text-[#134C28] font-bold">
                      {startup.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-[#134C28] mb-1">
                    {startup.name}
                  </h3>
                  <p className="text-xs text-[#D4A74A] font-medium">
                    {startup.industry}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Hub Managers Section - Only for Cohort 4 */}
        {currentCohort.id === 4 && "hubsList" in currentCohort && (
          <section className="py-12 bg-[#F5F5F5]">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-[#134C28] mb-2">
                    Partner Innovation Hubs
                  </h2>
                  <p className="text-gray-600">
                    37 Innovation Hubs across all 36 states and FCT
                  </p>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200">
                  <Building2 className="w-5 h-5 text-[#134C28]" />
                  <span className="text-[#134C28] font-semibold">37 Hubs</span>
                </div>
              </div>

              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                {(
                  currentCohort as typeof currentCohort & {
                    hubsList: Array<{ name: string; location: string }>;
                  }
                ).hubsList.map((hub, index) => (
                  <motion.div
                    key={hub.name}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.02 }}
                    className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg hover:border-[#134C28] transition-all cursor-pointer"
                  >
                    <h3 className="text-sm font-bold text-[#134C28] mb-2 line-clamp-2">
                      {hub.name}
                    </h3>
                    <div className="flex items-center gap-1 text-gray-500">
                      <MapPin className="w-3 h-3" />
                      <span className="text-xs">{hub.location}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-16 bg-[#134C28]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Join the Next iHatch Cohort
            </h2>
            <p className="text-gray-300 mb-8">
              Apply now and take your startup to the next level!
            </p>
            <a
              href="https://ihatch.spurt.tools/job/ihatch-cohort-4-startup-support-programme"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#D4A74A] hover:bg-[#c49a3d] text-white font-semibold rounded-full transition-colors"
            >
              Apply for iHatch
            </a>
          </div>
        </section>
      </main>
    );
  }

  // Main iHatch Page
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#134C28] via-[#1a5f33] to-[#134C28] text-white py-20 md:py-32 relative overflow-hidden">
        {/* Animated Background Design - Startup Ecosystem */}
        <svg
          className="absolute inset-0 w-full h-full opacity-15 pointer-events-none"
          preserveAspectRatio="none"
          viewBox="0 0 1200 800"
        >
          <defs>
            <linearGradient
              id="growth-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "#D4A74A", stopOpacity: 0.3 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#ffffff", stopOpacity: 0.1 }}
              />
            </linearGradient>
          </defs>
          {/* Interconnected nodes representing ecosystem */}
          <g opacity="0.4">
            {/* Node circles */}
            <circle
              cx="150"
              cy="200"
              r="40"
              stroke="#D4A74A"
              strokeWidth="2"
              fill="none"
            />
            <circle
              cx="400"
              cy="150"
              r="35"
              stroke="#ffffff"
              strokeWidth="2"
              fill="none"
            />
            <circle
              cx="650"
              cy="250"
              r="38"
              stroke="#D4A74A"
              strokeWidth="2"
              fill="none"
            />
            <circle
              cx="900"
              cy="180"
              r="36"
              stroke="#ffffff"
              strokeWidth="2"
              fill="none"
            />
            <circle
              cx="1050"
              cy="350"
              r="32"
              stroke="#D4A74A"
              strokeWidth="2"
              fill="none"
            />
            <circle
              cx="300"
              cy="500"
              r="40"
              stroke="#ffffff"
              strokeWidth="2"
              fill="none"
            />
            <circle
              cx="750"
              cy="550"
              r="38"
              stroke="#D4A74A"
              strokeWidth="2"
              fill="none"
            />

            {/* Connection lines */}
            <line
              x1="150"
              y1="200"
              x2="400"
              y2="150"
              stroke="#D4A74A"
              strokeWidth="1.5"
              opacity="0.5"
            />
            <line
              x1="400"
              y1="150"
              x2="650"
              y2="250"
              stroke="#ffffff"
              strokeWidth="1.5"
              opacity="0.5"
            />
            <line
              x1="650"
              y1="250"
              x2="900"
              y2="180"
              stroke="#D4A74A"
              strokeWidth="1.5"
              opacity="0.5"
            />
            <line
              x1="900"
              y1="180"
              x2="1050"
              y2="350"
              stroke="#ffffff"
              strokeWidth="1.5"
              opacity="0.5"
            />
            <line
              x1="650"
              y1="250"
              x2="300"
              y2="500"
              stroke="#D4A74A"
              strokeWidth="1.5"
              opacity="0.5"
            />
            <line
              x1="650"
              y1="250"
              x2="750"
              y2="550"
              stroke="#ffffff"
              strokeWidth="1.5"
              opacity="0.5"
            />
            <line
              x1="150"
              y1="200"
              x2="300"
              y2="500"
              stroke="#ffffff"
              strokeWidth="1.5"
              opacity="0.3"
            />
          </g>

          {/* Growth trajectory lines */}
          <g opacity="0.3">
            <path
              d="M 100 700 Q 300 550 500 400 T 900 200"
              stroke="#D4A74A"
              strokeWidth="2"
              fill="none"
              strokeDasharray="5,5"
            />
            <path
              d="M 200 650 Q 400 500 600 350 T 1000 150"
              stroke="#ffffff"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="5,5"
            />
          </g>

          {/* Upward arrow shape representing growth */}
          <g opacity="0.2">
            <polygon points="600,750 550,650 650,650" fill="#D4A74A" />
            <line
              x1="600"
              y1="750"
              x2="600"
              y2="550"
              stroke="#D4A74A"
              strokeWidth="2"
            />
          </g>
        </svg>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-4 inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <span className="text-sm font-semibold text-[#D4A74A] uppercase tracking-wide">
                  Nationwide Incubation
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Empower Startups, Build Ecosystems
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                iHatch is Nigeria's first truly nationwide incubation programme,
                operating across all 36 states and the FCT. We support
                early-stage startups with mentorship, resources, and access to
                innovation hubs for sustainable growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://ihatch.spurt.tools/job/ihatch-cohort-4-startup-support-programme"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 bg-[#D4A74A] hover:bg-[#c49a3d] text-white font-semibold rounded-full transition-colors"
                >
                  Apply for iHatch
                </a>
                <button
                  onClick={() =>
                    document
                      .getElementById("past-cohorts")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
                >
                  View Past Cohorts
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden md:flex justify-center relative"
            >
              {/* Animated concept illustration */}
              <svg
                width="100%"
                height="400"
                viewBox="0 0 400 400"
                className="drop-shadow-2xl"
              >
                <defs>
                  <linearGradient
                    id="card-gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: "#D4A74A", stopOpacity: 0.2 }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "#ffffff", stopOpacity: 0.1 }}
                    />
                  </linearGradient>
                </defs>

                {/* Central hub circle */}
                <circle
                  cx="200"
                  cy="200"
                  r="80"
                  fill="#D4A74A"
                  opacity="0.15"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="70"
                  fill="none"
                  stroke="#D4A74A"
                  strokeWidth="2"
                />
                <text
                  x="200"
                  y="210"
                  textAnchor="middle"
                  className="text-lg font-bold fill-white"
                >
                  iHatch
                </text>

                {/* Surrounding startup nodes */}
                <g opacity="0.8">
                  {/* Top startup */}
                  <circle
                    cx="200"
                    cy="80"
                    r="35"
                    fill="#D4A74A"
                    opacity="0.2"
                    stroke="#D4A74A"
                    strokeWidth="2"
                  />
                  <text
                    x="200"
                    y="90"
                    textAnchor="middle"
                    className="text-xs fill-white font-semibold"
                  >
                    Startup
                  </text>

                  {/* Right startup */}
                  <circle
                    cx="310"
                    cy="200"
                    r="35"
                    fill="#D4A74A"
                    opacity="0.2"
                    stroke="#D4A74A"
                    strokeWidth="2"
                  />
                  <text
                    x="310"
                    y="210"
                    textAnchor="middle"
                    className="text-xs fill-white font-semibold"
                  >
                    Startup
                  </text>

                  {/* Bottom startup */}
                  <circle
                    cx="200"
                    cy="320"
                    r="35"
                    fill="#D4A74A"
                    opacity="0.2"
                    stroke="#D4A74A"
                    strokeWidth="2"
                  />
                  <text
                    x="200"
                    y="330"
                    textAnchor="middle"
                    className="text-xs fill-white font-semibold"
                  >
                    Startup
                  </text>

                  {/* Left startup */}
                  <circle
                    cx="90"
                    cy="200"
                    r="35"
                    fill="#D4A74A"
                    opacity="0.2"
                    stroke="#D4A74A"
                    strokeWidth="2"
                  />
                  <text
                    x="90"
                    y="210"
                    textAnchor="middle"
                    className="text-xs fill-white font-semibold"
                  >
                    Startup
                  </text>
                </g>

                {/* Connection lines */}
                <line
                  x1="200"
                  y1="150"
                  x2="200"
                  y2="115"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  opacity="0.5"
                  strokeDasharray="3,3"
                />
                <line
                  x1="265"
                  y1="235"
                  x2="305"
                  y2="215"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  opacity="0.5"
                  strokeDasharray="3,3"
                />
                <line
                  x1="200"
                  y1="270"
                  x2="200"
                  y2="305"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  opacity="0.5"
                  strokeDasharray="3,3"
                />
                <line
                  x1="135"
                  y1="165"
                  x2="95"
                  y2="185"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  opacity="0.5"
                  strokeDasharray="3,3"
                />
              </svg>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#134C28] mb-6">
              About the iHatch Program
            </h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed text-justified ">
              iHatch is Nigeria’s first truly nationwide incubation programme,
              operating across all 36 states and the FCT through a
              decentralised, hub-first model.Rather than focusing only on
              startups, iHatch strengthens the ecosystems around
              founders—training innovation hubs to become long-term engines of
              startup growth within their regions. This dual-track approach
              ensures that startups receive ongoing support during and after the
              programme.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Program Structure Section */}
      <section className="py-16 md:py-24 bg-[#134C28]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Program Structure & Duration
            </h2>
            <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
              A dual-track incubation programme delivered through certified
              innovation hubs nationwide.
            </p>
          </motion.div>

          {/* Timeline cards with connecting line */}
          <div className="relative">
            {/* Connecting dotted line */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4A74A] to-transparent opacity-40" />
            <svg
              className="hidden md:block absolute top-20 left-0 right-0 w-full h-12 pointer-events-none"
              preserveAspectRatio="none"
            >
              <defs>
                <pattern
                  id="dots"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="10" cy="10" r="2" fill="#D4A74A" opacity="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="20" fill="url(#dots)" />
            </svg>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-2 relative z-10">
              {programStructure.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all group"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-[#134C28]/10 rounded-xl flex items-center justify-center group-hover:bg-[#D4A74A]/20 transition-colors">
                    <item.icon className="w-8 h-8 text-[#134C28]" />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-[#D4A74A] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Program Duration Info Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 md:mt-16 mx-auto max-w-md"
            >
              <div className="bg-white rounded-full px-8 py-5 shadow-lg text-center border-2 border-[#D4A74A]">
                <p className="text-lg md:text-xl font-bold text-[#134C28] mb-1">
                  Total Programme Duration: 10 Months
                </p>
                <p className="text-sm md:text-base text-gray-600">
                  (5 months hub training + 5 months startup incubation)
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nationwide Impact Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4 px-4 py-2 bg-[#134C28]/10 rounded-full">
              <span className="text-sm font-semibold text-[#134C28] uppercase tracking-wide">
                Impact & Achievement
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Nationwide Impact Since Inception
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              iHatch has consistently delivered measurable results, supporting
              innovation across Nigeria's diverse regions and creating
              sustainable economic opportunities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#134C28] hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-[#134C28]/10 flex items-center justify-center mb-6 group-hover:bg-[#134C28]/20 transition-colors">
                  <metric.icon className="w-7 h-7 text-[#134C28]" />
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-[#134C28] mb-2">
                  {metric.number}
                </h3>
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  {metric.label}
                </p>
                <p className="text-sm text-gray-600">{metric.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-r from-[#134C28] to-[#1a5f33] rounded-2xl p-8 md:p-12 text-white shadow-xl"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  Our Contribution to Nigeria's Growth
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 flex-shrink-0 mt-1" />
                    <span className="text-base md:text-lg">
                      Development of market-ready MVPs ready for investment
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 flex-shrink-0 mt-1" />
                    <span className="text-base md:text-lg">
                      Access to equity-free grants and investment opportunities
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 flex-shrink-0 mt-1" />
                    <span className="text-base md:text-lg">
                      Local and international market exposure for startups
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-6 h-6 flex-shrink-0 mt-1" />
                    <span className="text-base md:text-lg">
                      Direct employment and economic multiplication effects
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <p className="text-lg mb-6 leading-relaxed">
                  <span className="text-3xl font-bold">Cohort 5</span> builds on
                  these results with:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#D4A74A]" />
                    <span>Stronger monitoring and evaluation frameworks</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#D4A74A]" />
                    <span>Improved cross-hub coordination mechanisms</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#D4A74A]" />
                    <span>Sector-focused support for deeper impact</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who Can Apply Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#134C28]">
              Who Can Apply?
            </h2>
            <div className="space-y-4 max-w-md mx-auto">
              {whoCanApply.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3 text-left"
                >
                  <div className="w-6 h-6 rounded-full bg-[#134C28] flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 text-base md:text-lg">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4 px-4 py-2 bg-[#134C28]/10 rounded-full">
              <span className="text-sm font-semibold text-[#134C28] uppercase tracking-wide">
                Strategic Sectors
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Priority Focus Areas
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              iHatch supports startups building solutions with strong local
              relevance and global potential across key sectors driving
              Nigeria's development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {focusAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ scale: 1.05, y: -8 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#134C28] hover:shadow-xl transition-all group"
              >
                <div className="w-16 h-16 rounded-xl bg-[#134C28]/10 flex items-center justify-center mb-6 group-hover:bg-[#134C28]/20 transition-all">
                  <area.icon className="w-8 h-8 text-[#134C28]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {area.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Gain Section */}
      <section className="py-16 md:py-20 bg-[#134C28]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Program Benefits
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {whatYouGain.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-lg"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-[#134C28]/10 rounded-xl flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-[#134C28]" />
                </div>
                <h3 className="text-lg font-bold text-[#134C28] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Building Sustainable Ecosystems Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4 px-4 py-2 bg-[#134C28]/10 rounded-full">
              <span className="text-sm font-semibold text-[#134C28] uppercase tracking-wide">
                Ecosystem Development
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Building Sustainable Innovation Ecosystems
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Through our hub-first approach, iHatch creates the foundational
              infrastructure for long-term, self-sustaining innovation
              ecosystems across Nigeria.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {ecosystemPillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-[#134C28] hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-[#134C28]/10 flex items-center justify-center mb-6 group-hover:bg-[#134C28]/20 transition-colors">
                  <pillar.icon className="w-7 h-7 text-[#134C28]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-r from-[#134C28]/5 to-[#1a5f33]/5 rounded-2xl border border-[#134C28]/20 p-8 md:p-12"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#134C28] flex items-center justify-center flex-shrink-0">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  The Hub-First Approach
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  By prioritizing innovation hub strengthening, iHatch creates
                  multiplier effects where hub capacity building directly
                  translates to better support for dozens of startups. This
                  approach ensures that ecosystem infrastructure remains even
                  after programme completion, enabling continuous innovation and
                  entrepreneurship at scale across all regions of Nigeria.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Past Cohorts Section */}
      <section id="past-cohorts" className="py-16 md:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#134C28]">
              Our Past Cohorts
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {cohorts.map((cohort, index) => (
              <motion.div
                key={cohort.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#134C28] rounded-2xl p-6 text-center cursor-pointer hover:bg-[#1a5f33] transition-all shadow-lg hover:shadow-2xl"
                onClick={() => setSelectedCohort(cohort.id)}
              >
                <p className="text-[#D4A74A] font-semibold mb-4">
                  {cohort.startups} Startups Graduated
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {cohort.startupsList.slice(0, 6).map((startup) => (
                    <motion.div
                      key={startup.name}
                      whileHover={{ y: -3 }}
                      className="bg-white rounded-lg p-2 h-12 flex items-center justify-center"
                    >
                      <span className="text-xs font-semibold text-[#134C28] truncate px-1">
                        {startup.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
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
              Ready to Launch Your Startup Journey?
            </h2>
            <p className="text-gray-200 mb-8">
              Apply now and join the iHatch program today!
            </p>
            <a
              href="https://ihatch.spurt.tools/job/ihatch-cohort-4-startup-support-programme"
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
