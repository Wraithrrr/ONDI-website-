// components/ResourcesPage.tsx
import { useState } from "react";
import { motion } from "motion/react";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import {
  FileText,
  BookOpen,
  Wrench,
  HelpCircle,
} from "lucide-react";
import { Search } from "lucide-react";
import { resources, ResourceCategory } from "./resources.data";
import { ResourceViewer } from "./ResourceViewer";

export function ResourcesPage() {
  // Calculate resource counts by category
  const getCategoryCount = (filterKey: ResourceCategory) => {
    return resources.filter((r) => r.category === filterKey).length;
  };

  // Add a filterKey so we can map to resource categories
  const resourceCategories = [
    {
      icon: FileText,
      title: "Policy Documents",
      description: "Access official policies, frameworks, and regulatory guidelines",
      count: getCategoryCount("Policy"),
      color: "#628B35",
      filterKey: "Policy" as const,
    },
    {
      icon: BookOpen,
      title: "Innovation Guides",
      description: "Comprehensive how-to manuals and best practices for the innoviation ecosystem",
      count: getCategoryCount("Guide"),
      color: "#EC9A29",
      filterKey: "Guide" as const,
    },
    {
      icon: Wrench,
      title: "Toolkits & Templates",
      description: "Ready-to-use pitch decks, business plans, and proposal templates",
      count: getCategoryCount("Toolkit"),
      color: "#284A26",
      filterKey: "Toolkit" as const,
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

  const faqs = [
    {
      question: "How do I apply for ONDI programs?",
      answer:
        'Visit the programs page, click “Learn More” on your desired program and then proceed to apply.',
    },
    {
      question: "What are the eligibility criteria for funding?",
      answer:
        "Eligibility varies by program, but generally includes being a registered Nigerian entity, having a working prototype, and demonstrating market potential.",
    },
   
    {
      question: "Is there a fee to join ONDI programs?",
      answer:
        "No, all ONDI programs are free to participants. We do not charge any fees for application or participation. However, certain programs have specific terms and conditions.",
    },
  ];

  // --- STATE FOR FILTERING ---
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Search + pagination state
  const [query, setQuery] = useState("");
  const [displayedCount, setDisplayedCount] = useState(5);

  const handleCategoryClick = (filterKey: string) => {
    // If same category clicked again → clear filter
    setActiveCategory((prev) => (prev === filterKey ? null : filterKey));
  };

  // Get filtered resources (by category)
  const filteredResources = activeCategory
    ? resources.filter((r) => r.category === activeCategory)
    : resources;

  // Apply search filter (title + description)
  const normalizedQuery = query.trim().toLowerCase();
  const searchedResources = normalizedQuery
    ? filteredResources.filter((r) =>
        (r.title + " " + r.description).toLowerCase().includes(normalizedQuery)
      )
    : filteredResources;

  // Only show first 5 items unless user clicks "Show more" (5 more per click)
  const VISIBLE_LIMIT = 5;
  const displayedResources = searchedResources.slice(0, displayedCount);

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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 max-w-5xl mx-auto">
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

        {/* Search bar */}
        <div className="max-w-3xl mx-auto mb-6">
          <label className="relative block">
            <span className="sr-only">Search resources</span>
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
              <Search className="w-4 h-4" />
            </span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="placeholder-gray-400 bg-white border border-gray-200 rounded-md py-3 pl-10 pr-4 w-full focus:outline-none focus:ring-1 focus:ring-[#628B35]"
              placeholder="Search resources by title or description..."
              aria-label="Search resources"
            />
          </label>
        </div>

        {activeCategory && activeCategory !== "FAQ" && (
          <div className="max-w-3xl mx-auto mb-8 p-6 bg-[#FFF9E6] border-l-4 border-[#E8B923] rounded-lg">
            <p className="text-center text-sm text-[#134C28] leading-relaxed">
              All ONDI resources are being developed in alignment with national digital economy policies and global best practices. This page will be updated as new tools and templates are approved for public release.
            </p>
          </div>
        )}

        {!activeCategory && (
          <p className="text-center text-xs md:text-sm text-[#628B35] mb-8">
            Browse key documents, templates and guides from the ONDI ecosystem.
          </p>
        )}

        {/* Display Filtered + Searched Resources (paginated) */}
        {searchedResources.length > 0 ? (
          <div className="max-w-5xl mx-auto mb-6">
            <div className="space-y-4">
              {displayedResources.map((resource, i) => (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  viewport={{ once: true }}
                >
                  <ResourceViewer
                    title={resource.title}
                    description={resource.description}
                    fileId={resource.fileId}
                  />
                </motion.div>
              ))}
            </div>

            {/* Show more / show less */}
            {searchedResources.length > VISIBLE_LIMIT && (
              <div className="mt-6 flex justify-center">
                <button
                  onClick={() => {
                    if (displayedCount >= searchedResources.length) {
                      setDisplayedCount(VISIBLE_LIMIT);
                    } else {
                      setDisplayedCount((c) => Math.min(c + VISIBLE_LIMIT, searchedResources.length));
                    }
                  }}
                  className="px-5 py-2 rounded-md bg-white border border-[#134C28] text-[#134C28] hover:bg-[#F4F8F1] transition"
                >
                  {displayedCount >= searchedResources.length
                    ? "Show Less"
                    : `Show More (${Math.min(VISIBLE_LIMIT, searchedResources.length - displayedCount)} more)`}
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="max-w-3xl mx-auto mb-20 p-6 bg-white border border-gray-200 rounded-lg text-center">
            <p className="text-[#628B35]">
              {activeCategory
                ? "No resources available in this category yet."
                : "No resources match your search."}
            </p>
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
