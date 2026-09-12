"use client";

import React, { useState, useRef, useEffect } from "react";
import { X, Send, CheckCircle2, ChevronDown, Check } from "lucide-react";
import gsap from "gsap";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function ContactModal({ isOpen, onClose, defaultService }: ContactModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedService, setSelectedService] = useState(defaultService || "Custom Software Development");
  const [budget, setBudget] = useState("$5k - $15k");
  const [budgetOpen, setBudgetOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const backdropRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const budgetDropdownRef = useRef<HTMLDivElement>(null);
  const budgetListRef = useRef<HTMLDivElement>(null);

  // GSAP animation for budget dropdown
  useEffect(() => {
    if (budgetOpen && budgetListRef.current) {
      gsap.fromTo(
        budgetListRef.current,
        { scale: 0.94, y: -8, opacity: 0 },
        { scale: 1, y: 0, opacity: 1, duration: 0.25, ease: "back.out(1.35)" }
      );
    }
  }, [budgetOpen]);

  // Freeze background body scrolling and run GSAP entrance animation
  useEffect(() => {
    if (!isOpen) return;

    // Freeze background scroll
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

    // Escape key closes popup with animation
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
  }, [isOpen]);

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

  if (!isOpen) return null;

  const services = [
    "Custom Software Development",
    "Web & E-Commerce Solutions",
    "AI & Machine Learning",
    "Cloud & DevOps",
    "3D Solutions",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      handleCloseWithAnimation();
    }, 2400);
  };

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
        className="relative w-full max-w-lg bg-[#FAF8F3] border-2.5 border-zinc-900 rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0px_#1e1e1e] will-change-transform max-h-[90vh] overflow-y-auto"
      >
        {/* Close Button */}
        <button
          onClick={handleCloseWithAnimation}
          className="absolute top-4 right-4 p-1.5 rounded-lg border-2 border-zinc-900 bg-white text-zinc-900 hover:bg-zinc-100 shadow-[2px_2px_0px_#1e1e1e] transition-all cursor-pointer z-10"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="py-8 flex flex-col items-center text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 border-2 border-zinc-900 flex items-center justify-center shadow-[3px_3px_0px_#1e1e1e]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold font-pixel text-zinc-900">
              Message Received!
            </h3>
            <p className="text-sm text-zinc-600 max-w-xs">
              Thanks for reaching out to Aniket Singh. I will review your project and get back to you within 24 hours.
            </p>
          </div>
        ) : (
          <div>
            <div className="mb-5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-700 font-bold">
                Let&apos;s Build Together
              </span>
              <h3 className="text-2xl font-extrabold text-zinc-950 tracking-tight mt-0.5">
                Start a Project with Aniket
              </h3>
              <p className="text-xs text-zinc-600 mt-1">
                Tell me about your ideas, timeline, and requirements.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                  Interested Service
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {services.map((srv) => (
                    <button
                      key={srv}
                      type="button"
                      onClick={() => setSelectedService(srv)}
                      className={`text-xs px-2.5 py-1 rounded-lg border-1.5 transition-all cursor-pointer ${
                        selectedService === srv
                          ? "bg-[#f8b4a6] text-zinc-950 border-zinc-900 font-bold shadow-[1.5px_1.5px_0px_#1e1e1e]"
                          : "bg-white text-zinc-700 border-zinc-300 hover:border-zinc-900"
                      }`}
                    >
                      {srv}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-zinc-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Alex Smith"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full text-xs sm:text-sm px-3 py-2 rounded-xl border-2 border-zinc-900 bg-white text-zinc-900 focus:outline-none focus:ring-2 focus:ring-emerald-400 shadow-[1.5px_1.5px_0px_#1e1e1e]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full text-xs sm:text-sm px-3 py-2 rounded-xl border-2 border-zinc-900 bg-white text-zinc-900 focus:outline-none focus:ring-2 focus:ring-emerald-400 shadow-[1.5px_1.5px_0px_#1e1e1e]"
                  />
                </div>
              </div>

              {/* Animated Custom Budget Dropdown */}
              <div className="relative" ref={budgetDropdownRef}>
                <label className="block text-xs font-bold text-zinc-700 mb-1">
                  Expected Budget
                </label>
                <button
                  type="button"
                  onClick={() => setBudgetOpen(!budgetOpen)}
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border-2 border-zinc-900 bg-white text-zinc-900 flex items-center justify-between shadow-[2px_2px_0px_#1e1e1e] font-semibold cursor-pointer"
                >
                  <span>{budget}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-zinc-800 transition-transform duration-200 ${
                      budgetOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {budgetOpen && (
                  <div
                    ref={budgetListRef}
                    className="absolute top-full left-0 right-0 mt-1.5 z-30 bg-[#FAF8F3] border-2 border-zinc-900 rounded-xl p-1.5 shadow-[4px_4px_0px_#1e1e1e] space-y-1 will-change-transform"
                  >
                    {[
                      { label: "< $5,000", value: "<$5k" },
                      { label: "$5,000 - $15,000", value: "$5k - $15k" },
                      { label: "$15,000 - $30,000", value: "$15k - $30k" },
                      { label: "$30,000+", value: "$30k+" },
                    ].map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => {
                          setBudget(opt.label);
                          setBudgetOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold flex items-center justify-between transition-colors cursor-pointer ${
                          budget === opt.label
                            ? "bg-[#c3e3c3] text-zinc-950 font-bold"
                            : "hover:bg-zinc-200/60 text-zinc-800"
                        }`}
                      >
                        <span>{opt.label}</span>
                        {budget === opt.label && (
                          <Check className="w-3.5 h-3.5 text-emerald-700" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1">
                  Project Details
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Tell me a little bit about what you'd like to build..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full text-xs sm:text-sm px-3 py-2 rounded-xl border-2 border-zinc-900 bg-white text-zinc-900 focus:outline-none focus:ring-2 focus:ring-emerald-400 shadow-[1.5px_1.5px_0px_#1e1e1e]"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-zinc-950 text-white hover:bg-zinc-800 border-2 border-zinc-950 rounded-xl py-2.5 font-bold text-sm shadow-[3px_3px_0px_#000] neo-btn cursor-pointer"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
