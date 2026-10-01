"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";

interface ArticlesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onScrollToFeed: () => void;
}

function CloseIcon({ className = "w-5 h-5" }: { className?: string }) {
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

function BookOpenIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
}

function ExternalArrowIcon({ className = "w-3 h-3" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
    </svg>
  );
}

const articlesList = [
  {
    title: "Building Modern & Accessible Web Applications with React and Tailwind CSS",
    date: "Feb 2026",
    readTime: "5 min read",
    tags: ["React", "Tailwind CSS", "Accessibility"],
    snippet:
      "A practical guide to crafting responsive, performant user interfaces with component-driven architectures and WCAG standards.",
  },
  {
    title: "From Problem Statement to Functional Prototype: Hackathon Engineering Lessons",
    date: "Jan 2026",
    readTime: "7 min read",
    tags: ["Hackathon", "Prototyping", "Teamwork"],
    snippet:
      "How our team delivered an innovative working solution under strict time pressure, maintaining code clarity and effective sprint execution.",
  },
  {
    title: "Building Interactive GUI Applications with Python and Clean Code Principles",
    date: "Dec 2025",
    readTime: "6 min read",
    tags: ["Python", "Algorithms", "Clean Code"],
    snippet:
      "Architecture breakdown of interactive applications in Python, covering data structures, event dispatching, and robust error management.",
  },
];

export default function ArticlesModal({
  isOpen,
  onClose,
  onScrollToFeed,
}: ArticlesModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && overlayRef.current && modalRef.current) {
      gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: "power2.out" });
      gsap.fromTo(
        modalRef.current,
        { scale: 0.85, opacity: 0, y: 30 },
        { scale: 1, opacity: 1, y: 0, duration: 0.45, ease: "back.out(1.5)" }
      );
    }
  }, [isOpen]);

  const handleClose = () => {
    if (overlayRef.current && modalRef.current) {
      gsap.to(modalRef.current, {
        scale: 0.9,
        opacity: 0,
        y: 20,
        duration: 0.25,
        ease: "power2.in",
      });
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.25,
        ease: "power2.in",
        onComplete: onClose,
      });
    } else {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
      onClick={handleClose}
    >
      <div
        ref={modalRef}
        className="bg-[#141413] text-[#F4F3EF] rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-white/15 shadow-2xl relative max-h-[90vh] overflow-y-auto will-change-transform"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-[#8A8985] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <CloseIcon className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3.5 mb-6">
          <div className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-[#F4F3EF]">
            <BookOpenIcon className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#8A8985] mb-0.5">
              (Index des écrits)
            </div>
            <h3 className="font-serif font-light text-xl sm:text-2xl text-[#F4F3EF]">
              Articles Techniques &amp;{" "}
              <span className="font-serif italic font-normal text-white/70">Recherches</span>
            </h3>
          </div>
        </div>

        <div className="space-y-4">
          {articlesList.map((article, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#1C1B1A] border border-white/10 hover:border-white/25 transition-all text-left group"
            >
              <div className="flex items-center justify-between text-xs font-mono text-[#8A8985] mb-2">
                <span>{article.date}</span>
                <span>{article.readTime}</span>
              </div>
              <h4 className="font-sans font-semibold text-base sm:text-lg text-[#F4F3EF] mb-2 leading-snug group-hover:text-white transition-colors">
                {article.title}
              </h4>
              <p className="text-xs sm:text-sm text-[#C4C3BE] font-sans leading-relaxed mb-4">
                {article.snippet}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {article.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[#8A8985]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => {
                    handleClose();
                    onScrollToFeed();
                  }}
                  className="text-xs font-mono text-[#F4F3EF] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>Voir dans le Feed</span>
                  <ExternalArrowIcon className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
