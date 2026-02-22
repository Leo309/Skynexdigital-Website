'use client';

import Link from 'next/link';
import ScrollReveal from '@/components/motion/ScrollReveal';
import { StaggerContainer, StaggerItem } from '@/components/motion/StaggerContainer';

export default function ProductsPage() {
  return (
    <div className="bg-skynex-dark text-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 starfield opacity-50" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-display text-gradient-light mb-6">Our Products</h1>
            <p className="text-xl text-gray-300">
              AI-powered tools built for marketers navigating the new era of AI search and automation.
            </p>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-16">

            {/* GeoGrade.ai */}
            <ScrollReveal direction="left">
              <div className="glass-card overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-2/5 bg-gradient-to-br from-emerald-500 to-cyan-500 p-8 text-white">
                    <div className="flex items-center gap-2 mb-4">
                      <h3 className="text-2xl font-bold text-white">GeoGrade.ai</h3>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-white/20">NEW</span>
                    </div>
                    <p className="mb-6">
                      Check your brand&apos;s visibility across AI search platforms like ChatGPT, Perplexity, and Gemini.
                    </p>
                    <div className="mb-8 space-y-2">
                      {['Simulates real user queries', 'AI-powered visibility scoring', 'Competitive analysis', 'Actionable recommendations'].map((item) => (
                        <div key={item} className="flex items-center">
                          <svg className="w-5 h-5 mr-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                    <a
                      href="https://geograde.ai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-white text-emerald-600 hover:bg-emerald-50 font-bold py-3 px-6 rounded-md transition-colors"
                    >
                      Try GeoGrade.ai
                    </a>
                  </div>
                  <div className="md:w-3/5 p-8">
                    <h4 className="text-xl font-bold mb-4 text-white">Why AI Search Visibility Matters</h4>
                    <p className="text-gray-300 mb-4">
                      Traditional SEO is no longer enough. Millions of people now ask AI for product recommendations instead of searching Google. GeoGrade.ai helps you:
                    </p>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Understand how AI describes your brand vs competitors</li>
                      <li>• Identify gaps in your AI search presence</li>
                      <li>• Track visibility changes over time</li>
                      <li>• Optimize your content for AI discovery</li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* CollabZen.ai */}
            <ScrollReveal direction="right">
              <div className="glass-card overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-2/5 bg-gradient-to-br from-purple-600 to-indigo-700 p-8 text-white">
                    <h3 className="text-2xl font-bold mb-4 text-white">CollabZen.ai</h3>
                    <p className="mb-6">
                      Lightweight CRM for partnership and campaign management.
                    </p>
                    <div className="mb-8 space-y-2">
                      {['Clean, intuitive interface', 'Smart deadline alerts', 'Real-time progress tracking', 'Campaign performance overview'].map((item) => (
                        <div key={item} className="flex items-center">
                          <svg className="w-5 h-5 mr-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                    <a
                      href="https://collabzen.ai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-white text-indigo-700 hover:bg-indigo-50 font-bold py-3 px-6 rounded-md transition-colors"
                    >
                      Launch Platform
                    </a>
                  </div>
                  <div className="md:w-3/5 p-8">
                    <div className="w-full h-64 overflow-hidden rounded-lg mb-6">
                      <img
                        src="/images/tools/CollabOS.png"
                        alt="CollabZen.ai CRM Interface"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h4 className="text-xl font-bold mb-4 text-white">Simplify Your Partnerships</h4>
                    <p className="text-gray-300 mb-4">
                      Manage partnerships without the overhead of enterprise CRM:
                    </p>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Centralize partnerships in one clean dashboard</li>
                      <li>• Never miss deadlines with automated notifications</li>
                      <li>• Monitor campaign and project status at a glance</li>
                      <li>• Export reports for stakeholder updates</li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Real Return Analyzer */}
            <ScrollReveal direction="left">
              <div className="glass-card overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-2/5 bg-gradient-to-br from-blue-600 to-skynex-blue p-8 text-white">
                    <h3 className="text-2xl font-bold mb-4 text-white">{process.env.NEXT_PUBLIC_REAL_RETURN_ANALYZER_NAME}</h3>
                    <p className="mb-6">
                      Track inflation&apos;s real impact on your investments and purchasing power.
                    </p>
                    <div className="mb-8 space-y-2">
                      {['Historical inflation data', 'Interactive visualizations', 'Personalized calculations', 'Projection scenarios'].map((item) => (
                        <div key={item} className="flex items-center">
                          <svg className="w-5 h-5 mr-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                    <a
                      href={process.env.NEXT_PUBLIC_REAL_RETURN_ANALYZER_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-white text-skynex-blue hover:bg-blue-50 font-bold py-3 px-6 rounded-md transition-colors"
                    >
                      Launch Calculator
                    </a>
                  </div>
                  <div className="md:w-3/5 p-8">
                    <div className="w-full h-64 overflow-hidden rounded-lg mb-6">
                      <img
                        src="/images/tools/Real_Return_Analyzer.png"
                        alt="Real Return Analyzer Tool Interface"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h4 className="text-xl font-bold mb-4 text-white">Why Use Our {process.env.NEXT_PUBLIC_REAL_RETURN_ANALYZER_NAME}?</h4>
                    <p className="text-gray-300 mb-4">
                      Data-driven insights for smarter investments:
                    </p>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Inflation-adjusted projections</li>
                      <li>• Real-time purchasing power tracking</li>
                      <li>• Evidence-based decision making</li>
                      <li>• Cross-cycle performance analysis</li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Custom Solutions */}
            <ScrollReveal>
              <div className="glass-card p-8 text-center">
                <h3 className="text-2xl font-bold mb-4 text-white">Building Something New?</h3>
                <p className="text-gray-300 max-w-2xl mx-auto mb-6">
                  We&apos;re always exploring new ideas at the intersection of AI and marketing. Have a workflow you want automated? We&apos;d love to hear about it.
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-medium hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300"
                >
                  Get in Touch
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* How We Build */}
      <section className="py-16">
        <div className="section-divider mb-16" />
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="heading-display text-center text-white mb-12">How We Build Our Products</h2>
          </ScrollReveal>
          <StaggerContainer className="grid md:grid-cols-4 gap-8">
            {[
              { title: 'Research', desc: 'We identify pain points in modern marketing workflows that AI can solve.', icon: 'M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z' },
              { title: 'Design', desc: 'We design clean, fast interfaces that marketers actually want to use.', icon: 'M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z' },
              { title: 'Development', desc: 'Built with modern tech stacks for speed, reliability, and scale.', icon: 'M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z' },
              { title: 'Refinement', desc: 'Continuous improvement driven by user feedback and market shifts.', icon: 'M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z' },
            ].map((step) => (
              <StaggerItem key={step.title}>
                <div className="glass-card-hover p-6 text-center h-full">
                  <div className="text-skynex-accent text-center mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-skynex-accent/10">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d={step.icon} />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="section-divider mb-16" />
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="heading-display text-center text-white mb-12">What Our Users Say</h2>
          </ScrollReveal>
          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {[
              { quote: 'GeoGrade.ai showed us exactly where we were invisible in AI search. Within weeks of optimizing, we started showing up in ChatGPT recommendations.', name: 'Marketing Lead', company: 'SaaS Company' },
              { quote: 'CollabZen.ai replaced three different tools we were using to manage partnerships. It\'s simple, fast, and does exactly what we need.', name: 'Partnership Manager', company: 'Marketing Agency' },
              { quote: 'SKYNEX understands where marketing is headed. Their tools are built for the way we actually work today, not how we worked five years ago.', name: 'Head of Growth', company: 'DTC Brand' },
            ].map((t) => (
              <StaggerItem key={t.name}>
                <div className="glass-card-hover p-6 h-full flex flex-col">
                  <p className="italic text-gray-300 mb-6 flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div>
                    <h4 className="font-bold text-white">{t.name}</h4>
                    <p className="text-sm text-gray-500">{t.company}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
