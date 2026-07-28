import type { Metadata } from 'next';
import Link from 'next/link';
import { ShoppingCart, Globe, Package, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Usługi',
  description: 'Kompleksowe usługi e-commerce – sklepy internetowe, strony www, marketplace, wsparcie sprzedaży.',
};

const services = [
  {
    icon: <ShoppingCart size={28} />,
    title: 'Sklepy internetowe',
    desc: 'Shopify lub WooCommerce – dopasowujemy platformę do Twojego biznesu. Projektujemy, wdrażamy i konfigurujemy sklep gotowy do sprzedaży od pierwszego dnia.',
    price: 'od 4 000 zł',
    features: ['Projekt graficzny', 'Wdrożenie i konfiguracja', 'Bramki płatności', 'Integracje z systemami', 'Szkolenie z obsługi'],
    href: '/services/online-stores',
  },
  {
    icon: <Globe size={28} />,
    title: 'Strony internetowe',
    desc: 'Strony wizytówki i landing pages zaprojektowane pod konwersję. Szybkie, responsywne, zoptymalizowane pod SEO.',
    price: 'od 2 500 zł',
    features: ['Projekt i UX', 'Responsywność (mobile)', 'Optymalizacja SEO', 'Formularz kontaktowy', 'CMS do samodzielnej edycji'],
    href: '/services/websites',
  },
  {
    icon: <Package size={28} />,
    title: 'Marketplace',
    desc: 'Allegro i Amazon – uruchamiamy, konfigurujemy i optymalizujemy Twoją sprzedaż na największych platformach w Polsce i Europie.',
    price: 'od 1 500 zł',
    features: ['Konfiguracja konta', 'Optymalizacja ofert', 'Integracja z magazynem', 'Strategia cenowa', 'Wsparcie bieżące'],
    href: '/services/marketplace',
  },
  {
    icon: <TrendingUp size={28} />,
    title: 'Wsparcie e-commerce',
    desc: 'Masz już sklep, ale wyniki nie satysfakcjonują? Audytujemy, optymalizujemy i wdrażamy zmiany, które realnie zwiększają sprzedaż.',
    price: 'od 800 zł / mies.',
    features: ['Audyt sklepu', 'Optymalizacja konwersji', 'Analityka i raportowanie', 'A/B testy', 'Doradztwo strategiczne'],
    href: '/services/ecommerce-support',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section style={{
        padding: '160px 24px 80px',
        textAlign: 'center',
        background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(212,168,83,0.07) 0%, transparent 60%)',
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <p className="section-label" style={{ marginBottom: '16px' }}>Usługi</p>
          <h1 style={{ fontFamily: 'var(--font-syne), sans-serif', fontWeight: 800, fontSize: 'clamp(40px, 7vw, 72px)', color: '#F5F5F5', letterSpacing: '-0.03em', marginBottom: '20px', lineHeight: 1.05 }}>
            Kompleksowe wsparcie e-commerce
          </h1>
          <p style={{ color: '#999', fontSize: '18px', lineHeight: 1.7 }}>
            Dobieramy rozwiązania do Twoich celów – nie narzucamy jednej drogi.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: '64px 24px 96px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {services.map((s) => (
            <div key={s.title} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="icon-box" style={{ marginBottom: '24px' }}>{s.icon}</div>
              <h2 style={{ fontFamily: 'var(--font-syne), sans-serif', fontWeight: 700, fontSize: '22px', color: '#F5F5F5', marginBottom: '12px' }}>{s.title}</h2>
              <p style={{ color: '#999', fontSize: '15px', lineHeight: 1.7, marginBottom: '24px', flex: 1 }}>{s.desc}</p>
              <div style={{ marginBottom: '24px' }}>
                {s.features.map((f) => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                    <CheckCircle size={14} color="#D4A853" style={{ flexShrink: 0 }} />
                    <span style={{ color: '#999', fontSize: '14px' }}>{f}</span>
                  </div>
                ))}
              </div>
              <div style={{ borderTop: '1px solid #2A2A2A', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#D4A853', fontFamily: 'var(--font-syne), sans-serif', fontWeight: 700, fontSize: '16px' }}>{s.price}</span>
                <Link href={s.href} style={{ color: '#D4A853', fontSize: '14px', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  Dowiedz się więcej <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ borderTop: '1px solid #1A1A1A', padding: '80px 24px', textAlign: 'center' }}>
        <p style={{ color: '#999', fontSize: '17px', marginBottom: '12px' }}>Nie wiesz, czego potrzebujesz?</p>
        <h2 style={{ fontFamily: 'var(--font-syne), sans-serif', fontWeight: 800, fontSize: '36px', color: '#F5F5F5', marginBottom: '32px' }}>Napisz do nas, doradzimy bezpłatnie</h2>
        <Link href="/contact" className="btn-primary" style={{ fontSize: '16px', padding: '16px 36px' }}>
          Umów konsultację <ArrowRight size={16} />
        </Link>
      </section>
    </>
  );
}
