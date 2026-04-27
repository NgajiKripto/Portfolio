import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Raka Pratama - Full-Stack Developer & Digital Consultant',
  description: 'Meningkatkan bisnis Anda dengan solusi digital terpadu. Dari pengembangan web kustom hingga optimasi SEO, saya memberikan hasil yang terukur.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Manrope:wght@600;700&display=swap" rel="stylesheet" />
      </head>
      <body
        className={cn('font-body bg-background text-foreground antialiased')}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
