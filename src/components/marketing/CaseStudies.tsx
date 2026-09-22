import React from "react";
import Image from "next/image";
import { CreditCard, Activity, Truck, ArrowRight } from "lucide-react";

interface CaseStudiesProps {
  onOpenConsultation?: () => void;
}

export default function CaseStudies({ onOpenConsultation }: CaseStudiesProps) {
  return (
    <section className="py-20 sm:py-28 bg-white border-y border-slate-200 relative" id="case-studies">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-[780px] mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold tracking-wide mb-4 shadow-sm">
            <span>Verified Outcomes & Business Impact</span>
          </div>
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Engineering That Moves the Needle
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Real numbers from production deployments. We evaluate our software by the commercial and operational results it delivers.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Case 1: FinTech */}
          <div className="white-card rounded-2xl overflow-hidden flex flex-col justify-between group">
            <div className="h-52 bg-slate-900 relative overflow-hidden flex items-center justify-center">
              <Image
                src="/images/hero_architecture.jpg"
                alt="FinTech Multi-Currency Settlement Engine"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300 opacity-60"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-sky-500 text-slate-950 font-bold text-xs">
                  FINTECH & PAYMENTS
                </span>
              </div>
              <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-white/20 font-mono text-xs font-bold text-sky-400">
                +340% Throughput
              </div>
            </div>

            <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
              <div>
                <h3 className="font-['Space_Grotesk'] text-xl font-bold text-slate-900 mb-3">
                  Real-Time Multi-Currency Settlement Engine
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Architected a fault-tolerant transaction pipeline processing $4.2B in annualized payments with sub-15ms reconciliation.
                </p>
              </div>

              <div>
                <div className="grid grid-cols-2 gap-4 py-4 border-y border-slate-200 mb-6 bg-slate-50 rounded-lg px-4">
                  <div>
                    <div className="font-['Space_Grotesk'] text-xl font-bold text-slate-900">99.999%</div>
                    <div className="text-[11px] text-slate-500 font-medium">Uptime SLA</div>
                  </div>
                  <div>
                    <div className="font-['Space_Grotesk'] text-xl font-bold text-sky-600">&lt; 15ms</div>
                    <div className="text-[11px] text-slate-500 font-medium">Execution Time</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium">Go</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium">Kafka</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium">PostgreSQL</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium">AWS EKS</span>
                </div>

                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center gap-2 text-xs font-bold text-sky-600 hover:text-sky-800 transition-colors"
                >
                  <span>Request FinTech Case Brief</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Case 2: HealthTech */}
          <div className="white-card rounded-2xl overflow-hidden flex flex-col justify-between group">
            <div className="h-52 bg-slate-900 relative overflow-hidden flex items-center justify-center">
              <Image
                src="/images/patholab_preview.jpg"
                alt="HealthTech Clinical AI Copilot"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300 opacity-60"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-indigo-500 text-white font-bold text-xs">
                  HEALTHTECH & AI
                </span>
              </div>
              <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-white/20 font-mono text-xs font-bold text-indigo-300">
                -78% Triage Latency
              </div>
            </div>

            <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
              <div>
                <h3 className="font-['Space_Grotesk'] text-xl font-bold text-slate-900 mb-3">
                  HIPAA-Compliant Clinical AI Copilot
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Deployed a private fine-tuned medical model that synthesizes EHR documentation, reducing physician charting time by 3.2 hours daily.
                </p>
              </div>

              <div>
                <div className="grid grid-cols-2 gap-4 py-4 border-y border-slate-200 mb-6 bg-slate-50 rounded-lg px-4">
                  <div>
                    <div className="font-['Space_Grotesk'] text-xl font-bold text-slate-900">3.2 Hrs</div>
                    <div className="text-[11px] text-slate-500 font-medium">Saved / Day / Dr</div>
                  </div>
                  <div>
                    <div className="font-['Space_Grotesk'] text-xl font-bold text-indigo-600">100%</div>
                    <div className="text-[11px] text-slate-500 font-medium">HIPAA Pass</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  <span className="px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-700 text-xs font-medium">Python</span>
                  <span className="px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-700 text-xs font-medium">PyTorch</span>
                  <span className="px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-700 text-xs font-medium">FastAPI</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium">GCP Run</span>
                </div>

                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center gap-2 text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                  <span>Request HealthTech Case Brief</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Case 3: Logistics */}
          <div className="white-card rounded-2xl overflow-hidden flex flex-col justify-between group">
            <div className="h-52 bg-slate-900 relative overflow-hidden flex items-center justify-center">
              <Image
                src="/images/bungzo_preview.jpg"
                alt="Logistics Fleet Telematics"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300 opacity-60"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-emerald-500 text-slate-950 font-bold text-xs">
                  ENTERPRISE LOGISTICS
                </span>
              </div>
              <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-white/20 font-mono text-xs font-bold text-emerald-400">
                $14M Cloud Savings
              </div>
            </div>

            <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
              <div>
                <h3 className="font-['Space_Grotesk'] text-xl font-bold text-slate-900 mb-3">
                  Autonomous Fleet Routing & Telematics
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Re-architected an international shipping platform managing 85,000 trucks with real-time route optimization and IoT telematics ingestion.
                </p>
              </div>

              <div>
                <div className="grid grid-cols-2 gap-4 py-4 border-y border-slate-200 mb-6 bg-slate-50 rounded-lg px-4">
                  <div>
                    <div className="font-['Space_Grotesk'] text-xl font-bold text-slate-900">85,000+</div>
                    <div className="text-[11px] text-slate-500 font-medium">Active Assets</div>
                  </div>
                  <div>
                    <div className="font-['Space_Grotesk'] text-xl font-bold text-emerald-600">-62%</div>
                    <div className="text-[11px] text-slate-500 font-medium">Infra Cost</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium">Rust</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium">TypeScript</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium">TimescaleDB</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium">Kubernetes</span>
                </div>

                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center gap-2 text-xs font-bold text-emerald-600 hover:text-emerald-800 transition-colors"
                >
                  <span>Request Logistics Case Brief</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
