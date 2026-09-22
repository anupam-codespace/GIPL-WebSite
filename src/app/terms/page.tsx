"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import ConsultationModal from "@/components/marketing/ConsultationModal";

const TOC_ITEMS = [
  { id: "tab1", label: "Description of Services" },
  { id: "tab2", label: "Member Account, Password and Security" },
  { id: "tab3", label: "Disclaimer of Warranties" },
  { id: "tab4", label: "Limitation of Liability" },
  { id: "tab5", label: "Termination and Suspension" },
  { id: "tab6", label: "Proprietary Rights to Content" },
  { id: "tab7", label: "Modifications to Terms and Conditions" },
  { id: "tab8", label: "Governing Law & Jurisdiction" },
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

export default function TermsOfUsePage() {
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
            <span className="text-slate-700 font-semibold">Terms &amp; Use</span>
          </nav>

          {/* Header Title Section with Signature Yellow Marker Highlight */}
          <header className="mb-12 sm:mb-16 max-w-4xl">
            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-black tracking-tight text-slate-950 mb-6 leading-tight">
              <span className="relative inline-block z-0">
                <span
                  className="absolute bottom-1 sm:bottom-2 left-0 right-0 h-3 sm:h-4 bg-[#FFE600] -z-10 rounded-[2px]"
                  aria-hidden="true"
                />
                Terms of Use
              </span>
            </h1>

            <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              <p>
                Welcome to Globizhub India Pvt Ltd (“Globizhub”, “GHPL”, “we”, “our”, or “us”). These Terms &amp; Conditions
                govern your access to and use of our digital platforms, enterprise software engineering services, cloud
                products (including Patholab.cloud and Bungzo), and strategic advisory engagements.
              </p>
              <p>
                By accessing, browsing, or utilizing Globizhub.com or contracting any of our engineering capabilities, you
                acknowledge that you have read, understood, and agreed to be bound by these Terms of Use and our
                accompanying Privacy Policy.
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
              {/* Tab 1: Description of Services */}
              <section id="tab1" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-[28px] font-bold text-slate-900 tracking-tight mb-4 pb-2 border-b border-slate-100">
                  Description of Services
                </h2>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                  Globizhub India Pvt Ltd offers a comprehensive suite of enterprise digital products, technology
                  consulting, and cloud software engineering services, including:
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-[#fc7754]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <CoralCheckIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">
                        Enterprise Software Engineering
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        Architecting full-stack web and mobile applications, microservices, cloud migrations, and
                        high-throughput distributed systems backed by ISO 9001 and ISO/IEC 27001 certifications.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-[#fc7754]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <CoralCheckIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">
                        Proprietary Cloud Platforms (SaaS)
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        Licensing and hosting specialized digital platforms including Patholab.cloud (Laboratory Information
                        Management System) and Bungzo on-demand delivery logistics infrastructure.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-[#fc7754]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <CoralCheckIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">
                        Strategic Advisory &amp; Digital Optimization
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        Online marketing systems, data provision, business listings, SEO optimization tools, webinar
                        infrastructure, and technical due-diligence consulting.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <strong className="text-slate-900 font-bold">NOTE: </strong>
                  Globizhub India Pvt Ltd reserves the right to amend, augment, or decommission any service offering or
                  technical specification with prior notice in accordance with active Master Services Agreements (MSAs).
                </div>
              </section>

              {/* Tab 2: Member Account, Password and Security */}
              <section id="tab2" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-[28px] font-bold text-slate-900 tracking-tight mb-4 pb-2 border-b border-slate-100">
                  Member Account, Password and Security
                </h2>
                <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                  <p>
                    Clients and authorized users accessing Globizhub customer portals, staging environments, or SaaS
                    instances are responsible for maintaining the strict confidentiality of their access credentials:
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    "You are entirely responsible for maintaining the confidentiality of your password, API keys, and account tokens.",
                    "You agree to notify Globizhub immediately of any unauthorized use of your account or any other breach of security.",
                    "Globizhub will not be liable for any loss or damage incurred as a result of someone else using your password or account, either with or without your knowledge.",
                    "You may not use anyone else's account at any time without the express permission of the account holder.",
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

              {/* Tab 3: Disclaimer of Warranties */}
              <section id="tab3" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-[28px] font-bold text-slate-900 tracking-tight mb-4 pb-2 border-b border-slate-100">
                  Disclaimer of Warranties
                </h2>
                <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                  <p>
                    You expressly agree that use of Globizhub services and digital platforms is at your sole risk. All
                    services and software deliverables are provided on an “AS IS” and “AS AVAILABLE” basis, unless
                    expressly stated otherwise under an executed Service Level Agreement (SLA).
                  </p>
                  <p>
                    Globizhub expressly disclaims all warranties of any kind, whether express or implied, including, but not
                    limited to, the implied warranties of merchantability, fitness for a particular purpose, and
                    non-infringement. We do not warrant that services will be uninterrupted, timely, secure, or error-free,
                    though we uphold rigorous ISO 20000 ITIL standards to remediate any operational anomalies.
                  </p>
                </div>
              </section>

              {/* Tab 4: Limitation of Liability */}
              <section id="tab4" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-[28px] font-bold text-slate-900 tracking-tight mb-4 pb-2 border-b border-slate-100">
                  Limitation of Liability
                </h2>
                <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                  <p>
                    In no event shall Globizhub India Pvt Ltd, its directors, employees, or technical partners be liable for
                    any direct, indirect, incidental, special, consequential, or exemplary damages, including damages for
                    loss of profits, goodwill, data, or business interruption arising out of or in connection with the use or
                    inability to use our services.
                  </p>
                  <p>
                    To the maximum extent permitted by applicable law, Globizhub's aggregate liability under any claim
                    shall not exceed the total fees paid by the client to Globizhub during the three (3) months preceding the
                    event giving rise to liability.
                  </p>
                </div>
              </section>

              {/* Tab 5: Termination and Suspension */}
              <section id="tab5" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-[28px] font-bold text-slate-900 tracking-tight mb-4 pb-2 border-b border-slate-100">
                  Termination and Suspension
                </h2>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                  Globizhub may terminate or suspend access to our digital services immediately, without prior notice or
                  liability, under the following circumstances:
                </p>

                <div className="space-y-4">
                  {[
                    "Breach or violation of any provision of these Terms of Use or applicable Statement of Work (SOW).",
                    "Non-payment of undisputed fees following statutory cure notices.",
                    "Engagement in unlawful activities, malicious network attacks, or reverse engineering of proprietary code.",
                    "Requests by law enforcement, judicial directives, or government regulatory bodies.",
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

              {/* Tab 6: Proprietary Rights to Content */}
              <section id="tab6" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-[28px] font-bold text-slate-900 tracking-tight mb-4 pb-2 border-b border-slate-100">
                  Proprietary Rights to Content
                </h2>
                <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                  <p>
                    All content presented on Globizhub.com—including source code, architectural schemas, designs, text,
                    graphics, and trademarks—is the exclusive intellectual property of Globizhub India Pvt Ltd and
                    protected by Indian and international copyright and intellectual property laws.
                  </p>
                  <p>
                    Custom software engineering deliverables developed exclusively for clients are assigned in accordance
                    with the intellectual property transfer clauses of individual commercial agreements upon receipt of full
                    payment.
                  </p>
                </div>
              </section>

              {/* Tab 7: Modifications to Terms and Conditions */}
              <section id="tab7" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-[28px] font-bold text-slate-900 tracking-tight mb-4 pb-2 border-b border-slate-100">
                  Modifications to Terms and Conditions
                </h2>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  Globizhub reserves the right to modify or replace these Terms of Use at any time. Material changes will
                  be published on this page with an updated revision date. Continued usage of our website and services after
                  such modifications constitutes your binding acceptance of the revised Terms.
                </p>
              </section>

              {/* Tab 8: Governing Law & Jurisdiction */}
              <section id="tab8" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-[28px] font-bold text-slate-900 tracking-tight mb-4 pb-2 border-b border-slate-100">
                  Governing Law &amp; Jurisdiction
                </h2>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  These Terms of Use shall be governed by, interpreted, and construed in accordance with the substantive
                  laws of the Republic of India. Any legal dispute, controversy, or claim arising out of or relating to
                  these terms or services provided by Globizhub India Pvt Ltd shall be subject to the exclusive
                  jurisdiction of the competent courts situated in Guwahati, Assam, India.
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
