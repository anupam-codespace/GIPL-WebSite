"use client";

import React, { useState } from "react";
import SiteHeader from "@/components/layout/SiteHeader";
import HeroSection from "@/components/marketing/HeroSection";
import TransformationSection from "@/components/marketing/TransformationSection";
import InnovationProductShowcase from "@/components/marketing/InnovationProductShowcase";
import IndustrySectorsSection from "@/components/marketing/IndustrySectorsSection";
import DeepTechnicalExpertise from "@/components/marketing/DeepTechnicalExpertise";
import StrategicAlliances from "@/components/marketing/StrategicAlliances";
import TechAlignmentBanner from "@/components/marketing/TechAlignmentBanner";
import EnterpriseFAQ from "@/components/marketing/EnterpriseFAQ";
import SiteFooter from "@/components/layout/SiteFooter";
import ConsultationModal from "@/components/marketing/ConsultationModal";
import CommandModal from "@/components/ui/CommandModal";

export default function Home() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [consultationOpen, setConsultationOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-slate-700 relative overflow-x-hidden">
      {/* Mega-Menu Header (Appventurez Benchmark) */}
      <SiteHeader
        onOpenSearch={() => setSearchOpen(true)}
        onOpenConsultation={() => setConsultationOpen(true)}
      />

      {/* Hero Section with Architecture Visual */}
      <HeroSection onOpenConsultation={() => setConsultationOpen(true)} />

      {/* Beyond Development. We Deliver Transformation. (Appinventiv Benchmark) */}
      <TransformationSection onOpenConsultation={() => setConsultationOpen(true)} />

      {/* Innovation, Engineered by Globizhub (Appinventiv 3D Tilted Card Benchmark) */}
      <InnovationProductShowcase onOpenConsultation={() => setConsultationOpen(true)} />

      {/* Solving Complex Challenges Across Every Major Sector (Appinventiv Benchmark) */}
      <IndustrySectorsSection onOpenConsultation={() => setConsultationOpen(true)} />

      {/* Enterprise Technology Alignment Banner (Architecture, Intelligence & Execution Align) */}
      <TechAlignmentBanner onOpenConsultation={() => setConsultationOpen(true)} />

      {/* Deep Technical Expertise, Supporting Modern Systems (Appinventiv Benchmark) */}
      <DeepTechnicalExpertise onOpenConsultation={() => setConsultationOpen(true)} />

      {/* Strategic Alliances that Power Innovation (Screenshot 2 Benchmark) */}
      <StrategicAlliances onOpenConsultation={() => setConsultationOpen(true)} />

      {/* Enterprise Frequently Asked Questions */}
      <EnterpriseFAQ />

      {/* High-Contrast Grounding Enterprise Footer (Screenshot 2 Benchmark) */}
      <SiteFooter onOpenConsultation={() => setConsultationOpen(true)} />

      {/* "Talk to Our Experts" Split Modal (Matching User Screenshot 5) */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />

      {/* ⌘K Command Search Overlay */}
      <CommandModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </main>
  );
}
