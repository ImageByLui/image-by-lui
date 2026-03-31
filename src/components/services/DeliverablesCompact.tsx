import type { DeliverableItem } from "@/types/content";
interface DeliverablesCompactProps { label: string; subheading: string; items: DeliverableItem[]; whatsappCallout: { title: string; description: string }; }
export default function DeliverablesCompact({ label, subheading, items, whatsappCallout }: DeliverablesCompactProps) {
  return (
    <section className="bg-soft-stone py-7 px-5" aria-label="What you receive">
      <p className="font-body font-semibold text-[11px] tracking-[1.5px] uppercase text-terracotta mb-1.5">{label}</p>
      <p className="font-body text-[14px] text-warm-taupe leading-[1.5] mb-5">{subheading}</p>
      {items.map((item, i) => (
        <div key={i} className={`border-l-2 border-gold pl-4 ${i < items.length - 1 ? "mb-3" : "mb-0"}`}>
          <p className="text-[15px] leading-[1.5]"><strong className="text-espresso font-semibold">{item.title}</strong><span className="text-warm-taupe font-normal"> — {item.qualifier}</span></p>
        </div>
      ))}
      <div className="bg-gold/[0.08] border border-gold/50 py-3.5 px-4 flex items-center gap-3 mt-[18px]">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold shrink-0" aria-hidden="true"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" /></svg>
        <p className="text-[14px] leading-[1.4]"><strong className="text-espresso font-semibold">{whatsappCallout.title}</strong><span className="text-warm-taupe font-normal"> — {whatsappCallout.description}</span></p>
      </div>
    </section>
  );
}
