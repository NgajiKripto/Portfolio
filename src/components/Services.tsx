'use client';
import React from 'react';
const services = [
  {
    title: 'Pembuatan Landing Page',
    description: 'Halaman arahan berkonversi tinggi dan secepat kilat yang disesuaikan dengan tujuan kampanye Anda.',
    icon: 'web',
  },
  {
    title: 'Ulasan Google Maps',
    description: 'Manajemen reputasi strategis untuk membangun kepercayaan dan otoritas lokal.',
    icon: 'rate_review',
  },
  {
    title: 'Optimasi Google Maps',
    description: 'SEO lokal berbasis data untuk memastikan bisnis Anda mendominasi hasil pencarian lokal.',
    icon: 'location_on',
  },
  {
    title: 'Pengelolaan E-commerce',
    description: 'Manajemen e-commerce dari awal hingga akhir yang berfokus pada UX dan optimalisasi tingkat konversi.',
    icon: 'storefront',
  },
];


const Services = () => {
  return (
    <section id="services" className="max-w-container-max mx-auto px-gutter py-xxl bg-surface-container-lowest rounded-xl shadow-[0_4px_20px_-4px_rgba(14,55,86,0.04)] mb-xxl">
      <div className="text-center space-y-sm mb-xl">
        <span className="inline-block px-md py-xs rounded-full bg-primary/5 text-primary font-label-sm text-label-sm">
          Keahlian Kami
        </span>
        <h2 className="font-headline-lg text-headline-lg text-on-surface">
          Layanan yang Dirancang dengan Presisi
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg">
        {services.map((service, index) => {
          return (
            <div key={index} className="bg-surface p-xl rounded-xl border border-outline-variant/30 shadow-[0_2px_8px_-2px_rgba(14,55,86,0.05)] hover:shadow-[0_8px_24px_-4px_rgba(14,55,86,0.08)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
              <div className="w-12 h-12 bg-primary-container text-on-primary-container rounded-lg flex items-center justify-center mb-lg group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined">{service.icon}</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-sm">
                {service.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
