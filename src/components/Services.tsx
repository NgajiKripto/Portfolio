'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { services } from '@/data/services';

const Services = () => {
  const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 20 } },
  };

  return (
    <section id="services" className="py-28 px-6 bg-muted/50 border-y border-border/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="font-heading text-4xl text-primary mb-4">Layanan Digital</h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl">Solusi komprehensif dari konsep hingga peluncuran untuk memastikan kesuksesan produk digital Anda.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="bg-card p-8 rounded-lg border border-border/20 hover:border-ring/50 transition-colors group"
            >
              <div className="mb-6">
                <service.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="font-body text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
