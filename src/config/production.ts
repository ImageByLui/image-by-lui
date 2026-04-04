// =============================================================================
// Production Site Configuration
// =============================================================================
// Edit values here to update the production site without touching components.
//
// SHOW_CREDITS: set to `false` to remove the credits section entirely from
//               the DOM (not just hidden — fully removed).
// =============================================================================

/** Toggle the Production Credits section on/off */
export const SHOW_CREDITS = true;

/** Brand image filter applied to ALL production photos via CSS */
export const BRAND_FILTER =
  "contrast(1.08) saturate(0.85) sepia(0.05) brightness(0.97)";

/** Base path for production images */
const IMG = "/images/production";

// =============================================================================
// Image Manifest
// =============================================================================
// All files in public/images/production/
// Object-position values match approved mockup crops.
// =============================================================================

export const IMAGES = {
  hero: {
    src: `${IMG}/hero.jpg`,
    alt: "Lu on a production set with cameras and lighting behind her",
    objectPosition: "center 12%",
  },
  portfolio: [
    {
      src: `${IMG}/On-Set-1.jpg`,
      alt: "Backstage dressing room with vanity mirrors",
      objectPosition: "center 28%",
      captionEN: "Backstage",
      captionES: "Backstage",
    },
    {
      src: `${IMG}/On-Set-2.JPG`,
      alt: "Lu holding reflector in studio",
      objectPosition: "center 20%",
      captionEN: "Studio",
      captionES: "Estudio",
    },
    {
      src: `${IMG}/On-Set-3.jpg`,
      alt: "Lu on dark runway stage",
      objectPosition: "center center",
      captionEN: "Runway",
      captionES: "Pasarela",
    },
    {
      src: `${IMG}/On-Set-4.jpg`,
      alt: "Lu at fashion event, tight crop",
      objectPosition: "center top",
      captionEN: "Editorial",
      captionES: "Editorial",
    },
    {
      src: `${IMG}/On-Set-5.jpg`,
      alt: "Lu being interviewed at fashion venue",
      objectPosition: "center 38%",
      captionEN: "Press",
      captionES: "Prensa",
    },
  ],
  /** Industry strip — add entries here to scale. No layout changes needed. */
  industry: [
    { src: `${IMG}/Industry-1.jpg`, label: "Vogue", alt: "Vogue event" },
    { src: `${IMG}/Industry-2.jpg`, label: "Mercedes-Benz", alt: "Mercedes-Benz event"},
    { src: `${IMG}/Industry-3.jpg`, label: "Miami FW", alt: "Miami Fashion Week"},
    { src: `${IMG}/Industry-4.jpg`, label: "Cartier", alt: "Cartier event" },
    { src: `${IMG}/Industry-5.jpg`, label: "Brand", alt: "Description" },
    { src: `${IMG}/Industry-6.jpg`, label: "Brand", alt: "Description" },
    { src: `${IMG}/Industry-7.jpg`, label: "Brand", alt: "Description" },
    // ── Future additions: just append here ──
     ],
} as const;

// =============================================================================
// Production Credits Data
// =============================================================================
// Lu provides real data before launch. Update entries here only.
// Type values are displayed as-is, so keep them concise.
// =============================================================================

export const CREDITS = [
  {
    name: "Vogue Gala Miami",
    type: "Editorial",
    roleEN: "Styling Direction",
    roleES: "Dirección de Estilismo",
  },
  {
    name: "Mercedes-Benz Fashion Week",
    type: "Fashion Show",
    roleEN: "Wardrobe Stylist",
    roleES: "Estilista de Vestuario",
  },
  {
    name: "L'Oréal × Inditex Madrid",
    type: "Campaign",
    roleEN: "Styling Direction",
    roleES: "Dirección de Estilismo",
  },
  {
    name: "Cartier Private Event",
    type: "Commercial",
    roleEN: "Wardrobe Coordination",
    roleES: "Coordinación de Vestuario",
  },
  {
    name: "Miami Fashion Week 2024",
    type: "Fashion Show",
    roleEN: "Styling Direction",
    roleES: "Dirección de Estilismo",
  },
];
