import React from 'react';
import { Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-secondary">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} ElevateDigital. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a href="#" className="text-muted-foreground transition-colors hover:text-foreground">
            <Twitter className="h-5 w-5" />
          </a>
          <a href="#" className="text-muted-foreground transition-colors hover:text-foreground">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="#" className="text-muted-foreground transition-colors hover:text-foreground">
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
