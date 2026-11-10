import React, { useState, useEffect } from 'react';
import { personalData } from '../data';
import TwinklingStars from './TwinklingStars';
import VectorBirds from './VectorBirds';
import { motion } from 'framer-motion';

const FONT_OPTIONS = [
  { id: 'italiana', name: 'Italiana (Editorial)', className: 'font-display', letterSpacing: 'tracking-[0.08em]' },
  { id: 'syne', name: 'Syne (Modern Tech)', className: 'font-syne font-bold', letterSpacing: 'tracking-[0.03em]' },
  { id: 'cinzel', name: 'Cinzel (Architectural)', className: 'font-cinzel font-semibold', letterSpacing: 'tracking-[0.06em]' },
  { id: 'space', name: 'Space Grotesk (AI Bold)', className: 'font-space font-bold', letterSpacing: 'tracking-[0.02em]' },
  { id: 'condensed', name: 'Barlow (Condensed)', className: 'font-condensed font-extrabold', letterSpacing: 'tracking-[0.04em]' },
];

export default function Hero({ activeSection = 'hello', scrollProgress = 0 }) {
  const [isNameHovered, setIsNameHovered] = useState(false);
  const [selectedFont, setSelectedFont] = useState('italiana');

  useEffect(() => {
    const saved = localStorage.getItem('hena_hero_font');
    if (saved && FONT_OPTIONS.some((f) => f.id === saved)) {
      setSelectedFont(saved);
    }
  }, []);

  const handleFontChange = (fontId) => {
    setSelectedFont(fontId);
    localStorage.setItem('hena_hero_font', fontId);
  };

  const currentFont = FONT_OPTIONS.find((f) => f.id === selectedFont) || FONT_OPTIONS[0];

  const nameLetters = personalData.name.split('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.045,
        delayChildren: 0.2,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 16,
        stiffness: 220,
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between pt-24 pb-8 overflow-hidden select-none bg-gradient-to-b from-[#6B5B95] via-[#5D4E84] to-[#453A62]"
    >
      {/* Background Twinkling Stars & Vector Birds */}
      <TwinklingStars count={40} />
      <VectorBirds />

      {/* Main Hero Center Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 w-full flex flex-col items-center text-center my-auto">
        {/* Small top label */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-condensed tracking-[0.28em] text-xs sm:text-sm text-[#D8CCE6] uppercase mb-2"
        >
          INSIDE THE MIND OF
        </motion.p>

        {/* Huge Name with Figma Selection Box on Hover */}
        <div
          className="relative inline-block my-1 cursor-pointer"
          onMouseEnter={() => setIsNameHovered(true)}
          onMouseLeave={() => setIsNameHovered(false)}
          data-cursor="hena"
        >
          {/* Figma-style Selection Box Frame */}
          <div
            className={`pointer-events-none absolute -inset-x-5 -inset-y-3 sm:-inset-x-7 sm:-inset-y-3 border-2 border-[#3875F6] rounded transition-opacity duration-200 z-30 ${
              isNameHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-98'
            }`}
          >
            {/* 4 Corner Square Handles */}
            <span className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-white border-2 border-[#3875F6] shadow-sm" />
            <span className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-white border-2 border-[#3875F6] shadow-sm" />
            <span className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-white border-2 border-[#3875F6] shadow-sm" />
            <span className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-white border-2 border-[#3875F6] shadow-sm" />

            {/* Dimension Label Pill (Top Right) */}
            <div className="absolute -top-7 right-0 bg-[#3875F6] text-white text-[11px] font-mono px-2 py-0.5 rounded shadow">
              680 × 120
            </div>

            {/* Figma-style cursor arrow + tag "Hena" (Bottom Right) */}
            <div className="absolute -bottom-7 right-2 flex items-center gap-1 bg-[#3875F6] text-white text-[11px] font-sans font-medium px-2 py-0.5 rounded shadow">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
                <polygon points="0,0 10,4 5,5 4,10" />
              </svg>
              <span>{personalData.figmaSelection.label}</span>
            </div>
          </div>

          {/* Letter by Letter Headline with Balanced Typography and Proportional Sizing */}
          <motion.h1
            key={selectedFont}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={`${currentFont.className} ${currentFont.letterSpacing} text-4xl sm:text-6xl md:text-7xl lg:text-[5.4rem] xl:text-[6rem] text-[#F2EFEA] uppercase leading-[1.08] drop-shadow-sm flex items-center justify-center flex-wrap`}
          >
            {nameLetters.map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className={`inline-block ${char === ' ' ? 'w-3 sm:w-6' : ''}`}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        {/* Faded Side Words Below Name (Parallax Aesthetic) */}
        <div className="w-full max-w-3xl flex items-center justify-between px-4 sm:px-10 mt-1 text-[#B9A8F0]/40 font-display italic text-base sm:text-xl md:text-2xl tracking-widest uppercase">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 0.55, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="hover:opacity-90 transition-opacity"
          >
            {personalData.heroWords.left}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 0.55, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="hover:opacity-90 transition-opacity"
          >
            {personalData.heroWords.right}
          </motion.span>
        </div>

        {/* Interactive Font Style Pills (Allows Hena to pick her favorite font live!) */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 my-5 p-1 rounded-full bg-[#261F36]/60 border border-[#8E7CC3]/30 backdrop-blur-sm">
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-[#B9A8F0] px-2.5">
            Font:
          </span>
          {FONT_OPTIONS.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => handleFontChange(f.id)}
              className={`px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-medium transition-all cursor-pointer ${
                selectedFont === f.id
                  ? 'bg-[#F7F08A] text-[#261F36] font-bold shadow-sm'
                  : 'text-[#D8CCE6] hover:text-[#F2EFEA] hover:bg-[#3B3355]'
              }`}
            >
              {f.id.charAt(0).toUpperCase() + f.id.slice(1)}
            </button>
          ))}
        </div>

        {/* Floating Ideas & Mind Badges Constellation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 my-3 max-w-2xl"
        >
          {/* Badge 1: Code */}
          <div className="bg-[#F7F08A] text-[#261F36] px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border-2 border-[#261F36] shadow-[2.5px_2.5px_0px_#261F36] flex items-center gap-2 font-bold font-mono text-xs sm:text-sm hover:-translate-y-0.5 transition-transform">
            <span>&lt;/&gt;</span>
            <span className="font-sans font-semibold text-xs tracking-wider uppercase">AI & Code</span>
          </div>

          {/* Badge 2: Neural Net */}
          <div className="bg-[#B9A8F0] text-[#261F36] px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border-2 border-[#261F36] shadow-[2.5px_2.5px_0px_#261F36] flex items-center gap-2 font-bold text-xs sm:text-sm hover:-translate-y-0.5 transition-transform">
            <span>🧠</span>
            <span className="font-sans font-semibold text-xs tracking-wider uppercase">Neural Networks</span>
          </div>

          {/* Badge 3: Ideas */}
          <div className="bg-[#F2EFEA] text-[#261F36] px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border-2 border-[#261F36] shadow-[2.5px_2.5px_0px_#261F36] flex items-center gap-2 font-bold text-xs sm:text-sm hover:-translate-y-0.5 transition-transform">
            <span>💡</span>
            <span className="font-sans font-semibold text-xs tracking-wider uppercase">Creative Ideas</span>
          </div>

          {/* Badge 4: Chai */}
          <div className="bg-[#8E7CC3] text-[#F2EFEA] px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border-2 border-[#261F36] shadow-[2.5px_2.5px_0px_#261F36] flex items-center gap-2 font-bold text-xs sm:text-sm hover:-translate-y-0.5 transition-transform">
            <span>☕</span>
            <span className="font-sans font-semibold text-xs tracking-wider uppercase">Kerala Chai</span>
          </div>
        </motion.div>

        {/* Role & Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="max-w-2xl mx-auto px-4 mt-2"
        >
          <p className="font-condensed font-bold text-base sm:text-lg md:text-xl text-[#F2EFEA] uppercase tracking-wider">
            {personalData.role}
          </p>
          <p className="font-sans text-xs sm:text-sm text-[#D8CCE6] mt-1.5 max-w-md mx-auto leading-relaxed">
            "{personalData.tagline}"
          </p>
          <p className="text-[11px] sm:text-xs font-condensed tracking-widest text-[#B9A8F0] mt-2 uppercase font-semibold">
            {personalData.college} • {personalData.location}
          </p>
        </motion.div>
      </div>

      {/* Bottom Edge: Ruler Tick-mark Progress & Section Highlights */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-4 sm:px-8 mt-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-condensed tracking-wider text-[#D8CCE6]/80 border-t border-[#8E7CC3]/30 pt-3">
          {/* Left: Scroll Prompt */}
          <div className="flex items-center gap-2 text-[#F7F08A] font-bold uppercase tracking-widest animate-pulse text-[11px] sm:text-xs">
            <span>SCROLL TO STEP INSIDE HER MIND</span>
            <span className="text-sm">↓</span>
          </div>

          {/* Center: Horizontal Ruler / Tick-mark Bar */}
          <div className="hidden md:flex items-center gap-1 opacity-70">
            {Array.from({ length: 32 }, (_, i) => {
              const highlighted = i < Math.floor(scrollProgress * 32);
              return (
                <span
                  key={i}
                  className={`w-[1px] transition-all duration-200 ${
                    highlighted
                      ? 'h-4 bg-[#F7F08A]'
                      : i % 5 === 0
                      ? 'h-3.5 bg-[#B9A8F0]'
                      : 'h-1.5 bg-[#8E7CC3]/50'
                  }`}
                />
              );
            })}
          </div>

          {/* Right: Section Anchors with Highlight */}
          <div className="flex items-center gap-4 sm:gap-6 uppercase font-bold text-[11px] sm:text-xs">
            <a
              href="#hero"
              className={`transition-colors ${
                activeSection === 'hero' || activeSection === 'hello'
                  ? 'text-[#F7F08A]'
                  : 'text-[#D8CCE6]/60 hover:text-[#F2EFEA]'
              }`}
            >
              HELLO
            </a>
            <a
              href="#about"
              className={`transition-colors ${
                activeSection === 'about'
                  ? 'text-[#F7F08A]'
                  : 'text-[#D8CCE6]/60 hover:text-[#F2EFEA]'
              }`}
            >
              ABOUT
            </a>
            <a
              href="#work"
              className={`transition-colors ${
                activeSection === 'work'
                  ? 'text-[#F7F08A]'
                  : 'text-[#D8CCE6]/60 hover:text-[#F2EFEA]'
              }`}
            >
              WORK
            </a>
            <a
              href="#contact"
              className={`transition-colors ${
                activeSection === 'contact'
                  ? 'text-[#F7F08A]'
                  : 'text-[#D8CCE6]/60 hover:text-[#F2EFEA]'
              }`}
            >
              CONTACT
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
