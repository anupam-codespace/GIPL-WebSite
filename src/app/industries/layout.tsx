import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industry-Specific Technology Solutions | Healthcare, FinTech, Logistics & More",
  description:
    "Globizhub delivers domain-specific enterprise technology solutions for healthcare & diagnostics, financial services, education, eCommerce, logistics, automotive, energy, and government sectors across India.",
  keywords: [
    "healthcare technology India",
    "fintech development India",
    "logistics software India",
    "education technology India",
    "eCommerce platform India",
    "automotive fleet management India",
    "energy utilities software India",
    "industry solutions India",
    "Globizhub industries",
    "enterprise industry solutions",
  ],
  openGraph: {
    title: "Industry Solutions | Healthcare, FinTech, Logistics | Globizhub India",
    description:
      "Domain-specific enterprise technology solutions for healthcare, finance, education, logistics, automotive, energy, and eCommerce sectors by Globizhub India.",
    url: "https://globizhub.com/industries",
    type: "website",
    images: [
      {
        url: "/images/og-social-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Globizhub Industry Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industry Technology Solutions | Globizhub India",
    description:
      "Enterprise-grade solutions for healthcare, FinTech, logistics, education, and more — by Globizhub India.",
    images: ["/images/og-social-preview.jpg"],
  },
  alternates: {
    canonical: "https://globizhub.com/industries",
  },
};

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
