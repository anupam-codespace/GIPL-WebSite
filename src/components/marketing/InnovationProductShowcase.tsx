"use client";

import React, { useState, useRef } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Activity,
  Shield,
  BookOpen,
  Boxes,
  Users,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  Zap,
} from "lucide-react";

interface InnovationProductShowcaseProps {
  onOpenConsultation?: () => void;
}

interface ProductItem {
  id: string;
  name: string;
  navName: string;
  category: string;
  bgTint: string;
  logo: React.ReactNode;
  description: string;
  metric1: { value: string; label: string };
  metric2: { value: string; label: string };
  mockup: React.ReactNode;
}

const PRODUCTS: ProductItem[] = [
  {
    id: "patholab",
    name: "Patholab.cloud",
    navName: "Patholab.cloud",
    category: "Cloud Diagnostic LIMS",
    bgTint: "#FFFDF5",
    logo: (
      <div className="w-11 h-11 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-600 font-black text-xl">
        P
      </div>
    ),
    description:
      "Engineered a cloud-native laboratory intelligence core handling high-throughput patient diagnostics, automated barcode routing, and instant WhatsApp report delivery.",
    metric1: { value: "500K+", label: "Reports Generated" },
    metric2: { value: "99.98%", label: "Analyzer Uptime" },
    mockup: (
      <div className="w-full bg-[#080D1A] rounded-2xl p-4 sm:p-5 border border-white/10 text-white shadow-xl">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-bold tracking-wide">Patholab Core Live</span>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono font-bold">
            BIDIRECTIONAL LIMS
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06]">
            <div className="text-[10px] text-slate-400">Specimen Barcode</div>
            <div className="text-xs font-mono font-bold text-white mt-0.5">#PL-8942-CBC</div>
          </div>
          <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06]">
            <div className="text-[10px] text-slate-400">Analyzer Sync</div>
            <div className="text-xs font-mono font-bold text-emerald-400 mt-0.5">Mindray BC-5150 OK</div>
          </div>
        </div>
        <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="text-xs text-slate-200">Automated Patient PDF Dispatched via WhatsApp</span>
          </div>
          <span className="text-[10px] font-mono text-emerald-400">1.2s</span>
        </div>
      </div>
    ),
  },
  {
    id: "bungzo",
    name: "Bungzo",
    navName: "Bungzo",
    category: "Smart Gated Society OS",
    bgTint: "#FAF8F5",
    logo: (
      <div className="w-11 h-11 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-600 font-black text-xl">
        B
      </div>
    ),
    description:
      "All-in-one gated living operating system featuring real-time visitor authorization, automated maintenance billing, and instantaneous emergency SOS dispatch.",
    metric1: { value: "100+", label: "Societies Managed" },
    metric2: { value: "85%", label: "Gate Queue Reduction" },
    mockup: (
      <div className="w-full bg-[#080D1A] rounded-2xl p-4 sm:p-5 border border-white/10 text-white shadow-xl">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-xs font-bold tracking-wide">Bungzo Resident Gate OS</span>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-mono font-bold">
            SECURE ACCESS
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06]">
            <div className="text-[10px] text-slate-400">Visitor Pass</div>
            <div className="text-xs font-mono font-bold text-white mt-0.5">Approved (Flat 402-B)</div>
          </div>
          <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06]">
            <div className="text-[10px] text-slate-400">Gate Kiosk Status</div>
            <div className="text-xs font-mono font-bold text-amber-400 mt-0.5">Boom Barrier Open</div>
          </div>
        </div>
        <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-500/20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="text-xs text-slate-200">Biometric & Number-Plate OCR Match Verified</span>
          </div>
          <span className="text-[10px] font-mono text-amber-400">0.8s</span>
        </div>
      </div>
    ),
  },
  {
    id: "globizlibrary",
    name: "GlobizLibrary",
    navName: "GlobizLibrary",
    category: "Academic RFID Repository",
    bgTint: "#F4F8FC",
    logo: (
      <div className="w-11 h-11 rounded-xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-600 font-black text-xl">
        GL
      </div>
    ),
    description:
      "Comprehensive digital academic library management system managing over 250,000 cataloged titles with RFID kiosk checkouts and unified OPAC discovery.",
    metric1: { value: "250K+", label: "Cataloged Titles" },
    metric2: { value: "94%", label: "Faster Book Checkouts" },
    mockup: (
      <div className="w-full bg-[#080D1A] rounded-2xl p-4 sm:p-5 border border-white/10 text-white shadow-xl">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-pulse" />
            <span className="text-xs font-bold tracking-wide">GlobizLibrary RFID Core</span>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-300 font-mono font-bold">
            OPAC DISCOVERY
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06]">
            <div className="text-[10px] text-slate-400">RFID Tag ID</div>
            <div className="text-xs font-mono font-bold text-white mt-0.5">#TAG-9921-LIB</div>
          </div>
          <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06]">
            <div className="text-[10px] text-slate-400">Circulation State</div>
            <div className="text-xs font-mono font-bold text-sky-400 mt-0.5">Auto-Issued to Student</div>
          </div>
        </div>
        <div className="p-3 rounded-xl bg-sky-950/40 border border-sky-500/20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-sky-400 shrink-0" />
            <span className="text-xs text-slate-200">Overdue Auto-Notification & Fine Ledger Updated</span>
          </div>
          <span className="text-[10px] font-mono text-sky-400">Instant</span>
        </div>
      </div>
    ),
  },
  {
    id: "ims",
    name: "Enterprise IMS",
    navName: "Enterprise IMS",
    category: "Supply Chain & Warehouse Hub",
    bgTint: "#F6F5FE",
    logo: (
      <div className="w-11 h-11 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-600 font-black text-xl">
        IMS
      </div>
    ),
    description:
      "Enterprise inventory tracking system with dynamic batch traceability, real-time reorder thresholds, barcode scanning, and multi-location ERP integration.",
    metric1: { value: "1.2M+", label: "SKUs Monitored" },
    metric2: { value: "99.9%", label: "Stock Accuracy" },
    mockup: (
      <div className="w-full bg-[#080D1A] rounded-2xl p-4 sm:p-5 border border-white/10 text-white shadow-xl">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-xs font-bold tracking-wide">Multi-Node Warehouse Cluster</span>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-mono font-bold">
            ERP INTEGRATED
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06]">
            <div className="text-[10px] text-slate-400">Batch Number</div>
            <div className="text-xs font-mono font-bold text-white mt-0.5">#WH-GUW-4410</div>
          </div>
          <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06]">
            <div className="text-[10px] text-slate-400">Safety Stock</div>
            <div className="text-xs font-mono font-bold text-indigo-400 mt-0.5">Optimal (+14.2%)</div>
          </div>
        </div>
        <div className="p-3 rounded-xl bg-indigo-950/40 border border-indigo-500/20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Boxes className="w-4 h-4 text-indigo-400 shrink-0" />
            <span className="text-xs text-slate-200">Automated Purchase Order Dispatched to Supplier</span>
          </div>
          <span className="text-[10px] font-mono text-indigo-400">Active</span>
        </div>
      </div>
    ),
  },
  {
    id: "teamhub",
    name: "TeamHub",
    navName: "TeamHub",
    category: "Workforce & Sprint Orchestrator",
    bgTint: "#FFF5F7",
    logo: (
      <div className="w-11 h-11 rounded-xl bg-rose-500/15 border border-rose-500/30 flex items-center justify-center text-rose-600 font-black text-xl">
        TH
      </div>
    ),
    description:
      "Centralized internal operations platform with real-time sprint tracking, automated developer velocity analytics, and integrated client milestone billing.",
    metric1: { value: "3.5X", label: "Sprint Velocity" },
    metric2: { value: "100%", label: "Milestone Transparency" },
    mockup: (
      <div className="w-full bg-[#080D1A] rounded-2xl p-4 sm:p-5 border border-white/10 text-white shadow-xl">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-400 animate-pulse" />
            <span className="text-xs font-bold tracking-wide">TeamHub Sprint Tracker</span>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 font-mono font-bold">
            VELOCITY ENGINE
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06]">
            <div className="text-[10px] text-slate-400">Sprint 42 Status</div>
            <div className="text-xs font-mono font-bold text-white mt-0.5">24/26 Stories Done</div>
          </div>
          <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06]">
            <div className="text-[10px] text-slate-400">CI/CD Build Health</div>
            <div className="text-xs font-mono font-bold text-emerald-400 mt-0.5">100% Passing</div>
          </div>
        </div>
        <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-500/20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-rose-400 shrink-0" />
            <span className="text-xs text-slate-200">Milestone Payment Verified & Escrow Released</span>
          </div>
          <span className="text-[10px] font-mono text-rose-400">Approved</span>
        </div>
      </div>
    ),
  },
  {
    id: "ai-suite",
    name: "Enterprise AI Suite",
    navName: "Enterprise AI Suite",
    category: "Autonomous Agentic Platform",
    bgTint: "#F8F5FF",
    logo: (
      <div className="w-11 h-11 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-600 font-black text-xl">
        AI
      </div>
    ),
    description:
      "Enterprise agentic intelligence framework coordinating vector stores, multi-agent reasoning graphs, and confidential on-premise LLM inference.",
    metric1: { value: "10X", label: "Knowledge Retrieval Speed" },
    metric2: { value: "Zero", label: "Data Leakage" },
    mockup: (
      <div className="w-full bg-[#080D1A] rounded-2xl p-4 sm:p-5 border border-white/10 text-white shadow-xl">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-pulse" />
            <span className="text-xs font-bold tracking-wide">Multi-Agent Reasoning Graph</span>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 font-mono font-bold">
            CONFIDENTIAL RAG
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06]">
            <div className="text-[10px] text-slate-400">Context Query</div>
            <div className="text-xs font-mono font-bold text-white mt-0.5">Compliance Matrix v4</div>
          </div>
          <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06]">
            <div className="text-[10px] text-slate-400">Embedding Match</div>
            <div className="text-xs font-mono font-bold text-purple-400 mt-0.5">0.962 Similarity</div>
          </div>
        </div>
        <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-500/20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-purple-400 shrink-0" />
            <span className="text-xs text-slate-200">Synthesized Executive Summary Generated</span>
          </div>
          <span className="text-[10px] font-mono text-purple-400">420ms</span>
        </div>
      </div>
    ),
  },
];

export default function InnovationProductShowcase({
  onOpenConsultation,
}: InnovationProductShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + PRODUCTS.length) % PRODUCTS.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % PRODUCTS.length);
  };

  const currentProduct = PRODUCTS[activeIndex];
  const prevProduct = PRODUCTS[(activeIndex - 1 + PRODUCTS.length) % PRODUCTS.length];
  const nextProduct = PRODUCTS[(activeIndex + 1) % PRODUCTS.length];

  return (
    <section
      id="products-showcase"
      className="scroll-mt-28 pt-32 sm:pt-40 pb-28 sm:pb-36 bg-[#000000] text-white relative overflow-hidden font-['Plus_Jakarta_Sans',sans-serif] border-b border-white/[0.08]"
    >
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] pointer-events-none rounded-full blur-[160px] opacity-15 -z-10"
        style={{
          background:
            "radial-gradient(circle, rgba(17, 99, 251, 0.45) 0%, rgba(37, 99, 235, 0.15) 50%, transparent 70%)",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading (Appinventiv Benchmark) */}
        <div className="text-center w-full max-w-5xl mx-auto mb-10 sm:mb-14 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[46px] xl:text-[48px] font-bold text-white tracking-tight leading-tight sm:whitespace-nowrap">
            Innovation, Engineered by Globizhub
          </h2>
        </div>

        {/* Navigation Track with Arrows & Product Pills */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-16 sm:mb-20 max-w-5xl mx-auto px-2">
          {/* Left Arrow */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous Product"
            className="w-10 h-10 rounded-full border border-white/20 bg-white/[0.06] hover:bg-white hover:text-black flex items-center justify-center transition-all duration-200 shrink-0 cursor-pointer shadow-sm active:scale-95"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>

          {/* Product Pill Buttons */}
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar py-2 px-1">
            {PRODUCTS.map((prod, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={prod.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-tight transition-all duration-300 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? "bg-white text-black shadow-lg scale-105"
                      : "bg-white/[0.06] text-white/70 hover:bg-white/[0.12] hover:text-white border border-white/10"
                  }`}
                >
                  {prod.navName}
                </button>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next Product"
            className="w-10 h-10 rounded-full border border-white/20 bg-white/[0.06] hover:bg-white hover:text-black flex items-center justify-center transition-all duration-200 shrink-0 cursor-pointer shadow-sm active:scale-95"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3D Tilted Cards Carousel Stage */}
        <div className="relative flex items-center justify-center min-h-[560px] sm:min-h-[620px] max-w-6xl mx-auto overflow-hidden sm:overflow-visible">
          {/* Left Neighboring Card (Tilted Peeking) - Desktop */}
          <div
            onClick={handlePrev}
            className="hidden lg:block absolute left-4 xl:left-8 w-[380px] xl:w-[420px] rounded-[32px] p-8 transition-all duration-500 transform -rotate-[16deg] scale-[0.84] opacity-50 hover:opacity-80 hover:scale-[0.87] cursor-pointer shadow-2xl -z-10 select-none"
            style={{ backgroundColor: prevProduct.bgTint, color: "#0f172a" }}
          >
            <div className="flex items-center gap-3 mb-6">
              {prevProduct.logo}
              <div className="text-xl font-bold text-slate-900">{prevProduct.name}</div>
            </div>
            <p className="text-xs text-slate-600 line-clamp-3 mb-6 font-medium leading-relaxed">
              {prevProduct.description}
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-xl font-black text-slate-900">{prevProduct.metric1.value}</div>
                <div className="text-[11px] text-slate-500 font-medium">{prevProduct.metric1.label}</div>
              </div>
              <div>
                <div className="text-xl font-black text-slate-900">{prevProduct.metric2.value}</div>
                <div className="text-[11px] text-slate-500 font-medium">{prevProduct.metric2.label}</div>
              </div>
            </div>
          </div>

          {/* Active Center Card (Upright, Focused, Interactive) */}
          <div
            className="relative w-full max-w-[360px] sm:max-w-[480px] md:max-w-[560px] lg:max-w-[620px] rounded-[32px] p-6 sm:p-10 transition-all duration-500 shadow-[0_20px_60px_rgba(0,0,0,0.6)] z-20"
            style={{ backgroundColor: currentProduct.bgTint, color: "#0f172a" }}
          >
            {/* Top Logo & Title */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3.5">
                {currentProduct.logo}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {currentProduct.name}
                  </h3>
                  <div className="text-xs font-semibold text-slate-500 mt-0.5">
                    {currentProduct.category}
                  </div>
                </div>
              </div>
            </div>

            {/* Value Proposition Description */}
            <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed mb-8">
              {currentProduct.description}
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8 pt-6 border-t border-slate-200/80">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  {currentProduct.metric1.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
                  {currentProduct.metric1.label}
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  {currentProduct.metric2.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
                  {currentProduct.metric2.label}
                </div>
              </div>
            </div>

            {/* Realistic UI Device Mockup Viewport */}
            <div className="mt-4">{currentProduct.mockup}</div>
          </div>

          {/* Right Neighboring Card (Tilted Peeking) - Desktop */}
          <div
            onClick={handleNext}
            className="hidden lg:block absolute right-4 xl:right-8 w-[380px] xl:w-[420px] rounded-[32px] p-8 transition-all duration-500 transform rotate-[16deg] scale-[0.84] opacity-50 hover:opacity-80 hover:scale-[0.87] cursor-pointer shadow-2xl -z-10 select-none"
            style={{ backgroundColor: nextProduct.bgTint, color: "#0f172a" }}
          >
            <div className="flex items-center gap-3 mb-6">
              {nextProduct.logo}
              <div className="text-xl font-bold text-slate-900">{nextProduct.name}</div>
            </div>
            <p className="text-xs text-slate-600 line-clamp-3 mb-6 font-medium leading-relaxed">
              {nextProduct.description}
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-xl font-black text-slate-900">{nextProduct.metric1.value}</div>
                <div className="text-[11px] text-slate-500 font-medium">{nextProduct.metric1.label}</div>
              </div>
              <div>
                <div className="text-xl font-black text-slate-900">{nextProduct.metric2.value}</div>
                <div className="text-[11px] text-slate-500 font-medium">{nextProduct.metric2.label}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA to Discuss / Demo */}
        <div className="mt-14 sm:mt-16 text-center">
          <button
            type="button"
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black font-bold text-sm sm:text-base transition-all duration-300 hover:bg-slate-100 hover:scale-105 active:scale-95 shadow-xl cursor-pointer"
          >
            <span>Request Proprietary Product Demo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
