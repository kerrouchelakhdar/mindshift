import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Privacy() {
  return (
    <Layout>
      <Head>
        <title>Privacy Policy - MindShift</title>
        <meta
          name="description"
          content="MindShift Privacy Policy - Learn how we collect, use, and protect your personal information."
        />
      </Head>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Last Updated: November 13, 2025
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          {/* Introduction */}
          <section className="mb-12">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              At MindShift, we take your privacy seriously. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you visit our website. Please read this 
              privacy policy carefully. If you do not agree with the terms of this privacy policy, please 
              do not access the site.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              1. Information We Collect
            </h2>
            
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              Personal Information
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-6">
              <li>Subscribe to our newsletter</li>
              <li>Fill out a contact form</li>
              <li>Comment on articles (if enabled)</li>
              <li>Interact with our social media pages</li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              Automatically Collected Information
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When you visit our site, we automatically collect certain information, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
              <li>Device information</li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We use the information we collect in the following ways:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>To provide, operate, and maintain our website</li>
              <li>To improve, personalize, and expand our website</li>
              <li>To understand and analyze how you use our website</li>
              <li>To develop new products, services, features, and functionality</li>
              <li>To communicate with you, including for customer service and support</li>
              <li>To send you newsletters and marketing communications (with your consent)</li>
              <li>To detect and prevent fraud and abuse</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          {/* Cookies and Tracking */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              3. Cookies and Tracking Technologies
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We use cookies and similar tracking technologies to track activity on our website and 
              store certain information. Cookies are files with a small amount of data that may include 
              an anonymous unique identifier.
            </p>
            
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              Types of Cookies We Use
            </h3>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Essential Cookies:</strong> Required for the website to function properly (e.g., theme preference)</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
              <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
            </ul>
            
            <p className="text-gray-700 dark:text-gray-300 mt-4">
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. 
              However, if you do not accept cookies, you may not be able to use some portions of our website.
            </p>
          </section>

          {/* Third-Party Services */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              4. Third-Party Services
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We may use third-party service providers to help us operate our website and administer 
              activities on our behalf. These third parties may have access to your information only to 
              perform specific tasks on our behalf and are obligated not to disclose or use it for any 
              other purpose.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Third-party services we may use include:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Analytics services (e.g., Google Analytics)</li>
              <li>Hosting services (e.g., Vercel)</li>
              <li>Database services (e.g., Supabase)</li>
              <li>Email service providers</li>
              <li>Content delivery networks (CDNs)</li>
            </ul>
          </section>

          {/* Data Security */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              5. Data Security
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              We implement appropriate technical and organizational security measures to protect your 
              personal information. However, please note that no method of transmission over the Internet 
              or method of electronic storage is 100% secure. While we strive to use commercially acceptable 
              means to protect your personal information, we cannot guarantee its absolute security.
            </p>
          </section>

          {/* Your Privacy Rights */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              6. Your Privacy Rights
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Depending on your location, you may have the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li><strong>Access:</strong> Request access to your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Objection:</strong> Object to the processing of your personal information</li>
              <li><strong>Portability:</strong> Request transfer of your data to another service</li>
              <li><strong>Withdrawal of Consent:</strong> Withdraw consent for data processing at any time</li>
            </ul>
            
            <p className="text-gray-700 dark:text-gray-300 mt-4">
              To exercise these rights, please contact us at{' '}
              <a href="mailto:privacy@mindshift.blog" className="text-purple-600 dark:text-purple-400 hover:underline">
                privacy@mindshift.blog
              </a>
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              7. Children&apos;s Privacy
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Our website is not intended for children under the age of 13. We do not knowingly collect 
              personal information from children under 13. If you are a parent or guardian and you are 
              aware that your child has provided us with personal information, please contact us so we 
              can take necessary action.
            </p>
          </section>

          {/* Changes to Privacy Policy */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              8. Changes to This Privacy Policy
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              We may update our Privacy Policy from time to time. We will notify you of any changes by 
              posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date at the top. 
              You are advised to review this Privacy Policy periodically for any changes. Changes to this 
              Privacy Policy are effective when they are posted on this page.
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              9. Contact Us
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Email:</strong>{' '}
                <a href="mailto:privacy@mindshift.blog" className="text-purple-600 dark:text-purple-400 hover:underline">
                  privacy@mindshift.blog
                </a>
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Contact Form:</strong>{' '}
                <Link href="/contact" className="text-purple-600 dark:text-purple-400 hover:underline">
                  Visit our contact page
                </Link>
              </p>
            </div>
          </section>

          {/* GDPR and CCPA */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              10. GDPR & CCPA Compliance
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We are committed to complying with the General Data Protection Regulation (GDPR) for users 
              in the European Union and the California Consumer Privacy Act (CCPA) for California residents.
            </p>
            
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              For EU Users (GDPR)
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We process personal data on legal bases including consent, contract performance, and legitimate 
              interests. You have rights to access, rectify, erase, restrict processing, data portability, 
              and to object to processing.
            </p>
            
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
              For California Residents (CCPA)
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              California residents have the right to know what personal information is collected, request 
              deletion of personal information, opt-out of the sale of personal information (we do not sell 
              personal information), and not be discriminated against for exercising these rights.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}
