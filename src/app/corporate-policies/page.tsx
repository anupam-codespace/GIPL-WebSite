"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import ConsultationModal from "@/components/marketing/ConsultationModal";

const TOC_ITEMS = [
  { id: "tab1", label: "Code of Business Conduct & Ethics" },
  { id: "tab2", label: "Anti-Bribery & Anti-Corruption (ABC)" },
  { id: "tab3", label: "Whistleblower & Non-Retaliation Policy" },
  { id: "tab4", label: "Equal Opportunity & Non-Discrimination" },
  { id: "tab5", label: "Prevention of Sexual Harassment (POSH)" },
  { id: "tab6", label: "Intellectual Property & Confidentiality" },
  { id: "tab7", label: "Environmental, Social & Governance (ESG)" },
  { id: "tab8", label: "Compliance Monitoring & Governance Contact" },
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

export default function CorporatePoliciesPage() {
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
            <span className="text-slate-700 font-semibold">Corporate Policies</span>
          </nav>

          {/* Header Title Section with Signature Yellow Marker Highlight */}
          <header className="mb-12 sm:mb-16 max-w-4xl">
            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-black tracking-tight text-slate-950 mb-6 leading-tight">
              <span className="relative inline-block z-0">
                <span
                  className="absolute bottom-1 sm:bottom-2 left-0 right-0 h-3 sm:h-4 bg-[#FFE600] -z-10 rounded-[2px]"
                  aria-hidden="true"
                />
                Corporate Policies
              </span>
            </h1>

            <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              <p>
                Globizhub India Pvt Ltd (“Globizhub”) is anchored by unwavering principles of corporate governance,
                transparency, human dignity, and environmental responsibility.
              </p>
              <p>
                Our corporate policies define the ethical and operational standards upheld by every executive, engineer,
                consultant, and partner across our offices in Bengaluru, Guwahati, Chennai, and Delhi.
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
              {/* Tab 1: Code of Business Conduct & Ethics */}
              <section id="tab1" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-[28px] font-bold text-slate-900 tracking-tight mb-4 pb-2 border-b border-slate-100">
                  Code of Business Conduct &amp; Ethics
                </h2>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                  We expect all employees and contractors to uphold the highest standards of integrity:
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-[#fc7754]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <CoralCheckIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">
                        Professional Honesty &amp; Transparency
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        Accurate reporting in all client communications, architectural scoping documents, billing, and
                        regulatory filings with zero toleration for fraudulent or misleading practices.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-[#fc7754]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <CoralCheckIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">
                        Conflicts of Interest
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        Employees must disclose any external commercial engagements, advisory roles, or personal
                        interests that could conflict with Globizhub's obligations to its clients.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Tab 2: Anti-Bribery & Anti-Corruption (ABC) */}
              <section id="tab2" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-[28px] font-bold text-slate-900 tracking-tight mb-4 pb-2 border-b border-slate-100">
                  Anti-Bribery &amp; Anti-Corruption (ABC)
                </h2>
                <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                  <p>
                    Globizhub maintains a strict zero-tolerance stance against bribery and corrupt practices, adhering to
                    the Prevention of Corruption Act 1988 (India), the US Foreign Corrupt Practices Act (FCPA), and UK
                    Bribery Act:
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    "Prohibition of Bribes: No employee or agent may offer, promise, give, request, or accept any bribe, kickback, or illicit inducement in any commercial or governmental transaction.",
                    "Gifts and Hospitality: Modest business courtesies must be customary, transparent, and comply with our internal financial approval thresholds (< ₹5,000 INR / $60 USD).",
                    "Facilitation Payments: Facilitation payments to expedite routine administrative procedures are strictly prohibited.",
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

              {/* Tab 3: Whistleblower & Non-Retaliation Policy */}
              <section id="tab3" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-[28px] font-bold text-slate-900 tracking-tight mb-4 pb-2 border-b border-slate-100">
                  Whistleblower &amp; Non-Retaliation Policy
                </h2>
                <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                  <p>
                    We provide secure, confidential channels for reporting suspected violations of company policies or
                    applicable laws without fear of reprisal:
                  </p>
                  <p>
                    • <strong className="text-slate-900 font-semibold">Strict Non-Retaliation:</strong> Globizhub prohibits any
                    form of retaliation, demotion, harassment, or adverse action against an individual who reports a concern
                    in good faith.
                  </p>
                  <p>
                    • <strong className="text-slate-900 font-semibold">Independent Investigation:</strong> All reports are
                    investigated by an independent compliance committee overseen by the Board of Directors.
                  </p>
                </div>
              </section>

              {/* Tab 4: Equal Opportunity & Non-Discrimination */}
              <section id="tab4" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-[28px] font-bold text-slate-900 tracking-tight mb-4 pb-2 border-b border-slate-100">
                  Equal Opportunity &amp; Non-Discrimination
                </h2>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                  Globizhub is committed to fostering an inclusive, merit-based workplace free from discrimination:
                </p>

                <div className="space-y-4">
                  {[
                    "Hiring, compensation, training, and advancement decisions are based strictly on technical competence, merit, and performance.",
                    "Zero discrimination on the basis of race, color, religion, caste, gender, sexual orientation, disability, age, or marital status.",
                    "Active promotion of gender diversity across engineering leadership, research, and executive positions.",
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

              {/* Tab 5: Prevention of Sexual Harassment (POSH) */}
              <section id="tab5" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-[28px] font-bold text-slate-900 tracking-tight mb-4 pb-2 border-b border-slate-100">
                  Prevention of Sexual Harassment (POSH)
                </h2>
                <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                  <p>
                    In accordance with India’s Sexual Harassment of Women at Workplace (Prevention, Prohibition and
                    Redressal) Act, 2013 (POSH Act), Globizhub maintains a formal Internal Complaints Committee (ICC):
                  </p>
                  <p>
                    The ICC is presided over by senior female leadership alongside independent external legal advisors. All
                    complaints are handled with utmost confidentiality, sensitivity, and swift inquiry completion within 90
                    days.
                  </p>
                </div>
              </section>

              {/* Tab 6: Intellectual Property & Confidentiality */}
              <section id="tab6" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-[28px] font-bold text-slate-900 tracking-tight mb-4 pb-2 border-b border-slate-100">
                  Intellectual Property &amp; Confidentiality
                </h2>
                <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                  <p>
                    We maintain comprehensive contractual and cryptographic firewalls to safeguard intellectual property:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                      <span className="text-sm font-bold text-slate-900 block mb-1">Client IP Protection</span>
                      <span className="text-xs text-slate-600">
                        Custom algorithms, proprietary schemas, and business logic developed for clients are protected by
                        enforceable NDAs and assigned per SOW terms.
                      </span>
                    </div>
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                      <span className="text-sm font-bold text-slate-900 block mb-1">Open Source Governance</span>
                      <span className="text-xs text-slate-600">
                        All third-party libraries and open-source dependencies undergo automated license audits to prevent
                        GPL viral copyleft contamination.
                      </span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Tab 7: Environmental, Social & Governance (ESG) */}
              <section id="tab7" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-[28px] font-bold text-slate-900 tracking-tight mb-4 pb-2 border-b border-slate-100">
                  Environmental, Social &amp; Governance (ESG)
                </h2>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                  Globizhub integrates sustainable practices throughout its engineering lifecycle:
                </p>

                <div className="space-y-4">
                  {[
                    "Green Cloud Optimization: Architecting carbon-efficient, auto-scaling serverless and ARM-based cloud workloads to reduce energy consumption.",
                    "E-Waste Stewardship: Certified recycling and disposal of deprecated computing hardware in accordance with statutory environmental norms.",
                    "Community & Education: Sponsoring technical training workshops, university partnerships, and open-source contributions across northeast India and beyond.",
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

              {/* Tab 8: Compliance Monitoring & Governance Contact */}
              <section id="tab8" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-[28px] font-bold text-slate-900 tracking-tight mb-4 pb-2 border-b border-slate-100">
                  Compliance Monitoring &amp; Governance Contact
                </h2>
                <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                  <p>
                    For compliance inquiries, whistleblower reports, or governance documentation requests, contact our
                    Ethics Committee:
                  </p>
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-2">
                    <p className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                      Globizhub Governance &amp; Ethics Committee
                    </p>
                    <p className="text-sm text-slate-600">
                      Email:{" "}
                      <a href="mailto:admin@globizhub.com" className="text-blue-600 hover:underline font-medium">
                        admin@globizhub.com
                      </a>
                    </p>
                    <p className="text-sm text-slate-600">
                      POSH &amp; Compliance Inquiries:{" "}
                      <a href="mailto:support@globizhub.com" className="text-blue-600 hover:underline font-medium">
                        support@globizhub.com
                      </a>
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
