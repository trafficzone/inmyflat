import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, ShoppingCart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sklepy internetowe – Shopify i WooCommerce',
  description: 'Tworzymy sklepy internetowe na Shopify i WooCommerce. Pełne wdrożenie, projekt graficzny, integracje. Sklep gotowy do sprzedaży od pierwszego dnia.',
};

const included = [
  'Konsultacja i analiza potrzeb biznesowych',
  'Dobór platformy (Shopify lub WooCommerce)',
  'Projekt graficzny zgodny z identyfikacją marki',
  'Konfiguracja struktury produktów i kategorii',
  'Integracja bramek płatności (Przelewy24, PayU, Stripe)',
  'Konfiguracja dostaw i automatycznych powiadomień',
  'Responsywność na urządzenia mobilne',
  'Podstawowe SEO techniczne',
  'Szkolenie z obsługi panelu administracyjnego',
  'Wsparcie techniczne przez 30 dni po wdrożeniu',
];

const shopifyWoo = [
  { platform: 'Shopify', pros: ['Szybkie wdrożenie', 'Brak problemów z hostingiem', 'Aplikacje rozszerzające funkcje', 'Idealne dla startu'], cons: ['Miesięczna subskrypcja', 'Mniejsza elastyczność'] },
  { platform: 'WooCommerce', pros: ['Pełna kontrola nad kodem', 'Brak opłat licencyjnych', 'Dowolna personalizacja', 'Idealne dla zaawansowanych'], cons: ['Wymaga hostingu', 'Więcej pracy technicznej'] },
];

const faq = [
  { q: 'Ile trwa wdrożenie sklepu?', a: 'Standardowy sklep wdrażamy w 2–4 tygodnie od zaakceptowania projektu graficznego. Zależy to od liczby produktów i wymaganych integracji.' },
  { q: 'Shopify czy WooCommerce – co wybrać?', a: 'Doradzamy po analizie Twojego biznesu. Shopify to szybki start bez technicznego głowienia się. WooCommerce daje więcej elastyczności przy większej skali.' },
  { q: 'Czy po wdrożeniu dam radę samemu zarządzać sklepem?', a: 'Tak. Przeprowadzamy szkolenie i dostarczamy instrukcje. Oba systemy mają przyjazne panele administracyjne.' },
  { q: 'Czy mogę przenieść istniejący sklep?', a: 'Tak, wykonujemy migracje. Przenosimy produkty, klientów i historię zamówień.' },
  { q: 'Co się dzieje po zakończeniu wdrożenia?', a: 'Oferujemy 30 dni bezpłatnego wsparcia technicznego oraz opcjonalne pakiety opieki abonamentowej.' },
];

export default function SklepyPage() {
  return (
    <>
      <section style={{
        padding: '160px 24px 80px',
        background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(212,168,83,0.07) 0%, transparent 60%)',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="icon-box" style={{ marginBottom: '24px' }}><ShoppingCart size={24} /></div>
          <p className="section-label" style={{ marginBottom: '12px' }}>Usługi</p>
          <h1 style={{ fontFamily: 'var(--font-syne), sans-serif', fontWeight: 800, fontSize: 'clamp(40px, 7vw, 68px)', color: '#F5F5F5', letterSpacing: '-0.03em', marginBottom: '20px', lineHeight: 1.05 }}>
            Sklepy internetowe
          </h1>
          <p style={{ color: '#999', fontSize: '18px', lineHeight: 1.7, maxWidth: '600px', marginBottom: '40px' }}>
            Projektujemy i wdrażamy sklepy Shopify i WooCommerce gotowe do sprzedaży od pierwszego dnia. Bez zbędnych komplikacji.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Umów konsultację <ArrowRight size={16} /></Link>
            <span style={{ color: '#D4A853', fontFamily: 'var(--font-syne), sans-serif', fontWeight: 700, fontSize: '16px', display: 'flex', alignItems: 'center' }}>od 4 000 zł</span>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section style={{ padding: '80px 24px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', alignItems: 'start' }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-syne), sans-serif', fontWeight: 800, fontSize: '36px', color: '#F5F5F5', marginBottom: '8px' }}>Co zawiera wdrożenie</h2>
            <p style={{ color: '#999', fontSize: '15px', marginBottom: '32px' }}>Pełen zakres — od koncepcji do gotowego sklepu.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {included.map((item) => (
                <div key={item} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <CheckCircle size={16} color="#D4A853" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ color: '#F5F5F5', fontSize: '15px' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 style={{ fontFamily: 'var(--font-syne), sans-serif', fontWeight: 800, fontSize: '36px', color: '#F5F5F5', marginBottom: '32px' }}>Shopify czy WooCommerce?</h2>
            {shopifyWoo.map((item) => (
              <div key={item.platform} className="card" style={{ marginBottom: '20px' }}>
                <h3 style={{ fontFamily: 'var(--font-syne), sans-serif', fontWeight: 700, fontSize: '18px', color: '#D4A853', marginBottom: '16px' }}>{item.platform}</h3>
                <div style={{ marginBottom: '12px' }}>
                  {item.pros.map((p) => (
                    <div key={p} style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
                      <span style={{ color: '#D4A853' }}>+</span>
                      <span style={{ color: '#999', fontSize: '14px' }}>{p}</span>
                    </div>
                  ))}
                </div>
                {item.cons.map((c) => (
                  <div key={c} style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
                    <span style={{ color: '#555' }}>–</span>
                    <span style={{ color: '#555', fontSize: '14px' }}>{c}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
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

      {/* CTA */}
      <section style={{ padding: '80px 24px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-syne), sans-serif', fontWeight: 800, fontSize: '40px', color: '#F5F5F5', marginBottom: '16px' }}>
          Gotowy na własny sklep?
        </h2>
        <p style={{ color: '#999', fontSize: '17px', marginBottom: '32px' }}>Zadzwoń lub napisz – pierwsze spotkanie jest bezpłatne.</p>
        <Link href="/contact" className="btn-primary" style={{ fontSize: '16px', padding: '16px 36px' }}>
          Umów bezpłatną konsultację <ArrowRight size={16} />
        </Link>
      </section>
    </>
  );
}
