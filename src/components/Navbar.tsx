"use client";

import React, { useState, useEffect } from "react";
import Magnetic from "@/components/Magnetic";
import { portfolioData } from "@/data/portfolioData";

import { playClickSound, playPopSound } from "@/utils/audio";
import { useBodyScrollLock } from "@/utils/scrollLock";

interface NavbarProps {
  onOpenArticles: () => void;
  onOpenResume?: () => void;
  onOpenContact: () => void;
  onOpenCommandPalette?: () => void;
  onToggleSound?: () => void;
  isSoundActive?: boolean;
}

export default function Navbar({
  onOpenArticles,
  onOpenResume,
  onOpenContact,
  onOpenCommandPalette,
  onToggleSound,
  isSoundActive = true,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { profile, socials } = portfolioData;

  useBodyScrollLock(mobileMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (!target) return;
    const lenis = (window as unknown as { __lenis?: { scrollTo: (el: HTMLElement, opts: { offset: number; duration: number }) => void } }).__lenis;
    if (lenis) {
      lenis.scrollTo(target, { offset: -70, duration: 1.2 });
    } else {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const githubUrl = socials.find((s) => s.name.toLowerCase() === "github")?.url || "https://github.com";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0E0E0D]/90 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl"
            : "bg-transparent py-5 sm:py-7"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-10 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("hero");
            }}
            className="group flex items-center gap-3 text-white hover:opacity-90 transition-opacity"
            aria-label="Aniket Singh, return to top"
          >
            <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center font-mono text-xs font-bold text-emerald-400 group-hover:border-emerald-400/50 group-hover:scale-105 transition-all">
              AS
            </div>
            <span className="font-sans font-bold text-sm sm:text-base tracking-tight text-[#F4F3EF]">
              {profile.firstName.toLowerCase()}
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8 text-xs font-sans tracking-wide text-[#8A8985]">
            <button
              onClick={() => scrollToSection("projects")}
              className="hover:text-[#F4F3EF] transition-colors cursor-pointer"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-[#F4F3EF] transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="hover:text-[#F4F3EF] transition-colors cursor-pointer"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("feed")}
              className="hover:text-[#F4F3EF] transition-colors cursor-pointer"
            >
              Feed
            </button>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {onOpenCommandPalette && (
              <button
                onClick={() => {
                  playClickSound();
                  onOpenCommandPalette();
                }}
                className="hidden lg:inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 hover:border-white/25 text-[11px] font-mono text-[#8A8985] hover:text-white transition-all cursor-pointer"
                title="Spotlight Search (Ctrl+K)"
                aria-label="Open Command Palette"
              >
                <svg className="w-3 h-3 text-emerald-400" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Ctrl K</span>
              </button>
            )}

            {onToggleSound && (
              <button
                onClick={() => {
                  playPopSound();
                  onToggleSound();
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 hover:border-white/25 text-[11px] font-mono text-[#8A8985] hover:text-white transition-all cursor-pointer"
                title={isSoundActive ? "Mute sound effects" : "Enable sound effects"}
                aria-label="Toggle Sound"
              >
                <div className="flex items-end gap-0.5 h-3">
                  <span
                    className={`w-0.5 rounded-full transition-all duration-300 ${
                      isSoundActive ? "h-3 bg-emerald-400 animate-pulse" : "h-1 bg-white/30"
                    }`}
                  />
                  <span
                    className={`w-0.5 rounded-full transition-all duration-300 ${
                      isSoundActive ? "h-2 bg-emerald-400" : "h-1 bg-white/30"
                    }`}
                  />
                  <span
                    className={`w-0.5 rounded-full transition-all duration-300 ${
                      isSoundActive ? "h-3 bg-emerald-400 animate-pulse" : "h-1 bg-white/30"
                    }`}
                  />
                </div>
                <span className="hidden sm:inline">{isSoundActive ? "SFX" : "Mute"}</span>
              </button>
            )}

            <Magnetic strength={0.25}>
              <button
                onClick={onOpenContact}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-[#141413] hover:border-white/40 text-xs font-sans font-medium text-[#F4F3EF] transition-all cursor-pointer shadow-lg hover:shadow-emerald-500/5"
              >
                <span className="nav__cta-dot" />
                <span>Let&#39;s talk</span>
              </button>
            </Magnetic>

            {onOpenResume && (
              <button
                onClick={onOpenResume}
                className="pill-nav cursor-pointer text-xs"
                aria-label="View Resume"
              >
                Resume
              </button>
            )}

            <button
              onClick={onOpenArticles}
              className="pill-nav cursor-pointer text-xs"
              aria-label="View Articles"
            >
              Articles
            </button>

            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="circle-btn"
              aria-label="GitHub Profile"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 496 512"
                className="w-3.5 h-3.5"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-3.5 flex flex-col justify-between">
                <span
                  className={`block h-0.5 w-full bg-white transition-transform duration-300 ${
                    mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-full bg-white transition-transform duration-300 ${
                    mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          data-lenis-prevent
          className="fixed inset-0 z-40 bg-[#0E0E0D]/98 backdrop-blur-2xl flex flex-col justify-between px-8 pt-28 pb-12 transition-all overscroll-contain"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-[#8A8985]">(Menu)</p>
          <nav className="flex flex-col space-y-6 my-auto text-3xl font-serif text-[#F4F3EF]">
            <button
              onClick={() => scrollToSection("projects")}
              className="flex items-baseline gap-4 text-left hover:text-white"
            >
              <i className="font-mono text-sm not-italic text-emerald-400">01</i>
              <span>Projects</span>
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="flex items-baseline gap-4 text-left hover:text-white"
            >
              <i className="font-mono text-sm not-italic text-emerald-400">02</i>
              <span>About &amp; Skills</span>
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="flex items-baseline gap-4 text-left hover:text-white"
            >
              <i className="font-mono text-sm not-italic text-emerald-400">03</i>
              <span>Experience &amp; Journey</span>
            </button>
            <button
              onClick={() => scrollToSection("feed")}
              className="flex items-baseline gap-4 text-left hover:text-white"
            >
              <i className="font-mono text-sm not-italic text-emerald-400">04</i>
              <span>Feed &amp; Insights</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="flex items-baseline gap-4 text-left text-white"
            >
              <i className="font-mono text-sm not-italic text-emerald-400">05</i>
              <span className="italic font-editorial">Let&#39;s talk →</span>
            </button>
          </nav>
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-[#8A8985] gap-2">
            <span>Aniket Singh · Software Engineer</span>
            <a href={`mailto:${profile.email}`} className="text-white hover:underline">
              {profile.email}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
