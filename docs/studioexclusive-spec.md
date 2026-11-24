# StudioExclusive — Design Spec

> Single source of truth for design decisions, section lock status, and pending work.
> See `studio-exclusive-brief.md` for full project brief and business context.

---

## Brand tokens (locked)

These colors come directly from Pam's color swatches — do not change without explicit approval.

```css
--blush: #FADDDD;   /* light pink — section backgrounds (press, services) */
--mocha: #503C35;   /* dark brown — nav, extensions section, footer, buttons */
--mauve: #C2B2B4;   /* dusty rose-gray — nav background, text on dark sections */
--black: #000000;   /* hero background */
--white: #ffffff;   /* contact section, footer bottom */
```

## Fonts (locked — 2 only)

- **League Spartan** — headings, nav, labels, buttons, body text
  - Weights used: 200, 300, 400, 500, 700
- **Playfair Display** — italic only, for the "Krásy" style decorative italic in headings
  - Weights: 300i, 400i, 500i

No other fonts. Alegreya SC was removed.

---

## File: `public/se-wix-copy.html`

A self-contained single-file pixel copy of the live Wix site at https://www.studioexclusive-bratislava.com — all CSS and JS inline, no build step required. Used as a design reference and client preview during the rebuild.

---

## Section-by-section status

### Nav — ✅ locked
- Background: `--mauve` (`#C2B2B4`)
- Height: 88px, fixed to top
- Left pill (SK flag + "SK"): solid blush, border-radius 24px
- Right pill ("MENU" + mocha dot): solid blush, border-radius 300px, uppercase, letter-spacing .18em
- Logo/brand: not shown in nav (matches original)

### Hero — ✅ locked
- Background: `--black`
- Heading: "Koruna *Krásy*" — "Koruna" in mauve, "Krásy" in italic Playfair Display at 1.1× size, also mauve
- Subtitle: "Zažite zázrak Luxusného Zahustenia a Predĺženia vlasov" — mauve, League Spartan 300
- No hero image yet (Pam to supply original photo from Wix site)

### Hero → Press transition — ✅ locked
- Shape: single smooth dome arch (cubic Bezier, symmetric)
- Path: `M0,260 C360,20 1080,20 1440,260`
- Fill: solid `--blush` (`#FADDDD`)
- Height: 260px SVG viewBox
- Background of container: `--black` (so arch appears as blush rising into black)

### Press ("Napísali o Nás") — ✅ locked
- Background: `--blush`
- Heading: "Napísali *o Nás*" — mocha, Playfair italic for "o Nás"
- Card background: `--mocha`
- Card title "Moje Zdravie": Playfair italic, blush color
- Card body text: `--mauve`, League Spartan 300, centered

### Services ("Naše Služby") — ✅ locked
- Background: `--blush`
- Section heading: "Naše *Služby*" — mocha
- Services list (left image, right text layout):
  - Category label: mocha, 1.05rem, letter-spacing .16em, uppercase
  - Body text: `--dark-body` (= `--mocha`), 300 weight
  - Button: mocha background, white text, 50px pill, 1rem font
- Services: Predlžovanie/Zahusťovanie · Výkup Vlasov · Balayage · Strihanie · Ošetrenie

### Blush → Mocha transition — ✅ locked
- Shape: tall dome arch
- Fill: `--mocha`, rises into blush section
- Path: `M0,200 Q720,0 1440,200`

### Extensions ("Zahusťovanie a Predlžovanie") — ✅ locked
- Background: `--mocha`
- Heading "Zahusťovanie / *a Predlžovanie*": mauve
- Subtitle: mauve, lighter weight
- Circular image placeholders: mauve circles (real photos pending)
- Button: blush outline pill

### Location ("Nájdete nás v Bratislave") — ✅ locked
- Background: `--blush`
- Heading: mauve
- Social icons: Instagram + Facebook — mocha circle buttons
- Google Maps embed: placeholder mocha block (real embed pending address)

### Mocha → Blush wave (before contact) — ✅ locked
- S-curve wave, mocha background, blush fill above
- Transitions into contact section

### Contact ("Kontaktujte nás") — ✅ locked
- Background: `--mocha`
- Heading: "*Kontaktujte* nás" — mauve, Playfair italic
- Subtitle: "sme tu pre Vás" — mauve
- Input fields: blush background, rounded, no border
- Submit button: blush background, mocha text, pill shape

### Mocha → White wave (before footer) — ✅ locked
- S-curve, fill white, background mocha

### Footer — ✅ locked
- Background: `--blush`
- "FONTAKT" label + contact icons (phone, email, Instagram, Facebook): mauve
- "COMPANY BRANDS" label: mauve
- Brand name "WOW": League Spartan 300, mocha, large
- Brand pills (Urban Alchemy, Cruelty Free & Vegan, Vegan, Maria Nila Stockholm, Seller, Olaplex, Redken): mocha outline, small text
- "REKLAMAČNÝ PORIADOK" link: top-right, mocha, small caps

---

## Pending / open items

| Item | Status |
|---|---|
| Hero background photo | ⏳ Pam to supply (original from Wix) |
| Services section images | ⏳ Pam to supply real photos |
| Extension circular photos | ⏳ Pam to supply before/after shots |
| Google Maps embed | ⏳ Awaiting confirmed Bratislava address |
| Booking system | ⏳ See `studio-exclusive-brief.md` §4 |
| Instagram live feed | ⏳ Requires Meta Developer app setup |
| Astro rebuild from HTML copy | ⏳ Not started — HTML copy is design reference |

---

## Workflow rules

- `public/se-wix-copy.html` — design reference / client preview, self-contained
- Do not edit files directly on GitHub.com
- Never push unless Pam says "push" or "make it live"
- All design changes: agree in text/mockup first, then implement
- Slovak copy: preserve existing text unless Pam approves a change
- Prices: do not add any figures — placeholder "od X €" only
