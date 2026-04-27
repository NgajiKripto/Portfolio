import type { Metadata } from 'next';
import { Syne, Manrope } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';

const syne = Syne({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-syne',
});

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  title: 'ElevateDigital - Solusi Digital Terpadu untuk Bisnis Anda',
  description:
    'Tingkatkan bisnis Anda dengan layanan pembuatan landing page, optimasi Google Maps, dan manajemen e-commerce profesional dari ElevateDigital.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark">
      <body
        className={cn(
          'font-body antialiased',
          syne.variable,
          manrope.variable
        )}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
