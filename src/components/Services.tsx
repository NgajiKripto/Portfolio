'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { services } from '@/data/services';
import { cn } from '@/lib/utils';

const Services = () => {
  const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 20 } },
  };

  return (
    <section id="services" className="container mx-auto py-24 px-4 md:px-6">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="text-center"
      >
        <motion.h2 variants={FADE_UP_ANIMATION_VARIANTS} className="font-heading text-3xl md:text-4xl font-bold tracking-tight">
          Layanan yang Saya Tawarkan
        </motion.h2>
        <motion.p variants={FADE_UP_ANIMATION_VARIANTS} className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          Solusi komprehensif untuk membawa ide Anda dari konsep menjadi kenyataan digital.
        </motion.p>
      </motion.div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: index * 0.1 }}
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="group relative p-8 rounded-lg bg-card border border-border/50 hover:border-primary/50 transition-colors duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="mb-6 w-12 h-12 flex items-center justify-center rounded-lg bg-secondary text-primary">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
