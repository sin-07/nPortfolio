"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Disable custom cursor on touch/mobile devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const setDotX = gsap.quickTo(dot, "x", { duration: 0.08, ease: "power2.out" });
    const setDotY = gsap.quickTo(dot, "y", { duration: 0.08, ease: "power2.out" });
    const setRingX = gsap.quickTo(ring, "x", { duration: 0.35, ease: "power3.out" });
    const setRingY = gsap.quickTo(ring, "y", { duration: 0.35, ease: "power3.out" });

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      const { clientX, clientY } = e;
      setDotX(clientX);
      setDotY(clientY);
      setRingX(clientX);
      setRingY(clientY);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      if (
        target.closest(
          'button, a, input, textarea, [data-cursor-hover], .pill-btn, .circle-btn, .pill-nav, [role="button"]'
        )
      ) {
        setIsHovered(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      if (
        target.closest(
          'button, a, input, textarea, [data-cursor-hover], .pill-btn, .circle-btn, .pill-nav, [role="button"]'
        )
      ) {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [isVisible]);

  return (
    <>
      <div
        ref={dotRef}
        className={`custom-cursor-dot ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
        } ${isHovered ? "scale-150 bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" : ""}`}
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className={`custom-cursor-ring ${isVisible ? "opacity-100" : "opacity-0"} ${
          isHovered ? "cursor-hover" : ""
        }`}
        aria-hidden="true"
      />
    </>
  );
}
