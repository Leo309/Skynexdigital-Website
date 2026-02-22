import Link from 'next/link';

export const metadata = {
  title: 'Blog | SKYNEX DIGITAL',
  description: 'Insights on AI marketing automation, AI search visibility (GEO), and the future of marketing technology.',
};

async function getBlogPosts() {
  return [
    {
      id: 1,
      title: 'What is GEO? Why AI Search Visibility is the New SEO',
      excerpt: 'Traditional SEO isn\'t enough anymore. Learn how Generative Engine Optimization helps your brand show up in ChatGPT, Perplexity, and other AI search tools...',
      date: 'February 15, 2026',
      author: 'SKYNEX Team'
    },
    {
      id: 2,
      title: 'How AI Agents Are Reshaping Marketing Workflows',
      excerpt: 'From content generation to competitive analysis, AI agents are automating the repetitive tasks that eat up marketing teams\' time...',
      date: 'February 1, 2026',
      author: 'SKYNEX Team'
    },
    {
      id: 3,
      title: 'Building Products for the AI Era: Lessons from GeoGrade.ai',
      excerpt: 'How we built an AI agent that simulates real users to check brand visibility across AI search platforms...',
      date: 'January 20, 2026',
      author: 'SKYNEX Team'
    }
  ];
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="bg-skynex-dark text-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 starfield opacity-50" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl font-display text-gradient-light mb-6">Blog</h1>
            <p className="text-xl text-gray-300 mb-8">
              Insights on AI search, marketing automation, and the future of marketing tech
            </p>
            <Link
              href="/blog/subscribe"
              className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-medium hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Subscribe to Newsletter
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-12">
              {posts.map(post => (
                <article key={post.id} className="glass-card p-8 border-l-2 border-l-skynex-accent">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-skynex-accent">
                    <Link href={`/blog/${post.id}`} className="hover:text-white transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span>{post.date}</span>
                    <span className="mx-2">&bull;</span>
                    <span>{post.author}</span>
                  </div>
                  <p className="text-gray-300 mb-6">
                    {post.excerpt}
                  </p>
                  <Link href={`/blog/${post.id}`} className="text-skynex-accent font-medium hover:text-white transition-colors inline-flex items-center">
                    Read more
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
