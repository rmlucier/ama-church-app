import { pageMetadata } from '@/lib/pageMetadata';

export const metadata = pageMetadata(
  '/churches',
  'Find a Church',
  'Directory of churches in Albion, MI, including AMA member churches, with addresses, directions and a church map.',
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
