import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Security & Compliance | ISO 27001 | Globizhub India",
  description:
    "Learn how Globizhub India protects enterprise data. ISO/IEC 27001 certified information security management, GDPR-aligned practices, zero-trust architecture, and SOC 2 compliance practices for enterprise clients.",
  keywords: [
    "ISO 27001 IT company India",
    "data security India",
    "enterprise data protection India",
    "zero trust security India",
    "GDPR compliance India",
    "SOC 2 IT company India",
    "Globizhub data security",
    "information security management India",
  ],
  openGraph: {
    title: "Data Security & ISO 27001 Compliance | Globizhub India",
    description:
      "ISO/IEC 27001 certified data security practices, zero-trust architecture, and enterprise-grade compliance by Globizhub India.",
    url: "https://globizhub.com/data-security",
    type: "website",
    images: [
      {
        url: "/images/og-social-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Globizhub Data Security",
      },
    ],
  },
  alternates: {
    canonical: "https://globizhub.com/data-security",
  },
};

export default function DataSecurityLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
