import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Wind, Thermometer, Snowflake, Waves, Droplets, Video, RockingChair } from 'lucide-react';
// Assets
import hammam from '/services/hammam.png';
import sauna from '/services/sauna.png';
import ice from '/services/ice-plunge.png';
import jacuzzi from '/services/jacuzzi.png';
import pool from '/services/pool.png';
import electricMassage from '/services/electric-massage.png';
import salledecinema from '/services/salle-de-cinema.png';


gsap.registerPlugin(ScrollTrigger);

const amenities = [
  {
    id: 'hammam',
    title: 'Le Hammam',
    description: "Immersion dans la tradition séculaire. Vapeur d'eucalyptus et marbre chaud.",
    icon: Wind,
    image: hammam,
  },
  {
    id: 'sauna',
    title: 'Le Sauna',
    description: 'Chaleur sèche et purifiante. Essences de bois précieux et silence absolu.',
    icon: Thermometer,
    image: sauna,
  },
  {
    id: 'ice',
    title: 'Bain de Glace',
    description: 'Le choc thermique régénérateur. Cryothérapie et biohacking de pointe.',
    icon: Snowflake,
    image: ice,
  },
  {
    id: 'jacuzzi',
    title: 'Le Jacuzzi',
    description: 'Relâchement total. Hydro-massage et bulles de sérénité.',
    icon: Droplets,
    image: jacuzzi,
  },
  {
    id: 'pool',
    title: 'La Piscine',
    description: 'Architecture symétrique et profondeur. Nagez dans un temple de marbre.',
    icon: Waves,
    image: pool,
  },
  {
    id: 'salle-de-cinema',
    title: 'Salle de Cinéma',
    description: 'Une expérience immersive pour les cinéphiles.',
    icon: Video,
    image: salledecinema,
  },
  {
    id: 'electric-massage',
    title: 'Massage Électrique',
    description: 'Un massage relaxant pour soulager les tensions musculaires.',
    icon: RockingChair,
    image: electricMassage,
  },
];

const SectionThermal = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;

    // The logic: total width of the moving container minus the width of the screen
    // This provides the exact distance the container needs to travel left.
    const getScrollAmount = () => {
      let contentWidth = container.scrollWidth;
      return -(contentWidth - window.innerWidth);
    };

    let ctx = gsap.context(() => {
      gsap.to(container, {
        x: getScrollAmount,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1,
          start: 'top top',
          // 'end' determines how long the user has to scroll vertically
          // to complete the horizontal move. 
          end: () => `+=${container.offsetWidth}`,
          invalidateOnRefresh: true, // Recalculates if window is resized
          anticipatePin: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div id="thermal" ref={sectionRef} className="bg-obsidian overflow-hidden">
      <div className="h-screen flex items-center">
        <div 
          ref={containerRef} 
          // Added pr-[10vw] to match px-[10vw] so the end has the same spacing as the start
          className="flex px-[10vw] pr-[10vw] gap-[5vw] h-[70vh] items-center"
        >
          {/* Header Card */}
          <div className="flex-shrink-0 w-[400px] flex flex-col justify-center">
            <span className="text-sultan-gold font-mono uppercase tracking-[0.4em] mb-4">
              Le Parcours
            </span>
            <h2 className="text-6xl md:text-8xl font-serif mb-6 leading-tight">
              Les Sept<br />Merveilles
            </h2>
            <p className="text-alabaster/60 font-sans tracking-wide leading-relaxed">
              Un voyage sensoriel conçu pour l'équilibre du corps et de l'esprit.
              Chaque étape est un rituel de renaissance.
            </p>
          </div>

          {/* Amenity Cards */}
          {amenities.map((item) => (
            <div 
              key={item.id} 
              className="flex-shrink-0 w-[80vw] md:w-[600px] h-full relative group overflow-hidden bg-zinc-900 border border-alabaster/5"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[800ms] ease-out group-hover:scale-110 grayscale-5 group-hover:grayscale-0 opacity-40 group-hover:opacity-70"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent"></div>

              <div className="absolute inset-0 p-12 flex flex-col justify-end">
                <item.icon 
                  className="text-sultan-gold mb-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0" 
                  size={40} 
                  strokeWidth={1} 
                />
                <h3 className="text-4xl font-serif mb-4 transform transition-transform duration-500 group-hover:-translate-y-2">
                  {item.title}
                </h3>
                <p className="text-alabaster/60 text-sm max-w-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  {item.description}
                </p>
                <div className="mt-8 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                  <div className="h-[1px] w-12 bg-sultan-gold"></div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-sultan-gold">
                    Découvrir le rituel
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionThermal;