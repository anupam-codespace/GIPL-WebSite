import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Policies & ESG | Globizhub India Private Limited",
  description:
    "Review Globizhub India's corporate governance policies, Environmental, Social, and Governance (ESG) commitments, code of conduct, and ethical business practices as a DPIIT-recognized enterprise.",
  keywords: [
    "corporate policies IT company India",
    "ESG commitments India",
    "corporate governance India",
    "DPIIT recognized company policies",
    "Globizhub corporate policies",
    "enterprise code of conduct India",
  ],
  openGraph: {
    title: "Corporate Policies & ESG | Globizhub India",
    description:
      "Corporate governance, ESG commitments, and ethical business practices of Globizhub India Private Limited — DPIIT-recognized enterprise technology company.",
    url: "https://globizhub.com/corporate-policies",
    type: "website",
  },
  alternates: {
    canonical: "https://globizhub.com/corporate-policies",
  },
};

export default function CorporatePoliciesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
