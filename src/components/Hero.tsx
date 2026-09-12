"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, Heart, Smile, Star } from "lucide-react";
import gsap from "gsap";

interface HeroProps {
  onOpenContact: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const stickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left side content slides in smoothly from the left
      gsap.from(leftColRef.current, {
        x: -70,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
      });

      // Right side artwork slides in from the right
      gsap.from(rightColRef.current, {
        x: 70,
        opacity: 0,
        duration: 1.0,
        delay: 0.1,
        ease: "power3.out",
      });

      // Idle float for retro sticker
      if (stickerRef.current) {
        gsap.to(stickerRef.current, {
          y: -5,
          duration: 2.4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="pt-8 pb-16 px-4 sm:px-8 max-w-7xl mx-auto overflow-hidden bg-[#f5f4ed]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Left Column: Typography & CTAs - Animates from LEFT */}
        <div ref={leftColRef} className="lg:col-span-6 flex flex-col space-y-6">
          {/* Tag Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs sm:text-sm font-pixel font-bold bg-[#eae0f5] text-zinc-950 border-1.5 border-zinc-900 shadow-[1.5px_1.5px_0px_#1e1e1e]">
              <span>&lt;</span>
              <span>Hello_World</span>
              <span>/&gt;</span>
            </span>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold bg-[#def7ec] text-emerald-950 border-1.5 border-zinc-900 shadow-[1.5px_1.5px_0px_#1e1e1e]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Full Stack Developer &amp; Computer Science Engineer</span>
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-1">
            <h1 className="font-pixel text-4xl sm:text-6xl lg:text-[62px] font-bold uppercase tracking-tight text-zinc-950 leading-[1.08]">
              WE TURN<br />
              IDEAS INTO<br />
              REAL PRODUCTS<span className="cursor-blink text-emerald-600">_</span>
            </h1>
          </div>

          {/* Bio & Purpose Description */}
          <div className="space-y-3">
            <p className="text-sm sm:text-base text-zinc-800 leading-relaxed font-medium">
              A dedicated creator passionate about <strong className="text-zinc-950 font-extrabold underline decoration-emerald-400 decoration-2 underline-offset-2">turning ideas into reality</strong>. Whether it&apos;s crafting compelling narratives, designing captivating visuals, or solving complex problems, I thrive on challenges.
            </p>

            <div className="bg-[#edeae1] border-l-3 border-zinc-900 pl-3.5 py-2 pr-3 rounded-r-xl text-xs sm:text-sm text-zinc-700 leading-relaxed shadow-[1px_1px_0px_#1e1e1e]">
              Currently pursuing <strong className="text-zinc-950 font-bold">Computer Science Engineering</strong> at <strong className="text-zinc-950 font-bold">Siksha &apos;O&apos; Anusandhan University</strong>, building a strong foundation in <span className="font-mono font-semibold text-zinc-900">software development</span>, <span className="font-mono font-semibold text-zinc-900">algorithms</span>, and <span className="font-mono font-semibold text-zinc-900">system design</span>.
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-1">
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 bg-zinc-950 text-white hover:bg-zinc-800 border-2 border-zinc-950 rounded-xl px-5 py-3 font-bold text-sm shadow-[3px_3px_0px_#000] neo-btn cursor-pointer"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#projects"
              className="inline-flex items-center justify-center bg-white text-zinc-900 hover:bg-zinc-50 border-2 border-zinc-900 rounded-xl px-5 py-3 font-bold text-sm shadow-[3px_3px_0px_#1e1e1e] neo-btn cursor-pointer"
            >
              View Our Work
            </a>
          </div>

          {/* Social Proof & Metrics */}
          <div className="pt-4 sm:pt-6 border-t border-zinc-300/80 flex flex-wrap items-center gap-6 sm:gap-8">
            {/* Metric 1 */}
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-rose-100 border border-rose-400 flex items-center justify-center text-rose-600">
                <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-sm sm:text-base text-zinc-900 font-sans">
                  50+
                </span>
                <span className="text-[11px] sm:text-xs text-zinc-500 font-medium">
                  Projects Delivered
                </span>
              </div>
            </div>

            <div className="h-7 w-px bg-zinc-300 hidden sm:block" />

            {/* Metric 2 */}
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-amber-100 border border-amber-400 flex items-center justify-center text-amber-600">
                <Smile className="w-4 h-4 text-amber-600" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-sm sm:text-base text-zinc-900 font-sans">
                  20+
                </span>
                <span className="text-[11px] sm:text-xs text-zinc-500 font-medium">
                  Happy Clients
                </span>
              </div>
            </div>

            <div className="h-7 w-px bg-zinc-300 hidden sm:block" />

            {/* Metric 3 */}
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-yellow-100 border border-yellow-400 flex items-center justify-center text-yellow-600">
                <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-sm sm:text-base text-zinc-900 font-sans">
                  99%
                </span>
                <span className="text-[11px] sm:text-xs text-zinc-500 font-medium">
                  On-Time Delivery
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Cozy Pixel Desk Artwork - Animates from RIGHT */}
        <div ref={rightColRef} className="lg:col-span-6 relative flex justify-center items-center">
          <div className="relative w-full max-w-[560px] aspect-[4/3] rounded-2xl overflow-hidden border-2.5 border-zinc-900 shadow-[6px_6px_0px_#1e1e1e] bg-[#e6e2d3]">
            <Image
              src="/images/hero-desk.jpg"
              alt="Aniket Singh coding workspace with cat, dual monitors, and motivational retro posters"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
              className="object-cover"
            />

            {/* Cute speech bubble sticker floating */}
            <div
              ref={stickerRef}
              className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-white border-2 border-zinc-900 px-3 py-1.5 rounded-xl shadow-[2px_2px_0px_#1e1e1e] flex items-center gap-1.5 transform -rotate-2 hover:rotate-0 transition-transform"
            >
              <span className="text-xs font-bold text-zinc-900 font-pixel">
                Let&apos;s Build Together!
              </span>
              <span className="text-xs">❤️</span>
            </div>

            {/* Cozy neon corner pill */}
            <div className="absolute bottom-4 right-4 bg-zinc-900/90 text-emerald-400 border border-emerald-500/50 px-2.5 py-1 rounded-md text-[11px] font-mono shadow-[2px_2px_0px_#000]">
              &lt;/&gt; ANIKET SINGH • SOA CSE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
