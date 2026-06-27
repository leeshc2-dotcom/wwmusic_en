/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { trustPillars } from "../data";
import { Check } from "lucide-react";

export default function TrustSection() {
  return (
    <section
      id="trust"
      className="py-24 bg-slate-900 border-t border-slate-950 relative overflow-hidden"
    >
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Layout: Two columns - Left is statement, Right is pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-stretch">
          <div className="lg:col-span-4 flex flex-col justify-between py-2 lg:py-4">
            <div>
              <h2 className="text-sm font-mono uppercase tracking-widest sm:tracking-[0.25em] text-amber-500 font-bold mb-4 sm:mb-6 break-words">
                Strategic Partnership Core
              </h2>
              <p className="text-3xl sm:text-4xl lg:text-[2.5rem] font-sans font-extrabold text-white tracking-tight leading-tight lg:leading-[1.1]">
                Eliminating the Administrative Black Box
              </p>
              <p className="mt-6 sm:mt-8 text-slate-300 text-sm leading-relaxed font-sans">
                Traditional publishing networks often route regional royalty
                collections through cascading middleman structures, causing
                unexpected commission leakage and severe accounting delays.
              </p>
              <p className="mt-4 sm:mt-6 text-slate-300 text-sm leading-relaxed font-sans">
                WorldWide Music works directly with local societies like KOMCA to
                claim, register, and collect mechanical and performance royalties
                without unnecessary administrative friction.
              </p>
            </div>

            <div className="mt-8 lg:mt-0 border-t border-slate-800/80 pt-6 sm:pt-8 pb-2">
              <div className="flex items-start sm:items-center gap-3 text-slate-300 text-sm font-semibold uppercase tracking-wider">
                <Check className="w-5 h-5 text-amber-500 shrink-0 mt-0.5 sm:mt-0" />
                No hidden fees or margins
              </div>
              <div className="flex items-start sm:items-center gap-3 text-slate-300 text-sm font-semibold uppercase tracking-wider mt-4">
                <Check className="w-5 h-5 text-amber-500 shrink-0 mt-0.5 sm:mt-0" />
                Transparent accounting and royalty tracking
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col justify-between gap-6">
            {trustPillars.map((pillar, idx) => {
              return (
                <motion.div
                  key={pillar.title}
                  id={`trust-pillar-${idx}`}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-slate-950/90 border border-slate-800/80 hover:border-slate-700/80 p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 sm:gap-8 transition-all duration-300 group hover:shadow-xl hover:shadow-slate-950/40 h-full"
                >
                  <div className="max-w-xl">
                    <h3 className="font-sans font-extrabold text-base sm:text-lg text-white tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 font-sans text-sm text-slate-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  {pillar.metric && (
                    <div className="border-l border-slate-800/80 pl-4 sm:pl-6 sm:border-l-2 sm:border-slate-800/60 w-full sm:w-auto text-left shrink-0">
                      <div className="font-sans font-black text-2xl sm:text-3xl text-amber-500 tracking-tight">
                        {pillar.metric}
                      </div>
                      <div className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold mt-1 sm:mt-0.5 break-keep sm:break-normal w-full sm:max-w-[200px]">
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
