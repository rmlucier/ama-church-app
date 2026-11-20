import { pageMetadata } from '@/lib/pageMetadata';

export const metadata = pageMetadata(
  '/volunteer',
  'Get Involved',
  'Volunteer, join a committee, or bring your church into the Albion Ministerial Association.',
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
