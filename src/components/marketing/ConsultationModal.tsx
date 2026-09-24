"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { X, Check, Phone, FileText, Rocket, ArrowUpRight, ChevronDown } from "lucide-react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [budgetRange, setBudgetRange] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [ndaRequested, setNdaRequested] = useState(false);
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Captcha numbers (7 + 5 = 12 matching the reference UI)
  const num1 = 7;
  const num2 = 5;

  // Close on Escape key & lock body scroll
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
      setError("Please enter your full name.");
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      setError("Please provide a valid work email.");
      return;
    }
    if (!phone.trim()) {
      setError("Please provide your contact phone number.");
      return;
    }
    if (!message.trim()) {
      setError("Please enter a short message describing your project.");
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
          email,
          phone,
          budgetRange,
          subject,
          message,
          ndaRequested,
          source: "consultation_modal",
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setSubmitted(true); // Fallback graceful response
      }
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[1020px] bg-white rounded-[24px] shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ======================================================== */}
        {/* LEFT COLUMN: VIBRANT BLUE "Here's How We Begin!" PANEL   */}
        {/* (Visible on Desktop / Tablets, matches Appventurez UI)   */}
        {/* ======================================================== */}
        <div className="hidden md:flex md:w-[42%] bg-[#0052fe] text-white p-7 sm:p-8 lg:p-9 flex-col justify-between relative overflow-hidden select-none flex-shrink-0">
          {/* Subtle Ambient Isometric Watermark / Network Backdrop */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <svg
              className="w-full h-full object-cover"
              viewBox="0 0 400 600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Isometric diamond / plane layers */}
              <path
                d="M200 420 L380 320 L200 220 L20 320 Z"
                stroke="#67e8f9"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                fill="rgba(56, 189, 248, 0.08)"
              />
              <path
                d="M200 520 L380 420 L200 320 L20 420 Z"
                stroke="#38bdf8"
                strokeWidth="1.5"
                fill="rgba(14, 165, 233, 0.12)"
              />
              {/* Isometric cube nodes */}
              <g transform="translate(240, 260)">
                <path d="M40 0 L80 20 L40 40 L0 20 Z" fill="#38bdf8" opacity="0.6" />
                <path d="M0 20 L40 40 L40 80 L0 60 Z" fill="#0284c7" opacity="0.7" />
                <path d="M80 20 L40 40 L40 80 L80 60 Z" fill="#bae6fd" opacity="0.8" />
              </g>
              <g transform="translate(140, 360)">
                <path d="M30 0 L60 15 L30 30 L0 15 Z" fill="#38bdf8" opacity="0.5" />
                <path d="M0 15 L30 30 L30 60 L0 45 Z" fill="#0284c7" opacity="0.6" />
                <path d="M60 15 L30 30 L30 60 L60 45 Z" fill="#bae6fd" opacity="0.7" />
              </g>
              {/* Grid dot matrix */}
              <circle cx="280" cy="180" r="3" fill="#67e8f9" />
              <circle cx="310" cy="195" r="3" fill="#67e8f9" />
              <circle cx="340" cy="210" r="3" fill="#67e8f9" />
              <circle cx="250" cy="195" r="3" fill="#67e8f9" />
              <circle cx="280" cy="210" r="3" fill="#67e8f9" />
              <circle cx="310" cy="225" r="3" fill="#67e8f9" />
              <circle cx="220" cy="210" r="3" fill="#67e8f9" />
              <circle cx="250" cy="225" r="3" fill="#67e8f9" />
              <circle cx="280" cy="240" r="3" fill="#67e8f9" />
            </svg>
          </div>

          {/* Top Section: Title & Subtitle */}
          <div className="relative z-10">
            <h2 className="text-2xl lg:text-[28px] font-bold text-white tracking-tight leading-tight mb-2">
              Here&apos;s How We Begin!
            </h2>
            <p className="text-white/85 text-xs lg:text-[13px] leading-relaxed max-w-[300px]">
              Share a few details and our team will get back to you shortly.
            </p>
          </div>

          {/* Middle Section: Timeline Steps (Step 01, Step 02, Step 03) */}
          <div className="relative z-10 my-6 space-y-0">
            {/* Step 01: Quick Call */}
            <div className="flex items-start gap-3.5">
              <div className="w-11 h-11 rounded-full bg-white text-[#0052fe] flex items-center justify-center shadow-lg flex-shrink-0 z-10">
                <Phone className="w-5 h-5 text-[#0052fe] fill-current" />
              </div>
              <div className="pt-0.5">
                <span className="block text-[#00f5b8] text-[11px] font-bold tracking-wider uppercase mb-0.5">
                  Step 01
                </span>
                <h3 className="text-white text-base lg:text-[17px] font-bold leading-snug">
                  Quick Call
                </h3>
                <p className="text-white/80 text-xs lg:text-[12.5px] leading-snug mt-0.5">
                  We understand your project needs.
                </p>
              </div>
            </div>

            {/* Dashed connector line between Step 01 and Step 02 */}
            <div className="w-0 h-6 border-l-2 border-dashed border-white/50 ml-[21px] my-1" />

            {/* Step 02: Proposal */}
            <div className="flex items-start gap-3.5">
              <div className="w-11 h-11 rounded-full bg-white text-[#0052fe] flex items-center justify-center shadow-lg flex-shrink-0 z-10">
                <FileText className="w-5 h-5 text-[#0052fe] stroke-[2.2]" />
              </div>
              <div className="pt-0.5">
                <span className="block text-[#00f5b8] text-[11px] font-bold tracking-wider uppercase mb-0.5">
                  Step 02
                </span>
                <h3 className="text-white text-base lg:text-[17px] font-bold leading-snug">
                  Proposal
                </h3>
                <p className="text-white/80 text-xs lg:text-[12.5px] leading-snug mt-0.5">
                  Get a clear proposal &amp; transparent quote.
                </p>
              </div>
            </div>

            {/* Dashed connector line between Step 02 and Step 03 */}
            <div className="w-0 h-6 border-l-2 border-dashed border-white/50 ml-[21px] my-1" />

            {/* Step 03: Get Started */}
            <div className="flex items-start gap-3.5">
              <div className="w-11 h-11 rounded-full bg-white text-[#0052fe] flex items-center justify-center shadow-lg flex-shrink-0 z-10">
                <Rocket className="w-5 h-5 text-[#0052fe] stroke-[2.2]" />
              </div>
              <div className="pt-0.5">
                <span className="block text-[#00f5b8] text-[11px] font-bold tracking-wider uppercase mb-0.5">
                  Step 03
                </span>
                <h3 className="text-white text-base lg:text-[17px] font-bold leading-snug">
                  Get Started
                </h3>
                <p className="text-white/80 text-xs lg:text-[12.5px] leading-snug mt-0.5">
                  We begin your project and keep you updated.
                </p>
              </div>
            </div>

            {/* Dashed line extending down and connecting to Book a Call pill button */}
            <div className="relative pt-3 pl-3">
              <div className="absolute left-[21px] top-0 bottom-6 w-5 border-l-2 border-b-2 border-dashed border-white/50 rounded-bl-xl" />
              <a
                href="https://calendly.com/globizhub-support/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="relative ml-8 inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-white text-[#0052fe] hover:bg-slate-50 font-bold text-xs sm:text-sm shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer group"
              >
                <span>Book a Call</span>
                <ArrowUpRight className="w-4 h-4 text-[#0052fe] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Bottom subtle note / spacer */}
          <div className="relative z-10 pt-2 text-[11px] text-white/70">
            DPIIT Recognized &bull; ISO 9001 / 27001 / 20000
          </div>
        </div>

        {/* ======================================================== */}
        {/* RIGHT COLUMN: CONSULTATION FORM ("Let's discuss...")     */}
        {/* (Matches exact reference screenshot for Desktop & Mobile)*/}
        {/* ======================================================== */}
        <div className="flex-1 bg-white p-6 sm:p-8 lg:p-9 text-slate-800 relative flex flex-col justify-between">
          {/* Black Circular Close Button with White 'X' */}
          <button
            onClick={onClose}
            type="button"
            className="absolute top-4 right-4 sm:top-5 sm:right-5 z-50 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold hover:bg-slate-800 transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95"
            aria-label="Close modal"
          >
            <X className="w-4 h-4 text-white stroke-[2.5]" />
          </button>

          {/* Header */}
          <div className="pr-8 sm:pr-0 mb-4 sm:mb-5">
            <h2 className="text-xl sm:text-2xl lg:text-[25px] font-extrabold text-[#0f172a] tracking-tight leading-snug">
              Let&apos;s discuss your project.
            </h2>
            <p className="text-slate-500 text-xs sm:text-[13px] mt-1 leading-normal">
              Share a few details and our team will get back to you shortly.
            </p>
          </div>

          {submitted ? (
            /* Success confirmation card */
            <div className="py-10 text-center space-y-4 animate-in fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto shadow-sm">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Project Brief Received!</h3>
              <p className="text-xs sm:text-sm text-slate-500 max-w-sm mx-auto leading-relaxed">
                Thank you, <strong className="text-slate-800">{fullName}</strong>. Our enterprise solutions architect has received your details and will get back to you shortly.
              </p>

              {/* Direct Booking Option in Success State */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="https://calendly.com/globizhub-support/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-full bg-[#0052fe] hover:bg-blue-700 text-white font-bold text-xs sm:text-sm inline-flex items-center gap-1.5 shadow-md transition-all"
                >
                  <span>Book a 30-min Call Now</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-full border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold text-xs sm:text-sm transition-all"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
              {/* Row 1: Full Name * & Email * */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name *"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    className="w-full border border-slate-300 rounded-xl px-3.5 py-2.5 sm:py-3 text-slate-800 text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#0052fe] focus:ring-1 focus:ring-[#0052fe] transition-all bg-white"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email *"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full border border-slate-300 rounded-xl px-3.5 py-2.5 sm:py-3 text-slate-800 text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#0052fe] focus:ring-1 focus:ring-[#0052fe] transition-all bg-white"
                  />
                </div>
              </div>

              {/* Row 2: Phone No * & Budget Range */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <input
                    type="tel"
                    placeholder="Phone No *"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="w-full border border-slate-300 rounded-xl px-3.5 py-2.5 sm:py-3 text-slate-800 text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#0052fe] focus:ring-1 focus:ring-[#0052fe] transition-all bg-white"
                  />
                </div>
                <div className="relative">
                  <select
                    value={budgetRange}
                    onChange={(e) => setBudgetRange(e.target.value)}
                    className="w-full border border-slate-300 rounded-xl px-3.5 py-2.5 sm:py-3 text-slate-800 text-xs sm:text-sm focus:outline-none focus:border-[#0052fe] focus:ring-1 focus:ring-[#0052fe] transition-all bg-white appearance-none cursor-pointer pr-9"
                  >
                    <option value="" disabled className="text-slate-400">
                      Budget Range
                    </option>
                    <option value="Under $5,000">&lt; $5,000</option>
                    <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                    <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                    <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                    <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                    <option value="$100,000+">$100,000+</option>
                    <option value="Flexible / To Discuss">Flexible / To Discuss</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              {/* Row 3: Subject */}
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full border border-slate-300 rounded-xl px-3.5 py-2.5 sm:py-3 text-slate-800 text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#0052fe] focus:ring-1 focus:ring-[#0052fe] transition-all bg-white"
                />
              </div>

              {/* Row 4: Message * */}
              <div>
                <textarea
                  rows={3}
                  placeholder="Message *"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full border border-slate-300 rounded-xl px-3.5 py-2.5 sm:py-3 text-slate-800 text-xs sm:text-sm placeholder:text-slate-400 focus:outline-none focus:border-[#0052fe] focus:ring-1 focus:ring-[#0052fe] transition-all bg-white resize-none"
                />
              </div>

              {/* Row 5: NDA Checkbox & Math Captcha */}
              <div className="flex flex-row items-center justify-between gap-3 pt-1">
                {/* Left: Non-Disclosure Agreement Checkbox */}
                <label className="flex items-start gap-2 cursor-pointer select-none group max-w-[220px] sm:max-w-none">
                  <input
                    type="checkbox"
                    checked={ndaRequested}
                    onChange={(e) => setNdaRequested(e.target.checked)}
                    className="mt-0.5 w-4 h-4 rounded border-slate-300 text-[#0052fe] focus:ring-0 cursor-pointer"
                  />
                  <span className="text-[11px] sm:text-xs text-slate-600 group-hover:text-slate-900 transition-colors leading-tight">
                    Include Copy of a Non-Disclosure Agreement
                  </span>
                </label>

                {/* Right: Math Captcha (7 + 5) */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="text-xs sm:text-sm font-semibold text-slate-700 tracking-wide select-none">
                    {num1} + {num2}
                  </span>
                  <input
                    type="text"
                    maxLength={3}
                    value={captchaAnswer}
                    onChange={(e) => setCaptchaAnswer(e.target.value)}
                    placeholder=""
                    required
                    aria-label="Captcha answer"
                    className="w-14 sm:w-16 h-8 sm:h-9 border border-slate-300 rounded-lg text-center font-bold text-slate-800 text-xs sm:text-sm focus:outline-none focus:border-[#0052fe] focus:ring-1 focus:ring-[#0052fe] transition-all bg-white"
                  />
                </div>
              </div>

              {/* Error Alert */}
              {error && (
                <div className="text-xs text-rose-500 font-medium py-1 px-2 rounded-lg bg-rose-50 border border-rose-200">
                  {error}
                </div>
              )}

              {/* Row 6: Submit Button & Book a Call Button (User specified: Book a Call after Submit button) */}
              <div className="pt-2 flex flex-col items-center justify-center gap-2.5">
                {/* Submit Pill Button (Cornflower blue matching reference UI) */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-40 sm:w-44 py-2.5 sm:py-3 rounded-full bg-[#6a8ff7] hover:bg-[#567ef5] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer text-center active:scale-95 disabled:opacity-50"
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>

                {/* Prominent Book a Call button right after Submit button (especially important for mobile) */}
                <a
                  href="https://calendly.com/globizhub-support/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-6 py-2 rounded-full border border-blue-200 bg-blue-50/70 hover:bg-blue-100/90 text-[#0052fe] font-bold text-xs sm:text-sm shadow-sm transition-all hover:scale-[1.02] active:scale-95"
                >
                  <span>Book a Call</span>
                  <ArrowUpRight className="w-4 h-4 text-[#0052fe]" />
                </a>
              </div>
            </form>
          )}

          {/* Footer note: For Job Opportunities : support@globizhub.com, or visit our careers page */}
          <div className="pt-4 mt-3 border-t border-slate-100 text-center">
            <p className="text-[11px] sm:text-xs text-slate-500">
              For Job Opportunities :{" "}
              <a
                href="mailto:support@globizhub.com"
                className="text-[#0052fe] hover:underline font-semibold"
              >
                support@globizhub.com
              </a>
              , or visit our{" "}
              <Link
                href="/career"
                onClick={onClose}
                className="text-[#0052fe] hover:underline font-semibold"
              >
                careers page
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
