"use client";

import React from "react";

interface TechAlignmentBannerProps {
  onOpenConsultation?: () => void;
}

export default function TechAlignmentBanner({ onOpenConsultation }: TechAlignmentBannerProps) {
  return (
    <section className="py-12 sm:py-16 bg-white relative overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden bg-gradient-to-r from-[#020B24] via-[#041646] to-[#0A2A78] border border-blue-500/20 shadow-[0_24px_60px_rgba(3,17,56,0.35)]">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 items-center relative z-10">
            {/* Left Content Column (6 cols on lg) */}
            <div className="lg:col-span-6 xl:col-span-6 p-8 sm:p-12 lg:p-14 xl:p-16 flex flex-col items-center lg:items-start text-center lg:text-left justify-center">
              {/* Globizhub Growth Roadmap Headline */}
              <h2 className="text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] font-normal text-white tracking-tight leading-[1.22] mb-5">
                You’ve seen how we helped
                <br />
                <strong className="font-extrabold text-white">Patholab.cloud</strong>,{" "}
                <strong className="font-extrabold text-white">Bungzo</strong>, and{" "}
                <strong className="font-extrabold text-white">Enterprise Leaders</strong>
                <br />
                reclaim their market edge.
              </h2>

              {/* Subtitle with bold 4x operational improvements */}
              <p className="text-white/80 text-xs sm:text-sm lg:text-[15px] leading-relaxed mb-8 max-w-xl font-normal">
                From 70% faster turnaround times to{" "}
                <strong className="font-bold text-white">4× operational improvements</strong>, our
                engineering goes beyond code to deliver measurable ROI.
              </p>

              {/* White Pill Consultation Button with Rolling Text Swap */}
              <button
                onClick={onOpenConsultation}
                type="button"
                className="group relative inline-flex items-center justify-center mx-auto lg:mx-0 px-8 sm:px-9 py-3.5 sm:py-4 rounded-full bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs sm:text-sm tracking-tight shadow-xl hover:shadow-2xl hover:scale-105 active:scale-[0.98] transition-all duration-200 cursor-pointer overflow-hidden"
              >
                <div className="relative h-5 overflow-hidden flex flex-col justify-center">
                  <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full whitespace-nowrap">
                    Consult our Experts for Growth Roadmap
                  </span>
                  <span className="absolute top-full left-0 block transition-transform duration-300 ease-out group-hover:-translate-y-full whitespace-nowrap text-slate-950 font-bold">
                    Consult our Experts for Growth Roadmap
                  </span>
                </div>
              </button>
            </div>

            {/* Right Graphic Column (6 cols on lg) with 3D Glass Growth Arrow */}
            <div className="lg:col-span-6 xl:col-span-6 relative h-[300px] sm:h-[380px] lg:h-[440px] xl:h-[480px] w-full overflow-hidden flex items-center justify-center lg:border-l lg:border-white/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/glass_growth_arrow.jpg"
                alt="Consult our Experts for Growth Roadmap"
                className="w-full h-full object-cover object-center lg:object-right select-none pointer-events-none"
                loading="eager"
              />
              {/* Soft Gradient Mask for seamless blending on left side */}
              <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#041646]/80 via-transparent to-transparent pointer-events-none hidden lg:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
