"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenContact: () => void;
  onOpenAbout: () => void;
}

export default function Navbar({ onOpenContact, onOpenAbout }: NavbarProps) {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "technologies", "projects", "about", "contact"];
      const scrollY = window.scrollY;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop - 120;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          <div className="relative w-9 h-9 overflow-hidden rounded-md border-1.5 border-zinc-900 bg-[#e8f5ea] flex items-center justify-center shadow-[1.5px_1.5px_0px_#1e1e1e]">
            {/* Pixel Sprout Icon */}
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-emerald-600">
              <path d="M12 2C12 2 11 7 7 8C7 11 9 13 11 13V18H13V12C15 12 17 10 17 7C13 6 12 2 12 2Z" fill="#16a34a" />
              <path d="M9 19H15V22H9V19Z" fill="#b45309" />
              <circle cx="12" cy="6" r="1.5" fill="#86efac" />
            </svg>
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
              Full Stack Dev &amp; CS Engineer • SOA University
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Capsule */}
        <nav className="hidden md:flex items-center bg-[#eae9df]/90 border border-zinc-400/80 rounded-full p-1 shadow-[1px_1px_0px_#1e1e1e]">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  if (item.id === "about") {
                    // smooth scroll or open about
                  }
                }}
                className={`text-xs lg:text-sm font-semibold transition-all px-3.5 py-1.5 rounded-full ${
                  isActive
                    ? "bg-[#c3e3c3] text-zinc-950 border border-zinc-900 shadow-[1px_1px_0px_#1e1e1e]"
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
            <span>SOA University</span>
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
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border-2 border-zinc-900 bg-[#eae9df] shadow-[2px_2px_0px_#1e1e1e]"
            aria-label="Open Mobile Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-zinc-900" />
            ) : (
              <Menu className="w-5 h-5 text-zinc-900" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 pt-3 border-t border-zinc-300 flex flex-col gap-2">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold border ${
                activeSection === item.id
                  ? "bg-[#c3e3c3] text-zinc-950 border-zinc-900"
                  : "bg-[#eae9df]/80 text-zinc-800 border-zinc-400/50"
              }`}
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact();
            }}
            className="mt-2 w-full flex items-center justify-center gap-2 bg-[#f8b4a6] text-zinc-950 border-2 border-zinc-900 rounded-lg py-2.5 font-bold text-sm shadow-[2px_2px_0px_#1e1e1e]"
          >
            <span>Let&apos;s Build</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
}
