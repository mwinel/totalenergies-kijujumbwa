"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "./Icon";
import Button from "./Button";

const links = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/#products" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("/");
  const pathname = usePathname();
  const activeHref = pathname === "/" ? activeSection : pathname;

  useEffect(() => {
    if (pathname !== "/") return;

    let frame = 0;
    function updateActiveSection() {
      frame = 0;
      const offset =
        parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
      let current = "/";
      for (const { href } of links) {
        const id = href.split("#")[1];
        const section = id ? document.getElementById(id) : null;
        if (section && section.getBoundingClientRect().top <= offset + 1) {
          current = href;
        }
      }
      setActiveSection(current);
    }
    function scheduleUpdate() {
      if (!frame) frame = window.requestAnimationFrame(updateActiveSection);
    }

    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [pathname]);

  return (
    <div
      className="navigation"
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          setOpen(false);
          document.getElementById("menu-toggle")?.focus();
        }
      }}
    >
      <button
        id="menu-toggle"
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="primary-nav"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen(!open)}
      >
        <Icon name={open ? "close" : "menu"} />
      </button>
      <nav
        id="primary-nav"
        className={open ? "nav-links is-open" : "nav-links"}
        aria-label="Main navigation"
      >
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            aria-current={
              activeHref === href
                ? href.includes("#") ? "location" : "page"
                : undefined
            }
            onClick={() => setOpen(false)}
          >
            {label}
          </Link>
        ))}
        <Button
          href="/contact"
          size="sm"
          className="nav-cta"
          onClick={() => setOpen(false)}
        >
          Find our station
        </Button>
      </nav>
    </div>
  );
}
