import Link from "next/link";
import type { FAQPreviewItem } from "@/types/content";
import ScrollReveal from "@/components/ui/ScrollReveal";

// =============================================================================
// FAQPreview — Image by LUI (LUI-DESK-002 §2.6, LUI-DESK-003 §3.7)
// =============================================================================
// Desktop-only (hidden below lg:). Renders FAQ items in a grid with a
// "See all questions →" link. Items have white bg, champagne border → gold hover.
// Supports 2 or 3 columns (3 default for Services Overview, 2 for Occasion).
// =============================================================================

interface FAQPreviewProps {
  heading: string;
  items: FAQPreviewItem[];
  linkText: string;
  linkHref: string;
  /** Grid columns — 3 for Services Overview, 2 for Occasion Styling */
  columns?: 2 | 3;
  /** Optional max-width constraint (e.g., 880px for 2-col variant) */
  maxWidth?: string;
}

export default function FAQPreview({ heading, items, linkText, linkHref, columns = 3, maxWidth }: FAQPreviewProps) {
  const gridCls = columns === 2 ? "grid-cols-2 gap-5" : "grid-cols-3 gap-6";
  const headingSize = columns === 2 ? "text-[22px]" : "text-[24px]";

  return (
    <section className="hidden lg:block bg-warm-ivory pb-16" aria-label="FAQ preview">
      <div className="max-w-[1200px] mx-auto px-12">
        <ScrollReveal>
          <h3 className={`font-heading ${headingSize} font-normal text-espresso text-center mb-7`}>
            {heading}
          </h3>
        </ScrollReveal>

        <div className={`grid ${gridCls}`} style={maxWidth ? { maxWidth, margin: "0 auto" } : undefined}>
          {items.map((item, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="bg-white border border-champagne/40 p-5 transition-colors duration-300 hover:border-gold">
                <h4 className="font-heading text-[17px] font-medium italic text-espresso mb-2 leading-[1.3]">
                  {item.question}
                </h4>
                <p className="text-[13px] text-warm-grey leading-[1.55]">
                  {item.answer}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center mt-6">
            <Link
              href={linkHref}
              className="text-[13px] font-medium text-terracotta no-underline hover:no-underline relative inline-block group"
            >
              {linkText}
              <span className="absolute bottom-[-2px] left-0 w-0 h-[1px] bg-terracotta transition-[width] duration-300 group-hover:w-full" aria-hidden="true" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
