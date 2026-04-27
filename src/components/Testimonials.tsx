'use client';

import React from 'react';
import Image from 'next/image';
import { testimonials } from '@/data/testimonials';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-secondary/30 py-24">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight">
          Apa Kata Klien Saya
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          Kredibilitas dibangun dari hasil dan kepuasan.
        </p>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto mt-16"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col justify-between text-left bg-card/50 border-border/50">
                    <CardContent className="p-6">
                      <p className="italic text-foreground/90">"{testimonial.quote}"</p>
                    </CardContent>
                    <div className="flex items-center gap-4 p-6 pt-0">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div>
                        <p className="font-bold text-sm text-foreground">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:inline-flex" />
          <CarouselNext className="hidden md:inline-flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
