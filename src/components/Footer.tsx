'use client';

import { motion } from 'framer-motion';
import { Twitter, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <motion.footer
      className="w-full py-8 bg-secondary"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-foreground/60 mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} ElevateDigital. All rights reserved.
        </p>
        <div className="flex items-center space-x-6">
          <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
            <Twitter size={20} />
          </a>
          <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
            <Github size={20} />
          </a>
          <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
