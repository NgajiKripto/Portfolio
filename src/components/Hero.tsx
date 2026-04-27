'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const Hero = () => {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-1');

  return (
    <section id="home" className="max-w-container-max mx-auto px-gutter py-xxl md:py-[120px] flex flex-col md:flex-row items-center gap-xxl">
      <div className="flex-1 space-y-lg">
        <h1 className="font-headline-xl text-headline-xl text-on-surface">Elevate Your Business with Precision Digital Solutions.</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          We engineer uncompromising digital experiences that drive growth and deliver results.
        </p>
        <div className="flex flex-wrap gap-md pt-md">
          <Button className="bg-primary text-on-primary px-xl py-md rounded-full font-label-sm text-label-sm hover:bg-primary-container hover:text-on-primary-container transition-colors duration-300 shadow-[0_2px_10px_-2px_rgba(14,55,86,0.2)]">
            Get Started
          </Button>
          <Button variant="outline" className="bg-transparent text-primary border border-primary px-xl py-md rounded-full font-label-sm text-label-sm hover:bg-surface-container transition-colors duration-300">
            Our Services
          </Button>
        </div>
      </div>
      <div className="flex-1 w-full relative">
        <div className="aspect-square rounded-xl bg-surface-container-high overflow-hidden shadow-[0_8px_30px_-4px_rgba(14,55,86,0.1)] relative">
          {heroImage && (
             <Image 
              alt={heroImage.description}
              className="object-cover w-full h-full mix-blend-overlay opacity-80"
              src={heroImage.imageUrl}
              fill
              data-ai-hint={heroImage.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
