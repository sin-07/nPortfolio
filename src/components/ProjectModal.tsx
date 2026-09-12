"use client";

import React from "react";
import Image from "next/image";
import { X, ArrowRight } from "lucide-react";
import { Project } from "./Projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onInquire: (title: string) => void;
}

export default function ProjectModal({ project, onClose, onInquire }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs transition-opacity animate-in fade-in">
      <div className="relative w-full max-w-xl bg-[#FAF8F3] border-2.5 border-zinc-900 rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0px_#1e1e1e]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg border-2 border-zinc-900 bg-white text-zinc-900 hover:bg-zinc-100 shadow-[2px_2px_0px_#1e1e1e] transition-all cursor-pointer"
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
          <div className="pt-4 flex items-center justify-between gap-3 border-t border-zinc-300">
            <button
              onClick={() => {
                onClose();
                onInquire(project.title);
              }}
              className="inline-flex items-center gap-2 bg-zinc-950 text-white border-2 border-zinc-950 rounded-xl px-5 py-2.5 font-bold text-xs sm:text-sm shadow-[2.5px_2.5px_0px_#000] neo-btn cursor-pointer"
            >
              <span>Build Similar Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
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
