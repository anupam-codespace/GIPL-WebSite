import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://globizhub.com"),
  title: {
    default: "Globizhub | Technology Intelligence & Enterprise Software Engineering",
    template: "%s | Globizhub",
  },
  description:
    "Globizhub India Private Limited engineers resilient digital platforms, autonomous AI systems, and cloud infrastructure. ISO 9001, ISO 27001 & ISO 20000 certified.",
  keywords: [
    "Globizhub",
    "IT services India",
    "Enterprise AI",
    "Autonomous Agents",
    "Custom Software",
    "Patholab.cloud",
    "LIMS",
    "Bungzo",
    "Cloud Architecture",
    "DevOps",
    "Bengaluru IT company",
  ],
  authors: [{ name: "Globizhub India Private Limited" }],
  alternates: {
    canonical: "https://globizhub.com",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: "Globizhub | Technology Intelligence & Software Engineering",
    description:
      "Architecting resilient digital platforms, autonomous AI systems, and cloud infrastructure.",
    url: "https://globizhub.com",
    siteName: "Globizhub India Private Limited",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/og-social-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Globizhub Enterprise Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Globizhub | Technology Intelligence & Enterprise Software Engineering",
    description:
      "Architecting resilient digital platforms, autonomous AI systems, and cloud infrastructure.",
    images: ["/images/og-social-preview.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import { Suspense } from "react";
import Analytics from "@/components/analytics/Analytics";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${spaceGrotesk.variable} ${inter.variable} ${ibmPlexMono.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-white text-slate-700 antialiased selection:bg-slate-900 selection:text-white font-['Google_Sans',sans-serif]">
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
