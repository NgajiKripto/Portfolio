'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Star, MapPin, ShoppingBag, ArrowRight } from 'lucide-react';
import { services } from '@/data/services';

const iconMap = {
  'Bikin Landing Page': Monitor,
  'Review Google Maps': Star,
  'Optimasi Google Maps': MapPin,
  'Kelola E-commerce': ShoppingBag,
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ServiceCard = ({ service, index }) => (
  <motion.div
    className="relative group p-8 rounded-xl bg-card border border-border overflow-hidden h-full flex flex-col"
    variants={cardVariants}
    whileHover={{ y: -8, transition: { duration: 0.3 } }}
  >
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full filter blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
    
    <div className="relative z-10 flex-grow">
      <div className="mb-6">
        {React.createElement(iconMap[service.title], {
          className: 'w-12 h-12 text-primary',
        })}
      </div>
      <h3 className="font-headline text-2xl font-bold mb-3">{service.title}</h3>
      <p className="text-foreground/70 leading-relaxed">
        {service.description}
      </p>
    </div>
     <div className="relative z-10 mt-6">
        <a href="#" className="font-semibold text-primary inline-flex items-center group-hover:underline">
          Pelajari lebih lanjut
          <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
  </motion.div>
);

const Services = () => {
  return (
    <section id="layanan" className="w-full py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter text-primary">
            Layanan Unggulan Kami
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-3xl mx-auto">
            Solusi digital yang dirancang untuk mempercepat pertumbuhan bisnis Anda di dunia online.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
