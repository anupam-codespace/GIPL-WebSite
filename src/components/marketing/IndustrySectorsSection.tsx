"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface IndustrySectorsSectionProps {
  onOpenConsultation?: () => void;
}

interface IndustryItem {
  id: string;
  name: string;
  image: string;
  description: React.ReactNode;
}

const industries: IndustryItem[] = [
  {
    id: "healthcare",
    name: "Healthcare",
    image: "/images/industry_healthcare.jpg",
    description: (
      <>
        We develop robust healthcare solutions that improve patient care with{" "}
        <strong className="font-extrabold text-white">AI Diagnostics &amp; Imaging</strong> and{" "}
        <strong className="font-extrabold text-white">Predictive Patient Analytics</strong>,
        enhancing the accuracy of diagnostics and streamlining clinical operations.
      </>
    ),
  },
  {
    id: "finance",
    name: "Finance",
    image: "/images/industry_finance.jpg",
    description: (
      <>
        Our FinTech services help optimize transactions, increase the security of exchanges with{" "}
        <strong className="font-extrabold text-white">AI Fraud Detection Systems</strong>, and
        innovate financial services with{" "}
        <strong className="font-extrabold text-white">AI-Powered Robo-Advisory</strong>, ensuring
        security and scalability for high-volume transactions.
      </>
    ),
  },
  {
    id: "banking",
    name: "Banking",
    image: "/images/industry_banking.jpg",
    description: (
      <>
        We engineer secure digital banking ecosystems that modernize core infrastructure with{" "}
        <strong className="font-extrabold text-white">AI-Driven Credit Risk Modeling</strong> and
        enhance customer retention through{" "}
        <strong className="font-extrabold text-white">Hyper-Personalized Financial Insights</strong>,
        ensuring regulatory compliance and sub-15ms transaction performance.
      </>
    ),
  },
  {
    id: "restaurant",
    name: "Restaurant",
    image: "/images/industry_restaurant.jpg",
    description: (
      <>
        We create dynamic restaurant apps and software that boost operational efficiency with{" "}
        <strong className="font-extrabold text-white">AI-driven route optimization</strong> and
        improve supply chain visibility with{" "}
        <strong className="font-extrabold text-white">Predictive Maintenance AI for fleets</strong>.
      </>
    ),
  },
  {
    id: "ecommerce",
    name: "eCommerce",
    image: "/images/industry_ecommerce.jpg",
    description: (
      <>
        Our custom eCommerce solutions optimize online stores for better user engagement with{" "}
        <strong className="font-extrabold text-white">Generative Product Descriptions</strong>,
        increased sales through{" "}
        <strong className="font-extrabold text-white">AI-Personalized Shopping Experiences</strong>{" "}
        and seamless checkout journeys.
      </>
    ),
  },
  {
    id: "logistics",
    name: "Logistics",
    image: "/images/hero_architecture.jpg",
    description: (
      <>
        We engineer high-efficiency supply chain and logistics platforms featuring{" "}
        <strong className="font-extrabold text-white">AI-Driven Route Optimization</strong>,
        real-time cold-chain telemetry tracking with{" "}
        <strong className="font-extrabold text-white">Automated Dispatch Intelligence</strong>,
        and sub-second warehouse inventory synchronization.
      </>
    ),
  },
  {
    id: "saas",
    name: "SaaS",
    image: "/images/industry_saas.jpg",
    description: (
      <>
        We craft secure and scalable cloud-based SaaS applications that businesses can effectively
        rely on for delivering consistent services, utilizing{" "}
        <strong className="font-extrabold text-white">AI-Driven Customer Support Automation</strong>{" "}
        and <strong className="font-extrabold text-white">Predictive Churn Analysis</strong>.
      </>
    ),
  },
];

export default function IndustrySectorsSection({
  onOpenConsultation,
}: IndustrySectorsSectionProps) {
  // Default to "restaurant" (index 3) to match user reference screenshot exactly
  const [activeIndex, setActiveIndex] = useState(3);

  return (
    <section className="relative bg-[#000000] text-white py-20 lg:py-28 px-4 sm:px-6 lg:px-12 overflow-hidden border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 sm:pb-16">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15]">
              Solving Complex Challenges
              <span className="block text-white">Across Every Major Sector</span>
            </h2>
          </div>

          <div className="hidden md:block">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="group relative inline-flex items-center gap-2.5 px-6 py-3 border border-white/30 hover:border-white text-white text-sm font-semibold rounded-full bg-black/40 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] overflow-hidden cursor-pointer"
            >
              <div className="relative h-5 overflow-hidden flex flex-col justify-center">
                <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full whitespace-nowrap">
                  Check All Industries
                </span>
                <span className="absolute top-full left-0 block transition-transform duration-300 ease-out group-hover:-translate-y-full whitespace-nowrap text-white font-semibold">
                  Check All Industries
                </span>
              </div>
              <svg
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-2.5 h-2.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0"
              >
                <path
                  d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Interactive Navigation (Tabs) */}
        <div className="flex lg:hidden overflow-x-auto pb-6 gap-2 no-scrollbar scroll-smooth">
          {industries.map((ind, idx) => {
            const isActive = activeIndex === idx;
            return (
              <button
                key={ind.id}
                onClick={() => setActiveIndex(idx)}
                className={`px-5 py-2.5 rounded-full text-sm whitespace-nowrap transition-all duration-200 flex-shrink-0 ${
                  isActive
                    ? "bg-white text-black font-bold shadow-lg"
                    : "bg-white/10 text-white/70 hover:bg-white/20 font-medium"
                }`}
              >
                {ind.name}
              </button>
            );
          })}
        </div>

        {/* 3-Column Interactive Content Layout (Desktop) / Stacked (Mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Column 1: Image Card */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-zinc-950">
              {industries.map((ind, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <div
                    key={ind.id}
                    className={`absolute inset-0 transition-all duration-500 ease-out ${
                      isActive
                        ? "opacity-100 scale-100 pointer-events-auto z-10"
                        : "opacity-0 scale-105 pointer-events-none z-0"
                    }`}
                  >
                    {/* Native img with eager loading ensures instant visual swap without delay */}
                    <img
                      src={ind.image}
                      alt={`${ind.name} Industry Solutions`}
                      loading="eager"
                      className="w-full h-full object-cover"
                    />
                    {/* Subtle inner vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Column 2: Industry Selector List (Desktop) */}
          <div className="hidden lg:flex lg:col-span-3 order-2 flex-col space-y-4 xl:space-y-6">
            {industries.map((ind, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={ind.id}
                  onClick={() => setActiveIndex(idx)}
                  onMouseEnter={() => setActiveIndex(idx)}
                  className={`text-left transition-all duration-300 py-1 cursor-pointer select-none ${
                    isActive
                      ? "text-white font-bold text-3xl xl:text-4xl translate-x-1"
                      : "text-white/35 font-medium text-2xl xl:text-3xl hover:text-white/80 hover:translate-x-0.5"
                  }`}
                >
                  {ind.name}
                </button>
              );
            })}
          </div>

          {/* Column 3: Description Paragraph + Know More Button */}
          <div className="lg:col-span-4 order-3 flex flex-col justify-center space-y-8">
            <div className="min-h-[140px] sm:min-h-[160px] flex items-center">
              {industries.map((ind, idx) => {
                const isActive = activeIndex === idx;
                if (!isActive) return null;
                return (
                  <p
                    key={ind.id}
                    className="text-base sm:text-lg text-slate-200 leading-relaxed animate-fadeIn"
                  >
                    {ind.description}
                  </p>
                );
              })}
            </div>

            <div>
              <button
                type="button"
                onClick={onOpenConsultation}
                className="group relative inline-flex items-center gap-2.5 px-6 py-3 border border-white/60 hover:border-white text-white text-sm font-semibold rounded-full bg-white/5 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] overflow-hidden cursor-pointer"
              >
                <div className="relative h-5 overflow-hidden flex flex-col justify-center">
                  <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full whitespace-nowrap">
                    Know More
                  </span>
                  <span className="absolute top-full left-0 block transition-transform duration-300 ease-out group-hover:-translate-y-full whitespace-nowrap text-white font-semibold">
                    Know More
                  </span>
                </div>
                <svg
                  viewBox="0 0 14 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-2.5 h-2.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0"
                >
                  <path
                    d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile bottom CTA button */}
        <div className="block md:hidden pt-10 text-center">
          <button
            type="button"
            onClick={onOpenConsultation}
            className="group relative inline-flex items-center justify-center gap-2.5 w-full py-3.5 border border-white/30 hover:border-white text-white text-sm font-semibold rounded-full bg-white/5 backdrop-blur-sm transition-all duration-300 overflow-hidden cursor-pointer"
          >
            <div className="relative h-5 overflow-hidden flex flex-col justify-center">
              <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full whitespace-nowrap">
                Check All Industries
              </span>
              <span className="absolute top-full left-0 block transition-transform duration-300 ease-out group-hover:-translate-y-full whitespace-nowrap text-white font-semibold">
                Check All Industries
              </span>
            </div>
            <svg
              viewBox="0 0 14 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-2.5 h-2.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0"
            >
              <path
                d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
