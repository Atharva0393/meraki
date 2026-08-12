# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Meraki Designs
**Generated:** 2026-08-11 22:30:24 (corrected 2026-08-11 — see note below)
**Category:** Architectural Design / Property Development
**Design Dials:** Variance 3/10 (Centered / Minimal) | Motion 2/10 (Subtle) | Density 3/10 (Spacious)

> **Note:** The `ui-ux-pro-max` auto-generation categorized this as "Photography Studio" and proposed a pink accent + Cinzel/Josefin Sans pairing. Overridden below with the client-specified brand: warm ivory/stone, charcoal, restrained earthy accent, editorial serif + modern sans — correct for a premium UK architecture/property practice.

---

## Global Rules

### Color Palette

| Role | Hex | CSS Variable |
|------|-----|--------------|
| Primary (Charcoal) | `#211F1C` | `--color-primary` |
| On Primary | `#F6F1EA` | `--color-on-primary` |
| Secondary (Warm Grey) | `#6B655C` | `--color-secondary` |
| Accent/CTA (Clay) | `#A9673F` | `--color-accent` |
| Background (Ivory) | `#F6F1EA` | `--color-background` |
| Foreground (Ink) | `#1C1A17` | `--color-foreground` |
| Muted (Stone) | `#EDE6DA` | `--color-muted` |
| Border | `#DED5C4` | `--color-border` |
| Destructive | `#B3261E` | `--color-destructive` |
| Ring | `#211F1C` | `--color-ring` |

**Color Notes:** Warm ivory/stone background, charcoal ink for text and primary UI, restrained clay/terracotta accent used sparingly (CTA, small details) — never as a dominant fill. No gradients.

### Typography

- **Heading Font:** Fraunces (editorial serif — optical sizing, use `opsz` axis for display sizes)
- **Body Font:** Inter (modern, restrained sans-serif for UI/body copy)
- **Mood:** architectural, editorial, premium, quietly confident, contemporary British
- **Google Fonts:** [Fraunces + Inter](https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600&display=swap)
- **Implementation:** Load both via `next/font/google` (not a runtime `@import`) for zero layout shift and no extra network waterfall.

### Spacing Variables

*Density: 3/10 — Spacious*

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `4px` / `0.25rem` | Tight gaps |
| `--space-sm` | `8px` / `0.5rem` | Icon gaps, inline spacing |
| `--space-md` | `24px` / `1.5rem` | Standard padding |
| `--space-lg` | `32px` / `2rem` | Section padding |
| `--space-xl` | `48px` / `3rem` | Large gaps |
| `--space-2xl` | `64px` / `4rem` | Section margins |
| `--space-3xl` | `96px` / `6rem` | Hero padding |

### Shadow Depths

| Level | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle lift |
| `--shadow-md` | `0 4px 6px rgba(0,0,0,0.1)` | Cards, buttons |
| `--shadow-lg` | `0 10px 15px rgba(0,0,0,0.1)` | Modals, dropdowns |
| `--shadow-xl` | `0 20px 25px rgba(0,0,0,0.15)` | Hero images, featured cards |

---

## Component Specs

### Buttons

Pill-shaped (`border-radius: 9999px`). Two solid tiers by role, not by page position: **primary/conversion action** uses the clay accent as a full fill (not just a hover state); **secondary/nav action** uses solid charcoal. This mirrors the accent-vs-neutral button hierarchy common in editorial property sites, expressed in Meraki's own palette instead of a bright accent.

```css
/* Primary Button — main conversion CTA (e.g. "Start a Project") */
.btn-primary {
  background: #A9673F; /* clay */
  color: #F6F1EA;
  padding: 14px 28px;
  border-radius: 9999px;
  font-weight: 500;
  transition: background-color 200ms ease;
  cursor: pointer;
}

.btn-primary:hover {
  background: #211F1C; /* charcoal */
}

/* Secondary Button — nav / lower-emphasis actions */
.btn-secondary {
  background: #211F1C;
  color: #F6F1EA;
  padding: 10px 20px;
  border-radius: 9999px;
  font-weight: 500;
  transition: background-color 200ms ease;
  cursor: pointer;
}

.btn-secondary:hover {
  background: #A9673F;
}
```

### Pill Tags

Small badge-style tags (e.g. service pillars shown beside a hero image): outlined, not filled — `border: 1px solid rgba(33,31,28,0.2)`, `border-radius: 9999px`, `padding: 8px 16px`, `font-size: 12px`, charcoal text. An optional leading icon sits in its own circular outline of the same border style. Never more than 3–4 per group; these are wayfinding accents, not a stats block.

### Cards

```css
.card {
  background: #FAFAFA;
  border-radius: 12px;
  padding: 24px;
  box-shadow: var(--shadow-md);
  transition: all 200ms ease;
  cursor: pointer;
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}
```

### Inputs

```css
.input {
  padding: 12px 16px;
  border: 1px solid #E2E8F0;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 200ms ease;
}

.input:focus {
  border-color: #18181B;
  outline: none;
  box-shadow: 0 0 0 3px #18181B20;
}
```

### Modals

```css
.modal-overlay {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
}

.modal {
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: var(--shadow-xl);
  max-width: 500px;
  width: 90%;
}
```

---

## Style Guidelines

**Style:** Restrained Editorial Minimalism (adapted from Exaggerated Minimalism — toned down per client brief: elegant and restrained, not loud/statement-driven)

**Keywords:** Generous negative space, high contrast, editorial balance, quiet confidence, architectural scale

**Best For:** Architecture, property development, portfolios, luxury brands, editorial

**Key Effects:** headline font-size: clamp(2.5rem, 5vw, 5.5rem), font-weight: 400-500 (serif, not black), letter-spacing: -0.01em, generous whitespace

### Page Pattern

**Pattern Name:** Hero-Centric Design

- **Conversion Strategy:** One primary CTA. Hero is 60-80% above fold. Mobile: same hierarchy.
- **CTA Placement:** Hero dominant (center/bottom) + Sticky nav CTA
- **Section Order:** 1. Full-bleed Hero (headline + visual), 2. Single value prop strip, 3. Key benefit or proof, 4. Primary CTA

---

## Motion

**Scroll Reveal** (Subtle) — Trigger: scroll (viewport enter) | Duration: 300-400ms | Easing: `power1.out`

```js
gsap.from(el, { opacity: 0, y: 12, duration: 0.35, ease: 'power1.out', scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none reverse' } });
```

**Framework notes:** Requires the ScrollTrigger plugin registered once via gsap.registerPlugin(ScrollTrigger)

- ✅ Keep the y offset small (8-16px) so it reads as a fade, not a slide
- ❌ Don't reveal below-the-fold content needed for SEO/crawlers as invisible-by-default without a no-JS fallback
- ⚡ toggleActions 'play none none reverse' avoids re-triggering on every scroll direction change

---

## Anti-Patterns (Do NOT Use)

- ❌ Heavy text
- ❌ Poor image showcase
- ❌ Gradients
- ❌ Glassmorphism
- ❌ Excessive rounded cards / floating UI
- ❌ Fabricated statistics, awards, or testimonials
- ❌ Excessive or decorative-only animation
- ❌ Generic AI-imagery effects (oversaturation, fake bokeh, stock-photo gloss)

### Additional Forbidden Patterns

- ❌ **Emojis as icons** — Use SVG icons (Heroicons, Lucide, Simple Icons)
- ❌ **Missing cursor:pointer** — All clickable elements must have cursor:pointer
- ❌ **Layout-shifting hovers** — Avoid scale transforms that shift layout
- ❌ **Low contrast text** — Maintain 4.5:1 minimum contrast ratio
- ❌ **Instant state changes** — Always use transitions (150-300ms)
- ❌ **Invisible focus states** — Focus states must be visible for a11y

---

## Pre-Delivery Checklist

Before delivering any UI code, verify:

- [ ] No emojis used as icons (use SVG instead)
- [ ] All icons from consistent icon set (Heroicons/Lucide)
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover states with smooth transitions (150-300ms)
- [ ] Light mode: text contrast 4.5:1 minimum
- [ ] Focus states visible for keyboard navigation
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] No content hidden behind fixed navbars
- [ ] No horizontal scroll on mobile
