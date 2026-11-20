import { pageMetadata } from '@/lib/pageMetadata';

export const metadata = pageMetadata(
  '/help',
  'Get Help',
  'Local resources in Albion, MI for food, clothing, housing, childcare and other support.',
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
