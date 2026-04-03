"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import type { FAQPageContent, FAQCategory } from "@/types/content";
import CategoryPills from "@/components/faq/CategoryPills";
import FAQCard from "@/components/faq/FAQCard";
import CategoryCrossLinks from "@/components/faq/CategoryCrossLinks";
import BottomCTASection from "@/components/services/BottomCTASection";
import ServicesStickyBar from "@/components/services/ServicesStickyBar";

// =============================================================================
// FAQInteractive — Image by LUI (Desktop Overhaul — LUI-DESK-005)
// =============================================================================
// Mobile: tab-based pills (one category visible at a time, state-driven)
// Desktop (≥1024px): all 15 questions visible, sticky pill bar as anchor links,
//   IntersectionObserver scroll spy, alternating stone/ivory bg per section,
//   800px content width, centered hero with entrance animations.
// =============================================================================

interface FAQInteractiveProps {
  content: FAQPageContent;
  lang: "en" | "es";
}

export default function FAQInteractive({ content, lang }: FAQInteractiveProps) {
  const [activeCategory, setActiveCategory] = useState("general");
  const [activeDesktopSection, setActiveDesktopSection] = useState("general");
  const pillBarRef = useRef<HTMLDivElement>(null);

  // Mobile tab handler
  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    pillBarRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Desktop scroll spy
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());
  const registerSection = useCallback((id: string, el: HTMLElement | null) => {
    if (el) sectionRefs.current.set(id, el);
    else sectionRefs.current.delete(id);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(min-width: 1024px)");
    if (!mq.matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveDesktopSection(entry.target.id.replace("faq-", ""));
          }
        });
      },
      { threshold: 0.3, rootMargin: "-140px 0px -40% 0px" }
    );

    sectionRefs.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const BG_COLORS = ["#FAF8F5", "#FAF8F5", "#FAF8F5"]; // stone, ivory, stone

  return (
    <>
      {/* =============== MOBILE LAYOUT =============== */}
      <div className="lg:hidden">
        {/* Hero — mobile (left-aligned) */}
        <section className="bg-warm-ivory pt-8 px-5 pb-6" aria-label="Hero">
          <p className="font-body font-semibold text-label tracking-[2px] uppercase text-terracotta mb-3">{content.hero.label}</p>
          <h1 className="font-heading text-hero font-semibold text-espresso leading-[1.18]">{content.hero.headline}</h1>
          <div className="w-[length:var(--lui-gold-line-w)] h-[length:var(--lui-gold-line-h)] bg-gold my-3.5" aria-hidden="true" />
          <p className="text-body text-warm-grey leading-[1.6]">{content.hero.description}</p>
        </section>

        {/* Pills — mobile (tab toggles) */}
        <div className="bg-warm-ivory" ref={pillBarRef}>
          <CategoryPills
            categories={content.categories.map((c: FAQCategory) => ({ id: c.id, pillLabel: c.pillLabel, count: c.count }))}
            activeId={activeCategory}
            onSelect={handleCategoryChange}
          />
        </div>

        {/* Questions — mobile (one category at a time) */}
        <section className="bg-soft-stone py-5 px-3.5" aria-label="Frequently asked questions">
          {content.categories.map((cat: FAQCategory) => (
            <div key={cat.id} style={{ display: cat.id === activeCategory ? "block" : "none" }}>
              {cat.items.map((item, i) => (
                <FAQCard key={i} question={item.question} answer={item.answer} defaultOpen={i === 0} />
              ))}
              <CategoryCrossLinks text={cat.crossLinks.text} links={cat.crossLinks.links} onNavigate={handleCategoryChange} />
            </div>
          ))}
        </section>
      </div>

      {/* =============== DESKTOP LAYOUT =============== */}
      <div className="hidden lg:block">
        {/* Hero — desktop (centered, entrance animations) */}
        <section id="hero" className="bg-warm-ivory pt-16 pb-12 text-center" aria-label="Hero">
          <p
            className="font-body text-[11px] font-semibold tracking-[2px] uppercase text-terracotta mb-3"
            style={{ opacity: 0, animation: "fadeUp 0.5s ease 0.1s forwards" }}
          >
            {content.hero.label}
          </p>
          <h1
            className="font-heading text-[48px] font-normal italic text-espresso leading-[1.1] mb-0"
            style={{ opacity: 0, animation: "fadeUp 0.7s ease 0.15s forwards" }}
          >
            {content.hero.headline}
          </h1>
          <div
            className="w-12 h-[2px] bg-gold mx-auto my-5"
            style={{ transformOrigin: "center", transform: "scaleX(0)", animation: "lineGrow 0.5s ease 0.65s forwards" }}
            aria-hidden="true"
          />
          <p
            className="text-[16px] font-light text-warm-grey leading-[1.65] max-w-[460px] mx-auto"
            style={{ opacity: 0, animation: "fadeUp 0.5s ease 0.95s forwards" }}
          >
            {lang === "en"
              ? "Choose a topic below or scroll through. If your question isn't here, Lu is always a message away."
              : "Elija un tema o desplácese. Si su pregunta no está aquí, Lu siempre está a un mensaje de distancia."}
          </p>
        </section>

        {/* Sticky pill bar — desktop (anchor links) */}
        <div className="bg-warm-ivory pb-8 sticky top-[64px] z-[90]">
          <div className="flex items-center justify-center gap-3 max-w-[1200px] mx-auto px-12">
            {content.categories.map((cat: FAQCategory) => {
              const isActive = cat.id === activeDesktopSection;
              return (
                <a
                  key={cat.id}
                  href={`#faq-${cat.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(`faq-${cat.id}`)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`whitespace-nowrap font-body text-[13px] font-medium tracking-[0.3px] px-6 py-2.5 border transition-all duration-200 no-underline hover:no-underline ${
                    isActive
                      ? "bg-terracotta text-white border-terracotta"
                      : "bg-transparent text-warm-taupe border-champagne hover:border-gold hover:text-espresso"
                  }`}
                >
                  {cat.pillLabel}
                  <span className={`font-normal ${isActive ? "opacity-70" : "opacity-50"}`}> ({cat.count})</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* All category sections — desktop (visible simultaneously) */}
        {content.categories.map((cat: FAQCategory, catIdx: number) => (
          <section
            key={cat.id}
            id={`faq-${cat.id}`}
            ref={(el) => registerSection(cat.id, el)}
            className="py-12"
            style={{ scrollMarginTop: 140, backgroundColor: BG_COLORS[catIdx] ?? "#FAF8F5" }}
            aria-label={cat.sectionTitle ?? cat.pillLabel}
          >
            <div className="max-w-[800px] mx-auto px-12">
              {/* Category heading */}
              {cat.sectionLabel && (
                <p className="font-body text-[11px] font-semibold tracking-[2px] uppercase text-terracotta mb-1.5">
                  {cat.sectionLabel}
                </p>
              )}
              <h2 className="font-heading text-[26px] font-normal text-espresso mb-7">
                {cat.sectionTitle ?? cat.pillLabel}
              </h2>

              {/* Questions */}
              {cat.items.map((item, i) => (
                <FAQCard key={i} question={item.question} answer={item.answer} defaultOpen={i === 0} />
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* =============== SHARED: Bottom CTA + Sticky Bar =============== */}
      <BottomCTASection>
        <h2 className="font-heading font-normal text-card-title lg:text-[28px] lg:italic text-warm-ivory mb-2.5 lg:mb-3">
          {content.bottomCta.heading}
        </h2>
        <p className="font-body text-card lg:text-[14px] lg:font-light text-warm-ivory/60 lg:text-warm-ivory/40 leading-[1.6] lg:leading-[1.7] mb-[22px] lg:mb-8">
          {content.bottomCta.description}
        </p>
        <div className="flex gap-2.5 lg:gap-3 lg:justify-center">
          <a
            href={content.bottomCta.whatsappCta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 lg:flex-none lg:w-[220px] flex items-center justify-center gap-2 bg-[#25D366] text-white font-body font-semibold text-tag lg:text-[11px] tracking-[0.8px] uppercase py-[15px] px-2.5 no-underline hover:no-underline transition-colors duration-150 active:bg-[#1DA851]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            {content.bottomCta.whatsappCta.text}
          </a>
          <a
            href={content.bottomCta.calendlyCta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 lg:flex-none lg:w-[220px] flex items-center justify-center bg-terracotta text-white font-body font-semibold text-tag lg:text-[11px] tracking-[0.8px] uppercase py-[15px] px-2.5 no-underline hover:no-underline transition-all duration-150 active:bg-terracotta-dark hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(163,87,65,0.18)]"
          >
            {content.bottomCta.calendlyCta.text}
          </a>
        </div>
      </BottomCTASection>

      <ServicesStickyBar text={content.stickyBar.text} subtext={content.stickyBar.subtext} href={content.stickyBar.href} />
    </>
  );
}
