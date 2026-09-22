"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import ConsultationModal from "@/components/marketing/ConsultationModal";
import { Search, X, Calendar, User, ArrowRight, Share2, Sparkles, CheckCircle2 } from "lucide-react";

// Top Horizontal Navigation Categories (Matching Appinventiv)
const TOP_CATEGORIES = [
  "All",
  "App Development",
  "Software Dev",
  "Blockchain",
  "Cloud",
  "Business Intelligence",
  "Data Analytics",
  "Artificial Intelligence",
];

// Sidebar Category Pill Tags (Matching Appinventiv)
const SIDEBAR_CATEGORIES = [
  "Healthcare & Fitness",
  "Restaurant App Development",
  "React Native Development",
  "Digital Transformation",
  "Data Science & Analytics",
  "Android Development",
  "Fintech",
  "IOT Development",
  "Education",
  "Cloud Computing",
];

interface BlogPost {
  id: string;
  category: string;
  subCategory?: string;
  title: string;
  excerpt: string;
  takeaways?: string;
  author: string;
  date: string;
  readTime: string;
  accentColor: string;
  imageBg: string;
  imageType: "phone" | "workflow" | "cloud" | "health" | "government" | "ecommerce" | "ai";
  content?: string[];
}

const FEATURED_POST: BlogPost = {
  id: "featured-complete-guide",
  category: "Guides",
  subCategory: "App Development",
  title: "The Complete Guide to Mobile App Development: Process, Architecture & Strategic Decisions",
  excerpt:
    "Mobile app development now sits at the center of how large companies operate and grow. Banks route payments, loan checks, and alerts through mobile systems, while healthcare providers coordinate patient records and enterprise logistics in real-time.",
  takeaways:
    "Architecture-first sprint planning reduces technical debt by 60% in enterprise cross-platform Flutter and React Native deployments.",
  author: "Saurabh Singh",
  date: "21 Sep 2026",
  readTime: "12 min read",
  accentColor: "#E24A4A",
  imageBg: "bg-gradient-to-tr from-[#FF5E5E] to-[#E23E57]",
  imageType: "phone",
  content: [
    "Enterprise mobile engineering has evolved far beyond monolithic codebases. Today, mission-critical mobile platforms demand modular micro-frontend architectures, automated CI/CD gating, and offline-first synchronization protocols.",
    "When engineering for millions of concurrent users, decisions made in the discovery phase regarding state management, encryption at rest (SQLCipher / Keychain), and edge caching dictate long-term system maintainability.",
    "At Globizhub, our engineering pods enforce ISO 27001-compliant DevSecOps pipelines, automated unit and integration tests across 500+ physical device configurations, and real-time observability.",
  ],
};

const SUB_FEATURED_POSTS: BlogPost[] = [
  {
    id: "sub-1-cost-guide",
    category: "Guides",
    subCategory: "Software Dev",
    title: "How Much Does It Cost to Develop an App in 2026? A Detailed Guide",
    excerpt:
      "When it comes to mobile app development, a million-dollar question (sometimes literally) is: How much does it really cost to build an enterprise application?",
    author: "Saurabh Singh",
    date: "20 Sep 2026",
    readTime: "9 min read",
    accentColor: "#3B82F6",
    imageBg: "bg-gradient-to-tr from-[#3B82F6] to-[#1D4ED8]",
    imageType: "cloud",
  },
  {
    id: "sub-2-timeline-estimates",
    category: "App Development",
    subCategory: "Software Dev",
    title: "How Long Does It Take to Develop an App? Timeline, Factors & Real Estimates",
    excerpt:
      "Key takeaways: Most enterprise app delays start after approvals, integrations, and infrastructure bottlenecks. Discover the proven roadmap to predict delivery.",
    author: "Saurabh Singh",
    date: "19 Sep 2026",
    readTime: "8 min read",
    accentColor: "#EAB308",
    imageBg: "bg-gradient-to-tr from-[#EAB308] to-[#CA8A04]",
    imageType: "workflow",
  },
  {
    id: "sub-3-mvp-funding",
    category: "App Development",
    subCategory: "Product Strategy",
    title: "How to Build an Minimal Viable Product (MVP) and Raise Funding in 2026",
    excerpt:
      "Facebook, TikTok, Tinder, Uber, Instagram, Zoom, Spotify — today, all these big players started with a focused MVP that validated market demand.",
    author: "Prateek Saxena",
    date: "19 Sep 2026",
    readTime: "10 min read",
    accentColor: "#E05353",
    imageBg: "bg-gradient-to-tr from-[#F87171] to-[#DC2626]",
    imageType: "phone",
  },
];

const LATEST_POSTS: BlogPost[] = [
  {
    id: "latest-1-health-tracking",
    category: "Artificial Intelligence",
    subCategory: "Healthcare & Fitness",
    title: "AI-First Health Tracking App Development: Wearable Integration, Architecture, Cost and Key Considerations",
    excerpt:
      "Key Takeaways: Design your system architecture around clean sensor data pipelines, secure FHIR health records, and low-latency edge inference for real-time diagnostic alerts.",
    author: "Chirag Bhardwaj",
    date: "18 Sep 2026",
    readTime: "11 min read",
    accentColor: "#3B82F6",
    imageBg: "bg-gradient-to-tr from-[#2563EB] to-[#1D4ED8]",
    imageType: "health",
  },
  {
    id: "latest-2-govt-modernization",
    category: "Software Dev",
    subCategory: "Digital Transformation",
    title: "How Government Agencies Can Modernise Legacy Workflows With Automation",
    excerpt:
      "Key takeaways: Automate high-volume, rules-based workflows before re-architecting complex core databases. Discover how state departments are transforming with cloud-native workflows.",
    author: "Peter Wilson",
    date: "18 Sep 2026",
    readTime: "7 min read",
    accentColor: "#2563EB",
    imageBg: "bg-gradient-to-tr from-[#3B82F6] to-[#1E40AF]",
    imageType: "government",
  },
  {
    id: "latest-3-ecommerce-erp",
    category: "Cloud",
    subCategory: "Ecommerce",
    title: "eCommerce Integration: Connecting ERP, CRM, PIM, and Other Core Business Systems",
    excerpt:
      "Key takeaways: Centralized master data management and event-driven architecture prevent catalog desynchronization across multi-channel retail ecosystems.",
    author: "Saurabh Singh",
    date: "16 Sep 2026",
    readTime: "8 min read",
    accentColor: "#D97706",
    imageBg: "bg-gradient-to-tr from-[#F59E0B] to-[#D97706]",
    imageType: "ecommerce",
  },
  {
    id: "latest-4-autonomous-agents",
    category: "Artificial Intelligence",
    subCategory: "Data Science & Analytics",
    title: "Building Autonomous AI Agents in Production: Orchestrations, State Graphs & Zero Leakage",
    excerpt:
      "Key takeaways: Deterministic state graphs and private vector embeddings prevent hallucination loops in enterprise multi-agent architectures.",
    author: "Anupam Saha",
    date: "15 Sep 2026",
    readTime: "14 min read",
    accentColor: "#8B5CF6",
    imageBg: "bg-gradient-to-tr from-[#8B5CF6] to-[#6D28D9]",
    imageType: "ai",
  },
  {
    id: "latest-5-lims-cloud",
    category: "Cloud",
    subCategory: "Healthcare & Fitness",
    title: "Scaling Diagnostic Pathology Labs to 10,000 Samples Daily with Patholab.cloud",
    excerpt:
      "Key takeaways: Multi-tenant database isolation, automated bidirectional machine interfacing, and QR-coded barcode tracking accelerate diagnostic turn-around times by 4x.",
    author: "Globizhub Health Pod",
    date: "14 Sep 2026",
    readTime: "9 min read",
    accentColor: "#06B6D4",
    imageBg: "bg-gradient-to-tr from-[#06B6D4] to-[#0E7490]",
    imageType: "health",
  },
  {
    id: "latest-6-fintech-security",
    category: "Blockchain",
    subCategory: "Fintech",
    title: "Zero-Trust Financial Gateways: Real-Time Fraud Prevention with Sub-15ms Latency",
    excerpt:
      "Key takeaways: Real-time risk scoring, tokenized transaction pipelines, and ISO 27001 ISMS governance safeguard payment networks against sophisticated fraud vectors.",
    author: "Enterprise Security Team",
    date: "12 Sep 2026",
    readTime: "10 min read",
    accentColor: "#10B981",
    imageBg: "bg-gradient-to-tr from-[#10B981] to-[#047857]",
    imageType: "workflow",
  },
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);

  // Combine all posts for unified search & filtering
  const allPosts = useMemo(() => [FEATURED_POST, ...SUB_FEATURED_POSTS, ...LATEST_POSTS], []);

  // Filtered posts based on active category & search query
  const filteredPosts = useMemo(() => {
    return allPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" ||
        post.category.toLowerCase() === selectedCategory.toLowerCase() ||
        post.subCategory?.toLowerCase() === selectedCategory.toLowerCase();

      const matchesSearch =
        !searchQuery.trim() ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [allPosts, selectedCategory, searchQuery]);

  // Is viewing a filtered state?
  const isFiltered = selectedCategory !== "All" || searchQuery.trim() !== "";

  return (
    <div className="min-h-screen bg-white text-slate-900 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#FFE600] selection:text-black">
      {/* Global Site Header */}
      <SiteHeader onOpenConsultation={() => setConsultationOpen(true)} />

      <main className="pt-28 sm:pt-32 pb-24 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* ======================================================== */}
        {/* 1. TOP CATEGORY NAVIGATION BAR & SEARCH                  */}
        {/* (Exact match to Appinventiv layout)                      */}
        {/* ======================================================== */}
        <div className="py-4 border-b border-slate-200/90 flex items-center justify-between gap-4 mb-8 sm:mb-12 overflow-x-auto no-scrollbar">
          {/* Horizontal Category Links */}
          <nav className="flex items-center gap-6 sm:gap-8 shrink-0">
            {TOP_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat && !searchQuery;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setSearchQuery("");
                  }}
                  className={`text-sm sm:text-base font-normal whitespace-nowrap transition-colors cursor-pointer relative py-2 ${
                    isActive
                      ? "text-blue-600 font-semibold"
                      : "text-slate-700 hover:text-blue-600"
                  }`}
                >
                  {cat}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Search Trigger / Input */}
          <div className="shrink-0 flex items-center gap-2 pl-4 border-l border-slate-200">
            {searchOpen ? (
              <div className="flex items-center gap-2 bg-slate-100 rounded-full px-3.5 py-1.5 border border-slate-300 animate-in fade-in duration-150">
                <Search className="w-4 h-4 text-slate-500" />
                <input
                  type="text"
                  placeholder="Search insights..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="bg-transparent text-xs sm:text-sm text-slate-800 placeholder:text-slate-500 focus:outline-none w-36 sm:w-56"
                />
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSearchOpen(false);
                  }}
                  className="text-slate-400 hover:text-slate-700 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setSearchOpen(true)}
                className="flex items-center gap-2 text-sm text-slate-700 hover:text-blue-600 transition-colors cursor-pointer py-1.5 px-3 rounded-full hover:bg-slate-100"
              >
                <Search className="w-4 h-4 text-slate-600" />
                <span className="font-normal">Search</span>
              </button>
            )}
          </div>
        </div>

        {/* Search Active Notification Banner */}
        {isFiltered && (
          <div className="mb-8 p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
            <p className="text-sm text-slate-700">
              Showing results for{" "}
              {searchQuery && (
                <span className="font-semibold text-slate-900">"{searchQuery}"</span>
              )}
              {selectedCategory !== "All" && (
                <span className="font-semibold text-blue-600"> [{selectedCategory}]</span>
              )}{" "}
              ({filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"} found)
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="text-xs font-semibold text-blue-600 hover:underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* ======================================================== */}
        {/* 2. DEFAULT VIEW: HERO FEATURED POST + 3-COLUMN GRID      */}
        {/* ======================================================== */}
        {!isFiltered && (
          <>
            {/* Hero Featured Article (Large 2-Column Banner) */}
            <article
              onClick={() => setActiveArticle(FEATURED_POST)}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center mb-16 sm:mb-20 group cursor-pointer"
            >
              {/* Left: Illustrated Card Graphic */}
              <div className="lg:col-span-6 w-full h-[280px] sm:h-[360px] lg:h-[400px] rounded-2xl bg-gradient-to-tr from-[#E14848] via-[#ED5A5A] to-[#F87171] p-8 flex items-center justify-center relative overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-[1.01]">
                {/* Tech Phone & Developer Illustration */}
                <div className="relative w-[180px] sm:w-[220px] h-[260px] sm:h-[300px] bg-white rounded-3xl border-4 border-slate-900/10 shadow-2xl p-4 flex flex-col justify-between">
                  <div className="w-12 h-1.5 bg-slate-200 rounded-full mx-auto mb-2" />
                  <div className="w-full h-28 bg-[#8E1F1F] rounded-xl flex items-center justify-center text-white font-mono font-bold text-lg shadow-inner">
                    &lt;/&gt;
                  </div>
                  <div className="space-y-2">
                    <div className="w-3/4 h-2 bg-slate-200 rounded" />
                    <div className="w-1/2 h-2 bg-slate-100 rounded" />
                  </div>
                  <div className="flex justify-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-rose-400" />
                    <div className="w-3 h-3 rounded-full bg-rose-300" />
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute right-6 bottom-8 w-24 h-24 rounded-full bg-white/10 blur-xl pointer-events-none" />
                <div className="absolute left-6 top-8 text-white/30 text-5xl font-mono select-none pointer-events-none">
                  ⚙
                </div>
              </div>

              {/* Right: Article Details */}
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-500 block">
                  {FEATURED_POST.category}
                </span>

                <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-slate-950 tracking-tight leading-[1.15] group-hover:text-blue-600 transition-colors">
                  {FEATURED_POST.title}
                </h1>

                <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
                  {FEATURED_POST.excerpt}
                </p>

                <div className="pt-2 text-xs sm:text-sm text-slate-500 font-medium flex items-center gap-2">
                  <span>{FEATURED_POST.author}</span>
                  <span>•</span>
                  <span>{FEATURED_POST.date}</span>
                </div>
              </div>
            </article>

            {/* Sub-Featured 3-Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 mb-20 sm:mb-24">
              {SUB_FEATURED_POSTS.map((post) => (
                <article
                  key={post.id}
                  onClick={() => setActiveArticle(post)}
                  className="flex flex-col justify-between group cursor-pointer"
                >
                  <div>
                    {/* Illustration Card */}
                    <div
                      className={`w-full h-[200px] sm:h-[230px] rounded-2xl ${post.imageBg} p-6 flex items-center justify-center relative overflow-hidden shadow-md mb-5 transition-transform duration-300 group-hover:scale-[1.02]`}
                    >
                      <div className="w-36 h-28 bg-white/95 rounded-xl shadow-xl p-3 flex flex-col justify-between border border-white/40">
                        <div className="flex items-center justify-between">
                          <div className="w-4 h-4 rounded bg-slate-200" />
                          <div className="w-12 h-1.5 bg-slate-200 rounded" />
                        </div>
                        <div className="space-y-1.5">
                          <div className="w-full h-1.5 bg-slate-200 rounded" />
                          <div className="w-4/5 h-1.5 bg-slate-200 rounded" />
                        </div>
                        <div className="w-8 h-4 rounded bg-blue-600/20 flex items-center justify-center text-[8px] font-bold text-blue-600 font-mono">
                          &lt;/&gt;
                        </div>
                      </div>
                    </div>

                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">
                      {post.category}
                    </span>

                    <h2 className="text-lg sm:text-xl font-bold text-slate-950 tracking-tight leading-snug mb-3 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="text-xs text-slate-500 font-medium">
                    {post.author}
                  </div>
                </article>
              ))}
            </div>
          </>
        )}

        {/* ======================================================== */}
        {/* 3. "LATEST" SECTION WITH CATEGORIES SIDEBAR              */}
        {/* (Exact match to Appinventiv layout)                      */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-start">
          {/* Left Column: Horizontal Article List */}
          <div className="lg:col-span-8 space-y-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              {isFiltered ? "Search Results" : "Latest"}
            </h2>

            <div className="space-y-10 sm:space-y-12">
              {(isFiltered ? filteredPosts : LATEST_POSTS).map((post) => (
                <article
                  key={post.id}
                  onClick={() => setActiveArticle(post)}
                  className="grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-8 items-center group cursor-pointer pb-10 border-b border-slate-100 last:border-0"
                >
                  {/* Left: Illustrated Thumbnail */}
                  <div className="sm:col-span-5 w-full h-[180px] sm:h-[190px] rounded-2xl bg-gradient-to-tr from-[#3B82F6] to-[#1D4ED8] p-5 flex items-center justify-center relative overflow-hidden shadow-md group-hover:scale-[1.02] transition-transform duration-300">
                    <div className="w-32 h-24 bg-white/95 rounded-xl shadow-lg p-3 flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <div className="w-3 h-3 rounded-full bg-blue-500" />
                        <div className="w-10 h-1 bg-slate-200 rounded" />
                      </div>
                      <div className="flex items-center justify-center">
                        <span className="text-xs font-bold text-slate-800 tracking-wider">
                          AI
                        </span>
                      </div>
                      <div className="w-full h-1 bg-slate-100 rounded" />
                    </div>
                  </div>

                  {/* Right: Article Information */}
                  <div className="sm:col-span-7 space-y-2.5">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                      {post.category}
                    </span>

                    <h3 className="text-lg sm:text-xl font-bold text-slate-950 tracking-tight leading-snug group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="pt-2 text-xs text-slate-500 font-medium flex items-center gap-2">
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </article>
              ))}

              {filteredPosts.length === 0 && (
                <div className="py-16 text-center space-y-3">
                  <p className="text-lg font-bold text-slate-800">No articles found</p>
                  <p className="text-sm text-slate-500">
                    Try adjusting your search terms or select another category from the sidebar.
                  </p>
                  <button
                    onClick={() => {
                      setSelectedCategory("All");
                      setSearchQuery("");
                    }}
                    className="px-5 py-2 rounded-full bg-blue-600 text-white text-xs font-semibold hover:bg-blue-500 cursor-pointer"
                  >
                    Clear All Filters
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Sticky Categories Sidebar */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-8">
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 pb-3 mb-5 border-b border-slate-100">
                Categories
              </h3>

              <div className="flex flex-wrap gap-2.5">
                {SIDEBAR_CATEGORIES.map((cat) => {
                  const isSelected = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => {
                        setSelectedCategory(isSelected ? "All" : cat);
                        setSearchQuery("");
                      }}
                      className={`px-3.5 py-2 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? "bg-blue-600 text-white shadow-md shadow-blue-500/30"
                          : "bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Newsletter Subscription Box */}
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-slate-950 to-slate-900 text-white shadow-lg space-y-4">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-wider border border-blue-500/30">
                <Sparkles className="w-3 h-3" />
                <span>Enterprise Dispatch</span>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug">
                Stay Ahead of Autonomous AI &amp; Cloud Architectures
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Join 45,000+ engineering leaders receiving our bi-weekly architectural breakdowns and tech reports.
              </p>
              <div className="space-y-2 pt-2">
                <input
                  type="email"
                  placeholder="Enter your work email"
                  className="w-full px-3.5 py-2 rounded-xl bg-white/10 border border-white/20 text-xs text-white placeholder:text-slate-400 focus:outline-none focus:border-blue-400"
                />
                <button
                  type="button"
                  onClick={() => setConsultationOpen(true)}
                  className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-colors cursor-pointer shadow-md"
                >
                  Subscribe to Insights
                </button>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* ======================================================== */}
      {/* 4. INTERACTIVE ARTICLE READER MODAL                      */}
      {/* ======================================================== */}
      {activeArticle && (
        <div
          className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveArticle(null)}
        >
          <div
            className="relative w-full max-w-[840px] max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-y-auto p-6 sm:p-10 border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center font-bold transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-3">
              {activeArticle.category} • {activeArticle.readTime}
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight mb-4 pr-8">
              {activeArticle.title}
            </h2>

            <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-500 pb-6 border-b border-slate-100 mb-6">
              <span>By <strong>{activeArticle.author}</strong></span>
              <span>•</span>
              <span>{activeArticle.date}</span>
            </div>

            {/* Key Takeaways Box */}
            <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200/80 mb-6 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                Key Architectural Takeaways
              </span>
              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                {activeArticle.takeaways || activeArticle.excerpt}
              </p>
            </div>

            {/* Article Body */}
            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              {activeArticle.content ? (
                activeArticle.content.map((p, i) => <p key={i}>{p}</p>)
              ) : (
                <>
                  <p>{activeArticle.excerpt}</p>
                  <p>
                    Modern digital product engineering requires establishing clear service boundaries, adopting
                    event-driven messaging patterns, and ensuring automated failover between multi-region cloud
                    infrastructure.
                  </p>
                  <p>
                    Organizations leveraging our engineering pods gain instant access to battle-tested microservice
                    blueprints, sub-15ms edge inference models, and ISO 27001-certified data security controls.
                  </p>
                </>
              )}
            </div>

            {/* Footer CTA in Modal */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={() => {
                  setActiveArticle(null);
                  setConsultationOpen(true);
                }}
                className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold transition-all shadow-lg shadow-blue-500/25 cursor-pointer"
              >
                Discuss This Architecture With Our Team →
              </button>
              <button
                onClick={() => setActiveArticle(null)}
                className="text-xs sm:text-sm font-semibold text-slate-500 hover:text-slate-800 cursor-pointer"
              >
                Back to All Articles
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Global Site Footer */}
      <SiteFooter onOpenConsultation={() => setConsultationOpen(true)} />

      {/* Consultation Modal */}
      <ConsultationModal isOpen={consultationOpen} onClose={() => setConsultationOpen(false)} />
    </div>
  );
}
