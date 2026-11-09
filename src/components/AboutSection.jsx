import React, { useEffect, useState, useRef } from 'react';
import { personalData } from '../data';
import { motion, useInView } from 'framer-motion';
import { Sparkles, MapPin, GraduationCap, Brain, Terminal, Heart } from 'lucide-react';

function CounterItem({ label, value, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = value;
    const duration = 1600;
    const stepTime = Math.max(Math.floor(duration / end), 25);

    const timer = setInterval(() => {
      start += Math.ceil(end / 40) || 1;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div
      ref={ref}
      className="p-4 sm:p-5 rounded-2xl bg-[#261F36]/80 border-2 border-[#8E7CC3]/30 shadow-[4px_4px_0px_#1B1526] hover:translate-y-[-2px] hover:border-[#F7F08A] transition-all"
    >
      <div className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#F7F08A]">
        {count}
        <span className="text-[#B9A8F0] ml-1">{suffix}</span>
      </div>
      <p className="font-condensed tracking-wider uppercase text-xs sm:text-sm text-[#D8CCE6] mt-1 font-semibold">
        {label}
      </p>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#453A62] via-[#2F2746] to-[#251E38] text-[#F2EFEA] overflow-hidden"
    >
      {/* Subtle Mind Constellation Backdrop */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#8E7CC3]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#F7F08A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B9A8F0]/20 border border-[#B9A8F0]/40 text-[#F7F08A] font-condensed tracking-widest text-xs uppercase mb-3">
            <Brain size={14} /> LEVEL 01 : COGNITION
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-[#F2EFEA]">
            {personalData.about.title}
          </h2>
          <div className="w-16 h-1 bg-[#F7F08A] my-3 rounded-full" />
          <p className="font-condensed text-base sm:text-lg text-[#D8CCE6] max-w-xl">
            {personalData.about.subtitle}
          </p>
        </div>

        {/* Two Column Grid: Left Hand-drawn Photo Frame, Right Bio & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Hand-drawn Illustrated Photo Frame */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative group w-full max-w-sm sm:max-w-md">
              {/* Hand-drawn Polar Frame with Thick Border & Tape Stickers */}
              <div className="relative bg-[#F2EFEA] text-[#261F36] p-4 sm:p-5 rounded-3xl border-4 border-[#261F36] shadow-[8px_8px_0px_#1B1526] transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                {/* Washi Tape Accent on Top */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#F7F08A]/80 border-2 border-[#261F36] -rotate-3 z-20 flex items-center justify-center text-[10px] font-mono tracking-widest text-[#261F36]">
                  STUDENT ID
                </div>

                {/* Inner Illustration Frame */}
                <div className="w-full aspect-[4/5] rounded-2xl bg-gradient-to-b from-[#6B5B95] to-[#3B3355] border-2 border-[#261F36] overflow-hidden relative flex flex-col items-center justify-center p-6 text-center text-[#F2EFEA]">
                  {/* Stylized Avatar Illustration */}
                  <div className="relative w-36 h-36 mb-4">
                    <svg viewBox="0 0 160 160" fill="none" className="w-full h-full drop-shadow-md">
                      {/* Aura / Halo */}
                      <circle cx="80" cy="80" r="70" fill="#B9A8F0" opacity="0.25" />
                      {/* Avatar Head */}
                      <circle cx="80" cy="75" r="42" fill="#E8DDF2" stroke="#261F36" strokeWidth="4" />
                      {/* Hair */}
                      <path
                        d="M44 65 C44 32 116 32 116 65 C116 80 110 95 105 105 C100 85 92 65 80 65 C68 65 60 85 55 105 C50 95 44 80 44 65 Z"
                        fill="#261F36"
                      />
                      {/* Cute glasses */}
                      <circle cx="68" cy="76" r="10" stroke="#261F36" strokeWidth="3" fill="none" />
                      <circle cx="92" cy="76" r="10" stroke="#261F36" strokeWidth="3" fill="none" />
                      <line x1="78" y1="76" x2="82" y2="76" stroke="#261F36" strokeWidth="3" />
                      {/* Smile */}
                      <path d="M72 94 Q80 100 88 94" stroke="#261F36" strokeWidth="3" strokeLinecap="round" fill="none" />
                      {/* Cheeks */}
                      <circle cx="60" cy="88" r="4" fill="#D997A8" />
                      <circle cx="100" cy="88" r="4" fill="#D997A8" />
                    </svg>
                    {/* Sparkle sticker */}
                    <span className="absolute -top-1 -right-1 text-xl animate-bounce">✨</span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#F7F08A] tracking-wider uppercase">
                    Hena Benny
                  </h3>
                  <p className="font-condensed text-xs sm:text-sm text-[#D8CCE6] uppercase tracking-wider mt-0.5">
                    B.Tech CSE (AI) • 2024–2028
                  </p>
                  <p className="font-sans text-[11px] text-[#B9A8F0] mt-1 flex items-center gap-1 justify-center">
                    <MapPin size={12} /> Thejus College, Thrissur
                  </p>
                </div>

                {/* Hand-written Label below photo */}
                <div className="pt-3 px-1 flex items-center justify-between text-[#261F36] font-mono text-xs">
                  <span className="font-bold tracking-wider">THESIS: LEARNING AI</span>
                  <span className="text-[11px] bg-[#B9A8F0]/30 px-2 py-0.5 rounded font-sans font-semibold">1st YEAR</span>
                </div>
              </div>

              {/* Floating Sticker: "Made with passion in Thrissur" */}
              <div className="absolute -bottom-4 -right-3 sm:-right-5 bg-[#F7F08A] text-[#261F36] px-3 py-1.5 rounded-xl border-2 border-[#261F36] shadow-[3px_3px_0px_#261F36] font-condensed font-bold text-xs uppercase flex items-center gap-1.5 rotate-3 hover:rotate-0 transition-transform">
                <Heart size={14} className="fill-[#261F36]" /> Thrissur, Kerala
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative & Facts */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="space-y-4 text-sm sm:text-base text-[#D8CCE6] leading-relaxed">
              {personalData.about.bioParagraphs.map((para, i) => (
                <p key={i} className="font-sans">
                  {para}
                </p>
              ))}
            </div>

            {/* Quick Details Chips */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {personalData.about.detailsList.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-[#261F36]/60 border border-[#8E7CC3]/25"
                >
                  <div className="w-2 h-2 rounded-full bg-[#F7F08A]" />
                  <div>
                    <span className="font-condensed text-xs uppercase text-[#B9A8F0] block">
                      {item.label}
                    </span>
                    <span className="font-sans text-xs sm:text-sm font-medium text-[#F2EFEA]">
                      {item.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Personality / Quirks */}
            <div className="pt-2">
              <h4 className="font-condensed text-xs uppercase tracking-widest text-[#B9A8F0] mb-2.5 flex items-center gap-1.5">
                <Sparkles size={13} className="text-[#F7F08A]" /> CURRENT BRAIN OBSESSIONS
              </h4>
              <div className="flex flex-wrap gap-2">
                {personalData.about.quirks.map((quirk, qIndex) => (
                  <span
                    key={qIndex}
                    className="px-3 py-1.5 rounded-full bg-[#3B3355]/70 border border-[#8E7CC3]/30 text-xs text-[#F2EFEA] font-sans hover:border-[#F7F08A] hover:bg-[#3B3355] transition-all"
                  >
                    {quirk}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Animated Counters Row */}
        <div className="mt-16 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {personalData.counters.map((item, cIndex) => (
            <CounterItem
              key={cIndex}
              label={item.label}
              value={item.value}
              suffix={item.suffix}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

