"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { portfolioData } from "@/data/portfolioData";
import { playClickSound, playPopSound } from "@/utils/audio";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
  onOpenResume: () => void;
  onOpenArticles: () => void;
  onNotify: (msg: string) => void;
  onToggleSound: () => void;
  isSoundActive: boolean;
}

interface ActionItem {
  id: string;
  category: "Navigation" | "Projects" | "Actions" | "Preferences";
  title: string;
  subtitle: string;
  badge?: string;
}

const STATIC_ACTIONS: ActionItem[] = [
  {
    id: "project-tradexpert",
    category: "Projects",
    title: "TradeXpert Platform",
    subtitle: "Multi-Asset Trading Engine & Yahoo Finance API",
    badge: "Oct 25",
  },
  {
    id: "project-rental",
    category: "Projects",
    title: "Rental Car Booking Platform",
    subtitle: "Vehicle Fleet Management & JWT Authentication",
    badge: "Jan 25",
  },
  {
    id: "project-raven",
    category: "Projects",
    title: "Raven Tutorials Platform",
    subtitle: "Full-Stack MERN Institute & Marketing System",
    badge: "MERN",
  },
  {
    id: "nav-about",
    category: "Navigation",
    title: "Capabilities & Technical Stack",
    subtitle: "Java, Python, MERN, OOPs, and System Design",
    badge: "03",
  },
  {
    id: "nav-experience",
    category: "Navigation",
    title: "Experience & Academic Journey",
    subtitle: "ITER B.Tech (7.46 CGPA) and Raven Tutorials",
    badge: "04",
  },
  {
    id: "nav-feed",
    category: "Navigation",
    title: "Certifications & Insights Feed",
    subtitle: "Verified credentials and interactive engineering posts",
    badge: "05",
  },
  {
    id: "action-resume",
    category: "Actions",
    title: "Curriculum Vitae / Resume",
    subtitle: "View verified credentials & download PDF document",
    badge: "PDF",
  },
  {
    id: "action-articles",
    category: "Actions",
    title: "Technical Articles Index",
    subtitle: "Architecture breakdown, hackathons, and web guides",
    badge: "Read",
  },
  {
    id: "action-contact",
    category: "Actions",
    title: "Start a Conversation",
    subtitle: "Send a message or discuss full-time engineering roles",
    badge: "Hire",
  },
  {
    id: "action-copy-email",
    category: "Actions",
    title: "Copy Email Address",
    subtitle: portfolioData.profile.email,
    badge: "Copy",
  },
  {
    id: "pref-sound",
    category: "Preferences",
    title: "Toggle Micro-Haptic Audio",
    subtitle: "Subtle synthesizer feedback on interactions",
    badge: "Sound",
  },
];

function SearchIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function CloseIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function CommandPaletteModal({
  isOpen,
  onClose,
  onOpenContact,
  onOpenResume,
  onOpenArticles,
  onNotify,
  onToggleSound,
  isSoundActive,
}: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClose = useCallback(() => {
    if (overlayRef.current && modalRef.current) {
      gsap.to(modalRef.current, {
        scale: 0.92,
        opacity: 0,
        y: 15,
        duration: 0.2,
        ease: "power2.in",
      });
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => {
          setQuery("");
          setSelectedIndex(0);
          onClose();
        },
      });
    } else {
      setQuery("");
      setSelectedIndex(0);
      onClose();
    }
  }, [onClose]);

  const executeAction = useCallback(
    async (id: string) => {
      handleClose();

      switch (id) {
        case "project-tradexpert":
        case "project-rental":
        case "project-raven":
          playClickSound();
          setTimeout(() => {
            const el = document.getElementById("projects");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }, 150);
          break;

        case "nav-about":
          playClickSound();
          setTimeout(() => {
            const el = document.getElementById("about");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }, 150);
          break;

        case "nav-experience":
          playClickSound();
          setTimeout(() => {
            const el = document.getElementById("experience");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }, 150);
          break;

        case "nav-feed":
          playClickSound();
          setTimeout(() => {
            const el = document.getElementById("feed");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }, 150);
          break;

        case "action-resume":
          playClickSound();
          onOpenResume();
          break;

        case "action-articles":
          playClickSound();
          onOpenArticles();
          break;

        case "action-contact":
          playClickSound();
          onOpenContact();
          break;

        case "action-copy-email":
          playPopSound();
          try {
            await navigator.clipboard.writeText(portfolioData.profile.email);
            onNotify("Email copied to clipboard: " + portfolioData.profile.email);
          } catch {
            onNotify("Email: " + portfolioData.profile.email);
          }
          break;

        case "pref-sound":
          onToggleSound();
          onNotify(isSoundActive ? "Audio Muted" : "Audio Enabled");
          break;
      }
    },
    [handleClose, onOpenResume, onOpenArticles, onOpenContact, onToggleSound, onNotify, isSoundActive]
  );

  const filtered = STATIC_ACTIONS.filter((act) => {
    const q = query.toLowerCase();
    return (
      act.title.toLowerCase().includes(q) ||
      act.subtitle.toLowerCase().includes(q) ||
      act.category.toLowerCase().includes(q)
    );
  });

  useEffect(() => {
    if (isOpen) {
      if (overlayRef.current && modalRef.current) {
        gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.25, ease: "power2.out" });
        gsap.fromTo(
          modalRef.current,
          { scale: 0.92, opacity: 0, y: -20 },
          { scale: 1, opacity: 1, y: 0, duration: 0.35, ease: "back.out(1.6)" }
        );
      }
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      handleClose();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1));
      playClickSound();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + (filtered.length || 1)) % (filtered.length || 1));
      playClickSound();
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filtered[selectedIndex]) {
        executeAction(filtered[selectedIndex].id);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-start justify-center pt-24 sm:pt-32 px-4 bg-black/85 backdrop-blur-md"
      onClick={handleClose}
      onKeyDown={handleKeyDown}
    >
      <div
        ref={modalRef}
        className="bg-[#141413] text-[#F4F3EF] rounded-3xl max-w-xl w-full border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden will-change-transform"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10 bg-white/[0.02]">
          <SearchIcon className="w-5 h-5 text-emerald-400 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type a command, project, or section... (↑↓ to navigate)"
            className="w-full bg-transparent text-sm sm:text-base text-white placeholder-[#8A8985] focus:outline-none font-sans"
          />
          <button
            onClick={handleClose}
            className="p-1 rounded-full hover:bg-white/10 text-[#8A8985] hover:text-white transition-colors cursor-pointer"
            aria-label="Close Command Palette"
          >
            <CloseIcon className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[380px] overflow-y-auto p-2.5 space-y-1">
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-xs font-mono text-[#8A8985]">
              No matching commands or projects found.
            </div>
          ) : (
            filtered.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => executeAction(item.id)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex items-center justify-between p-3 rounded-2xl cursor-pointer transition-all duration-150 ${
                    isSelected
                      ? "bg-white/10 text-white shadow-lg"
                      : "text-[#C4C3BE] hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        isSelected ? "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]" : "bg-white/20"
                      }`}
                    />
                    <div className="min-w-0">
                      <p className="text-xs sm:text-sm font-semibold truncate leading-tight">
                        {item.title}
                      </p>
                      <p className="text-[11px] font-mono text-[#8A8985] truncate mt-0.5">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                  {item.badge && (
                    <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[#8A8985] uppercase tracking-wider flex-shrink-0">
                      {item.badge}
                    </span>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Footer info & shortcut cues */}
        <div className="px-5 py-3 border-t border-white/10 bg-white/[0.01] flex items-center justify-between text-[11px] font-mono text-[#8A8985]">
          <div className="flex items-center gap-3">
            <span>
              <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white text-[10px]">↑</kbd>
              <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white text-[10px] ml-1">↓</kbd> navigate
            </span>
            <span>
              <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white text-[10px]">↵</kbd> select
            </span>
            <span>
              <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white text-[10px]">esc</kbd> close
            </span>
          </div>
          <span className="hidden sm:inline text-emerald-400">Aniket Singh Portfolio</span>
        </div>
      </div>
    </div>
  );
}
