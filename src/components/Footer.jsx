import React, { useState, useEffect } from 'react';
import { personalData } from '../data';
import { Clock, Heart } from 'lucide-react';

export default function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      // Kerala Local Time (Asia/Kolkata, IST)
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      const formatter = new Intl.DateTimeFormat([], options);
      setTime(formatter.format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full bg-[#1A1425] text-[#D8CCE6] border-t-2 border-[#8E7CC3]/20 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Left: Branding & College */}
        <div>
          <div className="font-display font-bold text-lg text-[#F2EFEA] tracking-wider uppercase">
            {personalData.name}
          </div>
          <p className="font-condensed text-xs uppercase tracking-wider text-[#B9A8F0] mt-0.5">
            {personalData.footer.collegeLine}
          </p>
          <p className="font-sans text-[11px] text-[#D8CCE6]/60 mt-1">
            {personalData.footer.subline}
          </p>
        </div>

        {/* Center: Live Kerala IST Clock */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#261F36] border border-[#8E7CC3]/30 text-xs font-mono text-[#F7F08A]">
          <Clock size={14} className="text-[#F7F08A] animate-spin" style={{ animationDuration: '10s' }} />
          <span>KERALA, IN: {time || '14:35:00 PM'} (IST)</span>
        </div>

        {/* Right: Copyright */}
        <div className="text-xs font-sans text-[#D8CCE6]/80 flex items-center gap-1.5">
          <span>{personalData.footer.copyright}</span>
        </div>
      </div>
    </footer>
  );
}

