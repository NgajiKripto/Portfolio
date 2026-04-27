'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
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
  
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };


  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      isScrolled ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-lg" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold tracking-tighter text-slate-900 dark:text-slate-50 font-heading">
          Raka Pratama
        </a>
        
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              onClick={(e) => scrollToSection(e, link.href)} 
              className={cn(
                "text-slate-500 dark:text-slate-400 font-medium transition-colors duration-200 font-body pb-1 hover:text-primary",
                activeSection === link.href.substring(1) ? 'text-primary border-b-2 border-primary' : ''
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild className="px-6 py-3 rounded-md text-xs uppercase tracking-wider">
            <a href="#contact">Work with Me</a>
          </Button>
        </div>

        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-foreground">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
         <div className="md:hidden bg-card border-t border-border shadow-lg">
            <nav className="flex flex-col items-center gap-4 p-8">
                {navLinks.map((link) => (
                    <a key={link.label} href={link.href} onClick={(e) => scrollToSection(e, link.href)} className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                        {link.label}
                    </a>
                ))}
                <Button asChild className="mt-4 w-full">
                  <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>Work with Me</a>
                </Button>
            </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
