// components/ResourcesPage.tsx
import { useState } from "react";
import { motion } from "motion/react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import {
  FileText,
  Download,
  BookOpen,
  HelpCircle,
  Wrench,
  FileCheck,
} from "lucide-react";

export function ResourcesPage() {
  // Add a filterKey so we can map to resource categories
  const resourceCategories = [
    {
      icon: FileText,
      title: "Policy Documents",
      description: "Access official policies, frameworks, and regulatory guidelines",
      count: 12,
      color: "#628B35",
      filterKey: "Policy",
    },
    {
      icon: BookOpen,
      title: "Innovation Guides",
      description: "Comprehensive how-to manuals and best practices for startups",
      count: 28,
      color: "#EC9A29",
      filterKey: "Guide",
    },
    {
      icon: Wrench,
      title: "Toolkits & Templates",
      description: "Ready-to-use pitch decks, business plans, and proposal templates",
      count: 35,
      color: "#284A26",
      filterKey: "Toolkit",
    },/*
    {
      icon: HelpCircle,
      title: "FAQs",
      description: "Frequently asked questions about programs, funding, and support",
      count: 50,
      color: "#A52422",
      filterKey: "FAQ", // no direct mapping in featuredResources yet, but kept for future use
    },*/
  ];

  const featuredResources = [
    {
      id: 1,
      title: "Nigeria Startup Act 2025 - Complete Guide",
      type: "Policy Document",
      description:
        "Comprehensive overview of the NSA including benefits, eligibility criteria, and application process.",
      fileType: "PDF",
      fileSize: "2.5 MB",
      downloads: 12500,
      category: "Policy",
    },
    {
      id: 2,
      title: "Startup Pitch Deck Template",
      type: "Template",
      description:
        "Professional pitch deck template used by successful ONDI-supported startups to raise funding.",
      fileType: "PPTX",
      fileSize: "8.2 MB",
      downloads: 8900,
      category: "Toolkit",
    },
    {
      id: 3,
      title: "Blockchain Policy Framework 2025",
      type: "Policy Document",
      description:
        "Official framework for blockchain technology adoption and regulation in Nigeria.",
      fileType: "PDF",
      fileSize: "1.8 MB",
      downloads: 6200,
      category: "Policy",
    },
    {
      id: 4,
      title: "Fundraising Strategy Guide",
      type: "Guide",
      description:
        "Step-by-step guide to preparing for and executing successful fundraising campaigns.",
      fileType: "PDF",
      fileSize: "3.1 MB",
      downloads: 9800,
      category: "Guide",
    },
    {
      id: 5,
      title: "Business Plan Template 2025",
      type: "Template",
      description:
        "Comprehensive business plan template with financial projections and market analysis sections.",
      fileType: "DOCX",
      fileSize: "1.2 MB",
      downloads: 11200,
      category: "Toolkit",
    },
    {
      id: 6,
      title: "Investment Readiness Checklist",
      type: "Guide",
      description:
        "Essential checklist to ensure your startup is ready to approach investors.",
      fileType: "PDF",
      fileSize: "850 KB",
      downloads: 7500,
      category: "Guide",
    },
  ];

  const faqs = [
    {
      question: "How do I apply for ONDI programs?",
      answer:
        'Applications are submitted through our online portal. Visit the Opportunities section and click "Apply Now" on your desired program.',
    },
    {
      question: "What are the eligibility criteria for funding?",
      answer:
        "Eligibility varies by program, but generally includes being a registered Nigerian entity, having a working prototype, and demonstrating market potential.",
    },
    {
      question: "How long does the accelerator program last?",
      answer:
        "Our flagship accelerator program runs for 12 weeks, with additional 6-month post-program support.",
    },
    {
      question: "Is there a fee to join ONDI programs?",
      answer:
        "No, all ONDI programs are free to participants. We do not charge any fees for application or participation.",
    },
  ];

  // --- STATE FOR FILTERING + SHOW MORE ---
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const filteredResources =
    activeCategory && activeCategory !== "FAQ"
      ? featuredResources.filter((res) => res.category === activeCategory)
      : featuredResources;

  const VISIBLE_COUNT = 3;
  const visibleResources = showAll
    ? filteredResources
    : filteredResources.slice(0, VISIBLE_COUNT);

  const handleCategoryClick = (filterKey: string) => {
    // If same category clicked again → clear filter
    setShowAll(false);
    setActiveCategory((prev) => (prev === filterKey ? null : filterKey));
  };

  const handleShowMore = () => {
    setShowAll(true);
  };

  return (
    <section
      id="resources"
      className="pt-40 pb-24 px-6 bg-[#ECF3E6] min-h-screen"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#134C28]/10 border border-[#134C28]/20 mb-4">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#134C28] uppercase">
              Resources
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-[#134C28] mb-4">
            Essential Tools for Innovators
          </h1>

          <p className="max-w-3xl mx-auto text-[#628B35] text-lg leading-relaxed">
            Access official documents, toolkits, guides and templates designed to support
            Nigeria’s digital innovation ecosystem.
          </p>
        </motion.div>

        {/* Resource Categories – clickable for filtering */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {resourceCategories.map((category, i) => {
            const isActive = activeCategory === category.filterKey;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <button
                  type="button"
                  onClick={() => handleCategoryClick(category.filterKey)}
                  className="w-full text-left focus:outline-none"
                >
                  <Card
                    className={[
                      "p-6 text-center transition-all group border",
                      "bg-white hover:shadow-xl",
                      isActive
                        ? "border-[#134C28] ring-1 ring-[#134C28]/30 bg-[#F4F8F1]"
                        : "border-transparent",
                    ].join(" ")}
                  >
                    <div
                      className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: `${category.color}15` }}
                    >
                      <category.icon
                        className="w-8 h-8"
                        style={{ color: category.color }}
                      />
                    </div>

                    <h3 className="text-xl font-semibold text-[#134C28] mb-2">
                      {category.title}
                    </h3>

                    <p className="text-sm text-black mb-4">
                      {category.description}
                    </p>

                    <Badge
                      variant="outline"
                      style={{
                        borderColor: category.color,
                        color: category.color,
                      }}
                    >
                      {category.count} Resources
                    </Badge>

                    {isActive && (
                      <p className="mt-3 text-[11px] text-[#284A26] font-medium">
                        Filter applied – click again to reset
                      </p>
                    )}
                  </Card>
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Featured Resources – filtered + show more */}
        <h2 className="text-3xl font-bold text-[#134C28] text-center mb-3">
          Featured Resources
        </h2>

        {activeCategory && activeCategory !== "FAQ" && (
          <>
            {(activeCategory === "Toolkit" || activeCategory === "Guide") ? (
              <div className="max-w-3xl mx-auto mb-8 p-6 bg-[#FFF9E6] border-l-4 border-[#E8B923] rounded-lg">
                <p className="text-center text-sm text-[#134C28] leading-relaxed">
                  All ONDI resources are being developed in alignment with national digital economy policies and global best practices. This page will be updated as new tools and templates are approved for public release.
                </p>
              </div>
            ) : (
              <p className="text-center text-xs md:text-sm text-[#628B35] mb-8">
                Showing resources in{" "}
                <span className="font-semibold">
                  {
                    resourceCategories.find((c) => c.filterKey === activeCategory)
                      ?.title
                  }
                </span>{" "}
                category.
              </p>
            )}
          </>
        )}

        {!activeCategory && (
          <p className="text-center text-xs md:text-sm text-[#628B35] mb-8">
            Browse key documents, templates and guides from the ONDI ecosystem.
          </p>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {visibleResources.map((res, i) => (
            <motion.div
              key={res.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full bg-white hover:shadow-xl transition-shadow border border-[#E5E7EB]">
                {/* Top Row */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#ECF3E6]">
                    <FileCheck className="w-6 h-6 text-[#628B35]" />
                  </div>

                  <Badge
                    variant="outline"
                    style={{ borderColor: "#628B35", color: "#628B35" }}
                  >
                    {res.fileType}
                  </Badge>
                </div>

                {/* Type */}
                <p className="text-sm font-medium text-[#D4A520] mb-1">
                  {res.type}
                </p>

                {/* Title */}
                <h3 className="text-lg font-semibold text-[#134C28] mb-3">
                  {res.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-black mb-4">{res.description}</p>

                {/* File details */}
                <div className="flex items-center justify-between mb-4 text-sm text-[#628B35]">
                  <span>{res.fileSize}</span>
                  <span>{res.downloads.toLocaleString()} downloads</span>
                </div>

                {/* Download button */}
                <Button
                  className="w-full text-white hover:opacity-90"
                  style={{
                    backgroundColor: "#034524",
                    borderRadius: "10px",
                  }}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Show more button */}
        {filteredResources.length > VISIBLE_COUNT && !showAll && (
          <div className="flex justify-center mb-20">
            <Button
              variant="outline"
              onClick={handleShowMore}
              className="px-8 py-3 border-[#134C28] text-[#134C28] hover:bg-[#134C28] hover:text-white text-sm font-semibold rounded-lg"
            >
              Show more resources
            </Button>
          </div>
        )}

        {/* FAQ Section */}
        <h2 className="text-3xl font-bold text-[#134C28] text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 bg-white border-0">
                <div className="flex gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#ECF3E6" }}
                  >
                    <HelpCircle className="w-6 h-6 text-[#628B35]" />
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-[#134C28] mb-1">
                      {faq.question}
                    </h4>

                    <p className="text-[#628B35] text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
