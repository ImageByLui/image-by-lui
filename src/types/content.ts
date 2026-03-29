// =============================================================================
// Content Type Definitions — Image by LUI
// =============================================================================
// These interfaces enforce structure consistency between EN and ES content files.
// When adding a new section to a page, define the shape here first.
// =============================================================================

// ---------------------------------------------------------------------------
// Shared / Common Types
// ---------------------------------------------------------------------------

export type Lang = "en" | "es";

export interface CTAButton {
  text: string;
  href: string;
  /** If true, link opens in a new tab (external links, Calendly) */
  external?: boolean;
}

export interface TextLink {
  text: string;
  href: string;
  external?: boolean;
}

// ---------------------------------------------------------------------------
// Homepage Content
// ---------------------------------------------------------------------------

export interface HeroSection {
  headline: string;
  subheadline: string;
  trustLine?: string;
  cta: CTAButton;
  ctaSubtext: string;
  imageAlt: string;
}

export interface MethodologyItem {
  title: string;
  description: string;
}

export interface MethodologySection {
  heading: string;
  body: string;
  items: MethodologyItem[];
  closingLine: string;
}

export interface ServicePreviewCard {
  name: string;
  price: string;
  description: string;
  cta: CTAButton;
}

export interface ServicePreviewSection {
  heading: string;
  cards: ServicePreviewCard[];
}

export interface SocialProofSection {
  heading: string;
  // Testimonials are imported from shared/testimonials.ts
}

export interface AboutPreviewSection {
  heading: string;
  body: string;
  link: TextLink;
}

export interface InstagramFeedSection {
  heading: string;
  subtext: string;
}

export interface InstagramCTASection {
  heading: string;
  body: string;
  cta: CTAButton;
}

export interface FinalCTASection {
  heading: string;
  body: string;
  cta: CTAButton;
}

// V2 — New homepage section types

export interface PersonaCardData {
  headline: string;
  body: string;
}

export interface WhoIsThisForSection {
  sectionHeading: string;
  cards: PersonaCardData[];
}

export interface ProcessStep {
  number: number;
  heading: string;
  body: string;
}

export interface HowItWorksSection {
  sectionHeading: string;
  steps: ProcessStep[];
}

export interface TransformationCardData {
  beforeImage?: string;
  afterImage?: string;
  caption: string;
}

export interface TransformationsSection {
  sectionHeading: string;
  sectionSubheading: string;
  cards: TransformationCardData[];
}

export interface HomeContent {
  hero: HeroSection;
  whoIsThisFor: WhoIsThisForSection;
  howItWorks: HowItWorksSection;
  servicePreview: ServicePreviewSection;
  transformations: TransformationsSection;
  socialProof: SocialProofSection;
  aboutPreview: AboutPreviewSection;
  instagramCta: InstagramCTASection;
  finalCta: FinalCTASection;
  seo: PageSEO;
}

// ---------------------------------------------------------------------------
// Services Page Content
// ---------------------------------------------------------------------------

export interface ServiceTierInclusion {
  text: string;
}

export interface ServiceTier {
  anchor: string;
  label?: string; // e.g., "START HERE" / "EMPIEZA AQUÍ"
  name: string;
  price: string;
  positioningLine?: string;
  description: string;
  inclusions: ServiceTierInclusion[];
  duration?: string;
  cta: CTAButton;
}

export interface MethodologyDeepDive {
  heading: string;
  body: string;
  closingLine: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServicesContent {
  hero: {
    headline: string;
    subheadline: string;
  };
  tiers: ServiceTier[];
  methodology: MethodologyDeepDive;
  faq: {
    heading: string;
    // Items imported from shared/faq.ts
  };
  finalCta: FinalCTASection;
  seo: PageSEO;
}

// ---------------------------------------------------------------------------
// About Page Content
// ---------------------------------------------------------------------------

export interface AboutContent {
  hero: {
    headline: string;
    subheadline: string;
  };
  originStory: {
    paragraphs: string[];
  };
  credentials: {
    heading: string;
    items: string[];
  };
  philosophy: {
    heading: string;
    body: string;
  };
  cta: {
    heading: string;
    body: string;
    cta: CTAButton;
  };
  seo: PageSEO;
}

// ---------------------------------------------------------------------------
// Contact Page Content
// ---------------------------------------------------------------------------

export interface ContactContent {
  hero: {
    headline: string;
    subheadline: string;
  };
  calendlyWrapper: {
    heading: string;
    introText: string;
    belowEmbedNote: string;
  };
  postBookingConfirmation: {
    heading: string;
    body: string;
    link: TextLink;
  };
  whatsappAlternative: {
    heading: string;
    body: string;
    cta: CTAButton;
  };
  locationNote: string;
  seo: PageSEO;
}

// ---------------------------------------------------------------------------
// Blog Placeholder Content
// ---------------------------------------------------------------------------

export interface BlogContent {
  heading: string;
  body: string;
  cta: CTAButton;
  seo: PageSEO;
}

// ---------------------------------------------------------------------------
// 404 Page Content
// ---------------------------------------------------------------------------

export interface NotFoundContent {
  headline: string;
  body: string;
  primaryCta: CTAButton;
  secondaryLink: TextLink;
}

// ---------------------------------------------------------------------------
// Navigation Content
// ---------------------------------------------------------------------------

export interface NavItem {
  label: string;
  href: string;
}

export interface NavigationContent {
  items: NavItem[];
  langSwitcher: {
    label: string; // "EN" or "ES"
    ariaLabel: string;
  };
}

// ---------------------------------------------------------------------------
// Footer Content
// ---------------------------------------------------------------------------

export interface FooterContent {
  tagline: string;
  contactLine: string;
  whatsappLinkText: string;
  instagramText: string;
  copyright: string;
  navItems: NavItem[];
}

// ---------------------------------------------------------------------------
// SEO Types
// ---------------------------------------------------------------------------

export interface PageSEO {
  title: string;
  description: string;
  ogImage?: string;
}

// ---------------------------------------------------------------------------
// Shared Content Types
// ---------------------------------------------------------------------------

export interface Testimonial {
  quote: {
    en: string;
    es: string;
  };
  attribution: {
    en: string;
    es: string;
  };
  contextLine?: {
    en: string;
    es: string;
  };
}

export interface SharedFAQItem {
  question: {
    en: string;
    es: string;
  };
  answer: {
    en: string;
    es: string;
  };
}

export interface SharedServiceTier {
  id: string;
  name: {
    en: string;
    es: string;
  };
  price: string;
  inclusions: {
    en: string[];
    es: string[];
  };
}
