"use client";

import { usePathname } from "next/navigation";
import { notFoundContent } from "@/content/en/404";
import { notFoundContentEs } from "@/content/es/404";
import { getCurrentLanguage } from "@/lib/language";
import Button from "@/components/ui/Button";

// =============================================================================
// 404 Page — Bilingual
// =============================================================================
// Detects if the attempted URL started with /es/ and shows Spanish version,
// otherwise English. If detection fails, English is the default.
// =============================================================================

export default function NotFound() {
  const pathname = usePathname();
  const lang = getCurrentLanguage(pathname);
  const content = lang === "es" ? notFoundContentEs : notFoundContent;

  return (
    <section className="bg-warm-ivory">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
        <h1 className="text-page-title mb-6">{content.headline}</h1>
        <p className="text-warm-grey leading-relaxed text-[16px] md:text-[18px] mb-10">
          {content.body}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href={content.primaryCta.href}>
            {content.primaryCta.text}
          </Button>
          <Button href={content.secondaryLink.href} variant="secondary">
            {content.secondaryLink.text}
          </Button>
        </div>
      </div>
    </section>
  );
}
