'use client';

import { Mail } from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section style={{
        padding: '160px 24px 80px',
        background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(212,168,83,0.07) 0%, transparent 60%)',
        textAlign: 'center',
      }}>
        <p className="section-label" style={{ marginBottom: '16px' }}>Kontakt</p>
        <h1 style={{ fontFamily: 'var(--font-syne), sans-serif', fontWeight: 800, fontSize: 'clamp(40px, 7vw, 72px)', color: '#F5F5F5', letterSpacing: '-0.03em', marginBottom: '20px', lineHeight: 1.05 }}>
          Porozmawiajmy
        </h1>
        <p style={{ color: '#999', fontSize: '18px', lineHeight: 1.7, maxWidth: '500px', margin: '0 auto' }}>
          Napisz do nas mailowo, a odpowiemy w ciągu 24 godzin roboczych.
        </p>
      </section>

      {/* CONTACT */}
      <section style={{ padding: '48px 24px 96px', maxWidth: '560px', margin: '0 auto' }}>
        <h2 style={{ fontFamily: 'var(--font-syne), sans-serif', fontWeight: 800, fontSize: '32px', color: '#F5F5F5', marginBottom: '12px' }}>
          Porozmawiajmy o Twoim projekcie
        </h2>
        <p style={{ color: '#999', fontSize: '15px', lineHeight: 1.7, marginBottom: '40px' }}>
          Niezależnie od tego, czy masz gotowy plan, czy dopiero szukasz kierunku – napisz do nas. Pomożemy ocenić, co ma sens dla Twojego biznesu.
        </p>

        <a href="mailto:contact@inmyflat.com" style={{
          display: 'flex', alignItems: 'center', gap: '16px',
          background: '#111111', border: '1px solid #2A2A2A', borderRadius: '12px',
          padding: '20px 24px', textDecoration: 'none', marginBottom: '16px',
          transition: 'border-color 0.2s',
        }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#D4A853')}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#2A2A2A')}>
          <div className="icon-box"><Mail size={18} /></div>
          <div>
            <p style={{ color: '#999', fontSize: '12px', marginBottom: '2px' }}>Email</p>
            <p style={{ color: '#F5F5F5', fontWeight: 600, fontSize: '15px' }}>contact@inmyflat.com</p>
          </div>
        </a>

        <div style={{ marginTop: '40px', padding: '20px 24px', background: '#0D0D0D', border: '1px solid #1A1A1A', borderRadius: '12px' }}>
          <p style={{ color: '#D4A853', fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>Czas odpowiedzi</p>
          <p style={{ color: '#999', fontSize: '14px', lineHeight: 1.6 }}>
            Odpowiadamy w ciągu <strong style={{ color: '#F5F5F5' }}>24 godzin roboczych</strong>. Pierwsze spotkanie jest bezpłatne i niezobowiązujące.
          </p>
        </div>
      </section>
    </>
  );
}
