'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Label } from '@/components/ui/label';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: false, email: false, message: false });

  const validate = () => {
    const newErrors = {
      name: !formData.name,
      email: !formData.email,
      message: !formData.message,
    };
    setErrors(newErrors);
    return !newErrors.name && !newErrors.email && !newErrors.message;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', formData);
      toast({
        title: 'Pesan Terkirim!',
        description: 'Terima kasih telah menghubungi kami. Kami akan segera membalasnya.',
      });
      setFormData({ name: '', email: '', message: '' });
    } else {
      toast({
        variant: 'destructive',
        title: 'Gagal Mengirim',
        description: 'Mohon lengkapi semua kolom yang wajib diisi.',
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (value) {
      setErrors((prev) => ({ ...prev, [id]: false }));
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">
            Hubungi Kami
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Punya pertanyaan atau ide proyek? Jangan ragu untuk mengirim pesan.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mx-auto mt-16 max-w-xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Nama</Label>
              <Input
                id="name"
                placeholder="Nama lengkap Anda"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? 'border-destructive' : ''}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="email@anda.com"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'border-destructive' : ''}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Pesan</Label>
              <Textarea
                id="message"
                placeholder="Tuliskan pesan Anda di sini..."
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? 'border-destructive' : ''}
              />
            </div>
            <Button type="submit" className="w-full" size="lg">
              Kirim Pesan
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
