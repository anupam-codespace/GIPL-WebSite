import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Compass, PhoneCall } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#07090E] text-white flex flex-col items-center justify-center px-6 relative overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] pointer-events-none rounded-full blur-[140px] opacity-20 -z-10"
        style={{
          background:
            "radial-gradient(circle, rgba(37, 99, 235, 0.6) 0%, rgba(6, 182, 212, 0.3) 50%, transparent 70%)",
        }}
      />

      <div className="max-w-xl w-full text-center relative z-10 py-16">
        {/* Monogram Badge */}
        <div className="w-14 h-14 rounded-2xl bg-[#2563EB]/20 border border-[#2563EB]/40 flex items-center justify-center text-[#38BDF8] font-bold text-2xl mx-auto mb-6 shadow-xl">
          G
        </div>

        {/* 404 Code */}
        <div className="text-7xl sm:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-[#38BDF8] to-cyan-400 mb-4">
          404
        </div>

        {/* Headline */}
        <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
          System Route Not Found
        </h1>

        {/* Subtitle */}
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8 max-w-md mx-auto">
          The enterprise resource or digital pathway you requested does not exist, has been decommissioned,
          or moved to a new architecture.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2563EB] hover:bg-blue-600 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-500/25 hover:scale-105 active:scale-95"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/#products-showcase"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-white font-medium text-sm border border-white/15 transition-all hover:scale-105 active:scale-95"
          >
            <Compass className="w-4 h-4" />
            <span>Explore Solutions</span>
          </Link>
        </div>

        {/* Telemetry Footer */}
        <div className="mt-12 pt-6 border-t border-white/10 flex items-center justify-center gap-3 text-xs text-slate-500 font-mono">
          <span>STATUS: 404_NOT_FOUND</span>
          <span>·</span>
          <span>CLUSTER: EDGE_IN_BLR</span>
        </div>
      </div>
    </main>
  );
}
