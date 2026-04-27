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
    <html lang="id" className="dark" style={{ colorScheme: 'dark' }} suppressHydrationWarning>
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@700,500,400&f[]=general-sans@400,500&display=swap" rel="stylesheet" />
        <style>{`
          :root {
            --font-satoshi: 'Satoshi', sans-serif;
            --font-general-sans: 'General Sans', sans-serif;
          }
        `}</style>
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
