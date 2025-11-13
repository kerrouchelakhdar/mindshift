import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Layout>
      <Head>
        <title>Contact Us - MindShift</title>
        <meta
          name="description"
          content="Get in touch with the MindShift team. We're here to answer your questions and hear your feedback."
        />
      </Head>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a question, suggestion, or just want to say hello? We&apos;d love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Send us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold py-3 px-6 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {status === 'sending' ? 'Sending...' : status === 'success' ? '✓ Message Sent!' : 'Send Message'}
              </button>

              {status === 'success' && (
                <div className="bg-green-100 dark:bg-green-900/30 border border-green-400 dark:border-green-700 text-green-700 dark:text-green-400 px-4 py-3 rounded-lg">
                  Thank you for your message! We&apos;ll get back to you soon.
                </div>
              )}

              {status === 'error' && (
                <div className="bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-400 px-4 py-3 rounded-lg">
                  Oops! Something went wrong. Please try again.
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Email */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-700">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl">
                  ✉️
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Email Us</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    For general inquiries and support
                  </p>
                  <a
                    href="mailto:hello@mindshift.blog"
                    className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                  >
                    hello@mindshift.blog
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-2xl p-6 border border-purple-200 dark:border-purple-700">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white text-xl">
                  🌐
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Follow Us</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Connect with us on social media
                  </p>
                  <div className="flex gap-3">
                    <a
                      href="https://twitter.com/mindshift"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-900 dark:bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors"
                      aria-label="Twitter"
                    >
                      𝕏
                    </a>
                    <a
                      href="https://github.com/mindshift"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-900 dark:bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-gray-600 transition-colors"
                      aria-label="GitHub"
                    >
                      ⚡
                    </a>
                    <a
                      href="https://linkedin.com/company/mindshift"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-900 dark:bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                      aria-label="LinkedIn"
                    >
                      in
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20 rounded-2xl p-6 border border-pink-200 dark:border-pink-700">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white text-xl">
                  ⏱️
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Response Time</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    We typically respond within 24-48 hours during business days. For urgent matters, please mention it in the subject line.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Link */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-2xl p-6 border border-green-200 dark:border-green-700">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-xl">
                  ❓
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Before You Ask</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    Looking for quick answers? Check out our FAQ section or browse our articles for common topics.
                  </p>
                  <Link
                    href="/"
                    className="text-green-600 dark:text-green-400 hover:underline font-medium"
                  >
                    Browse Articles →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
