'use client';

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const testimonials = [
  {
    id: 'testimonial-1',
    name: 'Budi Santoso',
    role: 'Direktur Digital, Ritel Nexus',
    quote:
      "Bichar Freelancer mengubah kehadiran online kami. Pendekatan terstruktur mereka pada platform e-commerce kami menghasilkan peningkatan konversi 40% pada kuartal pertama. Benar-benar profesional.",
  },
  {
    id: 'testimonial-2',
    name: 'Siti Aminah',
    role: 'CEO, Inovasi Apex',
    quote:
      'Kejelasan dan ketepatan kerja mereka tidak ada tandingannya. Kampanye optimalisasi halaman arahan mereka memberi kami ROI yang melebihi proyeksi paling optimis kami.',
  },
];

const Testimonials = () => {
  const testimonialImages = {
    'testimonial-1': PlaceHolderImages.find(p => p.id === 'testimonial-1'),
    'testimonial-2': PlaceHolderImages.find(p => p.id === 'testimonial-2'),
  };
  
  return (
    <section id="testimonials" className="max-w-container-max mx-auto px-gutter py-xxl mb-xxl">
      <div className="text-center space-y-sm mb-xl">
        <span className="inline-block px-md py-xs rounded-full bg-primary/5 text-primary font-label-sm text-label-sm">
          Kisah Sukses Klien
        </span>
        <h2 className="font-headline-lg text-headline-lg text-on-surface">Hasil yang Terbukti</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
        {testimonials.map((testimonial) => {
            const image = testimonialImages[testimonial.id];
            return (
                <div key={testimonial.id} className="bg-surface-container-lowest p-xl rounded-xl shadow-[0_4px_16px_-4px_rgba(14,55,86,0.06)] border border-outline-variant/20 flex flex-col justify-between">
                    <div>
                        <span className="material-symbols-outlined filled text-primary-container mb-md text-4xl opacity-50">format_quote</span>
                        <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg italic">
                            "{testimonial.quote}"
                        </p>
                    </div>
                    <div className="flex items-center gap-md">
                        {image && (
                            <Image
                                alt={image.description}
                                className="w-12 h-12 rounded-full object-cover"
                                src={image.imageUrl}
                                width={48}
                                height={48}
                                data-ai-hint={image.imageHint}
                            />
                        )}
                        <div>
                            <h4 className="font-label-sm text-label-sm text-on-surface font-bold">{testimonial.name}</h4>
                            <p className="font-body-md text-sm text-on-surface-variant">{testimonial.role}</p>
                        </div>
                    </div>
                </div>
            )
        })}
      </div>
    </section>
  );
};

export default Testimonials;
