'use client';

import { motion } from 'framer-motion';

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const faqItems = [
  {
    question: 'What is GEO (Generative Engine Optimization)?',
    answer: 'GEO is the practice of optimizing your brand\'s presence in AI-powered search engines like ChatGPT, Perplexity, and Google Gemini. Unlike traditional SEO which focuses on ranking in search results, GEO ensures your brand is accurately represented when AI generates answers to user queries.',
  },
  {
    question: 'How is GEO different from traditional SEO?',
    answer: 'Traditional SEO optimizes for search engine result pages (SERPs) — getting your website to rank higher in Google. GEO optimizes for AI-generated answers — making sure AI search engines mention your brand correctly and favorably when users ask questions. Both are important, and they complement each other.',
  },
  {
    question: 'How do you monitor brand visibility in AI search?',
    answer: 'We simulate real user queries across multiple AI platforms (ChatGPT, Perplexity, Gemini, and others) and analyze how your brand appears in the responses. This includes tracking brand mentions, sentiment, accuracy of information, and unwanted associations. We\'re also building GeoGrade.ai to make this process automated and measurable.',
  },
  {
    question: 'What kind of businesses do you work with?',
    answer: 'We work with businesses of all sizes that care about how they appear in AI search results — from DTC brands looking to increase visibility, to enterprises wanting to monitor and protect their brand reputation in the AI era. If AI search engines are talking about your industry, you should know what they\'re saying about you.',
  },
  {
    question: 'What is GeoGrade.ai?',
    answer: 'GeoGrade.ai is a product we\'re building that measures your brand\'s visibility across AI search platforms. It simulates real user queries, scores how visible your brand is, provides competitive analysis, and gives actionable recommendations to improve your AI search presence.',
  },
];

const services = [
  {
    title: 'AI Search & Brand Visibility',
    desc: 'Monitor how your brand appears in ChatGPT, Perplexity, and Gemini. Detect unwanted associations. Optimize for both AI-generated answers (GEO) and traditional search (SEO).',
  },
  {
    title: 'Growth & Ad Automation',
    desc: 'AI-generated video content, automated ad placement at scale, and conversion tracking. Turn AI tools into a customer acquisition engine.',
  },
  {
    title: 'Outreach & Business Development',
    desc: 'Identify high-fit prospects with AI, automate personalized outreach, and build a pipeline from first touch to closed deal.',
  },
  {
    title: 'Data & Workflow Optimization',
    desc: 'Automated data pipelines, dashboards, and n8n workflows. Turn raw data into clear insights that drive decisions.',
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-40 pb-24 sm:pt-48 sm:pb-32">
        <div className="max-w-4xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-sm text-zinc-400 tracking-wide"
          >
            Data-driven growth consultancy
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-4 text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight text-zinc-900 leading-[1.1]"
          >
            We help brands grow with
            <br />
            data, AI, and automation.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="mt-6 text-lg text-zinc-500 max-w-xl leading-relaxed"
          >
            SKYNEX DIGITAL combines GEO, SEO, AI tools, and analytics to make
            your brand more visible, your marketing more efficient, and your growth
            more predictable.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.45 }}
            className="mt-10 flex items-center gap-6"
          >
            <a
              href="#contact"
              className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-white bg-zinc-900 rounded-lg hover:bg-zinc-700 transition-colors duration-200"
            >
              Get in touch
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a href="#services" className="text-sm text-zinc-400 hover:text-zinc-900 transition-colors duration-200">
              What we do
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="scroll-mt-20 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <Reveal>
            <p className="text-sm text-zinc-400 tracking-wide">What We Do</p>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900">
              Full-stack growth, powered by AI
            </h2>
          </Reveal>

          <div className="mt-14 grid sm:grid-cols-2 gap-x-12 gap-y-14">
            {services.map((svc, i) => (
              <Reveal key={svc.title} delay={i * 0.08}>
                <div className="group">
                  <div className="flex items-start gap-4">
                    <span className="mt-1 flex items-center justify-center w-7 h-7 rounded-full bg-zinc-100 text-zinc-500 text-xs font-semibold group-hover:bg-zinc-900 group-hover:text-white transition-colors duration-300">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="text-[15px] font-semibold text-zinc-900">{svc.title}</h3>
                      <p className="mt-2 text-sm text-zinc-500 leading-relaxed">{svc.desc}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── GeoGrade.ai ── */}
      <section id="geograde" className="scroll-mt-20 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 p-8 sm:p-10 rounded-2xl bg-zinc-50 border border-zinc-100">
              <div>
                <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">Our Product</p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-900">GeoGrade.ai</h2>
                <p className="mt-3 text-sm text-zinc-500 leading-relaxed max-w-md">
                  We built GeoGrade.ai to make AI search visibility measurable.
                  It scores how visible your brand is across AI platforms — so you
                  know exactly where you stand.
                </p>
              </div>
              <a
                href="https://geograde.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-zinc-900 bg-white border border-zinc-200 rounded-lg hover:border-zinc-900 transition-colors duration-200 shrink-0"
              >
                Visit GeoGrade.ai
                <svg className="ml-2 w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ — structured data for GEO ── */}
      <section className="scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <Reveal>
            <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">FAQ</p>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900">
              Frequently asked questions
            </h2>
          </Reveal>

          <div className="mt-10 space-y-0 divide-y divide-zinc-200">
            {faqItems.map((item, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <details className="group py-5">
                  <summary className="flex items-center justify-between cursor-pointer text-[15px] font-medium text-zinc-900 hover:text-zinc-600 transition-colors list-none [&::-webkit-details-marker]:hidden">
                    {item.question}
                    <svg className="w-4 h-4 text-zinc-400 group-open:rotate-45 transition-transform duration-200 shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </summary>
                  <p className="mt-3 text-sm text-zinc-500 leading-relaxed pr-8">
                    {item.answer}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqItems.map((item) => ({
                '@type': 'Question',
                name: item.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: item.answer,
                },
              })),
            }),
          }}
        />
      </section>

      <hr className="border-zinc-200" />

      {/* ── About + Contact ── */}
      <section id="contact" className="scroll-mt-20 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <div className="grid sm:grid-cols-2 gap-16">
            <Reveal>
              <p className="text-sm text-zinc-400 tracking-wide">About</p>
              <div className="mt-4 space-y-4 text-[15px] text-zinc-500 leading-relaxed">
                <p>
                  SKYNEX DIGITAL is a data-driven growth consultancy. We help
                  businesses understand and improve how they show up across AI search
                  engines through GEO (Generative Engine Optimization) and SEO,
                  optimize their marketing with automation, and make smarter decisions
                  through data.
                </p>
                <p>
                  We also build our own tools —{' '}
                  <a href="https://geograde.ai" target="_blank" rel="noopener noreferrer" className="text-zinc-900 underline decoration-zinc-300 hover:decoration-zinc-900 transition-colors">
                    GeoGrade.ai
                  </a>
                  {' '}and{' '}
                  <a href="https://collabzen.ai" target="_blank" rel="noopener noreferrer" className="text-zinc-900 underline decoration-zinc-300 hover:decoration-zinc-900 transition-colors">
                    CollabZen.ai
                  </a>
                  {' '}— to solve the problems we see in the field.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-sm text-zinc-400 tracking-wide">Get in touch</p>
              <div className="mt-4 space-y-5">
                <a
                  href="mailto:hello@skynexdigital.com"
                  className="flex items-center gap-3 text-zinc-500 hover:text-zinc-900 transition-colors group"
                >
                  <span className="w-9 h-9 rounded-full bg-zinc-100 group-hover:bg-zinc-900 group-hover:text-white flex items-center justify-center transition-colors duration-300">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </span>
                  <span className="text-sm font-medium">hello@skynexdigital.com</span>
                </a>
                <a
                  href={process.env.NEXT_PUBLIC_LINKEDIN_URL || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-zinc-500 hover:text-zinc-900 transition-colors group"
                >
                  <span className="w-9 h-9 rounded-full bg-zinc-100 group-hover:bg-zinc-900 group-hover:text-white flex items-center justify-center transition-colors duration-300">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </span>
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
