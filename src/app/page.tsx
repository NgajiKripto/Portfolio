'use client';
import React from 'react';
import { InteractiveHero } from "@/components/ui/interactive-hero-backgrounds";

const HomePage = () => {
  return (
    <InteractiveHero
        brandName="21st"
        heroTitle="Interactive Hero Backgrounds"
        heroDescription="Engage users with dynamic, physics-based animations that respond to their every move. Built with React, Three.js, and shadcn/ui."
        emailPlaceholder="Enter your email"
        ballpitConfig={{
            count: 150,
            gravity: 0.5,
            friction: 0.99,
            minSize: 0.4,
            maxSize: 0.9,
            lightIntensity: 4,
        }}
    />
  );
};

export default HomePage;
