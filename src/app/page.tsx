import Link from 'next/link';
import { ArrowRight, ShoppingCart, Globe, Package, TrendingUp, Search, Lightbulb, Rocket, BarChart2, CheckCircle, Star } from 'lucide-react';

const services = [
  {
    icon: <ShoppingCart size={22} />,
    title: 'Sklepy internetowe',
    desc: 'Shopify / WooCommerce – od projektu do wdrożenia. Sklepy gotowe do sprzedaży od pierwszego dnia.',
    href: '/uslugi/sklepy-internetowe',
  },
  {
    icon: <Globe size={22} />,
    title: 'Strony internetowe',
    desc: 'Strony wizytówki i landing pages, które przyciągają klientów i budują zaufanie do marki.',
    href: '/uslugi/strony-internetowe',
  },
  {
    icon: <Package size={22} />,
    title: 'Marketplace',
    desc: 'Allegro / Amazon – pełna konfiguracja, integracja i wsparcie w sprzedaży na największych platformach.',
    href: '/uslugi/marketplace',
  },
  {
    icon: <TrendingUp size={22} />,
    title: 'Wsparcie e-commerce',
    desc: 'Optymalizacja, doradztwo i rozwój sprzedaży. Pomagamy skalować działanie i zwiększać konwersję.',
    href: '/uslugi/wsparcie-ecommerce',
  },
];

const steps = [
  { num: '01', icon: <Search size={20} />, title: 'Analiza potrzeb', desc: 'Poznajemy Twój biznes i definiujemy cele' },
  { num: '02', icon: <Lightbulb size={20} />, title: 'Projekt i strategia', desc: 'Tworzymy plan działania i koncepcję' },
  { num: '03', icon: <Rocket size={20} />, title: 'Wdrożenie', desc: 'Budujemy i uruchamiamy rozwiązanie' },
  { num: '04', icon: <BarChart2 size={20} />, title: 'Rozwój i wsparcie', desc: 'Optymalizujemy i skalujemy sprzedaż' },
];

const differentiators = [
  'Konkretne podejście – bez teorii, skupiamy się na wynikach',
  'Doświadczenie w sprzedaży online – wiemy, co działa',
  'Szybkie wdrożenia – nie przeciągamy projektów',
  'Kontakt bezpośredni – bez korporacyjnych procesów',
  'Wsparcie po wdrożeniu – pomagamy rozwijać biznes',
  'Technologia dopasowana do potrzeb – nie narzucamy rozwiązań',
];

const stats = [
  { value: '50+', label: 'Wdrożonych projektów' },
  { value: '3', label: 'Tygodnie średni czas wdrożenia' },
  { value: '2', label: 'Osoby – pełna odpowiedzialność' },
  { value: '5★', label: 'Ocena od klientów' },
];

const problems = [
  { title: 'Sklep bez sprzedaży?', desc: 'Zbudowany, ale klienci nie kupują. Pomożemy zdiagnozować i naprawić.' },
  { title: 'Allegro bez wzrostu?', desc: 'Sprzedajesz, ale wyniki stoją w miejscu. Skalujemy marketplace razem.' },
  { title: 'Brak czasu na optymalizację?', desc: 'Prowadzisz biznes, nie masz czasu na technologię. My to ogarniamy.' },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '120px 24px 80px',
        background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(212,168,83,0.08) 0%, transparent 60%)',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: '#1A1A1A',
            border: '1px solid #2A2A2A',
            borderRadius: '100px',
            padding: '6px 16px',
            marginBottom: '32px',
          }}>
            <Star size={12} color="#D4A853" fill="#D4A853" />
            <span style={{ fontSize: '13px', color: '#999' }}>Agencja e-commerce dla ambitnych marek</span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-syne), sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(48px, 8vw, 88px)',
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            color: '#F5F5F5',
            marginBottom: '24px',
          }}>
            Tworzymy sklepy,{' '}
            <span style={{ color: '#D4A853' }}>które sprzedają</span>
          </h1>

          <p style={{ fontSize: '18px', color: '#999', lineHeight: 1.7, maxWidth: '560px', margin: '0 auto 48px' }}>
            Budujemy e-commerce od zera – technicznie i sprzedażowo. Nie teoria, tylko wyniki.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/kontakt" className="btn-primary" style={{ fontSize: '16px', padding: '16px 32px' }}>
              Umów bezpłatną konsultację <ArrowRight size={18} />
            </Link>
            <Link href="/realizacje" className="btn-secondary" style={{ fontSize: '16px', padding: '16px 32px' }}>
              Zobacz realizacje
            </Link>
          </div>
        </div>
      </section>

      {/* PLATFORMS BAR */}
      <section style={{ borderTop: '1px solid #1A1A1A', borderBottom: '1px solid #1A1A1A', padding: '24px', background: '#0D0D0D' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '48px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '12px', color: '#555', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Pracujemy z</span>
          {['Shopify', 'WooCommerce', 'Allegro', 'Amazon', 'WordPress'].map((p) => (
            <span key={p} style={{ color: '#444', fontSize: '15px', fontWeight: 600, letterSpacing: '-0.01em' }}>{p}</span>
          ))}
        </div>
      </section>

      {/* PROBLEM → SOLUTION */}
      <section style={{ padding: '96px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <p className="section-label" style={{ marginBottom: '12px' }}>Czy to brzmi znajomo?</p>
          <h2 style={{ fontFamily: 'var(--font-syne), sans-serif', fontWeight: 800, fontSize: 'clamp(32px, 5vw, 52px)', color: '#F5F5F5', letterSpacing: '-0.02em' }}>
            Masz sklep, który nie sprzedaje?
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '48px' }}>
          {problems.map((p) => (
            <div key={p.title} className="card">
              <h3 style={{ fontFamily: 'var(--font-syne), sans-serif', fontWeight: 700, fontSize: '20px', color: '#F5F5F5', marginBottom: '12px' }}>{p.title}</h3>
              <p style={{ color: '#999', fontSize: '15px', lineHeight: 1.65 }}>{p.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center' }}>
          <Link href="/uslugi" className="btn-primary">
            Sprawdź jak pomagamy <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: '#0D0D0D', borderTop: '1px solid #1A1A1A', borderBottom: '1px solid #1A1A1A', padding: '64px 24px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '32px', textAlign: 'center' }}>
          {stats.map((s) => (
            <div key={s.label}>
              <div style={{ fontFamily: 'var(--font-syne), sans-serif', fontWeight: 800, fontSize: '48px', color: '#D4A853', letterSpacing: '-0.03em', lineHeight: 1 }}>{s.value}</div>
              <div style={{ color: '#555', fontSize: '13px', marginTop: '8px', letterSpacing: '0.02em' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: '96px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <p className="section-label" style={{ marginBottom: '12px' }}>Usługi</p>
          <h2 style={{ fontFamily: 'var(--font-syne), sans-serif', fontWeight: 800, fontSize: 'clamp(32px, 5vw, 52px)', color: '#F5F5F5', letterSpacing: '-0.02em', marginBottom: '16px' }}>
            Co robimy
          </h2>
          <p style={{ color: '#999', fontSize: '17px' }}>Kompleksowe rozwiązania e-commerce dostosowane do Twoich potrzeb</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
          {services.map((s) => (
            <Link key={s.title} href={s.href} style={{ textDecoration: 'none' }}>
              <div className="card" style={{ height: '100%', cursor: 'pointer' }}>
                <div className="icon-box" style={{ marginBottom: '24px' }}>{s.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-syne), sans-serif', fontWeight: 700, fontSize: '19px', color: '#F5F5F5', marginBottom: '12px' }}>{s.title}</h3>
                <p style={{ color: '#999', fontSize: '14px', lineHeight: 1.7, marginBottom: '20px' }}>{s.desc}</p>
                <span style={{ color: '#D4A853', fontSize: '14px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
                  Dowiedz się więcej <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* HOW WE WORK */}
      <section style={{ background: '#0D0D0D', borderTop: '1px solid #1A1A1A', padding: '96px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p className="section-label" style={{ marginBottom: '12px' }}>Proces</p>
            <h2 style={{ fontFamily: 'var(--font-syne), sans-serif', fontWeight: 800, fontSize: 'clamp(32px, 5vw, 52px)', color: '#F5F5F5', letterSpacing: '-0.02em' }}>
              Jak współpracujemy
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '8px', position: 'relative' }}>
            {steps.map((step, i) => (
              <div key={step.num} style={{ textAlign: 'center', padding: '24px 16px' }}>
                <div style={{
                  width: '64px', height: '64px', borderRadius: '50%',
                  background: '#D4A853', color: '#0A0A0A',
                  fontFamily: 'var(--font-syne), sans-serif', fontWeight: 800, fontSize: '18px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 20px',
                }}>
                  {step.num}
                </div>
                <div style={{ color: '#D4A853', marginBottom: '12px', display: 'flex', justifyContent: 'center' }}>{step.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-syne), sans-serif', fontWeight: 700, fontSize: '17px', color: '#F5F5F5', marginBottom: '8px' }}>{step.title}</h3>
                <p style={{ color: '#999', fontSize: '14px', lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section style={{ padding: '96px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', alignItems: 'center' }}>
          <div>
            <p className="section-label" style={{ marginBottom: '12px' }}>Dlaczego my</p>
            <h2 style={{ fontFamily: 'var(--font-syne), sans-serif', fontWeight: 800, fontSize: 'clamp(32px, 5vw, 48px)', color: '#F5F5F5', letterSpacing: '-0.02em', marginBottom: '20px' }}>
              Co nas wyróżnia
            </h2>
            <p style={{ color: '#999', fontSize: '16px', lineHeight: 1.7, marginBottom: '32px' }}>
              Pracujemy inaczej niż typowe agencje. Stawiamy na prostotę, efektywność i realne wyniki sprzedażowe.
            </p>
            <p style={{ color: '#555', fontSize: '14px', lineHeight: 1.7, borderLeft: '2px solid #D4A853', paddingLeft: '16px', fontStyle: 'italic' }}>
              Nie delegujemy do juniorów. Twój projekt prowadzi dokładnie ta osoba, z którą rozmawiałeś.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {differentiators.map((item) => (
              <div key={item} style={{
                display: 'flex', alignItems: 'center', gap: '14px',
                background: '#111111', border: '1px solid #2A2A2A',
                borderRadius: '10px', padding: '16px 20px',
              }}>
                <CheckCircle size={18} color="#D4A853" style={{ flexShrink: 0 }} />
                <span style={{ color: '#F5F5F5', fontSize: '15px' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={{
        padding: '96px 24px',
        textAlign: 'center',
        background: 'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(212,168,83,0.07) 0%, transparent 70%)',
        borderTop: '1px solid #1A1A1A',
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <p className="section-label" style={{ marginBottom: '16px' }}>Rozpocznij teraz</p>
          <h2 style={{ fontFamily: 'var(--font-syne), sans-serif', fontWeight: 800, fontSize: 'clamp(36px, 6vw, 64px)', color: '#F5F5F5', letterSpacing: '-0.03em', marginBottom: '20px', lineHeight: 1.05 }}>
            Zacznij sprzedawać{' '}
            <span style={{ color: '#D4A853' }}>online już dziś</span>
          </h2>
          <p style={{ color: '#999', fontSize: '17px', lineHeight: 1.7, marginBottom: '40px' }}>
            Umów bezpłatną konsultację i dowiedz się, jak możemy pomóc rozwinąć Twój biznes w internecie.
          </p>
          <Link href="/kontakt" className="btn-primary" style={{ fontSize: '16px', padding: '18px 40px' }}>
            Umów konsultację <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
