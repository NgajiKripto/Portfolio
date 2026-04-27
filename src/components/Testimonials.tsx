'use client';

import React from 'react';
import Image from 'next/image';
import { testimonials } from '@/data/testimonials';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';


const Testimonials = () => {
    const FADE_UP_ANIMATION_VARIANTS = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 20 } },
    };

  return (
    <section id="testimonials" className="py-28 px-6 max-w-6xl mx-auto bg-white">
        <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={FADE_UP_ANIMATION_VARIANTS}
            className="mb-16 text-center md:text-left"
        >
            <h2 className="font-heading text-4xl text-foreground mb-4">Apa Kata Klien</h2>
            <p className="font-body text-lg text-foreground max-w-2xl">Pengalaman mereka yang telah bekerja sama dalam mentransformasi bisnis digital.</p>
        </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.15 }}
            variants={FADE_UP_ANIMATION_VARIANTS}
          >
            <Card className="bg-primary/30 p-8 rounded-lg border-transparent h-full">
                <CardContent className="p-0">
                <Quote className="w-8 h-8 text-white/50 mb-6" />
                <p className="font-body text-lg text-white italic mb-8">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-white/20">
                    <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                    />
                    </div>
                    <div>
                    <h4 className="font-display text-sm font-semibold text-white">{testimonial.name}</h4>
                    <p className="font-body text-sm text-white">{testimonial.role}</p>
                    </div>
                </div>
                </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
