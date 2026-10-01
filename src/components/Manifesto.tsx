"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Manifesto() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (leftColRef.current?.children) {
        gsap.fromTo(
          leftColRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.12,
            duration: 0.8,
            ease: "power3.out",
            clearProps: "transform,opacity",
            scrollTrigger: {
              trigger: leftColRef.current,
              start: "top 95%",
              once: true,
            },
          }
        );
      }

      if (quoteRef.current) {
        gsap.fromTo(
          quoteRef.current,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power4.out",
            clearProps: "transform,opacity",
            scrollTrigger: {
              trigger: quoteRef.current,
              start: "top 95%",
              once: true,
            },
          }
        );
      }

      if (descRef.current) {
        gsap.fromTo(
          descRef.current,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            clearProps: "transform,opacity",
            scrollTrigger: {
              trigger: descRef.current,
              start: "top 95%",
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="manifesto"
      className="py-24 sm:py-36 bg-[#0E0E0D] border-t border-white/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Stats */}
          <div ref={leftColRef} className="lg:col-span-4 flex flex-col space-y-10">
            <p className="font-mono text-xs uppercase tracking-widest text-[#8A8985]">
              (The Engineer)
            </p>
            <div className="space-y-8">
              <div className="border-l border-emerald-500/40 pl-5">
                <span className="block font-sans font-black text-4xl sm:text-5xl text-white mb-1">
                  01
                </span>
                <span className="text-xs sm:text-sm text-[#8A8985] font-sans leading-relaxed block">
                  Dedicated full-stack engineer, from architectural concept to live production deployment.
                </span>
              </div>
              <div className="border-l border-white/20 pl-5">
                <span className="block font-sans font-black text-4xl sm:text-5xl text-white mb-1">
                  3+
                </span>
                <span className="text-xs sm:text-sm text-[#8A8985] font-sans leading-relaxed block">
                  Years of hands-on engineering across Next.js, TypeScript, APIs, and modern reactive ecosystems.
                </span>
              </div>
              <div className="border-l border-white/20 pl-5">
                <span className="block font-sans font-black text-4xl sm:text-5xl text-white mb-1">
                  100%
                </span>
                <span className="text-xs sm:text-sm text-[#8A8985] font-sans leading-relaxed block">
                  Clean, tested, understandable code with uncompromising craftsmanship and accessibility.
                </span>
              </div>
            </div>
          </div>

          {/* Right Statement */}
          <div className="lg:col-span-8 flex flex-col justify-between space-y-8">
            <p
              ref={quoteRef}
              className="font-serif text-2xl sm:text-4xl lg:text-[2.6rem] text-[#F4F3EF] leading-[1.3] tracking-tight will-change-transform"
            >
              Every software project deserves better than an assembly of disconnected blocks. I architect
              and engineer bespoke interfaces and robust systems so that creative intent and performance
              remain{" "}
              <em className="italic font-normal text-white">
                pristine all the way into production.
              </em>
            </p>
            <p
              ref={descRef}
              className="text-sm sm:text-base text-[#8A8985] font-sans leading-relaxed max-w-2xl will-change-transform"
            >
              Direct engineering ownership from the first code commit to cloud launch. You always know who
              designs the system, who writes the backend logic, and who optimizes every micro-interaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
