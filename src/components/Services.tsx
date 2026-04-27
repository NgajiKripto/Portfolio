'use client';

import { motion } from 'framer-motion';
import { Monitor, Star, MapPin, ShoppingBag } from 'lucide-react';
import React, { useRef, useState } from 'react';

const services = [
  {
    title: 'Landing Page',
    description: 'Desain menarik dan modern untuk memikat pengunjung pertama Anda.',
    icon: 'Monitor',
  },
  {
    title: 'Google Maps SEO',
    description: 'Dominasi pencarian lokal dan datangkan lebih banyak pelanggan.',
    icon: 'MapPin',
  },
  {
    title: 'E-commerce',
    description: 'Bangun toko online yang fungsional dan mudah dikelola.',
    icon: 'ShoppingBag',
  },
  {
    title: 'Brand Identity',
    description: 'Ciptakan identitas merek yang kuat dan mudah diingat.',
    icon: 'Star',
  },
];

const iconMap = {
  Monitor,
  Star,
  MapPin,
  ShoppingBag,
};

const ServiceCard = ({ service, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    setRotate({ x: -y, y: x });
  };

  const onMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  const IconComponent = iconMap[service.icon];

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
      }}
      transition={{ type: 'spring', stiffness: 350, damping: 20 }}
      className="group relative h-full w-full overflow-hidden rounded-xl border border-border bg-card p-8"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-secondary/5 to-background opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      <div className="pointer-events-none absolute inset-0 -z-20 [background:radial-gradient(40%_50%_at_50%_50%,hsl(var(--primary)/0.1),transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
      
      <div className="relative z-10 flex-grow">
        <div className="mb-6">
          {IconComponent && <IconComponent className="h-12 w-12 text-primary" />}
        </div>
        <h3 className="mb-2 text-xl font-bold text-foreground">{service.title}</h3>
        <p className="text-muted-foreground">{service.description}</p>
      </div>
    </motion.div>
  );
};


const Services = () => {
  return (
    <section id="services" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">
            Layanan Kami
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Kami menyediakan solusi digital yang dirancang untuk pertumbuhan bisnis Anda.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
