# Image by LUI — Website

**Diagnostic image consulting in Miami.** Bilingual (English + Spanish) website for Image by LUI, built with Next.js and deployed on Vercel.

**Live site:** [imagebylui.com](https://imagebylui.com)

---

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Fonts:** Cormorant Garamond + Libre Franklin (Google Fonts via next/font)
- **Hosting:** Vercel (free tier)
- **Domain:** imagebylui.com (Namecheap → Vercel DNS)
- **Analytics:** Google Analytics 4 (optional, loads only when configured)
- **Booking:** Calendly (inline embed on Contact page, direct links elsewhere)
- **Chat:** WhatsApp floating button on all pages

---

## Running Locally

```bash
# 1. Clone the repo
git clone https://github.com/ImageByLui/image-by-lui.git
cd image-by-lui

# 2. Install dependencies
npm install

# 3. Create your local environment file
cp .env.example .env.local

# 4. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## How the Site is Organized

The key principle: **content (text) is separated from code (components).** When you need to change what the site says, you edit content files. When you need to change how it looks, you edit components. You'll almost always be editing content files.

### Project Structure

```
src/
├── app/                  ← Pages (Next.js routes)
│   ├── page.tsx          ← Homepage (English)
│   ├── services/         ← /services
│   ├── about/            ← /about
│   ├── contact/          ← /contact
│   ├── blog/             ← /blog
│   ├── es/               ← All Spanish pages live here
│   │   ├── page.tsx      ← /es (Spanish homepage)
│   │   ├── servicios/    ← /es/servicios
│   │   ├── sobre-mi/     ← /es/sobre-mi
│   │   ├── contacto/     ← /es/contacto
│   │   └── blog/         ← /es/blog
│   ├── not-found.tsx     ← 404 page (bilingual)
│   ├── sitemap.ts        ← Auto-generated sitemap.xml
│   ├── robots.ts         ← robots.txt
│   ├── layout.tsx        ← Root layout (fonts, analytics, header, footer)
│   └── globals.css       ← Brand colors and typography
│
├── content/              ← ALL WEBSITE TEXT LIVES HERE
│   ├── en/               ← English page content
│   ├── es/               ← Spanish page content
│   └── shared/           ← Bilingual data (testimonials, FAQ, services)
│
├── components/           ← Reusable UI pieces
│   ├── layout/           ← Header, Footer, MobileMenu
│   ├── ui/               ← Button, ServiceCard, TestimonialCard, etc.
│   ├── features/         ← WhatsApp, Calendly, LanguageSwitcher, etc.
│   └── seo/              ← Schema markup
│
├── config/
│   └── site.config.ts    ← Central configuration (WhatsApp, Calendly, social)
│
├── lib/                  ← Helper functions
└── types/                ← TypeScript type definitions
```

---

## How to Update Content

### Which File to Edit for What

| I want to change... | Edit this file |
|---|---|
| Homepage text (English) | `src/content/en/home.ts` |
| Homepage text (Spanish) | `src/content/es/home.ts` |
| Services page text (EN) | `src/content/en/services.ts` |
| Services page text (ES) | `src/content/es/servicios.ts` |
| About page text (EN) | `src/content/en/about.ts` |
| About page text (ES) | `src/content/es/sobre-mi.ts` |
| Contact page text (EN) | `src/content/en/contact.ts` |
| Contact page text (ES) | `src/content/es/contacto.ts` |
| Blog placeholder (EN) | `src/content/en/blog.ts` |
| Blog placeholder (ES) | `src/content/es/blog.ts` |
| Testimonials (both languages) | `src/content/shared/testimonials.ts` |
| FAQ questions and answers | `src/content/shared/faq.ts` |
| Service names and prices | `src/content/shared/services.ts` |
| WhatsApp number, Calendly URL, social links | `src/config/site.config.ts` |
| Google Analytics ID | `.env.local` (local) or Vercel dashboard (production) |

### Changing Homepage Text

Open `src/content/en/home.ts` (English) or `src/content/es/home.ts` (Spanish). Each section is clearly labeled:

```typescript
hero: {
  headline: "Your Image, Architected.",    // ← Change this text
  subheadline: "Image by LUI is a ...",    // ← Or this text
}
```

Save the file, push to GitHub, and Vercel deploys automatically.

### Changing Testimonials

Edit `src/content/shared/testimonials.ts`. Each testimonial has English and Spanish versions:

```typescript
{
  quote: {
    en: "Lu didn't just change my wardrobe...",
    es: "Lu no solo cambió mi guardarropa...",
  },
  attribution: {
    en: "A.R., Corporate Finance",
    es: "A.R., Finanzas Corporativas",
  },
},
```

To add a testimonial, copy an existing block and change the text. To remove one, delete the block.

### Changing Service Prices

Prices appear in two places — update both:

1. **Homepage preview cards:** `src/content/en/home.ts` → `servicePreview.cards` (and ES equivalent)
2. **Full service descriptions:** `src/content/en/services.ts` → `tiers` (and `src/content/es/servicios.ts`)

### Changing FAQ

Edit `src/content/shared/faq.ts`. Each question has EN and ES versions. The "I speak Spanish" question is automatically hidden from the Spanish page.

---

## How to Replace Image Placeholders

The site shows brand-colored placeholders where photos will go. To swap in a real photo:

### Step 1: Prepare the image

| Where it goes | Dimensions | Max file size |
|---|---|---|
| Hero section | 1920 x 1080 px | 300 KB |
| Section images (About, etc.) | 1200 x 800 px | 200 KB |
| Service cards | 800 x 600 px | 150 KB |
| Testimonial photos | 200 x 200 px | 50 KB |
| Open Graph (social sharing) | 1200 x 630 px | 200 KB |
| Favicon | 180 x 180 px | 20 KB |

Compress images at [tinypng.com](https://tinypng.com) before uploading.

### Step 2: Add the image to the repo

Upload the image to `public/images/` (e.g., `public/images/hero-lu.jpg`).

### Step 3: Update the code

Find the `ImagePlaceholder` in the page file and add the `src` prop:

```tsx
// Before (placeholder):
<ImagePlaceholder alt="..." width={1920} height={1080} />

// After (real photo):
<ImagePlaceholder src="/images/hero-lu.jpg" alt="..." width={1920} height={1080} />
```

The component automatically switches from placeholder to real optimized image.

### Open Graph Images (social sharing)

1. Create 1200 x 630 px images for each page
2. Save them in `public/og/` (e.g., `public/og/homepage.jpg`)
3. Add `ogImage` to the seo section of the relevant content file:

```typescript
seo: {
  title: "...",
  description: "...",
  ogImage: "/og/homepage.jpg",   // ← Add this
}
```

---

## Placeholder Inventory

These values in `src/config/site.config.ts` must be replaced before the site is fully functional:

| Placeholder | What to provide | Where it appears |
|---|---|---|
| `whatsapp.number` = "1XXXXXXXXXX" | Lu's WhatsApp Business number with country code, no dashes (e.g., "13051234567") | WhatsApp button on all pages, Contact page, Footer |
| `calendly.baseUrl` = "https://calendly.com/imagebylui" | Lu's actual Calendly URL after creating account | All booking buttons, Contact page embed |
| `calendly.events` slugs | Verify slugs match Calendly events: "/power-palette", "/first-impression", "/identity-transformation" | Service tier CTA buttons |
| `schema.telephone` = "" | Lu's business phone number | Google search results |
| `schema.image` = "" | URL to Lu's headshot after uploading (e.g., "https://imagebylui.com/images/lu-headshot.jpg") | Google search results |
| `NEXT_PUBLIC_GA4_MEASUREMENT_ID` = "" | GA4 Measurement ID (format: G-XXXXXXXXXX) | Set in `.env.local` locally and in Vercel dashboard for production |

---

## Adding a New Page

1. **Content files:** Create `src/content/en/newpage.ts` and `src/content/es/newpage.ts`
2. **Page files:** Create `src/app/newpage/page.tsx` (EN) and `src/app/es/newpage/page.tsx` (ES)
3. **Update site.config.ts:** Add to `siteConfig.pages`:
   ```typescript
   newpage: { en: "/newpage", es: "/es/newpage" },
   ```
4. **Update navigation:** Add nav items in Header and Footer components
5. Sitemap and hreflang update automatically

---

## Deployment

### Automatic

Every push to `main` on GitHub triggers an automatic Vercel deploy. No manual steps needed.

### DNS (already configured)

| Record | Host | Value |
|---|---|---|
| A Record | @ | Vercel IP (configured) |
| CNAME | www | Vercel DNS (configured) |

SSL certificate is automatic via Vercel.

### Production Environment Variables

To set GA4 in production:

1. Vercel dashboard → `image-by-lui` → **Settings** → **Environment Variables**
2. Add: `NEXT_PUBLIC_GA4_MEASUREMENT_ID` = your GA4 ID
3. Save — takes effect on next deploy

---

## SEO Checklist

Already implemented:

- [x] Meta titles and descriptions on all 10 pages
- [x] hreflang tags linking EN and ES versions
- [x] x-default hreflang pointing to English
- [x] Open Graph tags on all pages
- [x] ProfessionalService JSON-LD schema on all pages
- [x] sitemap.xml with all 10 pages
- [x] robots.txt allowing all crawlers
- [x] Semantic HTML throughout

After launch:

1. Submit sitemap to Google Search Console: `https://imagebylui.com/sitemap.xml`
2. Validate schema at [Google Rich Results Test](https://search.google.com/test/rich-results)
3. Test social sharing with [Facebook Debugger](https://developers.facebook.com/tools/debug/) and [LinkedIn Inspector](https://www.linkedin.com/post-inspector/)

---

## Page URLs

| Page | English | Spanish |
|---|---|---|
| Homepage | imagebylui.com/ | imagebylui.com/es |
| Services | imagebylui.com/services | imagebylui.com/es/servicios |
| About | imagebylui.com/about | imagebylui.com/es/sobre-mi |
| Contact | imagebylui.com/contact | imagebylui.com/es/contacto |
| Blog | imagebylui.com/blog | imagebylui.com/es/blog |

### Services Page Anchors

| Section | English | Spanish |
|---|---|---|
| Free session | #power-palette | #power-palette |
| Starter ($400) | #first-impression | #primera-impresion |
| Signature ($1,800) | #identity-transformation | #transformacion-de-identidad |

---

*Built for Image by LUI. Content lives in data files. Components are reusable. Config is centralized.*
