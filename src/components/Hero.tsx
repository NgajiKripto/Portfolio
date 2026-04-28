'use client';

import { Button } from './ui/button';
import ProfileCard from './ProfileCard';
import SplitText from './ui/SplitText';
import TextType from '@/components/ui/TextType';

const Hero = () => {
  const scrollToContact = (e?: React.MouseEvent<HTMLAnchorElement>) => {
    e?.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleCardContactClick = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  }
  
  const descriptionText = "Saya Raka Pratama, seorang Full-Stack Developer & Digital Consultant. Saya merancang dan membangun aplikasi web modern yang cepat, fungsional, dan menawan untuk mendorong pertumbuhan bisnis Anda.";

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center bg-white px-6 py-20 md:flex-row md:justify-between md:px-12 md:py-0"
    >
      <div className="relative z-10 flex w-full flex-col items-center text-center md:w-1/2 md:items-start md:text-left">
        <div>
          <SplitText
            tag="h1"
            text="Solusi Digital Inovatif untuk Bisnis Anda"
            className="font-heading text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl"
            splitType="words"
            textAlign="inherit"
          />
        </div>
        <TextType
            as="p"
            text={descriptionText}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:mx-0"
            typingSpeed={20}
            initialDelay={1000}
            loop={false}
            showCursor={true}
        />
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="#contact" onClick={scrollToContact}>
            <Button size="lg" className="w-full sm:w-auto">
              Konsultasi Gratis
            </Button>
          </a>
        </div>
      </div>
       <div className="relative flex h-auto w-full items-center justify-center py-12 md:h-screen md:w-1/2 md:py-0">
        <ProfileCard 
          name="Raka Pratama"
          title="Full-Stack Developer"
          handle="rakapratama"
          avatarUrl="https://picsum.photos/seed/raka1/400/400"
          miniAvatarUrl="https://picsum.photos/seed/raka2/100/100"
          status="Available for projects"
          contactText="Hubungi Saya"
          onContactClick={handleCardContactClick}
        />
      </div>
    </section>
  );
};

export default Hero;
