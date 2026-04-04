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
//
// V7 Mockup Alignment Pass — fixes applied:
//   §1 Hero height 500px, quote -24px overlap, centered text, gold line added
//   §2 Body text 14px, horizontal padding 28px
//   §3 Beat 2 first line demoted to body text (was incorrectly elevated to heading)
//   §4 Pivot: delicate gold lines (32px, 0.5px, 50% opacity), tighter padding
//   §5 Beat 3 top padding 20px
//   §7 Closing photo 380px, top fade 60px (was 140px)
//   §8 CTA padding 48px top, WhatsApp as subtle text link (not green button)
//   StoryPhoto: per-photo heights, 3-stop fade gradient with solid ivory anchor
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

/**
 * Story photo with 3-stop ivory fades (60px).
 * Gradient: solid ivory → 0.3 opacity at 40% → transparent.
 * Height is per-photo to match V7 mockup specs.
 */
function StoryPhoto({
  src,
  alt,
  objectPosition,
  filter,
  height,
}: {
  src: string;
  alt: string;
  objectPosition: string;
  filter: string;
  height: number;
}) {
  return (
    <div className="relative w-full overflow-hidden" style={{ height }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        style={{ objectPosition, filter }}
        loading="lazy"
      />
      {/* Top fade — 3-stop: solid ivory → 0.3 at 40% → transparent */}
      <div
        className="absolute top-0 left-0 w-full pointer-events-none"
        style={{
          height: 60,
          background: `linear-gradient(to bottom, ${IVORY}1) 0%, ${IVORY}0.3) 40%, ${IVORY}0) 100%)`,
        }}
        aria-hidden="true"
      />
      {/* Bottom fade — 3-stop: solid ivory → 0.3 at 40% → transparent */}
      <div
        className="absolute bottom-0 left-0 w-full pointer-events-none"
        style={{
          height: 60,
          background: `linear-gradient(to top, ${IVORY}1) 0%, ${IVORY}0.3) 40%, ${IVORY}0) 100%)`,
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
      {/* V7: 500px photo, -24px overlap, centered text, gold line         */}
      {/* ================================================================= */}
      <section id="about-hero" className="relative overflow-hidden">
        {/* B&W hero photo — 500px per V7 */}
        <div className="relative w-full" style={{ height: 500 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={IMAGES.hero}
            alt={c.hero.imageAlt}
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 15%" }}
            /* Hero is above-fold — no lazy loading */
          />
          {/* Bottom ivory fade — 140px, 3-stop */}
          <div
            className="absolute bottom-0 left-0 w-full pointer-events-none"
            style={{
              height: 140,
              background: `linear-gradient(to top, ${IVORY}1) 0%, ${IVORY}0.6) 40%, ${IVORY}0) 100%)`,
            }}
            aria-hidden="true"
          />
        </div>

        {/* Empathy quote — -24px overlap per V7 (was -40px), centered */}
        <div className="relative z-[2] text-center" style={{ padding: "0 28px", marginTop: -24 }}>
          <ScrollReveal>
            <blockquote className="mb-3">
              <p className="font-heading font-light italic text-[22px] leading-[1.35] text-espresso">
                {c.hero.quoteBefore}{" "}
                <span className="text-terracotta">{c.hero.quoteHighlight}</span>
              </p>
            </blockquote>
            {/* "I understand." — 28px, weight 400, italic, mt-12px per V7 */}
            <p
              className="font-heading italic text-espresso"
              style={{ fontSize: 28, fontWeight: 400, marginTop: 12 }}
            >
              {c.hero.connection}
            </p>
            {/* Gold separator line — 32px × 1.5px per V7 */}
            <div
              className="bg-gold mx-auto"
              style={{ width: 32, height: 1.5, marginTop: 20 }}
              aria-hidden="true"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================================= */}
      {/* §2 — BEAT 1: Early days in Colombia                              */}
      {/* V7: 14px body text, 40px/28px/28px padding                       */}
      {/* ================================================================= */}
      <section style={{ padding: "40px 28px 28px" }}>
        <ScrollReveal>
          <p className="font-body text-[14px] text-warm-grey leading-[1.7]">
            {c.beats.one}
          </p>
        </ScrollReveal>
      </section>

      {/* Photo: Colombia — 340px per V7 */}
      <StoryPhoto
        src={IMAGES.colombia}
        alt={c.photoAlts.colombia}
        objectPosition="center 25%"
        filter={BRAND_FILTER}
        height={340}
      />

      {/* ================================================================= */}
      {/* §3 — BEAT 2: Fashion world                                       */}
      {/* V7: Both paragraphs are body text (14px grey), NOT heading.       */}
      {/* The live version incorrectly elevated twoA to a 20px heading.     */}
      {/* ================================================================= */}
      <section style={{ padding: "40px 28px 28px" }}>
        <ScrollReveal>
          <p className="font-body text-[14px] text-warm-grey leading-[1.7] mb-3">
            {c.beats.twoA}
          </p>
          <p className="font-body text-[14px] text-warm-grey leading-[1.7]">
            {c.beats.twoB}
          </p>
        </ScrollReveal>
      </section>

      {/* Photo: Backstage — 340px per V7 */}
      <StoryPhoto
        src={IMAGES.backstage}
        alt={c.photoAlts.backstage}
        objectPosition="center 45%"
        filter={BRAND_FILTER}
        height={340}
      />

      {/* ================================================================= */}
      {/* §4 — PIVOT: Gold lines + "But something was missing."            */}
      {/* V7: 32px wide, 0.5px tall, 50% opacity gold lines.              */}
      {/*      24px top / 12px bottom padding. Uniform font-weight 300.    */}
      {/* ================================================================= */}
      <section style={{ padding: "24px 28px 12px" }}>
        <ScrollReveal>
          <div className="flex flex-col items-center text-center">
            {/* Top gold line — 32px, 0.5px, 50% opacity per V7 */}
            <div
              className="bg-gold opacity-50 mx-auto"
              style={{ width: 32, height: 0.5, marginBottom: 16 }}
              aria-hidden="true"
            />
            <p className="font-heading font-light italic text-[22px] text-espresso leading-[1.35]">
              {c.pivot.line1}
              <br />
              {c.pivot.line2}
            </p>
            {/* Bottom gold line — 32px, 0.5px, 50% opacity per V7 */}
            <div
              className="bg-gold opacity-50 mx-auto"
              style={{ width: 32, height: 0.5, marginTop: 16 }}
              aria-hidden="true"
            />
          </div>
        </ScrollReveal>
      </section>

      {/* ================================================================= */}
      {/* §5 — BEAT 3: São Paulo + The Method                              */}
      {/* V7: padding-top 20px, 14px body text                             */}
      {/* ================================================================= */}
      <section style={{ padding: "20px 28px 28px" }}>
        <ScrollReveal>
          <p className="font-body text-[14px] text-warm-grey leading-[1.7] mb-3">
            {c.beats.threeA}
          </p>
          <p className="font-body text-[14px] text-warm-grey leading-[1.7]">
            {c.beats.threeB}
          </p>
        </ScrollReveal>
      </section>

      {/* Photo: Interview — 300px per V7 */}
      <StoryPhoto
        src={IMAGES.interview}
        alt={c.photoAlts.interview}
        objectPosition="center 55%"
        filter={INTERVIEW_FILTER}
        height={300}
      />

      {/* ================================================================= */}
      {/* §6 — STATEMENT: "Your image should reflect…" + "Yours."         */}
      {/* V7: 40px vertical padding, 28px horizontal                       */}
      {/* ================================================================= */}
      <section style={{ padding: "40px 28px" }}>
        <ScrollReveal>
          <div className="text-center">
            <p className="font-heading font-light italic text-[20px] text-espresso leading-[1.4]">
              {c.statement.text}
              {/* "Yours." / "Tuya." — inline block, 24px, weight 400, mt-10px */}
              <span
                className="font-heading font-normal text-espresso"
                style={{ display: "block", fontSize: 24, marginTop: 10 }}
              >
                {c.statement.closer}
              </span>
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* ================================================================= */}
      {/* §7 — CLOSING PHOTO: Light top fade + Espresso bottom fade        */}
      {/* V7: 380px height, 60px light top fade, 140px espresso bottom     */}
      {/* ================================================================= */}
      <div className="relative w-full overflow-hidden" style={{ height: 380 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={IMAGES.closing}
          alt={c.photoAlts.closing}
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 35%", filter: BRAND_FILTER }}
          loading="lazy"
        />
        {/* Top fade — light ivory, 60px, same 3-stop as story photos per V7 */}
        <div
          className="absolute top-0 left-0 w-full pointer-events-none"
          style={{
            height: 60,
            background: `linear-gradient(to bottom, ${IVORY}1) 0%, ${IVORY}0.3) 40%, ${IVORY}0) 100%)`,
          }}
          aria-hidden="true"
        />
        {/* Bottom fade — ESPRESSO, 140px, transitions into CTA */}
        <div
          className="absolute bottom-0 left-0 w-full pointer-events-none"
          style={{
            height: 140,
            background: `linear-gradient(to top, ${ESPRESSO}1) 0%, ${ESPRESSO}0.6) 40%, ${ESPRESSO}0) 100%)`,
          }}
          aria-hidden="true"
        />
      </div>

      {/* ================================================================= */}
      {/* §8 — CTA: Espresso background                                    */}
      {/* V7: 48px top padding, 11px/1.8px button, subtle WA text link     */}
      {/* ================================================================= */}
      <section className="bg-espresso">
        <div style={{ padding: "48px 24px" }} className="text-center">
          <ScrollReveal>
            <h2 className="font-heading font-normal italic text-[26px] text-warm-ivory mb-2.5">
              {c.cta.heading}
            </h2>
            {/* V7: 13px, 40% opacity */}
            <p
              className="font-body leading-[1.6] mx-auto"
              style={{ fontSize: 13, color: "rgba(247,243,239,0.4)", maxWidth: 300, marginBottom: 24 }}
            >
              {c.cta.body}
            </p>
            {/* Primary CTA — V7: 11px, 1.8px tracking, 16px/28px padding, max-width 280 */}
            <a
              href={c.cta.primaryCta.href}
              target={c.cta.primaryCta.external ? "_blank" : undefined}
              rel={c.cta.primaryCta.external ? "noopener noreferrer" : undefined}
              className="block text-center font-body font-semibold uppercase bg-terracotta text-white no-underline hover:bg-[#8A4735] transition-colors duration-200 mx-auto"
              style={{ fontSize: 11, letterSpacing: "1.8px", padding: "16px 28px", maxWidth: 280 }}
            >
              {c.cta.primaryCta.text}
            </a>
            {/* Secondary — WhatsApp subtle text link per V7 (NOT a green button) */}
            <a
              href={c.cta.secondaryHref}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline block"
              style={{ marginTop: 14, fontSize: 12, color: "rgba(247,243,239,0.35)" }}
            >
              Or{" "}
              <span style={{ color: "#25D366", fontWeight: 500 }}>
                {c.cta.secondaryText}
              </span>
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================================= */}
      {/* §9 — STICKY BAR: Terracotta, spread layout with arrow per V7     */}
      {/* ================================================================= */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-300"
        style={{
          transform: stickyVisible ? "translateY(0)" : "translateY(100%)",
          boxShadow: "0 -4px 20px rgba(44,36,32,0.1)",
        }}
        role="complementary"
        aria-label={lang === "en" ? "Book free consultation" : "Reserva consulta gratis"}
      >
        <a
          href={c.stickyBar.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between w-full bg-terracotta text-white no-underline hover:no-underline"
          style={{ padding: "14px 20px" }}
        >
          <span className="font-body font-semibold text-[11px] tracking-[1.2px] uppercase">
            {c.stickyBar.text}
          </span>
          <span style={{ fontSize: 16 }}>→</span>
        </a>
      </div>

      {/* Bottom spacer to prevent content from being hidden behind sticky bar */}
      <div className="h-[52px] md:hidden" aria-hidden="true" />
    </div>
  );
}
