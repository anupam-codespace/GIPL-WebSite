"use client";

import React from "react";
import Image from "next/image";

interface DigitalGrowthBannerProps {
  onOpenConsultation?: () => void;
}

export default function DigitalGrowthBanner({ onOpenConsultation }: DigitalGrowthBannerProps) {
  return (
    <section className="py-12 sm:py-16 bg-white relative overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        <div className="relative rounded-[28px] sm:rounded-[36px] lg:rounded-[40px] overflow-hidden bg-white border border-slate-200/80 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Left Content Column (6 cols on lg) */}
            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-14 flex flex-col items-start justify-center relative z-10">
              {/* Brand Logo */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-7 h-7 rounded-lg bg-[#0052FF] text-white flex items-center justify-center font-bold text-xs shadow-sm">
                  ✦
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-xl font-bold tracking-tight text-slate-900">
                    globizhub
                  </span>
                  <span className="text-[11px] uppercase tracking-widest text-[#0052FF] font-extrabold">
                    DIGITAL
                  </span>
                </div>
              </div>

              {/* Bold Blue Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#0052FF] tracking-tight leading-[1.12] mb-4">
                Built It?
                <br />
                Now Let&apos;s Market It!
              </h2>

              {/* Subtitle */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 max-w-lg font-normal">
                From the team that understands your tech stack to the marketing experts who know your audience. Complete your digital success story with Globizhub Digital.
              </p>

              {/* Royal Blue Button */}
              <button
                onClick={onOpenConsultation}
                className="px-8 sm:px-9 py-3.5 sm:py-4 rounded-full bg-[#0052FF] hover:bg-blue-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-500/30 hover:shadow-blue-500/45 hover:scale-105 active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                Complete Your Success Story
              </button>
            </div>

            {/* Right Graphic Column (6 cols on lg) */}
            <div className="lg:col-span-6 relative h-[320px] sm:h-[420px] lg:h-[480px] w-full overflow-hidden">
              <Image
                src="/images/built_it_market_it.jpg"
                alt="Built It? Now Let's Market It!"
                fill
                className="object-cover object-center"
              />
              {/* Soft Gradient Mask for seamless blending on left side */}
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white via-white/40 to-transparent pointer-events-none hidden lg:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
