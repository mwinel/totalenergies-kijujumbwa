"use client";

import { useState, type ReactNode } from "react";
import { heroSlides } from "@/content/hero";
import HeroCarousel from "./HeroCarousel";

export default function HeroExperience({ children }: { children: ReactNode }) {
  const [active, setActive] = useState(0);
  const slide = heroSlides[active];

  return (
    <>
      <section className="hero container">
        {children}
        <HeroCarousel active={active} onActiveChange={setActive} />
      </section>
      <div className="journey-strip" aria-label="Journey highlights">
        <div className="container">
          <span key={`${slide.src}-message`} className="journey-message">
            {slide.message}
          </span>
        </div>
      </div>
    </>
  );
}
