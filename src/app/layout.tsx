import type { Metadata } from 'next';
import { Syne, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'InMyFlat – Agencja E-commerce',
    template: '%s | InMyFlat',
  },
  description: 'Tworzymy sklepy internetowe i strategie e-commerce, które realnie sprzedają. Shopify, WooCommerce, Allegro, Amazon.',
  keywords: ['sklep internetowy', 'e-commerce', 'Shopify', 'WooCommerce', 'Allegro', 'Amazon', 'agencja e-commerce'],
  openGraph: {
    siteName: 'InMyFlat',
    locale: 'pl_PL',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={`${syne.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
