import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFinished(true);
            if (onComplete) onComplete();
          }, 350);
          return 100;
        }
        return prev + 5;
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#3B3355] text-[#F2EFEA] px-6 select-none"
        >
          {/* Animated Brain Icon / Head Outline */}
          <div className="relative w-20 h-20 mb-6">
            <svg viewBox="0 0 64 64" fill="none" className="w-full h-full animate-pulse">
              <path
                d="M18 42 C18 48 46 48 46 42 C46 32 46 26 46 26 L18 26 Z"
                fill="#8E7CC3"
                stroke="#261F36"
                strokeWidth="3"
              />
              <path
                d="M16 23 C22 15 42 15 48 23"
                stroke="#261F36"
                strokeWidth="3.5"
                fill="#B9A8F0"
              />
              <circle cx="28" cy="34" r="3" fill="#261F36" />
              <circle cx="36" cy="34" r="3" fill="#261F36" />
              <path d="M29 39 Q32 42 35 39" stroke="#261F36" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span className="absolute -top-2 -right-1 text-[#F7F08A] text-lg font-bold">✨</span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-wider text-[#F7F08A] mb-2 text-center">
            INITIALIZING HENA'S NEURONS...
          </h2>
          <p className="font-condensed text-xs sm:text-sm tracking-widest text-[#D8CCE6] uppercase mb-6">
            THEJUS COLLEGE OF ENGINEERING • B.TECH CSE (AI)
          </p>

          {/* Progress Bar */}
          <div className="w-64 max-w-full h-3 rounded-full bg-[#261F36] border-2 border-[#8E7CC3]/40 overflow-hidden shadow-inner">
            <motion.div
              className="h-full bg-gradient-to-r from-[#8E7CC3] via-[#B9A8F0] to-[#F7F08A] rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'linear' }}
            />
          </div>

          <span className="font-mono text-xs text-[#F7F08A] mt-3 font-semibold">
            {progress}% SYNCHRONIZED
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

