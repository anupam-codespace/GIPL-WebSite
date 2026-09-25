"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Scissors,
  Sparkles,
  Layers,
  ShieldCheck,
  Globe2,
  Mail,
  Send,
  X,
  Phone,
  MessageSquare,
  Sparkle,
} from "lucide-react";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import ConsultationModal from "@/components/marketing/ConsultationModal";

export default function EMFashionBrandPage() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);

  // Dedicated E&M Fashion Enquiry Form State
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailId, setEmailId] = useState("");
  const [notes, setNotes] = useState("");
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
          pageName: "E&M Fashion Brand",
          pageSection: "Allied Verticals · E&M Fashion Brand",
          message: notes.trim(),
          subject: "E&M Fashion Brand - Brand Partnership Inquiry",
          source: "em_fashion_brand_page",
        }),
      });

      if (!res.ok) {
        throw new Error("Unable to transmit inquiry. Please try again.");
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
    setNotes("");
    setSubmitted(false);
    setErrorMessage("");
    setEnquiryModalOpen(false);
  };

  const whatsappUrl =
    "https://wa.me/918402010207?text=Hi%20Globizhub%20Team%2C%20I%20am%20interested%20in%20E%26M%20Fashion%20Brand%20and%20fashion%20venture%20solutions.%20I%20would%20like%20to%20discuss%20building%20a%20brand%20with%20you.";

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Global Site Navigation Header */}
      <SiteHeader onOpenConsultation={() => setConsultationOpen(true)} />

      {/* ======================================================== */}
      {/* 1. SMALL RECTANGULAR HERO SECTION WITH PINTEREST BG       */}
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

        {/* Rectangular Hero Banner */}
        <div
          className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-950"
          style={{
            backgroundImage: "url('/images/em-fashion-hero.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Subtle gradient overlay to guarantee text legibility & editorial tone */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/80 to-black/60 backdrop-blur-[1px]" />

          <div className="relative z-10 p-6 sm:p-10 md:p-12 lg:p-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            {/* Left Column: Vertical Identity & Details */}
            <div className="max-w-2xl">
              {/* Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4 leading-tight">
                E&amp;M Fashion Brand
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal mb-6 max-w-xl">
                Contemporary lifestyle apparel, ethical fabric manufacturing, and turnkey private-label brand engineering powered by Globizhub’s sovereign logistics infrastructure.
              </p>
            </div>

            {/* Right Column: Pinterest Moodboard Card (Desktop) */}
            <div className="hidden lg:flex flex-col items-center">
              <div className="rounded-2xl overflow-hidden border border-white/25 shadow-2xl bg-black/40 backdrop-blur-md p-2">
                <iframe
                  src="https://assets.pinterest.com/ext/embed.html?id=441000988535478632"
                  height="295"
                  width="345"
                  frameBorder="0"
                  scrolling="no"
                  title="E&M Fashion Brand Design Board"
                  className="rounded-xl overflow-hidden"
                />
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
          {/* Section Introduction */}
          <div className="max-w-3xl mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 mb-6">
              Where Enterprise Rigour Meets High-Aesthetic Fashion
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4">
              At <strong className="font-semibold text-slate-900">Globizhub India Private Limited</strong>, our operational DNA is built on precision engineering, sovereign supply chains, and international compliance. Through <strong className="font-semibold text-slate-900">E&amp;M Fashion Brand</strong>, we apply this rigorous mindset to modern clothing design, sustainable textile development, and bespoke fashion label manufacturing.
            </p>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              We believe that high fashion should marry timeless silhouettes with responsible production. Beyond crafting our in-house collections, Globizhub actively collaborates with designers, fashion entrepreneurs, and high-growth retail labels to build scalable, production-ready fashion brands from the ground up.
            </p>
          </div>

          {/* ======================================================== */}
          {/* 3. "BUILD YOUR OWN BRAND" TURNKEY PILLARS                */}
          {/* ======================================================== */}
          <div className="mb-16 sm:mb-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 border-b border-slate-200 pb-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                  Build Your Own Brand (Turnkey Enablement)
                </h3>
                <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl">
                  Whether you are an emerging independent designer or an established corporate seeking custom merchandising, we provide the full-stack infrastructure to take your fashion label from conception to international delivery.
                </p>
              </div>
              <span className="text-xs font-mono text-slate-500 mt-4 md:mt-0 font-semibold uppercase tracking-wider">
                Full-Lifecycle Incubation
              </span>
            </div>

            {/* 6 Capabilities Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Card 1 */}
              <div className="p-7 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 hover:border-[#1163FB] hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#1163FB] mb-5 shadow-sm">
                  <Scissors className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-950 mb-2">
                  01. Design &amp; Tech-Pack Architecture
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Transform raw sketches, mood boards, and aesthetic concepts into production-grade spec sheets, 3D digital garment renders, precision measurements, and grading charts.
                </p>
              </div>

              {/* Card 2 */}
              <div className="p-7 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 hover:border-[#1163FB] hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#1163FB] mb-5 shadow-sm">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-950 mb-2">
                  02. Certified Ethical Fabric Sourcing
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Direct mill partnerships providing certified organic cotton, mulberry silk, breathable natural linen, viscose, and recycled textiles compliant with GOTS and OEKO-TEX norms.
                </p>
              </div>

              {/* Card 3 */}
              <div className="p-7 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 hover:border-[#1163FB] hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#1163FB] mb-5 shadow-sm">
                  <Layers className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-950 mb-2">
                  03. Precision Sampling &amp; Fit Iteration
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Rapid prototyping turnaround within 7 to 14 days. Iterate on physical samples, draping, bespoke hardware, and seam finishes before initiating bulk production.
                </p>
              </div>

              {/* Card 4 */}
              <div className="p-7 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 hover:border-[#1163FB] hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#1163FB] mb-5 shadow-sm">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-950 mb-2">
                  04. Low-MOQ Flexible Manufacturing
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Launch without devastating inventory risk. We support agile low minimum order quantities (MOQ) for pilot collections, seamlessly scaling into mass production runs.
                </p>
              </div>

              {/* Card 5 */}
              <div className="p-7 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 hover:border-[#1163FB] hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#1163FB] mb-5 shadow-sm">
                  <Sparkle className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-950 mb-2">
                  05. Custom Trims &amp; Branded Packaging
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Bespoke woven tags, debossed leather patches, engraved buttons, recyclable polybags, and retail-ready unboxing elements designed to elevate your brand positioning.
                </p>
              </div>

              {/* Card 6 */}
              <div className="p-7 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 hover:border-[#1163FB] hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#1163FB] mb-5 shadow-sm">
                  <Globe2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-950 mb-2">
                  06. Bonded Warehousing &amp; Export Logistics
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Direct synergy with Globizhub’s Multimodal Freight and Courier networks: automated customs handling, international air cargo, and door-to-door retail delivery worldwide.
                </p>
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* 4. MIDDLE OF THE PAGE EDITORIAL PHOTO                    */}
          {/* ======================================================== */}
          <div className="my-14 sm:my-20">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 shadow-2xl bg-slate-100 aspect-[16/9] w-full max-h-[580px]">
              <Image
                src="/images/em-fashion-studio.jpg"
                alt="Inside the E&M Fashion Design & Prototyping Studio"
                fill
                priority
                className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* ======================================================== */}
          {/* 5. CONTACT & PARTNERSHIP DETAILS                         */}
          {/* ======================================================== */}
          <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 mb-12 sm:mb-16">
            <div className="max-w-3xl">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mb-4">
                Partner with E&amp;M Fashion Brand
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                Whether you are launching an independent apparel collection, seeking certified sustainable fabric manufacturing, or exploring wholesale white-label distribution, our dedicated fashion venture leads are ready to collaborate. For executive partnership proposals and technical consultations, contact us directly via email at:
              </p>

              {/* Email ID Display with Clickable Mailto Link - single support email */}
              <div className="inline-flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#1163FB] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                    Executive Fashion Venture Inquiries
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

            {/* Button 2: WhatsApp Button (8402010207) with Pre-filled Message */}
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
      {/* 7. DEDICATED E&M FASHION ENQUIRY MODAL                   */}
      {/* ======================================================== */}
      {enquiryModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div
            className="relative w-full max-w-lg rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-200 overflow-hidden"
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
                  Enquire About E&amp;M Fashion
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-6">
                  Tell us about your brand vision, fabric needs, or private-label manufacturing requirements.
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
                      Your Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Maya Sengupta"
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
                      placeholder="founder@yourlabel.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#1163FB] focus:ring-2 focus:ring-blue-100 text-sm text-slate-900 outline-none transition-all"
                    />
                  </div>

                  {/* Notes / Brand Vision */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                      Notes &amp; Requirements
                    </label>
                    <textarea
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Describe your clothing line concept, fabric preference, estimated volume, or brand launch timeline..."
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
                        <span>Submitting Your Fashion Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Fashion Enquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  {/* Alternative Direct WhatsApp link */}
                  <div className="pt-2 text-center">
                    <p className="text-xs text-slate-500">
                      Need immediate technical assistance?{" "}
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
                  Enquiry Successfully Received!
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                  Thank you, <strong className="text-slate-900">{fullName}</strong>. Our E&amp;M Fashion Brand team has received your inquiry and will reach out to you at <span className="font-semibold text-slate-900">{emailId}</span> / <span className="font-semibold text-slate-900">{phoneNumber}</span> within 24 hours.
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
