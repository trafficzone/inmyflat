import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'O nas – Kim jesteśmy',
  description: 'InMyFlat to dwuosobowa agencja e-commerce. Pomagamy markom wejść do internetu i zwiększać sprzedaż online.',
};

const values = [
  { title: 'Konkrety, nie teoria', desc: 'Każda decyzja musi mieć uzasadnienie biznesowe. Nie robimy nic "bo tak wypada".' },
  { title: 'Pełna odpowiedzialność', desc: 'Twój projekt prowadzi ta sama osoba od briefu do wdrożenia. Zero przekazywania.' },
  { title: 'Długoterminowe myślenie', desc: 'Wolimy zbudować coś, co działa latami, niż szybki efekt, który wymaga ciągłych napraw.' },
];

const stats = [
  { value: '50+', label: 'Projektów e-commerce' },
  { value: '5+', label: 'Lat w branży' },
  { value: '2', label: 'Osoby – pełna odpowiedzialność' },
  { value: '3', label: 'Tygodnie średni czas wdrożenia' },
];

const team = [
  {
    name: 'Osoba 1',
    role: 'E-commerce & Technologia',
    bio: 'Odpowiada za stronę techniczną projektów – sklepy, integracje, wdrożenia. Pracował przy ponad 30 projektach e-commerce na platformach Shopify i WooCommerce.',
  },
  {
    name: 'Osoba 2',
    role: 'Strategia & Marketplace',
    bio: 'Specjalizuje się w sprzedaży na Allegro i Amazon oraz strategii e-commerce. Pomogła kilkudziesięciu markom wejść na marketplace i zbudować stabilne przychody.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section style={{
        padding: '160px 24px 96px',
        background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(212,168,83,0.07) 0%, transparent 60%)',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }} className="hero-grid">
          <div style={{ minWidth: 0 }}>
            <p className="section-label" style={{ marginBottom: '16px' }}>O nas</p>
            <h1 style={{ fontFamily: 'var(--font-syne), sans-serif', fontWeight: 800, fontSize: 'clamp(32px, 4.5vw, 56px)', color: '#F5F5F5', letterSpacing: '-0.03em', marginBottom: '24px', lineHeight: 1.05, wordBreak: 'break-word', hyphens: 'auto' }}>
              Dwie osoby.<br />
              <span style={{ color: '#D4A853' }}>Pełna odpowiedzialność.</span>
            </h1>
            <p style={{ color: '#999', fontSize: '17px', lineHeight: 1.7 }}>
              Jesteśmy zespołem, który realnie wdraża e-commerce – od strony technicznej po sprzedaż. Dziesiątki projektów, jedno podejście: praktyczne, sprzedażowe, bez zbędnej teorii.
            </p>
          </div>
          <div style={{ borderLeft: '2px solid #D4A853', paddingLeft: '32px', minWidth: 0 }}>
            <p style={{ color: '#999', fontSize: '16px', lineHeight: 1.8, fontStyle: 'italic', marginBottom: '20px' }}>
              &ldquo;Nie jesteśmy agencją z 20-osobowym teamem, gdzie Twój projekt trafia do juniora. Pracujesz bezpośrednio z nami – od pierwszej rozmowy do wdrożenia i dalej.&rdquo;
            </p>
            <p style={{ color: '#D4A853', fontSize: '14px', fontWeight: 600 }}>— Zespół InMyFlat</p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: '#0D0D0D', borderTop: '1px solid #1A1A1A', borderBottom: '1px solid #1A1A1A', padding: '64px 24px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '32px', textAlign: 'center' }}>
          {stats.map((s) => (
            <div key={s.label}>
              <div style={{ fontFamily: 'var(--font-syne), sans-serif', fontWeight: 800, fontSize: '48px', color: '#D4A853', letterSpacing: '-0.03em', lineHeight: 1 }}>{s.value}</div>
              <div style={{ color: '#555', fontSize: '13px', marginTop: '8px' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section style={{ padding: '96px 24px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <p className="section-label" style={{ marginBottom: '12px' }}>Zespół</p>
          <h2 style={{ fontFamily: 'var(--font-syne), sans-serif', fontWeight: 800, fontSize: 'clamp(32px, 5vw, 48px)', color: '#F5F5F5', letterSpacing: '-0.02em' }}>
            Z kim będziesz pracować
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          {team.map((member) => (
            <div key={member.name} className="card" style={{ padding: '40px' }}>
              <div style={{
                width: '72px', height: '72px', borderRadius: '50%',
                background: '#1A1A1A', border: '2px solid #2A2A2A',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '20px',
                fontFamily: 'var(--font-syne), sans-serif', fontWeight: 800, fontSize: '24px', color: '#D4A853',
              }}>
                {member.name.charAt(0)}
              </div>
              <h3 style={{ fontFamily: 'var(--font-syne), sans-serif', fontWeight: 700, fontSize: '20px', color: '#F5F5F5', marginBottom: '4px' }}>{member.name}</h3>
              <p style={{ color: '#D4A853', fontSize: '13px', fontWeight: 600, marginBottom: '16px', letterSpacing: '0.05em' }}>{member.role}</p>
              <p style={{ color: '#999', fontSize: '14px', lineHeight: 1.7 }}>{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section style={{ background: '#0D0D0D', borderTop: '1px solid #1A1A1A', padding: '96px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p className="section-label" style={{ marginBottom: '12px' }}>Wartości</p>
            <h2 style={{ fontFamily: 'var(--font-syne), sans-serif', fontWeight: 800, fontSize: 'clamp(32px, 5vw, 48px)', color: '#F5F5F5', letterSpacing: '-0.02em' }}>
              W co wierzymy
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {values.map((v, i) => (
              <div key={v.title} className="card">
                <div style={{ fontFamily: 'var(--font-syne), sans-serif', fontWeight: 800, fontSize: '48px', color: '#1A1A1A', marginBottom: '16px', lineHeight: 1 }}>
                  0{i + 1}
                </div>
                <h3 style={{ fontFamily: 'var(--font-syne), sans-serif', fontWeight: 700, fontSize: '19px', color: '#F5F5F5', marginBottom: '10px' }}>{v.title}</h3>
                <p style={{ color: '#999', fontSize: '14px', lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 24px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-syne), sans-serif', fontWeight: 800, fontSize: '40px', color: '#F5F5F5', marginBottom: '16px' }}>
          Chcesz poznać nas lepiej?
        </h2>
        <p style={{ color: '#999', fontSize: '17px', marginBottom: '32px' }}>Napisz do nas – pierwsze spotkanie jest bezpłatne i niezobowiązujące.</p>
        <Link href="/contact" className="btn-primary" style={{ fontSize: '16px', padding: '16px 36px' }}>
          Skontaktuj się <ArrowRight size={16} />
        </Link>
      </section>
    </>
  );
}
