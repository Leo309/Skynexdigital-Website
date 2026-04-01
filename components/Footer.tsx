import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-100 py-8">
      <div className="container-page flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-400">
        <p>&copy; {new Date().getFullYear()} SKYNEX DIGITAL</p>
        <div className="flex items-center gap-6">
          <Link href="/privacy" className="hover:text-zinc-600 transition-colors">Privacy</Link>
          <Link href="/terms" className="hover:text-zinc-600 transition-colors">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
