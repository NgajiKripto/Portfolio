'use client';

import { Button } from './ui/button';
import { BlurText } from './ui/blur-text';
import { GridScan } from './GridScan';

const Hero = () => {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-20 text-center"
    >
      <GridScan
        linesColor="#170C79"
        scanColor="#FF4081"
        lineThickness={1.5}
        gridScale={0.15}
        scanOpacity={0.2}
        bloomIntensity={0.5}
        chromaticAberration={0.01}
        scanGlow={0.7}
        lineJitter={0.05}
      />
      <div className="relative z-10">
        <div>
          <BlurText
            text="Solusi Digital Inovatif untuk Bisnis Anda"
            className="font-display text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl"
            animateBy="words"
          />
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Saya Raka Pratama, seorang Full-Stack Developer & Digital
          Consultant. Saya merancang dan membangun aplikasi web modern yang
          cepat, fungsional, dan menawan untuk mendorong pertumbuhan bisnis
          Anda.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="#contact" onClick={scrollToContact}>
            <Button size="lg" className="w-full sm:w-auto">
              Konsultasi Gratis
            </Button>
          </a>
          <a href="#services">
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Lihat Layanan
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
