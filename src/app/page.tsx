"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Technologies from "@/components/Technologies";
import Projects, { Project } from "@/components/Projects";
import AboutSection from "@/components/AboutSection";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import ProjectModal from "@/components/ProjectModal";
import CommandPalette from "@/components/CommandPalette";
import CareerJourneyModal from "@/components/CareerJourneyModal";
import ResumeModal from "@/components/ResumeModal";
import Toast from "@/components/Toast";
import { Command, Search } from "lucide-react";

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // New features state
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [journeyModalOpen, setJourneyModalOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Global Ctrl+K / Cmd+K listener
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

  const handleOpenContact = (service?: string) => {
    setSelectedService(service);
    setContactOpen(true);
  };

  const handleSendEmail = () => {
    window.location.href = "mailto:aniket.singh@bytebloom.dev?subject=Project Inquiry - Aniket Singh Portfolio";
  };

  const handleCopyEmail = async (email: string) => {
    try {
      await navigator.clipboard.writeText(email);
      setToastMessage(`Copied to clipboard: ${email}`);
    } catch {
      setToastMessage(`Email: ${email}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f5f4ed] text-zinc-900 selection:bg-[#c3e3c3] selection:text-zinc-950">
      {/* Top Navbar */}
      <Navbar
        onOpenContact={() => handleOpenContact()}
        onOpenAbout={() => {
          const el = document.getElementById("about");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        onOpenJourney={() => setJourneyModalOpen(true)}
        onOpenResume={() => setResumeModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1 w-full bg-[#f5f4ed]">
        {/* Hero Section */}
        <Hero
          onOpenContact={() => handleOpenContact()}
          onOpenResume={() => setResumeModalOpen(true)}
        />

        {/* Services Section ("What We Do") */}
        <Services onSelectService={(srv) => handleOpenContact(srv)} />

        {/* Featured Projects Section ("See Our Work") */}
        <Projects onSelectProject={(project) => setActiveProject(project)} />

        {/* Technologies Section ("Tools We Love") */}
        <Technologies />

        {/* About Section (Aniket Singh - Software Engineer @ TCS) */}
        <AboutSection onOpenJourney={() => setJourneyModalOpen(true)} />

        {/* Bottom CTA Banner */}
        <CtaBanner
          onOpenContact={() => handleOpenContact()}
          onSendEmail={handleSendEmail}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Quick Action Pill (Bottom-Right) */}
      <button
        onClick={() => setCommandPaletteOpen(true)}
        className="fixed bottom-5 right-5 z-40 flex items-center gap-2 bg-[#FAF8F3] hover:bg-[#def7ec] text-zinc-900 border-2 border-zinc-900 rounded-full px-3.5 py-2 shadow-[3px_3px_0px_#1e1e1e] hover:shadow-[4px_4px_0px_#1e1e1e] hover:translate-x-[-1px] hover:translate-y-[-1px] text-xs font-bold transition-all cursor-pointer group"
        title="Open Command Palette & CLI (Ctrl+K)"
        aria-label="Open Command Palette"
      >
        <Command className="w-3.5 h-3.5 text-zinc-900 group-hover:rotate-12 transition-transform" />
        <span className="hidden sm:inline">Spotlight &amp; CLI</span>
        <kbd className="font-mono text-[10px] bg-white border border-zinc-400 px-1.5 py-0.5 rounded text-zinc-600">
          Ctrl K
        </kbd>
      </button>

      {/* Interactive Modals */}
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
        defaultService={selectedService}
      />

      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onInquire={(title) => handleOpenContact(`Project Inquiry: ${title}`)}
      />

      {/* Spotlight Command Palette & Dev CLI */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onOpenContact={(service) => handleOpenContact(service)}
        onOpenJourney={() => setJourneyModalOpen(true)}
        onOpenResume={() => setResumeModalOpen(true)}
        onCopyEmail={handleCopyEmail}
      />

      {/* Career Journey & Academic Milestones Modal */}
      <CareerJourneyModal
        isOpen={journeyModalOpen}
        onClose={() => setJourneyModalOpen(false)}
        onOpenContact={() => handleOpenContact("Enterprise / Career Opportunity")}
      />

      {/* Printable Curriculum Vitae (Resume / CV) Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
        onOpenContact={() => handleOpenContact("Enterprise / Career Opportunity")}
      />

      {/* Global Toast Notification */}
      {toastMessage && (
        <Toast
          message={toastMessage}
          onClose={() => setToastMessage(null)}
        />
      )}
    </div>
  );
}
