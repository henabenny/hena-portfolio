import React, { useState } from 'react';
import { personalData } from '../data';
import { motion, AnimatePresence } from 'framer-motion';
import { soundManager } from '../utils/sound';
import { GithubIcon } from './Icons';
import { ExternalLink, Sparkles, X, CheckCircle2, Layers, Cpu } from 'lucide-react';

function ProjectCard({ project, index, onSelect }) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -10;
    const rotY = ((x - centerX) / centerX) * 10;

    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      style={{ perspective: 1000 }}
      className="w-full"
      data-cursor="view"
      onClick={() => onSelect(project)}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
        className="group relative rounded-3xl bg-[#231A33] border-3 border-[#261F36] hover:border-[#F7F08A] p-6 sm:p-8 shadow-[7px_7px_0px_#140E20] hover:shadow-[10px_10px_0px_#F7F08A] transition-all cursor-pointer flex flex-col justify-between min-h-[420px]"
      >
        {/* Top Header & Tag */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <span
              className="px-3 py-1 rounded-full text-xs font-condensed font-bold uppercase tracking-wider border-2 border-[#261F36] shadow-[2px_2px_0px_#261F36]"
              style={{ backgroundColor: project.accentColor, color: '#261F36' }}
            >
              {project.category}
            </span>
            <span className="font-mono text-xs text-[#B9A8F0] uppercase tracking-wider">
              PROJECT 0{index + 1}
            </span>
          </div>

          <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-[#F2EFEA] group-hover:text-[#F7F08A] transition-colors">
            {project.title}
          </h3>
          <p className="font-condensed text-sm sm:text-base text-[#D8CCE6] font-medium mt-1">
            {project.subtitle}
          </p>

          <p className="font-sans text-xs sm:text-sm text-[#D8CCE6]/80 mt-4 leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Highlights Bullets */}
        <div className="my-5 space-y-1.5 border-t border-b border-[#8E7CC3]/20 py-3">
          {project.highlights.slice(0, 2).map((item, hIdx) => (
            <div key={hIdx} className="flex items-center gap-2 text-xs font-sans text-[#F2EFEA]/90">
              <CheckCircle2 size={13} className="text-[#F7F08A] shrink-0" />
              <span className="truncate">{item}</span>
            </div>
          ))}
        </div>

        {/* Bottom Tags & Buttons */}
        <div>
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-md bg-[#3B3355]/80 border border-[#8E7CC3]/30 text-[11px] font-mono text-[#D8CCE6]"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between pt-2">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onSelect(project);
              }}
              className="inline-flex items-center gap-1.5 text-xs font-condensed font-bold uppercase text-[#F7F08A] hover:underline"
            >
              <span>INSPECT ARCHITECTURE</span>
              <span>→</span>
            </button>

            <div className="flex items-center gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 rounded-xl bg-[#3B3355] hover:bg-[#F7F08A] text-[#F2EFEA] hover:text-[#261F36] border border-[#8E7CC3]/40 transition-colors"
                  aria-label={`${project.title} GitHub Repository`}
                >
                  <GithubIcon size={16} />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-2 rounded-xl bg-[#F7F08A] text-[#261F36] border-2 border-[#261F36] hover:bg-white transition-colors"
                  aria-label={`${project.title} Live Demo`}
                >
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="work"
      className="relative min-h-screen w-full py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#171224] via-[#1D162B] to-[#251E38] text-[#F2EFEA] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B9A8F0]/15 border border-[#B9A8F0]/30 text-[#F7F08A] font-condensed tracking-widest text-xs uppercase mb-3">
            <Layers size={14} /> LEVEL 03 : LAB EXPERIMENTS
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-[#F2EFEA]">
            FEATURED CREATIONS
          </h2>
          <div className="w-16 h-1 bg-[#F7F08A] my-3 rounded-full" />
          <p className="font-condensed text-base sm:text-lg text-[#D8CCE6] max-w-xl">
            Selected experiments where I translate AI concepts, OpenCV, and algorithms into working software.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {personalData.projects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              onSelect={(p) => {
                soundManager.playPop();
                setSelectedProject(p);
              }}
            />
          ))}
        </div>
      </div>

      {/* Detailed Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-[#231A33] border-4 border-[#261F36] rounded-3xl p-6 sm:p-8 shadow-[10px_10px_0px_#F7F08A] text-[#F2EFEA] max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-[#3B3355] hover:bg-[#F7F08A] text-[#F2EFEA] hover:text-[#261F36] border-2 border-[#261F36] transition-colors"
                aria-label="Close project modal"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-3 mb-3">
                <span
                  className="px-3 py-1 rounded-full text-xs font-condensed font-bold uppercase tracking-wider text-[#261F36]"
                  style={{ backgroundColor: selectedProject.accentColor }}
                >
                  {selectedProject.category}
                </span>
                <span className="font-mono text-xs text-[#B9A8F0]">
                  {selectedProject.status}
                </span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl font-bold uppercase text-[#F2EFEA]">
                {selectedProject.title}
              </h3>
              <p className="font-condensed text-base text-[#D8CCE6] font-medium mt-1">
                {selectedProject.subtitle}
              </p>

              <p className="font-sans text-sm sm:text-base text-[#D8CCE6] mt-4 leading-relaxed">
                {selectedProject.description}
              </p>

              {/* Key Features & Architecture Breakdown */}
              <div className="my-6 p-4 rounded-2xl bg-[#1B1428] border border-[#8E7CC3]/30">
                <h4 className="font-condensed font-bold text-xs uppercase tracking-widest text-[#F7F08A] mb-3 flex items-center gap-1.5">
                  <Sparkles size={14} /> ARCHITECTURAL HIGHLIGHTS
                </h4>
                <ul className="space-y-2">
                  {selectedProject.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm font-sans text-[#F2EFEA]">
                      <CheckCircle2 size={16} className="text-[#F7F08A] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {Object.entries(selectedProject.stats).map(([k, v]) => (
                  <div key={k} className="p-3 rounded-xl bg-[#2E2444] border border-[#8E7CC3]/20 text-center">
                    <span className="text-[10px] font-condensed uppercase tracking-wider text-[#B9A8F0] block">
                      {k}
                    </span>
                    <span className="font-sans font-bold text-xs sm:text-sm text-[#F7F08A]">
                      {v}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tech stack tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {selectedProject.tags.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-lg bg-[#3B3355] border border-[#8E7CC3]/40 text-xs font-mono text-[#F2EFEA]"
                  >
                    #{t}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-5 rounded-xl bg-[#3B3355] hover:bg-[#8E7CC3] text-[#F2EFEA] font-condensed font-bold uppercase text-sm tracking-wider flex items-center justify-center gap-2 border-2 border-[#261F36] shadow-[3px_3px_0px_#261F36] transition-all"
                  >
                    <GithubIcon size={18} /> View Source Code
                  </a>
                )}
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-5 rounded-xl bg-[#F7F08A] hover:bg-[#FFF79A] text-[#261F36] font-condensed font-bold uppercase text-sm tracking-wider flex items-center justify-center gap-2 border-2 border-[#261F36] shadow-[3px_3px_0px_#261F36] transition-all"
                  >
                    <ExternalLink size={18} /> Launch Project
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

