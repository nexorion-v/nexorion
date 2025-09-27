import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nexorion - Level Up Your Digital Presence',
  description:
    'Join Nexorion — a performance-focused affiliate marketing network offering real-time analytics, smart targeting, and high payouts.',
  icons: {
    icon: '/nexorionlogo.png', // For browser tab
    shortcut: '/nexorionlogo.png',
    apple: '/nexorionlogo.png',   // For Apple devices (optional)
  },
  openGraph: {
    title: 'Nexorion - Level Up Your Digital Presence',
    description:
      'Join Nexorion — a performance-focused affiliate marketing network offering real-time analytics, smart targeting, and high payouts.',
    url: 'https://nexorion.co.in',  //
    siteName: 'Nexorion',
    images: [
      {
        url: '/logo.png', // should be a square or landscape image
        width: 800,
        height: 600,
        alt: 'Nexorion Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
