import React, { useEffect, useState, useRef } from 'react';

/**
 * Original flat illustrated vector character of Hena Benny waving.
 * Features:
 * - Opened head lid revealing inner thoughts
 * - Floating thought icons (code brackets, glowing lightbulb, neural network, coffee cup)
 * - Real-time mouse-tracking pupils
 * - Gently waving hand
 * - Thick dark outlines & playful 2D aesthetic
 */
export default function HenaCharacter({ isZoomed = false }) {
  const [pupilOffset, setPupilOffset] = useState({ x: 0, y: 0 });
  const headRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!headRef.current) return;
      const rect = headRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;

      // Bound pupil movement within eye sockets
      const maxDistance = 5;
      const angle = Math.atan2(deltaY, deltaX);
      const distance = Math.min(Math.hypot(deltaX, deltaY) / 45, maxDistance);

      setPupilOffset({
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={headRef}
      className="relative mx-auto flex flex-col items-center justify-end select-none w-[340px] sm:w-[420px] md:w-[480px] lg:w-[540px] pointer-events-auto"
      style={{
        transformOrigin: '50% 40%',
      }}
    >
      {/* ================= FLOATING THOUGHT ICONS RISING FROM HEAD ================= */}
      <div className="absolute top-[-30px] sm:top-[-45px] md:top-[-60px] w-full h-[140px] pointer-events-none z-20">
        {/* Thought 1: Code Brackets </> */}
        <div
          className="absolute left-[16%] sm:left-[20%] top-6 bg-[#F7F08A] text-[#261F36] px-3 py-1.5 rounded-full border-2 border-[#261F36] shadow-[2px_3px_0px_#261F36] flex items-center gap-1 font-bold font-mono text-xs sm:text-sm animate-float-slow"
          style={{ animationDuration: '4.2s' }}
        >
          <span className="font-extrabold">&lt;/&gt;</span>
          <span className="text-[10px] tracking-wide font-sans">AI & CODE</span>
        </div>

        {/* Thought 2: Neural Network Nodes */}
        <div
          className="absolute left-[38%] sm:left-[42%] -top-2 bg-[#B9A8F0] text-[#261F36] p-2.5 rounded-2xl border-2 border-[#261F36] shadow-[2px_3px_0px_#261F36] flex items-center justify-center animate-float-reverse"
          style={{ animationDuration: '5.1s', animationDelay: '0.8s' }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="stroke-[#261F36]" strokeWidth="2">
            <circle cx="5" cy="6" r="2.5" fill="#F7F08A" />
            <circle cx="5" cy="18" r="2.5" fill="#F7F08A" />
            <circle cx="12" cy="12" r="2.5" fill="#FFFFFF" />
            <circle cx="19" cy="6" r="2.5" fill="#F2EFEA" />
            <circle cx="19" cy="18" r="2.5" fill="#F2EFEA" />
            <line x1="7.5" y1="6" x2="9.5" y2="12" />
            <line x1="7.5" y1="18" x2="9.5" y2="12" />
            <line x1="14.5" y1="12" x2="16.5" y2="6" />
            <line x1="14.5" y1="12" x2="16.5" y2="18" />
          </svg>
        </div>

        {/* Thought 3: Glowing Lightbulb Idea */}
        <div
          className="absolute right-[22%] sm:right-[26%] top-2 bg-[#F2EFEA] text-[#261F36] p-2 rounded-xl border-2 border-[#261F36] shadow-[2px_3px_0px_#261F36] flex items-center justify-center animate-float-slow"
          style={{ animationDuration: '3.8s', animationDelay: '0.4s' }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2C8.13 2 5 5.13 5 9C5 11.38 6.19 13.47 8 14.74V17C8 17.55 8.45 18 9 18H15C15.55 18 16 17.55 16 17V14.74C17.81 13.47 19 11.38 19 9C19 5.13 15.87 2 12 2Z"
              fill="#F7F08A"
              stroke="#261F36"
              strokeWidth="2"
            />
            <path d="M9 21H15" stroke="#261F36" strokeWidth="2" strokeLinecap="round" />
            <path d="M10 18H14" stroke="#261F36" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>

        {/* Thought 4: Hot Chai / Coffee Cup */}
        <div
          className="absolute right-[8%] sm:right-[12%] top-8 bg-[#8E7CC3] text-[#F2EFEA] p-2 rounded-xl border-2 border-[#261F36] shadow-[2px_3px_0px_#261F36] flex items-center gap-1 animate-float-reverse"
          style={{ animationDuration: '4.6s', animationDelay: '1.2s' }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M18 8H4C3.45 8 3 8.45 3 9V14C3 16.21 4.79 18 7 18H15C17.21 18 19 16.21 19 14V13H20C21.1 13 22 12.1 22 11V10C22 8.9 21.1 8 20 8H18ZM18 11V10H20V11H18Z"
              fill="#D8CCE6"
              stroke="#261F36"
              strokeWidth="2"
            />
            <path d="M6 3C6 4.5 7 5 7 6" stroke="#F7F08A" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M10 2C10 3.5 11 4 11 5.5" stroke="#F7F08A" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M14 3C14 4.5 15 5 15 6" stroke="#F7F08A" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </div>

        {/* Floating Sparks */}
        <span className="absolute left-[33%] top-16 text-[#F7F08A] text-lg font-bold select-none animate-pulse">✦</span>
        <span className="absolute right-[36%] top-12 text-[#D8CCE6] text-xs font-mono select-none">λ</span>
      </div>

      {/* ================= MAIN VECTOR SVG OF HENA ================= */}
      <svg
        viewBox="0 0 500 460"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-xl"
        role="img"
        aria-label="Flat vector illustration of Hena Benny waving with open-head lid revealing ideas"
      >
        <defs>
          {/* Inner Mind Cosmic Glow Gradient */}
          <linearGradient id="innerMindGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4A3E6B" />
            <stop offset="60%" stopColor="#8E7CC3" />
            <stop offset="100%" stopColor="#F7F08A" />
          </linearGradient>

          {/* Skin Gradient for soft warmth */}
          <linearGradient id="skinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#E5DAEF" />
            <stop offset="100%" stopColor="#D5C5E3" />
          </linearGradient>

          {/* Hair Gradient */}
          <linearGradient id="hairGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#251E33" />
            <stop offset="100%" stopColor="#1E172B" />
          </linearGradient>
        </defs>

        {/* ================= TORSO & SHOULDERS ================= */}
        <g id="torso">
          {/* Dark Cozy Sweater */}
          <path
            d="M80 460 C80 375 140 330 250 330 C360 330 420 375 420 460 Z"
            fill="#231C32"
            stroke="#161220"
            strokeWidth="5"
            strokeLinejoin="round"
          />
          {/* Sweater Collar Ribbing */}
          <path
            d="M205 330 C205 348 295 348 295 330"
            fill="#322846"
            stroke="#161220"
            strokeWidth="4"
          />
          {/* Small Collar Pin / Badge (Kerala star or AI chip) */}
          <circle cx="280" cy="365" r="7" fill="#F7F08A" stroke="#161220" strokeWidth="2.5" />
          <path d="M280 361 L281 364 L284 365 L281 366 L280 369 L279 366 L276 365 L279 364 Z" fill="#231C32" />
        </g>

        {/* ================= WAVING ARM & HAND ================= */}
        <g id="waving-arm" className="origin-[130px_350px] animate-wave">
          {/* Arm Sleeve */}
          <path
            d="M125 360 C105 330 85 280 75 240 C95 230 115 255 135 305 Z"
            fill="#231C32"
            stroke="#161220"
            strokeWidth="4.5"
            strokeLinejoin="round"
          />
          {/* Hand Palm & Fingers */}
          <g id="hand" transform="translate(48, 175)">
            {/* Palm */}
            <path
              d="M22 68 C16 58 18 42 28 38 C32 36 38 38 42 45 C48 35 56 34 60 42 C65 33 73 34 76 43 C80 37 88 38 90 48 C93 60 90 75 80 88 C70 100 35 98 22 68 Z"
              fill="url(#skinGrad)"
              stroke="#261F36"
              strokeWidth="4.5"
              strokeLinejoin="round"
            />
            {/* Finger details */}
            <path d="M42 45 L42 62" stroke="#261F36" strokeWidth="3" strokeLinecap="round" />
            <path d="M60 42 L60 62" stroke="#261F36" strokeWidth="3" strokeLinecap="round" />
            <path d="M76 43 L76 64" stroke="#261F36" strokeWidth="3" strokeLinecap="round" />
            {/* Thumb */}
            <path
              d="M26 62 C15 62 10 70 14 78 C18 84 26 82 32 75"
              fill="url(#skinGrad)"
              stroke="#261F36"
              strokeWidth="4"
            />
          </g>
        </g>

        {/* ================= NECK ================= */}
        <rect
          x="225"
          y="280"
          width="50"
          height="55"
          rx="12"
          fill="url(#skinGrad)"
          stroke="#261F36"
          strokeWidth="4.5"
        />

        {/* ================= BACK HAIR (Behind Head) ================= */}
        <path
          d="M160 210 C140 250 145 315 175 335 C200 345 300 345 325 335 C355 315 360 250 340 210 Z"
          fill="url(#hairGrad)"
          stroke="#161220"
          strokeWidth="4.5"
        />

        {/* ================= HEAD BASE & FACE ================= */}
        <g id="face-and-ears">
          {/* Left Ear */}
          <ellipse cx="182" cy="245" rx="12" ry="16" fill="url(#skinGrad)" stroke="#261F36" strokeWidth="4" />
          <path d="M182 240 C180 244 180 248 184 250" stroke="#261F36" strokeWidth="2.5" strokeLinecap="round" />
          {/* Earring Left */}
          <circle cx="182" cy="262" r="3.5" fill="#F7F08A" stroke="#261F36" strokeWidth="2" />

          {/* Right Ear */}
          <ellipse cx="318" cy="245" rx="12" ry="16" fill="url(#skinGrad)" stroke="#261F36" strokeWidth="4" />
          <path d="M318 240 C320 244 320 248 316 250" stroke="#261F36" strokeWidth="2.5" strokeLinecap="round" />
          {/* Earring Right */}
          <circle cx="318" cy="262" r="3.5" fill="#F7F08A" stroke="#261F36" strokeWidth="2" />

          {/* Main Face Contour (Cut off smoothly at top rim for open lid) */}
          <path
            d="M192 185 L308 185 C315 185 318 205 318 235 C318 285 295 305 250 305 C205 305 182 285 182 235 C182 205 185 185 192 185 Z"
            fill="url(#skinGrad)"
            stroke="#261F36"
            strokeWidth="5"
            strokeLinejoin="round"
          />

          {/* Rosy Cheeks */}
          <ellipse cx="206" cy="254" rx="10" ry="6" fill="#D997A8" opacity="0.65" />
          <ellipse cx="294" cy="254" rx="10" ry="6" fill="#D997A8" opacity="0.65" />

          {/* Eyebrows */}
          <path d="M205 212 Q218 206 230 213" stroke="#261F36" strokeWidth="3.5" strokeLinecap="round" fill="none" />
          <path d="M270 213 Q282 206 295 212" stroke="#261F36" strokeWidth="3.5" strokeLinecap="round" fill="none" />

          {/* Left Eye */}
          <g id="left-eye">
            <ellipse cx="218" cy="230" rx="14" ry="16" fill="#FFFFFF" stroke="#261F36" strokeWidth="3.5" />
            {/* Dynamic Tracking Pupil */}
            <circle
              cx={218 + pupilOffset.x}
              cy={230 + pupilOffset.y}
              r="7.5"
              fill="#261F36"
            />
            {/* Catchlight Glint */}
            <circle
              cx={216 + pupilOffset.x}
              cy={227 + pupilOffset.y}
              r="2.5"
              fill="#FFFFFF"
            />
          </g>

          {/* Right Eye */}
          <g id="right-eye">
            <ellipse cx="282" cy="230" rx="14" ry="16" fill="#FFFFFF" stroke="#261F36" strokeWidth="3.5" />
            {/* Dynamic Tracking Pupil */}
            <circle
              cx={282 + pupilOffset.x}
              cy={230 + pupilOffset.y}
              r="7.5"
              fill="#261F36"
            />
            {/* Catchlight Glint */}
            <circle
              cx={280 + pupilOffset.x}
              cy={227 + pupilOffset.y}
              r="2.5"
              fill="#FFFFFF"
            />
          </g>

          {/* Cute Nose */}
          <path d="M250 236 Q254 246 248 248" stroke="#261F36" strokeWidth="3" strokeLinecap="round" fill="none" />

          {/* Cheerful Confident Smile */}
          <path
            d="M233 264 Q250 282 267 264"
            stroke="#261F36"
            strokeWidth="4"
            strokeLinecap="round"
            fill="#69223D"
          />
          {/* Tongue/Teeth detail in smile */}
          <path d="M242 272 Q250 278 258 272" fill="#F7A1B5" />
        </g>

        {/* ================= OPEN HEAD CAVITY (The Portal to Her Mind) ================= */}
        <g id="open-mind-cavity">
          {/* Elliptical Open Rim Surface */}
          <ellipse
            cx="250"
            cy="185"
            rx="60"
            ry="18"
            fill="url(#innerMindGlow)"
            stroke="#261F36"
            strokeWidth="4.5"
          />
          {/* Inner Depth Rim Shadow */}
          <path
            d="M192 185 C192 196 308 196 308 185"
            stroke="#261F36"
            strokeWidth="3"
            fill="none"
            opacity="0.3"
          />
          {/* Mind Sparkle Core */}
          <circle cx="250" cy="185" r="10" fill="#F7F08A" opacity="0.8" />
          <circle cx="250" cy="185" r="5" fill="#FFFFFF" />
        </g>

        {/* ================= OPENED HEAD LID (Tilted Open Like a Box) ================= */}
        <g id="opened-lid" className="origin-[190px_180px] -rotate-12 transition-transform duration-500 hover:-rotate-16">
          {/* Hair Tufts on the Open Lid */}
          <path
            d="M185 175 C185 110 315 110 315 175 C315 178 300 182 250 182 C200 182 185 178 185 175 Z"
            fill="url(#hairGrad)"
            stroke="#161220"
            strokeWidth="4.5"
          />
          {/* Scalloped / Wavy Bangs on Lid Rim */}
          <path
            d="M190 165 Q205 175 220 166 Q235 176 250 166 Q265 176 280 166 Q295 176 310 166"
            stroke="#161220"
            strokeWidth="4"
            fill="none"
          />
          {/* Cute Pastel Hair Clip on the Lid */}
          <rect
            x="285"
            y="130"
            width="18"
            height="8"
            rx="4"
            transform="rotate(18 285 130)"
            fill="#F7F08A"
            stroke="#161220"
            strokeWidth="2.5"
          />
        </g>
      </svg>

      <style>{`
        @keyframes waveAnimation {
          0%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(-14deg);
          }
          75% {
            transform: rotate(10deg);
          }
        }
        .animate-wave {
          animation: waveAnimation 2.4s ease-in-out infinite;
        }

        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(3deg);
          }
        }
        .animate-float-slow {
          animation: floatSlow 4s ease-in-out infinite;
        }

        @keyframes floatReverse {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-8px) rotate(-3deg);
          }
        }
        .animate-float-reverse {
          animation: floatReverse 4.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

