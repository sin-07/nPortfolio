"use client";

import React, { useState, useEffect, useCallback } from "react";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import AmbientBackground from "@/components/AmbientBackground";
import ToastNotification from "@/components/ToastNotification";
import CommandPaletteModal from "@/components/CommandPaletteModal";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import AboutSection from "@/components/AboutSection";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Feed from "@/components/Feed";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import ResumeModal from "@/components/ResumeModal";
import ArticlesModal from "@/components/ArticlesModal";
import ContactModal from "@/components/ContactModal";
import { setSoundMuted, playPopSound } from "@/utils/audio";

export default function Home() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [articlesOpen, setArticlesOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [isSoundActive, setIsSoundActive] = useState(true);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Global Ctrl+K / Cmd+K listener for Command Palette
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleToggleSound = useCallback(() => {
    const nextState = !isSoundActive;
    setIsSoundActive(nextState);
    setSoundMuted(!nextState);
    if (nextState) {
      playPopSound();
    }
  }, [isSoundActive]);

  const showToast = useCallback((msg: string) => {
    setToastMessage(msg);
  }, []);

  return (
    <SmoothScroll>
      <CustomCursor />
      <ScrollProgress />
      <AmbientBackground />

      <div className="min-h-screen bg-[#0E0E0D] text-[#F4F3EF] selection:bg-[#F4F3EF] selection:text-black overflow-x-hidden w-full max-w-full relative">
        {/* Sticky floating navigation bar with Sound & Spotlight triggers */}
        <Navbar
          onOpenArticles={() => setArticlesOpen(true)}
          onOpenResume={() => setResumeOpen(true)}
          onOpenContact={() => setContactOpen(true)}
          onOpenCommandPalette={() => setCommandPaletteOpen(true)}
          onToggleSound={handleToggleSound}
          isSoundActive={isSoundActive}
        />

        {/* Primary landmark content */}
        <main id="main-content" className="relative z-10 overflow-x-hidden w-full max-w-full">
          <Hero onOpenResume={() => setResumeOpen(true)} />
          <Manifesto />
          <AboutSection />
          <Projects />
          <Process />
          <Feed />
          <Experience />
        </main>

        {/* Global Footer */}
        <Footer onOpenContact={() => setContactOpen(true)} />

        {/* Floating Quick Action Pill (Bottom-Right) */}
        <button
          onClick={() => setCommandPaletteOpen(true)}
          className="fixed bottom-5 right-5 z-40 flex items-center gap-2 bg-[#181816]/90 hover:bg-[#222220] text-[#F4F3EF] border border-white/20 rounded-full px-3.5 py-2 shadow-[0_10px_25px_rgba(0,0,0,0.8)] hover:scale-105 text-xs font-mono transition-all cursor-pointer group backdrop-blur-xl"
          title="Open Command Palette (Ctrl+K)"
          aria-label="Open Command Palette"
        >
          <svg className="w-3.5 h-3.5 text-emerald-400 group-hover:rotate-12 transition-transform" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
          </svg>
          <span className="hidden sm:inline">Spotlight</span>
          <kbd className="font-mono text-[10px] bg-white/10 border border-white/20 px-1.5 py-0.5 rounded text-gray-300">
            Ctrl K
          </kbd>
        </button>

        {/* Interactive Modals */}
        <ResumeModal
          isOpen={resumeOpen}
          onClose={() => setResumeOpen(false)}
        />

        <ArticlesModal
          isOpen={articlesOpen}
          onClose={() => setArticlesOpen(false)}
          onScrollToFeed={() => {
            const feedElement = document.getElementById("feed");
            if (feedElement) {
              feedElement.scrollIntoView({ behavior: "smooth" });
            }
          }}
        />

        <ContactModal
          isOpen={contactOpen}
          onClose={() => setContactOpen(false)}
        />

        <CommandPaletteModal
          isOpen={commandPaletteOpen}
          onClose={() => setCommandPaletteOpen(false)}
          onOpenContact={() => setContactOpen(true)}
          onOpenResume={() => setResumeOpen(true)}
          onOpenArticles={() => setArticlesOpen(true)}
          onNotify={showToast}
          onToggleSound={handleToggleSound}
          isSoundActive={isSoundActive}
        />

        {/* Global Toast Notification */}
        <ToastNotification
          message={toastMessage}
          onClose={() => setToastMessage(null)}
        />
      </div>
    </SmoothScroll>
  );
}
