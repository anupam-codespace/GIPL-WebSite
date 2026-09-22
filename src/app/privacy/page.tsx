"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import ConsultationModal from "@/components/marketing/ConsultationModal";

// Table of contents matching Appinventiv exactly
const TOC_ITEMS = [
  { id: "tab1", label: "Information that we collect from you." },
  { id: "tab2", label: "Use of cookies" },
  { id: "tab3", label: "Use of your information that we collect" },
  { id: "tab4", label: "Saving your personal information" },
  { id: "tab5", label: "Disclosing your data" },
  { id: "tab6", label: "Imbibing third party links or websites" },
  { id: "tab7", label: "Amendments to this privacy policy" },
  { id: "tab8", label: "Your acceptance to this privacy policy and terms." },
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

export default function PrivacyPolicyPage() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("tab1");

  // Smooth scroll handler with offset for fixed header
  const scrollTo = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -110;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Scroll spy to highlight active TOC item
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
          {/* Breadcrumb (< Home / Privacy Policy) */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 mb-8 sm:mb-10 font-medium">
            <span className="text-[#0092ff] text-base leading-none select-none">‹</span>
            <Link
              href="/"
              className="text-[#0092ff] hover:underline transition-colors"
            >
              Home
            </Link>
            <span className="text-slate-400">/</span>
            <span className="text-slate-700 font-semibold">Privacy Policy</span>
          </nav>

          {/* Header Title Section with Signature Yellow Marker Highlight */}
          <header className="mb-12 sm:mb-16 max-w-4xl">
            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-black tracking-tight text-slate-950 mb-6 leading-tight">
              <span className="relative inline-block z-0">
                <span
                  className="absolute bottom-1 sm:bottom-2 left-0 right-0 h-3 sm:h-4 bg-[#FFE600] -z-10 rounded-[2px]"
                  aria-hidden="true"
                />
                Privacy Policy
              </span>
            </h1>

            <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              <p>
                At Globizhub, we are dedicated to shielding and preserving the privacy of our clients and visitors. This
                statement aims to provide a detailed overview of how Globizhub will use and process your personal data.
                Please note that by visiting, seeing, and using Globizhub.com, you accept our policy, terms & conditions,
                and practices mentioned in this Privacy Policy page.
              </p>
              <p>
                This Privacy Policy explains how we utilize the personal information you provide or collect from you
                while you visit our website. Also, we periodically update this policy page, and we encourage you to
                review it regularly for any changes.
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
              {/* Tab 1: Information that we collect from you */}
              <section id="tab1" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-[28px] font-bold text-slate-900 tracking-tight mb-4 pb-2 border-b border-slate-100">
                  Information that we collect from you
                </h2>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                  While visiting our website, we may collect and process the below mentioned information about you:
                </p>

                <div className="space-y-6">
                  {/* Bullet 1 */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-[#fc7754]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <CoralCheckIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">
                        Why you are visiting our website?
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        This involves collecting information about your visits, including the pages you viewed and the
                        resources you accessed. This information encompasses traffic data, communication data, and
                        location data.
                      </p>
                    </div>
                  </div>

                  {/* Bullet 2 */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-[#fc7754]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <CoralCheckIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">
                        Information Voluntarily Shared By You
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        Your voluntarily provided data is an essential component of our personalized service,
                        guaranteeing that your data is handled securely in compliance with our privacy policies.
                      </p>
                    </div>
                  </div>

                  {/* Bullet 3 */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-[#fc7754]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <CoralCheckIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">
                        Data That You Provide While You Contact Us
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        Your communication with us encompasses sharing essential data and fostering a transparent
                        exchange of information that is treated with utmost confidentiality and in compliance with our
                        privacy standards.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <strong className="text-slate-900 font-bold">NOTE: </strong>
                  We DO NOT save any payment details, including your financial details, credit card, or bank account
                  details while processing any kind of payment.
                </div>
              </section>

              {/* Tab 2: Use of cookies */}
              <section id="tab2" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-[28px] font-bold text-slate-900 tracking-tight mb-4 pb-2 border-b border-slate-100">
                  Use of cookies
                </h2>
                <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                  <p>
                    Cookies provide information regarding the operating system used by a visitor. We may use cookies to
                    gather data about your system so that it can assist us in enhancing our website. By using the cookie
                    feature, we may also collect information about general Internet use. As we said earlier, the
                    information we save will not identify you personally. It's just statistical data and does not
                    identify any personal details whatsoever. If you don't want us to save your data, you can adjust
                    the settings on your computer to decline the cookies if you wish.
                  </p>
                  <p className="font-semibold text-slate-900">
                    Here are some of the cookies that we utilize for different purposes:
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Technical Cookies */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-[#fc7754]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <CoralCheckIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">
                        Technical Cookies
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        These cookies manage functions like logging in, filling out forms, and modifying privacy
                        settings necessary for optimal website functionality. Certain site features may not display and
                        perform properly if your browser is set to block these cookies.
                      </p>
                    </div>
                  </div>

                  {/* Customization Cookies */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-[#fc7754]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <CoralCheckIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">
                        Customization Cookies
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        These cookies help us improve website personalization and functionality, whether established by
                        us or third-party providers. If you disable these cookies, some services on our pages might not
                        work as intended, impacting your customized experience.
                      </p>
                    </div>
                  </div>

                  {/* Behavioral Advertising Cookies */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-[#fc7754]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <CoralCheckIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">
                        Behavioral Advertising Cookies
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        These cookies are used to build a user profile for targeted advertising on other websites set by
                        our advertising partners. If you reject these cookies, you might see less tailored
                        advertisements when you browse the internet.
                      </p>
                    </div>
                  </div>

                  {/* Performance Cookies */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-[#fc7754]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <CoralCheckIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">
                        Performance Cookies
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        These cookies allow us to measure and enhance the performance of our site by tracking the
                        number of visits and traffic sources. If you disable these cookies, it will prevent us from
                        tracking your site visits and improve the website's performance as a whole.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Tab 3: Use of your information that we collect */}
              <section id="tab3" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-[28px] font-bold text-slate-900 tracking-tight mb-4 pb-2 border-b border-slate-100">
                  Use of the Information That We Collect
                </h2>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                  We just use the data we collect from you to provide you with our services. Additionally, we may use the
                  information for one or more of the below-mentioned purposes:
                </p>

                <div className="space-y-4">
                  {[
                    "To quickly provide you the glance of information that you requested from us related to our products or services",
                    "To help you provide the information related to other products that may interest you. However, such additional information will only be sent to you if you have consented to receive the information",
                    "To notify you of the changes to our website, services, and products",
                    "We may also send you the information and details of our products or services if you have previously availed any of them",
                    "With your prior consent, we may permit the chosen third parties to use your information to provide details about products and services that may interest you",
                    "You have the option to withdraw your consent at any time",
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

              {/* Tab 4: Saving your personal information */}
              <section id="tab4" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-[28px] font-bold text-slate-900 tracking-tight mb-4 pb-2 border-b border-slate-100">
                  Saving your personal information
                </h2>
                <div className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
                  <p>
                    By providing your personal information, you agree to this access. We do our best to ensure that all
                    the required steps are taken to save your data securely.
                  </p>
                  <p>
                    Unfortunately, the information you send online is not fully secure and can be intercepted easily. We
                    cannot guarantee the security of the data sent to us electronically because sending such information
                    is completely at your own risk.
                  </p>
                </div>
              </section>

              {/* Tab 5: Disclosing your data */}
              <section id="tab5" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-[28px] font-bold text-slate-900 tracking-tight mb-4 pb-2 border-b border-slate-100">
                  Disclosing your data
                </h2>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  We do not sell, trade, or rent our end-users' personal or identity information to third parties. We may
                  share the generic aggregated information, which is not related to any personal identification
                  information regarding visitors and users, with our trusted affiliates, business partners, and
                  advertisers for marketing purposes.
                </p>
              </section>

              {/* Tab 6: Imbibing third party links or websites */}
              <section id="tab6" className="scroll-mt-28 space-y-8">
                <div>
                  <h2 className="text-2xl sm:text-[28px] font-bold text-slate-900 tracking-tight mb-4 pb-2 border-b border-slate-100">
                    Imbibing Third-Party Links or Websites
                  </h2>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    Sometimes, we may include links to third parties on the website. And, even though we may provide a
                    link to third parties, that does not mean we endorse or approve our site’s policy towards visitor
                    privacy. It is imperative that users independently evaluate these third-party websites' privacy
                    policies because they may have different privacy standards. When navigating any external website
                    from our platform, we advise you to use it cautiously and familiarize yourself with its privacy
                    policies.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-3">
                    Embedded Sharing Widgets
                  </h3>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    Certain pages might have widgets or embedded share buttons that let you share content with friends on
                    other social networking sites. We advise you to be aware that these social media platforms might use
                    cookies that could allow them to identify you uniquely.
                  </p>
                </div>
              </section>

              {/* Tab 7: Amendments to this privacy policy */}
              <section id="tab7" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-[28px] font-bold text-slate-900 tracking-tight mb-4 pb-2 border-b border-slate-100">
                  Amendments to this privacy policy
                </h2>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  We hold the right to update this privacy policy anytime, and any amendments will be reflected by
                  revising the updated date on the page. We encourage users to check the page frequently for any changes
                  so that they can stay informed about the steps we are taking to protect the personal information that
                  we collect. Thus, we consider that you acknowledge and agree that it's solely your responsibility to
                  check and review the privacy policy frequently and periodically and remain aware of the updates and
                  latest modifications.
                </p>
              </section>

              {/* Tab 8: Your acceptance to this privacy policy and terms */}
              <section id="tab8" className="scroll-mt-28">
                <h2 className="text-2xl sm:text-[28px] font-bold text-slate-900 tracking-tight mb-4 pb-2 border-b border-slate-100">
                  Your Acceptance of this Policy’s Terms and Conditions
                </h2>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  If you are using our website, you signify your acceptance of this privacy policy. And, if you don't
                  agree to the policy, please do not use Globizhub's site. Your continued use of Globizhub's site
                  following the sharing of changes to this privacy policy will be deemed as your acceptance of those
                  updates and changes.
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
