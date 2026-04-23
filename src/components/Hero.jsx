import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    // Parallax effect using GSAP
    gsap.to(videoRef.current, {
      y: '30%',
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    // Reveal logo on load
    gsap.fromTo(
      logoRef.current,
      { opacity: 0, scale: 0.8, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 1.5, ease: 'power4.out', delay: 0.5 }
    );
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background with texture overlay */}
      <div className="absolute inset-0 bg-obsidian">
        <div 
          ref={videoRef}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100 contrast-125"
          style={{ backgroundImage: "url('/hero.png')" }}
        >
          {/* Subtle Video Overlay if needed */}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/60 via-transparent to-obsidian"></div>
        <div className="absolute inset-0 texture-overlay"></div>
      </div>

      {/* Centered Logo & Content */}
      <div className="relative z-10 text-center">
        <div ref={logoRef} className="flex flex-col items-center justify-start pt-12 min-h-screen">
          <div className="w-48 h-48 md:w-64 md:h-64 flex items-center justify-center p-4 mb-8 relative">
            <img 
                src="/logo.png" 
                alt="Le Sultan Logo" 
                className="w-full h-full object-contain filter drop-shadow-2xl brightness-0 invert contrast-150" 
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 cursor-pointer"
      >
        
        
        <svg width="40" height="60" viewBox="0 0 40 60" className="mt-2">
            <path 
                d="M20 5 C 20 5, 5 15, 20 30 C 35 45, 20 55, 20 55" 
                fill="none" 
                stroke="#C5A059" 
                strokeWidth="1" 
                strokeDasharray="100"
                className="animate-[dash_3s_ease-in-out_infinite]"
            />
        </svg>
      </motion.div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes dash {
          0% { stroke-dashoffset: 200; opacity: 0; }
          50% { opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 0; }
        }
      `}} />
    </section>
  );
};

export default Hero;
