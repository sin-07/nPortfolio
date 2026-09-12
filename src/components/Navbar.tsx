"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";
import gsap from "gsap";

interface NavbarProps {
  onOpenContact: () => void;
  onOpenAbout: () => void;
}

export default function Navbar({ onOpenContact, onOpenAbout }: NavbarProps) {
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMenuRendered, setIsMenuRendered] = useState(false);

  const navRef = useRef<HTMLElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const isInitialMount = useRef(true);

  const toggleMobileMenu = () => {
    if (!mobileMenuOpen) {
      setIsMenuRendered(true);
      setMobileMenuOpen(true);
    } else {
      closeMobileMenu();
    }
  };

  const closeMobileMenu = () => {
    if (mobileMenuRef.current) {
      gsap.to(mobileMenuRef.current, {
        opacity: 0,
        y: -12,
        duration: 0.22,
        ease: "power2.in",
        onComplete: () => {
          setIsMenuRendered(false);
          setMobileMenuOpen(false);
        },
      });
    } else {
      setIsMenuRendered(false);
      setMobileMenuOpen(false);
    }
  };

  // Animate mobile dropdown appearance with GSAP
  useEffect(() => {
    if (isMenuRendered && mobileMenuRef.current) {
      gsap.fromTo(
        mobileMenuRef.current,
        { opacity: 0, y: -15 },
        { opacity: 1, y: 0, duration: 0.35, ease: "power3.out" }
      );
      gsap.fromTo(
        ".mobile-nav-item",
        { x: -25, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.28, stagger: 0.045, ease: "power3.out" }
      );
    }
  }, [isMenuRendered]);

  // Scroll spy to detect active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "projects", "technologies", "about", "contact"];
      const scrollY = window.scrollY;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop - 140;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP ultra-smooth sliding pill animation
  useEffect(() => {
    const currentTargetId = hoveredSection || activeSection;
    const targetElement = itemRefs.current[currentTargetId];
    const navContainer = navRef.current;
    const pill = pillRef.current;

    if (!targetElement || !navContainer || !pill) return;

    const navRect = navContainer.getBoundingClientRect();
    const targetRect = targetElement.getBoundingClientRect();

    const x = targetRect.left - navRect.left;
    const y = targetRect.top - navRect.top;
    const width = targetRect.width;
    const height = targetRect.height;

    if (isInitialMount.current) {
      // Immediate set on mount without jarring slide from 0
      gsap.set(pill, {
        x,
        y,
        width,
        height,
        opacity: 1,
      });
      isInitialMount.current = false;
    } else {
      // Fluid spring-smooth glide
      gsap.to(pill, {
        x,
        y,
        width,
        height,
        opacity: 1,
        duration: 0.38,
        ease: "power3.out",
        overwrite: "auto",
      });
    }
  }, [activeSection, hoveredSection]);

  // Recalculate position on window resize
  useEffect(() => {
    const handleResize = () => {
      const currentTargetId = hoveredSection || activeSection;
      const targetElement = itemRefs.current[currentTargetId];
      const navContainer = navRef.current;
      const pill = pillRef.current;

      if (!targetElement || !navContainer || !pill) return;

      const navRect = navContainer.getBoundingClientRect();
      const targetRect = targetElement.getBoundingClientRect();

      gsap.set(pill, {
        x: targetRect.left - navRect.left,
        y: targetRect.top - navRect.top,
        width: targetRect.width,
        height: targetRect.height,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeSection, hoveredSection]);

  const navItems = [
    { label: "Home", id: "home", href: "#home" },
    { label: "Services", id: "services", href: "#services" },
    { label: "Projects", id: "projects", href: "#projects" },
    { label: "Technologies", id: "technologies", href: "#technologies" },
    { label: "About", id: "about", href: "#about" },
    { label: "Contact", id: "contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full py-4 px-4 sm:px-8 bg-[#f5f4ed]/95 backdrop-blur-md border-b border-zinc-300/80">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo - Aniket Singh */}
        <Link href="#home" className="flex items-center gap-2.5 group">
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 overflow-hidden rounded-xl border-1.5 border-zinc-900 bg-[#def7ec] flex items-center justify-center shadow-[1.5px_1.5px_0px_#1e1e1e] group-hover:scale-105 transition-transform flex-shrink-0">
            <Image
              src="/images/aniket-portrait.jpg"
              alt="Aniket Singh - Software Engineer @ TCS"
              fill
              sizes="40px"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-base sm:text-lg tracking-tight text-zinc-950 font-sans leading-tight">
                Aniket Singh
              </span>
              <span className="text-[10px] font-pixel text-emerald-700 bg-emerald-100 border border-emerald-300 px-1.5 py-0.2 rounded">
                ByteBloom
              </span>
            </div>
            <span className="text-[10px] sm:text-xs text-zinc-600 font-medium tracking-wide">
              Software Engineer @ TCS • Full Stack Developer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Capsule with GSAP Smooth Sliding Pill */}
        <nav
          ref={navRef}
          onMouseLeave={() => setHoveredSection(null)}
          className="relative hidden md:flex items-center bg-[#eae9df]/90 border border-zinc-400/80 rounded-full p-1 shadow-[1px_1px_0px_#1e1e1e]"
        >
          {/* Animated Sliding Pill Indicator */}
          <div
            ref={pillRef}
            className="absolute top-1 left-0 rounded-full bg-[#c3e3c3] border border-zinc-900 shadow-[1px_1px_0px_#1e1e1e] pointer-events-none z-0 opacity-0 will-change-transform"
          />

          {navItems.map((item) => {
            const isTarget = (hoveredSection || activeSection) === item.id;
            return (
              <a
                key={item.id}
                ref={(el) => {
                  itemRefs.current[item.id] = el;
                }}
                href={item.href}
                onMouseEnter={() => setHoveredSection(item.id)}
                onClick={() => {
                  setActiveSection(item.id);
                  setHoveredSection(null);
                }}
                className={`relative z-10 text-xs lg:text-sm font-semibold px-3.5 py-1.5 rounded-full transition-colors duration-200 select-none ${
                  isTarget
                    ? "text-zinc-950 font-bold"
                    : "text-zinc-700 hover:text-zinc-950"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Retro status badge + Let's Build CTA */}
        <div className="flex items-center gap-2.5 sm:gap-3.5">
          {/* Status badge */}
          <div className="hidden lg:flex items-center gap-1.5 bg-[#eae9df] border-1.5 border-zinc-900 rounded-full px-3 py-1 text-xs font-semibold text-zinc-800 shadow-[1px_1px_0px_#1e1e1e]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Software Engineer @ TCS</span>
          </div>

          {/* Let's Build Button */}
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-1.5 bg-[#f8b4a6] hover:bg-[#f69d8b] text-zinc-950 border-2 border-zinc-900 rounded-lg sm:rounded-xl px-4 py-2 font-bold text-xs sm:text-sm shadow-[2.5px_2.5px_0px_#1e1e1e] neo-btn cursor-pointer"
          >
            <span>Let&apos;s Build</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg border-2 border-zinc-900 bg-[#eae9df] shadow-[2px_2px_0px_#1e1e1e] cursor-pointer"
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-zinc-900 transition-transform rotate-90" />
            ) : (
              <Menu className="w-5 h-5 text-zinc-900 transition-transform" />
            )}
          </button>
        </div>
      </div>

      {/* Animated Mobile Menu Dropdown */}
      {isMenuRendered && (
        <div
          ref={mobileMenuRef}
          className="md:hidden mt-3 pt-3 border-t-2 border-zinc-900/40 flex flex-col gap-2 will-change-transform"
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => closeMobileMenu()}
              className={`mobile-nav-item px-4 py-2.5 rounded-xl text-sm font-bold border-2 transition-all cursor-pointer ${
                activeSection === item.id
                  ? "bg-[#c3e3c3] text-zinc-950 border-zinc-900 shadow-[2px_2px_0px_#1e1e1e]"
                  : "bg-[#eae9df] text-zinc-800 border-zinc-900/30 hover:border-zinc-900 hover:bg-white"
              }`}
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => {
              closeMobileMenu();
              onOpenContact();
            }}
            className="mobile-nav-item mt-1 w-full flex items-center justify-center gap-2 bg-[#f8b4a6] hover:bg-[#f69d8b] text-zinc-950 border-2 border-zinc-900 rounded-xl py-3 font-bold text-sm shadow-[2.5px_2.5px_0px_#1e1e1e] neo-btn cursor-pointer"
          >
            <span>Let&apos;s Build</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
}
