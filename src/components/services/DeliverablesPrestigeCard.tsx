import ScrollReveal from "@/components/ui/ScrollReveal";

// =============================================================================
// DeliverablesPrestigeCard — Image by LUI (LUI-DESK-004 §4.5)
// =============================================================================
// Desktop-only (hidden below lg:). Gold-bordered prestige card with 2-column
// deliverables grid using ✦ markers. Bottom row items have no border-bottom.
// =============================================================================

interface DeliverablesPrestigeCardProps {
  heading: string;
  subheading: string;
  items: { title: string; description: string }[];
  bonus: string;
}

export default function DeliverablesPrestigeCard({
  heading, subheading, items, bonus,
}: DeliverablesPrestigeCardProps) {
  return (
    <section className="hidden lg:block bg-soft-stone py-16" aria-label="Deliverables">
      <ScrollReveal>
        <div className="max-w-[820px] mx-auto bg-white border-[1.5px] border-gold py-10 px-12">
          {/* Heading */}
          <h3 className="font-heading text-[24px] font-normal italic text-espresso text-center mb-1.5">
            {heading}
          </h3>
          <p className="text-[12px] text-warm-taupe text-center mb-7">{subheading}</p>

          {/* 2-column grid */}
          <div className="grid grid-cols-2">
            {items.map((item, i) => {
              const isLastRow = i >= items.length - 2;
              return (
                <div
                  key={i}
                  className={`flex gap-3 py-3.5 px-5 ${isLastRow ? "" : "border-b border-champagne/20"}`}
                >
                  <span className="text-gold text-[14px] font-semibold shrink-0 mt-0.5" aria-hidden="true">✦</span>
                  <div>
                    <p className="font-heading text-[16px] font-medium italic text-espresso leading-[1.3]">{item.title}</p>
                    <p className="text-[12px] text-warm-taupe leading-[1.4] mt-0.5">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Gold rule */}
          <div className="w-12 h-[1px] bg-gold mx-auto mt-5 mb-4" aria-hidden="true" />

          {/* Bonus */}
          <p className="text-[13px] text-terracotta font-medium italic text-center">{bonus}</p>
        </div>
      </ScrollReveal>
    </section>
  );
}
