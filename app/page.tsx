import HeroExperience from "@/components/HeroExperience";
import Button from "@/components/Button";
import Link from "next/link";
import { station, contactLinks } from "@/content/station";
import { pageMetadata, siteOrigin } from "@/lib/site";
import Icon from "@/components/Icon";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import ProductGrid from "@/components/ProductGrid";
import ServiceList from "@/components/ServiceList";
import VisitCta from "@/components/VisitCta";

export const metadata = pageMetadata(
  "Petrol Station in Kijujumbwa, Uganda",
  "A better stop. A brighter journey. Explore TotalEnergies Kijujumbwa, enquire about products and services, and get in touch with the station team.",
  "/",
);

export default function Home() {
  const schema = station.verified
    ? {
        "@context": "https://schema.org",
        "@type": "GasStation",
        name: station.name,
        telephone: station.telephone,
        ...(siteOrigin ? { url: siteOrigin } : {}),
        address: {
          "@type": "PostalAddress",
          streetAddress: station.address,
          addressLocality: station.locality,
          addressCountry: "UG",
        },
        ...(station.coordinates
          ? { geo: { "@type": "GeoCoordinates", ...station.coordinates } }
          : {}),
        openingHours: station.schemaHours,
      }
    : null;

  return (
    <main id="main">
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      )}
      <HeroExperience>
        <div className="hero-copy">
          <h1>
            <span className="hero-gradient">A better stop.</span>
            <br />
            <span>
              A brighter
              <br className="desktop-break" /> journey.
            </span>
          </h1>
          <p>
            From your morning commute to the long road ahead. Discover energy
            and everyday essentials, all in one convenient stop.
          </p>
          <div className="hero-actions">
            <Button href="/contact" size="lg">
              Find our station
            </Button>
            <Link href="#products" className="text-link">
              Explore our products <Icon name="arrow" />
            </Link>
          </div>
        </div>
      </HeroExperience>
      <ProductGrid />
      <ServiceList />
      <VisitCta />
      <a
        className="whatsapp-float"
        href={contactLinks.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Us — chat with the station team (opens in a new tab)"
      >
        <WhatsAppIcon />
        <span>WhatsApp Us</span>
      </a>
    </main>
  );
}
