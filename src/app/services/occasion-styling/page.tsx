import type { Metadata } from "next";
import Link from "next/link";
import { occasionStylingContent } from "@/content/en/occasion-styling";
import { buildPageMetadata } from "@/lib/metadata";
import ServicePageHero from "@/components/services/ServicePageHero";
import TrustLine from "@/components/services/TrustLine";
import HowItWorks from "@/components/services/HowItWorks";
import PricingSection from "@/components/services/PricingSection";
import ServicesTestimonialBlock from "@/components/services/ServicesTestimonialBlock";
import StyledLooksGallery from "@/components/services/StyledLooksGallery";
import BottomCTASection from "@/components/services/BottomCTASection";
import ServicesStickyBar from "@/components/services/ServicesStickyBar";
const content = occasionStylingContent;
export const metadata: Metadata = { ...buildPageMetadata(content.seo, "en", "occasionStyling"), alternates: { canonical: "/services/occasion-styling", languages: { en: "/services/occasion-styling", es: "/es/servicios/estilismo-de-ocasion", "x-default": "/services/occasion-styling" } }, openGraph: { title: "Occasion Styling — Weddings, Galas, Keynotes | Miami", description: "Three tiers from $250.", images: [{ url: "/og/occasion-styling.jpg", width: 1200, height: 630 }], locale: "en_US", type: "website" } };
export default function OccasionStylingPage() {
  return (<>
    <ServicePageHero label={content.hero.label} headline={content.hero.headline} description={content.hero.description} imageAlt={content.hero.imageAlt} tags={content.hero.tags} />
    <TrustLine name="Lu · Image Consultant" credentials={["Certified colorimetry specialist", "Bilingual EN/ES", "Miami"]} compact />
    <HowItWorks label={content.howItWorks.label} steps={content.howItWorks.steps} imageAlt={content.howItWorks.imageAlt} />
    <PricingSection label={content.pricing.label} subheading={content.pricing.subheading} tiers={content.pricing.tiers} />
    <ServicesTestimonialBlock quote={content.testimonial.quote} name={content.testimonial.name} initials={content.testimonial.initials} title={content.testimonial.title} bgColor="warm-ivory" />
    <StyledLooksGallery label={content.gallery.label} subheading={content.gallery.subheading} items={content.gallery.items} />
    <BottomCTASection>
      <h2 className="font-heading font-normal text-section text-warm-ivory mb-2.5">{content.bottomCta.heading}</h2>
      <p className="font-body text-card leading-[1.6] text-warm-ivory/65 mb-6">{content.bottomCta.description}</p>
      <a href={content.bottomCta.primaryCta.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] text-white font-body font-semibold text-cta tracking-[1px] uppercase px-8 py-4 no-underline hover:no-underline transition-colors duration-150 active:bg-[#1DA851] focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        {content.bottomCta.primaryCta.text}
      </a>
      <p className="font-body text-secondary text-warm-ivory/60 mt-3">{content.bottomCta.secondaryText}{" "}<a href={content.bottomCta.secondaryLinkHref} target="_blank" rel="noopener noreferrer" className="text-gold font-semibold underline hover:text-gold">{content.bottomCta.secondaryLinkText}</a></p>
      <p className="font-body text-secondary text-warm-ivory/60 mt-2"><Link href={content.bottomCta.faqLinkHref} className="text-warm-ivory/60 hover:text-warm-ivory transition-colors duration-150 no-underline hover:underline">{content.bottomCta.faqLinkText}</Link></p>
    </BottomCTASection>
    <ServicesStickyBar text={content.stickyBar.text} subtext={content.stickyBar.subtext} href={content.stickyBar.href} />
  </>);
}
