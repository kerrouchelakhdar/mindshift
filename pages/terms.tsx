import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Terms() {
  return (
    <Layout>
      <Head>
        <title>Terms and Conditions - MindShift</title>
        <meta
          name="description"
          content="MindShift Terms and Conditions - Read our terms of service and user agreement."
        />
      </Head>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            Terms and Conditions
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Last Updated: November 13, 2025
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              1. Agreement to Terms
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              These Terms and Conditions constitute a legally binding agreement made between you, whether 
              personally or on behalf of an entity (&quot;you&quot;) and MindShift (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), 
              concerning your access to and use of the mindshift.blog website as well as any other media 
              form, media channel, mobile website, or mobile application related, linked, or otherwise 
              connected thereto (collectively, the &quot;Site&quot;).
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-4">
              By accessing the Site, you agree that you have read, understood, and agree to be bound by 
              all of these Terms and Conditions. If you do not agree with all of these Terms and Conditions, 
              then you are expressly prohibited from using the Site and you must discontinue use immediately.
            </p>
          </section>

          {/* Intellectual Property Rights */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              2. Intellectual Property Rights
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Unless otherwise indicated, the Site is our proprietary property and all source code, databases, 
              functionality, software, website designs, audio, video, text, photographs, and graphics on the 
              Site (collectively, the &quot;Content&quot;) and the trademarks, service marks, and logos contained 
              therein (the &quot;Marks&quot;) are owned or controlled by us or licensed to us.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The Content and the Marks are provided on the Site &quot;AS IS&quot; for your information and personal 
              use only. Except as expressly provided in these Terms and Conditions, no part of the Site and 
              no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, 
              publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise 
              exploited for any commercial purpose whatsoever, without our express prior written permission.
            </p>
          </section>

          {/* User Representations */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              3. User Representations
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              By using the Site, you represent and warrant that:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>You have the legal capacity and you agree to comply with these Terms and Conditions</li>
              <li>You are not a minor in the jurisdiction in which you reside</li>
              <li>You will not access the Site through automated or non-human means, whether through a bot, script, or otherwise</li>
              <li>You will not use the Site for any illegal or unauthorized purpose</li>
              <li>Your use of the Site will not violate any applicable law or regulation</li>
            </ul>
          </section>

          {/* Prohibited Activities */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              4. Prohibited Activities
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              You may not access or use the Site for any purpose other than that for which we make the 
              Site available. The Site may not be used in connection with any commercial endeavors except 
              those that are specifically endorsed or approved by us.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              As a user of the Site, you agree not to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Systematically retrieve data or other content from the Site to create or compile a collection, database, or directory without written permission from us</li>
              <li>Circumvent, disable, or otherwise interfere with security-related features of the Site</li>
              <li>Engage in unauthorized framing of or linking to the Site</li>
              <li>Trick, defraud, or mislead us and other users</li>
              <li>Make improper use of our support services or submit false reports of abuse or misconduct</li>
              <li>Engage in any automated use of the system, such as using scripts to send comments or messages</li>
              <li>Interfere with, disrupt, or create an undue burden on the Site or the networks or services connected to the Site</li>
              <li>Attempt to impersonate another user or person or use the username of another user</li>
              <li>Upload or transmit viruses, Trojan horses, or other material that interferes with any party&apos;s uninterrupted use of the Site</li>
              <li>Use the Site to advertise or offer to sell goods and services</li>
              <li>Harass, annoy, intimidate, or threaten any of our employees or agents</li>
              <li>Copy or adapt the Site&apos;s software, including but not limited to Flash, PHP, HTML, JavaScript, or other code</li>
            </ul>
          </section>

          {/* User Generated Content */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              5. User Generated Contributions
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The Site may invite you to chat, contribute to, or participate in blogs, message boards, 
              online forums, and other functionality, and may provide you with the opportunity to create, 
              submit, post, display, transmit, perform, publish, distribute, or broadcast content and 
              materials to us or on the Site.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              By posting contributions, you grant us an unrestricted, unlimited, irrevocable, perpetual, 
              non-exclusive, transferable, royalty-free, fully-paid, worldwide right, and license to host, 
              use, copy, reproduce, disclose, sell, resell, publish, broadcast, retitle, archive, store, 
              cache, publicly perform, publicly display, reformat, translate, transmit, excerpt (in whole 
              or in part), and distribute such contributions for any purpose, commercial, advertising, or 
              otherwise.
            </p>
          </section>

          {/* Site Management */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              6. Site Management
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              We reserve the right, but not the obligation, to: (1) monitor the Site for violations of 
              these Terms and Conditions; (2) take appropriate legal action against anyone who, in our 
              sole discretion, violates the law or these Terms and Conditions; (3) refuse, restrict access 
              to, limit the availability of, or disable (to the extent technologically feasible) any of 
              your contributions or any portion thereof; (4) remove from the Site or otherwise disable all 
              files and content that are excessive in size or are in any way burdensome to our systems; 
              and (5) otherwise manage the Site in a manner designed to protect our rights and property 
              and to facilitate the proper functioning of the Site.
            </p>
          </section>

          {/* Privacy Policy */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              7. Privacy Policy
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              We care about data privacy and security. Please review our{' '}
              <Link href="/privacy" className="text-purple-600 dark:text-purple-400 hover:underline font-medium">
                Privacy Policy
              </Link>
              . By using the Site, you agree to be bound by our Privacy Policy, which is incorporated 
              into these Terms and Conditions.
            </p>
          </section>

          {/* Copyright Infringements */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              8. Copyright Infringements
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We respect the intellectual property rights of others. If you believe that any material 
              available on or through the Site infringes upon any copyright you own or control, please 
              immediately notify us using the contact information provided below.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              A copy of your infringement notification will be sent to the person who posted or stored 
              the material addressed in the notification.
            </p>
          </section>

          {/* Term and Termination */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              9. Term and Termination
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              These Terms and Conditions shall remain in full force and effect while you use the Site. 
              Without limiting any other provision of these Terms and Conditions, we reserve the right 
              to, in our sole discretion and without notice or liability, deny access to and use of the 
              Site (including blocking certain IP addresses), to any person for any reason or for no 
              reason, including without limitation for breach of any representation, warranty, or covenant 
              contained in these Terms and Conditions or of any applicable law or regulation.
            </p>
          </section>

          {/* Disclaimer */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              10. Disclaimer
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE 
              SITE AND OUR SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, 
              WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SITE AND YOUR USE 
              THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS 
              FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SITE&apos;S 
              CONTENT OR THE CONTENT OF ANY WEBSITES LINKED TO THE SITE AND WE WILL ASSUME NO LIABILITY 
              OR RESPONSIBILITY FOR ANY ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS.
            </p>
          </section>

          {/* Limitations of Liability */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              11. Limitations of Liability
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD 
              PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE 
              DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM 
              YOUR USE OF THE SITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
          </section>

          {/* Governing Law */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              12. Governing Law
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              These Terms and Conditions and your use of the Site are governed by and construed in 
              accordance with the laws applicable to agreements made and to be entirely performed within 
              your jurisdiction, without regard to its conflict of law principles.
            </p>
          </section>

          {/* Modifications */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              13. Modifications and Interruptions
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We reserve the right to change, modify, or remove the contents of the Site at any time or 
              for any reason at our sole discretion without notice. However, we have no obligation to 
              update any information on our Site. We also reserve the right to modify or discontinue all 
              or part of the Site without notice at any time.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              We will not be liable to you or any third party for any modification, price change, 
              suspension, or discontinuance of the Site.
            </p>
          </section>

          {/* Contact Us */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              14. Contact Us
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              In order to resolve a complaint regarding the Site or to receive further information 
              regarding use of the Site, please contact us at:
            </p>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Email:</strong>{' '}
                <a href="mailto:legal@mindshift.blog" className="text-purple-600 dark:text-purple-400 hover:underline">
                  legal@mindshift.blog
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

          {/* Acceptance */}
          <section className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-6 border border-purple-200 dark:border-purple-700">
            <p className="text-gray-700 dark:text-gray-300 font-medium">
              <strong>By using this Site, you acknowledge that you have read these Terms and Conditions 
              and agree to be bound by them.</strong>
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}
