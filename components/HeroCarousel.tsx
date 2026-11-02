"use client";

import Image from "next/image";
import { useEffect, useState, useSyncExternalStore } from "react";

import { heroSlides as slides } from "@/content/hero";

const motionQuery = "(prefers-reduced-motion: reduce)";
function subscribeToMotion(change: () => void) {
  const media = window.matchMedia(motionQuery);
  media.addEventListener("change", change);
  return () => media.removeEventListener("change", change);
}

export default function HeroCarousel({
  active,
  onActiveChange,
}: {
  active: number;
  onActiveChange: (index: number) => void;
}) {
  const [playing, setPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [loaded, setLoaded] = useState<boolean[]>(() =>
    slides.map(() => false),
  );
  const reducedMotion = useSyncExternalStore(
    subscribeToMotion,
    () => window.matchMedia(motionQuery).matches,
    () => false,
  );
  const rotating = playing && !reducedMotion && !hovered && !focused;

  useEffect(() => {
    if (!rotating) return;
    const timer = window.setInterval(() => {
      const next = (active + 1) % slides.length;
      if (!document.hidden && loaded[next]) onActiveChange(next);
    }, 6000);
    return () => window.clearInterval(timer);
  }, [active, loaded, rotating, onActiveChange]);

  function select(index: number) {
    onActiveChange((index + slides.length) % slides.length);
    setPlaying(false);
  }

  return (
    <div
      className="hero-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="Around the station — representative imagery"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget))
          setFocused(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          select(active + (event.key === "ArrowRight" ? 1 : -1));
        }
      }}
    >
      <figure className="hero-figure">
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            className={`hero-slide${active === index ? " is-active" : ""}`}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${slides.length}: ${slide.title}`}
            aria-hidden={active !== index}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="(max-width: 760px) 92vw, 50vw"
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "auto"}
              onLoad={() =>
                setLoaded((current) =>
                  current.map((value, i) => i === index || value),
                )
              }
            />
          </div>
        ))}
      </figure>
      <div className="carousel-controls">
        {!reducedMotion && (
          <button
            className="carousel-play"
            onClick={() => setPlaying((value) => !value)}
            aria-label={playing ? "Pause slideshow" : "Play slideshow"}
          >
            <svg width="24" height="26" viewBox="0 0 24 26" aria-hidden="true">
              {playing ? (
                <path
                  d="M5 3v20M19 3v20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              ) : (
                <path d="m5 3 16 10-16 10Z" fill="currentColor" />
              )}
            </svg>
          </button>
        )}
        <div className="carousel-dots" aria-label="Choose an image">
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              onClick={() => select(index)}
              aria-label={`Show image ${index + 1}: ${slide.title}`}
              aria-pressed={active === index}
            >
              <span />
            </button>
          ))}
        </div>
      </div>
      <span
        className="visually-hidden"
        aria-live={playing && !reducedMotion ? "off" : "polite"}
        aria-atomic="true"
      >
        {slides[active].title}, image {active + 1} of {slides.length}
      </span>
    </div>
  );
}
