import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Home, Compass, PhoneCall, Wifi, Server, GitBranch, Globe, Shield, Zap, Database } from "lucide-react";

export const metadata: Metadata = {
  title: "404 — Page Not Found | Globizhub",
  description: "The page you are looking for could not be found. Return to the Globizhub homepage or explore our enterprise solutions.",
  robots: { index: false, follow: false },
};

// Floating icons with staggered animation configs
const FLOATING_ICONS = [
  { Icon: Server,    size: 20, delay: "0s",      duration: "3.2s", x: "8%",  y: "20%", opacity: 0.18 },
  { Icon: Wifi,      size: 16, delay: "0.6s",    duration: "4.1s", x: "18%", y: "65%", opacity: 0.14 },
  { Icon: Shield,    size: 22, delay: "1.1s",    duration: "3.7s", x: "82%", y: "18%", opacity: 0.16 },
  { Icon: Database,  size: 18, delay: "0.3s",    duration: "4.5s", x: "88%", y: "60%", opacity: 0.12 },
  { Icon: Globe,     size: 24, delay: "0.9s",    duration: "3.4s", x: "5%",  y: "45%", opacity: 0.10 },
  { Icon: GitBranch, size: 17, delay: "1.5s",    duration: "4.8s", x: "92%", y: "38%", opacity: 0.15 },
  { Icon: Zap,       size: 15, delay: "0.4s",    duration: "3.9s", x: "25%", y: "80%", opacity: 0.12 },
  { Icon: Server,    size: 14, delay: "1.8s",    duration: "4.3s", x: "75%", y: "78%", opacity: 0.10 },
];

export default function NotFound() {
  return (
    <main
      className="min-h-screen text-white flex flex-col items-center justify-center px-6 relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #07090E 0%, #090d1a 50%, #050810 100%)" }}
    >
      {/* Animated floating background icons */}
      {FLOATING_ICONS.map(({ Icon, size, delay, duration, x, y, opacity }, i) => (
        <div
          key={i}
          className="absolute pointer-events-none"
          style={{
            left: x,
            top: y,
            opacity,
            animation: `not-found-float ${duration} ease-in-out infinite`,
            animationDelay: delay,
          }}
        >
          <Icon width={size} height={size} strokeWidth={1.5} />
        </div>
      ))}

      {/* Ambient glow radial */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none rounded-full -z-10"
        style={{
          filter: "blur(120px)",
          background: "radial-gradient(ellipse, rgba(37,99,235,0.18) 0%, rgba(6,182,212,0.08) 55%, transparent 75%)",
        }}
      />

      {/* Main card */}
      <div className="max-w-lg w-full text-center relative z-10 py-16">

        {/* Globizhub monogram badge — floating animation */}
        <div
          className="w-16 h-16 rounded-2xl mx-auto mb-8 flex items-center justify-center font-black text-2xl text-white shadow-2xl"
          style={{
            background: "linear-gradient(135deg, #1d4ed8 0%, #0ea5e9 100%)",
            boxShadow: "0 0 40px rgba(37,99,235,0.35), 0 8px 32px rgba(0,0,0,0.4)",
            animation: "not-found-float-main 3.5s ease-in-out infinite",
          }}
        >
          G
        </div>

        {/* 404 gradient number */}
        <div
          className="text-8xl sm:text-[9rem] font-black tracking-tighter mb-4 leading-none select-none"
          style={{
            background: "linear-gradient(135deg, #3b82f6 0%, #38bdf8 50%, #67e8f9 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          404
        </div>

        {/* Headline */}
        <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
          System Route Not Found
        </h1>

        {/* Subtitle */}
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-10 max-w-md mx-auto">
          The enterprise resource or digital pathway you requested does not exist,
          has been decommissioned, or moved to a new architecture.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm transition-all shadow-lg hover:scale-105 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%)",
              boxShadow: "0 4px 20px rgba(37,99,235,0.35)",
            }}
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm border transition-all hover:scale-105 active:scale-95"
            style={{
              background: "rgba(255,255,255,0.06)",
              borderColor: "rgba(255,255,255,0.15)",
              color: "white",
            }}
          >
            <Compass className="w-4 h-4" />
            <span>Explore Solutions</span>
          </Link>

          <a
            href="https://calendly.com/globizhub-support/30min"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all hover:scale-105 active:scale-95"
            style={{
              background: "rgba(255,255,255,0.08)",
              borderColor: "rgba(255,255,255,0.15)",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "#7dd3fc",
            }}
          >
            <PhoneCall className="w-4 h-4" />
            <span>Book a Call</span>
          </a>
        </div>

        {/* Telemetry footer */}
        <div className="mt-12 pt-6 border-t border-white/[0.08] flex items-center justify-center gap-3 text-[11px] text-slate-600 font-mono tracking-wider">
          <span>STATUS: 404_NOT_FOUND</span>
          <span className="text-slate-700">·</span>
          <span>CLUSTER: EDGE_IN_BLR</span>
        </div>
      </div>

      {/* Inline keyframe styles */}
      <style>{`
        @keyframes not-found-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
        @keyframes not-found-float-main {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-10px) scale(1.03); }
        }
      `}</style>
    </main>
  );
}
