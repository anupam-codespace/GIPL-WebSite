"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, Check } from "lucide-react";
import GlobizhubLogo from "@/components/ui/GlobizhubLogo";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [phone, setPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [description, setDescription] = useState("");
  const [wantPartner, setWantPartner] = useState(false);
  const [requestNda, setRequestNda] = useState(true);
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Simple math challenge (1 + 5 = 6)
  const num1 = 1;
  const num2 = 5;

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!fullName.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      setError("Please provide a valid email.");
      return;
    }
    if (!phone.trim()) {
      setError("Please provide your contact number.");
      return;
    }
    if (parseInt(captchaAnswer.trim(), 10) !== num1 + num2) {
      setError(`Captcha incorrect. Please answer ${num1} + ${num2}.`);
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          workEmail: email,
          phone: `${countryCode} ${phone}`,
          companyName,
          projectBrief: description,
          ndaRequested: requestNda,
          marketingPartner: wantPartner,
          source: "consultation_modal",
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setSubmitted(true); // Graceful fallback
      }
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center p-3 sm:p-5 md:p-8 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[1040px] bg-[#060A14] rounded-2xl shadow-2xl overflow-hidden border border-white/10 grid grid-cols-1 md:grid-cols-12 max-h-[92vh] sm:max-h-[95vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating White Circular Close Button with Black X - fixed in top corner across both mobile and desktop */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 z-50 w-8 h-8 rounded-full bg-white hover:bg-slate-200 text-black flex items-center justify-center font-bold transition-all cursor-pointer shadow-xl hover:scale-105 active:scale-95"
          aria-label="Close"
        >
          <X className="w-4 h-4 text-black stroke-[3]" />
        </button>

        {/* ======================================================== */}
        {/* LEFT COLUMN: BLUE BRANDING CARD WITH HANDSHAKE & AWARDS  */}
        {/* (Exact match to Appinventiv reference screenshot)       */}
        {/* ======================================================== */}
        <div className="md:col-span-6 bg-gradient-to-b from-[#0D4BC4] via-[#0E54DE] to-[#0A3496] p-5 sm:p-7 md:p-8 lg:p-10 text-white flex flex-col justify-between relative overflow-hidden">
          {/* Subtle Ambient Curve Background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.15),transparent_60%)] pointer-events-none" />

          {/* Top Headline */}
          <div className="relative z-10 pr-8 md:pr-0">
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <GlobizhubLogo className="w-6 h-6 sm:w-8 sm:h-8" />
              <span className="text-[10px] sm:text-xs uppercase font-bold tracking-widest text-white/90">
                Globizhub Pvt Ltd
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-[32px] font-bold text-white tracking-tight leading-[1.18] mb-1.5 sm:mb-3">
              Ready to Build Your Next Digital Product?
            </h2>
            <p className="text-white/80 text-xs sm:text-sm font-normal leading-relaxed max-w-md">
              Collaborate with a globally recognized, award-winning development team.
            </p>
          </div>

          {/* Center Handshake Graphic */}
          <div className="relative z-10 my-3 sm:my-5 w-full h-[120px] sm:h-[180px] md:h-[190px] lg:h-[210px] rounded-xl overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.35)] border border-white/20 bg-[#083A9B]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/consultation-handshake.jpg"
              alt="Globizhub Strategic Partnership"
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
            {/* Subtle overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Bottom Recognitions Section (Assam Startup, DPIIT, MSME, Make in India) */}
          <div className="relative z-10 pt-1">
            <div className="flex items-center justify-center mb-2">
              <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-[0.2em] text-white/90 text-center">
                GOVERNMENT &amp; ENTERPRISE RECOGNITIONS
              </span>
            </div>

            <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
              {/* Badge 1: Assam Startup */}
              <div className="px-1.5 sm:px-2 py-1 sm:py-2 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 hover:border-white/25 flex flex-col items-center justify-center text-center h-[46px] sm:h-[62px] md:h-[68px] transition-all">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/assam_startup_logo_light.png"
                  alt="Assam Startup"
                  className="max-h-4 sm:max-h-6 md:max-h-7 max-w-[85%] object-contain"
                />
                <span className="text-[6px] sm:text-[7px] md:text-[7.5px] text-white/70 font-semibold mt-0.5 sm:mt-1">Govt of Assam</span>
              </div>

              {/* Badge 2: DPIIT #startupindia */}
              <div className="px-1.5 sm:px-2 py-1 sm:py-2 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 hover:border-white/25 flex flex-col items-center justify-center text-center h-[46px] sm:h-[62px] md:h-[68px] transition-all">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/dpiit_logo_clean.png"
                  alt="DPIIT Startup India"
                  className="max-h-4 sm:max-h-6 md:max-h-7 max-w-[85%] object-contain"
                />
                <span className="text-[6px] sm:text-[7px] md:text-[7.5px] text-white/70 font-semibold mt-0.5 sm:mt-1">DPIIT Recognized</span>
              </div>

              {/* Badge 3: Ministry of MSME */}
              <div className="px-1.5 sm:px-2 py-1 sm:py-2 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 hover:border-white/25 flex flex-col items-center justify-center text-center h-[46px] sm:h-[62px] md:h-[68px] transition-all">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/msme_logo.png"
                  alt="Ministry of MSME"
                  className="max-h-4 sm:max-h-6 md:max-h-7 max-w-[90%] object-contain"
                />
                <span className="text-[6px] sm:text-[7px] md:text-[7.5px] text-sky-400 font-semibold mt-0.5 sm:mt-1">Govt. of India</span>
              </div>

              {/* Badge 4: Make in India */}
              <div className="px-1.5 sm:px-2 py-1 sm:py-2 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 hover:border-white/25 flex flex-col items-center justify-center text-center h-[46px] sm:h-[62px] md:h-[68px] transition-all">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/make_in_india_lion.png"
                  alt="Make in India"
                  className="max-h-4 sm:max-h-6 md:max-h-7 max-w-[85%] object-contain"
                />
                <span className="text-[6px] sm:text-[7px] md:text-[7.5px] text-amber-300 font-bold mt-0.5 sm:mt-1">Make in India</span>
              </div>
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* RIGHT COLUMN: CONSULTATION FORM                          */}
        {/* (Exact match to Appinventiv reference screenshot)       */}
        {/* ======================================================== */}
        <div className="md:col-span-6 bg-[#0B0F19] p-5 sm:p-7 md:p-8 lg:p-10 text-white flex flex-col justify-between relative">

          {/* Form Content */}
          <div className="w-full">
            <div className="text-center max-w-md mx-auto mb-5 sm:mb-6 pr-8 sm:pr-0">
              <p className="text-xs sm:text-[13.5px] text-slate-300 font-normal leading-relaxed">
                <strong className="text-white font-bold">Share a few details</strong> about your idea, and our team will come back with technical insights, timelines, and next steps.
              </p>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in">
                <div className="w-14 h-14 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 flex items-center justify-center mx-auto">
                  <Check className="w-7 h-7 stroke-[3]" />
                </div>
                <h3 className="text-xl font-bold text-white">Consultation Request Received</h3>
                <p className="text-xs sm:text-sm text-slate-400 max-w-sm mx-auto leading-relaxed">
                  Our solutions architect is reviewing your brief and will connect with technical insights and an NDA
                  within 2 hours.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-all cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Row 1: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                      className="w-full bg-transparent border-b border-white/20 focus:border-[#1163FB] text-white placeholder:text-slate-400 text-xs sm:text-sm py-2 px-0 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email *"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full bg-transparent border-b border-white/20 focus:border-[#1163FB] text-white placeholder:text-slate-400 text-xs sm:text-sm py-2 px-0 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Row 2: Phone with Country Code & Company Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 border-b border-white/20 focus-within:border-[#1163FB] transition-colors">
                    <select
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      className="bg-transparent text-white text-xs sm:text-sm py-2 pr-1 focus:outline-none cursor-pointer"
                    >
                      <option value="+91" className="bg-[#0B0F19] text-white">+91</option>
                      <option value="+1" className="bg-[#0B0F19] text-white">+1</option>
                      <option value="+44" className="bg-[#0B0F19] text-white">+44</option>
                      <option value="+971" className="bg-[#0B0F19] text-white">+971</option>
                      <option value="+65" className="bg-[#0B0F19] text-white">+65</option>
                    </select>
                    <input
                      type="tel"
                      placeholder="Contact Number *"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="w-full bg-transparent text-white placeholder:text-slate-400 text-xs sm:text-sm py-2 px-0 focus:outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Company Name"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full bg-transparent border-b border-white/20 focus:border-[#1163FB] text-white placeholder:text-slate-400 text-xs sm:text-sm py-2 px-0 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Row 3: Describe your project */}
                <div>
                  <textarea
                    rows={2}
                    placeholder="Describe your project (Help us come back better prepared)"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full bg-transparent border-b border-white/20 focus:border-[#1163FB] text-white placeholder:text-slate-400 text-xs sm:text-sm py-2 px-0 focus:outline-none resize-none transition-colors"
                  />
                </div>

                {/* NDA Trust Bullet */}
                <p className="text-[11px] text-slate-300 flex items-center gap-1.5 pt-1">
                  <span className="text-[#1163FB] font-bold">•</span>
                  <span>
                    Fast 2-minute response, fully{" "}
                    <strong className="text-white font-semibold">NDA-protected</strong>.
                  </span>
                </p>

                {/* Checkboxes */}
                <div className="space-y-2 pt-1 text-[11px] text-slate-300">
                  <label className="flex items-start gap-2 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={wantPartner}
                      onChange={(e) => setWantPartner(e.target.checked)}
                      className="mt-0.5 rounded border-white/30 bg-transparent text-blue-600 focus:ring-0 cursor-pointer"
                    />
                    <span className="group-hover:text-white transition-colors leading-tight">
                      Looking for a marketing partner? Let our experts at{" "}
                      <strong className="text-white">Globizhub Digital</strong> reach out to you.
                    </span>
                  </label>

                  <label className="flex items-start gap-2 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={requestNda}
                      onChange={(e) => setRequestNda(e.target.checked)}
                      className="mt-0.5 rounded border-white/30 bg-transparent text-blue-600 focus:ring-0 cursor-pointer"
                    />
                    <span className="group-hover:text-white transition-colors leading-tight">
                      Request NDA Before Sharing Detailed Requirements
                    </span>
                  </label>
                </div>

                {/* Error Banner */}
                {error && <div className="text-xs text-rose-400 font-medium">{error}</div>}

                {/* Verification Math Captcha & Submit Button */}
                <div className="flex items-center justify-between gap-4 pt-2">
                  {/* Math Captcha */}
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <span className="font-semibold text-white">
                      {num1} + {num2} =
                    </span>
                    <input
                      type="text"
                      maxLength={3}
                      value={captchaAnswer}
                      onChange={(e) => setCaptchaAnswer(e.target.value)}
                      placeholder=""
                      required
                      className="w-12 h-8 rounded border border-white/20 bg-black/40 text-center text-white text-xs font-bold focus:border-[#1163FB] focus:outline-none"
                    />
                  </div>

                  {/* Submit Button with Rolling Text Swap */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="group relative inline-flex items-center justify-center px-8 sm:px-9 py-2.5 sm:py-3 rounded-full bg-[#1163FB] hover:bg-blue-600 text-white font-bold text-xs sm:text-sm tracking-wide shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer overflow-hidden disabled:opacity-50"
                  >
                    <div className="relative h-5 overflow-hidden flex flex-col justify-center">
                      <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full whitespace-nowrap">
                        {loading ? "Submitting..." : "Submit"}
                      </span>
                      <span className="absolute top-full left-0 block transition-transform duration-300 ease-out group-hover:-translate-y-full whitespace-nowrap text-white">
                        {loading ? "Submitting..." : "Submit"}
                      </span>
                    </div>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
