import Link from 'next/link';

export const metadata = {
  title: 'Blog | SKYNEX DIGITAL',
  description: 'Insights on AI marketing automation, AI search visibility (GEO), and the future of marketing technology.',
};

// 模拟从API或数据库获取博客文章
async function getBlogPosts() {
  // 在真实项目中，这里会使用Supabase或其他数据源
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
  // Next.js 15中推荐的数据获取方式
  const posts = await getBlogPosts();
  
  return (
    <div className="bg-gradient-to-b from-skynex-light to-gray-100 dark:from-skynex-dark dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-skynex-dark to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">Blog</h1>
            <p className="text-xl text-gray-300 mb-8">
              Insights on AI search, marketing automation, and the future of marketing tech
            </p>
            <Link 
              href="/blog/subscribe"
              className="btn-primary py-3 px-8 text-lg inline-flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Subscribe to Newsletter
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-12">
              {posts.map(post => (
                <article key={post.id} className="border-b border-gray-200 dark:border-gray-700 pb-12 last:border-0">
                  <h2 className="heading-md mb-4 text-skynex-blue dark:text-skynex-accent">
                    <Link href={`/blog/${post.id}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </h2>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.author}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {post.excerpt}
                  </p>
                  <Link href={`/blog/${post.id}`} className="text-skynex-blue dark:text-skynex-accent font-medium hover:underline inline-flex items-center">
                    Read more
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
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
