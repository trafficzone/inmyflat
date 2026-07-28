import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Wsparcie e-commerce – Optymalizacja i Doradztwo',
  description: 'Audyt sklepu, optymalizacja konwersji, doradztwo e-commerce. Pomagamy skalować istniejące sklepy i marketplace.',
};

const services = [
  { title: 'Audyt sklepu', desc: 'Analizujemy UX, szybkość, ścieżkę zakupową, porzucone koszyki i wskazujemy konkretne punkty do poprawy.' },
  { title: 'Optymalizacja konwersji (CRO)', desc: 'Wprowadzamy zmiany w oparciu o dane – nie intuicję. Testujemy, mierzymy, optymalizujemy.' },
  { title: 'Analityka i raportowanie', desc: 'Konfiguracja GA4, śledzenie zdarzeń, miesięczne raporty z wnioskami i rekomendacjami.' },
  { title: 'Strategia e-commerce', desc: 'Planowanie wzrostu, analiza konkurencji, dobór kanałów sprzedaży i narzędzi.' },
  { title: 'Integracje i automatyzacje', desc: 'Łączymy sklep z ERP, CRM, systemami magazynowymi i narzędziami marketingowymi.' },
];

const packages = [
  { name: 'Audyt jednorazowy', price: 'od 800 zł', desc: 'Jednorazowa analiza sklepu z raportem i listą rekomendacji. Idealne jako punkt startowy.' },
  { name: 'Wsparcie miesięczne', price: 'od 1 500 zł / mies.', desc: 'Stała opieka: monitoring wyników, wdrażanie zmian, konsultacje bez limitów.' },
  { name: 'Projekt optymalizacyjny', price: 'od 3 000 zł', desc: 'Intensywna współpraca 4–8 tygodni z konkretnymi celami i mierzalnymi wynikami.' },
];

const faq = [
  { q: 'Jak szybko zobaczę wyniki?', a: 'Pierwsze efekty optymalizacji konwersji widać zwykle w ciągu 4–8 tygodni. Audyt dostarcza wyniki od razu po zakończeniu.' },
  { q: 'Czy musicie mieć dostęp do mojego sklepu?', a: 'Tak – potrzebujemy dostępu do analityki i panelu sklepu. Wszystkie dane traktujemy jako poufne.' },
  { q: 'Czy oferujecie wsparcie dla Allegro?', a: 'Tak. Optymalizujemy zarówno sklepy własne, jak i konta marketplace.' },
  { q: 'Co zawiera miesięczny raport?', a: 'Kluczowe metryki, porównanie z poprzednim okresem, opis zrealizowanych działań i plan na kolejny miesiąc.' },
];

export default function EcommerceSupportPage() {
  return (
    <>
      <section style={{
        padding: '160px 24px 80px',
        background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(212,168,83,0.07) 0%, transparent 60%)',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="icon-box" style={{ marginBottom: '24px' }}><TrendingUp size={24} /></div>
          <p className="section-label" style={{ marginBottom: '12px' }}>Usługi</p>
          <h1 style={{ fontFamily: 'var(--font-syne), sans-serif', fontWeight: 800, fontSize: 'clamp(40px, 7vw, 68px)', color: '#F5F5F5', letterSpacing: '-0.03em', marginBottom: '20px', lineHeight: 1.05 }}>
            Wsparcie e-commerce
          </h1>
          <p style={{ color: '#999', fontSize: '18px', lineHeight: 1.7, maxWidth: '600px', marginBottom: '40px' }}>
            Masz sklep, ale wyniki nie rosną? Audytujemy, optymalizujemy i wdrażamy zmiany, które realnie wpływają na sprzedaż.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Umów konsultację <ArrowRight size={16} /></Link>
            <span style={{ color: '#D4A853', fontFamily: 'var(--font-syne), sans-serif', fontWeight: 700, fontSize: '16px', display: 'flex', alignItems: 'center' }}>od 800 zł</span>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 24px', maxWidth: '1100px', margin: '0 auto' }}>
        <h2 style={{ fontFamily: 'var(--font-syne), sans-serif', fontWeight: 800, fontSize: '36px', color: '#F5F5F5', marginBottom: '40px' }}>Zakres wsparcia</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '64px' }}>
          {services.map((s) => (
            <div key={s.title} className="card">
              <h3 style={{ fontFamily: 'var(--font-syne), sans-serif', fontWeight: 700, fontSize: '17px', color: '#F5F5F5', marginBottom: '10px' }}>{s.title}</h3>
              <p style={{ color: '#999', fontSize: '14px', lineHeight: 1.65 }}>{s.desc}</p>
            </div>
          ))}
        </div>

        <h2 style={{ fontFamily: 'var(--font-syne), sans-serif', fontWeight: 800, fontSize: '36px', color: '#F5F5F5', marginBottom: '32px' }}>Pakiety współpracy</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {packages.map((p) => (
            <div key={p.name} className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <h3 style={{ fontFamily: 'var(--font-syne), sans-serif', fontWeight: 700, fontSize: '17px', color: '#F5F5F5' }}>{p.name}</h3>
                <span style={{ color: '#D4A853', fontSize: '13px', fontWeight: 600, textAlign: 'right', flexShrink: 0, marginLeft: '12px' }}>{p.price}</span>
              </div>
              <p style={{ color: '#999', fontSize: '14px', lineHeight: 1.65 }}>{p.desc}</p>
            </div>
          ))}
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
        <h2 style={{ fontFamily: 'var(--font-syne), sans-serif', fontWeight: 800, fontSize: '40px', color: '#F5F5F5', marginBottom: '16px' }}>Chcesz podobnych wyników?</h2>
        <p style={{ color: '#999', fontSize: '17px', marginBottom: '32px' }}>Opowiedz o swojej sytuacji – bezpłatnie ocenimy potencjał wzrostu.</p>
        <Link href="/contact" className="btn-primary" style={{ fontSize: '16px', padding: '16px 36px' }}>
          Umów bezpłatną konsultację <ArrowRight size={16} />
        </Link>
      </section>
    </>
  );
}
