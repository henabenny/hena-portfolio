import React, { useEffect, useState, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import NoiseOverlay from './components/NoiseOverlay';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import JourneySection from './components/JourneySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  const mainContainerRef = useRef(null);

  useEffect(() => {
    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let lenis = null;

    if (!prefersReducedMotion) {
      // Initialize Lenis Smooth Scroll
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
      });

      // Synchronize Lenis with GSAP ScrollTrigger
      lenis.on('scroll', (e) => {
        ScrollTrigger.update();
        const progress = e.progress || 0;
        setScrollProgress(progress);
      });

      const updateTicker = (time) => {
        lenis.raf(time * 1000);
      };

      gsap.ticker.add(updateTicker);
      gsap.ticker.lagSmoothing(0);
    }

    // Observe active sections for navigation highlighting
    const sections = ['hero', 'about', 'skills', 'work', 'journey', 'contact'];
    const observers = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(id);
              }
            });
          },
          { threshold: 0.35 }
        );
        observer.observe(el);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
      if (lenis) {
        lenis.destroy();
      }
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [loading]);

  return (
    <div ref={mainContainerRef} className="relative min-h-screen bg-[#6B5B95] text-[#F2EFEA] font-sans selection:bg-[#F7F08A] selection:text-[#261F36]">
      {/* Skip to Main Content Link for Keyboard and Screen Reader Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#F7F08A] focus:text-[#261F36] focus:font-bold focus:rounded-xl focus:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#8E7CC3]"
      >
        Skip to main content
      </a>

      {/* Preloader on first visit */}
      <Preloader onComplete={() => setLoading(false)} />

      {/* Screen Film Grain Noise Overlay */}
      <NoiseOverlay />

      {/* Custom Trailing Dot Cursor */}
      <CustomCursor />

      {/* Top Fixed Navigation Bar */}
      <Navbar activeSection={activeSection} />

      {/* Main Single Page Sections */}
      <main id="main-content">
        <Hero activeSection={activeSection} scrollProgress={scrollProgress} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <JourneySection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

