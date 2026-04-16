import type { Metadata } from 'next';
import { Home } from '@/src/components/pages/Home/Home';

export const metadata: Metadata = {
  title: 'Compass Glass South Africa',
  description: 'Compass Glass South Africa',
};

export default function HomePage() {
  return <Home />;
}
