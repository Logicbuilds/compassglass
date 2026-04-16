import type { Metadata } from 'next';
import { About } from '@/src/components/pages/About/About';

export const metadata: Metadata = {
  title: 'About Compass Glass',
  description: 'About Compass Glass',
};

export default function AboutPage() {
  return <About />;
}
