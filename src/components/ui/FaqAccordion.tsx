"use client";

// =============================================================================
// FaqAccordion Component — Image by LUI (V5)
// =============================================================================
// Clean hairline separators between questions. + / − terracotta icons.
// Supports bold key phrases in answers via <strong> tags.
// Uses native <details> for accessibility — no JS required for basic function.
// =============================================================================

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  return (
    <div className="max-w-3xl mx-auto">
      {items.map((item, index) => (
        <details
          key={index}
          className={`group ${
            index < items.length - 1 ? "border-b border-soft-stone" : ""
          }`}
        >
          <summary className="flex items-center justify-between cursor-pointer py-5 md:py-6 list-none">
            <h3 className="font-body font-semibold text-[15px] md:text-[17px] text-espresso pr-4 m-0">
              {item.question}
            </h3>
            {/* + / − icon */}
            <span className="shrink-0 text-terracotta text-[20px] leading-none w-5 text-center select-none">
              <span className="group-open:hidden">+</span>
              <span className="hidden group-open:inline">&minus;</span>
            </span>
          </summary>
          <div className="pb-5 md:pb-6 text-warm-grey leading-relaxed text-[14px] md:text-[16px] max-w-[640px]">
            {/* Support bold key phrases via dangerouslySetInnerHTML */}
            <p dangerouslySetInnerHTML={{ __html: item.answer }} />
          </div>
        </details>
      ))}
    </div>
  );
}
