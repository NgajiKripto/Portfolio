import React from 'react';

const Footer = () => {
  const socialLinks = [
    { name: 'LinkedIn', href: '#' },
    { name: 'GitHub', href: '#' },
    { name: 'Twitter', href: '#' },
    { name: 'Email', href: 'mailto:hello@rakapratama.dev' },
  ];
  
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 w-full py-12 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-bold text-slate-900 dark:text-white font-heading text-sm opacity-80">
          © {new Date().getFullYear()} Raka Pratama. Digital Consultant.
        </div>
        <div className="flex space-x-6">
          {socialLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-slate-500 dark:text-slate-400 font-body text-sm transition-all hover:text-primary">
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
