"use client";

import React from "react";

interface GlobizhubLogoProps {
  className?: string;
  size?: number;
}

export default function GlobizhubLogo({ className = "w-8 h-8", size }: GlobizhubLogoProps) {
  const style = size ? { width: size, height: size } : undefined;

  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-label="Globizhub Logo"
    >
      <defs>
        {/* Blue Gradient (Top Figure) */}
        <linearGradient id="gh-blue-head" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00A3FF" />
          <stop offset="100%" stopColor="#0066EE" />
        </linearGradient>
        <linearGradient id="gh-blue-outer" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00C2FF" />
          <stop offset="50%" stopColor="#0088FF" />
          <stop offset="100%" stopColor="#0055D4" />
        </linearGradient>
        <linearGradient id="gh-blue-inner" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#0284C7" />
        </linearGradient>

        {/* Orange/Amber Gradient (Right Figure) */}
        <linearGradient id="gh-orange-head" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDBA74" />
          <stop offset="100%" stopColor="#EA580C" />
        </linearGradient>
        <linearGradient id="gh-orange-outer" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDE047" />
          <stop offset="40%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
        <linearGradient id="gh-orange-inner" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FB923C" />
          <stop offset="100%" stopColor="#C2410C" />
        </linearGradient>

        {/* Silver/Slate Gradient (Left Figure) */}
        <linearGradient id="gh-silver-head" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#CBD5E1" />
          <stop offset="100%" stopColor="#64748B" />
        </linearGradient>
        <linearGradient id="gh-silver-outer" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E2E8F0" />
          <stop offset="50%" stopColor="#94A3B8" />
          <stop offset="100%" stopColor="#475569" />
        </linearGradient>
        <linearGradient id="gh-silver-inner" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#94A3B8" />
          <stop offset="100%" stopColor="#334155" />
        </linearGradient>

        {/* Glow Filters */}
        <filter id="gh-glow-blue" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#0088FF" floodOpacity="0.35" />
        </filter>
        <filter id="gh-glow-orange" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#F59E0B" floodOpacity="0.35" />
        </filter>
        <filter id="gh-glow-silver" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#64748B" floodOpacity="0.3" />
        </filter>
      </defs>

      {/* 1. BLUE FIGURE (TOP) */}
      <g filter="url(#gh-glow-blue)">
        <circle cx="200" cy="50" r="28" fill="url(#gh-blue-head)" />
        <path
          d="M 45 145 C 70 85, 140 65, 200 85 C 245 100, 280 135, 305 210 C 265 170, 215 135, 160 130 C 115 125, 75 135, 45 145 Z"
          fill="url(#gh-blue-outer)"
        />
        <path
          d="M 85 185 C 110 135, 165 120, 215 135 C 255 150, 275 185, 290 235 C 255 200, 210 175, 165 175 C 130 175, 105 180, 85 185 Z"
          fill="url(#gh-blue-inner)"
        />
      </g>

      {/* 2. ORANGE FIGURE (RIGHT) */}
      <g filter="url(#gh-glow-orange)">
        <circle cx="348" cy="305" r="28" fill="url(#gh-orange-head)" />
        <path
          d="M 252 82 C 308 118, 335 185, 318 245 C 305 290, 268 322, 195 345 C 238 310, 268 262, 270 205 C 272 160, 262 120, 252 82 Z"
          fill="url(#gh-orange-outer)"
        />
        <path
          d="M 220 120 C 265 150, 285 200, 270 248 C 258 285, 225 310, 172 328 C 208 298, 230 258, 230 215 C 230 180, 225 148, 220 120 Z"
          fill="url(#gh-orange-inner)"
        />
      </g>

      {/* 3. SILVER/SLATE FIGURE (LEFT) */}
      <g filter="url(#gh-glow-silver)">
        <circle cx="48" cy="305" r="28" fill="url(#gh-silver-head)" />
        <path
          d="M 275 342 C 215 372, 142 355, 95 315 C 60 282, 48 240, 52 165 C 72 215, 110 255, 165 272 C 210 288, 250 292, 275 342 Z"
          fill="url(#gh-silver-outer)"
        />
        <path
          d="M 235 305 C 190 328, 138 318, 102 285 C 78 258, 70 225, 78 170 C 95 208, 128 238, 170 250 C 205 260, 225 278, 235 305 Z"
          fill="url(#gh-silver-inner)"
        />
      </g>
    </svg>
  );
}
