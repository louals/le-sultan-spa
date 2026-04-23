import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Ban, Baby, Waves, CigaretteOff } from 'lucide-react';

const SectionRules = () => {
  const planning = [
    { title: 'Femmes', hours: '08:30 — 15:30', icon: Clock },
    { title: 'Hommes', hours: '17:00 — 00:00', icon: Clock },
  ];

  const rules = [
    { text: 'Maillot de bain obligatoire', icon: Waves },
    { text: 'Enfants de moins de 10 ans non autorisés', icon: Baby, forbidden: true },
    { text: 'Interdiction de fumer', icon: CigaretteOff, forbidden: true },
  ];

  return (
    <section className="bg-zinc-950 py-32 border-y border-alabaster/5">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          
          {/* Planning */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <span className="text-sultan-gold font-mono uppercase tracking-[0.4em] block mb-4">Horaires</span>
              <h2 className="text-5xl font-serif">Le Planning</h2>
            </div>
            
            <div className="space-y-6">
              {planning.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-8 bg-obsidian border border-alabaster/5 group hover:border-sultan-gold/30 transition-all duration-500">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-full border border-sultan-gold/20 flex items-center justify-center text-sultan-gold group-hover:bg-sultan-gold group-hover:text-obsidian transition-all">
                      <item.icon size={20} />
                    </div>
                    <span className="text-2xl font-serif">{item.title}</span>
                  </div>
                  <span className="text-xl font-mono text-sultan-gold">{item.hours}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Rules */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <span className="text-sultan-gold font-mono uppercase tracking-[0.4em] block mb-4">Consignes</span>
              <h2 className="text-5xl font-serif">L'Étiquette</h2>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {rules.map((rule, idx) => (
                <div key={idx} className="flex items-center gap-6 p-6 border border-alabaster/5 bg-obsidian/50">
                  <div className={`w-10 h-10 flex items-center justify-center ${rule.forbidden ? 'text-red-500/50' : 'text-sultan-gold'}`}>
                    <rule.icon size={24} strokeWidth={1.5} />
                  </div>
                  <p className="text-alabaster/60 font-sans tracking-wide uppercase text-[10px] md:text-xs">
                    {rule.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-8 border border-sultan-gold/10 bg-sultan-gold/5 rounded-sm">
                <p className="text-sultan-gold/80 italic font-serif text-center">
                    "Le respect de ces consignes garantit la sérénité et l'excellence de votre expérience au Sultan."
                </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SectionRules;
