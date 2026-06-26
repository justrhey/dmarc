# DM ARC Construction Services — Landing Page

A premium, static single-page site for DM ARC Construction Services.
Built with **Vite + React + TypeScript + Tailwind CSS v4 + Motion (Framer Motion)**.

## Run it

```bash
npm install
npm run dev      # local dev at http://localhost:5173
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

## Deploy (free)

The `dist/` folder is fully static. Drag it into **Netlify** or run
`vercel` / `netlify deploy` — both have a free tier, so hosting costs nothing.

## Swapping in real content

Search the code for `SWAP:` comments. The key spots:

| What | Where |
|---|---|
| Logo | `public/dm-arc-logo.png` (real logo already in place) |
| Hero photo | `HERO_IMG` constant in `src/components/Hero.tsx` |
| Project photo / name / lot area | `PROJECTS` array in `src/components/FeaturedProject.tsx` |
| About copy | `src/components/About.tsx` |
| Contact details | `src/components/Footer.tsx` |

Hero and project images currently use Picsum seeded photography as
placeholders. Drop your real `.jpg`/`.png` photos in `public/` and point the
`src` / `image` value at them (for example `/hero.jpg`).

## Design notes

Built to the Taste Skill ruleset: geometric sans display (Space Grotesk) +
Manrope body, self-hosted via Fontsource (no external font links), Phosphor
icons (no emoji), restrained Motion that respects `prefers-reduced-motion`.

## Scope: what's included vs. what's a paid upgrade

**Included (this free one-time build):**
- Responsive single page: Header, Hero, About, Featured Project, Contact footer
- Premium olive theme + subtle scroll/hover motion
- Static, free-to-host

**Paid upgrades (future deploys):**
- The **"See more photos"** button is intentionally decorative for now — a real
  photo **gallery / lightbox** is a paid feature (see `// TODO (paid feature)`
  in `src/components/FeaturedProject.tsx`).
- A working **contact form** that sends email (currently the footer links to
  phone/email directly).
- A **multi-project portfolio**, CMS to edit content, blog, SEO package, etc.

---
Built via BMAD party mode 🎉
