interface FAQCardProps { question: string; answer: string; defaultOpen?: boolean; }
export default function FAQCard({ question, answer, defaultOpen = false }: FAQCardProps) {
  return (
    <details className="group bg-white border-l-[3px] border-l-gold mb-2.5 shadow-[0_1px_4px_rgba(44,36,32,0.06)]" open={defaultOpen || undefined}>
      <summary className="flex items-start gap-3.5 py-[18px] px-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
        <span className="font-heading font-medium text-[17px] text-espresso leading-[1.35] flex-1">{question}</span>
        <span className="w-6 h-6 flex items-center justify-center mt-0.5 shrink-0">
          <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold transition-transform duration-200 group-open:rotate-180" aria-hidden="true"><path d="M5 7.5L10 12.5L15 7.5" /></svg>
        </span>
      </summary>
      <div className="accordion-content"><div>
        <div className="px-4 pb-5">
          <div className="h-px bg-gold/30 mb-3.5" aria-hidden="true" />
          <div className="font-body text-[14px] text-warm-grey leading-[1.65] [&_strong]:text-espresso [&_strong]:font-semibold [&_a]:text-terracotta [&_a]:font-semibold [&_a]:no-underline" dangerouslySetInnerHTML={{ __html: answer }} />
        </div>
      </div></div>
    </details>
  );
}
