/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from 'react';
import { dockItems } from '../data';

export default function Dock() {
  const [showDock, setShowDock] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY) {
        setShowDock(false); // scrolling down
      } else {
        setShowDock(true); // scrolling up
      }
      
      setLastScrollY(currentScrollY <= 0 ? 0 : currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className={`fixed bottom-0 left-0 w-full flex justify-center pb-6 transition-all duration-300 z-50 ${showDock ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0 pointer-events-none'}`}>
      <div className="absolute bottom-0 left-0 w-full h-[100px] backdrop-blur-sm bg-black/10 -z-10 pointer-events-none [mask-image:linear-gradient(to_top,black,transparent)]" />
      
      <div className="flex gap-2 md:gap-4 p-3 bg-zinc-900/80 backdrop-blur-md border border-zinc-800 rounded-2xl shadow-xl shadow-black/50">
        {dockItems.map((item, idx) => (
          <a 
            key={idx} 
            href={item.href}
            className="flex flex-col items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-xl hover:bg-white/10 transition-colors group relative"
          >
            {/* Tooltip */}
            <span className="absolute -top-12 bg-zinc-800 border border-zinc-700 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg">
              {item.label}
            </span>
            <img src={item.icon} alt={item.label} className="w-8 h-8 md:w-10 md:h-10 svg-white group-hover:scale-110 transition-transform" />
          </a>
        ))}
      </div>
    </div>
  );
}
