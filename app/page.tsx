'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/motion/ScrollReveal';
import { StaggerContainer, StaggerItem } from '@/components/motion/StaggerContainer';
import CountUp from '@/components/motion/CountUp';
import HeroBackground from '@/components/motion/HeroBackground';

/* ── tiny helper: generate warp-line inline styles ── */
function warpLines(count: number) {
  return Array.from({ length: count }, (_, i) => ({
    left: `${(i / count) * 100}%`,
    animationDelay: `${(i * 1.8) / count}s`,
    height: `${60 + Math.random() * 60}px`,
    opacity: 0.3 + Math.random() * 0.4,
  }));
}

const lines = warpLines(20);

export default function Home() {
  return (
    <div className="bg-skynex-dark text-white min-h-screen overflow-hidden">

      {/* ═══════════ SECTION 1 — HERO: WARP SPEED ═══════════ */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Starfield */}
        <div className="absolute inset-0 starfield opacity-60" />

        {/* Warp lines */}
        <div className="absolute inset-0 pointer-events-none">
          {lines.map((s, i) => (
            <div key={i} className="warp-line" style={s} />
          ))}
        </div>

        {/* Radial glow behind content */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-skynex-accent/5 rounded-full blur-[120px] pointer-events-none" />

        {/* Dynamic text background */}
        <HeroBackground />

        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-skynex-accent font-medium tracking-widest uppercase text-sm mb-4"
            >
              AI-Powered Marketing Automation
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="heading-display text-gradient-light mb-6"
            >
              Marketing at<br />Warp Speed
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl mx-auto"
            >
              SKYNEX builds AI-powered tools that automate repetitive marketing workflows. From checking your brand&apos;s visibility in AI search to managing partnerships — we build for the new era.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a
                href="https://geograde.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-medium hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300"
              >
                Try GeoGrade.ai
              </a>
              <Link
                href="/contact"
                className="px-8 py-3 rounded-full border border-white/20 text-white font-medium backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════ SECTION 2 — STATS ═══════════ */}
      <section className="relative py-20">
        <div className="section-divider mb-20" />
        <div className="container-custom">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { value: 3, suffix: '', label: 'Products Built' },
              { value: 10, suffix: '+', label: 'AI Models Integrated' },
              { value: 2, suffix: '', label: 'Office Locations' },
              { value: 100, suffix: '%', label: 'AI-First Approach' },
            ].map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="glass-card-hover p-6 text-center group">
                  <div className="text-3xl md:text-4xl font-bold text-skynex-accent mb-2 group-hover:animate-glow-pulse">
                    <CountUp target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300 text-sm">
                    {stat.label}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════ SECTION 3 — THE SHIFT ═══════════ */}
      <section className="relative py-24">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="heading-display text-center text-gradient-brand mb-4">The Shift</h2>
            <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
              AI is to marketing what the automobile was to the horse and buggy. The question isn&apos;t whether to adapt — it&apos;s how fast.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
            {/* Old Way */}
            <ScrollReveal direction="left">
              <div className="glass-card p-8 opacity-60">
                <h3 className="text-xl font-bold text-gray-500 mb-6 uppercase tracking-wide">The Old Way</h3>
                <ul className="space-y-4 text-gray-500">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-gray-600 shrink-0" />
                    <span>Manual keyword research and guesswork SEO</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-gray-600 shrink-0" />
                    <span>Spreadsheets for partnership tracking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-gray-600 shrink-0" />
                    <span>Hours spent on repetitive reporting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-gray-600 shrink-0" />
                    <span>No visibility into AI search platforms</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* AI Way */}
            <ScrollReveal direction="right">
              <div className="glass-card p-8 border-skynex-accent/30">
                <h3 className="text-xl font-bold text-skynex-accent mb-6 uppercase tracking-wide">The AI Way</h3>
                <ul className="space-y-4 text-gray-200">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-skynex-accent shrink-0" />
                    <span>AI agents that monitor your brand across ChatGPT, Perplexity, Gemini</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-skynex-accent shrink-0" />
                    <span>Automated CRM for partnerships and campaigns</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-skynex-accent shrink-0" />
                    <span>Real-time dashboards and actionable insights</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-skynex-accent shrink-0" />
                    <span>Data-driven strategy, not gut feelings</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>

          {/* Quote */}
          <ScrollReveal delay={0.2}>
            <blockquote className="mt-16 text-center max-w-3xl mx-auto">
              <p className="text-2xl md:text-3xl font-display font-bold text-gradient-light leading-relaxed">
                &ldquo;The brands that embrace AI marketing now will define the next decade.&rdquo;
              </p>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════ SECTION 4 — CAPABILITIES ═══════════ */}
      <section className="relative py-24">
        <div className="section-divider mb-20" />
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="heading-display text-center text-white mb-4">What We Do</h2>
            <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
              AI-powered tools that automate the repetitive parts of marketing so your team can focus on strategy.
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {[
              {
                gradient: 'from-blue-600 to-cyan-400',
                title: 'AI Search Visibility',
                desc: 'Understand how your brand appears in AI search tools like ChatGPT, Perplexity, and Gemini. Optimize for the next generation of search.',
                icon: (
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                ),
              },
              {
                gradient: 'from-purple-600 to-pink-400',
                title: 'Marketing Automation',
                desc: 'Automate repetitive marketing workflows with AI agents. Spend less time on manual tasks and more time on creative strategy.',
                icon: (
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                ),
              },
              {
                gradient: 'from-emerald-500 to-teal-400',
                title: 'Lightweight Tools',
                desc: 'Purpose-built products that are fast to set up and easy to use. No bloated enterprise software — just tools that work.',
                icon: (
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                ),
              },
            ].map((cap) => (
              <StaggerItem key={cap.title}>
                <div className="glass-card-hover glow-border p-8 h-full">
                  <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${cap.gradient} flex items-center justify-center mb-6 group-hover:animate-glow-pulse transition-transform duration-300`}>
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                      {cap.icon}
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{cap.title}</h3>
                  <p className="text-gray-400">{cap.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════ SECTION 5 — PRODUCTS ═══════════ */}
      <section className="relative py-24">
        <div className="section-divider mb-20" />
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="heading-display text-center text-white mb-4">Our Products</h2>
            <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
              Purpose-built tools for marketers navigating the AI era
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {/* GeoGrade.ai */}
            <StaggerItem>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="glass-card overflow-hidden group h-full flex flex-col"
              >
                <div className="h-44 bg-gradient-to-r from-emerald-500 to-cyan-500 p-6 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">GeoGrade.ai</h3>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-900 text-emerald-300">NEW</span>
                  </div>
                  <p className="text-gray-400 mb-4 flex-1">
                    AI agent that checks how visible your product is in AI search tools like ChatGPT, Perplexity, and Gemini.
                  </p>
                  <a
                    href="https://geograde.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-emerald-400 font-medium hover:text-white transition-colors duration-300"
                  >
                    Check Your Visibility →
                  </a>
                </div>
              </motion.div>
            </StaggerItem>

            {/* CollabZen.ai */}
            <StaggerItem>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="glass-card overflow-hidden group h-full flex flex-col"
              >
                <div className="h-44 bg-gradient-to-r from-purple-600 to-indigo-700 p-6 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors duration-300">CollabZen.ai</h3>
                  <p className="text-gray-400 mb-4 flex-1">
                    Lightweight CRM for managing partnerships, collaborations, and campaigns. Simple, fast, effective.
                  </p>
                  <a
                    href="https://collabzen.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-indigo-400 font-medium hover:text-white transition-colors duration-300"
                  >
                    Launch Platform →
                  </a>
                </div>
              </motion.div>
            </StaggerItem>

            {/* Real Return Analyzer */}
            <StaggerItem>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="glass-card overflow-hidden group h-full flex flex-col"
              >
                <div className="h-44 bg-gradient-to-r from-blue-600 to-cyan-500 p-6 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {process.env.NEXT_PUBLIC_REAL_RETURN_ANALYZER_NAME}
                  </h3>
                  <p className="text-gray-400 mb-4 flex-1">
                    Track inflation impact on purchasing power with precise, data-driven insights and interactive visualizations.
                  </p>
                  <a
                    href={process.env.NEXT_PUBLIC_REAL_RETURN_ANALYZER_URL}
                    className="inline-block text-cyan-400 font-medium hover:text-white transition-colors duration-300"
                  >
                    Launch Calculator →
                  </a>
                </div>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════ SECTION 6 — CTA ═══════════ */}
      <section className="relative py-24">
        <div className="section-divider mb-20" />
        {/* Warp lines behind CTA */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {lines.slice(0, 8).map((s, i) => (
            <div key={`cta-${i}`} className="warp-line" style={{ ...s, opacity: (s.opacity as number) * 0.5 }} />
          ))}
        </div>

        <div className="container-custom relative z-10">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto glass-card p-10 md:p-14 text-center">
              <h2 className="heading-display text-gradient-brand mb-6">Ready to Win in AI Search?</h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                See how your brand shows up when people ask AI about your industry. Try GeoGrade.ai and get your visibility score.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://geograde.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-medium hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300"
                >
                  Try GeoGrade.ai Free
                </a>
                <Link
                  href="/products"
                  className="px-8 py-3 rounded-full border border-white/20 text-white font-medium backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                >
                  See All Products
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
