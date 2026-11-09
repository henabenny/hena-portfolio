import React, { useMemo } from 'react';

/**
 * Twinkling stars scattered throughout the canvas.
 * Precomputed deterministic positions so re-renders don't jump.
 */
export default function TwinklingStars({ count = 45 }) {
  const stars = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: (i * 37) % 98 + 1, // percentage
      y: (i * 47) % 92 + 2, // percentage
      size: (i % 3) * 1.5 + 1.5, // 1.5px to 4.5px
      delay: (i * 0.4) % 4,
      duration: 2 + (i % 3) * 1.5,
      opacity: 0.3 + ((i % 5) * 0.15),
      isCross: i % 7 === 0 // some four-point sparkle stars
    }));
  }, [count]);

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden select-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            animation: `twinkle ${star.duration}s ease-in-out infinite`,
            animationDelay: `${star.delay}s`,
            opacity: star.opacity,
          }}
        >
          {star.isCross ? (
            <svg
              width={star.size * 3}
              height={star.size * 3}
              viewBox="0 0 16 16"
              fill="none"
              className="text-[#F7F08A]"
            >
              <path
                d="M8 0L9 6L15 8L9 10L8 16L7 10L1 8L7 6Z"
                fill="currentColor"
              />
            </svg>
          ) : (
            <div
              className="rounded-full bg-[#F2EFEA]"
              style={{
                width: `${star.size}px`,
                height: `${star.size}px`,
                boxShadow: `0 0 ${star.size * 2}px rgba(247, 240, 138, 0.6)`,
              }}
            />
          )}
        </div>
      ))}
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 0.95; transform: scale(1.25); }
        }
      `}</style>
    </div>
  );
}

