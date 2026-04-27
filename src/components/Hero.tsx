'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

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
    <section id="home" className="pt-40 pb-28 px-6 max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
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
            className="w-full md:w-1/2 space-y-6 text-center md:text-left"
        >
            <motion.h1 variants={FADE_UP_ANIMATION_VARIANTS} className="font-heading text-4xl md:text-5xl text-primary font-bold">
                Tingkatkan Bisnis Anda dengan Solusi Digital Terpadu
            </motion.h1>
            <motion.p variants={FADE_UP_ANIMATION_VARIANTS} className="font-body text-lg text-muted-foreground max-w-2xl mx-auto md:mx-0">
                Saya Raka Pratama, seorang Full-Stack Developer dan Digital Consultant yang berdedikasi membangun aplikasi web modern, cepat, dan terukur untuk mendorong pertumbuhan bisnis Anda ke level selanjutnya.
            </motion.p>
            <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
                <a href="#contact" onClick={scrollToContact}>
                    <Button size="lg" className="w-full sm:w-auto px-8 py-4 rounded-md text-sm tracking-wider uppercase">Konsultasi Gratis</Button>
                </a>
                <a href="#services">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto px-8 py-4 rounded-md text-sm tracking-wider uppercase">Lihat Layanan</Button>
                </a>
            </motion.div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full md:w-1/2 relative"
        >
            <div className="aspect-[4/3] rounded-lg bg-border/20 overflow-hidden border border-border/20 shadow-lg">
                <Image 
                    src="https://picsum.photos/seed/workspace/800/600" 
                    alt="Raka Pratama Workspace"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                    data-ai-hint="minimalist workspace"
                />
            </div>
        </motion.div>
    </section>
  );
};

export default Hero;
