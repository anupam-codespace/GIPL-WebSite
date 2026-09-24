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

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://globizhub.com");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Globizhub | Enterprise Software Engineering & Technology Intelligence",
    template: "%s | Globizhub",
  },
  description:
    "Globizhub India Private Limited — a DPIIT-recognized, ISO 9001 / 27001 / 20000 certified enterprise technology company engineering AI platforms, SaaS products, and cloud infrastructure for healthcare, logistics, workforce, and global trade industries.",
  keywords: [
    "Globizhub",
    "Globizhub India",
    "Globizhub India Private Limited",
    "IT company India",
    "best IT company India",
    "top IT companies in India",
    "enterprise software company India",
    "software development company India",
    "custom software development India",
    "AI development company India",
    "artificial intelligence company India",
    "cloud infrastructure India",
    "enterprise AI solutions India",
    "autonomous AI agents India",
    "HRMS software India",
    "diagnostic laboratory software",
    "LIMS software India",
    "food delivery app development",
    "quick commerce platform India",
    "B2B marketplace India",
    "library management system India",
    "RFID library management",
    "inventory management software India",
    "Patholab.cloud",
    "TeamHub HRMS",
    "Bungzo delivery platform",
    "GlobizLibrary RFID",
    "Enterprise IMS inventory",
    "Globizhub Listing B2B",
    "cloud architecture company",
    "DevOps consulting India",
    "ISO 27001 certified IT company",
    "ISO 9001 certified software company",
    "Startup India recognized company",
    "DPIIT recognized startup India",
    "MSME registered IT company",
    "Assam startup company",
    "SaaS company India",
    "healthcare technology India",
    "fintech development India",
    "enterprise engineering India",
    "IT consulting company India",
    "proprietary software products India",
  ],
  authors: [{ name: "Globizhub India Private Limited", url: siteUrl }],
  creator: "Globizhub India Private Limited",
  publisher: "Globizhub India Private Limited",
  category: "Technology",
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "Globizhub | Enterprise Software Engineering & Technology Intelligence",
    description:
      "Globizhub India Private Limited is a DPIIT-recognized, ISO 9001 / 27001 / 20000 certified enterprise technology company building AI platforms, healthcare software, workforce management, and B2B commerce solutions. Proudly Made in India.",
    url: siteUrl,
    siteName: "Globizhub India Private Limited",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/og-social-preview.jpg",
        secureUrl: `${siteUrl}/images/og-social-preview.jpg`,
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Globizhub — Innovation, Engineered for Enterprise India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Globizhub | Enterprise Software Engineering & Technology Intelligence",
    description:
      "ISO 9001, ISO 27001 & ISO 20000 certified enterprise tech company — AI, cloud, healthcare, workforce and B2B platforms. DPIIT recognized. Made in India.",
    images: [`${siteUrl}/images/og-social-preview.jpg`],
    creator: "@GlobizHub",
    site: "@GlobizHub",
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? undefined,
  },
  other: {
    "geo.region": "IN",
    "geo.country": "India",
    "og:locale:alternate": "en_US",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Globizhub India Private Limited",
  alternateName: "Globizhub",
  url: siteUrl,
  logo: `${siteUrl}/images/globizhub_logo.png`,
  sameAs: [
    "https://linkedin.com/company/globizhub",
    "https://twitter.com/GlobizHub",
  ],
  description:
    "Globizhub India Private Limited is a DPIIT-recognized, ISO 9001 / 27001 / 20000 certified enterprise technology company engineering AI platforms, proprietary SaaS products, cloud infrastructure, and digital transformation solutions for healthcare, logistics, workforce management, and global trade industries.",
  foundingDate: "2021",
  foundingLocation: {
    "@type": "Place",
    addressCountry: "IN",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
    addressRegion: "Assam",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Sales & Consulting",
    email: "admin@globizhub.com",
    availableLanguage: "English",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Enterprise Technology Services & Proprietary Products",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "SoftwareApplication", name: "Patholab.Cloud — Diagnostic Laboratory Intelligence" } },
      { "@type": "Offer", itemOffered: { "@type": "SoftwareApplication", name: "TeamHub — Enterprise HRMS & Workforce OS" } },
      { "@type": "Offer", itemOffered: { "@type": "SoftwareApplication", name: "Bungzo — Hyperlocal Food Delivery Platform" } },
      { "@type": "Offer", itemOffered: { "@type": "SoftwareApplication", name: "GlobizLibrary — Academic RFID Repository" } },
      { "@type": "Offer", itemOffered: { "@type": "SoftwareApplication", name: "Enterprise IMS — Inventory & Supply Chain OS" } },
      { "@type": "Offer", itemOffered: { "@type": "SoftwareApplication", name: "Globizhub Listing — B2B Trade Marketplace" } },
    ],
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Globizhub India Private Limited",
  url: siteUrl,
  description:
    "Enterprise Software Engineering, AI Platforms, and Proprietary SaaS Products by Globizhub India.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteUrl}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

import { Suspense } from "react";
import Analytics from "@/components/analytics/Analytics";
import CalendlyWidget from "@/components/marketing/CalendlyWidget";

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
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&display=swap"
          rel="stylesheet"
        />
        <meta property="og:image:secure_url" content={`${siteUrl}/images/og-social-preview.jpg`} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white text-slate-700 antialiased selection:bg-slate-900 selection:text-white font-['Google_Sans',sans-serif]">
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
        <CalendlyWidget />
        {children}
      </body>
    </html>
  );
}
