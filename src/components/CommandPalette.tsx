"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Search,
  Terminal,
  Command,
  X,
  CornerDownLeft,
  Copy,
  Check,
  Mail,
  Briefcase,
  Layers,
  Code2,
  Sparkles,
  ArrowRight,
  User,
  Wrench,
  Globe,
  FileText,
} from "lucide-react";
import gsap from "gsap";

const GithubIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

const LinkedinIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2Z" />
  </svg>
);

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: (service?: string) => void;
  onOpenJourney: () => void;
  onOpenResume?: () => void;
  onCopyEmail: (email: string) => void;
}

interface ActionItem {
  id: string;
  label: string;
  category: "Navigation" | "Quick Actions" | "Profiles";
  icon: React.ComponentType<{ className?: string }>;
  action: () => void;
  hint?: string;
}

export default function CommandPalette({
  isOpen,
  onClose,
  onOpenContact,
  onOpenJourney,
  onOpenResume,
  onCopyEmail,
}: CommandPaletteProps) {
  const [mode, setMode] = useState<"search" | "terminal">("search");
  const [query, setQuery] = useState("");

  // Terminal state
  const [commandInput, setCommandInput] = useState("");
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    "Aniket Singh Developer CLI [Version 2.0.4]",
    "Type 'help' to see available commands or 'sudo hire-me'.",
  ]);
  const terminalEndRef = useRef<HTMLDivElement>(null);

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
        { scale: 0.92, y: -20, opacity: 0 },
        { scale: 1, y: 0, opacity: 1, duration: 0.32, ease: "back.out(1.25)" }
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

  useEffect(() => {
    if (mode === "terminal") {
      terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [terminalLogs, mode]);

  const handleCloseWithAnimation = () => {
    if (backdropRef.current && modalRef.current) {
      gsap.to(modalRef.current, {
        scale: 0.94,
        y: -15,
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

  const scrollTo = (sectionId: string) => {
    handleCloseWithAnimation();
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(sectionId);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: Math.max(0, offsetPosition), behavior: "smooth" });
    }
  };

  const actions: ActionItem[] = [
    {
      id: "nav-home",
      label: "Go to Hero / Top",
      category: "Navigation",
      icon: Sparkles,
      action: () => scrollTo("home"),
    },
    {
      id: "nav-services",
      label: "Services: What We Do",
      category: "Navigation",
      icon: Wrench,
      action: () => scrollTo("services"),
    },
    {
      id: "nav-projects",
      label: "Projects: See Our Work",
      category: "Navigation",
      icon: Code2,
      action: () => scrollTo("projects"),
    },
    {
      id: "nav-tech",
      label: "Technologies: Tools We Love",
      category: "Navigation",
      icon: Layers,
      action: () => scrollTo("technologies"),
    },
    {
      id: "nav-about",
      label: "About Aniket (Software Engineer @ TCS)",
      category: "Navigation",
      icon: User,
      action: () => scrollTo("about"),
    },
    {
      id: "act-journey",
      label: "View Career Journey & Academic Milestones",
      category: "Quick Actions",
      icon: Briefcase,
      action: () => {
        handleCloseWithAnimation();
        onOpenJourney();
      },
      hint: "TCS & B.Tech",
    },
    ...(onOpenResume
      ? [
          {
            id: "act-resume",
            label: "View Curriculum Vitae (Resume / CV)",
            category: "Quick Actions" as const,
            icon: FileText,
            action: () => {
              handleCloseWithAnimation();
              onOpenResume();
            },
            hint: "Print / PDF",
          },
        ]
      : []),
    {
      id: "act-contact-modal",
      label: "Open Project Inquiry & Contact Form",
      category: "Quick Actions",
      icon: Mail,
      action: () => {
        handleCloseWithAnimation();
        onOpenContact();
      },
      hint: "Let's Build",
    },
    {
      id: "act-copy-work-email",
      label: "Copy Work Email (aniket.singh@bytebloom.dev)",
      category: "Quick Actions",
      icon: Copy,
      action: () => {
        onCopyEmail("aniket.singh@bytebloom.dev");
      },
      hint: "1-Click Copy",
    },
    {
      id: "act-copy-personal-email",
      label: "Copy Direct Email (aniket.singh07vs@gmail.com)",
      category: "Quick Actions",
      icon: Copy,
      action: () => {
        onCopyEmail("aniket.singh07vs@gmail.com");
      },
      hint: "1-Click Copy",
    },
    {
      id: "prof-github",
      label: "Open GitHub Profile (@sin-07)",
      category: "Profiles",
      icon: GithubIcon,
      action: () => window.open("https://github.com/sin-07", "_blank"),
    },
    {
      id: "prof-linkedin",
      label: "Connect on LinkedIn",
      category: "Profiles",
      icon: LinkedinIcon,
      action: () => window.open("https://www.linkedin.com/in/aniket-singhh/", "_blank"),
    },
  ];

  const filteredActions = actions.filter((a) =>
    a.label.toLowerCase().includes(query.toLowerCase())
  );

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = commandInput.trim().toLowerCase();
    if (!cmd) return;

    let response = "";
    switch (cmd) {
      case "help":
        response =
          "Commands:\n • bio      - Background & summary\n • role     - Software Engineer @ TCS info\n • tech     - Core technical stack\n • projects - Major production apps\n • resume   - Opens Curriculum Vitae (CV) modal\n • journey  - Opens Career Timeline modal\n • contact  - Opens Contact form\n • clear    - Clears terminal output\n • sudo hire-me - Easter egg";
        break;
      case "whoami":
      case "bio":
        response =
          "Aniket Singh: Software Engineer at Tata Consultancy Services (TCS), B.Tech CSE graduate, Full Stack Developer & Founder of ByteBloom.";
        break;
      case "role":
        response =
          "Software Engineer at TCS: Engineering enterprise distributed architectures, scalable microservices, and reliable cloud-ready solutions.";
        break;
      case "tech":
      case "skills":
        response =
          "Frontend: Next.js 16, React 19, TypeScript, Tailwind CSS, GSAP\nBackend: Node.js, Express, REST APIs, Microservices\nDatabases: MongoDB, PostgreSQL, Redis\nCore CS: Data Structures, Algorithms, System Design, OOP";
        break;
      case "projects":
        response =
          "1. CricketWala PlayArena (Real-time cricket game engine)\n2. Raven Tutorials (Modular EdTech LMS)\n3. Samastipur Blood Bank (Healthcare donor platform)\n4. Modern Enterprise ERP & AI Logistics Hub";
        break;
      case "resume":
      case "cv":
        if (onOpenResume) {
          handleCloseWithAnimation();
          onOpenResume();
          return;
        }
        response = "Resume modal is not available right now.";
        break;
      case "journey":
        handleCloseWithAnimation();
        onOpenJourney();
        return;
      case "contact":
        handleCloseWithAnimation();
        onOpenContact();
        return;
      case "clear":
        setTerminalLogs([]);
        setCommandInput("");
        return;
      case "sudo hire-me":
        response =
          "🎉 ACCESS GRANTED! You made the right choice.\nLet's build something phenomenal: aniket.singh@bytebloom.dev";
        break;
      default:
        response = `Command '${cmd}' not recognized. Type 'help' for available commands.`;
        break;
    }

    setTerminalLogs((prev) => [
      ...prev,
      `aniket@tcs:~$ ${commandInput}`,
      response,
    ]);
    setCommandInput("");
  };

  if (!isOpen) return null;

  return (
    <div
      ref={backdropRef}
      onClick={handleCloseWithAnimation}
      className="fixed inset-0 z-[1050] bg-zinc-950/70 backdrop-blur-sm flex items-start justify-center pt-16 sm:pt-24 px-3 sm:px-6"
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-xl bg-[#FAF8F3] border-3 border-zinc-900 rounded-2xl shadow-[8px_8px_0px_#1e1e1e] overflow-hidden flex flex-col max-h-[80vh]"
      >
        {/* Top Control Bar */}
        <div className="bg-[#edeae1] border-b-2.5 border-zinc-900 px-3 sm:px-4 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={() => setMode("search")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                mode === "search"
                  ? "bg-[#c3e3c3] text-zinc-950 border-zinc-900 shadow-[1.5px_1.5px_0px_#1e1e1e]"
                  : "bg-white text-zinc-700 border-zinc-400 hover:border-zinc-900"
              }`}
            >
              <Search className="w-3.5 h-3.5" />
              <span>Spotlight</span>
            </button>
            <button
              onClick={() => setMode("terminal")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                mode === "terminal"
                  ? "bg-[#f8b4a6] text-zinc-950 border-zinc-900 shadow-[1.5px_1.5px_0px_#1e1e1e]"
                  : "bg-white text-zinc-700 border-zinc-400 hover:border-zinc-900"
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Developer CLI</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-block text-[10px] font-mono font-bold bg-[#eae9df] border border-zinc-400 px-2 py-0.5 rounded text-zinc-700">
              ESC to close
            </span>
            <button
              onClick={handleCloseWithAnimation}
              className="w-7 h-7 rounded-lg bg-white border-1.5 border-zinc-900 flex items-center justify-center text-zinc-700 hover:text-zinc-950 shadow-[1px_1px_0px_#1e1e1e] cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Mode 1: Search */}
        {mode === "search" && (
          <>
            <div className="flex items-center px-4 py-3.5 border-b-2 border-zinc-900 bg-white gap-3">
              <Search className="w-4 h-4 text-zinc-500 flex-shrink-0" />
              <input
                type="text"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Jump to section or run quick action..."
                className="w-full bg-transparent text-sm font-semibold text-zinc-950 placeholder-zinc-400 focus:outline-none"
              />
            </div>

            <div className="overflow-y-auto p-2 space-y-1 divide-y divide-zinc-200">
              {filteredActions.length === 0 ? (
                <div className="p-8 text-center text-xs sm:text-sm text-zinc-500 font-medium">
                  No matching actions for &quot;{query}&quot;
                </div>
              ) : (
                filteredActions.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={item.action}
                      className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-white border border-transparent hover:border-zinc-900 hover:shadow-[2px_2px_0px_#1e1e1e] transition-all text-left group cursor-pointer"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-8 h-8 rounded-lg bg-[#eae9df] group-hover:bg-[#def7ec] border border-zinc-900 flex items-center justify-center text-zinc-800 transition-colors flex-shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <span className="text-xs sm:text-sm font-bold text-zinc-950 group-hover:text-emerald-950 block truncate">
                            {item.label}
                          </span>
                          <span className="text-[10px] font-mono text-zinc-500">
                            {item.category}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        {item.hint && (
                          <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-emerald-100 border border-emerald-300 text-emerald-800">
                            {item.hint}
                          </span>
                        )}
                        <CornerDownLeft className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-900" />
                      </div>
                    </button>
                  );
                })
              )}
            </div>
          </>
        )}

        {/* Mode 2: Interactive Terminal */}
        {mode === "terminal" && (
          <div className="flex flex-col flex-1 p-4 font-mono text-xs text-zinc-800 bg-[#fdfcf9] overflow-y-auto">
            <div className="space-y-1.5 flex-1 min-h-[200px] max-h-[280px] overflow-y-auto pr-2">
              {terminalLogs.map((log, idx) => (
                <div
                  key={idx}
                  className={`whitespace-pre-line leading-relaxed ${
                    log.startsWith("aniket@tcs")
                      ? "text-emerald-800 font-bold bg-[#e6f4ea] px-2 py-0.5 rounded border border-emerald-300 inline-block"
                      : log.startsWith("🎉")
                      ? "text-purple-900 font-extrabold bg-[#f0ebfa] p-2 rounded-lg border border-purple-300"
                      : "text-zinc-700"
                  }`}
                >
                  {log}
                </div>
              ))}
              <div ref={terminalEndRef} />
            </div>

            <form
              onSubmit={handleCommandSubmit}
              className="mt-3 pt-3 border-t-2 border-zinc-900 flex items-center gap-2"
            >
              <span className="font-bold text-emerald-700 flex-shrink-0">
                aniket@tcs:~$
              </span>
              <input
                type="text"
                autoFocus
                value={commandInput}
                onChange={(e) => setCommandInput(e.target.value)}
                placeholder="type 'help', 'bio', 'journey', 'sudo hire-me'..."
                className="flex-1 bg-transparent text-zinc-950 font-bold focus:outline-none"
              />
            </form>
          </div>
        )}

        {/* Footer Bar */}
        <div className="px-4 py-2 bg-[#edeae1] border-t-2 border-zinc-900 flex items-center justify-between text-[11px] font-mono text-zinc-600">
          <span>Aniket Singh • TCS Software Engineer</span>
          <span className="flex items-center gap-1">
            <span>Powered by</span>
            <span className="font-bold text-emerald-800">ByteBloom</span>
          </span>
        </div>
      </div>
    </div>
  );
}
