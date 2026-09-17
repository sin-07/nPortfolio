"use client";

import React, { useEffect, useRef } from "react";
import { Check, Info, X } from "lucide-react";
import gsap from "gsap";

interface ToastProps {
  message: string;
  type?: "success" | "info";
  onClose: () => void;
}

export default function Toast({ message, type = "success", onClose }: ToastProps) {
  const toastRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (toastRef.current) {
      gsap.fromTo(
        toastRef.current,
        { y: 30, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.3, ease: "back.out(1.4)" }
      );
    }

    const timer = setTimeout(() => {
      handleClose();
    }, 3200);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    if (toastRef.current) {
      gsap.to(toastRef.current, {
        y: 20,
        opacity: 0,
        scale: 0.95,
        duration: 0.22,
        ease: "power2.in",
        onComplete: onClose,
      });
    } else {
      onClose();
    }
  };

  return (
    <div
      ref={toastRef}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[1100] flex items-center gap-2.5 bg-[#FAF8F3] border-2 border-zinc-900 px-4 py-2.5 rounded-xl shadow-[4px_4px_0px_#1e1e1e] max-w-sm w-full mx-4"
    >
      <div
        className={`w-6 h-6 rounded-lg flex items-center justify-center border border-zinc-900 flex-shrink-0 ${
          type === "success" ? "bg-[#def7ec] text-emerald-800" : "bg-[#dff1fa] text-sky-800"
        }`}
      >
        {type === "success" ? <Check className="w-3.5 h-3.5" /> : <Info className="w-3.5 h-3.5" />}
      </div>
      <p className="text-xs sm:text-sm font-bold text-zinc-900 flex-1 truncate">{message}</p>
      <button
        onClick={handleClose}
        className="text-zinc-500 hover:text-zinc-900 p-1 rounded hover:bg-zinc-200 transition-colors"
        aria-label="Dismiss notification"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
