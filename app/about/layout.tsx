import { pageMetadata } from '@/lib/pageMetadata';

export const metadata = pageMetadata(
  '/about',
  'About Us',
  'The mission, vision, core values and leadership of the Albion Ministerial Association, a fellowship of churches serving Albion, MI.',
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
