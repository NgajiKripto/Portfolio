'use client';

import React from 'react';

const services = [
  {
    title: 'Bikin Landing Page',
    description: 'High-conversion, lightning-fast landing pages tailored to your campaign goals.',
    icon: 'web',
  },
  {
    title: 'Review Google Maps',
    description: 'Strategic reputation management to build local trust and authority.',
    icon: 'rate_review',
  },
  {
    title: 'Optimasi Google Maps',
    description: 'Data-driven local SEO to ensure your business dominates local search results.',
    icon: 'location_on',
  },
  {
    title: 'Kelola E-commerce',
    description: 'End-to-end e-commerce management focusing on UX and conversion rate optimization.',
    icon: 'storefront',
  },
];


const Services = () => {
  return (
    <section id="services" className="max-w-container-max mx-auto px-gutter py-xxl bg-surface-container-lowest rounded-xl shadow-[0_4px_20px_-4px_rgba(14,55,86,0.04)] mb-xxl">
      <div className="text-center space-y-sm mb-xl">
        <span className="inline-block px-md py-xs rounded-full bg-primary/5 text-primary font-label-sm text-label-sm">
          Our Expertise
        </span>
        <h2 className="font-headline-lg text-headline-lg text-on-surface">
          Precision Engineered Services
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
