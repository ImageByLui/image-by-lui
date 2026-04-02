import type { DeliverableItem } from "@/types/content";

interface DeliverablesCompactProps {
  label: string;
  subheading: string;
  items: DeliverableItem[];
  whatsappCallout: { title: string; description: string };
}

export default function DeliverablesCompact({ label, subheading, items, whatsappCallout }: DeliverablesCompactProps) {
  return (
    <section className="py-7 px-3.5" style={{ backgroundColor: "#E8E0D6" }} aria-label="What you keep">
      {/* Gold-framed white card */}
      <div className="border border-gold/40 bg-white px-5 py-7">
        {/* Heading — italic serif, centered */}
        <h2 className="font-heading font-normal italic text-[22px] text-espresso text-center mb-2">
          {label}
        </h2>

        {/* Subtitle — small caps, centered */}
        <p className="font-body font-semibold text-[10px] tracking-[1.5px] uppercase text-warm-taupe text-center mb-5">
          {subheading}
        </p>

        {/* Gold separator */}
        <div className="w-10 h-[1.5px] mx-auto mb-6" style={{ backgroundColor: "#C49A5C" }} aria-hidden="true" />

        {/* Deliverables list — vertical with ✦ markers */}
        <div className="space-y-4 mb-6">
          {items.map((item, i) => (
            <div key={i} className="flex gap-3">
              <span className="shrink-0 mt-0.5" style={{ color: "#C49A5C", fontSize: 10 }} aria-hidden="true">✦</span>
              <div>
                <p className="font-body font-semibold text-[14px] text-espresso leading-[1.3] mb-0.5">{item.title}</p>
                <p className="font-body text-[12px] text-warm-taupe leading-[1.4]">{item.qualifier}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Gold separator before WhatsApp */}
        <div className="w-10 h-[1.5px] mx-auto mb-5" style={{ backgroundColor: "#C49A5C" }} aria-hidden="true" />

        {/* WhatsApp callout — italic gold, centered */}
        <p className="font-heading font-semibold italic text-[13px] text-center leading-[1.45]" style={{ color: "#C49A5C" }}>
          {whatsappCallout.title} — {whatsappCallout.description}
        </p>
      </div>
    </section>
  );
}
