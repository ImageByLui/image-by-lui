import type { Metadata } from "next";
import { Cormorant_Garamond, Libre_Franklin } from "next/font/google";
import Script from "next/script";
import { siteConfig } from "@/config/site.config";
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
  weight: ["300", "400", "600"],
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
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Diagnostic image consulting in Miami. Colorimetry, morphological analysis, and lifestyle mapping for professionals. Book your complimentary color analysis.",
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    locale: "en_US",
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
// - Global components will be added in Phase 2: Header, Footer, WhatsAppButton
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
        {/* Header will be added in Phase 2 */}

        <main className="flex-1">{children}</main>

        {/* Footer will be added in Phase 2 */}
        {/* WhatsAppButton will be added in Phase 2 */}

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
