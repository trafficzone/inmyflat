import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, TrendingUp, ShoppingCart, Package } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Realizacje – Case Studies',
  description: 'Projekty e-commerce zrealizowane przez InMyFlat. Sklepy internetowe, marketplace, strony www z realnymi wynikami.',
};

const cases = [
  {
    category: 'Sklep internetowy',
    icon: <ShoppingCart size={16} />,
    niche: 'Branża fashion / odzież',
    challenge: 'Klient miał stary sklep WooCommerce z niską konwersją (0,6%) i brakiem optymalizacji mobilnej. Chciał zwiększyć sprzedaż bez zwiększania budżetu reklamowego.',
    solution: 'Przebudowaliśmy sklep od podstaw na nowym szablonie, zoptymalizowaliśmy ścieżkę zakupową, wdrożyliśmy up-sell i cross-sell oraz poprawiliśmy szybkość strony do <2s.',
    results: [
      { metric: '+218%', label: 'wzrost konwersji' },
      { metric: '-34%', label: 'współczynnik porzuceń koszyka' },
      { metric: '1,8s', label: 'czas ładowania strony' },
    ],
    tag: 'WooCommerce',
  },
  {
    category: 'Marketplace',
    icon: <Package size={16} />,
    niche: 'Branża AGD / elektronika',
    challenge: 'Klient sprzedawał na Allegro, ale oferty były słabo zoptymalizowane, bez Smart! i bez systematycznej pracy nad widocznością. GMV stało w miejscu od roku.',
    solution: 'Przepisaliśmy wszystkie opisy ofert, wdrożyliśmy program Smart!, zoptymalizowaliśmy ceny i wprowadziliśmy harmonogram promocji sezonowych.',
    results: [
      { metric: '+340%', label: 'GMV w 3 miesiące' },
      { metric: '120k zł', label: 'miesięczny przychód (z 28k)' },
      { metric: 'Top 3', label: 'pozycje w kluczowych kategoriach' },
    ],
    tag: 'Allegro',
  },
  {
    category: 'Sklep internetowy',
    icon: <ShoppingCart size={16} />,
    niche: 'Suplementy i zdrowie',
    challenge: 'Startup bez żadnej obecności online. Potrzebowali sklepu od zera wraz z integracją z systemem magazynowym i podłączeniem kanałów reklamowych.',
    solution: 'Wdrożyliśmy sklep Shopify, skonfigurowaliśmy integrację z BaseLinker, podłączyliśmy Google Merchant i przygotowaliśmy sklep do kampanii reklamowych.',
    results: [
      { metric: '3 tyg.', label: 'od briefu do uruchomienia' },
      { metric: '0 → 85k', label: 'PLN przychodu w 1. kwartale' },
      { metric: '4,2%', label: 'konwersja (branżowa średnia: 1,8%)' },
    ],
    tag: 'Shopify',
  },
];

export default function RealizacjePage() {
  return (
    <>
      {/* HERO */}
      <section style={{
        padding: '160px 24px 80px',
        textAlign: 'center',
        background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(212,168,83,0.07) 0%, transparent 60%)',
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <p className="section-label" style={{ marginBottom: '16px' }}>Realizacje</p>
          <h1 style={{ fontFamily: 'var(--font-syne), sans-serif', fontWeight: 800, fontSize: 'clamp(40px, 7vw, 68px)', color: '#F5F5F5', letterSpacing: '-0.03em', marginBottom: '20px', lineHeight: 1.05 }}>
            Nasze realizacje
          </h1>
          <p style={{ color: '#999', fontSize: '18px', lineHeight: 1.7 }}>
            Projekty z realnymi wynikami. Bez lania wody – tylko liczby, które mają znaczenie.
          </p>
        </div>
      </section>

      {/* CASES */}
      <section style={{ padding: '48px 24px 96px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {cases.map((c, i) => (
            <div key={i} className="card" style={{ padding: '48px' }}>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '24px' }}>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  background: '#1A1A1A', border: '1px solid #2A2A2A', borderRadius: '100px',
                  padding: '4px 12px', color: '#D4A853', fontSize: '12px', fontWeight: 600,
                }}>
                  {c.icon} {c.category}
                </span>
                <span style={{
                  display: 'inline-flex', alignItems: 'center',
                  background: '#1A1A1A', border: '1px solid #2A2A2A', borderRadius: '100px',
                  padding: '4px 12px', color: '#555', fontSize: '12px',
                }}>
                  {c.tag}
                </span>
              </div>

              <h2 style={{ fontFamily: 'var(--font-syne), sans-serif', fontWeight: 700, fontSize: '22px', color: '#F5F5F5', marginBottom: '8px' }}>{c.niche}</h2>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '32px', margin: '32px 0' }}>
                <div>
                  <p style={{ color: '#D4A853', fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>Wyzwanie</p>
                  <p style={{ color: '#999', fontSize: '14px', lineHeight: 1.7 }}>{c.challenge}</p>
                </div>
                <div>
                  <p style={{ color: '#D4A853', fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>Rozwiązanie</p>
                  <p style={{ color: '#999', fontSize: '14px', lineHeight: 1.7 }}>{c.solution}</p>
                </div>
              </div>

              <div style={{ borderTop: '1px solid #2A2A2A', paddingTop: '28px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '24px' }}>
                {c.results.map((r) => (
                  <div key={r.label}>
                    <div style={{ fontFamily: 'var(--font-syne), sans-serif', fontWeight: 800, fontSize: '36px', color: '#D4A853', lineHeight: 1, marginBottom: '6px' }}>{r.metric}</div>
                    <div style={{ color: '#555', fontSize: '13px' }}>{r.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ borderTop: '1px solid #1A1A1A', padding: '80px 24px', textAlign: 'center' }}>
        <p style={{ color: '#999', fontSize: '17px', marginBottom: '12px' }}>Chcesz podobnych wyników?</p>
        <h2 style={{ fontFamily: 'var(--font-syne), sans-serif', fontWeight: 800, fontSize: '36px', color: '#F5F5F5', marginBottom: '32px' }}>
          Porozmawiajmy o Twoim projekcie
        </h2>
        <Link href="/kontakt" className="btn-primary" style={{ fontSize: '16px', padding: '16px 36px' }}>
          Umów bezpłatną konsultację <ArrowRight size={16} />
        </Link>
      </section>
    </>
  );
}
