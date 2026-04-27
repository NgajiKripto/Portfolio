'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 z-0 bg-background">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/70"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>

      <motion.div
        initial="hidden"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="relative z-10 container mx-auto px-4 md:px-6"
      >
        <motion.p variants={FADE_UP_ANIMATION_VARIANTS} className="font-body text-primary font-medium mb-4">
          Raka Pratama – Full-Stack Developer & Digital Consultant
        </motion.p>
        <motion.h1 
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground"
        >
          Tingkatkan Bisnis Anda dengan<br/>Solusi Digital Terpadu
        </motion.h1>
        <motion.p 
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground"
        >
          Saya merancang dan membangun pengalaman digital premium yang berorientasi pada hasil, membantu bisnis bertumbuh di era modern.
        </motion.p>
        <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="mt-8 flex justify-center">
            <a 
              href="#contact" 
              onClick={scrollToContact}
              className="group inline-flex items-center justify-center px-8 py-3 text-base font-medium text-primary-foreground bg-primary rounded-full hover:bg-accent transition-colors shadow-lg shadow-primary/20"
            >
              Konsultasi Gratis
            </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
