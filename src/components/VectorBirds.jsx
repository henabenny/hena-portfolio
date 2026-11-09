import React from 'react';

/**
 * Flat 2D vector birds drifting across the sky.
 * Styled with soft outlines to match the playful illustration vibe.
 */
export default function VectorBirds() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden select-none z-10">
      {/* Flock 1 - upper left drifting */}
      <div
        className="absolute top-[28%] left-[-100px] flex items-center gap-4 opacity-50"
        style={{
          animation: 'driftRight 42s linear infinite',
        }}
      >
        {/* Bird 1 */}
        <svg width="34" height="16" viewBox="0 0 34 16" fill="none" className="transform -rotate-6">
          <path
            d="M1 9 C7 2 13 4 17 9 C21 4 27 2 33 9 C25 6 20 12 17 10 C14 12 9 6 1 9 Z"
            fill="#F2EFEA"
            opacity="0.85"
          />
        </svg>

        {/* Bird 2 */}
        <svg width="26" height="12" viewBox="0 0 34 16" fill="none" className="transform rotate-3 translate-y-3">
          <path
            d="M1 9 C7 2 13 4 17 9 C21 4 27 2 33 9 C25 6 20 12 17 10 C14 12 9 6 1 9 Z"
            fill="#B9A8F0"
            opacity="0.75"
          />
        </svg>

        {/* Bird 3 */}
        <svg width="22" height="10" viewBox="0 0 34 16" fill="none" className="transform -rotate-2 -translate-y-2">
          <path
            d="M1 9 C7 2 13 4 17 9 C21 4 27 2 33 9 C25 6 20 12 17 10 C14 12 9 6 1 9 Z"
            fill="#D8CCE6"
            opacity="0.65"
          />
        </svg>
      </div>

      {/* Flock 2 - lower right drifting slower */}
      <div
        className="absolute top-[48%] left-[-150px] flex items-center gap-6 opacity-35"
        style={{
          animation: 'driftRight 58s linear infinite',
          animationDelay: '18s',
        }}
      >
        <svg width="28" height="14" viewBox="0 0 34 16" fill="none">
          <path
            d="M1 9 C7 2 13 4 17 9 C21 4 27 2 33 9 C25 6 20 12 17 10 C14 12 9 6 1 9 Z"
            fill="#F2EFEA"
            opacity="0.7"
          />
        </svg>
        <svg width="20" height="10" viewBox="0 0 34 16" fill="none" className="transform translate-y-4">
          <path
            d="M1 9 C7 2 13 4 17 9 C21 4 27 2 33 9 C25 6 20 12 17 10 C14 12 9 6 1 9 Z"
            fill="#F7F08A"
            opacity="0.6"
          />
        </svg>
      </div>

      <style>{`
        @keyframes driftRight {
          0% {
            transform: translateX(-120px) translateY(0px);
          }
          50% {
            transform: translateX(55vw) translateY(-25px);
          }
          100% {
            transform: translateX(110vw) translateY(-5px);
          }
        }
      `}</style>
    </div>
  );
}

