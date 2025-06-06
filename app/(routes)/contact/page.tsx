import React from 'react';
import ContactForm from '../../../components/contact/ContactForm';

export const metadata = {
  title: 'Contact Us | SKYNEX DIGITAL',
  description: 'Get in touch with our team for inquiries about our e-commerce solutions and AI tools.',
};

export default function ContactPage() {
  return (
    <div className="bg-gradient-to-b from-skynex-light to-gray-100 dark:from-skynex-dark dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-skynex-dark to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">Get In Touch</h1>
            <p className="text-xl text-gray-300">
              Have questions about our solutions? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="heading-md mb-6 dark:text-white">Send Us a Message</h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="heading-md mb-6 dark:text-white">Contact Information</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-skynex-blue dark:text-skynex-accent">New York Office</h3>
                  <div className="space-y-2 text-gray-600 dark:text-gray-300">
                    <p>3548 75th Street</p>
                    <p>Jackson Heights, NY 11375</p>
                    <p>United States</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-skynex-blue dark:text-skynex-accent">Metro Vancouver Office</h3>
                  <div className="space-y-2 text-gray-600 dark:text-gray-300">
                    <p>6098 Station Street</p>
                    <p>Burnaby, BC V5H 0H4</p>
                    <p>Canada</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-skynex-blue dark:text-skynex-accent">Email Us</h3>
                  <div className="space-y-2 text-gray-600 dark:text-gray-300">
                    <p>General Inquiries: <a href="mailto:hello@skynexdigital.com" className="text-skynex-blue dark:text-skynex-accent hover:underline">hello@skynexdigital.com</a></p>
                    <p>Product Feedback: <a href="mailto:feedback@skynexdigital.com" className="text-skynex-blue dark:text-skynex-accent hover:underline">feedback@skynexdigital.com</a></p>
                    <p>Technical Support: <a href="mailto:support@skynexdigital.com" className="text-skynex-blue dark:text-skynex-accent hover:underline">support@skynexdigital.com</a></p>
                    <p>Sales Inquiries: <a href="mailto:sales@skynexdigital.com" className="text-skynex-blue dark:text-skynex-accent hover:underline">sales@skynexdigital.com</a></p>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-skynex-blue dark:text-skynex-accent">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a href="https://www.linkedin.com/company/skynex-digital" className="text-gray-600 hover:text-skynex-blue dark:text-gray-300 dark:hover:text-skynex-accent">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a href="https://x.com/SKYNEX_Digital" className="text-gray-600 hover:text-skynex-blue dark:text-gray-300 dark:hover:text-skynex-accent">
                      <span className="sr-only">X (Twitter)</span>
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <h2 className="heading-lg mb-12 dark:text-white text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-2 dark:text-white">What services does SKYNEX offer?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                SKYNEX provides a range of e-commerce solutions and AI-powered tools, including custom e-commerce platform development, 
                data analytics services, and specialized tools like our Inflation Calculator. We tailor our services to meet 
                the specific needs of each client's business.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-2 dark:text-white">How can I get started with SKYNEX's tools?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                You can access our Inflation Calculator directly through our website. For more information about our other 
                services and upcoming tools, please contact our team through this page, and a representative will get back 
                to you promptly with guidance on how to proceed.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-2 dark:text-white">Does SKYNEX offer custom development services?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, we specialize in creating custom solutions tailored to your specific business needs. Whether you're looking 
                for a custom e-commerce platform, specialized data tools, or unique AI applications, our team can work with you 
                to develop solutions that align perfectly with your requirements.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-2 dark:text-white ">Where are SKYNEX's offices located?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We have offices in New York City and Vancouver, serving clients across North America and globally. We work 
                with clients remotely and can arrange in-person meetings at either of our locations as needed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
