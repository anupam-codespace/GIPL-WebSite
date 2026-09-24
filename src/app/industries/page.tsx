"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  Building2,
  MapPin,
  Award,
  Globe2,
  ExternalLink
} from "lucide-react";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import ConsultationModal from "@/components/marketing/ConsultationModal";

interface IndustryItem {
  num: string;
  name: string;
  desc: string;
  stats: string;
}

const INDUSTRIES_LIST: IndustryItem[] = [
  {
    num: "01",
    name: "Logistics & Supply Chain",
    desc: "We develop cutting-edge software for the logistics industry, including cold-chain tracking, automated route optimization, and AI/ML-enabled demand forecasting.",
    stats: "99.8% On-Time Delivery Tracking"
  },
  {
    num: "02",
    name: "Healthcare & Diagnostics",
    desc: "Architecting HIPAA and NABL-compliant diagnostic laboratory information systems (LIMS), telehealth platforms, and automated analyzer interfacing with sub-second sync.",
    stats: "500,000+ Specimens Processed Monthly"
  },
  {
    num: "03",
    name: "FinTech & Digital Banking",
    desc: "Engineering PCI-DSS compliant digital payment gateways, micro-lending platforms, automated ledger reconciliation, and real-time fraud detection algorithms.",
    stats: "Zero-Fraud Architectural Record"
  },
  {
    num: "04",
    name: "eCommerce & Omnichannel Retail",
    desc: "Transforming digital storefronts with headless commerce architectures, dynamic personalization, AI recommendation engines, and seamless ERP inventory sync.",
    stats: "4× Higher Checkout Conversion"
  },
  {
    num: "05",
    name: "Automotive & Connected Fleets",
    desc: "Developing central management software for smart automotive diagnostics, connected fleet telemetry, route optimization, and intelligent dispatch systems.",
    stats: "Real-Time Fleet Telemetry & Analytics"
  },
  {
    num: "06",
    name: "Real Estate & PropTech",
    desc: "Creating unified community management ERPs, digital gate-pass security, automated maintenance billing, and IoT-enabled building management systems.",
    stats: "25,000+ Active Residents"
  },
  {
    num: "07",
    name: "Education & EdTech",
    desc: "Engineering interactive learning management systems (LMS), AI-driven adaptive learning assessments, live video classroom infrastructure, and proctoring suites.",
    stats: "100,000+ Learners Empowered"
  },
  {
    num: "08",
    name: "Manufacturing & Industry 4.0",
    desc: "Deploying industrial IoT sensors, predictive maintenance algorithms, computer vision quality control, and automated shop-floor telemetry pipelines.",
    stats: "45% Reduction in Unplanned Downtime"
  },
  {
    num: "09",
    name: "Smart Mobility & Transit Systems",
    desc: "Connected transit software, passenger telemetry analytics, fleet dispatch automation, and automated warranty and ticketing processing workflows.",
    stats: "Sub-Second Fleet Synchronization"
  },
  {
    num: "10",
    name: "Travel & Hospitality",
    desc: "Omnichannel booking engines, dynamic pricing algorithms, hotel PMS integration, and automated itinerary management platforms.",
    stats: "Global GDS & OTA Integration"
  },
  {
    num: "11",
    name: "Entertainment & Streaming (OTT)",
    desc: "High-concurrency video-on-demand (VOD) and live streaming applications with adaptive bitrate streaming (HLS/DASH) and multi-DRM encryption.",
    stats: "1M+ Concurrent Streams Handled"
  },
  {
    num: "12",
    name: "Restaurants & Food Tech",
    desc: "Omnichannel digital ordering platforms, kitchen display systems (KDS), delivery rider dispatch optimization, and inventory forecasting.",
    stats: "30% Faster Table Turnover"
  },
  {
    num: "13",
    name: "Agriculture & AgriTech",
    desc: "Deploying AI/ML for crop health prediction, soil moisture telemetry, satellite NDVI analysis, and decentralized farm-to-table supply chains.",
    stats: "Predictive Weather Modeling"
  },
  {
    num: "14",
    name: "Public Sector & Governance",
    desc: "Citizen service delivery portals, digital document verification with Aadhaar/DigiLocker, and administrative oversight systems with full audit trails.",
    stats: "State Government Recognized"
  },
  {
    num: "15",
    name: "Enterprise SaaS & Cloud Software",
    desc: "Multi-tenant cloud architecture, automated subscription billing, usage metering, and enterprise SSO integration (SAML/OAuth/OIDC).",
    stats: "99.99% Architecture Availability"
  },
  {
    num: "16",
    name: "Fitness, Wellness & Sports",
    desc: "Smart wearable synchronization, computer vision pose estimation for workouts, real-time leaderboards, and subscription management.",
    stats: "Biometric Data Protection"
  }
];

export default function IndustriesPage() {
  const [consultationOpen, setConsultationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#000000] text-white font-['Plus_Jakarta_Sans',sans-serif] selection:bg-blue-600 selection:text-white antialiased overflow-x-hidden">
      {/* Universal Floating Header */}
      <SiteHeader onOpenConsultation={() => setConsultationOpen(true)} />

      {/* ======================================================== */}
      {/* 1. HERO SECTION: Vertical Video Background with Glow      */}
      {/* ======================================================== */}
      <section className="relative pt-36 sm:pt-44 pb-20 sm:pb-28 overflow-hidden min-h-[90vh] flex items-center justify-center bg-black">
        {/* Background Vertical Video (Pinterest Pin 712624341076867163) */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/industries_hero_poster.jpg"
            className="w-full h-full object-cover opacity-35 filter brightness-95 contrast-110 scale-105"
          >
            <source src="/videos/industries_hero_bg.mp4" type="video/mp4" />
          </video>
          {/* Subtle Dark Vignette & Gradient Overlays for High Text Contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black pointer-events-none" />
          <div className="absolute inset-0 bg-radial from-transparent via-black/50 to-black pointer-events-none" />
        </div>

        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none z-[1]" />
        <div className="absolute bottom-10 right-10 w-[450px] h-[300px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none z-[1]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.15] mb-6">
            Preferred Transformation Partner of Global Leaders in{" "}
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              25+ Dynamic Industries
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed mb-10">
            Delivering measurable commercial value across diverse verticals. We engineer bespoke, compliant, and hyper-scalable technologies that optimize operations and compound your bottom line.
          </p>

          {/* High-Impact Industry Stats Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto mb-10 text-left">
            <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-400 font-mono mb-1">25+</div>
              <div className="text-xs text-slate-300 font-medium">Industry Domains Mastered</div>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="text-2xl sm:text-3xl font-extrabold text-sky-400 font-mono mb-1">200+</div>
              <div className="text-xs text-slate-300 font-medium">Enterprise Deployments</div>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono mb-1">99.99%</div>
              <div className="text-xs text-slate-300 font-medium">Mission-Critical Uptime</div>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="text-2xl sm:text-3xl font-extrabold text-purple-400 font-mono mb-1">Zero-Loss</div>
              <div className="text-xs text-slate-300 font-medium">Regulatory SLA Compliance</div>
            </div>
          </div>

          {/* Consultation CTA with Right-Side Tilted Arrow */}
          <div className="flex justify-center">
            <button
              onClick={() => setConsultationOpen(true)}
              type="button"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#1163FB] hover:bg-blue-600 text-white font-semibold text-sm sm:text-base rounded-2xl shadow-[0_8px_30px_rgba(17,99,251,0.4)] hover:shadow-[0_12px_40px_rgba(17,99,251,0.6)] transition-all duration-300 group cursor-pointer hover:scale-105"
            >
              <span>Consult Our Industry Experts</span>
              <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. NUMBERED INDUSTRY CARDS GRID (01 to 16+)              */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-28 bg-[#05070e] border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
              Industries We Transform
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Each sector presents unique regulatory constraints, latency thresholds, and user expectations. We bring domain-tested architectural blueprints to accelerate your time-to-market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {INDUSTRIES_LIST.map((item, idx) => (
              <div
                key={idx}
                className="p-7 sm:p-8 rounded-3xl bg-[#0a0f1d] border border-white/10 hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between shadow-xl hover:shadow-[0_20px_45px_rgba(17,99,251,0.15)] group hover:-translate-y-1.5"
              >
                <div>
                  {/* Clean Sequential Number Badge (No AI icons, no "Predictive Telemetry" tag) */}
                  <div className="mb-5">
                    <span className="inline-block text-xs font-mono font-bold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3.5 py-1.5 rounded-full">
                      {item.num}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors leading-snug">
                    {item.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-slate-400">
                  <span className="text-emerald-400 font-mono">{item.stats}</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. CASE STUDY SNAPSHOT (Americana, Patholab, Bungzo)     */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-28 bg-[#000000] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
              Measurable Client Transformations
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              From sub-second lab processing to multi-region cloud migrations, our engineering goes beyond code to deliver measurable ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="p-8 rounded-3xl bg-[#090e1a] border border-white/10 hover:border-emerald-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between">
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono mb-2">
                  90% Faster
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Clinical Diagnostic Reporting
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  Patholab.cloud enabled 350+ healthcare centers to automate machine interfacing, eliminating manual transcription errors and speeding up critical patient report delivery.
                </p>
              </div>
              <div className="text-xs font-semibold text-emerald-400">
                Healthcare &amp; LIMS Engineering
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-3xl bg-[#090e1a] border border-white/10 hover:border-blue-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between">
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-blue-400 font-mono mb-2">
                  4× Improvement
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Operational Society Governance
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  Bungzo unified resident gate security and maintenance billing across premium residential communities, cutting overdue reconciliations to zero.
                </p>
              </div>
              <div className="text-xs font-semibold text-blue-400">
                PropTech &amp; ERP Architecture
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-3xl bg-[#090e1a] border border-white/10 hover:border-purple-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between">
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-purple-400 font-mono mb-2">
                  99.99% Uptime
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Mission-Critical Cloud Operations
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  Architected Kubernetes-driven microservices with auto-healing and automated failover for high-volume enterprise systems.
                </p>
              </div>
              <div className="text-xs font-semibold text-purple-400">
                Cloud &amp; DevOps Engineering
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. BOTTOM CTA BANNER                                     */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-[#000000] via-[#070b16] to-[#000000] relative text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
            Digitally Transform Your Business&apos; Potential
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
            Partner with Globizhub India Pvt Ltd. to architect industry-leading digital products that dominate your market.
          </p>

          <button
            onClick={() => setConsultationOpen(true)}
            type="button"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#1163FB] hover:bg-blue-600 text-white font-semibold text-sm sm:text-base rounded-2xl shadow-[0_8px_30px_rgba(17,99,251,0.4)] hover:shadow-[0_12px_40px_rgba(17,99,251,0.6)] transition-all duration-300 group cursor-pointer hover:scale-105"
          >
            <span>Connect with an Industry Expert</span>
            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
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
