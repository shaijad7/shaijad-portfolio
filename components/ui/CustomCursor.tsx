"use client";

import * as React from "react";

export function CustomCursor() {
  const dotRef = React.useRef<HTMLDivElement>(null);
  const ringRef = React.useRef<HTMLDivElement>(null);
  const posRef = React.useRef({ x: -100, y: -100 });
  const ringPosRef = React.useRef({ x: -100, y: -100 });
  const rafRef = React.useRef<number | null>(null);
  const isHoveringRef = React.useRef(false);
  const isHoveringCardRef = React.useRef(false);

  React.useEffect(() => {
    // Don't run on touch/mobile
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const onMouseMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      // Dot tracks instantly
      dot.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
    };

    const onMouseEnter = () => {
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    };

    const onMouseLeave = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest(
        'a, button, [role="button"], input, textarea, select, label, [data-cursor-hover]'
      );
      const isCard = target.closest(
        '[data-cursor-card], .group'
      );

      if (isInteractive) {
        isHoveringRef.current = true;
        isHoveringCardRef.current = false;
      } else if (isCard) {
        isHoveringCardRef.current = true;
        isHoveringRef.current = false;
      } else {
        isHoveringRef.current = false;
        isHoveringCardRef.current = false;
      }
    };

    // RAF loop for smooth ring trailing
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const lerpFactor = prefersReducedMotion ? 1 : 0.12;

    const animate = () => {
      ringPosRef.current.x = lerp(
        ringPosRef.current.x,
        posRef.current.x,
        lerpFactor
      );
      ringPosRef.current.y = lerp(
        ringPosRef.current.y,
        posRef.current.y,
        lerpFactor
      );

      const scale = isHoveringRef.current
        ? 1.6
        : isHoveringCardRef.current
        ? 1.3
        : 1;
      const ringSize = 32;
      const offset = (ringSize * scale) / 2;

      ring.style.transform = `translate(${ringPosRef.current.x - offset}px, ${
        ringPosRef.current.y - offset
      }px) scale(${scale})`;

      rafRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseover", onMouseOver, { passive: true });

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseover", onMouseOver);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Hidden on touch devices via CSS
  return (
    <>
      {/* Small central dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="
          fixed top-0 left-0 z-[9999] pointer-events-none
          w-2 h-2 rounded-full bg-primary
          shadow-[0_0_6px_2px_rgba(142,213,255,0.5)]
          opacity-0 transition-opacity duration-200
          [@media(pointer:coarse)]:hidden
        "
        style={{ willChange: "transform" }}
      />
      {/* Trailing ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className="
          fixed top-0 left-0 z-[9998] pointer-events-none
          w-8 h-8 rounded-full border border-primary/60
          shadow-[0_0_10px_1px_rgba(142,213,255,0.15)]
          opacity-0 transition-opacity duration-200
          [@media(pointer:coarse)]:hidden
        "
        style={{ willChange: "transform", transition: "opacity 0.2s" }}
      />
    </>
  );
}

