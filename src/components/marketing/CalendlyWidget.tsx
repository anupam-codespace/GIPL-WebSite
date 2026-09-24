"use client";

import React, { useEffect } from "react";
import Image from "next/image";

declare global {
  interface Window {
    Calendly?: {
      initBadgeWidget: (options: {
        url: string;
        text: string;
        color: string;
        textColor: string;
        branding?: boolean;
      }) => void;
      initPopupWidget: (options: { url: string }) => void;
      closePopupWidget?: () => void;
    };
  }
}

export default function CalendlyWidget() {
  useEffect(() => {
    // 1. Remove any legacy or injected rectangular badge widget
    const removeLegacyBadge = () => {
      document.querySelectorAll(".calendly-badge-widget").forEach((el) => el.remove());
    };
    removeLegacyBadge();

    // 2. Ensure Calendly stylesheet is injected
    const cssId = "calendly-widget-css";
    if (!document.getElementById(cssId)) {
      const link = document.createElement("link");
      link.id = cssId;
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }

    // 3. Ensure Calendly script is injected for popup handling
    const scriptId = "calendly-widget-js";
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.type = "text/javascript";
      script.async = true;
      script.onload = () => {
        removeLegacyBadge();
      };
      document.body.appendChild(script);
    }
  }, []);

  const handleOpenCalendly = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (typeof window !== "undefined" && window.Calendly?.initPopupWidget) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/globizhub-support?hide_gdpr_banner=1",
      });
    } else if (typeof window !== "undefined") {
      window.open(
        "https://calendly.com/globizhub-support?hide_gdpr_banner=1",
        "_blank",
        "noopener,noreferrer"
      );
    }
  };

  return (
    <aside
      aria-label="Schedule Consultation Floating Action"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 pointer-events-auto select-none"
    >
      <div className="relative group animate-schedule-float">
        {/* Subtle glow effect behind button */}
        <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-blue-500/30 via-indigo-500/30 to-fuchsia-500/30 blur-md opacity-75 group-hover:opacity-100 transition duration-300 pointer-events-none" />

        {/* Floating Circular Action Button */}
        <button
          type="button"
          onClick={handleOpenCalendly}
          aria-label="Schedule a consultation with Globizhub"
          title="Schedule time with us"
          className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white shadow-[0_12px_36px_rgba(0,0,0,0.35)] border-2 border-white hover:border-blue-400 p-2 sm:p-2.5 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95 group-hover:shadow-[0_16px_44px_rgba(37,99,235,0.45)]"
        >
          {/* Logo with clean contain rendering */}
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src="/images/schedule-bubble-logo.png"
              alt="Schedule time with us"
              width={56}
              height={56}
              className="w-full h-full object-contain pointer-events-none transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </div>

          {/* Glowing live indicator beacon at top-right */}
          <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-600 border-2 border-white shadow-sm" />
          </span>
        </button>

        {/* Desktop Tooltip */}
        <div className="absolute right-full mr-3.5 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-slate-900/95 border border-white/15 text-white text-xs font-semibold whitespace-nowrap shadow-2xl backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none hidden sm:flex items-center gap-1.5">
          <span>Schedule Consultation</span>
          <span className="text-[10px] text-blue-400 font-bold">● Live</span>
          {/* Tooltip caret */}
          <div className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-slate-900/95 pointer-events-none" />
        </div>
      </div>
    </aside>
  );
}
