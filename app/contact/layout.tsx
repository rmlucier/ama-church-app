import { pageMetadata } from '@/lib/pageMetadata';

export const metadata = pageMetadata(
  '/contact',
  'Contact Us',
  'Reach the Albion Ministerial Association by phone, email, mail or Facebook.',
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
