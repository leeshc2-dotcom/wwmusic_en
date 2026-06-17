/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { milestones } from "../data";
import { Sparkles, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-900 border-y border-slate-950 relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Block: Narrative text */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 bg-slate-800/80 border border-slate-700/80 rounded-full px-4.5 py-1 text-slate-300 text-sm font-mono tracking-widest uppercase mb-6 self-start">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              Corporate Legacy
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-white tracking-tight leading-tight">
              A Premier Music Sub-Publisher & <span className="text-amber-500">Administrator</span>.
            </h2>
            
            <p className="mt-6 text-slate-300 text-sm leading-relaxed font-sans">
              WorldWide Music is a premier copyright administration agency based in South Korea. We partner with global rightsholders to maximize the value of their international repertoire within South Korea's fast-growing music and broadcast market.
            </p>
            
            <p className="mt-4 text-slate-400 text-sm leading-relaxed font-sans">
              By working directly with Korean collective management organizations (CMOs), we ensure transparent royalty reporting and highly efficient administration processes. We bridge local digital and sync markets to streamline clearances and guarantee full oversight of your catalog.
            </p>

            <div className="mt-8">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.getElementById("contact");
                  const headerElement = document.getElementById("site-header");
                  const offset = headerElement ? headerElement.offsetHeight : 80;
                  if (target) {
                    const scrollPosition = target.getBoundingClientRect().top + window.scrollY - offset;
                    window.scrollTo({ top: scrollPosition, behavior: "smooth" });
                  }
                }}
                className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-sans font-bold text-sm uppercase tracking-widest transition-all group"
              >
                Learn More About Our Team
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Block: Milestones Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {milestones.map((milestone, idx) => (
              <motion.div
                key={milestone.number}
                id={`milestone-${idx}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-slate-950/80 border border-slate-800/80 hover:border-slate-700/80 p-6 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-slate-950/50 group"
              >
                <div className="font-sans font-black text-4xl sm:text-5xl text-amber-500 tracking-tight group-hover:scale-[1.03] transition-transform duration-300 origin-left">
                  {milestone.number}
                </div>
                
                <div className="mt-3 font-sans font-bold text-sm text-slate-200 tracking-tight">
                  {milestone.label}
                </div>
                
                <div className="mt-2 font-sans text-sm text-slate-400 leading-relaxed">
                  {milestone.description}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
