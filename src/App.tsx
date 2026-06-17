/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import TrustSection from "./components/TrustSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div id="root-container" className="min-h-screen bg-slate-950 text-white selection:bg-amber-500 selection:text-slate-950 scroll-smooth antialiased">
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <TrustSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
