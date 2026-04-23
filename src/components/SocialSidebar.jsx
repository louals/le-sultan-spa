import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Video } from 'lucide-react';

const SocialSidebar = () => {
  const socials = [
    { 
      name: 'Instagram', 
      icon: Instagram, 
      href: 'https://tr.ee/f1Zaka-f24' 
    },
    { 
      name: 'TikTok', 
      icon: (props) => (
        <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
        </svg>
      ), 
      href: 'https://tr.ee/EnOFbqyPO9' 
    },
    { 
      name: 'Facebook', 
      icon: Facebook, 
      href: 'https://www.facebook.com/share/1AG8sz9C1u/?mibextid=wwXIfr' 
    },
  ];

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-[100] hidden lg:flex flex-col gap-8 items-center">
      <div className="w-px h-24 bg-gradient-to-b from-transparent via-sultan-gold/50 to-sultan-gold/50"></div>
      
      {socials.map((social, idx) => (
        <motion.a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 + idx * 0.1 }}
          whileHover={{ scale: 1.2, color: '#C5A059' }}
          className="text-alabaster/40 hover:text-sultan-gold transition-colors duration-300"
        >
          <social.icon size={20} />
        </motion.a>
      ))}

      <div className="w-px h-24 bg-gradient-to-t from-transparent via-sultan-gold/50 to-sultan-gold/50"></div>
    </div>
  );
};

export default SocialSidebar;
