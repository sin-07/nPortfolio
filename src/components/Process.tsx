"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolioData } from "@/data/portfolioData";

export default function Process() {
  const { processes } = portfolioData;

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (headerRef.current?.children) {
        gsap.fromTo(
          headerRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.12,
            duration: 0.8,
            ease: "power3.out",
            clearProps: "transform,opacity",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 95%",
              once: true,
            },
          }
        );
      }

      if (gridRef.current?.children) {
        gsap.fromTo(
          gridRef.current.children,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.12,
            duration: 0.8,
            ease: "power3.out",
            clearProps: "transform,opacity",
            scrollTrigger: {
              trigger: gridRef.current,
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
      id="methode"
      className="py-20 sm:py-28 bg-[#0E0E0D] border-t border-white/10 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-10">
        {/* Header */}
        <div ref={headerRef} className="mb-14">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-3">
            <p className="font-mono text-xs uppercase tracking-widest text-[#8A8985]">
              (03 / Engineering Discipline)
            </p>
            <p className="text-xs sm:text-sm text-[#8A8985] font-sans max-w-md">
              A disciplined trajectory from initial discussion to production launch: rigorous
              enough to scale, agile enough to innovate.
            </p>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#F4F3EF] tracking-tight">
            The Engineering{" "}
            <span className="font-serif italic font-normal text-white/70">Process</span>
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-b border-white/10 pb-5 mt-4">
            <p className="font-sans text-xs sm:text-sm text-[#8A8985]">
              <span className="font-semibold text-white">Four phases. </span>
              <em>Zero shortcuts.</em>
            </p>
            <div className="flex items-center gap-4 sm:gap-6 font-mono text-xs text-[#8A8985] overflow-x-auto whitespace-nowrap py-1">
              <span>01 Discover</span>
              <span>·</span>
              <span>02 Design</span>
              <span>·</span>
              <span>03 Engineer</span>
              <span>·</span>
              <span>04 Deploy</span>
            </div>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
        >
          {processes.map((item, index) => (
            <article
              key={index}
              className="bg-[#141413] border border-white/10 rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:border-white/30 transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Huge watermark number in background */}
              <span
                className="absolute right-4 bottom-2 text-7xl font-sans font-black text-white/[0.03] select-none pointer-events-none group-hover:text-white/[0.06] transition-colors"
                aria-hidden="true"
              >
                {item.num}
              </span>

              <div className="relative z-10">
                <div className="flex items-baseline justify-between mb-8 pb-3 border-b border-white/10">
                  <span className="font-mono text-xs text-emerald-400 font-bold">{item.num}</span>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#8A8985]">
                    {item.phase}
                  </span>
                </div>
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#F4F3EF] mb-3 group-hover:text-white transition-colors">
                  {item.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#8A8985] font-sans leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="relative z-10 pt-4 border-t border-white/10 font-mono text-[10px] text-gray-500 uppercase tracking-wider">
                {item.meta}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
