"use client";

import React, { useRef, useEffect } from "react";
import {
  X,
  Download,
  Printer,
  Briefcase,
  GraduationCap,
  Mail,
  ExternalLink,
  Code2,
  CheckCircle2,
  FileText,
  MapPin,
} from "lucide-react";
import gsap from "gsap";
import { playClickSound } from "@/utils/audio";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export default function ResumeModal({
  isOpen,
  onClose,
  onOpenContact,
}: ResumeModalProps) {
  const backdropRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    if (backdropRef.current) {
      gsap.fromTo(
        backdropRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.22, ease: "power2.out" }
      );
    }

    if (modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        { scale: 0.9, y: 20, opacity: 0 },
        { scale: 1, y: 0, opacity: 1, duration: 0.32, ease: "back.out(1.2)" }
      );
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleCloseWithAnimation();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleCloseWithAnimation = () => {
    playClickSound();
    if (backdropRef.current && modalRef.current) {
      gsap.to(modalRef.current, {
        scale: 0.92,
        y: 15,
        opacity: 0,
        duration: 0.18,
        ease: "power2.in",
      });
      gsap.to(backdropRef.current, {
        opacity: 0,
        duration: 0.2,
        ease: "power2.in",
        onComplete: onClose,
      });
    } else {
      onClose();
    }
  };

  const handlePrint = () => {
    playClickSound();
    window.print();
  };

  if (!isOpen) return null;

  return (
    <div
      ref={backdropRef}
      onClick={handleCloseWithAnimation}
      className="fixed inset-0 z-[1050] bg-zinc-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="bg-[#FAF8F3] border-3 border-zinc-900 rounded-2xl sm:rounded-3xl shadow-[8px_8px_0px_#1e1e1e] max-w-3xl w-full my-auto overflow-hidden flex flex-col max-h-[92vh]"
      >
        {/* Top Control Bar */}
        <div className="bg-[#edeae1] border-b-2.5 border-zinc-900 px-4 sm:px-6 py-3.5 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-[#c3e3c3] border-1.5 border-zinc-900 flex items-center justify-center shadow-[1.5px_1.5px_0px_#1e1e1e]">
              <FileText className="w-4 h-4 text-emerald-950" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm sm:text-base text-zinc-950">
                Curriculum Vitae / Resume
              </h3>
              <p className="text-[11px] text-zinc-600 font-mono">
                Aniket Singh • Software Engineer @ TCS
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border-1.5 border-zinc-900 text-xs font-bold text-zinc-900 shadow-[1.5px_1.5px_0px_#1e1e1e] hover:bg-[#def7ec] cursor-pointer transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-zinc-800" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              onClick={handleCloseWithAnimation}
              className="w-8 h-8 rounded-lg bg-white border-1.5 border-zinc-900 flex items-center justify-center text-zinc-700 hover:text-zinc-950 shadow-[1.5px_1.5px_0px_#1e1e1e] cursor-pointer"
              aria-label="Close resume"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Sheet */}
        <div className="p-5 sm:p-8 overflow-y-auto space-y-6 bg-white text-zinc-900 font-sans">
          {/* Resume Header */}
          <div className="border-b-2 border-zinc-900 pb-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">
                  Aniket Singh
                </h1>
                <p className="text-sm font-bold text-emerald-700 mt-0.5">
                  Software Engineer @ Tata Consultancy Services (TCS) • Full Stack Developer
                </p>
              </div>

              <div className="flex flex-col sm:items-end gap-1 text-xs text-zinc-600 font-mono">
                <span>aniket.singh@bytebloom.dev</span>
                <span>aniket.singh07vs@gmail.com</span>
                <span className="flex items-center gap-2">
                  <a
                    href="https://github.com/sin-07"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-900 font-bold hover:underline"
                  >
                    github.com/sin-07
                  </a>
                  <span>•</span>
                  <a
                    href="https://www.linkedin.com/in/aniket-singhh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-900 font-bold hover:underline"
                  >
                    LinkedIn
                  </a>
                </span>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-widest text-zinc-500 uppercase mb-2">
              // Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-medium">
              Software Engineer at Tata Consultancy Services (TCS) and Computer Science graduate with strong foundations in software engineering, distributed systems, algorithms, and clean architecture. Experienced in architecting production web platforms, real-time engines, and responsive user experiences using React, Next.js, Node.js, and TypeScript.
            </p>
          </div>

          {/* Experience Section */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-widest text-zinc-500 uppercase mb-3">
              // Experience
            </h2>

            <div className="space-y-4">
              {/* TCS Experience */}
              <div className="p-4 rounded-xl bg-[#FAF8F3] border-1.5 border-zinc-900 shadow-[2px_2px_0px_#1e1e1e]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                  <h3 className="font-extrabold text-sm sm:text-base text-zinc-950">
                    Software Engineer — Tata Consultancy Services (TCS)
                  </h3>
                  <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-300 w-fit">
                    Present
                  </span>
                </div>
                <p className="text-xs text-zinc-600 mb-2 font-medium">
                  Enterprise System Architecture • Scalable Microservices • Cloud Solutions
                </p>
                <ul className="space-y-1 text-xs text-zinc-700 pl-1">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>Developing scalable enterprise full-stack modules and robust RESTful API services.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>Writing clean, modular code with rigorous automated validation and agile methodologies.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>Collaborating across agile engineering delivery squads for continuous deployments.</span>
                  </li>
                </ul>
              </div>

              {/* ByteBloom Experience */}
              <div className="p-4 rounded-xl bg-[#FAF8F3] border-1.5 border-zinc-900 shadow-[2px_2px_0px_#1e1e1e]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                  <h3 className="font-extrabold text-sm sm:text-base text-zinc-950">
                    Founder &amp; Full Stack Lead — ByteBloom
                  </h3>
                  <span className="text-xs font-mono font-bold text-zinc-700 bg-zinc-200 px-2 py-0.5 rounded border border-zinc-400 w-fit">
                    Ongoing
                  </span>
                </div>
                <p className="text-xs text-zinc-600 mb-2 font-medium">
                  Client Engineering • Digital Architecture • Production Products
                </p>
                <ul className="space-y-1 text-xs text-zinc-700 pl-1">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>Engineered high-performance web applications including CricketWala PlayArena &amp; Raven Tutorials.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>Built Samastipur Blood Bank platform connecting volunteer donors with regional hospitals.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-widest text-zinc-500 uppercase mb-3">
              // Education
            </h2>
            <div className="p-4 rounded-xl bg-[#FAF8F3] border-1.5 border-zinc-900 shadow-[2px_2px_0px_#1e1e1e]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                <h3 className="font-extrabold text-sm sm:text-base text-zinc-950">
                  B.Tech in Computer Science &amp; Engineering
                </h3>
                <span className="text-xs font-mono text-zinc-600">2022 - 2026</span>
              </div>
              <p className="text-xs text-zinc-700 leading-relaxed font-medium">
                Core Coursework: Data Structures &amp; Algorithms, Database Management Systems (DBMS), Operating Systems, Computer Networks, Object-Oriented Software Design.
              </p>
            </div>
          </div>

          {/* Skills Matrix */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-widest text-zinc-500 uppercase mb-2">
              // Core Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-lg bg-[#FAF8F3] border border-zinc-300">
                <strong className="text-zinc-950 font-bold block mb-1">Frontend &amp; UI:</strong>
                <span className="text-zinc-700 font-mono">React 19, Next.js 16, TypeScript, Tailwind CSS, HTML5, CSS3, GSAP</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#FAF8F3] border border-zinc-300">
                <strong className="text-zinc-950 font-bold block mb-1">Backend &amp; APIs:</strong>
                <span className="text-zinc-700 font-mono">Node.js, Express.js, REST APIs, Microservices, Python, C++, Java</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#FAF8F3] border border-zinc-300">
                <strong className="text-zinc-950 font-bold block mb-1">Databases:</strong>
                <span className="text-zinc-700 font-mono">MongoDB, PostgreSQL, SQL, Redis, Mongoose ODM</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#FAF8F3] border border-zinc-300">
                <strong className="text-zinc-950 font-bold block mb-1">Tools &amp; Practices:</strong>
                <span className="text-zinc-700 font-mono">Git, GitHub, Docker, Postman, Vercel, Linux/CLI, Clean Code, Agile</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Bottom Bar */}
        <div className="p-4 bg-[#edeae1] border-t-2 border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-3 flex-shrink-0">
          <span className="text-xs text-zinc-600 font-mono text-center sm:text-left">
            Ready to hire or collaborate?
          </span>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={handleCloseWithAnimation}
              className="flex-1 sm:flex-initial px-4 py-2 rounded-xl border-1.5 border-zinc-900 bg-white text-xs font-bold text-zinc-900 shadow-[1.5px_1.5px_0px_#1e1e1e] cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                handleCloseWithAnimation();
                onOpenContact();
              }}
              className="flex-1 sm:flex-initial px-4 py-2 rounded-xl border-2 border-zinc-900 bg-[#f8b4a6] hover:bg-[#f69d8b] text-xs font-bold text-zinc-950 shadow-[2px_2px_0px_#1e1e1e] neo-btn cursor-pointer"
            >
              Contact Aniket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
