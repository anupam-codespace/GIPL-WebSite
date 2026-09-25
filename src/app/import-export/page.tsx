"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Check,
  Globe2,
  FileCheck,
  ShieldCheck,
  Scale,
  Landmark,
  Coins,
  Warehouse,
  Ship,
  Sparkles,
  Mail,
  Send,
  X,
  Phone,
  Layers,
  Wheat,
  Cog,
  Boxes,
} from "lucide-react";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import ConsultationModal from "@/components/marketing/ConsultationModal";

export default function ImportExportPage() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);

  // Dedicated Trade Enquiry Form State
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailId, setEmailId] = useState("");
  const [tradeDirection, setTradeDirection] = useState("Export from India (Outbound)");
  const [commodity, setCommodity] = useState("");
  const [originDestination, setOriginDestination] = useState("");
  const [volume, setVolume] = useState("Full Container Load (FCL - 20ft / 40ft)");
  const [tradeNotes, setTradeNotes] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleEnquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!fullName.trim() || !phoneNumber.trim() || !emailId.trim()) {
      setErrorMessage("Please complete your name, phone number, and email address.");
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: fullName.trim(),
          phoneNumber: phoneNumber.trim(),
          email: emailId.trim(),
          leadType: "vertical",
          pageName: "Import & Export",
          pageSection: "Allied Verticals · Import & Export",
          tradeDirection,
          commodity,
          originDestination,
          volume,
          subject: `Import & Export Inquiry - ${tradeDirection}`,
          message: `Trade Intent: ${tradeDirection}\nCommodity: ${commodity}\nTrade Route: ${originDestination}\nVolume: ${volume}\nSpecifications: ${tradeNotes}`,
          source: "import_export_page",
        }),
      });

      if (!res.ok) {
        throw new Error("Unable to transmit trade inquiry. Please try again.");
      }

      setSubmitted(true);
    } catch (err: any) {
      setErrorMessage(err.message || "Something went wrong. Please connect via WhatsApp or email directly.");
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setFullName("");
    setPhoneNumber("");
    setEmailId("");
    setTradeDirection("Export from India (Outbound)");
    setCommodity("");
    setOriginDestination("");
    setVolume("Full Container Load (FCL - 20ft / 40ft)");
    setTradeNotes("");
    setSubmitted(false);
    setErrorMessage("");
    setEnquiryModalOpen(false);
  };

  const whatsappUrl =
    "https://wa.me/918402010207?text=Hi%20Globizhub%20Trade%20Desk%2C%20I%20am%20inquiring%20about%20Import%20%26%20Export%20trade%20execution%20(Commodity%20Sourcing%20%2F%20Customs%20%2F%20Trade%20Finance).%20I%20would%20like%20to%20discuss%20bilateral%20trade%20opportunities.";

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Universal Floating Header */}
      <SiteHeader onOpenConsultation={() => setConsultationOpen(true)} />

      {/* ======================================================== */}
      {/* 1. COMPACT RECTANGULAR HERO SECTION                      */}
      {/* ======================================================== */}
      <section className="pt-28 pb-10 sm:pt-32 sm:pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Back Button */}
        <div className="mb-4 sm:mb-6">
          <Link
            href="/about#allied-ventures"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-slate-50/80 hover:bg-slate-100 text-xs font-semibold text-slate-700 hover:text-slate-950 transition-all duration-200 shadow-sm group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-x-1" />
            <span>Back to Allied Verticals</span>
          </Link>
        </div>

        {/* Rectangular Hero Banner with Global Port Trade Wallpaper */}
        <div
          className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-950"
          style={{
            backgroundImage: "url('/images/trade-hero-terminal.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Subtle gradient overlay to guarantee text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/80 to-black/60 backdrop-blur-[1px]" />

          <div className="relative z-10 p-6 sm:p-10 md:p-12 lg:p-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              {/* Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4 leading-tight">
                Import &amp; Export
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal mb-6 max-w-xl">
                Sovereign cross-border commodity trade execution, tariff risk compliance, structured trade finance, and bilateral supply-chain fulfillment across global corridors.
              </p>
            </div>

            {/* Right Column: Sovereign Trade Protocol Card (Desktop) */}
            <div className="hidden lg:flex flex-col gap-3 min-w-[280px]">
              <div className="rounded-2xl border border-white/20 bg-black/50 backdrop-blur-md p-5 text-white shadow-2xl">
                <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-bold">
                    Trade Governance
                  </span>
                  <span className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-mono">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    SOVEREIGN COMPLIANT
                  </span>
                </div>
                <div className="space-y-2.5 text-xs text-slate-300">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Export Jurisdiction:</span>
                    <span className="font-semibold text-white">DGFT / CBIC India</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Financial Instruments:</span>
                    <span className="font-semibold text-emerald-400">Irrevocable LC &amp; DP/DA</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Tariff Optimization:</span>
                    <span className="font-semibold text-white">100% FTA &amp; HS Accuracy</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Quality Inspection:</span>
                    <span className="font-semibold text-white">SGS / Bureau Veritas Aligned</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. MAIN CONTENT SECTION (STRICTLY WHITE BACKGROUND)      */}
      {/* ======================================================== */}
      <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Executive Overview */}
          <div className="max-w-3xl mb-14 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 mb-6">
              Sovereign Trade Execution Engineered for Global Commerce
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4">
              At <strong className="font-semibold text-slate-900">Globizhub India Private Limited</strong>, our Import &amp; Export operations bridge certified domestic manufacturers, agricultural conglomerates, and industrial producers with institutional buyers and sovereign supply chains across the Middle East, Southeast Asia, Europe, and the Americas.
            </p>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              We eliminate international trade friction by integrating end-to-end regulatory compliance, multi-currency trade financing, bonded port logistics, and certified pre-shipment quality inspection protocols.
            </p>
          </div>

          {/* ======================================================== */}
          {/* 3. CORE TRADE DIVISIONS WITH GENERATED HIGH-RES PHOTOS   */}
          {/* ======================================================== */}
          <div className="space-y-20 sm:space-y-28 mb-20 sm:mb-28">
            {/* Division 1: Agricultural Commodities & Organic Spices Export */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono font-bold text-emerald-800 mb-3">
                  <Wheat className="w-4 h-4" />
                  <span>Sector 01 · Agro-Commodities &amp; Spices Export</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mb-4">
                  1. Agricultural Commodities, Grains &amp; Organic Spices
                </h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  India produces some of the world’s finest agro-commodities. Our export desk manages origin-to-port supply chains for premium Basmati and non-Basmati rice, organic turmeric, green cardamom, Malabar black pepper, Ceylon cinnamon, oilseeds, and Assam tea. Every shipment undergoes mandatory phytosanitary inspection, aflatoxin testing, and export fumigation.
                </p>

                {/* Key Capabilities */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90">
                    <span className="font-bold text-slate-950 block mb-1">
                      Certified Organic &amp; Non-GMO
                    </span>
                    Compliant with APEDA, USDA Organic, and EU food safety standards with full batch traceability.
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90">
                    <span className="font-bold text-slate-950 block mb-1">
                      Hermetic &amp; Jute Packaging
                    </span>
                    Moisture-proof GrainPro liners and multi-wall export-grade jute bags preventing spoilage during ocean transit.
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90">
                    <span className="font-bold text-slate-950 block mb-1">
                      Pre-Shipment Lab Certification
                    </span>
                    Independent chemical and microbiological testing reports issued by certified inspection authorities prior to vessel loading.
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90">
                    <span className="font-bold text-slate-950 block mb-1">
                      Bilateral Trade Quota Management
                    </span>
                    Facilitating preferential tariff quota allocations across Gulf Cooperation Council (GCC) and European trade agreements.
                  </div>
                </div>
              </div>

              {/* Photo: Agri Commodities */}
              <div className="lg:col-span-6 order-1 lg:order-2">
                <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl bg-slate-100 aspect-[16/9] w-full">
                  <Image
                    src="/images/trade-agri-commodities.jpg"
                    alt="Export-Grade Agricultural Commodity Warehouse with Indian Basmati Rice, Jute Bags, and Organic Whole Spices"
                    fill
                    priority
                    className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                  />
                </div>
              </div>
            </div>

            {/* Division 2: Industrial Raw Materials & Engineered Metal Goods */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Photo: Industrial Goods */}
              <div className="lg:col-span-6">
                <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl bg-slate-100 aspect-[16/9] w-full">
                  <Image
                    src="/images/trade-industrial-goods.jpg"
                    alt="High-Tech Industrial Export Logistics Warehouse with Heavy Steel Coils and Precision CNC Engineered Metal Parts"
                    fill
                    className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                  />
                </div>
              </div>

              {/* Content: Industrial Goods */}
              <div className="lg:col-span-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-bold text-[#1163FB] mb-3">
                  <Cog className="w-4 h-4" />
                  <span>Sector 02 · Industrial Materials &amp; Metals</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mb-4">
                  2. Industrial Raw Materials &amp; Precision Components
                </h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  Bridging tier-one metallurgical refineries and precision manufacturing hubs with overseas industrial fabricators. We coordinate trade and transport for hot/cold rolled steel coils, stainless steel billets, aluminum extrusions, industrial fasteners, and CNC machined casting assemblies.
                </p>

                {/* Key Capabilities */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90">
                    <span className="font-bold text-slate-950 block mb-1">
                      Mill Test Certificates (MTC 3.1)
                    </span>
                    100% chemical composition and tensile strength verification matching ASTM, DIN, and EN specifications.
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90">
                    <span className="font-bold text-slate-950 block mb-1">
                      Anti-Corrosion Export Packaging
                    </span>
                    Vapor Corrosion Inhibitor (VCI) wrapping, moisture-absorbing desiccants, and heavy wooden palletizing.
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90">
                    <span className="font-bold text-slate-950 block mb-1">
                      Breakbulk &amp; Heavy-Lift Charters
                    </span>
                    Specialized non-containerized vessel space for oversized pipes, structural beams, and heavy industrial machinery.
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90">
                    <span className="font-bold text-slate-950 block mb-1">
                      Just-in-Time Factory Staging
                    </span>
                    Buffer warehousing at bonded destination ports enabling localized JIT deliveries to automotive and aerospace assemblers.
                  </div>
                </div>
              </div>
            </div>

            {/* Division 3: Deepwater Bonded Port Terminals & Global Corridors */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono font-bold text-slate-800 mb-3">
                  <Ship className="w-4 h-4" />
                  <span>Sector 03 · Bonded Terminal Orchestration</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mb-4">
                  3. Bonded Free-Trade Zones &amp; Bilateral Corridors
                </h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  Cross-border trade requires seamless interfacing at international ports of entry. We operate across key maritime hubs including Nhava Sheva (JNPA), Mundra, Chennai, and Kolkata, extending outward to Jebel Ali (Dubai), Port of Singapore, Rotterdam, and Los Angeles.
                </p>

                {/* Key Capabilities */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90">
                    <span className="font-bold text-slate-950 block mb-1">
                      FTWZ (Free Trade Warehousing Zones)
                    </span>
                    Duty-deferred transshipment, value-added packaging, labeling, and re-export without upfront customs duties.
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90">
                    <span className="font-bold text-slate-950 block mb-1">
                      Automated ICEGATE &amp; EDI Clearance
                    </span>
                    Direct electronic filing of Shipping Bills and Bills of Entry with automated duty calculations and risk management scans.
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90">
                    <span className="font-bold text-slate-950 block mb-1">
                      Multi-Currency Letters of Credit (LC)
                    </span>
                    Complete handling of documentary credits, bank guarantees, and export-import currency risk hedging.
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90">
                    <span className="font-bold text-slate-950 block mb-1">
                      Sovereign Bilateral Compliance
                    </span>
                    Zero tariff ambiguity through verified Country of Origin certificates, CEPA, and SAFTA preferential tariff filings.
                  </div>
                </div>
              </div>

              {/* Photo: Port Terminal */}
              <div className="lg:col-span-6 order-1 lg:order-2">
                <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl bg-slate-100 aspect-[16/9] w-full">
                  <Image
                    src="/images/trade-hero-terminal.jpg"
                    alt="Panoramic Deepwater Trade Terminal Port with Container Gantry Cranes Loading Ships at Sunset"
                    fill
                    className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* 4. TRADE ASSURANCE & REGULATORY COMPLIANCE PILLARS       */}
          {/* ======================================================== */}
          <div className="mb-16 sm:mb-20">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mb-8 text-center">
              Sovereign Trade Execution Capabilities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200/90 hover:border-[#1163FB] transition-all">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#1163FB] mb-5 shadow-sm">
                  <FileCheck className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-950 mb-2">
                  DGFT &amp; Tariff Advisory
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Importer-Exporter Code (IEC) compliance, export incentive optimization (RoDTEP / RoSCTL), and expert HS code tariff classification.
                </p>
              </div>

              <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200/90 hover:border-[#1163FB] transition-all">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#1163FB] mb-5 shadow-sm">
                  <Landmark className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-950 mb-2">
                  Trade Finance &amp; LC Settlement
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Management of Irrevocable Letters of Credit, Documents Against Payment (DP/DA), escrow agreements, and FX currency risk hedging.
                </p>
              </div>

              <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200/90 hover:border-[#1163FB] transition-all">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#1163FB] mb-5 shadow-sm">
                  <Globe2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-950 mb-2">
                  Multimodal Freight Integration
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Direct connection with Globizhub’s Maritime and Air Freight networks: bonded warehousing, customs clearance, and global door delivery.
                </p>
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* 5. CONTACT & PARTNERSHIP DETAILS                         */}
          {/* ======================================================== */}
          <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 mb-12 sm:mb-16">
            <div className="max-w-3xl">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mb-4">
                Execute International Trade with Globizhub
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Whether you are exploring bulk agricultural sourcing, procuring industrial metals, or seeking sovereign compliance advisory for cross-border commodity trade, our international trade directors are at your disposal. Contact our trade desk via email:
              </p>

              {/* Email ID Display with Clickable Mailto Link - single support email */}
              <div className="inline-flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#1163FB] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                    International Trade &amp; Commodity Inquiries
                  </p>
                  <a
                    href="mailto:support@globizhub.com"
                    className="text-sm sm:text-base font-bold text-slate-950 hover:text-[#1163FB] transition-colors underline decoration-slate-300 hover:decoration-[#1163FB]"
                  >
                    support@globizhub.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* 6. CALL-TO-ACTION BUTTONS: ENQUIRE NOW ! & WHATSAPP       */}
          {/* ======================================================== */}
          <div className="pt-6 pb-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            {/* Button 1: "Enquire Now !" Styled like "Check All Industries" with Rolling Text & Tilted Arrow */}
            <button
              type="button"
              onClick={() => setEnquiryModalOpen(true)}
              className="group relative inline-flex items-center gap-3 px-8 py-4 border border-slate-950 bg-slate-950 text-white hover:bg-[#1163FB] hover:border-[#1163FB] text-sm font-bold rounded-full transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] overflow-hidden cursor-pointer shadow-lg w-full sm:w-auto justify-center"
            >
              <div className="relative h-5 overflow-hidden flex flex-col justify-center">
                <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full whitespace-nowrap">
                  Enquire Now !
                </span>
                <span className="absolute top-full left-0 block transition-transform duration-300 ease-out group-hover:-translate-y-full whitespace-nowrap text-white font-bold">
                  Enquire Now !
                </span>
              </div>
              <svg
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0"
              >
                <path
                  d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                  fill="currentColor"
                />
              </svg>
            </button>

            {/* Button 2: WhatsApp Button (8402010207) with Pre-filled Trade Message */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-8 py-4 border border-[#25D366] bg-[#25D366] text-white hover:bg-[#20ba59] hover:border-[#20ba59] text-sm font-bold rounded-full transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-lg shadow-[#25D366]/25 w-full sm:w-auto justify-center"
            >
              <svg
                className="w-4 h-4 fill-current shrink-0"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.275-.101-.475-.15-.675.15-.2.301-.776.979-.951 1.179-.176.2-.351.226-.652.076-.301-.15-1.272-.469-2.424-1.496-.897-.8-1.503-1.788-1.68-2.088-.176-.301-.019-.464.132-.614.136-.135.301-.351.451-.527.15-.176.2-.301.301-.501.101-.2.05-.376-.025-.526-.076-.151-.676-1.63-.927-2.232-.244-.588-.493-.508-.676-.517-.175-.01-.376-.01-.577-.01-.201 0-.527.075-.802.376-.275.301-1.053 1.029-1.053 2.509 0 1.48 1.078 2.909 1.229 3.11.15.201 2.122 3.24 5.141 4.544.718.31 1.279.496 1.716.634.721.229 1.377.196 1.895.119.578-.086 1.78-.727 2.031-1.43.251-.702.251-1.304.176-1.43-.075-.125-.276-.2-.577-.35zM12.04 21.785h-.008a9.86 9.86 0 0 1-5.027-1.378l-.36-.214-3.738.98 1-3.644-.236-.374a9.86 9.86 0 0 1-1.512-5.263C2.16 6.446 6.587 2.02 12.043 2.02c2.64 0 5.123 1.028 6.985 2.894a9.83 9.83 0 0 1 2.892 6.974c0 5.45-4.427 9.9-9.88 9.9zM12.04 0C5.4 0 .004 5.397.004 12.036c0 2.121.554 4.191 1.608 6.014L0 24l6.155-1.614a12.01 12.01 0 0 0 5.885 1.53h.005c6.636 0 12.033-5.397 12.033-12.037 0-3.217-1.252-6.242-3.53-8.52A11.96 11.96 0 0 0 12.04 0z" />
              </svg>
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 7. DEDICATED TRADE ENQUIRY MODAL                         */}
      {/* ======================================================== */}
      {enquiryModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div
            className="relative w-full max-w-lg rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={resetForm}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-950 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {!submitted ? (
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-950 mb-1">
                  Enquire for Import &amp; Export
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-6">
                  Specify trade direction, commodity type, target ports, and shipment volume.
                </p>

                {errorMessage && (
                  <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
                    {errorMessage}
                  </div>
                )}

                <form onSubmit={handleEnquirySubmit} className="space-y-4">
                  {/* Trade Direction Selector */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                      Trade Direction
                    </label>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {[
                        "Export from India (Outbound)",
                        "Import to India (Inbound)",
                        "Third-Country Cross Trade",
                        "Bilateral Commodity Contract",
                      ].map((dir) => (
                        <button
                          key={dir}
                          type="button"
                          onClick={() => setTradeDirection(dir)}
                          className={`p-2 rounded-xl text-left font-medium border transition-all ${
                            tradeDirection === dir
                              ? "bg-slate-950 text-white border-slate-950 shadow-sm"
                              : "bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300"
                          }`}
                        >
                          {dir}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Tariq Al-Mansoor"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#1163FB] focus:ring-2 focus:ring-blue-100 text-sm text-slate-900 outline-none transition-all"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-2">
                      <span className="inline-flex items-center px-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs font-mono font-bold text-slate-600">
                        +91
                      </span>
                      <input
                        type="tel"
                        required
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="8402010207"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#1163FB] focus:ring-2 focus:ring-blue-100 text-sm text-slate-900 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Email ID */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={emailId}
                      onChange={(e) => setEmailId(e.target.value)}
                      placeholder="trade@internationalcorp.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#1163FB] focus:ring-2 focus:ring-blue-100 text-sm text-slate-900 outline-none transition-all"
                    />
                  </div>

                  {/* Commodity & Route */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                        Commodity / Goods
                      </label>
                      <input
                        type="text"
                        value={commodity}
                        onChange={(e) => setCommodity(e.target.value)}
                        placeholder="e.g. Basmati Rice / Steel Coils"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#1163FB] focus:ring-2 focus:ring-blue-100 text-sm text-slate-900 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                        Origin / Destination
                      </label>
                      <input
                        type="text"
                        value={originDestination}
                        onChange={(e) => setOriginDestination(e.target.value)}
                        placeholder="e.g. JNPT Mumbai to Jebel Ali"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#1163FB] focus:ring-2 focus:ring-blue-100 text-sm text-slate-900 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Volume / Quantity */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                      Estimated Volume
                    </label>
                    <select
                      value={volume}
                      onChange={(e) => setVolume(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#1163FB] focus:ring-2 focus:ring-blue-100 text-sm text-slate-900 outline-none transition-all bg-white"
                    >
                      <option value="Trial Shipment (1 - 2 FCL Containers)">
                        Trial Shipment (1 - 2 FCL Containers)
                      </option>
                      <option value="Commercial Volume (5 - 20 FCL Containers)">
                        Commercial Volume (5 - 20 FCL Containers)
                      </option>
                      <option value="Bulk Vessel Charter (> 5,000 Metric Tons)">
                        Bulk Vessel Charter (&gt; 5,000 Metric Tons)
                      </option>
                      <option value="Less than Container Load (LCL Consolidation)">
                        Less than Container Load (LCL Consolidation)
                      </option>
                    </select>
                  </div>

                  {/* Notes / Specifications */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                      Trade Notes &amp; Regulatory Requirements
                    </label>
                    <textarea
                      rows={3}
                      value={tradeNotes}
                      onChange={(e) => setTradeNotes(e.target.value)}
                      placeholder="Specify LC payment terms, inspection authority (SGS/BV), target delivery schedule, or HS tariff codes..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#1163FB] focus:ring-2 focus:ring-blue-100 text-sm text-slate-900 outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-slate-950 hover:bg-[#1163FB] text-white text-sm font-bold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
                  >
                    {submitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Transmitting Trade Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit International Trade Enquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  {/* Direct WhatsApp link */}
                  <div className="pt-2 text-center">
                    <p className="text-xs text-slate-500">
                      Need direct bilateral trade assistance?{" "}
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#25D366] hover:underline font-bold"
                      >
                        Chat directly on WhatsApp
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            ) : (
              /* Success Confirmation */
              <div className="py-6 text-center">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-slate-950 mb-2">
                  Trade Inquiry Successfully Received!
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                  Thank you, <strong className="text-slate-900">{fullName}</strong>. Our sovereign international trade directors have logged your parameters and will get in touch with you at <span className="font-semibold text-slate-900">{emailId}</span> / <span className="font-semibold text-slate-900">{phoneNumber}</span> within 24 hours.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Instant WhatsApp Connect</span>
                  </a>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="flex-1 py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors"
                  >
                    Done
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* General Consultation Modal */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />

      {/* Global Site Footer */}
      <SiteFooter onOpenConsultation={() => setConsultationOpen(true)} />
    </div>
  );
}
