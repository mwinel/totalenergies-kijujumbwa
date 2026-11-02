import type { MetadataRoute } from "next";
import { isPublic, pages, siteOrigin } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!isPublic || !siteOrigin) return [];
  const origin = siteOrigin;
  return pages.map((page) => ({
    url: new URL(page.href, origin).href,
    changeFrequency: "monthly",
    priority: page.href === "/" ? 1 : 0.5,
  }));
}
