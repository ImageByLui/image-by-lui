import type { DeliverableItem } from "@/types/content";

// =============================================================================
// DeliverablesCompact — Image by LUI (Image Consulting)
// =============================================================================
// Section label + subheading → 6 deliverable items (gold left border, bold
// title + qualifier) → WhatsApp callout card (gold wash bg, chat icon).
//
// Used on: Image Consulting page only.
// Part B will provide exact measurements.
// =============================================================================

interface DeliverablesCompactProps {
  label: string;
  subheading: string;
  items: DeliverableItem[];
  whatsappCallout: {
    title: string;
    description: string;
  };
}

export default function DeliverablesCompact({
  label,
  subheading,
  items,
  whatsappCallout,
}: DeliverablesCompactProps) {
  return (
    <section className="bg-warm-ivory px-5 py-8" aria-label="Deliverables">
      {/* Section label */}
      <p className="font-body font-semibold text-[10px] tracking-[1.5px] uppercase text-terracotta mb-1.5">
        {label}
      </p>
      <p className="font-body text-[13px] text-warm-taupe leading-[1.5] mb-6">
        {subheading}
      </p>

      {/* 6 deliverable items */}
      <div className="space-y-3 mb-6">
        {items.map((item, i) => (
          <div key={i} className="border-l-2 border-gold pl-4 py-1">
            <p className="font-body font-semibold text-[14px] text-espresso leading-tight">
              {item.title}
            </p>
            <p className="font-body text-[12px] text-warm-taupe leading-[1.4]">
              {item.qualifier}
            </p>
          </div>
        ))}
      </div>

      {/* WhatsApp callout card */}
      <div className="bg-gold/[0.08] border border-gold/30 px-4 py-4 flex gap-3 items-start">
        {/* Chat icon */}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold shrink-0 mt-0.5" aria-hidden="true">
          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
        </svg>
        <div>
          <p className="font-body font-semibold text-[13px] text-espresso mb-0.5">
            {whatsappCallout.title}
          </p>
          <p className="font-body text-[12px] text-warm-taupe leading-[1.4]">
            {whatsappCallout.description}
          </p>
        </div>
      </div>
    </section>
  );
}
