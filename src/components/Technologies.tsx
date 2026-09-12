"use client";

import React, { useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Technologies() {
  const sectionRef = useRef<HTMLElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header appearance
      gsap.from(".tech-header", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
        y: -35,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // Row 1 sweeps in from LEFT
      gsap.from(row1Ref.current, {
        scrollTrigger: {
          trigger: row1Ref.current,
          start: "top 90%",
        },
        x: -70,
        opacity: 0,
        duration: 0.85,
        ease: "power3.out",
      });

      // Row 2 sweeps in from RIGHT
      gsap.from(row2Ref.current, {
        scrollTrigger: {
          trigger: row2Ref.current,
          start: "top 90%",
        },
        x: 70,
        opacity: 0,
        duration: 0.85,
        delay: 0.1,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  const row1 = [
    {
      name: ".NET",
      icon: (
        <svg viewBox="0 0 32 32" className="w-6 h-6">
          <circle cx="16" cy="16" r="14" fill="#512BD4" />
          <path d="M10 22V10L17 22H22V10" stroke="#FFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      ),
    },
    {
      name: "React",
      icon: (
        <svg viewBox="0 0 32 32" className="w-6 h-6">
          <circle cx="16" cy="16" r="2.5" fill="#61DAFB" />
          <ellipse cx="16" cy="16" rx="12" ry="4.5" fill="none" stroke="#0284c7" strokeWidth="1.8" />
          <ellipse cx="16" cy="16" rx="12" ry="4.5" fill="none" stroke="#0284c7" strokeWidth="1.8" transform="rotate(60 16 16)" />
          <ellipse cx="16" cy="16" rx="12" ry="4.5" fill="none" stroke="#0284c7" strokeWidth="1.8" transform="rotate(120 16 16)" />
        </svg>
      ),
    },
    {
      name: "Next.js",
      icon: (
        <svg viewBox="0 0 32 32" className="w-6 h-6">
          <circle cx="16" cy="16" r="14" fill="#000000" />
          <path d="M12 21V11L22 23.5V11" stroke="#FFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      name: "Node.js",
      icon: (
        <svg viewBox="0 0 32 32" className="w-6 h-6">
          <polygon points="16,3 27,9.5 27,22.5 16,29 5,22.5 5,9.5" fill="#339933" />
          <path d="M16 10V22M11 13L16 10L21 13" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      name: "Vue.js",
      icon: (
        <svg viewBox="0 0 32 32" className="w-6 h-6">
          <polygon points="16,26 3,5 9,5 16,17 23,5 29,5" fill="#41B883" />
          <polygon points="16,20 8.5,7 12.5,7 16,13 19.5,7 23.5,7" fill="#35495E" />
        </svg>
      ),
    },
    {
      name: "Python",
      icon: (
        <svg viewBox="0 0 32 32" className="w-6 h-6">
          <path d="M15.5 4C9.5 4 10 6.5 10 6.5L10 9H16V10H7C7 10 4 9.5 4 15.5C4 21.5 6.5 21 6.5 21H9V18.5C9 18.5 8.5 16 11.5 16H17.5C17.5 16 20 16 20 13.5V6.5C20 6.5 20.5 4 15.5 4Z" fill="#3776AB" />
          <circle cx="12" cy="7" r="1" fill="#FFF" />
          <path d="M16.5 28C22.5 28 22 25.5 22 25.5L22 23H16V22H25C25 22 28 22.5 28 16.5C28 10.5 25.5 11 25.5 11H23V13.5C23 13.5 23.5 16 20.5 16H14.5C14.5 16 12 16 12 18.5V25.5C12 25.5 11.5 28 16.5 28Z" fill="#FFD43B" />
          <circle cx="20" cy="25" r="1" fill="#FFF" />
        </svg>
      ),
    },
    {
      name: "PHP",
      icon: (
        <svg viewBox="0 0 32 32" className="w-6 h-6">
          <ellipse cx="16" cy="16" rx="14" ry="9" fill="#777BB4" />
          <text x="16" y="19.5" textAnchor="middle" fill="#FFF" fontSize="10" fontWeight="bold" fontFamily="sans-serif">PHP</text>
        </svg>
      ),
    },
    {
      name: "Laravel",
      icon: (
        <svg viewBox="0 0 32 32" className="w-6 h-6">
          <path d="M7 10L16 5L25 10L16 15L7 10Z" fill="#FF2D20" />
          <path d="M7 12L16 17L25 12L25 20L16 25L7 20Z" fill="#E02419" />
        </svg>
      ),
    },
    {
      name: "MongoDB",
      icon: (
        <svg viewBox="0 0 32 32" className="w-6 h-6">
          <path d="M16 3C16 3 9 10 9 17C9 23 13.5 27 16 29C18.5 27 23 23 23 17C23 10 16 3 16 3Z" fill="#47A248" />
          <path d="M16 3V29C15.5 28.5 14.5 26.5 14.5 22V10L16 3Z" fill="#4DB33D" />
        </svg>
      ),
    },
    {
      name: "MySQL",
      icon: (
        <svg viewBox="0 0 32 32" className="w-6 h-6">
          <circle cx="16" cy="16" r="13" fill="#00758F" />
          <path d="M10 18C12 14 16 13 22 15C19 19 14 20 10 18Z" fill="#F29111" />
        </svg>
      ),
    },
    {
      name: "PostgreSQL",
      icon: (
        <svg viewBox="0 0 32 32" className="w-6 h-6">
          <circle cx="16" cy="16" r="13" fill="#336791" />
          <circle cx="13" cy="14" r="2" fill="#FFF" />
          <path d="M18 13C20 15 21 18 20 22C18 21 16 20 15 18" stroke="#FFF" strokeWidth="2" strokeLinecap="round" fill="none" />
        </svg>
      ),
    },
    {
      name: "SQL Server",
      icon: (
        <svg viewBox="0 0 32 32" className="w-6 h-6">
          <rect x="7" y="6" width="18" height="6" rx="3" fill="#CC292B" />
          <rect x="7" y="13" width="18" height="6" rx="3" fill="#CC292B" />
          <rect x="7" y="20" width="18" height="6" rx="3" fill="#CC292B" />
        </svg>
      ),
    },
  ];

  const row2 = [
    {
      name: "Docker",
      icon: (
        <svg viewBox="0 0 32 32" className="w-6 h-6">
          <rect x="6" y="13" width="4" height="3" fill="#2496ED" />
          <rect x="11" y="13" width="4" height="3" fill="#2496ED" />
          <rect x="16" y="13" width="4" height="3" fill="#2496ED" />
          <rect x="11" y="9" width="4" height="3" fill="#2496ED" />
          <rect x="16" y="9" width="4" height="3" fill="#2496ED" />
          <path d="M4 17C5 24 16 24 22 22C26 21 28 17 28 17H4Z" fill="#2496ED" />
        </svg>
      ),
    },
    {
      name: "Kubernetes",
      icon: (
        <svg viewBox="0 0 32 32" className="w-6 h-6">
          <polygon points="16,5 26,10.5 26,21.5 16,27 6,21.5 6,10.5" fill="none" stroke="#326CE5" strokeWidth="2.5" />
          <circle cx="16" cy="16" r="3.5" fill="#326CE5" />
          <line x1="16" y1="5" x2="16" y2="12.5" stroke="#326CE5" strokeWidth="2" />
          <line x1="26" y1="21.5" x2="19" y2="17.5" stroke="#326CE5" strokeWidth="2" />
          <line x1="6" y1="21.5" x2="13" y2="17.5" stroke="#326CE5" strokeWidth="2" />
        </svg>
      ),
    },
    {
      name: "Terraform",
      icon: (
        <svg viewBox="0 0 32 32" className="w-6 h-6">
          <polygon points="8,5 15,9 15,17 8,13" fill="#844FBA" />
          <polygon points="17,10 24,14 24,22 17,18" fill="#844FBA" />
          <polygon points="8,15 15,19 15,27 8,23" fill="#844FBA" />
          <polygon points="17,1 24,5 24,13 17,9" fill="#5C4EE5" />
        </svg>
      ),
    },
    {
      name: "AWS",
      icon: (
        <svg viewBox="0 0 32 32" className="w-6 h-6">
          <text x="16" y="15" textAnchor="middle" fill="#232F3E" fontSize="9" fontWeight="bold" fontFamily="sans-serif">aws</text>
          <path d="M8 20C13 24 19 24 24 20" stroke="#FF9900" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <polygon points="24,20 22,17 26,18" fill="#FF9900" />
        </svg>
      ),
    },
    {
      name: "Azure",
      icon: (
        <svg viewBox="0 0 32 32" className="w-6 h-6">
          <polygon points="6,25 15,5 20,15 11,25" fill="#0089D6" />
          <polygon points="16,14 21,5 26,25 14,25" fill="#0072C6" />
        </svg>
      ),
    },
    {
      name: "GitLab",
      icon: (
        <svg viewBox="0 0 32 32" className="w-6 h-6">
          <polygon points="16,27 7,16 9,8 16,14" fill="#FC6D26" />
          <polygon points="16,27 25,16 23,8 16,14" fill="#FC6D26" />
          <polygon points="16,27 7,16 25,16" fill="#E24329" />
        </svg>
      ),
    },
    {
      name: "Jenkins",
      icon: (
        <svg viewBox="0 0 32 32" className="w-6 h-6">
          <circle cx="16" cy="16" r="13" fill="#D33833" />
          <circle cx="16" cy="13" r="6" fill="#F0D6B2" />
          <path d="M12 10H20V12H12Z" fill="#1E1E1E" />
          <path d="M10 24C12 21 20 21 22 24" stroke="#FFF" strokeWidth="2" fill="none" />
        </svg>
      ),
    },
    {
      name: "Vercel",
      icon: (
        <svg viewBox="0 0 32 32" className="w-6 h-6">
          <polygon points="16,6 27,25 5,25" fill="#000" />
        </svg>
      ),
    },
    {
      name: "Nginx",
      icon: (
        <svg viewBox="0 0 32 32" className="w-6 h-6">
          <circle cx="16" cy="16" r="13" fill="#009639" />
          <path d="M11 22V10L21 22V10" stroke="#FFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      ),
    },
    {
      name: "Linux",
      icon: (
        <svg viewBox="0 0 32 32" className="w-6 h-6">
          <ellipse cx="16" cy="17" rx="9" ry="11" fill="#000" />
          <ellipse cx="16" cy="18" rx="6.5" ry="8.5" fill="#FFF" />
          <polygon points="16,12 14,15 18,15" fill="#FFA500" />
          <circle cx="13.5" cy="10" r="1.5" fill="#000" />
          <circle cx="18.5" cy="10" r="1.5" fill="#000" />
        </svg>
      ),
    },
    {
      name: "Windows",
      icon: (
        <svg viewBox="0 0 32 32" className="w-6 h-6">
          <rect x="6" y="6" width="9" height="9" fill="#00ADEF" />
          <rect x="17" y="6" width="9" height="9" fill="#00ADEF" />
          <rect x="6" y="17" width="9" height="9" fill="#00ADEF" />
          <rect x="17" y="17" width="9" height="9" fill="#00ADEF" />
        </svg>
      ),
    },
    {
      name: "Figma",
      icon: (
        <svg viewBox="0 0 32 32" className="w-6 h-6">
          <circle cx="20" cy="11" r="4" fill="#FF7262" />
          <rect x="11" y="7" width="5" height="8" rx="4" fill="#F24E1E" />
          <rect x="11" y="15" width="5" height="8" rx="4" fill="#A259FF" />
          <circle cx="20" cy="19" r="4" fill="#1ABCFE" />
          <circle cx="15" cy="25" r="3.5" fill="#0ACF83" />
        </svg>
      ),
    },
    {
      name: "...",
      icon: (
        <div className="w-6 h-6 flex items-center justify-center font-bold text-lg text-zinc-500">
          •••
        </div>
      ),
    },
  ];

  return (
    <section
      id="technologies"
      ref={sectionRef}
      className="py-16 px-4 sm:px-8 max-w-7xl mx-auto bg-[#f5f4ed] overflow-hidden"
    >
      {/* Header Row */}
      <div className="tech-header flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
        <div>
          <span className="text-[11px] sm:text-xs font-mono font-bold tracking-widest text-zinc-500 uppercase">
            — TECHNOLOGIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 mt-1 tracking-tight">
            Tools We Love
          </h2>
        </div>

        <div className="flex items-center gap-5 self-start md:self-auto">
          {/* Handwritten slogan + cute cloud */}
          <div className="flex items-center gap-2">
            <div className="font-handwriting text-zinc-600 text-lg leading-tight text-right">
              <span>A flexible stack.</span><br />
              <span className="font-bold text-zinc-900">For real-world problems.</span>
            </div>
            {/* Cute pixel cloud icon */}
            <div className="w-8 h-8 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-7 h-7">
                <path d="M6 15C4.34 15 3 13.66 3 12C3 10.45 4.18 9.18 5.7 9.03C6.34 6.72 8.47 5 11 5C14.04 5 16.5 7.46 16.5 10.5C16.5 10.67 16.49 10.84 16.47 11C18.45 11.17 20 12.83 20 14.86C20 16.92 18.33 18.59 16.27 18.59H6.5C4.57 18.59 3 17.02 3 15.09" fill="#dceefb" stroke="#1e1e1e" strokeWidth="1.5" />
                <circle cx="8" cy="12" r="1" fill="#1e1e1e" />
                <circle cx="13" cy="12" r="1" fill="#1e1e1e" />
                <path d="M10 14Q10.5 15 11 14" stroke="#1e1e1e" strokeWidth="1.2" fill="none" />
                <circle cx="6" cy="13" r="1.5" fill="#ffb3ba" />
                <circle cx="15" cy="13" r="1.5" fill="#ffb3ba" />
              </svg>
            </div>
          </div>

          {/* View All Button */}
          <button
            className="inline-flex items-center gap-1.5 bg-[#f8b4a6] hover:bg-[#f69d8b] text-zinc-950 border-2 border-zinc-900 rounded-xl px-4 py-2 font-bold text-xs sm:text-sm shadow-[2.5px_2.5px_0px_#1e1e1e] neo-btn cursor-pointer"
          >
            <span>View All</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Row 1 Grid - Sweeps in from LEFT */}
      <div
        ref={row1Ref}
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-3 mb-3"
      >
        {row1.map((item, idx) => (
          <div
            key={idx}
            className="bg-white border-2 border-zinc-900 rounded-xl p-3 flex flex-col items-center justify-center gap-1.5 shadow-[2px_2px_0px_#1e1e1e] hover:translate-x-[-1.5px] hover:translate-y-[-1.5px] hover:shadow-[3.5px_3.5px_0px_#1e1e1e] transition-all cursor-pointer group"
          >
            <div className="w-7 h-7 flex items-center justify-center group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <span className="text-[11px] font-bold text-zinc-900 tracking-tight">
              {item.name}
            </span>
          </div>
        ))}
      </div>

      {/* Row 2 Grid - Sweeps in from RIGHT */}
      <div
        ref={row2Ref}
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-13 gap-3"
      >
        {row2.map((item, idx) => (
          <div
            key={idx}
            className="bg-white border-2 border-zinc-900 rounded-xl p-3 flex flex-col items-center justify-center gap-1.5 shadow-[2px_2px_0px_#1e1e1e] hover:translate-x-[-1.5px] hover:translate-y-[-1.5px] hover:shadow-[3.5px_3.5px_0px_#1e1e1e] transition-all cursor-pointer group"
          >
            <div className="w-7 h-7 flex items-center justify-center group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <span className="text-[11px] font-bold text-zinc-900 tracking-tight">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
