'use client';

import ContactForm from '../../../components/contact/ContactForm';
import ScrollReveal from '@/components/motion/ScrollReveal';

export default function ContactPage() {
  return (
    <div className="bg-skynex-dark text-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 starfield opacity-50" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-display text-gradient-light mb-6">Get In Touch</h1>
            <p className="text-xl text-gray-300">
              Have questions about our AI marketing tools? We&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ScrollReveal direction="left">
              <div>
                <h2 className="heading-md mb-6 text-white">Send Us a Message</h2>
                <div className="glass-card p-6 md:p-8">
                  <ContactForm />
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Info */}
            <ScrollReveal direction="right">
              <div>
                <h2 className="heading-md mb-6 text-white">Contact Information</h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-skynex-accent">New York Office</h3>
                    <div className="space-y-2 text-gray-300">
                      <p>3548 75th Street</p>
                      <p>Jackson Heights, NY 11375</p>
                      <p>United States</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-skynex-accent">Metro Vancouver Office</h3>
                    <div className="space-y-2 text-gray-300">
                      <p>6098 Station Street</p>
                      <p>Burnaby, BC V5H 0H4</p>
                      <p>Canada</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-skynex-accent">Email Us</h3>
                    <div className="space-y-2 text-gray-300">
                      <p>General Inquiries: <a href="mailto:hello@skynexdigital.com" className="text-skynex-accent hover:underline">hello@skynexdigital.com</a></p>
                      <p>Product Feedback: <a href="mailto:feedback@skynexdigital.com" className="text-skynex-accent hover:underline">feedback@skynexdigital.com</a></p>
                      <p>Technical Support: <a href="mailto:support@skynexdigital.com" className="text-skynex-accent hover:underline">support@skynexdigital.com</a></p>
                      <p>Sales Inquiries: <a href="mailto:sales@skynexdigital.com" className="text-skynex-accent hover:underline">sales@skynexdigital.com</a></p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-skynex-accent">Connect With Us</h3>
                    <div className="flex space-x-4">
                      <a href="https://www.linkedin.com/company/skynex-digital" className="text-gray-300 hover:text-skynex-accent transition-colors">
                        <span className="sr-only">LinkedIn</span>
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                      <a href="https://x.com/SKYNEX_Digital" className="text-gray-300 hover:text-skynex-accent transition-colors">
                        <span className="sr-only">X (Twitter)</span>
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="section-divider mb-16" />
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="heading-display text-center text-white mb-12">Frequently Asked Questions</h2>
          </ScrollReveal>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { q: 'What products does SKYNEX offer?', a: 'SKYNEX builds AI-powered marketing automation tools. Our flagship product, GeoGrade.ai, helps brands check their visibility across AI search platforms like ChatGPT, Perplexity, and Gemini. We also offer CollabZen.ai, a lightweight CRM for managing partnerships and campaigns, and our Real Return Analyzer for inflation-adjusted financial insights.' },
              { q: 'How does GeoGrade.ai work?', a: 'GeoGrade.ai uses AI agents that simulate real users searching for products and services across major AI platforms. It checks how your brand appears in AI-generated responses, scores your visibility, and provides actionable recommendations to improve your AI search presence.' },
              { q: 'Is CollabZen.ai an AI product?', a: "CollabZen.ai is a lightweight CRM focused on simplicity and speed. It doesn't currently include AI features — it's designed to be a clean, fast tool for managing partnerships and campaigns without the complexity of enterprise CRM platforms." },
              { q: "Where are SKYNEX's offices located?", a: 'We have offices in New York City and Metro Vancouver, serving clients across North America and globally. We work with clients remotely and can arrange in-person meetings at either of our locations as needed.' },
            ].map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="glass-card-hover p-6">
                  <h3 className="text-lg font-semibold mb-2 text-white">{faq.q}</h3>
                  <p className="text-gray-400">{faq.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
