"use client";

import React from "react";

interface AllianceCard {
  id: string;
  name: string;
  logoUrl: string;
}

// Row 1: Strategic Cloud, Enterprise & Modern Web Alliances (Official Partner SVGs)
const ROW_ONE_CARDS: AllianceCard[] = [
  {
    id: "aws",
    name: "Amazon Web Services",
    logoUrl: "/images/alliances/aws-partnership-logo.svg",
  },
  {
    id: "ingram",
    name: "Ingram Micro",
    logoUrl: "/images/alliances/ingram_micro.svg",
  },
  {
    id: "accenture",
    name: "Accenture",
    logoUrl: "/images/alliances/accenture.svg",
  },
  {
    id: "gcp",
    name: "Google Cloud Platform",
    logoUrl: "/images/alliances/google-cloud-platform.svg",
  },
  {
    id: "azure",
    name: "Azure",
    logoUrl: "/images/alliances/azure-partnership-logo.svg",
  },
  {
    id: "servicenow",
    name: "ServiceNow",
    logoUrl: "/images/alliances/servicenow-1.svg",
  },
  {
    id: "adobe",
    name: "Adobe",
    logoUrl: "/images/alliances/adobe.svg",
  },
  {
    id: "magento",
    name: "Magento",
    logoUrl: "/images/alliances/magento-partnership-logo.svg",
  },
  {
    id: "databricks",
    name: "Databricks",
    logoUrl: "/images/alliances/databricks.svg",
  },
  {
    id: "snowflake",
    name: "Snowflake",
    logoUrl: "/images/alliances/snowflake.svg",
  },
  {
    id: "hubspot",
    name: "HubSpot",
    logoUrl: "/images/alliances/hubspot-partnership-logo.svg",
  },
  {
    id: "moengage",
    name: "Moengage",
    logoUrl: "/images/alliances/moengage.svg",
  },
  {
    id: "boomi",
    name: "Boomi",
    logoUrl: "/images/alliances/boomi.svg",
  },
  {
    id: "docker",
    name: "Docker",
    logoUrl: "/images/alliances/docker-1.svg",
  },
];

// Row 2: AI, Data, Enterprise Platforms, Cloud & Infrastructure (Official Partner SVGs)
const ROW_TWO_CARDS: AllianceCard[] = [
  {
    id: "sagemaker",
    name: "AWS SageMaker",
    logoUrl: "/images/alliances/aws-sagemaker-1.svg",
  },
  {
    id: "bedrock",
    name: "AWS Bedrock",
    logoUrl: "/images/alliances/aws-bedrock-1.svg",
  },
  {
    id: "mulesoft",
    name: "MuleSoft",
    logoUrl: "/images/alliances/mulesoft.svg",
  },
  {
    id: "onestream",
    name: "OneStream",
    logoUrl: "/images/alliances/onestream.svg",
  },
  {
    id: "oracle",
    name: "Oracle",
    logoUrl: "/images/alliances/oracle-partnership-logo.svg",
  },
  {
    id: "salesforce",
    name: "Salesforce",
    logoUrl: "/images/alliances/salesforce-partnership.svg",
  },
  {
    id: "redhat",
    name: "Red Hat",
    logoUrl: "/images/alliances/redhat.svg",
  },
  {
    id: "sabre",
    name: "Sabre",
    logoUrl: "/images/alliances/sabre.svg",
  },
  {
    id: "stripe",
    name: "Stripe",
    logoUrl: "/images/alliances/stripe-1.svg",
  },
  {
    id: "cloudinary",
    name: "Cloudinary",
    logoUrl: "/images/alliances/cloudinary.svg",
  },
];

interface StrategicAlliancesProps {
  onOpenConsultation?: () => void;
}

export default function StrategicAlliances({ onOpenConsultation }: StrategicAlliancesProps) {
  return (
    <section className="scroll-mt-24 pt-28 sm:pt-36 pb-24 sm:pb-32 bg-[#000000] text-white relative overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Subtle background ambient lighting */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] pointer-events-none rounded-full blur-[140px] opacity-15"
        style={{
          background:
            "radial-gradient(circle, rgba(37, 99, 235, 0.4) 0%, rgba(14, 165, 233, 0.1) 50%, transparent 70%)",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-[50px] font-bold text-white tracking-tight leading-[1.14]">
            Strategic Alliances that
            <br />
            Power Innovation
          </h2>
        </div>

        {/* Dual Infinite Continuous Flowing Marquees */}
        <div className="relative w-full overflow-hidden my-4 py-2">
          {/* Gradient edge masks for smooth fade in/out */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-44 bg-gradient-to-r from-[#000000] to-transparent z-20" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-44 bg-gradient-to-l from-[#000000] to-transparent z-20" />

          {/* Row 1: Flowing Left-to-Right */}
          <div className="mb-5 overflow-hidden">
            <div className="animate-marquee-continuous-reverse flex items-center gap-4 py-2">
              {[...ROW_ONE_CARDS, ...ROW_ONE_CARDS].map((card, idx) => (
                <div
                  key={`r1-${card.id}-${idx}`}
                  className="w-[180px] sm:w-[200px] md:w-[210px] h-[150px] sm:h-[165px] md:h-[175px] rounded-2xl bg-[#12151c]/90 hover:bg-[#181d28] border border-white/[0.08] hover:border-white/20 transition-all duration-300 shadow-md flex flex-col items-center justify-between p-5 text-center shrink-0 cursor-pointer group"
                >
                  {/* Centered Logo */}
                  <div className="flex-1 flex items-center justify-center w-full group-hover:scale-105 transition-transform duration-200">
                    <img
                      src={card.logoUrl}
                      alt={card.name}
                      loading="eager"
                      className="max-h-12 max-w-[125px] w-auto h-auto object-contain transition-transform duration-200"
                    />
                  </div>
                  {/* Bottom Name */}
                  <div className="text-xs sm:text-[13px] text-slate-300 font-semibold text-center line-clamp-1 w-full mt-2">
                    {card.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Flowing Right-to-Left */}
          <div className="overflow-hidden">
            <div className="animate-marquee-continuous flex items-center gap-4 py-2">
              {[...ROW_TWO_CARDS, ...ROW_TWO_CARDS].map((card, idx) => (
                <div
                  key={`r2-${card.id}-${idx}`}
                  className="w-[180px] sm:w-[200px] md:w-[210px] h-[150px] sm:h-[165px] md:h-[175px] rounded-2xl bg-[#12151c]/90 hover:bg-[#181d28] border border-white/[0.08] hover:border-white/20 transition-all duration-300 shadow-md flex flex-col items-center justify-between p-5 text-center shrink-0 cursor-pointer group"
                >
                  {/* Centered Logo */}
                  <div className="flex-1 flex items-center justify-center w-full group-hover:scale-105 transition-transform duration-200">
                    <img
                      src={card.logoUrl}
                      alt={card.name}
                      loading="eager"
                      className="max-h-12 max-w-[125px] w-auto h-auto object-contain transition-transform duration-200"
                    />
                  </div>
                  {/* Bottom Name */}
                  <div className="text-xs sm:text-[13px] text-slate-300 font-semibold text-center line-clamp-1 w-full mt-2">
                    {card.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
