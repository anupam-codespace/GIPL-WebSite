import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Globizhub India Private Limited",
  description:
    "Read the Globizhub India Privacy Policy. Understand how we collect, use, protect, and share your personal data in compliance with India's PDPB and global privacy standards.",
  keywords: [
    "Globizhub privacy policy",
    "data privacy India",
    "personal data protection India",
    "IT company privacy policy",
    "PDPB compliance India",
  ],
  openGraph: {
    title: "Privacy Policy | Globizhub India Private Limited",
    description:
      "Globizhub India's privacy policy — how we collect, use, protect, and handle your personal data in accordance with PDPB and global privacy standards.",
    url: "https://globizhub.com/privacy",
    type: "website",
  },
  alternates: {
    canonical: "https://globizhub.com/privacy",
  },
  robots: { index: true, follow: true },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
