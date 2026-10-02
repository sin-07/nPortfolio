"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Magnetic from "@/components/Magnetic";
import { portfolioData } from "@/data/portfolioData";

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const { profile, socials } = portfolioData;

  const sectionRef = useRef<HTMLElement>(null);
  const titleLine1Ref = useRef<HTMLSpanElement>(null);
  const titleLine2Ref = useRef<HTMLSpanElement>(null);
  const titleLine3Ref = useRef<HTMLSpanElement>(null);
  const bioRef = useRef<HTMLParagraphElement>(null);
  const indexListRef = useRef<HTMLUListElement>(null);
  const ctaBlockRef = useRef<HTMLDivElement>(null);
  const socialsRowRef = useRef<HTMLDivElement>(null);
  const tickerRef = useRef<HTMLDivElement>(null);
  const floorGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      gsap.set([titleLine1Ref.current, titleLine2Ref.current, titleLine3Ref.current], {
        yPercent: 110,
        opacity: 0,
        rotateX: 35,
      });
      gsap.set(bioRef.current, { opacity: 0, y: 25, filter: "blur(6px)" });
      if (indexListRef.current?.children) {
        gsap.set(indexListRef.current.children, { opacity: 0, x: -20 });
      }
      gsap.set(ctaBlockRef.current, { scale: 0.8, opacity: 0 });
      if (socialsRowRef.current?.children) {
        gsap.set(socialsRowRef.current.children, { opacity: 0, y: 25, scale: 0.85 });
      }
      gsap.set(floorGridRef.current, { opacity: 0 });

      tl.to(floorGridRef.current, { opacity: 0.35, duration: 1.5, ease: "power3.out" })
        .to(titleLine1Ref.current, { yPercent: 0, opacity: 1, rotateX: 0, duration: 1.1 }, "-=1.2")
        .to(titleLine2Ref.current, { yPercent: 0, opacity: 1, rotateX: 0, duration: 1.1 }, "-=0.9")
        .to(titleLine3Ref.current, { yPercent: 0, opacity: 1, rotateX: 0, duration: 1.2 }, "-=0.9")
        .to(ctaBlockRef.current, { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.8)" }, "-=0.8")
        .to(bioRef.current, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9, ease: "power3.out" }, "-=0.7");

      if (indexListRef.current?.children) {
        tl.to(
          indexListRef.current.children,
          { opacity: 1, x: 0, stagger: 0.1, duration: 0.7, ease: "power3.out" },
          "-=0.6"
        );
      }

      if (socialsRowRef.current?.children) {
        tl.to(
          socialsRowRef.current.children,
          { opacity: 1, y: 0, scale: 1, stagger: 0.07, duration: 0.7, ease: "back.out(1.6)" },
          "-=0.5"
        );
      }

      if (tickerRef.current) {
        gsap.to(tickerRef.current, {
          xPercent: -50,
          repeat: -1,
          duration: 20,
          ease: "none",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const lenis = (window as unknown as { __lenis?: { scrollTo: (target: HTMLElement, opts: { offset: number }) => void } }).__lenis;
    if (lenis) {
      lenis.scrollTo(el, { offset: -70 });
    } else {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "github":
        return (
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" className="w-3.5 h-3.5">
            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
          </svg>
        );
      case "linkedin":
        return (
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="w-3.5 h-3.5 text-blue-400">
            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
          </svg>
        );
      case "telegram":
        return (
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" className="w-3.5 h-3.5 text-sky-400">
            <path d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z" />
          </svg>
        );
      case "facebook":
        return (
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" className="w-3.5 h-3.5 text-blue-500">
            <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
          </svg>
        );
      case "instagram":
        return (
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="w-3.5 h-3.5 text-pink-400">
            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
          </svg>
        );
      default:
        return null;
    }
  };

  const firstNameLetters = profile.firstName.toUpperCase().split("");
  const fullStackLetters = "Full-stack".split("");
  const devLetters = "DEVELOPER".split("");

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-[96vh] flex flex-col justify-between pt-24 sm:pt-28 pb-8 overflow-hidden bg-[#0E0E0D]"
    >
      {/* Background Gradients & Dot Matrix */}
      <div className="absolute inset-0 pointer-events-none dot-matrix opacity-25 z-0" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-white/6 to-transparent rounded-full blur-3xl pointer-events-none z-0" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-10 w-full pt-4 sm:pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Giant Title Column */}
          <div className="lg:col-span-8 w-full">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-xs font-mono text-emerald-400 mb-4 sm:mb-5 backdrop-blur-md shadow-[0_0_20px_rgba(34,197,94,0.18)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-medium tracking-wide">Available for Work · Full-Stack &amp; Systems</span>
            </div>

            <h1 className="select-none tracking-tight leading-[0.88] text-[#F4F3EF] w-full">
              {/* Row 1: Name */}
              <span className="block overflow-hidden py-1 px-1.5 sm:px-3 w-full">
                <span
                  ref={titleLine1Ref}
                  className="flex justify-between items-baseline w-full font-sans font-black text-[13vw] sm:text-[10.5vw] lg:text-[4.6rem] xl:text-[5.3rem] uppercase will-change-transform"
                >
                  {firstNameLetters.map((char, i) => (
                    <span
                      key={i}
                      className={`inline-block ${
                        i === firstNameLetters.length - 1 ? "pr-2 sm:pr-3" : ""
                      }`}
                    >
                      {char}
                    </span>
                  ))}
                </span>
              </span>

              {/* Row 2: Full-stack */}
              <span className="block overflow-hidden py-1 px-1.5 sm:px-3 w-full">
                <span
                  ref={titleLine2Ref}
                  className="flex justify-between items-baseline w-full font-serif italic font-normal text-[12.5vw] sm:text-[10vw] lg:text-[4.3rem] xl:text-[5rem] text-gray-300 will-change-transform"
                >
                  {fullStackLetters.map((char, i) => (
                    <span
                      key={i}
                      className={`inline-block ${i === 9 ? "pr-1.5 sm:pr-2" : ""}`}
                    >
                      {char}
                    </span>
                  ))}
                </span>
              </span>

              {/* Row 3: DEVELOPER */}
              <span className="block overflow-hidden py-1 px-1.5 sm:px-3 w-full">
                <span
                  ref={titleLine3Ref}
                  className="flex justify-between items-baseline w-full font-sans font-black text-[13vw] sm:text-[10.5vw] lg:text-[4.6rem] xl:text-[5.3rem] uppercase will-change-transform"
                >
                  {devLetters.map((char, i) => (
                    <span
                      key={i}
                      className={`inline-block ${
                        i === devLetters.length - 1 ? "pr-2 sm:pr-3" : ""
                      }`}
                    >
                      {char}
                    </span>
                  ))}
                </span>
              </span>
            </h1>
          </div>

          {/* Right Info Column */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6 lg:pt-2 pb-2">
            <div>
              <p
                ref={bioRef}
                className="text-[#8A8985] text-xs sm:text-sm font-sans leading-relaxed max-w-sm will-change-transform mb-3"
              >
                Aniket Singh is an innovative Software Engineer with hands-on experience in Java,
                Python, and MERN stack development, building scalable high-performance backend systems and responsive UI.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-[#C4C3BE]">
                  Java · Python · MERN
                </span>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-400">
                  ITER &apos;25 · B.Tech CSE
                </span>
                <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-[#C4C3BE]">
                  RESTful APIs
                </span>
              </div>
            </div>

            {/* Featured Index */}
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-[#5C5B57] mb-3">
                (Featured Index)
              </p>
              <ul ref={indexListRef} className="space-y-2.5 font-sans text-xs">
                {[
                  { num: "01", title: "TradeXpert Platform", cat: "React.js & Yahoo Finance" },
                  { num: "02", title: "Rental Car Booking", cat: "MERN & Cloudinary" },
                  { num: "03", title: "Raven Tutorials Portal", cat: "Full-Stack Institute System" },
                ].map((item, index) => (
                  <li key={index} className="group">
                    <button
                      onClick={() => scrollToSection("projects")}
                      className="flex items-center justify-between w-full py-1 text-left text-gray-300 group-hover:text-white transition-colors cursor-pointer border-b border-white/5 pb-2"
                    >
                      <span className="flex items-center gap-3">
                        <i className="font-mono text-[10px] text-emerald-400 not-italic">
                          {item.num}
                        </i>
                        <span className="font-medium">{item.title}</span>
                      </span>
                      <span className="font-mono text-[10px] text-gray-500 group-hover:text-gray-300">
                        {item.cat}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resume CTA & Experience counter */}
            <div ref={ctaBlockRef} className="pt-2 flex items-center gap-3">
              <Magnetic strength={0.35}>
                <button
                  onClick={onOpenResume}
                  className="group flex items-center gap-3 px-6 py-3 rounded-full bg-[#F4F3EF] text-black hover:bg-white transition-all shadow-xl font-sans text-xs sm:text-sm font-bold cursor-pointer"
                  aria-label="View Resume"
                >
                  <span className="font-serif italic font-normal">Resume...</span>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2.25a.75.75 0 0 1 .75.75v16.19l6.22-6.22a.75.75 0 1 1 1.06 1.06l-7.5 7.5a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 1 1 1.06-1.06l6.22 6.22V3a.75.75 0 0 1 .75-.75Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </Magnetic>
              <div className="font-mono text-[11px] text-[#8A8985]">
                <span>{profile.yearsExperience}+ Years Exp.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links Row */}
        <div
          ref={socialsRowRef}
          className="mt-8 sm:mt-10 flex flex-wrap items-center justify-start gap-3 sm:gap-4"
        >
          {socials.map((item, index) => (
            <Magnetic key={index} strength={0.25}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="studiors-pill group"
                aria-label={`Visit ${item.name}`}
              >
                <span className="transition-transform group-hover:scale-110 duration-200">
                  {getSocialIcon(item.name)}
                </span>
                <span className="font-medium text-xs sm:text-sm">{item.name}</span>
              </a>
            </Magnetic>
          ))}
        </div>
      </div>

      {/* Infinite Ticker Marquee */}
      <div className="w-full overflow-hidden border-t border-b border-white/10 py-3 mt-8 sm:mt-10 bg-[#121211] select-none">
        <div ref={tickerRef} className="flex whitespace-nowrap will-change-transform">
          {[...Array(8)].map((_, i) => (
            <span
              key={i}
              className="inline-flex items-center mx-6 font-mono text-xs tracking-widest text-[#8A8985] uppercase"
            >
              <span>{profile.firstName.toLowerCase()}</span>
              <span className="text-gray-500 ml-2">· full-stack developer</span>
              <span className="mx-4 text-emerald-400">✦</span>
              <span>portfolio 2026</span>
              <span className="mx-4 text-gray-600">/</span>
            </span>
          ))}
        </div>
      </div>

      {/* 3D Perspective Grid Floor */}
      <div
        ref={floorGridRef}
        className="absolute inset-x-0 bottom-0 h-28 pointer-events-none perspective-grid-floor opacity-30 z-0 will-change-transform"
      />
    </section>
  );
}
