"use client";

import React, { useState } from "react";
import Link from "next/link";

interface TransformationSectionProps {
  onOpenConsultation?: () => void;
}

const services = [
  {
    id: "consulting",
    title: "Strategic Technology Consulting",
    titleDisplay: (
      <>
        Strategic Technology
        <br className="hidden sm:inline" /> Consulting
      </>
    ),
    description:
      "From architecture audits to digital transformation strategy, we help leaders align technology with business goals for measurable ROI.",
    buttonLabel: "View Consulting Services",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 group-hover:scale-110"
      >
        <path
          d="M3.51953 11.8393V3.96675C3.51953 3.58248 3.67217 3.21394 3.9439 2.94221C4.21563 2.67048 4.58419 2.51782 4.96846 2.51782H19.0582C19.4426 2.51782 19.8112 2.67048 20.0829 2.94221C20.3546 3.21394 20.5072 3.58248 20.5072 3.96675V4.87497"
          stroke="#1163FB"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.11523 9.62073L3.49454 12L5.87385 9.62073"
          stroke="#1163FB"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.51926 15.4821V17.1352L2.07031 21.482L7.86607 20.0331H19.058C19.4423 20.0331 19.8109 19.8805 20.0826 19.6088C20.3543 19.3371 20.5069 18.9685 20.5069 18.5841V8.35706"
          stroke="#0f172a"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.127 10.7113L20.5062 8.33203L22.8856 10.7113"
          stroke="#0f172a"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "product-engineering",
    title: "Digital Product Development & Engineering",
    titleDisplay: (
      <>
        Digital Product
        <br className="hidden sm:inline" /> Development & Engineering
      </>
    ),
    description:
      "As your digital product engineering company, we handle the full lifecycle of software development—from cloud-native applications to complex ERP systems.",
    buttonLabel: "View Product Engineering Services",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 group-hover:scale-110"
      >
        <path
          d="M22.2857 3.42847H1.71432C1.24093 3.42847 0.857178 3.81223 0.857178 4.28561V17.9999C0.857178 18.4732 1.24093 18.857 1.71432 18.857H22.2857C22.7591 18.857 23.1429 18.4732 23.1429 17.9999V4.28561C23.1429 3.81223 22.7591 3.42847 22.2857 3.42847Z"
          stroke="#0f172a"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.2857 18.8572L8.57141 23.1429"
          stroke="#0f172a"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.7142 18.8572L15.4285 23.1429"
          stroke="#0f172a"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.85718 23.1428H17.1429"
          stroke="#0f172a"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.71423 9L4.71423 11.5714L7.28566 13.7143"
          stroke="#1163FB"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.7143 9.42847L19.2858 11.5713L16.2858 14.1428"
          stroke="#1163FB"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.7142 14.9999L13.2857 7.28564"
          stroke="#1163FB"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "ai-data",
    title: "AI, Data and Analytics Solutions",
    titleDisplay: (
      <>
        AI, Data and
        <br className="hidden sm:inline" /> Analytics Solutions
      </>
    ),
    description:
      "We integrate advanced AI, generative AI, and machine learning models to automate operations, predict trends, and personalize customer experiences at scale.",
    buttonLabel: "View Artificial Intelligence Services",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 group-hover:scale-110"
      >
        <path
          d="M9.05311 14.1101H1.93954C1.47735 14.1101 1.10266 14.4848 1.10266 14.947V22.0605C1.10266 22.5227 1.47735 22.8974 1.93954 22.8974H9.05311C9.51532 22.8974 9.89001 22.5227 9.89001 22.0605V14.947C9.89001 14.4848 9.51532 14.1101 9.05311 14.1101Z"
          stroke="#0f172a"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.0607 14.1101H14.9471C14.4849 14.1101 14.1102 14.4848 14.1102 14.947V22.0605C14.1102 22.5227 14.4849 22.8974 14.9471 22.8974H22.0607C22.5229 22.8974 22.8975 22.5227 22.8975 22.0605V14.947C22.8975 14.4848 22.5229 14.1101 22.0607 14.1101Z"
          stroke="#0f172a"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.05311 1.10229H1.93954C1.47735 1.10229 1.10266 1.47698 1.10266 1.93918V9.05275C1.10266 9.51495 1.47735 9.88964 1.93954 9.88964H9.05311C9.51532 9.88964 9.89001 9.51495 9.89001 9.05275V1.93918C9.89001 1.47698 9.51532 1.10229 9.05311 1.10229Z"
          stroke="#0f172a"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.9639 6.14456C13.4486 6.05492 13.4486 5.31519 13.9639 5.22555C15.8307 4.90078 17.3154 3.47887 17.7207 1.62785L17.7517 1.48596C17.8632 0.97669 18.5883 0.97352 18.7042 1.4818L18.7419 1.64715C19.1622 3.48944 20.6473 4.89934 22.509 5.2232C23.0269 5.31331 23.0269 6.05681 22.509 6.14691C20.6473 6.47079 19.1622 7.88069 18.7419 9.72296L18.7042 9.88832C18.5883 10.3966 17.8632 10.3934 17.7517 9.88416L17.7207 9.74227C17.3154 7.89125 15.8307 6.46935 13.9639 6.14456Z"
          stroke="#1163FB"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "cloud-cybersecurity",
    title: "Cloud Operations and Cybersecurity",
    titleDisplay: (
      <>
        Cloud Operations
        <br className="hidden sm:inline" /> and Cybersecurity
      </>
    ),
    description:
      "As your IT service company, we engineer cloud-native environments rooted in Zero Trust principles, ensuring your infrastructure is as scalable as it is impenetrable.",
    buttonLabel: "View Cybersecurity Services",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 group-hover:scale-110"
      >
        <path
          d="M10.2857 8.12575C15.493 8.12575 19.7143 6.49862 19.7143 4.49146C19.7143 2.48431 15.493 0.857178 10.2857 0.857178C5.07849 0.857178 0.857178 2.48431 0.857178 4.49146C0.857178 6.49862 5.07849 8.12575 10.2857 8.12575Z"
          stroke="#0f172a"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.7142 7.71456V4.4917"
          stroke="#0f172a"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M0.857178 4.4917V16.0803C0.857178 18.0002 4.69718 19.5088 9.56575 19.6974"
          stroke="#0f172a"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.2857 13.8514C5.14289 13.9199 0.857178 12.2914 0.857178 10.2856"
          stroke="#0f172a"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.7143 16.2856H22.2857C22.8 16.2856 23.1429 16.6285 23.1429 17.1428V22.2856C23.1429 22.7999 22.8 23.1428 22.2857 23.1428H13.7143C13.2 23.1428 12.8572 22.7999 12.8572 22.2856V17.1428C12.8572 16.6285 13.2 16.2856 13.7143 16.2856Z"
          stroke="#1163FB"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.5714 16.2857V14.5714C14.5714 12.6857 16.1143 11.1428 18 11.1428C19.8857 11.1428 21.4286 12.6857 21.4286 14.5714V16.2857"
          stroke="#1163FB"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function TransformationSection({
  onOpenConsultation,
}: TransformationSectionProps) {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section className="relative w-full bg-white pt-24 sm:pt-28 pb-24 border-b border-slate-100 overflow-hidden">
      {/* Subtle modern background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none opacity-40 blur-3xl -z-10"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(17, 99, 251, 0.08), transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-[#0f172a] tracking-tight leading-[1.12]">
            <span>Beyond Development.</span>
            <span className="block mt-1 sm:mt-2">We Deliver Transformation.</span>
          </h2>
        </div>

        {/* 4-Column Grid with Vertical Border Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-b lg:border-l lg:border-r border-slate-200/80 bg-white">
          {services.map((item, index) => (
            <div
              key={item.id}
              className={`group flex flex-col justify-between p-6 sm:p-8 lg:p-6 xl:p-8 transition-all duration-300 hover:bg-slate-50/70 relative ${
                index !== 0 ? "border-t md:border-t-0" : ""
              } ${
                index % 2 !== 0 ? "md:border-l md:border-slate-200/80" : ""
              } ${
                index !== 0 ? "lg:border-l lg:border-slate-200/80" : ""
              }`}
            >
              {/* Top: Icon + Titles */}
              <div className="flex flex-col">
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-full bg-white border border-slate-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex items-center justify-center mb-8 transition-transform duration-300 group-hover:scale-105 group-hover:border-[#1163FB]/30">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-[22px] font-bold text-[#0f172a] tracking-tight mb-4 leading-snug group-hover:text-[#1163FB] transition-colors duration-200">
                  {item.titleDisplay}
                </h3>

                {/* Description */}
                <p className="text-[14px] sm:text-[15px] text-slate-600 font-normal leading-relaxed mb-10">
                  {item.description}
                </p>
              </div>

              {/* Bottom: Appinventiv Style Rolling Swap-Text Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="group/btn relative w-full sm:w-auto inline-flex items-center justify-center px-4 sm:px-5 py-2.5 rounded-full border border-slate-900 text-slate-900 bg-white text-xs sm:text-[13px] font-medium transition-all duration-300 hover:bg-slate-900 hover:text-white shadow-sm overflow-hidden"
                >
                  <span className="relative inline-flex flex-col h-[1.35em] overflow-hidden leading-[1.35em] whitespace-nowrap">
                    {/* Primary Text */}
                    <span className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:-translate-y-full whitespace-nowrap">
                      {item.buttonLabel}
                    </span>
                    {/* Cloned Hover Text (Slides up from bottom) */}
                    <span className="absolute top-full left-0 w-full text-center inline-block transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:-translate-y-full whitespace-nowrap">
                      {item.buttonLabel}
                    </span>
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Centered Bottom CTA: View All Services ↗ with Dual-Arrow Rolling Effect */}
        <div className="mt-14 sm:mt-16 text-center">
          <Link
            href="/services"
            className="group/all relative inline-flex items-center gap-2.5 px-8 py-3 rounded-full border border-[#1163FB] bg-white text-[#1163FB] text-sm sm:text-base font-semibold transition-all duration-300 hover:bg-[#1163FB] hover:text-white hover:shadow-[0_8px_25px_rgba(17,99,251,0.25)] overflow-hidden"
          >
            {/* Rolling Text */}
            <span className="relative inline-flex flex-col h-[1.35em] overflow-hidden leading-[1.35em]">
              <span className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/all:-translate-y-full">
                View All Services
              </span>
              <span className="absolute top-full left-0 w-full text-center inline-block transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/all:-translate-y-full">
                View All Services
              </span>
            </span>

            {/* Rolling Diagonal Arrow */}
            <span className="relative w-3.5 h-3.5 overflow-hidden inline-flex items-center justify-center">
              {/* Arrow 1 */}
              <svg
                width="12"
                height="12"
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/all:translate-x-3.5 group-hover/all:-translate-y-3.5 fill-current"
              >
                <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" />
              </svg>
              {/* Arrow 2 (Comes in from bottom-left) */}
              <svg
                width="12"
                height="12"
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -translate-x-3.5 translate-y-3.5 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/all:translate-x-0 group-hover/all:translate-y-0 fill-current"
              >
                <path d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
