'use client';

import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.firstName && formData.lastName && formData.email && formData.message) {
      console.log('Form submitted:', formData);
      toast({
        title: 'Pertanyaan Terkirim!',
        description: 'Terima kasih telah menghubungi kami. Kami akan segera menghubungi Anda.',
      });
      setFormData({ firstName: '', lastName: '', email: '', message: '' });
    } else {
      toast({
        variant: 'destructive',
        title: 'Pengiriman Gagal',
        description: 'Harap isi semua bidang yang wajib diisi.',
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <section id="contact" className="max-w-4xl mx-auto px-gutter py-xxl mb-xxl">
      <div className="bg-surface-container-lowest rounded-xl shadow-[0_8px_30px_-4px_rgba(14,55,86,0.08)] overflow-hidden flex flex-col md:flex-row border border-outline-variant/20">
        <div className="bg-primary text-on-primary p-xl md:w-1/3 flex flex-col justify-between">
          <div>
            <h2 className="font-headline-lg text-headline-lg mb-sm">Mulai Pertumbuhan Anda.</h2>
            <p className="font-body-md text-body-md text-on-primary/80 mb-xl">
              Mari diskusikan bagaimana kami dapat merekayasa pertumbuhan untuk organisasi Anda.
            </p>
          </div>
          <div className="space-y-md">
            <div className="flex items-center gap-sm">
              <span className="material-symbols-outlined">mail</span>
              <span className="font-label-sm text-label-sm">halo@bicharfreelancer.com</span>
            </div>
            <div className="flex items-center gap-sm">
              <span className="material-symbols-outlined">location_city</span>
              <span className="font-label-sm text-label-sm">Kantor Pusat, Distrik Teknologi</span>
            </div>
          </div>
        </div>
        <div className="p-xl md:w-2/3 bg-surface-container-lowest">
          <form onSubmit={handleSubmit} className="space-y-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
              <div>
                <Label className="block font-label-sm text-label-sm text-on-surface mb-xs" htmlFor="firstName">
                  Nama Depan
                </Label>
                <Input
                  className="w-full bg-[#F1F3F5] border-transparent border-b-outline-variant focus:border-b-primary focus:ring-0 rounded-none rounded-t-DEFAULT transition-colors py-sm px-md font-body-md text-on-surface"
                  id="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label className="block font-label-sm text-label-sm text-on-surface mb-xs" htmlFor="lastName">
                  Nama Belakang
                </Label>
                <Input
                  className="w-full bg-[#F1F3F5] border-transparent border-b-outline-variant focus:border-b-primary focus:ring-0 rounded-none rounded-t-DEFAULT transition-colors py-sm px-md font-body-md text-on-surface"
                  id="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <Label className="block font-label-sm text-label-sm text-on-surface mb-xs" htmlFor="email">
                Email Perusahaan
              </Label>
              <Input
                className="w-full bg-[#F1F3F5] border-transparent border-b-outline-variant focus:border-b-primary focus:ring-0 rounded-none rounded-t-DEFAULT transition-colors py-sm px-md font-body-md text-on-surface"
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label className="block font-label-sm text-label-sm text-on-surface mb-xs" htmlFor="message">
                Detail Proyek
              </Label>
              <Textarea
                className="w-full bg-[#F1F3F5] border-transparent border-b-outline-variant focus:border-b-primary focus:ring-0 rounded-none rounded-t-DEFAULT transition-colors py-sm px-md font-body-md text-on-surface resize-none"
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <Button
              className="w-full bg-primary text-on-primary py-md rounded-full font-label-sm text-label-sm hover:bg-primary-container hover:text-on-primary-container transition-colors duration-300 shadow-[0_2px_10px_-2px_rgba(14,55,86,0.2)]"
              type="submit"
            >
              Kirim Pertanyaan
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
