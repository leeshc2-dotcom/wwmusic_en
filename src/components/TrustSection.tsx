/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { trustPillars } from "../data";
import { ShieldCheck, Zap, Languages, Check, ArrowRight } from "lucide-react";

const iconMap: Record<string, React.ComponentType<any>> = {
  ShieldCheck: ShieldCheck,
  Zap: Zap,
  Languages: Languages,
};

export default function TrustSection() {
  return (
    <section id="trust" className="py-24 bg-slate-900 border-t border-slate-950 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Layout: Two columns - Left is statement, Right is pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-4 sticky top-28">
            <h2 className="text-xs font-mono uppercase tracking-[0.25em] text-amber-500 font-bold mb-4">
              Strategic Partnership Core
            </h2>
            <p className="text-3xl sm:text-4xl font-sans font-extrabold text-white tracking-tight leading-tight">
              Eliminating the Administrative Black Box
            </p>
            <p className="mt-5 text-slate-300 text-sm leading-relaxed font-sans">
              Traditional publishing networks often route regional royalty collections through cascading middleman structures, causing unexpected commission leakage and severe accounting delays.
            </p>
            <p className="mt-4 text-slate-300 text-sm leading-relaxed font-sans">
              WorldWide Music works directly with local societies like KOMCA to claim, register, and collect mechanical and performance royalties without unnecessary administrative friction.
            </p>

            <div className="mt-6 border-t border-slate-800/80 pt-5">
              <div className="flex items-center gap-2 text-slate-300 text-sm font-semibold uppercase tracking-wider">
                <Check className="w-4 h-4 text-amber-500" />
                No hidden fees or margins
              </div>
              <div className="flex items-center gap-2 text-slate-300 text-sm font-semibold uppercase tracking-wider mt-2">
                <Check className="w-4 h-4 text-amber-500" />
                Transparent accounting and royalty tracking
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-6">
            {trustPillars.map((pillar, idx) => {
              const PillarIcon = iconMap[pillar.icon] || ShieldCheck;
              return (
                <motion.div
                  key={pillar.title}
                  id={`trust-pillar-${idx}`}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-slate-950/90 border border-slate-800/80 hover:border-slate-700/80 p-8 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 transition-all duration-300 group hover:shadow-xl hover:shadow-slate-950/40"
                >
                  <div className="flex items-start gap-5 max-w-xl">
                    <div className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300 shrink-0">
                      <PillarIcon className="w-5.5 h-5.5" />
                    </div>
                    <div>
                      <h3 className="font-sans font-extrabold text-base text-white tracking-tight">
                        {pillar.title}
                      </h3>
                      <p className="mt-2 font-sans text-sm text-slate-400 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>

                  {pillar.metric && (
                    <div className="border-l border-slate-850/80 pl-6 sm:border-l-2 sm:border-slate-800/60 w-full sm:w-auto text-left shrink-0">
                      <div className="font-sans font-black text-2xl sm:text-3xl text-amber-500 tracking-tight">
                        {pillar.metric}
                      </div>
                      <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mt-0.5 max-w-[120px] sm:max-w-none">
                        {pillar.metricLabel}
                      </div>
                    </div>
                  )}

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
