"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink, CheckCircle2 } from "lucide-react";

interface BentoCapabilitiesProps {
  onOpenConsultation?: () => void;
}

interface ShowcaseProject {
  id: string;
  clientLogoText: string;
  clientSubtitle?: string;
  logoAccentColor: string;
  sectorTags: string[];
  title: string;
  description: string;
  metric1Value: string;
  metric1Label: string;
  metric2Value: string;
  metric2Label: string;
  imageSrc: string;
  imageAlt: string;
  externalUrl?: string;
}

const projects: ShowcaseProject[] = [
  {
    id: "ezipay",
    clientLogoText: "EziPay™",
    clientSubtitle: "GLOBAL WALLET",
    logoAccentColor: "text-sky-600",
    sectorTags: ["Financial", "Mobile App"],
    title: "On-demand Mobile Payment Platform",
    description:
      "We made digital payments more secure and easy-to-use with the on-demand app EziPay. We integrated next-gen features and microservices into the app to ensure military-grade data security while maintaining frictionless user convenience.",
    metric1Value: "50k+",
    metric1Label: "Downloads",
    metric2Value: "4.7/5",
    metric2Label: "User Satisfaction",
    imageSrc: "/images/app_showcase_woman.jpg",
    imageAlt: "EziPay Mobile Payment App on Smartphone",
  },
  {
    id: "patholab",
    clientLogoText: "Patholab.cloud",
    clientSubtitle: "DIAGNOSTIC LIMS",
    logoAccentColor: "text-emerald-600",
    sectorTags: ["Healthcare", "Diagnostic SaaS"],
    title: "Diagnostic Laboratory Information System (LIMS)",
    description:
      "Engineered an enterprise diagnostic operating system featuring barcode specimen printing, real-time multi-branch sample tracking, automated pathology analyzers integration, and instant WhatsApp report delivery across 100+ diagnostic networks.",
    metric1Value: "-70%",
    metric1Label: "Report Turnaround Delay",
    metric2Value: "100%",
    metric2Label: "Audit Ready Compliance",
    imageSrc: "/images/patholab_doctor_tablet.jpg",
    imageAlt: "Physician Reviewing Diagnostics on Patholab Tablet",
    externalUrl: "https://patholab.cloud",
  },
  {
    id: "bungzo",
    clientLogoText: "Bungzo™",
    clientSubtitle: "LOGISTICS ENGINE",
    logoAccentColor: "text-amber-600",
    sectorTags: ["Logistics", "Mobile & Cloud"],
    title: "Hyperlocal Fleet Routing & Dispatch Platform",
    description:
      "Architected an on-demand courier and food dispatching platform managing 85,000+ trucks and couriers with sub-second route optimization, IoT telematics ingestion, and automated driver replenishment algorithms.",
    metric1Value: "85k+",
    metric1Label: "Active Fleet Telematics",
    metric2Value: "-62%",
    metric2Label: "Cloud Infrastructure Cost",
    imageSrc: "/images/bungzo_preview.jpg",
    imageAlt: "Bungzo Logistics Fleet Telematics Map",
  },
  {
    id: "holcim",
    clientLogoText: "HOLCIM",
    clientSubtitle: "BUILDING MATERIALS",
    logoAccentColor: "text-indigo-600",
    sectorTags: ["Supply Chain", "Enterprise App"],
    title: "Building Materials Ordering & Dispatch App",
    description:
      "We re-engineered the Clickit mobile and web ordering platform for enterprise construction teams. We simplified navigation, streamlined approval workflows, and synchronized multi-warehouse ERP inventories in real time.",
    metric1Value: "70%",
    metric1Label: "Workflow Efficiency Boost",
    metric2Value: "55%",
    metric2Label: "Increase in Active Users",
    imageSrc: "/images/hero_architecture.jpg",
    imageAlt: "Holcim Supply Chain Architecture Platform",
  },
];

export default function BentoCapabilities({ onOpenConsultation }: BentoCapabilitiesProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeProject = projects[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="py-20 sm:py-28 bg-slate-50 relative overflow-hidden" id="services">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-[780px] mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold tracking-wide mb-4 shadow-sm">
            <span>Engineering Excellence & Flagship Deployments</span>
          </div>
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Built for Modern Tech Dominance
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Explore how we build, deploy, and scale mission-critical software products for international enterprises and market disruptors.
          </p>
        </div>

        {/* Stacked Interactive Card Container (Appventurez Reference Benchmark) */}
        <div className="relative max-w-[1240px] mx-auto">
          {/* Peeking Background Layer Cards (Stacking Effect) */}
          <div className="absolute -top-3 left-6 right-6 h-12 rounded-3xl bg-indigo-100/70 border border-indigo-200 -z-10 transition-all duration-300" />
          <div className="absolute -top-6 left-12 right-12 h-12 rounded-3xl bg-indigo-50/80 border border-indigo-100 -z-20 transition-all duration-300" />

          {/* Project Tabs / Switcher Bar */}
          <div className="flex items-center justify-between gap-2 p-2 bg-white rounded-t-3xl border-t-2 border-x-2 border-indigo-200/90 overflow-x-auto">
            <div className="flex items-center gap-2">
              {projects.map((proj, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <button
                    key={proj.id}
                    onClick={() => setActiveIndex(idx)}
                    className={`px-4 py-2 rounded-xl font-['Space_Grotesk'] text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                      isActive
                        ? "bg-slate-900 text-white shadow-md"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                    }`}
                  >
                    <span>{proj.clientLogoText}</span>
                  </button>
                );
              })}
            </div>

            {/* Prev / Next Controls */}
            <div className="flex items-center gap-1.5 shrink-0 px-2">
              <button
                onClick={handlePrev}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Next project"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Active Card Body */}
          <div className="bg-white rounded-b-3xl rounded-tr-none border-2 border-indigo-200/90 shadow-2xl p-6 sm:p-10 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 flex flex-col justify-between h-full">
              <div>
                {/* Logo & Category Tags */}
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <div className="font-['Space_Grotesk'] text-2xl font-extrabold text-slate-900 tracking-tight flex items-baseline gap-1.5">
                    <span className={activeProject.logoAccentColor}>{activeProject.clientLogoText}</span>
                    {activeProject.clientSubtitle && (
                      <span className="text-[10px] text-slate-400 font-mono font-semibold tracking-wider uppercase">
                        {activeProject.clientSubtitle}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    {activeProject.sectorTags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full border border-indigo-300 text-indigo-700 text-xs font-semibold bg-indigo-50/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-4">
                  {activeProject.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8 font-normal">
                  {activeProject.description}
                </p>

                {/* Quantifiable Metrics */}
                <div className="grid grid-cols-2 gap-6 pt-6 pb-6 border-t border-slate-200 mb-8">
                  <div>
                    <div className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-extrabold text-slate-900">
                      {activeProject.metric1Value}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                      {activeProject.metric1Label}
                    </div>
                  </div>

                  <div>
                    <div className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-extrabold text-slate-900">
                      {activeProject.metric2Value}
                    </div>
                    <div className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                      {activeProject.metric2Label}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div>
                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-indigo-600 via-indigo-700 to-violet-700 hover:brightness-105 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/35 hover:-translate-y-0.5 transition-all cursor-pointer"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Visual Column: High-Resolution Photo Card */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-slate-200 shadow-xl group">
                <Image
                  src={activeProject.imageSrc}
                  alt={activeProject.imageAlt}
                  fill
                  priority
                  className="object-cover group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />

                {/* Live Badge in Photo */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-semibold">
                  <span className="bg-slate-900/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
                    Verified Production Deployment
                  </span>
                  <span className="bg-emerald-500 text-slate-950 font-bold px-3 py-1 rounded-full text-[11px]">
                    LIVE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
