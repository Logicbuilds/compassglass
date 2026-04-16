import type { Metadata } from 'next';

export interface PageMetadata {
  title: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
}

export function generatePageMetadata(meta: PageMetadata): Metadata {
  return {
    title: meta.title,
    description: meta.description,
    openGraph: meta.ogImage
      ? {
          images: [meta.ogImage],
        }
      : undefined,
    alternates: meta.canonical
      ? {
          canonical: meta.canonical,
        }
      : undefined,
  };
}
