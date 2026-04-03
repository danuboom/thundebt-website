# Astro Landing Starter

A clean bilingual landing page template built with Astro 6, Tailwind CSS 4, and DaisyUI 5.

## Features

- Astro 6 static output
- **Built-in Fonts API** — Inter (EN) + Noto Sans Thai (TH) via Fontsource, self-hosted at build time
- Tailwind CSS 4 + DaisyUI 5 component styling
- EN/TH localization with Astro i18n (`/` and `/th/`)
- Auto language detection on first visit (with saved preference)
- **Dark / light mode toggle** with system preference fallback
- Scroll spy navbar (active section highlighting)
- **Scroll-to-top button** (appears after scrolling past the fold)
- Hero section with gradient text and staggered fade-in animation
- SEO-ready layout with:
	- Canonical URL
	- Open Graph tags
	- Twitter card tags
	- `hreflang` alternate links for EN/TH + `x-default`
- Config-driven content via one file
- Contact form integration via Web3Forms
- Config-driven social links with official SVG brand icons

## Tech Stack

- Astro `6.x`
- Tailwind CSS `4.x`
- DaisyUI `5.x`
- TypeScript

## Quick Start

```sh
npm install
npm run dev
```

Open `http://localhost:4321`.

## Project Structure

```text
src/
	components/
		Navbar.astro
		ScrollToTop.astro
		SocialIcon.astro
		sections/
			Hero.astro
			About.astro
			Services.astro
			Process.astro
			Contact.astro
	config/
		siteConfig.ts
	layouts/
		Layout.astro
	pages/
		index.astro
		th/index.astro
	styles/
		global.css
```

## Fonts (Astro 6 Built-in Fonts API)

This template uses Astro 6's [built-in Fonts API](https://docs.astro.build/en/guides/fonts/) instead of external CDN `<link>` tags.

### How it works

1. Fonts are declared in `astro.config.mjs` via `fontProviders.fontsource()`:

   ```js
   import { defineConfig, fontProviders } from "astro/config";

   export default defineConfig({
     fonts: [
       {
         provider: fontProviders.fontsource(),
         name: "Inter",
         cssVariable: "--font-inter",
       },
       {
         provider: fontProviders.fontsource(),
         name: "Noto Sans Thai",
         cssVariable: "--font-noto-sans-thai",
       },
     ],
   });
   ```

2. The `<Font />` component is included in `Layout.astro`:

   ```astro
   ---
   import { Font } from "astro:assets";
   ---
   <Font cssVariable="--font-inter" preload />
   <Font cssVariable="--font-noto-sans-thai" preload />
   ```

3. CSS variables are registered in `global.css` for Tailwind 4:

   ```css
   @theme inline {
     --font-sans: var(--font-inter), var(--font-noto-sans-thai), ui-sans-serif, system-ui, sans-serif;
   }
   ```

### Benefits

- **Self-hosted**: Font files are downloaded at build time and served from your own domain — no runtime calls to Google Fonts.
- **Privacy**: No user data sent to third-party font CDNs.
- **Performance**: Preload hints and optimized fallback fonts are generated automatically.
- **Thai support**: Noto Sans Thai renders Thai script correctly throughout the `/th/` locale.

### Changing fonts

1. Find a font on [Fontsource](https://fontsource.org/).
2. Update the `fonts` array in `astro.config.mjs`.
3. Update the CSS variable in `global.css`.

## Configuration

All business data and content live in `src/config/siteConfig.ts`.

Update these top-level areas:

- `businessName`, `siteUrl`, `phone`, `email`
- `seo`:
	- `titleTemplate`, `defaultTitle`, `defaultDescription`
	- `ogImage`, `twitterHandle`, `keywords`
- `theme`:
	- DaisyUI themes (`default`, `dark`)
- `socials`:
	- List of social entries with `platform`, `url`, and `svg`
	- Set `url` to `""` to hide a platform
- `footer.links`:
	- Footer navigation links
- `mapEmbedUrl`, `mapLink`
- `web3formsKey`
- `locales.en` and `locales.th`:
	- Navigation labels
	- Hero/About/Services/Process content
	- Contact section labels and form messages

## Sections

| Section | File |
|---|---|
| Hero | `src/components/sections/Hero.astro` |
| About | `src/components/sections/About.astro` |
| Services | `src/components/sections/Services.astro` |
| Process | `src/components/sections/Process.astro` |
| Contact | `src/components/sections/Contact.astro` |

Contact details (phone, email, socials) are rendered in one harmonized card style from config.

## Dark Mode

A sun/moon toggle in the navbar switches between DaisyUI themes:

- **Light**: `corporate` (default)
- **Dark**: `business`

Preference is saved to `localStorage` (`theme-pref`). On first visit, the system's `prefers-color-scheme` is respected.

To change themes, update:
1. `global.css` — the `@plugin "daisyui"` directive
2. `siteConfig.ts` — `theme.default` and `theme.dark`
3. `Navbar.astro` — the `LIGHT` and `DARK` constants

## i18n Notes

- English is served at `/`
- Thai is served at `/th/`
- Language switch writes preference to `localStorage` (`lang-pref`)
- First visit can auto-redirect based on `navigator.languages`

To make this English-only:

1. Remove `src/pages/th/index.astro`.
2. Remove `i18n` config from `astro.config.mjs`.
3. Remove `th` locale content from `src/config/siteConfig.ts`.
4. Remove the language toggle in `src/components/Navbar.astro`.

## SEO Notes

`src/layouts/Layout.astro` handles metadata and locale alternates for both languages.

Set these correctly for production:

1. `siteUrl` in config
2. `seo.ogImage` path
3. `seo.defaultTitle` and localized page titles
4. `seo.defaultDescription` and localized descriptions

## Build

```sh
npm run build
```

Static output is generated in `dist/`.

## Deploy

Deploy `dist/` to any static host (Vercel, Netlify, GitHub Pages, Cloudflare Pages, etc.).