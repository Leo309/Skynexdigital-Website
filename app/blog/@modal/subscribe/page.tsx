'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SubscribeModal() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // 模拟API调用
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setLoading(false);
    setSuccess(true);
    
    // 成功后关闭模态窗口
    setTimeout(() => {
      router.back();
    }, 2000);
  };
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60">
      <div 
        className="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full p-6"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={() => router.back()}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
          <span className="sr-only">Close</span>
        </button>
        
        <div className="text-center mb-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">Subscribe to Our Newsletter</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Get the latest insights on AI marketing automation and marketing tech directly to your inbox.
          </p>
        </div>
        
        {!success ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="your@email.com"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-skynex-blue focus:ring-skynex-blue dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            
            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-skynex-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>
            
            <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4">
              By subscribing, you agree to our <a href="/privacy" className="underline">Privacy Policy</a>.
              We respect your privacy and will never share your information.
            </p>
          </form>
        ) : (
          <div className="text-center py-6">
            <svg className="w-16 h-16 mx-auto text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <h4 className="text-lg font-medium text-gray-900 dark:text-white">Thank You!</h4>
            <p className="text-gray-600 dark:text-gray-300">
              You've successfully subscribed to our newsletter.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
