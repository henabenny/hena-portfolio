import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth trailing spring physics for outer ring
  const springConfig = { damping: 25, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only show custom cursor on devices with fine pointer (mouse)
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleHoverCheck = (e) => {
      const target = e.target.closest('a, button, [role="button"], input, textarea, .cursor-hover, .interactive-card');
      const viewCard = e.target.closest('[data-cursor="view"]');
      const henaTag = e.target.closest('[data-cursor="hena"]');

      if (viewCard) {
        setIsHovered(true);
        setCursorText('VIEW');
      } else if (henaTag) {
        setIsHovered(true);
        setCursorText('HENA');
      } else if (target) {
        setIsHovered(true);
        setCursorText('');
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleHoverCheck, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleHoverCheck);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Outer Follower Ring / Badge */}
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center rounded-full pointer-events-none"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: cursorText ? 64 : isHovered ? 48 : 34,
          height: cursorText ? 64 : isHovered ? 48 : 34,
          backgroundColor: cursorText
            ? '#F7F08A'
            : isHovered
            ? 'rgba(247, 240, 138, 0.25)'
            : 'rgba(185, 168, 240, 0.2)',
          borderColor: isHovered ? '#F7F08A' : 'rgba(242, 239, 234, 0.45)',
          borderWidth: cursorText ? 0 : 1.5,
          scale: isClicking ? 0.85 : 1,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      >
        {cursorText && (
          <span className="font-condensed font-bold text-xs tracking-wider text-[#261F36] uppercase select-none">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Center Precise Dot */}
      {!cursorText && (
        <motion.div
          className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none bg-[#F7F08A]"
          style={{
            x: mouseX,
            y: mouseY,
            translateX: '-50%',
            translateY: '-50%',
          }}
          animate={{
            scale: isHovered ? 0.4 : 1,
            opacity: isHovered ? 0.5 : 1,
          }}
          transition={{ duration: 0.1 }}
        />
      )}
    </div>
  );
}

