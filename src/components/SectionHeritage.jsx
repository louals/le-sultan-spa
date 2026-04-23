import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const DURATION = 10000; // Duration for the progress bar cycle
const TICK = 50;

const SectionHeritage = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + (TICK / DURATION) * 100;
      });
    }, TICK);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="heritage" className="bg-obsidian py-32 relative overflow-hidden">
      {/* Background SVG Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="zellij" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="none" stroke="#C5A059" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="10" fill="none" stroke="#C5A059" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#zellij)" />
        </svg>
      </div>

      <div className="section-container relative z-10 flex flex-col md:flex-row items-center gap-16">

        {/* ── LEFT: Text ── */}
        <div className="flex-1">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-sultan-gold font-mono uppercase tracking-[0.4em] block mb-4"
          >
            Notre Histoire
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-serif mb-8 text-white"
          >
            L'héritage d'un<br /><span className="italic text-sultan-gold">Art de Vivre</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="space-y-6 text-alabaster/70 font-sans leading-relaxed text-lg"
          >
            <p>
              Le Sultan redéfinit l'art de la détente. Plus qu'un spa, c'est un sanctuaire minimaliste conçu pour suspendre le temps, où chaque détail a été pensé pour apaiser l'esprit et revitaliser le corps.
            </p>
            <p>
             Nous transformons le bien-être en une expérience immersive et sur-mesure
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12 flex items-center gap-12"
          >
            <div>

              <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">Racines Traditionnelles</span>
            </div>
            <div className="w-[1px] h-10 bg-white/10" />
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">Excellence Moderne</span>
            </div>
          </motion.div>
        </div>

        {/* ── RIGHT: Video Player ── */}
        <div className="flex-1 relative self-start w-full">
          <div className="w-full h-[700px] bg-zinc-900 border border-white/5 relative overflow-hidden group shadow-2xl">
            
            {/* The Video Element */}
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] scale-110 group-hover:scale-100"
            >
              <source src="/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Subtle Dark Overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
            
          </div>

          {/* Floating Logo Seal */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="absolute -bottom-10 -left-10 w-44 h-44 border border-sultan-gold/30 flex items-center justify-center p-6 bg-obsidian z-20 shadow-xl"
          >
            <img src="/logo.png" alt="Sultan Seal" className="w-full h-full object-contain" />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default SectionHeritage;