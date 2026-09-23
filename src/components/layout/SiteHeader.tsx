"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronDown,
  ArrowRight,
  Menu,
  X,
  Sparkles,
  ExternalLink,
  Bot,
  Cloud,
  Cpu,
  Shield,
  Layers,
  Database,
  Smartphone,
  Globe,
  Building,
  HeartPulse,
  DollarSign,
  ShoppingCart,
  Truck,
  GraduationCap,
  Factory,
  Zap,
  Home,
  Film,
  Sprout,
  Users,
  Award,
  BookOpen,
  Briefcase,
  HelpCircle,
  PhoneCall,
  Calendar,
  Watch,
  Activity,
  LayoutGrid,
  UtensilsCrossed,
  HardHat,
  Landmark,
  Car,
  CircleDollarSign,
  Music,
  CalendarDays,
  Tv,
  ShoppingBag,
  Boxes,
  Plane,
  Building2,
  Newspaper,
  ThumbsUp,
  PlaneTakeoff,
  HeartHandshake,
  Tag,
  Radio,
  Smile,
  ShieldCheck
} from "lucide-react";
import GlobizhubLogo from "@/components/ui/GlobizhubLogo";

interface SiteHeaderProps {
  onOpenSearch?: () => void;
  onOpenConsultation?: () => void;
}

type MegaMenuKey = "about" | "products" | "services" | "industries" | "resources" | null;

export default function SiteHeader({ onOpenSearch, onOpenConsultation }: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<MegaMenuKey>(null);
  const [activeResourceTab, setActiveResourceTab] = useState<"blogs" | "guides">("blogs");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const menuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (key: MegaMenuKey) => {
    if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
    setActiveMenu(key);
  };

  const handleMouseLeave = () => {
    menuTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 180);
  };

  return (
    <header
      className="fixed top-3 sm:top-5 left-0 right-0 z-50 px-3 sm:px-6 transition-all duration-300 font-['Plus_Jakarta_Sans',sans-serif] box-border max-w-full"
      onMouseLeave={handleMouseLeave}
    >
      {/* Floating Pill Container */}
      <div
        className={`max-w-[1140px] mx-auto rounded-full transition-all duration-300 px-4 sm:px-7 py-2.5 sm:py-3 flex items-center justify-between relative box-border ${
          scrolled
            ? "bg-white/98 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.09)] border border-slate-100"
            : "bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-slate-100/90"
        }`}
      >
        {/* Brand Logo at Left */}
        <Link href="/" className="flex items-center gap-2.5 group shrink-0">
          <GlobizhubLogo className="w-7 h-7 sm:w-8 sm:h-8 group-hover:scale-105 transition-transform shrink-0" />
          <span className="text-[15px] sm:text-[18px] font-bold tracking-tight text-slate-950">
            Globizhub
          </span>
        </Link>

        {/* Center Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-[14px] font-medium text-slate-700">
          <Link href="/#hero" className="hover:text-slate-950 transition-colors">
            Home
          </Link>

          {/* About Dropdown */}
          <div
            className="relative py-1 cursor-pointer group"
            onMouseEnter={() => handleMouseEnter("about")}
            onClick={() => setActiveMenu(activeMenu === "about" ? null : "about")}
          >
            <div
              className={`flex items-center gap-1 transition-colors ${
                activeMenu === "about" ? "text-[#1163fb] font-semibold" : "hover:text-slate-950"
              }`}
            >
              <span>About</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeMenu === "about" ? "rotate-180 text-[#1163fb]" : "text-slate-400 group-hover:text-slate-800"
                }`}
              />
            </div>
          </div>

          {/* Products Dropdown */}
          <div
            className="relative py-1 cursor-pointer group"
            onMouseEnter={() => handleMouseEnter("products")}
            onClick={() => setActiveMenu(activeMenu === "products" ? null : "products")}
          >
            <div
              className={`flex items-center gap-1 transition-colors ${
                activeMenu === "products" ? "text-[#1163fb] font-semibold" : "hover:text-slate-950"
              }`}
            >
              <span>Products</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeMenu === "products" ? "rotate-180 text-[#1163fb]" : "text-slate-400 group-hover:text-slate-800"
                }`}
              />
            </div>
          </div>

          {/* Services Dropdown */}
          <div
            className="relative py-1 cursor-pointer group"
            onMouseEnter={() => handleMouseEnter("services")}
            onClick={() => setActiveMenu(activeMenu === "services" ? null : "services")}
          >
            <div
              className={`flex items-center gap-1 transition-colors ${
                activeMenu === "services" ? "text-[#1163fb] font-semibold" : "hover:text-slate-950"
              }`}
            >
              <span>Services</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeMenu === "services" ? "rotate-180 text-[#1163fb]" : "text-slate-400 group-hover:text-slate-800"
                }`}
              />
            </div>
          </div>

          {/* Industries Dropdown */}
          <div
            className="relative py-1 cursor-pointer group"
            onMouseEnter={() => handleMouseEnter("industries")}
            onClick={() => setActiveMenu(activeMenu === "industries" ? null : "industries")}
          >
            <div
              className={`flex items-center gap-1 transition-colors ${
                activeMenu === "industries" ? "text-[#1163fb] font-semibold" : "hover:text-slate-950"
              }`}
            >
              <span>Industries</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeMenu === "industries" ? "rotate-180 text-[#1163fb]" : "text-slate-400 group-hover:text-slate-800"
                }`}
              />
            </div>
          </div>

          {/* Resources Dropdown */}
          <div
            className="relative py-1 cursor-pointer group"
            onMouseEnter={() => handleMouseEnter("resources")}
            onClick={() => setActiveMenu(activeMenu === "resources" ? null : "resources")}
          >
            <div
              className={`flex items-center gap-1 transition-colors ${
                activeMenu === "resources" ? "text-[#1163fb] font-semibold" : "hover:text-slate-950"
              }`}
            >
              <span>Resources</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeMenu === "resources" ? "rotate-180 text-[#1163fb]" : "text-slate-400 group-hover:text-slate-800"
                }`}
              />
            </div>
          </div>
        </nav>

        {/* Right Section: Appinventiv Blue Pill "Contact Us" Button & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={onOpenConsultation}
            className="rounded-full bg-[#1163fb] hover:bg-[#0c51d6] text-white font-semibold text-[13px] sm:text-[14px] px-4 sm:px-6 py-2 sm:py-2.5 transition-all duration-200 cursor-pointer shrink-0 active:scale-[0.98] flex items-center gap-2"
          >
            <PhoneCall className="w-3.5 h-3.5 shrink-0" />
            <span>Contact Us</span>
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors shrink-0"
            aria-label="Toggle Navigation"
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

        {/* ======================================================== */}
        {/* MEGA-MENU 1: ABOUT (Appinventiv Benchmark)                */}
        {/* ======================================================== */}
        {activeMenu === "about" && (
          <div
            className="absolute top-full mt-3 left-1/2 -translate-x-1/2 w-[780px] max-w-[95vw] bg-white rounded-3xl border border-slate-200 shadow-2xl p-7 grid grid-cols-12 gap-8 items-start animate-in fade-in slide-in-from-top-2 duration-200 z-50"
            onMouseEnter={() => handleMouseEnter("about")}
            onMouseLeave={handleMouseLeave}
          >
            {/* Column 1: Core Navigation Links */}
            <div className="col-span-7 pr-4 border-r border-slate-100">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                Corporate &amp; Leadership
              </h3>
              <div className="grid grid-cols-2 gap-y-2 gap-x-3 text-[13.5px]">
                <Link
                  href="/about"
                  onClick={() => setActiveMenu(null)}
                  className="flex items-center justify-between p-2.5 rounded-xl text-slate-800 hover:bg-[#ecf3ff] hover:text-[#1163fb] transition-all group font-medium"
                >
                  <div className="flex items-center gap-2.5">
                    <Building2 className="w-4 h-4 text-[#1163fb]" />
                    <span>About Globizhub</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#1163fb] group-hover:translate-x-0.5 transition-all" />
                </Link>
                <Link
                  href="/#process"
                  onClick={() => setActiveMenu(null)}
                  className="flex items-center justify-between p-2.5 rounded-xl text-slate-800 hover:bg-[#ecf3ff] hover:text-[#1163fb] transition-all group font-medium"
                >
                  <div className="flex items-center gap-2.5">
                    <Users className="w-4 h-4 text-[#1163fb]" />
                    <span>Leadership Team</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#1163fb] group-hover:translate-x-0.5 transition-all" />
                </Link>
                <Link
                  href="/#process"
                  onClick={() => setActiveMenu(null)}
                  className="flex items-center justify-between p-2.5 rounded-xl text-slate-800 hover:bg-[#ecf3ff] hover:text-[#1163fb] transition-all group font-medium"
                >
                  <div className="flex items-center gap-2.5">
                    <Layers className="w-4 h-4 text-[#1163fb]" />
                    <span>How We Work</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#1163fb] group-hover:translate-x-0.5 transition-all" />
                </Link>
                <Link
                  href="/#case-studies"
                  onClick={() => setActiveMenu(null)}
                  className="flex items-center justify-between p-2.5 rounded-xl text-slate-800 hover:bg-[#ecf3ff] hover:text-[#1163fb] transition-all group font-medium"
                >
                  <div className="flex items-center gap-2.5">
                    <Briefcase className="w-4 h-4 text-[#1163fb]" />
                    <span>Client Portfolio</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#1163fb] group-hover:translate-x-0.5 transition-all" />
                </Link>
                <Link
                  href="/#process"
                  onClick={() => setActiveMenu(null)}
                  className="flex items-center justify-between p-2.5 rounded-xl text-slate-800 hover:bg-[#ecf3ff] hover:text-[#1163fb] transition-all group font-medium"
                >
                  <div className="flex items-center gap-2.5">
                    <Smile className="w-4 h-4 text-[#1163fb]" />
                    <span>Careers &amp; Culture</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#1163fb] group-hover:translate-x-0.5 transition-all" />
                </Link>
                <Link
                  href="/#process"
                  onClick={() => setActiveMenu(null)}
                  className="flex items-center justify-between p-2.5 rounded-xl text-slate-800 hover:bg-[#ecf3ff] hover:text-[#1163fb] transition-all group font-medium"
                >
                  <div className="flex items-center gap-2.5">
                    <HeartHandshake className="w-4 h-4 text-[#1163fb]" />
                    <span>CSR &amp; Foundation</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#1163fb] group-hover:translate-x-0.5 transition-all" />
                </Link>
                <Link
                  href="/#faq"
                  onClick={() => setActiveMenu(null)}
                  className="flex items-center justify-between p-2.5 rounded-xl text-slate-800 hover:bg-[#ecf3ff] hover:text-[#1163fb] transition-all group font-medium"
                >
                  <div className="flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-[#1163fb]" />
                    <span>Enterprise FAQs</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#1163fb] group-hover:translate-x-0.5 transition-all" />
                </Link>
                <Link
                  href="/terms"
                  onClick={() => setActiveMenu(null)}
                  className="flex items-center justify-between p-2.5 rounded-xl text-slate-800 hover:bg-[#ecf3ff] hover:text-[#1163fb] transition-all group font-medium"
                >
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#1163fb]" />
                    <span>Terms &amp; Governance</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#1163fb] group-hover:translate-x-0.5 transition-all" />
                </Link>
              </div>
            </div>

            {/* Column 2: Featured Insight Card */}
            <div className="col-span-5">
              <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-[#0A1226] text-white shadow-xl relative overflow-hidden flex flex-col justify-between h-full">
                <div>
                  <span className="inline-block px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-300 text-[10px] font-bold uppercase tracking-wider mb-3">
                    Company Spotlight
                  </span>
                  <h4 className="text-base font-bold leading-snug mb-2 text-white">
                    Engineering Scalable Digital Transformation
                  </h4>
                  <p className="text-xs text-slate-300 font-normal leading-relaxed mb-4">
                    Founded in 2018, Globizhub delivers enterprise software, cloud-native architectures, and sovereign AI solutions across 4 prime technology hubs in India.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setActiveMenu(null);
                    onOpenConsultation?.();
                  }}
                  className="w-full py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-colors text-center"
                >
                  Consult Our Team →
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* MEGA-MENU 2: PRODUCTS (Globizhub Proprietary Platforms)   */}
        {/* ======================================================== */}
        {activeMenu === "products" && (
          <div
            className="absolute top-full mt-3 left-1/2 -translate-x-1/2 w-[1040px] max-w-[96vw] bg-white rounded-3xl border border-slate-200 shadow-2xl p-7 animate-in fade-in slide-in-from-top-2 duration-200 z-50"
            onMouseEnter={() => handleMouseEnter("products")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Proprietary Enterprise Platforms
                </h3>
                <p className="text-xs text-slate-500">
                  Production-grade SaaS &amp; intelligence platforms built and deployed by Globizhub.
                </p>
              </div>
              <Link
                href="/#products-showcase"
                onClick={() => setActiveMenu(null)}
                className="text-xs font-bold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1"
              >
                <span>View 3D Showcase</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {/* Product 1: Patholab.Cloud */}
              <Link
                href="/#products-showcase"
                onClick={() => setActiveMenu(null)}
                className="p-3.5 rounded-2xl bg-slate-50 hover:bg-blue-50/60 border border-slate-200/80 hover:border-blue-300 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="w-8 h-8 rounded-lg overflow-hidden bg-white border border-slate-200 p-0.5 flex items-center justify-center shrink-0 shadow-xs">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/images/products/patholab-cloud-logo.png"
                        alt="Patholab.Cloud"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="px-2 py-0.5 text-[9px] font-bold bg-emerald-100 text-emerald-700 rounded-full">
                      Diagnostic LIMS
                    </span>
                  </div>
                  <div className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    Patholab.Cloud
                  </div>
                  <p className="text-xs text-slate-500 line-clamp-2 mt-1">
                    Cloud diagnostic intelligence with bidirectional analyzer sync &amp; WhatsApp reports.
                  </p>
                </div>
              </Link>

              {/* Product 2: TeamHub */}
              <Link
                href="/#products-showcase"
                onClick={() => setActiveMenu(null)}
                className="p-3.5 rounded-2xl bg-slate-50 hover:bg-blue-50/60 border border-slate-200/80 hover:border-blue-300 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="w-8 h-8 rounded-lg overflow-hidden bg-white border border-blue-200 p-0.5 flex items-center justify-center shrink-0 shadow-xs">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/images/products/teamhub-logo.png"
                        alt="TeamHub"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="px-2 py-0.5 text-[9px] font-bold bg-blue-100 text-blue-700 rounded-full">
                      Workforce OS
                    </span>
                  </div>
                  <div className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    TeamHub
                  </div>
                  <p className="text-xs text-slate-500 line-clamp-2 mt-1">
                    GPS-fenced biometric attendance, sprint tracking, and automated milestone payroll.
                  </p>
                </div>
              </Link>

              {/* Product 3: Bungzo */}
              <Link
                href="/#products-showcase"
                onClick={() => setActiveMenu(null)}
                className="p-3.5 rounded-2xl bg-slate-50 hover:bg-blue-50/60 border border-slate-200/80 hover:border-blue-300 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="w-8 h-8 rounded-lg overflow-hidden bg-white border border-red-200 p-0.5 flex items-center justify-center shrink-0 shadow-xs">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/images/products/bungzo-logo.png"
                        alt="Bungzo"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="px-2 py-0.5 text-[9px] font-bold bg-red-100 text-red-700 rounded-full">
                      Quick-Commerce
                    </span>
                  </div>
                  <div className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    Bungzo
                  </div>
                  <p className="text-xs text-slate-500 line-clamp-2 mt-1">
                    Hyperlocal dispatch engine with sub-20 min routing &amp; live geospatial tracking.
                  </p>
                </div>
              </Link>

              {/* Product 4: GlobizLibrary */}
              <Link
                href="/#products-showcase"
                onClick={() => setActiveMenu(null)}
                className="p-3.5 rounded-2xl bg-slate-50 hover:bg-blue-50/60 border border-slate-200/80 hover:border-blue-300 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="w-8 h-8 rounded-lg overflow-hidden bg-white border border-orange-200 p-0.5 flex items-center justify-center shrink-0 shadow-xs">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/images/products/globizlibrary-logo.png"
                        alt="GlobizLibrary"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="px-2 py-0.5 text-[9px] font-bold bg-orange-100 text-orange-700 rounded-full">
                      Academic RFID
                    </span>
                  </div>
                  <div className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    GlobizLibrary
                  </div>
                  <p className="text-xs text-slate-500 line-clamp-2 mt-1">
                    Digital academic repository managing 250,000+ titles with RFID kiosk checkouts.
                  </p>
                </div>
              </Link>

              {/* Product 5: Enterprise IMS */}
              <Link
                href="/#products-showcase"
                onClick={() => setActiveMenu(null)}
                className="p-3.5 rounded-2xl bg-slate-50 hover:bg-blue-50/60 border border-slate-200/80 hover:border-blue-300 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-600 border border-indigo-400 p-1 flex items-center justify-center text-white shrink-0 shadow-xs">
                      <Boxes className="w-4 h-4 text-white" />
                    </div>
                    <span className="px-2 py-0.5 text-[9px] font-bold bg-indigo-100 text-indigo-700 rounded-full">
                      Supply Chain
                    </span>
                  </div>
                  <div className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    Enterprise IMS
                  </div>
                  <p className="text-xs text-slate-500 line-clamp-2 mt-1">
                    Multi-warehouse inventory OS with automated reorder triggers and SKU auditing.
                  </p>
                </div>
              </Link>

              {/* Product 6: Listing */}
              <Link
                href="/#products-showcase"
                onClick={() => setActiveMenu(null)}
                className="p-3.5 rounded-2xl bg-slate-50 hover:bg-blue-50/60 border border-slate-200/80 hover:border-blue-300 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="w-8 h-8 rounded-lg overflow-hidden bg-slate-950 border border-slate-800 p-1 flex items-center justify-center shrink-0 shadow-xs">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/images/products/listing-logo-transparent.png"
                        alt="Globizhub Listing"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="px-2 py-0.5 text-[9px] font-bold bg-amber-100 text-amber-800 rounded-full">
                      B2B Trade
                    </span>
                  </div>
                  <div className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    Listing
                  </div>
                  <p className="text-xs text-slate-500 line-clamp-2 mt-1">
                    Global B2B trade marketplace &amp; supplier directory connecting verified businesses.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* MEGA-MENU 3: SERVICES (Appinventiv 3-Column Benchmark)    */}
        {/* ======================================================== */}
        {activeMenu === "services" && (
          <div
            className="absolute top-full mt-3 left-1/2 -translate-x-1/2 w-[980px] max-w-[95vw] bg-white rounded-3xl border border-slate-200 shadow-2xl p-7 animate-in fade-in slide-in-from-top-2 duration-200 z-50"
            onMouseEnter={() => handleMouseEnter("services")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="grid grid-cols-3 gap-8 pb-6 border-b border-slate-100">
              {/* Column 1: Product Development & Engineering */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-7 h-7 rounded-lg bg-blue-500/15 text-blue-600 flex items-center justify-center">
                    <Layers className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Product &amp; Engineering
                  </h4>
                </div>
                <ul className="space-y-2 text-[13px] text-slate-600">
                  <li>
                    <Link href="/#services" onClick={() => setActiveMenu(null)} className="block p-1.5 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      Product Design &amp; UI/UX
                    </Link>
                  </li>
                  <li>
                    <Link href="/#services" onClick={() => setActiveMenu(null)} className="block p-1.5 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      Web Application Development (Next.js)
                    </Link>
                  </li>
                  <li>
                    <Link href="/#services" onClick={() => setActiveMenu(null)} className="block p-1.5 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      Mobile Apps (iOS &amp; Android)
                    </Link>
                  </li>
                  <li>
                    <Link href="/#services" onClick={() => setActiveMenu(null)} className="block p-1.5 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      Enterprise Software &amp; ERP
                    </Link>
                  </li>
                  <li>
                    <Link href="/#services" onClick={() => setActiveMenu(null)} className="block p-1.5 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      Quality Assurance &amp; Testing
                    </Link>
                  </li>
                  <li>
                    <Link href="/#services" onClick={() => setActiveMenu(null)} className="block p-1.5 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      DevOps &amp; SRE Infrastructure
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 2: Digital Transformation & AI */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-7 h-7 rounded-lg bg-indigo-500/15 text-indigo-600 flex items-center justify-center">
                    <Bot className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Digital Transformation &amp; AI
                  </h4>
                </div>
                <ul className="space-y-2 text-[13px] text-slate-600">
                  <li>
                    <Link href="/#services" onClick={() => setActiveMenu(null)} className="block p-1.5 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      Autonomous AI Agents &amp; LangGraph
                    </Link>
                  </li>
                  <li>
                    <Link href="/#services" onClick={() => setActiveMenu(null)} className="block p-1.5 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      Generative AI &amp; Enterprise LLMs
                    </Link>
                  </li>
                  <li>
                    <Link href="/#services" onClick={() => setActiveMenu(null)} className="block p-1.5 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      Legacy Application Modernization
                    </Link>
                  </li>
                  <li>
                    <Link href="/#services" onClick={() => setActiveMenu(null)} className="block p-1.5 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      Cloud Architecture &amp; Migration
                    </Link>
                  </li>
                  <li>
                    <Link href="/#services" onClick={() => setActiveMenu(null)} className="block p-1.5 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      Cybersecurity &amp; Zero Trust
                    </Link>
                  </li>
                  <li>
                    <Link href="/#services" onClick={() => setActiveMenu(null)} className="block p-1.5 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      IoT &amp; Connected Devices
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 3: Consulting & Data Services */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-7 h-7 rounded-lg bg-purple-500/15 text-purple-600 flex items-center justify-center">
                    <Database className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Consulting &amp; Data
                  </h4>
                </div>
                <ul className="space-y-2 text-[13px] text-slate-600">
                  <li>
                    <Link href="/#services" onClick={() => setActiveMenu(null)} className="block p-1.5 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      Strategic Technology Consulting
                    </Link>
                  </li>
                  <li>
                    <Link href="/#services" onClick={() => setActiveMenu(null)} className="block p-1.5 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      Big Data Engineering &amp; ETL
                    </Link>
                  </li>
                  <li>
                    <Link href="/#services" onClick={() => setActiveMenu(null)} className="block p-1.5 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      Business Intelligence &amp; Analytics
                    </Link>
                  </li>
                  <li>
                    <Link href="/#services" onClick={() => setActiveMenu(null)} className="block p-1.5 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      Dedicated Engineering Squads
                    </Link>
                  </li>
                  <li>
                    <Link href="/#services" onClick={() => setActiveMenu(null)} className="block p-1.5 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      Cloud Cost Optimization (FinOps)
                    </Link>
                  </li>
                  <li>
                    <Link href="/#services" onClick={() => setActiveMenu(null)} className="block p-1.5 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      IT Audit &amp; System Architecture
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Consultation CTA Bar (Exact Appinventiv Style) */}
            <div className="p-4 rounded-2xl bg-[#fff6db] border border-amber-200/50 flex items-center justify-between gap-4 mt-6">
              <span className="text-[13.5px] font-bold text-[#0f0f0f]">
                Didn&apos;t find what you&apos;re looking for? Let us know your technical requirements.
              </span>
              <button
                onClick={() => {
                  setActiveMenu(null);
                  onOpenConsultation?.();
                }}
                className="px-5 py-2.5 rounded-xl bg-[#1163fb] hover:bg-[#0c51d6] text-white text-xs font-bold transition-all shrink-0 active:scale-95"
              >
                Schedule Free Consultations
              </button>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* MEGA-MENU 4: INDUSTRIES (Appinventiv Exact Benchmark)    */}
        {/* ======================================================== */}
        {activeMenu === "industries" && (
          <div
            className="absolute top-full mt-3 left-1/2 -translate-x-1/2 w-[1020px] max-w-[96vw] bg-white rounded-3xl border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.2)] p-7 pb-5 animate-in fade-in slide-in-from-top-2 duration-200 z-50"
            onMouseEnter={() => handleMouseEnter("industries")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="grid grid-cols-3 gap-x-8 gap-y-1 mb-6">
              {/* Column 1 */}
              <div className="space-y-0.5">
                {[
                  { name: "Healthcare", icon: <HeartPulse className="w-4 h-4 text-[#1163fb]" />, hasPlus: true },
                  { name: "Wearables", icon: <Watch className="w-4 h-4 text-[#1163fb]" /> },
                  { name: "Fitness", icon: <Activity className="w-4 h-4 text-[#1163fb]" /> },
                  { name: "On-Demand", icon: <LayoutGrid className="w-4 h-4 text-[#1163fb]" /> },
                  { name: "Restaurant", icon: <UtensilsCrossed className="w-4 h-4 text-[#1163fb]" /> },
                  { name: "Construction", icon: <HardHat className="w-4 h-4 text-[#1163fb]" /> },
                  { name: "Politics", icon: <Landmark className="w-4 h-4 text-[#1163fb]" /> },
                  { name: "Automotive", icon: <Car className="w-4 h-4 text-[#1163fb]" />, hasPlus: true },
                  { name: "Logistics", icon: <Truck className="w-4 h-4 text-[#1163fb]" /> },
                ].map((item, idx) => (
                  <Link
                    key={idx}
                    href="/industries"
                    onClick={() => setActiveMenu(null)}
                    className="flex items-center justify-between px-3.5 py-2 rounded-xl hover:bg-[#ecf3ff] transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="shrink-0">{item.icon}</span>
                      <span className="text-[14.5px] font-medium text-[#0f0f0f] group-hover:text-[#1163fb] transition-colors">
                        {item.name}
                      </span>
                    </div>
                    {item.hasPlus && (
                      <span className="text-slate-400 group-hover:text-[#1163fb] text-base font-light">
                        +
                      </span>
                    )}
                  </Link>
                ))}
              </div>

              {/* Column 2 */}
              <div className="space-y-0.5">
                {[
                  { name: "Finance", icon: <CircleDollarSign className="w-4 h-4 text-[#1163fb]" />, hasPlus: true },
                  { name: "Entertainment", icon: <Music className="w-4 h-4 text-[#1163fb]" /> },
                  { name: "Education", icon: <GraduationCap className="w-4 h-4 text-[#1163fb]" /> },
                  { name: "Events", icon: <CalendarDays className="w-4 h-4 text-[#1163fb]" /> },
                  { name: "Manufacturing", icon: <Factory className="w-4 h-4 text-[#1163fb]" /> },
                  { name: "Energy", icon: <Zap className="w-4 h-4 text-[#1163fb]" />, hasPlus: true },
                  { name: "OTT", icon: <Tv className="w-4 h-4 text-[#1163fb]" /> },
                  { name: "Food Delivery", icon: <ShoppingBag className="w-4 h-4 text-[#1163fb]" /> },
                  { name: "Supply Chain", icon: <Boxes className="w-4 h-4 text-[#1163fb]" /> },
                ].map((item, idx) => (
                  <Link
                    key={idx}
                    href="/industries"
                    onClick={() => setActiveMenu(null)}
                    className="flex items-center justify-between px-3.5 py-2 rounded-xl hover:bg-[#ecf3ff] transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="shrink-0">{item.icon}</span>
                      <span className="text-[14.5px] font-medium text-[#0f0f0f] group-hover:text-[#1163fb] transition-colors">
                        {item.name}
                      </span>
                    </div>
                    {item.hasPlus && (
                      <span className="text-slate-400 group-hover:text-[#1163fb] text-base font-light">
                        +
                      </span>
                    )}
                  </Link>
                ))}
              </div>

              {/* Column 3 */}
              <div className="space-y-0.5">
                {[
                  { name: "Ecommerce", icon: <ShoppingCart className="w-4 h-4 text-[#1163fb]" />, hasPlus: true },
                  { name: "Travel", icon: <Plane className="w-4 h-4 text-[#1163fb]" /> },
                  { name: "Real Estate", icon: <Building2 className="w-4 h-4 text-[#1163fb]" /> },
                  { name: "Magazine & Newspaper", icon: <Newspaper className="w-4 h-4 text-[#1163fb]" /> },
                  { name: "Social Media", icon: <ThumbsUp className="w-4 h-4 text-[#1163fb]" /> },
                  { name: "Aviation", icon: <PlaneTakeoff className="w-4 h-4 text-[#1163fb]" /> },
                  { name: "CSR", icon: <HeartHandshake className="w-4 h-4 text-[#1163fb]" /> },
                  { name: "Retail", icon: <Tag className="w-4 h-4 text-[#1163fb]" /> },
                  { name: "Telecom", icon: <Radio className="w-4 h-4 text-[#1163fb]" /> },
                ].map((item, idx) => (
                  <Link
                    key={idx}
                    href="/industries"
                    onClick={() => setActiveMenu(null)}
                    className="flex items-center justify-between px-3.5 py-2 rounded-xl hover:bg-[#ecf3ff] transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="shrink-0">{item.icon}</span>
                      <span className="text-[14.5px] font-medium text-[#0f0f0f] group-hover:text-[#1163fb] transition-colors">
                        {item.name}
                      </span>
                    </div>
                    {item.hasPlus && (
                      <span className="text-slate-400 group-hover:text-[#1163fb] text-base font-light">
                        +
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            </div>

            {/* Bottom Consultation CTA Bar (Exact Appinventiv Style from Screenshot) */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#fff6db] border border-amber-200/50 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-[13.5px] sm:text-[14px] font-bold text-[#0f0f0f] leading-snug text-center sm:text-left">
                Didn&apos;t find what you&apos;re looking for? Let us know your needs, and we&apos;ll tailor a solution just for you.
              </p>
              <button
                onClick={() => {
                  setActiveMenu(null);
                  onOpenConsultation?.();
                }}
                className="px-6 py-2.5 bg-[#1163fb] hover:bg-[#0c51d6] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-all shrink-0 active:scale-95"
              >
                Schedule Free Consultations
              </button>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* MEGA-MENU 5: RESOURCES (Appinventiv Tabbed Benchmark)     */}
        {/* ======================================================== */}
        {activeMenu === "resources" && (
          <div
            className="absolute top-full mt-3 left-1/2 -translate-x-1/2 w-[940px] max-w-[95vw] bg-white rounded-3xl border border-slate-200 shadow-2xl p-7 animate-in fade-in slide-in-from-top-2 duration-200 z-50"
            onMouseEnter={() => handleMouseEnter("resources")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="grid grid-cols-12 gap-8 items-start">
              {/* Left Column: Tab Selector */}
              <div className="col-span-3 pr-4 border-r border-slate-100 space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Knowledge Hub
                </h4>
                <button
                  onClick={() => setActiveResourceTab("blogs")}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeResourceTab === "blogs"
                      ? "bg-blue-50 text-blue-600 shadow-sm"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  Featured Blogs
                </button>
                <button
                  onClick={() => setActiveResourceTab("guides")}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                    activeResourceTab === "guides"
                      ? "bg-blue-50 text-blue-600 shadow-sm"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  Engineering Guides
                </button>
              </div>

              {/* Middle Column: Tab Content */}
              <div className="col-span-5 space-y-3">
                {activeResourceTab === "blogs" && (
                  <>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Recommended Articles
                    </h5>
                    <Link
                      href="/blog"
                      onClick={() => setActiveMenu(null)}
                      className="block p-3 rounded-2xl bg-slate-50 hover:bg-blue-50/50 border border-slate-200/80 transition-all group"
                    >
                      <div className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">
                        Building Autonomous AI Agents for Enterprise Workflows
                      </div>
                      <p className="text-[11px] text-slate-500 line-clamp-2">
                        How multi-agent reasoning and private RAG architectures replace manual operations with 99.9% accuracy.
                      </p>
                    </Link>
                    <Link
                      href="/blog"
                      onClick={() => setActiveMenu(null)}
                      className="block p-3 rounded-2xl bg-slate-50 hover:bg-blue-50/50 border border-slate-200/80 transition-all group"
                    >
                      <div className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">
                        De-Monolithing Legacy Systems into Event-Driven Microservices
                      </div>
                      <p className="text-[11px] text-slate-500 line-clamp-2">
                        Step-by-step framework to migrate legacy databases to distributed Kafka and Kubernetes architectures.
                      </p>
                    </Link>
                  </>
                )}

                {activeResourceTab === "guides" && (
                  <>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Whitepapers &amp; Frameworks
                    </h5>
                    <Link
                      href="/#case-studies"
                      onClick={() => setActiveMenu(null)}
                      className="block p-3 rounded-2xl bg-slate-50 hover:bg-blue-50/50 border border-slate-200/80 transition-all group"
                    >
                      <div className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">
                        Zero-Trust Cloud Architecture Implementation Guide
                      </div>
                      <p className="text-[11px] text-slate-500 line-clamp-2">
                        Complete enterprise security blueprint covering ISO 27001, SOC2, and IAM governance.
                      </p>
                    </Link>
                    <Link
                      href="/#case-studies"
                      onClick={() => setActiveMenu(null)}
                      className="block p-3 rounded-2xl bg-slate-50 hover:bg-blue-50/50 border border-slate-200/80 transition-all group"
                    >
                      <div className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1">
                        High-Throughput Diagnostic LIMS Engineering Standards
                      </div>
                      <p className="text-[11px] text-slate-500 line-clamp-2">
                        How Patholab.cloud processes 500,000+ laboratory specimens with sub-second analyzer synchronization.
                      </p>
                    </Link>
                  </>
                )}
              </div>

              {/* Right Column: Featured Insight Card */}
              <div className="col-span-4">
                <div className="p-5 rounded-2xl bg-[#0c1017] border border-white/10 text-white shadow-xl flex flex-col justify-between h-full">
                  <div>
                    <span className="inline-block px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-300 text-[10px] font-bold uppercase tracking-wider mb-3">
                      Featured Insight
                    </span>
                    <h4 className="text-sm font-bold text-white mb-2 leading-snug">
                      The Next Generation of Enterprise AI &amp; Software
                    </h4>
                    <p className="text-[11px] text-slate-400 leading-relaxed mb-4">
                      Explore our engineering methodology and how we deliver transformation across global enterprises.
                    </p>
                  </div>
                  <Link
                    href="/#case-studies"
                    onClick={() => setActiveMenu(null)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <span>Explore All Case Studies</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ======================================================== */}
      {/* MOBILE EXPANDABLE DRAWER                                 */}
      {/* ======================================================== */}
      {mobileOpen && (
        <div className="lg:hidden mt-3 max-w-[1140px] mx-auto bg-white rounded-3xl border border-slate-200 shadow-2xl p-6 flex flex-col gap-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <Link
            href="/#hero"
            onClick={() => setMobileOpen(false)}
            className="text-base font-semibold text-slate-900 py-1.5 hover:text-blue-600"
          >
            Home
          </Link>

          {/* About Mobile Accordion */}
          <div>
            <button
              onClick={() => setMobileAccordion(mobileAccordion === "about" ? null : "about")}
              className="w-full flex items-center justify-between text-base font-semibold text-slate-900 py-1.5"
            >
              <span>About</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  mobileAccordion === "about" ? "rotate-180 text-blue-600" : "text-slate-400"
                }`}
              />
            </button>
            {mobileAccordion === "about" && (
              <div className="pl-4 py-2 space-y-2 text-sm text-slate-600 border-l border-slate-200 ml-2">
                <Link href="/about" onClick={() => setMobileOpen(false)} className="block py-1 hover:text-blue-600 font-semibold">About Globizhub</Link>
                <Link href="/#process" onClick={() => setMobileOpen(false)} className="block py-1 hover:text-blue-600">Leadership Team</Link>
                <Link href="/#process" onClick={() => setMobileOpen(false)} className="block py-1 hover:text-blue-600">How We Work</Link>
                <Link href="/#case-studies" onClick={() => setMobileOpen(false)} className="block py-1 hover:text-blue-600">Client Portfolio</Link>
                <Link href="/terms" onClick={() => setMobileOpen(false)} className="block py-1 hover:text-blue-600">Terms &amp; Use</Link>
              </div>
            )}
          </div>

          {/* Products Mobile Accordion */}
          <div>
            <button
              onClick={() => setMobileAccordion(mobileAccordion === "products" ? null : "products")}
              className="w-full flex items-center justify-between text-base font-semibold text-slate-900 py-1.5"
            >
              <span>Products</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  mobileAccordion === "products" ? "rotate-180 text-blue-600" : "text-slate-400"
                }`}
              />
            </button>
            {mobileAccordion === "products" && (
              <div className="pl-4 py-2 space-y-2 text-sm text-slate-600 border-l border-slate-200 ml-2">
                <Link href="/#products-showcase" onClick={() => setMobileOpen(false)} className="block py-1 hover:text-blue-600">Patholab.Cloud</Link>
                <Link href="/#products-showcase" onClick={() => setMobileOpen(false)} className="block py-1 hover:text-blue-600">TeamHub</Link>
                <Link href="/#products-showcase" onClick={() => setMobileOpen(false)} className="block py-1 hover:text-blue-600">Bungzo</Link>
                <Link href="/#products-showcase" onClick={() => setMobileOpen(false)} className="block py-1 hover:text-blue-600">GlobizLibrary</Link>
                <Link href="/#products-showcase" onClick={() => setMobileOpen(false)} className="block py-1 hover:text-blue-600">Enterprise IMS</Link>
                <Link href="/#products-showcase" onClick={() => setMobileOpen(false)} className="block py-1 hover:text-blue-600">Listing</Link>
              </div>
            )}
          </div>

          {/* Services Mobile Accordion */}
          <div>
            <button
              onClick={() => setMobileAccordion(mobileAccordion === "services" ? null : "services")}
              className="w-full flex items-center justify-between text-base font-semibold text-slate-900 py-1.5"
            >
              <span>Services</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  mobileAccordion === "services" ? "rotate-180 text-blue-600" : "text-slate-400"
                }`}
              />
            </button>
            {mobileAccordion === "services" && (
              <div className="pl-4 py-2 space-y-2 text-sm text-slate-600 border-l border-slate-200 ml-2">
                <Link href="/#services" onClick={() => setMobileOpen(false)} className="block py-1 hover:text-blue-600">Product &amp; Engineering</Link>
                <Link href="/#services" onClick={() => setMobileOpen(false)} className="block py-1 hover:text-blue-600">Digital Transformation &amp; AI</Link>
                <Link href="/#services" onClick={() => setMobileOpen(false)} className="block py-1 hover:text-blue-600">Cloud Architecture &amp; DevOps</Link>
                <Link href="/#services" onClick={() => setMobileOpen(false)} className="block py-1 hover:text-blue-600">Cybersecurity &amp; Zero Trust</Link>
                <Link href="/#services" onClick={() => setMobileOpen(false)} className="block py-1 hover:text-blue-600">Consulting &amp; Data Services</Link>
              </div>
            )}
          </div>

          {/* Industries Mobile Accordion */}
          <div>
            <button
              onClick={() => setMobileAccordion(mobileAccordion === "industries" ? null : "industries")}
              className="w-full flex items-center justify-between text-base font-semibold text-slate-900 py-1.5"
            >
              <span>Industries</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  mobileAccordion === "industries" ? "rotate-180 text-blue-600" : "text-slate-400"
                }`}
              />
            </button>
            {mobileAccordion === "industries" && (
              <div className="pl-4 py-2 space-y-2 text-sm text-slate-600 border-l border-slate-200 ml-2">
                <Link href="/industries" onClick={() => setMobileOpen(false)} className="block py-1 text-blue-600 font-semibold hover:text-blue-700">Explore All Industries →</Link>
                <Link href="/#case-studies" onClick={() => setMobileOpen(false)} className="block py-1 hover:text-blue-600">Healthcare &amp; Life Sciences</Link>
                <Link href="/#case-studies" onClick={() => setMobileOpen(false)} className="block py-1 hover:text-blue-600">FinTech &amp; Banking</Link>
                <Link href="/#case-studies" onClick={() => setMobileOpen(false)} className="block py-1 hover:text-blue-600">eCommerce &amp; Retail</Link>
                <Link href="/#case-studies" onClick={() => setMobileOpen(false)} className="block py-1 hover:text-blue-600">Supply Chain &amp; Logistics</Link>
                <Link href="/#case-studies" onClick={() => setMobileOpen(false)} className="block py-1 hover:text-blue-600">Education &amp; EdTech</Link>
                <Link href="/#case-studies" onClick={() => setMobileOpen(false)} className="block py-1 hover:text-blue-600">Manufacturing &amp; Energy</Link>
              </div>
            )}
          </div>

          {/* Resources Mobile Accordion */}
          <div>
            <button
              onClick={() => setMobileAccordion(mobileAccordion === "resources" ? null : "resources")}
              className="w-full flex items-center justify-between text-base font-semibold text-slate-900 py-1.5"
            >
              <span>Resources</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  mobileAccordion === "resources" ? "rotate-180 text-blue-600" : "text-slate-400"
                }`}
              />
            </button>
            {mobileAccordion === "resources" && (
              <div className="pl-4 py-2 space-y-2 text-sm text-slate-600 border-l border-slate-200 ml-2">
                <Link href="/blog" onClick={() => setMobileOpen(false)} className="block py-1 hover:text-blue-600">Featured Blogs &amp; Articles</Link>
                <Link href="/blog" onClick={() => setMobileOpen(false)} className="block py-1 hover:text-blue-600">Engineering Guides</Link>
                <Link href="/terms" onClick={() => setMobileOpen(false)} className="block py-1 hover:text-blue-600">Terms &amp; Use</Link>
              </div>
            )}
          </div>

          <button
            onClick={() => {
              setMobileOpen(false);
              onOpenConsultation?.();
            }}
            className="w-full mt-3 py-3 rounded-full bg-slate-950 text-white font-bold text-center text-sm shadow-md cursor-pointer"
          >
            Contact Us →
          </button>
        </div>
      )}
    </header>
  );
}
