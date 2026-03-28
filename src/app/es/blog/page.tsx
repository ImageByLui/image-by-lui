import type { Metadata } from "next";
import { blogContentEs } from "@/content/es/blog";
import { buildPageMetadata } from "@/lib/metadata";
import Button from "@/components/ui/Button";

// =============================================================================
// Blog Placeholder — Spanish (/es/blog)
// =============================================================================

export const metadata: Metadata = buildPageMetadata(blogContentEs.seo, "es", "blog");

export default function BlogPageEs() {
  const content = blogContentEs;

  return (
    <section className="bg-warm-ivory">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
        <h1 className="text-page-title mb-6">{content.heading}</h1>
        <p className="text-warm-grey leading-relaxed text-[16px] md:text-[18px] mb-10">
          {content.body}
        </p>
        <Button href={content.cta.href} external={content.cta.external}>
          {content.cta.text}
        </Button>
      </div>
    </section>
  );
}
