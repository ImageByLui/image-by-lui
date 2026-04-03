import type { Metadata } from "next";
import { homeContentEs } from "@/content/es/home";
import { buildPageMetadata } from "@/lib/metadata";
import HomePageLayout from "@/components/home/HomePageLayout";

export const metadata: Metadata = {
  ...buildPageMetadata(homeContentEs.seo, "es", "home"),
  openGraph: {
    title: "Image by LUI — Consultoría de Imagen Diagnóstica en Miami",
    description: "Estrategia de imagen basada en colorimetría y ciencia del estilo. Análisis de color de cortesía para profesionales. Bilingüe EN/ES.",
    images: [{ url: "/og/og-default.jpg", width: 1200, height: 630 }],
    locale: "es_US",
    type: "website",
  },
};

export default function HomePageEs() {
  return <HomePageLayout content={homeContentEs} />;
}
