"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function ServicesSection({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const products = document.getElementById("products");
    if (!products) return;

    const observer = new ResizeObserver(() => {
      ref.current?.style.setProperty(
        "--products-height",
        `${products.getBoundingClientRect().height}px`,
      );
    });
    observer.observe(products);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="services" className="services-section section-space">
      {children}
    </section>
  );
}
