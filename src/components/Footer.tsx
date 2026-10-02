"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolioData } from "@/data/portfolioData";
import Magnetic from "./Magnetic";

gsap.registerPlugin(ScrollTrigger);

interface FooterProps {
  onOpenContact: () => void;
}

function ArrowUpIcon({ className = "w-3 h-3" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function Footer({ onOpenContact }: FooterProps) {
  const { profile, socials } = portfolioData;
  const footerRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (ctaRef.current) {
        gsap.from(ctaRef.current.children, {
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          y: 40,
          opacity: 0,
          stagger: 0.12,
          duration: 0.9,
          ease: "power3.out",
        });
      }

      if (bottomRef.current) {
        gsap.from(bottomRef.current, {
          scrollTrigger: {
            trigger: bottomRef.current,
            start: "top 95%",
            toggleActions: "play none none none",
          },
          y: 60,
          opacity: 0,
          duration: 1.2,
          ease: "power4.out",
        });
      }
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      ref={footerRef}
      id="contacts"
      className="relative pt-24 pb-12 bg-[#0E0E0D] border-t border-white/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-10">
        {/* Main CTA Section */}
        <div ref={ctaRef} className="mb-20 pb-16 border-b border-white/10">
          <div className="flex items-center gap-2 mb-4">
            <span className="nav__cta-dot" />
            <span className="font-mono text-xs uppercase tracking-wider text-emerald-400">
              Available for full-time engineering & freelance projects
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-[#F4F3EF] tracking-tight mb-6">
            Have an ambitious project in mind?{" "}
            <span className="font-serif italic font-normal text-white/70 block sm:inline">
              Let&apos;s build together.
            </span>
          </h2>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-2">
            <a
              href={`mailto:${profile.email}`}
              className="font-serif text-2xl sm:text-4xl text-[#F4F3EF] hover:text-white underline decoration-white/30 underline-offset-8 transition-colors"
            >
              {profile.email}
            </a>

            <Magnetic strength={0.3}>
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#F4F3EF] text-black font-semibold text-sm sm:text-base hover:bg-white transition-all shadow-2xl cursor-pointer hover:shadow-white/20"
              >
                <span className="nav__cta-dot" />
                <span>Start a Conversation →</span>
              </button>
            </Magnetic>
          </div>
        </div>

        {/* Directory Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-20 text-xs sm:text-sm font-sans">
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center font-mono text-xs font-bold text-emerald-400">
                AS
              </div>
              <span className="font-bold text-base text-white tracking-tight">
                {profile.firstName.toLowerCase()}
              </span>
            </div>
            <p className="text-[#8A8985] max-w-sm leading-relaxed">
              Software engineer &amp; full-stack developer.
              <br />
              Java, Python, MERN stack &amp; high-performance backend systems.
            </p>
          </div>

          <div className="lg:col-span-2 space-y-3">
            <p className="font-mono text-xs uppercase tracking-wider text-[#5C5B57] mb-4">
              Navigation
            </p>
            <div className="flex flex-col space-y-2 text-[#8A8985]">
              <button
                onClick={() => scrollToSection("projects")}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                About & Skills
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("feed")}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                Feed
              </button>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-3">
            <p className="font-mono text-xs uppercase tracking-wider text-[#5C5B57] mb-4">
              Socials
            </p>
            <div className="flex flex-col space-y-2 text-[#8A8985]">
              {socials.map((item, idx) => (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <p className="font-mono text-xs uppercase tracking-wider text-[#5C5B57] mb-4">
              Contact
            </p>
            <div className="space-y-1 text-[#8A8985]">
              <a href={`mailto:${profile.email}`} className="text-white hover:underline block">
                {profile.email}
              </a>
              <p>+91 (947) 323 6395</p>
              <p>Odisha / Bihar, India</p>
              <p className="text-emerald-400 font-mono text-xs pt-1">
                {profile.timezone}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Giant Watermark Name */}
        <div
          ref={bottomRef}
          className="pt-10 border-t border-white/10 flex flex-col items-center justify-center text-center will-change-transform w-full"
        >
          <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-[#5C5B57] mb-6 text-center sm:text-left">
            <span>©2026 Aniket Singh</span>
            <span className="hidden sm:inline">All rights reserved</span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer py-1"
            >
              <span>Back to top</span>
              <ArrowUpIcon className="w-3 h-3" />
            </button>
          </div>

          <div className="w-full flex justify-between items-baseline select-none font-sans font-black text-[12vw] sm:text-[10vw] lg:text-[6.8rem] xl:text-[7.8rem] uppercase opacity-90 py-2 px-3 sm:px-6">
            {profile.firstName
              .toUpperCase()
              .split("")
              .map((char, idx) => (
                <span
                  key={idx}
                  className={`inline-block ${
                    idx === profile.firstName.length - 1 ? "pr-2 sm:pr-3" : ""
                  }`}
                >
                  {char}
                </span>
              ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
