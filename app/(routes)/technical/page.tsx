import type { Metadata } from 'next';
import { Technical } from '@/src/components/pages/Technical/Technical';

export const metadata: Metadata = {
  title: 'Compass Glass Technical Information',
  description: 'Compass Glass Technical Information',
};

export default function TechnicalPage() {
  return <Technical />;
}
