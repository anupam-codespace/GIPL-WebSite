"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Check,
  Layers,
  ShieldCheck,
  Globe2,
  Mail,
  Send,
  X,
  Phone,
  Sparkles,
  Award,
  Feather,
} from "lucide-react";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import ConsultationModal from "@/components/marketing/ConsultationModal";

export default function LeatherManufacturingPage() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);

  // Dedicated Leather Enquiry Form State (Strictly 3 fields: Name, Phone, Email)
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
          pageName: "Leather Products Manufacturing",
          pageSection: "Allied Verticals · Leather Products Manufacturing",
          subject: "Leather Products Manufacturing Inquiry",
          source: "leather_manufacturing_page",
        }),
      });

      if (!res.ok) {
        throw new Error("Unable to submit quotation request. Please try again.");
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
    setSubmitted(false);
    setErrorMessage("");
    setEnquiryModalOpen(false);
  };

  const whatsappUrl =
    "https://wa.me/918402010207?text=Hi%20Globizhub%20Leather%20Division%20Team%2C%20I%20am%20inquiring%20about%20Leather%20Products%20Manufacturing%20(Private-Label%20%2F%20OEM%20%2F%20Corporate%20Goods).%20I%20would%20like%20to%20discuss%20sample%20development%20and%20manufacturing.";

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

        {/* Rectangular Hero Banner with Leather Workshop Wallpaper */}
        <div
          className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-950"
          style={{
            backgroundImage: "url('/images/leather-artisan-workshop.jpg')",
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
                Leather Products Manufacturing
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal mb-6 max-w-xl">
                Precision handcrafted leather goods, sovereign export craftsmanship, and turnkey private-label manufacturing adhering to rigorous European and global export standards.
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
              Where Master Leather Artisanship Meets Industrial Scalability
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4">
              At <strong className="font-semibold text-slate-900">Globizhub India Private Limited</strong>, our Leather Products Manufacturing vertical brings together centuries-old heritage leathercraft and high-throughput export production pipelines.
            </p>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              From bespoke corporate executive gifting to full-scale private-label collections for luxury fashion houses and international retail brands, we engineer handcrafted leather goods using responsibly sourced, vegetable-tanned full-grain hides, premium hardware, and meticulous saddle stitching.
            </p>
          </div>

          {/* ======================================================== */}
          {/* 3. PRODUCT SHOWCASE CATEGORIES WITH GENERATED PHOTOS     */}
          {/* ======================================================== */}
          <div className="space-y-20 sm:space-y-28 mb-20 sm:mb-28">
            {/* Category 1: Luxury Leather Bags, Duffels & Briefcases */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-6 order-2 lg:order-1">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mb-4">
                  1. Luxury Bags, Executive Briefcases &amp; Travel Duffels
                </h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  Engineered to endure a lifetime of travel and executive use. Each silhouette is constructed from hand-selected 1.8mm to 2.2mm vegetable-tanned full-grain hides, featuring reinforced stress rivets, hand-waxed thread, cast solid brass buckles, and padded laptop compartments.
                </p>

                {/* Key Capabilities */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90">
                    <span className="font-bold text-slate-950 block mb-1">
                      Weekender Duffels &amp; Carry-Ons
                    </span>
                    Generous interior compartments with water-resistant cotton twill lining and heavy-duty YKK Excella zippers.
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90">
                    <span className="font-bold text-slate-950 block mb-1">
                      Executive Briefcases &amp; Folios
                    </span>
                    Structured gussets, secure key-lock clasps, ergonomic double-rolled handles, and dedicated tech organizer slots.
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90">
                    <span className="font-bold text-slate-950 block mb-1">
                      Messenger &amp; Crossbody Bags
                    </span>
                    Adjustable webbed leather shoulder straps, magnetic quick-release clasps, and scratch-resistant matte finishes.
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90">
                    <span className="font-bold text-slate-950 block mb-1">
                      Hand-Burnished Edges
                    </span>
                    Multi-pass artisanal edge beveling, heated beeswax sealing, and edge paint curing ensuring zero peeling over decades.
                  </div>
                </div>
              </div>

              {/* Photo: Luxury Bags */}
              <div className="lg:col-span-6 order-1 lg:order-2">
                <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl bg-slate-100 aspect-[16/9] w-full">
                  <Image
                    src="/images/leather-luxury-bags.jpg"
                    alt="Luxury Handcrafted Leather Goods Collection - Duffel Bag, Executive Briefcase and Messenger Bag"
                    fill
                    priority
                    className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                  />
                </div>
              </div>
            </div>

            {/* Category 2: Small Leather Goods & Accessories */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Photo: Small Leather Goods */}
              <div className="lg:col-span-6">
                <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl bg-slate-100 aspect-[16/9] w-full">
                  <Image
                    src="/images/leather-small-accessories.jpg"
                    alt="Collection of Bespoke Small Leather Goods - Wallets, Passport Cases, Belts, and Journal Covers"
                    fill
                    className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                  />
                </div>
              </div>

              {/* Content: Small Leather Goods */}
              <div className="lg:col-span-6">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mb-4">
                  2. Precision Small Leather Goods &amp; Accessories
                </h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  Small goods demand the highest standard of stitch precision and edge finishing. Our small leather goods line features skived edges, RFID-blocking fabric interlinings, turned edges, and custom blind debossing for premium retail and corporate gifting.
                </p>

                {/* Key Capabilities */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90">
                    <span className="font-bold text-slate-950 block mb-1">
                      Bifold &amp; Cardholder Wallets
                    </span>
                    Ultra-slim profiles with French-turned edges, precision die-cut card slots, and integrated RFID security shielding.
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90">
                    <span className="font-bold text-slate-950 block mb-1">
                      Solid Brass Buckle Belts
                    </span>
                    Single-ply full-grain bridle leather belts with hand-stitched keepers and nickel-free solid brass hardware.
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90">
                    <span className="font-bold text-slate-950 block mb-1">
                      Passport &amp; Travel Organizers
                    </span>
                    Bespoke travel cases designed for boarding passes, currency, dual SIM slots, and international passport booklets.
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90">
                    <span className="font-bold text-slate-950 block mb-1">
                      Executive Desk &amp; Tech Accessories
                    </span>
                    Leather desk blotters, wireless charger mats, AirPods cases, and journal notebook covers debossed with custom brand logos.
                  </div>
                </div>
              </div>
            </div>

            {/* Category 3: Master Leathercraft Atelier & Manufacturing Process */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-6 order-2 lg:order-1">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mb-4">
                  3. The Master Atelier: From Raw Hide to Finished Export
                </h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                  Every product undergoes a multi-stage artisanal and engineering workflow. We maintain strict environmental stewardship with chrome-free vegetable tanning processes that age gracefully, developing an authentic, rich patina over time.
                </p>

                {/* Key Capabilities */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90">
                    <span className="font-bold text-slate-950 block mb-1">
                      Hide Sorting &amp; Thickness Grading
                    </span>
                    Rigorous visual and tactile inspection to eliminate surface scars, sorting hides for ideal grain texture and tensile yield.
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90">
                    <span className="font-bold text-slate-950 block mb-1">
                      Precision Die &amp; Laser Cutting
                    </span>
                    Combining steel clicker dies with CNC laser pattern cutting for microscopic alignment tolerances of ±0.2mm.
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90">
                    <span className="font-bold text-slate-950 block mb-1">
                      Traditional Saddle Stitching
                    </span>
                    Double-needle hand-stitched seams that will never unravel even if an individual stitch thread is severed.
                  </div>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90">
                    <span className="font-bold text-slate-950 block mb-1">
                      Custom Hot Foil &amp; Blind Deboss
                    </span>
                    Precision brass magnesium dies applying crisp metallic gold, silver, or subtle blind debossed corporate signatures.
                  </div>
                </div>
              </div>

              {/* Photo: Workshop Atelier */}
              <div className="lg:col-span-6 order-1 lg:order-2">
                <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xl bg-slate-100 aspect-[16/9] w-full">
                  <Image
                    src="/images/leather-artisan-workshop.jpg"
                    alt="Artisan Leathercraft Master Workshop Studio with Handcrafted Leather Hides and Tools"
                    fill
                    className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* 4. TURNKEY MANUFACTURING & EXPORT PILLARS                */}
          {/* ======================================================== */}
          <div className="mb-16 sm:mb-20">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mb-8 text-center">
              Comprehensive OEM &amp; Private-Label Solutions
            </h3>
            
            {/* Desktop Grid */}
            <div className="hidden md:grid md:grid-cols-3 gap-6 sm:gap-8">
              <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200/90 hover:border-[#1163FB] transition-all">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#1163FB] mb-5 shadow-sm">
                  <Award className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-950 mb-2">
                  LWG &amp; REACH Compliance
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  All leathers are sourced from Leather Working Group (LWG) certified tanneries adhering to strict effluent treatment and zero hazardous chemical norms.
                </p>
              </div>

              <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200/90 hover:border-[#1163FB] transition-all">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#1163FB] mb-5 shadow-sm">
                  <Layers className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-950 mb-2">
                  Agile MOQs &amp; Prototyping
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Rapid 10-day physical sampling turnaround with low minimum order quantities (MOQs) starting from 25 to 50 units for boutique pilot runs.
                </p>
              </div>

              <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200/90 hover:border-[#1163FB] transition-all">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#1163FB] mb-5 shadow-sm">
                  <Globe2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-950 mb-2">
                  Direct Global Export Fulfillment
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Direct synergy with Globizhub’s Multimodal Freight and Courier networks: bonded warehousing, customs clearance, and global air/ocean distribution worldwide.
                </p>
              </div>
            </div>

            {/* Mobile Continuous Slow Left-to-Right Travelling Animation */}
            <div className="block md:hidden overflow-hidden -mx-4 px-4 py-2">
              <div className="animate-mobile-ltr gap-4 py-2">
                {[
                  {
                    icon: Award,
                    title: "LWG & REACH Compliance",
                    desc: "All leathers are sourced from Leather Working Group (LWG) certified tanneries adhering to strict effluent treatment and zero hazardous chemical norms.",
                  },
                  {
                    icon: Layers,
                    title: "Agile MOQs & Prototyping",
                    desc: "Rapid 10-day physical sampling turnaround with low minimum order quantities (MOQs) starting from 25 to 50 units for boutique pilot runs.",
                  },
                  {
                    icon: Globe2,
                    title: "Direct Global Export Fulfillment",
                    desc: "Direct synergy with Globizhub’s Multimodal Freight and Courier networks: bonded warehousing, customs clearance, and global air/ocean distribution worldwide.",
                  },
                  // Duplicated for seamless infinite loop
                  {
                    icon: Award,
                    title: "LWG & REACH Compliance",
                    desc: "All leathers are sourced from Leather Working Group (LWG) certified tanneries adhering to strict effluent treatment and zero hazardous chemical norms.",
                  },
                  {
                    icon: Layers,
                    title: "Agile MOQs & Prototyping",
                    desc: "Rapid 10-day physical sampling turnaround with low minimum order quantities (MOQs) starting from 25 to 50 units for boutique pilot runs.",
                  },
                  {
                    icon: Globe2,
                    title: "Direct Global Export Fulfillment",
                    desc: "Direct synergy with Globizhub’s Multimodal Freight and Courier networks: bonded warehousing, customs clearance, and global air/ocean distribution worldwide.",
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
                Partner with Our Leather Manufacturing Division
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Whether you are launching a private-label leather accessories brand, commissioning bespoke corporate executive gifts, or exploring institutional leather product manufacturing, our master craft leads are ready to collaborate. Reach our commercial team directly via email:
              </p>

              {/* Email ID Display with Clickable Mailto Link - single support email */}
              <div className="inline-flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#1163FB] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                    Leather Manufacturing &amp; Private-Label Inquiries
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

            {/* Button 2: WhatsApp Button (8402010207) with Pre-filled Leather Message */}
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
      {/* 7. DEDICATED LEATHER ENQUIRY MODAL                       */}
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
                  Enquire for Leather Manufacturing
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-6">
                  Specify your desired leather product category, estimated batch size, and custom embossing details.
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
                      placeholder="e.g. Vikramaditya Roy"
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
                      placeholder="buyer@luxurybrand.com"
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
                        <span>Transmitting Leather Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Leathercraft Enquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  {/* Direct WhatsApp link */}
                  <div className="pt-2 text-center">
                    <p className="text-xs text-slate-500">
                      Need immediate craft consultation?{" "}
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
                  Leather Inquiry Successfully Received!
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                  Thank you, <strong className="text-slate-900">{fullName}</strong>. Our leathercraft master production team has received your parameters and will get in touch with you at <span className="font-semibold text-slate-900">{emailId}</span> / <span className="font-semibold text-slate-900">{phoneNumber}</span> within 24 hours.
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
