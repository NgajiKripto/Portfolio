'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { services } from '@/data/services';
import SplitText from '@/components/ui/SplitText';
import DecryptedText from '@/components/ui/DecryptedText';

const Services = () => {
  const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 20 } },
  };

  return (
    <section id="services" className="py-28 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div
          className="mb-16 text-center md:text-left"
        >
          <SplitText
            tag="h2"
            text="Layanan Digital"
            className="font-heading text-4xl text-secondary-foreground mb-4"
            splitType="words"
            textAlign="inherit"
          />
          <DecryptedText
            text="Solusi komprehensif dari konsep hingga peluncuran untuk memastikan kesuksesan produk digital Anda."
            parentClassName="font-body text-lg text-secondary-foreground/80 max-w-2xl"
            animateOn="view"
            sequential={true}
            speed={20}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="bg-secondary-foreground/10 p-8 rounded-lg border border-secondary-foreground/20 hover:bg-secondary-foreground/20 transition-colors group"
            >
              <div className="mb-6">
                <service.icon className="w-10 h-10 text-secondary-foreground" />
              </div>
              <div className="h-[56px] flex items-center">
                <SplitText
                  tag="h3"
                  text={service.title}
                  className="font-heading text-xl font-semibold text-secondary-foreground"
                  splitType="words"
                  textAlign="left"
                />
              </div>
              <DecryptedText 
                text={service.description}
                parentClassName="font-body text-secondary-foreground/80 mt-3"
                animateOn="view"
                sequential={true}
                speed={10}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
