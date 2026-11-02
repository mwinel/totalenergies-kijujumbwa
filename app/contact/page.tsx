import Icon from "@/components/Icon";
import Button from "@/components/Button";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import PageIntro from "@/components/PageIntro";
import { station, contactLinks } from "@/content/station";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata(
  "Visit & Contact",
  "Get in touch with TotalEnergies Kijujumbwa. Call, email or chat on WhatsApp to ask about the station, products and services.",
  "/contact",
);
export default function Contact() {
  return (
    <main id="main" className="container inner-page contact-page">
      <PageIntro label="Contact" title="Every good journey starts with hello." />
      <div className="contact-layout">
        <section className="contact-details" aria-labelledby="contact-heading">
          <span className="eyebrow">Come say hello</span>
          <h2 id="contact-heading">{station.name}</h2>
          <dl>
            <div>
              <dt>
                <Icon name="pin" />
                Find us
              </dt>
              <dd>
                {station.address || "Kijujumbwa, Uganda"}
              </dd>
            </div>
            <div>
              <dt>
                <Icon name="clock" />
                Opening hours
              </dt>
              <dd>
                {station.hours}
              </dd>
            </div>
            <div>
              <dt>
                <Icon name="phone" />
                Call the station
              </dt>
              <dd>
                <a href={contactLinks.phone}>{station.phone}</a>
              </dd>
            </div>
            <div>
              <dt>
                <Icon name="mail" />
                Email us
              </dt>
              <dd>
                <a href={contactLinks.email}>{station.email}</a>
              </dd>
            </div>
          </dl>
          <div className="contact-actions">
            <Button href={contactLinks.phone} size="lg">
              <Icon name="phone" />
              Call the station
            </Button>
          </div>
        </section>
        <div>
          <section className="contact-map" aria-label="Map of Kijujumbwa">
            <iframe
              title="Google Maps — Kijujumbwa, Uganda"
              src="https://www.google.com/maps?q=Kijujumbwa%2C%20Uganda&z=13&output=embed"
              width="600"
              height="400"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              href="https://www.google.com/maps/search/?api=1&query=Kijujumbwa%2C%20Uganda"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore Kijujumbwa on Google Maps <Icon name="arrow" />
            </a>
          </section>
          <a
            className="whatsapp-panel"
            href={contactLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon />
            <span>
              <strong>WhatsApp Us</strong>
              <span>Chat with our station team</span>
            </span>
            <Icon name="arrow" />
          </a>
        </div>
      </div>
    </main>
  );
}
