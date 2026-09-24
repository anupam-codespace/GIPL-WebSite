import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers & Engineering Opportunities | Globizhub India (GHPL)",
  description:
    "Explore high-impact career opportunities at Globizhub India. Join 150+ engineers building autonomous AI systems, enterprise Next.js platforms, cloud-native infrastructure, and medical diagnostics software.",
  openGraph: {
    title: "Careers at Globizhub India | Build The Future of Enterprise Engineering",
    description:
      "Explore open engineering, AI research, cloud infrastructure, and product roles across Bengaluru, Guwahati, Chennai, and Noida delivery hubs.",
    url: "https://globizhub.com/career",
    type: "website",
  },
};

export default function CareerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
