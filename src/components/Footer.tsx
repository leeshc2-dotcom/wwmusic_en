/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Linkedin, Youtube, Twitter, Globe, ArrowUp } from "lucide-react";
import { navLinks, brandName } from "../data";
import { LogoIcon } from "./LogoIcon";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer id="site-footer" className="bg-slate-950 border-t border-slate-900 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-slate-900">
          
          {/* Column 1 - Brand Summary */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <div className="relative w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow overflow-hidden">
                <LogoIcon className="w-6 h-6" />
              </div>
              <span className="font-sans font-extrabold text-lg tracking-tight text-white">
                {brandName}
              </span>
            </div>
            
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              A premier sub-publishing and catalog management firm ensuring maximum value and proactive administration for global music rights in South Korea.
            </p>

            <div className="flex items-center gap-3 mt-2">
              <a
                id="social-linkedin"
                href="#linkedin"
                onClick={(e) => e.preventDefault()}
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-500 hover:border-slate-700 transition-all"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                id="social-youtube"
                href="#youtube"
                onClick={(e) => e.preventDefault()}
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-500 hover:border-slate-700 transition-all"
                aria-label="YouTube channel"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                id="social-twitter"
                href="#twitter"
                onClick={(e) => e.preventDefault()}
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-500 hover:border-slate-700 transition-all"
                aria-label="Twitter profile"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                id="social-globe"
                href="#globe"
                onClick={(e) => e.preventDefault()}
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-500 hover:border-slate-700 transition-all"
                aria-label="Global network website"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2 - Sitemap shortcuts */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono tracking-[0.2em] text-amber-500 uppercase font-black mb-4">
              Corporate Sitemap
            </h4>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    id={`footer-shortcut-${link.id}`}
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.id)}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Technical Registries */}
          <div className="md:col-span-4 select-none">
            <h4 className="text-xs font-mono tracking-[0.2em] text-amber-500 uppercase font-black mb-4">
              Official Registries & Affiliation
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="flex flex-col">
                <a href="https://www.komca.or.kr" target="_blank" rel="noopener noreferrer" className="group">
                  <span className="text-xs text-slate-300 font-bold font-sans group-hover:text-amber-500 transition-colors">Korea Music Copyright Association (KOMCA)</span>
                  <span className="text-[10px] text-slate-500 font-mono mt-0.5 font-medium block">Mechanical & Performance Rights</span>
                </a>
              </li>
              <li className="flex flex-col">
                <a href="https://www.fkmp.kr" target="_blank" rel="noopener noreferrer" className="group">
                  <span className="text-xs text-slate-300 font-bold font-sans group-hover:text-amber-500 transition-colors">Federation of Korean Music Performers (FKMP)</span>
                  <span className="text-[10px] text-slate-500 font-mono mt-0.5 font-medium block">Neighboring Rights for Performers</span>
                </a>
              </li>
              <li className="flex flex-col">
                <a href="https://www.riak.or.kr" target="_blank" rel="noopener noreferrer" className="group">
                  <span className="text-xs text-slate-300 font-bold font-sans group-hover:text-amber-500 transition-colors">Recording Industry Association of Korea (RIAK)</span>
                  <span className="text-[10px] text-slate-500 font-mono mt-0.5 font-semibold block">Neighboring Rights for Producers</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Details panel */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs font-mono text-slate-500 font-semibold tracking-wide text-center md:text-left">
            © 2026 {brandName}. All rights reserved. Direct copyright administration and sub-publishing representation in South Korea.
          </p>

          <button
            id="footer-back-to-top"
            onClick={handleScrollToTop}
            className="flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-amber-500 p-2.5 px-4 rounded-xl border border-slate-800 text-xs font-bold uppercase tracking-wider transition-all select-none cursor-pointer"
          >
            <span>Top of Page</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
