"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Magnetic from "@/components/Magnetic";
import { portfolioData } from "@/data/portfolioData";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  isLight?: boolean;
}

function TiltCard({ children, className = "", isLight = false }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card) return;

    const setRotateX = gsap.quickTo(card, "rotateX", { duration: 0.4, ease: "power2.out" });
    const setRotateY = gsap.quickTo(card, "rotateY", { duration: 0.4, ease: "power2.out" });
    const setScale = gsap.quickTo(card, "scale", { duration: 0.4, ease: "power2.out" });

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      setRotateX(-((y - centerY) / centerY * 9));
      setRotateY((x - centerX) / centerX * 9);
      setScale(1.02);

      if (glow) {
        gsap.to(glow, {
          x,
          y,
          opacity: 0.6,
          duration: 0.2,
          ease: "power2.out",
        });
      }
    };

    const handleMouseLeave = () => {
      setRotateX(0);
      setRotateY(0);
      setScale(1);
      if (glow) {
        gsap.to(glow, {
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      }
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      style={{ transformStyle: "preserve-3d", perspective: 1000 }}
      className={`relative overflow-hidden will-change-transform ${className}`}
    >
      <div
        ref={glowRef}
        className={`pointer-events-none absolute -top-32 -left-32 w-64 h-64 rounded-full blur-2xl opacity-0 transition-opacity ${
          isLight
            ? "bg-gradient-to-r from-gray-300/40 to-white/60"
            : "bg-gradient-to-r from-white/20 to-emerald-400/20"
        }`}
      />
      <div className="relative z-10 flex flex-col justify-between h-full">{children}</div>
    </div>
  );
}

export default function AboutSection() {
  const { skills, languages } = portfolioData;

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsGridRef = useRef<HTMLDivElement>(null);
  const languagesRef = useRef<HTMLDivElement>(null);

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

      if (cardsGridRef.current?.children) {
        gsap.fromTo(
          cardsGridRef.current.children,
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
              trigger: cardsGridRef.current,
              start: "top 95%",
              once: true,
            },
          }
        );
      }

      if (languagesRef.current?.children) {
        gsap.fromTo(
          languagesRef.current.children,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.7,
            ease: "power3.out",
            clearProps: "transform,opacity",
            scrollTrigger: {
              trigger: languagesRef.current,
              start: "top 95%",
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 sm:py-28 bg-[#0E0E0D] border-t border-white/10 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-10">
        {/* Section Header */}
        <div ref={headerRef} className="mb-14">
          <p className="font-mono text-xs uppercase tracking-widest text-[#8A8985] mb-3">
            (03 / Capabilities &amp; Architecture)
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F4F3EF] font-bold mb-4 tracking-tight">
            Technical Stack{" "}
            <span className="font-serif italic font-normal text-white/70">
              &amp; Capabilities
            </span>
          </h2>
          <p className="text-[#8A8985] text-sm sm:text-base font-sans leading-relaxed max-w-3xl">
            Modern full-stack mastery. Scalable architecture, performant front-end engineering,
            type-safe APIs, and precision micro-interactions.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div
          ref={cardsGridRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch mb-14"
        >
          {/* Front-end Card (Light / White Accent) */}
          <TiltCard
            isLight={true}
            className="bg-[#F4F3EF] text-gray-950 rounded-3xl p-6 sm:p-8 shadow-2xl border border-white"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold mb-4 text-black">
                Front-end
              </h3>
              <p className="text-xs sm:text-sm font-mono leading-loose text-gray-800">
                {skills.frontend}
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-gray-200 text-xs font-mono text-gray-600 uppercase tracking-wider font-semibold">
              High Performance &amp; UI/UX
            </div>
          </TiltCard>

          {/* Back-end Card */}
          <TiltCard className="bg-[#141413] text-white border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl hover:border-white/30 transition-colors">
            <div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold mb-4 text-[#F4F3EF]">
                Back-end
              </h3>
              <p className="text-xs sm:text-sm font-mono leading-loose text-[#8A8985]">
                {skills.backend}
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/10 text-xs font-mono text-[#5C5B57] uppercase tracking-wider">
              Scalable APIs &amp; Microservices
            </div>
          </TiltCard>

          {/* Styles Card */}
          <TiltCard className="bg-[#141413] text-white border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl hover:border-white/30 transition-colors">
            <div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold mb-4 text-[#F4F3EF]">
                Styles
              </h3>
              <p className="text-xs sm:text-sm font-mono leading-loose text-[#8A8985]">
                {skills.styles}
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/10 text-xs font-mono text-[#5C5B57] uppercase tracking-wider">
              Modern Responsive Systems
            </div>
          </TiltCard>

          {/* Also Card */}
          <TiltCard className="bg-[#141413] text-white border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl hover:border-white/30 transition-colors">
            <div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold mb-4 text-[#F4F3EF]">
                Also
              </h3>
              <p className="text-xs text-[#8A8985] italic mb-3 font-sans">
                Some of my favorite technologies, topics or tools that I worked with
              </p>
              <p className="text-xs sm:text-sm font-mono leading-loose text-[#8A8985]">
                {skills.also}
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/10 text-xs font-mono text-[#5C5B57] uppercase tracking-wider">
              Craftsmanship &amp; Integrity
            </div>
          </TiltCard>
        </div>

        {/* Interactive Architecture Terminal Widget */}
        <div className="mb-14 rounded-3xl bg-[#121211] border border-white/10 p-6 sm:p-8 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 text-xs text-[#8A8985]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-2 text-gray-400">aniket@engineer: ~/architecture</span>
            </div>
            <span className="text-[11px] text-emerald-400 hidden sm:inline">zsh · system-active</span>
          </div>
          <div className="space-y-2 leading-relaxed text-[#C4C3BE]">
            <p className="text-white">
              <span className="text-emerald-400">$</span> aniket --inspect-stack --verbose
            </p>
            <p className="text-gray-400 pl-4">
              [✓] <strong className="text-white">Full-Stack Core:</strong> Java SE · Python · MERN (MongoDB, Express, React, Node.js)
            </p>
            <p className="text-gray-400 pl-4">
              [✓] <strong className="text-white">Architecture &amp; OOPs:</strong> System Design, RESTful APIs, JWT Auth, Database Indexing
            </p>
            <p className="text-gray-400 pl-4">
              [✓] <strong className="text-white">Academic Credential:</strong> B.Tech CSE @ ITER, Siksha &apos;O&apos; Anusandhan (7.46 CGPA)
            </p>
            <p className="text-gray-400 pl-4">
              [✓] <strong className="text-white">Deployment Status:</strong> Live on Vercel · MongoDB Atlas Connected · Ready for Production
            </p>
          </div>
        </div>

        {/* Languages Row */}
        <div ref={languagesRef} className="flex flex-wrap items-center gap-4 justify-start">
          {languages.map((item, index) => (
            <Magnetic key={index} strength={0.2}>
              <div className="flex items-center gap-3 px-5 py-3 rounded-2xl border border-white/20 bg-[#121316] text-xs sm:text-sm font-mono text-gray-300 hover:border-white/50 hover:bg-[#18191d] transition-all cursor-default shadow-lg">
                <span className="text-lg">{item.flag}</span>
                <span className="font-semibold text-white">{item.language}</span>
                <span className="px-2.5 py-0.5 rounded-full border border-white/20 text-[10px] text-white/80 uppercase tracking-wider bg-white/5">
                  {item.level}
                </span>
              </div>
            </Magnetic>
          ))}
        </div>
      </div>
    </section>
  );
}
