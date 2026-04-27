'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Beranda', href: '#home' },
  { label: 'Layanan', href: '#services' },
  { label: 'Testimoni', href: '#testimonials' },
  { label: 'Kontak', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };


  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"
    )}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="font-heading font-bold text-xl tracking-tight">
          Raka<span className="text-primary">.</span>
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={(e) => scrollToSection(e, link.href)} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="hidden md:inline-flex items-center justify-center px-6 py-2 text-sm font-medium text-primary-foreground bg-primary rounded-full hover:bg-accent transition-colors">
            Mulai Proyek
          </a>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-muted-foreground hover:text-foreground">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.2 }}
        className={cn("md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-lg border-b border-border shadow-lg", {
          'block': isMenuOpen,
          'hidden': !isMenuOpen
        })}
      >
        <nav className="flex flex-col items-center gap-4 p-8">
            {navLinks.map((link) => (
                <a key={link.label} href={link.href} onClick={(e) => scrollToSection(e, link.href)} className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                    {link.label}
                </a>
            ))}
            <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="mt-4 inline-flex items-center justify-center px-8 py-3 text-base font-medium text-primary-foreground bg-primary rounded-full hover:bg-accent transition-colors">
              Mulai Proyek
            </a>
        </nav>
      </motion.div>
    </header>
  );
};

export default Navbar;
