# TotalEnergies Kijujumbwa

A responsive station website built with Next.js 16 App Router, React and TypeScript. Soft ivory, rose and sage surfaces, Nunito headings, the supplied local TotalEnergies body font and logo, and locally served WebP imagery. All informational routes are prerendered; only navigation, the hero carousel and accessible product/service dialogs use client components.

## Run locally

```sh
npm ci
npm run dev
```

For the production server:

```sh
npm run build
npm run start
```

Use the URL printed by Next.js. `npm run lint` and `npx tsc --noEmit` run static checks. The installed Next.js version has newer conventions: consult `node_modules/next/dist/docs/` before changing framework APIs.

## Editable content

| File                            | Edit here                                                                                                                                                                          |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `content/station.ts`            | Name, legal operator, locality, phone, international telephone, WhatsApp digits, email, hours, schema hours, address, map URL, coordinates, copyright year and verification status |
| `content/offerings.ts`          | Product/service names, summaries, details, image paths, descriptive alt text and confirmation flags                                                                                |
| `content/policies.ts`           | Privacy, terms and cookie policy wording, provider and retention details                                                                                                           |
| `app/globals.css`               | Shared colour tokens, type, spacing, responsive layouts and component styles                                                                                                       |
| `public/images/`                | Local station and product images                                                                                                                                                   |
| `public/fonts/`                 | Supplied official font                                                                                                                                                             |
| `public/totalenergies.svg` | Supplied logo (used without recreating the wordmark)                                                                                                                               |

Product and service entries share one type and one accessible dialog. Add an entry to the arrays to create its card/row and modal. Delete unavailable offerings rather than marking them confirmed. Check service icon choices when adding or reordering service entries. The native dialog makes background content inert; explicit Tab cycling, Escape, close/backdrop actions and focus restoration support keyboard use. Its contents are server-rendered in initial HTML.

`hours` is the human-readable schedule; `schemaHours` is its matching schema.org format. Update both together. Contact links are derived from the central station object. Use international telephone formatting and digits only for WhatsApp.

## Review status and launch

This checkout is a **review version, not a publicly launched site**. The brief supplied the phone, WhatsApp number, email and 24-hour schedule; their accuracy has not independently been verified. Exact address, verified map pin, coordinates, legal operator and offerings remain unconfirmed. Directions therefore use a clearly labelled call action, never an invented pin. Proposed offerings and representative imagery are explicitly labelled.

1. Obtain operator confirmation and update every station field. Confirm that the supplied email is the correct station contact and that the WhatsApp number is a business contact. Populate `address`, `mapUrl` and `coordinates`.
2. Confirm each retained product/service and its exact details, then set its `confirmed` flag. Remove unavailable offerings.
3. Replace representative imagery with approved station/product photography, or obtain approval for continued representative use. Update alt text, image disclosure and social image description accordingly. Confirm permission to use brand assets.
4. Finalize operator-specific policies. Identify the actual hosting provider, enquiry/log retention and any international processing. Audit cookies on the final deployment. Replace pending/draft wording, then set `policiesReviewed: true`.
5. Set `verified: true` only after the station information is confirmed.
6. Configure the final HTTPS origin as `NEXT_PUBLIC_SITE_URL` (origin only, no path) and `SITE_PUBLISHED=true` in the hosting environment, then rebuild. The build fails if required verification fields are missing.
7. Deploy on a Node-compatible Next.js host (for example Vercel, or a Node server running the commands above). Enable hosting-level password/access protection for review deployments. `noindex` is **not** access protection. No hosting service has been provisioned by this implementation.
8. On public launch remove hosting protection and verify accessibility without sign-in. Check each canonical and social URL, `/robots.txt`, `/sitemap.xml`, and GasStation JSON-LD against real station information. Then connect the verified business listing/search console if desired.

When `SITE_PUBLISHED` is absent/false, pages are `noindex, nofollow`, robots disallows crawling, and the XML sitemap is intentionally empty. Canonicals are omitted until a real origin is configured. No origin or geographic information is fabricated. On verified public builds all six canonical pages are listed, indexing is enabled, and matching local-business JSON-LD is emitted. `/sitemap` is always a useful human-facing navigation page.

## Replace images

The four images were generated with the built-in image-generation tool for this review. They are not actual station photographs or definitive branded product packaging. The hero shows a representative rural Ugandan forecourt in soft morning light; products show a red fuel nozzle, a TotalEnergies-branded graphite lubricant bottle on sage and a red LPG cylinder with white TotalEnergies branding on sand. No remote image hosts are used.

Replace `station.webp` with a 1200 × 900 WebP (target ≤150 KB), and `fuels.webp`, `lubricants-branded.webp`, `cooking-gas-branded.webp` with 720 × 480 WebPs (target ≤60 KB each). Preserve filenames or update the content paths. Update descriptions and image credits when replacing assets. Next.js generates responsive sizes; the hero loads eagerly with high fetch priority and below-fold images are lazy-loaded. Assets currently total approximately 176 KB for these four source WebPs. The supplied body font is about 32 KB. Nunito is loaded through `next/font/google`: downloaded at build time and self-hosted, with no browser requests to Google. Building requires access to Google Fonts.

## Application privacy

There are no forms, accounts, trackers, advertising, embedded maps, external font requests, cookie writes or local-storage persistence in application code. WhatsApp, telephone and email use ordinary links. Hosting behaviour and external-service privacy must still be reviewed. No consent banner is shown because the application has no optional tracking.

## Validation

Production build, TypeScript and ESLint are checked. Browser QA covers all six pages at 360, 768 and 1440 px, horizontal overflow, all six dialogs, Tab containment, Escape, close/backdrop, focus restoration, mobile navigation, contact destinations and review metadata. Lighthouse mobile results are laboratory measurements on the local production build, not real-user Core Web Vitals. Final local mobile Lighthouse run: performance 96, accessibility 100, best practices 100; transfer 298 KiB, LCP 2.8 s, CLS 0, total blocking time 20 ms. The 90+ performance target passes; the 2.5 s LCP aspiration is not yet met in this lab run. SEO scored 66 because review mode intentionally blocks indexing. All route, viewport, dialog, navigation and console checks passed in Chromium; Safari/Firefox, real devices and deployed hosting have not been tested.

## Hero carousel

`content/hero.ts` defines the carousel images and their matching journey-strip messages. `components/HeroExperience.tsx` shares the active slide between the carousel and animated ticker. The three slides are: the station, a mechanic servicing a car, and a Black man and woman shopping in a convenience store. The latter two images were generated with the built-in image-generation tool in a warm, realistic Ugandan setting to match the hero. Assets live at `public/images/mechanic.webp` and `public/images/store.webp`; all carousel scenes are labelled as AI-generated representative imagery, not verified station facilities.

Slides crossfade with a subtle zoom and advance every six seconds. Hover/focus pauses rotation; manual navigation stops autoplay until Play is selected. Arrow keys and slide selectors support keyboard navigation. Red outlined indicators, a filled active pill and an icon-only pause/play button overlay the bottom-left of the image without a control background. A dark bottom-to-top gradient sits over the images; compact indicators use closely spaced controls with 44px-tall click targets. Reduced-motion preferences disable transitions and autoplay. The first image loads eagerly with high priority; subsequent images lazy-load, and automatic advancement waits for the next image to load. No animation library is required.
