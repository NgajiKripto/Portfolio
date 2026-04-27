'use client';

import React from 'react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  return (
    <header className="bg-white/80 dark:bg-slate-950/80 backdrop-blur-md text-slate-700 dark:text-slate-300 font-manrope text-sm font-medium tracking-tight fixed top-0 w-full z-50 border-b border-slate-100 dark:border-slate-800/50 shadow-[0_4px_20px_-4px_rgba(42,78,110,0.08)]">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 h-20">
        <div className="text-xl font-bold tracking-tighter text-slate-900 dark:text-white">
          ElevateDigital
        </div>
        <nav className="hidden md:flex space-x-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className='flex items-center gap-4'>
            <Button className="hidden md:inline-flex bg-primary text-on-primary px-xl py-sm rounded-full font-label-sm text-label-sm hover:bg-primary-container hover:text-on-primary-container transition-colors duration-300 active:scale-95">
                Get Started
            </Button>
            <button className="md:hidden text-slate-900 dark:text-white">
                <span className="material-symbols-outlined">menu</span>
            </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
