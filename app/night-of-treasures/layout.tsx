import { pageMetadata } from '@/lib/pageMetadata';

export const metadata = pageMetadata(
  '/night-of-treasures',
  'Night of Treasures',
  'Night of Treasures, the Albion Ministerial Association’s annual evening honoring servant leaders in our community.',
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
