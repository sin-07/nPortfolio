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
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
        {/* Left Column: Typography & CTAs - Animates from LEFT */}
        <div ref={leftColRef} className="lg:col-span-6 flex flex-col space-y-5 sm:space-y-6">
          {/* Tag Badges */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-md text-xs sm:text-sm font-pixel font-bold bg-[#eae0f5] text-zinc-950 border-1.5 border-zinc-900 shadow-[1.5px_1.5px_0px_#1e1e1e]">
              <span>&lt;</span>
              <span>Hello_World</span>
              <span>/&gt;</span>
            </span>

            <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-md text-[11px] sm:text-xs font-bold bg-[#def7ec] text-emerald-950 border-1.5 border-zinc-900 shadow-[1.5px_1.5px_0px_#1e1e1e]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0"></span>
              <span>Software Engineer @ TCS • Full Stack Developer</span>
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-1">
            <h1 className="font-pixel text-3xl xs:text-4xl sm:text-6xl lg:text-[62px] font-bold uppercase tracking-tight text-zinc-950 leading-[1.08]">
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
              <strong className="text-zinc-950 font-bold">B.Tech CSE Graduate</strong>, currently working as a <strong className="text-zinc-950 font-bold">Software Engineer at Tata Consultancy Services (TCS)</strong>, specializing in scalable enterprise applications, modern full-stack architectures, and high-performance cloud solutions.
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
            <button
              onClick={onOpenContact}
              className="inline-flex items-center justify-center gap-2 bg-zinc-950 text-white hover:bg-zinc-800 border-2 border-zinc-950 rounded-xl px-5 py-3 font-bold text-sm shadow-[3px_3px_0px_#000] neo-btn cursor-pointer w-full sm:w-auto"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="https://github.com/sin-07"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-zinc-900 hover:bg-zinc-50 border-2 border-zinc-900 rounded-xl px-5 py-3 font-bold text-sm shadow-[3px_3px_0px_#1e1e1e] neo-btn cursor-pointer w-full sm:w-auto"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>View Real-World Projects</span>
            </a>
          </div>

          {/* Social Proof & Metrics */}
          <div className="pt-4 sm:pt-6 border-t border-zinc-300/80 grid grid-cols-3 gap-2 sm:flex sm:flex-wrap sm:items-center sm:gap-8">
            {/* Metric 1 */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-rose-100 border border-rose-400 flex items-center justify-center text-rose-600 flex-shrink-0">
                <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-rose-500 text-rose-500" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-extrabold text-xs sm:text-base text-zinc-900 font-sans leading-tight">
                  50+
                </span>
                <span className="text-[10px] sm:text-xs text-zinc-500 font-medium truncate">
                  Projects
                </span>
              </div>
            </div>

            <div className="h-7 w-px bg-zinc-300 hidden sm:block" />

            {/* Metric 2 */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-amber-100 border border-amber-400 flex items-center justify-center text-amber-600 flex-shrink-0">
                <Smile className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-600" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-extrabold text-xs sm:text-base text-zinc-900 font-sans leading-tight">
                  20+
                </span>
                <span className="text-[10px] sm:text-xs text-zinc-500 font-medium truncate">
                  Clients
                </span>
              </div>
            </div>

            <div className="h-7 w-px bg-zinc-300 hidden sm:block" />

            {/* Metric 3 */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-yellow-100 border border-yellow-400 flex items-center justify-center text-yellow-600 flex-shrink-0">
                <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-yellow-500 text-yellow-500" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-extrabold text-xs sm:text-base text-zinc-900 font-sans leading-tight">
                  99%
                </span>
                <span className="text-[10px] sm:text-xs text-zinc-500 font-medium truncate">
                  On-Time
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Cozy Pixel Desk Artwork - Animates from RIGHT */}
        <div ref={rightColRef} className="lg:col-span-6 relative flex justify-center items-center pb-6 sm:pb-4 pt-2">
          {/* Inner Relative Wrapper keeps image & floating badge synchronized in the same coordinate frame */}
          <div className="relative w-full max-w-[560px]">
            {/* Desk Artwork Card */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border-2.5 border-zinc-900 shadow-[4px_4px_0px_#1e1e1e] sm:shadow-[6px_6px_0px_#1e1e1e] bg-[#e6e2d3]">
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
                className="absolute top-3 left-3 sm:top-6 sm:left-6 bg-white border-2 border-zinc-900 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl shadow-[2px_2px_0px_#1e1e1e] flex items-center gap-1.5 transform -rotate-2 hover:rotate-0 transition-transform select-none"
              >
                <span className="text-[11px] sm:text-xs font-bold text-zinc-900 font-pixel">
                  Let&apos;s Build Together!
                </span>
                <span className="text-xs">❤️</span>
              </div>

              {/* Cozy neon corner pill - visible on sm+ screens so it never overlaps or clutters with avatar badge on mobile */}
              <div className="hidden sm:block absolute bottom-4 right-4 bg-zinc-900/90 text-emerald-400 border border-emerald-500/50 px-2.5 py-1 rounded-md text-[11px] font-mono shadow-[2px_2px_0px_#000]">
                &lt;/&gt; ANIKET SINGH • TCS SOFTWARE ENGINEER
              </div>
            </div>

            {/* Floating Engineer Cartoon Avatar Badge - cleanly anchored without overflowing mobile screen */}
            <div className="absolute -bottom-3 left-2 sm:-bottom-5 sm:-left-4 z-20 bg-white border-2 border-zinc-900 rounded-xl sm:rounded-2xl p-2 sm:p-2.5 shadow-[3px_3px_0px_#1e1e1e] sm:shadow-[3.5px_3.5px_0px_#1e1e1e] flex items-center gap-2.5 sm:gap-3 transform -rotate-1 sm:-rotate-2 hover:rotate-0 transition-transform max-w-[calc(100%-1rem)]">
              <div className="relative w-10 h-10 sm:w-13 sm:h-13 rounded-lg sm:rounded-xl overflow-hidden border border-zinc-900 flex-shrink-0 bg-emerald-50 shadow-[1px_1px_0px_#1e1e1e]">
                <Image
                  src="/images/aniket-portrait.jpg"
                  alt="Aniket Singh - Software Engineer @ TCS"
                  fill
                  sizes="60px"
                  className="object-cover"
                />
              </div>
              <div className="pr-1 sm:pr-2 min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
                  <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase text-emerald-700 truncate">TCS Engineer</span>
                </div>
                <p className="text-xs sm:text-sm font-extrabold text-zinc-950 font-sans leading-tight truncate">Aniket Singh</p>
                <p className="text-[10px] sm:text-xs text-zinc-600 font-medium truncate">B.Tech CSE Graduate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


