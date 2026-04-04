"use client";

import { useState, useEffect } from "react";
import type { AboutContent } from "@/types/content";
import ScrollReveal from "@/components/ui/ScrollReveal";

// =============================================================================
// AboutPageLayout — Shared layout for EN and ES about pages (LUI-ABOUT-001)
// =============================================================================
// Mobile (V7 + QA):
//   Hero fills viewport (100svh). Global typography tokens from globals.css:
//   text-body (17px), text-section (24px), text-pull-quote (28px),
//   text-secondary (13px).
//
// Desktop (V1):
//   55/45 split hero → alternating bleed story beats (text-story-desktop 18px)
//   → centered pivot/statement → full-width closing → CTA.
//
// Token usage:
//   text-body           (17px)  → story beat paragraphs (mobile)
//   text-story-desktop  (18px)  → story beat paragraphs (desktop bleed)
//   text-section        (24px)  → pivot, statement
//   text-pull-quote     (28px)  → "I understand.", "Yours." (mobile)
//   text-secondary      (13px)  → CTA description
//   text-tag            (12px)  → WhatsApp link
//   blockquote base     (22/26) → hero empathy quote
//
// Hardcoded one-offs (single use, desktop-only):
//   Desktop hero quote 30px, desktop connection 38px, desktop closer 36px,
//   desktop CTA heading 34px, CTA button 11/12px, gold lines 32×0.5px
// =============================================================================

// -- Constants ---------------------------------------------------------------

const BRAND_FILTER = "sepia(0.06) saturate(1.08) brightness(1.02)";
const INTERVIEW_FILTER = "sepia(0.06) saturate(1.08) brightness(1.08)";
const IVORY = "rgba(250,248,245,";
const ESPRESSO = "rgba(44,36,32,";

const IMAGES = {
  hero: "/images/mobile/heroes/about-lu-hero.JPG",
  colombia: "/images/mobile/about/about-colombia.jpg",
  backstage: "/images/mobile/about/about-change.jpg",
  interview: "/images/mobile/about/about-interview.jpg",
  closing: "/images/mobile/about/about-lu-strong.jpg",
};

// -- Sub-components ----------------------------------------------------------

/** Mobile story photo — 3-stop ivory fades, hidden at lg: */
function MobileStoryPhoto({
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
    <div className="relative w-full overflow-hidden lg:hidden" style={{ height }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        style={{ objectPosition, filter }}
        loading="lazy"
      />
      <div
        className="absolute top-0 left-0 w-full pointer-events-none"
        style={{ height: 60, background: `linear-gradient(to bottom, ${IVORY}1) 0%, ${IVORY}0.3) 40%, ${IVORY}0) 100%)` }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-full pointer-events-none"
        style={{ height: 60, background: `linear-gradient(to top, ${IVORY}1) 0%, ${IVORY}0.3) 40%, ${IVORY}0) 100%)` }}
        aria-hidden="true"
      />
    </div>
  );
}

/** Desktop 55/45 bleed — photo bleeds to viewport edge, hidden below lg: */
function DesktopStoryBleed({
  src,
  alt,
  objectPosition,
  filter,
  photoSide,
  marginTop,
  children,
}: {
  src: string;
  alt: string;
  objectPosition: string;
  filter: string;
  photoSide: "left" | "right";
  marginTop?: number;
  children: React.ReactNode;
}) {
  const flexDir = photoSide === "right" ? "flex-row-reverse" : "flex-row";
  const fadeEdgeStyle: React.CSSProperties =
    photoSide === "right"
      ? { left: 0, top: 0, bottom: 0, width: 100, background: `linear-gradient(to right, ${IVORY}1) 0%, ${IVORY}0.3) 40%, ${IVORY}0) 100%)` }
      : { right: 0, top: 0, bottom: 0, width: 100, background: `linear-gradient(to left, ${IVORY}1) 0%, ${IVORY}0.3) 40%, ${IVORY}0) 100%)` };
  const textPadding = photoSide === "right" ? "0 80px 0 48px" : "0 80px";

  return (
    <section
      className={`hidden lg:flex items-center overflow-hidden ${flexDir}`}
      style={{ marginTop }}
    >
      <div className="w-[55%] relative" style={{ minHeight: 480 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="w-full object-cover block"
          style={{ height: 480, objectPosition, filter }}
          loading="lazy"
        />
        <div className="absolute pointer-events-none" style={fadeEdgeStyle} aria-hidden="true" />
        <div
          className="absolute top-0 left-0 w-full pointer-events-none"
          style={{ height: 60, background: `linear-gradient(to bottom, ${IVORY}1) 0%, ${IVORY}0.3) 40%, ${IVORY}0) 100%)` }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 w-full pointer-events-none"
          style={{ height: 60, background: `linear-gradient(to top, ${IVORY}1) 0%, ${IVORY}0.3) 40%, ${IVORY}0) 100%)` }}
          aria-hidden="true"
        />
      </div>
      <div className="w-[45%]" style={{ padding: textPadding }}>
        {children}
      </div>
    </section>
  );
}

// -- Main Layout -------------------------------------------------------------

interface AboutPageLayoutProps {
  content: AboutContent;
  lang: "en" | "es";
}

export default function AboutPageLayout({ content: c, lang }: AboutPageLayoutProps) {
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
      {/* §1 — HERO                                                        */}
      {/* Mobile: 100svh - nav, center 25%. blockquote base = 22px.        */}
      {/* Desktop: 55/45, full vh - 64px, center 15%.                      */}
      {/* ================================================================= */}
      <section id="about-hero" className="relative overflow-hidden">
        {/* MOBILE */}
        <div className="lg:hidden flex flex-col" style={{ minHeight: "calc(100svh - 64px)" }}>
          <div className="relative w-full flex-1" style={{ minHeight: 400 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={IMAGES.hero}
              alt={c.hero.imageAlt}
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: "center 0%" }}
            />
            <div
              className="absolute bottom-0 left-0 w-full pointer-events-none"
              style={{ height: 140, background: `linear-gradient(to top, ${IVORY}1) 0%, ${IVORY}0.6) 40%, ${IVORY}0) 100%)` }}
              aria-hidden="true"
            />
          </div>
          {/* Quote — blockquote base styles (22px) from globals.css */}
          <div className="relative z-[2] text-center" style={{ padding: "0 28px", marginTop: -24 }}>
            <ScrollReveal>
              <blockquote className="mb-3">
                <p className="leading-[1.35] text-[26px]">
                  {c.hero.quoteBefore}{" "}
                  <span className="text-terracotta">{c.hero.quoteHighlight}</span>
                </p>
              </blockquote>
              {/* text-pull-quote (28px) from global token */}
              <p className="font-heading italic text-espresso text-hero" style={{ fontWeight: 400, marginTop: 12 }}>
                {c.hero.connection}
              </p>
              <div className="bg-gold mx-auto" style={{ width: 32, height: 1.5, marginTop: 20 }} aria-hidden="true" />
            </ScrollReveal>
          </div>
        </div>

        {/* DESKTOP */}
        <div className="hidden lg:flex overflow-hidden" style={{ height: "calc(100vh - 64px)" }}>
          <div className="w-[55%] relative overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={IMAGES.hero}
              alt={c.hero.imageAlt}
              className="w-full h-full object-cover"
              style={{ objectPosition: "center 0%" }}
            />
            <div
              className="absolute top-0 right-0 bottom-0 pointer-events-none"
              style={{ width: 120, background: `linear-gradient(to left, ${IVORY}1) 0%, ${IVORY}0.5) 40%, ${IVORY}0) 100%)` }}
              aria-hidden="true"
            />
            <div
              className="absolute bottom-0 left-0 w-full pointer-events-none"
              style={{ height: 100, background: `linear-gradient(to top, ${IVORY}1) 0%, ${IVORY}0.5) 40%, ${IVORY}0) 100%)` }}
              aria-hidden="true"
            />
          </div>
          {/* Desktop one-offs: 30px quote, 38px connection */}
          <div className="w-[45%] flex flex-col justify-center items-center text-center" style={{ padding: "80px 64px 80px 48px" }}>
            <blockquote>
              <p className="font-heading font-light italic text-section leading-[1.3] text-espresso" data-desktop-fs="32">
                {c.hero.quoteBefore}{" "}
                <span className="text-terracotta">{c.hero.quoteHighlight}</span>
              </p>
            </blockquote>
            <p className="font-heading italic text-espresso" style={{ fontSize: 40, fontWeight: 400, marginTop: 16 }}>
              {c.hero.connection}
            </p>
            <div className="bg-gold" style={{ width: 40, height: 1.5, marginTop: 28 }} aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* §2 — BEAT 1: Colombia                                            */}
      {/* Mobile: text-body (17px). Desktop: text-story-desktop (18px).    */}
      {/* ================================================================= */}
      <section className="lg:hidden" style={{ padding: "40px 28px 28px" }}>
        <ScrollReveal>
          <p className="font-body text-body text-warm-grey leading-[1.65]">
            {c.beats.one}
          </p>
        </ScrollReveal>
      </section>
      <MobileStoryPhoto src={IMAGES.colombia} alt={c.photoAlts.colombia} objectPosition="center 30%" filter={BRAND_FILTER} height={340} />
      <DesktopStoryBleed src={IMAGES.colombia} alt={c.photoAlts.colombia} objectPosition="center 35%" filter={BRAND_FILTER} photoSide="right" marginTop={96}>
        <p className="font-body text-story-desktop text-warm-grey leading-[1.75]">{c.beats.one}</p>
      </DesktopStoryBleed>

      {/* ================================================================= */}
      {/* §3 — BEAT 2: Fashion world                                       */}
      {/* Backstage center 25% (QA: 45% had too much space above head)     */}
      {/* ================================================================= */}
      <section className="lg:hidden" style={{ padding: "40px 28px 28px" }}>
        <ScrollReveal>
          <p className="font-body text-body text-warm-grey leading-[1.65] mb-3">{c.beats.twoA}</p>
          <p className="font-body text-body text-warm-grey leading-[1.65]">{c.beats.twoB}</p>
        </ScrollReveal>
      </section>
      <MobileStoryPhoto src={IMAGES.backstage} alt={c.photoAlts.backstage} objectPosition="center 65%" filter={BRAND_FILTER} height={340} />
      <DesktopStoryBleed src={IMAGES.backstage} alt={c.photoAlts.backstage} objectPosition="center 55%" filter={BRAND_FILTER} photoSide="left" marginTop={80}>
        <p className="font-body text-story-desktop text-warm-grey leading-[1.75] mb-4">{c.beats.twoA}</p>
        <p className="font-body text-story-desktop text-warm-grey leading-[1.75]">{c.beats.twoB}</p>
      </DesktopStoryBleed>

      {/* ================================================================= */}
      {/* §4 — PIVOT                                                       */}
      {/* text-section (24px) mobile, 32px desktop one-off                 */}
      {/* ================================================================= */}
      <section className="px-[28px] pt-[24px] pb-[12px] lg:py-[64px] lg:px-[48px] lg:max-w-[800px] lg:mx-auto">
        <ScrollReveal>
          <div className="flex flex-col items-center text-center">
            <div
              className="bg-gold opacity-50 w-[32px] lg:w-[40px] mb-[16px] lg:mb-[20px]"
              style={{ height: 0.5 }}
              aria-hidden="true"
            />
            <p className="font-heading font-light italic text-section text-espresso leading-[1.35]" data-desktop-fs="32">
              {c.pivot.line1}
              <br />
              {c.pivot.line2}
            </p>
            <div
              className="bg-gold opacity-50 w-[32px] lg:w-[40px] mt-[16px] lg:mt-[20px]"
              style={{ height: 0.5 }}
              aria-hidden="true"
            />
          </div>
        </ScrollReveal>
      </section>

      {/* ================================================================= */}
      {/* §5 — BEAT 3: São Paulo                                           */}
      {/* Interview center 40% (QA: 55% cropped heads)                     */}
      {/* ================================================================= */}
      <section className="lg:hidden" style={{ padding: "20px 28px 28px" }}>
        <ScrollReveal>
          <p className="font-body text-body text-warm-grey leading-[1.65] mb-3">{c.beats.threeA}</p>
          <p className="font-body text-body text-warm-grey leading-[1.65]">{c.beats.threeB}</p>
        </ScrollReveal>
      </section>
      <MobileStoryPhoto src={IMAGES.interview} alt={c.photoAlts.interview} objectPosition="center 45%" filter={INTERVIEW_FILTER} height={300} />
      <DesktopStoryBleed src={IMAGES.interview} alt={c.photoAlts.interview} objectPosition="center 45%" filter={INTERVIEW_FILTER} photoSide="right">
        <p className="font-body text-story-desktop text-warm-grey leading-[1.75] mb-4">{c.beats.threeA}</p>
        <p className="font-body text-story-desktop text-warm-grey leading-[1.75]">{c.beats.threeB}</p>
      </DesktopStoryBleed>

      {/* ================================================================= */}
      {/* §6 — STATEMENT                                                   */}
      {/* text-section (24px), text-pull-quote (28px) closer, lg:36px      */}
      {/* ================================================================= */}
      <section className="text-center px-[28px] py-[40px] lg:px-[48px] lg:py-[64px] lg:max-w-[800px] lg:mx-auto">
        <ScrollReveal>
          <p className="font-heading font-light italic text-section text-espresso leading-[1.4]" data-desktop-fs="32">
            {c.statement.text}
            {/* text-pull-quote (28px) mobile, 36px desktop one-off */}
            <span className="font-heading font-normal text-espresso block text-pull-quote mt-[10px] lg:mt-[14px]" data-desktop-fs="40">
              {c.statement.closer}
            </span>
          </p>
        </ScrollReveal>
      </section>

      {/* ================================================================= */}
      {/* §7 — CLOSING PHOTO                                               */}
      {/* Mobile: 380px, 60/140px fades. Desktop: 440px, 80/160px.         */}
      {/* ================================================================= */}
      <div className="relative w-full overflow-hidden h-[380px] lg:h-[440px] lg:mt-[24px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={IMAGES.closing}
          alt={c.photoAlts.closing}
          className="w-full h-[380px] lg:h-[440px] object-cover"
          style={{ objectPosition: "center 35%", filter: BRAND_FILTER }}
          loading="lazy"
        />
        <div
          className="absolute top-0 left-0 w-full pointer-events-none h-[60px] lg:h-[80px]"
          style={{ background: `linear-gradient(to bottom, ${IVORY}1) 0%, ${IVORY}0.3) 40%, ${IVORY}0) 100%)` }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 w-full pointer-events-none h-[140px] lg:h-[160px]"
          style={{ background: `linear-gradient(to top, ${ESPRESSO}1) 0%, ${ESPRESSO}0.6) 40%, ${ESPRESSO}0) 100%)` }}
          aria-hidden="true"
        />
      </div>

      {/* ================================================================= */}
      {/* §8 — CTA                                                         */}
      {/* text-secondary (13px) description. pb-[100px] mobile absorbs     */}
      {/* sticky bar space inside espresso bg (no ivory gap to footer).    */}
      {/* ================================================================= */}
      <section className="bg-espresso">
        <div className="text-center px-[24px] pt-[48px] pb-[100px] md:pb-[48px] lg:px-[48px] lg:pt-[64px] lg:pb-[64px]">
          <ScrollReveal>
            <h2 className="font-heading font-normal italic text-[26px] lg:text-[34px] text-warm-ivory mb-[10px] lg:mb-[12px]">
              {c.cta.heading}
            </h2>
            <p
              className="font-body text-secondary lg:text-[14px] leading-[1.6] mx-auto mb-[24px] lg:mb-[28px] max-w-[300px] lg:max-w-[400px]"
              style={{ color: "rgba(247,243,239,0.4)" }}
            >
              {c.cta.body}
            </p>
            <a
              href={c.cta.primaryCta.href}
              target={c.cta.primaryCta.external ? "_blank" : undefined}
              rel={c.cta.primaryCta.external ? "noopener noreferrer" : undefined}
              className="block lg:inline-block text-center mx-auto font-body font-semibold uppercase bg-terracotta text-white no-underline hover:bg-[#8A4735] transition-colors duration-200 text-[11px] lg:text-[12px] tracking-[1.8px] lg:tracking-[2px] py-[16px] px-[28px] lg:py-[18px] lg:px-[36px] max-w-[280px] lg:max-w-none"
            >
              {c.cta.primaryCta.text}
            </a>
            <a
              href={c.cta.secondaryHref}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline block mt-[14px] lg:mt-[16px] text-tag lg:text-secondary"
              style={{ color: "rgba(247,243,239,0.35)" }}
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
      {/* §9 — STICKY BAR: mobile only                                     */}
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
    </div>
  );
}
