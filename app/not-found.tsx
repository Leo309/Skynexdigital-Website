import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found | SKYNEX DIGITAL',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <div className="bg-gradient-to-b from-skynex-light to-gray-100 dark:from-skynex-dark dark:to-gray-900 min-h-[70vh] flex items-center">
      <div className="container-custom text-center py-20">
        <h1 className="heading-xl mb-6 text-skynex-blue dark:text-skynex-accent">404</h1>
        <h2 className="heading-lg mb-4">Page Not Found</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link 
          href="/" 
          className="btn-primary py-3 px-8 text-lg inline-flex items-center"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>
      </div>
    </div>
  );
}
