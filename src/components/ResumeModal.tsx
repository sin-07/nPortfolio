"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { portfolioData } from "@/data/portfolioData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function CloseIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function PrintIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function DownloadIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ExternalLinkIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
    </svg>
  );
}

function GitHubIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function LinkedInIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const { education, experience } = portfolioData;
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && overlayRef.current && modalRef.current) {
      gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: "power2.out" });
      gsap.fromTo(
        modalRef.current,
        { scale: 0.85, opacity: 0, y: 30 },
        { scale: 1, opacity: 1, y: 0, duration: 0.45, ease: "back.out(1.5)" }
      );
    }
  }, [isOpen]);

  const handleClose = () => {
    if (overlayRef.current && modalRef.current) {
      gsap.to(modalRef.current, {
        scale: 0.9,
        opacity: 0,
        y: 20,
        duration: 0.25,
        ease: "power2.in",
      });
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.25,
        ease: "power2.in",
        onComplete: onClose,
      });
    } else {
      onClose();
    }
  };

  const handlePrint = () => {
    window.print();
  };

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
      onClick={handleClose}
    >
      <div
        ref={modalRef}
        className="bg-[#141413] text-[#F4F3EF] rounded-3xl max-w-3xl w-full p-6 sm:p-10 max-h-[92vh] overflow-y-auto shadow-2xl relative border border-white/15 will-change-transform"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-wider bg-white/10 text-[#F4F3EF] px-3 py-1 rounded-full font-medium border border-white/10">
              Curriculum Vitae
            </span>
            <span className="text-xs text-emerald-400 font-mono">Verified Resume</span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="/Aniket_Singh_Resume.pdf"
              download="Aniket_Singh_Resume.pdf"
              className="p-2 rounded-full hover:bg-white/10 text-[#8A8985] hover:text-white transition-colors cursor-pointer"
              title="Download Original PDF"
              aria-label="Download Original PDF"
            >
              <DownloadIcon className="w-5 h-5" />
            </a>
            <button
              onClick={handlePrint}
              className="p-2 rounded-full hover:bg-white/10 text-[#8A8985] hover:text-white transition-colors cursor-pointer"
              title="Print Resume"
              aria-label="Print Resume"
            >
              <PrintIcon className="w-5 h-5" />
            </button>
            <button
              onClick={handleClose}
              className="p-2 rounded-full hover:bg-white/10 text-[#8A8985] hover:text-white transition-colors cursor-pointer"
              aria-label="Close"
            >
              <CloseIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Content */}
        <div className="space-y-7 text-left">
          {/* Header Info */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-white/10 pb-5">
            <div>
              <h2 className="font-serif font-light text-3xl sm:text-4xl text-[#F4F3EF] tracking-tight">
                Aniket <span className="font-serif italic font-normal text-white/70">Singh</span>
              </h2>
              <p className="text-xs sm:text-sm font-sans text-emerald-400 mt-1">
                +91 (947) 323 6395 · aniket.singh07vs@gmail.com
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#8A8985]">
              <a
                href="https://github.com/sin-07"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <GitHubIcon className="w-3.5 h-3.5" /> github.com/sin-07
              </a>
              <a
                href="https://linkedin.com/in/aniket-singhh"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#0a66c2] flex items-center gap-1.5 transition-colors"
              >
                <LinkedInIcon className="w-3.5 h-3.5" /> linkedin.com/in/aniket-singhh
              </a>
            </div>
          </div>

          {/* Career Summary */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#8A8985] border-b border-white/10 pb-2 mb-3">
              (01 / Career Summary)
            </h3>
            <p className="text-xs sm:text-sm text-[#C4C3BE] leading-relaxed font-sans">
              Innovative and detail-oriented Software Engineer with hands-on experience in Java, Python, and MERN stack development. Strong understanding of OOPs, and System Design with a passion for building scalable, high-performance backend systems. Adept at designing RESTful APIs, optimizing databases.
            </p>
          </div>

          {/* Education */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#8A8985] border-b border-white/10 pb-2 mb-3">
              (02 / Education)
            </h3>
            <div className="space-y-3">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row sm:items-center justify-between text-xs p-3.5 rounded-xl bg-white/5 border border-white/10 gap-2"
                >
                  <div>
                    <span className="font-semibold text-[#F4F3EF]">{edu.degree}</span>
                    <span className="text-[#8A8985] block mt-0.5">
                      {edu.institution}, {edu.location}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-emerald-400 text-[11px] px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                      {edu.highlights[0]}
                    </span>
                    <span className="font-mono text-[#8A8985] text-[11px]">{edu.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#8A8985] border-b border-white/10 pb-2 mb-3">
              (03 / Experience)
            </h3>
            <div className="space-y-4">
              {experience.map((exp, idx) => (
                <div key={idx} className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                    <span className="font-semibold text-sm text-[#F4F3EF]">
                      {exp.company} — <span className="text-emerald-400">{exp.role}</span>
                    </span>
                    <span className="text-[11px] font-mono text-[#8A8985]">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-[#8A8985] mt-3 space-y-1.5 font-sans leading-relaxed">
                    {exp.responsibilities.map((item, rIdx) => (
                      <li key={rIdx}>{item}</li>
                    ))}
                  </ul>
                  <div className="mt-3 pt-3 border-t border-white/10 text-xs font-mono text-[#8A8985]">
                    <strong className="text-white/80">Tech Stack:</strong> {exp.technologies.join(", ")}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#8A8985] border-b border-white/10 pb-2 mb-3">
              (04 / Projects)
            </h3>
            <div className="space-y-4">
              {/* Rental Car Website */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex justify-between items-baseline mb-2">
                  <span className="font-semibold text-sm text-[#F4F3EF]">
                    Rental Car Website — <a href="https://github.com/sin-07" target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline">Github ↗</a>
                  </span>
                  <span className="text-[11px] font-mono text-[#8A8985]">Jan 25</span>
                </div>
                <ul className="list-disc list-inside text-xs text-[#8A8985] space-y-1 font-sans">
                  <li>Implemented car listing with pickup/return locations, date &amp; time selection, and real-time availability check.</li>
                  <li>Created an admin panel to add, update, and remove cars, view bookings, and manage users.</li>
                </ul>
                <div className="mt-3 pt-2 text-[11px] font-mono text-[#8A8985]">
                  <strong className="text-white/80">Tech Stack:</strong> Node.js, Express.js, React.js, MongoDB, Cloudinary, RESTful API, JWT Authentication
                </div>
              </div>

              {/* TradeXpert */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex justify-between items-baseline mb-2">
                  <span className="font-semibold text-sm text-[#F4F3EF]">
                    TradeXpert — Full-Stack Trading Platform — <a href="https://github.com/sin-07" target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline">Github ↗</a>
                  </span>
                  <span className="text-[11px] font-mono text-[#8A8985]">Oct 25</span>
                </div>
                <ul className="list-disc list-inside text-xs text-[#8A8985] space-y-1 font-sans">
                  <li>Developed a multi-asset trading platform supporting Indian, US, and cryptocurrency markets.</li>
                  <li>Integrated Yahoo Finance API to fetch real-time stock data, live prices, and market analytics.</li>
                  <li>Implemented buy/sell order functionality with transaction history and portfolio tracking.</li>
                  <li>Built an intuitive React.js UI ensuring seamless, real-time updates and responsive performance.</li>
                </ul>
                <div className="mt-3 pt-2 text-[11px] font-mono text-[#8A8985]">
                  <strong className="text-white/80">Tech Stack:</strong> React.js, Node.js, Express.js, MongoDB, Yahoo Finance API, JWT Authentication
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#8A8985] border-b border-white/10 pb-2 mb-3">
              (05 / Technical Skills)
            </h3>
            <p className="text-xs sm:text-sm font-mono text-[#C4C3BE] leading-relaxed p-4 rounded-2xl bg-white/5 border border-white/10">
              Java, JavaScript, HTML, CSS, React.js, Node.js, Express.js, MongoDB, Github, Eclipse, Visual Studio Code, Ubuntu
            </p>
          </div>
        </div>

        {/* Bottom CTA with direct Download Resume button */}
        <div className="mt-8 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <a
            href="/Aniket_Singh_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#8A8985] hover:text-white underline transition-colors"
          >
            <span>View PDF Document</span>
            <ExternalLinkIcon className="w-3 h-3" />
          </a>

          <div className="flex items-center gap-3">
            <button
              onClick={handleClose}
              className="px-5 py-2.5 rounded-full border border-white/15 hover:bg-white/10 text-xs sm:text-sm font-mono text-[#8A8985] hover:text-white transition-colors cursor-pointer"
            >
              Fermer
            </button>
            <a
              href="/Aniket_Singh_Resume.pdf"
              download="Aniket_Singh_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#F4F3EF] text-black hover:bg-white text-xs sm:text-sm font-semibold transition-all shadow-md cursor-pointer"
            >
              <DownloadIcon className="w-4 h-4" />
              <span>Download PDF Resume</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
