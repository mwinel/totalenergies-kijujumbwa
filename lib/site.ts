import type { Metadata } from "next";
import { station } from "@/content/station";
import { products, services } from "@/content/offerings";

const configuredOrigin = process.env.NEXT_PUBLIC_SITE_URL;
export const siteOrigin = configuredOrigin
  ? new URL(configuredOrigin).origin
  : null;
export const isPublic = process.env.SITE_PUBLISHED === "true";
if (
  isPublic &&
  (!siteOrigin ||
    !station.verified ||
    !station.policiesReviewed ||
    !station.address ||
    !station.mapUrl ||
    !station.coordinates ||
    [...products, ...services].some((item) => !item.confirmed))
) {
  throw new Error(
    "Public launch requires a site origin, verified station details, map location, reviewed policies and confirmed offerings. See README.md.",
  );
}
export const pages = [
  { href: "/", label: "Home" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
  { href: "/cookies", label: "Cookie Policy" },
  { href: "/sitemap", label: "Sitemap" },
];
export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const url = siteOrigin ? new URL(path, siteOrigin).href : undefined;
  return {
    title,
    description,
    alternates: url ? { canonical: url } : undefined,
    openGraph: {
      title: `${title} | ${station.name}`,
      description,
      type: "website",
      locale: "en_UG",
      siteName: station.name,
      ...(url
        ? {
            url,
            images: [
              {
                url: `${siteOrigin}/images/station.webp`,
                width: 1200,
                height: 900,
                alt: "Representative station image",
              },
            ],
          }
        : {}),
    },
  };
}
