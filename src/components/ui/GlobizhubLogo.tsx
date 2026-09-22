"use client";

import React from "react";
import Image from "next/image";

interface GlobizhubLogoProps {
  className?: string;
  size?: number;
}

export default function GlobizhubLogo({ className = "w-8 h-8", size }: GlobizhubLogoProps) {
  const dimension = size || 48;
  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 ${className}`}
      style={size ? { width: size, height: size } : undefined}
    >
      <Image
        src="/images/globizhub_official_logo.png"
        alt="Globizhub Official Logo"
        width={dimension}
        height={dimension}
        className="w-full h-full object-contain"
        priority
      />
    </div>
  );
}

