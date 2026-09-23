"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import ConsultationModal from "@/components/marketing/ConsultationModal";

interface ServiceCategory {
  id: string;
  num: string;
  title: string;
  description: string;
}

const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "digital-transformation",
    num: "01",
    title: "Digital Transformation & Strategy",
    description:
      "We partner with enterprise leadership to audit legacy software estates, decommission architectural bottlenecks, and deploy modern microservices frameworks that dramatically accelerate deployment frequency and product agility.",
  },
  {
    id: "ai-engineering",
    num: "02",
    title: "AI & Autonomous Agent Squads",
    description:
      "From proprietary enterprise RAG systems to autonomous multi-agent decision networks, we build scalable AI solutions with zero hallucination, strict prompt safeguards, and sovereign private LLM fine-tuning.",
  },
  {
    id: "custom-software",
    num: "03",
    title: "Full-Cycle Product Engineering",
    description:
      "End-to-end product development fusing design thinking, clean type-safe architecture, automated testing pipelines, and distributed databases engineered to handle millions of concurrent transactions with 99.98% SLA.",
  },
  {
    id: "cloud-devops",
    num: "04",
    title: "Cloud Infrastructure & DevOps",
    description:
      "Resilient, self-healing cloud infrastructure across AWS, Google Cloud, and sovereign data centers with automated Kubernetes orchestration, GitOps CI/CD pipelines, and continuous FinOps cost governance.",
  },
  {
    id: "mobile-engineering",
    num: "05",
    title: "Mobile App Development",
    description:
      "Native iOS (Swift) and Android (Kotlin) mobile platforms engineered with biometric authentication, offline synchronization, real-time telemetry, and hardware sensor integrations for frictionless enterprise workflows.",
  },
  {
    id: "ui-ux-design",
    num: "06",
    title: "UI/UX & Product Design Systems",
    description:
      "Human-centered design systems translating intricate domain workflows into accessible, high-converting digital products. From interactive prototyping to production design tokens, we drive rapid enterprise adoption.",
  },
  {
    id: "data-analytics",
    num: "07",
    title: "Data Engineering & Analytics",
    description:
      "High-throughput streaming pipelines, lakehouse architectures, and executive BI intelligence dashboards that unify disparate data repositories into real-time, actionable decision metrics for C-level leadership.",
  },
  {
    id: "cybersecurity",
    num: "08",
    title: "Cybersecurity & Sovereign Governance",
    description:
      "As an ISO/IEC 27001 certified technology company, Globizhub builds zero-trust defense architectures with continuous automated vulnerability scanning, SOC 2 compliance, and end-to-end payload encryption.",
  },
];

interface FloatingTile {
  id: string;
  img: string;
  alt: string;
  className: string;
  animClass: string;
}

// Floating circular photos with alternating small, medium, and big sizes
// Visible and animated on both mobile screens and desktop viewports
const FLOATING_TILES: FloatingTile[] = [
  {
    id: "tile-1",
    img: "/images/consultation-handshake.jpg",
    alt: "Strategic Advisory Consultation",
    // Big circle on desktop (145px), Medium on mobile (72px)
    className: "bottom-[23%] left-[3%] w-[72px] h-[72px] sm:top-[12%] sm:bottom-auto sm:left-[16%] sm:right-auto sm:w-[145px] sm:h-[145px]",
    animClass: "animate-float-orb-1",
  },
  {
    id: "tile-2",
    img: "/images/hero_architecture.jpg",
    alt: "System Architecture",
    // Small circle on desktop (82px), Small on mobile (48px)
    className: "top-[12%] left-[4%] w-12 h-12 sm:top-[18%] sm:bottom-auto sm:left-[3%] sm:right-auto sm:w-[82px] sm:h-[82px]",
    animClass: "animate-float-orb-2",
  },
  {
    id: "tile-3",
    img: "/images/tech_alignment_orbs.jpg",
    alt: "AI Neural Infrastructure",
    // Medium circle on desktop (115px), Medium on mobile (58px)
    className: "top-[10%] right-[4%] w-[58px] h-[58px] sm:top-[12%] sm:bottom-auto sm:right-[16%] sm:left-auto sm:w-[115px] sm:h-[115px]",
    animClass: "animate-float-orb-3",
  },
  {
    id: "tile-4",
    img: "/images/patholab_doctor_tablet.jpg",
    alt: "Healthcare Diagnostic UI",
    // Big circle on desktop (155px), Small on mobile (52px)
    className: "top-[27%] left-[3%] w-[52px] h-[52px] sm:top-[40%] sm:bottom-auto sm:left-[2%] sm:right-auto sm:w-[155px] sm:h-[155px]",
    animClass: "animate-float-orb-4",
  },
  {
    id: "tile-5",
    img: "/images/built_it_market_it.jpg",
    alt: "Cloud Engineering Deployment",
    // Medium circle on desktop (110px)
    className: "hidden sm:block sm:top-[64%] sm:bottom-auto sm:left-[6%] sm:right-auto sm:w-[110px] sm:h-[110px]",
    animClass: "animate-float-orb-1",
  },
  {
    id: "tile-6",
    img: "/images/footer_team.jpg",
    alt: "Sprint Collaboration",
    // Big circle on desktop (160px), Medium-Big on mobile (68px)
    className: "bottom-[22%] right-[3%] w-[68px] h-[68px] sm:top-[38%] sm:bottom-auto sm:right-[2%] sm:left-auto sm:w-[160px] sm:h-[160px]",
    animClass: "animate-float-orb-2",
  },
  {
    id: "tile-7",
    img: "/images/app_showcase_woman.jpg",
    alt: "Mobile App UX",
    // Small circle on desktop (85px), Big on mobile (72px)
    className: "top-[25%] right-[3%] w-[72px] h-[72px] sm:top-[18%] sm:bottom-auto sm:right-[4%] sm:left-auto sm:w-[85px] sm:h-[85px]",
    animClass: "animate-float-orb-3",
  },
  {
    id: "tile-8",
    img: "/images/industry_banking.jpg",
    alt: "Fintech Core Terminal",
    // Small circle on desktop (85px), Small on mobile (48px)
    className: "bottom-[8%] left-[8%] w-12 h-12 sm:top-[64%] sm:bottom-auto sm:right-[6%] sm:left-auto sm:w-[85px] sm:h-[85px]",
    animClass: "animate-float-orb-4",
  },
  {
    id: "tile-9",
    img: "/images/industry_healthcare.jpg",
    alt: "Precision Informatics",
    // Medium circle on desktop (110px)
    className: "hidden sm:block sm:bottom-[5%] sm:top-auto sm:left-[3%] sm:right-auto sm:w-[110px] sm:h-[110px]",
    animClass: "animate-float-orb-1",
  },
  {
    id: "tile-10",
    img: "/images/industry_restaurant.jpg",
    alt: "Commerce Point-of-Sale System",
    // Big circle on desktop (145px)
    className: "hidden sm:block sm:bottom-[5%] sm:top-auto sm:left-[20%] sm:right-auto sm:w-[145px] sm:h-[145px]",
    animClass: "animate-float-orb-2",
  },
  {
    id: "tile-11",
    img: "/images/expert_advisor.jpg",
    alt: "Executive Architecture Workshop",
    // Medium circle on desktop (115px)
    className: "hidden sm:block sm:bottom-[5%] sm:top-auto sm:right-[20%] sm:left-auto sm:w-[115px] sm:h-[115px]",
    animClass: "animate-float-orb-3",
  },
  {
    id: "tile-12",
    img: "/images/industry_saas.jpg",
    alt: "SaaS Analytics Command",
    // Small circle on desktop (85px), Medium on mobile (64px)
    className: "bottom-[8%] right-[8%] w-[64px] h-[64px] sm:bottom-[5%] sm:top-auto sm:right-[3%] sm:left-auto sm:w-[85px] sm:h-[85px]",
    animClass: "animate-float-orb-4",
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
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Navigation Header */}
      <SiteHeader onOpenConsultation={() => setConsultationOpen(true)} />

      {/* ======================================================== */}
      {/* 1. HERO SECTION WITH BACKGROUND VIDEO & CIRCULAR ORBS     */}
      {/* ======================================================== */}
      <section className="relative min-h-[92vh] sm:min-h-[96vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-black pt-28 pb-20 sm:pt-32 sm:pb-28">
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

        {/* Scattered Circular Floating Photography Orbs (Animated in Slow Motion) */}
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
          {FLOATING_TILES.map((tile) => (
            <div
              key={tile.id}
              className={`absolute ${tile.className} ${tile.animClass} transition-transform duration-500 hover:scale-110 pointer-events-auto cursor-pointer group z-10`}
            >
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.7)] border-2 border-white/30 group-hover:border-blue-400 group-hover:shadow-[0_0_30px_rgba(17,99,251,0.6)] transition-all duration-300">
                <Image
                  src={tile.img}
                  alt={tile.alt}
                  fill
                  sizes="(max-width: 768px) 80px, 160px"
                  className="object-cover object-center filter brightness-95 group-hover:brightness-110 group-hover:scale-105 transition-all duration-300"
                />
                {/* Subtle radial sheen */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/45 via-transparent to-white/20 opacity-40 group-hover:opacity-10 transition-opacity" />
              </div>
            </div>
          ))}
        </div>

        {/* Center Typography & CTA Block */}
        <div className="relative z-20 max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          {/* Eyebrow */}
          <div className="mb-4 sm:mb-5">
            <span className="text-white/85 text-xs sm:text-sm md:text-[15px] font-medium tracking-wide">
              From first idea to live product
            </span>
          </div>

          {/* Main Headline */}
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

          {/* Animated Glowing "Book a consultation" Button */}
          <button
            onClick={() => setConsultationOpen(true)}
            type="button"
            className="group relative inline-flex items-center justify-center px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs sm:text-sm md:text-[15px] tracking-tight hover:scale-105 active:scale-[0.98] transition-all duration-200 cursor-pointer overflow-hidden animate-btn-glow"
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
      {/* 2. SERVICES CATALOG (WHITE BACKGROUND, CLEAN BOXES)      */}
      {/* ======================================================== */}
      <section className="py-24 sm:py-32 bg-white relative border-t border-slate-200/80" id="catalog">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header (Clean, no extra pills) */}
          <div className="max-w-3xl mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight mb-4">
              Comprehensive Technology Services Designed for Scale
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              We provide sovereign, enterprise-grade engineering across the entire technology lifecycle —
              from architectural inception and AI fine-tuning to 24/7 cloud SRE operations.
            </p>
          </div>

          {/* 8-Column Clean White Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICE_CATEGORIES.map((service) => (
              <div
                key={service.id}
                className="group relative p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 hover:border-[#1163FB] transition-all duration-300 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_rgba(17,99,251,0.12)] overflow-hidden"
              >
                <div>
                  {/* Top Bar: Number Badge (No AI icons) */}
                  <span className="inline-block text-xs font-mono font-bold text-[#1163FB] bg-blue-50 border border-blue-100 px-3 py-1 rounded-full mb-5">
                    {service.num}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-950 mb-3 group-hover:text-[#1163FB] transition-colors leading-snug">
                    {service.title}
                  </h3>

                  {/* Rich Description */}
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>

                {/* Consultation Button with Right-Side Tilted Arrow */}
                <button
                  onClick={() => setConsultationOpen(true)}
                  type="button"
                  className="w-full mt-7 py-3 px-5 rounded-2xl bg-slate-900 group-hover:bg-[#1163FB] text-white text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center justify-between group/btn cursor-pointer shadow-sm hover:shadow-[0_8px_20px_rgba(17,99,251,0.25)]"
                >
                  <span>Book Consultation</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. HOW WE ENGAGE & DELIVERY METHODOLOGY (WHITE/LIGHT)    */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-28 bg-slate-50 relative border-t border-slate-200/80">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-4">
              Predictable Delivery, Guaranteed Rigor
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
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
                className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-black text-blue-600 block mb-4 font-mono">
                    {p.step}
                  </span>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{p.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. BOTTOM ENTERPRISE CTA (FULL-WIDTH SECTION)            */}
      {/* ======================================================== */}
      <section className="w-full py-24 sm:py-32 bg-[#050811] relative border-t border-slate-800 text-center overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Ready to Build Your Next Breakthrough System?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-9 leading-relaxed">
            Speak directly with our senior cloud architects and AI engineers. Get an audited technical roadmap
            for your product in under 48 hours.
          </p>

          {/* Glowing Consultation Button */}
          <button
            onClick={() => setConsultationOpen(true)}
            type="button"
            className="group relative z-10 inline-flex items-center justify-center px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs sm:text-sm md:text-[15px] tracking-tight hover:scale-105 active:scale-[0.98] transition-all duration-200 cursor-pointer overflow-hidden animate-btn-glow"
          >
            <div className="relative h-5 overflow-hidden flex flex-col justify-center">
              <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full whitespace-nowrap text-slate-950 font-bold">
                Schedule Technical Roadmap Consultation
              </span>
              <span className="absolute top-full left-0 block transition-transform duration-300 ease-out group-hover:-translate-y-full whitespace-nowrap text-slate-950 font-bold">
                Schedule Technical Roadmap Consultation
              </span>
            </div>
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
