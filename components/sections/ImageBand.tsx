"use client";

import { useEffect, useRef } from "react";

export function ImageBand() {
  const sectionRef = useRef<HTMLElement>(null);
  const wordmarkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const section = sectionRef.current;
          const wordmark = wordmarkRef.current;
          if (section && wordmark) {
            const rect = section.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            // When section is entering or near the viewport
            if (rect.top < viewportHeight && rect.bottom > 0) {
              // Calculate scroll progress through viewport (0 = entering, 1 = leaving)
              const totalDistance = viewportHeight + rect.height;
              const currentDistance = viewportHeight - rect.top;
              const progress = Math.max(0, Math.min(1, currentDistance / totalDistance));

              // Horizontal parallax: slides right-to-left on scroll-down, reverses on scroll-up
              // Shift range: +18vw when entering to -18vw when leaving
              const horizontalOffset = (0.5 - progress) * 36;

              wordmark.style.transform = `translate3d(${horizontalOffset.toFixed(2)}vw, -50%, 0)`;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[55vh] min-h-[380px] w-full overflow-hidden bg-sage"
    >
      <img
        src="/images/file_000000000a008211a952181c9ea83005_result.webp"
        alt="Jiana Suites luxury lounge and reception"
        className="absolute inset-0 h-full w-full object-cover object-center scale-105"
      />
      <div className="absolute inset-0 bg-black/40" />

      {/* Giant Wordmark with Horizontal Scroll-Linked Parallax (Right-to-Left on scroll-down) */}
      <div
        ref={wordmarkRef}
        className="image-band-wordmark pointer-events-none absolute left-0 top-1/2 z-10 w-full select-none"
        style={{ transform: "translate3d(0vw, -50%, 0)" }}
      >
        <span className="block text-center whitespace-nowrap font-watermark font-extrabold text-[18vw] md:text-[22vw] uppercase leading-none text-watermark/30 tracking-wider">
          JIANA SUITES
        </span>
      </div>
    </section>
  );
}
