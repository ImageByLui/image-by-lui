"use client";

import { useState } from "react";
import { contactContentEs } from "@/content/es/contacto";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import CalendlyEmbed from "@/components/features/CalendlyEmbed";

// =============================================================================
// Contact Page — Spanish (/es/contacto) — V2 Side-by-side layout
// =============================================================================

export default function ContactPageEs() {
  const content = contactContentEs;
  const [booked, setBooked] = useState(false);

  return (
    <>
      {/* Main section — side-by-side on desktop */}
      <section className="bg-soft-stone">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">

          {/* Desktop: two-column grid */}
          <div className="hidden lg:grid grid-cols-[1fr_1.4fr] gap-12 py-12">
            {/* Left — heading + info */}
           <div className="flex flex-col justify-start pt-4">
              <h1 className="font-heading font-semibold text-[42px] leading-[1.12] text-espresso mb-4">
                {content.hero.headline}
              </h1>
              <p className="font-body text-[17px] text-warm-grey leading-relaxed mb-6">
                {content.hero.subheadline}
              </p>

              {/* WhatsApp alternative */}
              <div className="border-t border-t-champagne pt-8">
                <h2 className="font-heading font-medium text-[22px] text-espresso mb-3">
                  {content.whatsappAlternative.heading}
                </h2>
                <p className="font-body text-[15px] text-warm-grey leading-relaxed mb-5">
                  {content.whatsappAlternative.body}
                </p>
                <Button
                  href={content.whatsappAlternative.cta.href}
                  external={content.whatsappAlternative.cta.external}
                >
                  {content.whatsappAlternative.cta.text}
                </Button>
              </div>
            </div>

            {/* Right — Calendly embed */}
            <div>
              {booked ? (
                <div className="bg-champagne p-8 md:p-10 text-center">
                  <h3 className="font-heading font-medium text-[24px] text-espresso mb-4">
                    {content.postBookingConfirmation.heading}
                  </h3>
                  <p className="font-body text-warm-grey leading-relaxed mb-6">
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
            </div>
          </div>

          {/* Mobile: stacked */}
          <div className="lg:hidden py-8">
            <div className="text-center mb-6">
              <h1 className="font-heading font-semibold text-[28px] leading-[1.2] text-espresso mb-3">
                {content.hero.headline}
              </h1>
              <p className="font-body text-[16px] text-warm-grey leading-relaxed">
                {content.hero.subheadline}
              </p>
            </div>

            {booked ? (
              <div className="bg-champagne p-6 text-center">
                <h3 className="font-heading font-medium text-[22px] text-espresso mb-3">
                  {content.postBookingConfirmation.heading}
                </h3>
                <p className="font-body text-warm-grey leading-relaxed mb-5">
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

            <p className="text-center font-body text-[13px] text-warm-taupe mt-4">
              {content.calendlyWrapper.belowEmbedNote}
            </p>
          </div>
        </div>
      </section>

      {/* WhatsApp — mobile only */}
      <section className="lg:hidden bg-warm-ivory">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
          <h2 className="font-heading font-medium text-[20px] text-espresso mb-3">
            {content.whatsappAlternative.heading}
          </h2>
          <p className="font-body text-[15px] text-warm-grey leading-relaxed mb-5">
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

      {/* Location Note */}
      <section className="bg-soft-stone">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
          <p className="font-body text-warm-grey text-[15px]">{content.locationNote}</p>
        </div>
      </section>
    </>
  );
}
