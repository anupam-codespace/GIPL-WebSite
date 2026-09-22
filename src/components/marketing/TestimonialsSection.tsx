"use client";

import React from "react";
import Image from "next/image";

interface TestimonialsSectionProps {
  onOpenConsultation?: () => void;
}

interface TestimonialItem {
  type: "quote" | "photo";
  quote?: string;
  authorName?: string;
  authorTitle?: string;
  avatarSrc?: string;
  photoSrc?: string;
  photoAlt?: string;
}

const row1: TestimonialItem[] = [
  {
    type: "quote",
    quote:
      "PARTNERING WITH GLOBIZHUB HAS BEEN A GAME CHANGER FOR OUR PRODUCT SCALE. THE SYSTEM RESILIENCE IS UNPARALLELED, AND THE SUB-15MS TRANSACTION SPEEDS SPEAK FOR THEMSELVES.",
    authorName: "JAMES WALKER",
    authorTitle: "Chief Technology Officer",
    avatarSrc: "/images/testimonial_cto.jpg",
  },
  {
    type: "photo",
    photoSrc: "/images/testimonial_cto.jpg",
    photoAlt: "Chief Technology Officer Executive",
  },
  {
    type: "quote",
    quote:
      "WE EVALUATED MULTIPLE TIER-1 ENGINEERING VENDORS. GLOBIZHUB DELIVERED OUR MULTI-REGION KUBERNETES AND AI PIPELINE IN RECORD TIME, REDUCING OUR INFRASTRUCTURE SPEND BY 62%.",
    authorName: "MICHAEL REYNOLDS",
    authorTitle: "VP of Engineering",
    avatarSrc: "/images/expert_advisor.jpg",
  },
  {
    type: "quote",
    quote:
      "PATHOLAB.CLOUD REVOLUTIONIZED OUR DIAGNOSTIC LAB OPERATIONS NATIONWIDE. REPORT TURNAROUND TIME DROPPED BY 70% AND 100% OF OUR CENTERS PASSED AUDIT WITH ZERO NON-CONFORMANCES.",
    authorName: "DR. ARUNACHALAM S.",
    authorTitle: "Managing Director, Diagnostic Network",
    avatarSrc: "/images/patholab_doctor_tablet.jpg",
  },
  {
    type: "photo",
    photoSrc: "/images/app_showcase_woman.jpg",
    photoAlt: "FinTech Mobile Platform Leader",
  },
];

const row2: TestimonialItem[] = [
  {
    type: "photo",
    photoSrc: "/images/testimonial_cpo.jpg",
    photoAlt: "Chief Product Officer",
  },
  {
    type: "quote",
    quote:
      "THE EMBEDDED ENGINEERING SQUAD INTEGRATED WITH OUR JIRA AND GITHUB WORKFLOWS SEAMLESSLY. THEIR ARCHITECTURAL RIGOR AND CODE QUALITY ACCELERATED OUR SPRINT VELOCITY BY 3X.",
    authorName: "LEO STERLING",
    authorTitle: "Head of Digital Infrastructure",
    avatarSrc: "/images/testimonial_cto.jpg",
  },
  {
    type: "quote",
    quote:
      "GLOBIZHUB'S AUTONOMOUS AI AGENTS AUTOMATED OUR MOST TEDIOUS CLINICAL WORKFLOWS WHILE STRICTLY MAINTAINING HIPAA AND ZERO-TRUST SECURITY STANDARDS. INVALUABLE PARTNERS.",
    authorName: "SARAH CHEN, MD",
    authorTitle: "Chief Medical Officer",
    avatarSrc: "/images/patholab_doctor_tablet.jpg",
  },
  {
    type: "photo",
    photoSrc: "/images/expert_advisor.jpg",
    photoAlt: "Senior Solutions Architect",
  },
  {
    type: "quote",
    quote:
      "BUNGZO'S FLEET ROUTING ENGINE REDUCED OUR FUEL OVERHEAD AND DRIVER DISPATCH DELAYS DRAMATICALLY. A TRULY ELITE ENTERPRISE SOFTWARE DEVELOPMENT FIRM.",
    authorName: "RAJIV MENON",
    authorTitle: "Chief Operating Officer",
    avatarSrc: "/images/bungzo_preview.jpg",
  },
];

export default function TestimonialsSection({ onOpenConsultation }: TestimonialsSectionProps) {
  return (
    <section className="py-24 sm:py-32 bg-slate-50 relative overflow-hidden" id="testimonials">
      <div className="max-w-[1400px] mx-auto px-6 mb-16 text-center">
        {/* Clean Executive Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold tracking-wide mb-4 shadow-sm">
          <span>Client Validation & Endorsements</span>
        </div>
        <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
          Trusted by Market Leaders Worldwide
        </h2>
        <p className="text-base sm:text-lg text-slate-600 max-w-[720px] mx-auto leading-relaxed font-normal">
          Direct feedback from enterprise CTOs, VPs of Engineering, and startup founders who scale their core platforms with Globizhub.
        </p>
      </div>

      {/* Row 1: Sliding Left-to-Right (animate-marquee-reverse) */}
      <div className="relative w-full overflow-hidden mb-8">
        <div className="animate-marquee-reverse flex items-stretch gap-6 py-2">
          {[...row1, ...row1, ...row1].map((item, idx) => (
            <div key={`r1-${idx}`} className="w-[320px] sm:w-[380px] shrink-0">
              {item.type === "quote" ? (
                <div className="h-full bg-white rounded-3xl border border-slate-200 p-8 flex flex-col justify-between shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div>
                    {/* Quotation Mark */}
                    <div className="text-4xl sm:text-5xl font-serif text-emerald-600 font-extrabold leading-none mb-4">
                      “
                    </div>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 leading-relaxed uppercase tracking-wide">
                      {item.quote}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border border-slate-200 shrink-0">
                      <Image
                        src={item.avatarSrc || "/images/expert_advisor.jpg"}
                        alt={item.authorName || "Author"}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-['Space_Grotesk'] text-xs sm:text-sm font-extrabold text-slate-900 tracking-wide uppercase">
                        {item.authorName}
                      </div>
                      <div className="text-[11px] text-slate-500 font-medium">
                        {item.authorTitle}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-full min-h-[300px] sm:min-h-[340px] relative rounded-3xl overflow-hidden border border-slate-200 shadow-md group">
                  <Image
                    src={item.photoSrc || "/images/testimonial_cto.jpg"}
                    alt={item.photoAlt || "Client"}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-bold">
                    <span className="bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                      Verified Client Partner
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Sliding Right-to-Left (animate-marquee) */}
      <div className="relative w-full overflow-hidden">
        <div className="animate-marquee flex items-stretch gap-6 py-2">
          {[...row2, ...row2, ...row2].map((item, idx) => (
            <div key={`r2-${idx}`} className="w-[320px] sm:w-[380px] shrink-0">
              {item.type === "quote" ? (
                <div className="h-full bg-white rounded-3xl border border-slate-200 p-8 flex flex-col justify-between shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div>
                    {/* Quotation Mark */}
                    <div className="text-4xl sm:text-5xl font-serif text-sky-600 font-extrabold leading-none mb-4">
                      “
                    </div>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 leading-relaxed uppercase tracking-wide">
                      {item.quote}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border border-slate-200 shrink-0">
                      <Image
                        src={item.avatarSrc || "/images/expert_advisor.jpg"}
                        alt={item.authorName || "Author"}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-['Space_Grotesk'] text-xs sm:text-sm font-extrabold text-slate-900 tracking-wide uppercase">
                        {item.authorName}
                      </div>
                      <div className="text-[11px] text-slate-500 font-medium">
                        {item.authorTitle}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-full min-h-[300px] sm:min-h-[340px] relative rounded-3xl overflow-hidden border border-slate-200 shadow-md group">
                  <Image
                    src={item.photoSrc || "/images/testimonial_cpo.jpg"}
                    alt={item.photoAlt || "Client"}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-bold">
                    <span className="bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                      Enterprise Technology Leader
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
