import type { Metadata } from "next";
import { siteConfig } from "@/config/site.config";
import type { PageSEO, Lang } from "@/types/content";
import { getOgLocale, getAlternateOgLocale } from "@/lib/language";

/**
 * Build full Next.js Metadata for a page.
 *
 * Usage in a page file:
 *   export const metadata = buildPageMetadata(homeContent.seo, "en", "home");
 *
 * Or with generateMetadata:
 *   export function generateMetadata() {
 *     return buildPageMetadata(homeContent.seo, "en", "home");
 *   }
 */
export function buildPageMetadata(
  seo: PageSEO,
  lang: Lang,
  pageKey: keyof typeof siteConfig.pages
): Metadata {
  const domain = siteConfig.domain;
  const urls = siteConfig.pages[pageKey];
  const canonicalUrl = `${domain}${urls[lang]}`;
  const enUrl = `${domain}${urls.en}`;
  const esUrl = `${domain}${urls.es}`;

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: enUrl,
        es: esUrl,
        "x-default": enUrl,
      },
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: getOgLocale(lang),
      // alternateLocale is typed as string[] in Next.js
      alternateLocale: [getAlternateOgLocale(lang)],
      type: "website",
      ...(seo.ogImage && {
        images: [
          {
            url: seo.ogImage,
            width: 1200,
            height: 630,
            alt: seo.title,
          },
        ],
      }),
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
