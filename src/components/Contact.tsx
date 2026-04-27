'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: 'Input Tidak Lengkap',
        description: 'Mohon isi semua kolom yang wajib diisi.',
        variant: 'destructive',
      });
      return;
    }
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      toast({
        title: 'Pesan Terkirim!',
        description: 'Terima kasih telah menghubungi kami. Kami akan segera merespons.',
      });
    }, 1500);
  };

  return (
    <motion.section
      id="kontak"
      className="w-full py-20 md:py-32 bg-background relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5 z-0"></div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter text-primary">
            Hubungi Kami
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            Punya proyek atau ide yang ingin didiskusikan? Kami siap membantu mewujudkannya.
          </p>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground/80">Nama</Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Nama Lengkap Anda"
              value={formData.name}
              onChange={handleChange}
              className="bg-secondary border-border/50 focus:ring-primary/80 focus:border-primary/50"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground/80">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="email@anda.com"
              value={formData.email}
              onChange={handleChange}
              className="bg-secondary border-border/50 focus:ring-primary/80 focus:border-primary/50"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="text-foreground/80">Pesan</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Ceritakan tentang proyek Anda..."
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="bg-secondary border-border/50 focus:ring-primary/80 focus:border-primary/50"
            />
          </div>
          <div className="text-center">
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="group bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
            >
              {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
              <Send className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default Contact;
