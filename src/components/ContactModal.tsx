"use client";

import React, { useState } from "react";
import { X, Send, CheckCircle2 } from "lucide-react";

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
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

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
      onClose();
    }, 2400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs transition-opacity animate-in fade-in">
      <div className="relative w-full max-w-lg bg-[#FAF8F3] border-2.5 border-zinc-900 rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0px_#1e1e1e]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg border-2 border-zinc-900 bg-white text-zinc-900 hover:bg-zinc-100 shadow-[2px_2px_0px_#1e1e1e] transition-all cursor-pointer"
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

              {/* Budget */}
              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1">
                  Expected Budget
                </label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full text-xs sm:text-sm px-3 py-2 rounded-xl border-2 border-zinc-900 bg-white text-zinc-900 focus:outline-none focus:ring-2 focus:ring-emerald-400 shadow-[1.5px_1.5px_0px_#1e1e1e]"
                >
                  <option value="<$5k">&lt; $5,000</option>
                  <option value="$5k - $15k">$5,000 - $15,000</option>
                  <option value="$15k - $30k">$15,000 - $30,000</option>
                  <option value="$30k+">$30,000+</option>
                </select>
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
