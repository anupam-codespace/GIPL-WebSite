"use client";

import React, { useState, useEffect } from "react";
import { Search, X } from "lucide-react";

interface CommandModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SearchItem {
  title: string;
  category: string;
  href: string;
  desc: string;
}

const searchItems: SearchItem[] = [
  { title: "Autonomous AI Agents & LLM Fine-Tuning", category: "Service", href: "#services", desc: "Enterprise RAG, multi-agent workflows, vLLM" },
  { title: "Cloud Architecture & DevOps Modernization", category: "Service", href: "#services", desc: "Kubernetes, Terraform, multi-region failover" },
  { title: "Patholab.Cloud (Diagnostic LIMS)", category: "Product", href: "/#products-showcase", desc: "Cloud diagnostic intelligence with analyzer sync & WhatsApp reports" },
  { title: "TeamHub (Workforce OS)", category: "Product", href: "/#products-showcase", desc: "GPS-fenced biometric attendance, sprint tracking & automated payroll" },
  { title: "Bungzo (Quick-Commerce)", category: "Product", href: "/#products-showcase", desc: "Hyperlocal delivery engine with 18-min dispatch routing" },
  { title: "GlobizLibrary (Academic RFID)", category: "Product", href: "/#products-showcase", desc: "Digital academic repository managing 250,000+ titles with RFID kiosks" },
  { title: "Enterprise IMS (Inventory OS)", category: "Product", href: "/#products-showcase", desc: "Multi-warehouse inventory OS with automated reorder triggers" },
  { title: "FinTech Real-Time Settlement Engine", category: "Case Study", href: "#case-studies", desc: "+340% throughput, 99.999% SLA" },
  { title: "HealthTech Clinical AI Copilot", category: "Case Study", href: "#case-studies", desc: "-78% triage latency, HIPAA compliant" },
  { title: "Interactive Project Proposal Wizard", category: "Consultation", href: "#proposal", desc: "Instant architecture estimate & call scheduling" },
  { title: "Enterprise FAQ & Compliance", category: "FAQ", href: "#faq", desc: "ISO 9001/27001/20000, zero-trust policies" },
];

export default function CommandModal({ isOpen, onClose }: CommandModalProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filtered = searchItems.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.desc.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-[#070A0F]/85 backdrop-blur-md flex items-start justify-center pt-[15vh] px-4 animate-in fade-in duration-150"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-[620px] bg-[#0C111A] border border-[#20E3D2]/40 rounded-2xl shadow-[0_20px_70px_rgba(0,0,0,0.6),0_0_40px_rgba(32,227,210,0.2)] overflow-hidden"
      >
        {/* Search Header */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10">
          <Search className="w-5 h-5 text-[#20E3D2] shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search capabilities, products, case studies, or FAQ..."
            className="w-full bg-transparent text-white text-sm outline-none placeholder:text-[#718096]"
            autoFocus
          />
          <button onClick={onClose} className="p-1 rounded text-[#718096] hover:text-white">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[360px] overflow-y-auto p-3 space-y-1">
          {filtered.length === 0 ? (
            <div className="py-8 text-center text-xs text-[#718096]">No matching results found.</div>
          ) : (
            filtered.map((item) => (
              <a
                key={item.title}
                href={item.href}
                onClick={onClose}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-[#20E3D2]/10 transition-colors group cursor-pointer"
              >
                <div>
                  <div className="text-sm font-semibold text-white group-hover:text-[#20E3D2] transition-colors">
                    {item.title}
                  </div>
                  <div className="text-xs text-[#718096]">{item.desc}</div>
                </div>
                <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 font-mono text-[10px] text-[#A78BFA] shrink-0">
                  {item.category}
                </span>
              </a>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
