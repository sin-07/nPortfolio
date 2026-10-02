"use client";

import React, { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { FeedItem } from "@/data/portfolioData";
import { useBodyScrollLock } from "@/utils/scrollLock";

interface FeedModalProps {
  item: FeedItem | null;
  likes: number;
  onClose: () => void;
}

export default function FeedModal({ item, likes, onClose }: FeedModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useBodyScrollLock(Boolean(item));

  useEffect(() => {
    if (item && overlayRef.current && modalRef.current) {
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" }
      );
      gsap.fromTo(
        modalRef.current,
        { scale: 0.85, opacity: 0, y: 30 },
        { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "back.out(1.5)" }
      );
    }
  }, [item]);

  const handleClose = useCallback(() => {
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
  }, [onClose]);

  useEffect(() => {
    if (!item) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [item, handleClose]);

  if (!item) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
      onClick={handleClose}
    >
      <div
        ref={modalRef}
        data-lenis-prevent
        className="bg-[#141413] text-[#F4F3EF] border border-white/15 rounded-3xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto overscroll-contain shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <svg stroke="currentColor" fill="currentColor" viewBox="0 0 20 20" className="w-5 h-5">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {item.type === "certificate" ? (
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full font-medium">
              Official Credential
            </span>
            <h3 className="font-serif font-light text-2xl sm:text-3xl text-[#F4F3EF] mt-4 mb-4">
              {item.title}
            </h3>
            {item.imageUrl && (
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full rounded-2xl border border-white/10 mb-6 shadow-md"
              />
            )}
            <p className="text-sm text-[#C4C3BE] leading-relaxed mb-6 font-sans">
              {item.content}
            </p>
            {item.sourceUrl && (
              <a
                href={item.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F4F3EF] text-black hover:bg-white transition-all text-xs sm:text-sm font-semibold shadow-xl"
              >
                <span>Verify on {item.badge || "coursera.org"}</span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 20 20"
                  className="w-4 h-4"
                >
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
              </a>
            )}
          </div>
        ) : (
          <div>
            {item.author && (
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <div className="w-12 h-12 rounded-full bg-[#1C1B1A] border border-white/15 text-[#F4F3EF] flex items-center justify-center font-serif font-bold text-base">
                  <span>{item.author.name.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-sm sm:text-base text-[#F4F3EF]">
                    {item.author.name}
                  </h4>
                  <p className="text-xs text-[#8A8985]">{item.author.headline}</p>
                  <span className="text-[10px] text-[#8A8985] font-mono">{item.timeAgo}</span>
                </div>
              </div>
            )}
            <div className="font-sans text-sm sm:text-base text-[#C4C3BE] leading-relaxed space-y-4 whitespace-pre-line mb-8">
              {item.content}
            </div>
            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#8A8985] font-mono">
              <div className="flex items-center gap-2 text-[#0a66c2] font-semibold">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  className="w-3.5 h-3.5"
                >
                  <path d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2l144 0c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48l-97.5 0c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3l0-38.3 0-48 0-24.9c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192l64 0c17.7 0 32 14.3 32 32l0 224c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32L0 224c0-17.7 14.3-32 32-32z" />
                </svg>
                <span>{likes} likes</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  className="w-3.5 h-3.5"
                >
                  <path d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c0 0 0 0 0 0s0 0 0 0s0 0 0 0c0 0 0 0 0 0l.3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z" />
                </svg>
                <span>{item.comments || 24} comments</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
