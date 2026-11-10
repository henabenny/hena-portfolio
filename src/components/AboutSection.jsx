import React, { useEffect, useState, useRef } from 'react';
import { personalData } from '../data';
import { motion, useInView } from 'framer-motion';
import { Sparkles, MapPin, Brain, Heart, ExternalLink } from 'lucide-react';

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

/* Scanline animation injected once */
const ScanlineStyle = () => (
  <style>{`
    @keyframes scanline {
      0%   { transform: translateY(-100%); }
      100% { transform: translateY(100vh); }
    }
    @keyframes glitch-shift {
      0%,100% { clip-path: inset(0 0 95% 0); transform: translate(-4px,0); }
      20%      { clip-path: inset(10% 0 70% 0); transform: translate(4px,0); }
      40%      { clip-path: inset(45% 0 40% 0); transform: translate(-2px,0); }
      60%      { clip-path: inset(80% 0 5% 0);  transform: translate(3px,0); }
      80%      { clip-path: inset(60% 0 25% 0); transform: translate(-3px,0); }
    }
    @keyframes noise-flicker {
      0%,100% { opacity: 0.07; }
      50%     { opacity: 0.12; }
    }
    .photo-bw {
      filter: grayscale(100%) contrast(1.1) brightness(0.9);
      transition: filter 0.6s ease;
    }
    .photo-card:hover .photo-bw {
      filter: grayscale(0%) contrast(1) brightness(1);
    }
    .scanline-bar {
      animation: scanline 3s linear infinite;
      pointer-events: none;
    }
    .glitch-layer {
      animation: glitch-shift 6s steps(1) infinite;
      pointer-events: none;
    }
    .noise-layer {
      animation: noise-flicker 0.15s steps(1) infinite;
      pointer-events: none;
    }
    .photo-card:hover .scanline-bar,
    .photo-card:hover .glitch-layer {
      opacity: 0;
    }
    /* Slide-up overlay on hover */
    .info-overlay {
      transform: translateY(100%);
      transition: transform 0.5s cubic-bezier(0.16,1,0.3,1);
    }
    .photo-card:hover .info-overlay {
      transform: translateY(0%);
    }
    /* Corner label pulse */
    @keyframes corner-pulse {
      0%,100% { opacity: 1; }
      50%      { opacity: 0.4; }
    }
    .rec-dot { animation: corner-pulse 1.4s ease-in-out infinite; }
  `}</style>
);

export default function AboutSection() {
  const cardRef = useRef(null);

  return (
    <section
      id="about"
      className="relative min-h-screen w-full py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#453A62] via-[#2F2746] to-[#251E38] text-[#F2EFEA] overflow-hidden"
    >
      <ScanlineStyle />

      {/* Backdrop blobs */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#8E7CC3]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#F7F08A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B9A8F0]/20 border border-[#B9A8F0]/40 text-[#F7F08A] font-condensed tracking-widest text-xs uppercase mb-3">
            <Brain size={14} /> LEVEL 01 : COGNITION
          </span>
          <h2 className="font-pinyon text-5xl sm:text-6xl md:text-7xl font-normal tracking-wide text-[#F2EFEA]">
            {personalData.about.title}
          </h2>
          <div className="w-16 h-1 bg-[#F7F08A] my-3 rounded-full" />
          <p className="font-condensed text-base sm:text-lg text-[#D8CCE6] max-w-xl">
            {personalData.about.subtitle}
          </p>
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* ── LEFT COLUMN: Full Square Photo Card ── */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <motion.div
              ref={cardRef}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="photo-card relative w-full max-w-sm sm:max-w-md group cursor-pointer"
            >
              {/* Outer shadow frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-[0_0_0_2px_#8E7CC3,8px_8px_0px_#1B1526] hover:shadow-[0_0_0_2px_#F7F08A,10px_10px_0px_#1B1526] transition-shadow duration-500">

                {/* Square photo container */}
                <div className="relative w-full aspect-square overflow-hidden bg-black">

                  {/* ── Actual photo — B&W → Color on hover ── */}
                  <img
                    src={personalData.about.photo || '/hena-photo.jpg'}
                    alt="Hena Benny"
                    className="photo-bw w-full h-full object-cover object-top scale-105 group-hover:scale-100 transition-transform duration-700"
                    loading="lazy"
                  />

                  {/* ── Film grain noise ── */}
                  <div
                    className="noise-layer absolute inset-0 mix-blend-overlay"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'repeat',
                      backgroundSize: '128px 128px',
                    }}
                  />

                  {/* ── Scanline sweep ── */}
                  <div
                    className="scanline-bar absolute inset-x-0 h-10"
                    style={{
                      background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.04), transparent)',
                      top: 0,
                    }}
                  />

                  {/* ── Glitch ghost duplicate ── */}
                  <img
                    src={personalData.about.photo || '/hena-photo.jpg'}
                    alt=""
                    aria-hidden="true"
                    className="glitch-layer photo-bw absolute inset-0 w-full h-full object-cover object-top opacity-60 mix-blend-screen"
                  />

                  {/* ── TOP-LEFT: REC dot ── */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full border border-white/10 z-20">
                    <span className="rec-dot inline-block w-2 h-2 rounded-full bg-red-500" />
                    <span className="font-mono text-[9px] text-white/70 uppercase tracking-widest">REC</span>
                  </div>

                  {/* ── TOP-RIGHT: Student ID badge ── */}
                  <div className="absolute top-3 right-3 bg-[#F7F08A] text-[#261F36] font-mono text-[9px] font-bold uppercase tracking-widest px-2 py-1 rounded z-20">
                    STUDENT ID
                  </div>

                  {/* ── BOTTOM: slide-up info overlay ── */}
                  <div className="info-overlay absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent pt-10 pb-5 px-5 z-20">
                    <p className="font-pinyon text-3xl text-white mb-0.5">Hena Benny</p>
                    <p className="font-mono text-[10px] text-white/60 uppercase tracking-widest">
                      B.Tech CSE (AI) · {personalData.about.batch}
                    </p>
                    <div className="flex items-center gap-1 mt-1">
                      <MapPin size={10} className="text-[#F7F08A]" />
                      <span className="font-mono text-[9px] text-[#F7F08A] uppercase tracking-widest">
                        Thejus College, Thrissur
                      </span>
                    </div>
                  </div>

                  {/* ── Vignette ── */}
                  <div
                    className="absolute inset-0 pointer-events-none z-10"
                    style={{
                      background:
                        'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.55) 100%)',
                    }}
                  />

                  {/* ── Hover tint wash ── */}
                  <div className="absolute inset-0 bg-[#8E7CC3]/0 group-hover:bg-[#8E7CC3]/5 transition-all duration-500 z-10 pointer-events-none" />
                </div>

                {/* ── Bottom strip ── */}
                <div className="flex items-center justify-between bg-[#0D0A14] border-t border-white/5 px-4 py-2.5">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-white/30">
                    THESIS: LEARNING AI
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#F7F08A]/70">
                    1st YEAR · 2026
                  </span>
                </div>
              </div>

              {/* Floating Kerala sticker */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7, rotate: 8 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 3 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: 'spring', stiffness: 300 }}
                className="absolute -bottom-4 -right-4 bg-[#F7F08A] text-[#261F36] px-3 py-1.5 rounded-xl border-2 border-[#261F36] shadow-[3px_3px_0px_#261F36] font-condensed font-bold text-xs uppercase flex items-center gap-1.5 hover:rotate-0 hover:scale-105 transition-transform cursor-pointer"
              >
                <Heart size={12} className="fill-[#261F36]" /> Thrissur, Kerala
              </motion.div>

              {/* Hover hint at bottom left */}
              <p className="mt-3 text-center font-mono text-[9px] text-[#8E7CC3]/60 uppercase tracking-widest select-none">
                hover to reveal colour
              </p>
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN: Bio Narrative & Facts ── */}
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
