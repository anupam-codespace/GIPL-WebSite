import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | Globizhub India Private Limited",
  description:
    "Review the Terms of Use for Globizhub India's website and services. Understand the legal terms governing your access to and use of our enterprise technology services.",
  keywords: [
    "Globizhub terms of use",
    "terms and conditions IT company India",
    "Globizhub legal terms",
    "software company terms India",
  ],
  openGraph: {
    title: "Terms of Use | Globizhub India Private Limited",
    description:
      "Legal terms and conditions governing use of Globizhub India's website and enterprise technology services.",
    url: "https://globizhub.com/terms",
    type: "website",
  },
  alternates: {
    canonical: "https://globizhub.com/terms",
  },
  robots: { index: true, follow: true },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
