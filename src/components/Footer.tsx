'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ background: '#0A0A0A', borderTop: '1px solid #2A2A2A', padding: '64px 24px 32px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '48px', marginBottom: '48px' }}>
          <div>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', marginBottom: '16px' }}>
              <Image src="/logo.png" alt="InMyFlat" width={36} height={36} style={{ objectFit: 'contain' }} />
              <span style={{ fontFamily: 'var(--font-syne), sans-serif', fontWeight: 700, fontSize: '16px', color: '#F5F5F5' }}>InMyFlat</span>
            </Link>
            <p style={{ color: '#555', fontSize: '14px', lineHeight: '1.7', maxWidth: '240px' }}>
              Tworzymy sklepy internetowe i strategie e-commerce, które realnie sprzedają.
            </p>
          </div>

          <div>
            <p style={{ fontFamily: 'var(--font-syne), sans-serif', fontWeight: 600, fontSize: '14px', color: '#F5F5F5', marginBottom: '16px' }}>Usługi</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { href: '/services/online-stores', label: 'Sklepy internetowe' },
                { href: '/services/websites', label: 'Strony internetowe' },
                { href: '/services/marketplace', label: 'Marketplace' },
                { href: '/services/ecommerce-support', label: 'Wsparcie e-commerce' },
              ].map((l) => (
                <Link key={l.href} href={l.href} style={{ color: '#555', fontSize: '14px', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#D4A853')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#555')}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p style={{ fontFamily: 'var(--font-syne), sans-serif', fontWeight: 600, fontSize: '14px', color: '#F5F5F5', marginBottom: '16px' }}>Firma</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { href: '/about', label: 'O nas' },
                { href: '/projects', label: 'Realizacje' },
                { href: '/contact', label: 'Kontakt' },
              ].map((l) => (
                <Link key={l.href} href={l.href} style={{ color: '#555', fontSize: '14px', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#D4A853')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#555')}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p style={{ fontFamily: 'var(--font-syne), sans-serif', fontWeight: 600, fontSize: '14px', color: '#F5F5F5', marginBottom: '16px' }}>Kontakt</p>
            <a href="mailto:contact@inmyflat.com" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#555', fontSize: '14px', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#D4A853')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#555')}>
              <Mail size={14} />
              contact@inmyflat.com
            </a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid #1A1A1A', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <p style={{ color: '#333', fontSize: '13px' }}>
            © {new Date().getFullYear()} InMyFlat. Wszelkie prawa zastrzeżone.
          </p>
          <p style={{ color: '#333', fontSize: '13px' }}>
            Tworzymy e-commerce, które działa.
          </p>
        </div>
      </div>
    </footer>
  );
}
