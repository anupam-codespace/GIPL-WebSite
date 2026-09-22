"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight, Rocket, TrendingUp, ShieldCheck, Users } from "lucide-react";

interface StrategicPathwaysProps {
  onOpenConsultation?: () => void;
}

export default function StrategicPathways({ onOpenConsultation }: StrategicPathwaysProps) {
  const [activeTab, setActiveTab] = useState<"startups" | "midmarket" | "enterprise" | "squads">("startups");

  return (
    <section className="py-20 sm:py-28 bg-slate-50 relative" id="pathways">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-[780px] mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold tracking-wide mb-4 shadow-sm">
            <span>Strategic Engagement Model</span>
          </div>
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Select Your Strategic Path
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Whether building a greenfield disruptor, modernizing multi-tier enterprise systems, or augmenting your in-house team, we calibrate our squads and architecture to your velocity.
          </p>
        </div>

        {/* 4 Interactive Pathway Tabs */}
        <div className="flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl bg-white border border-slate-200 max-w-[840px] mx-auto mb-12 shadow-sm">
          {[
            { id: "startups", label: "For High-Growth Startups", icon: Rocket },
            { id: "midmarket", label: "For Mid-Market Scaleups", icon: TrendingUp },
            { id: "enterprise", label: "For Global Enterprises", icon: ShieldCheck },
            { id: "squads", label: "Dedicated Squads", icon: Users },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? "bg-slate-900 text-white shadow-md"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-sky-400" : "text-slate-400"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Card: Startups */}
        {activeTab === "startups" && (
          <div className="white-card rounded-2xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
            <div className="lg:col-span-8">
              <div className="inline-block px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold mb-4">
                SEED TO SERIES B
              </div>
              <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                Zero-to-One Product Velocity & Investor-Grade Architecture
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                Launch your production MVP in under 60 days without incurring crippling technical debt. We provide full-stack product squads equipped with modern modular templates, automated CI/CD, and scalable database foundations.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-sm text-slate-700">
                  <Check className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                  <span><strong>60-Day MVP Delivery Sprint</strong> with automated test coverage and zero vendor lock-in.</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-700">
                  <Check className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                  <span><strong>Investor-ready technical due diligence</strong> and 100% intellectual property transfer.</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-700">
                  <Check className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                  <span><strong>Cost-efficient serverless & modular monolith</strong> keeping initial cloud spend minimal.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-50 border border-slate-200 rounded-xl p-8 flex flex-col justify-between h-full">
              <div>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Average Kickoff Time</span>
                <div className="font-['Space_Grotesk'] text-4xl font-extrabold text-slate-900 mt-2 mb-2">&lt; 7 Days</div>
                <p className="text-xs text-slate-600">
                  Complete squad assembly with dedicated Lead Architect and Product Designer.
                </p>
              </div>
              <button
                onClick={onOpenConsultation}
                className="mt-8 inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs tracking-wider uppercase shadow-md transition-all cursor-pointer"
              >
                <span>Build Your MVP</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Tab Card: Midmarket */}
        {activeTab === "midmarket" && (
          <div className="white-card rounded-2xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
            <div className="lg:col-span-8">
              <div className="inline-block px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold mb-4">
                SCALE & EXPAND
              </div>
              <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                Accelerating Feature Velocity & AI Modernization
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                Eliminate tech bottlenecks and unlock exponential growth. We integrate AI capabilities, refactor monolithic bottlenecks into resilient microservices, and augment your in-house teams with specialized engineering squads.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-sm text-slate-700">
                  <Check className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                  <span><strong>Enterprise RAG & Autonomous Agent integration</strong> in existing business workflows.</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-700">
                  <Check className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                  <span><strong>Zero-downtime database migration</strong> and API gateway modernization.</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-700">
                  <Check className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                  <span><strong>3x sprint output</strong> with embedded senior engineers working directly in your sprints.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-50 border border-slate-200 rounded-xl p-8 flex flex-col justify-between h-full">
              <div>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Velocity Uplift</span>
                <div className="font-['Space_Grotesk'] text-4xl font-extrabold text-slate-900 mt-2 mb-2">+280%</div>
                <p className="text-xs text-slate-600">
                  Average increase in production deployment frequency within 90 days.
                </p>
              </div>
              <button
                onClick={onOpenConsultation}
                className="mt-8 inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs tracking-wider uppercase shadow-md transition-all cursor-pointer"
              >
                <span>Scale Engineering</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Tab Card: Enterprise */}
        {activeTab === "enterprise" && (
          <div className="white-card rounded-2xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
            <div className="lg:col-span-8">
              <div className="inline-block px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold mb-4">
                ENTERPRISE RESILIENCE
              </div>
              <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                Mission-Critical Resilience, Multi-Region & Zero-Trust
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                For organizations where downtime is measured in millions. We deliver multi-region distributed systems, rigorous compliance implementations (HIPAA, SOC2, GDPR), and custom AI infrastructure deployed on private clouds.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-sm text-slate-700">
                  <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>99.999% SLA</strong> with automated multi-region active-active failover.</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-700">
                  <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Private on-premise LLM fine-tuning</strong> with strict data isolation guarantees.</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-700">
                  <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>24/7/365 dedicated Site Reliability Engineering (SRE)</strong> and incident response.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-50 border border-slate-200 rounded-xl p-8 flex flex-col justify-between h-full">
              <div>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Compliance</span>
                <div className="font-['Space_Grotesk'] text-4xl font-extrabold text-slate-900 mt-2 mb-2">SOC2 & ISO</div>
                <p className="text-xs text-slate-600">
                  Audit-tested zero-trust network policies and data residency controls.
                </p>
              </div>
              <button
                onClick={onOpenConsultation}
                className="mt-8 inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs tracking-wider uppercase shadow-md transition-all cursor-pointer"
              >
                <span>Enterprise Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Tab Card: Dedicated Squads */}
        {activeTab === "squads" && (
          <div className="white-card rounded-2xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
            <div className="lg:col-span-8">
              <div className="inline-block px-3 py-1 rounded-full bg-violet-50 border border-violet-200 text-violet-700 text-xs font-bold mb-4">
                STAFF AUGMENTATION & SQUADS
              </div>
              <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                Embedded Senior Software Engineers & Dedicated Squads
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                Scale your engineering capacity on-demand. We supply top 3% senior engineers across React/Next.js, Python, Go, Node.js, Flutter, and DevOps who plug seamlessly into your existing Jira, Slack, and GitHub workflows.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-sm text-slate-700">
                  <Check className="w-5 h-5 text-violet-600 shrink-0 mt-0.5" />
                  <span><strong>Direct integration</strong> with your engineering rituals, standups, and codebase.</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-700">
                  <Check className="w-5 h-5 text-violet-600 shrink-0 mt-0.5" />
                  <span><strong>Zero onboarding overhead</strong>: Senior talent with extensive production experience.</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-700">
                  <Check className="w-5 h-5 text-violet-600 shrink-0 mt-0.5" />
                  <span><strong>Flexible engagements</strong>: Month-to-month contracts with 2-week risk-free trial.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-50 border border-slate-200 rounded-xl p-8 flex flex-col justify-between h-full">
              <div>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Squad Sizing</span>
                <div className="font-['Space_Grotesk'] text-4xl font-extrabold text-slate-900 mt-2 mb-2">3–12 Devs</div>
                <p className="text-xs text-slate-600">
                  Tailored squads matched to your exact tech stack and timezone needs.
                </p>
              </div>
              <button
                onClick={onOpenConsultation}
                className="mt-8 inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs tracking-wider uppercase shadow-md transition-all cursor-pointer"
              >
                <span>Hire Dedicated Squads</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
