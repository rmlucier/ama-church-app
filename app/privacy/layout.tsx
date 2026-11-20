import { pageMetadata } from '@/lib/pageMetadata';

export const metadata = pageMetadata(
  '/privacy',
  'Privacy Policy',
  'How the Albion Ministerial Association website collects, uses and protects your information.',
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
