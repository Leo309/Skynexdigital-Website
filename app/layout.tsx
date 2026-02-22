import '../styles/globals.css';
import { Inter, Space_Grotesk } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';
import OrganizationSchema from '../components/seo/OrganizationSchema';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' });

export const metadata = {
  icons: {
    icon: '/images/SKYNEX_500_BLUE.png',
    apple: '/images/SKYNEX_500_BLUE.png',
  },
  title: {
    template: '%s | SKYNEX DIGITAL',
    default: 'SKYNEX DIGITAL',
  },
  description: 'AI-powered marketing automation tools for the new era. Check your brand visibility in AI search, manage partnerships, and automate marketing workflows.',
  keywords: 'AI marketing automation, GEO visibility, AI search optimization, marketing tools, AI agents, brand visibility, ChatGPT visibility, marketing tech',
  metadataBase: new URL('https://skynexdigital.com'),
  openGraph: {
    title: 'SKYNEX DIGITAL | AI-Powered Marketing Automation',
    description: 'AI-powered marketing automation tools for the new era. Check your brand visibility in AI search, manage partnerships, and automate marketing workflows.',
    url: 'https://skynexdigital.com',
    siteName: 'SKYNEX DIGITAL',
    locale: 'en-US',
    type: 'website',
    images: [
      {
        url: 'https://skynexdigital.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SKYNEX DIGITAL',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SKYNEX DIGITAL | AI-Powered Marketing Automation',
    description: 'AI-powered marketing automation tools built for the new era of AI search.',
    images: ['https://skynexdigital.com/images/twitter-image.jpg'],
  },
  alternates: {
    canonical: 'https://skynexdigital.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
    bing: 'bing-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        {/* Script to allow theme switching — default dark */}
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            try {
              var savedTheme = localStorage.getItem('theme');
              if (savedTheme === 'light') {
                document.documentElement.classList.remove('dark');
              } else {
                document.documentElement.classList.add('dark');
              }
            } catch (e) { }
          })();
        ` }} />
      </head>
      <body className="flex flex-col min-h-screen">
        <OrganizationSchema />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
