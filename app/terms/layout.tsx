import { pageMetadata } from '@/lib/pageMetadata';

export const metadata = pageMetadata(
  '/terms',
  'Terms of Use',
  'Terms of use for the Albion Ministerial Association website.',
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
