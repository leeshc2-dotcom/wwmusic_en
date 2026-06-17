/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-900 border-t border-slate-950 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        
        <h2 className="text-xs font-mono uppercase tracking-[0.25em] text-amber-500 font-bold mb-4">
          Connect With Us
        </h2>
        <p className="text-3xl sm:text-4xl font-sans font-extrabold text-white tracking-tight leading-tight">
          Get In Touch
        </p>
        <p className="mt-5 text-slate-300 text-base leading-relaxed font-sans max-w-2xl">
          Whether you are an independent publisher wishing to secure South Korean mechanical administration or a global rights holder looking to maximize sync licensing, our team is here to manage your catalog.
        </p>

        {/* Structured Contact Elements */}
        <div className="mt-12 flex flex-col items-center justify-center gap-6 w-full max-w-md">

          <a 
            href="mailto:leeshc0@naver.com?subject=Sub-Publishing%20Representation%20Inquiry" 
            className="flex items-center gap-5 bg-slate-950 border border-slate-800 rounded-2xl px-6 py-5 hover:border-amber-500/50 transition-all group cursor-pointer text-left w-full shadow-xl"
          >
            <div className="w-14 h-14 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-amber-500 shrink-0 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-sans font-extrabold text-xs text-white uppercase tracking-wider">General Inquiries</h4>
              <p className="mt-1 font-sans text-sm text-slate-400 font-semibold tracking-wide group-hover:text-amber-400 transition-colors">
                leeshc0@naver.com
              </p>
            </div>
          </a>

        </div>

      </div>
    </section>
  );
}
