import React from "react";
import { ShieldCheck, Award, CheckCircle, Cloud, Star } from "lucide-react";

export default function TrustStrip() {
  const trustItems = [
    { label: "ISO 9001 CERTIFIED", icon: Award, color: "text-sky-600" },
    { label: "ISO 27001 (INFOSEC)", icon: ShieldCheck, color: "text-indigo-600" },
    { label: "ISO 20000 (ITSM)", icon: CheckCircle, color: "text-emerald-600" },
    { label: "AWS ADVANCED TIER", icon: Cloud, color: "text-amber-600" },
    { label: "GOOGLE CLOUD PARTNER", icon: Cloud, color: "text-sky-600" },
    { label: "4.9/5 RATING (250+ DEPLOYMENTS)", icon: Star, color: "text-amber-500" },
    { label: "SOC2 TYPE II READY", icon: ShieldCheck, color: "text-indigo-600" },
    { label: "HIPAA & HL7/FHIR COMPLIANT", icon: CheckCircle, color: "text-emerald-600" },
  ];

  return (
    <div className="py-6 border-y border-slate-200 bg-white overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-6 mb-3 flex items-center justify-between">
        <div className="text-xs font-semibold text-slate-500 tracking-wider uppercase">
          Accredited Engineering & Verified Security Standards
        </div>
        <div className="hidden sm:flex items-center gap-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-node" />
          <span>Audited & Enterprise Certified</span>
        </div>
      </div>

      {/* Infinite Marquee Strip */}
      <div className="relative w-full overflow-hidden flex items-center">
        <div className="animate-marquee flex items-center gap-10 whitespace-nowrap py-1">
          {[...trustItems, ...trustItems].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs font-bold font-['Space_Grotesk'] tracking-wide shadow-sm hover:border-slate-300 transition-colors shrink-0"
              >
                <Icon className={`w-4 h-4 ${item.color}`} />
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
