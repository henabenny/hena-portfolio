import React, { useState } from 'react';
import { personalData } from '../data';
import { motion } from 'framer-motion';
import { soundManager } from '../utils/sound';
import { FigmaIcon } from './Icons';
import {
  Code,
  Terminal,
  FileCode,
  Layout,
  Database,
  Brain,
  Eye,
  Table,
  Sparkles,
  Network,
  Atom,
  Palette,
  GitBranch,
  Zap,
  Cpu,
  PenTool,
  Grid,
  MousePointer,
} from 'lucide-react';

const iconMap = {
  code: Code,
  terminal: Terminal,
  'file-code': FileCode,
  layout: Layout,
  database: Database,
  brain: Brain,
  eye: Eye,
  table: Table,
  sparkles: Sparkles,
  network: Network,
  atom: Atom,
  palette: Palette,
  'git-branch': GitBranch,
  zap: Zap,
  cpu: Cpu,
  figma: FigmaIcon,
  'pen-tool': PenTool,
  grid: Grid,
  'mouse-pointer': MousePointer,
};

export default function SkillsSection() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const activeCategory = personalData.skillsCategories[activeCategoryIndex];

  return (
    <section
      id="skills"
      className="relative min-h-screen w-full py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#251E38] via-[#1D172D] to-[#171224] text-[#F2EFEA] overflow-hidden"
    >
      {/* Background Floating Synaptic Glyphs */}
      <div className="absolute inset-0 pointer-events-none opacity-10 select-none">
        <span className="absolute top-[15%] left-[8%] text-8xl font-mono text-[#F7F08A]">01</span>
        <span className="absolute top-[40%] right-[10%] text-9xl font-mono text-[#B9A8F0]">λ</span>
        <span className="absolute bottom-[20%] left-[12%] text-8xl font-mono text-[#8E7CC3]">&lt;/&gt;</span>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F7F08A]/15 border border-[#F7F08A]/30 text-[#F7F08A] font-condensed tracking-widest text-xs uppercase mb-3">
            <Sparkles size={14} /> LEVEL 02 : SYNAPSES & TOOLKIT
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-[#F2EFEA]">
            THOUGHT BUBBLES
          </h2>
          <div className="w-16 h-1 bg-[#F7F08A] my-3 rounded-full" />
          <p className="font-condensed text-base sm:text-lg text-[#D8CCE6] max-w-xl">
            Orbiting tools and foundational technologies floating in my memory cortex.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-12">
          {personalData.skillsCategories.map((cat, idx) => {
            const isActive = activeCategoryIndex === idx;
            return (
              <button
                key={cat.category}
                type="button"
                onClick={() => {
                  soundManager.playPop();
                  setActiveCategoryIndex(idx);
                }}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-condensed tracking-wider uppercase text-xs sm:text-sm font-semibold transition-all border-2 ${
                  isActive
                    ? 'bg-[#F7F08A] text-[#261F36] border-[#261F36] shadow-[3px_3px_0px_#261F36] -translate-y-0.5'
                    : 'bg-[#261F36]/60 text-[#D8CCE6] border-[#8E7CC3]/30 hover:border-[#F7F08A] hover:text-[#F2EFEA]'
                }`}
              >
                {cat.category}
              </button>
            );
          })}
        </div>

        {/* Category Description Banner */}
        <div className="text-center mb-10">
          <p className="font-sans italic text-sm text-[#B9A8F0]">
            — {activeCategory.description} —
          </p>
        </div>

        {/* Orbiting / Floating Thought Bubbles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeCategory.skills.map((skill, sIdx) => {
            const IconComponent = iconMap[skill.icon] || Code;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, delay: sIdx * 0.08 }}
                whileHover={{
                  scale: 1.04,
                  rotate: sIdx % 2 === 0 ? 1.5 : -1.5,
                  transition: { type: 'spring', stiffness: 350, damping: 15 },
                }}
                className="group relative p-6 rounded-3xl bg-[#201930]/90 border-2 border-[#8E7CC3]/30 hover:border-[#F7F08A] shadow-[5px_5px_0px_#120D1D] transition-all cursor-pointer overflow-hidden"
              >
                {/* Bubble Shimmer Accent */}
                <div className="absolute top-2 right-4 w-12 h-12 rounded-full bg-white/5 blur-xl group-hover:bg-[#F7F08A]/15 transition-all" />

                <div className="flex items-start justify-between">
                  {/* Icon in custom badge */}
                  <div
                    className="w-13 h-13 rounded-2xl p-3 flex items-center justify-center border-2 border-[#261F36] shadow-[2px_2px_0px_#261F36]"
                    style={{ backgroundColor: skill.color }}
                  >
                    <IconComponent size={24} className="text-[#261F36]" />
                  </div>

                  {/* Level Pill */}
                  <span className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-[#3B3355] border border-[#8E7CC3]/40 text-[#D8CCE6] font-medium">
                    {skill.level}
                  </span>
                </div>

                <div className="mt-5">
                  <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-[#F2EFEA] group-hover:text-[#F7F08A] transition-colors">
                    {skill.name}
                  </h3>
                  <div className="mt-3 flex items-center gap-1.5">
                    {/* Visual skill strength meter */}
                    <div className="flex-1 h-2 rounded-full bg-[#3B3355]/80 overflow-hidden border border-[#8E7CC3]/30">
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{
                          width: `${75 + ((sIdx * 6) % 25)}%`,
                          backgroundColor: skill.color,
                        }}
                      />
                    </div>
                    <span className="text-[10px] font-mono text-[#D8CCE6]">Active</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Interactive All-Skills Constellation Tape */}
        <div className="mt-16 p-6 rounded-3xl bg-[#261F36]/80 border-2 border-[#8E7CC3]/30 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#F7F08A] border-2 border-[#261F36] shadow-[2px_2px_0px_#261F36] flex items-center justify-center text-[#261F36]">
              <Brain size={26} />
            </div>
            <div>
              <h4 className="font-condensed font-bold uppercase text-lg text-[#F2EFEA]">
                ALWAYS EXPANDING THE ARCHITECTURE
              </h4>
              <p className="font-sans text-xs sm:text-sm text-[#D8CCE6]">
                Currently reading papers on Transformers, Deep Learning with PyTorch, and prompt-driven agents.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full bg-[#8E7CC3] hover:bg-[#F7F08A] text-[#261F36] font-condensed font-bold uppercase text-xs tracking-wider transition-all border-2 border-[#261F36] shadow-[3px_3px_0px_#261F36] hover:-translate-y-0.5 whitespace-nowrap"
          >
            Recommend a Book / Paper →
          </a>
        </div>
      </div>
    </section>
  );
}
