import Link from "next/link";
import type { FAQPreviewItem } from "@/types/content";
import ScrollReveal from "@/components/ui/ScrollReveal";

// =============================================================================
// FAQPreview — Image by LUI (LUI-DESK-002 §2.6)
// =============================================================================
// Desktop-only (hidden below lg:). Renders 3 FAQ items in a grid with a
// "See all questions →" link. Items have white bg, champagne border that
// transitions to gold on hover.
// =============================================================================

interface FAQPreviewProps {
  heading: string;
  items: FAQPreviewItem[];
  linkText: string;
  linkHref: string;
}

export default function FAQPreview({ heading, items, linkText, linkHref }: FAQPreviewProps) {
  return (
    <section className="hidden lg:block bg-warm-ivory pb-20" aria-label="FAQ preview">
      <div className="max-w-[1200px] mx-auto px-12">
        <ScrollReveal>
          <h3 className="font-heading text-[24px] font-normal text-espresso text-center mb-8">
            {heading}
          </h3>
        </ScrollReveal>

        <div className="grid grid-cols-3 gap-6">
          {items.map((item, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="bg-white border border-champagne/40 p-6 transition-colors duration-300 hover:border-gold">
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
