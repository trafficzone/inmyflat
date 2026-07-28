'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Strona główna' },
  { href: '/services', label: 'Usługi' },
  { href: '/projects', label: 'Realizacje' },
  { href: '/about', label: 'O nas' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease',
        background: scrolled ? 'rgba(10,10,10,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid #2A2A2A' : '1px solid transparent',
      }}
    >
      <nav style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', height: '72px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <Image
            src="/logo.png"
            alt="InMyFlat logo"
            width={40}
            height={40}
            style={{ objectFit: 'contain', filter: 'drop-shadow(0 0 8px rgba(212,168,83,0.3))' }}
          />
          <span style={{ fontFamily: 'var(--font-syne), sans-serif', fontWeight: 700, fontSize: '18px', color: '#F5F5F5', letterSpacing: '-0.02em' }}>
            InMyFlat
          </span>
        </Link>

        {/* Desktop nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="hidden md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                color: '#999',
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: 500,
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#F5F5F5')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#999')}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary" style={{ padding: '10px 20px', fontSize: '14px' }}>
            Skontaktuj się
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          style={{ background: 'none', border: 'none', color: '#F5F5F5', cursor: 'pointer' }}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div style={{
          background: '#111111',
          borderTop: '1px solid #2A2A2A',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }} className="md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{ color: '#F5F5F5', textDecoration: 'none', fontSize: '16px', fontWeight: 500 }}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary" onClick={() => setOpen(false)} style={{ textAlign: 'center', justifyContent: 'center' }}>
            Skontaktuj się
          </Link>
        </div>
      )}
    </header>
  );
}
