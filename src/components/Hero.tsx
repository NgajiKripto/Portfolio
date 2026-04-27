'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden pt-20 text-center">
      <div className="absolute inset-0 -z-10 bg-grid-pattern bg-grid-pattern [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <h1 className="text-4xl font-headline font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Solusi Digital Terpadu untuk Bisnis Anda
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
            Tingkatkan bisnis Anda dengan layanan pembuatan landing page, optimasi Google Maps, dan manajemen e-commerce profesional dari ElevateDigital.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg" asChild>
              <a href="#contact">
                Mulai Proyek <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#services">Lihat Layanan</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
