"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Check,
  Globe2,
  ShieldCheck,
  Clock,
  Compass,
  FileCheck2,
  Mail,
  Send,
  X,
  Phone,
  Layers,
  MapPin,
  Sparkles,
} from "lucide-react";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import ConsultationModal from "@/components/marketing/ConsultationModal";

export default function FreightLogisticsPage() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);

  // Dedicated Freight Enquiry Form State (Strictly 3 fields: Name, Phone, Email)
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailId, setEmailId] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleEnquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!fullName.trim() || !phoneNumber.trim() || !emailId.trim()) {
      setErrorMessage("Please fill in your name, phone number, and email address.");
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
          pageName: "Freight Forwarding & Logistics",
          pageSection: "Allied Verticals · Freight Forwarding & Logistics",
          subject: "Freight Forwarding & Logistics Inquiry",
          source: "freight_logistics_page",
        }),
      });

      if (!res.ok) {
        throw new Error("Unable to submit quotation request. Please try again.");
      }

      setSubmitted(true);
    } catch (err: any) {
      setErrorMessage(err.message || "Something went wrong. Please connect via WhatsApp or email.");
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setFullName("");
    setPhoneNumber("");
    setEmailId("");
    setSubmitted(false);
    setErrorMessage("");
    setEnquiryModalOpen(false);
  };

  const whatsappUrl =
    "https://wa.me/918402010207?text=Hi%20Globizhub%20Logistics%20Team%2C%20I%20am%20inquiring%20about%20Freight%20Forwarding%20solutions%20(Air%20%2F%20Ocean%20%2F%20Road).%20I%20would%20like%20to%20request%20a%20freight%20quote%20and%20routing%20consultation.";

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

        {/* Rectangular Hero Banner with Maritime/Logistics Wallpaper */}
        <div
          className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-950"
          style={{
            backgroundImage: "url('/images/logistics-ocean-freight.jpg')",
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
                Freight Forwarding &amp; Logistics
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal mb-6 max-w-xl">
                Global multimodal cargo transit across flight, ship, and road. Powered by automated customs compliance, predictive route telemetry, and bonded terminal orchestration.
              </p>
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
              Sovereign Cargo Logistics Engineered for Global Velocity
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4">
              At <strong className="font-semibold text-slate-900">Globizhub India Private Limited</strong>, our Freight Forwarding &amp; Logistics division orchestrates end-to-end commercial supply chains across international aviation, maritime maritime shipping, and domestic surface transit.
            </p>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              We bridge sovereign manufacturing centers with global consumption markets through predictive cargo telemetry, bonded port handling, direct air charters, and GPS-governed overland fleets.
            </p>
          </div>

          {/* ======================================================== */}
          {/* 3. THREE DETAILED SECTIONS: FLIGHT, SHIP, ROAD            */}
          {/* ======================================================== */}
          <div className="space-y-20 sm:space-y-28 mb-20 sm:mb-28">
            {/* ------------------------------------------------------ */}
            {/* SECTION 1: FLIGHT (AIR FREIGHT LOGISTICS)              */}
            {/* ------------------------------------------------------ */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-6 order-2 lg:order-1">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mb-4">
                  1. Air Freight &amp; Aviation Cargo Express
                </h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  When transit speed and absolute delivery certainty are non-negotiable, our air freight division delivers rapid airport-to-airport and door-to-door global routing. From high-value electronics and luxury fashion to urgent pharmaceutical cold chains, we secure guaranteed belly-space and chartered freighter allocations.
                </p>

                {/* Key Capabilities */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90">
                    <span className="font-bold text-slate-950 block mb-1">
                      Priority Next-Flight-Out (NFO)
                    </span>
                    Sub-24h to 48h international transit for time-critical industrial components and emergency replacements.
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90">
                    <span className="font-bold text-slate-950 block mb-1">
                      Temperature-Controlled Cold Chain
                    </span>
                    Active dry-ice and gel-pack ULD container units compliant with IATA Time &amp; Temperature regulations.
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90">
                    <span className="font-bold text-slate-950 block mb-1">
                      Dangerous Goods &amp; Hazmat
                    </span>
                    Fully certified IATA-DGR handlers managing chemical, lithium battery, and specialized industrial cargo.
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90">
                    <span className="font-bold text-slate-950 block mb-1">
                      Full &amp; Part Cargo Charters
                    </span>
                    Dedicated Boeing 777F and Airbus A330F charter capacities for oversized or high-volume seasonal demand.
                  </div>
                </div>
              </div>

              {/* Photo: Air Freight */}
              <div className="lg:col-span-6 order-1 lg:order-2">
                <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl bg-slate-100 aspect-[16/9] w-full">
                  <Image
                    src="/images/logistics-air-freight.jpg"
                    alt="Commercial Air Cargo Freighter Loading at International Airport Terminal"
                    fill
                    priority
                    className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                  />
                </div>
              </div>
            </div>

            {/* ------------------------------------------------------ */}
            {/* SECTION 2: SHIP (OCEAN MARITIME FREIGHT)               */}
            {/* ------------------------------------------------------ */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Photo: Ocean Freight */}
              <div className="lg:col-span-6">
                <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl bg-slate-100 aspect-[16/9] w-full">
                  <Image
                    src="/images/logistics-ocean-freight.jpg"
                    alt="Ultra Large Container Ship Navigating Harbor with Automated Quay Cranes"
                    fill
                    className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                  />
                </div>
              </div>

              {/* Content: Ocean Freight */}
              <div className="lg:col-span-6">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mb-4">
                  2. Ocean Freight &amp; Deepwater Marine Shipping
                </h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  For large-volume commodity trade and cost-effective transcontinental shipments, our ocean logistics division delivers reliable space commitments with tier-one shipping lines across key Pacific, Atlantic, and Indian Ocean sea lanes.
                </p>

                {/* Key Capabilities */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90">
                    <span className="font-bold text-slate-950 block mb-1">
                      FCL (Full Container Load)
                    </span>
                    Standard 20ft, 40ft, and 40ft High Cube containers with prioritized port discharge and dedicated vessel space.
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90">
                    <span className="font-bold text-slate-950 block mb-1">
                      LCL (Consolidation Services)
                    </span>
                    Cost-effective container consolidation for partial freight volumes with secure cross-dock de-stuffing.
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90">
                    <span className="font-bold text-slate-950 block mb-1">
                      Project Cargo &amp; Breakbulk
                    </span>
                    Engineering-led transport for non-containerized heavy machinery, oversized steel structures, and energy assets.
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90">
                    <span className="font-bold text-slate-950 block mb-1">
                      Bonded Port Warehousing
                    </span>
                    Direct quay transfers to bonded customs terminals with zero demurrage and automated electronic bills of lading (e-BL).
                  </div>
                </div>
              </div>
            </div>

            {/* ------------------------------------------------------ */}
            {/* SECTION 3: ROAD (SURFACE TRUCKING & OVERLAND FLEET)    */}
            {/* ------------------------------------------------------ */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-6 order-2 lg:order-1">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mb-4">
                  3. Road Freight &amp; Interstate Highway Transport
                </h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  Providing the vital connective tissue between deepwater ports, aviation terminals, and inland manufacturing belts. Our domestic road fleet combines heavy trailer haulage with real-time GPS telemetry, electronic toll transponders, and sub-24h line-haul distribution.
                </p>

                {/* Key Capabilities */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90">
                    <span className="font-bold text-slate-950 block mb-1">
                      Container Drayage &amp; Port Haulage
                    </span>
                    Swift pickup of import containers from container freight stations (CFS) and delivery to factory gates.
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90">
                    <span className="font-bold text-slate-950 block mb-1">
                      Full Truckload (FTL) Freight
                    </span>
                    Dedicated 32ft multi-axle trailers and closed-body container trucks with real-time telematics and door-seal locks.
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90">
                    <span className="font-bold text-slate-950 block mb-1">
                      Refrigerated Surface Fleet
                    </span>
                    Sub-zero temperature-controlled reefers engineered for pharmaceutical, dairy, and agricultural freight.
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90">
                    <span className="font-bold text-slate-950 block mb-1">
                      Intermodal Rail Integration
                    </span>
                    Seamless container rail routing across domestic inland container depots (ICDs) reducing carbon footprint and transit cost.
                  </div>
                </div>
              </div>

              {/* Photo: Road Freight */}
              <div className="lg:col-span-6 order-1 lg:order-2">
                <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl bg-slate-100 aspect-[16/9] w-full">
                  <Image
                    src="/images/logistics-road-freight.jpg"
                    alt="Commercial Semi-Truck Fleet Hauling Freight Containers across Interstate Suspension Bridge"
                    fill
                    className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* 4. VALUE-ADDED SERVICES & CUSTOMS CLEARANCE              */}
          {/* ======================================================== */}
          <div className="mb-16 sm:mb-20">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mb-8 text-center">
              Integrated Supply Chain Capabilities
            </h3>
            {/* Desktop Grid */}
            <div className="hidden md:grid md:grid-cols-3 gap-6 sm:gap-8">
              <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200/90 hover:border-[#1163FB] transition-all">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#1163FB] mb-5 shadow-sm">
                  <FileCheck2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-950 mb-2">
                  Customs &amp; Regulatory Compliance
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Dedicated in-house customs brokers managing bill of entry documentation, duty optimization, tariff HS code classification, and automated EDI filing.
                </p>
              </div>

              <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200/90 hover:border-[#1163FB] transition-all">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#1163FB] mb-5 shadow-sm">
                  <Compass className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-950 mb-2">
                  Live Telemetry &amp; Cargo Tracking
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  24/7 web and mobile telemetry monitoring container GPS coordinates, temperature variances, door openings, and predictive arrival milestones.
                </p>
              </div>

              <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200/90 hover:border-[#1163FB] transition-all">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#1163FB] mb-5 shadow-sm">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-950 mb-2">
                  Marine &amp; Transit Cargo Insurance
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Comprehensive institute cargo clauses (A) coverage protecting freight against maritime perils, port damage, and transit risks with rapid claims settlement.
                </p>
              </div>
            </div>

            {/* Mobile Continuous Slow Left-to-Right Travelling Animation */}
            <div className="block md:hidden overflow-hidden -mx-4 px-4 py-2">
              <div className="animate-mobile-ltr gap-4 py-2">
                {[
                  {
                    icon: FileCheck2,
                    title: "Customs & Regulatory Compliance",
                    desc: "Dedicated in-house customs brokers managing bill of entry documentation, duty optimization, tariff HS code classification, and automated EDI filing.",
                  },
                  {
                    icon: Compass,
                    title: "Live Telemetry & Cargo Tracking",
                    desc: "24/7 web and mobile telemetry monitoring container GPS coordinates, temperature variances, door openings, and predictive arrival milestones.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Marine & Transit Cargo Insurance",
                    desc: "Comprehensive institute cargo clauses (A) coverage protecting freight against maritime perils, port damage, and transit risks with rapid claims settlement.",
                  },
                  // Duplicated for seamless infinite loop
                  {
                    icon: FileCheck2,
                    title: "Customs & Regulatory Compliance",
                    desc: "Dedicated in-house customs brokers managing bill of entry documentation, duty optimization, tariff HS code classification, and automated EDI filing.",
                  },
                  {
                    icon: Compass,
                    title: "Live Telemetry & Cargo Tracking",
                    desc: "24/7 web and mobile telemetry monitoring container GPS coordinates, temperature variances, door openings, and predictive arrival milestones.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Marine & Transit Cargo Insurance",
                    desc: "Comprehensive institute cargo clauses (A) coverage protecting freight against maritime perils, port damage, and transit risks with rapid claims settlement.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="w-[280px] shrink-0 p-6 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm"
                  >
                    <div className="w-11 h-11 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#1163FB] mb-4 shadow-sm">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-slate-950 mb-2 leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* 5. CONTACT & PARTNERSHIP DETAILS                         */}
          {/* ======================================================== */}
          <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 mb-12 sm:mb-16">
            <div className="max-w-3xl">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mb-4">
                Request a Freight Forwarding Quote
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Connect directly with our maritime routing specialists, air cargo coordinators, and fleet managers. For corporate enterprise contracts, multi-port tender bids, or urgent charter quotes, contact our logistics desk via email at:
              </p>

              {/* Email ID Display with Clickable Mailto Link - single support email */}
              <div className="inline-flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#1163FB] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                    Logistics &amp; Cargo Freight Enquiries
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

            {/* Button 2: WhatsApp Button (8402010207) with Pre-filled Logistics Message */}
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
      {/* 7. DEDICATED FREIGHT LOGISTICS ENQUIRY MODAL             */}
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
                  Enquire for Freight Forwarding
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-6">
                  Specify your preferred cargo mode, origin/destination ports, and cargo profile.
                </p>

                {errorMessage && (
                  <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
                    {errorMessage}
                  </div>
                )}

                <form onSubmit={handleEnquirySubmit} className="space-y-4">
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
                      placeholder="e.g. Rajesh Kumar"
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
                      placeholder="supplychain@yourcompany.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#1163FB] focus:ring-2 focus:ring-blue-100 text-sm text-slate-900 outline-none transition-all"
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
                        <span>Transmitting Freight Details...</span>
                      </>
                    ) : (
                      <>
                        <span>Request Freight Quotation</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  {/* Direct WhatsApp link */}
                  <div className="pt-2 text-center">
                    <p className="text-xs text-slate-500">
                      Need instant booking assistance?{" "}
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
                  Freight Quotation Request Received!
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                  Thank you, <strong className="text-slate-900">{fullName}</strong>. Our multimodal cargo dispatch team has logged your routing parameters and will send rate sheets to <span className="font-semibold text-slate-900">{emailId}</span> / <span className="font-semibold text-slate-900">{phoneNumber}</span> shortly.
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
