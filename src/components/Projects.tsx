"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink, ChevronDown, Check, Search, X } from "lucide-react";
import { playClickSound } from "@/utils/audio";
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
  category?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export default function Projects({ onSelectProject }: ProjectsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const filterMenuRef = useRef<HTMLDivElement>(null);

  // GSAP animation for filter dropdown
  useEffect(() => {
    if (filterOpen && filterMenuRef.current) {
      gsap.fromTo(
        filterMenuRef.current,
        { scale: 0.94, y: -8, opacity: 0 },
        { scale: 1, y: 0, opacity: 1, duration: 0.25, ease: "back.out(1.35)" }
      );
    }
  }, [filterOpen]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header appearance
      gsap.from(".projects-header", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
        y: 25,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // Mobile-safe vertical card entrance
      cardRefs.current.forEach((card, idx) => {
        if (!card) return;
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 92%",
          },
          y: 35,
          opacity: 0,
          duration: 0.7,
          delay: (idx % 4) * 0.08,
          ease: "power3.out",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const [searchQuery, setSearchQuery] = useState("");

  const projects: Project[] = [
    {
      id: "3d-printing-website",
      title: "Aetheris 3D Atelier",
      category: "3D Web",
      image: "/images/project-3d-printing.jpg",
      tags: ["Next.js", "Three.js", "TypeScript", "MongoDB"],
      description:
        "Interactive 3D printing customizer & boutique portal with real-time WebGL rendering, GSAP animations, Lenis smooth scrolling, and full e-commerce checkout.",
      metrics: "WebGL 3D Customizer",
      githubUrl: "https://github.com/sin-07/3D-Printing-Website",
      liveUrl: "https://3-d-printing-website-xi.vercel.app",
    },
    {
      id: "ecommerce-app-frontend",
      title: "B2B E-Commerce Store",
      category: "E-Commerce",
      image: "/images/project-ecommerce.jpg",
      tags: ["React Native", "Expo", "Redux", "TypeScript"],
      description:
        "Cross-platform omnichannel mobile & web commerce storefront engineered with React Native Expo, Redux Toolkit, and interactive bottom-sheet checkout.",
      metrics: "Cross-Platform Mobile & Web",
      githubUrl: "https://github.com/sin-07/Ecommerce-App-Frontend",
      liveUrl: "https://ecommerce-app-frontend-six-olive.vercel.app",
    },
    {
      id: "ai-powered-skill",
      title: "SkillGraph AI",
      category: "AI",
      image: "/images/project-ai.jpg",
      tags: ["Next.js", "TypeScript", "AI / LLM", "DAG"],
      description:
        "Skill intelligence and career roadmap synthesis platform that builds prerequisite Directed Acyclic Graphs (DAGs) and calculates Career Readiness in real time.",
      metrics: "Career Readiness & Skill DAG",
      githubUrl: "https://github.com/sin-07/AI-Powered-Skill",
    },
    {
      id: "cricketwala-playarena",
      title: "CricketWala PlayArena",
      category: "Gaming",
      image: "/images/hero-desk.jpg",
      tags: ["React", "JavaScript", "Game Loop", "Tailwind"],
      description:
        "Real-time interactive cricket sports gaming platform with high-FPS browser mechanics, dynamic physics simulation, and competitive multiplayer modes.",
      metrics: "Real-time Game Loop & Physics",
      githubUrl: "https://github.com/sin-07/CricketWalaPlayArena",
      liveUrl: "https://cricketwalaplayarena.in",
    },
    {
      id: "raven-tutorials",
      title: "Raven Tutorials",
      category: "EdTech",
      image: "/images/project-real-estate.jpg",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "EdTech"],
      description:
        "Comprehensive learning management platform offering structured course curriculum, interactive study notes, and learner progress tracking.",
      metrics: "Modular E-Learning Architecture",
      githubUrl: "https://github.com/sin-07/Raven-Tutorials",
      liveUrl: "https://raventutorials.in",
    },
    {
      id: "samastipur-blood-bank",
      title: "Samastipur Blood Bank",
      category: "Social Good",
      image: "/images/project-erp.jpg",
      tags: ["React", "Node.js", "MongoDB", "Healthcare"],
      description:
        "Life-saving community platform connecting voluntary donors with patients and regional hospitals in need with real-time blood inventory tracking.",
      metrics: "Healthcare Impact & Inventory",
      githubUrl: "https://github.com/sin-07/Blood-Bank",
      liveUrl: "https://samastipurbloodbank.com",
    },
    {
      id: "powershell-rust",
      title: "AASM Shell",
      category: "Systems",
      image: "/images/project-rust-shell.jpg",
      tags: ["Rust", "Windows API", "CLI", "Systems"],
      description:
        "High-performance, standalone Windows terminal shell engineered in Rust with direct Win32 process execution and zero PowerShell/Cmd runtime overhead.",
      metrics: "Native Rust Zero-Overhead CLI",
      githubUrl: "https://github.com/sin-07/Powershell-Rust",
    },
  ];

  const filteredProjects = projects.filter((p) => {
    const matchesCat =
      selectedCategory === "All" ||
      p.category === selectedCategory ||
      p.tags.some((t) => t.toLowerCase().includes(selectedCategory.toLowerCase()));
    const q = searchQuery.trim().toLowerCase();
    const matchesQuery =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q));
    return matchesCat && matchesQuery;
  });

  const scrollToIndex = (index: number) => {
    setCurrentIndex(index);
    const container = scrollContainerRef.current;
    const card = cardRefs.current[index];
    if (container && card) {
      const cardRect = card.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      const scrollOffset =
        cardRect.left - containerRect.left + container.scrollLeft - (containerRect.width / 2) + (cardRect.width / 2);
      container.scrollTo({
        left: Math.max(0, scrollOffset),
        behavior: "smooth",
      });
    }
  };

  const prevSlide = () => {
    const newIdx = currentIndex === 0 ? filteredProjects.length - 1 : currentIndex - 1;
    scrollToIndex(newIdx);
  };

  const nextSlide = () => {
    const newIdx = currentIndex === filteredProjects.length - 1 ? 0 : currentIndex + 1;
    scrollToIndex(newIdx);
  };

  // Sync active index when user scrolls/swipes on mobile
  const handleContainerScroll = () => {
    const container = scrollContainerRef.current;
    if (!container || filteredProjects.length === 0) return;
    const scrollLeft = container.scrollLeft;
    const firstCard = cardRefs.current[0];
    if (!firstCard) return;
    const cardWidth = firstCard.offsetWidth + 16;
    const newIndex = Math.round(scrollLeft / cardWidth);
    if (newIndex >= 0 && newIndex < filteredProjects.length && newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
    }
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-12 sm:py-16 px-4 sm:px-8 max-w-7xl mx-auto bg-[#f5f4ed]"
    >
      {/* Header Row */}
      <div className="projects-header flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 gap-4">
        <div>
          <span className="text-[11px] sm:text-xs font-mono font-bold tracking-widest text-zinc-500 uppercase">
            — FEATURED PROJECTS
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-950 mt-1 tracking-tight">
            See Our Work
          </h2>
          <p className="text-zinc-600 text-xs sm:text-sm mt-0.5 sm:mt-1">
            Real solutions. Real impact.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
          <a
            href="https://github.com/sin-07"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-white text-zinc-950 hover:bg-zinc-100 border-2 border-zinc-900 rounded-xl px-3 py-1.5 sm:px-3.5 sm:py-2 font-bold text-xs sm:text-sm shadow-[2px_2px_0px_#1e1e1e] neo-btn cursor-pointer"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 sm:w-4 sm:h-4">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span>@sin-07</span>
          </a>

          <a
            href="https://github.com/sin-07?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-[#f8b4a6] hover:bg-[#f69d8b] text-zinc-950 border-2 border-zinc-900 rounded-xl px-3 sm:px-4 py-1.5 sm:py-2 font-bold text-xs sm:text-sm shadow-[2.5px_2.5px_0px_#1e1e1e] neo-btn cursor-pointer"
          >
            <span className="sm:hidden">GitHub Repos</span>
            <span className="hidden sm:inline">View Real-World Projects on GitHub</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </a>
        </div>
      </div>

      {/* GSAP Animated Category Dropdown & Search Filter Bar */}
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2.5">
        <div className="flex items-center gap-2 flex-wrap">
          {/* Category dropdown */}
          <div className="relative inline-block text-left">
            <button
              type="button"
              onClick={() => {
                playClickSound();
                setFilterOpen(!filterOpen);
              }}
              className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#FAF8F3] hover:bg-white text-zinc-900 border-2 border-zinc-900 rounded-xl px-3 py-1.5 sm:px-3.5 sm:py-2 font-bold text-xs sm:text-sm shadow-[2px_2px_0px_#1e1e1e] cursor-pointer"
            >
              <span className="text-zinc-500 font-mono text-[11px] sm:text-xs">Category:</span>
              <span className="text-emerald-950 truncate max-w-[120px] sm:max-w-none font-extrabold">
                {selectedCategory === "All" ? "All Categories" : selectedCategory}
              </span>
              <ChevronDown
                className={`w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-800 transition-transform duration-200 ${
                  filterOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {filterOpen && (
              <div
                ref={filterMenuRef}
                className="absolute left-0 mt-2 w-56 sm:w-60 rounded-xl bg-[#FAF8F3] border-2 border-zinc-900 shadow-[4px_4px_0px_#1e1e1e] p-1.5 z-30 space-y-1 will-change-transform"
              >
                {[
                  { label: "All Real-World Projects", id: "All" },
                  { label: "3D & WebGL (Atelier)", id: "3D Web" },
                  { label: "E-Commerce & Mobile", id: "E-Commerce" },
                  { label: "AI & Career Intelligence", id: "AI" },
                  { label: "Gaming & Game Loops", id: "Gaming" },
                  { label: "EdTech & LMS", id: "EdTech" },
                  { label: "Social Good & Healthcare", id: "Social Good" },
                  { label: "Systems & Rust CLI", id: "Systems" },
                ].map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => {
                      playClickSound();
                      setSelectedCategory(cat.id);
                      setFilterOpen(false);
                      setCurrentIndex(0);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-bold flex items-center justify-between transition-colors cursor-pointer ${
                      selectedCategory === cat.id
                        ? "bg-[#c3e3c3] text-zinc-950 font-extrabold"
                        : "hover:bg-zinc-200/60 text-zinc-800"
                    }`}
                  >
                    <span>{cat.label}</span>
                    {selectedCategory === cat.id && (
                      <Check className="w-3.5 h-3.5 text-emerald-700" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Real-time Search Input */}
          <div className="relative flex items-center">
            <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-2.5 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentIndex(0);
              }}
              placeholder="Filter by keyword..."
              className="bg-white border-2 border-zinc-900 rounded-xl pl-8 pr-7 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-zinc-950 placeholder-zinc-400 focus:outline-none shadow-[2px_2px_0px_#1e1e1e] w-40 sm:w-56"
            />
            {searchQuery && (
              <button
                onClick={() => {
                  playClickSound();
                  setSearchQuery("");
                }}
                className="absolute right-2 p-0.5 rounded text-zinc-400 hover:text-zinc-800"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        <span className="text-[11px] sm:text-xs font-mono font-semibold text-zinc-600 bg-white/80 border border-zinc-400 px-2.5 py-1 rounded-md shadow-[1px_1px_0px_#1e1e1e]">
          Showing {filteredProjects.length} of {projects.length} Projects
        </span>
      </div>

      {/* Projects Carousel Container */}
      <div className="relative">
        {/* Floating Navigation Arrows (Desktop / Tablet only) */}
        <button
          onClick={prevSlide}
          aria-label="Previous project"
          className="hidden sm:flex absolute -left-4 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border-2 border-zinc-900 items-center justify-center shadow-[2px_2px_0px_#1e1e1e] neo-btn cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5 text-zinc-900" />
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next project"
          className="hidden sm:flex absolute -right-4 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border-2 border-zinc-900 items-center justify-center shadow-[2px_2px_0px_#1e1e1e] neo-btn cursor-pointer"
        >
          <ChevronRight className="w-5 h-5 text-zinc-900" />
        </button>

        {/* Carousel / Grid: Horizontal scroll-snap on mobile, 4-col responsive grid on tablet & desktop */}
        <div
          ref={scrollContainerRef}
          onScroll={handleContainerScroll}
          className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 overflow-x-auto sm:overflow-visible pb-4 pt-1 px-1 snap-x snap-mandatory scroll-smooth no-scrollbar"
        >
          {filteredProjects.map((proj, idx) => (
            <div
              key={proj.id}
              ref={(el) => {
                cardRefs.current[idx] = el;
              }}
              onClick={() => {
                playClickSound();
                onSelectProject(proj);
              }}
              className={`w-[84vw] max-w-[315px] sm:w-auto sm:max-w-none flex-shrink-0 snap-center bg-[#FAF8F3] border-2 border-zinc-900 ${
                currentIndex === idx
                  ? "shadow-[4px_4px_0px_#1e1e1e]"
                  : "shadow-[2.5px_2.5px_0px_#1e1e1e]"
              } rounded-2xl p-3 sm:p-3.5 flex flex-col justify-between hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_#1e1e1e] active:scale-[0.98] transition-all cursor-pointer group`}
            >
              <div>
                {/* Project Image Frame */}
                <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-zinc-800 bg-zinc-200">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-900/80 p-1 rounded-md text-white">
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Project Title & Category */}
                <div className="pt-3 px-0.5">
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/90 border border-emerald-300 px-1.5 py-0.5 rounded">
                      {proj.category || "Project"}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500 truncate max-w-[130px]">
                      {proj.metrics}
                    </span>
                  </div>
                  <h3 className="font-extrabold text-sm sm:text-base text-zinc-950 truncate">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-zinc-600 line-clamp-2 mt-1 leading-relaxed">
                    {proj.description}
                  </p>
                </div>
              </div>

              {/* Tags Pill Row */}
              <div className="pt-3 flex flex-wrap gap-1 px-0.5">
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

        {/* Bottom Navigation Controls & Pagination */}
        <div className="flex items-center justify-center gap-3 mt-3 sm:mt-6">
          {/* Mobile Prev Arrow */}
          <button
            onClick={prevSlide}
            aria-label="Previous project"
            className="sm:hidden w-8 h-8 rounded-full bg-white border-2 border-zinc-900 flex items-center justify-center shadow-[1.5px_1.5px_0px_#1e1e1e] neo-btn cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4 text-zinc-900" />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-1.5">
            {filteredProjects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all rounded-full cursor-pointer ${
                  currentIndex === idx
                    ? "w-5 h-2 bg-zinc-900"
                    : "w-2 h-2 bg-zinc-400/80 hover:bg-zinc-700"
                }`}
              />
            ))}
          </div>

          {/* Mobile Next Arrow */}
          <button
            onClick={nextSlide}
            aria-label="Next project"
            className="sm:hidden w-8 h-8 rounded-full bg-white border-2 border-zinc-900 flex items-center justify-center shadow-[1.5px_1.5px_0px_#1e1e1e] neo-btn cursor-pointer"
          >
            <ChevronRight className="w-4 h-4 text-zinc-900" />
          </button>
        </div>

        {/* Mobile Swipe Hint */}
        <p className="sm:hidden text-center text-[11px] font-mono text-zinc-500 mt-2">
          ← Swipe to explore projects →
        </p>
      </div>
    </section>
  );
}
