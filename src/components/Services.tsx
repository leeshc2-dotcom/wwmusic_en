/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { services } from "../data";
import { Music, Tv, PiggyBank, CheckCircle, HelpCircle } from "lucide-react";

const iconMap: Record<string, React.ComponentType<any>> = {
  Music2: Music,
  Tv2: Tv,
  PiggyBank: PiggyBank,
};

export default function Services() {
  const [activeTab, setActiveTab] = useState(services[0].id);

  const activeService = services.find((s) => s.id === activeTab) || services[0];
  const IconComponent = iconMap[activeService.icon] || HelpCircle;

  return (
    <section id="services" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-mono uppercase tracking-[0.25em] text-amber-500 font-bold mb-4">
            Services & Capabilities
          </h2>
          <p className="text-3xl sm:text-4xl font-sans font-extrabold text-white tracking-tight">
            Comprehensive Copyright Administration
          </p>
          <p className="mt-4 text-slate-400 text-sm leading-relaxed">
            We provide fully integrated administration services designed for catalog security, swift royalty claims, and frictionless sub-publishing. Click each pillar to explore.
          </p>
        </div>

        {/* 3-Column Touch targets / Click Selectors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {services.map((service) => {
            const SvcIcon = iconMap[service.icon] || HelpCircle;
            const isSelected = service.id === activeTab;
            
            return (
              <button
                key={service.id}
                id={`btn-service-${service.id}`}
                onClick={() => setActiveTab(service.id)}
                className={`text-left p-6 rounded-2xl border transition-all duration-300 focus:outline-none cursor-pointer group relative ${
                  isSelected
                    ? "bg-slate-900 border-amber-500/80 shadow-xl shadow-amber-500/5"
                    : "bg-slate-900/40 border-slate-800/80 hover:border-slate-700/80"
                }`}
              >
                {/* Side glow effect */}
                {isSelected && (
                  <div className="absolute inset-y-6 left-0 w-1 bg-amber-500 rounded-r-md" />
                )}

                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                      isSelected
                        ? "bg-amber-500 text-slate-950"
                        : "bg-slate-800 text-slate-400 group-hover:text-amber-400"
                    }`}
                  >
                    <SvcIcon className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div>
                    <h3 className="font-sans font-extrabold text-sm text-white tracking-tight uppercase">
                      {service.title}
                    </h3>
                    <p className="font-mono text-[9px] text-amber-500/80 tracking-widest font-bold mt-0.5">
                      {service.id === "sub-pub" ? "ADMIN" : service.id === "sync" ? "CREATIVE" : "FINANCE"}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-slate-400 text-sm leading-relaxed line-clamp-2">
                  {service.shortDesc}
                </p>

                <div className="mt-4 flex items-center gap-1.5 text-[10px] font-sans font-bold uppercase tracking-wider text-amber-500 opacity-80 group-hover:opacity-100 transition-opacity">
                  <span>View Details</span>
                  <span className="text-amber-400 group-hover:translate-x-0.5 transition-transform duration-200">→</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Detailed Display Panel */}
        <div className="bg-slate-900 rounded-3xl border border-slate-800/60 overflow-hidden shadow-2xl p-6 sm:p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
            >
              
              {/* Detailed Text Block */}
              <div className="lg:col-span-7 flex flex-col justify-center orders-2 lg:order-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-sans font-extrabold text-white tracking-tight">
                    {activeService.title}
                  </h3>
                </div>

                <p className="text-slate-300 text-sm font-sans leading-relaxed">
                  {activeService.fullDesc}
                </p>

                <div className="mt-8 border-t border-slate-800/80 pt-8">
                  <h4 className="text-sm font-mono tracking-wider uppercase text-amber-500 font-bold mb-4">
                    Core Action Deliverables:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {activeService.keyOfferings.map((keyOffering, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                        <span className="text-sm font-sans text-slate-300 leading-normal">
                          {keyOffering}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Accompanying Creative Image Panel */}
              <div className="lg:col-span-5 order-1 lg:order-2 h-64 lg:h-96 w-full rounded-2xl overflow-hidden relative border border-slate-800">
                <img
                  src={activeService.imageUrl}
                  alt={activeService.title}
                  className="w-full h-full object-cover grayscale opacity-80 hover:scale-105 hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
