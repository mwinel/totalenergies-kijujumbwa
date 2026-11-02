import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import Icon from "@/components/Icon";
import { pages, pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "Sitemap",
  "Find your way around the TotalEnergies Kijujumbwa station website.",
  "/sitemap",
);
export default function SitemapPage() {
  return (
    <main id="main" className="container inner-page policy-page">
      <PageIntro label="Sitemap" title="Find your way.">
        <p>Everything you need, one easy stop away.</p>
      </PageIntro>
      <nav className="sitemap-links" aria-label="All website pages">
        {[
          ...pages,
          { href: "/#products", label: "Products" },
          { href: "/#services", label: "Services" },
        ].map((page) => (
          <Link key={page.href} href={page.href}>
            {page.label}
            <Icon name="arrow" />
          </Link>
        ))}
      </nav>
    </main>
  );
}
