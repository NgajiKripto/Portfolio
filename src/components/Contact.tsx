'use client';

import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

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
    
    // Simulate form submission
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
    <section id="contact" className="container mx-auto py-24 px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight">Mari Mulai Proyek Anda</h2>
            <p className="mt-4 text-muted-foreground">Ada ide menarik? Atau butuh bantuan untuk proyek Anda? Jangan ragu untuk menghubungi saya.</p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-12 space-y-6">
            <div className="space-y-2">
                <Label htmlFor="name">Nama</Label>
                <Input id="name" type="text" placeholder="Nama lengkap Anda" value={formData.name} onChange={handleChange} className="bg-secondary/50" />
            </div>
            <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="email@anda.com" value={formData.email} onChange={handleChange} className="bg-secondary/50" />
            </div>
            <div className="space-y-2">
                <Label htmlFor="message">Pesan</Label>
                <Textarea id="message" placeholder="Jelaskan kebutuhan proyek Anda di sini..." rows={5} value={formData.message} onChange={handleChange} className="bg-secondary/50" />
            </div>
            <div className="text-center">
              <Button type="submit" size="lg" className="px-10">Kirim Pesan</Button>
            </div>
        </form>
    </section>
  );
};

export default Contact;
