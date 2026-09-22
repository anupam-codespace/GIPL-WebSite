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
  Truck,
  GraduationCap,
  Factory,
  Home,
  Film,
  Sprout,
  DollarSign,
  Plane,
  Car,
  Gamepad2,
  Calendar,
  Radio,
  Tv,
  UtensilsCrossed,
  Activity,
  Vote,
  ExternalLink
} from "lucide-react";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import ConsultationModal from "@/components/marketing/ConsultationModal";

interface IndustryItem {
  num: string;
  name: string;
  desc: string;
  icon: React.ReactNode;
  tag: string;
  stats: string;
}

const INDUSTRIES_LIST: IndustryItem[] = [
  {
    num: "01",
    name: "Logistics & Supply Chain",
    desc: "We develop cutting-edge software for the logistics industry, including cold-chain tracking, automated route optimization, and AI/ML-enabled demand forecasting.",
    icon: <Truck className="w-6 h-6 text-blue-400" />,
    tag: "Predictive Telemetry",
    stats: "99.8% On-Time Delivery Tracking"
  },
  {
    num: "02",
    name: "Healthcare & Diagnostics",
    desc: "Architecting HIPAA and NABL-compliant diagnostic laboratory information systems (LIMS), telehealth platforms, and automated analyzer interfacing with sub-second sync.",
    icon: <HeartPulse className="w-6 h-6 text-emerald-400" />,
    tag: "HIPAA Compliant",
    stats: "500,000+ Specimens Processed Monthly"
  },
  {
    num: "03",
    name: "FinTech & Digital Banking",
    desc: "Engineering PCI-DSS compliant digital payment gateways, micro-lending platforms, automated ledger reconciliation, and real-time fraud detection algorithms.",
    icon: <DollarSign className="w-6 h-6 text-amber-400" />,
    tag: "PCI-DSS Grade",
    stats: "Zero-Fraud Architectural Record"
  },
  {
    num: "04",
    name: "eCommerce & Omnichannel Retail",
    desc: "Transforming digital storefronts with headless commerce architectures, dynamic personalization, AI recommendation engines, and seamless ERP inventory sync.",
    icon: <ShoppingBag className="w-6 h-6 text-purple-400" />,
    tag: "Headless Architecture",
    stats: "4× Higher Checkout Conversion"
  },
  {
    num: "05",
    name: "Automotive & Connected Fleets",
    desc: "Developing central management software for smart automotive diagnostics, connected fleet telemetry, route optimization, and intelligent dispatch systems.",
    icon: <Car className="w-6 h-6 text-blue-400" />,
    tag: "Telematics Ready",
    stats: "Real-Time Fleet Telemetry & Analytics"
  },
  {
    num: "06",
    name: "Real Estate & PropTech",
    desc: "Creating unified community management ERPs, digital gate-pass security, automated maintenance billing, and IoT-enabled building management systems.",
    icon: <Home className="w-6 h-6 text-teal-400" />,
    tag: "Society ERP",
    stats: "25,000+ Active Residents"
  },
  {
    num: "07",
    name: "Education & EdTech",
    desc: "Engineering interactive learning management systems (LMS), AI-driven adaptive learning assessments, live video classroom infrastructure, and proctoring suites.",
    icon: <GraduationCap className="w-6 h-6 text-sky-400" />,
    tag: "Adaptive Learning",
    stats: "100,000+ Learners Empowered"
  },
  {
    num: "08",
    name: "Manufacturing & Industry 4.0",
    desc: "Deploying industrial IoT sensors, predictive maintenance algorithms, computer vision quality control, and automated shop-floor telemetry pipelines.",
    icon: <Factory className="w-6 h-6 text-rose-400" />,
    tag: "Industry 4.0",
    stats: "45% Reduction in Unplanned Downtime"
  },
  {
    num: "09",
    name: "Automotive & Connected Fleet",
    desc: "Connected car software, driver telemetry analytics, dealer management systems, and automated warranty claim processing workflows.",
    icon: <Car className="w-6 h-6 text-orange-400" />,
    tag: "Telematics Ready",
    stats: "Sub-Second Fleet Synchronization"
  },
  {
    num: "10",
    name: "Travel & Hospitality",
    desc: "Omnichannel booking engines, dynamic pricing algorithms, hotel PMS integration, and automated itinerary management platforms.",
    icon: <Plane className="w-6 h-6 text-cyan-400" />,
    tag: "Dynamic Engines",
    stats: "Global GDS & OTA Integration"
  },
  {
    num: "11",
    name: "Entertainment & Streaming (OTT)",
    desc: "High-concurrency video-on-demand (VOD) and live streaming applications with adaptive bitrate streaming (HLS/DASH) and multi-DRM encryption.",
    icon: <Tv className="w-6 h-6 text-pink-400" />,
    tag: "Ultra-Low Latency",
    stats: "1M+ Concurrent Streams Handled"
  },
  {
    num: "12",
    name: "Restaurants & Food Tech",
    desc: "Omnichannel digital ordering platforms, kitchen display systems (KDS), delivery rider dispatch optimization, and inventory forecasting.",
    icon: <UtensilsCrossed className="w-6 h-6 text-red-400" />,
    tag: "Quick-Service Tech",
    stats: "30% Faster Table Turnover"
  },
  {
    num: "13",
    name: "Agriculture & AgriTech",
    desc: "Deploying AI/ML for crop health prediction, soil moisture telemetry, satellite NDVI analysis, and decentralized farm-to-table supply chains.",
    icon: <Sprout className="w-6 h-6 text-emerald-400" />,
    tag: "Smart Farming",
    stats: "Predictive Weather Modeling"
  },
  {
    num: "14",
    name: "Public Sector & Governance",
    desc: "Citizen service delivery portals, digital document verification with Aadhaar/DigiLocker, and administrative oversight systems with full audit trails.",
    icon: <Vote className="w-6 h-6 text-indigo-400" />,
    tag: "GovTech Ready",
    stats: "State Government Recognized"
  },
  {
    num: "15",
    name: "Enterprise SaaS & Cloud Software",
    desc: "Multi-tenant cloud architecture, automated subscription billing, usage metering, and enterprise SSO integration (SAML/OAuth/OIDC).",
    icon: <Layers className="w-6 h-6 text-blue-400" />,
    tag: "Multi-Tenant Cloud",
    stats: "99.99% Architecture Availability"
  },
  {
    num: "16",
    name: "Fitness, Wellness & Sports",
    desc: "Smart wearable synchronization, computer vision pose estimation for workouts, real-time leaderboards, and subscription management.",
    icon: <Activity className="w-6 h-6 text-lime-400" />,
    tag: "Wearable Sync",
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
      {/* 1. HERO SECTION: Appinventiv Benchmark Style             */}
      {/* ======================================================== */}
      <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden bg-radial from-[#0d1629] via-[#04060c] to-[#000000]">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-semibold text-blue-400 mb-6 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Enterprise Industry Expertise</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-[1.15] mb-6">
            Preferred Transformation Partner of Global Leaders in{" "}
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              25+ Dynamic Industries
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed mb-10">
            Delivering measurable commercial value across diverse verticals. We engineer bespoke, compliant, and hyper-scalable technologies that optimize operations and compound your bottom line.
          </p>

          {/* Quick Badges Row (Exact Appinventiv Style) */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 max-w-3xl mx-auto mb-10 text-xs sm:text-sm font-semibold text-slate-300">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Assam Startup Incubated</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-blue-400" />
              <span>DPIIT #startupindia</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <CheckCircle2 className="w-4 h-4 text-purple-400" />
              <span>Triple ISO Certified</span>
            </div>
          </div>

          {/* Rolling Text-Swap CTA */}
          <div className="flex justify-center">
            <button
              onClick={() => setConsultationOpen(true)}
              className="swap-text-button px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm sm:text-base rounded-full shadow-[0_0_30px_rgba(17,99,251,0.35)] transition-all group"
            >
              <span className="text-original flex items-center gap-2">
                <span>Consult Our Industry Experts</span>
                <ArrowRight className="w-4 h-4" />
              </span>
              <span className="text-hover flex items-center justify-center gap-2">
                <span>Discuss Your Industry Vision</span>
                <ArrowRight className="w-4 h-4" />
              </span>
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
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3 block">
              Vertical Specialization
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
              Industries We Transform
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Each sector presents unique regulatory constraints, latency thresholds, and user expectations. We bring domain-tested architectural blueprints to accelerate your time-to-market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {INDUSTRIES_LIST.map((item, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-[#0a0f1d] border border-white/10 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between shadow-xl group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-mono font-extrabold text-slate-500 group-hover:text-blue-400 transition-colors">
                      {item.num}
                    </span>
                    <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                  </div>

                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-wider mb-2">
                    {item.tag}
                  </span>

                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {item.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-slate-400">
                  <span className="text-emerald-400">{item.stats}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
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
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-3 block">
              Proven Delivery
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
              Measurable Client Transformations
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
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
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
            Digitally Transform Your Business&apos; Potential
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
            Partner with Globizhub India Pvt Ltd. to architect industry-leading digital products that dominate your market.
          </p>

          <button
            onClick={() => setConsultationOpen(true)}
            className="swap-text-button px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm sm:text-base rounded-full shadow-[0_0_30px_rgba(17,99,251,0.4)] transition-all group"
          >
            <span className="text-original flex items-center gap-2">
              <span>Connect with an Industry Expert</span>
              <ArrowRight className="w-4 h-4" />
            </span>
            <span className="text-hover flex items-center justify-center gap-2">
              <span>Schedule Strategy Call</span>
              <ArrowRight className="w-4 h-4" />
            </span>
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
