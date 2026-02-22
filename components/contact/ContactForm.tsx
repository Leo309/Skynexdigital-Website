'use client';

import { useState, FormEvent } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [successMessage, setSuccessMessage] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    
    try {
      // Send data to our API endpoint that connects to Supabase
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit form');
      }
      
      // Provide more specific success message based on subject
      const subjectToEmail = {
        general: 'hello@skynexdigital.com',
        feedback: 'feedback@skynexdigital.com',
        support: 'support@skynexdigital.com',
        sales: 'sales@skynexdigital.com',
      };
      
      // Set a consistent success message regardless of subject type
      setSuccessMessage("Thank you for your message! We'll get back to you shortly.");
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {submitStatus === 'success' && (
        <div className="bg-green-50 dark:bg-green-900 p-4 rounded-md mb-6">
          <p className="text-green-800 dark:text-green-200">
            {successMessage}
          </p>
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="bg-red-50 dark:bg-red-900 p-4 rounded-md mb-6">
          <p className="text-red-800 dark:text-red-200">
            {errorMessage || 'There was an error sending your message. Please try again later.'}
          </p>
        </div>
      )}
    
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-skynex-accent focus:ring-skynex-accent/30 dark:bg-white/5 dark:border-white/10 dark:text-white"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-skynex-accent focus:ring-skynex-accent/30 dark:bg-white/5 dark:border-white/10 dark:text-white"
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-skynex-accent focus:ring-skynex-accent/30 dark:bg-white/5 dark:border-white/10 dark:text-white"
        />
      </div>
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Company (Optional)
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-skynex-accent focus:ring-skynex-accent/30 dark:bg-white/5 dark:border-white/10 dark:text-white"
        />
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-skynex-accent focus:ring-skynex-accent/30 dark:bg-white/5 dark:border-white/10 dark:text-white"
        >
          <option value="">Select a subject</option>
          <option value="general">General Inquiry</option>
          <option value="feedback">Product Feedback</option>
          <option value="support">Technical Support</option>
          <option value="sales">Sales Inquiry</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-skynex-accent focus:ring-skynex-accent/30 dark:bg-white/5 dark:border-white/10 dark:text-white"
        ></textarea>
      </div>
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary py-3 px-6 w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    </form>
  );
}
