"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import ConsultationModal from "@/components/marketing/ConsultationModal";

const TOC_ITEMS = [
  { id: "tab1", label: "Security Governance & Compliance (ISO 27001)" },
  { id: "tab2", label: "Data Encryption & Cryptographic Controls" },
  { id: "tab3", label: "Zero Trust Architecture & Access Control" },
  { id: "tab4", label: "Infrastructure, Cloud & Network Security" },
  { id: "tab5", label: "Vulnerability Management & Pen-Testing" },
  { id: "tab6", label: "Incident Response & SLA Guarantees" },
  { id: "tab7", label: "Data Residency & DPDP Act Compliance" },
  { id: "tab8", label: "Reporting Security Inquiries & Disclosures" },
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

export default function DataSecurityPage() {
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
            <span className="text-slate-700 font-semibold">Data Security</span>
          </nav>

          {/* Header Title Section with Signature Yellow Marker Highlight */}
          <header className="mb-12 sm:mb-16 max-w-4xl">
            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-black tracking-tight text-slate-950 mb-6 leading-tight">
              <span className="relative inline-block z-0">
                <span
                  className="absolute bottom-1 sm:bottom-2 left-0 right-0 h-3 sm:h-4 bg-[#FFE600] -z-10 rounded-[2px]"
                  aria-hidden="true"
                />
                Data Security
              </span>
            </h1>

            <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              <p>
                At Globizhub India Pvt Ltd (“Globizhub”), data security is not an afterthought—it is engineered into the
                foundation of every digital system, microservice, and cloud infrastructure we build.
              </p>
              <p>
                We maintain accredited compliance with ISO/IEC 27001:2022 (Information Security Management) and ISO
                9001:2015 (Quality Management), enforcing military-grade encryption, zero-trust network architectures, and
                stringent access boundaries across all client operations.
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
              {/* Tab 1: Security Governance & Compliance */}
              <section id="tab1" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-[28px] font-bold text-slate-900 tracking-tight mb-4 pb-2 border-b border-slate-100">
                  Security Governance &amp; Compliance (ISO 27001)
                </h2>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                  Globizhub operates an Information Security Management System (ISMS) audited annually by accredited
                  certification registrars:
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-[#fc7754]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <CoralCheckIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">
                        ISO/IEC 27001:2022 Certified ISMS
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        Comprehensive administrative, physical, and technical safeguards covering risk assessment, access
                        management, threat intelligence, and operational resilience.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-[#fc7754]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <CoralCheckIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">
                        ISO 9001:2015 Quality Management
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        Strict QA gating, peer review pipelines, and systematic change control for all software
                        deliverables and cloud deployments.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-[#fc7754]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <CoralCheckIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">
                        ISO/IEC 20000-1:2018 IT Service Management
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        ITIL-aligned SLA governance with sub-15-minute response times for critical severity production
                        incidents.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Tab 2: Data Encryption & Cryptographic Controls */}
              <section id="tab2" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-[28px] font-bold text-slate-900 tracking-tight mb-4 pb-2 border-b border-slate-100">
                  Data Encryption &amp; Cryptographic Controls
                </h2>
                <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                  <p>
                    We protect data against interception and unauthorized inspection at all stages of its lifecycle:
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    "Encryption at Rest: All persistent storage, databases, object stores, and disk snapshots are encrypted using AES-256 with keys managed in dedicated Hardware Security Modules (AWS KMS, GCP Cloud KMS).",
                    "Encryption in Transit: All incoming and egress traffic is enforced via TLS 1.3 with HSTS (HTTP Strict Transport Security) enabled, preventing downgrade and man-in-the-middle attacks.",
                    "End-to-End Cryptographic Hashing: Passwords and sensitive authentication tokens are hashed using salted Argon2id / bcrypt algorithms with zero plaintext storage.",
                    "Automated Certificate Lifecycle: SSL/TLS certificates are auto-rotated every 60 days via automated ACME protocols.",
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

              {/* Tab 3: Zero Trust Architecture & Access Control */}
              <section id="tab3" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-[28px] font-bold text-slate-900 tracking-tight mb-4 pb-2 border-b border-slate-100">
                  Zero Trust Architecture &amp; Access Control
                </h2>
                <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                  <p>
                    Globizhub operates on a strict “Never Trust, Always Verify” security paradigm:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                      <span className="text-sm font-bold text-slate-900 block mb-1">Least-Privilege RBAC</span>
                      <span className="text-xs text-slate-600">
                        Access to production databases, clusters, and client repositories is restricted by role and
                        granted on a just-in-time (JIT) basis with mandatory manager sign-off.
                      </span>
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                      <span className="text-sm font-bold text-slate-900 block mb-1">Mandatory MFA</span>
                      <span className="text-xs text-slate-600">
                        Hardware security keys (FIDO2 / WebAuthn) or time-based one-time passwords (TOTP) are mandatory
                        for all corporate accounts, VPNs, and cloud consoles.
                      </span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Tab 4: Infrastructure, Cloud & Network Security */}
              <section id="tab4" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-[28px] font-bold text-slate-900 tracking-tight mb-4 pb-2 border-b border-slate-100">
                  Infrastructure, Cloud &amp; Network Security
                </h2>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                  Our cloud environments are deployed across Tier-IV data centers with defense-in-depth perimeters:
                </p>

                <div className="space-y-4">
                  {[
                    "Virtual Private Clouds (VPC): All database and backend workloads reside in private subnets with no direct public internet exposure.",
                    "DDoS & Web Application Firewall (WAF): Protected by Cloudflare Enterprise and AWS Shield with layer 3/4/7 volumetric DDoS mitigation.",
                    "Microsegmentation: Kubernetes network policies isolate containerized pods to prevent lateral threat movement.",
                    "Continuous Telemetry: 24/7 SIEM monitoring analyzing VPC flow logs, cloud audit trails, and system access anomalies.",
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

              {/* Tab 5: Vulnerability Management & Pen-Testing */}
              <section id="tab5" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-[28px] font-bold text-slate-900 tracking-tight mb-4 pb-2 border-b border-slate-100">
                  Vulnerability Management &amp; Pen-Testing
                </h2>
                <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                  <p>
                    We maintain continuous vulnerability management across the entire software development lifecycle (SDLC):
                  </p>
                  <p>
                    • <strong className="text-slate-900 font-semibold">Automated SAST/DAST:</strong> Every pull request is
                    analyzed by automated Static Application Security Testing (SAST) and software composition analysis (SCA)
                    tools before merging.
                  </p>
                  <p>
                    • <strong className="text-slate-900 font-semibold">Third-Party Penetration Testing:</strong> External,
                    independent CREST-accredited security auditors conduct annual black-box and gray-box penetration tests
                    on our production environments.
                  </p>
                </div>
              </section>

              {/* Tab 6: Incident Response & SLA Guarantees */}
              <section id="tab6" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-[28px] font-bold text-slate-900 tracking-tight mb-4 pb-2 border-b border-slate-100">
                  Incident Response &amp; SLA Guarantees
                </h2>
                <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                  <p>
                    Globizhub maintains a dedicated Computer Security Incident Response Team (CSIRT) ready 24/7/365:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                      <span className="text-sm font-bold text-slate-900 block mb-1">Sub-15 Minute Triage</span>
                      <span className="text-xs text-slate-600">
                        Critical Severity 1 alerts trigger instant escalation to lead site reliability engineers and security
                        officers.
                      </span>
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                      <span className="text-sm font-bold text-slate-900 block mb-1">Transparent Breach Notification</span>
                      <span className="text-xs text-slate-600">
                        Clients are formally notified within 24 hours of any verified security incident impacting their
                        data, in accordance with applicable statutory regulations.
                      </span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Tab 7: Data Residency & DPDP Act Compliance */}
              <section id="tab7" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-[28px] font-bold text-slate-900 tracking-tight mb-4 pb-2 border-b border-slate-100">
                  Data Residency &amp; DPDP Act Compliance
                </h2>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                  In full compliance with India's Digital Personal Data Protection (DPDP) Act 2023, EU GDPR, and global
                  privacy mandates:
                </p>

                <div className="space-y-4">
                  {[
                    "Domestic Data Hosting: Indian client data is stored exclusively in verified sovereign cloud regions within India (AWS Mumbai/Hyderabad, GCP Delhi/Mumbai).",
                    "Cross-Border Transfer Controls: International data transfers occur only under executed Standard Contractual Clauses (SCCs) and verified adequacy frameworks.",
                    "Right to Erasure & Retrieval: Enterprise clients can request cryptographic data purging or export at the conclusion of their engagement.",
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

              {/* Tab 8: Reporting Security Inquiries & Disclosures */}
              <section id="tab8" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-[28px] font-bold text-slate-900 tracking-tight mb-4 pb-2 border-b border-slate-100">
                  Reporting Security Inquiries &amp; Disclosures
                </h2>
                <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                  <p>
                    We welcome responsible vulnerability disclosures and security inquiries from researchers and clients:
                  </p>
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-2">
                    <p className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      Globizhub Security Operations Center (SOC)
                    </p>
                    <p className="text-sm text-slate-600">
                      Email:{" "}
                      <a href="mailto:security@globizhub.com" className="text-blue-600 hover:underline font-medium">
                        security@globizhub.com
                      </a>
                    </p>
                    <p className="text-sm text-slate-600">
                      PGP Key Fingerprint: 4E9B 22F8 A19C 301D 7B44 EC68 9A10 F3C5 8820 D1E7
                    </p>
                  </div>
                </div>
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
