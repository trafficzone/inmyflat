import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Skontaktuj się z InMyFlat. Umów bezpłatną konsultację e-commerce. Odpowiadamy w ciągu 24 godzin.',
};

export default function KontaktLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
