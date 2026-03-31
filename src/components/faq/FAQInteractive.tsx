"use client";
import { useState, useRef } from "react";
import type { FAQPageContent, FAQCategory } from "@/types/content";
import CategoryPills from "@/components/faq/CategoryPills";
import FAQCard from "@/components/faq/FAQCard";
import CategoryCrossLinks from "@/components/faq/CategoryCrossLinks";
import BottomCTASection from "@/components/services/BottomCTASection";
import ServicesStickyBar from "@/components/services/ServicesStickyBar";

interface FAQInteractiveProps { content: FAQPageContent; lang: "en" | "es"; }

export default function FAQInteractive({ content, lang }: FAQInteractiveProps) {
  const [activeCategory, setActiveCategory] = useState("general");
  const pillBarRef = useRef<HTMLDivElement>(null); /* V2: scroll to pill bar, not FAQ section */

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    pillBarRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }); /* V2 fix 6a */
  };

  return (
    <>
      <section className="bg-warm-ivory pt-8 px-5 pb-6" aria-label="Hero">
        <p className="font-body font-semibold text-label tracking-[2px] uppercase text-terracotta mb-3">{content.hero.label}</p>
        <h1 className="font-heading text-hero font-semibold text-espresso leading-[1.18]">{content.hero.headline}</h1>
        <div className="w-[length:var(--lui-gold-line-w)] h-[length:var(--lui-gold-line-h)] bg-gold my-3.5" aria-hidden="true" />
        <p className="text-body text-warm-grey leading-[1.6]">{content.hero.description}</p>
      </section>

      <div className="bg-warm-ivory" ref={pillBarRef}>
        <CategoryPills categories={content.categories.map((c: FAQCategory) => ({ id: c.id, pillLabel: c.pillLabel, count: c.count }))} activeId={activeCategory} onSelect={handleCategoryChange} />
      </div>

      <section className="bg-soft-stone py-5 px-3.5" aria-label="Frequently asked questions">
        {content.categories.map((cat: FAQCategory) => (
          <div key={cat.id} style={{ display: cat.id === activeCategory ? "block" : "none" }}>
            {cat.items.map((item, i) => <FAQCard key={i} question={item.question} answer={item.answer} defaultOpen={i === 0} />)}
            <CategoryCrossLinks text={cat.crossLinks.text} links={cat.crossLinks.links} onNavigate={handleCategoryChange} />
          </div>
        ))}
      </section>

      <BottomCTASection>
        <h2 className="font-heading font-normal text-card-title text-warm-ivory mb-2.5">{content.bottomCta.heading}</h2>
        <p className="font-body text-card text-warm-ivory/60 leading-[1.6] mb-[22px]">{content.bottomCta.description}</p>
        <div className="flex gap-2.5">
          {/* V2: WhatsApp button GREEN */}
          <a href={content.bottomCta.whatsappCta.href} target="_blank" rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white font-body font-semibold text-tag tracking-[0.8px] uppercase py-[15px] px-2.5 no-underline hover:no-underline transition-colors duration-150 active:bg-[#1DA851] focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            {content.bottomCta.whatsappCta.text}
          </a>
          <a href={content.bottomCta.calendlyCta.href} target="_blank" rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center bg-terracotta text-white font-body font-semibold text-tag tracking-[0.8px] uppercase py-[15px] px-2.5 no-underline hover:no-underline transition-all duration-150 active:bg-terracotta-dark active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2">
            {content.bottomCta.calendlyCta.text}
          </a>
        </div>
      </BottomCTASection>

      <ServicesStickyBar text={content.stickyBar.text} subtext={content.stickyBar.subtext} href={content.stickyBar.href} />
    </>
  );
}
