"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { X, ArrowRight, ExternalLink } from "lucide-react";
import gsap from "gsap";
import { Project } from "./Projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onInquire: (title: string) => void;
}

export default function ProjectModal({ project, onClose, onInquire }: ProjectModalProps) {
  const backdropRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Freeze background scrolling and trigger GSAP entrance animation
  useEffect(() => {
    if (!project) return;

    // Freeze body background scrolling
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // GSAP Backdrop Fade In
    if (backdropRef.current) {
      gsap.fromTo(
        backdropRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.28, ease: "power2.out" }
      );
    }

    // GSAP Modal Pop & Spring In
    if (modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        { scale: 0.88, y: 30, opacity: 0 },
        { scale: 1, y: 0, opacity: 1, duration: 0.38, ease: "back.out(1.25)" }
      );
    }

    // Escape key listener to close with animation
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleCloseWithAnimation();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow || "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project]);

  const handleCloseWithAnimation = () => {
    if (modalRef.current && backdropRef.current) {
      gsap.to(modalRef.current, {
        scale: 0.9,
        y: 20,
        opacity: 0,
        duration: 0.22,
        ease: "power2.in",
      });
      gsap.to(backdropRef.current, {
        opacity: 0,
        duration: 0.22,
        ease: "power2.in",
        onComplete: () => {
          onClose();
        },
      });
    } else {
      onClose();
    }
  };

  if (!project) return null;

  return (
    <div
      ref={backdropRef}
      onClick={(e) => {
        if (e.target === backdropRef.current) {
          handleCloseWithAnimation();
        }
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-xl bg-[#FAF8F3] border-2.5 border-zinc-900 rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0px_#1e1e1e] will-change-transform max-h-[90vh] overflow-y-auto"
      >
        <button
          onClick={handleCloseWithAnimation}
          className="absolute top-4 right-4 p-1.5 rounded-lg border-2 border-zinc-900 bg-white text-zinc-900 hover:bg-zinc-100 shadow-[2px_2px_0px_#1e1e1e] transition-all cursor-pointer z-10"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Project Image */}
        <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border-2 border-zinc-900 mb-4 bg-zinc-200">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 600px"
            className="object-cover"
          />
        </div>

        {/* Project Info */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xl sm:text-2xl font-extrabold text-zinc-950">
              {project.title}
            </h3>
            <span className="text-xs font-mono font-bold bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full border border-emerald-400">
              {project.metrics}
            </span>
          </div>

          <p className="text-sm text-zinc-700 leading-relaxed">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-1">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg text-xs font-bold bg-white text-zinc-900 border border-zinc-900 shadow-[1.5px_1.5px_0px_#1e1e1e]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="pt-4 flex flex-wrap items-center justify-between gap-3 border-t border-zinc-300">
            <div className="flex flex-wrap items-center gap-2.5">
              <button
                onClick={() => {
                  onClose();
                  onInquire(project.title);
                }}
                className="inline-flex items-center gap-2 bg-zinc-950 text-white border-2 border-zinc-950 rounded-xl px-4 py-2.5 font-bold text-xs sm:text-sm shadow-[2.5px_2.5px_0px_#000] neo-btn cursor-pointer"
              >
                <span>Build Similar Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={project.githubUrl || "https://github.com/sin-07"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-white text-zinc-950 hover:bg-zinc-100 border-2 border-zinc-900 rounded-xl px-4 py-2.5 font-bold text-xs sm:text-sm shadow-[2px_2px_0px_#1e1e1e] neo-btn cursor-pointer"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span>View on GitHub</span>
              </a>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[#d4f7db] hover:bg-[#bcf3c7] text-emerald-950 border-2 border-zinc-900 rounded-xl px-4 py-2.5 font-bold text-xs sm:text-sm shadow-[2px_2px_0px_#1e1e1e] neo-btn cursor-pointer"
                >
                  <ExternalLink className="w-4 h-4 text-emerald-800" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>

            <button
              onClick={handleCloseWithAnimation}
              className="text-xs font-bold text-zinc-600 hover:text-zinc-900 underline cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
