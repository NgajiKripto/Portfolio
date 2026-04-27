'use client';

import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const testimonials = [
  {
    name: 'Budi Santoso',
    role: 'CEO, Startup Maju',
    quote:
      'Landing page yang dibuat ElevateDigital benar-benar mengubah permainan. Konversi kami meningkat 50% dalam sebulan!',
    avatar: 'Budi Santoso',
  },
  {
    name: 'Siti Aminah',
    role: 'Pemilik, Kopi Kenangan Lokal',
    quote:
      'Berkat optimasi Google Maps, kedai kopi saya sekarang selalu ramai. Peringkat pertama di pencarian lokal!',
    avatar: 'Siti Aminah',
  },
  {
    name: 'Rian Pratama',
    role: 'Manajer, E-commerce Fashion',
    quote:
      'Manajemen toko online jadi jauh lebih mudah dan efisien. Tim ElevateDigital sangat responsif dan profesional.',
    avatar: 'Rian Pratama',
  },
  {
    name: 'Dewi Lestari',
    role: 'Founder, Skincare Organik',
    quote:
      'Identitas merek baru kami terlihat luar biasa. Desainnya modern dan sangat mewakili nilai-nilai perusahaan kami.',
    avatar: 'Dewi Lestari',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-secondary py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">
            Apa Kata Mereka?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Kisah sukses dari klien-klien yang telah mempercayai kami.
          </p>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="mx-auto mt-16 w-full max-w-4xl"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="h-full">
                    <CardContent className="flex h-full flex-col items-center justify-center p-6 text-center">
                      <Image
                        src={`https://ui-avatars.com/api/?name=${testimonial.avatar.replace(' ', '+')}&background=5AA8D6&color=FFFFFF`}
                        alt={testimonial.name}
                        width={64}
                        height={64}
                        className="mb-4 rounded-full"
                      />
                      <p className="flex-grow font-body italic text-muted-foreground">
                        "{testimonial.quote}"
                      </p>
                      <div className="mt-4">
                        <p className="font-bold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
