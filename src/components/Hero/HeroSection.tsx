"use client";
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrambleTextPlugin, InertiaPlugin } from 'gsap/all';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrambleTextPlugin, InertiaPlugin);

const HeroSection: React.FC = () => {
  useEffect(() => {
    // GSAP ScrambleText animation for heading
    gsap.to('.hero-heading span', {
      duration: 2,
      scrambleText: { text: 'Transforming ideas into reality', chars: '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()', revealDelay: 0.2 },
      ease: "power4.out",
      stagger: 0.1
    });

    // GSAP animation for subheading
    gsap.from('.hero-subheading', {
      duration: 1.2,
      x: -300,
      delay: 0.5,
      ease: "power4.out",
      stagger: 0.3
    });

    // GSAP Inertia animation for buttons
    gsap.from('.button-wrapper', {
      x: -100,
      duration: 1.2,
      ease: "power4.out",
      stagger: 0.3
    });
  }, []);

  // WhatsApp click handler
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/916352191174', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="relative h-screen flex flex-col justify-center items-start pl-16 bg-cover bg-center bg-no-repeat overflow-hidden"
         style={{ backgroundImage: 'url("/Images/BG/hero img.jpg")' }}>
      <div className="relative z-10">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white hero-heading"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {Array.from('Transforming ideas into reality').map((char, index) => (
            <span key={index} style={{ display: 'inline-block' }}>{char}</span>
          ))}
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl lg:text-3xl text-white mt-40 md:mt-28 hero-subheading"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1 }}
        >
          Unlock Free Hosting and Domain with Every Project!
        </motion.p>
        <div className="button-wrapper">
          <button
            onClick={handleWhatsAppClick}
            className="relative text-lg md:text-xl lg:text-2xl flex items-center px-7  py-3 md:px-16 md:py-4 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group ml-10 mt-8"
          >
            <span
              className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4"
            >
              <span
                className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
              ></span>
            </span>
            <span
              className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4"
            >
              <span
                className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"
              ></span>
            </span>
            <span
              className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"
            ></span>
            <span
              className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white"
            >
              Try now &#8599;
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
