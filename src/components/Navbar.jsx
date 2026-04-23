import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Facebook } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Le Parcours', href: '#thermal' },
    { name: 'Notre Histoire', href: '#heritage' },
    { name: 'Réservation', href: '#booking' },
    { name: 'Contact', href: '#contact' },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    opened: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const linkVariants = {
    closed: { opacity: 0, y: 40 },
    opened: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
      },
    }),
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${
          isScrolled || isMobileMenuOpen ? 'glass-nav py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative z-[110]"
          >
            <img 
              src="/logo.png" 
              alt="Le Sultan" 
              className={`h-20 md:h-24 w-auto object-contain transition-all duration-500 ${
                isScrolled || isMobileMenuOpen ? 'invert brightness-0 scale-90' : ''
              }`} 
            />
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link, idx) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="text-[10px] font-mono uppercase tracking-[0.3em] text-alabaster/70 hover:text-sultan-gold transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-sultan-gold transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-2 border border-sultan-gold text-sultan-gold text-[10px] font-mono uppercase tracking-widest hover:bg-sultan-gold hover:text-obsidian transition-all duration-500"
            >
              Réserver
            </motion.button>
          </div>

          {/* Luxury Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative z-[110] w-12 h-12 flex flex-col justify-center items-center gap-2 group"
          >
            <span className={`w-8 h-[1px] bg-alabaster transition-all duration-500 ${isMobileMenuOpen ? 'rotate-45 translate-y-[4.5px] bg-sultan-gold' : ''}`}></span>
            <span className={`w-8 h-[1px] bg-alabaster transition-all duration-500 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[4.5px] bg-sultan-gold' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Full-screen Luxury Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="opened"
            exit="closed"
            className="fixed inset-0 z-[90] bg-obsidian md:hidden flex flex-col pt-40 px-8 pb-12 overflow-hidden"
          >
            {/* Background Texture Overlay */}
            <div className="absolute inset-0 texture-overlay opacity-[0.05] pointer-events-none"></div>
            
            {/* Nav Links */}
            <div className="flex flex-col gap-8 flex-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  custom={i}
                  variants={linkVariants}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl font-serif text-alabaster hover:text-sultan-gold transition-colors relative inline-block"
                >
                  <span className="text-[10px] font-mono mr-4 text-sultan-gold/40">0{i + 1}</span>
                  {link.name}
                </motion.a>
              ))}
              
              <motion.div
                custom={navLinks.length}
                variants={linkVariants}
                className="mt-8"
              >
                <a href="#booking" onClick={() => setIsMobileMenuOpen(false)} className="btn-premium w-full flex justify-center text-sm py-6">
                  Confirmer Votre Ritual
                </a>
              </motion.div>
            </div>

            {/* Bottom Info Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-auto grid grid-cols-2 gap-8 pt-12 border-t border-alabaster/5"
            >
              <div className="space-y-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-sultan-gold">Contact</span>
                <p className="text-xs text-alabaster/60 leading-relaxed font-sans">
                  Sétif, Algérie<br />
                  05 52 46 23 62
                </p>
              </div>
              <div className="space-y-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-sultan-gold">Suivez-nous</span>
                <div className="flex gap-6 text-alabaster/60">
                  <Instagram size={18} />
                  <Facebook size={18} />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
