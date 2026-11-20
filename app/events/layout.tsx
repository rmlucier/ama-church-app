import { pageMetadata } from '@/lib/pageMetadata';

export const metadata = pageMetadata(
  '/events',
  'Upcoming Events',
  'Upcoming Albion Ministerial Association meetings and community events in Albion, MI.',
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
