'use client';

import React, { useState, useEffect } from 'react';
import PillNav from '@/components/PillNav';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Preloader from '@/components/Preloader';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.querySelector(link.href));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i] as HTMLElement;
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Preloader onComplete={() => setLoaded(true)} />
      {loaded && (
        <>
          <PillNav
            items={navLinks}
            activeHref={`#${activeSection}`}
            baseColor="hsl(var(--primary))"
            pillColor="hsl(var(--primary-foreground))"
            hoveredPillTextColor="hsl(var(--primary-foreground))"
            pillTextColor="hsl(var(--primary))"
          />
          <main>
            <Hero />
            <Services />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
