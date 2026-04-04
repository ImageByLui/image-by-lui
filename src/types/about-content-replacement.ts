// ---------------------------------------------------------------------------
// About Page Content — REPLACEMENT TYPE (LUI-ABOUT-001)
// ---------------------------------------------------------------------------
// Editorial profile layout: hero empathy quote → 3 story beats with photos →
// gold-line pivot → method → statement → closing photo → CTA + sticky bar.
//
// IMPORTANT: Replace the existing `AboutContent` interface in content.ts
// with this version. The old interface (hero/pullQuote/origin/philosophy/etc.)
// is no longer used.
// ---------------------------------------------------------------------------

/*
  Find and replace in src/types/content.ts:

  DELETE everything from:
    "// About Page Content"
  TO (but not including):
    "// Contact Page Content"

  REPLACE with the block below:
*/

// ---------------------------------------------------------------------------
// About Page Content (V8 — Editorial Narrative)
// ---------------------------------------------------------------------------

export interface AboutContent {
  hero: {
    /** Full quote before the highlight (e.g., "If you've ever stood...") */
    quoteBefore: string;
    /** Highlighted phrase rendered in terracotta italic (e.g., "I have nothing to wear") */
    quoteHighlight: string;
    /** Connection line — rendered as separate element, italic, 28px */
    connection: string;
    /** Alt text for the B&W hero photo */
    imageAlt: string;
  };
  beats: {
    one: string;
    twoA: string;
    twoB: string;
    threeA: string;
    threeB: string;
  };
  pivot: {
    line1: string;
    line2: string;
  };
  statement: {
    /** Main statement text */
    text: string;
    /** "Yours." / "Tuya." — rendered as display:block, 24px */
    closer: string;
  };
  /** Alt text for each story photo — keyed by position */
  photoAlts: {
    colombia: string;
    backstage: string;
    interview: string;
    closing: string;
  };
  cta: {
    heading: string;
    body: string;
    primaryCta: {
      text: string;
      href: string;
      external?: boolean;
    };
    secondaryText: string;
    secondaryHref: string;
  };
  stickyBar: {
    text: string;
    href: string;
  };
  seo: PageSEO;
}
