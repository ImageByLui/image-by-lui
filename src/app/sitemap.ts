import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site.config";

export default function sitemap(): MetadataRoute.Sitemap {
  const domain = siteConfig.domain;
  const pages = siteConfig.pages;
  const now = new Date().toISOString();

  // Build sitemap entries for each page pair (EN + ES)
  const entries: MetadataRoute.Sitemap = [];

  for (const page of Object.values(pages)) {
    // English page
    entries.push({
      url: `${domain}${page.en}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: page.en === "/" ? 1.0 : 0.8,
      alternates: {
        languages: {
          en: `${domain}${page.en}`,
          es: `${domain}${page.es}`,
        },
      },
    });

    // Spanish page
    entries.push({
      url: `${domain}${page.es}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: page.es === "/es" ? 1.0 : 0.8,
      alternates: {
        languages: {
          en: `${domain}${page.en}`,
          es: `${domain}${page.es}`,
        },
      },
    });
  }

  return entries;
}
