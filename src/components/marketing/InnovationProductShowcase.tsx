"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Activity,
  Shield,
  BookOpen,
  Boxes,
  Users,
  CheckCircle2,
  TrendingUp,
  Zap,
  Globe,
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
    name: "Patholab.Cloud",
    navName: "Patholab.Cloud",
    category: "Cloud Diagnostic LIMS Intelligence",
    bgTint: "#FFFDF5",
    logo: (
      <div className="w-12 h-12 rounded-2xl overflow-hidden shadow-sm border border-slate-200/90 bg-white p-1 flex items-center justify-center shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/products/patholab-cloud-logo.png"
          alt="Patholab.Cloud Logo"
          className="w-full h-full object-contain rounded-xl"
        />
      </div>
    ),
    description:
      "Engineered a cloud-native laboratory intelligence core handling high-throughput patient diagnostics, automated barcode routing, analyzer bidirectional sync, and instant WhatsApp report delivery.",
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
    id: "teamhub",
    name: "TeamHub",
    navName: "TeamHub",
    category: "Workforce & Sprint Orchestration Platform",
    bgTint: "#F4F8FD",
    logo: (
      <div className="w-12 h-12 rounded-2xl overflow-hidden shadow-sm border border-blue-200/90 bg-white p-1.5 flex items-center justify-center shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/products/teamhub-logo.png"
          alt="TeamHub Logo"
          className="w-full h-full object-contain"
        />
      </div>
    ),
    description:
      "Centralized workforce operations platform with GPS-fenced biometric attendance, automated developer velocity analytics, and integrated milestone payroll processing.",
    metric1: { value: "3.5X", label: "Sprint Velocity" },
    metric2: { value: "100%", label: "Milestone Transparency" },
    mockup: (
      <div className="w-full bg-[#080D1A] rounded-2xl p-4 sm:p-5 border border-white/10 text-white shadow-xl">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-xs font-bold tracking-wide">TeamHub Workforce OS</span>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 font-mono font-bold">
            GPS GEOFENCED
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06]">
            <div className="text-[10px] text-slate-400">Biometric Check-in</div>
            <div className="text-xs font-mono font-bold text-white mt-0.5">Bengaluru HQ #942</div>
          </div>
          <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06]">
            <div className="text-[10px] text-slate-400">Sprint 42 Status</div>
            <div className="text-xs font-mono font-bold text-blue-400 mt-0.5">24/26 Stories Done</div>
          </div>
        </div>
        <div className="p-3 rounded-xl bg-blue-950/40 border border-blue-500/20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-blue-400 shrink-0" />
            <span className="text-xs text-slate-200">Developer Sprint Velocity & Automated Payroll Synced</span>
          </div>
          <span className="text-[10px] font-mono text-blue-400">100% OK</span>
        </div>
      </div>
    ),
  },
  {
    id: "bungzo",
    name: "Bungzo",
    navName: "Bungzo",
    category: "Hyperlocal Quick-Commerce & Delivery Engine",
    bgTint: "#FFF5F5",
    logo: (
      <div className="w-12 h-12 rounded-2xl overflow-hidden shadow-sm border border-red-200/90 bg-white p-1.5 flex items-center justify-center shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/products/bungzo-logo.png"
          alt="Bungzo Logo"
          className="w-full h-full object-contain"
        />
      </div>
    ),
    description:
      "All-in-one hyperlocal quick-commerce engine with sub-20 minute order dispatch, intelligent rider routing, live geospatial tracking, and frictionless checkout.",
    metric1: { value: "18 Min", label: "Avg. Dispatch Routing" },
    metric2: { value: "99.4%", label: "Order Fulfillment" },
    mockup: (
      <div className="w-full bg-[#080D1A] rounded-2xl p-4 sm:p-5 border border-white/10 text-white shadow-xl">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400 animate-pulse" />
            <span className="text-xs font-bold tracking-wide">Bungzo Dispatch Core</span>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-500/20 text-red-300 font-mono font-bold">
            18-MIN DISPATCH
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06]">
            <div className="text-[10px] text-slate-400">Active Order</div>
            <div className="text-xs font-mono font-bold text-white mt-0.5">#BGZ-7810-EXP</div>
          </div>
          <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06]">
            <div className="text-[10px] text-slate-400">Rider Tracking</div>
            <div className="text-xs font-mono font-bold text-red-400 mt-0.5">En Route (1.4 km)</div>
          </div>
        </div>
        <div className="p-3 rounded-xl bg-red-950/40 border border-red-500/20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-red-400 shrink-0" />
            <span className="text-xs text-slate-200">Real-time Geo-Spatial Rider Routing Active</span>
          </div>
          <span className="text-[10px] font-mono text-red-400">Live</span>
        </div>
      </div>
    ),
  },
  {
    id: "globizlibrary",
    name: "GlobizLibrary",
    navName: "GlobizLibrary",
    category: "Academic RFID Repository Core",
    bgTint: "#FFF8F2",
    logo: (
      <div className="w-12 h-12 rounded-2xl overflow-hidden shadow-sm border border-orange-200/90 bg-white p-1.5 flex items-center justify-center shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/products/globizlibrary-logo.png"
          alt="GlobizLibrary Logo"
          className="w-full h-full object-contain"
        />
      </div>
    ),
    description:
      "Comprehensive digital academic library management system managing over 250,000 cataloged titles with RFID kiosk checkouts, digital archives, and unified OPAC discovery.",
    metric1: { value: "250K+", label: "Cataloged Titles" },
    metric2: { value: "94%", label: "Faster Book Checkouts" },
    mockup: (
      <div className="w-full bg-[#080D1A] rounded-2xl p-4 sm:p-5 border border-white/10 text-white shadow-xl">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-orange-400 animate-pulse" />
            <span className="text-xs font-bold tracking-wide">GlobizLibrary RFID Core</span>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-300 font-mono font-bold">
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
            <div className="text-xs font-mono font-bold text-orange-400 mt-0.5">Auto-Issued to Student</div>
          </div>
        </div>
        <div className="p-3 rounded-xl bg-orange-950/40 border border-orange-500/20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-orange-400 shrink-0" />
            <span className="text-xs text-slate-200">Overdue Auto-Notification & Fine Ledger Updated</span>
          </div>
          <span className="text-[10px] font-mono text-orange-400">Instant</span>
        </div>
      </div>
    ),
  },
  {
    id: "ims",
    name: "Enterprise IMS",
    navName: "Enterprise IMS",
    category: "Multi-Warehouse Inventory & Supply Chain OS",
    bgTint: "#F7F7FD",
    logo: (
      <div className="w-12 h-12 rounded-2xl overflow-hidden shadow-sm border border-indigo-300/80 bg-gradient-to-br from-indigo-500 to-blue-600 p-2 flex items-center justify-center text-white shrink-0">
        <Boxes className="w-7 h-7 text-white stroke-[2.2]" />
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

            {/* Direct Action Buttons - Horizontal Row (Pinterest Reference Styled) */}
            {currentProduct.id === "patholab" && (
              <div className="mt-6 pt-5 border-t border-slate-200/90 flex flex-wrap items-center gap-3">
                {/* 1. Visit Website Button */}
                <a
                  href="https://patholab.cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1163FB] text-white hover:bg-blue-600 font-bold text-xs sm:text-sm transition-all duration-200 shadow-md shadow-blue-500/20 active:scale-95 shrink-0"
                >
                  <Globe className="w-4 h-4" />
                  <span>Visit Website</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
                </a>

                {/* 2. Download on the App Store (Matching Pinterest Reference) */}
                <a
                  href="https://patholab.cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download Patholab on the Apple App Store"
                  className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 rounded-full bg-white hover:bg-slate-50 border border-slate-300 text-slate-900 transition-all duration-200 shadow-sm hover:shadow active:scale-95 group shrink-0"
                >
                  <svg className="w-5 h-5 fill-current text-slate-950 shrink-0" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.77 1.06-1.84.94-2.91-.91.04-2.02.61-2.67 1.38-.58.67-1.09 1.76-.95 2.81 1.02.08 2.05-.51 2.68-1.28z" />
                  </svg>
                  <div className="text-left leading-none">
                    <div className="text-[9px] font-medium text-slate-500 leading-none mb-0.5">Download on the</div>
                    <div className="text-xs sm:text-[13px] font-bold text-slate-950 tracking-tight leading-none">App Store</div>
                  </div>
                </a>

                {/* 3. GET IT ON Google Play (Matching Pinterest Reference) */}
                <a
                  href="https://patholab.cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Get Patholab on Google Play"
                  className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 rounded-full bg-white hover:bg-slate-50 border border-slate-300 text-slate-900 transition-all duration-200 shadow-sm hover:shadow active:scale-95 group shrink-0"
                >
                  <svg className="w-5 h-5 fill-current text-slate-950 shrink-0" viewBox="0 0 24 24">
                    <path d="M3.609 1.814L13.793 12 3.61 22.186A2.25 2.25 0 0 1 3 20.596V3.404c0-.623.23-1.19.609-1.59zm1.464-1.02a2.23 2.23 0 0 1 1.62-.05l12.43 7.086-4.252 4.252-9.798-11.288zm9.798 13.412l4.252 4.252-12.43 7.086a2.23 2.23 0 0 1-1.62-.05l9.798-11.288zm1.06-1.06l4.735-2.7a1.69 1.69 0 0 1 0 2.9l-4.735 2.7V13.146z" />
                  </svg>
                  <div className="text-left leading-none">
                    <div className="text-[8px] font-bold text-slate-500 uppercase tracking-wider leading-none mb-0.5">GET IT ON</div>
                    <div className="text-xs sm:text-[13px] font-bold text-slate-950 tracking-tight leading-none">Google Play</div>
                  </div>
                </a>
              </div>
            )}

            {/* Direct Action Buttons for Other Products */}
            {currentProduct.id !== "patholab" && (
              <div className="mt-6 pt-5 border-t border-slate-200/90 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm transition-all duration-200 shadow-md active:scale-95 cursor-pointer"
                >
                  <span>Request Proprietary Demo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                {currentProduct.id === "bungzo" && (
                  <a
                    href="https://bungzo.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white hover:bg-slate-50 border border-slate-300 text-slate-900 font-bold text-xs sm:text-sm transition-all duration-200 shadow-sm active:scale-95"
                  >
                    <Globe className="w-3.5 h-3.5 text-slate-600" />
                    <span>Visit Bungzo.com</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                  </a>
                )}
              </div>
            )}
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
            className="group relative inline-flex items-center gap-3 px-8 sm:px-9 py-3.5 sm:py-4 rounded-full bg-white text-black font-bold text-sm sm:text-base transition-all duration-300 hover:bg-slate-100 hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl cursor-pointer overflow-hidden"
          >
            <div className="relative h-5 sm:h-6 overflow-hidden flex flex-col justify-center">
              <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full whitespace-nowrap">
                Request Proprietary Product Demo
              </span>
              <span className="absolute top-full left-0 block transition-transform duration-300 ease-out group-hover:-translate-y-full whitespace-nowrap text-black font-bold">
                Request Proprietary Product Demo
              </span>
            </div>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
