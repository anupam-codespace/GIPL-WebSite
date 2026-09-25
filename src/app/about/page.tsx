"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  Building2,
  MapPin,
  TrendingUp,
  Target,
  Boxes,
  Code2,
  Laptop,
  Globe2,
  Truck,
  PackageCheck,
  ArrowLeftRight,
  Briefcase,
  Shirt,
  FlaskConical,
  Users,
  Award,
  Zap,
  Smile,
  Heart,
  Smartphone,
  Sparkles,
  ExternalLink
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
  badge?: string;
  highlights: string[];
  stats?: string;
  image: string;
}

const MILESTONES: Milestone[] = [
  {
    year: "2018",
    title: "The Genesis & Incorporation",
    description:
      "Globizhub India Pvt Ltd. was incorporated with an uncompromising mission: to architect enterprise-grade software with silicon-grade reliability. With an initial core team of 8 visionary engineers in Guwahati and Bengaluru, we delivered our first multi-tenant healthcare application in under 90 days.",
    highlights: [
      "Incorporated as Globizhub India Pvt Ltd.",
      "First healthcare diagnostic software deployed",
      "Dual development hubs established in Bengaluru & Guwahati"
    ],
    image: "/images/hero_tech_bg.jpg"
  },
  {
    year: "2019",
    title: "Healthcare & Logistics Breakthrough",
    description:
      "Crossed 40+ production deployments across clinical pathology, diagnostic laboratories, and supply chain logistics. We instituted rigorous automated CI/CD pipelines, lowering production rollbacks to less than 0.1% and cementing our reputation as a trusted engineering vendor.",
    highlights: [
      "Surpassed 40+ completed enterprise projects",
      "Architected specialized cold-chain logistics telemetry",
      "Expanded engineering squad to 30+ full-stack specialists"
    ],
    image: "/images/industry_healthcare.jpg"
  },
  {
    year: "2020",
    title: "Cloud Resilience & Pandemic Support",
    description:
      "During the global pandemic, Globizhub stood as a critical technology backbone. We scaled cloud healthcare systems to handle a 700% surge in real-time diagnostic reporting and tele-consultations with zero downtime across 15 states in India.",
    highlights: [
      "Scaled cloud microservices for 700% traffic surge",
      "Engineered automated barcode sample tracking for labs",
      "Transitioned to distributed zero-trust remote engineering"
    ],
    image: "/images/hero_architecture.jpg"
  },
  {
    year: "2021",
    title: "Startup India & Technology Recognition",
    description:
      "Formally recognized and accredited by Startup India (#startupindia) under the Department for Promotion of Industry and Internal Trade (DPIIT), Ministry of Commerce & Industry, Govt of India, and incubated at Assam Startup Nest under the flagship Advantage Assam initiative.",
    highlights: [
      "Awarded DPIIT #startupindia Certification (DIPP33507)",
      "Incubated & recognized by Assam Startup Nest",
      "Ministry of MSME Enterprise Accreditation"
    ],
    image: "/images/assam_startup_logo_transparent.png"
  },
  {
    year: "2022",
    title: "Launch of Patholab.cloud & Bungzo",
    description:
      "Launched our proprietary flagship SaaS products: Patholab.cloud (intelligent laboratory information management system) and Bungzo (modern society and gated-community ERP platform), creating scalable recurring value for thousands of daily active users.",
    highlights: [
      "Patholab.cloud deployed across 350+ diagnostic centers",
      "Bungzo adopted across premium residential societies",
      "Integrated automated WhatsApp & SMS notification gateways"
    ],
    image: "/images/patholab_preview.jpg"
  },
  {
    year: "2023",
    title: "Triple ISO Quality & Security Certification",
    description:
      "Achieved triple international ISO certifications after rigorous third-party enterprise audits: ISO 9001:2015 for Quality Management, ISO/IEC 27001:2022 for Information Security Management, and ISO/IEC 20000-1:2018 for IT Service Management.",
    highlights: [
      "Certified ISO 9001:2015 (Quality Management System)",
      "Certified ISO/IEC 27001:2022 (Information Security)",
      "Certified ISO/IEC 20000-1:2018 (IT Service Management)"
    ],
    image: "/images/iso_27001_certified_badge.png"
  },
  {
    year: "2024",
    title: "Delivery Expansion: Chennai & Delhi-NCR",
    description:
      "Inaugurated dedicated Cloud & DevOps delivery center in Chennai's OMR IT corridor and our Corporate Strategy & Enterprise office in Sector 62, Noida (Delhi-NCR). Team expanded to 150+ engineers, data architects, and certified cloud professionals.",
    highlights: [
      "Opened Chennai Cloud & SRE Delivery Center",
      "Established Delhi-NCR Corporate & Strategic Office",
      "Crossed 200+ bespoke enterprise software deliveries"
    ],
    image: "/images/footer_team.jpg"
  },
  {
    year: "2025",
    title: "Globizhub AI Lab & Agentic Workflows",
    description:
      "Launched the Globizhub AI Lab, delivering private enterprise RAG systems, autonomous agentic workflows, and multimodal computer vision models for diagnostic radiology, automated quality inspection, and intelligent document extraction.",
    highlights: [
      "Delivered 30+ bespoke Enterprise AI & LLM architectures",
      "Deployed autonomous customer experience agent squads",
      "Expanded client footprint to GCC, UK, and North America"
    ],
    image: "/images/tech_alignment_orbs.jpg"
  },
  {
    year: "2026",
    title: "Next-Gen Enterprise Engineering",
    description:
      "Today, Globizhub India Pvt Ltd. stands as a premier digital engineering partner for global enterprises. Operating across 4 delivery centers, we fuse agile product thinking, sovereign cloud architectures, and autonomous AI systems to build tomorrow's digital economy.",
    highlights: [
      "150+ Engineers across 4 State-of-the-Art Delivery Hubs",
      "Serving clients in 15+ countries across 25+ industries",
      "Pioneering autonomous enterprise operations and AI governance"
    ],
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
      "Our flagship research and engineering headquarters, housing our core architecture squad, AI/ML laboratory, and high-throughput cloud systems engineers."
  },
  {
    city: "Guwahati",
    role: "Regional Hub & Incubation Center",
    state: "Assam, India",
    address: "Assam Startup Nest, Ambari / Tech City, Guwahati - 781001",
    details:
      "Incubated and accredited center driving public sector digital transformation, healthcare informatics, and regional engineering talent incubation."
  },
  {
    city: "Chennai",
    role: "Cloud Architecture & DevOps Delivery Center",
    state: "Tamil Nadu, India",
    address: "Old Mahabalipuram Road (OMR) IT Expressway, Chennai - 600096",
    details:
      "Dedicated 24/7 Site Reliability Engineering (SRE), Kubernetes orchestration, SOC operations, and enterprise zero-trust cloud infrastructure teams."
  },
  {
    city: "Delhi-NCR",
    role: "Corporate Strategy & Enterprise Solutions",
    state: "Uttar Pradesh, India",
    address: "Sector 62, Institutional Area, Noida, Delhi-NCR - 201309",
    details:
      "Focuses on enterprise client partnerships, corporate technology strategy, legal compliance, and North India enterprise program delivery."
  }
];

// -------------------------------------------------------------
// Recognitions & Accreditations Data
// -------------------------------------------------------------
const RECOGNITIONS = [
  {
    name: "Assam Startup",
    badge: "Incubation",
    authority: "Department of Industries & Commerce",
    desc: "Recognized and incubated under the flagship Advantage Assam initiative, driving digital healthcare and regional technological innovation.",
    logo: "/images/assam_startup_logo_transparent.png",
    type: "Enterprise Accreditation"
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
    badge: "MSME Registered",
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
// Core Operating Divisions (01 to 05)
// -------------------------------------------------------------
const CORE_DIVISIONS = [
  {
    num: "01",
    name: "IT Products",
    tagline: "Proprietary SaaS & Platforms",
    desc: "Architecting high-throughput multi-tenant SaaS systems, intelligent diagnostic LIMS, and automated ERP engines built for zero sample loss and enterprise scale."
  },
  {
    num: "02",
    name: "IT Services",
    tagline: "Custom Software & Cloud",
    desc: "Delivering bespoke full-stack engineering, sovereign cloud infrastructure, autonomous AI agents, legacy system modernization, and 24/7 Site Reliability."
  },
  {
    num: "03",
    name: "IoT Solutions",
    tagline: "Connected Telemetry & Sensors",
    desc: "Industrial telemetry sensors, edge computing firmware, bidirectional medical analyzer interfaces, cold-chain monitoring, and real-time geospatial tracking."
  },
  {
    num: "04",
    name: "Hardware",
    tagline: "Embedded Infrastructure & Kiosks",
    desc: "Specialized embedded PCB design, automated RFID check-in stations, diagnostic hardware integration, and rugged sovereign hardware infrastructure."
  },
  {
    num: "05",
    name: "Digital Marketing",
    tagline: "Programmatic Brand & Growth",
    desc: "Enterprise data-driven customer acquisition, conversion rate optimization, programmatic technical SEO, global B2B outreach, and brand velocity."
  }
];

// -------------------------------------------------------------
// Allied Business Verticals (01 to 07)
// -------------------------------------------------------------
const ALLIED_VERTICALS = [
  {
    num: "01",
    name: "Business Listing",
    tag: "B2B Directory",
    desc: "Global verified corporate discovery directory connecting certified manufacturers and suppliers with enterprise buyers across high-demand industrial sectors."
  },
  {
    num: "02",
    name: "Freight Forwarding & Logistics",
    tag: "Multimodal Cargo",
    desc: "End-to-end maritime, aviation, and surface freight routing with automated customs compliance, predictive transit tracking, and port orchestration."
  },
  {
    num: "03",
    name: "Courier & Express",
    tag: "Last-Mile Delivery",
    desc: "Hyperlocal and cross-regional courier logistics with automated dispatch, sub-24h distribution networks, and live GPS proof of delivery."
  },
  {
    num: "04",
    name: "Import & Export",
    tag: "International Trade",
    desc: "Sovereign cross-border commodity trade execution, tariff risk compliance, bonded warehousing, and bilateral supply-chain fulfillment."
  },
  {
    num: "05",
    name: "Leather Products Manufacturing",
    tag: "Export Craftsmanship",
    desc: "Specialized precision manufacturing of premium handcrafted industrial and luxury leather goods adhering to strict international export norms."
  },
  {
    num: "06",
    name: "E&M Fashion Brand",
    tag: "Apparel & Lifestyle",
    desc: "Contemporary designer lifestyle apparel brand combining modern aesthetic design, premium materials, and ethical, sustainable textile manufacturing."
  },
  {
    num: "07",
    name: "Private Labs & Diagnostics",
    tag: "Clinical Healthcare",
    desc: "NABL-aligned private diagnostic pathology network powered by automated analyzer interfacing and instant WhatsApp report delivery."
  }
];

// -------------------------------------------------------------
// About Hero Metric Ribbons (Moving Left to Right)
// -------------------------------------------------------------
const ABOUT_METRICS = [
  { number: "25", suffix: "+", label: "Industries Mastered" },
  { number: "10", suffix: "+", label: "Enterprise Accreditations & Certifications" },
  { number: "15", suffix: "+", label: "Global Markets Served" },
  { number: "4", suffix: " Hubs", label: "Excellence & Delivery Centers" },
  { number: "99.9", suffix: "%", label: "Enterprise System SLA & Uptime" },
  { number: "200", suffix: "+", label: "Enterprise Platforms Engineered" },
];

// -------------------------------------------------------------
// Proprietary Products (6 Products)
// -------------------------------------------------------------
const PROPRIETARY_PRODUCTS = [
  {
    id: "patholab",
    name: "Patholab.Cloud — Smart Diagnostic Core",
    desc: "Next-generation cloud-based Laboratory Information Management System (LIMS) automating patient diagnostics, bidirectional analyzer interfacing, barcoding, digital report dispatch via WhatsApp/SMS, and NABL-compliant audit trails.",
    logo: "/images/products/patholab-cloud-logo.png",
    borderHover: "hover:border-emerald-500/40"
  },
  {
    id: "teamhub",
    name: "TeamHub — Workforce & Sprint Platform",
    desc: "Centralized workforce operations platform with GPS-fenced biometric attendance, automated developer velocity analytics, milestone tracking, and seamless automated payroll processing.",
    logo: "/images/products/teamhub-logo.png",
    borderHover: "hover:border-blue-500/40"
  },
  {
    id: "bungzo",
    name: "Bungzo — Hyperlocal Delivery Engine",
    desc: "All-in-one hyperlocal quick-commerce engine with sub-20 minute order dispatch, intelligent rider routing, live geospatial tracking, and frictionless checkout.",
    logo: "/images/products/bungzo-logo.png",
    borderHover: "hover:border-red-500/40"
  },
  {
    id: "globizlibrary",
    name: "GlobizLibrary — Academic RFID Core",
    desc: "Comprehensive digital academic library management system managing over 250,000 cataloged titles with RFID kiosk checkouts, digital archives, and unified OPAC discovery.",
    logo: "/images/products/globizlibrary-logo.png",
    borderHover: "hover:border-orange-500/40"
  },
  {
    id: "ims",
    name: "Enterprise IMS — Inventory OS",
    desc: "Enterprise multi-warehouse inventory tracking system with dynamic batch traceability, real-time reorder thresholds, barcode scanning, and multi-location ERP integration.",
    icon: "boxes",
    borderHover: "hover:border-indigo-500/40"
  },
  {
    id: "listing",
    name: "Globizhub Listing — Global B2B Marketplace",
    desc: "High-throughput sovereign B2B marketplace and corporate directory platform empowering verified enterprise buyers, exporters, and manufacturers with automated lead routing.",
    logo: "/images/products/listing-logo.png",
    borderHover: "hover:border-amber-500/40"
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
    a: "Globizhub is recognized by Startup India (#startupindia) under the Department for Promotion of Industry and Internal Trade (DPIIT, Ministry of Commerce & Industry, Govt of India), incubated at Assam Startup Nest, registered with the Ministry of MSME, and holds triple international ISO certifications: ISO 9001:2015 (Quality Management), ISO/IEC 27001:2022 (Information Security), and ISO/IEC 20000-1:2018 (IT Service Management)."
  },
  {
    q: "How does Globizhub guarantee data protection and regulatory compliance (HIPAA, GDPR, ISO)?",
    a: "Every solution we architect adheres to strict security-by-design principles. We enforce AES-256 encryption at rest, TLS 1.3 in transit, role-based access control (RBAC), and automated vulnerability scanning in our CI/CD pipelines. For healthcare and fintech clients, our architectures comply strictly with HIPAA, GDPR, and PCI-DSS requirements."
  },
  {
    q: "What proprietary products has Globizhub developed?",
    a: "Globizhub has developed and operates 6 proprietary enterprise platforms: Patholab.Cloud (intelligent cloud diagnostic LIMS), TeamHub (workforce operations and sprint velocity orchestration), Bungzo (hyperlocal quick-commerce and delivery logistics engine), GlobizLibrary (digital cataloging and automated academic RFID repository), Enterprise IMS (multi-warehouse inventory and supply chain tracking), and Globizhub Listing (global enterprise B2B marketplace)."
  },
  {
    q: "What engagement models do you offer to enterprises?",
    a: "We offer flexible enterprise engagement models: (1) Fixed-Scope Product Delivery with guaranteed milestones and deliverables, (2) Dedicated Engineering Squads acting as seamless extensions of your internal engineering leadership, and (3) Strategic Technology & AI Consulting on time-and-materials or retainer basis. Every model is governed by clear SLAs and transparent sprint reports."
  }
];

export default function AboutPage() {
  const router = useRouter();
  const [activeYear, setActiveYear] = useState<string>("2026");
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
      {/* 1. HERO SECTION: Video Background with Cinematic Glow   */}
      {/* ======================================================== */}
      <section className="relative pt-24 sm:pt-28 lg:pt-36 pb-16 sm:pb-16 lg:pb-20 overflow-hidden min-h-[85vh] sm:min-h-[88vh] lg:min-h-[90vh] flex items-center justify-center bg-black">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/about_hero_poster.jpg"
            className="w-full h-full object-cover opacity-85 filter brightness-115 contrast-125 saturate-125"
          >
            <source src="/videos/about_hero_bg.mp4" type="video/mp4" />
          </video>
          {/* Dark Vignette & Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-transparent to-black/90 pointer-events-none" />
          <div className="absolute inset-0 bg-radial from-transparent via-transparent to-black/70 pointer-events-none" />
        </div>

        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/4 w-[220px] sm:w-[500px] h-[220px] sm:h-[500px] bg-cyan-500/20 rounded-full blur-[80px] sm:blur-[140px] pointer-events-none z-[1] animate-pulse" />
        <div className="absolute bottom-10 right-1/4 w-[250px] sm:w-[600px] h-[220px] sm:h-[450px] bg-blue-600/20 rounded-full blur-[80px] sm:blur-[150px] pointer-events-none z-[1]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full">
          {/* Master Headline */}
          <h1 className="text-[1.85rem] xs:text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto mb-3.5 sm:mb-5 leading-[1.18] sm:leading-[1.12]">
            Built on Trust.{" "}
            <span className="relative inline bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(56,189,248,0.35)]">
              Engineered for Enterprise Scale.
            </span>
          </h1>

          {/* Mission Statement */}
          <p className="text-xs sm:text-base lg:text-lg text-slate-200/90 max-w-2xl lg:max-w-3xl mx-auto font-normal leading-relaxed mb-5 sm:mb-8 px-2 sm:px-0">
            Globizhub is an enterprise digital engineering partner trusted by industry leaders and ambitious founders to build resilient digital systems, sovereign AI platforms, and high-concurrency cloud infrastructure. Governed by triple ISO certifications, uncompromising data security, and long-term delivery commitment, we engineer software you can trust with your critical operations.
          </p>

          {/* Metrics Ribbon */}
          <div className="w-full overflow-hidden py-2 sm:py-3 relative [-webkit-mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] mb-5 sm:mb-9">
            <div className="flex w-max gap-3 sm:gap-6 animate-marquee-continuous-reverse hover:[animation-play-state:paused]">
              {[...ABOUT_METRICS, ...ABOUT_METRICS].map((item, idx) => (
                <div
                  key={idx}
                  className="w-[160px] xs:w-[185px] sm:w-[240px] lg:w-[270px] shrink-0 rounded-xl sm:rounded-2xl p-3 sm:p-5 bg-slate-950/85 border border-white/10 hover:border-cyan-400/50 backdrop-blur-2xl transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)] text-left group"
                >
                  <div className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-1 sm:mb-1.5 flex items-baseline tracking-tight">
                    <span>{item.number}</span>
                    <span className="text-cyan-400 text-base sm:text-2xl lg:text-3xl font-bold ml-1">{item.suffix}</span>
                  </div>
                  <div className="text-[11px] sm:text-xs lg:text-sm font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors leading-snug line-clamp-2">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-[290px] xs:max-w-xs sm:max-w-none mx-auto">
            <button
              onClick={() => setConsultationOpen(true)}
              type="button"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 sm:px-9 py-3 sm:py-3.5 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm sm:text-base rounded-full shadow-[0_0_30px_rgba(37,99,235,0.45)] hover:shadow-[0_0_40px_rgba(37,99,235,0.7)] hover:scale-105 active:scale-[0.98] transition-all cursor-pointer group"
            >
              <span>Consult Our Experts</span>
              <ArrowUpRight className="w-4 h-4 sm:w-[18px] sm:h-[18px] shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <a
              href="#journey"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3 sm:py-3.5 bg-white/10 hover:bg-white/15 text-white font-semibold text-sm sm:text-base rounded-full border border-white/20 hover:border-white/35 backdrop-blur-xl transition-all cursor-pointer group hover:scale-105"
            >
              <span>Explore Our Journey</span>
              <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>
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
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-2">
              A Journey of Engineering Excellence
            </h2>
          </div>

          {/* Interactive Year Pill Scroller */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-10 no-scrollbar">
            {MILESTONES.map((m) => {
              const isActive = m.year === activeYear;
              return (
                <button
                  key={m.year}
                  onClick={() => setActiveYear(m.year)}
                  type="button"
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 shrink-0 cursor-pointer ${
                    isActive
                      ? "bg-blue-600 text-white shadow-md scale-105"
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
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl sm:text-6xl font-extrabold text-blue-500 font-mono">
                    {currentMilestone.year}
                  </span>
                </div>

                <h3 className="text-xl sm:text-3xl font-bold text-white mb-4 leading-tight">
                  {currentMilestone.title}
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  {currentMilestone.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2.5">
                  {currentMilestone.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
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
      {/* 3. RECOGNITION ROOTED IN RESULTS                         */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-28 bg-[#000000] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
              Recognition Rooted in Results
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Every accreditation and certification we hold confirms our relentless commitment to enterprise rigor, zero-defect engineering, and sovereign data security.
            </p>
          </div>

          {/* Mobile Auto-Scrolling Marquee (Flows Right to Left) */}
          <div className="block md:hidden relative overflow-hidden w-full py-2">
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

            <div className="animate-marquee flex items-stretch gap-4 w-max">
              {[...RECOGNITIONS, ...RECOGNITIONS].map((rec, idx) => (
                <div
                  key={idx}
                  className="w-[280px] p-6 rounded-2xl bg-[#090d16] border border-white/10 flex flex-col justify-between shrink-0 shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="h-10 w-auto flex items-center">
                        <Image
                          src={rec.logo}
                          alt={rec.name}
                          width={110}
                          height={44}
                          className="object-contain h-10 max-w-[110px]"
                        />
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-semibold text-slate-300">
                        {rec.badge}
                      </span>
                    </div>

                    <div className="text-[11px] font-semibold text-blue-400 uppercase tracking-wider mb-1">
                      {rec.type}
                    </div>
                    <h3 className="text-base font-bold text-white mb-1.5">{rec.name}</h3>
                    <div className="text-[11px] text-slate-400 mb-3 font-medium">
                      {rec.authority}
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {rec.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop/Tablet Grid View */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-2">
              Our 4 Delivery &amp; Excellence Centers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DELIVERY_CENTERS.map((hub, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-[#0a0f1c] border border-white/10 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between shadow-xl group"
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-blue-600/15 border border-blue-500/30 text-blue-400 flex items-center justify-center mb-5">
                    <Building2 className="w-5 h-5" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">{hub.city}</h3>
                  <div className="text-xs font-semibold text-blue-400 mb-3">{hub.role}</div>
                  <div className="flex items-start gap-2 text-xs text-slate-400 mb-4">
                    <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                    <span>{hub.address}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {hub.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* ======================================================== */}
      {/* 6. OUR DIVISIONS & ALLIED BUSINESS VERTICALS (WHITE BG)   */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-28 bg-white border-y border-slate-200/80 relative overflow-hidden">
        {/* Main Divisions Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-14">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 mb-4">
              Our Divisions
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Spearheading multi-disciplinary technological transformation across software products, high-throughput cloud engineering, intelligent hardware, and brand velocity.
            </p>
          </div>
        </div>

        {/* Row 1: Our Divisions - Moving Left to Right (animate-marquee-reverse) */}
        <div className="relative w-full overflow-hidden mb-16 sm:mb-20">
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee-reverse flex items-stretch gap-6 py-3">
            {[...CORE_DIVISIONS, ...CORE_DIVISIONS, ...CORE_DIVISIONS, ...CORE_DIVISIONS].map((div, idx) => (
              <div
                key={`div-${idx}`}
                onClick={() => setConsultationOpen(true)}
                className="notched-card w-[320px] sm:w-[360px] md:w-[380px] shrink-0 p-7 sm:p-8 min-h-[350px] rounded-3xl bg-white border border-slate-200/90 hover:border-[#1163FB] transition-all duration-300 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_rgba(17,99,251,0.12)] group select-none cursor-pointer relative"
              >
                <div>
                  {/* Top Bar: Number Badge & Tagline (No AI icons) */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="inline-block text-xs font-mono font-bold text-[#1163FB] bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full">
                      {div.num}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      {div.tagline}
                    </span>
                  </div>

                  {/* Division Title */}
                  <h3 className="text-xl font-bold text-slate-950 mb-3 group-hover:text-[#1163FB] transition-colors leading-snug">
                    {div.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pr-4">
                    {div.desc}
                  </p>
                </div>

                {/* Bottom Row: Text Label on Left, Notch & Circular Button on Right */}
                <div className="pt-6 flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#1163FB] transition-colors">
                    Explore Capabilities
                  </span>
                </div>

                {/* The Notch Cutout */}
                <div className="notch-corner-white" />

                {/* The Circular Action Button */}
                <div
                  className="absolute bottom-1.5 right-1.5 w-14 h-14 rounded-full bg-slate-900 group-hover:bg-[#1163FB] text-white flex items-center justify-center transition-all duration-300 shadow-md group-hover:shadow-[0_8px_20px_rgba(17,99,251,0.35)] group-hover:scale-105 z-20"
                  aria-hidden="true"
                >
                  <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Allied Business Verticals Header */}
        <div id="allied-ventures" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-14 scroll-mt-28">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 mb-4">
              Allied Ventures &amp; Business Verticals
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Extending our engineering rigour into specialized global logistics, international trade, clinical laboratories, and lifestyle brands.
            </p>
          </div>
        </div>

        {/* Row 2: Allied Ventures - Moving Right to Left (animate-marquee) */}
        <div className="relative w-full overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee flex items-stretch gap-6 py-3">
            {[...ALLIED_VERTICALS, ...ALLIED_VERTICALS, ...ALLIED_VERTICALS, ...ALLIED_VERTICALS].map((item, idx) => {
              const isEM = item.name === "E&M Fashion Brand";
              const isLogistics = item.name === "Freight Forwarding & Logistics";
              const isLeather = item.name === "Leather Products Manufacturing";
              const isImportExport = item.name === "Import & Export";
              return (
                <div
                  key={`allied-${idx}`}
                  onClick={() => {
                    if (isEM) {
                      router.push("/em-fashion-brand");
                    } else if (isLogistics) {
                      router.push("/freight-forwarding-logistics");
                    } else if (isLeather) {
                      router.push("/leather-products-manufacturing");
                    } else if (isImportExport) {
                      router.push("/import-export");
                    } else {
                      setConsultationOpen(true);
                    }
                  }}
                  className="notched-card w-[320px] sm:w-[360px] md:w-[380px] shrink-0 p-7 sm:p-8 min-h-[350px] rounded-3xl bg-white border border-slate-200/90 hover:border-[#1163FB] transition-all duration-300 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_rgba(17,99,251,0.12)] group select-none cursor-pointer relative"
                >
                  <div>
                    {/* Top Bar: Number Badge & Tag (No AI icons) */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="inline-block text-xs font-mono font-bold text-slate-700 bg-slate-100 border border-slate-200 px-3.5 py-1.5 rounded-full">
                        {item.num}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                        {item.tag}
                      </span>
                    </div>

                    {/* Vertical Title */}
                    <h4 className="text-xl font-bold text-slate-950 mb-3 group-hover:text-[#1163FB] transition-colors leading-snug">
                      {item.name}
                    </h4>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pr-4">
                      {item.desc}
                    </p>
                  </div>

                  {/* Bottom Row: Text Label on Left, Notch & Circular Button on Right */}
                  <div className="pt-6 flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#1163FB] transition-colors">
                      {isEM
                        ? "Explore Brand Page →"
                        : isLogistics
                        ? "Explore Logistics Page →"
                        : isLeather
                        ? "Explore Leather Page →"
                        : isImportExport
                        ? "Explore Trade Page →"
                        : "Explore Capabilities"}
                    </span>
                  </div>

                {/* The Notch Cutout */}
                <div className="notch-corner-white" />

                {/* The Circular Action Button */}
                <div
                  className="absolute bottom-1.5 right-1.5 w-14 h-14 rounded-full bg-slate-900 group-hover:bg-[#1163FB] text-white flex items-center justify-center transition-all duration-300 shadow-md group-hover:shadow-[0_8px_20px_rgba(17,99,251,0.35)] group-hover:scale-105 z-20"
                  aria-hidden="true"
                >
                  <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            );
          })}
        </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 7. OUR PROPRIETARY PRODUCTS: The Globizhub Suite        */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-28 bg-[#000000] relative overflow-hidden">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-14 text-center">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3">
            Products Engineered by Globizhub
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Beyond bespoke engineering, we build, scale, and operate 6 mission-critical proprietary platforms powering diagnostics, global trade, quick-commerce, workforce operations, academic research, and global supply chains.
          </p>
        </div>

        {/* Continuous Left-to-Right Moving Product Cards */}
        <div className="relative w-full overflow-hidden">
          {/* Subtle Side Gradient Edge Fades */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#000000] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#000000] to-transparent z-10 pointer-events-none" />

          <div className="flex w-max gap-6 animate-marquee-continuous-reverse py-4">
            {[...PROPRIETARY_PRODUCTS, ...PROPRIETARY_PRODUCTS].map((product, idx) => (
              <div
                key={idx}
                className={`w-[300px] sm:w-[350px] shrink-0 p-6 sm:p-7 rounded-3xl bg-[#0a0f1d] border border-white/10 ${product.borderHover} transition-all duration-300 flex flex-col justify-between shadow-2xl group hover:-translate-y-1`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    {product.logo ? (
                      <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/90 p-1 flex items-center justify-center shrink-0 shadow-sm">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={product.logo}
                          alt={product.name}
                          className="w-full h-full object-contain rounded-xl"
                        />
                      </div>
                    ) : (
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-600 border border-indigo-300/80 p-2 flex items-center justify-center text-white shrink-0 shadow-sm">
                        <Boxes className="w-7 h-7 text-white stroke-[2.2]" />
                      </div>
                    )}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5 leading-snug">
                    {product.name}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {product.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 10. PATHOLAB.CLOUD MOBILE APP (APP STORE & PLAY STORE)   */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-28 bg-[#000000] relative overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[350px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[350px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Main Wide Poster Card Container */}
          <div className="relative rounded-[2.5rem] bg-gradient-to-br from-[#0c1c28] via-[#081320] to-[#040810] border border-emerald-500/25 p-8 sm:p-12 lg:p-16 shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden">
            {/* Background Ambient Radial Highlights */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Marketing Typography & Store Badges */}
              <div className="w-full lg:col-span-7 flex flex-col justify-center text-left">
                {/* Master Headline (Poster-Style Impact) */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12] mb-4">
                  Patholab.Cloud,{" "}
                  <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent italic font-serif">
                    your partner in diagnostics.
                  </span>
                </h2>

                {/* Advertising Hook: ₹2.5 Per Patient Registration */}
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-extrabold text-base sm:text-lg shadow-inner">
                    <span>₹2.5</span>
                    <span className="text-xs sm:text-sm font-semibold text-white">/ Patient Registration</span>
                  </div>
                </div>

                {/* Marketing Lines */}
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                  Experience India&apos;s fastest cloud-based LIMS engine. Automate patient registrations, bidirectional analyzer interfacing, sample barcoding, and dispatch diagnostic reports instantly on WhatsApp &amp; SMS with zero sample loss.
                </p>

                {/* Key Benefit Checkmarks */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Instant automated WhatsApp report dispatch</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Sub-second bidirectional analyzer sync</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>350+ active diagnostic laboratories live</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>NABL-compliant digital QR verification</span>
                  </div>
                </div>

                {/* Store Download Badges */}
                <div className="flex flex-wrap items-center gap-3.5">
                  {/* Apple App Store Badge */}
                  <a
                    href="https://patholab.cloud"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-black hover:bg-slate-900 border border-white/20 text-white transition-all duration-200 hover:scale-105 shadow-xl group cursor-pointer"
                  >
                    <svg className="w-6 h-6 fill-current text-white shrink-0 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.61 1.34-.55.63-.99 1.68-.86 2.7.99.08 2.02-.49 2.55-1.19z" />
                    </svg>
                    <div className="text-left">
                      <div className="text-[10px] uppercase tracking-wider text-slate-400 font-medium leading-none mb-1">
                        Download on the
                      </div>
                      <div className="text-sm font-bold text-white leading-none">
                        App Store
                      </div>
                    </div>
                  </a>

                  {/* Google Play Store Badge */}
                  <a
                    href="https://patholab.cloud"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-black hover:bg-slate-900 border border-white/20 text-white transition-all duration-200 hover:scale-105 shadow-xl group cursor-pointer"
                  >
                    <svg className="w-6 h-6 shrink-0 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none">
                      <path d="M3.609 1.814L13.793 12 3.61 22.186A2.22 2.22 0 0 1 3 20.612V3.388c0-.616.223-1.19.609-1.574z" fill="#00E676" />
                      <path d="M17.207 8.586L13.793 12l3.414 3.414 3.904-2.231a1.36 1.36 0 0 0 0-2.366l-3.904-2.232z" fill="#FFD600" />
                      <path d="M3.609 1.814L13.793 12 17.207 8.586 5.86 2.103c-.707-.404-1.55-.411-2.251-.289z" fill="#00B0FF" />
                      <path d="M13.793 12L3.609 22.186c.701.122 1.544.115 2.251-.289l11.347-6.483L13.793 12z" fill="#FF3D00" />
                    </svg>
                    <div className="text-left">
                      <div className="text-[10px] uppercase tracking-wider text-slate-400 font-medium leading-none mb-1">
                        Get it on
                      </div>
                      <div className="text-sm font-bold text-white leading-none">
                        Google Play
                      </div>
                    </div>
                  </a>

                  {/* Direct Web Portal Link */}
                  <a
                    href="https://patholab.cloud"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-emerald-400 font-bold text-xs sm:text-sm transition-all duration-200 hover:scale-105 cursor-pointer"
                  >
                    <span>Launch Web App</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Right Column: Mobile App Frame Mockup (Hidden on mobile and small devices) */}
              <div className="hidden lg:flex lg:col-span-5 items-center justify-center relative mt-6 lg:mt-0 pb-6 lg:pb-0">
                {/* Glow behind phone */}
                <div className="absolute w-64 h-64 sm:w-80 sm:h-80 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

                {/* Floating Metric Pill 1 (Top Left) */}
                <div className="absolute top-4 sm:top-6 -left-1 sm:-left-4 z-20 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-[#0b1522]/95 border border-emerald-500/30 text-white shadow-2xl backdrop-blur-md animate-float-orb-1">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <div className="text-left">
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Active Volume</div>
                    <div className="text-xs font-bold text-emerald-300">500,000+ Tests/Mo</div>
                  </div>
                </div>

                {/* Floating Metric Pill 2 (Bottom Right) */}
                <div className="absolute bottom-6 sm:bottom-8 right-1 sm:-right-2 z-20 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-[#0b1522]/95 border border-blue-500/30 text-white shadow-2xl backdrop-blur-md animate-float-orb-2">
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                  <div className="text-left">
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Verified Rate</div>
                    <div className="text-xs font-bold text-cyan-300">₹2.5 / Patient</div>
                  </div>
                </div>

                {/* Phone Image */}
                <div className="relative z-10 w-full max-w-[260px] sm:max-w-[300px] lg:max-w-[320px] transition-transform duration-500 hover:scale-105">
                  <Image
                    src="/images/products/patholab-phone-transparent.png"
                    alt="Patholab.Cloud Mobile App on iOS App Store & Google Play"
                    width={320}
                    height={655}
                    className="w-full h-auto object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.9)]"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 11. FREQUENTLY ASKED QUESTIONS                           */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-28 bg-[#05070e] border-y border-white/5 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
              Frequently Asked Questions
            </h2>
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
                    type="button"
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 group cursor-pointer"
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
      {/* 11. BOTTOM CALL TO ACTION BANNER                         */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-[#000000] via-[#070b16] to-[#000000] relative overflow-hidden text-center border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(17,99,251,0.18)_0,transparent_70%)] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
            You&apos;re One Step Away From Engineering{" "}
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              Measurable Market Impact.
            </span>
          </h2>

          <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto mb-10 leading-relaxed">
            Discuss your technical architecture, digital roadmap, or custom software requirements with our principal solutions engineers.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={() => setConsultationOpen(true)}
              type="button"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 sm:px-9 py-3.5 sm:py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm sm:text-base rounded-full shadow-[0_0_28px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.65)] hover:scale-105 active:scale-[0.98] transition-all cursor-pointer group"
            >
              <span>Discuss Your Technology Strategy</span>
              <ArrowUpRight className="w-4 h-4 sm:w-[18px] sm:h-[18px] shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <Link
              href="/blog"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 sm:py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold text-sm sm:text-base transition-all hover:scale-105"
            >
              Explore Engineering Blog
            </Link>
          </div>
        </div>
      </section>

      {/* Universal Footer with working consultation modal trigger */}
      <SiteFooter onOpenConsultation={() => setConsultationOpen(true)} />

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />
    </div>
  );
}
