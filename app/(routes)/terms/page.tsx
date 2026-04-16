import type { Metadata } from 'next';
import { Terms } from '@/src/components/pages/Terms/Terms';

export const metadata: Metadata = {
  title: 'Compass Glass',
  description: 'Compass Glass',
};

export default function TermsPage() {
  return <Terms />;
}
