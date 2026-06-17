/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowRight, Music, Shield, Globe } from "lucide-react";
import { brandSlogan } from "../data";

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    const headerElement = document.getElementById("site-header");
    const offset = headerElement ? headerElement.offsetHeight : 80;
    
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden pt-24"
    >
      {/* Background Gradients & Grid Patterns */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#020617_1px,transparent_1px),linear-gradient(to_bottom,#020617_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-35" />
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        {/* Animated Badge */}
        <motion.div
          id="hero-badge"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-slate-900/90 border border-slate-800/80 px-4 py-1.5 rounded-full text-xs font-semibold text-slate-300 mb-8 uppercase tracking-widest backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </span>
          WorldWide Music • Sub-Publishing & Administration
        </motion.div>

        {/* Headline */}
        <motion.h1
          id="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="max-w-4xl text-4xl sm:text-5xl md:text-6xl font-sans font-extrabold text-white tracking-tight leading-[1.1] sm:leading-none text-balance"
        >
          Catalog Expansion in Korea.{" "}
          <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
            Global Repertoire. Local Expertise.
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          id="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-3xl mt-6 text-base sm:text-lg text-slate-400 font-sans leading-relaxed text-pretty animate-fade-in"
        >
          Maximizing international music catalog value within the fast-growing South Korean music and media market. We deliver premium sync placements, direct local royalty administration, and expert digital licensing.
        </motion.p>

        {/* CTAs */}
        <motion.div
          id="hero-ctas"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button
            id="hero-primary-cta"
            onClick={() => handleScrollTo("services")}
            className="flex items-center justify-center gap-2 w-full sm:w-auto bg-gradient-to-ar from-amber-500 to-amber-600 text-slate-950 px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider hover:from-amber-400 hover:to-amber-500 transition-all duration-200 shadow-xl shadow-amber-500/10 hover:shadow-amber-500/20 active:scale-98"
          >
            Explore Services
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <button
            id="hero-secondary-cta"
            onClick={() => handleScrollTo("contact")}
            className="flex items-center justify-center gap-2 w-full sm:w-auto bg-slate-900 hover:bg-slate-850/80 text-white hover:text-amber-400 px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider border border-slate-800 hover:border-slate-700/85 transition-all duration-200 active:scale-98"
          >
            Request Catalog Consultation
          </button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          id="hero-trust-indicators"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-20 border-t border-slate-900 pt-10 w-full"
        >
          <p className="text-sm font-mono uppercase tracking-[0.2em] text-slate-500 font-semibold">
            Fully compliant and integrated copyright administration pipelines
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
            <span className="flex items-center gap-2 text-slate-400 font-sans font-bold tracking-wider text-sm">
              <Music className="w-5 h-5 text-amber-500" /> MUSIC PRODUCTION
            </span>
            <span className="flex items-center gap-2 text-slate-400 font-sans font-bold tracking-wider text-sm">
              <Shield className="w-5 h-5 text-amber-500" /> COPYRIGHT COMPLIANCE
            </span>
            <span className="flex items-center gap-2 text-slate-400 font-sans font-bold tracking-wider text-sm">
              <Globe className="w-5 h-5 text-amber-500" /> GLOBAL INTEGRATION
            </span>
          </div>
        </motion.div>
      </div>

      {/* Elegant Bottom Curve Divider */}
      <div className="absolute bottom-0 left-0 w-full translate-y-1/2 overflow-hidden pointer-events-none">
        <div className="w-[120%] h-[120px] bg-slate-950/20 border-t border-slate-900 rounded-[50%] -translate-x-[10%]" />
      </div>
    </section>
  );
}
