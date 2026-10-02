"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import gsap from "gsap";
import confetti from "canvas-confetti";
import { useBodyScrollLock } from "@/utils/scrollLock";

interface ContactModalProps {
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

function CheckIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function SendIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Site web",
    budget: "3 K – 5 K",
    message: "",
    consent: true,
  });

  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useBodyScrollLock(isOpen);

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

  const handleClose = useCallback(() => {
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
        onComplete: () => {
          setStep(1);
          setSubmitted(false);
          setIsSubmitting(false);
          setSubmitError(null);
          onClose();
        },
      });
    } else {
      setStep(1);
      setSubmitted(false);
      setIsSubmitting(false);
      setSubmitError(null);
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to send message.");
      }

      setSubmitted(true);
      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 },
          colors: ["#ffffff", "#22c55e", "#3b82f6", "#ec4899"],
        });
      } catch {
        // Fallback safely if canvas not available
      }

      setTimeout(() => {
        handleClose();
      }, 2500);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong.";
      setSubmitError(msg);
    } finally {
      setIsSubmitting(false);
    }
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
        data-lenis-prevent
        className="bg-[#141413] text-[#F4F3EF] rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-white/20 shadow-2xl relative max-h-[90vh] overflow-y-auto overscroll-contain will-change-transform"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <CloseIcon className="w-5 h-5" />
        </button>

        {/* Modal Header & Progress Indicator */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-emerald-400">0{step}</span>
            <span className="font-mono text-xs text-[#8A8985]">/ 03</span>
            <span className="text-xs font-mono text-[#8A8985] ml-2">
              {step === 1 && "· Your Details"}
              {step === 2 && "· Project Scope"}
              {step === 3 && "· Vision & Message"}
            </span>
          </div>
          <div className="w-24 h-1 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-400 transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        </div>

        {/* Submitted Success View */}
        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(34,197,94,0.4)] animate-bounce">
              <CheckIcon className="w-8 h-8" />
            </div>
            <h4 className="font-serif font-bold text-2xl text-white">Message Received!</h4>
            <p className="text-xs sm:text-sm text-[#8A8985] max-w-xs mx-auto leading-relaxed">
              Thank you for reaching out. I will get back to you within 24-48 business hours with thoughts on your project.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-5 text-left font-sans"
          >
            {/* Step 1: Contact Details */}
            {step === 1 && (
              <div className="space-y-4 animate-fade-in-up">
                <div>
                  <label className="block text-xs font-mono text-[#8A8985] mb-1.5">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Alex Morgan"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 focus:border-white/50 text-[#F4F3EF] text-xs sm:text-sm focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-[#8A8985] mb-1.5">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 focus:border-white/50 text-[#F4F3EF] text-xs sm:text-sm focus:outline-none transition-colors"
                  />
                </div>
              </div>
            )}

            {/* Step 2: Scope & Budget */}
            {step === 2 && (
              <div className="space-y-5 animate-fade-in-up">
                <div>
                  <label className="block text-xs font-mono text-[#8A8985] mb-2.5">
                    Project Type / Subject
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Web Application",
                      "Full-stack System",
                      "Frontend & UI/UX",
                      "Cloud Architecture",
                      "Open Source / Other",
                    ].map((type, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setFormData({ ...formData, subject: type })}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                          formData.subject === type
                            ? "bg-[#F4F3EF] text-black font-semibold"
                            : "bg-white/5 text-[#8A8985] border border-white/10 hover:border-white/30"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#8A8985] mb-2.5">
                    Expected Budget{" "}
                    <em className="text-gray-500 font-normal">· estimate</em>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {["< $1K", "$1K – $3K", "$3K – $8K", "$8K+"].map((budget, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setFormData({ ...formData, budget })}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                          formData.budget === budget
                            ? "bg-[#F4F3EF] text-black font-semibold"
                            : "bg-white/5 text-[#8A8985] border border-white/10 hover:border-white/30"
                        }`}
                      >
                        {budget}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Message & Consent */}
            {step === 3 && (
              <div className="space-y-4 animate-fade-in-up">
                <div>
                  <label className="block text-xs font-mono text-[#8A8985] mb-1.5">
                    Tell me about your project
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Project background, goals, target timeline..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 focus:border-white/50 text-[#F4F3EF] text-xs sm:text-sm focus:outline-none transition-colors resize-none"
                  />
                </div>
                <label className="flex items-start gap-2.5 text-xs text-[#8A8985] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-0.5 rounded border-white/20 text-emerald-500 focus:ring-0"
                    required
                  />
                  <span>I agree to share these details to discuss project requirements.</span>
                </label>
              </div>
            )}

            {submitError && (
              <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-mono">
                {submitError}
              </div>
            )}

            {/* Navigation buttons */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              {step > 1 ? (
                <button
                  type="button"
                  disabled={isSubmitting}
                  onClick={() => setStep(step - 1)}
                  className="text-xs font-mono text-[#8A8985] hover:text-white transition-colors cursor-pointer disabled:opacity-50"
                >
                  ← Back
                </button>
              ) : (
                <a
                  href="mailto:akankshyam4@gmail.com"
                  className="text-xs font-mono text-[#8A8985] hover:text-white underline"
                >
                  or direct email
                </a>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#F4F3EF] text-black font-semibold text-xs sm:text-sm hover:bg-white transition-all cursor-pointer shadow-xl hover:shadow-white/20 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span>
                  {step === 3
                    ? isSubmitting
                      ? "Sending..."
                      : "Send Message"
                    : "Continue"}
                </span>
                {step === 3 ? (
                  isSubmitting ? (
                    <span className="w-3.5 h-3.5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <SendIcon className="w-3.5 h-3.5" />
                  )
                ) : (
                  <span className="font-mono text-xs">→</span>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
