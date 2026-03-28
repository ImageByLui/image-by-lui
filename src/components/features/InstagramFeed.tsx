import { siteConfig } from "@/config/site.config";
import ImagePlaceholder from "@/components/features/ImagePlaceholder";

// =============================================================================
// InstagramFeed Component — Image by LUI
// =============================================================================
// Implementation choice: Option B (styled placeholder section)
// Reason: Avoids Instagram API key dependency and keeps the build lean.
// The Instagram Basic Display API was deprecated in late 2024. The
// replacement (Instagram Graph API) requires a Facebook Business account
// and adds significant complexity for a feed display. Option B provides
// a clean, on-brand section that drives traffic to Instagram directly.
//
// Displays 6 brand-colored placeholder tiles in a grid with a follow CTA.
// When real Instagram embed or API is desired, this component can be swapped.
// =============================================================================

import type { Lang } from "@/types/content";

interface InstagramFeedProps {
  heading: string;
  subtext: string;
  lang?: Lang;
}

export default function InstagramFeed({ heading, subtext, lang = "en" }: InstagramFeedProps) {
  const ctaText = lang === "es" ? "SIGUE EN INSTAGRAM" : "FOLLOW ON INSTAGRAM";
  return (
    <div className="text-center">
      <h2 className="mb-2">{heading}</h2>
      <a
        href={siteConfig.instagram.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-terracotta font-body font-semibold text-[14px] tracking-[0.5px] hover:underline"
      >
        {subtext}
      </a>

      {/* Placeholder grid — 6 tiles */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-8 max-w-2xl mx-auto">
        {[0, 1, 2, 0, 1, 2].map((colorIndex, i) => (
          <ImagePlaceholder
            key={i}
            alt="Instagram post"
            width={400}
            height={400}
            colorIndex={colorIndex}
            className="w-full"
          />
        ))}
      </div>

      {/* Follow CTA */}
      <div className="mt-8">
        <a
          href={siteConfig.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-terracotta text-white font-body font-semibold text-[13px] md:text-[14px] uppercase tracking-[1.5px] px-8 py-3.5 rounded-none no-underline hover:bg-terracotta-dark hover:no-underline transition-colors duration-200"
        >
          {ctaText}
        </a>
      </div>
    </div>
  );
}
