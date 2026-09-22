"use client";

import React, { useState } from "react";
import { Cpu, Globe, Server, Cloud, ShieldCheck } from "lucide-react";

export default function TechStackMatrix() {
  const [activeCategory, setActiveCategory] = useState("ai");

  const categories = [
    { id: "ai", label: "AI & Autonomous Agents", icon: Cpu },
    { id: "frontend", label: "Frontend & Mobile", icon: Globe },
    { id: "backend", label: "Backend & Systems", icon: Server },
    { id: "cloud", label: "Cloud & DevOps", icon: Cloud },
    { id: "security", label: "Security & Infosec", icon: ShieldCheck },
  ];

  const techData: Record<string, { title: string; desc: string; items: { name: string; tag: string; desc: string }[] }> = {
    ai: {
      title: "Autonomous AI & Intelligent Model Systems",
      desc: "Deterministic agent orchestration, domain-specialized RAG pipelines, and high-throughput LLM inference.",
      items: [
        { name: "LangGraph", tag: "Agent Framework", desc: "Cyclic multi-agent state machines for autonomous workflows." },
        { name: "vLLM & Triton", tag: "Inference Server", desc: "PagedAttention high-throughput GPU model serving." },
        { name: "pgvector & Pinecone", tag: "Vector Indexing", desc: "Low-latency semantic retrieval and similarity search." },
        { name: "PyTorch & LoRA", tag: "Model Fine-Tuning", desc: "Parameter-efficient adaptation on private enterprise data." },
        { name: "Claude 3.5 & Llama 3.3", tag: "Foundation Models", desc: "Zero-shot reasoning and automated code generation." },
        { name: "Guardrails AI", tag: "Deterministic Safety", desc: "Prompt injection defense and structured output validation." },
      ],
    },
    frontend: {
      title: "High-Performance Web & Cross-Platform Mobile",
      desc: "Instantaneous sub-100ms load times, accessible component hierarchies, and fluid native mobile animations.",
      items: [
        { name: "Next.js 15", tag: "Full-Stack Web", desc: "React Server Components and incremental static regeneration." },
        { name: "React 19", tag: "UI Architecture", desc: "Concurrent rendering with optimistic UI updates." },
        { name: "TypeScript 5.7", tag: "Type Safety", desc: "Strict end-to-end typing across client and server boundaries." },
        { name: "Flutter", tag: "Mobile Engine", desc: "Pixel-perfect 120fps iOS and Android cross-platform apps." },
        { name: "React Native", tag: "Native Bridge", desc: "Modern TurboModules and Fabric rendering architecture." },
        { name: "Tailwind CSS", tag: "Styling Tokens", desc: "Utility-first CSS with strict design system tokenization." },
      ],
    },
    backend: {
      title: "Distributed Backend & Event-Driven Systems",
      desc: "Fault-tolerant transaction pipelines designed for massive concurrent load and zero-downtime operations.",
      items: [
        { name: "Golang", tag: "Microservices", desc: "Ultra-fast compiled concurrency for payment & order routing." },
        { name: "Node.js & Fastify", tag: "API Layer", desc: "Asynchronous I/O with typed schema validation." },
        { name: "Python FastAPI", tag: "AI Microservices", desc: "Async Python backend for machine learning orchestration." },
        { name: "Apache Kafka", tag: "Event Bus", desc: "Distributed log streaming processing millions of events/sec." },
        { name: "PostgreSQL", tag: "Primary Relational DB", desc: "ACID transactions with JSONB indexing and read replicas." },
        { name: "Redis", tag: "In-Memory Cache", desc: "Sub-millisecond session state and distributed locking." },
      ],
    },
    cloud: {
      title: "Cloud Infrastructure & Multi-Region SRE",
      desc: "Automated GitOps deployments, Kubernetes container orchestration, and continuous observability.",
      items: [
        { name: "Kubernetes (EKS/GKE)", tag: "Orchestration", desc: "Self-healing pod scheduling with automated horizontal scaling." },
        { name: "Terraform & OpenTofu", tag: "Infra as Code", desc: "Declarative infrastructure provisioning with version control." },
        { name: "AWS & Google Cloud", tag: "Hyperscalers", desc: "Multi-region active-active architectures and VPC peering." },
        { name: "GitHub Actions", tag: "CI/CD Automation", desc: "Automated linting, test suites, and container builds." },
        { name: "Prometheus & Grafana", tag: "Observability", desc: "Real-time metrics alerting with distributed OpenTelemetry traces." },
        { name: "Docker", tag: "Containerization", desc: "Reproducible container runtimes across staging and production." },
      ],
    },
    security: {
      title: "Cybersecurity, Zero-Trust & Infosec Governance",
      desc: "Enterprise compliance standards baked directly into the continuous integration lifecycle.",
      items: [
        { name: "ISO 27001 Certified", tag: "Information Security", desc: "Comprehensive management system for information security." },
        { name: "SOC2 Type II Readiness", tag: "Trust & Privacy", desc: "Rigorous controls for security, availability, and confidentiality." },
        { name: "HIPAA & HL7/FHIR", tag: "Healthcare Compliance", desc: "Encrypted protected health information (PHI) standards." },
        { name: "Zero-Trust Architecture", tag: "Network Security", desc: "Never trust, always verify: mTLS and least-privilege RBAC." },
        { name: "AES-256 & TLS 1.3", tag: "Encryption", desc: "Full cryptographic protection at rest and in transit." },
        { name: "SonarQube & Snyk", tag: "Automated SAST/DAST", desc: "Continuous code vulnerability and dependency scanning." },
      ],
    },
  };

  const current = techData[activeCategory];

  return (
    <section className="py-20 sm:py-28 bg-white relative" id="tech-stack">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-[780px] mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold tracking-wide mb-4 shadow-sm">
            <span>Production Architecture Stack</span>
          </div>
          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Battle-Tested Technology Stack
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            We build exclusively with industry-proven, open, and scalable technologies to ensure zero proprietary lock-in.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl bg-slate-100 max-w-[880px] mx-auto mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? "bg-white text-slate-900 shadow-sm border border-slate-200"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-indigo-600" : "text-slate-400"}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Active Technology Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-200">
          {current.items.map((item, idx) => (
            <div
              key={idx}
              className="white-card rounded-2xl p-6 flex flex-col justify-between hover:border-indigo-200 group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded-md bg-indigo-50 text-indigo-700 text-[11px] font-bold">
                    {item.tag}
                  </span>
                </div>
                <h4 className="font-['Space_Grotesk'] text-lg font-bold text-slate-900 mb-2">
                  {item.name}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
