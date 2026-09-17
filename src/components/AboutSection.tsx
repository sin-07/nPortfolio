"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { GraduationCap, Code2, Sparkles, BookOpen, MapPin, Award, Terminal, Cpu, Layers, Briefcase } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface AboutSectionProps {
  onOpenJourney?: () => void;
}

export default function AboutSection({ onOpenJourney }: AboutSectionProps = {}) {
  const sectionRef = useRef<HTMLElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const cardLeftRef = useRef<HTMLDivElement>(null);
  const cardCenterRef = useRef<HTMLDivElement>(null);
  const cardRightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header appearance
      gsap.from(".about-header", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // Terminal card appearance
      gsap.from(terminalRef.current, {
        scrollTrigger: {
          trigger: terminalRef.current,
          start: "top 88%",
        },
        scale: 0.96,
        opacity: 0,
        duration: 0.85,
        ease: "power3.out",
      });

      // Left card slides in from LEFT
      gsap.from(cardLeftRef.current, {
        scrollTrigger: {
          trigger: cardLeftRef.current,
          start: "top 90%",
        },
        x: -60,
        opacity: 0,
        duration: 0.85,
        ease: "power3.out",
      });

      // Center card slides up
      gsap.from(cardCenterRef.current, {
        scrollTrigger: {
          trigger: cardCenterRef.current,
          start: "top 90%",
        },
        y: 50,
        opacity: 0,
        duration: 0.85,
        delay: 0.1,
        ease: "power3.out",
      });

      // Right card slides in from RIGHT
      gsap.from(cardRightRef.current, {
        scrollTrigger: {
          trigger: cardRightRef.current,
          start: "top 90%",
        },
        x: 60,
        opacity: 0,
        duration: 0.85,
        delay: 0.2,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-16 px-4 sm:px-8 max-w-7xl mx-auto bg-[#f5f4ed] overflow-hidden"
    >
      {/* Header Row */}
      <div className="about-header mb-10">
        <span className="text-[11px] sm:text-xs font-mono font-bold tracking-widest text-zinc-500 uppercase">
          — ABOUT THE ENGINEER
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 mt-1 tracking-tight">
          Aniket Singh
        </h2>
        <p className="text-zinc-600 text-sm mt-1">
          Software Engineer at Tata Consultancy Services (TCS) • B.Tech CSE Graduate
        </p>
      </div>

      {/* Featured Cool Terminal Card */}
      <div
        ref={terminalRef}
        className="mb-10 bg-[#FAF8F3] rounded-2xl border-2.5 border-zinc-900 shadow-[5px_5px_0px_#1e1e1e] overflow-hidden"
      >
        {/* Terminal Title Bar */}
        <div className="bg-[#edeae1] border-b-2 border-zinc-900 px-3.5 sm:px-4 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2 min-w-0">
            <span className="w-3 h-3 rounded-full bg-rose-400 border border-zinc-900 flex-shrink-0"></span>
            <span className="w-3 h-3 rounded-full bg-amber-400 border border-zinc-900 flex-shrink-0"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-400 border border-zinc-900 flex-shrink-0"></span>
            <span className="ml-1.5 sm:ml-2 font-mono text-[11px] sm:text-xs font-bold text-zinc-800 truncate max-w-[170px] xs:max-w-none">
              aniket@tcs: ~/profile/manifesto.ts
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
            <span className="font-mono text-[10px] uppercase font-bold text-emerald-800 bg-emerald-100 border border-emerald-300 px-2 py-0.5 rounded">
              Status: Software Engineer @ TCS
            </span>
          </div>
        </div>

        {/* Terminal Content */}
        <div className="p-4 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Col: Text & Manifesto */}
            <div className="lg:col-span-8 space-y-6">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono font-bold bg-[#eae0f5] text-purple-950 border border-zinc-900 shadow-[1px_1px_0px_#1e1e1e] mb-3">
                  <Terminal className="w-3.5 h-3.5 text-purple-700" />
                  <span>WHO I AM &amp; WHAT DRIVES ME</span>
                </div>

                <h3 className="font-pixel text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight leading-tight">
                  Software Engineer at TCS &amp; Full Stack Developer
                </h3>
              </div>

              {/* Statement Paragraphs */}
              <div className="space-y-4">
                <p className="text-base sm:text-lg text-zinc-900 leading-relaxed font-medium border-l-3 border-emerald-500 pl-4 py-0.5">
                  A dedicated creator passionate about <span className="font-extrabold text-zinc-950 underline decoration-emerald-400 decoration-2 underline-offset-2">turning ideas into reality</span>. Whether it&apos;s crafting compelling narratives, designing captivating visuals, or solving complex problems, I thrive on challenges.
                </p>

                <p className="text-sm sm:text-base text-zinc-700 leading-relaxed border-l-3 border-sky-400 pl-4 py-0.5">
                  <span className="font-bold text-zinc-900">B.Tech Graduate in Computer Science &amp; Engineering</span>, currently working as a <span className="font-bold text-zinc-900">Software Engineer at Tata Consultancy Services (TCS)</span>. Leveraging solid computer science foundations in <span className="font-mono font-semibold text-zinc-950 bg-[#e6f4ea] px-1.5 py-0.5 rounded border border-emerald-300">software engineering</span>, <span className="font-mono font-semibold text-zinc-950 bg-[#e8f0fe] px-1.5 py-0.5 rounded border border-blue-300">algorithms</span>, and <span className="font-mono font-semibold text-zinc-950 bg-[#fce8e6] px-1.5 py-0.5 rounded border border-rose-300">system design</span> to deliver scalable enterprise solutions.
                </p>
              </div>

              {/* Cool Skill Foundation Badges */}
              <div className="pt-2 border-t border-zinc-300 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono font-bold text-zinc-500 uppercase mr-1">
                  // Core Foundations:
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-bold bg-[#def7ec] text-emerald-950 border border-zinc-900 shadow-[1.5px_1.5px_0px_#1e1e1e]">
                  <Code2 className="w-3.5 h-3.5 text-emerald-700" />
                  Software Development
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-bold bg-[#dff1fa] text-sky-950 border border-zinc-900 shadow-[1.5px_1.5px_0px_#1e1e1e]">
                  <Cpu className="w-3.5 h-3.5 text-sky-700" />
                  Algorithms &amp; Data Structures
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-bold bg-[#fdece4] text-amber-950 border border-zinc-900 shadow-[1.5px_1.5px_0px_#1e1e1e]">
                  <Layers className="w-3.5 h-3.5 text-amber-700" />
                  System Design
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-bold bg-[#f0ebfa] text-purple-950 border border-zinc-900 shadow-[1.5px_1.5px_0px_#1e1e1e]">
                  <Sparkles className="w-3.5 h-3.5 text-purple-700" />
                  Captivating Visuals &amp; Narratives
                </span>

                {onOpenJourney && (
                  <button
                    onClick={onOpenJourney}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold bg-[#c3e3c3] hover:bg-[#aee0ae] text-zinc-950 border-1.5 border-zinc-900 shadow-[2px_2px_0px_#1e1e1e] cursor-pointer neo-btn transition-all ml-auto"
                  >
                    <Briefcase className="w-3.5 h-3.5 text-zinc-900" />
                    <span>View Career Milestones (TCS &amp; B.Tech) &rarr;</span>
                  </button>
                )}
              </div>
            </div>

            {/* Right Col: Neo-Brutalist Illustrated Portrait Card */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative group w-full max-w-[280px]">
                {/* Decorative retro sticker pin */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 bg-[#fdece4] border-1.5 border-zinc-900 text-[10px] font-mono font-bold px-3 py-0.5 rounded shadow-[1.5px_1.5px_0px_#1e1e1e] rotate-[-2deg]">
                  ENGINEER PROFILE
                </div>

                {/* Main Portrait Card */}
                <div className="bg-white p-3 rounded-2xl border-2.5 border-zinc-900 shadow-[5px_5px_0px_#1e1e1e] transform rotate-1 group-hover:rotate-0 transition-transform duration-300">
                  <div className="relative aspect-square w-full rounded-xl overflow-hidden border-1.5 border-zinc-900 bg-amber-50 shadow-[1.5px_1.5px_0px_#1e1e1e]">
                    <Image
                      src="/images/aniket-portrait.jpg"
                      alt="Aniket Singh - Software Engineer @ TCS"
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      className="object-cover"
                    />
                  </div>

                  <div className="pt-3 text-center space-y-1">
                    <div className="inline-flex items-center gap-1.5 bg-[#def7ec] border border-zinc-900 px-2.5 py-0.5 rounded-full text-[11px] font-bold text-emerald-950 shadow-[1px_1px_0px_#1e1e1e]">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Software Engineer @ TCS</span>
                    </div>
                    <h4 className="font-extrabold text-base text-zinc-950 tracking-tight font-sans">
                      Aniket Singh
                    </h4>
                    <p className="text-[11px] text-zinc-600 font-medium">
                      B.Tech CSE Graduate • Tata Consultancy Services
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3 Neo-Brutalist Highlight Cards - Left, Center & Right animations */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Education Card - Animates from LEFT */}
        <div
          ref={cardLeftRef}
          className="bg-[#def7ec] p-5 sm:p-6 rounded-2xl border-2 border-zinc-900 shadow-[3.5px_3.5px_0px_#1e1e1e] flex flex-col justify-between hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_#1e1e1e] transition-all"
        >
          <div>
            <div className="w-11 h-11 rounded-xl bg-white border border-zinc-900 flex items-center justify-center mb-4 shadow-[1.5px_1.5px_0px_#1e1e1e]">
              <GraduationCap className="w-6 h-6 text-teal-700" />
            </div>
            <div className="inline-flex items-center gap-1 text-[11px] font-bold text-teal-800 bg-white/80 px-2 py-0.5 rounded-md border border-teal-300 mb-2">
              <GraduationCap className="w-3 h-3" />
              <span>Degree Completed • B.Tech CSE</span>
            </div>
            <h3 className="font-extrabold text-base sm:text-lg text-zinc-900 leading-snug">
              Siksha &apos;O&apos; Anusandhan University
            </h3>
            <p className="text-xs font-bold text-teal-900 mt-1">
              B.Tech in Computer Science &amp; Engineering (Graduated)
            </p>
            <p className="text-xs text-zinc-700 mt-2.5 leading-relaxed">
              Successfully completed comprehensive coursework in Data Structures, Algorithms, Computer Networks, Database Systems, Operating Systems, and Distributed Computing.
            </p>
          </div>

          <div className="pt-4 mt-4 border-t border-teal-200 flex items-center justify-between text-[11px] font-semibold text-zinc-700">
            <span>Status: Degree Completed</span>
            <span className="font-mono bg-teal-200/60 px-2 py-0.5 rounded text-teal-950 font-bold">B.Tech CSE Graduate</span>
          </div>
        </div>

        {/* Technical Craft Card - Animates from BOTTOM */}
        <div
          ref={cardCenterRef}
          className="bg-[#dff1fa] p-5 sm:p-6 rounded-2xl border-2 border-zinc-900 shadow-[3.5px_3.5px_0px_#1e1e1e] flex flex-col justify-between hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_#1e1e1e] transition-all"
        >
          <div>
            <div className="w-11 h-11 rounded-xl bg-white border border-zinc-900 flex items-center justify-center mb-4 shadow-[1.5px_1.5px_0px_#1e1e1e]">
              <Code2 className="w-6 h-6 text-sky-700" />
            </div>
            <div className="inline-flex items-center gap-1 text-[11px] font-bold text-sky-800 bg-white/80 px-2 py-0.5 rounded-md border border-sky-300 mb-2">
              <Award className="w-3 h-3" />
              <span>Tata Consultancy Services (TCS)</span>
            </div>
            <h3 className="font-extrabold text-base sm:text-lg text-zinc-900 leading-snug">
              Software Engineer @ TCS
            </h3>
            <p className="text-xs font-bold text-sky-900 mt-1">
              Enterprise Systems, Cloud &amp; Full-Stack
            </p>
            <p className="text-xs text-zinc-700 mt-2.5 leading-relaxed">
              Engineering robust, production-ready enterprise software, resilient backend services, and modern full-stack web applications with clean architecture and high performance.
            </p>
          </div>

          <div className="pt-4 mt-4 border-t border-sky-200 flex items-center justify-between text-[11px] font-semibold text-zinc-700">
            <span>Role: Software Engineer</span>
            <span className="font-mono bg-sky-200/60 px-2 py-0.5 rounded text-sky-950 font-bold">TCS Enterprise</span>
          </div>
        </div>

        {/* Vision & Product Impact - Animates from RIGHT */}
        <div
          ref={cardRightRef}
          className="bg-[#fdece4] p-5 sm:p-6 rounded-2xl border-2 border-zinc-900 shadow-[3.5px_3.5px_0px_#1e1e1e] flex flex-col justify-between hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_#1e1e1e] transition-all"
        >
          <div>
            <div className="w-11 h-11 rounded-xl bg-white border border-zinc-900 flex items-center justify-center mb-4 shadow-[1.5px_1.5px_0px_#1e1e1e]">
              <Sparkles className="w-6 h-6 text-amber-700" />
            </div>
            <div className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-800 bg-white/80 px-2 py-0.5 rounded-md border border-amber-300 mb-2">
              <BookOpen className="w-3 h-3" />
              <span>Philosophy</span>
            </div>
            <h3 className="font-extrabold text-base sm:text-lg text-zinc-900 leading-snug">
              Turning Ideas Into Real Products
            </h3>
            <p className="text-xs font-bold text-amber-900 mt-1">
              ByteBloom Studio Moniker
            </p>
            <p className="text-xs text-zinc-700 mt-2.5 leading-relaxed">
              Combining technical depth from engineering studies with creative product thinking to build software solutions that are not only performant and scalable, but delightful to use.
            </p>
          </div>

          <div className="pt-4 mt-4 border-t border-amber-200 flex items-center justify-between text-[11px] font-semibold text-zinc-700">
            <span>Status: Available for Work</span>
            <span className="font-mono bg-amber-200/60 px-2 py-0.5 rounded text-amber-950 font-bold">Ready to Build</span>
          </div>
        </div>
      </div>
    </section>
  );
}
