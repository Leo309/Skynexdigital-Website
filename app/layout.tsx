import '../styles/globals.css';
import { Inter } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  icons: {
    icon: '/images/SKYNEX_500_BLUE.png',
    apple: '/images/SKYNEX_500_BLUE.png',
  },
  title: {
    template: '%s | SKYNEX DIGITAL',
    default: 'SKYNEX DIGITAL — AI Search Visibility & Data-Driven Growth',
  },
  description: 'SKYNEX DIGITAL helps brands get found in AI search engines. We monitor your visibility across ChatGPT, Perplexity, and Gemini — and turn data into growth.',
  keywords: 'AI search visibility, GEO, generative engine optimization, brand visibility, AI SEO, data-driven growth, ChatGPT visibility',
  metadataBase: new URL('https://skynexdigital.com'),
  openGraph: {
    title: 'SKYNEX DIGITAL — AI Search Visibility & Data-Driven Growth',
    description: 'We help brands get found in AI search engines. Monitor your visibility in ChatGPT, Perplexity, and Gemini — and turn data into growth.',
    url: 'https://skynexdigital.com',
    siteName: 'SKYNEX DIGITAL',
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SKYNEX DIGITAL — AI Search Visibility & Data-Driven Growth',
    description: 'We help brands get found in AI search engines.',
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
};

// JSON-LD structured data for GEO/SEO
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SKYNEX DIGITAL',
  url: 'https://skynexdigital.com',
  logo: 'https://skynexdigital.com/images/SKYNEX_500_BLUE.png',
  description: 'Data-driven growth consultancy specializing in AI search visibility (GEO/SEO), growth automation, and data analytics.',
  email: 'hello@skynexdigital.com',
  sameAs: [
    process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://linkedin.com/company/skynexdigital',
  ],
  knowsAbout: [
    'Generative Engine Optimization',
    'AI Search Visibility',
    'Search Engine Optimization',
    'Brand Reputation Monitoring',
    'Growth Automation',
    'Data Analytics',
    'Business Development Automation',
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'AI Search Visibility & GEO Optimization',
  provider: {
    '@type': 'Organization',
    name: 'SKYNEX DIGITAL',
  },
  description: 'Monitor and optimize how your brand appears in AI search engines like ChatGPT, Perplexity, and Gemini. Generative Engine Optimization (GEO) combined with traditional SEO.',
  areaServed: 'Worldwide',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Growth Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AI Search & Brand Visibility',
          description: 'Monitor brand presence across ChatGPT, Perplexity, Gemini. Detect unwanted associations. GEO & SEO optimization.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Growth & Ad Automation',
          description: 'AI-generated video content, automated ad placement at scale, and conversion tracking.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Outreach & Business Development',
          description: 'AI-powered prospect identification, personalized outreach automation, and pipeline management.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Data & Workflow Optimization',
          description: 'Automated data pipelines, dashboards, and workflow automation that drive decisions.',
        },
      },
    ],
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'SKYNEX DIGITAL',
  url: 'https://skynexdigital.com',
  description: 'AI Search Visibility & Data-Driven Growth Consultancy',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="flex flex-col min-h-screen font-sans">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
