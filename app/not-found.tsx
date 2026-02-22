import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found | SKYNEX DIGITAL',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <div className="bg-skynex-dark min-h-[70vh] flex items-center relative overflow-hidden">
      {/* Starfield */}
      <div className="absolute inset-0 starfield opacity-50" />

      <div className="container-custom text-center py-20 relative z-10">
        <h1 className="text-7xl md:text-9xl font-display font-bold text-skynex-accent animate-glow-pulse mb-6">404</h1>
        <h2 className="heading-lg text-white mb-4">Page Not Found</h2>
        <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-medium hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>
      </div>
    </div>
  );
}
