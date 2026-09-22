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
    id: "realistic-photos",
    question: "How realistic will the photos look?",
    answer:
      "Our algorithm physically calculates the refraction of light through glass, depth of field, and shadow fall. The final image takes into account the texture of your product's material, making it indistinguishable from professional studio photography.",
  },
  {
    id: "complex-prompts",
    question: "Do I need to be able to write complex prompts?",
    answer:
      "Not at all. Our intuitive interface allows you to select styles, lighting setups, and environments visually. You can also upload reference moodboards and our AI will automatically infer the optimal rendering parameters without requiring prompt engineering.",
  },
  {
    id: "entire-product-line",
    question: "Can I process an entire product line at once?",
    answer:
      "Yes, our batch processing engine allows you to upload hundreds of SKU models or image angles simultaneously, maintaining unified lighting consistency, color accuracy, and brand guidelines across your entire collection.",
  },
  {
    id: "requirements-original-photo",
    question: "What are the requirements for the original product photo?",
    answer:
      "Any clean photo taken on a smartphone or camera under even lighting works seamlessly. Our segmentation pipeline isolates your product with sub-pixel edge detection, removes unwanted reflections, and recreates realistic shadows.",
  },
  {
    id: "enterprise-security",
    question: "How does Globizhub ensure enterprise security and IP ownership?",
    answer:
      "All models and infrastructure are deployed in isolated private VPCs with AES-256 encryption. We guarantee complete intellectual property (IP) transfer, zero training on client data, and compliance with ISO 27001, SOC2, and HIPAA.",
  },
];

export default function EnterpriseFAQ() {
  // First item open by default, exactly matching the reference screenshot
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
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
                className={`rounded-2xl transition-all duration-300 backdrop-blur-md overflow-hidden border ${
                  isOpen
                    ? "bg-white/[0.08] border-white/20 shadow-xl shadow-cyan-950/40"
                    : "bg-white/[0.05] hover:bg-white/[0.07] border-white/10 hover:border-white/15"
                }`}
              >
                {/* Header Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 cursor-pointer select-none transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-normal text-white tracking-tight">
                    {faq.question}
                  </span>

                  {/* Right Square Pill Icon */}
                  <div
                    className={`w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-xl flex items-center justify-center shrink-0 border transition-all duration-300 ${
                      isOpen
                        ? "bg-white/[0.12] border-white/25 text-[#86EFAC]"
                        : "bg-white/[0.06] border-white/10 text-white/80 group-hover:text-white"
                    }`}
                  >
                    {isOpen ? (
                      <ArrowDownLeft className="w-4 h-4 transition-transform duration-300" />
                    ) : (
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300" />
                    )}
                  </div>
                </button>

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
