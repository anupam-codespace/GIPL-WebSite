"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, ShieldCheck, Lock } from "lucide-react";

export default function ProposalWizard() {
  const [step, setStep] = useState(1);
  const [objective, setObjective] = useState("AI & Autonomous Agents");
  const [scope, setScope] = useState("Greenfield (From Scratch)");
  const [budget, setBudget] = useState("$50,000 - $100,000");
  const [timeline, setTimeline] = useState("Immediately (Within 2 weeks)");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [brief, setBrief] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleNext = async () => {
    setError("");
    if (step === 4) {
      if (!name.trim()) {
        setError("Please provide your full name.");
        return;
      }
      if (!email.trim() || !email.includes("@")) {
        setError("Please enter a valid work email.");
        return;
      }
      if (!company.trim()) {
        setError("Please provide your company name.");
        return;
      }

      setLoading(true);
      try {
        await fetch("/api/leads", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fullName: name,
            workEmail: email,
            phone,
            company,
            budgetBracket: budget,
            projectBrief: brief,
            source: "proposal_wizard",
          }),
        });
      } catch {
        // Fallback
      } finally {
        setLoading(false);
      }
    }
    setStep((prev) => Math.min(5, prev + 1));
  };

  const handlePrev = () => {
    setError("");
    setStep((prev) => Math.max(1, prev - 1));
  };

  return (
    <section className="py-20 sm:py-28 bg-white border-t border-slate-200 relative" id="proposal">
      <div className="max-w-[880px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-semibold tracking-wide mb-4 shadow-sm">
            <span>Project Estimation Engine</span>
          </div>
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Interactive Project Proposal Wizard
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Answer 4 quick questions to receive a detailed architectural estimate and schedule a technical consultation with our engineering team.
          </p>
        </div>

        {/* Wizard Container */}
        <div className="white-card rounded-2xl p-8 sm:p-12 shadow-xl border border-slate-200">
          {/* Progress Bar */}
          <div className="relative mb-10">
            <div className="h-1 w-full bg-slate-100 absolute top-3.5 left-0 z-0 rounded-full" />
            <div
              className="h-1 bg-sky-600 absolute top-3.5 left-0 z-0 transition-all duration-300 rounded-full"
              style={{ width: `${((step - 1) / 4) * 100}%` }}
            />
            <div className="flex items-center justify-between relative z-10">
              {["Objective", "Scope", "Budget", "Contact", "Confirm"].map((label, idx) => {
                const s = idx + 1;
                const isActive = s === step;
                const isCompleted = s < step;
                return (
                  <div key={label} className="flex flex-col items-center gap-1.5">
                    <div
                      className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-mono text-xs font-bold transition-all ${
                        isCompleted
                          ? "bg-sky-600 border-sky-600 text-white"
                          : isActive
                          ? "bg-white border-sky-600 text-sky-600 shadow-md ring-2 ring-sky-500/20"
                          : "bg-white border-slate-200 text-slate-400"
                      }`}
                    >
                      {s}
                    </div>
                    <span
                      className={`text-[11px] font-semibold tracking-wide ${
                        isActive ? "text-slate-900" : "text-slate-400"
                      }`}
                    >
                      {label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Form Steps */}
          <div>
            {/* Step 1: Need */}
            {step === 1 && (
              <div className="animate-in fade-in duration-200">
                <h3 className="font-['Space_Grotesk'] text-xl font-bold text-slate-900 mb-2">
                  What is your primary engineering objective?
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mb-6">
                  Select the solution that best describes what you want to build.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "AI & Autonomous Agents", desc: "LLM fine-tuning, RAG pipelines, workflow agents." },
                    { title: "Custom Web / Mobile Platform", desc: "Greenfield SaaS, customer portals, cross-platform apps." },
                    { title: "Cloud & DevOps Modernization", desc: "Kubernetes, multi-region failover, cost reduction." },
                    { title: "Dedicated Engineering Squad", desc: "Embedded pod of 3-8 senior developers and architects." },
                  ].map((opt) => (
                    <div
                      key={opt.title}
                      onClick={() => setObjective(opt.title)}
                      className={`p-5 rounded-xl border cursor-pointer transition-all ${
                        objective === opt.title
                          ? "bg-sky-50/70 border-sky-600 shadow-sm ring-1 ring-sky-500/20"
                          : "bg-white border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <strong className="block text-slate-900 text-sm mb-1">{opt.title}</strong>
                      <span className="text-xs text-slate-500">{opt.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Scope */}
            {step === 2 && (
              <div className="animate-in fade-in duration-200">
                <h3 className="font-['Space_Grotesk'] text-xl font-bold text-slate-900 mb-2">
                  What is the nature and scope of this project?
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mb-6">
                  Choose the project stage that matches your current status.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "Greenfield (From Scratch)", desc: "Building an entirely new product or architecture." },
                    { title: "Refactor / Modernize Legacy", desc: "Overhauling an existing codebase for speed & scale." },
                    { title: "Audit & Architecture Review", desc: "Evaluating code quality, security posture, and bottlenecks." },
                    { title: "Feature Expansion & Scale", desc: "Adding major new capabilities to an existing product." },
                  ].map((opt) => (
                    <div
                      key={opt.title}
                      onClick={() => setScope(opt.title)}
                      className={`p-5 rounded-xl border cursor-pointer transition-all ${
                        scope === opt.title
                          ? "bg-sky-50/70 border-sky-600 shadow-sm ring-1 ring-sky-500/20"
                          : "bg-white border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <strong className="block text-slate-900 text-sm mb-1">{opt.title}</strong>
                      <span className="text-xs text-slate-500">{opt.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Budget & Timeline */}
            {step === 3 && (
              <div className="animate-in fade-in duration-200">
                <h3 className="font-['Space_Grotesk'] text-xl font-bold text-slate-900 mb-2">
                  Target Kickoff & Estimated Budget Bracket
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mb-6">
                  Help us prepare the right tier of senior architects for your consultation.
                </p>

                <div className="mb-6">
                  <label className="block text-xs font-semibold uppercase text-slate-700 tracking-wider mb-2">
                    When do you want to begin?
                  </label>
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:bg-white focus:border-sky-500 outline-none"
                  >
                    <option value="Immediately (Within 2 weeks)">Immediately (Within 2 weeks)</option>
                    <option value="Within 1 month">Within 1 month</option>
                    <option value="1 - 3 months out">1 - 3 months out</option>
                    <option value="Exploratory / Research phase">Exploratory / Research phase</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-700 tracking-wider mb-2">
                    Estimated Budget Bracket (USD)
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {["$25,000 - $50,000", "$50,000 - $100,000", "$100,000 - $250,000", "$250,000+ (Enterprise)"].map(
                      (b) => (
                        <div
                          key={b}
                          onClick={() => setBudget(b)}
                          className={`p-4 rounded-xl border text-center font-semibold text-xs sm:text-sm cursor-pointer transition-all ${
                            budget === b
                              ? "bg-sky-50 border-sky-600 text-sky-800 shadow-sm"
                              : "bg-white border-slate-200 text-slate-600 hover:border-slate-300"
                          }`}
                        >
                          {b}
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Contact Details */}
            {step === 4 && (
              <div className="animate-in fade-in duration-200">
                <h3 className="font-['Space_Grotesk'] text-xl font-bold text-slate-900 mb-2">
                  Where should we send your technical proposal?
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mb-6">
                  All communications are bound by our mutual non-disclosure agreement.
                </p>

                {error && (
                  <div className="mb-4 p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-slate-700 tracking-wider mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Sarah Connor"
                      className="w-full p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:border-sky-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase text-slate-700 tracking-wider mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="s.connor@enterprise.com"
                      className="w-full p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:border-sky-500 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-slate-700 tracking-wider mb-2">
                      Company / Organization *
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. Acme Systems"
                      className="w-full p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:border-sky-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase text-slate-700 tracking-wider mb-2">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 (989) 965-0980"
                      className="w-full p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:border-sky-500 outline-none"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-xs font-semibold uppercase text-slate-700 tracking-wider mb-2">
                    Project Brief / Key Objectives
                  </label>
                  <textarea
                    rows={3}
                    value={brief}
                    onChange={(e) => setBrief(e.target.value)}
                    placeholder="Tell us about the key problem you are solving, tech stack preferences, or specific deliverables..."
                    className="w-full p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:bg-white focus:border-sky-500 outline-none resize-none"
                  />
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Lock className="w-3.5 h-3.5 text-sky-600" />
                  <span>Protected by 256-bit AES encryption and mutual non-disclosure agreement.</span>
                </div>
              </div>
            )}

            {/* Step 5: Confirmation */}
            {step === 5 && (
              <div className="text-center py-6 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6 shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                  Proposal Brief Received!
                </h3>
                <p className="text-sm text-slate-600 max-w-[520px] mx-auto mb-8">
                  Thank you, <strong className="text-slate-900">{name}</strong>. A Senior Solutions Architect from Globizhub India Private Limited has been assigned to your brief and will review your requirements within 24 business hours.
                </p>

                {/* Summary Card */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 max-w-[540px] mx-auto text-left text-xs">
                  <div className="grid grid-cols-2 gap-4 pb-4 border-b border-slate-200">
                    <div>
                      <span className="text-slate-500 uppercase font-semibold">OBJECTIVE:</span>
                      <div className="text-sky-700 font-bold text-sm mt-0.5">{objective}</div>
                    </div>
                    <div>
                      <span className="text-slate-500 uppercase font-semibold">SCOPE:</span>
                      <div className="text-slate-900 font-bold text-sm mt-0.5">{scope}</div>
                    </div>
                    <div>
                      <span className="text-slate-500 uppercase font-semibold">EST. BUDGET:</span>
                      <div className="text-emerald-700 font-bold text-sm mt-0.5">{budget}</div>
                    </div>
                    <div>
                      <span className="text-slate-500 uppercase font-semibold">KICKOFF:</span>
                      <div className="text-slate-900 font-bold text-sm mt-0.5">{timeline}</div>
                    </div>
                  </div>
                  <div className="pt-4">
                    <span className="text-slate-500 uppercase font-semibold">CONTACT:</span>
                    <div className="text-slate-800 font-medium mt-0.5">
                      {name} &bull; {company} ({email})
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Navigation Controls */}
          {step < 5 && (
            <div className="flex items-center justify-between pt-8 mt-8 border-t border-slate-100">
              <button
                type="button"
                onClick={handlePrev}
                className={`px-6 py-2.5 rounded-full border border-slate-200 bg-white text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-all cursor-pointer ${
                  step === 1 ? "invisible" : ""
                }`}
              >
                ← Back
              </button>

              <button
                type="button"
                onClick={handleNext}
                disabled={loading}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs tracking-wider uppercase shadow-md transition-all cursor-pointer"
              >
                <span>{step === 4 ? (loading ? "Submitting..." : "Submit & Schedule Call") : "Continue"}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
