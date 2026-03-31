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
  /** Italic positioning line below price divider (e.g., "A professional investment in clarity.") */
  positioningLine?: string;
  /** Bold lead-in for the outcome text (e.g., "You'll walk away knowing") */
  outcomeText?: string;
  /** Compact details line (e.g., "~2 hours · Color analysis · Style diagnostic · Lookbook") */
  detailsLine?: string;
  cta: CTAButton;
}

export interface ServicePreviewSection {
  heading: string;
  cards: ServicePreviewCard[];
}

export interface SocialProofSection {
  heading: string;
}

export interface AboutPreviewSection {
  heading: string;
  body: string;
  link: TextLink;
  /** Instagram link displayed alongside the About link */
  instagramLink?: TextLink;
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
  /** Optional — omit for text-only sections */
  cta?: CTAButton;
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
  /** Inspirational quote — displayed as espresso poster moment */
  quote?: {
    text: string;
    attribution: string;
  };
  whoIsThisFor: WhoIsThisForSection;
  /** @deprecated — Removed from homepage in V6. Kept for backward compat. */
  howItWorks?: HowItWorksSection;
  servicePreview: ServicePreviewSection;
  /** @deprecated — Removed from homepage in V6. Kept for backward compat. */
  transformations?: TransformationsSection;
  socialProof: SocialProofSection;
  aboutPreview: AboutPreviewSection;
  /** @deprecated — Instagram link moved into aboutPreview. Kept for backward compat. */
  instagramCta?: InstagramCTASection;
  finalCta: FinalCTASection;
  seo: PageSEO;
}

// ---------------------------------------------------------------------------
// Services Page Content (V5)
// ---------------------------------------------------------------------------

export interface ServiceTierInclusion {
  text: string;
}

export interface ServiceTier {
  anchor: string;
  label?: string;
  name: string;
  price: string;
  positioningLine?: string;
  /** Bold lead-in for outcome description (e.g., "You'll walk away knowing") */
  outcomeText?: string;
  description: string;
  /** Styled callout text to justify value (used on Signature tier) */
  valueCallout?: string;
  /** Always-visible summary (e.g., "~2 hours · Color analysis · Lookbook") */
  summaryLine?: string;
  /** Badge text (e.g., "MOST COMPREHENSIVE") */
  badge?: string;
  /** Alt text for the card's image placeholder */
  imageAlt?: string;
  inclusions: ServiceTierInclusion[];
  duration?: string;
  cta: CTAButton;
}

export interface MethodologyDeepDive {
  heading: string;
  /** Visual pillar steps — replaces prose paragraph in V2-B */
  steps: ProcessStep[];
  closingLine: string;
}

export interface FAQItem {
  question: string;
  /** Supports HTML for bold key phrases */
  answer: string;
}

/** Inline testimonial for services page — shorter quote with headshot */
export interface ServicesTestimonial {
  quote: string;
  name: string;
  title: string;
  initials: string;
  social?: string;
}

/** @deprecated V5 services page interface — replaced by ServicesOverviewContent in V6. Kept for rollback. */
export interface ServicesContent {
  hero: {
    headline: string;
    subheadline: string;
    /** Alt text for hero image placeholder (desktop layout) */
    imageAlt?: string;
  };
  tiers: ServiceTier[];
  /** @deprecated — Methodology moved to homepage only */
  methodology?: MethodologyDeepDive;
  /** Transition text between free session and paid tiers */
  transition?: {
    heading: string;
    body: string;
  };
  /** Inline testimonials shown after Power Palette */
  socialProof?: ServicesTestimonial[];
  /** Visual moment section between tiers and FAQ */
  visualMoment?: ServicesTestimonial;
  faq: {
    heading: string;
  };
  finalCta: FinalCTASection;
  seo: PageSEO;
}

// ---------------------------------------------------------------------------
// Services Overview Content (V6 — Mockup Redesign)
// ---------------------------------------------------------------------------

export interface FreeSessionDeliverable {
  label: string;
  sublabel: string;
}

export interface ServiceSelectorCardData {
  badge: string;
  name: string;
  tags: string[];
  description: string;
  imageAlt: string;
  /** Border accent: 'champagne' for Occasion Styling, 'gold' for Image Consulting */
  accentColor: "champagne" | "gold";
  /** Gold top border on premium card */
  isPremium?: boolean;
  price: string;
  priceStrikethrough?: string;
  priceNote?: string;
  ctaText: string;
  ctaHref: string;
}

export interface ServicesOverviewTestimonial {
  quote: string;
  name: string;
  initials: string;
  title: string;
}

export interface ServicesOverviewContent {
  hero: {
    headline: string;
    description: string;
  };
  freeSession: {
    imageAlt: string;
    title: string;
    subtitle: string;
    description: string;
    deliverables: FreeSessionDeliverable[];
    cta: CTAButton;
    footnote: string;
  };
  trustLine: {
    name: string;
    credentials: string;
  };
  selector: {
    heading: string;
    subheading: string;
    cards: ServiceSelectorCardData[];
  };
  testimonial: ServicesOverviewTestimonial;
  bottomCta: {
    heading: string;
    description: string;
    primaryCta: CTAButton;
    secondaryText: string;
    secondaryLinkText: string;
    secondaryLinkHref: string;
  };
  stickyBar: {
    text: string;
    subtext: string;
    href: string;
  };
  seo: PageSEO;
}

// ---------------------------------------------------------------------------
// About Page Content
// ---------------------------------------------------------------------------

export interface AboutContent {
  hero: {
    headline: string;
    subheadline: string;
    imageAlt?: string;
  };
  /** First-person pull-quote — displayed as poster moment */
  pullQuote: string;
  /** Origin story with discipline bars */
  origin: {
    intro: string[];
    disciplines: string[];
    closing: string;
    imageAlt?: string;
  };
  /** Full-width session image */
  sessionImageAlt?: string;
  /** Client testimonial — displayed before origin closing */
  clientVoice: {
    quote: string;
    name: string;
    initials: string;
    title: string;
    instagram?: string;
  };
  /** Image strip — two atmospheric detail shots */
  imageStrip?: {
    leftAlt: string;
    rightAlt: string;
  };
  philosophy: {
    statement: string;
    closer: string;
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
  /** Initials for avatar circle (e.g., "CL") */
  initials?: string;
  /** Social handle placeholder (e.g., "@placeholder") */
  social?: string;
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
