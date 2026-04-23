import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, User, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';

const BookingEngine = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    service: '',
    guests: 1
  });

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const steps = [
    { id: 1, title: 'Choisir le Rituel', icon: CheckCircle2 },
    { id: 2, title: 'Date & Heure', icon: Calendar },
    { id: 3, title: 'Confirmation', icon: User },
  ];

  return (
    <section id="booking" className="bg-alabaster text-obsidian py-32">
      <div className="section-container max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-sultan-gold font-mono uppercase tracking-[0.4em] block mb-4">Réservation</span>
          <h2 className="text-5xl md:text-7xl font-serif mb-6 text-obsidian">Réservez Votre Ritual</h2>
          <p className="text-obsidian/60 max-w-lg mx-auto">Une expérience sur-mesure commence ici. Choisissez vos préférences pour un moment d'exception.</p>
        </div>

        {/* Progress Tracker */}
        <div className="flex justify-between items-center mb-16 px-4">
          {steps.map((s, idx) => (
            <div key={s.id} className="flex items-center gap-4 group">
              <div className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-500 ${
                step >= s.id ? 'bg-obsidian border-obsidian text-alabaster' : 'border-obsidian/20 text-obsidian/40'
              }`}>
                {step > s.id ? <CheckCircle2 size={20} /> : <span>{s.id}</span>}
              </div>
              <span className={`text-[10px] font-mono uppercase tracking-widest hidden md:block ${
                step >= s.id ? 'text-obsidian' : 'text-obsidian/40'
              }`}>{s.title}</span>
              {idx < steps.length - 1 && <div className="w-12 h-[1px] bg-obsidian/10 hidden md:block"></div>}
            </div>
          ))}
        </div>

        {/* Form Content */}
        <div className="min-h-[400px] relative">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {['Hammam Impérial', 'Sauna Royal', 'Circuit Complet', 'Expérience Duo'].map(service => (
                  <button
                    key={service}
                    onClick={() => { setFormData({...formData, service}); nextStep(); }}
                    className={`p-8 border text-left transition-all duration-500 hover:border-obsidian group ${
                      formData.service === service ? 'bg-obsidian text-alabaster border-obsidian' : 'border-obsidian/10 bg-white'
                    }`}
                  >
                    <span className="text-xs font-mono uppercase tracking-widest opacity-40 mb-2 block">Prestation</span>
                    <h3 className="text-2xl font-serif">{service}</h3>
                  </button>
                ))}
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <label className="text-xs font-mono uppercase tracking-widest opacity-60">Date</label>
                    <input 
                      type="date" 
                      className="w-full p-4 border border-obsidian/10 bg-white focus:outline-none focus:border-obsidian transition-all"
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-xs font-mono uppercase tracking-widest opacity-60">Heure</label>
                    <select 
                      className="w-full p-4 border border-obsidian/10 bg-white focus:outline-none focus:border-obsidian transition-all"
                      onChange={(e) => setFormData({...formData, time: e.target.value})}
                    >
                      <option>Choisir l'heure</option>
                      <option>10:00</option>
                      <option>14:00</option>
                      <option>18:00</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-between pt-8">
                  <button onClick={prevStep} className="flex items-center gap-2 text-obsidian/60 hover:text-obsidian transition-colors">
                    <ArrowLeft size={16} />
                    <span className="text-xs font-mono uppercase tracking-widest">Retour</span>
                  </button>
                  <button onClick={nextStep} className="btn-premium flex items-center gap-4">
                    Suivant <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="text-center bg-white p-12 border border-obsidian/5"
              >
                <div className="w-20 h-20 bg-sultan-emerald/10 text-sultan-emerald rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-4xl font-serif mb-4 text-obsidian">Prêt pour votre rituel ?</h3>
                <p className="text-obsidian/60 mb-8 max-w-sm mx-auto">
                  Vous avez choisi le <span className="text-obsidian font-bold">{formData.service}</span> pour le <span className="text-obsidian font-bold">{formData.date}</span>.
                </p>
                <button className="btn-premium w-full md:w-auto">Confirmer Votre Ritual</button>
                <button onClick={() => setStep(1)} className="block mx-auto mt-8 text-xs font-mono uppercase tracking-widest text-obsidian/40 hover:text-obsidian transition-colors">
                  Modifier les informations
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default BookingEngine;
