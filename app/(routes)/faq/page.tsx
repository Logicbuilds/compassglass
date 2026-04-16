import type { Metadata } from 'next';
import { Faq } from '@/src/components/pages/Faq/Faq';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Frequently Asked Questions',
};

export default function FaqPage() {
  return <Faq />;
}
