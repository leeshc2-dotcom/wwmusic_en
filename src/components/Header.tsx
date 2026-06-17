/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Globe } from "lucide-react";
import { navLinks, brandName } from "../data";
import { LogoIcon } from "./LogoIcon";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      // Background change on scroll
      if (window.scrollY > 20) {
        isScrolled || setIsScrolled(true);
      } else {
        isScrolled && setIsScrolled(false);
      }

      // Sync active tab on scroll
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveTab(link.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    const headerElement = document.getElementById("site-header");
    const offset = headerElement ? headerElement.offsetHeight : 80;
    
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
      setActiveTab(id);
    }
  };

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            id="logo-link"
            href="#home"
            onClick={(e) => handleScrollTo(e, "home")}
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="relative w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-lg group-hover:scale-105 transition-all duration-300 overflow-hidden">
              <LogoIcon className="w-8 h-8" />
              <div className="absolute inset-0 rounded-lg bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div>
              <span className="font-sans font-extrabold text-[1.375rem] tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-200 bg-clip-text text-transparent">
                WorldWide
              </span>
              <span className="hidden sm:block font-mono text-[9px] uppercase tracking-[0.25em] text-amber-500 font-bold">
                MUSIC GROUP
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                id={`nav-${link.id}`}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.id)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-widest rounded-lg transition-all duration-200 ${
                  activeTab === link.id
                    ? "text-amber-400 bg-slate-900/80 border border-slate-800/80"
                    : "text-slate-300 hover:text-white hover:bg-slate-900/40 border border-transparent"
                }`}
              >
                {link.label}
              </a>
            ))}

            <div className="relative group ml-4 flex items-center h-full">
              <button type="button" className="flex items-center gap-1.5 text-sm font-bold tracking-wide text-emerald-400 hover:text-emerald-300 transition-colors focus:outline-none py-2 shrink-0">
                <Globe className="w-4 h-4" />
                KOREAN
              </button>
              <div className="absolute right-0 top-full mt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="bg-white shadow-xl flex flex-col w-32 border border-slate-100/50">
                  <a href="https://example.com/en" target="_blank" rel="noopener noreferrer" className="px-4 py-3 text-sm text-slate-800 hover:bg-slate-50 font-sans font-bold text-center border-b border-slate-200 transition-colors">
                    English
                  </a>
                  <a href="https://example.com/ko" target="_blank" rel="noopener noreferrer" className="px-4 py-3 text-sm text-slate-800 hover:bg-slate-50 font-sans font-bold text-center transition-colors">
                    Korean
                  </a>
                </div>
              </div>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              id="mobile-menu-btn"
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 border border-transparent hover:border-slate-800 transition-all focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-slate-950 border-b border-slate-900 py-4 px-4 sm:px-6 transition-all duration-300 animate-in fade-in slide-in-from-top-5"
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                id={`mobile-nav-${link.id}`}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.id)}
                className={`px-4 py-3 rounded-lg text-sm font-medium uppercase tracking-wider transition-all ${
                  activeTab === link.id
                    ? "text-amber-400 bg-slate-900 border border-slate-800"
                    : "text-slate-300 hover:text-white hover:bg-slate-900/50"
                }`}
              >
                {link.label}
              </a>
            ))}
            
            <div className="border-t border-slate-800 my-2 pt-2"></div>
            
            <div className="px-4 py-2">
              <div className="flex items-center gap-2 mb-3 text-emerald-400 font-bold text-sm tracking-wide">
                <Globe className="w-4 h-4" />
                KOREAN
              </div>
              <div className="flex flex-col ml-6 gap-3">
                <a href="https://example.com/en" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white font-sans font-medium text-sm transition-colors">
                  English
                </a>
                <a href="https://example.com/ko" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white font-sans font-medium text-sm transition-colors">
                  Korean
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
