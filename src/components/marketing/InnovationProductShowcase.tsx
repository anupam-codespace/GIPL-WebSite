"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Boxes,
  Globe,
  MoveHorizontal,
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
  imageSrc: string;
  imageAlt: string;
  badgeDotColor: string;
  badgeText: string;
  badgeCategory: string;
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
    imageSrc: "/images/products/patholab-showcase.jpg",
    imageAlt: "Patholab.Cloud Automated Diagnostic Laboratory Intelligence",
    badgeDotColor: "bg-emerald-400",
    badgeText: "Patholab Core Live • Bidirectional LIMS",
    badgeCategory: "DIAGNOSTICS CORE",
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
    imageSrc: "/images/products/teamhub-showcase.jpg",
    imageAlt: "TeamHub Agile Engineering Workforce Collaboration",
    badgeDotColor: "bg-blue-400",
    badgeText: "Sprint Velocity Active • Geofenced Ops",
    badgeCategory: "GPS GEOFENCED",
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
    imageSrc: "/images/products/bungzo-showcase.jpg",
    imageAlt: "Bungzo Sub-20 Minute Hyperlocal Delivery Dispatch",
    badgeDotColor: "bg-red-400",
    badgeText: "18-Min Dispatch Core • Live Geospatial Routing",
    badgeCategory: "18-MIN DISPATCH",
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
    imageSrc: "/images/products/globizlibrary-showcase.jpg",
    imageAlt: "GlobizLibrary Academic RFID Repository & OPAC Catalog",
    badgeDotColor: "bg-orange-400",
    badgeText: "RFID Auto-Issued • Overdue Auto-Ledger",
    badgeCategory: "OPAC DISCOVERY",
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
    imageSrc: "/images/products/ims-showcase.jpg",
    imageAlt: "Enterprise IMS Multi-Node Robotic Warehouse Fulfillment",
    badgeDotColor: "bg-indigo-400",
    badgeText: "Dynamic Traceability • ERP Integrated",
    badgeCategory: "ERP INTEGRATED",
  },
];

function getRelativeIndex(index: number, active: number, total: number): number {
  let diff = (index - active) % total;
  if (diff > total / 2) diff -= total;
  if (diff < -total / 2) diff += total;
  return diff;
}

export default function InnovationProductShowcase({
  onOpenConsultation,
}: InnovationProductShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [windowWidth, setWindowWidth] = useState(1200);

  const startXRef = useRef(0);
  const dragOffsetRef = useRef(0);
  const isDraggingRef = useRef(false);
  const hasMovedRef = useRef(false);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + PRODUCTS.length) % PRODUCTS.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % PRODUCTS.length);
  };

  const handleDragStart = (clientX: number) => {
    isDraggingRef.current = true;
    startXRef.current = clientX;
    dragOffsetRef.current = 0;
    hasMovedRef.current = false;
    setIsDragging(true);
  };

  const handleDragMove = (clientX: number) => {
    if (!isDraggingRef.current) return;
    const deltaX = clientX - startXRef.current;
    if (Math.abs(deltaX) > 6) {
      hasMovedRef.current = true;
    }
    dragOffsetRef.current = deltaX;
    setDragOffset(deltaX);
  };

  const handleDragEnd = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    setIsDragging(false);

    const threshold = 55;
    const currentOffset = dragOffsetRef.current;
    if (currentOffset < -threshold) {
      handleNext();
    } else if (currentOffset > threshold) {
      handlePrev();
    }
    dragOffsetRef.current = 0;
    setDragOffset(0);

    setTimeout(() => {
      hasMovedRef.current = false;
    }, 120);
  };

  useEffect(() => {
    if (!isDragging) return;

    const onMouseMove = (e: MouseEvent) => {
      handleDragMove(e.clientX);
    };
    const onMouseUp = () => {
      handleDragEnd();
    };
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        handleDragMove(e.touches[0].clientX);
      }
    };
    const onTouchEnd = () => {
      handleDragEnd();
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [isDragging, dragOffset]);

  const safeClick = (e: React.MouseEvent, callback?: () => void) => {
    if (hasMovedRef.current) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    callback?.();
  };

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

        {/* 3D Tilted Cards Carousel Stage with Full Drag/Swipe Gesture Engine */}
        <div
          className="relative flex items-center justify-center max-w-6xl mx-auto overflow-hidden select-none py-4"
          onMouseDown={(e) => {
            // Only start drag if left click
            if (e.button === 0) handleDragStart(e.clientX);
          }}
          onTouchStart={(e) => {
            if (e.touches.length > 0) handleDragStart(e.touches[0].clientX);
          }}
        >
          {/* Invisible layout spacer reserving precise vertical height without layout jumps */}
          <div
            className="w-full max-w-[360px] sm:max-w-[480px] md:max-w-[560px] lg:max-w-[620px] rounded-[32px] p-6 sm:p-10 opacity-0 pointer-events-none select-none invisible"
            aria-hidden="true"
          >
            <div className="flex items-center gap-3.5 mb-6">
              <div className="w-12 h-12" />
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold">Spacer Title</div>
                <div className="text-xs font-semibold">Spacer Subtitle</div>
              </div>
            </div>
            <p className="text-sm sm:text-base font-medium leading-relaxed mb-8">
              Invisible spacer paragraph for maintaining rock-solid stage height responsiveness across devices.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8 pt-6 border-t">
              <div className="h-12" />
              <div className="h-12" />
            </div>
            <div className="w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl" />
            <div className="mt-6 pt-5 flex items-center gap-3">
              <div className="h-10 w-32" />
              <div className="h-10 w-32" />
            </div>
          </div>

          {/* All 5 3D Stage Cards */}
          {PRODUCTS.map((prod, idx) => {
            const diff = getRelativeIndex(idx, activeIndex, PRODUCTS.length);
            const isMobile = windowWidth < 640;
            const isTablet = windowWidth >= 640 && windowWidth < 1024;
            const baseOffset = isMobile ? 320 : isTablet ? 410 : 490;
            const baseTilt = isMobile ? 8 : 14;

            const isActive = diff === 0;
            const isLeft = diff === -1;
            const isRight = diff === 1;
            const isVisible = Math.abs(diff) <= 1;

            let x = diff * baseOffset + dragOffset;
            let rotate = diff * baseTilt + dragOffset * 0.035;
            let scale = isActive ? 1 : 0.84;
            let opacity = isActive ? 1 : isVisible ? 0.55 : 0;
            let zIndex = isActive ? 30 : isVisible ? 20 : 10;

            if (isDragging) {
              const dragRatio = Math.max(-1, Math.min(1, dragOffset / baseOffset));
              if (isActive) {
                scale = 1 - Math.abs(dragRatio) * 0.06;
                opacity = 1 - Math.abs(dragRatio) * 0.15;
              } else if (isRight && dragOffset < 0) {
                // User dragging left, bringing next card into view
                scale = 0.84 + Math.abs(dragRatio) * 0.16;
                rotate = baseTilt - Math.abs(dragRatio) * baseTilt;
                opacity = 0.55 + Math.abs(dragRatio) * 0.45;
              } else if (isLeft && dragOffset > 0) {
                // User dragging right, bringing prev card into view
                scale = 0.84 + Math.abs(dragRatio) * 0.16;
                rotate = -baseTilt + Math.abs(dragRatio) * baseTilt;
                opacity = 0.55 + Math.abs(dragRatio) * 0.45;
              }
            }

            const transform = `translateX(calc(-50% + ${x}px)) rotate(${rotate}deg) scale(${scale})`;
            const transition = isDragging
              ? "none"
              : "transform 550ms cubic-bezier(0.2, 0.9, 0.3, 1), opacity 500ms ease, box-shadow 500ms ease";

            return (
              <div
                key={prod.id}
                onClick={(e) => {
                  if (hasMovedRef.current) return;
                  if (isLeft) handlePrev();
                  if (isRight) handleNext();
                }}
                className={`absolute top-0 left-1/2 w-full max-w-[360px] sm:max-w-[480px] md:max-w-[560px] lg:max-w-[620px] rounded-[32px] p-6 sm:p-10 select-none shadow-[0_20px_60px_rgba(0,0,0,0.6)] ${
                  isActive
                    ? "cursor-grab active:cursor-grabbing"
                    : isVisible
                    ? "cursor-pointer hover:opacity-80"
                    : "pointer-events-none"
                }`}
                style={{
                  backgroundColor: prod.bgTint,
                  color: "#0f172a",
                  transform,
                  transition,
                  opacity,
                  zIndex,
                }}
              >
                {/* Top Logo & Title */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3.5">
                    {prod.logo}
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                        {prod.name}
                      </h3>
                      <div className="text-xs font-semibold text-slate-500 mt-0.5">
                        {prod.category}
                      </div>
                    </div>
                  </div>

                  {/* Drag Indicator Badge on Active Card */}
                  {isActive && (
                    <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/5 text-slate-500 text-[11px] font-semibold border border-slate-900/5">
                      <MoveHorizontal className="w-3.5 h-3.5 text-slate-400" />
                      <span>Drag or swipe</span>
                    </div>
                  )}
                </div>

                {/* Value Proposition Description */}
                <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed mb-8">
                  {prod.description}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-6 mb-8 pt-6 border-t border-slate-200/80">
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                      {prod.metric1.value}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
                      {prod.metric1.label}
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                      {prod.metric2.value}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
                      {prod.metric2.label}
                    </div>
                  </div>
                </div>

                {/* High-End Photographic Product Showcase Box */}
                <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden border border-black/10 shadow-lg group bg-slate-950">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={prod.imageSrc}
                    alt={prod.imageAlt}
                    draggable={false}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 select-none pointer-events-none"
                  />
                  {/* Cinematic gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/25 pointer-events-none" />

                  {/* Top-right category pill */}
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] sm:text-[11px] font-mono font-bold text-white border border-white/20 shadow-sm pointer-events-none">
                    {prod.badgeCategory}
                  </div>

                  {/* Bottom live telemetry pill */}
                  <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center gap-2 text-white pointer-events-none">
                    <div className={`w-2 h-2 rounded-full ${prod.badgeDotColor} animate-pulse`} />
                    <span className="text-[11px] sm:text-xs font-semibold tracking-wide">
                      {prod.badgeText}
                    </span>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div
                  className={`mt-6 pt-5 border-t border-slate-200/90 flex flex-wrap items-center gap-3 ${
                    !isActive ? "pointer-events-none" : ""
                  }`}
                >
                  {prod.id === "patholab" ? (
                    <>
                      {/* 1. Visit Website Button */}
                      <a
                        href="https://patholab.cloud"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => safeClick(e)}
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
                        onClick={(e) => safeClick(e)}
                        className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 rounded-full bg-white hover:bg-slate-50 border border-slate-300 text-slate-900 transition-all duration-200 shadow-sm hover:shadow active:scale-95 group shrink-0"
                      >
                        <svg
                          className="w-5 h-5 fill-current text-slate-950 shrink-0"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.77 1.06-1.84.94-2.91-.91.04-2.02.61-2.67 1.38-.58.67-1.09 1.76-.95 2.81 1.02.08 2.05-.51 2.68-1.28z" />
                        </svg>
                        <div className="text-left leading-none">
                          <div className="text-[9px] font-medium text-slate-500 leading-none mb-0.5">
                            Download on the
                          </div>
                          <div className="text-xs sm:text-[13px] font-bold text-slate-950 tracking-tight leading-none">
                            App Store
                          </div>
                        </div>
                      </a>

                      {/* 3. GET IT ON Google Play (Matching Pinterest Reference) */}
                      <a
                        href="https://patholab.cloud"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Get Patholab on Google Play"
                        onClick={(e) => safeClick(e)}
                        className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 rounded-full bg-white hover:bg-slate-50 border border-slate-300 text-slate-900 transition-all duration-200 shadow-sm hover:shadow active:scale-95 group shrink-0"
                      >
                        <svg
                          className="w-5 h-5 fill-current text-slate-950 shrink-0"
                          viewBox="0 0 24 24"
                        >
                          <path d="M3.609 1.814L13.793 12 3.61 22.186A2.25 2.25 0 0 1 3 20.596V3.404c0-.623.23-1.19.609-1.59zm1.464-1.02a2.23 2.23 0 0 1 1.62-.05l12.43 7.086-4.252 4.252-9.798-11.288zm9.798 13.412l4.252 4.252-12.43 7.086a2.23 2.23 0 0 1-1.62-.05l9.798-11.288zm1.06-1.06l4.735-2.7a1.69 1.69 0 0 1 0 2.9l-4.735 2.7V13.146z" />
                        </svg>
                        <div className="text-left leading-none">
                          <div className="text-[8px] font-bold text-slate-500 uppercase tracking-wider leading-none mb-0.5">
                            GET IT ON
                          </div>
                          <div className="text-xs sm:text-[13px] font-bold text-slate-950 tracking-tight leading-none">
                            Google Play
                          </div>
                        </div>
                      </a>
                    </>
                  ) : (
                    <>
                      <button
                        type="button"
                        onClick={(e) => safeClick(e, onOpenConsultation)}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm transition-all duration-200 shadow-md active:scale-95 cursor-pointer"
                      >
                        <span>Request Proprietary Demo</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                      {prod.id === "bungzo" && (
                        <a
                          href="https://bungzo.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => safeClick(e)}
                          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white hover:bg-slate-50 border border-slate-300 text-slate-900 font-bold text-xs sm:text-sm transition-all duration-200 shadow-sm active:scale-95"
                        >
                          <Globe className="w-3.5 h-3.5 text-slate-600" />
                          <span>Visit Bungzo.com</span>
                          <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                        </a>
                      )}
                    </>
                  )}
                </div>
              </div>
            );
          })}
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
