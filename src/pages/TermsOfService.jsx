import React from 'react';
import { Helmet } from 'react-helmet-async';

const TermsOfService = () => {
  const generateTermsOfServiceSchema = () => {
    return {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Terms of Service - YouTube Vanced APK Website",
      "description": "Terms of service for YouTube Vanced APK website. Read our user responsibilities, disclaimers, and legal notices.",
      "url": "https://ytvanced.pro/terms-of-service",
      "dateModified": "2025-09-22",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://ytvanced.pro"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Terms of Service",
            "item": "https://ytvanced.pro/terms-of-service"
          }
        ]
      },
      "mainEntity": {
        "@type": "Article",
        "headline": "Terms of Service - YouTube Vanced APK Website",
        "datePublished": "2025-03-01",
        "dateModified": "2025-09-22",
        "author": {
          "@type": "Organization",
          "name": "YouTube Vanced Community"
        },
        "publisher": {
          "@type": "Organization",
          "name": "YouTube Vanced APK Website",
          "url": "https://ytvanced.pro"
        }
      }
    };
  };

  return (
    <>
      <Helmet>
        <title>Terms of Service - YouTube Vanced APK Website | Legal Terms & Conditions</title>
        <meta name="description" content="Terms of service for YouTube Vanced APK website. Read our user responsibilities, disclaimers, and legal notices." />
        <meta name="keywords" content="terms of service, legal terms, youtube vanced terms, user agreement, website terms, legal notice" />
        <meta property="og:title" content="Terms of Service - YouTube Vanced APK Website" />
        <meta property="og:description" content="Terms of service for YouTube Vanced APK website. Read our user responsibilities, disclaimers, and legal notices." />
        <meta property="og:url" content="https://ytvanced.pro/terms-of-service" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Terms of Service - YouTube Vanced APK Website" />
        <meta name="twitter:description" content="Terms of service for YouTube Vanced APK website. Read our user responsibilities, disclaimers, and legal notices." />
        <script type="application/ld+json">
          {JSON.stringify(generateTermsOfServiceSchema())}
        </script>
      </Helmet>
    
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Last updated: March 2025
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <div className="prose prose-lg max-w-none dark:prose-invert">
            
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using this YouTube Vanced APK website, you accept and agree to be 
              bound by these Terms of Service. If you do not agree to these terms, please do not 
              use our website.
            </p>

            <h2>2. Description of Service</h2>
            <p>
              This website provides information, download links, and support resources related to 
              YouTube Vanced APK. We are an informational resource and community platform for 
              users interested in YouTube Vanced applications.
            </p>

            <h3>What We Provide</h3>
            <ul>
              <li>Information about YouTube Vanced APK features and functionality</li>
              <li>Installation guides and troubleshooting resources</li>
              <li>Download links to official YouTube Vanced APK files</li>
              <li>Community support and user discussions</li>
              <li>Regular updates and news about YouTube Vanced</li>
            </ul>

            <h2>3. User Responsibilities</h2>
            <p>As a user of this website, you agree to:</p>
            <ul>
              <li>Use the website only for lawful purposes</li>
              <li>Not engage in any activity that could harm the website or other users</li>
              <li>Provide accurate information when submitting forms or reviews</li>
              <li>Respect the intellectual property rights of others</li>
              <li>Not attempt to gain unauthorized access to our systems</li>
            </ul>

            <h2>4. YouTube Vanced APK Disclaimer</h2>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 my-6">
              <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                Important Legal Notice
              </h3>
              <p className="text-yellow-700 dark:text-yellow-400 text-sm">
                YouTube Vanced APK is a modified version of the official YouTube application. 
                Use of YouTube Vanced may violate YouTube's Terms of Service. We are not 
                affiliated with Google, YouTube, or the original Vanced development team.
              </p>
            </div>

            <h3>User Acknowledgment</h3>
            <p>By downloading YouTube Vanced APK through our website, you acknowledge that:</p>
            <ul>
              <li>You understand the potential risks and legal implications</li>
              <li>You download and use YouTube Vanced APK at your own discretion</li>
              <li>We are not responsible for any issues arising from YouTube Vanced usage</li>
              <li>You will not hold us liable for any account suspensions or restrictions</li>
            </ul>

            <h2>5. Intellectual Property</h2>
            <p>
              The content on this website, including text, graphics, logos, and software, is 
              protected by copyright and other intellectual property laws. You may not reproduce, 
              distribute, or create derivative works without permission.
            </p>

            <h3>YouTube Vanced Trademarks</h3>
            <p>
              "YouTube Vanced" and related trademarks belong to their respective owners. 
              We use these terms for informational purposes only and do not claim ownership.
            </p>

            <h2>6. Privacy and Data Protection</h2>
            <p>
              Your privacy is important to us. Please review our Privacy Policy to understand 
              how we collect, use, and protect your information when you use our website.
            </p>

            <h2>7. Prohibited Activities</h2>
            <p>You may not use our website to:</p>
            <ul>
              <li>Distribute malware, viruses, or harmful code</li>
              <li>Engage in spamming or unsolicited communications</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Impersonate other individuals or entities</li>
              <li>Collect user information without consent</li>
            </ul>

            <h2>8. Content Accuracy and Updates</h2>
            <p>
              We strive to provide accurate and up-to-date information about YouTube Vanced APK. 
              However, we cannot guarantee the accuracy, completeness, or timeliness of all content. 
              Information may change without notice.
            </p>

            <h3>Download Links</h3>
            <p>
              We regularly verify download links to ensure they point to legitimate YouTube Vanced 
              APK files. However, users should always verify file integrity and scan downloads 
              with antivirus software.
            </p>

            <h2>9. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, we shall not be liable for any direct, 
              indirect, incidental, special, or consequential damages arising from your use 
              of this website or YouTube Vanced APK.
            </p>

            <h3>No Warranty</h3>
            <p>
              This website and its content are provided "as is" without warranties of any kind, 
              either express or implied, including but not limited to merchantability, fitness 
              for a particular purpose, or non-infringement.
            </p>

            <h2>10. Indemnification</h2>
            <p>
              You agree to indemnify and hold us harmless from any claims, damages, or expenses 
              arising from your use of this website or YouTube Vanced APK, or your violation 
              of these terms.
            </p>

            <h2>11. Termination</h2>
            <p>
              We reserve the right to terminate or suspend your access to the website at any 
              time, without prior notice, for conduct that we believe violates these terms 
              or is harmful to other users.
            </p>

            <h2>12. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with applicable 
              international laws. Any disputes shall be resolved through appropriate legal channels.
            </p>

            <h2>13. Changes to Terms</h2>
            <p>
              We may update these Terms of Service from time to time. Changes will be posted 
              on this page with an updated revision date. Continued use of the website after 
              changes constitutes acceptance of the new terms.
            </p>

            <h2>14. Contact Information</h2>
            <p>
              If you have questions about these Terms of Service, please contact us:
            </p>
            <ul>
              <li>Email: legal@ytvanced.pro</li>
              <li>Contact Form: <a href="/contact" className="text-blue-600 dark:text-blue-400">Visit our Contact Page</a></li>
            </ul>

            <h2>15. Severability</h2>
            <p>
              If any provision of these terms is found to be unenforceable, the remaining 
              provisions will remain in full force and effect.
            </p>

            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-400 p-4 mt-8">
              <h3 className="text-lg font-semibold text-red-800 dark:text-red-300 mb-2">
                Final Reminder
              </h3>
              <p className="text-red-700 dark:text-red-400 text-sm">
                Using YouTube Vanced APK may violate YouTube's Terms of Service and could 
                potentially result in account restrictions. Users assume all risks and 
                responsibilities associated with downloading and using YouTube Vanced APK.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default TermsOfService;