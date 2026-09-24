"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Search,
  ExternalLink,
  ChevronRight,
  ArrowRight,
  Globe,
  Building2,
  Cpu,
  Layers,
  ShieldCheck,
  FileCode,
  Sparkles,
  PhoneCall,
  CheckCircle2,
  X,
} from "lucide-react";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import ConsultationModal from "@/components/marketing/ConsultationModal";

interface SitemapLink {
  title: string;
  href: string;
  badge?: string;
  description?: string;
  sublinks?: { title: string; href: string }[];
}

interface SitemapCategory {
  id: string;
  heading: string;
  categoryHref?: string;
  accentColor: string; // coral #fc7754 or royal blue #1163fb
  links: SitemapLink[];
}

const SITEMAP_DATA: SitemapCategory[] = [
  {
    id: "company",
    heading: "COMPANY & CORE HUBS",
    categoryHref: "/about",
    accentColor: "#fc7754",
    links: [
      {
        title: "HOME",
        href: "/",
        description: "Official landing page & enterprise overview",
        sublinks: [
          { title: "Hero & Value Proposition", href: "/#hero" },
          { title: "Engineering Impact Metrics", href: "/#impact" },
          { title: "Enterprise Technology Services", href: "/#services" },
          { title: "Proprietary Software Showcase", href: "/#products-showcase" },
          { title: "Client Success Testimonials", href: "/#testimonials" },
          { title: "Enterprise Consultation CTA", href: "/#consultation" },
        ],
      },
      {
        title: "ABOUT GLOBIZHUB",
        href: "/about",
        description: "Company history, milestones, and engineering ethos",
        sublinks: [
          { title: "Corporate Background & Foundation", href: "/about" },
          { title: "A Journey of Engineering Excellence (2018 - 2026)", href: "/about#journey" },
          { title: "Recognition & Accreditations (DPIIT, MSME, ISO)", href: "/about#accreditations" },
          { title: "National Delivery Grid (4 Development Hubs)", href: "/about#hubs" },
          { title: "Why Choose Globizhub", href: "/about#why-choose-us" },
          { title: "Engineering Culture & Principles", href: "/about#culture" },
        ],
      },
      {
        title: "LEADERSHIP & TALENT",
        href: "/about",
        sublinks: [
          { title: "Executive Leadership & Board", href: "/about" },
          { title: "Careers & Open Engineering Positions", href: "/about#culture" },
          { title: "Life at Globizhub & CSR Initiatives", href: "/about#culture" },
        ],
      },
      {
        title: "CONTACT & CONSULTATIONS",
        href: "/#consultation",
        description: "Connect with our principal architects and consultants",
        sublinks: [
          { title: "Book Technical Architecture Consultation", href: "/#consultation" },
          { title: "Bengaluru Head Office", href: "/about#hubs" },
          { title: "Guwahati Regional Delivery Center", href: "/about#hubs" },
          { title: "Chennai Cloud & SRE Center", href: "/about#hubs" },
          { title: "Delhi-NCR Enterprise Strategy Office", href: "/about#hubs" },
        ],
      },
    ],
  },
  {
    id: "products",
    heading: "PROPRIETARY PRODUCTS & PLATFORMS",
    categoryHref: "/#products-showcase",
    accentColor: "#1163fb",
    links: [
      {
        title: "Patholab.Cloud",
        href: "/#products-showcase",
        badge: "Healthcare SaaS",
        description: "Intelligent Diagnostic Laboratory Information Management OS",
        sublinks: [
          { title: "LIMS Analyzer Machine Telemetry", href: "/#products-showcase" },
          { title: "Automated Barcode Sample Tracking", href: "/#products-showcase" },
          { title: "WhatsApp & SMS Patient Reporting Gateway", href: "/#products-showcase" },
          { title: "350+ Clinical Labs Live Deployments", href: "/#products-showcase" },
        ],
      },
      {
        title: "TeamHub",
        href: "/#products-showcase",
        badge: "Workforce OS",
        description: "Enterprise Workforce Attendance, Biometrics & Sprint Engine",
        sublinks: [
          { title: "GPS & Facial Biometrics Attendance", href: "/#products-showcase" },
          { title: "Automated Payroll & Tax Compliance Engine", href: "/#products-showcase" },
          { title: "Developer Agile Sprint Tracker", href: "/#products-showcase" },
        ],
      },
      {
        title: "Bungzo",
        href: "/#products-showcase",
        badge: "ERP & Telematics",
        description: "Gated Society ERP & Hyperlocal Delivery Telematics Platform",
        sublinks: [
          { title: "Gated Community Resident Portal", href: "/#products-showcase" },
          { title: "Visitor Gate Pass & Security Telematics", href: "/#products-showcase" },
          { title: "Hyperlocal Quick-Commerce Dispatch Router", href: "/#products-showcase" },
        ],
      },
      {
        title: "GlobizLibrary",
        href: "/#products-showcase",
        badge: "EdTech Platform",
        description: "Automated RFID Cataloging & Digital Academic Repository",
        sublinks: [
          { title: "RFID Shelf Management & Stock Telemetry", href: "/#products-showcase" },
          { title: "Automated Issue/Return Self-Check Kiosks", href: "/#products-showcase" },
          { title: "University Research Indexing Engine", href: "/#products-showcase" },
        ],
      },
      {
        title: "Enterprise IMS",
        href: "/#products-showcase",
        badge: "Supply Chain",
        description: "Multi-Warehouse Inventory OS & Automated Replenishment",
        sublinks: [
          { title: "Multi-Location Inventory Balancing", href: "/#products-showcase" },
          { title: "Automated Low-Stock Trigger Reorders", href: "/#products-showcase" },
          { title: "Batch & Expiry Date Analytics", href: "/#products-showcase" },
        ],
      },
      {
        title: "Globizhub Listing",
        href: "/#products-showcase",
        badge: "B2B Marketplace",
        description: "Global B2B Trade Directory & Verified Supplier Network",
        sublinks: [
          { title: "Verified Manufacturer Profiles", href: "/#products-showcase" },
          { title: "Direct RFQ & Commercial Inquiries", href: "/#products-showcase" },
          { title: "Global Cross-Border Trade Telemetry", href: "/#products-showcase" },
        ],
      },
    ],
  },
  {
    id: "services",
    heading: "SERVICES & CAPABILITIES",
    categoryHref: "/services",
    accentColor: "#fc7754",
    links: [
      {
        title: "Product & Engineering",
        href: "/services",
        sublinks: [
          { title: "Product Design & UI/UX Experience", href: "/services" },
          { title: "Web Application Development (Next.js / React)", href: "/services" },
          { title: "Mobile App Development (iOS Swift & Android)", href: "/services" },
          { title: "Enterprise Software & Bespoke ERP Engineering", href: "/services" },
          { title: "Quality Assurance & Automated Security Testing", href: "/services" },
          { title: "DevOps, SRE & Cloud Native Infrastructure", href: "/services" },
        ],
      },
      {
        title: "Digital Transformation & AI",
        href: "/services",
        sublinks: [
          { title: "Autonomous AI Agents & LangGraph Squads", href: "/services" },
          { title: "Generative AI, Enterprise LLMs & Private RAG", href: "/services" },
          { title: "Legacy System Modernization & Microservices", href: "/services" },
          { title: "Cloud Architecture & Zero-Downtime Migration", href: "/services" },
          { title: "Cybersecurity & Zero-Trust Architecture", href: "/services" },
          { title: "IoT Sensors & Connected Telematics", href: "/services" },
        ],
      },
      {
        title: "Consulting, Data & Strategy",
        href: "/services",
        sublinks: [
          { title: "Strategic Technical Consulting & CTO Advisory", href: "/services" },
          { title: "Big Data Pipelines & Distributed Streaming ETL", href: "/services" },
          { title: "Business Intelligence, KPI Dashboards & Telemetry", href: "/services" },
          { title: "Dedicated Engineering Squads & Staff Augmentation", href: "/services" },
          { title: "Cloud Cost Optimization & FinOps", href: "/services" },
          { title: "IT Audit, Due Diligence & System Architecture", href: "/services" },
        ],
      },
    ],
  },
  {
    id: "industries",
    heading: "INDUSTRIES WE TRANSFORM",
    categoryHref: "/industries",
    accentColor: "#1163fb",
    links: [
      {
        title: "Healthcare & Diagnostics",
        href: "/industries#healthcare",
        description: "Clinical diagnostic LIMS, tele-medicine, and imaging AI",
        sublinks: [
          { title: "Laboratory Information Systems (LIMS)", href: "/industries#healthcare" },
          { title: "Electronic Health Records (EHR)", href: "/industries#healthcare" },
          { title: "Diagnostic Machine Telemetry", href: "/industries#healthcare" },
        ],
      },
      {
        title: "Supply Chain & Logistics",
        href: "/industries#logistics",
        description: "Cold-chain monitoring, GPS telematics, and warehouse ERP",
        sublinks: [
          { title: "Cold-Chain IoT Sensor Logging", href: "/industries#logistics" },
          { title: "Real-Time Fleet Dispatch Telemetry", href: "/industries#logistics" },
          { title: "Automated Consignment Barcoding", href: "/industries#logistics" },
        ],
      },
      {
        title: "FinTech & Banking",
        href: "/industries#finance",
        description: "Payment gateways, lending workflows, and automated reconciliation",
        sublinks: [
          { title: "Multi-Currency Payment Gateways", href: "/industries#finance" },
          { title: "Automated Ledger Reconciliation", href: "/industries#finance" },
          { title: "Lending Origination Workflows", href: "/industries#finance" },
        ],
      },
      {
        title: "eCommerce & Omnichannel Retail",
        href: "/industries#ecommerce",
        description: "Headless commerce, multi-vendor marketplaces, and loyalty engines",
        sublinks: [
          { title: "High-Throughput Checkout Engines", href: "/industries#ecommerce" },
          { title: "Multi-Vendor Marketplace Backends", href: "/industries#ecommerce" },
          { title: "Inventory Multi-Channel Sync", href: "/industries#ecommerce" },
        ],
      },
      {
        title: "Real Estate & Smart Communities",
        href: "/industries#real-estate",
        description: "Society ERP, gated community visitor systems, and billing",
        sublinks: [
          { title: "Maintenance Billing & Payment Portals", href: "/industries#real-estate" },
          { title: "Automated Visitor Gate Control", href: "/industries#real-estate" },
          { title: "Asset Management & Preventive Maintenance", href: "/industries#real-estate" },
        ],
      },
      {
        title: "Additional Industry Verticals",
        href: "/industries",
        sublinks: [
          { title: "On-Demand Hyperlocal Services", href: "/industries#on-demand" },
          { title: "Wearables & IoT Telemetry", href: "/industries#wearables" },
          { title: "Fitness & Wellness Applications", href: "/industries#fitness" },
          { title: "Restaurant & Cloud Kitchen POS", href: "/industries#restaurant" },
          { title: "Automotive & Fleet Telematics", href: "/industries#automotive" },
          { title: "Education & Academic LMS", href: "/industries#education" },
          { title: "Manufacturing & Industry 4.0", href: "/industries#manufacturing" },
          { title: "Energy, Utilities & Smart Grid", href: "/industries#energy" },
          { title: "Media, OTT & Digital Publishing", href: "/industries#media" },
          { title: "Agriculture & AgriTech Sensors", href: "/industries#agriculture" },
          { title: "Aviation & Flight Telemetry", href: "/industries#aviation" },
          { title: "Government & Public Sector (DPIIT Incubated)", href: "/industries#government" },
        ],
      },
    ],
  },
  {
    id: "divisions",
    heading: "OUR DIVISIONS & ALLIED VENTURES",
    categoryHref: "/about#divisions",
    accentColor: "#fc7754",
    links: [
      {
        title: "Enterprise Operating Divisions",
        href: "/about#divisions",
        sublinks: [
          { title: "01 IT Products (Proprietary SaaS Solutions)", href: "/about#divisions" },
          { title: "02 IT Services (Bespoke Software & Cloud)", href: "/about#divisions" },
          { title: "03 IoT Solutions (Industrial Sensors & Telemetry)", href: "/about#divisions" },
          { title: "04 Hardware Engineering (Embedded Systems & Edge)", href: "/about#divisions" },
          { title: "05 Digital Marketing (Performance Brand & SEO)", href: "/about#divisions" },
        ],
      },
      {
        title: "Allied Business Verticals",
        href: "/about#allied-ventures",
        sublinks: [
          { title: "Business Listing & B2B Trade Directory", href: "/about#allied-ventures" },
          { title: "Freight Forwarding & Global Logistics", href: "/about#allied-ventures" },
          { title: "Express Courier & Domestic Dispatch", href: "/about#allied-ventures" },
          { title: "Import & Export Trading Operations", href: "/about#allied-ventures" },
          { title: "Leather Products Manufacturing", href: "/about#allied-ventures" },
          { title: "E&M Fashion Brand & Lifestyle", href: "/about#allied-ventures" },
          { title: "Private Pathology & Clinical Diagnostic Labs", href: "/about#allied-ventures" },
        ],
      },
    ],
  },
  {
    id: "resources",
    heading: "RESOURCES, BLOG & CASE STUDIES",
    categoryHref: "/blog",
    accentColor: "#1163fb",
    links: [
      {
        title: "Engineering Blog & Tech Insights",
        href: "/blog",
        sublinks: [
          { title: "All Articles & Engineering Releases", href: "/blog" },
          { title: "Building Autonomous AI Agents for Enterprises", href: "/blog" },
          { title: "De-Monolithing Legacy Systems into Microservices", href: "/blog" },
          { title: "The Startup MVP Engineering Playbook", href: "/blog" },
          { title: "Cloud Security Posture Management Guide", href: "/blog" },
          { title: "Diagnostic Laboratory Telemetry Case Study", href: "/blog" },
        ],
      },
      {
        title: "Client Case Studies & Technical Guides",
        href: "/#case-studies",
        sublinks: [
          { title: "Patholab.Cloud Deployment at 350+ Centers", href: "/#case-studies" },
          { title: "Hyperlocal Quick-Commerce Telematics Engine", href: "/#case-studies" },
          { title: "Multi-Tenant Cloud Architecture Blueprint", href: "/services" },
          { title: "Enterprise FAQs & Architectural Scoping", href: "/#faq" },
        ],
      },
    ],
  },
  {
    id: "legal",
    heading: "LEGAL, COMPLIANCE & POLICIES",
    categoryHref: "/terms",
    accentColor: "#fc7754",
    links: [
      {
        title: "Corporate Legal Governance",
        href: "/terms",
        sublinks: [
          { title: "Terms of Use & Master Services Agreement", href: "/terms" },
          { title: "Privacy Policy (GDPR / Indian DPDP Compliant)", href: "/privacy" },
          { title: "Refund & Cancellation Policy", href: "/refund" },
          { title: "Data Security, Encryption & NDA Assurance", href: "/data-security" },
          { title: "Corporate Governance & Ethical Standards", href: "/corporate-policies" },
        ],
      },
      {
        title: "Accreditations & Statutory Records",
        href: "/about#accreditations",
        sublinks: [
          { title: "DPIIT #startupindia Recognition (DIPP33507)", href: "/about#accreditations" },
          { title: "Assam Startup Nest Incubation Verification", href: "/about#accreditations" },
          { title: "Triple ISO Certified (ISO 9001, 27001, 20000-1)", href: "/about#accreditations" },
          { title: "Ministry of MSME Enterprise Accreditation", href: "/about#accreditations" },
          { title: "XML Machine-Readable Sitemap (/sitemap.xml)", href: "/sitemap.xml" },
        ],
      },
    ],
  },
];

export default function HtmlSitemapPage() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Calculate total links across all categories
  const totalLinkCount = useMemo(() => {
    let count = 0;
    SITEMAP_DATA.forEach((cat) => {
      cat.links.forEach((link) => {
        count += 1;
        if (link.sublinks) count += link.sublinks.length;
      });
    });
    return count;
  }, []);

  // Filter categories and links according to search query and selected category tab
  const filteredData = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return SITEMAP_DATA.filter((cat) => {
      if (selectedCategory !== "all" && cat.id !== selectedCategory) {
        return false;
      }
      return true;
    })
      .map((cat) => {
        if (!q) return cat;

        // Filter links within this category
        const filteredLinks = cat.links
          .map((link) => {
            const matchesTitle = link.title.toLowerCase().includes(q);
            const matchesDesc = link.description?.toLowerCase().includes(q) || false;
            const matchesBadge = link.badge?.toLowerCase().includes(q) || false;

            const filteredSublinks = link.sublinks?.filter((sub) =>
              sub.title.toLowerCase().includes(q)
            );

            if (matchesTitle || matchesDesc || matchesBadge || (filteredSublinks && filteredSublinks.length > 0)) {
              return {
                ...link,
                sublinks: filteredSublinks || link.sublinks,
              };
            }
            return null;
          })
          .filter(Boolean) as SitemapLink[];

        return {
          ...cat,
          links: filteredLinks,
        };
      })
      .filter((cat) => cat.links.length > 0);
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-white text-slate-800 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#FFE600] selection:text-black">
      {/* Global Header */}
      <SiteHeader onOpenConsultation={() => setConsultationOpen(true)} />

      {/* Main Container */}
      <main className="pt-32 sm:pt-36 pb-20 sm:pb-28">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb (< Home / Site Map) */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 mb-6 sm:mb-8 font-medium">
            <span className="text-[#0092ff] text-base leading-none select-none">‹</span>
            <Link href="/" className="text-[#0092ff] hover:underline transition-colors">
              Home
            </Link>
            <span className="text-slate-400">/</span>
            <span className="text-slate-700 font-semibold">Site Map</span>
          </nav>

          {/* Hero Section with Signature Yellow Marker Highlight (Exact Appinventiv Style) */}
          <header className="mb-10 sm:mb-12">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-slate-200">
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-black tracking-tight text-slate-950 mb-3 leading-tight">
                  <span className="relative inline-block z-0">
                    <span
                      className="absolute bottom-1 sm:bottom-2 left-0 right-0 h-3 sm:h-4 bg-[#FFE600] -z-10 rounded-[2px]"
                      aria-hidden="true"
                    />
                    Site Map
                  </span>
                </h1>
                <p className="text-slate-600 text-base sm:text-lg font-normal">
                  Find your way around our website.
                </p>
              </div>

              {/* Quick XML Sitemap Badge */}
              <div className="flex items-center gap-3">
                <a
                  href="/sitemap.xml"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-slate-700 transition-colors border border-slate-200 shadow-xs"
                >
                  <FileCode className="w-3.5 h-3.5 text-[#1163fb]" />
                  <span>View Machine XML Sitemap</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Interactive Search & Live Filter Bar */}
            <div className="mt-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
              {/* Search Input */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search pages, services, industries, or policies..."
                  className="w-full pl-11 pr-10 py-3 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 focus:border-[#1163fb] focus:bg-white text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all shadow-xs"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
                    aria-label="Clear Search"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Total Index Count Pill */}
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 bg-slate-50 px-3.5 py-2.5 rounded-xl border border-slate-200/80 self-start md:self-auto">
                <Sparkles className="w-3.5 h-3.5 text-[#fc7754]" />
                <span>
                  {searchQuery
                    ? `Found matches across ${filteredData.length} sections`
                    : `${totalLinkCount}+ Verified Destination Links`}
                </span>
              </div>
            </div>

            {/* Category Filter Pills (Appinventiv Style Quick Tabs) */}
            <div className="flex items-center gap-2 overflow-x-auto pt-4 pb-2 no-scrollbar">
              {[
                { id: "all", label: "All Categories" },
                { id: "company", label: "Company" },
                { id: "products", label: "Products" },
                { id: "services", label: "Services" },
                { id: "industries", label: "Industries" },
                { id: "divisions", label: "Divisions & Ventures" },
                { id: "resources", label: "Resources" },
                { id: "legal", label: "Legal & Compliance" },
              ].map((pill) => {
                const isActive = selectedCategory === pill.id;
                return (
                  <button
                    key={pill.id}
                    onClick={() => setSelectedCategory(pill.id)}
                    className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                      isActive
                        ? "bg-[#1163fb] text-white shadow-sm"
                        : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                    }`}
                  >
                    {pill.label}
                  </button>
                );
              })}
            </div>
          </header>

          {/* ======================================================== */}
          {/* SITEMAP CONTENT GRID (Exact Appinventiv Structure)       */}
          {/* ======================================================== */}
          {filteredData.length === 0 ? (
            <div className="py-20 text-center bg-slate-50 rounded-3xl border border-slate-200 my-8">
              <Search className="w-8 h-8 text-slate-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-800 mb-1">
                No matching pages or links found
              </h3>
              <p className="text-sm text-slate-500 mb-4">
                We couldn&apos;t find anything matching &ldquo;{searchQuery}&rdquo;. Try another keyword.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="px-4 py-2 rounded-xl bg-[#1163fb] text-white text-xs font-bold hover:bg-[#0c51d6] transition-colors"
              >
                Clear Search Filter
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 items-start">
              {filteredData.map((category) => (
                <div
                  key={category.id}
                  className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-7 shadow-xs hover:shadow-md transition-shadow flex flex-col h-full"
                >
                  {/* Category Header with Appinventiv Warm Accent Color */}
                  <div className="pb-4 mb-6 border-b border-slate-100 flex items-center justify-between">
                    {category.categoryHref ? (
                      <Link
                        href={category.categoryHref}
                        className="text-[17px] font-black tracking-wider transition-colors hover:underline"
                        style={{ color: category.accentColor }}
                      >
                        {category.heading}
                      </Link>
                    ) : (
                      <span
                        className="text-[17px] font-black tracking-wider"
                        style={{ color: category.accentColor }}
                      >
                        {category.heading}
                      </span>
                    )}
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                      {category.links.length}
                    </span>
                  </div>

                  {/* Links List */}
                  <ul className="space-y-6 flex-1">
                    {category.links.map((link, idx) => (
                      <li key={idx} className="group/item">
                        {/* Parent Link Heading */}
                        <div className="flex items-center gap-2 mb-1">
                          <Link
                            href={link.href}
                            className="text-[15px] font-bold text-slate-900 hover:text-[#0092ff] transition-colors leading-snug"
                          >
                            {link.title}
                          </Link>
                          {link.badge && (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-[#1163fb] border border-blue-200/60">
                              {link.badge}
                            </span>
                          )}
                        </div>

                        {link.description && (
                          <p className="text-[12px] text-slate-500 mb-2 leading-relaxed">
                            {link.description}
                          </p>
                        )}

                        {/* Submenu List with Appinventiv's Signature Dash Prefix */}
                        {link.sublinks && link.sublinks.length > 0 && (
                          <ul className="pl-5 mt-2 space-y-1.5 border-l-2 border-slate-100">
                            {link.sublinks.map((sub, sIdx) => (
                              <li key={sIdx} className="relative group/sub flex items-center">
                                <Link
                                  href={sub.href}
                                  className="text-[13px] text-slate-600 hover:text-[#0092ff] transition-all py-0.5 block font-medium group-hover/sub:translate-x-1"
                                >
                                  <span className="inline-block w-2.5 h-[1px] bg-slate-300 mr-2 align-middle group-hover/sub:bg-[#0092ff]" />
                                  <span>{sub.title}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* ======================================================== */}
          {/* BOTTOM CONSULTATION CALLOUT (Exact Appinventiv Style)     */}
          {/* ======================================================== */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#fff6db] border border-amber-200/80 flex flex-col lg:flex-row items-center justify-between gap-6 mt-16 shadow-xs">
            <div className="space-y-1.5 text-center lg:text-left">
              <h3 className="text-lg sm:text-xl font-bold text-[#0f0f0f]">
                Didn&apos;t find what you&apos;re looking for? Let us know your technical requirements.
              </h3>
              <p className="text-xs sm:text-sm text-slate-700">
                Our principal software architects and digital consultants are available for a confidential discovery session.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <Link
                href="/services"
                className="px-5 py-3 rounded-2xl border border-amber-300 hover:border-amber-400 bg-white hover:bg-amber-50 text-slate-900 text-xs sm:text-sm font-bold transition-all shadow-xs"
              >
                Explore All Capabilities →
              </Link>
              <button
                onClick={() => setConsultationOpen(true)}
                className="px-6 py-3 rounded-2xl bg-[#1163fb] hover:bg-[#0c51d6] text-white text-xs sm:text-sm font-bold transition-all shadow-md active:scale-95 cursor-pointer flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4 shrink-0" />
                <span>Schedule Free Consultation</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Site Global Footer */}
      <SiteFooter onOpenConsultation={() => setConsultationOpen(true)} />

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />
    </div>
  );
}
