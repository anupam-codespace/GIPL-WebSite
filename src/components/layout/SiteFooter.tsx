"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Instagram,
  Linkedin,
  Twitter,
  ChevronDown,
} from "lucide-react";
import GlobizhubLogo from "@/components/ui/GlobizhubLogo";

interface SiteFooterProps {
  onOpenConsultation?: () => void;
}

// 4 Verified Globizhub Office Locations
const LOCATIONS = [
  {
    city: "Bengaluru",
    badge: "Head Office",
    address:
      "NO 594/4/2, First Floor, Opp. to BDS Nagar, RK Nagar 2, Kothanur Main Road, K Narayanapura, Kothanur - Post Bengaluru - 560077",
  },
  {
    city: "Guwahati",
    badge: "Regional Office",
    address:
      "House No: 58, 1st Floor, Nayanpur Road, Ganeshguri, Guwahati - 781006, Assam",
  },
  {
    city: "Chennai",
    badge: "Tech Center",
    address:
      "Phase -1, No -59, Vanasakthi Nagar, Madhanakuppam, Chennai, Tamil Nadu - 600076",
  },
  {
    city: "Delhi",
    badge: "Corporate Office",
    address:
      "E-536 3RD FLOOR LUCKY PLAZA PALAM EXTENSION SECTOR 7 DWARKA DELHI NEW DELHI 110075 India",
  },
];

export default function SiteFooter({ onOpenConsultation }: SiteFooterProps) {
  const [showStatutory, setShowStatutory] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (name: string) => {
    setOpenAccordion(openAccordion === name ? null : name);
  };

  return (
    <footer
      className="text-white pt-20 pb-12 relative overflow-hidden font-['Plus_Jakarta_Sans',sans-serif] border-t border-white/[0.08]"
      style={{
        background:
          "linear-gradient(180deg, #000000 0%, #010410 16%, #030f2d 34%, #061d5a 52%, #0a2f8d 70%, #0d46c8 86%, #1153df 100%)",
      }}
    >
      {/* Radiant ambient bottom glow matching Appinventiv screenshot */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[700px] pointer-events-none -z-10"
        style={{
          background:
            "radial-gradient(140% 90% at 50% 100%, rgba(20, 95, 255, 0.5) 0%, rgba(13, 70, 222, 0.32) 40%, rgba(5, 25, 95, 0.15) 70%, transparent 100%)",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ======================================================== */}
        {/* 1. TOP SECTION: BRAND LOGO, TAGLINE, SOCIAL & RATINGS    */}
        {/* ======================================================== */}
        <div className="pb-16 border-b border-white/[0.08]">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 sm:gap-10">
            {/* Left: Logo & Tagline */}
            <div className="max-w-md">
              <Link href="/" className="inline-flex items-center gap-3 mb-4 group">
                <GlobizhubLogo className="w-10 h-10 shrink-0 group-hover:scale-105 transition-transform" />
                <div className="flex flex-col">
                  <span className="text-2xl font-bold tracking-tight text-white leading-none">
                    Globizhub
                  </span>
                  <span className="text-[10px] text-slate-400 font-semibold tracking-widest uppercase mt-1">
                    India Pvt Ltd.
                  </span>
                </div>
              </Link>

              <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed mb-6">
                Digital product consulting, engineering, and enterprise transformation company.
              </p>

              {/* Social Media Pill Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://www.linkedin.com/company/globizhub"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] hover:bg-white/[0.12] border border-white/10 text-xs font-semibold text-white transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-blue-400 fill-current" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://x.com/globizhub"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] hover:bg-white/[0.12] border border-white/10 text-xs font-semibold text-white transition-colors"
                >
                  <Twitter className="w-3.5 h-3.5 text-sky-400 fill-current" />
                  <span>X (Twitter)</span>
                </a>
                <a
                  href="https://instagram.com/globizhub"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] hover:bg-white/[0.12] border border-white/10 text-xs font-semibold text-white transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5 text-pink-400" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>

            {/* Right: Trust & Recognized Badges (Appinventiv Rating / Deloitte Style) */}
            <div className="hidden lg:flex items-center justify-end gap-6">
              <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/dpiit_logo_clean.png"
                  alt="DPIIT Startup India"
                  className="h-7 w-auto object-contain"
                />
              </div>

              <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/iso_9001_logo.svg"
                  alt="ISO Certified"
                  className="h-7 w-auto object-contain"
                />
                <div className="text-left">
                  <span className="block text-[11px] font-bold text-white leading-tight">
                    ISO 9001 &amp; 27001
                  </span>
                  <span className="block text-[9px] text-slate-400 font-medium">
                    Certified Security &amp; Quality
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Global Delivery Centers & Offices (4 Verified Locations) */}
          <div className="mt-14">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-6">
              Global Delivery Centers & Offices
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {LOCATIONS.map((loc, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-[#11141c]/90 border border-white/[0.08] hover:border-blue-500/30 transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-lg leading-none select-none" role="img" aria-label="India">
                          🇮🇳
                        </span>
                        <span className="text-base font-bold text-white tracking-tight">
                          {loc.city}
                        </span>
                      </div>
                      <span className="px-2 py-0.5 text-[10px] font-semibold bg-white/[0.08] text-slate-300 rounded-full border border-white/10">
                        {loc.badge}
                      </span>
                    </div>

                    <p className="text-xs text-slate-400 font-normal leading-relaxed">
                      {loc.address}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 2. NAVIGATION GRID: 6 COLUMNS (EXACT APPINVENTIV LAYOUT) */}
        {/* ======================================================== */}
        <div className="py-16 border-b border-white/[0.08]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 sm:gap-10">
            {/* Column 1: Our Company */}
            <div>
              <div
                onClick={() => toggleAccordion("company")}
                className="flex items-center justify-between cursor-pointer lg:cursor-default"
              >
                <h4 className="text-sm font-bold text-white tracking-tight uppercase lg:mb-5">
                  Our Company
                </h4>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 lg:hidden transition-transform ${
                    openAccordion === "company" ? "rotate-180" : ""
                  }`}
                />
              </div>
              <ul
                className={`space-y-3 text-xs sm:text-[13px] text-slate-400 font-normal mt-4 lg:mt-0 ${
                  openAccordion === "company" ? "block" : "hidden lg:block"
                }`}
              >
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#process" className="hover:text-white transition-colors">
                    Core Team
                  </Link>
                </li>
                <li>
                  <Link href="#process" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#process" className="hover:text-white transition-colors">
                    CSR & Foundation
                  </Link>
                </li>
                <li>
                  <Link href="#process" className="hover:text-white transition-colors">
                    How We Work
                  </Link>
                </li>
                <li>
                  <Link href="#case-studies" className="hover:text-white transition-colors">
                    Awards & Recognition
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/privacy#security" className="hover:text-white transition-colors">
                    Compliances
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Services */}
            <div>
              <div
                onClick={() => toggleAccordion("services")}
                className="flex items-center justify-between cursor-pointer lg:cursor-default"
              >
                <h4 className="text-sm font-bold text-white tracking-tight uppercase lg:mb-5">
                  Services
                </h4>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 lg:hidden transition-transform ${
                    openAccordion === "services" ? "rotate-180" : ""
                  }`}
                />
              </div>
              <ul
                className={`space-y-3 text-xs sm:text-[13px] text-slate-400 font-normal mt-4 lg:mt-0 ${
                  openAccordion === "services" ? "block" : "hidden lg:block"
                }`}
              >
                <li>
                  <Link href="#bento" className="hover:text-white transition-colors">
                    Digital Transformation
                  </Link>
                </li>
                <li>
                  <Link href="#bento" className="hover:text-white transition-colors">
                    Strategic Consulting
                  </Link>
                </li>
                <li>
                  <Link href="#bento" className="hover:text-white transition-colors">
                    Mobile App Development
                  </Link>
                </li>
                <li>
                  <Link href="#bento" className="hover:text-white transition-colors">
                    Software Development
                  </Link>
                </li>
                <li>
                  <Link href="#bento" className="hover:text-white transition-colors">
                    Cloud & DevOps
                  </Link>
                </li>
                <li>
                  <Link href="#bento" className="hover:text-white transition-colors">
                    Managed IT Services
                  </Link>
                </li>
                <li className="pt-1">
                  <Link
                    href="#bento"
                    className="text-[#1163FB] hover:text-blue-300 font-medium inline-flex items-center gap-1 transition-colors group"
                  >
                    <span>View More</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Portfolio & Products */}
            <div>
              <div
                onClick={() => toggleAccordion("products")}
                className="flex items-center justify-between cursor-pointer lg:cursor-default"
              >
                <h4 className="text-sm font-bold text-white tracking-tight uppercase lg:mb-5">
                  Portfolio
                </h4>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 lg:hidden transition-transform ${
                    openAccordion === "products" ? "rotate-180" : ""
                  }`}
                />
              </div>
              <ul
                className={`space-y-3 text-xs sm:text-[13px] text-slate-400 font-normal mt-4 lg:mt-0 ${
                  openAccordion === "products" ? "block" : "hidden lg:block"
                }`}
              >
                <li>
                  <Link href="#products" className="hover:text-white transition-colors flex items-center gap-1.5">
                    <span>Patholab.cloud</span>
                    <span className="px-1.5 py-0.5 text-[9px] font-bold bg-emerald-500/20 text-emerald-300 rounded">
                      Live
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="#products" className="hover:text-white transition-colors">
                    Bungzo Smart Living
                  </Link>
                </li>
                <li>
                  <Link href="#products" className="hover:text-white transition-colors">
                    GlobizLibrary
                  </Link>
                </li>
                <li>
                  <Link href="#products" className="hover:text-white transition-colors">
                    IMS Enterprise Inventory
                  </Link>
                </li>
                <li>
                  <Link href="#case-studies" className="hover:text-white transition-colors">
                    Americana QSR
                  </Link>
                </li>
                <li>
                  <Link href="#case-studies" className="hover:text-white transition-colors">
                    EdTech Cloud Core
                  </Link>
                </li>
                <li className="pt-1">
                  <Link
                    href="#products"
                    className="text-[#1163FB] hover:text-blue-300 font-medium inline-flex items-center gap-1 transition-colors group"
                  >
                    <span>View More</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Technologies */}
            <div>
              <div
                onClick={() => toggleAccordion("technologies")}
                className="flex items-center justify-between cursor-pointer lg:cursor-default"
              >
                <h4 className="text-sm font-bold text-white tracking-tight uppercase lg:mb-5">
                  Technologies
                </h4>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 lg:hidden transition-transform ${
                    openAccordion === "technologies" ? "rotate-180" : ""
                  }`}
                />
              </div>
              <ul
                className={`space-y-3 text-xs sm:text-[13px] text-slate-400 font-normal mt-4 lg:mt-0 ${
                  openAccordion === "technologies" ? "block" : "hidden lg:block"
                }`}
              >
                <li>
                  <Link href="#tech-stack" className="hover:text-white transition-colors">
                    Artificial Intelligence
                  </Link>
                </li>
                <li>
                  <Link href="#tech-stack" className="hover:text-white transition-colors">
                    RPA & Automation
                  </Link>
                </li>
                <li>
                  <Link href="#tech-stack" className="hover:text-white transition-colors">
                    IoT (Internet of Things)
                  </Link>
                </li>
                <li>
                  <Link href="#tech-stack" className="hover:text-white transition-colors">
                    AR/VR Solutions
                  </Link>
                </li>
                <li>
                  <Link href="#tech-stack" className="hover:text-white transition-colors">
                    Blockchain
                  </Link>
                </li>
                <li>
                  <Link href="#tech-stack" className="hover:text-white transition-colors">
                    Cybersecurity & Zero Trust
                  </Link>
                </li>
                <li className="pt-1">
                  <Link
                    href="#tech-stack"
                    className="text-[#1163FB] hover:text-blue-300 font-medium inline-flex items-center gap-1 transition-colors group"
                  >
                    <span>View More</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 5: Industries */}
            <div>
              <div
                onClick={() => toggleAccordion("industries")}
                className="flex items-center justify-between cursor-pointer lg:cursor-default"
              >
                <h4 className="text-sm font-bold text-white tracking-tight uppercase lg:mb-5">
                  Industries
                </h4>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 lg:hidden transition-transform ${
                    openAccordion === "industries" ? "rotate-180" : ""
                  }`}
                />
              </div>
              <ul
                className={`space-y-3 text-xs sm:text-[13px] text-slate-400 font-normal mt-4 lg:mt-0 ${
                  openAccordion === "industries" ? "block" : "hidden lg:block"
                }`}
              >
                <li>
                  <Link href="#case-studies" className="hover:text-white transition-colors">
                    Healthcare & Diagnostics
                  </Link>
                </li>
                <li>
                  <Link href="#case-studies" className="hover:text-white transition-colors">
                    Finance & FinTech
                  </Link>
                </li>
                <li>
                  <Link href="#case-studies" className="hover:text-white transition-colors">
                    Automotive & Fleet
                  </Link>
                </li>
                <li>
                  <Link href="#case-studies" className="hover:text-white transition-colors">
                    Education & EdTech
                  </Link>
                </li>
                <li>
                  <Link href="#case-studies" className="hover:text-white transition-colors">
                    Energy & Utilities
                  </Link>
                </li>
                <li>
                  <Link href="#case-studies" className="hover:text-white transition-colors">
                    eCommerce & Retail
                  </Link>
                </li>
                <li className="pt-1">
                  <Link
                    href="#case-studies"
                    className="text-[#1163FB] hover:text-blue-300 font-medium inline-flex items-center gap-1 transition-colors group"
                  >
                    <span>View More</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 6: Resources & Get In Touch Button */}
            <div>
              <div
                onClick={() => toggleAccordion("resources")}
                className="flex items-center justify-between cursor-pointer lg:cursor-default"
              >
                <h4 className="text-sm font-bold text-white tracking-tight uppercase lg:mb-5">
                  Resources
                </h4>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 lg:hidden transition-transform ${
                    openAccordion === "resources" ? "rotate-180" : ""
                  }`}
                />
              </div>
              <ul
                className={`space-y-3 text-xs sm:text-[13px] text-slate-400 font-normal mt-4 lg:mt-0 mb-8 ${
                  openAccordion === "resources" ? "block" : "hidden lg:block"
                }`}
              >
                <li>
                  <Link href="/blog" className="hover:text-white transition-colors">
                    Blogs & Articles
                  </Link>
                </li>
                <li>
                  <Link href="#case-studies" className="hover:text-white transition-colors">
                    Guides & Whitepapers
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="hover:text-white transition-colors">
                    Client Testimonials
                  </Link>
                </li>
              </ul>

              {/* Appinventiv Style Rolling Swap-Text White Button */}
              <button
                type="button"
                onClick={onOpenConsultation}
                className="group/btn relative w-full sm:w-auto inline-flex items-center justify-center px-7 py-3 rounded-full bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs sm:text-sm tracking-tight transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-[0.98] cursor-pointer overflow-hidden"
              >
                <span className="relative inline-flex flex-col h-[1.35em] overflow-hidden leading-[1.35em] whitespace-nowrap">
                  <span className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:-translate-y-full">
                    Get In Touch
                  </span>
                  <span className="absolute top-full left-0 w-full text-center inline-block transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:-translate-y-full">
                    Get In Touch
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 3. BUSINESS UNITS UNDER GLOBIZHUB GROUP                  */}
        {/* (Exact match to Appinventiv reference screenshot)        */}
        {/* ======================================================== */}
        <div className="py-12 border-b border-white/[0.08]">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-6">
            Business Units Under Globizhub Group
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {/* Card 1: Globizhub AI */}
            <div className="h-16 sm:h-20 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/25 backdrop-blur-md flex items-center justify-center transition-all duration-300 group cursor-pointer">
              <span className="text-base sm:text-lg font-bold text-white tracking-wide group-hover:text-blue-300 transition-colors flex items-center gap-1.5">
                <span>Globizhub</span>
                <span className="text-blue-400 font-extrabold text-xl">AI</span>
              </span>
            </div>

            {/* Card 2: Globizhub Digital */}
            <div className="h-16 sm:h-20 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/25 backdrop-blur-md flex items-center justify-center transition-all duration-300 group cursor-pointer">
              <span className="text-base sm:text-lg font-bold text-white tracking-wide group-hover:text-blue-300 transition-colors flex items-center gap-2">
                <GlobizhubLogo className="w-5 h-5 shrink-0" />
                <span className="font-bold">globizhub</span>
                <span className="text-[10px] tracking-widest uppercase font-extrabold px-1.5 py-0.5 rounded bg-blue-600/30 text-blue-300 border border-blue-500/30">
                  digital
                </span>
              </span>
            </div>

            {/* Card 3: Globizhub Foundation */}
            <div className="h-16 sm:h-20 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/25 backdrop-blur-md flex items-center justify-center transition-all duration-300 group cursor-pointer">
              <span className="text-base sm:text-lg font-bold text-white tracking-wide group-hover:text-blue-300 transition-colors flex items-center gap-2">
                <GlobizhubLogo className="w-5 h-5 shrink-0 opacity-80" />
                <span className="font-bold">globizhub</span>
                <span className="text-[10px] tracking-widest uppercase font-extrabold text-slate-300">
                  foundation
                </span>
              </span>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* 4. BOTTOM BAR: SITEMAP, PRIVACY, TERMS, COPYRIGHT, DMCA  */}
        {/* ======================================================== */}
        <div className="pt-10 flex flex-col gap-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-xs text-slate-400">
            {/* Left: Legal Links + Statutory Toggle */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 order-2 lg:order-1 text-center sm:text-left">
              <Link href="/sitemap.xml" className="hover:text-white transition-colors">
                Sitemap
              </Link>
              <span className="text-slate-600">|</span>
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span className="text-slate-600">|</span>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Use
              </Link>
              <span className="text-slate-600">|</span>
              <Link href="/refund" className="hover:text-white transition-colors">
                Refund Policy
              </Link>
              <span className="text-slate-600">|</span>
              <Link href="/data-security" className="hover:text-white transition-colors">
                Data Security
              </Link>
              <span className="text-slate-600">|</span>
              <Link href="/corporate-policies" className="hover:text-white transition-colors">
                Corporate Policies
              </Link>
              <span className="text-slate-600">|</span>
              <button
                type="button"
                onClick={() => setShowStatutory(!showStatutory)}
                className="hover:text-white underline underline-offset-2 transition-colors cursor-pointer"
              >
                Statutory Legal Information
              </button>
            </div>

            {/* Right: Copyright + DMCA Badge */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 order-1 lg:order-2">
              <div className="text-center lg:text-right font-normal text-slate-400">
                Copyright &copy; 2018 - 2026 Globizhub India Pvt Ltd. All rights reserved.
              </div>
              <div className="px-2.5 py-1 rounded-md bg-[#0A2668]/80 border border-blue-400/30 flex items-center gap-1.5 text-[10px] font-bold text-white tracking-wider select-none shrink-0 shadow-sm">
                <svg className="w-3 h-3 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
                <span>DMCA</span>
                <span className="text-[8px] uppercase tracking-normal text-blue-300 font-medium">PROTECTED</span>
              </div>
            </div>
          </div>

          {/* Expandable Statutory Legal Information Panel (Exact Appinventiv Feature) */}
          {showStatutory && (
            <div className="mt-2 p-6 rounded-2xl bg-[#11141c]/95 border border-white/10 text-xs text-slate-400 leading-relaxed space-y-3 transition-all duration-300 animate-fadeIn">
              <p>
                <strong className="text-white">Globizhub</strong> is the registered trading brand of{" "}
                <strong className="text-white">Globizhub India Pvt Ltd. (GHPL)</strong>, an enterprise digital
                engineering and cloud transformation company situated in Guwahati, Assam and Noida, Delhi-NCR, India.
              </p>
              <p>
                All personal and proprietary information submitted on this website—including Name, Email, Phone Number,
                and Technical Project Details—is protected under Non-Disclosure Agreements (NDA) and will never be sold,
                shared, or rented to third parties. Our engineering consulting and client success teams utilize this data
                strictly to prepare technical architectural proposals, feasibility analyses, and project timeline
                estimates.
              </p>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
