import type { FreeSessionDeliverable } from "@/types/content";
import ImagePlaceholder from "@/components/features/ImagePlaceholder";

interface FreeSessionCardProps {
  imageAlt: string; title: string; subtitle: string; description: string;
  deliverables: FreeSessionDeliverable[]; cta: { text: string; href: string; external?: boolean }; footnote: string;
}

export default function FreeSessionCard({ imageAlt, title, subtitle, description, deliverables, cta, footnote }: FreeSessionCardProps) {
  return (
    <section className="bg-soft-stone py-5 px-3.5" aria-label="Free session">
      <div className="bg-white border border-champagne overflow-hidden">
        <div className="p-1.5">
          <ImagePlaceholder alt={imageAlt} width={340} height={121} colorIndex={0} className="w-full" />
        </div>
        <div className="pt-4 px-5 pb-5">
          <p className="font-body font-semibold text-label tracking-[1.5px] uppercase text-terracotta mb-2">{subtitle}</p>
          <h2 className="font-heading font-medium text-card-title text-espresso leading-[1.15] mb-1.5">{title}</h2>
          <div className="w-8 h-[length:var(--lui-gold-line-h)] bg-gold my-3" aria-hidden="true" />
          <p className="font-body text-card text-warm-grey leading-[1.6] mb-3.5">{description}</p>
          <div className="mb-4">
            {deliverables.map((d, i) => (
              <p key={i} className="text-inclusion text-warm-grey leading-[1.7] pl-[18px] mb-[5px] relative">
                <span className="absolute left-0 text-gold font-semibold" aria-hidden="true">—</span>
                <span className="font-semibold text-espresso">{d.label}</span> — {d.sublabel}
              </p>
            ))}
          </div>
          <a href={cta.href} target={cta.external ? "_blank" : undefined} rel={cta.external ? "noopener noreferrer" : undefined}
            className="block text-center font-body font-semibold text-cta tracking-[1.5px] uppercase py-4 bg-terracotta text-white no-underline hover:no-underline hover:bg-terracotta-dark transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2">
            {cta.text}
          </a>
          <p className="font-body text-caption text-warm-taupe text-center mt-2">{footnote}</p>
        </div>
      </div>
    </section>
  );
}
