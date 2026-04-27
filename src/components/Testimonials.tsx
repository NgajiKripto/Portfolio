'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { testimonials } from '@/data/testimonials';
import Image from 'next/image';

const TestimonialCard = ({ testimonial }) => (
  <div className="flex-shrink-0 w-[90vw] md:w-[450px] p-8 rounded-xl bg-card border border-border flex flex-col justify-between">
    <p className="text-foreground/80 text-lg mb-6 italic">
      &ldquo;{testimonial.quote}&rdquo;
    </p>
    <div className="flex items-center">
      <Image
        src={testimonial.avatar}
        alt={testimonial.name}
        width={48}
        height={48}
        className="rounded-full mr-4"
      />
      <div>
        <h4 className="font-bold text-foreground">{testimonial.name}</h4>
        <p className="text-sm text-foreground/60">{testimonial.title}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const scrollRef = useRef(null);
  const { scrollXProgress } = useScroll({ container: scrollRef });

  return (
    <section id="testimoni" className="w-full py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter text-primary">
            Apa Kata Klien Kami
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            Kami bangga telah membantu banyak bisnis untuk berkembang.
          </p>
        </motion.div>
      </div>
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-8 pb-8 px-4 md:px-8"
        style={{ scrollbarWidth: 'none', '-ms-overflow-style': 'none' }}
      >
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>
       <div className="container mx-auto px-4 md:px-8 mt-8">
        <div className="w-full bg-border h-1 rounded-full overflow-hidden">
          <motion.div
            className="bg-primary h-full"
            style={{ width: useTransform(scrollXProgress, val => `${val * 100}%`) }}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
