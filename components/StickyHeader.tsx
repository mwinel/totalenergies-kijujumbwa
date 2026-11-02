"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function StickyHeader({ children }: { children: ReactNode }) {
  const header = useRef<HTMLElement>(null);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 761px)");
    let frame = 0;
    let compact = false;

    function update() {
      frame = 0;
      // Separate thresholds prevent flickering near the transition point.
      compact = desktop.matches && window.scrollY > (compact ? 24 : 64);
      header.current?.toggleAttribute("data-compact", compact);
    }

    function scheduleUpdate() {
      if (!frame) frame = window.requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    desktop.addEventListener("change", scheduleUpdate);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      desktop.removeEventListener("change", scheduleUpdate);
    };
  }, []);

  return (
    <div className="header-space">
      <header ref={header} className="site-header">
        {children}
      </header>
    </div>
  );
}
