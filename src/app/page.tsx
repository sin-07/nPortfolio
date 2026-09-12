"use client";

import React, { useState } from "react";
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

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const handleOpenContact = (service?: string) => {
    setSelectedService(service);
    setContactOpen(true);
  };

  const handleSendEmail = () => {
    window.location.href = "mailto:aniket.singh@bytebloom.dev?subject=Project Inquiry - Aniket Singh Portfolio";
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f5f4ed] text-zinc-900">
      {/* Top Navbar */}
      <Navbar
        onOpenContact={() => handleOpenContact()}
        onOpenAbout={() => {
          const el = document.getElementById("about");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
      />

      {/* Main Content Sections */}
      <main className="flex-1 w-full bg-[#f5f4ed]">
        {/* Hero Section */}
        <Hero onOpenContact={() => handleOpenContact()} />

        {/* Services Section ("What We Do") */}
        <Services onSelectService={(srv) => handleOpenContact(srv)} />

        {/* Technologies Section ("Tools We Love") */}
        <Technologies />

        {/* Featured Projects Section ("See Our Work") */}
        <Projects onSelectProject={(project) => setActiveProject(project)} />

        {/* About Section (Aniket Singh - Software Engineer @ TCS) */}
        <AboutSection />

        {/* Bottom CTA Banner */}
        <CtaBanner
          onOpenContact={() => handleOpenContact()}
          onSendEmail={handleSendEmail}
        />
      </main>

      {/* Footer */}
      <Footer />

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
    </div>
  );
}
