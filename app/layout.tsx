import type { Metadata } from 'next';
import '@/src/assets/theme/index.scss';

export const metadata: Metadata = {
  title: 'Compass Glass South Africa',
  description: 'Premium glass supply solutions in South Africa',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
