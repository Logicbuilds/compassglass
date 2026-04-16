import type { Metadata } from 'next';
import { Blog } from '@/src/components/pages/Blog/Blog';

export const metadata: Metadata = {
  title: 'Compass Glass Blog',
  description: 'Compass Glass Blog',
};

export default function BlogPage() {
  return <Blog />;
}
