import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Globizhub | DPIIT-Recognized Enterprise Technology Company",
  description:
    "Learn about Globizhub India Private Limited — a DPIIT-recognized, ISO 9001/27001/20000-certified enterprise technology company headquartered in Bengaluru, building AI platforms, SaaS products, and cloud infrastructure across India.",
  keywords: [
    "About Globizhub",
    "Globizhub India Private Limited",
    "enterprise technology company India",
    "DPIIT recognized startup",
    "ISO 27001 certified IT company",
    "Bengaluru IT company",
    "AI software company Assam",
    "custom software development company India",
  ],
  openGraph: {
    title: "About Globizhub India | DPIIT-Recognized Enterprise Tech Company",
    description:
      "Globizhub India Private Limited is an ISO 9001 / 27001 / 20000 certified enterprise technology company engineering AI platforms, proprietary SaaS products, and cloud infrastructure. Made in India.",
    url: "https://globizhub.com/about",
    type: "website",
    images: [
      {
        url: "/images/og-social-preview.jpg",
        width: 1200,
        height: 630,
        alt: "About Globizhub India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Globizhub India | Enterprise Technology Company",
    description:
      "DPIIT-recognized, ISO 9001 / 27001 / 20000 certified enterprise tech company in India. AI, cloud, healthcare, and workforce platforms.",
    images: ["/images/og-social-preview.jpg"],
  },
  alternates: {
    canonical: "https://globizhub.com/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
