import React, { useState } from 'react';
import { personalData } from '../data';
import TwinklingStars from './TwinklingStars';
import VectorBirds from './VectorBirds';
import { motion } from 'framer-motion';

export default function Hero({ activeSection = 'hello', scrollProgress = 0 }) {
  const [isNameHovered, setIsNameHovered] = useState(false);

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
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 220,
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between pt-28 pb-10 overflow-hidden select-none bg-gradient-to-b from-[#6B5B95] via-[#5D4E84] to-[#453A62]"
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
          className="font-condensed tracking-[0.28em] text-xs sm:text-sm text-[#D8CCE6] uppercase mb-2 sm:mb-3"
        >
          INSIDE THE MIND OF
        </motion.p>

        {/* Huge Name with Figma Selection Box on Hover */}
        <div
          className="relative inline-block my-2 cursor-pointer"
          onMouseEnter={() => setIsNameHovered(true)}
          onMouseLeave={() => setIsNameHovered(false)}
          data-cursor="hena"
        >
          {/* Figma-style Selection Box Frame */}
          <div
            className={`pointer-events-none absolute -inset-x-5 -inset-y-3 sm:-inset-x-8 sm:-inset-y-4 border-2 border-[#3875F6] rounded transition-opacity duration-200 z-30 ${
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
              {personalData.figmaSelection.dimensions}
            </div>

            {/* Figma-style cursor arrow + tag "Hena" (Bottom Right) */}
            <div className="absolute -bottom-7 right-2 flex items-center gap-1 bg-[#3875F6] text-white text-[11px] font-sans font-medium px-2 py-0.5 rounded shadow">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
                <polygon points="0,0 10,4 5,5 4,10" />
              </svg>
              <span>{personalData.figmaSelection.label}</span>
            </div>
          </div>

          {/* Letter by Letter Headline */}
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[7.6rem] font-bold tracking-tight text-[#F2EFEA] uppercase leading-none drop-shadow-sm flex items-center justify-center flex-wrap"
          >
            {nameLetters.map((char, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className={`inline-block ${char === ' ' ? 'w-4 sm:w-8' : ''}`}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        {/* Faded Side Words Below Name (Parallax Aesthetic) */}
        <div className="w-full max-w-4xl flex items-center justify-between px-4 sm:px-12 mt-2 text-[#B9A8F0]/40 font-display italic text-lg sm:text-2xl md:text-3xl tracking-widest uppercase">
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

        {/* Floating Ideas & Mind Badges Constellation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 my-8 max-w-2xl"
        >
          {/* Badge 1: Code */}
          <div className="bg-[#F7F08A] text-[#261F36] px-4 py-2 rounded-full border-2 border-[#261F36] shadow-[3px_3px_0px_#261F36] flex items-center gap-2 font-bold font-mono text-xs sm:text-sm hover:-translate-y-1 transition-transform">
            <span>&lt;/&gt;</span>
            <span className="font-sans font-semibold text-xs tracking-wider uppercase">AI & Code</span>
          </div>

          {/* Badge 2: Neural Net */}
          <div className="bg-[#B9A8F0] text-[#261F36] px-4 py-2 rounded-full border-2 border-[#261F36] shadow-[3px_3px_0px_#261F36] flex items-center gap-2 font-bold text-xs sm:text-sm hover:-translate-y-1 transition-transform">
            <span>🧠</span>
            <span className="font-sans font-semibold text-xs tracking-wider uppercase">Neural Networks</span>
          </div>

          {/* Badge 3: Ideas */}
          <div className="bg-[#F2EFEA] text-[#261F36] px-4 py-2 rounded-full border-2 border-[#261F36] shadow-[3px_3px_0px_#261F36] flex items-center gap-2 font-bold text-xs sm:text-sm hover:-translate-y-1 transition-transform">
            <span>💡</span>
            <span className="font-sans font-semibold text-xs tracking-wider uppercase">Creative Ideas</span>
          </div>

          {/* Badge 4: Chai */}
          <div className="bg-[#8E7CC3] text-[#F2EFEA] px-4 py-2 rounded-full border-2 border-[#261F36] shadow-[3px_3px_0px_#261F36] flex items-center gap-2 font-bold text-xs sm:text-sm hover:-translate-y-1 transition-transform">
            <span>☕</span>
            <span className="font-sans font-semibold text-xs tracking-wider uppercase">Kerala Chai</span>
          </div>
        </motion.div>

        {/* Role & Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="max-w-2xl mx-auto px-4"
        >
          <p className="font-condensed font-bold text-lg sm:text-xl md:text-2xl text-[#F2EFEA] uppercase tracking-wider">
            {personalData.role}
          </p>
          <p className="font-sans text-sm sm:text-base text-[#D8CCE6] mt-2 max-w-lg mx-auto leading-relaxed">
            "{personalData.tagline}"
          </p>
          <p className="text-xs sm:text-sm font-condensed tracking-widest text-[#B9A8F0] mt-2.5 uppercase font-semibold">
            {personalData.college} • {personalData.location}
          </p>
        </motion.div>
      </div>

      {/* Bottom Edge: Ruler Tick-mark Progress & Section Highlights */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-4 sm:px-8 mt-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-condensed tracking-wider text-[#D8CCE6]/80 border-t border-[#8E7CC3]/30 pt-4">
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
