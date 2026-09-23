"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  Building2,
  MapPin,
  Award,
  Globe2,
  Cpu,
  Layers,
  HeartPulse,
  ShoppingBag,
  Zap,
  TrendingUp,
  Clock,
  Users,
  Code2,
  ChevronRight,
  ExternalLink,
  Target,
  Compass,
  Briefcase,
  Smile,
  Shield,
  Laptop,
  Boxes,
  BookOpen
} from "lucide-react";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import ConsultationModal from "@/components/marketing/ConsultationModal";

// -------------------------------------------------------------
// Timeline Data: 2018 to 2026 (Globizhub's True Journey)
// -------------------------------------------------------------
interface Milestone {
  year: string;
  title: string;
  description: string;
  badge: string;
  highlights: string[];
  stats: string;
  image: string;
}

const MILESTONES: Milestone[] = [
  {
    year: "2018",
    title: "The Genesis & Incorporation",
    badge: "Foundation Year",
    description:
      "Globizhub India Pvt Ltd. was incorporated with an uncompromising mission: to architect enterprise-grade software with silicon-grade reliability. With an initial core team of 8 visionary engineers in Guwahati and Bengaluru, we delivered our first multi-tenant healthcare application in under 90 days.",
    highlights: [
      "Incorporated as Globizhub India Pvt Ltd.",
      "First healthcare diagnostic software deployed",
      "Dual development hubs established in Bengaluru & Guwahati"
    ],
    stats: "8 Founding Engineers • 100% On-Time Delivery",
    image: "/images/hero_tech_bg.jpg"
  },
  {
    year: "2019",
    title: "Healthcare & Logistics Breakthrough",
    badge: "Market Traction",
    description:
      "Crossed 40+ production deployments across clinical pathology, diagnostic laboratories, and supply chain logistics. We instituted rigorous automated CI/CD pipelines, lowering production rollbacks to less than 0.1% and cementing our reputation as a trusted engineering vendor.",
    highlights: [
      "Surpassed 40+ completed enterprise projects",
      "Architected specialized cold-chain logistics telemetry",
      "Expanded engineering squad to 30+ full-stack specialists"
    ],
    stats: "40+ Deployments • 99.8% System Reliability",
    image: "/images/industry_healthcare.jpg"
  },
  {
    year: "2020",
    title: "Cloud Resilience & Pandemic Support",
    badge: "Hyper-Scale Cloud",
    description:
      "During the global pandemic, Globizhub stood as a critical technology backbone. We scaled cloud healthcare systems to handle a 700% surge in real-time diagnostic reporting and tele-consultations with zero downtime across 15 states in India.",
    highlights: [
      "Scaled cloud microservices for 700% traffic surge",
      "Engineered automated barcode sample tracking for labs",
      "Transitioned to distributed zero-trust remote engineering"
    ],
    stats: "1.2M+ Patient Reports Handled • 0 Downtime",
    image: "/images/hero_architecture.jpg"
  },
  {
    year: "2021",
    title: "Startup India & Assam Startup Recognition",
    badge: "Government Recognition",
    description:
      "Formally recognized and accredited by Startup India (#startupindia) under the Department for Promotion of Industry and Internal Trade (DPIIT), Ministry of Commerce & Industry, Govt of India, and incubated at Assam Startup Nest under the flagship Advantage Assam initiative.",
    highlights: [
      "Awarded DPIIT #startupindia Certification (DIPP33507)",
      "Incubated & recognized by Assam Startup (Govt of Assam)",
      "Ministry of MSME Enterprise Accreditation"
    ],
    stats: "Official DPIIT Recognition • Govt of Assam Incubated",
    image: "/images/assam_startup_logo_transparent.png"
  },
  {
    year: "2022",
    title: "Launch of Patholab.cloud & Bungzo",
    badge: "SaaS Ecosystem",
    description:
      "Launched our proprietary flagship SaaS products: Patholab.cloud (intelligent laboratory information management system) and Bungzo (modern society and gated-community ERP platform), creating scalable recurring value for thousands of daily active users.",
    highlights: [
      "Patholab.cloud deployed across 350+ diagnostic centers",
      "Bungzo adopted across premium residential societies",
      "Integrated automated WhatsApp & SMS notification gateways"
    ],
    stats: "350+ Labs Live • 25,000+ Daily Residents Managed",
    image: "/images/patholab_preview.jpg"
  },
  {
    year: "2023",
    title: "Triple ISO Quality & Security Certification",
    badge: "Global ISO Standards",
    description:
      "Achieved triple international ISO certifications after rigorous third-party enterprise audits: ISO 9001:2015 for Quality Management, ISO/IEC 27001:2022 for Information Security Management, and ISO/IEC 20000-1:2018 for IT Service Management.",
    highlights: [
      "Certified ISO 9001:2015 (Quality Management System)",
      "Certified ISO/IEC 27001:2022 (Information Security)",
      "Certified ISO/IEC 20000-1:2018 (IT Service Management)"
    ],
    stats: "Triple ISO Certified • Zero Security Non-Conformances",
    image: "/images/iso_27001_certified_badge.png"
  },
  {
    year: "2024",
    title: "Delivery Expansion: Chennai & Delhi-NCR",
    badge: "National Delivery Grid",
    description:
      "Inaugurated dedicated Cloud & DevOps delivery center in Chennai's OMR IT corridor and our Corporate Strategy & Enterprise office in Sector 62, Noida (Delhi-NCR). Team expanded to 150+ engineers, data architects, and certified cloud professionals.",
    highlights: [
      "Opened Chennai Cloud & SRE Delivery Center",
      "Established Delhi-NCR Corporate & Strategic Office",
      "Crossed 200+ bespoke enterprise software deliveries"
    ],
    stats: "4 Delivery Centers • 150+ Full-Time Engineers",
    image: "/images/footer_team.jpg"
  },
  {
    year: "2025",
    title: "Globizhub AI Lab & Agentic Workflows",
    badge: "AI Frontier",
    description:
      "Launched the Globizhub AI Lab, delivering private enterprise RAG systems, autonomous agentic workflows, and multimodal computer vision models for diagnostic radiology, automated quality inspection, and intelligent document extraction.",
    highlights: [
      "Delivered 30+ bespoke Enterprise AI & LLM architectures",
      "Deployed autonomous customer experience agent squads",
      "Expanded client footprint to GCC, UK, and North America"
    ],
    stats: "30+ AI Systems Deployed • 4× Operational ROI",
    image: "/images/tech_alignment_orbs.jpg"
  },
  {
    year: "2026",
    title: "Next-Gen Enterprise Engineering",
    badge: "Global Impact",
    description:
      "Today, Globizhub India Pvt Ltd. stands as a premier digital engineering partner for global enterprises. Operating across 4 delivery centers, we fuse agile product thinking, sovereign cloud architectures, and autonomous AI systems to build tomorrow's digital economy.",
    highlights: [
      "150+ Engineers across 4 State-of-the-Art Delivery Hubs",
      "Serving clients in 15+ countries across 25+ industries",
      "Pioneering autonomous enterprise operations and AI governance"
    ],
    stats: "200+ Enterprise Deployments • 99.9% Uptime SLA",
    image: "/images/glass_growth_arrow.jpg"
  }
];

// -------------------------------------------------------------
// Delivery Centers Data
// -------------------------------------------------------------
const DELIVERY_CENTERS = [
  {
    city: "Bengaluru",
    role: "Headquarters & AI Engineering Center",
    state: "Karnataka, India",
    address: "HSR Layout & Koramangala Tech Corridor, Bengaluru - 560102",
    details:
      "Our flagship research and engineering headquarters, housing our core architecture squad, AI/ML laboratory, and high-throughput cloud systems engineers.",
    badge: "Global HQ",
    coordinates: "12.9141° N, 77.6411° E"
  },
  {
    city: "Guwahati",
    role: "Regional Hub & Assam Startup Nest",
    state: "Assam, India",
    address: "Assam Startup Nest, Ambari / Tech City, Guwahati - 781001",
    details:
      "Incubated and recognized by the Government of Assam. Drives public sector digital transformation, healthcare informatics, and regional engineering talent incubation.",
    badge: "Incubated Hub",
    coordinates: "26.1445° N, 91.7362° E"
  },
  {
    city: "Chennai",
    role: "Cloud Architecture & DevOps Delivery Center",
    state: "Tamil Nadu, India",
    address: "Old Mahabalipuram Road (OMR) IT Expressway, Chennai - 600096",
    details:
      "Dedicated 24/7 Site Reliability Engineering (SRE), Kubernetes orchestration, SOC operations, and enterprise zero-trust cloud infrastructure teams.",
    badge: "Cloud & SRE",
    coordinates: "12.9716° N, 80.2459° E"
  },
  {
    city: "Delhi-NCR",
    role: "Corporate Strategy & Enterprise Solutions",
    state: "Uttar Pradesh, India",
    address: "Sector 62, Institutional Area, Noida, Delhi-NCR - 201309",
    details:
      "Focuses on enterprise client partnerships, corporate technology strategy, legal compliance, and North India enterprise program delivery.",
    badge: "Corporate Office",
    coordinates: "28.6280° N, 77.3649° E"
  }
];

// -------------------------------------------------------------
// Recognitions & Accreditations Data
// -------------------------------------------------------------
const RECOGNITIONS = [
  {
    name: "Assam Startup",
    badge: "Govt of Assam",
    authority: "Department of Industries & Commerce, Govt of Assam",
    desc: "Recognized and incubated under the flagship Advantage Assam initiative, driving digital healthcare and regional technological innovation.",
    logo: "/images/assam_startup_logo_transparent.png",
    type: "Government Accreditation"
  },
  {
    name: "DPIIT #startupindia",
    badge: "DIPP33507",
    authority: "Ministry of Commerce & Industry, Govt of India",
    desc: "Officially certified under the Startup India initiative by the Department for Promotion of Industry and Internal Trade (DPIIT) for innovative software engineering.",
    logo: "/images/dpiit_logo_transparent.png",
    type: "National Certification"
  },
  {
    name: "Ministry of MSME",
    badge: "Govt of India",
    authority: "Ministry of Micro, Small and Medium Enterprises",
    desc: "Formally registered enterprise fostering indigenous intellectual property, digital inclusion, and skilled tech employment.",
    logo: "/images/msme_official_white.png",
    type: "Statutory Recognition"
  },
  {
    name: "Make in India",
    badge: "National Initiative",
    authority: "Government of India",
    desc: "Championing world-class software engineered in India for global enterprises, proving the strength of Indian engineering.",
    logo: "/images/make_in_india_lion.png",
    type: "National Benchmark"
  },
  {
    name: "ISO 9001:2015",
    badge: "Quality Management",
    authority: "International Organization for Standardization",
    desc: "Certified for maintaining standardized, audit-proven software design, rigorous testing, and continuous delivery pipelines.",
    logo: "/images/iso_9001_certified_badge.png",
    type: "International Standard"
  },
  {
    name: "ISO/IEC 27001:2022",
    badge: "Information Security",
    authority: "International Organization for Standardization",
    desc: "Certified for zero-trust information security management systems (ISMS), data encryption at rest and in transit, and vulnerability defense.",
    logo: "/images/iso_27001_certified_badge.png",
    type: "Security Benchmark"
  },
  {
    name: "ISO/IEC 20000-1:2018",
    badge: "IT Service Management",
    authority: "International Organization for Standardization",
    desc: "Certified for world-class IT service delivery, incident response SLA governance, and mission-critical cloud system availability.",
    logo: "/images/iso_20000_certified_badge.png",
    type: "Service Excellence"
  }
];

// -------------------------------------------------------------
// FAQs Data
// -------------------------------------------------------------
const ABOUT_FAQS = [
  {
    q: "Who is Globizhub India Pvt Ltd. and what are your core capabilities?",
    a: "Globizhub India Pvt Ltd. (GHPL) is an enterprise digital product engineering, cloud transformation, and AI solutions company headquartered in Bengaluru with delivery hubs in Guwahati, Chennai, and Delhi-NCR. We specialize in custom software architecture, full-lifecycle web and mobile application engineering, autonomous AI agents, legacy system modernization, and secure cloud operations."
  },
  {
    q: "What official recognitions and accreditations does Globizhub hold?",
    a: "Globizhub is recognized by Startup India (#startupindia) under the Department for Promotion of Industry and Internal Trade (DPIIT, Ministry of Commerce & Industry, Govt of India), incubated at Assam Startup Nest by the Government of Assam, registered with the Ministry of MSME, and holds triple international ISO certifications: ISO 9001:2015 (Quality Management), ISO/IEC 27001:2022 (Information Security), and ISO/IEC 20000-1:2018 (IT Service Management)."
  },
  {
    q: "How does Globizhub guarantee data protection and regulatory compliance (HIPAA, GDPR, ISO)?",
    a: "Every solution we architect adheres to strict security-by-design principles. We enforce AES-256 encryption at rest, TLS 1.3 in transit, role-based access control (RBAC), and automated vulnerability scanning in our CI/CD pipelines. For healthcare and fintech clients, our architectures comply strictly with HIPAA, GDPR, and PCI-DSS requirements."
  },
  {
    q: "What proprietary products has Globizhub developed?",
    a: "Globizhub has developed and operates 5 proprietary enterprise platforms: Patholab.Cloud (intelligent cloud diagnostic LIMS processing over 500,000 specimens monthly), TeamHub (workforce operations and sprint velocity orchestration), Bungzo (hyperlocal quick-commerce and delivery logistics engine), GlobizLibrary (digital cataloging and automated academic RFID repository), and Enterprise IMS (multi-warehouse inventory and supply chain tracking)."
  },
  {
    q: "What engagement models do you offer to enterprises?",
    a: "We offer flexible enterprise engagement models: (1) Fixed-Scope Product Delivery with guaranteed milestones and deliverables, (2) Dedicated Engineering Squads acting as seamless extensions of your internal engineering leadership, and (3) Strategic Technology & AI Consulting on time-and-materials or retainer basis. Every model is governed by clear SLAs and transparent sprint reports."
  }
];

export default function AboutPage() {
  const [activeYear, setActiveYear] = useState<string>("2026");
  const [activeCultureTab, setActiveCultureTab] = useState<"culture" | "impact">("culture");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [consultationOpen, setConsultationOpen] = useState<boolean>(false);

  const currentMilestone =
    MILESTONES.find((m) => m.year === activeYear) || MILESTONES[MILESTONES.length - 1];

  return (
    <div className="min-h-screen bg-[#000000] text-white font-['Plus_Jakarta_Sans',sans-serif] selection:bg-blue-600 selection:text-white antialiased overflow-x-hidden">
      {/* Universal Floating Header */}
      <SiteHeader
        onOpenConsultation={() => setConsultationOpen(true)}
      />

      {/* ======================================================== */}
      {/* 1. HERO SECTION: Pitch Dark with Deep Ambient Glow        */}
      {/* ======================================================== */}
      <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden bg-radial from-[#0c1427] via-[#04060c] to-[#000000]">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[450px] h-[300px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Subtitle Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-semibold text-blue-400 mb-6 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>The Globizhub Story</span>
          </div>

          {/* Master Headline (Appinventiv Benchmark Style) */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-[1.15] mb-6">
            150+ Engineers. 200+ Enterprise Masterpieces.{" "}
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              One Vision.
            </span>
          </h1>

          {/* High-Impact Mission Statement */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed mb-10">
            We are an enterprise digital engineering powerhouse trusted by growth companies and enterprises to transform their boldest visions into market-leading realities. Armed with top-tier talent, deep AI expertise, and battle-tested frameworks, we don&apos;t just build software—we architect competitive advantages that scale.
          </p>

          {/* 4 Hero Metric Cards with Distinct Soft Pastel Tints (Exact Appinventiv Style) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto mb-12">
            {/* Card 1: Purple */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#1b152b]/80 border border-purple-500/20 text-left transition-transform hover:-translate-y-1 duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2 flex items-baseline gap-1">
                <span>25</span>
                <span className="text-purple-400 text-2xl font-semibold">+</span>
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-300">
                Industries Mastered
              </div>
            </div>

            {/* Card 2: Green */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#12221b]/80 border border-emerald-500/20 text-left transition-transform hover:-translate-y-1 duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2 flex items-baseline gap-1">
                <span>10</span>
                <span className="text-emerald-400 text-2xl font-semibold">+</span>
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-300">
                Accreditations &amp; Certifications
              </div>
            </div>

            {/* Card 3: Blue */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#111f38]/80 border border-blue-500/20 text-left transition-transform hover:-translate-y-1 duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2 flex items-baseline gap-1">
                <span>15</span>
                <span className="text-blue-400 text-2xl font-semibold">+</span>
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-300">
                Global Markets Served
              </div>
            </div>

            {/* Card 4: Yellow */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#292212]/80 border border-amber-500/20 text-left transition-transform hover:-translate-y-1 duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2 flex items-baseline gap-1">
                <span>4</span>
                <span className="text-amber-400 text-2xl font-semibold"> Hubs</span>
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-300">
                Excellence &amp; Delivery Centers
              </div>
            </div>
          </div>

          {/* Hero Rolling Text-Swap CTA Button */}
          <div className="flex justify-center">
            <button
              onClick={() => setConsultationOpen(true)}
              className="swap-text-button px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm sm:text-base rounded-full shadow-[0_0_30px_rgba(17,99,251,0.35)] transition-all group"
            >
              <span className="text-original flex items-center gap-2">
                <span>Consult Our Experts</span>
                <ArrowRight className="w-4 h-4" />
              </span>
              <span className="text-hover flex items-center justify-center gap-2">
                <span>Discuss Your Vision</span>
                <ArrowRight className="w-4 h-4" />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. OUR JOURNEY / INTERACTIVE YEARLY SLIDER (2018 - 2026) */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-28 bg-[#05070e] border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3 block">
              Continuous Evolution
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
              A Journey of Engineering Excellence
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Explore the key milestones that shaped Globizhub India Pvt Ltd. from an ambitious startup into a premier enterprise digital transformation partner.
            </p>
          </div>

          {/* Interactive Year Pill Scroller */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-10 no-scrollbar">
            {MILESTONES.map((m) => {
              const isActive = m.year === activeYear;
              return (
                <button
                  key={m.year}
                  onClick={() => setActiveYear(m.year)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 shrink-0 ${
                    isActive
                      ? "bg-blue-600 text-white shadow-[0_0_20px_rgba(17,99,251,0.4)] scale-105"
                      : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5"
                  }`}
                >
                  {m.year}
                </button>
              );
            })}
          </div>

          {/* Active Milestone Display Card */}
          <div className="bg-[#0b101c] border border-white/10 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Milestone Details */}
              <div className="lg:col-span-7">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-4xl sm:text-6xl font-extrabold text-blue-500 font-mono">
                    {currentMilestone.year}
                  </span>
                  <span className="px-3.5 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-400 text-xs font-semibold">
                    {currentMilestone.badge}
                  </span>
                </div>

                <h3 className="text-xl sm:text-3xl font-bold text-white mb-4 leading-tight">
                  {currentMilestone.title}
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  {currentMilestone.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2.5 mb-6">
                  {currentMilestone.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom Metric Pill */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/5 border border-white/10 text-xs sm:text-sm font-semibold text-slate-300">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  <span>{currentMilestone.stats}</span>
                </div>
              </div>

              {/* Right Column: Visual Graphic / Badge */}
              <div className="lg:col-span-5 flex items-center justify-center">
                <div className="relative w-full aspect-video sm:aspect-square max-w-md rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                  <Image
                    src={currentMilestone.image}
                    alt={currentMilestone.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Globizhub Milestone
                    </div>
                    <div className="text-sm sm:text-base font-bold text-white line-clamp-1">
                      {currentMilestone.title}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. RECOGNITION ROOTED IN RESULTS (Appinventiv Benchmark)  */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-28 bg-[#000000] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-3 block">
              Statutory Trust &amp; Quality
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
              Recognition Rooted in Results
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Every accreditation and certification we hold confirms our relentless commitment to enterprise rigor, zero-defect engineering, and sovereign data security.
            </p>
          </div>

          {/* Recognitions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {RECOGNITIONS.map((rec, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-[#090d16] border border-white/10 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:shadow-2xl"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="h-14 w-auto flex items-center">
                      <Image
                        src={rec.logo}
                        alt={rec.name}
                        width={120}
                        height={56}
                        className="object-contain h-12 max-w-[130px] filter brightness-100 group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-semibold text-slate-300">
                      {rec.badge}
                    </span>
                  </div>

                  <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">
                    {rec.type}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{rec.name}</h3>
                  <div className="text-xs text-slate-400 mb-4 font-medium">
                    {rec.authority}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {rec.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-blue-400 transition-colors">
                  <span>Verified &amp; Active</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. GLOBAL DELIVERY CENTERS & OFFICES                     */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-28 bg-[#05070e] border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3 block">
              National Delivery Grid
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
              Our 4 Delivery &amp; Excellence Centers
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Strategically distributed across India&apos;s leading technology capitals, enabling 24/7 continuous engineering, sovereign compliance, and rapid client proximity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DELIVERY_CENTERS.map((hub, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-[#0a0f1c] border border-white/10 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between shadow-xl group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-blue-600/15 border border-blue-500/30 text-blue-400 flex items-center justify-center">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold">
                      {hub.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">{hub.city}</h3>
                  <div className="text-xs font-semibold text-blue-400 mb-3">{hub.role}</div>
                  <div className="flex items-start gap-2 text-xs text-slate-400 mb-4">
                    <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                    <span>{hub.address}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {hub.details}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>{hub.coordinates}</span>
                  <span className="text-emerald-400 font-sans font-semibold">Active Hub</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. OUR CORE OPERATING PRINCIPLES (Appinventiv Style)     */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-28 bg-[#000000] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-3 block">
              Ethos &amp; Values
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
              How We Create Defensible Value
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              The foundational principles that guide every architectural blueprint, code commit, and client partnership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Principle 1 */}
            <div className="p-8 rounded-3xl bg-[#0a0e1a] border border-white/10 hover:border-purple-500/40 transition-all duration-300 shadow-xl group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-purple-500/15 border border-purple-500/30 text-purple-400 flex items-center justify-center mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  We Keep Our Eye On The ROI
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Every solution we build begins with a solid business case. We connect each technical feature to its measurable ROI, set concrete performance targets, and track them from day one. By refining user journeys and tuning cloud infrastructure, we cut waste and lift conversions.
                </p>
              </div>
              <div className="text-xs font-semibold text-purple-400 flex items-center gap-1.5">
                <span>Measurable Commercial Impact</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Principle 2 */}
            <div className="p-8 rounded-3xl bg-[#0a0e1a] border border-white/10 hover:border-blue-500/40 transition-all duration-300 shadow-xl group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-500/15 border border-blue-500/30 text-blue-400 flex items-center justify-center mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  We Own Responsibilities
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  We employ the latest infrastructure, tech stacks, management processes, and security measures gained from a diverse portfolio across 25+ industries. We take complete ownership from architecture to 24/7 cloud reliability without shifting accountability.
                </p>
              </div>
              <div className="text-xs font-semibold text-blue-400 flex items-center gap-1.5">
                <span>End-to-End SLA Accountability</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Principle 3 */}
            <div className="p-8 rounded-3xl bg-[#0a0e1a] border border-white/10 hover:border-emerald-500/40 transition-all duration-300 shadow-xl group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-6">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                  We Work Tirelessly
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  In an inclusive, progressive, and symbiotic engineering environment. Our culture inspires impactful innovations, continuous skill development, and work-life balance, allowing our teams to solve complex algorithmic and architectural challenges with joy.
                </p>
              </div>
              <div className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                <span>Engineering Excellence Culture</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 6. TWO POWERHOUSE DIVISIONS: AI & DIGITAL/CLOUD          */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-28 bg-[#05070e] border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Division 1: Globizhub AI */}
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#12102e] to-[#0a0c16] border border-purple-500/30 relative overflow-hidden flex flex-col justify-between group shadow-2xl">
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold uppercase tracking-wider mb-4">
                  Center of AI Excellence
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
                  Pioneer the AI Revolution through{" "}
                  <span className="text-purple-400 italic font-extrabold">Globizhub AI</span>
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                  While others merely call third-party APIs, we architect sovereign intelligent ecosystems. Globizhub AI is our dedicated Center of Excellence, embedding private RAG systems, autonomous multi-agent reasoning, and multimodal computer vision into mission-critical enterprise workflows.
                </p>
              </div>

              <div className="relative z-10 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setConsultationOpen(true)}
                  className="swap-text-button px-6 py-3 bg-white text-slate-950 hover:bg-slate-100 font-bold text-xs sm:text-sm rounded-full transition-all group"
                >
                  <span className="text-original flex items-center gap-1.5">
                    <span>Explore Globizhub AI Solutions</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-hover flex items-center justify-center gap-1.5">
                    <span>Discuss AI Roadmap</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </button>
              </div>
            </div>

            {/* Division 2: Globizhub Digital & Cloud */}
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#0c1b2d] to-[#070e1a] border border-blue-500/30 relative overflow-hidden flex flex-col justify-between group shadow-2xl">
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider mb-4">
                  Enterprise Scale
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
                  Scale Your Market Impact with{" "}
                  <span className="text-blue-400 italic font-extrabold">Globizhub Cloud</span>
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                  Building exceptional digital platforms is only half the battle. Globizhub Cloud &amp; Digital completes your transformation by ensuring your systems scale seamlessly to millions of concurrent requests with sub-100ms latency, zero-trust cybersecurity, and automated FinOps optimization.
                </p>
              </div>

              <div className="relative z-10 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setConsultationOpen(true)}
                  className="swap-text-button px-6 py-3 bg-blue-600 text-white hover:bg-blue-500 font-bold text-xs sm:text-sm rounded-full transition-all group shadow-lg"
                >
                  <span className="text-original flex items-center gap-1.5">
                    <span>View Cloud Architecture Services</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-hover flex items-center justify-center gap-1.5">
                    <span>Schedule Tech Audit</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 7. OUR PROPRIETARY PRODUCTS: The Globizhub Suite        */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-28 bg-[#000000] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3 block">
              Proprietary Enterprise Ecosystem
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
              Products Engineered by Globizhub
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Beyond bespoke engineering, we build, scale, and operate 5 mission-critical proprietary platforms powering diagnostics, quick-commerce, workforce operations, academic research, and global supply chains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Product 1: Patholab.Cloud */}
            <div className="p-7 sm:p-8 rounded-3xl bg-[#0a0f1d] border border-white/10 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between shadow-2xl group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/90 p-1 flex items-center justify-center shrink-0 shadow-sm">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/products/patholab-cloud-logo.png"
                      alt="Patholab.Cloud"
                      className="w-full h-full object-contain rounded-xl"
                    />
                  </div>

                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  Patholab.Cloud — Smart Diagnostic Core
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Next-generation cloud-based Laboratory Information Management System (LIMS) automating patient diagnostics, bidirectional analyzer interfacing, barcoding, digital report dispatch via WhatsApp/SMS, and NABL-compliant audit trails.
                </p>

                <div className="space-y-2 mb-8 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>500,000+ patient test specimens processed monthly</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Sub-second analyzer sync with zero sample loss</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Automated QR verification and WhatsApp report dispatch</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <a
                  href="https://patholab.cloud"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <span>Explore Patholab.Cloud</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <span className="text-xs text-slate-500 font-semibold">350+ Labs Active</span>
              </div>
            </div>

            {/* Product 2: TeamHub */}
            <div className="p-7 sm:p-8 rounded-3xl bg-[#0a0f1d] border border-white/10 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between shadow-2xl group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-blue-200/90 p-1.5 flex items-center justify-center shrink-0 shadow-sm">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/products/teamhub-logo.png"
                      alt="TeamHub"
                      className="w-full h-full object-contain"
                    />
                  </div>

                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  TeamHub — Workforce &amp; Sprint Platform
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Centralized workforce operations platform with GPS-fenced biometric attendance, automated developer velocity analytics, milestone tracking, and seamless automated payroll processing.
                </p>

                <div className="space-y-2 mb-8 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>GPS-geofenced biometric attendance with face verification</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Automated developer velocity analytics &amp; sprint tracking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Automated milestone payroll calculation &amp; disbursements</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <Link
                  href="/#products-showcase"
                  className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span>Explore TeamHub OS</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
                <span className="text-xs text-slate-500 font-semibold">100% Transparency</span>
              </div>
            </div>

            {/* Product 3: Bungzo */}
            <div className="p-7 sm:p-8 rounded-3xl bg-[#0a0f1d] border border-white/10 hover:border-red-500/40 transition-all duration-300 flex flex-col justify-between shadow-2xl group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-red-200/90 p-1.5 flex items-center justify-center shrink-0 shadow-sm">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/products/bungzo-logo.png"
                      alt="Bungzo"
                      className="w-full h-full object-contain"
                    />
                  </div>

                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  Bungzo — Hyperlocal Delivery Engine
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  All-in-one hyperlocal quick-commerce engine with sub-20 minute order dispatch, intelligent rider routing, live geospatial tracking, and frictionless checkout.
                </p>

                <div className="space-y-2 mb-8 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0" />
                    <span>18-minute average dispatch routing &amp; live GPS telematics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0" />
                    <span>99.4% order fulfillment SLA across dark stores</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0" />
                    <span>Automated UPI payment gateway integration &amp; instant settlement</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <a
                  href="https://bungzo.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-red-400 hover:text-red-300 transition-colors"
                >
                  <span>Explore Bungzo Platform</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <span className="text-xs text-slate-500 font-semibold">18-Min Dispatch</span>
              </div>
            </div>

            {/* Product 4: GlobizLibrary */}
            <div className="p-7 sm:p-8 rounded-3xl bg-[#0a0f1d] border border-white/10 hover:border-orange-500/40 transition-all duration-300 flex flex-col justify-between shadow-2xl group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-orange-200/90 p-1.5 flex items-center justify-center shrink-0 shadow-sm">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/products/globizlibrary-logo.png"
                      alt="GlobizLibrary"
                      className="w-full h-full object-contain"
                    />
                  </div>

                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  GlobizLibrary — Academic RFID Core
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Comprehensive digital academic library management system managing over 250,000 cataloged titles with RFID kiosk checkouts, digital archives, and unified OPAC discovery.
                </p>

                <div className="space-y-2 mb-8 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                    <span>250,000+ cataloged academic titles and research papers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                    <span>RFID kiosk automated book issue and return stations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                    <span>Real-time OPAC full-text discovery and overdue ledgers</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <Link
                  href="/#products-showcase"
                  className="inline-flex items-center gap-2 text-xs font-bold text-orange-400 hover:text-orange-300 transition-colors"
                >
                  <span>Explore GlobizLibrary</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
                <span className="text-xs text-slate-500 font-semibold">250K+ Titles</span>
              </div>
            </div>

            {/* Product 5: Enterprise IMS */}
            <div className="p-7 sm:p-8 rounded-3xl bg-[#0a0f1d] border border-white/10 hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between shadow-2xl group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-600 border border-indigo-300/80 p-2 flex items-center justify-center text-white shrink-0 shadow-sm">
                    <Boxes className="w-7 h-7 text-white stroke-[2.2]" />
                  </div>

                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  Enterprise IMS — Inventory OS
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Enterprise multi-warehouse inventory tracking system with dynamic batch traceability, real-time reorder thresholds, barcode scanning, and multi-location ERP integration.
                </p>

                <div className="space-y-2 mb-8 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span>1,200,000+ SKUs monitored across multi-node hubs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span>Dynamic safety-stock calculation &amp; automated purchase orders</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span>99.9% physical audit stock accuracy and ERP sync</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <Link
                  href="/#products-showcase"
                  className="inline-flex items-center gap-2 text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  <span>Explore Enterprise IMS</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
                <span className="text-xs text-slate-500 font-semibold">1.2M+ SKUs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 8. FREQUENTLY ASKED QUESTIONS (Appinventiv Style Accordion) */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-28 bg-[#05070e] border-y border-white/5 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3 block">
              Enterprise Inquiries
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Everything you need to know about Globizhub India Pvt Ltd., our credentials, security standards, and partnership models.
            </p>
          </div>

          <div className="space-y-4">
            {ABOUT_FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#0a0f1d] border border-white/10 overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 group"
                  >
                    <span className="text-sm sm:text-base font-bold text-white group-hover:text-blue-400 transition-colors">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 group-hover:text-white transition-transform duration-300 shrink-0 ${
                        isOpen ? "rotate-180 text-blue-400" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-4 animate-fadeIn">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 9. BOTTOM HIGH-IMPACT CALL TO ACTION BANNER              */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-[#000000] via-[#070b16] to-[#000000] relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(17,99,251,0.18)_0,transparent_70%)] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Transform Your Business Trajectory</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
            You&apos;re One Step Away From Engineering{" "}
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              Measurable Market Impact.
            </span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
            Discuss your technical architecture, digital roadmap, or custom software requirements with our principal solutions engineers.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setConsultationOpen(true)}
              className="swap-text-button px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm sm:text-base rounded-full shadow-[0_0_30px_rgba(17,99,251,0.4)] transition-all group"
            >
              <span className="text-original flex items-center gap-2">
                <span>Discuss Your Technology Strategy</span>
                <ArrowRight className="w-4 h-4" />
              </span>
              <span className="text-hover flex items-center justify-center gap-2">
                <span>Schedule Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </span>
            </button>

            <Link
              href="/blog"
              className="px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-sm sm:text-base transition-colors"
            >
              Explore Engineering Blog
            </Link>
          </div>
        </div>
      </section>

      {/* Universal Footer */}
      <SiteFooter />

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />
    </div>
  );
}
