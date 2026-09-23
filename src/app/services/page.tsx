"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  Cpu,
  Layers,
  Code2,
  Cloud,
  Smartphone,
  Palette,
  Database,
  Lock,
  Zap,
  TrendingUp,
  Clock,
  Users,
  Building2,
  Bot,
  ExternalLink,
} from "lucide-react";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import ConsultationModal from "@/components/marketing/ConsultationModal";

interface ServiceCategory {
  id: string;
  num: string;
  title: string;
  tagline: string;
  description: string;
  icon: React.ReactNode;
  capabilities: string[];
  metrics: string;
  gradient: string;
}

const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "digital-transformation",
    num: "01",
    title: "Digital Transformation & Strategy",
    tagline: "Modernizing legacy systems into agile, high-throughput digital platforms.",
    description:
      "We partner with enterprise leaders to re-architect technology landscapes, decommission monolithic bottlenecks, and implement event-driven cloud frameworks that accelerate time-to-market.",
    icon: <Sparkles className="w-6 h-6 text-blue-400" />,
    capabilities: [
      "Enterprise Tech Debt Audits & Migration Strategy",
      "Monolith to Microservices De-coupling",
      "API-First Architecture & Service Mesh",
      "Enterprise Workflow Digitization & SLA Automation",
    ],
    metrics: "4× Faster Time-to-Market",
    gradient: "from-blue-600/20 via-blue-500/10 to-transparent",
  },
  {
    id: "ai-engineering",
    num: "02",
    title: "AI & Autonomous Agent Squads",
    tagline: "Deploying production-grade generative AI, private LLMs, and agentic workflows.",
    description:
      "From proprietary RAG knowledge engines to multi-agent autonomous decision systems, we engineer enterprise AI solutions that adhere to strict zero-hallucination and sovereign data security standards.",
    icon: <Bot className="w-6 h-6 text-cyan-400" />,
    capabilities: [
      "Custom Enterprise RAG Architectures & Vector Stores",
      "Autonomous Agent Swarms (Customer & Ops Intelligence)",
      "Multimodal Computer Vision & Diagnostic OCR",
      "Zero-Data-Leakage Private LLM Fine-Tuning",
    ],
    metrics: "70% Manual Workload Reduction",
    gradient: "from-cyan-600/20 via-blue-500/10 to-transparent",
  },
  {
    id: "custom-software",
    num: "03",
    title: "Full-Cycle Product Engineering",
    tagline: "Scalable web platforms and enterprise SaaS engineered for millions of users.",
    description:
      "End-to-end product development fusing design thinking, rigorous type-safe codebases, continuous CI/CD pipelines, and high-concurrency database architectures.",
    icon: <Code2 className="w-6 h-6 text-indigo-400" />,
    capabilities: [
      "Enterprise SaaS & Multi-Tenant Core Architecture",
      "High-Concurrency Web Platforms (Next.js, Node, Go)",
      "Complex Relational & Distributed DB Systems",
      "Automated Testing Suites & 99.99% Uptime Verification",
    ],
    metrics: "99.98% System Uptime SLA",
    gradient: "from-indigo-600/20 via-blue-500/10 to-transparent",
  },
  {
    id: "cloud-devops",
    num: "04",
    title: "Cloud Infrastructure & DevOps",
    tagline: "Zero-trust Kubernetes clusters, automated CI/CD, and sovereign cloud hosting.",
    description:
      "We architect resilient, self-healing cloud infrastructure across AWS, GCP, and private sovereign data centers, optimizing compute costs while maintaining peak performance under traffic spikes.",
    icon: <Cloud className="w-6 h-6 text-sky-400" />,
    capabilities: [
      "Kubernetes & Multi-Cloud Container Orchestration",
      "GitOps CI/CD Pipelines with Sub-Minute Deployments",
      "Automated FinOps & Infrastructure Cost Optimization",
      "24/7 SRE Monitoring & Incident Response Governance",
    ],
    metrics: "Sub-100ms Global Latency",
    gradient: "from-sky-600/20 via-blue-500/10 to-transparent",
  },
  {
    id: "mobile-engineering",
    num: "05",
    title: "Mobile App Development",
    tagline: "Native iOS & Android apps designed for frictionless enterprise operations.",
    description:
      "Engineered with Swift, Kotlin, and React Native, our mobile applications feature biometric authentication, offline-first synchronization, real-time telemetry, and hardware sensor integrations.",
    icon: <Smartphone className="w-6 h-6 text-teal-400" />,
    capabilities: [
      "Native iOS (Swift / SwiftUI) & Android (Kotlin) Development",
      "Enterprise Cross-Platform Apps (React Native / Flutter)",
      "IoT Hardware, Bluetooth & Biometric Sensor Integration",
      "Enterprise MDM Security & Offline Data Sync",
    ],
    metrics: "4.8+ App Store Rating Benchmark",
    gradient: "from-teal-600/20 via-blue-500/10 to-transparent",
  },
  {
    id: "ui-ux-design",
    num: "06",
    title: "UI/UX & Product Design Systems",
    tagline: "Human-centric interfaces that convert complex enterprise workflows into intuitive UX.",
    description:
      "Our design lab translates complex domain logic into clean, accessible design systems. From user research and interactive prototypes to production-ready design tokens, we elevate product adoption.",
    icon: <Palette className="w-6 h-6 text-purple-400" />,
    capabilities: [
      "Enterprise Design Systems & Token Architecture",
      "User Journey Mapping & Ergonomic Usability Testing",
      "High-Fidelity Interactive Wireframing & Motion Design",
      "WCAG 2.1 AAA Accessibility & Cross-Device Parity",
    ],
    metrics: "3.2× User Adoption Rate",
    gradient: "from-purple-600/20 via-blue-500/10 to-transparent",
  },
  {
    id: "data-analytics",
    num: "07",
    title: "Data Engineering & Analytics",
    tagline: "Turn dispersed enterprise data lakes into real-time operational intelligence.",
    description:
      "We design real-time data pipelines, lakehouse architectures, and predictive analytics dashboards, allowing C-suite executives to make data-backed strategic decisions in real time.",
    icon: <Database className="w-6 h-6 text-amber-400" />,
    capabilities: [
      "Real-Time Streaming Pipelines (Kafka, Spark, Snowflake)",
      "Modern Data Lakehouse & ETL/ELT Pipeline Automation",
      "Executive BI Dashboards & Predictive Analytics",
      "Data Quality Governance & Regulatory Compliance",
    ],
    metrics: "Real-Time Telemetry Under 1.5s",
    gradient: "from-amber-600/20 via-blue-500/10 to-transparent",
  },
  {
    id: "cybersecurity",
    num: "08",
    title: "Cybersecurity & Sovereign Governance",
    tagline: "Zero-trust network defense, continuous audits, and sovereign regulatory compliance.",
    description:
      "As an ISO/IEC 27001:2022 certified enterprise, Globizhub embeds security into every stage of development: automated SAST/DAST vulnerability scanning, SOC 2 alignment, and end-to-end payload encryption.",
    icon: <Lock className="w-6 h-6 text-rose-400" />,
    capabilities: [
      "Zero-Trust Architecture & Identity Access Management (IAM)",
      "Automated CI/CD Vulnerability & Dependency Scanning",
      "ISO 27001, HIPAA, GDPR & Indian DPDP Act Compliance",
      "Penetration Testing & Red-Team Vulnerability Defense",
    ],
    metrics: "100% Audit Compliance",
    gradient: "from-rose-600/20 via-blue-500/10 to-transparent",
  },
];

// Floating tiles around the central text (Appinventiv /service/ exact peripheral layout)
const FLOATING_TILES = [
  {
    id: "tile-1",
    img: "/images/consultation-handshake.jpg",
    alt: "Strategic Advisory Consultation",
    className: "top-[14%] left-[16%] sm:left-[15%] md:left-[16%] w-[85px] sm:w-[115px] md:w-[130px] lg:w-[145px]",
    animClass: "animate-float-slow",
  },
  {
    id: "tile-2",
    img: "/images/hero_architecture.jpg",
    alt: "System Architecture",
    className: "top-[18%] left-[2%] sm:left-[3%] md:left-[4%] w-[80px] sm:w-[105px] md:w-[120px] lg:w-[135px]",
    animClass: "animate-float-delay-1",
  },
  {
    id: "tile-3",
    img: "/images/tech_alignment_orbs.jpg",
    alt: "AI Neural Infrastructure",
    className: "top-[14%] right-[16%] sm:right-[15%] md:right-[16%] w-[85px] sm:w-[115px] md:w-[130px] lg:w-[145px]",
    animClass: "animate-float-delay-2",
  },
  {
    id: "tile-4",
    img: "/images/patholab_doctor_tablet.jpg",
    alt: "Healthcare Diagnostic UI",
    className: "top-[40%] left-[2%] sm:left-[2.5%] md:left-[3%] w-[90px] sm:w-[120px] md:w-[140px] lg:w-[155px]",
    animClass: "animate-float-slow",
  },
  {
    id: "tile-5",
    img: "/images/built_it_market_it.jpg",
    alt: "Cloud Engineering Deployment",
    className: "top-[64%] left-[6%] sm:left-[7%] md:left-[8%] w-[85px] sm:w-[115px] md:w-[130px] lg:w-[145px]",
    animClass: "animate-float-delay-3",
  },
  {
    id: "tile-6",
    img: "/images/footer_team.jpg",
    alt: "Sprint Collaboration",
    className: "top-[42%] right-[2%] sm:right-[2.5%] md:right-[3%] w-[95px] sm:w-[130px] md:w-[150px] lg:w-[165px]",
    animClass: "animate-float-delay-1",
  },
  {
    id: "tile-7",
    img: "/images/app_showcase_woman.jpg",
    alt: "Mobile App UX",
    className: "top-[20%] right-[3%] sm:right-[4%] md:right-[5%] w-[80px] sm:w-[110px] md:w-[125px] lg:w-[140px]",
    animClass: "animate-float-slow",
  },
  {
    id: "tile-8",
    img: "/images/industry_banking.jpg",
    alt: "Fintech Core Terminal",
    className: "top-[64%] right-[5%] sm:right-[6%] md:right-[7%] w-[80px] sm:w-[110px] md:w-[125px] lg:w-[140px]",
    animClass: "animate-float-delay-2",
  },
  {
    id: "tile-9",
    img: "/images/industry_healthcare.jpg",
    alt: "Precision Informatics",
    className: "bottom-[5%] left-[3%] sm:left-[4%] md:left-[5%] w-[85px] sm:w-[115px] md:w-[130px] lg:w-[145px]",
    animClass: "animate-float-delay-3",
  },
  {
    id: "tile-10",
    img: "/images/industry_restaurant.jpg",
    alt: "Commerce Point-of-Sale System",
    className: "bottom-[5%] left-[22%] sm:left-[21%] md:left-[22%] w-[90px] sm:w-[120px] md:w-[135px] lg:w-[150px]",
    animClass: "animate-float-slow",
  },
  {
    id: "tile-11",
    img: "/images/expert_advisor.jpg",
    alt: "Executive Architecture Workshop",
    className: "bottom-[5%] right-[22%] sm:right-[21%] md:right-[22%] w-[90px] sm:w-[120px] md:w-[135px] lg:w-[150px]",
    animClass: "animate-float-delay-1",
  },
  {
    id: "tile-12",
    img: "/images/industry_saas.jpg",
    alt: "SaaS Analytics Command",
    className: "bottom-[5%] right-[3%] sm:right-[4%] md:right-[5%] w-[85px] sm:w-[115px] md:w-[130px] lg:w-[145px]",
    animClass: "animate-float-delay-2",
  },
];

export default function ServicesPage() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-600 selection:text-white font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Navigation Header */}
      <SiteHeader onOpenConsultation={() => setConsultationOpen(true)} />

      {/* ======================================================== */}
      {/* 1. APPINVENTIV-STYLE HERO BANNER WITH VIDEO & TILES     */}
      {/* ======================================================== */}
      <section className="relative min-h-[95vh] sm:min-h-[98vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-black pt-28 pb-20 sm:pt-32 sm:pb-28">
        {/* Background Ambient Video Stream */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <video
            ref={videoRef}
            src="/videos/services_hero_bg.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            onLoadedData={() => setVideoLoaded(true)}
            poster="/images/services_hero_poster.jpg"
            className={`w-full h-full object-cover object-center transition-opacity duration-1000 ${
              videoLoaded ? "opacity-65" : "opacity-45"
            }`}
          >
            <source src="/videos/services_hero_bg.mp4" type="video/mp4" />
          </video>
          {/* Subtle cinematic gradient veil */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/40 to-black/90" />
          {/* Radial depth glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(0,0,0,0.2)_0%,#000000_85%)]" />
        </div>

        {/* Scattered Floating Interactive Photography Tiles (Appinventiv /service/ Exact Placement) */}
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden hidden sm:block">
          {FLOATING_TILES.map((tile) => (
            <div
              key={tile.id}
              className={`absolute ${tile.className} ${tile.animClass} transition-transform duration-500 hover:scale-105 pointer-events-auto cursor-pointer group`}
            >
              <div className="relative aspect-[4/3] rounded-lg sm:rounded-xl overflow-hidden shadow-2xl border border-white/10 group-hover:border-blue-400/40 bg-slate-900/60 backdrop-blur-sm transition-all duration-300">
                <Image
                  src={tile.img}
                  alt={tile.alt}
                  fill
                  sizes="(max-width: 768px) 110px, (max-width: 1200px) 160px, 190px"
                  className="object-cover object-center filter brightness-90 group-hover:brightness-105 group-hover:scale-105 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Mini Tiles Preview Ribbon (Tucked cleanly so mobile text stays prominent) */}
        <div className="absolute inset-x-0 bottom-4 z-10 sm:hidden overflow-hidden py-2 px-3 pointer-events-none opacity-40">
          <div className="flex items-center gap-2 justify-center">
            {FLOATING_TILES.slice(0, 4).map((tile) => (
              <div
                key={`mob-${tile.id}`}
                className="relative w-16 h-12 rounded-lg overflow-hidden border border-white/10 shrink-0"
              >
                <Image
                  src={tile.img}
                  alt={tile.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Center Typography & CTA Block (Exact Appinventiv /service/ Match) */}
        <div className="relative z-20 max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          {/* Eyebrow */}
          <div className="mb-4 sm:mb-5">
            <span className="text-white/85 text-xs sm:text-sm md:text-[15px] font-medium tracking-wide">
              From first idea to live product
            </span>
          </div>

          {/* Main Headline (Exact Typography) */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] xl:text-[72px] font-bold text-white tracking-tight leading-[1.08] sm:leading-[1.06] mb-5 sm:mb-6 max-w-3xl">
            We Plan it, Build it,
            <br />
            &amp; Help You Run it.
          </h1>

          {/* Subtitle Paragraph */}
          <p className="text-slate-300/90 text-sm sm:text-base md:text-[17px] lg:text-[18px] font-normal leading-relaxed max-w-xl mx-auto mb-8 sm:mb-9">
            Consulting, product management, and full-stack engineering under one roof,
            with no handoffs between them.
          </p>

          {/* White Pill Consultation Button (With Rolling Text Swap) */}
          <button
            onClick={() => setConsultationOpen(true)}
            type="button"
            className="group relative inline-flex items-center justify-center px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs sm:text-sm md:text-[15px] tracking-tight shadow-[0_12px_40px_rgba(255,255,255,0.2)] hover:shadow-[0_16px_50px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-[0.98] transition-all duration-200 cursor-pointer overflow-hidden"
          >
            <div className="relative h-5 overflow-hidden flex flex-col justify-center">
              <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full whitespace-nowrap text-slate-950 font-bold">
                Book a consultation
              </span>
              <span className="absolute top-full left-0 block transition-transform duration-300 ease-out group-hover:-translate-y-full whitespace-nowrap text-slate-950 font-bold">
                Book a consultation
              </span>
            </div>
          </button>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. SERVICES CATALOG & CAPABILITIES MATRIX                */}
      {/* ======================================================== */}
      <section className="py-24 sm:py-32 bg-[#050811] relative border-t border-white/10" id="catalog">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="max-w-3xl mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-4">
              <Layers className="w-3.5 h-3.5" />
              <span>Full-Stack Engineering Spectrum</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
              Comprehensive Technology Services Designed for Scale
            </h2>
            <p className="text-slate-400 text-sm sm:text-base lg:text-lg leading-relaxed">
              We provide sovereign, enterprise-grade engineering across the entire technology lifecycle —
              from architectural inception and AI fine-tuning to 24/7 cloud SRE operations.
            </p>
          </div>

          {/* 8-Column Detailed Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICE_CATEGORIES.map((service) => (
              <div
                key={service.id}
                className="group relative p-7 sm:p-8 rounded-3xl bg-[#090E1D] border border-white/10 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-2xl overflow-hidden"
              >
                {/* Ambient Top Glow on Hover */}
                <div
                  className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${service.gradient} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />

                <div className="relative z-10">
                  {/* Top Bar: Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-white/40 tracking-wider">
                      {service.num}
                    </span>
                    <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 group-hover:border-white/20 transition-colors">
                      {service.icon}
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-blue-300 transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6 font-normal">
                    {service.tagline}
                  </p>

                  {/* Capabilities List */}
                  <ul className="space-y-2 mb-8 pt-4 border-t border-white/5">
                    {service.capabilities.map((cap, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-300 leading-snug">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Metric & Action */}
                <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-emerald-400">
                    {service.metrics}
                  </span>
                  <button
                    onClick={() => setConsultationOpen(true)}
                    type="button"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-white/70 group-hover:text-blue-400 transition-colors"
                  >
                    <span>Consult</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. HOW WE ENGAGE & DELIVERY METHODOLOGY                  */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-28 bg-black relative border-t border-white/10">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-blue-400 font-bold mb-3 block">
              Agile Engineering Lifecycle
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Predictable Delivery, Guaranteed Rigor
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              From architectural discovery to autonomous production scaling, our engineers integrate
              seamlessly with your internal stakeholders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Architectural Discovery",
                desc: "Deep-dive workshops to analyze domain constraints, security posture, and data models before writing a single line of code.",
              },
              {
                step: "02",
                title: "Sprint-Based Engineering",
                desc: "Bi-weekly sprint demos with automated CI/CD deployments and real-time client Slack/Jira transparency.",
              },
              {
                step: "03",
                title: "Audit & Zero-Trust Hardening",
                desc: "Rigorous penetration testing, automated regression suites, and ISO 27001 ISMS certification alignment.",
              },
              {
                step: "04",
                title: "SRE & Autonomous Scale",
                desc: "24/7 Site Reliability Engineering monitoring, auto-scaling Kubernetes clusters, and ongoing telemetry optimization.",
              },
            ].map((p, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#090D18] border border-white/10 flex flex-col justify-between hover:border-blue-500/30 transition-all"
              >
                <div>
                  <span className="text-3xl font-black text-blue-500/40 block mb-4 font-mono">
                    {p.step}
                  </span>
                  <h4 className="text-lg font-bold text-white mb-2">{p.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. BOTTOM ENTERPRISE CTA BANNER                          */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-24 bg-gradient-to-b from-[#050811] to-black relative border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
            Ready to Build Your Next Breakthrough System?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mb-9 leading-relaxed">
            Speak directly with our senior cloud architects and AI engineers. Get an audited technical roadmap
            for your product in under 48 hours.
          </p>
          <button
            onClick={() => setConsultationOpen(true)}
            type="button"
            className="px-9 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm sm:text-base tracking-tight shadow-xl hover:shadow-blue-500/25 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            Schedule Technical Roadmap Consultation
          </button>
        </div>
      </section>

      {/* Footer */}
      <SiteFooter onOpenConsultation={() => setConsultationOpen(true)} />

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />
    </div>
  );
}
