'use client';

import { useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';

const services = [
  'Sklep internetowy (Shopify / WooCommerce)',
  'Strona internetowa / Landing page',
  'Sprzedaż na Allegro',
  'Sprzedaż na Amazon',
  'Wsparcie istniejącego e-commerce',
  'Inne / Nie wiem jeszcze',
];

const budgets = [
  'Do 2 000 zł',
  '2 000 – 5 000 zł',
  '5 000 – 10 000 zł',
  'Powyżej 10 000 zł',
  'Do ustalenia',
];

export default function KontaktPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', service: '', budget: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

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
          Wypełnij formularz, a my skontaktujemy się z Tobą w ciągu 24 godzin roboczych.
        </p>
      </section>

      {/* FORM + CONTACT */}
      <section style={{ padding: '48px 24px 96px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', alignItems: 'start' }}>

          {/* LEFT: contact info */}
          <div>
            <h2 style={{ fontFamily: 'var(--font-syne), sans-serif', fontWeight: 800, fontSize: '32px', color: '#F5F5F5', marginBottom: '12px' }}>
              Porozmawiajmy o Twoim projekcie
            </h2>
            <p style={{ color: '#999', fontSize: '15px', lineHeight: 1.7, marginBottom: '40px' }}>
              Niezależnie od tego, czy masz gotowy plan, czy dopiero szukasz kierunku – napisz do nas. Pomożemy ocenić, co ma sens dla Twojego biznesu.
            </p>

            <a href="mailto:kontakt@inmyflat.pl" style={{
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
                <p style={{ color: '#F5F5F5', fontWeight: 600, fontSize: '15px' }}>kontakt@inmyflat.pl</p>
              </div>
            </a>

            <div style={{ marginTop: '40px', padding: '20px 24px', background: '#0D0D0D', border: '1px solid #1A1A1A', borderRadius: '12px' }}>
              <p style={{ color: '#D4A853', fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>Czas odpowiedzi</p>
              <p style={{ color: '#999', fontSize: '14px', lineHeight: 1.6 }}>
                Odpowiadamy w ciągu <strong style={{ color: '#F5F5F5' }}>24 godzin roboczych</strong>. Pierwsze spotkanie jest bezpłatne i niezobowiązujące.
              </p>
            </div>
          </div>

          {/* RIGHT: form */}
          <div>
            {sent ? (
              <div style={{
                background: '#111111', border: '1px solid #2A2A2A', borderRadius: '16px',
                padding: '48px', textAlign: 'center',
              }}>
                <CheckCircle size={48} color="#D4A853" style={{ margin: '0 auto 20px' }} />
                <h3 style={{ fontFamily: 'var(--font-syne), sans-serif', fontWeight: 800, fontSize: '24px', color: '#F5F5F5', marginBottom: '12px' }}>
                  Wiadomość wysłana!
                </h3>
                <p style={{ color: '#999', fontSize: '15px', lineHeight: 1.7 }}>
                  Dziękujemy za kontakt. Odezwiemy się w ciągu 24 godzin roboczych.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{
                background: '#111111', border: '1px solid #2A2A2A', borderRadius: '16px', padding: '40px',
                display: 'flex', flexDirection: 'column', gap: '20px',
              }}>
                <div>
                  <label style={{ display: 'block', color: '#F5F5F5', fontSize: '14px', fontWeight: 500, marginBottom: '8px' }}>Imię i nazwisko *</label>
                  <input
                    required
                    type="text"
                    placeholder="Jan Kowalski"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    style={{
                      width: '100%', background: '#1A1A1A', border: '1px solid #2A2A2A', borderRadius: '8px',
                      padding: '12px 16px', color: '#F5F5F5', fontSize: '15px', outline: 'none',
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = '#D4A853')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = '#2A2A2A')}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', color: '#F5F5F5', fontSize: '14px', fontWeight: 500, marginBottom: '8px' }}>Email *</label>
                  <input
                    required
                    type="email"
                    placeholder="jan@firma.pl"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    style={{
                      width: '100%', background: '#1A1A1A', border: '1px solid #2A2A2A', borderRadius: '8px',
                      padding: '12px 16px', color: '#F5F5F5', fontSize: '15px', outline: 'none',
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = '#D4A853')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = '#2A2A2A')}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', color: '#F5F5F5', fontSize: '14px', fontWeight: 500, marginBottom: '8px' }}>Czego potrzebujesz?</label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    style={{
                      width: '100%', background: '#1A1A1A', border: '1px solid #2A2A2A', borderRadius: '8px',
                      padding: '12px 16px', color: form.service ? '#F5F5F5' : '#555', fontSize: '15px', outline: 'none',
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = '#D4A853')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = '#2A2A2A')}
                  >
                    <option value="" disabled>Wybierz usługę</option>
                    {services.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', color: '#F5F5F5', fontSize: '14px', fontWeight: 500, marginBottom: '8px' }}>Orientacyjny budżet</label>
                  <select
                    value={form.budget}
                    onChange={(e) => setForm({ ...form, budget: e.target.value })}
                    style={{
                      width: '100%', background: '#1A1A1A', border: '1px solid #2A2A2A', borderRadius: '8px',
                      padding: '12px 16px', color: form.budget ? '#F5F5F5' : '#555', fontSize: '15px', outline: 'none',
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = '#D4A853')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = '#2A2A2A')}
                  >
                    <option value="" disabled>Wybierz zakres</option>
                    {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', color: '#F5F5F5', fontSize: '14px', fontWeight: 500, marginBottom: '8px' }}>Wiadomość *</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Opowiedz nam o swoim projekcie, biznesie i celach..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{
                      width: '100%', background: '#1A1A1A', border: '1px solid #2A2A2A', borderRadius: '8px',
                      padding: '12px 16px', color: '#F5F5F5', fontSize: '15px', outline: 'none', resize: 'vertical',
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = '#D4A853')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = '#2A2A2A')}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ justifyContent: 'center', fontSize: '16px', padding: '16px' }}>
                  Wyślij wiadomość <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
