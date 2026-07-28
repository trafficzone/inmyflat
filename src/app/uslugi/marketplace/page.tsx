import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Package } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Marketplace – Allegro i Amazon',
  description: 'Konfiguracja, optymalizacja i wsparcie sprzedaży na Allegro i Amazon. Uruchamiamy i skalujemy Twoją sprzedaż na największych platformach.',
};

const allegro = [
  'Założenie i konfiguracja konta firmowego',
  'Optymalizacja tytułów i opisów ofert (SEO Allegro)',
  'Konfiguracja programu Smart!',
  'Strategia cenowa i analiza konkurencji',
  'Integracja z systemem magazynowym',
  'Ustawienie automatycznych reguł promocyjnych',
];

const amazon = [
  'Rejestracja i weryfikacja konta sprzedawcy',
  'Tworzenie i optymalizacja listingów (A+ Content)',
  'Konfiguracja FBA lub FBM',
  'Analiza kategorii i słów kluczowych',
  'Ochrona marki (Brand Registry)',
  'Pierwsze kampanie reklamowe (PPC)',
];

const faq = [
  { q: 'Od czego zacząć sprzedaż na Allegro?', a: 'Od założenia konta firmowego, konfiguracji metod płatności i załadowania produktów z optymalnymi opisami. My przeprowadzimy Cię przez cały proces.' },
  { q: 'Czy Amazon jest dla polskich firm?', a: 'Tak. Amazon.de i Amazon.pl są dostępne dla polskich firm. Pomagamy wejść na rynek europejski krok po kroku.' },
  { q: 'Ile trwa uruchomienie sprzedaży?', a: 'Pierwsze oferty na Allegro możemy uruchomić w ciągu 5–7 dni roboczych. Amazon wymaga 2–4 tygodni ze względu na weryfikację konta.' },
  { q: 'Czy oferujecie bieżące wsparcie?', a: 'Tak – możemy prowadzić Twoje konto w modelu abonamentowym: optymalizacja ofert, kampanie reklamowe, monitoring wyników.' },
];

export default function MarketplacePage() {
  return (
    <>
      <section style={{
        padding: '160px 24px 80px',
        background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(212,168,83,0.07) 0%, transparent 60%)',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="icon-box" style={{ marginBottom: '24px' }}><Package size={24} /></div>
          <p className="section-label" style={{ marginBottom: '12px' }}>Usługi</p>
          <h1 style={{ fontFamily: 'var(--font-syne), sans-serif', fontWeight: 800, fontSize: 'clamp(40px, 7vw, 68px)', color: '#F5F5F5', letterSpacing: '-0.03em', marginBottom: '20px', lineHeight: 1.05 }}>
            Sprzedaż na Marketplace
          </h1>
          <p style={{ color: '#999', fontSize: '18px', lineHeight: 1.7, maxWidth: '600px', marginBottom: '40px' }}>
            Allegro i Amazon – uruchamiamy, konfigurujemy i skalujemy Twoją sprzedaż na największych platformach w Polsce i Europie.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Umów konsultację <ArrowRight size={16} /></Link>
            <span style={{ color: '#D4A853', fontFamily: 'var(--font-syne), sans-serif', fontWeight: 700, fontSize: '16px', display: 'flex', alignItems: 'center' }}>od 1 500 zł</span>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 24px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          <div className="card">
            <h2 style={{ fontFamily: 'var(--font-syne), sans-serif', fontWeight: 800, fontSize: '28px', color: '#D4A853', marginBottom: '24px' }}>Allegro</h2>
            {allegro.map((item) => (
              <div key={item} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '12px' }}>
                <CheckCircle size={15} color="#D4A853" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ color: '#F5F5F5', fontSize: '14px' }}>{item}</span>
              </div>
            ))}
          </div>
          <div className="card">
            <h2 style={{ fontFamily: 'var(--font-syne), sans-serif', fontWeight: 800, fontSize: '28px', color: '#D4A853', marginBottom: '24px' }}>Amazon</h2>
            {amazon.map((item) => (
              <div key={item} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '12px' }}>
                <CheckCircle size={15} color="#D4A853" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ color: '#F5F5F5', fontSize: '14px' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#0D0D0D', borderTop: '1px solid #1A1A1A', padding: '80px 24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-syne), sans-serif', fontWeight: 800, fontSize: '36px', color: '#F5F5F5', marginBottom: '40px', textAlign: 'center' }}>Najczęstsze pytania</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faq.map((item) => (
              <div key={item.q} className="card">
                <h3 style={{ fontFamily: 'var(--font-syne), sans-serif', fontWeight: 700, fontSize: '16px', color: '#F5F5F5', marginBottom: '10px' }}>{item.q}</h3>
                <p style={{ color: '#999', fontSize: '14px', lineHeight: 1.7 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 24px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-syne), sans-serif', fontWeight: 800, fontSize: '40px', color: '#F5F5F5', marginBottom: '16px' }}>Chcesz sprzedawać na Allegro lub Amazon?</h2>
        <p style={{ color: '#999', fontSize: '17px', marginBottom: '32px' }}>Pierwsze spotkanie jest bezpłatne – omówimy potencjał Twojego biznesu.</p>
        <Link href="/contact" className="btn-primary" style={{ fontSize: '16px', padding: '16px 36px' }}>
          Napisz do nas <ArrowRight size={16} />
        </Link>
      </section>
    </>
  );
}
