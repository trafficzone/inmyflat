import Link from 'next/link';

export default function RedirectStub({ to }: { to: string }) {
  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${to}`} />
      <link rel="canonical" href={to} />
      <section style={{ padding: '200px 24px', textAlign: 'center' }}>
        <p style={{ color: '#999', fontSize: '16px' }}>
          Ta strona się przeniosła. <Link href={to} style={{ color: '#D4A853' }}>Przejdź tutaj</Link>.
        </p>
      </section>
    </>
  );
}
