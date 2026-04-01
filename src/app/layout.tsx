import type { Metadata } from "next";
import { Cormorant_Garamond, Libre_Franklin } from "next/font/google";
import Script from "next/script";
import { siteConfig } from "@/config/site.config";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/features/WhatsAppButton";
import MobileCTABar from "@/components/features/MobileCTABar";
import LangUpdater from "@/components/features/LangUpdater";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import "./globals.css";
// =============================================================================
// Font Loading — next/font/google with display: swap for performance
// =============================================================================
const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant-garamond",
  display: "swap",
});
const libreFranklin = Libre_Franklin({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-libre-franklin",
  display: "swap",
});
// =============================================================================
// Default Metadata — overridden per page via generateMetadata
// =============================================================================
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: `${siteConfig.name} | Diagnostic Image Consulting Miami`,
    template: "%s",
  },
  description:
    "Diagnostic image consulting in Miami. Colorimetry, morphological analysis, and lifestyle mapping for professionals. Book your complimentary color analysis.",
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    locale: "en_US",
    images: [
      {
        url: "/og/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Image by LUI — Diagnostic Image Consulting Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Diagnostic Image Consulting Miami`,
    description:
      "Diagnostic image consulting in Miami. Colorimetry, morphological analysis, and lifestyle mapping for professionals.",
    images: ["/og/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};
// =============================================================================
// Root Layout
// =============================================================================
// This wraps every page on the site. It provides:
// - Font CSS variables (consumed by globals.css @theme)
// - Google Analytics 4 script (loaded after interactive, skipped if no ID)
// - Global components: Header, Footer, WhatsAppButton, SchemaMarkup
// =============================================================================
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const ga4Id = siteConfig.ga4MeasurementId;
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${libreFranklin.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <LangUpdater />
        <SchemaMarkup />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <MobileCTABar />
        {/* Google Analytics 4 — only loads if measurement ID is configured */}
        {ga4Id && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${ga4Id}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
