// data/resources.data.ts
export type ResourceCategory = "Policy" | "Guide" | "Toolkit";

export interface Resource {
  id: string;
  title: string;
  description: string;
  category: ResourceCategory;
  fileId: string; // Google Drive FILE_ID
}

export const resources: Resource[] = [
  {
    id: "policy-1",
    title: "BROADBAND ACCESS FOR ALL:Deepening Nigeria’sNational Backbone and Middle Mile Infrastructure",    description: "Strategic framework for expanding broadband infrastructure across Nigeria's backbone and middle-mile networks.",    category: "Policy",
    fileId: "17BskxKsd-1cSNveHYZExTIotXtYQukH3",
  },
  {
    id: "policy-2",
    title: "IMPLEMENTING PUBLIC SECTOR PROJECTS FOR COLLECTIVE PROSPERITY",
    description: "Policy on implementing public sector initiatives to drive collective development and prosperity.",
    category: "Policy",
    fileId: "1bqBgIrB3DthUrn81nbAWYgIPiciLk_rf",
  },
    {
    id: "policy-3",
    title: "NATIONAL BLOCKCHAIN POLICY FOR NIGERIA",
    description: "Policy framework governing blockchain technology adoption and regulation in Nigeria.",
    category: "Policy",
    fileId: "1oSndPpU8E2kgSq6Fob5em_awtKMSlBHJ/",
  },
    {
    id: "policy-4",
    title: "NATIONAL DIGITAL ECONOMY AND E-GOVERNANCE BILL, 2024",
    description: "Legislative bill promoting digital economy growth and e-governance service delivery in Nigeria.",
    category: "Policy",
    fileId: "1hXFHhzDbCa09Nd5WYsE8R7T6FiGnWsWa",
  },
    {
    id: "policy-5",
    title: "NATIONAL ARTIFICIAL INTELLIGENCE STRATEGY",
    description: "Strategic roadmap for AI development, adoption, and regulation across Nigeria's economy.",
    category: "Policy",
    fileId: "1_COTbUlG_mQUN2BkapUMbg7ehjLXZx2T",
  },
    {
    id: "policy-6",
    title: "NATIONAL POLICY ON 5G NETWORKS FOR NIGERIA'S DIGITAL ECONOMY",
    description: "Policy framework for 5G network deployment and integration into Nigeria's digital economy.",
    category: "Policy",
    fileId: "1ATZsfw1MMsG9qQXUQwpVEzHJ5yMwmd85",
  },
    {
    id: "policy-7",
    title: "NATIONAL E-COMMERCE POLICY AND STRATEGY (NEPS)",
    description: "Comprehensive strategy for promoting e-commerce growth and digital trade in Nigeria.",
    category: "Policy",
    fileId: "1svunRZGvGQY-Iz6yxnaX_fvPgMMMnCl2",
  },
    {
    id: "policy-8",
    title: "NIGERIA STARTUP ACT 2022",
    description: "Legislation providing tax incentives, regulatory support, and ecosystem development for Nigerian startups.",
    category: "Policy",
    fileId: "1UsHgJGoxbllmKioP3_vloVxq4BDitzhy",
  },
    {
    id: "policy-9",
    title: "NITDA LOCAL CONTENT GUIDELINES",
    description: "Guidelines promoting local content development and technology capability building in Nigeria.",
    category: "Policy",
    fileId: "1TWHn0YnLEaQZGRn_VCfkSIbAz24FXPr2",
  },
    {
    id: "policy-10",
    title: "TRANSFORMING PUBLIC SERVICES IN NIGERIA: The Case for Centralised Digital Public Infrastructure",
    description: "Strategic analysis of centralizing digital public infrastructure to improve service delivery across Nigeria.",
    category: "Policy",
    fileId: "1OLiI6yAp03_uhp7i26oNJdtIf_OZ3n5o",
  },

  /////tOOL KITS///////
  {
    id: "toolkit-1",
    title: "CUSTOMER DISCOVERY & SEGMENTATION ",
    description: "Framework for discovering and segmenting target customers to refine product-market fit and messaging.",
    category: "Toolkit",
    fileId: "1nKms_c--jA-ivKDFDClW3qNsTYN-VlD7",
  },
   {
    id: "toolkit-2",
    title: "THE ARCHITCTURE OF AMBITION",
    description: "Strategic blueprint for building ambitious, scalable startups with sustainable growth foundations.",
    category: "Toolkit",
    fileId: "18usqodFdu7IYFhDhRiCO8pfPxr2N3FC8",
  },
   {
    id: "toolkit-3",
    title: "HOW TO DESIGN A PITCH DECK",
    description: "Step-by-step guide to creating compelling investor pitch decks that effectively communicate your vision.",
    category: "Toolkit",
    fileId: "1yT3VgFLrNVBOZGDPnWwUIKRmOojOhtjC",
  },
   {
    id: "toolkit-4",
    title: "HUB'S VALUE PROPOSITION TEMPLATES",
    description: "Ready-to-use templates for defining and communicating your startup's unique value proposition effectively.",
    category: "Toolkit",
    fileId: "16inwDvnLWG_hRhja-_y78BkZqFqFXiHoE7kwHj-f8uY",
  },
   {
    id: "toolkit-5",
    title: "HUMAN-CENTERED DESIGN: From User Insights to MVP",
    description: "Methodology for incorporating user research and insights into building viable products that solve real problems.",
    category: "Toolkit",
    fileId: "1WMw6iZ8Xcfk0x1W_E-7WX78E9RgZkYYw",
  },
   {
    id: "toolkit-6",
    title: "INCORPORATION AND INTELLECTUAL PROPERTY PROTECTION",
    description: "Guide to establishing your startup's legal structure and protecting your intellectual property rights.",
    category: "Toolkit",
    fileId: "14GMFyBfuEKieoebuxlyqM3xIRxrY7gx6",
  },
   {
    id: "toolkit-7",
    title: "FUNDRAISING STRATEGIES & INVESTMENT READINESS",
    description: "Comprehensive strategies and frameworks for preparing your startup for investment and successful fundraising.",
    category: "Toolkit",
    fileId: "1yAeqnsG3IMWVxCd-dPJYNjKG6h_SHzqH",
  },
   {
    id: "toolkit-8",
    title: "MONITORING & EVALUATION STRATEGIES FOR TECH STARTUPS",
    description: "Framework for tracking, measuring, and evaluating startup performance, impact, and metrics that matter.",
    category: "Toolkit",
    fileId: "1nLM2UXcib86jHIZ9Msxwct96-AS7vruw3cs_hIZ8tPE",
  },
   {
    id: "toolkit-9",
    title: "PROBLEM DISCOVERY & OPPORTUNITY IDENTIFICATION FRAMEWORKS",
    description: "Structured frameworks for discovering market problems and identifying high-potential business opportunities.",
    category: "Toolkit",
    fileId: "1l7FssQrcciuIYEcf6UbGGfuaVElABB6f",
  },
   {
    id: "toolkit-10",
    title: "SEQUOIA CAPITAL",
    description: "Insights and proven frameworks from leading venture capital firm Sequoia Capital on founder success.",
    category: "Toolkit",
    fileId: "1pSvNDj-eoJW7b8r5Iz8Xtu5avgRAtqIY",
  },
   {
    id: "toolkit-11",
    title: "STARTUP STORYTELLING FOR INFLUENCE",
    description: "Techniques for crafting powerful narratives that influence investors, customers, and stakeholders.",
    category: "Toolkit",
    fileId: "1h-Hjn29BgO1_8k4nlVrqoLTIh87j7ji5MeLpjvyiR-A",
  },
  {
    id: "toolkit-12",
    title: "TEAM BUILDING & FOUNDER LEADERSHIP",
    description: "Guide for building high-performing teams and developing your capabilities as an effective founder leader.",
    category: "Toolkit",
    fileId: "1KMuaHwfpWuV8o7wTI_c-DzBFqdC1yTIb",
  },
];
