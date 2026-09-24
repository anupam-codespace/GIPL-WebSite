"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

interface HeroSectionProps {
  onOpenConsultation?: () => void;
}

// 2 Alternating Hero Videos (Pinterest Pins 793407659399242888 & 793407659399242890)
const HERO_VIDEOS = [
  {
    id: "793407659399242888",
    src: "/videos/hero-light-stream.mp4",
    fallbackSrc:
      "https://v1.pinimg.com/videos/mc/720p/ea/ef/86/eaef86d75bba72961aae0527cae203b4.mp4",
  },
  {
    id: "793407659399242890",
    src: "/videos/hero-stream-2.mp4",
    fallbackSrc:
      "https://v1.pinimg.com/videos/mc/720p/e1/6e/83/e16e83d07d36e2aa8fb797b1084e4e79.mp4",
  },
];


// Official Recognitions & Certifications
interface RecognitionItem {
  id: string;
  name: string;
  shortName: string;
  subtitle: string;
  category: string;
  authority: string;
  certificateNo: string;
  description: string;
  highlights: string[];
  logoSrc: string;
}

const officialRecognitions: RecognitionItem[] = [
  {
    id: "assam-startup",
    name: "Assam Startup: The Nest",
    shortName: "Assam Startup",
    subtitle: "Govt of Assam & IIM CIP",
    category: "Incubated Startup",
    authority: "Government of Assam & IIM Calcutta Innovation Park",
    certificateNo: "AS-INC-2021-084",
    description:
      "Recognized and incubated under Assam Startup — 'The Nest', a state flagship initiative supported by the Government of Assam and managed by IIM Calcutta Innovation Park.",
    highlights: [
      "State-backed incubator support at The Nest",
      "IIM Calcutta Innovation Park mentorship & validation",
      "Pioneering deep-tech enterprise innovation in Northeast India",
    ],
    logoSrc: "/images/assam_startup_logo_light.png",
  },
  {
    id: "dpiit",
    name: "DPIIT Recognition · Startup India",
    shortName: "DPIIT Recognition",
    subtitle: "Govt of India Recognized · Startup India",
    category: "Govt of India",
    authority: "Department for Promotion of Industry and Internal Trade (DPIIT)",
    certificateNo: "DIPP-CERT-98214",
    description:
      "Officially recognized by the Department for Promotion of Industry and Internal Trade (DPIIT), Ministry of Commerce and Industry, Government of India, under Startup India.",
    highlights: [
      "Official certificate of recognition under Startup India",
      "Authorized for enterprise technology R&D & digital IP",
      "National repository recognition for technological innovation",
    ],
    logoSrc: "/images/dpiit_logo_clean.png",
  },
  {
    id: "iso-9001",
    name: "ISO 9001:2015",
    shortName: "ISO 9001:2015",
    subtitle: "Quality Management System (QMS)",
    category: "Certified QMS",
    authority: "International Organization for Standardization (ISO)",
    certificateNo: "ISO-9001-QMS-2022",
    description:
      "Globizhub complies with international standards of ISO 9001:2015 for Quality Management Systems across end-to-end software product design and enterprise cloud architecture.",
    highlights: [
      "Rigorous quality management & delivery controls",
      "Continual process improvement & client satisfaction metrics",
      "Audited software development lifecycle (SDLC) standards",
    ],
    logoSrc: "/images/iso_9001_certified_badge.png",
  },
  {
    id: "iso-27001",
    name: "ISO/IEC 27001:2022",
    shortName: "ISO 27001:2022",
    subtitle: "Information Security (ISMS)",
    category: "Information Security",
    authority: "International Organization for Standardization (ISO/IEC)",
    certificateNo: "ISO-27001-ISMS-2023",
    description:
      "Certified under ISO/IEC 27001:2022 for Information Security Management Systems, ensuring robust data governance, zero-trust infrastructure, and continuous threat mitigation.",
    highlights: [
      "Comprehensive information security management",
      "Zero-trust network architecture & data encryption at rest/transit",
      "Strict confidentiality, integrity & availability (CIA) governance",
    ],
    logoSrc: "/images/iso_27001_certified_badge.png",
  },
  {
    id: "msme",
    name: "Ministry of MSME · Govt. of India",
    shortName: "Ministry of MSME",
    subtitle: "Micro, Small & Medium Enterprises",
    category: "Govt. of India",
    authority: "Ministry of Micro, Small and Medium Enterprises, Govt. of India",
    certificateNo: "MSME-GOI-AS-2891",
    description:
      "Recognized enterprise under the Ministry of Micro, Small and Medium Enterprises (MSME), Government of India, driving indigenous digital innovation.",
    highlights: [
      "Official Ministry of MSME Recognition & Certification",
      "Government of India verified enterprise credentials",
      "National priority enterprise engineering initiative",
    ],
    logoSrc: "/images/msme_official_white.png",
  },
  {
    id: "make-in-india",
    name: "Make in India",
    shortName: "Make in India",
    subtitle: "Government of India Flagship Initiative",
    category: "Govt. Initiative",
    authority: "Government of India",
    certificateNo: "MII-TECH-IND-2024",
    description:
      "Committed to the Make in India initiative, engineering world-class indigenous software platforms, digital healthcare systems, and cloud infrastructure within India for global markets.",
    highlights: [
      "Indigenous software product engineering for global enterprises",
      "100% domestic technical IP and sovereign data security",
      "Championing digital transformation under national initiatives",
    ],
    logoSrc: "/images/make_in_india_lion.png",
  },
  {
    id: "iso-20000",
    name: "ISO/IEC 20000-1:2018",
    shortName: "ISO 20000-1:2018",
    subtitle: "IT Service Management (SMS)",
    category: "IT Service Mgmt",
    authority: "International Organization for Standardization (ISO/IEC)",
    certificateNo: "ISO-20000-ITSM-2023",
    description:
      "Accredited under ISO/IEC 20000-1:2018 for IT Service Management Systems, establishing best-in-class SLA performance, incident resolution, and ITIL-aligned service delivery.",
    highlights: [
      "ITIL-aligned enterprise service management",
      "Strict SLA monitoring with sub-15min critical response",
      "Standardized release, incident & problem management frameworks",
    ],
    logoSrc: "/images/iso_20000_certified_badge.png",
  },
];

export default function HeroSection({ onOpenConsultation }: HeroSectionProps) {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [isBlurTransitioning, setIsBlurTransitioning] = useState(false);

  const videoRef0 = useRef<HTMLVideoElement | null>(null);
  const videoRef1 = useRef<HTMLVideoElement | null>(null);

  // Smooth blur cross-fade transition between Video 1 & Video 2
  const transitionToNextVideo = useCallback(() => {
    setIsBlurTransitioning(true);

    const nextIndex = (activeVideoIndex + 1) % HERO_VIDEOS.length;
    const nextVideoEl = nextIndex === 0 ? videoRef0.current : videoRef1.current;
    const currentVideoEl = activeVideoIndex === 0 ? videoRef0.current : videoRef1.current;

    // Start playing next video immediately before cross-fading
    if (nextVideoEl) {
      nextVideoEl.currentTime = 0;
      nextVideoEl.play().catch(() => {});
    }

    // Switch active index to trigger CSS cross-fade & blur
    setActiveVideoIndex(nextIndex);

    // After transition duration (1200ms), finish transition
    setTimeout(() => {
      setIsBlurTransitioning(false);
      if (currentVideoEl) {
        currentVideoEl.pause();
      }
    }, 1200);
  }, [activeVideoIndex]);

  // Keep each video playing up to 20 seconds, then transition to next
  useEffect(() => {
    const timer = setTimeout(() => {
      transitionToNextVideo();
    }, 20000);

    return () => clearTimeout(timer);
  }, [activeVideoIndex, transitionToNextVideo]);



  return (
    <section
      className="relative min-h-[90vh] sm:min-h-[94vh] flex flex-col justify-between pt-28 sm:pt-36 lg:pt-42 pb-6 sm:pb-10 overflow-hidden bg-black text-white"
      id="hero"
    >
      {/* ======================================================== */}
      {/* 1. CINEMATIC CONTINUOUS LOOP VIDEO BACKGROUND            */}
      {/* Alternates Video 1 (Pin 793407659399242888) & Video 2   */}
      {/* (Pin 793407659399242890) every 20s with smooth blur      */}
      {/* cross-fade transition (never black)                      */}
      {/* ======================================================== */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Poster fallback image */}
        <Image
          src="/images/hero-video-poster.jpg"
          alt="Globizhub Hero Light Stream"
          fill
          priority
          className={`object-cover object-center transition-opacity duration-1000 ${
            videoLoaded ? "opacity-25" : "opacity-90"
          }`}
        />

        {/* Video 1 (Pin 793407659399242888) */}
        <video
          ref={videoRef0}
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={transitionToNextVideo}
          onLoadedData={() => setVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-[1200ms] ease-in-out ${
            activeVideoIndex === 0
              ? isBlurTransitioning
                ? "opacity-85 filter blur-sm scale-102"
                : "opacity-90 filter blur-0 scale-100"
              : "opacity-0 filter blur-md scale-105 pointer-events-none"
          }`}
        >
          <source src={HERO_VIDEOS[0].src} type="video/mp4" />
          <source src={HERO_VIDEOS[0].fallbackSrc} type="video/mp4" />
        </video>

        {/* Video 2 (Pin 793407659399242890) */}
        <video
          ref={videoRef1}
          muted
          playsInline
          preload="auto"
          onEnded={transitionToNextVideo}
          className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-[1200ms] ease-in-out ${
            activeVideoIndex === 1
              ? isBlurTransitioning
                ? "opacity-85 filter blur-sm scale-102"
                : "opacity-90 filter blur-0 scale-100"
              : "opacity-0 filter blur-md scale-105 pointer-events-none"
          }`}
        >
          <source src={HERO_VIDEOS[1].src} type="video/mp4" />
          <source src={HERO_VIDEOS[1].fallbackSrc} type="video/mp4" />
        </video>

        {/* Soft blur overlay during transitions to guarantee no black flicker */}
        <div
          className={`absolute inset-0 backdrop-blur-[6px] bg-blue-900/10 transition-opacity duration-1000 pointer-events-none ${
            isBlurTransitioning ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Gradient Vignettes: dark on left/bottom for ultra-sharp typography contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/30 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_20%_20%,rgba(37,99,235,0.18),transparent_70%)] pointer-events-none" />
      </div>

      {/* ======================================================== */}
      {/* 2. MAIN HERO CONTENT (Appinventiv-Style Layout)          */}
      {/* ======================================================== */}
      <div className="max-w-[1360px] w-full mx-auto px-5 sm:px-8 lg:px-12 relative z-10 my-auto">
        <div className="max-w-3xl">
          {/* Main Headline (Fixed, Stable & Authoritative) */}
          <h1 className="text-[32px] xs:text-[38px] sm:text-5xl md:text-6xl lg:text-[68px] font-bold text-white tracking-tight leading-[1.1] sm:leading-[1.06] break-words mb-5 sm:mb-7">
            Engineering the Next Generation of{" "}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] via-[#38BDF8] to-[#60A5FA]">
              Digital Systems with AI
            </span>
          </h1>

          {/* Subtitle Description (Fixed & Stable) */}
          <p className="text-white/80 text-sm sm:text-base lg:text-[19px] leading-relaxed font-normal mb-8 sm:mb-10 max-w-2xl">
            Globizhub engineers secure, scalable digital systems by combining strong architecture, data engineering, and AI capabilities, helping organizations move from strategy to reliable systems in production.
          </p>

          {/* Buttons Group with Generous Bottom Gap */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-5 mb-14 sm:mb-20 lg:mb-24">
            {/* Button 1: Appinventiv Rolling Text-Swap CTA Button (Fixed Single-Line Container) */}
            <button
              id="hero-consult-btn"
              onClick={onOpenConsultation}
              className="group relative inline-flex items-center gap-3 rounded-full bg-[#0D62FE] hover:bg-blue-600 text-white font-semibold text-sm sm:text-base px-7 sm:px-8 py-3.5 sm:py-4 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer overflow-hidden shadow-none"
            >
              <div className="relative h-5 sm:h-6 overflow-hidden flex flex-col justify-center">
                <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full whitespace-nowrap">
                  Consult Our Strategy Team
                </span>
                <span className="absolute top-full left-0 block transition-transform duration-300 ease-out group-hover:-translate-y-full whitespace-nowrap text-white">
                  Consult Our Strategy Team
                </span>
              </div>
              <svg
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0"
              >
                <path
                  d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                  fill="currentColor"
                />
              </svg>
            </button>

            {/* Button 2: Glass Pill Button */}
            <Link
              href="#products-showcase"
              className="rounded-full border border-white/25 bg-white/[0.08] hover:bg-white/[0.18] text-white font-medium text-sm sm:text-base px-7 sm:px-8 py-3.5 sm:py-4 backdrop-blur-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              See Our Works
            </Link>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 3. BOTTOM ACCREDITATIONS & CERTIFICATIONS BAR            */}
      {/* (Matching Appinventiv's bottom strip of 5-7 badges)      */}
      {/* ======================================================== */}
      <div className="max-w-[1360px] w-full mx-auto px-6 sm:px-8 lg:px-12 relative z-10 pt-6 sm:pt-8 border-t border-white/10">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-[11px] uppercase tracking-wider text-white/50 font-semibold">
              Accreditations, Certifications & Government Recognitions
            </span>
            <span className="hidden sm:inline-block text-[11px] text-white/40">
              Verified Enterprise Standards
            </span>
          </div>

          {/* Desktop View: Static 7-Column Grid */}
          <div className="hidden lg:grid grid-cols-7 gap-2.5 w-full">
            {officialRecognitions.map((item) => (
              <div
                key={item.id}
                className="group flex items-center justify-center px-3 py-3 h-20 w-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/25 rounded-xl transition-all duration-300 backdrop-blur-md shadow-lg"
              >
                <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
                  <Image
                    src={item.logoSrc}
                    alt={item.name}
                    width={200}
                    height={60}
                    className="max-h-10 w-auto max-w-[90%] object-contain filter drop-shadow brightness-90 group-hover:brightness-100 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Mobile & Tablet View: Infinite Continuous Marquee */}
          <div className="lg:hidden relative w-full overflow-hidden py-1">
            <div className="animate-marquee-continuous flex items-center gap-3 py-1">
              {[
                ...officialRecognitions,
                ...officialRecognitions,
                ...officialRecognitions,
              ].map((item, idx) => (
                <div
                  key={`hero-mob-${item.id}-${idx}`}
                  className="flex items-center justify-center px-4 py-3 h-16 w-[170px] sm:w-[190px] shrink-0 bg-white/[0.04] border border-white/10 rounded-xl backdrop-blur-md shadow-md"
                >
                  <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
                    <Image
                      src={item.logoSrc}
                      alt={item.name}
                      width={180}
                      height={55}
                      className="max-h-8 sm:max-h-9 w-auto max-w-[85%] object-contain filter drop-shadow"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
