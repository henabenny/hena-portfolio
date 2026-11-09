import React from 'react';
import { personalData } from '../data';
import { motion } from 'framer-motion';
import { Milestone, Compass, Calendar, Award, CheckCircle } from 'lucide-react';

export default function JourneySection() {
  return (
    <section
      id="journey"
      className="relative min-h-screen w-full py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#251E38] via-[#2F2746] to-[#3B3355] text-[#F2EFEA] overflow-hidden"
    >
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F7F08A]/15 border border-[#F7F08A]/30 text-[#F7F08A] font-condensed tracking-widest text-xs uppercase mb-3">
            <Compass size={14} /> LEVEL 04 : THE CHRONICLE
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-[#F2EFEA]">
            ACADEMIC JOURNEY
          </h2>
          <div className="w-16 h-1 bg-[#F7F08A] my-3 rounded-full" />
          <p className="font-condensed text-base sm:text-lg text-[#D8CCE6] max-w-xl">
            From first curiosity to Thejus College of Engineering, hackathons, and AI engineering goals.
          </p>
        </div>

        {/* Timeline Container with Center Connecting Line */}
        <div className="relative">
          {/* Vertical Glowing Line */}
          <div
            aria-hidden="true"
            className="absolute left-4 md:left-1/2 top-4 bottom-4 w-1 -translate-x-1/2 bg-gradient-to-b from-[#F7F08A] via-[#8E7CC3] to-[#B9A8F0] rounded-full shadow-[0_0_12px_rgba(247,240,138,0.5)]"
          />

          <div className="space-y-12">
            {personalData.journey.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Milestone Pin */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#261F36] border-3 border-[#F7F08A] flex items-center justify-center text-[#F7F08A] shadow-[0_0_10px_#F7F08A] z-20">
                    <Milestone size={16} />
                  </div>

                  {/* Content Card (Left on odd, Right on even) */}
                  <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-60px' }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="p-6 sm:p-7 rounded-3xl bg-[#201930] border-2 border-[#8E7CC3]/30 hover:border-[#F7F08A] shadow-[5px_5px_0px_#140E20] transition-all group"
                    >
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="inline-flex items-center gap-1 text-xs font-mono text-[#F7F08A] font-bold">
                          <Calendar size={13} /> {item.period}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-[#8E7CC3]/25 border border-[#8E7CC3]/40 text-[10px] font-condensed uppercase tracking-wider text-[#D8CCE6]">
                          {item.badge}
                        </span>
                      </div>

                      <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-[#F2EFEA] group-hover:text-[#F7F08A] transition-colors">
                        {item.title}
                      </h3>
                      <p className="font-condensed text-xs sm:text-sm text-[#B9A8F0] font-semibold mt-0.5">
                        {item.organization}
                      </p>

                      <p className="font-sans text-xs sm:text-sm text-[#D8CCE6] mt-3 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Acquired Skills Pills */}
                      <div className="mt-4 pt-3 border-t border-[#8E7CC3]/20 flex flex-wrap gap-1.5">
                        {item.skillsAcquired.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 rounded-md bg-[#2B233D] text-[10px] font-sans text-[#D8CCE6]"
                          >
                            ✓ {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

