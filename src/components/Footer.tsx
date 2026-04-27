import React from 'react';

const Footer = () => {
  const footerLinks = ['LinkedIn', 'Twitter', 'Instagram', 'Privasi', 'Ketentuan'];
  
  return (
    <footer className="bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-300 font-manrope text-xs uppercase tracking-widest w-full py-16 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-8 gap-8">
        <div className="text-lg font-bold text-slate-900 dark:text-white">Bichar Freelancer</div>
        <div className="flex flex-wrap justify-center gap-md">
          {footerLinks.map((link) => (
            <a key={link} className="text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white transition-opacity opacity-100 hover:opacity-80" href="#">
              {link}
            </a>
          ))}
        </div>
        <div className="text-slate-400 dark:text-slate-500 text-center md:text-right">
          © {new Date().getFullYear()} Bichar Freelancer. Hak cipta dilindungi undang-undang.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
