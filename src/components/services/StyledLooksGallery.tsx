import type { GalleryItem } from "@/types/content";
import ImagePlaceholder from "@/components/features/ImagePlaceholder";
interface StyledLooksGalleryProps { label: string; subheading: string; items: GalleryItem[]; }
export default function StyledLooksGallery({ label, subheading, items }: StyledLooksGalleryProps) {
  return (
    <section className="bg-champagne pt-7 pb-7" aria-label="Styled looks gallery">
      <div className="px-5 mb-[18px]">
        <p className="font-body font-semibold text-label tracking-[1.5px] uppercase text-terracotta mb-1.5">{label}</p>
        <p className="font-body text-inclusion text-warm-taupe leading-[1.5]">{subheading}</p>
      </div>
      <div className="flex gap-2.5 overflow-x-auto snap-x snap-mandatory pb-3" role="region" aria-label="Gallery" tabIndex={0}
        style={{ padding: "0 14px 12px", scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}>
        {items.map((item, i) => (
          <div key={i} className="shrink-0 snap-start" style={{ width: 200 }}>
            <div className="border border-gold p-0.5"><ImagePlaceholder alt={item.label} width={200} height={267} colorIndex={item.background === "stone" ? 1 : 2} className="w-full" /></div>
            <p className="font-body italic text-caption text-warm-taupe mt-1.5">{item.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
