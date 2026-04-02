import type { PhotoOption } from "@/types/content";

interface PhotoSessionOptionsProps { label: string; options: PhotoOption[]; }

export default function PhotoSessionOptions({ label, options }: PhotoSessionOptionsProps) {
  return (
    <div className="pt-5">
      <div className="h-[1px] mb-5" style={{ backgroundColor: "rgba(196,154,92,0.25)" }} aria-hidden="true" />
      <p className="font-body font-semibold tracking-[1.5px] uppercase text-espresso mb-4" style={{ fontSize: 11 }}>{label}</p>
      <div className="grid grid-cols-2 gap-2.5">
        {options.map((option, i) => {
          const borderCls = option.borderColor === "gold" ? "border-gold/50" : "border-champagne/50";
          return (
            <div key={i} className={`border ${borderCls} py-4 px-3 text-center`} style={{ backgroundColor: "#F7F3EF" }}>
              <h3 className="font-heading font-normal italic text-[14px] text-espresso leading-[1.2] mb-1.5">{option.title}</h3>
              <p className="font-body font-semibold text-[13px] mb-1.5" style={{ color: "#A35741" }}>{option.badge}</p>
              <p className="font-body text-[11px] text-warm-taupe leading-[1.4]">{option.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
