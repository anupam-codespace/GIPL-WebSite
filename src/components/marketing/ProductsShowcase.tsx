"use client";

import React from "react";
import Link from "next/link";
import {
  User,
  Check,
  CheckCircle,
  ListOrdered,
  Calendar,
  Sparkles,
  ChevronDown,
  LayoutGrid,
  Table,
  List,
  Plus,
  Link2,
} from "lucide-react";

interface ProductsShowcaseProps {
  onOpenConsultation?: () => void;
}

export default function ProductsShowcase({ onOpenConsultation }: ProductsShowcaseProps) {
  return (
    <section className="py-20 sm:py-28 bg-[#F8FAFC]/60 relative overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]" id="products">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-[760px] mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200/80 text-slate-700 text-xs font-semibold tracking-wide mb-4 shadow-sm">
            <span>Proprietary Platforms & Accelerators</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-4 leading-[1.14]">
            Engineered for Modern Enterprise Scale
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Battle-tested SaaS platforms and intelligent workflows engineered by Globizhub to automate high-throughput operations and eliminate manual friction.
          </p>
        </div>

        {/* 5-Card Bento Grid Layout Matching Reference UI */}
        <div className="space-y-6 sm:space-y-8">
          {/* ======================================================== */}
          {/* TOP ROW: 3 CARDS (Equal Width)                           */}
          {/* ======================================================== */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1: Intelligent Task Organizer */}
            <div className="bg-white rounded-[28px] sm:rounded-[32px] p-4 sm:p-5 border border-slate-200/70 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
              {/* Visual Mockup Container (Soft Peach Ambient) */}
              <div className="h-[250px] sm:h-[270px] w-full rounded-[22px] sm:rounded-[24px] bg-gradient-to-b from-[#FFF3EC] via-[#FFEBE0]/70 to-[#FFF7F2]/40 relative flex flex-col items-center justify-center p-4 overflow-hidden">
                {/* Subtle Radial Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,107,0,0.12),transparent_70%)] pointer-events-none" />

                {/* Layer 1: Top Floating Pill */}
                <div className="relative z-10 flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-md border border-slate-100 text-xs font-semibold text-slate-800 mb-4 group-hover:-translate-y-1 transition-transform duration-300">
                  <div className="w-5 h-5 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">
                    <User className="w-3 h-3" />
                  </div>
                  <span>Assign tasks to members</span>
                  <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[10px] font-bold">
                    ✓
                  </div>
                </div>

                {/* Layer 2: Main Radiant Coral Capsule */}
                <div className="relative z-20 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#FF5722] via-[#FF6A3D] to-[#FF7A45] text-white font-bold text-xs sm:text-sm shadow-xl shadow-orange-500/25 flex items-center gap-2 mb-4 group-hover:scale-103 transition-transform duration-300">
                  <span className="text-white text-xs">✦</span>
                  <span>Smart Task Management</span>
                </div>

                {/* Layer 3: Floating Tilted Mini Pills */}
                <div className="relative z-10 flex items-center gap-3 w-full justify-center">
                  <div className="px-3.5 py-1.5 rounded-full bg-white shadow-md border border-slate-100 text-[11px] font-semibold text-slate-700 flex items-center gap-1.5 -rotate-2 group-hover:rotate-0 transition-transform duration-300">
                    <div className="w-4 h-4 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center">
                      <ListOrdered className="w-2.5 h-2.5" />
                    </div>
                    <span>Organize all task</span>
                  </div>

                  <div className="px-3.5 py-1.5 rounded-full bg-white shadow-md border border-slate-100 text-[11px] font-semibold text-slate-700 flex items-center gap-1.5 rotate-2 group-hover:rotate-0 transition-transform duration-300">
                    <div className="w-4 h-4 rounded-md bg-emerald-50 text-emerald-600 flex items-center justify-center">
                      <CheckCircle className="w-2.5 h-2.5" />
                    </div>
                    <span>Prioritize each task</span>
                  </div>
                </div>
              </div>

              {/* Text Info */}
              <div className="pt-5 px-2 pb-2">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5 tracking-tight">
                  Intelligent Task Organizer
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                  Seamlessly arrange, delegate, and rank tasks using our smart system
                </p>
              </div>
            </div>

            {/* Card 2: Smooth Teamwork */}
            <div className="bg-white rounded-[28px] sm:rounded-[32px] p-4 sm:p-5 border border-slate-200/70 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
              {/* Visual Mockup Container (Soft Cyan/Ice Blue Ambient) */}
              <div className="h-[250px] sm:h-[270px] w-full rounded-[22px] sm:rounded-[24px] bg-gradient-to-b from-[#F0F7FF] via-[#E4F1FF]/60 to-[#F5FAFF]/40 relative flex flex-col items-center justify-center p-4 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(37,99,235,0.08),transparent_70%)] pointer-events-none" />

                {/* Top Add New Task Button with Floating Blue Cursor */}
                <div className="relative mb-4">
                  <div className="flex items-center gap-1 px-4 py-2 rounded-full bg-white shadow-md border border-slate-100 text-xs font-semibold text-sky-600">
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add new task</span>
                  </div>

                  {/* Blue Cursor Badge "Briono" */}
                  <div className="absolute -top-1 -right-8 flex items-center gap-1 z-20 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                    <svg className="w-3.5 h-3.5 text-[#2563EB] fill-current" viewBox="0 0 24 24">
                      <path d="M3 3l7 18 3-7 7-3L3 3z" />
                    </svg>
                    <span className="px-2 py-0.5 rounded-full bg-[#2563EB] text-white text-[10px] font-bold shadow-md">
                      Briono
                    </span>
                  </div>
                </div>

                {/* Floating Task Card */}
                <div className="w-full max-w-[210px] bg-white rounded-2xl p-3.5 shadow-xl border border-slate-100/90 relative z-10 group-hover:-translate-y-1 transition-transform duration-300">
                  {/* Status & Date */}
                  <div className="flex items-center justify-between gap-2 text-[10px] font-semibold text-slate-400 mb-1.5">
                    <span className="flex items-center gap-1 text-sky-600 uppercase tracking-wider font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-600" />
                      ERROR
                    </span>
                    <span className="flex items-center gap-1 text-slate-400">
                      <Calendar className="w-2.5 h-2.5" />
                      7 October 2025
                    </span>
                  </div>

                  {/* Task Name */}
                  <div className="text-xs sm:text-[13px] font-bold text-slate-800 mb-3 tracking-tight">
                    Design system requirements
                  </div>

                  {/* Bottom Row: Avatars & Attachments */}
                  <div className="flex items-center justify-between pt-1">
                    <div className="flex -space-x-1.5 overflow-hidden">
                      <div className="inline-block h-5 w-5 rounded-full ring-2 ring-white bg-amber-400 text-[9px] font-bold text-white flex items-center justify-center">
                        JD
                      </div>
                      <div className="inline-block h-5 w-5 rounded-full ring-2 ring-white bg-rose-400 text-[9px] font-bold text-white flex items-center justify-center">
                        AL
                      </div>
                      <div className="inline-block h-5 w-5 rounded-full ring-2 ring-white bg-sky-400 text-[9px] font-bold text-white flex items-center justify-center">
                        SR
                      </div>
                      <div className="inline-block h-5 w-5 rounded-full ring-2 ring-white bg-emerald-400 text-[9px] font-bold text-white flex items-center justify-center">
                        MK
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-[11px] text-slate-400 font-medium">
                      <Link2 className="w-3 h-3" />
                      <span>6</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Info */}
              <div className="pt-5 px-2 pb-2">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5 tracking-tight">
                  Smooth Teamwork
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                  Facilitate instant communication and seamless exchange of high-quality data
                </p>
              </div>
            </div>

            {/* Card 3: Smart Workflow Automation */}
            <div className="bg-white rounded-[28px] sm:rounded-[32px] p-4 sm:p-5 border border-slate-200/70 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
              {/* Visual Mockup Container (Soft Mint/Sage Green Ambient) */}
              <div className="h-[250px] sm:h-[270px] w-full rounded-[22px] sm:rounded-[24px] bg-gradient-to-b from-[#F2FAF4] via-[#E6F5EB]/60 to-[#F7FCF9]/40 relative flex items-center justify-center p-4 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(16,185,129,0.08),transparent_70%)] pointer-events-none" />

                {/* Floating Repeat Weekly Settings Modal Card */}
                <div className="w-full max-w-[225px] bg-white rounded-2xl p-3.5 shadow-xl border border-slate-100 relative z-10 group-hover:-translate-y-1 transition-transform duration-300">
                  {/* Top Dropdown Row */}
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="font-bold text-slate-800 text-[11px]">Repeat weekly</span>
                    <span className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-50 border border-slate-200 text-[10px] text-slate-600 font-medium">
                      Every 1 Week <ChevronDown className="w-2.5 h-2.5 text-slate-400" />
                    </span>
                  </div>

                  {/* Day Pills S S M T W T F with Active Green Nodes */}
                  <div className="flex items-center justify-between gap-1 mb-3">
                    {["S", "S", "M", "T", "W", "T", "F"].map((day, idx) => {
                      const isActive = idx === 2 || idx === 3 || idx === 4 || idx === 5;
                      return (
                        <div
                          key={idx}
                          className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold transition-colors ${
                            isActive
                              ? "bg-[#10B981] text-white shadow-sm"
                              : "text-slate-400 hover:text-slate-600"
                          }`}
                        >
                          {day}
                        </div>
                      );
                    })}
                  </div>

                  {/* Start & Create At Rows */}
                  <div className="space-y-1.5 text-[10px] mb-3 pb-2 border-b border-slate-100">
                    <div className="flex items-center justify-between text-slate-500">
                      <span>Start</span>
                      <span className="font-medium text-slate-700 flex items-center gap-1">
                        Sun, May 12, 2025 <ChevronDown className="w-2.5 h-2.5 text-slate-400" />
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-slate-500">
                      <span>Create at</span>
                      <span className="font-medium text-slate-700 flex items-center gap-1">
                        4:25 Am GMT +7 <ChevronDown className="w-2.5 h-2.5 text-slate-400" />
                      </span>
                    </div>
                  </div>

                  {/* Buttons Row: Cancel & Save */}
                  <div className="flex items-center justify-end gap-2 pt-0.5">
                    <span className="text-[11px] font-medium text-slate-400 hover:text-slate-600 cursor-pointer">
                      Cancel
                    </span>
                    <span className="px-3.5 py-1 rounded-full bg-slate-950 text-white text-[11px] font-bold shadow-sm cursor-pointer hover:bg-slate-800 transition-colors">
                      Save
                    </span>
                  </div>
                </div>
              </div>

              {/* Text Info */}
              <div className="pt-5 px-2 pb-2">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5 tracking-tight">
                  Smart Workflow Automation
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                  Eliminate manual work with smart triggers that keep projects moving automatically
                </p>
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* BOTTOM ROW: 2 CARDS (Wide Card + Integration Hub Card)   */}
          {/* ======================================================== */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
            {/* Card 4: Advanced Reporting (Wide 8-Col) */}
            <div className="lg:col-span-8 bg-white rounded-[28px] sm:rounded-[32px] p-4 sm:p-5 border border-slate-200/70 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
              {/* Visual Mockup Container (Soft Ice Lavender/Slate Ambient) */}
              <div className="h-[270px] sm:h-[300px] w-full rounded-[22px] sm:rounded-[24px] bg-gradient-to-b from-[#F6F8FC] via-[#EEF3FA]/70 to-[#F9FAFD]/40 relative flex flex-col justify-between p-4 sm:p-6 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,rgba(99,102,241,0.06),transparent_70%)] pointer-events-none" />

                {/* Dashboard Header Bar */}
                <div className="bg-white rounded-2xl p-3 sm:p-3.5 shadow-md border border-slate-100/90 relative z-10">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    {/* Left Brand Badge */}
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-[#FF5722] text-white flex items-center justify-center font-bold text-xs shadow-sm">
                        ◬
                      </div>
                      <span className="font-bold text-slate-900 text-xs sm:text-sm tracking-tight">
                        Real Estate Branding
                      </span>
                    </div>

                    {/* Middle View Tabs */}
                    <div className="hidden sm:flex items-center gap-1 text-[11px] font-semibold text-slate-500 bg-slate-50 p-1 rounded-xl border border-slate-100">
                      <span className="px-2.5 py-1 rounded-lg bg-white shadow-xs text-slate-900 flex items-center gap-1">
                        <LayoutGrid className="w-3 h-3 text-slate-700" />
                        Board
                      </span>
                      <span className="px-2.5 py-1 rounded-lg hover:text-slate-800 flex items-center gap-1 cursor-pointer">
                        <Table className="w-3 h-3 text-slate-400" />
                        Table
                      </span>
                      <span className="px-2.5 py-1 rounded-lg hover:text-slate-800 flex items-center gap-1 cursor-pointer">
                        <List className="w-3 h-3 text-slate-400" />
                        List
                      </span>
                    </div>

                    {/* Right Team & Actions */}
                    <div className="flex items-center gap-2">
                      <div className="hidden sm:flex -space-x-1 overflow-hidden">
                        <div className="inline-block h-5 w-5 rounded-full ring-2 ring-white bg-amber-400 text-[8px] font-bold text-white flex items-center justify-center">
                          A
                        </div>
                        <div className="inline-block h-5 w-5 rounded-full ring-2 ring-white bg-rose-400 text-[8px] font-bold text-white flex items-center justify-center">
                          B
                        </div>
                        <div className="inline-block h-5 w-5 rounded-full ring-2 ring-white bg-sky-400 text-[8px] font-bold text-white flex items-center justify-center">
                          C
                        </div>
                      </div>

                      <span className="px-2.5 py-1 rounded-full bg-gradient-to-r from-[#FF5722] to-[#FF7043] text-white text-[10px] font-bold shadow-sm flex items-center gap-1 cursor-pointer">
                        ✦ Ask AI
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-slate-900 text-white text-[10px] font-bold shadow-sm flex items-center gap-0.5 cursor-pointer">
                        + Add new task
                      </span>
                    </div>
                  </div>

                  {/* Columns Indicator Row */}
                  <div className="grid grid-cols-3 gap-3 mt-3 pt-2.5 border-t border-slate-100 text-[11px] font-bold text-slate-500">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <span>To Do</span>
                      <span className="text-[10px] font-normal text-slate-400 bg-slate-100 px-1.5 py-0.2 rounded-full">3</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                      <span>In Progress</span>
                      <span className="text-[10px] font-normal text-slate-400 bg-slate-100 px-1.5 py-0.2 rounded-full">4</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span>In Review</span>
                      <span className="text-[10px] font-normal text-slate-400 bg-slate-100 px-1.5 py-0.2 rounded-full">6</span>
                    </div>
                  </div>
                </div>

                {/* Floating Bottom Pill: "Generate your weekly report" */}
                <div className="relative z-20 flex items-center justify-between gap-3 px-5 py-2.5 rounded-full bg-white shadow-2xl border border-slate-100/90 max-w-md w-full mx-auto group-hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                    <span className="text-emerald-500 text-sm">✦</span>
                    <span>Generate your weekly report</span>
                  </div>
                  <button
                    onClick={onOpenConsultation}
                    className="px-4 py-1.5 rounded-full bg-[#2563EB] hover:bg-blue-600 text-white text-[11px] font-bold shadow-md shadow-blue-500/25 transition-all cursor-pointer"
                  >
                    Generate now
                  </button>
                </div>
              </div>

              {/* Text Info */}
              <div className="pt-5 px-2 pb-2">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5 tracking-tight">
                  Advanced Reporting
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                  Turn data into actionable insights track progress, boost performance, and streamline efficiency effortlessly
                </p>
              </div>
            </div>

            {/* Card 5: Integration Ready Platform (4-Col) */}
            <div className="lg:col-span-4 bg-white rounded-[28px] sm:rounded-[32px] p-4 sm:p-5 border border-slate-200/70 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
              {/* Visual Mockup Container (Warm Peach/Cream with Radial Grid) */}
              <div className="h-[270px] sm:h-[300px] w-full rounded-[22px] sm:rounded-[24px] bg-gradient-to-b from-[#FFF5ED] via-[#FFEDE0]/50 to-[#FFF9F5]/40 relative flex items-center justify-center p-4 overflow-hidden">
                {/* Engineering Grid Texture */}
                <div
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{
                    backgroundImage: `linear-gradient(#FF7A00 1px, transparent 1px), linear-gradient(to right, #FF7A00 1px, transparent 1px)`,
                    backgroundSize: "28px 28px",
                  }}
                />

                {/* Connected Orbit Ring */}
                <div className="absolute w-48 h-48 rounded-full border border-orange-200/70 pointer-events-none" />

                {/* Central Glowing Branded Hub */}
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#FF4500] via-[#FF6600] to-[#FF8800] flex items-center justify-center shadow-xl shadow-orange-500/30 group-hover:scale-105 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white fill-current" viewBox="0 0 24 24">
                    <path d="M12 2L2 12l10 10 10-10L12 2zm0 4.5l5.5 5.5-5.5 5.5-5.5-5.5L12 6.5z" />
                  </svg>
                </div>

                {/* Surrounding Connected Satellite Orbit Icons */}
                {/* Top: Google Drive */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center z-10 group-hover:-translate-y-1 transition-transform">
                  <svg className="w-5 h-5" viewBox="0 0 87.3 78" fill="none">
                    <path d="M6.6 66.85l3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8H0c0 1.55.4 3.1 1.2 4.5l5.4 9.35z" fill="#0066DA"/>
                    <path d="M43.65 25L29.9 1.2c-1.35.8-2.5 1.9-3.3 3.3L1.2 48.35C.4 49.75 0 51.3 0 52.85h27.5L43.65 25z" fill="#00AC47"/>
                    <path d="M73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l9.25-16c.8-1.4 1.2-2.95 1.2-4.5H59.8l5.95 10.3 7.8 13.5z" fill="#EA4335"/>
                    <path d="M43.65 25L57.4 1.2C56.05.4 54.5 0 52.95 0H34.35c-1.55 0-3.1.4-4.45 1.2L43.65 25z" fill="#00832D"/>
                    <path d="M59.8 52.85H27.5L13.75 76.8c1.35.8 2.9 1.2 4.45 1.2h50.9c1.55 0 3.1-.4 4.45-1.2L59.8 52.85z" fill="#2684FC"/>
                    <path d="M73.4 26.5l-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3L43.65 25l16.15 27.85H87.3c0-1.55-.4-3.1-1.2-4.5l-12.7-21.85z" fill="#FFBA00"/>
                  </svg>
                </div>

                {/* Right Top: Slack */}
                <div className="absolute top-16 right-7 w-10 h-10 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center z-10 group-hover:translate-x-1 transition-transform">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <path d="M6 15a2 2 0 10-2-2v2h2zm1 0a2 2 0 002 2h5a2 2 0 000-4H9a2 2 0 00-2 2z" fill="#E01E5A"/>
                    <path d="M9 6a2 2 0 102 2V6a2 2 0 00-2-2zm0 1a2 2 0 00-2 2v5a2 2 0 004 0V9a2 2 0 00-2-2z" fill="#36C5F0"/>
                    <path d="M18 9a2 2 0 102 2v-2h-2zm-1 0a2 2 0 00-2-2h-5a2 2 0 000 4h5a2 2 0 002-2z" fill="#2EB67D"/>
                    <path d="M15 18a2 2 0 10-2-2v2a2 2 0 002 2zm0-1a2 2 0 002-2V9a2 2 0 00-4 0v6a2 2 0 002 2z" fill="#ECB22E"/>
                  </svg>
                </div>

                {/* Right Bottom: Dropbox */}
                <div className="absolute bottom-12 right-7 w-10 h-10 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center z-10 group-hover:translate-x-1 transition-transform">
                  <svg className="w-5 h-5 text-[#0061FF] fill-current" viewBox="0 0 24 24">
                    <path d="M6 2l6 4-6 4-6-4 6-4zm12 0l6 4-6 4-6-4 6-4zM0 14l6-4 6 4-6 4-6-4zm18-4l6 4-6 4-6-4 6-4zm-6 5l6 4-6 4-6-4 6-4z" />
                  </svg>
                </div>

                {/* Bottom: Sparkle Hub / Asterisk */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center z-10 group-hover:translate-y-1 transition-transform">
                  <div className="w-5 h-5 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-xs">
                    ✱
                  </div>
                </div>

                {/* Left Bottom: GitLab / Git */}
                <div className="absolute bottom-12 left-7 w-10 h-10 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center z-10 group-hover:-translate-x-1 transition-transform">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 01-.3-.94l1.22-3.78 2.44-7.51c.06-.17.25-.26.43-.21.15.04.26.17.27.32l1.93 5.95h9.32l1.93-5.95c.06-.17.25-.26.43-.21.15.04.26.17.27.32l2.44 7.51 1.22 3.78c.07.31-.04.64-.3.84z" fill="#E24329"/>
                  </svg>
                </div>

                {/* Left: Trello */}
                <div className="absolute top-16 left-7 w-10 h-10 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center z-10 group-hover:-translate-x-1 transition-transform">
                  <svg className="w-5 h-5 text-[#0079BF] fill-current" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="4" fill="#0079BF" />
                    <rect x="5" y="5" width="6" height="12" rx="1.5" fill="white" />
                    <rect x="13" y="5" width="6" height="8" rx="1.5" fill="white" />
                  </svg>
                </div>
              </div>

              {/* Text Info */}
              <div className="pt-5 px-2 pb-2">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1.5 tracking-tight">
                  Integration ready platform
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                  Seamlessly connect Centra with Slack, Google Drive, Dropbox, Trello or any tool in your stack
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
