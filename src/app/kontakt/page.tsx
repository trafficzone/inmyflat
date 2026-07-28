import type { Metadata } from 'next';
import RedirectStub from '@/components/RedirectStub';

export const metadata: Metadata = { title: 'Przekierowanie' };

export default function Page() {
  return <RedirectStub to="/contact" />;
}
