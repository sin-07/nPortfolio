"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export default function ToastNotification({ message, onClose }: ToastProps) {
  const toastRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!message) return;

    if (toastRef.current) {
      gsap.fromTo(
        toastRef.current,
        { y: 30, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.35, ease: "back.out(1.7)" }
      );
    }

    const timer = setTimeout(() => {
      if (toastRef.current) {
        gsap.to(toastRef.current, {
          y: 20,
          opacity: 0,
          scale: 0.95,
          duration: 0.25,
          ease: "power2.in",
          onComplete: onClose,
        });
      } else {
        onClose();
      }
    }, 2800);

    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div
      ref={toastRef}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[70] flex items-center gap-3 px-5 py-3 rounded-full bg-[#181816]/95 border border-white/20 text-[#F4F3EF] shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-xl pointer-events-auto select-none"
    >
      <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)] animate-pulse" />
      <span className="font-mono text-xs tracking-wide">{message}</span>
    </div>
  );
}
