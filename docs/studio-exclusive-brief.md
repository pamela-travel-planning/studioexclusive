# Studio Exclusive — Project Brief

**Client:** Studio Exclusive, luxusný kadernícky salón, Bratislava – Staré Mesto
**Owner/stylist:** solo operator (owner's mother)
**Current site:** https://www.studioexclusive-bratislava.com (Wix)
**Target:** Static site built with Claude Code, deployed to Netlify, existing domain repointed
**Language:** Slovak only (sk). No language switcher.

---

## 1. Context

The salon operated in Poprad for 20+ years with a team of hairdressers. A second, smaller studio opened in Bratislava (Staré Mesto) approx. 2 years ago, run solely by the owner. The Poprad studio closed in January 2026.

The business now focuses on an **invisible hair extension method** ("neviditeľná metóda") as its primary revenue stream:

- Extends hair from as short as a few centimetres to any desired length
- Does not damage hair or scalp; natural hair continues to grow with the extensions
- The stylist holds multiple certifications and applies the method in her own refined way — the only practitioner in Slovakia doing it this way
- Clients return every 3–4 months for maintenance ("fix up") of overgrown extensions
- Priced by length and number of columns added — premium pricing
- **Also very suitable for oncology clients** post-chemotherapy, as an alternative to wigs

The salon was featured in the magazine *Moje Zdravie* in an article about women's confidence during oncological treatment.

## 2. Goals

1. Replace the Wix site with a faster, better-designed, fully controlled site.
2. Position extensions as the flagship service, with cutting/colouring/treatment as supporting services.
3. Convert visitors into **free in-person consultation bookings** — the required first step before any extension appointment.
4. Communicate luxury and trust: certifications, before/after results, press feature, 20+ years of experience.

## 3. Tech stack

| Layer | Choice |
|---|---|
| Framework | Astro (static, minimal JS) or Next.js static export |
| Styling | Tailwind CSS with custom design tokens |
| Hosting | Netlify |
| Forms/booking backend | Netlify Functions |
| Calendar | Google Calendar API (write-only) |
| Email | Resend or Netlify + SMTP for confirmations |
| Analytics | Plausible or GA4 |

Static-first. Server logic only where booking requires it.

## 4. Booking system

**Flow:** Free in-person consultation (20–40 min) → then the extension appointment is scheduled directly with the stylist.

### Requirements

- Availability is defined in a **config file** (`src/config/availability.ts`) that the owner edits: working hours per weekday, slot length, buffer, blackout dates, holidays. **The site does not read her Google Calendar.**
- The booking form writes the confirmed appointment **into her Google Calendar** via a service account with domain-wide access to the target calendar, or an OAuth refresh token stored as a Netlify env var.
- Slots already written by the site are stored so they are not offered twice. Since we do not read her calendar, use a lightweight store (Netlify Blobs, or a JSON store) of booked slots.
- No deposit, no payment integration.
- Confirmation email to the client and notification email to the salon.
- Simple cancellation link in the confirmation email.

### Booking form fields

Meno a priezvisko · Telefón · E-mail · Súčasná dĺžka vlasov (approx.) · Želaná dĺžka · Krátka poznámka (optional) · Ako ste sa o nás dozvedeli (optional) · GDPR consent checkbox

### Config shape (illustrative)

```ts
export const availability = {
  slotMinutes: 40,
  bufferMinutes: 10,
  hours: {
    mon: [["08:00", "17:00"]],
    tue: [["08:00", "17:00"]],
    wed: [["08:00", "17:00"]],
    thu: [["08:00", "17:00"]],
    fri: [["08:00", "17:00"]],
    sat: [["07:00", "14:00"]],
    sun: [],
  },
  blackoutDates: ["2026-08-12"],
  leadTimeHours: 24,
  maxDaysAhead: 60,
};
```

Opening hours from the current site: Po–Pi 08:00–17:00, So 07:00–14:00.

## 5. Client records — OUT OF SCOPE

Hair history and payment records are handled in a **separate salon management tool** (Booksy / Fresha / Notion) that the owner logs into directly. The website stores **no client records**, has **no login area**, and holds **no health data**. This keeps GDPR exposure minimal — the site only processes booking form submissions.

## 6. Site structure

| Page | Path | Purpose |
|---|---|---|
| Domov | `/` | Hero, flagship service, press feature, results, CTA |
| Predlžovanie a zahusťovanie | `/predlzovanie-zahustovanie` | Flagship. Method, benefits, process, oncology note, pricing from, FAQ |
| Balayage | `/balayage` | Colour service |
| Ošetrenie | `/osetrenie` | Enzymoterapia |
| Výkup vlasov | `/vykup-vlasov` | Hair buying, min. 35 cm, free cut |
| Starostlivosť | `/starostlivost` | Aftercare for extensions |
| Cenník | `/cennik` | All prices as "od X €" |
| Náš príbeh | `/nas-pribeh` | History, certifications, press |
| Objednať sa | `/objednat-sa` | Booking flow |
| Kontakt | `/kontakt` | Address, map, hours, phone, email, socials |
| Kariéra | `/kariera` | Kept — she may hire again |
| Reklamačný poriadok | `/reklamacny-poriadok` | Legal, carry over |
| Ochrana osobných údajov | `/ochrana-osobnych-udajov` | New — GDPR for the booking form |

## 7. Content rules

**Do not rewrite existing Slovak copy without explicit approval.** Carry over the current text as-is. Where an improvement is proposed, present it side by side (current vs. proposed) and wait for a decision.

Existing copy to preserve:

- "Koruna Krásy" — hero headline
- "Zažite zázrak Luxusného Zahustenia a Predĺženia vlasov"
- "Metódou, ktorá konečne neničí vlasy"
- "Výsledný efekt neviditeľnej metódy je nádherný, objemný a popritom vôbec nezaťažuje a neničí Vaše vlastné vlasy ani korienky."
- The full *Moje Zdravie* paragraph about women's confidence during oncological treatment
- Balayage, Ošetrenie, and Výkup vlasov service descriptions
- "Objednajte sa tu", "sme tu pre Vás"

New copy needed (to be written and approved): oncology suitability line, consultation explanation, extension process steps, FAQ, aftercare expansion, privacy policy.

Meta title and description must drop Poprad and refocus on Bratislava + extensions.

## 8. Design direction

Luxurious, calm, editorial. Generous whitespace, large imagery, restrained motion. The physical studio uses soft arch shapes, dusty rose walls, and florals — echo this with arched image masks and soft radii.

### Colour tokens

```css
--espresso:  #6B4F4F;  /* body text, headings */
--rose:      #C48B8B;  /* primary brand, buttons */
--peach:     #EFC0AE;  /* warm accent */
--powder:    #F5E1E3;  /* section backgrounds */
--cream:     #FAF6F2;  /* page background */
--charcoal:  #2B2422;  /* footer, high-contrast type */
--stone:     #A69B96;  /* borders, muted labels, dividers */
```

Warm near-black rather than pure black or cold grey — pure `#000` beside dusty rose reads cold and cheap.

### Typography

- Headings: a high-contrast serif (Playfair Display, Cormorant Garamond, or similar)
- Body: a clean humanist sans (Inter, Satoshi)
- Must support Slovak diacritics: ľ ť ď ň š č ž ý á í é ó ú ä ô ĺ ŕ

### Components

Arched image cards · Before/after slider · Certification badges · Press feature block · Sticky "Objednať konzultáciu" CTA on mobile · Instagram grid · FAQ accordion

## 9. Instagram section

Handle: [@studioexclusive.sk](https://www.instagram.com/studioexclusive.sk/)

**Live feed via Instagram Graph API.** Basic Display was deprecated in December 2024, so the Graph API is the only current path. It requires the account to be a Business or Creator account linked to a Facebook Page, plus a Meta Developer app.

Implementation: fetched at **build time** by a daily scheduled Netlify build, cached to JSON, rendered statically. A scheduled function refreshes the 60-day long-lived token every 30 days. If the API fails, a hardcoded fallback grid renders instead — the section never appears empty or broken.

**Maintenance reality:** this is the one part of the site with an ongoing failure mode. Tokens expire, Meta changes API terms. The fallback grid means a lapse degrades to older photos rather than a visible break, but someone should check it quarterly.

## 10. Pricing

All prices displayed as **"od X €"**. Numbers to be supplied by the client. Extension pricing must state that final price depends on length and number of columns and is confirmed at the free consultation.

Placeholders needed for: konzultácia (zdarma) · predlžovanie/zahusťovanie · fix-up (3–4 mesiace) · strihanie · farbenie · balayage · enzymoterapia · svadobné a stužkové účesy.

## 11. Assets

- Original photography available from the client
- Logo — confirm vector/PNG availability
- Product brand logos to carry over: Color Wow, Urban Alchemy, Maria Nila, Olaplex, Redken, cruelty-free/vegan badge
- Press screenshots from *Moje Zdravie*

## 12. SEO & technical

- Slovak `lang="sk"`, hreflang `sk-SK`
- LocalBusiness / HairSalon structured data with address, hours, phone, geo
- Target terms: predlžovanie vlasov Bratislava, zahusťovanie vlasov, neviditeľná metóda, predlžovanie vlasov po chemoterapii, luxusný kadernícky salón Bratislava
- Google Business Profile linked
- Redirect map from all old Wix URLs (including the `copy-of-*` ones) to new paths — 301s
- Lighthouse target: 95+ across the board
- Images: AVIF/WebP, lazy-loaded, explicit dimensions
- Cookie banner only if analytics requires consent; prefer cookieless analytics to avoid a banner

## 13. Migration checklist

1. Build and deploy to a Netlify preview URL
2. Client review and copy approval
3. Configure Google Calendar credentials as Netlify env vars
4. Test booking end to end: form → calendar event → confirmation emails
5. Set up 301 redirects
6. Repoint DNS from Wix to Netlify
7. Verify SSL, submit sitemap, update Google Business Profile
8. Keep Wix live for one week as a fallback, then cancel

## 14. Open items

- **Price numbers** — needed for `src/config/pricing.ts`
- **Instagram account type** — confirm @studioexclusive.sk is a Business or Creator account linked to the existing Facebook Page. If not, this must be switched in Instagram settings before the feed can work.
- **Meta Developer app** — needs creating; generates the app ID, secret, and initial long-lived token
- **Logo vector file** — SVG preferred, high-res PNG acceptable
- **Exact street address** in Staré Mesto for Kontakt and structured data
- **Which salon management tool** she will use for client records (Booksy / Fresha / Notion)
- **Google Calendar access** — which calendar receives bookings, and service account setup
- **Photo assets** — originals delivered, especially before/after pairs and studio interior
- **Kariéra page content** — what should it say now that she works alone?
