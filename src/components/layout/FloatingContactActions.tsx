"use client";

import React from "react";
import { MessageSquare, Phone, MessageCircle } from "lucide-react";

interface FloatingContactActionsProps {
  onOpenConsultation: () => void;
}

export default function FloatingContactActions({ onOpenConsultation }: FloatingContactActionsProps) {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end">
      {/* WhatsApp Quick Action */}
      <a
        href="https://wa.me/919401317482?text=Hello%20Globizhub%2C%20I%20would%20like%20to%20discuss%20a%20project"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-200 group relative cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="absolute right-14 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-semibold whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity shadow-md">
          Chat on WhatsApp
        </span>
      </a>

      {/* Direct Phone Call */}
      <a
        href="tel:+918402010207"
        className="w-12 h-12 rounded-full bg-sky-600 text-white flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-200 group relative cursor-pointer"
        aria-label="Call Globizhub"
      >
        <Phone className="w-5 h-5 fill-current" />
        <span className="absolute right-14 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-semibold whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity shadow-md">
          Call: +91 8402010207
        </span>
      </a>

      {/* Consultation Trigger */}
      <button
        onClick={onOpenConsultation}
        className="w-12 h-12 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-200 group relative cursor-pointer"
        aria-label="Request Consultation"
      >
        <MessageSquare className="w-5 h-5" />
        <span className="absolute right-14 px-3 py-1.5 rounded-lg bg-slate-900 text-white text-xs font-semibold whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity shadow-md">
          Get Expert Consultation
        </span>
      </button>
    </div>
  );
}
