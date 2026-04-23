import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SectionThermal from './components/SectionThermal';
import SectionHeritage from './components/SectionHeritage';
import SectionRules from './components/SectionRules';
import BookingEngine from './components/BookingEngine';

import StickyBooking from './components/StickyBooking';
import SocialSidebar from './components/SocialSidebar';

function App() {
  // Smooth scroll initialization if needed
  useEffect(() => {
    // Add any global GSAP settings here
  }, []);

  return (
    <div className="relative selection:bg-sultan-gold selection:text-obsidian">
      <Navbar />
      
      <main>
        <Hero />
        <SectionThermal />
        <SectionHeritage />
        <SectionRules />
        <BookingEngine />
      </main>

      <footer className="bg-obsidian border-t border-alabaster/5 py-24 pb-32 md:pb-24">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-32 items-start">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img src="/logo.png" alt="Le Sultan Logo" className="h-60 w-auto object-contain filter" />
                
              </div>
              <p className="text-alabaster/40 font-sans text-sm leading-relaxed max-w-xs">
                L'élite du bien-être algérien. Une symphonie d'eau, de chaleur et de sérénité au cœur de la tradition.
              </p>
            </div>

            <div className="space-y-8">
              <h4 className="text-xs font-mono uppercase tracking-[0.4em] text-sultan-gold">L'Expérience</h4>
              <nav className="flex flex-col gap-4">
                {['Hammam', 'Sauna', 'Bain de Glace', 'Jacuzzi', 'Piscine'].map(item => (
                  <a key={item} href="#thermal" className="text-alabaster/60 hover:text-alabaster transition-colors text-lg font-serif">{item}</a>
                ))}
              </nav>
            </div>

            <div className="space-y-8">
                <h4 className="text-xs font-mono uppercase tracking-[0.4em] text-sultan-gold">Contact</h4>
                <div className="text-alabaster/60 font-serif text-lg space-y-2">
                    <p>Cité El Gasria, en face Université Ferhat Abbas, Sétif</p>
                    <p>05 52 46 23 62 / 030 80 28 99</p>
                    <p>contact@lesultan.dz</p>
                </div>
                <div className="pt-4 flex gap-6">
                    <a href="https://tr.ee/f1Zaka-f24" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-alabaster/10 flex items-center justify-center rounded-full hover:border-sultan-gold transition-colors cursor-pointer text-alabaster/40 hover:text-sultan-gold uppercase text-[8px] font-mono tracking-widest">IG</a>
                    <a href="https://tr.ee/EnOFbqyPO9" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-alabaster/10 flex items-center justify-center rounded-full hover:border-sultan-gold transition-colors cursor-pointer text-alabaster/40 hover:text-sultan-gold uppercase text-[8px] font-mono tracking-widest">TK</a>
                    <a href="https://www.facebook.com/share/1AG8sz9C1u/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-alabaster/10 flex items-center justify-center rounded-full hover:border-sultan-gold transition-colors cursor-pointer text-alabaster/40 hover:text-sultan-gold uppercase text-[8px] font-mono tracking-widest">FB</a>
                </div>
            </div>
          </div>
          
          <div className="mt-24 pt-8 border-t border-alabaster/5 flex flex-col md:flex-row justify-between gap-8">
            <p className="text-[10px] font-mono uppercase tracking-widest text-alabaster/20">
              © 2026 Le Sultan Spa & Hammam. Tous droits réservés.
            </p>
            <div className="flex gap-8">
              <a href="#" className="text-[10px] font-mono uppercase tracking-widest text-alabaster/20 hover:text-alabaster transition-colors">Politique de Confidentialité</a>
              <a href="#" className="text-[10px] font-mono uppercase tracking-widest text-alabaster/20 hover:text-alabaster transition-colors">Mentions Légales</a>
            </div>
          </div>
        </div>
      </footer>

  
      <SocialSidebar />
      <StickyBooking />
    </div>
  );
}

export default App;
