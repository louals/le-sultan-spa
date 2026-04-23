import React from 'react';
import { motion } from 'framer-motion';

const StickyBooking = () => {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 2, duration: 1, ease: 'backOut' }}
      className="fixed bottom-0 left-0 w-full p-4 z-[45] md:hidden"
    >
      <a 
        href="#booking"
        className="w-full bg-sultan-gold text-obsidian font-mono uppercase tracking-[0.3em] py-5 px-6 flex items-center justify-center text-sm font-bold shadow-[0_-10px_40px_rgba(0,0,0,0.5)] rounded-t-2xl"
      >
        Réserver Mon Expérience
      </a>
    </motion.div>
  );
};

export default StickyBooking;
