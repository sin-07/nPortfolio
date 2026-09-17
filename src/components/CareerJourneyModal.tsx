"use client";

import React, { useRef, useEffect } from "react";
import {
  X,
  Briefcase,
  GraduationCap,
  Sparkles,
  Calendar,
  ExternalLink,
  CheckCircle2,
  Building2,
  Code2,
  Layers,
} from "lucide-react";
import gsap from "gsap";

interface CareerJourneyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export default function CareerJourneyModal({
  isOpen,
  onClose,
  onOpenContact,
}: CareerJourneyModalProps) {
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
        { opacity: 1, duration: 0.25, ease: "power2.out" }
      );
    }

    if (modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        { scale: 0.9, y: 25, opacity: 0 },
        { scale: 1, y: 0, opacity: 1, duration: 0.35, ease: "back.out(1.2)" }
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
    if (backdropRef.current && modalRef.current) {
      gsap.to(modalRef.current, {
        scale: 0.92,
        y: 15,
        opacity: 0,
        duration: 0.2,
        ease: "power2.in",
      });
      gsap.to(backdropRef.current, {
        opacity: 0,
        duration: 0.22,
        ease: "power2.in",
        onComplete: onClose,
      });
    } else {
      onClose();
    }
  };

  if (!isOpen) return null;

  const milestones = [
    {
      period: "Present",
      role: "Software Engineer",
      organization: "Tata Consultancy Services (TCS)",
      tag: "Enterprise Engineering",
      color: "bg-[#def7ec] text-emerald-950 border-emerald-400",
      icon: Building2,
      description:
        "Building enterprise-grade distributed systems and modern web architectures. Focused on scalability, clean code design patterns, and robust backend APIs.",
      highlights: [
        "Architecting resilient full-stack microservices & cloud-native workflows",
        "Writing clean, modular, and maintainable TypeScript & backend services",
        "Collaborating across cross-functional enterprise agile delivery squads",
      ],
      skills: ["Full Stack", "TypeScript", "Node.js", "Enterprise Architecture", "Clean Code"],
    },
    {
      period: "2022 - 2026",
      role: "B.Tech in Computer Science & Engineering",
      organization: "University Institute of Engineering",
      tag: "Undergraduate Degree",
      color: "bg-[#dff1fa] text-sky-950 border-sky-400",
      icon: GraduationCap,
      description:
        "Four-year comprehensive engineering program with deep immersion in computer systems, algorithmic complexity, and software foundations.",
      highlights: [
        "Core Coursework: Data Structures, Algorithms, DBMS, Operating Systems, Computer Networks, System Design",
        "Hands-on lab systems programming with C, C++, Java, and Python",
        "Active leader in hackathons, coding contests, and developer meetups",
      ],
      skills: ["Data Structures", "Algorithms", "DBMS", "Operating Systems", "Computer Networks"],
    },
    {
      period: "Ongoing",
      role: "Founder & Full Stack Creator",
      organization: "ByteBloom / Independent Engineering",
      tag: "Production Showcase",
      color: "bg-[#fdece4] text-amber-950 border-amber-400",
      icon: Code2,
      description:
        "Architected and deployed high-impact production applications solving real human problems with modern full-stack web technologies.",
      highlights: [
        "CricketWala PlayArena: High-FPS real-time cricket game engine & live scoring platform",
        "Raven Tutorials: Comprehensive modular EdTech learning management system",
        "Samastipur Blood Bank: Life-saving real-time blood inventory and donor matching network",
      ],
      skills: ["Next.js", "React", "Node.js", "MongoDB", "Tailwind CSS", "GSAP"],
    },
  ];

  return (
    <div
      ref={backdropRef}
      onClick={handleCloseWithAnimation}
      className="fixed inset-0 z-[1050] bg-zinc-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="bg-[#FAF8F3] border-3 border-zinc-900 rounded-2xl sm:rounded-3xl shadow-[8px_8px_0px_#1e1e1e] max-w-2xl w-full my-auto overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Modal Header */}
        <div className="bg-[#edeae1] border-b-2.5 border-zinc-900 p-4 sm:p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#def7ec] border-1.5 border-zinc-900 flex items-center justify-center shadow-[1.5px_1.5px_0px_#1e1e1e]">
              <Briefcase className="w-4 h-4 text-emerald-800" />
            </div>
            <div>
              <h3 className="font-extrabold text-base sm:text-lg text-zinc-950 tracking-tight">
                Career Journey &amp; Milestones
              </h3>
              <p className="text-[11px] text-zinc-600 font-mono">
                Aniket Singh • Software Engineer @ TCS
              </p>
            </div>
          </div>

          <button
            onClick={handleCloseWithAnimation}
            className="w-8 h-8 rounded-lg bg-[#FAF8F3] border-1.5 border-zinc-900 flex items-center justify-center text-zinc-700 hover:text-zinc-950 shadow-[1.5px_1.5px_0px_#1e1e1e] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
          <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed font-medium">
            From university algorithms and foundational engineering to enterprise systems at TCS and production applications at ByteBloom, here is the roadmap of my technical journey:
          </p>

          <div className="space-y-4">
            {milestones.map((m, idx) => {
              const Icon = m.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border-2 border-zinc-900 rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-[3px_3px_0px_#1e1e1e] relative group hover:shadow-[5px_5px_0px_#1e1e1e] transition-shadow"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#eae9df] border-1.5 border-zinc-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon className="w-4 h-4 text-zinc-900" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className="font-extrabold text-base text-zinc-950">
                            {m.role}
                          </h4>
                          <span
                            className={`text-[10px] font-bold px-2 py-0.5 rounded border ${m.color}`}
                          >
                            {m.tag}
                          </span>
                        </div>
                        <p className="text-xs font-semibold text-emerald-800 mt-0.5">
                          {m.organization}
                        </p>
                      </div>
                    </div>

                    <span className="self-start inline-flex items-center gap-1 text-[11px] font-mono text-zinc-600 bg-[#edeae1] border border-zinc-400 px-2.5 py-0.5 rounded-md flex-shrink-0">
                      <Calendar className="w-3 h-3 text-zinc-700" />
                      {m.period}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed mb-3">
                    {m.description}
                  </p>

                  <ul className="space-y-1.5 text-xs text-zinc-600 mb-3.5 pl-1">
                    {m.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-2.5 border-t border-zinc-200">
                    {m.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-[#f5f4ed] border border-zinc-300 text-zinc-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#edeae1] border-t-2 border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-zinc-600 font-medium text-center sm:text-left">
            Have an engineering challenge or role in mind?
          </span>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={handleCloseWithAnimation}
              className="flex-1 sm:flex-initial px-4 py-2 rounded-xl border-1.5 border-zinc-900 bg-white text-xs font-bold text-zinc-900 shadow-[1.5px_1.5px_0px_#1e1e1e]"
            >
              Close
            </button>
            <button
              onClick={() => {
                handleCloseWithAnimation();
                onOpenContact();
              }}
              className="flex-1 sm:flex-initial px-4 py-2 rounded-xl border-2 border-zinc-900 bg-[#f8b4a6] hover:bg-[#f69d8b] text-xs font-bold text-zinc-950 shadow-[2px_2px_0px_#1e1e1e] neo-btn"
            >
              Let&apos;s Build Together
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
