import { pageMetadata } from '@/lib/pageMetadata';

export const metadata = pageMetadata(
  '/donate',
  'Donate',
  'Support the Albion Ministerial Association by Cash App or by mailing a check to PO Box 481, Albion, MI.',
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
