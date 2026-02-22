import React from 'react';

export const metadata = {
  title: 'About Us | SKYNEX DIGITAL',
  description: 'Learn about our mission to build AI-powered marketing automation tools for the new era.',
};

export default function AboutPage() {
  return (
    <div className="bg-gradient-to-b from-skynex-light to-gray-100 dark:from-skynex-dark dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-skynex-dark to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">About SKYNEX</h1>
            <p className="text-xl text-gray-300">Building AI-powered tools to automate marketing for the new era.</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="heading-md mb-6 text-skynex-blue dark:text-skynex-accent">Our Mission</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                At SKYNEX, our mission is to automate the repetitive parts of marketing using AI. We build focused, purpose-built tools that help marketing teams work faster and smarter — from understanding brand visibility in AI search to streamlining partner management.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                We believe marketing is being fundamentally reshaped by AI. The companies that embrace this shift early will have a massive advantage. We build the tools to help them get there.
              </p>
            </div>
            <div>
              <h2 className="heading-md mb-6 text-skynex-blue dark:text-skynex-accent">Our Vision</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                We envision a future where marketing teams spend zero time on tasks AI can handle. From monitoring brand visibility across AI platforms to managing campaigns and partnerships, every repetitive workflow should be automated.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                SKYNEX aims to be the go-to platform for marketers who want to stay ahead of the AI curve — building products that make the future of marketing accessible today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Background */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <h2 className="heading-lg mb-8 text-center text-gray-900 dark:text-white">Our Story</h2>
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg dark:prose-invert mx-auto">
              <p className="mb-6">
              SKYNEX Digital was founded in British Columbia, Canada with a clear belief: AI is fundamentally changing how marketing works, and most marketing teams aren&apos;t equipped for the shift.
              </p>

              <p className="mb-6">
              Our founder saw an opportunity at the intersection of AI and marketing — brands were investing heavily in traditional SEO while millions of consumers were already getting product recommendations from ChatGPT and Perplexity. This insight led to the creation of GeoGrade.ai, our flagship product that helps brands understand their visibility in AI search.
              </p>

              <p>
              Today, SKYNEX is building a suite of AI-powered marketing tools, serving clients globally from our offices in New York City and Metro Vancouver. From AI search visibility to lightweight CRM, we build products for the new era of marketing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <h2 className="heading-lg mb-12 text-center text-gray-900 dark:text-white">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
              <div className="text-skynex-blue dark:text-skynex-accent mb-4">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We build at the frontier of AI and marketing. Our products solve problems that didn&apos;t exist two years ago — and that&apos;s exactly where we want to be.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
              <div className="text-skynex-blue dark:text-skynex-accent mb-4">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Collaboration</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We build with our users, not just for them. Tight feedback loops and real-world testing ensure our tools solve actual problems.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
              <div className="text-skynex-blue dark:text-skynex-accent mb-4">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Reliability</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Fast-moving doesn&apos;t mean fragile. We build tools that marketers can depend on, day after day, with consistent performance and accuracy.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Locations */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <h2 className="heading-lg mb-12 text-center text-gray-900 dark:text-white">Our Locations</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">New York City</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Our East Coast operations center, connecting us to the global financial hub and tech ecosystem.
              </p>
              <div className="aspect-w-16 aspect-h-9">
              <div className="w-full h-64 overflow-hidden rounded-lg">
                  <img 
                    src="/images/locations/NYC_Location.png" 
                    alt="NYC Office Location" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Metro Vancouver</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Our West Coast headquarters, nestled in the vibrant tech community of British Columbia.
              </p>
              <div className="aspect-w-16 aspect-h-9">
                <div className="w-full h-64 overflow-hidden rounded-lg">
                  <img 
                    src="/images/locations/Burnaby_Location.png" 
                    alt="Vancouver (Burnaby) Office Location" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
