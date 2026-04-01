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
  /** Real photo path — replaces initials circle when available */
  photo?: string;
  /** Social media handle */
  handle?: string;
}

/** Desktop photography-based service card — LUI-DESK-002 §2.4 */
export interface DesktopServiceCardData {
  variant: "occasion" | "premium";
  image: string;
  imagePosition: string;
  label: string;
  title: string;
  description: string;
  inclusions: string[];
  /** Tier/stats line below inclusions */
  detailLine: string;
  price: string;
  priceStrikethrough?: string;
  linkText: string;
  linkHref: string;
}

/** FAQ preview item — LUI-DESK-002 §2.6 */
export interface FAQPreviewItem {
  question: string;
  answer: string;
}

/** FAQ preview section data */
export interface FAQPreviewData {
  heading: string;
  items: FAQPreviewItem[];
  linkText: string;
  linkHref: string;
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

  /** Desktop-specific overrides — LUI-DESK-002. Components fall back to mobile data when absent. */
  desktop?: {
    serviceCards?: DesktopServiceCardData[];
    faqPreview?: FAQPreviewData;
    /** Desktop bottom CTA swaps WhatsApp primary for Calendly primary */
    bottomCta?: {
      heading: string;
      description: string;
      primaryCta: CTAButton;
      secondaryText: string;
      secondaryLinkHref: string;
    };
  };
}

// ---------------------------------------------------------------------------
// Occasion Styling Page Content
// ---------------------------------------------------------------------------

/** Process step for service pages (distinct from homepage ProcessStep) */
export interface ServiceProcessStep {
  title: string;
  description: string;
}

export interface PricingTierData {
  name: string;
  price: string;
  subtitle: string;
  duration: string;
  description: string;
  inclusions: string[];
  ctaText: string;
  ctaHref: string;
  /** Visual variant: determines border color, CTA style, badge, expanded state */
  variant: "essential" | "complete" | "vip";
  /** Only for Complete tier */
  badge?: string;
  /** Only for Complete tier */
  imageAlt?: string;
  /** Only for VIP tier */
  footnote?: string;
}

export interface GalleryItem {
  label: string;
  caption: string;
  /** Alternating backgrounds for visual variety */
  background: "stone" | "ivory";
}

/** Desktop gallery item — real photography instead of placeholders */
export interface DesktopGalleryItem {
  image: string;
  alt: string;
}

/** Cross-navigation link between service pages */
export interface CrossNavData {
  text: string;
  linkText: string;
  linkHref: string;
}

export interface OccasionStylingContent {
  hero: {
    label: string;
    headline: string;
    description: string;
    imageAlt: string;
    tags: string[];
  };
  howItWorks: {
    label: string;
    steps: ServiceProcessStep[];
    imageAlt: string;
  };
  pricing: {
    label: string;
    subheading: string;
    tiers: PricingTierData[];
  };
  testimonial: {
    quote: string;
    name: string;
    initials: string;
    title: string;
    photo?: string;
    handle?: string;
  };
  gallery: {
    label: string;
    subheading: string;
    items: GalleryItem[];
  };
  bottomCta: {
    heading: string;
    description: string;
    primaryCta: CTAButton;
    secondaryText: string;
    secondaryLinkText: string;
    secondaryLinkHref: string;
    faqLinkText: string;
    faqLinkHref: string;
  };
  stickyBar: {
    text: string;
    subtext: string;
    href: string;
  };
  seo: PageSEO;

  /** Desktop-specific overrides — LUI-DESK-003 */
  desktop?: {
    hero: {
      image: string;
      imagePosition: string;
      filter?: string;
      minHeight?: number;
      photoWidth?: string;
    };
    howItWorks: {
      heading: string;
      steps: ServiceProcessStep[];
    };
    pricing: {
      heading: string;
      subheading: string;
      tiers: {
        name: string;
        price: string;
        duration: string;
        description: string;
        inclusions: string[];
        ctaText: string;
        variant: "essential" | "complete" | "vip";
        badge?: string;
        ctaStyle?: "terracotta" | "gold";
      }[];
    };
    gallery: {
      heading: string;
      items: DesktopGalleryItem[];
    };
    faqPreview: FAQPreviewData;
    crossNav: CrossNavData;
    bottomCta: {
      heading: string;
      description: string;
      primaryCta: CTAButton;
      secondaryText: string;
      secondaryLinkHref: string;
    };
  };
}

// ---------------------------------------------------------------------------
// Image Consulting Page Content
// ---------------------------------------------------------------------------

export interface PricingSummaryColumn {
  value: string;
  label: string;
}

export interface JourneyComponentData {
  stepNumber: number;
  name: string;
  duration: string;
  subtitle: string;
  description: string;
  imageAlt: string;
  inclusions: {
    /** Bold key phrase */
    key: string;
    /** Remaining description after the dash */
    detail: string;
  }[];
  /** Italic gold line: "You receive: ..." */
  deliverableLine: string;
}

export interface DeliverableItem {
  title: string;
  qualifier: string;
}

export interface TransformationData {
  initials: string;
  caption: string;
  /** true for the currently active/shown transformation */
  active?: boolean;
}

export interface PhotoOption {
  title: string;
  badge: string;
  badgeVariant: "terracotta" | "gold";
  borderColor: "champagne" | "gold";
  description: string;
}

export interface ImageConsultingContent {
  hero: {
    label: string;
    headline: string;
    description: string;
    tags: string[];
    imageAlt: string;
  };
  pricing: {
    price: string;
    priceStrikethrough: string;
    priceNote: string;
    summary: PricingSummaryColumn[];
  };
  journey: {
    label: string;
    subheading: string;
    components: JourneyComponentData[];
  };
  deliverables: {
    label: string;
    subheading: string;
    items: DeliverableItem[];
    whatsappCallout: {
      title: string;
      description: string;
    };
  };
  transformations: {
    label: string;
    subheading: string;
    items: TransformationData[];
  };
  photoOptions: {
    label: string;
    options: PhotoOption[];
  };
  /** Testimonial — added for desktop (shown on mobile too when present) */
  testimonial?: {
    quote: string;
    name: string;
    initials: string;
    title: string;
    photo?: string;
    handle?: string;
    /** Flag for easy identification when placeholder */
    isPlaceholder?: boolean;
  };
  bottomCta: {
    heading: string;
    description: string;
    primaryCta: CTAButton;
    secondaryText: string;
    secondaryLinkText: string;
    secondaryLinkHref: string;
    faqLinkText: string;
    faqLinkHref: string;
  };
  stickyBar: {
    text: string;
    subtext: string;
    href: string;
  };
  seo: PageSEO;

  /** Desktop-specific overrides — LUI-DESK-004 */
  desktop?: {
    hero: {
      image: string;
      imagePosition: string;
      filter?: string;
      minHeight?: number;
      photoWidth?: string;
    };
    investment: {
      heading: string;
      price: string;
      priceStrikethrough: string;
      stats: { value: string; label: string }[];
      entryText: string;
      entryLinkText: string;
      entryLinkHref: string;
    };
    journey: {
      heading: string;
      subheading: string;
      /** Image paths for each component (indexed by component order) */
      images: string[];
      photoEmbed: {
        label: string;
        options: { title: string; price: string; description: string }[];
      };
    };
    deliverables: {
      heading: string;
      subheading: string;
      items: { title: string; description: string }[];
      bonus: string;
    };
    faqPreview: FAQPreviewData;
    crossNav: CrossNavData;
    bottomCta: {
      heading: string;
      description: string;
      primaryCta: CTAButton;
      secondaryText: string;
      secondaryLinkHref: string;
    };
  };
}

// ---------------------------------------------------------------------------
// FAQ Page Content
// ---------------------------------------------------------------------------

export interface FAQCategory {
  id: string;
  pillLabel: string;
  count: number;
  /** Reuses existing FAQItem interface (question + HTML answer) */
  items: FAQItem[];
  crossLinks: {
    text: string;
    links: { label: string; categoryId: string }[];
  };
  /** Desktop section label (e.g., "GENERAL") — LUI-DESK-005 §5.4 */
  sectionLabel?: string;
  /** Desktop section title (e.g., "About our approach") — LUI-DESK-005 §5.4 */
  sectionTitle?: string;
}

export interface FAQPageContent {
  hero: {
    label: string;
    headline: string;
    description: string;
  };
  categories: FAQCategory[];
  bottomCta: {
    heading: string;
    description: string;
    whatsappCta: CTAButton;
    calendlyCta: CTAButton;
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
