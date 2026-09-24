import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology Blog & Engineering Insights | Globizhub",
  description:
    "Read engineering insights, case studies, thought leadership, and technology articles from Globizhub India — covering AI, cloud infrastructure, SaaS development, and enterprise digital transformation.",
  keywords: [
    "technology blog India",
    "enterprise engineering blog",
    "AI insights India",
    "cloud infrastructure articles",
    "SaaS development blog",
    "digital transformation insights",
    "Globizhub blog",
    "IT company blog India",
  ],
  openGraph: {
    title: "Technology Blog & Engineering Insights | Globizhub India",
    description:
      "Engineering insights, case studies, and thought leadership from the Globizhub team — covering AI, cloud, SaaS, and enterprise digital transformation.",
    url: "https://globizhub.com/blog",
    type: "website",
    images: [
      {
        url: "/images/og-social-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Globizhub Technology Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Blog & Engineering Insights | Globizhub India",
    description:
      "AI, cloud, SaaS, and enterprise insights from Globizhub's engineering team.",
    images: ["/images/og-social-preview.jpg"],
  },
  alternates: {
    canonical: "https://globizhub.com/blog",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
