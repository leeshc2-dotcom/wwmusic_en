/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Mail, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Failed to send message.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Network error occurred. Please try again later.");
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-slate-900 border-t border-slate-950 relative overflow-hidden"
    >
      {/* Background gradients */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Text & Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-8 text-left">
            <div>
              <h2 className="text-[10px] sm:text-xs font-mono uppercase tracking-widest sm:tracking-[0.25em] text-amber-500 font-bold mb-4 break-words">
                Connect With Us
              </h2>
              <p className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold text-white tracking-tight leading-tight">
                Get In Touch
              </p>
              <p className="mt-6 text-slate-300 text-base leading-relaxed font-sans">
                Whether you are an independent publisher wishing to secure South
                Korean mechanical administration or a global rights holder looking to
                maximize sync licensing, our team is here to manage your catalog.
              </p>
            </div>

            <div className="flex flex-col gap-4 mt-4">
              <h3 className="text-white text-lg font-bold">Direct Contact</h3>
              <a
                href="mailto:leeshc0@naver.com?subject=Sub-Publishing%20Representation%20Inquiry"
                className="flex items-center gap-5 bg-slate-950/50 border border-slate-800/80 rounded-2xl px-6 py-5 hover:border-amber-500/50 transition-all group cursor-pointer w-full shadow-lg"
              >
                <div className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-amber-500 shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans font-extrabold text-xs text-white uppercase tracking-wider">
                    General Inquiries
                  </h4>
                  <p className="mt-1 font-sans text-sm text-slate-400 font-medium group-hover:text-amber-400 transition-colors break-all sm:break-normal">
                    leeshc0@naver.com
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 bg-slate-950/50 border border-slate-800/80 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-sm">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[300px] text-center space-y-4 animate-in fade-in zoom-in duration-500">
                <div className="w-16 h-16 bg-amber-500/20 text-amber-500 rounded-full flex items-center justify-center mb-2">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Message Sent</h3>
                <p className="text-slate-400">
                  Thank you for reaching out. We have received your inquiry and will respond shortly.
                </p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="mt-6 px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl transition-colors font-medium text-sm"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {status === "error" && (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <p className="text-sm text-red-300">{errorMessage}</p>
                  </div>
                )}
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-slate-400 ml-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-slate-900 border border-slate-700 text-white text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:border-amber-500/70 focus:ring-1 focus:ring-amber-500/50 transition-all placeholder:text-slate-600"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-slate-400 ml-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-slate-900 border border-slate-700 text-white text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:border-amber-500/70 focus:ring-1 focus:ring-amber-500/50 transition-all placeholder:text-slate-600"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-xs font-semibold uppercase tracking-wider text-slate-400 ml-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-slate-900 border border-slate-700 text-white text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:border-amber-500/70 focus:ring-1 focus:ring-amber-500/50 transition-all placeholder:text-slate-600"
                    placeholder="Sub-Publishing Representation"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-slate-400 ml-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-slate-900 border border-slate-700 text-white text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:border-amber-500/70 focus:ring-1 focus:ring-amber-500/50 transition-all placeholder:text-slate-600 resize-y"
                    placeholder="How can we assist you with your catalog?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="mt-2 flex items-center justify-center gap-2 w-full bg-amber-500 hover:bg-amber-400 text-amber-950 disabled:opacity-70 disabled:cursor-not-allowed text-sm font-bold py-4 px-6 rounded-xl transition-all"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 ml-1" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
