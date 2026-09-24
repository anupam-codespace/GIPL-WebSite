import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Technology Services | AI, Cloud & Software Development",
  description:
    "Globizhub offers end-to-end enterprise technology services: digital transformation, AI/ML development, cloud & DevOps, mobile app development, custom software engineering, RPA automation, IoT, and managed IT services.",
  keywords: [
    "enterprise software development India",
    "AI development company India",
    "cloud DevOps India",
    "digital transformation company India",
    "mobile app development India",
    "custom software India",
    "managed IT services India",
    "RPA automation India",
    "IoT development India",
    "Globizhub services",
  ],
  openGraph: {
    title: "Enterprise Technology Services | Globizhub India",
    description:
      "End-to-end enterprise engineering: AI/ML platforms, cloud infrastructure, custom software development, digital transformation, and managed IT services by Globizhub India.",
    url: "https://globizhub.com/services",
    type: "website",
    images: [
      {
        url: "/images/og-social-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Globizhub Enterprise Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise Tech Services | Globizhub India",
    description:
      "AI, cloud, custom software, and digital transformation services by Globizhub — ISO 27001 certified, DPIIT recognized.",
    images: ["/images/og-social-preview.jpg"],
  },
  alternates: {
    canonical: "https://globizhub.com/services",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
