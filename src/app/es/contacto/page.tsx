"use client";

import { useState } from "react";
import { contactContentEs } from "@/content/es/contacto";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import CalendlyEmbed from "@/components/features/CalendlyEmbed";

// =============================================================================
// Contact Page — Spanish (/es/contacto)
// =============================================================================

export default function ContactPageEs() {
  const content = contactContentEs;
  const [booked, setBooked] = useState(false);

  return (
    <>
      {/* Compact header — Calendly must be above the fold */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4 text-center">
        <h1 className="text-page-title mb-3">{content.hero.headline}</h1>
        <p className="text-warm-grey leading-relaxed text-[15px] md:text-[16px]">
          {content.hero.subheadline}
        </p>
      </div>

      {/* Calendly Embed — no extra padding above */}
      <section className="bg-soft-stone">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">

          {booked ? (
            <div className="bg-champagne p-8 md:p-10 text-center max-w-2xl mx-auto">
              <h3 className="font-heading font-medium text-[24px] text-espresso mb-4">
                {content.postBookingConfirmation.heading}
              </h3>
              <p className="text-warm-grey leading-relaxed mb-6">
                {content.postBookingConfirmation.body}
              </p>
              <Button
                href={content.postBookingConfirmation.link.href}
                external={content.postBookingConfirmation.link.external}
                variant="secondary"
              >
                {content.postBookingConfirmation.link.text}
              </Button>
            </div>
          ) : (
            <CalendlyEmbed onEventScheduled={() => setBooked(true)} />
          )}

          <p className="text-center text-caption mt-6 max-w-2xl mx-auto">
            {content.calendlyWrapper.belowEmbedNote}
          </p>
        </div>
      </section>

      {/* 3. WhatsApp Alternative */}
      <section className="bg-warm-ivory">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <SectionHeading>{content.whatsappAlternative.heading}</SectionHeading>
          <p className="text-warm-grey leading-relaxed mb-8">
            {content.whatsappAlternative.body}
          </p>
          <Button
            href={content.whatsappAlternative.cta.href}
            external={content.whatsappAlternative.cta.external}
          >
            {content.whatsappAlternative.cta.text}
          </Button>
        </div>
      </section>

      {/* 4. Location Note */}
      <section className="bg-soft-stone">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
          <p className="text-warm-grey text-[15px]">{content.locationNote}</p>
        </div>
      </section>
    </>
  );
}
