import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Strony internetowe – Wizytówki i Landing Pages',
  description: 'Projektujemy i wdrażamy strony internetowe, wizytówki firmowe i landing pages zoptymalizowane pod konwersję i SEO.',
};

const included = [
  'Projekt UX/UI dopasowany do marki',
  'Responsywność – idealne na każdym urządzeniu',
  'Szybkość ładowania (Core Web Vitals)',
  'Podstawowa optymalizacja SEO',
  'Formularz kontaktowy',
  'Integracja z Google Analytics / Meta Pixel',
  'CMS do samodzielnej edycji treści',
  'Certyfikat SSL i hosting (opcjonalnie)',
  '14 dni poprawek po oddaniu projektu',
];

const types = [
  { title: 'Strona wizytówka', desc: 'Prezentacja firmy, usług i danych kontaktowych. Idealna dla firm usługowych i lokalnych.', price: 'od 2 500 zł' },
  { title: 'Landing page', desc: 'Jedna strona skupiona na jednym celu – generowaniu leadów lub sprzedaży konkretnego produktu.', price: 'od 1 800 zł' },
  { title: 'Strona wielostronicowa', desc: 'Rozbudowana strona z blogiem, portfoliom lub sekcją produktów. Dla firm z dużą ilością treści.', price: 'od 4 500 zł' },
];

const faq = [
  { q: 'Ile trwa stworzenie strony?', a: 'Standardowa strona wizytówka to 1–2 tygodnie. Landing page nawet 5–7 dni roboczych.' },
  { q: 'Czy dostanę możliwość samodzielnej edycji?', a: 'Tak. Wdrażamy panel CMS (WordPress lub inny) umożliwiający edycję treści bez wiedzy technicznej.' },
  { q: 'Czy zajmujecie się hostingiem?', a: 'Opcjonalnie – możemy zająć się hostingiem lub wdrożyć stronę na Twojej infrastrukturze.' },
  { q: 'Czy strona będzie dobrze widoczna w Google?', a: 'Wdrażamy podstawowe SEO techniczne: meta tagi, szybkość, strukturę. Pozycjonowanie treści to osobna usługa.' },
];

export default function StronyPage() {
  return (
    <>
      <section style={{
        padding: '160px 24px 80px',
        background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(212,168,83,0.07) 0%, transparent 60%)',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="icon-box" style={{ marginBottom: '24px' }}><Globe size={24} /></div>
          <p className="section-label" style={{ marginBottom: '12px' }}>Usługi</p>
          <h1 style={{ fontFamily: 'var(--font-syne), sans-serif', fontWeight: 800, fontSize: 'clamp(40px, 7vw, 68px)', color: '#F5F5F5', letterSpacing: '-0.03em', marginBottom: '20px', lineHeight: 1.05 }}>
            Strony internetowe
          </h1>
          <p style={{ color: '#999', fontSize: '18px', lineHeight: 1.7, maxWidth: '600px', marginBottom: '40px' }}>
            Strony, które nie tylko wyglądają dobrze – są zaprojektowane, żeby zamieniać odwiedzających w klientów.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">Umów konsultację <ArrowRight size={16} /></Link>
            <span style={{ color: '#D4A853', fontFamily: 'var(--font-syne), sans-serif', fontWeight: 700, fontSize: '16px', display: 'flex', alignItems: 'center' }}>od 1 800 zł</span>
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 24px', maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', alignItems: 'start' }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-syne), sans-serif', fontWeight: 800, fontSize: '36px', color: '#F5F5F5', marginBottom: '32px' }}>Co zawiera projekt</h2>
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
            <h2 style={{ fontFamily: 'var(--font-syne), sans-serif', fontWeight: 800, fontSize: '36px', color: '#F5F5F5', marginBottom: '32px' }}>Rodzaje stron</h2>
            {types.map((t) => (
              <div key={t.title} className="card" style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                  <h3 style={{ fontFamily: 'var(--font-syne), sans-serif', fontWeight: 700, fontSize: '17px', color: '#F5F5F5' }}>{t.title}</h3>
                  <span style={{ color: '#D4A853', fontSize: '14px', fontWeight: 600 }}>{t.price}</span>
                </div>
                <p style={{ color: '#999', fontSize: '14px', lineHeight: 1.65 }}>{t.desc}</p>
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
        <h2 style={{ fontFamily: 'var(--font-syne), sans-serif', fontWeight: 800, fontSize: '40px', color: '#F5F5F5', marginBottom: '16px' }}>Potrzebujesz strony?</h2>
        <p style={{ color: '#999', fontSize: '17px', marginBottom: '32px' }}>Opowiedz nam o projekcie – wycenimy i doradzimy bezpłatnie.</p>
        <Link href="/contact" className="btn-primary" style={{ fontSize: '16px', padding: '16px 36px' }}>
          Napisz do nas <ArrowRight size={16} />
        </Link>
      </section>
    </>
  );
}
