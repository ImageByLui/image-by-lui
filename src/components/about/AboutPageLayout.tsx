"use client";

import { useState, useEffect } from "react";
import type { AboutContent } from "@/types/content";
import ScrollReveal from "@/components/ui/ScrollReveal";

// =============================================================================
// AboutPageLayout — Shared layout for EN and ES about pages (LUI-ABOUT-001)
// =============================================================================
// Editorial profile: B&W hero → empathy quote → 3 story beats with photos →
// gold-line pivot → statement → closing photo → espresso CTA → terracotta bar.
//
// Page background: Warm Ivory (#FAF8F5), NOT white.
// All fades use rgba(250,248,245,...) matching ivory.
// Hero is B&W (no color filter). Story photos get warm brand filter.
// =============================================================================

// -- Constants ---------------------------------------------------------------

/** Warm brand filter applied to all COLOR photos (not the B&W hero) */
const BRAND_FILTER = "sepia(0.06) saturate(1.08) brightness(1.02)";

/** Interview photo gets a slight brightness boost per spec */
const INTERVIEW_FILTER = "sepia(0.06) saturate(1.08) brightness(1.08)";

/** Ivory RGBA for fade overlays — matches page bg #FAF8F5 */
const IVORY = "rgba(250,248,245,";

/** Espresso RGBA for closing photo bottom fade */
const ESPRESSO = "rgba(44,36,32,";

// -- Image paths (already in repo) -------------------------------------------

const IMAGES = {
  hero: "/images/mobile/heroes/about-lu-hero.JPG",
  colombia: "/images/mobile/about/about-colombia.jpg",
  backstage: "/images/mobile/about/about-change.jpg",
  interview: "/images/mobile/about/about-interview.jpg",
  closing: "/images/mobile/about/about-lu-strong.jpg",
};

// -- Sub-components ----------------------------------------------------------

/** Story photo with light ivory fades (60px, 0.3 opacity) */
function StoryPhoto({
  src,
  alt,
  objectPosition,
  filter,
}: {
  src: string;
  alt: string;
  objectPosition: string;
  filter: string;
}) {
  return (
    <div className="relative w-full overflow-hidden" style={{ height: 320 }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        style={{ objectPosition, filter }}
        loading="lazy"
      />
      {/* Top fade — light, 60px */}
      <div
        className="absolute top-0 left-0 w-full pointer-events-none"
        style={{
          height: 60,
          background: `linear-gradient(to bottom, ${IVORY}0.3) 0%, ${IVORY}0) 100%)`,
        }}
        aria-hidden="true"
      />
      {/* Bottom fade — light, 60px */}
      <div
        className="absolute bottom-0 left-0 w-full pointer-events-none"
        style={{
          height: 60,
          background: `linear-gradient(to top, ${IVORY}0.3) 0%, ${IVORY}0) 100%)`,
        }}
        aria-hidden="true"
      />
    </div>
  );
}

// -- Main Layout -------------------------------------------------------------

interface AboutPageLayoutProps {
  content: AboutContent;
  lang: "en" | "es";
}

export default function AboutPageLayout({ content: c, lang }: AboutPageLayoutProps) {
  // -- Sticky bar visibility --------------------------------------------------
  const [showSticky, setShowSticky] = useState(false);
  const [atFooter, setAtFooter] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("about-hero");
    const footer = document.getElementById("site-footer");
    if (!hero) return;

    const heroObs = new IntersectionObserver(
      ([e]) => setShowSticky(!e.isIntersecting),
      { threshold: 0 }
    );
    heroObs.observe(hero);

    let footerObs: IntersectionObserver | null = null;
    if (footer) {
      footerObs = new IntersectionObserver(
        ([e]) => setAtFooter(e.isIntersecting),
        { threshold: 0 }
      );
      footerObs.observe(footer);
    }

    return () => {
      heroObs.disconnect();
      footerObs?.disconnect();
    };
  }, []);

  // Shift WhatsApp button when sticky bar is visible
  useEffect(() => {
    const wa = document.querySelector<HTMLElement>("a[aria-label*='WhatsApp']");
    if (wa) {
      wa.style.transition = "transform 0.2s ease";
      wa.style.transform = showSticky && !atFooter ? "translateY(-56px)" : "translateY(0)";
    }
  }, [showSticky, atFooter]);

  const stickyVisible = showSticky && !atFooter;

  return (
    <div className="bg-warm-ivory">
      {/* ================================================================= */}
      {/* §1 — HERO: B&W photo + empathy quote                            */}
      {/* ================================================================= */}
      <section id="about-hero" className="relative overflow-hidden">
        {/* B&W hero photo */}
        <div className="relative w-full" style={{ height: 520 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={IMAGES.hero}
            alt={c.hero.imageAlt}
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 15%" }}
            /* Hero is above-fold — no lazy loading */
          />
          {/* Bottom ivory fade — 140px, standard strength */}
          <div
            className="absolute bottom-0 left-0 w-full pointer-events-none"
            style={{
              height: 140,
              background: `linear-gradient(to top, ${IVORY}1) 0%, ${IVORY}0.6) 40%, ${IVORY}0) 100%)`,
            }}
            aria-hidden="true"
          />
        </div>

        {/* Empathy quote — overlaps bottom of photo via negative margin */}
        <div className="relative z-[2] px-6 -mt-10">
          <ScrollReveal>
            <blockquote className="mb-3">
              <p className="font-heading font-light italic text-[22px] leading-[1.45] text-espresso">
                {c.hero.quoteBefore}{" "}
                <span className="text-terracotta">{c.hero.quoteHighlight}</span>
              </p>
            </blockquote>
            {/* "I understand." — SEPARATE element per spec */}
            <p
              className="font-heading italic text-espresso"
              style={{ fontSize: 28, fontWeight: 400 }}
            >
              {c.hero.connection}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================================= */}
      {/* §2 — BEAT 1: Early days in Colombia                              */}
      {/* ================================================================= */}
      <section className="px-6 pt-10 pb-6">
        <ScrollReveal>
          <p className="font-body text-[15px] text-warm-grey leading-[1.7]">
            {c.beats.one}
          </p>
        </ScrollReveal>
      </section>

      {/* Photo: Colombia */}
      <StoryPhoto
        src={IMAGES.colombia}
        alt={c.photoAlts.colombia}
        objectPosition="center 25%"
        filter={BRAND_FILTER}
      />

      {/* ================================================================= */}
      {/* §3 — BEAT 2: Fashion world                                       */}
      {/* ================================================================= */}
      <section className="px-6 pt-8 pb-6">
        <ScrollReveal>
          {/* 2a — the realization */}
          <p className="font-heading font-normal text-[20px] text-espresso leading-[1.4] mb-5">
            {c.beats.twoA}
          </p>
          {/* 2b — the detail */}
          <p className="font-body text-[15px] text-warm-grey leading-[1.7]">
            {c.beats.twoB}
          </p>
        </ScrollReveal>
      </section>

      {/* Photo: Backstage */}
      <StoryPhoto
        src={IMAGES.backstage}
        alt={c.photoAlts.backstage}
        objectPosition="center 45%"
        filter={BRAND_FILTER}
      />

      {/* ================================================================= */}
      {/* §4 — PIVOT: Gold lines + "But something was missing."            */}
      {/* ================================================================= */}
      <section className="px-6 py-12">
        <ScrollReveal>
          <div className="flex flex-col items-center text-center">
            {/* Top gold line */}
            <div className="w-12 h-[1px] bg-gold mb-6" aria-hidden="true" />
            <p className="font-heading font-light italic text-[22px] text-espresso leading-[1.4] mb-1">
              {c.pivot.line1}
            </p>
            <p className="font-heading font-medium text-[22px] text-espresso leading-[1.4]">
              {c.pivot.line2}
            </p>
            {/* Bottom gold line */}
            <div className="w-12 h-[1px] bg-gold mt-6" aria-hidden="true" />
          </div>
        </ScrollReveal>
      </section>

      {/* ================================================================= */}
      {/* §5 — BEAT 3: São Paulo + The Method                              */}
      {/* ================================================================= */}
      <section className="px-6 pt-4 pb-6">
        <ScrollReveal>
          {/* 3a — São Paulo discovery */}
          <p className="font-body text-[15px] text-warm-grey leading-[1.7] mb-5">
            {c.beats.threeA}
          </p>
          {/* 3b — Back to Miami with conviction */}
          <p className="font-body text-[15px] text-warm-grey leading-[1.7]">
            {c.beats.threeB}
          </p>
        </ScrollReveal>
      </section>

      {/* Photo: Interview */}
      <StoryPhoto
        src={IMAGES.interview}
        alt={c.photoAlts.interview}
        objectPosition="center 55%"
        filter={INTERVIEW_FILTER}
      />

      {/* ================================================================= */}
      {/* §6 — STATEMENT: "Your image should reflect…" + "Yours."         */}
      {/* ================================================================= */}
      <section className="px-6 py-12">
        <ScrollReveal>
          <div className="text-center">
            <p className="font-heading font-normal text-[20px] text-espresso leading-[1.45] mb-3">
              {c.statement.text}
            </p>
            {/* "Yours." / "Tuya." — block element, 24px, weight 400 */}
            <span
              className="font-heading font-normal text-espresso"
              style={{ display: "block", fontSize: 24 }}
            >
              {c.statement.closer}
            </span>
          </div>
        </ScrollReveal>
      </section>

      {/* ================================================================= */}
      {/* §7 — CLOSING PHOTO: Ivory top fade + Espresso bottom fade        */}
      {/* ================================================================= */}
      <div className="relative w-full overflow-hidden" style={{ height: 400 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={IMAGES.closing}
          alt={c.photoAlts.closing}
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 35%", filter: BRAND_FILTER }}
          loading="lazy"
        />
        {/* Top fade — ivory, 140px */}
        <div
          className="absolute top-0 left-0 w-full pointer-events-none"
          style={{
            height: 140,
            background: `linear-gradient(to bottom, ${IVORY}1) 0%, ${IVORY}0.5) 40%, ${IVORY}0) 100%)`,
          }}
          aria-hidden="true"
        />
        {/* Bottom fade — ESPRESSO, 140px, transitions into CTA */}
        <div
          className="absolute bottom-0 left-0 w-full pointer-events-none"
          style={{
            height: 140,
            background: `linear-gradient(to top, ${ESPRESSO}1) 0%, ${ESPRESSO}0.5) 40%, ${ESPRESSO}0) 100%)`,
          }}
          aria-hidden="true"
        />
      </div>

      {/* ================================================================= */}
      {/* §8 — CTA: Espresso background                                    */}
      {/* ================================================================= */}
      <section className="bg-espresso">
        <div className="px-6 pt-8 pb-10 text-center">
          <ScrollReveal>
            <h2 className="font-heading font-normal italic text-[26px] text-warm-ivory mb-3">
              {c.cta.heading}
            </h2>
            <p className="font-body text-[14px] text-warm-ivory/60 leading-[1.65] mb-7 max-w-[340px] mx-auto">
              {c.cta.body}
            </p>
            {/* Primary CTA — Calendly */}
            <a
              href={c.cta.primaryCta.href}
              target={c.cta.primaryCta.external ? "_blank" : undefined}
              rel={c.cta.primaryCta.external ? "noopener noreferrer" : undefined}
              className="block text-center font-body font-semibold text-[12px] tracking-[1.5px] uppercase bg-terracotta text-white py-4 mb-3 no-underline hover:bg-[#8A4735] transition-colors duration-200"
            >
              {c.cta.primaryCta.text}
            </a>
            {/* Secondary — WhatsApp */}
            <a
              href={c.cta.secondaryHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-4 bg-[#25D366] text-white font-body font-semibold text-[12px] tracking-[1px] uppercase no-underline hover:bg-[#1DA851] transition-colors duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {c.cta.secondaryText}
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================================= */}
      {/* §9 — STICKY BAR: Terracotta, anchored to Calendly               */}
      {/* ================================================================= */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-300"
        style={{ transform: stickyVisible ? "translateY(0)" : "translateY(100%)" }}
        role="complementary"
        aria-label={lang === "en" ? "Book free consultation" : "Reserva consulta gratis"}
      >
        <a
          href={c.stickyBar.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full py-4 bg-terracotta text-white font-body font-semibold text-[13px] tracking-[1.5px] uppercase no-underline hover:no-underline"
        >
          {c.stickyBar.text}
        </a>
      </div>

      {/* Bottom spacer to prevent content from being hidden behind sticky bar */}
      <div className="h-[52px] md:hidden" aria-hidden="true" />
    </div>
  );
}
