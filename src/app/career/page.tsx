"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  MapPin,
  Briefcase,
  Clock,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Sparkles,
  Send,
  X,
  Building2,
  Users,
  Code2,
  Cpu,
  ShieldCheck,
  Zap,
  Globe2,
  FileText,
  UploadCloud,
  Check,
  Mail,
} from "lucide-react";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import ConsultationModal from "@/components/marketing/ConsultationModal";

interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  experience: string;
  type: string;
  description: string;
  skills: string[];
  responsibilities: string[];
  requirements: string[];
  perks: string[];
}

const JOB_OPENINGS: JobOpening[] = [
  {
    id: "ghpl-eng-01",
    title: "Senior Full-Stack Engineer (Next.js & TypeScript)",
    department: "Engineering",
    location: "Bengaluru / Hybrid",
    experience: "3 - 6 Years",
    type: "Full Time",
    description:
      "Architect high-throughput customer-facing web applications, design distributed microservices, and optimize core web vitals for scalable SaaS platforms.",
    skills: ["Next.js 15", "TypeScript", "Node.js", "PostgreSQL", "TailwindCSS", "Redis"],
    responsibilities: [
      "Design, build, and deploy production-grade full-stack features using Next.js, React, and TypeScript.",
      "Architect scalable REST & GraphQL APIs backed by high-performance PostgreSQL and Redis caching layers.",
      "Collaborate with UX architects to implement pixel-perfect, accessible, and high-performance UI components.",
      "Participate in code reviews, optimize database queries, and reduce server response latencies.",
    ],
    requirements: [
      "3+ years of professional full-stack development experience with modern React/Next.js and Node.js.",
      "Deep understanding of server-side rendering (SSR), incremental static regeneration (ISR), and Web Vitals.",
      "Proficient with relational databases (PostgreSQL), Prisma/Drizzle ORM, and database indexing strategies.",
      "Familiarity with containerized workflows using Docker and cloud environments (AWS/GCP).",
    ],
    perks: [
      "Competitive compensation + annual performance bonus",
      "Flexible hybrid working model",
      "Comprehensive medical coverage for you & family",
      "Annual tech gadget & learning stipend",
    ],
  },
  {
    id: "ghpl-ai-02",
    title: "Autonomous AI & Agentic Systems Architect",
    department: "AI Lab & Research",
    location: "Bengaluru / Remote",
    experience: "4 - 8 Years",
    type: "Full Time",
    description:
      "Design private multi-agent architectures, build deterministic guardrails, and implement multimodal reasoning engines for mission-critical enterprise workflows.",
    skills: ["Python", "LangGraph", "Private RAG", "PyTorch", "Vector DBs", "vLLM"],
    responsibilities: [
      "Lead architectural design of autonomous multi-agent squads solving complex document analysis and decisioning.",
      "Develop private, sovereign Retrieval-Augmented Generation (RAG) pipelines with strict data privacy guarantees.",
      "Benchmark, fine-tune, and deploy open-source LLMs (Llama 3, Mistral, Qwen) using vLLM and TensorRT-LLM.",
      "Implement rigorous evaluation harnesses for hallucinations, safety, latency, and token efficiency.",
    ],
    requirements: [
      "4+ years of hands-on experience in machine learning and distributed Python architectures.",
      "Demonstrated experience building agentic workflows with LangGraph, AutoGen, or custom state machines.",
      "Solid foundation in vector databases (Milvus, Qdrant, pgvector) and semantic search indexing.",
      "Strong understanding of transformer architectures and GPU-accelerated model serving.",
    ],
    perks: [
      "Access to enterprise GPU clusters for rapid model prototyping",
      "Direct collaboration with founding architects",
      "Generous conference travel budget",
      "Comprehensive health & wellness package",
    ],
  },
  {
    id: "ghpl-cloud-03",
    title: "Cloud SRE & DevOps Lead",
    department: "Cloud Infrastructure",
    location: "Chennai Hub / Hybrid",
    experience: "5 - 9 Years",
    type: "Full Time",
    description:
      "Lead cloud-native infrastructure automation, maintain 99.99% uptime across production Kubernetes clusters, and institute FinOps best practices.",
    skills: ["Kubernetes", "Terraform", "AWS", "CI/CD", "Prometheus", "Zero-Trust"],
    responsibilities: [
      "Architect and operate resilient, multi-region Kubernetes clusters on AWS and sovereign cloud providers.",
      "Enforce Infrastructure as Code (IaC) using Terraform, ensuring deterministic environment reproducibility.",
      "Build automated CI/CD pipelines that achieve sub-10-minute deployment cycles with zero downtime.",
      "Design observability, alerting, and incident response playbooks using Prometheus, Grafana, and OpenTelemetry.",
    ],
    requirements: [
      "5+ years operating mission-critical production infrastructure in high-growth cloud environments.",
      "Certified Kubernetes Administrator (CKA) or AWS Solutions Architect Professional preferred.",
      "Deep experience with container security, zero-trust network policies, and vulnerability scanners.",
      "Proficient in shell scripting, Python/Go automation, and Linux kernel internals.",
    ],
    perks: [
      "Premium workstation setup (M3/M4 Max MacBook Pro)",
      "Performance incentives tied to infrastructure reliability",
      "Comprehensive insurance & family wellness coverage",
      "Flexible working hours",
    ],
  },
  {
    id: "ghpl-mob-04",
    title: "Lead Mobile Engineer (iOS & Android / Flutter)",
    department: "Mobile Engineering",
    location: "Guwahati Hub / Bengaluru",
    experience: "4 - 7 Years",
    type: "Full Time",
    description:
      "Lead mobile product engineering for enterprise IoT telematics, clinical healthcare field apps, and consumer portals.",
    skills: ["Flutter", "Swift", "Kotlin", "BLE Telematics", "Offline-First SQLite"],
    responsibilities: [
      "Architect and maintain high-reliability cross-platform mobile apps using Flutter and native Swift/Kotlin plugins.",
      "Implement low-latency Bluetooth Low Energy (BLE) protocols for hardware sensors and diagnostic devices.",
      "Engineer robust offline-first synchronization protocols with transactional SQLite and background workers.",
      "Ensure compliant app store releases across Apple App Store and Google Play Store.",
    ],
    requirements: [
      "4+ years building and deploying production-grade mobile applications with significant active user bases.",
      "Proficient in Flutter state management (Bloc/Riverpod) as well as native iOS/Android bridge development.",
      "Experience with real-time location telematics, background services, and battery optimization.",
      "Strong grasp of clean architecture, automated UI testing, and mobile security best practices.",
    ],
    perks: [
      "Leading flagship applications used by 350+ clinical labs & residential societies",
      "Hybrid work schedule",
      "Full medical coverage and wellness reimbursements",
      "Continuous skill elevation programs",
    ],
  },
  {
    id: "ghpl-des-05",
    title: "Staff UI/UX Product Designer",
    department: "Design & Product",
    location: "Bengaluru / Noida (Delhi-NCR)",
    experience: "4 - 7 Years",
    type: "Full Time",
    description:
      "Own enterprise design systems from concept to delivery, map complex user journeys, and craft intuitive digital experiences.",
    skills: ["Figma", "Design Systems", "Enterprise UX", "User Research", "Motion Design"],
    responsibilities: [
      "Design intuitive, responsive user experiences for complex enterprise dashboards and mobile platforms.",
      "Establish, evolve, and maintain our multi-product Design System with tokens and atomic components.",
      "Conduct user research, synthesize usability telemetry, and translate business requirements into wireframes.",
      "Collaborate closely with frontend engineers to ensure design fidelity and micro-interaction perfection.",
    ],
    requirements: [
      "4+ years of UI/UX design experience, with a stellar portfolio showcasing end-to-end enterprise products.",
      "Mastery of Figma (auto-layout, components, variables, interactive prototyping) and design systems.",
      "Proven ability to simplify intricate data-dense workflows into clean, human-centered interfaces.",
      "Strong communication skills to articulate design decisions to engineers and executive stakeholders.",
    ],
    perks: [
      "Latest Apple Studio Display and design workstation",
      "Generous font and design asset allowance",
      "Flexible hybrid working model",
      "Comprehensive medical benefits",
    ],
  },
  {
    id: "ghpl-qa-06",
    title: "Senior QA Automation Engineer",
    department: "Quality Engineering",
    location: "Guwahati Hub / Chennai",
    experience: "3 - 5 Years",
    type: "Full Time",
    description:
      "Build automated testing frameworks, integrate continuous quality gates in CI/CD, and execute end-to-end regression runs.",
    skills: ["Playwright", "Cypress", "Jest", "API Testing", "Security Audits"],
    responsibilities: [
      "Build and scale automated test suites covering UI, API, database integrity, and performance metrics.",
      "Integrate automated quality gates within GitHub Actions and GitLab CI/CD pipelines.",
      "Conduct security audits, penetration testing checks, and vulnerability assessments.",
      "Collaborate with developers to isolate bugs, perform root cause analyses, and verify fixes.",
    ],
    requirements: [
      "3+ years in automated quality engineering with modern tools like Playwright, Cypress, and Postman.",
      "Strong JavaScript/TypeScript or Python programming skills for writing maintainable test automation.",
      "Experience with load testing (k6/JMeter) and API contract testing.",
      "Knowledge of ISO 27001/ISO 9001 compliance standards is a definite plus.",
    ],
    perks: [
      "Rapid career velocity and certification sponsorships",
      "Comprehensive medical insurance",
      "Flexible work schedule",
      "Inclusive and collaborative team environment",
    ],
  },
  {
    id: "ghpl-med-07",
    title: "LIMS Healthcare Diagnostics Solutions Engineer",
    department: "Healthcare Systems",
    location: "Guwahati Hub / Remote",
    experience: "2 - 5 Years",
    type: "Full Time",
    description:
      "Drive hardware analyzer machine integration, calibration telemetry, and automated diagnostic report workflows for Patholab.Cloud.",
    skills: ["HL7 / FHIR", "Diagnostic Analyzers", "Serial & TCP Protocols", "SQL", "APIs"],
    responsibilities: [
      "Interface clinical diagnostic machines (biochemistry, hematology, immunology) via bidirectional protocols.",
      "Ensure seamless bidirectional telemetry between analyzer hardware and Patholab.Cloud LIMS backend.",
      "Oversee automated barcode generation, sample tracking pipelines, and critical value SMS/WhatsApp dispatch.",
      "Provide level-3 technical support for hospital and diagnostic laboratory deployments.",
    ],
    requirements: [
      "2+ years of experience working with clinical laboratory information systems or medical hardware integration.",
      "Working knowledge of HL7, ASTM, RS-232 serial communication, and TCP/IP telemetry protocols.",
      "Proficient in relational databases (SQL) and debugging backend API payloads.",
      "Passionate about transforming healthcare delivery through rock-solid software.",
    ],
    perks: [
      "Direct impact on software powering hundreds of live diagnostic centers across India",
      "Hybrid & remote work flexibility",
      "Full family healthcare coverage",
      "Performance incentives",
    ],
  },
  {
    id: "ghpl-biz-08",
    title: "Enterprise Solutions & Technical Account Manager",
    department: "Business & Growth",
    location: "Noida (Delhi-NCR) / Bengaluru",
    experience: "4 - 8 Years",
    type: "Full Time",
    description:
      "Partner with C-level executives and enterprise clients to define technical roadmaps, scope bespoke deliverables, and manage client engagement.",
    skills: ["Technical Pre-Sales", "Architecture Scoping", "Enterprise SaaS", "Client Success"],
    responsibilities: [
      "Engage with prospective enterprise clients to understand business challenges and technical needs.",
      "Collaborate with principal architects to produce comprehensive technical proposals and estimations.",
      "Serve as the trusted strategic advisor for enterprise accounts throughout delivery and scale phases.",
      "Drive account growth, upsell engineering squads, and maintain exceptional client satisfaction ratings.",
    ],
    requirements: [
      "4+ years in technical pre-sales, solutions consulting, or key account management in software services.",
      "Ability to translate complex software architectures and AI concepts into clear business ROI.",
      "Outstanding presentation, negotiation, and written communication skills.",
      "Demonstrated track record of managing enterprise relationships with high renewal rates.",
    ],
    perks: [
      "Lucrative performance-based incentive structure",
      "Travel allowance and executive entertainment budget",
      "Comprehensive medical and term life insurance",
      "Clear pathway to practice leadership",
    ],
  },
];

const DEPARTMENTS = [
  "All Departments",
  "Engineering",
  "AI Lab & Research",
  "Cloud Infrastructure",
  "Mobile Engineering",
  "Design & Product",
  "Quality Engineering",
  "Healthcare Systems",
  "Business & Growth",
];

const LOCATIONS = [
  "All Locations",
  "Bengaluru",
  "Guwahati",
  "Chennai",
  "Noida",
  "Remote / Hybrid",
];

export default function CareerPage() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [selectedDept, setSelectedDept] = useState("All Departments");
  const [selectedLoc, setSelectedLoc] = useState("All Locations");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);

  // Application Modal State
  const [applyingJob, setApplyingJob] = useState<JobOpening | null>(null);
  const [applicantName, setApplicantName] = useState("");
  const [applicantEmail, setApplicantEmail] = useState("");
  const [applicantPhone, setApplicantPhone] = useState("");
  const [applicantLinkedIn, setApplicantLinkedIn] = useState("");
  const [applicantPortfolio, setApplicantPortfolio] = useState("");
  const [applicantExperience, setApplicantExperience] = useState("");
  const [applicantResumeName, setApplicantResumeName] = useState("");
  const [applicantMessage, setApplicantMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);

  // Newsletter Subscription State
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubmitting, setNewsletterSubmitting] = useState(false);
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  // Filter Jobs
  const filteredJobs = useMemo(() => {
    return JOB_OPENINGS.filter((job) => {
      // Department filter
      if (selectedDept !== "All Departments" && job.department !== selectedDept) {
        return false;
      }
      // Location filter
      if (selectedLoc !== "All Locations") {
        if (!job.location.toLowerCase().includes(selectedLoc.toLowerCase())) {
          return false;
        }
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesTitle = job.title.toLowerCase().includes(q);
        const matchesDesc = job.description.toLowerCase().includes(q);
        const matchesSkills = job.skills.some((s) => s.toLowerCase().includes(q));
        if (!matchesTitle && !matchesDesc && !matchesSkills) {
          return false;
        }
      }
      return true;
    });
  }, [selectedDept, selectedLoc, searchQuery]);

  const handleApplyClick = (job: JobOpening) => {
    setApplyingJob(job);
    setApplicationSubmitted(false);
  };

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantEmail || !applicantName) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setApplicationSubmitted(true);
    }, 900);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;

    setNewsletterSubmitting(true);
    setTimeout(() => {
      setNewsletterSubmitting(false);
      setNewsletterSuccess(true);
    }, 750);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#FFE600] selection:text-black">
      {/* Global Header */}
      <SiteHeader onOpenConsultation={() => setConsultationOpen(true)} />

      {/* ======================================================== */}
      {/* 1. HERO SECTION: Cinematic Video Background              */}
      {/* ======================================================== */}
      <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden min-h-[92vh] flex items-center justify-center bg-black">
        {/* Background Video from Pinterest Pin 793407659399273483 */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/career_hero_poster.jpg"
            className="w-full h-full object-cover opacity-80 filter brightness-125 contrast-120"
          >
            <source src="/videos/career_hero_bg.mp4" type="video/mp4" />
          </video>
          {/* Subtle cinematic overlays for legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/90 pointer-events-none" />
          <div className="absolute inset-0 bg-radial from-transparent via-transparent to-black/60 pointer-events-none" />
        </div>

        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none z-[1]" />
        <div className="absolute bottom-10 right-10 w-[450px] h-[300px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none z-[1]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Master Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.15] mb-6">
            Build The Future of Enterprise Engineering{" "}
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              With Us
            </span>
          </h1>

          {/* Mission Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed mb-10">
            We are a squad of 150+ engineers, architects, and AI pioneers creating high-throughput software and cloud infrastructure for visionary enterprises worldwide. Explore open roles across 4 prime technology delivery hubs.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#openings"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm sm:text-base rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-[0.98] transition-all cursor-pointer inline-flex items-center gap-2 group"
            >
              <span>Explore Current Openings</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              onClick={() => {
                setApplyingJob({
                  id: "general",
                  title: "General Engineering Application",
                  department: "Engineering & Technology",
                  location: "Bengaluru / Guwahati / Chennai / Noida / Remote",
                  experience: "Any Level",
                  type: "Full Time / Flexible",
                  description: "Submit your profile for upcoming engineering and leadership roles.",
                  skills: ["Full-Stack", "Cloud", "AI / ML", "Mobile", "UI/UX"],
                  responsibilities: [],
                  requirements: [],
                  perks: [],
                });
                setApplicationSubmitted(false);
              }}
              type="button"
              className="px-8 py-4 bg-white/10 hover:bg-white/15 text-white font-semibold text-sm sm:text-base rounded-full border border-white/20 hover:border-white/30 backdrop-blur-sm transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>Submit General Profile</span>
            </button>
          </div>

          {/* Quick Highlight Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-14 pt-8 border-t border-white/10 text-left">
            <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10">
              <div className="text-xl sm:text-2xl font-extrabold text-blue-400">150+</div>
              <div className="text-xs text-slate-400 mt-0.5">Full-Time Engineers</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10">
              <div className="text-xl sm:text-2xl font-extrabold text-sky-400">4 Hubs</div>
              <div className="text-xs text-slate-400 mt-0.5">Bengaluru, Guwahati, Chennai, Noida</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10">
              <div className="text-xl sm:text-2xl font-extrabold text-emerald-400">ISO Certified</div>
              <div className="text-xs text-slate-400 mt-0.5">27001 Security Standards</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10">
              <div className="text-xl sm:text-2xl font-extrabold text-indigo-400">100% In-House</div>
              <div className="text-xs text-slate-400 mt-0.5">Direct Engineering Ownership</div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. JOB OPENINGS SECTION (Trending Openings Benchmark)    */}
      {/* ======================================================== */}
      <section id="openings" className="py-20 sm:py-28 bg-[#fbfbfb] border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-[#1473e6] font-bold text-xs sm:text-sm tracking-wider uppercase">
                Careers at Globizhub
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 mt-2 leading-tight">
                Current Opportunities
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl">
                Join our world-class engineering team. Discover the roles where your skills will create massive enterprise impact.
              </p>
            </div>

            {/* Quick Count Badge */}
            <div className="flex items-center gap-2 self-start md:self-auto px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-xs text-xs font-bold text-slate-700">
              <Sparkles className="w-4 h-4 text-[#1473e6]" />
              <span>{filteredJobs.length} Open Positions Available</span>
            </div>
          </div>

          {/* Search & Filter Bar */}
          <div className="bg-white p-4 sm:p-6 rounded-3xl border border-slate-200/90 shadow-xs mb-10 space-y-4">
            {/* Live Search Input */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by job title, skill (e.g. Next.js, Python, Kubernetes, Flutter)..."
                className="w-full pl-11 pr-10 py-3 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 focus:border-[#1473e6] focus:bg-white text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                  aria-label="Clear Search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Filter Dropdowns & Pills */}
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 pt-2 border-t border-slate-100">
              {/* Department Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar flex-1">
                {DEPARTMENTS.slice(0, 5).map((dept) => {
                  const isActive = selectedDept === dept;
                  return (
                    <button
                      key={dept}
                      onClick={() => setSelectedDept(dept)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                        isActive
                          ? "bg-[#1473e6] text-white shadow-xs"
                          : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                      }`}
                    >
                      {dept}
                    </button>
                  );
                })}
              </div>

              {/* Location Selector */}
              <div className="flex items-center gap-3 shrink-0">
                <span className="text-xs font-bold text-slate-500 hidden sm:inline">Location:</span>
                <select
                  value={selectedLoc}
                  onChange={(e) => setSelectedLoc(e.target.value)}
                  className="px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-700 outline-none cursor-pointer hover:border-slate-300"
                >
                  {LOCATIONS.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>

                {(selectedDept !== "All Departments" || selectedLoc !== "All Locations" || searchQuery) && (
                  <button
                    onClick={() => {
                      setSelectedDept("All Departments");
                      setSelectedLoc("All Locations");
                      setSearchQuery("");
                    }}
                    className="text-xs font-bold text-[#1473e6] hover:underline cursor-pointer"
                  >
                    Reset
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Job Listings List */}
          {filteredJobs.length === 0 ? (
            <div className="py-20 text-center bg-white rounded-3xl border border-slate-200 shadow-xs">
              <Search className="w-10 h-10 text-slate-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-800 mb-1">
                No matching opportunities found
              </h3>
              <p className="text-sm text-slate-500 max-w-md mx-auto mb-6">
                We couldn&apos;t find any roles matching your current filter criteria. Feel free to submit a general application.
              </p>
              <button
                onClick={() => {
                  setSelectedDept("All Departments");
                  setSelectedLoc("All Locations");
                  setSearchQuery("");
                }}
                className="px-5 py-2.5 rounded-xl bg-[#1473e6] text-white text-xs font-bold hover:bg-[#0c51d6] transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredJobs.map((job) => {
                const isExpanded = expandedJobId === job.id;
                return (
                  <div
                    key={job.id}
                    className="bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-7 shadow-xs hover:shadow-md transition-all duration-200"
                  >
                    {/* Top Row: Title, Badges, and Primary CTA */}
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="space-y-2 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-[#1473e6] border border-blue-200/60">
                            {job.department}
                          </span>
                          <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-slate-400" />
                            <span>{job.location}</span>
                          </span>
                          <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 flex items-center gap-1">
                            <Briefcase className="w-3 h-3 text-slate-400" />
                            <span>{job.experience}</span>
                          </span>
                          <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                            {job.type}
                          </span>
                        </div>

                        <h3 className="text-lg sm:text-xl font-bold text-slate-950 leading-snug">
                          {job.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                          {job.description}
                        </p>

                        {/* Skills Tags */}
                        <div className="flex flex-wrap items-center gap-1.5 pt-1">
                          {job.skills.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-slate-50 text-slate-700 border border-slate-200/60"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center gap-3 pt-3 lg:pt-0 border-t lg:border-t-0 border-slate-100 shrink-0">
                        <button
                          type="button"
                          onClick={() => setExpandedJobId(isExpanded ? null : job.id)}
                          className="px-4 py-2.5 rounded-xl border border-slate-200 hover:border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
                        >
                          <span>{isExpanded ? "Hide Details" : "View Details"}</span>
                          {isExpanded ? (
                            <ChevronUp className="w-3.5 h-3.5" />
                          ) : (
                            <ChevronDown className="w-3.5 h-3.5" />
                          )}
                        </button>
                        <button
                          type="button"
                          onClick={() => handleApplyClick(job)}
                          className="px-5 py-2.5 rounded-xl bg-[#1473e6] hover:bg-[#0c51d6] text-white text-xs font-bold transition-all shadow-xs active:scale-95 cursor-pointer flex items-center gap-1.5"
                        >
                          <span>Apply Now</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Expandable Details Drawer */}
                    {isExpanded && (
                      <div className="mt-6 pt-6 border-t border-slate-100 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-700 animate-in fade-in duration-200">
                        {/* Responsibilities */}
                        <div className="space-y-2.5">
                          <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
                            Key Responsibilities
                          </h4>
                          <ul className="space-y-2">
                            {job.responsibilities.map((r, rIdx) => (
                              <li key={rIdx} className="flex items-start gap-2 leading-relaxed">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#1473e6] shrink-0 mt-1.5" />
                                <span>{r}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Requirements */}
                        <div className="space-y-2.5">
                          <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
                            Qualifications &amp; Skills
                          </h4>
                          <ul className="space-y-2">
                            {job.requirements.map((req, qIdx) => (
                              <li key={qIdx} className="flex items-start gap-2 leading-relaxed">
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0 mt-1.5" />
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Perks */}
                        <div className="space-y-2.5">
                          <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">
                            Benefits &amp; Perks
                          </h4>
                          <ul className="space-y-2">
                            {job.perks.map((p, pIdx) => (
                              <li key={pIdx} className="flex items-start gap-2 leading-relaxed">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                                <span>{p}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="pt-3">
                            <button
                              type="button"
                              onClick={() => handleApplyClick(job)}
                              className="w-full py-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#1473e6] font-bold text-xs transition-colors"
                            >
                              Submit Application for this Role →
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. SUBSCRIBE TO OUR NEWSLETTER SECTION (Appinventiv)     */}
      {/* ======================================================== */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#0f172a] via-[#090d16] to-[#020617] rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden">
            {/* Background Ambient Glows */}
            <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-600/15 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Heading & Subtitle (Exact Appinventiv Style) */}
              <div className="lg:col-span-6 space-y-4">
                <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-500/30">
                  Stay Informed
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  Subscribe to <br className="hidden sm:inline" />
                  our newsletter
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-lg">
                  Get the latest architectural breakdowns, autonomous AI research, engineering insights, and tech career updates delivered straight to your inbox.
                </p>
                <div className="flex items-center gap-6 text-xs text-slate-400 pt-2">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Weekly Curation</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Zero Spam Guarantee</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Subscription Form */}
              <div className="lg:col-span-6">
                {newsletterSuccess ? (
                  <div className="p-6 rounded-2xl bg-white/5 border border-emerald-500/40 backdrop-blur-md text-center space-y-3 animate-in fade-in duration-300">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                      <Check className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white">
                      You&apos;re Officially Subscribed!
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto">
                      Thank you for joining our engineering circle. We&apos;ve sent a confirmation to <strong className="text-white">{newsletterEmail}</strong>.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                    <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                      <div className="relative flex-1">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type="email"
                          required
                          value={newsletterEmail}
                          onChange={(e) => setNewsletterEmail(e.target.value)}
                          placeholder="Your email address"
                          className="w-full pl-11 pr-4 py-4 rounded-2xl bg-white/10 hover:bg-white/15 focus:bg-white/20 border border-white/15 focus:border-blue-400 text-sm sm:text-base text-white placeholder:text-slate-400 outline-none transition-all shadow-inner"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={newsletterSubmitting}
                        className="px-8 py-4 rounded-2xl bg-[#1163fb] hover:bg-[#0c51d6] active:scale-95 text-white font-bold text-sm sm:text-base transition-all shadow-lg hover:shadow-blue-500/25 cursor-pointer shrink-0 disabled:opacity-70 flex items-center justify-center gap-2"
                      >
                        {newsletterSubmitting ? (
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>
                            <span>Subscribe</span>
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                    <p className="text-[11px] text-slate-400">
                      By subscribing, you agree to receive technical updates from Globizhub India Pvt Ltd. Unsubscribe at any time.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. JOB APPLICATION MODAL (Full Interactive Candidate UI) */}
      {/* ======================================================== */}
      {applyingJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl border border-slate-200 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto no-scrollbar">
            {/* Close Button */}
            <button
              onClick={() => setApplyingJob(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
              aria-label="Close Application"
            >
              <X className="w-4 h-4" />
            </button>

            {applicationSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Application Received!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you for applying for <strong className="text-slate-900">{applyingJob.title}</strong>. Our engineering recruitment team will review your credentials and contact you within 48 business hours.
                </p>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 max-w-sm mx-auto">
                  Application Reference: <strong className="text-slate-900">GHPL-APP-{Date.now().toString().slice(-6)}</strong>
                </div>
                <button
                  type="button"
                  onClick={() => setApplyingJob(null)}
                  className="px-6 py-2.5 rounded-xl bg-[#1473e6] text-white text-xs font-bold hover:bg-[#0c51d6] transition-colors"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <div>
                <div className="pr-10 mb-6">
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-[#1473e6] border border-blue-200/60">
                    {applyingJob.department}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-950 mt-2">
                    Apply for {applyingJob.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    {applyingJob.location} • {applyingJob.experience} • {applyingJob.type}
                  </p>
                </div>

                <form onSubmit={handleApplicationSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={applicantName}
                        onChange={(e) => setApplicantName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-[#1473e6] focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={applicantEmail}
                        onChange={(e) => setApplicantEmail(e.target.value)}
                        placeholder="john@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-[#1473e6] focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={applicantPhone}
                        onChange={(e) => setApplicantPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-[#1473e6] focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Years of Relevant Experience *</label>
                      <input
                        type="text"
                        required
                        value={applicantExperience}
                        onChange={(e) => setApplicantExperience(e.target.value)}
                        placeholder="e.g. 4.5 Years"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-[#1473e6] focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">LinkedIn Profile</label>
                      <input
                        type="url"
                        value={applicantLinkedIn}
                        onChange={(e) => setApplicantLinkedIn(e.target.value)}
                        placeholder="https://linkedin.com/in/username"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-[#1473e6] focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">GitHub / Portfolio URL</label>
                      <input
                        type="url"
                        value={applicantPortfolio}
                        onChange={(e) => setApplicantPortfolio(e.target.value)}
                        placeholder="https://github.com/username"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-[#1473e6] focus:bg-white"
                      />
                    </div>
                  </div>

                  {/* Resume Upload Simulation */}
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Resume / CV (PDF or DOCX)</label>
                    <label className="flex items-center justify-center gap-2 p-4 rounded-xl border-2 border-dashed border-slate-200 hover:border-[#1473e6] bg-slate-50/50 hover:bg-blue-50/30 transition-all cursor-pointer">
                      <UploadCloud className="w-5 h-5 text-slate-400" />
                      <span className="text-xs text-slate-600 font-semibold">
                        {applicantResumeName || "Click to upload Resume (PDF, max 10MB)"}
                      </span>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) setApplicantResumeName(file.name);
                        }}
                      />
                    </label>
                  </div>

                  {/* Note */}
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Why are you interested in this role?</label>
                    <textarea
                      rows={3}
                      value={applicantMessage}
                      onChange={(e) => setApplicantMessage(e.target.value)}
                      placeholder="Briefly share what drives your passion and what you'll bring to the squad..."
                      className="w-full p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-[#1473e6] focus:bg-white"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-xl bg-[#1473e6] hover:bg-[#0c51d6] active:scale-95 text-white font-bold text-sm transition-all shadow-md cursor-pointer disabled:opacity-70 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Application</span>
                        </>
                      )}
                    </button>
                    <p className="text-[10px] text-slate-400 text-center mt-2">
                      All applicant information is strictly protected under enterprise Non-Disclosure Agreements (NDA).
                    </p>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Site Global Footer */}
      <SiteFooter onOpenConsultation={() => setConsultationOpen(true)} />

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />
    </div>
  );
}
