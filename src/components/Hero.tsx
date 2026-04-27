'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('kontak')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="beranda" className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden">
      {/* Abstract Background Shapes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full filter blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/30 rounded-full filter blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
          delay: 5,
        }}
      />

      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <motion.h1
          className="font-headline text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Tingkatkan Bisnis Anda
          <br />
          <span className="text-primary">dengan Solusi Digital Terpadu.</span>
        </motion.h1>
        <motion.p
          className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-foreground/70"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          Kami mengubah ide menjadi kenyataan digital yang profesional, cepat, dan berdampak tinggi.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="mt-10"
        >
          <Button
            onClick={scrollToContact}
            size="lg"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-primary-foreground overflow-hidden bg-primary rounded-full transition-all duration-300 ease-out transform hover:scale-105"
          >
            <span className="relative">Konsultasi Gratis</span>
          </Button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="h-6 w-6 text-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
