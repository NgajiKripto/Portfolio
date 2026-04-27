'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { FloatingPaths } from '@/components/ui/floating-paths';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden max-w-container-max mx-auto px-gutter py-xxl md:py-[160px] flex flex-col items-center justify-center text-center"
    >
      <FloatingPaths position={1} color="rgba(15,23,42,0.1)" />
      <FloatingPaths position={-1} color="rgba(15,23,42,0.08)" />

      <div className="relative z-10 space-y-lg">
        <h1 className="font-headline-xl text-headline-xl text-on-surface">
          Tingkatkan Bisnis Anda dengan Solusi Digital Presisi.
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto">
          Kami merancang pengalaman digital tanpa kompromi yang mendorong pertumbuhan dan memberikan hasil.
        </p>
        
        <div className="flex flex-wrap gap-md pt-md justify-center">
          <Button className="bg-primary text-on-primary px-xl py-md rounded-full font-label-sm text-label-sm hover:bg-primary-container hover:text-on-primary-container transition-colors duration-300 shadow-[0_2px_10px_-2px_rgba(14,55,86,0.2)]">
            Mulai
          </Button>
          <Button
            variant="outline"
            className="bg-transparent text-primary border border-primary px-xl py-md rounded-full font-label-sm text-label-sm hover:bg-surface-container transition-colors duration-300"
          >
            Layanan Kami
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
