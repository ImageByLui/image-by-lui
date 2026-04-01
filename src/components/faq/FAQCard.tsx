// =============================================================================
// FAQCard — Image by LUI (Desktop Overhaul — LUI-DESK-005 §5.5)
// =============================================================================
// Mobile: compact accordion (text-faq-q, text-inclusion, px-4)
// Desktop: spacious (20px question, 15px answer, px-6, hover shadow upgrade)
// Uses native <details>/<summary> — no JS for expand/collapse.
// =============================================================================

interface FAQCardProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export default function FAQCard({ question, answer, defaultOpen = false }: FAQCardProps) {
  return (
    <details
      className="group bg-white border-l-[3px] border-l-gold mb-3 shadow-[0_1px_6px_rgba(44,36,32,0.04)] transition-shadow duration-200 hover:shadow-[0_2px_12px_rgba(44,36,32,0.07)]"
      open={defaultOpen || undefined}
    >
      <summary className="flex items-start gap-3.5 lg:gap-4 py-[18px] lg:py-5 px-4 lg:px-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden marker:hidden">
        <span className="font-heading font-medium text-faq-q lg:text-[20px] text-espresso leading-[1.35] flex-1">
          {question}
        </span>
        <span className="w-6 h-6 lg:w-7 lg:h-7 flex items-center justify-center mt-0.5 shrink-0">
          <svg
            width="14"
            height="14"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-gold transition-transform duration-[250ms] group-open:rotate-180"
            aria-hidden="true"
          >
            <path d="M5 7.5L10 12.5L15 7.5" />
          </svg>
        </span>
      </summary>
      <div className="accordion-content">
        <div>
          <div className="px-4 lg:px-6 pb-5 lg:pb-[22px]">
            <div className="h-px bg-gold/30 mb-3.5 lg:mb-4" aria-hidden="true" />
            <div
              className="font-body text-inclusion lg:text-[15px] text-warm-grey leading-[1.65] lg:max-w-[640px] [&_strong]:text-espresso [&_strong]:font-semibold [&_a]:text-terracotta [&_a]:font-semibold [&_a]:no-underline"
              dangerouslySetInnerHTML={{ __html: answer }}
            />
          </div>
        </div>
      </div>
    </details>
  );
}
