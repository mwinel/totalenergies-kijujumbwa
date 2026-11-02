import type { MetadataRoute } from "next";
import { isPublic, siteOrigin } from "@/lib/site";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: isPublic
      ? { userAgent: "*", allow: "/" }
      : { userAgent: "*", disallow: "/" },
    ...(siteOrigin ? { sitemap: `${siteOrigin}/sitemap.xml` } : {}),
  };
}
