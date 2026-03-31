import type { PhotoOption } from "@/types/content";
interface PhotoSessionOptionsProps { label: string; options: PhotoOption[]; }
export default function PhotoSessionOptions({ label, options }: PhotoSessionOptionsProps) {
  return (
    <section className="bg-soft-stone py-7 px-3.5" aria-label="Photo session options">
      <p className="font-body font-semibold text-[11px] tracking-[1.5px] uppercase text-terracotta px-1.5 mb-[18px]">{label}</p>
      <div className="space-y-2.5">
        {options.map((option, i) => {
          const borderCls = option.borderColor === "gold" ? "border-gold/50" : "border-champagne/50";
          const badgeCls = option.badgeVariant === "gold" ? "bg-gold/10 text-gold" : "bg-terracotta/[0.06] text-terracotta";
          return (
            <div key={i} className={`bg-white border ${borderCls} p-5`}>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-body font-semibold text-[16px] text-espresso">{option.title}</h3>
                <span className={`font-body font-semibold text-[11px] tracking-[1px] uppercase px-2.5 py-1 shrink-0 ${badgeCls}`}>{option.badge}</span>
              </div>
              <p className="font-body text-[14px] text-warm-grey leading-[1.55]">{option.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
