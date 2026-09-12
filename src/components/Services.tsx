"use client";

import React from "react";
import {
  Laptop,
  ShoppingCart,
  Bot,
  Database,
  Cloud,
  Plug,
  Truck,
  Home,
  FileText,
  Wrench,
  ArrowRight,
} from "lucide-react";

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const services = [
    {
      id: "custom-software",
      title: "Custom Software Development",
      description: "ERP, CRM, Web Apps, Desktop Apps & more.",
      bgLight: "bg-[#dff1fa]",
      iconColor: "text-sky-700",
      icon: Laptop,
    },
    {
      id: "web-ecommerce",
      title: "Web & E-Commerce Solutions",
      description: "Modern Websites, Marketplaces, Portals.",
      bgLight: "bg-[#fdece4]",
      iconColor: "text-amber-800",
      icon: ShoppingCart,
    },
    {
      id: "ai-ml",
      title: "AI & Machine Learning",
      description: "LLM Integrations, Chatbots, Automation.",
      bgLight: "bg-[#f0ebfa]",
      iconColor: "text-purple-700",
      icon: Bot,
    },
    {
      id: "data-engineering",
      title: "Data Engineering & Analytics",
      description: "ETL, Warehousing, BI & Data Science.",
      bgLight: "bg-[#def7ec]",
      iconColor: "text-teal-800",
      icon: Database,
    },
    {
      id: "cloud-devops",
      title: "Cloud, DevOps & Infrastructure",
      description: "AWS, Azure, Kubernetes, Terraform, CI/CD & more.",
      bgLight: "bg-[#e4ecfc]",
      iconColor: "text-blue-700",
      icon: Cloud,
    },
    {
      id: "integrations-apis",
      title: "Integrations & APIs",
      description: "Email, SMS, WhatsApp, Meta, Payments, Shipping.",
      bgLight: "bg-[#fcebed]",
      iconColor: "text-rose-700",
      icon: Plug,
    },
    {
      id: "logistics-supply-chain",
      title: "Logistics & Supply Chain",
      description: "Delivery, Tracking, Inventory & Challan.",
      bgLight: "bg-[#e8f5e9]",
      iconColor: "text-emerald-800",
      icon: Truck,
    },
    {
      id: "3d-real-estate",
      title: "3D & Real Estate Solutions",
      description: "3D Web Experiences, Virtual Tours, Property Portals.",
      bgLight: "bg-[#fff1eb]",
      iconColor: "text-orange-700",
      icon: Home,
    },
    {
      id: "accounts-payments",
      title: "Accounts & Payments",
      description: "Invoicing, Reports, Financial Systems.",
      bgLight: "bg-[#f5f3eb]",
      iconColor: "text-zinc-800",
      icon: FileText,
    },
    {
      id: "consulting-support",
      title: "Consulting & Support",
      description: "Architecture, Modernization, Maintenance & More.",
      bgLight: "bg-[#f3e8f5]",
      iconColor: "text-fuchsia-800",
      icon: Wrench,
    },
  ];

  return (
    <section id="services" className="py-16 px-4 sm:px-8 max-w-7xl mx-auto bg-[#f5f4ed]">
      {/* Header Row */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div>
          <span className="text-[11px] sm:text-xs font-mono font-bold tracking-widest text-zinc-500 uppercase">
            — OUR SERVICES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 mt-1 tracking-tight">
            What We Do
          </h2>
          <p className="text-zinc-600 text-sm mt-1">
            End-to-end technology solutions, crafted with care.
          </p>
        </div>

        <div className="flex items-center gap-4 self-start md:self-auto">
          {/* Angled handwritten note */}
          <div className="hidden sm:block font-handwriting text-zinc-600 text-lg sm:text-xl transform -rotate-3 leading-tight text-right">
            <span>Same Problems</span><br />
            <span className="text-emerald-700 font-bold">Bigger Solutions :)</span>
          </div>

          {/* All Services button */}
          <button
            onClick={() => onSelectService("General Services Inquiry")}
            className="inline-flex items-center gap-1.5 bg-[#f8b4a6] hover:bg-[#f69d8b] text-zinc-950 border-2 border-zinc-900 rounded-xl px-4 py-2 font-bold text-xs sm:text-sm shadow-[2.5px_2.5px_0px_#1e1e1e] neo-btn cursor-pointer"
          >
            <span>All Services</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Services Grid (10 cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4.5">
        {services.map((srv) => {
          const IconComponent = srv.icon;
          return (
            <div
              key={srv.id}
              onClick={() => onSelectService(srv.title)}
              className={`${srv.bgLight} p-5 rounded-2xl border-2 border-zinc-900 shadow-[3px_3px_0px_#1e1e1e] flex flex-col justify-between hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4.5px_4.5px_0px_#1e1e1e] transition-all cursor-pointer group min-h-[170px]`}
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/80 border border-zinc-900/40 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform shadow-[1px_1px_0px_#1e1e1e]">
                  <IconComponent className={`w-5 h-5 ${srv.iconColor}`} />
                </div>
                <h3 className="font-bold text-sm text-zinc-950 leading-snug">
                  {srv.title}
                </h3>
                <p className="text-[11px] text-zinc-700 mt-1.5 leading-relaxed">
                  {srv.description}
                </p>
              </div>

              <div className="pt-3 flex justify-end">
                <span className="w-6 h-6 rounded-full bg-white/80 border border-zinc-900/40 flex items-center justify-center text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
