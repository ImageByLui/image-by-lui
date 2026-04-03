// =============================================================================
// ServicesHero — Image by LUI (Desktop Overhaul — LUI-DESK-002 §2.2)
// =============================================================================
// Mobile: text-only hero (pt-8 px-5 pb-6)
// Desktop (≥1024px): asymmetric photo bleed — Lu B&W photo bleeds right to viewport
//   edge (52% width). Text in left column within 1200px container.
//   Entrance animations: H1 fadeUp 0.7s @0.15s, rule lineGrow 0.5s @0.65s,
//   description fadeUp 0.5s @0.95s, photo heroImgIn 0.9s @0.3s.
// =============================================================================

interface ServicesHeroProps {
  headline: string;
  description: string;
  heroImageAlt?: string;
}

export default function ServicesHero({ headline, description, heroImageAlt }: ServicesHeroProps) {
  return (
    <section id="hero" className="bg-warm-ivory relative overflow-hidden lg:min-h-[580px]" aria-label="Services hero">
      {/* Desktop photo — bleeds to viewport right edge */}
      <div
        className="hidden lg:block absolute top-0 right-0 w-[52%] h-full overflow-hidden"
        style={{ opacity: 0, animation: "heroImgIn 0.9s ease 0.3s forwards" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/heroes/services-hero-lu-bw.jpg"
          alt={heroImageAlt || "Lu — Image Consultant"}
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 15%" }}
        />
        {/* Left fade gradient */}
        <div
          className="absolute top-0 left-0 h-full w-[140px]"
          style={{ background: "linear-gradient(to right, #F7F3EF 0%, transparent 100%)" }}
          aria-hidden="true"
        />
      </div>

      {/* Text content */}
      <div className="relative z-[2] max-w-[1200px] mx-auto px-5 lg:px-12 pt-8 pb-6 lg:pt-[120px] lg:pb-[100px] lg:flex lg:flex-col lg:justify-center lg:min-h-[580px]">
        <h1
          className="font-heading font-semibold text-espresso leading-[1.18] lg:leading-[1.06] lg:tracking-[-1px] lg:max-w-[480px]"
          data-desktop-h1="68"
          style={{ fontSize: "var(--lui-fs-hero)", opacity: 0, animation: "fadeUp 0.7s ease 0.15s forwards" }}
        >
          {headline}
        </h1>

        {/* Gold rule — mobile uses CSS var width, desktop uses 56px */}
        <div
          className="w-[length:var(--lui-gold-line-w)] lg:w-[56px] h-[length:var(--lui-gold-line-h)] bg-gold my-3.5 lg:my-7 lg:h-[2px]"
          style={{ transformOrigin: "left", transform: "scaleX(0)", animation: "lineGrow 0.5s ease 0.65s forwards" }}
          aria-hidden="true"
        />

        <p
          className="text-body text-warm-grey leading-[1.6] lg:text-[17px] lg:font-light lg:leading-[1.7] lg:max-w-[420px]"
          style={{ opacity: 0, animation: "fadeUp 0.5s ease 0.95s forwards" }}
        >
          {description}
        </p>
      </div>
    </section>
  );
}
