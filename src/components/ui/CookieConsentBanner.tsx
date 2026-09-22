"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, X, Check, ShieldCheck } from "lucide-react";

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("ghpl_cookie_consent");
    if (!consent) {
      // Delay display slightly for smooth entrance
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("ghpl_cookie_consent", "all");
    setVisible(false);
  };

  const handleEssentialOnly = () => {
    localStorage.setItem("ghpl_cookie_consent", "essential");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside
      aria-label="Cookie Consent"
      className="fixed bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-auto sm:max-w-md z-50 animate-in fade-in slide-in-from-bottom-5 duration-500"
    >
      <div className="p-5 sm:p-6 rounded-2xl bg-[#0B0F19]/95 border border-white/15 text-white shadow-2xl backdrop-blur-xl ring-1 ring-black/40">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#2563EB]/20 border border-[#2563EB]/40 flex items-center justify-center text-[#38BDF8]">
              <Cookie className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white tracking-tight">
                Cookie Preferences
              </h3>
              <span className="text-[10px] text-white/50 flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                ISO 27001 Data Privacy
              </span>
            </div>
          </div>
          <button
            onClick={handleEssentialOnly}
            aria-label="Dismiss cookie banner"
            className="text-white/40 hover:text-white p-1 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed mb-4">
          Globizhub uses cookies and telemetry to improve performance, analyze secure platform traffic,
          and personalize enterprise software delivery. Read our{" "}
          <Link href="/privacy" className="text-[#38BDF8] underline underline-offset-2 hover:text-white">
            Privacy Policy
          </Link>
          .
        </p>

        <div className="flex items-center gap-2.5">
          <button
            onClick={handleAcceptAll}
            className="flex-1 py-2 px-3.5 rounded-xl bg-[#2563EB] hover:bg-blue-600 text-white font-semibold text-xs transition-all shadow-lg shadow-blue-500/25 active:scale-95 cursor-pointer flex items-center justify-center gap-1.5"
          >
            <Check className="w-3.5 h-3.5" />
            <span>Accept All</span>
          </button>
          <button
            onClick={handleEssentialOnly}
            className="py-2 px-3.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] text-white/80 hover:text-white font-medium text-xs border border-white/10 transition-all active:scale-95 cursor-pointer"
          >
            Essential Only
          </button>
        </div>
      </div>
    </aside>
  );
}
