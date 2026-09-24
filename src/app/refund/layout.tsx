import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | Globizhub India",
  description:
    "Read the Globizhub India Refund and Cancellation Policy. Understand your rights and our procedures for refunds, cancellations, and service disputes.",
  openGraph: {
    title: "Refund & Cancellation Policy | Globizhub India",
    description:
      "Globizhub India's official refund and cancellation policy for enterprise technology services and products.",
    url: "https://globizhub.com/refund",
    type: "website",
  },
  alternates: {
    canonical: "https://globizhub.com/refund",
  },
  robots: { index: true, follow: true },
};

export default function RefundLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
