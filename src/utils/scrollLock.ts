"use client";

import { useEffect } from "react";

interface LenisInstance {
  stop: () => void;
  start: () => void;
}

let lockCount = 0;
let savedBodyOverflow = "";
let savedHtmlOverflow = "";
let savedBodyPaddingRight = "";

/**
 * Freezes the background page scroll completely.
 * - Disables Lenis smooth scrolling if running.
 * - Sets overflow: hidden on html and body.
 * - Adds compensatory padding-right to body to avoid layout shift from scrollbar disappearing.
 */
export function lockScroll(): void {
  if (typeof window === "undefined" || typeof document === "undefined") return;

  if (lockCount === 0) {
    const documentElement = document.documentElement;
    const body = document.body;

    savedBodyOverflow = body.style.overflow;
    savedHtmlOverflow = documentElement.style.overflow;
    savedBodyPaddingRight = body.style.paddingRight;

    // Calculate scrollbar width so background content doesn't shift
    const scrollbarWidth = window.innerWidth - documentElement.clientWidth;

    documentElement.style.overflow = "hidden";
    body.style.overflow = "hidden";
    documentElement.classList.add("modal-open");
    body.classList.add("modal-open");

    if (scrollbarWidth > 0) {
      body.style.paddingRight = `${scrollbarWidth}px`;
    }

    // Stop Lenis if active
    const lenis = (window as unknown as { __lenis?: LenisInstance }).__lenis;
    if (lenis && typeof lenis.stop === "function") {
      lenis.stop();
    }
  }

  lockCount++;
}

/**
 * Restores the background page scroll once all active popups have closed.
 */
export function unlockScroll(): void {
  if (typeof window === "undefined" || typeof document === "undefined") return;

  lockCount = Math.max(0, lockCount - 1);

  if (lockCount === 0) {
    const documentElement = document.documentElement;
    const body = document.body;

    documentElement.style.overflow = savedHtmlOverflow;
    body.style.overflow = savedBodyOverflow;
    body.style.paddingRight = savedBodyPaddingRight;
    documentElement.classList.remove("modal-open");
    body.classList.remove("modal-open");

    // Resume Lenis if active
    const lenis = (window as unknown as { __lenis?: LenisInstance }).__lenis;
    if (lenis && typeof lenis.start === "function") {
      lenis.start();
    }
  }
}

/**
 * React hook to freeze background page scroll whenever `isLocked` is true.
 * Cleans up and restores scroll when `isLocked` transitions to false or on unmount.
 */
export function useBodyScrollLock(isLocked: boolean): void {
  useEffect(() => {
    if (!isLocked) return;

    lockScroll();

    return () => {
      unlockScroll();
    };
  }, [isLocked]);
}
