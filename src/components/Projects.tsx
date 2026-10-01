"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Magnetic from "@/components/Magnetic";
import ProjectModal from "@/components/ProjectModal";
import { portfolioData, Project } from "@/data/portfolioData";

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpenDetails: () => void;
}

function ProjectCard({ project, index, onOpenDetails }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="spotlight-card group bg-[#141413] border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-white/30 hover:shadow-2xl transition-all duration-300 will-change-transform"
    >
      <div className="relative z-10">
        {/* Top Header */}
        <div className="flex items-center justify-between gap-2 mb-6 pb-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            <span className="font-mono text-xs text-emerald-400 font-bold">
              0{index + 1}
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5 justify-end">
            {project.technologies.slice(0, 3).map((tech, idx) => (
              <span
                key={idx}
                className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 text-[#8A8985] border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Title & Subtitle */}
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F4F3EF] mb-2 group-hover:text-white transition-colors">
          {project.title}
        </h3>
        {project.subtitle && (
          <p className="text-xs text-[#8A8985] font-mono mb-4">{project.subtitle}</p>
        )}
        <p className="text-xs sm:text-sm text-[#C4C3BE] font-sans leading-relaxed mb-8 line-clamp-3">
          {project.description}
        </p>
      </div>

      {/* Bottom Actions */}
      <div className="relative z-10 pt-5 border-t border-white/10 flex items-center justify-between gap-3">
        <Magnetic strength={0.25}>
          <button
            onClick={onOpenDetails}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F4F3EF] text-black hover:bg-white transition-all font-sans text-xs sm:text-sm font-semibold cursor-pointer shadow-lg hover:shadow-white/20"
          >
            <span>View Project</span>
            <span className="font-mono text-xs">↗</span>
          </button>
        </Magnetic>

        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <Magnetic strength={0.3}>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="circle-btn hover:border-white/60"
                aria-label="View Source Code on GitHub"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 496 512"
                  className="w-3.5 h-3.5"
                >
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                </svg>
              </a>
            </Magnetic>
          )}

          {project.liveUrl && (
            <Magnetic strength={0.3}>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="circle-btn hover:border-white/60"
                aria-label="Visit Live Project"
              >
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
              </a>
            </Magnetic>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const { projects } = portfolioData;
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
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

      if (gridRef.current?.children) {
        gsap.fromTo(
          gridRef.current.children,
          { opacity: 0, y: 40, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.1,
            duration: 0.75,
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

  return (
    <>
      <section
        ref={sectionRef}
        id="projects"
        className="py-20 sm:py-28 bg-[#0E0E0D] border-t border-white/10 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-10">
          {/* Section Header */}
          <div ref={headerRef} className="mb-14">
            <div className="flex items-center justify-between mb-3">
              <p className="font-mono text-xs uppercase tracking-widest text-[#8A8985]">
                (02 / Selected Works)
              </p>
              <span className="font-mono text-xs text-[#8A8985]">
                01 – 0{projects.length}
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#F4F3EF] tracking-tight mb-4">
              Featured{" "}
              <span className="font-serif italic font-normal text-white/70">
                Engineering Projects
              </span>
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-b border-white/10 pb-5">
              <p className="text-[#8A8985] text-xs sm:text-sm font-sans max-w-2xl">
                Production-ready applications, developer tools, and scalable systems engineered
                with clean code and modern component architecture.
              </p>
              <span className="font-mono text-sm text-[#8A8985] hidden sm:inline" aria-hidden="true">
                ↘
              </span>
            </div>
          </div>

          {/* Cards Grid */}
          <div
            ref={gridRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onOpenDetails={() => setActiveProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </>
  );
}
