"use client";

// =============================================================================
// FaqAccordion Component — Image by LUI
// =============================================================================
// Expandable Q&A using native <details>/<summary> for zero-JS progressive
// enhancement and accessibility. No animation library needed.
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
    <div className="space-y-3 max-w-3xl mx-auto">
      {items.map((item, index) => (
        <details
          key={index}
          className="group border border-champagne bg-white"
        >
          <summary className="flex items-center justify-between cursor-pointer p-5 md:p-6 list-none">
            <h3 className="font-body font-semibold text-[16px] md:text-[18px] text-espresso pr-4 m-0">
              {item.question}
            </h3>
            {/* Chevron icon — rotates when open */}
            <span className="shrink-0 text-terracotta transition-transform duration-200 group-open:rotate-180">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M5 7.5L10 12.5L15 7.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </summary>
          <div className="px-5 pb-5 md:px-6 md:pb-6 text-warm-grey leading-relaxed">
            {item.answer}
          </div>
        </details>
      ))}
    </div>
  );
}
