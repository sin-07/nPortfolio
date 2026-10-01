"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FeedModal from "@/components/FeedModal";
import { portfolioData, FeedItem } from "@/data/portfolioData";

export default function Feed() {
  const { feed } = portfolioData;

  const [activeItem, setActiveItem] = useState<FeedItem | null>(null);
  const [likesState, setLikesState] = useState<Record<string, { count: number; liked: boolean }>>(() => {
    const initial: Record<string, { count: number; liked: boolean }> = {};
    feed.forEach((item) => {
      initial[item.id] = { count: item.likes || 128, liked: false };
    });
    return initial;
  });

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
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

      if (dividerRef.current) {
        gsap.fromTo(
          dividerRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            transformOrigin: "left center",
            duration: 1,
            ease: "power3.inOut",
            clearProps: "transform",
            scrollTrigger: {
              trigger: dividerRef.current,
              start: "top 95%",
              once: true,
            },
          }
        );
      }

      if (gridRef.current?.children) {
        gsap.fromTo(
          gridRef.current.children,
          { opacity: 0, y: 40, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
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

  const handleLike = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    const current = likesState[id] || { count: 128, liked: false };
    const nextLiked = !current.liked;
    const nextCount = nextLiked ? current.count + 1 : current.count - 1;

    setLikesState((prev) => ({
      ...prev,
      [id]: { count: nextCount, liked: nextLiked },
    }));

    const btn = e.currentTarget as HTMLElement;
    gsap.fromTo(
      btn,
      { scale: 1.4, rotate: nextLiked ? 15 : -15 },
      { scale: 1, rotate: 0, duration: 0.5, ease: "elastic.out(1.5, 0.4)" }
    );
  };

  return (
    <>
      <section
        ref={sectionRef}
        id="feed"
        className="py-20 sm:py-28 bg-[#0E0E0D] border-t border-white/10 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-10">
          {/* Header */}
          <div
            ref={headerRef}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16"
          >
            <div>
              <div className="flex items-center gap-3 text-xs font-mono text-[#8A8985] tracking-widest uppercase mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F4F3EF]" />
                <span>(05 / Journal &amp; Certifications)</span>
              </div>
              <h2 className="font-serif font-light text-3xl sm:text-5xl lg:text-6xl text-[#F4F3EF] tracking-tight leading-none">
                Certifications &amp;{" "}
                <span className="font-serif italic font-normal text-white/70">Insights</span>
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#8A8985] font-mono max-w-md">
              Verified credentials, hackathon takeaways, and engineering reflections across the modern
              web ecosystem.
            </p>
          </div>

          {/* Animated Divider */}
          <div ref={dividerRef} className="w-full h-px bg-white/10 mb-12 sm:mb-16" />

          {/* Grid */}
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start">
            {feed.map((item) => {
              const likeInfo = likesState[item.id] || { count: item.likes || 128, liked: false };

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveItem(item)}
                  className="bg-[#141413] text-[#F4F3EF] rounded-3xl p-6 sm:p-8 shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-all duration-300 border border-white/10 hover:border-white/25 cursor-pointer hover:-translate-y-1.5 flex flex-col justify-between group"
                >
                  {item.type === "certificate" ? (
                    <div>
                      {item.imageUrl && (
                        <div className="w-full h-52 sm:h-60 bg-[#1C1B1A] rounded-2xl overflow-hidden mb-6 border border-white/10 relative group/img">
                          <img
                            src={item.imageUrl}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105 opacity-90 group-hover/img:opacity-100"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="bg-[#F4F3EF] text-black px-4 py-2 rounded-full text-xs font-semibold shadow-lg flex items-center gap-2 transform translate-y-2 group-hover/img:translate-y-0 transition-transform">
                              View Certificate{" "}
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                                className="w-3.5 h-3.5"
                              >
                                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                              </svg>
                            </span>
                          </div>
                        </div>
                      )}
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-emerald-400">
                          Certification
                        </span>
                        <span className="text-xs text-[#8A8985] font-mono">{item.timeAgo}</span>
                      </div>
                      <h3 className="font-serif font-normal text-[#F4F3EF] text-lg sm:text-xl leading-snug mb-3 group-hover:text-white transition-colors">
                        {item.title}
                      </h3>
                      <div className="text-xs text-[#8A8985] font-mono flex items-center justify-between pt-4 border-t border-white/10">
                        <span className="font-medium text-[#C4C3BE]">{item.badge || "coursera.org"}</span>
                        <span className="text-[11px] group-hover:underline flex items-center gap-1">
                          Details →
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div>
                      {/* Author Header */}
                      <div className="flex items-start justify-between gap-3 mb-5">
                        <div className="flex items-center gap-3">
                          <div className="w-11 h-11 rounded-full bg-[#1C1B1A] border border-white/15 text-[#F4F3EF] flex items-center justify-center font-serif font-bold text-sm overflow-hidden flex-shrink-0">
                            <span>{item.author?.name.charAt(0)}</span>
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-center gap-1.5 flex-wrap">
                              <span className="font-sans font-semibold text-[#F4F3EF] text-sm">
                                {item.author?.name}
                              </span>
                              {item.author?.connection && (
                                <span className="text-[#8A8985] text-xs font-normal">
                                  · {item.author.connection}
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-[#8A8985] truncate max-w-[200px] sm:max-w-xs font-sans">
                              {item.author?.headline}
                            </p>
                            <span className="text-[10px] text-[#8A8985] block font-mono">
                              {item.timeAgo}
                            </span>
                          </div>
                        </div>
                        <div className="flex-shrink-0">
                          <div className="flex items-center gap-1.5 text-[#0a66c2] text-sm font-semibold">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth="0"
                              viewBox="0 0 448 512"
                              className="w-5 h-5"
                            >
                              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                            </svg>
                            <span className="font-mono text-xs hidden sm:inline">Post</span>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="font-sans text-xs sm:text-sm text-[#C4C3BE] leading-relaxed space-y-2 whitespace-pre-line line-clamp-5 mb-5">
                        {item.content}
                      </div>

                      {/* Post Footer */}
                      <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[#8A8985] text-xs">
                        <button
                          onClick={(e) => handleLike(e, item.id)}
                          className={`flex items-center gap-1.5 font-medium transition-colors cursor-pointer px-3 py-1.5 rounded-full border ${
                            likeInfo.liked
                              ? "text-white bg-white/10 border-white/30"
                              : "text-[#8A8985] border-white/10 hover:border-white/20 hover:text-white"
                          }`}
                          aria-label="Like Post"
                        >
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 512 512"
                            className={`w-3 h-3 ${likeInfo.liked ? "text-white" : ""}`}
                          >
                            <path d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2l144 0c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48l-97.5 0c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3l0-38.3 0-48 0-24.9c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192l64 0c17.7 0 32 14.3 32 32l0 224c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32L0 224c0-17.7 14.3-32 32-32z" />
                          </svg>
                          <span>{likeInfo.count}</span>
                        </button>
                        <div className="flex items-center gap-4 text-[#8A8985] text-[11px] font-mono">
                          <span>{item.comments || 16} réponses</span>
                          <span className="hover:text-white">Partager</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detail Modal */}
      <FeedModal
        item={activeItem}
        likes={activeItem ? likesState[activeItem.id]?.count || 128 : 128}
        onClose={() => setActiveItem(null)}
      />
    </>
  );
}
