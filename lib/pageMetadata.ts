import type { Metadata } from 'next';

const SITE_NAME = 'Albion Ministerial Association';

/** Per-page title, description, canonical URL and social-preview text. */
export function pageMetadata(path: string, title: string, description: string): Metadata {
  const fullTitle = `${title} | ${SITE_NAME}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      url: path,
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
    },
  };
}
