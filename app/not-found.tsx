import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found',
  robots: { index: false },
};

export default function NotFound() {
  return (
    <div className="max-w-xl mx-auto text-center py-16">
      <Image
        src="/images/brand/ama-seal.png"
        alt=""
        width={96}
        height={96}
        className="mx-auto mb-6"
      />
      <h1 className="text-4xl text-heading mb-4">Page not found</h1>
      <p className="text-lg text-primary mb-8">
        Sorry, we couldn&apos;t find that page. It may have moved, or the link may be out of date.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link href="/" className="btn-primary">Go to the home page</Link>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold border-2 border-accent text-accent hover:bg-accent hover:text-white transition-colors"
        >
          Contact us
        </Link>
      </div>
    </div>
  );
}
