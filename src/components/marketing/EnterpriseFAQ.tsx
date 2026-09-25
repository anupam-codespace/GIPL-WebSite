"use client";

import React, { useState } from "react";
import { ArrowUpRight, ArrowDownLeft } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: "who-is-globizhub",
    question: "Who is Globizhub India Private Limited?",
    answer:
      "Globizhub is a DPIIT-recognized enterprise technology company headquartered in India. We engineer scalable AI systems, custom software, cloud infrastructure, and manage sovereign business verticals across healthcare, supply chain, and global commerce.",
  },
  {
    id: "services-and-products",
    question: "What core technology services and software products do you offer?",
    answer:
      "We provide end-to-end custom software engineering, cloud architecture, and AI automation. We also develop proprietary SaaS platforms including Patholab.Cloud (Healthcare LIMS), TeamHub (Enterprise HRMS), Bungzo (ERP), and Enterprise IMS.",
  },
  {
    id: "allied-verticals",
    question: "What are Globizhub's Allied Business Verticals?",
    answer:
      "Beyond digital engineering, Globizhub operates four specialized commercial divisions: E&M Fashion Brand (lifestyle apparel), Freight Forwarding & Logistics (multimodal air, sea & road cargo), Leather Products Manufacturing (export atelier), and Cross-Border Import & Export.",
  },
  {
    id: "certifications-accreditations",
    question: "What certifications and accreditations does Globizhub hold?",
    answer:
      "Globizhub is recognized by Startup India (DPIIT), registered with MSME, and certified under ISO 9001:2015 (Quality), ISO/IEC 27001:2022 (Information Security), and ISO 20000-1:2018 (IT Service Management).",
  },
  {
    id: "delivery-centers",
    question: "Where are Globizhub's development centers and offices located?",
    answer:
      "We operate a distributed national delivery grid with offices in Bengaluru (Headquarters), Guwahati (Regional Center), Chennai (Tech Center), and Delhi (Corporate Office).",
  },
  {
    id: "ip-security",
    question: "How do you protect client data and intellectual property (IP)?",
    answer:
      "Every engagement includes strict NDAs, complete IP transfer on delivery, and zero training on client proprietary data. Systems are deployed with AES-256 encryption in compliance with global ISO 27001 security standards.",
  },
];

export default function EnterpriseFAQ() {
  // First item open by default, exactly matching the reference screenshot
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      className="relative py-24 sm:py-32 overflow-hidden text-white font-['Plus_Jakarta_Sans',sans-serif]"
      id="faq"
      style={{
        background: `
          radial-gradient(ellipse 95% 55% at 50% 50%, rgba(26, 92, 114, 0.45) 0%, rgba(14, 52, 66, 0.28) 45%, transparent 75%),
          linear-gradient(180deg, #071C25 0%, #0A2733 32%, #0F3B4A 50%, #0A2733 68%, #05141B 100%)
        `,
      }}
    >
      {/* Subtle Luminous Horizontal Light Beam across center */}
      <div className="absolute top-1/2 left-0 right-0 h-[380px] -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(40,130,160,0.18)_0%,transparent_70%)] pointer-events-none blur-3xl" />

      <div className="max-w-[780px] mx-auto px-6 sm:px-8 relative z-10">
        {/* Headline: Frequently asked questions */}
        <h2 className="text-center text-4xl sm:text-5xl lg:text-[54px] font-medium tracking-tight text-white leading-[1.12] mb-12 sm:mb-16">
          Frequently asked
          <br />
          questions
        </h2>

        {/* Accordion Cards List */}
        <div className="space-y-3 sm:space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                onClick={() => toggleFAQ(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleFAQ(index);
                  }
                }}
                className={`rounded-2xl transition-all duration-300 backdrop-blur-md overflow-hidden border cursor-pointer select-none ${
                  isOpen
                    ? "bg-white/[0.08] border-white/20 shadow-xl shadow-cyan-950/40"
                    : "bg-white/[0.05] hover:bg-white/[0.07] border-white/10 hover:border-white/15"
                }`}
              >
                {/* Header Row */}
                <div className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 transition-colors">
                  <span className="text-sm sm:text-base font-normal text-white tracking-tight">
                    {faq.question}
                  </span>

                  {/* Right Square Pill Icon */}
                  <div
                    className={`w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-xl flex items-center justify-center shrink-0 border transition-all duration-300 ${
                      isOpen
                        ? "bg-white/[0.12] border-white/25 text-[#86EFAC]"
                        : "bg-white/[0.06] border-white/10 text-white/80"
                    }`}
                  >
                    {isOpen ? (
                      <ArrowDownLeft className="w-4 h-4 transition-transform duration-300" />
                    ) : (
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300" />
                    )}
                  </div>
                </div>

                {/* Animated Expandable Answer Content */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 pb-5 sm:pb-6"
                      : "grid-rows-[0fr] opacity-0 pb-0 pointer-events-none"
                  }`}
                >
                  <div className="overflow-hidden px-5 sm:px-6">
                    <p className="text-white/75 text-xs sm:text-[13px] leading-relaxed max-w-[620px] font-normal pt-1">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
