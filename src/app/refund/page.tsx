"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import ConsultationModal from "@/components/marketing/ConsultationModal";

const TOC_ITEMS = [
  { id: "tab1", label: "Scope of Services & Engagements" },
  { id: "tab2", label: "Milestone-Based Engineering Deliverables" },
  { id: "tab3", label: "SaaS & Subscription Licensing (Patholab, Bungzo)" },
  { id: "tab4", label: "Cancellation & Refund Eligibility" },
  { id: "tab5", label: "Dispute Resolution & Escalation" },
  { id: "tab6", label: "Refund Processing Timelines & Methods" },
  { id: "tab7", label: "Non-Refundable Services & Exclusions" },
  { id: "tab8", label: "Policy Amendments & Governing Law" },
];

function CoralCheckIcon({ className = "w-5 h-5 shrink-0" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M15.141,7.169a.82.82,0,0,1,0,1.16l-5.5,5.5a.82.82,0,0,1-1.16,0l-2.62-2.62a.82.82,0,0,1,1.16-1.16l2.04,2.04,4.923-4.923a.82.82,0,0,1,1.16,0ZM21,10.5A10.5,10.5,0,1,1,10.5,0,10.494,10.494,0,0,1,21,10.5Zm-1.641,0A8.859,8.859,0,1,0,10.5,19.36,8.854,8.854,0,0,0,19.359,10.5Zm0,0"
        transform="translate(0.5 0.5)"
        fill="#fc7754"
        stroke="#fc7754"
        strokeWidth="0.5"
      />
    </svg>
  );
}

export default function RefundPolicyPage() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("tab1");

  const scrollTo = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -110;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 140;
      for (let i = TOC_ITEMS.length - 1; i >= 0; i--) {
        const item = TOC_ITEMS[i];
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveTab(item.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-800 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#FFE600] selection:text-black">
      {/* Site Global Header */}
      <SiteHeader onOpenConsultation={() => setConsultationOpen(true)} />

      {/* Main Container */}
      <main className="pt-32 sm:pt-36 pb-20 sm:pb-28">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 mb-8 sm:mb-10 font-medium">
            <span className="text-[#0092ff] text-base leading-none select-none">‹</span>
            <Link href="/" className="text-[#0092ff] hover:underline transition-colors">
              Home
            </Link>
            <span className="text-slate-400">/</span>
            <span className="text-slate-700 font-semibold">Refund Policy</span>
          </nav>

          {/* Header Title Section with Signature Yellow Marker Highlight */}
          <header className="mb-12 sm:mb-16 max-w-4xl">
            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-black tracking-tight text-slate-950 mb-6 leading-tight">
              <span className="relative inline-block z-0">
                <span
                  className="absolute bottom-1 sm:bottom-2 left-0 right-0 h-3 sm:h-4 bg-[#FFE600] -z-10 rounded-[2px]"
                  aria-hidden="true"
                />
                Refund Policy
              </span>
            </h1>

            <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              <p>
                At Globizhub India Pvt Ltd (“Globizhub”), we take pride in delivering premier enterprise digital products,
                custom cloud architectures, and specialized SaaS solutions. This Refund Policy establishes transparent,
                fair guidelines regarding cancellations, milestone reconciliations, and fee refunds for all contracted
                services.
              </p>
              <p>
                Because enterprise software engineering involves dedicated engineering teams, cloud compute allocation,
                and proprietary technical architectures, refunds are governed by specific project milestones, contract
                terms, and deliverable sign-offs as detailed below.
              </p>
            </div>
          </header>

          {/* Two-Column Layout: Left Sticky TOC, Right Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-start">
            {/* Table of Content Sticky Sidebar */}
            <aside className="lg:col-span-4 lg:sticky lg:top-28">
              <div className="p-6 sm:p-7 rounded-2xl bg-[#fafafa] lg:bg-white border border-slate-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
                <div className="text-lg font-bold text-slate-900 pb-3 mb-4 border-b border-slate-100">
                  Table of content
                </div>
                <ul className="space-y-3 text-sm">
                  {TOC_ITEMS.map((item) => {
                    const isActive = activeTab === item.id;
                    return (
                      <li key={item.id}>
                        <button
                          type="button"
                          onClick={() => scrollTo(item.id)}
                          className={`w-full text-left transition-all flex items-start gap-2.5 group cursor-pointer ${
                            isActive
                              ? "text-blue-600 font-semibold"
                              : "text-slate-600 hover:text-slate-900 font-normal"
                          }`}
                        >
                          <span
                            className={`text-base leading-tight select-none transition-colors ${
                              isActive
                                ? "text-blue-600"
                                : "text-slate-400 group-hover:text-slate-600"
                            }`}
                          >
                            •
                          </span>
                          <span className="leading-snug">{item.label}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </aside>

            {/* Right Main Content */}
            <div className="lg:col-span-8 space-y-12 sm:space-y-14">
              {/* Tab 1: Scope of Services & Engagements */}
              <section id="tab1" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-[28px] font-bold text-slate-900 tracking-tight mb-4 pb-2 border-b border-slate-100">
                  Scope of Services &amp; Engagements
                </h2>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                  Globizhub provides services under distinct contractual models, each governed by specific financial and
                  deliverable criteria:
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-[#fc7754]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <CoralCheckIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">
                        Fixed-Bid Enterprise Engineering Contracts
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        Projects structured into predefined sprint phases with agreed milestone deliverables, acceptance
                        criteria, and payment schedules outlined in a Statement of Work (SOW).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-[#fc7754]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <CoralCheckIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">
                        Time &amp; Materials (T&amp;M) / Dedicated Engineering Pods
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        Retained engineering squads billed on bi-weekly or monthly cycles reflecting actual engineering
                        hours and cloud infrastructure consumption.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-[#fc7754]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <CoralCheckIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">
                        SaaS Licenses &amp; Managed Platform Hosting
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        Monthly and annual subscriptions to Globizhub proprietary cloud software (Patholab.cloud LIMS,
                        Bungzo delivery infrastructure).
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Tab 2: Milestone-Based Engineering Deliverables */}
              <section id="tab2" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-[28px] font-bold text-slate-900 tracking-tight mb-4 pb-2 border-b border-slate-100">
                  Milestone-Based Engineering Deliverables
                </h2>
                <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                  <p>
                    For custom development projects, payments are tied to formal milestone sign-offs:
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    "Prior to Milestone Initiation: If a client requests cancellation prior to the engineering kickoff of a scheduled milestone, payments allocated to that future milestone are 100% refundable, minus non-recoverable cloud provisioning costs.",
                    "Active Sprint Work: Once work on a milestone has commenced, any refund is calculated pro-rata based on verified deliverable completion against the agreed sprint backlog.",
                    "Approved Milestones: Once a milestone deliverable is formally signed off or accepted via user acceptance testing (UAT), fees associated with that milestone are non-refundable.",
                    "Discovery & Architecture Phase: Fees for completed architectural blueprints, technical discovery, and UI/UX design prototypes are non-refundable once deliverables are handed over.",
                  ].map((text, idx) => (
                    <div key={idx} className="flex items-start gap-3.5">
                      <div className="w-6 h-6 rounded-full bg-[#fc7754]/10 flex items-center justify-center shrink-0 mt-0.5">
                        <CoralCheckIcon className="w-4 h-4" />
                      </div>
                      <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Tab 3: SaaS & Subscription Licensing */}
              <section id="tab3" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-[28px] font-bold text-slate-900 tracking-tight mb-4 pb-2 border-b border-slate-100">
                  SaaS &amp; Subscription Licensing (Patholab, Bungzo)
                </h2>
                <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                  <p>
                    Subscriptions to Globizhub's software platforms (including Patholab.cloud and Bungzo) operate on
                    recurring billing cycles:
                  </p>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                    <p className="text-sm text-slate-700">
                      <strong className="text-slate-900 font-bold">Monthly Subscriptions: </strong>
                      Clients may cancel at any time. Cancellation takes effect at the end of the current billing month,
                      and no further charges will apply. Partial month usage is non-refundable.
                    </p>
                    <p className="text-sm text-slate-700">
                      <strong className="text-slate-900 font-bold">Annual Enterprise Subscriptions: </strong>
                      Refund requests submitted within 14 days of initial provisioning are eligible for a full refund minus
                      setup costs. After 14 days, refunds are calculated pro-rata based on remaining unutilized months.
                    </p>
                  </div>
                </div>
              </section>

              {/* Tab 4: Cancellation & Refund Eligibility */}
              <section id="tab4" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-[28px] font-bold text-slate-900 tracking-tight mb-4 pb-2 border-b border-slate-100">
                  Cancellation &amp; Refund Eligibility
                </h2>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                  To be eligible for a refund, the client must submit a formal written request to our finance office:
                </p>

                <div className="space-y-4">
                  {[
                    "Requests must be submitted via email to billing@globizhub.com with project reference and invoice numbers.",
                    "Cancellations must state the clear operational or technical rationale for the request.",
                    "Clients must have maintained account compliance without outstanding undisputed invoices.",
                    "Mutual reconciliation meetings will be scheduled within five (5) business days to review deliverable status.",
                  ].map((text, idx) => (
                    <div key={idx} className="flex items-start gap-3.5">
                      <div className="w-6 h-6 rounded-full bg-[#fc7754]/10 flex items-center justify-center shrink-0 mt-0.5">
                        <CoralCheckIcon className="w-4 h-4" />
                      </div>
                      <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Tab 5: Dispute Resolution & Escalation */}
              <section id="tab5" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-[28px] font-bold text-slate-900 tracking-tight mb-4 pb-2 border-b border-slate-100">
                  Dispute Resolution &amp; Escalation
                </h2>
                <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                  <p>
                    In the event of a disagreement regarding deliverable satisfaction or refund calculations, both parties
                    commit to good-faith mediation:
                  </p>
                  <p>
                    1. <strong className="text-slate-900 font-semibold">Tier 1 Review:</strong> Project Lead &amp; Client Sponsor
                    reconcile sprint deliverables against SOW requirements within 7 business days.
                  </p>
                  <p>
                    2. <strong className="text-slate-900 font-semibold">Tier 2 Escalation:</strong> Globizhub Vice President of
                    Engineering and Client Executive leadership conduct a formal resolution review.
                  </p>
                </div>
              </section>

              {/* Tab 6: Refund Processing Timelines & Methods */}
              <section id="tab6" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-[28px] font-bold text-slate-900 tracking-tight mb-4 pb-2 border-b border-slate-100">
                  Refund Processing Timelines &amp; Methods
                </h2>
                <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                  <p>
                    Approved refunds are processed via the original method of payment:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                      <span className="text-sm font-bold text-slate-900 block mb-1">Bank Wire / NEFT / RTGS</span>
                      <span className="text-xs text-slate-600">
                        Processed within 7 to 10 business days following formal reconciliation sign-off.
                      </span>
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                      <span className="text-sm font-bold text-slate-900 block mb-1">Corporate Card / Payment Gateway</span>
                      <span className="text-xs text-slate-600">
                        Credit initiated within 5 to 7 business days, subject to card issuer clearing cycles.
                      </span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Tab 7: Non-Refundable Services & Exclusions */}
              <section id="tab7" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-[28px] font-bold text-slate-900 tracking-tight mb-4 pb-2 border-b border-slate-100">
                  Non-Refundable Services &amp; Exclusions
                </h2>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                  The following expenses and service categories are non-refundable under any circumstances:
                </p>

                <div className="space-y-4">
                  {[
                    "Third-party cloud infrastructure costs (AWS, Google Cloud, Microsoft Azure, Cloudflare) provisioned on client behalf.",
                    "Third-party software licenses, API subscriptions, domain registrations, or SSL certificates procured for the project.",
                    "Emergency engineering services or out-of-scope sprint escalations requested with expedited delivery.",
                    "Delays resulting from client-side bottlenecks, delayed asset delivery, or third-party vendor downtime.",
                  ].map((text, idx) => (
                    <div key={idx} className="flex items-start gap-3.5">
                      <div className="w-6 h-6 rounded-full bg-[#fc7754]/10 flex items-center justify-center shrink-0 mt-0.5">
                        <CoralCheckIcon className="w-4 h-4" />
                      </div>
                      <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Tab 8: Policy Amendments & Governing Law */}
              <section id="tab8" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-[28px] font-bold text-slate-900 tracking-tight mb-4 pb-2 border-b border-slate-100">
                  Policy Amendments &amp; Governing Law
                </h2>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  Globizhub India Pvt Ltd reserves the right to amend this Refund Policy at any time. Changes will be
                  effective upon posting to this URL. All financial disputes are governed by the laws of India and subject
                  to the exclusive jurisdiction of the competent courts in Guwahati, Assam, India.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      {/* Global Site Footer */}
      <SiteFooter onOpenConsultation={() => setConsultationOpen(true)} />

      {/* Consultation Modal */}
      <ConsultationModal isOpen={consultationOpen} onClose={() => setConsultationOpen(false)} />
    </div>
  );
}
