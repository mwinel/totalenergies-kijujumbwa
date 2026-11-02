import Link from "next/link";
import { station, contactLinks } from "@/content/station";
import { pages } from "@/lib/site";
import Brand from "./Brand";
import Icon from "./Icon";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <Brand />
            <p>Good energy for the journey ahead.</p>
          </div>
          <div>
            <h2>Come say hello</h2>
            <a href={contactLinks.phone}>{station.phone}</a>
            <a href={contactLinks.email}>{station.email}</a>
            <Link href="/contact">
              Kijujumbwa, Uganda <Icon name="arrow" />
            </Link>
          </div>
          <div>
            <h2>Explore</h2>
            <Link href="/#products">Our Products</Link>
            <Link href="/#services">Our Services</Link>
            <Link href="/contact">Contact us</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {station.copyrightYear} {station.name}
          </span>
          <nav aria-label="Legal navigation">
            {pages.slice(2).map((page) => (
              <Link key={page.href} href={page.href}>
                {page.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
