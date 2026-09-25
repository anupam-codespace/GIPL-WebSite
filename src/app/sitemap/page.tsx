"use client";


import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Search, X, ChevronRight } from "lucide-react";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import ConsultationModal from "@/components/marketing/ConsultationModal";

interface SitemapItem {
  title: string;
  href: string;
  sublinks?: { title: string; href: string }[];
}

interface SitemapSection {
  id: string;
  heading: string;
  categoryHref?: string;
  items: SitemapItem[];
}

const DIRECTORY_DATA: SitemapSection[] = [
  {
    id: "company",
    heading: "Company & Corporate Overview",
    categoryHref: "/about",
    items: [
      {
        title: "Home",
        href: "/",
        sublinks: [
          { title: "Hero & Executive Overview", href: "/#hero" },
          { title: "Engineering Impact Metrics", href: "/#impact" },
          { title: "Enterprise Technology Services", href: "/#services" },
          { title: "Proprietary Software Showcase", href: "/#products-showcase" },
          { title: "Client Success Testimonials", href: "/#testimonials" },
          { title: "Frequently Asked Questions", href: "/#faq" },
          { title: "Enterprise Consultation CTA", href: "/#consultation" },
        ],
      },
      {
        title: "About Globizhub",
        href: "/about",
        sublinks: [
          { title: "Corporate Background & Ethos", href: "/about" },
          { title: "Engineering Heritage (2018 – 2026)", href: "/about#journey" },
          { title: "National Delivery Grid (4 Hubs)", href: "/about#hubs" },
          { title: "Accreditations & Recognitions", href: "/about#accreditations" },
          { title: "Engineering Principles & Culture", href: "/about#culture" },
          { title: "Why Choose Globizhub", href: "/about#why-choose-us" },
        ],
      },
      {
        title: "National Delivery Grid",
        href: "/about#hubs",
        sublinks: [
          { title: "Bengaluru Corporate Headquarters", href: "/about#hubs" },
          { title: "Guwahati Regional Delivery Center", href: "/about#hubs" },
          { title: "Chennai Cloud & SRE Center", href: "/about#hubs" },
          { title: "Delhi-NCR Enterprise Strategy Hub", href: "/about#hubs" },
        ],
      },
      {
        title: "Careers & Open Positions",
        href: "/career",
        sublinks: [
          { title: "Engineering Roles & Opportunities", href: "/career" },
          { title: "Life at Globizhub", href: "/about#culture" },
        ],
      },
      {
        title: "Contact & Consultations",
        href: "/#consultation",
        sublinks: [
          { title: "Schedule Architecture Discovery", href: "/#consultation" },
          { title: "Direct WhatsApp Support", href: "https://wa.me/918402010207" },
        ],
      },
    ],
  },
  {
    id: "services",
    heading: "Enterprise Technology Services",
    categoryHref: "/services",
    items: [
      {
        title: "Custom Software Engineering",
        href: "/services",
        sublinks: [
          { title: "High-Throughput Microservices & APIs", href: "/services" },
          { title: "Enterprise Web Applications (Next.js / React)", href: "/services" },
          { title: "Legacy System Modernization", href: "/services" },
        ],
      },
      {
        title: "Cloud Architecture & DevOps",
        href: "/services",
        sublinks: [
          { title: "Multi-Cloud & Zero-Downtime Migration", href: "/services" },
          { title: "Kubernetes & Container Orchestration", href: "/services" },
          { title: "Site Reliability Engineering (SRE)", href: "/services" },
          { title: "FinOps & Cloud Cost Optimization", href: "/services" },
        ],
      },
      {
        title: "Artificial Intelligence & Automation",
        href: "/services",
        sublinks: [
          { title: "Autonomous AI Agents & Multi-Agent Workflows", href: "/services" },
          { title: "Enterprise LLMs, RAG & Vector Knowledge", href: "/services" },
          { title: "Predictive Telematics & Big Data Analytics", href: "/services" },
        ],
      },
      {
        title: "Enterprise Mobile Applications",
        href: "/services",
        sublinks: [
          { title: "iOS Swift & Native Apple Engineering", href: "/services" },
          { title: "Android Kotlin & Flutter Systems", href: "/services" },
          { title: "Offline-First Enterprise Sync", href: "/services" },
        ],
      },
      {
        title: "Enterprise UI/UX Design Systems",
        href: "/services",
        sublinks: [
          { title: "Multi-Brand Design Systems & Tokens", href: "/services" },
          { title: "Usability Testing & Accessibility (WCAG 2.1)", href: "/services" },
        ],
      },
    ],
  },
  {
    id: "products",
    heading: "Proprietary Software Platforms",
    categoryHref: "/#products-showcase",
    items: [
      {
        title: "Patholab.Cloud",
        href: "/#products-showcase",
        sublinks: [
          { title: "Diagnostic Laboratory Information OS (LIMS)", href: "/#products-showcase" },
          { title: "Analyzer Machine Direct Telemetry Interfacing", href: "/#products-showcase" },
          { title: "Automated Barcode Sample Tracking", href: "/#products-showcase" },
          { title: "WhatsApp & SMS Patient Reporting Gateway", href: "/#products-showcase" },
        ],
      },
      {
        title: "TeamHub",
        href: "/#products-showcase",
        sublinks: [
          { title: "Enterprise Workforce & HRMS Automation OS", href: "/#products-showcase" },
          { title: "GPS & Facial Biometrics Attendance Telemetry", href: "/#products-showcase" },
          { title: "Automated Payroll & Statutory Tax Engine", href: "/#products-showcase" },
          { title: "Developer Agile Sprint & Task Tracker", href: "/#products-showcase" },
        ],
      },
      {
        title: "Bungzo",
        href: "/#products-showcase",
        sublinks: [
          { title: "Gated Society ERP & Visitor Gate Telematics", href: "/#products-showcase" },
          { title: "Hyperlocal Quick-Commerce Dispatch Router", href: "/#products-showcase" },
          { title: "Real-Time Driver Fleet Management", href: "/#products-showcase" },
        ],
      },
      {
        title: "GlobizLibrary",
        href: "/#products-showcase",
        sublinks: [
          { title: "RFID Automated Academic Library Cataloging", href: "/#products-showcase" },
          { title: "Self-Checkout Kiosk Software & RFID Gates", href: "/#products-showcase" },
          { title: "Digital Research & Journal Repository", href: "/#products-showcase" },
        ],
      },
      {
        title: "Enterprise IMS",
        href: "/#products-showcase",
        sublinks: [
          { title: "Multi-Warehouse Inventory & Supply Chain OS", href: "/#products-showcase" },
          { title: "Automated Reorder Triggers & Stock Telemetry", href: "/#products-showcase" },
        ],
      },
      {
        title: "Globizhub Listing",
        href: "/#products-showcase",
        sublinks: [
          { title: "Sovereign B2B Directory & Verified Supplier Network", href: "/#products-showcase" },
          { title: "Direct RFQ & Commercial Matchmaking", href: "/#products-showcase" },
        ],
      },
    ],
  },
  {
    id: "verticals",
    heading: "Allied Business Verticals",
    categoryHref: "/about#allied-ventures",
    items: [
      {
        title: "E&M Fashion Brand",
        href: "/em-fashion-brand",
        sublinks: [
          { title: "Overview & Fashion Brand Engineering", href: "/em-fashion-brand" },
          { title: "Build Your Own Brand (Turnkey Enablement)", href: "/em-fashion-brand" },
          { title: "Design & Tech-Pack Architecture", href: "/em-fashion-brand" },
          { title: "Certified Ethical Fabric Sourcing (GOTS/OEKO-TEX)", href: "/em-fashion-brand" },
          { title: "Low-MOQ Flexible Manufacturing", href: "/em-fashion-brand" },
          { title: "Fashion Venture Direct Enquiry", href: "/em-fashion-brand" },
        ],
      },
      {
        title: "Freight Forwarding & Logistics",
        href: "/freight-forwarding-logistics",
        sublinks: [
          { title: "Multimodal Cargo Logistics Overview", href: "/freight-forwarding-logistics" },
          { title: "1. Air Freight & Aviation Cargo Express", href: "/freight-forwarding-logistics" },
          { title: "2. Ocean Freight & Deepwater Marine Shipping", href: "/freight-forwarding-logistics" },
          { title: "3. Road Freight & Interstate Highway Transport", href: "/freight-forwarding-logistics" },
          { title: "Customs EDI & Regulatory Compliance", href: "/freight-forwarding-logistics" },
          { title: "Live Telemetry & Cargo Tracking", href: "/freight-forwarding-logistics" },
          { title: "Freight Forwarding Quotation Request", href: "/freight-forwarding-logistics" },
        ],
      },
      {
        title: "Leather Products Manufacturing",
        href: "/leather-products-manufacturing",
        sublinks: [
          { title: "Heritage Leathercraft & Export Atelier", href: "/leather-products-manufacturing" },
          { title: "1. Luxury Bags, Briefcases & Travel Duffels", href: "/leather-products-manufacturing" },
          { title: "2. Handcrafted Wallets & Everyday Essentials", href: "/leather-products-manufacturing" },
          { title: "3. Full-Grain Belts & Solid Brass Goods", href: "/leather-products-manufacturing" },
          { title: "LWG Gold / Silver Tannery Compliance", href: "/leather-products-manufacturing" },
          { title: "Agile Low-MOQ Sampling & Private Label", href: "/leather-products-manufacturing" },
          { title: "Direct Leather Manufacturing Enquiry", href: "/leather-products-manufacturing" },
        ],
      },
      {
        title: "Cross-Border Import & Export",
        href: "/import-export",
        sublinks: [
          { title: "Sovereign Trade Operations Overview", href: "/import-export" },
          { title: "1. Outbound Export from India", href: "/import-export" },
          { title: "2. Inbound Commodity Import to India", href: "/import-export" },
          { title: "3. Cross-Trade & Third-Country Transit", href: "/import-export" },
          { title: "DGFT Regulatory & ICEGATE EDI Advisory", href: "/import-export" },
          { title: "Letters of Credit (LC) & Trade Finance", href: "/import-export" },
          { title: "Direct International Trade Enquiry", href: "/import-export" },
        ],
      },
    ],
  },
  {
    id: "industries",
    heading: "Industry Solutions",
    categoryHref: "/industries",
    items: [
      {
        title: "Healthcare & Life Sciences",
        href: "/industries#healthcare",
        sublinks: [
          { title: "Diagnostic Laboratories & Tele-Pathology", href: "/industries#healthcare" },
          { title: "Electronic Health Records (EHR) & HIPAA Systems", href: "/industries#healthcare" },
        ],
      },
      {
        title: "Supply Chain, Freight & Maritime",
        href: "/industries#logistics",
        sublinks: [
          { title: "Cold-Chain IoT Telemetry & Sensor Tracking", href: "/industries#logistics" },
          { title: "Bonded Warehouse & Port Drayage", href: "/industries#logistics" },
        ],
      },
      {
        title: "Banking, Financial Services & FinTech",
        href: "/industries#finance",
        sublinks: [
          { title: "Multi-Currency Payment Gateways & UPI", href: "/industries#finance" },
          { title: "Automated Ledger Reconciliation", href: "/industries#finance" },
        ],
      },
      {
        title: "Retail & Omnichannel E-Commerce",
        href: "/industries#ecommerce",
        sublinks: [
          { title: "High-Throughput Checkout Engines", href: "/industries#ecommerce" },
          { title: "Multi-Vendor Marketplace Infrastructure", href: "/industries#ecommerce" },
        ],
      },
      {
        title: "Higher Education & EdTech",
        href: "/industries#education",
        sublinks: [
          { title: "Automated RFID Library Catalogs", href: "/industries#education" },
          { title: "Student Information Systems (SIS)", href: "/industries#education" },
        ],
      },
      {
        title: "Smart Communities & Real Estate",
        href: "/industries#real-estate",
        sublinks: [
          { title: "Gated Community ERP & Access Control", href: "/industries#real-estate" },
          { title: "Maintenance Billing & Telematics", href: "/industries#real-estate" },
        ],
      },
    ],
  },
  {
    id: "accreditations",
    heading: "Accreditations & Certifications",
    categoryHref: "/about#accreditations",
    items: [
      {
        title: "Startup India (DPIIT Recognized)",
        href: "/about#accreditations",
        sublinks: [
          { title: "Certificate DIPP33507 Verification", href: "/about#accreditations" },
          { title: "Assam Startup Nest Incubation", href: "/about#accreditations" },
        ],
      },
      {
        title: "Ministry of MSME Government of India",
        href: "/about#accreditations",
        sublinks: [
          { title: "UDYAM Enterprise Registration", href: "/about#accreditations" },
        ],
      },
      {
        title: "International Quality Standards (ISO)",
        href: "/about#accreditations",
        sublinks: [
          { title: "ISO 9001:2015 (Quality Management System)", href: "/about#accreditations" },
          { title: "ISO/IEC 27001:2022 (Information Security)", href: "/about#accreditations" },
          { title: "ISO 20000-1:2018 (IT Service Management)", href: "/about#accreditations" },
        ],
      },
    ],
  },
  {
    id: "legal",
    heading: "Legal, Security & Corporate Policies",
    categoryHref: "/terms",
    items: [
      {
        title: "Terms & Conditions",
        href: "/terms",
        sublinks: [
          { title: "Master Services Agreement (MSA)", href: "/terms" },
          { title: "User Rights & Permitted Use", href: "/terms" },
        ],
      },
      {
        title: "Privacy Policy",
        href: "/privacy",
        sublinks: [
          { title: "Data Collection & DPDP Compliance", href: "/privacy" },
          { title: "Cookie Directives & Consent", href: "/privacy" },
        ],
      },
      {
        title: "Refund & Cancellation Policy",
        href: "/refund",
        sublinks: [
          { title: "Enterprise Software Billing", href: "/refund" },
          { title: "Service Termination Terms", href: "/refund" },
        ],
      },
      {
        title: "Data Security Architecture",
        href: "/data-security",
        sublinks: [
          { title: "AES-256 Cloud Encryption Standards", href: "/data-security" },
          { title: "Strict NDA & Client IP Protection", href: "/data-security" },
        ],
      },
      {
        title: "Corporate Governance & Ethics",
        href: "/corporate-policies",
        sublinks: [
          { title: "Anti-Bribery & Ethical Conduct", href: "/corporate-policies" },
          { title: "Whistleblower & Grievance Mechanism", href: "/corporate-policies" },
        ],
      },
      {
        title: "Search Index & Technical Files",
        href: "/sitemap.xml",
        sublinks: [
          { title: "XML Sitemap Feed (sitemap.xml)", href: "/sitemap.xml" },
          { title: "Search Engine Crawler Directives (robots.txt)", href: "/robots.txt" },
        ],
      },
    ],
  },
];

export default function AppleStyleSitemapPage() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter sections and links based on search input
  const filteredData = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return DIRECTORY_DATA;

    return DIRECTORY_DATA.map((section) => {
      const filteredItems = section.items
        .map((item) => {
          const matchTitle = item.title.toLowerCase().includes(q);
          const matchedSublinks = item.sublinks?.filter((sub) =>
            sub.title.toLowerCase().includes(q)
          );

          if (matchTitle || (matchedSublinks && matchedSublinks.length > 0)) {
            return {
              ...item,
              sublinks: matchedSublinks && matchedSublinks.length > 0 ? matchedSublinks : item.sublinks,
            };
          }
          return null;
        })
        .filter(Boolean) as SitemapItem[];

      return {
        ...section,
        items: filteredItems,
      };
    }).filter((section) => section.items.length > 0);
  }, [searchQuery]);

  const totalLinksCount = useMemo(() => {
    let count = 0;
    DIRECTORY_DATA.forEach((sec) => {
      sec.items.forEach((item) => {
        count += 1;
        if (item.sublinks) count += item.sublinks.length;
      });
    });
    return count;
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-800 font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Global Navigation Header */}
      <SiteHeader onOpenConsultation={() => setConsultationOpen(true)} />

      {/* Breadcrumb Navigation - Styled like Apple's Top Navigation */}
      <div className="pt-24 border-b border-slate-200 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center text-xs text-slate-500 font-medium">
            <Link href="/" className="hover:text-slate-900 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 mx-2 text-slate-400 shrink-0" />
            <span className="text-slate-900 font-semibold">Site Map</span>
          </nav>
        </div>
      </div>

      {/* Main Sitemap Content Canvas */}
      <main className="py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Block: Clean Apple-Style Typography */}
          <div className="border-b border-slate-200 pb-8 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-950 mb-3">
                Site Map
              </h1>
              <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
                Complete directory of web pages, enterprise software platforms, sovereign allied business verticals, and statutory compliance documentation across Globizhub India Private Limited.
              </p>
            </div>

            {/* Subtle Search Bar */}
            <div className="w-full md:w-80 shrink-0">
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter site directory..."
                  className="w-full pl-9 pr-9 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:bg-white focus:border-slate-400 transition-all"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 p-0.5 cursor-pointer"
                    aria-label="Clear filter"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
              <div className="mt-1.5 flex items-center justify-between text-[11px] text-slate-400 px-1">
                <span>{searchQuery ? `Showing filtered matches` : `${totalLinksCount} indexed links`}</span>
                <Link href="/sitemap.xml" className="text-blue-600 hover:underline">
                  XML Feed
                </Link>
              </div>
            </div>
          </div>

          {/* Directory Sections in Clean Multi-Column Grid */}
          {filteredData.length === 0 ? (
            <div className="py-20 text-center border border-dashed border-slate-200 rounded-2xl my-8">
              <p className="text-slate-600 text-sm mb-3">
                No matching pages or links found for &ldquo;{searchQuery}&rdquo;.
              </p>
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="text-xs font-semibold text-blue-600 hover:underline cursor-pointer"
              >
                Clear filter
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
              {filteredData.map((section) => (
                <div key={section.id} className="space-y-6">
                  {/* Category Header with Clean Apple-Style 1px Divider */}
                  <div className="border-b border-slate-200 pb-2">
                    {section.categoryHref ? (
                      <Link
                        href={section.categoryHref}
                        className="text-xs font-bold uppercase tracking-wider text-slate-950 hover:text-blue-600 transition-colors block"
                      >
                        {section.heading}
                      </Link>
                    ) : (
                      <h2 className="text-xs font-bold uppercase tracking-wider text-slate-950">
                        {section.heading}
                      </h2>
                    )}
                  </div>

                  {/* Links List */}
                  <div className="space-y-4">
                    {section.items.map((item, idx) => (
                      <div key={idx} className="space-y-1">
                        <Link
                          href={item.href}
                          className="text-[13px] font-semibold text-slate-900 hover:text-blue-600 hover:underline transition-colors block leading-snug"
                        >
                          {item.title}
                        </Link>

                        {/* Indented Sublinks */}
                        {item.sublinks && item.sublinks.length > 0 && (
                          <ul className="pl-3 space-y-1 border-l border-slate-200 my-1.5">
                            {item.sublinks.map((sub, sIdx) => (
                              <li key={sIdx}>
                                <Link
                                  href={sub.href}
                                  className="text-[12px] text-slate-600 hover:text-slate-950 hover:underline transition-colors block py-0.5 leading-relaxed"
                                >
                                  {sub.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Understated Directory Footer Note */}
          <div className="mt-20 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <p>
              Globizhub India Private Limited · DPIIT Recognized Startup · ISO 9001, ISO 27001 &amp; ISO 20000 Certified
            </p>
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="hover:text-slate-900 hover:underline">
                Privacy Policy
              </Link>
              <span>·</span>
              <Link href="/terms" className="hover:text-slate-900 hover:underline">
                Terms of Service
              </Link>
              <span>·</span>
              <Link href="/sitemap.xml" className="hover:text-slate-900 hover:underline">
                XML Sitemap
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Global Footer */}
      <SiteFooter onOpenConsultation={() => setConsultationOpen(true)} />

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />
    </div>
  );
}
