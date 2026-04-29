'use client';

import { Button } from './ui/button';
import ProfileCard from './ProfileCard';
import SplitText from './ui/SplitText';
import TextType from '@/components/ui/TextType';
import ShinyText from '@/components/ui/ShinyText';
import Particles from './Particles';

const Hero = () => {
  const scrollToContact = (e?: React.MouseEvent<HTMLAnchorElement>) => {
    e?.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleCardContactClick = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  }
  
  const descriptionText = "Tingkatkan omzet dengan solusi digital terintegrasi. Kami tangani pembuatan website, Local SEO, hingga manajemen marketplace dalam satu pintu.";

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center bg-black px-6 py-20 md:flex-row md:justify-between md:px-12 md:py-0"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <Particles
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          alphaParticles={true}
          particleBaseSize={80}
          sizeRandomness={1}
          moveParticlesOnHover={false}
          disableRotation={false}
        />
      </div>
      <div className="relative z-10 flex w-full flex-col items-center text-center md:w-1/2 md:items-start md:text-left">
        <div>
          <SplitText
            tag="h1"
            text="Bichar Digital Marketer"
            className="font-heading text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl"
            splitType="words"
            textAlign="inherit"
          />
        </div>
        <TextType
            as="p"
            text={descriptionText}
            className="mx-auto mt-6 max-w-2xl text-lg text-gray-300 md:mx-0"
            typingSpeed={20}
            initialDelay={1000}
            loop={false}
            showCursor={true}
        />
        <div className="mt-8 hidden md:flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="#contact" onClick={scrollToContact}>
            <Button size="lg" className="w-full sm:w-auto">
              <ShinyText text="Konsultasi Gratis" color="hsl(var(--primary-foreground))" shineColor="hsl(var(--accent))" />
            </Button>
          </a>
        </div>
      </div>
       <div className="relative flex h-auto w-full items-center justify-center py-12 md:h-screen md:w-1/2 md:py-0">
        <ProfileCard 
          name="Bichar"
          title="Full-Stack Developer"
          handle="bichar"
          avatarUrl="https://picsum.photos/seed/raka1/400/400"
          miniAvatarUrl="https://picsum.photos/seed/raka2/100/100"
          status="Available for projects"
          contactText="Hubungi Saya"
          onContactClick={handleCardContactClick}
        />
      </div>
      <div className="mt-4 flex w-full flex-col items-center justify-center gap-4 md:hidden">
        <a href="#contact" onClick={scrollToContact}>
          <Button size="lg" className="w-full sm:w-auto">
            <ShinyText text="Konsultasi Gratis" color="hsl(var(--primary-foreground))" shineColor="hsl(var(--accent))" />
          </Button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
