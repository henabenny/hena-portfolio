import React, { createContext, useContext, useState, useEffect } from 'react';

export const FONT_OPTIONS = [
  {
    id: 'pinyon',
    name: 'Pinyon Script',
    bodyClass: 'font-pinyon',
    headingClass: 'font-pinyon',
    className: 'font-pinyon',
    letterSpacing: 'tracking-normal',
    isScript: true,
  },
  {
    id: 'italiana',
    name: 'Italiana',
    bodyClass: 'font-display',
    headingClass: 'font-display',
    className: 'font-display',
    letterSpacing: 'tracking-widest',
    isScript: false,
  },
  {
    id: 'syne',
    name: 'Syne',
    bodyClass: 'font-syne',
    headingClass: 'font-syne',
    className: 'font-syne font-bold',
    letterSpacing: 'tracking-wider',
    isScript: false,
  },
  {
    id: 'cinzel',
    name: 'Cinzel',
    bodyClass: 'font-cinzel',
    headingClass: 'font-cinzel',
    className: 'font-cinzel font-semibold',
    letterSpacing: 'tracking-widest',
    isScript: false,
  },
  {
    id: 'space',
    name: 'Space Grotesk',
    bodyClass: 'font-space',
    headingClass: 'font-space',
    className: 'font-space font-bold',
    letterSpacing: 'tracking-normal',
    isScript: false,
  },
  {
    id: 'condensed',
    name: 'Barlow',
    bodyClass: 'font-condensed',
    headingClass: 'font-condensed',
    className: 'font-condensed font-extrabold',
    letterSpacing: 'tracking-wider',
    isScript: false,
  },
];

const FontContext = createContext(null);

export function FontProvider({ children }) {
  const [selectedFont, setSelectedFont] = useState(() => {
    const saved = localStorage.getItem('hena_site_font');
    return FONT_OPTIONS.some((f) => f.id === saved) ? saved : 'pinyon';
  });

  const currentFont = FONT_OPTIONS.find((f) => f.id === selectedFont) || FONT_OPTIONS[0];

  const handleFontChange = (fontId) => {
    setSelectedFont(fontId);
    localStorage.setItem('hena_site_font', fontId);
  };

  // Apply font class to <html> element so the entire page inherits it
  useEffect(() => {
    const root = document.documentElement;
    // Remove all previous font body classes
    FONT_OPTIONS.forEach((f) => {
      root.classList.remove(f.bodyClass);
    });
    // Add the new font class
    root.classList.add(currentFont.bodyClass);
    // Also set a data attribute for CSS targeting
    root.setAttribute('data-font', selectedFont);
  }, [selectedFont, currentFont.bodyClass]);

  return (
    <FontContext.Provider value={{ selectedFont, currentFont, handleFontChange, FONT_OPTIONS }}>
      {children}
    </FontContext.Provider>
  );
}

export function useFont() {
  const ctx = useContext(FontContext);
  if (!ctx) throw new Error('useFont must be used within FontProvider');
  return ctx;
}
