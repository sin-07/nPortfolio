"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export interface Project {
  id: string;
  title: string;
  image: string;
  tags: string[];
  description: string;
  metrics: string;
}

export default function Projects({ onSelectProject }: ProjectsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header appearance
      gsap.from(".projects-header", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
        x: -60,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // Alternating Left & Right card appearance
      cardRefs.current.forEach((card, idx) => {
        if (!card) return;
        const fromLeft = idx % 2 === 0;
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
          },
          x: fromLeft ? -60 : 60,
          opacity: 0,
          duration: 0.8,
          delay: (idx % 3) * 0.08,
          ease: "power3.out",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const projects: Project[] = [
    {
      id: "erp-quotation",
      title: "ERP & Quotation System",
      image: "/images/project-erp.jpg",
      tags: [".NET", "PostgreSQL", "AWS"],
      description:
        "High-performance enterprise quotation engine and supply-chain resource planning software serving 10,000+ daily orders.",
      metrics: "3.2x faster quote processing",
    },
    {
      id: "ecommerce-platform",
      title: "E-Commerce Platform",
      image: "/images/project-ecommerce.jpg",
      tags: ["MERN", "Stripe", "Vercel"],
      description:
        "Headless omnichannel boutique store featuring real-time checkout, automated localized taxes, and instant order sync.",
      metrics: "$4.8M processed in 2025",
    },
    {
      id: "ai-doc-analysis",
      title: "AI Document Analysis",
      image: "/images/project-ai.jpg",
      tags: ["Python", "OpenAI", "Docker"],
      description:
        "Intelligent multi-lingual document parsing and semantic indexing system with private vector search and compliance auditing.",
      metrics: "99.4% OCR accuracy",
    },
    {
      id: "logistics-tracking",
      title: "Logistics & Tracking",
      image: "/images/project-logistics.jpg",
      tags: ["Node.js", "MongoDB", "AWS"],
      description:
        "Real-time telematics dispatch fleet monitor with geofencing, route optimizations, and instant SMS status notifications.",
      metrics: "45k+ vehicles tracked daily",
    },
    {
      id: "3d-real-estate",
      title: "3D Real Estate Portal",
      image: "/images/project-real-estate.jpg",
      tags: ["Three.js", "React", "AWS"],
      description:
        "Interactive architectural walkthrough portal with WebGL rendering, 360-degree virtual tours, and mortgage estimator.",
      metrics: "+82% property engagement",
    },
  ];

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-16 px-4 sm:px-8 max-w-7xl mx-auto bg-[#f5f4ed] overflow-hidden"
    >
      {/* Header Row */}
      <div className="projects-header flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <span className="text-[11px] sm:text-xs font-mono font-bold tracking-widest text-zinc-500 uppercase">
            — FEATURED PROJECTS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 mt-1 tracking-tight">
            See Our Work
          </h2>
          <p className="text-zinc-600 text-sm mt-1">
            Real solutions. Real impact.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <a
            href="https://github.com/sin-07"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-zinc-950 hover:bg-zinc-100 border-2 border-zinc-900 rounded-xl px-3.5 py-2 font-bold text-xs sm:text-sm shadow-[2px_2px_0px_#1e1e1e] neo-btn cursor-pointer"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span>@sin-07</span>
          </a>

          <a
            href="https://github.com/sin-07?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-[#f8b4a6] hover:bg-[#f69d8b] text-zinc-950 border-2 border-zinc-900 rounded-xl px-4 py-2 font-bold text-xs sm:text-sm shadow-[2.5px_2.5px_0px_#1e1e1e] neo-btn cursor-pointer"
          >
            <span>View Real-World Projects on GitHub</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Projects Carousel Container */}
      <div className="relative">
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          aria-label="Previous project"
          className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border-2 border-zinc-900 flex items-center justify-center shadow-[2px_2px_0px_#1e1e1e] neo-btn cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5 text-zinc-900" />
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next project"
          className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border-2 border-zinc-900 flex items-center justify-center shadow-[2px_2px_0px_#1e1e1e] neo-btn cursor-pointer"
        >
          <ChevronRight className="w-5 h-5 text-zinc-900" />
        </button>

        {/* Carousel Grid */}
        <div className="overflow-x-auto pb-4 pt-1 px-1 no-scrollbar scroll-smooth">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 min-w-[700px] lg:min-w-0">
            {projects.map((proj, idx) => (
              <div
                key={proj.id}
                ref={(el) => {
                  cardRefs.current[idx] = el;
                }}
                onClick={() => onSelectProject(proj)}
                className={`bg-[#FAF8F3] border-2 ${
                  currentIndex === idx
                    ? "border-zinc-900 shadow-[4px_4px_0px_#1e1e1e]"
                    : "border-zinc-900 shadow-[2.5px_2.5px_0px_#1e1e1e]"
                } rounded-2xl p-2.5 flex flex-col justify-between hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_#1e1e1e] transition-all cursor-pointer group`}
              >
                {/* Project Image Frame */}
                <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-zinc-800 bg-zinc-200">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-1.5 right-1.5 opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-900/80 p-1 rounded-md text-white">
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Project Title */}
                <div className="pt-2.5 px-0.5">
                  <h3 className="font-bold text-xs sm:text-sm text-zinc-950 truncate">
                    {proj.title}
                  </h3>
                </div>

                {/* Tags Pill Row */}
                <div className="pt-2 flex flex-wrap gap-1 px-0.5">
                  {proj.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-white text-zinc-800 border border-zinc-400 shadow-[1px_1px_0px_#1e1e1e]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-1.5 mt-6">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all rounded-full cursor-pointer ${
                currentIndex === idx
                  ? "w-4 h-2 bg-zinc-900"
                  : "w-2 h-2 bg-zinc-400/80 hover:bg-zinc-700"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
