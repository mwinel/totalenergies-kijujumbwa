# TotalEnergies Petrol Station Website Specification

Build a fast, mobile-friendly or mobile responsive website for an individual TotalEnergies-branded (TotalEnergies Kijujumbwa) petrol station in Uganda. The primary goal is local visibility: help visitors understand what the station offers, find its location and contact the team.

Use the existing [station website](https://total-station-nelson.nelsonmwirumubi.chatgpt.site) as the visual reference. This specification describes the intended finished website; station details and service availability must be confirmed before public launch.

# Goals and scope

The website should make three actions easy: explore products and services, get directions, and contact the station. Keep the navigation simple and the page count small.

Include Home, Contact, Privacy Policy, Terms of Use, Cookie Policy and a visitor-facing Sitemap. Products and Services are sections on the home page; each item opens a detail modal rather than a separate page.

Do not add accounts, online payments, bookings, live fuel prices, a blog, a CMS or an administration dashboard to the initial scope.

Make sure the website is SEO friendly.

# Station information required

Replace the following placeholders with verified information. Store the details centrally so the header, contact page, footer and SEO data remain consistent.

| Field | Placeholder |
| --- | --- |
| Station display name | TotalEnergies Kijujumbwa |
| Legal operator name | TotalEnergies Kijujumbwa |
| Street address and local area | [ADDRESS], [AREA], [CITY] |
| Country | Uganda |
| Map coordinates or verified map pin | [LATITUDE], [LONGITUDE], [MAP_URL] |
| Public telephone number | 0705 777086  |
| WhatsApp number if available | 0705 777086 |
| Public email address | info@totalenergies.com |
| Operating hours | 24 hours |
| Confirmed products and services | [PRODUCTS], [SERVICES] |
| Public website origin | [SITE_URL] |

Do not invent contact details, prices, testimonials, opening hours or service availability. In the review version, clearly identify missing information. Do not release a public version with placeholder contact details.

# Technical implementation

Use Next.js App Router with React and TypeScript. Prefer static generation for informational pages and server-rendered content where necessary. Limit client components to interactions such as modals and mobile navigation.

Suggested source organization:

```text
app/
  layout.tsx
  page.tsx
  contact/page.tsx
  privacy/page.tsx
  terms/page.tsx
  cookies/page.tsx
  sitemap/page.tsx
components/
  Header.tsx
  Footer.tsx
  ProductServiceModal.tsx
  ProductGrid.tsx
  ServiceList.tsx
content/
  station.ts
  products.ts
  services.ts
public/
  images/
  favicon.svg
```

Also provide /sitemap.xml and /robots.txt, using the framework’s metadata routes or equivalent generated files.

# Visual direction

Use [TotalEnergies Uganda](https://totalenergies.ug/) as a branding reference. The design should feel clean, welcoming and professional, with generous white space and realistic imagery.

| Element | Suggested treatment |
| --- | --- |
| Primary accent | Bright red, approximately #ED1B2F |
| Secondary accent | Blue, approximately #007CBA |
| Main text | Dark navy, approximately #192D43 |
| Backgrounds | White and very light grey |
| Buttons | Red background, white text, modest rounded corners |
| Cards | Soft neutral backgrounds, subtle borders, 10–12 px corners |
| Typography | Clear sans-serif with a strong heading hierarchy |
| Motion | Subtle hover changes; respect reduced-motion preferences |

These colours are implementation approximations, not an official brand guideline. Use approved logo assets supplied by the operator. Avoid recreating the official logo with styled text.

At desktop widths, use a centered layout with comfortable horizontal gutters. At narrow widths, stack content naturally and preserve readable text and touch targets.

# Home page

## Header

Display the brand logo and station identity, links to Home, Products, Services and Contact, and a prominent “Find our station” action. Products and Services scroll to their respective sections. On other pages, they link back to the relevant home-page anchor.

On mobile, use a compact menu or clearly spaced navigation that fits without horizontal scrolling.

## Hero

Use a split layout: headline and supporting copy on the left, a realistic station photograph on the right. Stack these on mobile.

Suggested headline: “A better stop. A brighter journey.”

Suggested supporting copy: “From your morning commute to the long road ahead. Discover energy and everyday essentials, all in one convenient stop.”

Primary action: “Find our station”, linking to Contact or the verified map location. Secondary action: “Explore our products”, scrolling to Products.

Keep text readable independently of the image. Reserve image dimensions to avoid layout shifts.

## Benefits strip

Add a slim red strip with short statements such as “Fuel for the road”, “Care for your engine” and “Energy for your home”. Show only statements supported by the confirmed station offering.

## Products

Heading: “Good energy. For every part of life.”

Show three cards, subject to confirmation: Fuels, Lubricants and Cooking Gas. Each card includes a realistic image, title, short description and “Explore product” action. Clicking a card opens its detail modal.

Use a three-column layout on desktop and a single column on small screens.

## Services

Heading: “More than a fuel stop.”

Use a simple list with a service title, one-line description and arrow action. Candidate services include forecourt assistance, vehicle care and everyday essentials. Include only confirmed services. Each item opens a detail modal.

## Visit call to action

Heading: “Make us part of your everyday.”

Provide a concise invitation to visit or enquire, with a “Visit & contact us” action linking to Contact.

## Footer

Include station identity, contact information, copyright, and links to Contact, Privacy, Terms, Cookie Policy and Sitemap. Make the station operator clear and distinguish this station website from the corporate TotalEnergies Uganda website.

# Product and service modals

Every product and service item must open a modal containing its title, relevant description, available options or service details, a contact action and a visible close button.

Examples of content to confirm:

- Fuels: available petrol and diesel grades; refer visitors to the station for current prices.

- Lubricants: available ranges and pack sizes; advise visitors to follow their vehicle manufacturer’s specification.

- Cooking Gas: available cylinder sizes, refills and accessories.

- Vehicle care: the exact checks or services offered and any relevant operating hours.

Use an accessible dialog with a programmatically associated title. Move keyboard focus into the modal, keep focus within it while open, close on Escape, and restore focus to the triggering item after closing. Support the close button and backdrop click. Prevent background scrolling and allow the modal content to scroll on small screens.

Render product and service descriptions in the initial HTML, including the dialog content where appropriate, so essential information is not dependent solely on a click. Retain the requested modal experience without creating extra detail pages.

# Contact page

Display the full station name, address, phone number, email and confirmed opening hours. Include WhatsApp only if the operator supplies a business number.

Provide working actions:

- “Call the station” using a tel link.

- “Email us” using a mailto link.

- “Get directions” using the verified map location.

- “Chat on WhatsApp” when applicable.

Use a lightweight location panel and an external directions link by default. An interactive map may load only after the visitor requests it to avoid an unnecessary initial download.

Do not include a contact form unless a real submission destination, validation, spam protection and privacy handling are implemented.

# Images and content

Use a realistic station hero photograph and realistic imagery for fuel, lubricants and cooking gas. Prefer photos of the actual station and approved product photography when available.

AI-generated images may be used for the review version, but identify them as representative and do not present them as photographs of the actual premises or definitive product packaging.

Provide WebP or AVIF images with responsive sizes, explicit width and height, and descriptive alt text. Load the hero eagerly with appropriate priority; lazy-load images below the fold.

Suggested image budgets: hero at or below 150 KB and product images at or below 60 KB each where visual quality permits. Avoid hotlinking images and do not use unnecessary image carousels, background videos or decorative animations.

# Performance requirements

Treat speed as a core acceptance requirement, especially on mobile connections.

- Generate informational content ahead of time where practical.

- Keep JavaScript small; load only the code needed for interactive elements.

- Avoid external font requests where a system font meets the design.

- Avoid third-party widgets and trackers by default.

- Cache versioned assets and serve them through the hosting platform’s CDN.

- Keep the initial page transfer below approximately 1 MB as a project target.

- Target a Lighthouse mobile performance score of at least 90 on a production build.

Target Core Web Vitals at the 75th percentile when field data becomes available: LCP at or below 2.5 seconds, INP at or below 200 milliseconds and CLS at or below 0.1. Before field data exists, report laboratory checks as preliminary results rather than proof of real-user performance.

# Search engine optimization

Use unique page titles and descriptions, a canonical URL for each page, Open Graph metadata, a favicon, one clear H1 per page and a logical heading hierarchy.

The home-page title should identify the real station and locality, for example: “[STATION_NAME] Petrol Station in [AREA], [CITY]”.

Include verified local business information in visible content and matching JSON-LD using an appropriate GasStation schema type. Populate name, address, URL, phone, geographic coordinates and opening hours only when supplied and confirmed. Do not add invented ratings or reviews.

Provide /sitemap.xml containing all indexable canonical pages. Do not list home-page fragments as separate pages. Provide /robots.txt referencing the XML sitemap and a visitor-facing /sitemap page linked from the footer.

For public launch, ensure the site is accessible without sign-in and does not carry a noindex directive. Keep a private review deployment protected; it cannot serve the public visibility goal while access is restricted.

Use the final public origin consistently in canonical URLs, sitemap entries and structured data. Verify local business details before connecting the site to a business listing or search-console account.

# Policy pages

Provide concise, operator-specific Privacy, Terms and Cookie Policy pages.

Privacy must reflect information actually collected, the purpose of processing, relevant service providers, retention arrangements and a contact for requests.

Terms must identify the operator, explain the informational nature of the site and clarify that product availability, prices and service details should be confirmed at the station.

The Cookie Policy must reflect actual application and hosting behaviour. Do not claim that no cookies are used without checking the deployed site. If optional tracking is added, implement the appropriate consent controls before enabling it.

Keep policy drafts clearly identified during review. Complete operator details and review policy wording before public launch.

# Acceptance criteria and handover

The website is ready when:

- [ ] The required pages exist and all links work.

- [ ] Products and Services are home-page sections with working detail modals.

- [ ] Modals work with keyboard controls, Escape, focus containment and focus restoration.

- [ ] Layouts work at 360 px, 768 px and 1440 px without horizontal page overflow.

- [ ] Station details, map location, hours and offerings are verified.

- [ ] Images load correctly, remain sharp and stay within the agreed budgets.

- [ ] Call, email, directions and any WhatsApp actions use the correct destinations.

- [ ] Page metadata, canonical URLs, XML sitemap, robots file and local business data are checked.

- [ ] The production build succeeds with no broken routes or browser errors.

- [ ] Performance checks are run against the production build and recorded.

- [ ] Policy wording reflects the implemented website.

- [ ] The final public site is accessible without authentication.

Handover must include the source repository, deployment instructions, asset files, a list of editable station fields and a short guide for replacing images and updating products, services and hours.

# Copyable builder prompt

```text
Build a fast, responsive website for [STATION_NAME], a TotalEnergies-branded petrol station at [ADDRESS], [AREA], [CITY], Uganda.

Use Next.js App Router, React and TypeScript. If deploying through Sites, use its supported Next.js-compatible runtime and state any compatibility differences.

Keep the site small: Home, Contact, Privacy, Terms, Cookie Policy and a visitor-facing Sitemap. Products and Services belong on the home page. Every product or service item must open an accessible detail modal rather than a new page.

Use a clean red-and-white design with dark navy text and blue accents, inspired by https://totalenergies.ug/. Use approved logo assets. Create a split hero, a slim benefits strip, realistic product cards, a simple service list, a visit call to action and a restrained footer.

Use realistic imagery for the station, fuel, lubricants and cooking gas. Prefer actual station photos and approved product images. Clearly identify generated imagery as representative. Compress images, use responsive sources and lazy-load below-the-fold assets.

Make station information centrally editable. Do not invent contact details, prices, hours, reviews or available services. Use placeholders for anything missing.

Include working call, email and directions links once details are supplied. Do not add a contact form without a real submission destination.

Provide unique titles and descriptions, canonical URLs, social metadata, verified GasStation JSON-LD, /sitemap.xml and /robots.txt. Ensure essential content is present in the initial HTML.

Use minimal client JavaScript and no unnecessary trackers, external fonts or heavy widgets. Target Lighthouse mobile performance of 90 or above and test the production build.

Follow the full specification for modal behaviour, accessibility, policy accuracy, responsive layouts and acceptance checks. Deliver the complete source and deployment instructions. Prepare a private review version first; the final visibility-focused release must be publicly accessible.
```

# WhatsApp intergration

Add a whatsapp intergration from the website

# Official font

Use the official total font. Find the font in the public/fonts folder.

# Official logo

For the logo use the one in the public folder called "totalenergies-logo.png