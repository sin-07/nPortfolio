"use client";

import React, { useState, useEffect } from "react";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
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

export default function Home() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [articlesOpen, setArticlesOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SmoothScroll>
      <CustomCursor />
      <div className="min-h-screen bg-[#0E0E0D] text-[#F4F3EF] selection:bg-[#F4F3EF] selection:text-black overflow-x-hidden w-full max-w-full">
        {/* Sticky floating navigation bar */}
        <Navbar
          onOpenArticles={() => setArticlesOpen(true)}
          onOpenResume={() => setResumeOpen(true)}
          onOpenContact={() => setContactOpen(true)}
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
      </div>
    </SmoothScroll>
  );
}
