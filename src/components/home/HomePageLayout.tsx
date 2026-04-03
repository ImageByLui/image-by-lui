import Link from "next/link";
import type { HomeContent } from "@/types/content";
import ScrollReveal from "@/components/ui/ScrollReveal";
import HomeStickyBar from "@/components/home/HomeStickyBar";

// =============================================================================
// HomePageLayout — Shared layout for EN and ES homepages (LUI-DESK-007)
// =============================================================================
// All JSX lives here. Page files only import content + render this component.
// White background (#FFFFFF) via [data-page="home"] in globals.css.
// =============================================================================

interface HomePageLayoutProps {
  content: HomeContent;
}

export default function HomePageLayout({ content: c }: HomePageLayoutProps) {
  return (
    <div data-page="home">
      {/* ================================================================= */}
      {/* §3 — HERO                                                        */}
      {/* ================================================================= */}
      <section id="hero" className="relative overflow-hidden lg:min-h-[calc(100vh-64px)] lg:flex lg:items-center">
        {/* Desktop photo — bleeds LEFT */}
        <div className="hidden lg:block absolute top-0 left-0 w-[48%] h-full overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/heroes/home-hero-page.jpg"
            alt={c.hero.desktopImageAlt}
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 25%", filter: "saturate(0.78) sepia(0.03) brightness(1.0)" }}
          />
          {/* Right fade */}
          <div className="absolute top-0 right-0 h-full w-[160px]" style={{ background: "linear-gradient(to left, #FFFFFF 0%, transparent 100%)" }} aria-hidden="true" />
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 w-full h-[140px]" style={{ background: "linear-gradient(to top, #FFFFFF 0%, rgba(255,255,255,0.5) 40%, transparent 100%)" }} aria-hidden="true" />
        </div>

        {/* Mobile photo */}
        <div className="lg:hidden relative overflow-hidden" style={{ height: 420 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/mobile/heroes/home-hero-page.jpg"
            alt={c.hero.mobileImageAlt}
            className="w-full h-full object-cover"
            style={{ filter: "saturate(0.78) sepia(0.03) brightness(1.0)" }}
          />
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 w-full h-[140px]" style={{ background: "linear-gradient(to top, #FFFFFF 0%, transparent 100%)" }} aria-hidden="true" />
        </div>

        {/* Mobile text */}
        <div className="lg:hidden text-center" style={{ padding: "0 36px", marginTop: -20 }}>
          <h1
            className="font-heading italic text-espresso leading-[1.06]"
            style={{ fontSize: 38, opacity: 0, animation: "fadeUp 0.7s ease 0.15s forwards" }}
          >
            {c.hero.headline}
          </h1>
          <div className="w-8 h-[1.5px] bg-gold mx-auto my-3.5" style={{ transformOrigin: "center", transform: "scaleX(0)", animation: "lineGrow 0.5s ease 0.65s forwards" }} aria-hidden="true" />
          <p
            className="font-body font-light text-[15px] text-warm-grey leading-[1.6]"
            style={{ opacity: 0, animation: "fadeUp 0.5s ease 0.85s forwards" }}
          >
            {c.hero.subcopy}
          </p>
          <div style={{ padding: "28px 40px 0" }}>
            <a
              href={c.hero.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center font-body font-semibold text-[12px] tracking-[1.8px] uppercase bg-terracotta text-white no-underline hover:no-underline hover:bg-terracotta-dark transition-all duration-300"
              style={{ padding: "16px 28px", opacity: 0, animation: "fadeUp 0.4s ease 1.0s forwards" }}
            >
              {c.hero.cta.text}
            </a>
            <p className="font-body text-[12px] text-warm-grey mt-3">{c.hero.trustNote}</p>
          </div>
        </div>

        {/* Desktop text — RIGHT side */}
        <div className="hidden lg:flex lg:flex-col lg:justify-center" style={{ marginLeft: "52%", padding: "0 48px 0 24px", maxWidth: 520 }}>
          <h1
            className="font-heading italic text-espresso leading-[1.06]"
            style={{ fontSize: 58, letterSpacing: "-0.5px", opacity: 0, animation: "fadeUp 0.7s ease 0.15s forwards" }}
          >
            {c.hero.headline}
          </h1>
          <div
            className="w-11 h-[1.5px] bg-gold"
            style={{ margin: "20px 0", transformOrigin: "left", transform: "scaleX(0)", animation: "lineGrow 0.5s ease 0.65s forwards" }}
            aria-hidden="true"
          />
          <p
            className="font-body font-light text-[17px] text-warm-grey leading-[1.6] mb-7"
            style={{ opacity: 0, animation: "fadeUp 0.5s ease 0.85s forwards" }}
          >
            {c.hero.subcopy}
          </p>
          <div style={{ opacity: 0, animation: "fadeUp 0.4s ease 1.0s forwards" }}>
            <a
              href={c.hero.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-body font-semibold text-[11px] tracking-[2px] uppercase bg-terracotta text-white no-underline hover:no-underline hover:bg-terracotta-dark hover:tracking-[2.5px] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(163,87,65,0.15)] transition-all duration-300"
              style={{ padding: "16px 40px" }}
            >
              {c.hero.cta.text}
            </a>
            <p className="font-body text-[13px] text-warm-grey mt-3">{c.hero.trustNote}</p>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* §4 — STATEMENT                                                   */}
      {/* ================================================================= */}
      <section className="text-center">
        <div className="lg:hidden" style={{ padding: "28px 32px 36px" }}>
          <ScrollReveal>
            <h2 className="font-heading italic font-light text-[28px] text-espresso mb-2">{c.statement.heading}</h2>
            <p className="font-body text-[13px] text-warm-taupe" style={{ letterSpacing: "0.2px" }}>{c.statement.body}</p>
          </ScrollReveal>
        </div>
        <div className="hidden lg:block" style={{ padding: "88px 48px 48px" }}>
          <ScrollReveal>
            <h2 className="font-heading italic font-light text-[40px] text-espresso mb-3">{c.statement.heading}</h2>
            <p className="font-body text-[15px] text-warm-taupe">{c.statement.body}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================================= */}
      {/* §5 — PULLQUOTE (Silvia)                                          */}
      {/* ================================================================= */}
      <section>
        {/* Mobile — left-aligned with gold border */}
        <div className="lg:hidden" style={{ padding: "56px 24px" }}>
          <ScrollReveal>
            <div style={{ borderLeft: "3px solid var(--lui-gold)", paddingLeft: 20 }}>
              <span className="font-heading text-[44px] text-gold/40 leading-none block mb-1" aria-hidden="true">&ldquo;</span>
              <p className="font-heading italic font-light text-[19px] text-espresso leading-[1.4] mb-3">{c.pullquote.quote}</p>
              <p className="font-body font-semibold text-[12px] text-espresso">{c.pullquote.name}</p>
              <a href={c.pullquote.handleUrl} target="_blank" rel="noopener noreferrer" className="font-body text-[11px] text-terracotta no-underline hover:underline">{c.pullquote.handle}</a>
            </div>
          </ScrollReveal>
        </div>
        {/* Desktop — centered, no border */}
        <div className="hidden lg:block text-center" style={{ padding: "80px 48px" }}>
          <ScrollReveal>
            <span className="font-heading text-[72px] text-gold/30 leading-none block mb-2" aria-hidden="true">&ldquo;</span>
            <p className="font-heading italic font-light text-[24px] text-espresso leading-[1.4] max-w-[640px] mx-auto mb-4">{c.pullquote.quote}</p>
            <p className="font-body font-semibold text-[13px] text-espresso">{c.pullquote.name}</p>
            <a href={c.pullquote.handleUrl} target="_blank" rel="noopener noreferrer" className="font-body text-[12px] text-terracotta no-underline hover:underline">{c.pullquote.handle}</a>
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================================= */}
      {/* §6 — SERVICES MENU                                               */}
      {/* ================================================================= */}
      <section>
        {/* Mobile — stacked, centered */}
        <div className="lg:hidden text-center" style={{ padding: "56px 32px 28px" }}>
          <ScrollReveal>
            <h2 className="font-heading italic text-[22px] text-espresso mb-8">{c.servicesMenu.heading}</h2>
            {c.servicesMenu.services.map((svc, i) => (
              <div key={svc.name}>
                {i > 0 && <div className="w-6 h-[1px] bg-champagne mx-auto my-6" aria-hidden="true" />}
                <h3 className="font-heading italic text-[28px] text-espresso mb-2">{svc.name}</h3>
                <p className="font-body text-[13px] text-warm-grey leading-[1.5] mb-2">{svc.teaser}</p>
                <p className="font-heading font-medium text-[18px] text-terracotta mb-2">{svc.price}</p>
                <Link href={svc.linkHref} className="font-body font-medium text-[11px] text-terracotta tracking-[0.5px] no-underline hover:underline">{svc.linkText}</Link>
              </div>
            ))}
          </ScrollReveal>
        </div>
        {/* Desktop — two columns with gold divider */}
        <div className="hidden lg:block" style={{ padding: "48px 48px 96px" }}>
          <ScrollReveal>
            <h2 className="font-heading italic text-[24px] text-espresso text-center mb-12">{c.servicesMenu.heading}</h2>
            <div className="flex max-w-[800px] mx-auto">
              {c.servicesMenu.services.map((svc, i) => (
                <div
                  key={svc.name}
                  className="flex-1 text-center px-10"
                  style={i === 0 ? { borderRight: "0.5px solid rgba(196,154,92,0.3)" } : {}}
                >
                  <h3 className="font-heading italic text-[32px] text-espresso mb-3">{svc.name}</h3>
                  <p className="font-body text-[14px] text-warm-grey leading-[1.5] mb-3">{svc.teaser}</p>
                  <p className="font-heading font-medium text-[22px] text-terracotta mb-3">{svc.price}</p>
                  <Link href={svc.linkHref} className="font-body font-medium text-[12px] text-terracotta tracking-[0.5px] no-underline hover:underline hover:tracking-[1px] transition-all duration-300">{svc.linkText}</Link>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================================= */}
      {/* §8 — POWER PALETTE                                               */}
      {/* ================================================================= */}
      <section>
        {/* Mobile */}
        <div className="lg:hidden" style={{ padding: "20px 0 56px" }}>
          <ScrollReveal>
            <div className="text-center" style={{ border: "1px solid var(--lui-gold)", padding: "36px 28px" }}>
              <p className="font-heading text-[22px] text-espresso mb-1">{c.powerPalette.question}</p>
              <h2 className="font-heading italic text-[26px] text-espresso mb-2">{c.powerPalette.name}</h2>
              <p className="font-body font-medium text-[10px] tracking-[1.5px] uppercase text-gold mb-4">{c.powerPalette.meta}</p>
              <p className="font-body text-[14px] text-warm-grey leading-[1.6] mb-5">{c.powerPalette.description}</p>
              <a
                href={c.powerPalette.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center font-body font-semibold text-[12px] tracking-[1.5px] uppercase bg-terracotta text-white py-4 no-underline hover:no-underline hover:bg-terracotta-dark transition-colors duration-300"
              >
                {c.powerPalette.cta.text}
              </a>
              <p className="font-body text-[12px] text-warm-grey mt-3">{c.powerPalette.note}</p>
            </div>
          </ScrollReveal>
        </div>
        {/* Desktop */}
        <div className="hidden lg:block" style={{ padding: "96px 48px" }}>
          <ScrollReveal>
            <div
              className="max-w-[640px] mx-auto text-center"
              style={{ border: "1px solid var(--lui-gold)", padding: "48px 56px", boxShadow: "0 2px 24px rgba(196,154,92,0.08)" }}
            >
              <p className="font-heading text-[22px] text-espresso mb-1">{c.powerPalette.question}</p>
              <h2 className="font-heading italic text-[30px] text-espresso mb-2">{c.powerPalette.name}</h2>
              <p className="font-body font-medium text-[11px] tracking-[1.5px] uppercase text-gold mb-5">{c.powerPalette.meta}</p>
              <p className="font-body text-[15px] text-warm-grey leading-[1.6] max-w-[440px] mx-auto mb-6">{c.powerPalette.description}</p>
              <a
                href={c.powerPalette.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-body font-semibold text-[11px] tracking-[2px] uppercase bg-terracotta text-white no-underline hover:no-underline hover:bg-terracotta-dark hover:tracking-[2.5px] hover:-translate-y-0.5 transition-all duration-300"
                style={{ padding: "16px 40px" }}
              >
                {c.powerPalette.cta.text}
              </a>
              <p className="font-body text-[12px] text-warm-grey mt-3">{c.powerPalette.note}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================================= */}
      {/* §9 — MEET LU                                                     */}
      {/* ================================================================= */}
      <section className="relative lg:min-h-[480px] lg:flex lg:items-center">
        {/* Desktop photo — bleeds RIGHT with mask-image feathering */}
        <div
          className="hidden lg:block absolute top-0 right-0 w-[48%] h-full overflow-hidden"
          style={{
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 5%, black 14%, black 100%), linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 4%, black 10%, black 90%, rgba(0,0,0,0.3) 96%, transparent 100%)",
            maskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 5%, black 14%, black 100%), linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 4%, black 10%, black 90%, rgba(0,0,0,0.3) 96%, transparent 100%)",
            WebkitMaskComposite: "source-in",
            maskComposite: "intersect",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/mobile/home/home-lu-about.jpg"
            alt={c.meetLu.imageAlt}
            className="w-full h-full object-cover"
            style={{ objectPosition: "center 35%", filter: "saturate(0.75) sepia(0.03) brightness(1.05)" }}
          />
        </div>

        {/* Mobile layout — heading above photo, bio below */}
        <div className="lg:hidden">
          <div className="text-center pt-12 px-8 mb-5">
            <ScrollReveal>
              <h2 className="font-heading italic text-[28px] text-espresso mb-3">{c.meetLu.heading}</h2>
              <div className="w-7 h-[1px] bg-gold mx-auto mb-3" aria-hidden="true" />
              <p className="font-heading italic font-light text-[16px] text-espresso">{c.meetLu.lead}</p>
            </ScrollReveal>
          </div>
          <div className="relative overflow-hidden" style={{ height: 340 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/mobile/home/home-lu-about.jpg"
              alt={c.meetLu.imageAlt}
              className="w-full h-full object-cover"
              style={{ objectPosition: "40% 30%", filter: "saturate(0.75) sepia(0.03) brightness(1.05)" }}
            />
            <div className="absolute top-0 left-0 w-full h-[80px]" style={{ background: "linear-gradient(to bottom, #FFFFFF 0%, rgba(255,255,255,0.3) 40%, transparent 100%)" }} aria-hidden="true" />
            <div className="absolute bottom-0 left-0 w-full h-[140px]" style={{ background: "linear-gradient(to top, #FFFFFF 0%, rgba(255,255,255,0.6) 40%, transparent 100%)" }} aria-hidden="true" />
          </div>
          <div className="text-center px-8 pb-12">
            <ScrollReveal>
              <p className="font-body text-[14px] text-warm-grey leading-[1.6] mb-4">{c.meetLu.bio}</p>
              <div className="flex items-center justify-center gap-6">
                <Link href={c.meetLu.learnMoreHref} className="font-body font-medium text-[12px] text-terracotta no-underline hover:underline">{c.meetLu.learnMoreText}</Link>
                <a href={c.meetLu.instagramHref} target="_blank" rel="noopener noreferrer" className="font-body font-medium text-[12px] text-terracotta no-underline hover:underline">{c.meetLu.instagramText}</a>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Desktop text — LEFT side */}
        <div className="hidden lg:block" style={{ marginRight: "auto", maxWidth: 460, paddingLeft: 48 }}>
          <ScrollReveal>
            <p className="font-body font-semibold text-[10px] tracking-[2px] uppercase text-gold mb-3">{c.meetLu.label}</p>
            <h2 className="font-heading italic text-[40px] text-espresso mb-0">{c.meetLu.heading}</h2>
            <div className="w-8 h-[1px] bg-gold my-4" aria-hidden="true" />
            <p className="font-heading italic font-light text-[18px] text-espresso mb-4">{c.meetLu.lead}</p>
            <p className="font-body text-[15px] text-warm-grey leading-[1.7] mb-5">{c.meetLu.bio}</p>
            <div className="flex items-center gap-6">
              <Link href={c.meetLu.learnMoreHref} className="font-body font-medium text-[13px] text-terracotta no-underline hover:underline">{c.meetLu.learnMoreText}</Link>
              <a href={c.meetLu.instagramHref} target="_blank" rel="noopener noreferrer" className="font-body font-medium text-[13px] text-terracotta no-underline hover:underline">{c.meetLu.instagramText}</a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================================= */}
      {/* §10 — MORE VOICES                                                */}
      {/* ================================================================= */}
      <section>
        {/* Mobile — horizontal scroll on ivory */}
        <div className="lg:hidden" style={{ backgroundColor: "var(--lui-warm-ivory)", padding: "48px 0" }}>
          <ScrollReveal>
            <h2 className="font-heading italic text-[22px] text-espresso text-center mb-6 px-6">{c.moreVoices.heading}</h2>
            <div
              className="flex gap-3.5 overflow-x-auto snap-x snap-mandatory pb-3"
              style={{ padding: "0 20px 12px", scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
            >
              {c.moreVoices.testimonials.map((t, i) => (
                <div
                  key={i}
                  className="shrink-0 snap-start bg-white"
                  style={{ minWidth: 265, padding: "20px 18px", boxShadow: "0 2px 20px rgba(44,36,32,0.05)", border: "0.5px solid rgba(212,197,178,0.2)" }}
                >
                  <p className="font-heading italic font-light text-[16px] text-espresso leading-[1.4] mb-3">&ldquo;{t.quote}&rdquo;</p>
                  <p className="font-body font-semibold text-[11px] text-espresso">{t.name}</p>
                  <a href={t.handleUrl} target="_blank" rel="noopener noreferrer" className="font-body text-[10px] text-terracotta no-underline hover:underline">{t.handle}</a>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
        {/* Desktop — two-column grid on white */}
        <div className="hidden lg:block" style={{ padding: "80px 48px 120px" }}>
          <ScrollReveal>
            <h2 className="font-heading italic text-[28px] text-espresso text-center mb-12">{c.moreVoices.heading}</h2>
            <div className="grid grid-cols-2 gap-16 max-w-[880px] mx-auto">
              {c.moreVoices.testimonials.map((t, i) => (
                <div key={i} className="text-center">
                  <span className="font-heading text-[40px] text-gold/30 leading-none block mb-2" aria-hidden="true">&ldquo;</span>
                  <p className="font-heading italic font-light text-[18px] text-espresso leading-[1.4] mb-4">{t.quote}</p>
                  <p className="font-body font-semibold text-[12px] text-espresso">{t.name}</p>
                  <a href={t.handleUrl} target="_blank" rel="noopener noreferrer" className="font-body text-[11px] text-terracotta no-underline hover:underline">{t.handle}</a>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================================= */}
      {/* §11 — BOTTOM CTA                                                 */}
      {/* ================================================================= */}
      <section data-section="bcta" style={{ backgroundColor: "var(--lui-espresso)" }}>
        {/* Mobile */}
        <div className="lg:hidden text-center" style={{ padding: "36px 20px" }}>
          <ScrollReveal>
            <h2 className="font-heading italic text-[26px] text-warm-ivory mb-3">{c.bottomCta.heading}</h2>
            <p className="font-body text-[14px] text-warm-ivory/60 leading-[1.6] mb-6">{c.bottomCta.body}</p>
            <a
              href={c.bottomCta.primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center font-body font-semibold text-[12px] tracking-[1.5px] uppercase bg-terracotta text-white py-4 mb-3 no-underline hover:no-underline"
            >
              {c.bottomCta.primaryCta.text}
            </a>
            <a
              href={c.bottomCta.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-4 bg-[#25D366] text-white font-body font-semibold text-[12px] tracking-[1px] uppercase no-underline hover:no-underline"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              {c.bottomCta.whatsappText}
            </a>
          </ScrollReveal>
        </div>
        {/* Desktop */}
        <div className="hidden lg:block text-center" style={{ padding: "72px 48px" }}>
          <ScrollReveal>
            <h2 className="font-heading italic text-[30px] text-warm-ivory mb-3">{c.bottomCta.heading}</h2>
            <p className="font-body font-light text-[15px] leading-[1.7] mb-8" style={{ color: "rgba(247,243,239,0.4)" }}>{c.bottomCta.body}</p>
            <a
              href={c.bottomCta.primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-body font-semibold text-[11px] tracking-[2px] uppercase bg-terracotta text-white no-underline hover:no-underline hover:bg-terracotta-dark hover:tracking-[2.5px] hover:-translate-y-0.5 transition-all duration-300"
              style={{ padding: "16px 40px" }}
            >
              {c.bottomCta.primaryCta.text}
            </a>
            <p className="mt-4" style={{ fontSize: 13, color: "rgba(247,243,239,0.4)" }}>
              {c.bottomCta.whatsappText.split("WhatsApp")[0]}
              <a href={c.bottomCta.whatsappHref} target="_blank" rel="noopener noreferrer" className="text-[#25D366] font-medium no-underline hover:opacity-80 transition-opacity">WhatsApp</a>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* §12 — Sticky CTA bar (mobile only) */}
      <HomeStickyBar text={c.stickyBar.text} href={c.stickyBar.href} />
    </div>
  );
}
