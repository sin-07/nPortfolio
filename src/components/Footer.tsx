"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  const footerLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Technologies", href: "#technologies" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="w-full bg-[#f5f4ed] text-zinc-700 py-8 px-4 sm:px-8 border-t border-zinc-300/80">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm">
        {/* Left Copyright */}
        <div className="text-zinc-600 font-medium text-center md:text-left">
          © 2026 <strong className="text-zinc-900 font-bold">Aniket Singh</strong>. All rights reserved.
          <span className="hidden sm:inline text-zinc-400 ml-1.5">• Siksha &apos;O&apos; Anusandhan University</span>
        </div>

        {/* Center Navigation Links */}
        <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {footerLinks.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="text-zinc-600 hover:text-zinc-950 font-medium transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Motto */}
        <div className="text-zinc-600 font-medium flex items-center gap-1.5">
          <span>Build</span>
          <span>•</span>
          <span>Learn</span>
          <span>•</span>
          <span>Share</span>
          <span>•</span>
          <span>Grow</span>
        </div>
      </div>
    </footer>
  );
}
