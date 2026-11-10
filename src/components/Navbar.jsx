import React, { useState, useEffect } from 'react';
import { personalData } from '../data';
import { soundManager } from '../utils/sound';
import { Menu, X } from 'lucide-react';

export default function Navbar({ activeSection = 'hero' }) {
  const [isAudioOn, setIsAudioOn] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const active = soundManager.toggleSound((state) => setIsAudioOn(state));
    setIsAudioOn(active);
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    soundManager.playPop();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#3B3355]/85 backdrop-blur-md border-b border-[#8E7CC3]/20 shadow-lg'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Name Logo & Status Pill */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="group font-pinyon text-2xl sm:text-3xl text-[#F2EFEA] hover:text-[#F7F08A] transition-colors flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F7F08A] rounded"
          >
            <span>{personalData.name}</span>
          </a>

          {/* Pill Badge with pulsing green dot */}
          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3B3355]/60 border border-[#8E7CC3]/40 text-[#D8CCE6] text-xs font-condensed tracking-wider uppercase backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span className="hidden md:inline">{personalData.headlineBadge}</span>
            <span className="md:hidden">Available</span>
          </div>
        </div>

        {/* Right: Sound toggle and Nav links */}
        <div className="flex items-center gap-4 sm:gap-7">
          {/* Sound Toggle Button with Animated Equalizer */}
          <button
            onClick={handleSoundToggle}
            type="button"
            aria-label={isAudioOn ? 'Mute ambient sound' : 'Enable ambient sound'}
            className="group flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#8E7CC3]/40 hover:border-[#F7F08A] bg-[#3B3355]/40 hover:bg-[#3B3355]/80 transition-all text-xs font-condensed tracking-wider text-[#F2EFEA] hover:text-[#F7F08A] cursor-pointer"
          >
            {/* Equalizer Bars */}
            <div className="flex items-end gap-[2px] h-3 w-3.5">
              <span
                className={`w-[2.5px] rounded-full bg-current transition-all ${
                  isAudioOn ? 'h-3 animate-pulse' : 'h-1'
                }`}
              />
              <span
                className={`w-[2.5px] rounded-full bg-current transition-all ${
                  isAudioOn ? 'h-2 animate-bounce' : 'h-2.5'
                }`}
                style={{ animationDelay: '0.15s' }}
              />
              <span
                className={`w-[2.5px] rounded-full bg-current transition-all ${
                  isAudioOn ? 'h-3.5 animate-pulse' : 'h-1.5'
                }`}
                style={{ animationDelay: '0.3s' }}
              />
            </div>
            <span>{isAudioOn ? 'SOUND ON' : 'SOUND OFF'}</span>
          </button>

          {/* Desktop Nav Links */}
          <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-6 lg:gap-8">
            {personalData.navLinks.map((link) => {
              const isCurrent = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative font-condensed tracking-widest text-sm lg:text-base font-semibold uppercase transition-colors py-1 ${
                    isCurrent ? 'text-[#F7F08A]' : 'text-[#F2EFEA]/80 hover:text-[#F2EFEA]'
                  }`}
                >
                  {link.name}
                  {/* Underline hover & active indicator */}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-[#F7F08A] transition-all duration-300 ${
                      isCurrent ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => {
              soundManager.playPop();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            type="button"
            className="md:hidden p-2 rounded-lg text-[#F2EFEA] hover:text-[#F7F08A] hover:bg-[#3B3355]/50 transition-colors"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] bg-[#3B3355]/95 backdrop-blur-xl border-b border-[#8E7CC3]/30 px-6 py-6 shadow-2xl transition-all">
          <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#261F36] border border-[#8E7CC3]/40 text-[#D8CCE6] text-xs font-condensed tracking-wider uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span>{personalData.headlineBadge}</span>
          </div>

          <nav className="flex flex-col gap-4">
            {personalData.navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-condensed font-bold tracking-widest text-lg text-[#F2EFEA] hover:text-[#F7F08A] py-2 border-b border-[#8E7CC3]/15 transition-colors uppercase"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

