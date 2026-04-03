import type { Metadata } from "next";
import { homeContent } from "@/content/en/home";
import { buildPageMetadata } from "@/lib/metadata";
import HomePageLayout from "@/components/home/HomePageLayout";

export const metadata: Metadata = {
  ...buildPageMetadata(homeContent.seo, "en", "home"),
  openGraph: {
    title: "Image by LUI — Diagnostic Image Consulting in Miami",
    description: "Image strategy built on colorimetry and style science. Complimentary color analysis for professionals. Bilingual EN/ES.",
    images: [{ url: "/og/og-default.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
};

export default function HomePage() {
  return <HomePageLayout content={homeContent} />;
}
