'use client';

import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, MapPin } from 'lucide-react';
import ShinyText from '@/components/ui/ShinyText';

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
    <section id="contact" className="py-28 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center">
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <ShinyText
            text="Mulai Proyek Anda"
            className="font-heading text-4xl mb-4"
            color="hsl(var(--secondary-foreground))"
            shineColor="hsl(var(--accent))"
            speed={5}
            yoyo={true}
          />
          <p className="font-body text-lg text-secondary-foreground/80 mb-8 max-w-xl">Diskusikan ide Anda dan mari ciptakan solusi digital yang berdampak nyata bagi bisnis Anda.</p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-secondary-foreground/80">
              <Mail className="w-5 h-5" />
              <span className="font-body">hello@rakapratama.dev</span>
            </div>
            <div className="flex items-center gap-4 text-secondary-foreground/80">
              <MapPin className="w-5 h-5" />
              <span className="font-body">Jakarta, Indonesia</span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <form onSubmit={handleSubmit} className="bg-secondary-foreground/10 p-8 rounded-lg border border-secondary-foreground/20 space-y-6">
              <div>
                  <Label htmlFor="name" className="block text-sm font-medium text-secondary-foreground mb-2">Nama Lengkap</Label>
                  <Input 
                    id="name" 
                    type="text" 
                    placeholder="Masukkan nama Anda" 
                    value={formData.name} 
                    onChange={handleChange} 
                    className="w-full bg-transparent border-secondary-foreground/30 text-secondary-foreground placeholder:text-secondary-foreground/60 focus-visible:ring-ring"
                  />
              </div>
              <div>
                  <Label htmlFor="email" className="block text-sm font-medium text-secondary-foreground mb-2">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="email@perusahaan.com" 
                    value={formData.email} 
                    onChange={handleChange} 
                    className="w-full bg-transparent border-secondary-foreground/30 text-secondary-foreground placeholder:text-secondary-foreground/60 focus-visible:ring-ring"
                  />
              </div>
              <div>
                  <Label htmlFor="message" className="block text-sm font-medium text-secondary-foreground mb-2">Pesan</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Ceritakan tentang proyek Anda..." 
                    rows={4} 
                    value={formData.message} 
                    onChange={handleChange} 
                    className="w-full bg-transparent border-secondary-foreground/30 text-secondary-foreground placeholder:text-secondary-foreground/60 focus-visible:ring-ring"
                  />
              </div>
              <Button type="submit" className="w-full bg-primary-foreground text-secondary hover:bg-primary-foreground/90">Kirim Pesan</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
