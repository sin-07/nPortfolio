"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";

interface CtaBannerProps {
  onOpenContact: () => void;
  onSendEmail: () => void;
}

export default function CtaBanner({ onOpenContact, onSendEmail }: CtaBannerProps) {
  return (
    <section id="contact" className="py-12 px-4 sm:px-8 max-w-7xl mx-auto bg-[#f5f4ed]">
      <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border-2.5 border-zinc-900 shadow-[6px_6px_0px_#1e1e1e] min-h-[360px] sm:min-h-[420px] flex items-center justify-center">
        {/* Pixel Art Panoramic Landscape */}
        <div className="absolute inset-0">
          <Image
            src="/images/cta-banner.jpg"
            alt="Scenic pixel art countryside landscape with wooden signs and pixel cat"
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover"
            priority
          />
        </div>

        {/* Center CTA Floating Card */}
        <div className="relative z-10 mx-4 max-w-lg w-full text-center bg-[#FAF8F3]/92 backdrop-blur-xs p-6 sm:p-8 rounded-2xl border-2 border-zinc-900 shadow-[4px_4px_0px_#1e1e1e]">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight leading-tight">
            Let&apos;s Build Something Amazing
          </h2>
          <p className="text-sm sm:text-base text-zinc-700 mt-2 font-medium">
            Have a project in mind? Let&apos;s talk with Aniket.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 bg-zinc-950 text-white hover:bg-zinc-800 border-2 border-zinc-950 rounded-xl px-5 py-2.5 font-bold text-xs sm:text-sm shadow-[2.5px_2.5px_0px_#000] neo-btn cursor-pointer"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onSendEmail}
              className="inline-flex items-center gap-2 bg-white text-zinc-900 hover:bg-zinc-50 border-2 border-zinc-900 rounded-xl px-5 py-2.5 font-bold text-xs sm:text-sm shadow-[2.5px_2.5px_0px_#1e1e1e] neo-btn cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Send an Email</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
