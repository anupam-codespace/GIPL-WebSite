"use client";

import React, { useState } from "react";
import { Search, PenTool, Code2, Rocket, RefreshCw, CheckCircle2 } from "lucide-react";

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "Discovery & Architecture Blueprint",
      duration: "Days 1–7",
      icon: Search,
      desc: "Deep-dive technical assessment of business requirements, system dependencies, data schema design, and compliance mapping. Deliverable: Complete Architectural RFC.",
      deliverables: ["System Architecture RFC", "Database & API Specification", "Threat Model & Security Plan"],
    },
    {
      num: "02",
      title: "Agile Sprints & Continuous CI/CD",
      duration: "Weeks 2–8",
      icon: Code2,
      desc: "Two-week iterative sprints with automated CI/CD pipeline triggers, daily asynchronous standups, PR reviews, and live preview staging environments for stakeholder review.",
      deliverables: ["Bi-Weekly Production Sprints", "Automated GitHub Actions CI/CD", "Interactive Staging Previews"],
    },
    {
      num: "03",
      title: "Security Hardening & Compliance",
      duration: "Continuous",
      icon: PenTool,
      desc: "Rigorous verification against OWASP Top 10 vulnerabilities, automated SonarQube static code analysis, zero-trust network policies, and ISO 27001 / SOC2 auditing.",
      deliverables: ["Penetration Testing Report", "ISO 27001 Security Audit", "Zero-Trust RBAC Policies"],
    },
    {
      num: "04",
      title: "Zero-Downtime Production Launch",
      duration: "Day of Release",
      icon: Rocket,
      desc: "Blue-green or canary deployments with automated health checks, live database migrations, and sub-minute automated rollback capabilities.",
      deliverables: ["Blue-Green Production Rollout", "Real-Time Telemetry Setup", "Zero-Downtime DB Migration"],
    },
    {
      num: "05",
      title: "24/7/365 SRE Observability & Evolution",
      duration: "Ongoing SLA",
      icon: RefreshCw,
      desc: "Dedicated Site Reliability Engineers monitor telemetry (Prometheus, Grafana, Datadog), ensuring 99.999% uptime SLA and continuous feature velocity.",
      deliverables: ["99.999% Uptime Guarantee", "Sub-15m Incident Response", "Monthly Cloud Cost Optimization"],
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-slate-50 relative" id="process">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-[780px] mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-semibold tracking-wide mb-4 shadow-sm">
            <span>Engineering Methodology</span>
          </div>
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Predictable, High-Velocity Delivery
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            A disciplined 5-stage engineering lifecycle designed for enterprise rigor, security verification, and rapid commercial deployment.
          </p>
        </div>

        {/* Step Selector Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            return (
              <div
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-5 rounded-xl border cursor-pointer transition-all ${
                  isActive
                    ? "bg-white border-sky-500 shadow-lg ring-2 ring-sky-500/20"
                    : "bg-white/70 border-slate-200 hover:border-slate-300 hover:bg-white"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`font-mono text-xs font-bold ${isActive ? "text-sky-600" : "text-slate-400"}`}>
                    STAGE {step.num}
                  </span>
                  <Icon className={`w-4 h-4 ${isActive ? "text-sky-600" : "text-slate-400"}`} />
                </div>
                <h4 className="font-['Space_Grotesk'] text-sm font-bold text-slate-900 mb-1 line-clamp-1">
                  {step.title}
                </h4>
                <div className="text-xs text-slate-500 font-medium">{step.duration}</div>
              </div>
            );
          })}
        </div>

        {/* Active Stage Detail Card */}
        <div className="white-card rounded-2xl p-8 sm:p-12 border-slate-200 animate-in fade-in duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold mb-4">
                <span>PHASE {steps[activeStep].num} · {steps[activeStep].duration}</span>
              </div>
              <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                {steps[activeStep].title}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-normal">
                {steps[activeStep].desc}
              </p>

              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Key Verification Deliverables
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {steps[activeStep].deliverables.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-800 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-50 rounded-xl p-6 border border-slate-200 text-center">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                Deployment Assurance
              </div>
              <div className="font-['Space_Grotesk'] text-3xl font-extrabold text-slate-900 mb-2">
                100% IP Transfer
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Full source code ownership, CI/CD configs, and complete technical documentation handed over at every phase.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
