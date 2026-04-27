'use client';

import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        variant: 'destructive',
        title: 'Form Belum Lengkap',
        description: 'Harap isi semua kolom yang tersedia.',
      });
      return;
    }
    
    console.log('Form submitted:', formData);
    
    toast({
      title: 'Pesan Terkirim!',
      description: 'Terima kasih telah menghubungi. Saya akan segera merespons Anda.',
    });
    setFormData({ name: '', email: '', message: '' });
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <section id="contact" className="py-section-padding px-6 bg-surface-container-low border-t border-outline-variant/10">
      <div className="max-w-container-max mx-auto flex flex-col md:flex-row gap-gutter">
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <h2 className="font-h2 text-h2 text-primary mb-4">Mulai Proyek Anda</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">Diskusikan ide Anda dan mari ciptakan solusi digital yang berdampak nyata bagi bisnis Anda.</p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-on-surface-variant">
              <Mail className="w-5 h-5" />
              <span className="font-body-md text-body-md">hello@rakapratama.dev</span>
            </div>
            <div className="flex items-center gap-4 text-on-surface-variant">
              <MapPin className="w-5 h-5" />
              <span className="font-body-md text-body-md">Jakarta, Indonesia</span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <form onSubmit={handleSubmit} className="bg-surface-container-lowest p-8 rounded border border-outline-variant/20 space-y-6">
              <div>
                  <Label htmlFor="name" className="block font-label-sm text-label-sm text-primary mb-2">Nama Lengkap</Label>
                  <Input 
                    id="name" 
                    type="text" 
                    placeholder="Masukkan nama Anda" 
                    value={formData.name} 
                    onChange={handleChange} 
                    className="w-full bg-surface border border-outline-variant/20 rounded px-4 py-3 text-primary focus:border-primary focus:ring-0 font-body-md transition-colors"
                  />
              </div>
              <div>
                  <Label htmlFor="email" className="block font-label-sm text-label-sm text-primary mb-2">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="email@perusahaan.com" 
                    value={formData.email} 
                    onChange={handleChange} 
                    className="w-full bg-surface border border-outline-variant/20 rounded px-4 py-3 text-primary focus:border-primary focus:ring-0 font-body-md transition-colors"
                  />
              </div>
              <div>
                  <Label htmlFor="message" className="block font-label-sm text-label-sm text-primary mb-2">Pesan</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Ceritakan tentang proyek Anda..." 
                    rows={4} 
                    value={formData.message} 
                    onChange={handleChange} 
                    className="w-full bg-surface border border-outline-variant/20 rounded px-4 py-3 text-primary focus:border-primary focus:ring-0 font-body-md transition-colors"
                  />
              </div>
              <Button type="submit" className="w-full bg-primary text-on-primary px-6 py-4 rounded hover:bg-primary-container hover:text-on-primary-container transition-colors font-label-sm text-label-sm">Kirim Pesan</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
