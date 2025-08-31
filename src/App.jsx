import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Project';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
