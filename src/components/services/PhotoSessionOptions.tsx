import type { PhotoOption } from "@/types/content";

interface PhotoSessionOptionsProps { label: string; options: PhotoOption[]; }

export default function PhotoSessionOptions({ label, options }: PhotoSessionOptionsProps) {
  return (
    <section className="bg-soft-stone py-7 px-3.5" aria-label="Photo session options">
      {/* Top separator + label */}
      <div className="h-[1px] mx-1.5 mb-5" style={{ backgroundColor: "rgba(196,154,92,0.25)" }} aria-hidden="true" />
      <p className="font-body font-semibold tracking-[1.5px] uppercase text-espresso text-center mb-5" style={{ fontSize: 11 }}>{label}</p>

      {/* 2-column card grid */}
      <div className="grid grid-cols-2 gap-2.5 px-1.5">
        {options.map((option, i) => {
          const borderCls = option.borderColor === "gold" ? "border-gold/50" : "border-champagne/50";
          return (
            <div key={i} className={`border ${borderCls} py-5 px-3 text-center`} style={{ backgroundColor: "#F7F3EF" }}>
              <h3 className="font-heading font-normal italic text-[15px] text-espresso leading-[1.2] mb-2">{option.title}</h3>
              <p className="font-body font-semibold text-[14px] text-espresso">{option.badge}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
