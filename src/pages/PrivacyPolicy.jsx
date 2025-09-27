import React from 'react';
import { Helmet } from 'react-helmet-async';

const PrivacyPolicy = () => {
  const generatePrivacyPolicySchema = () => {
    return {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Privacy Policy - YouTube Vanced APK Website",
      "description": "Privacy policy for YouTube Vanced APK website. Learn how we collect, use, and protect your personal information.",
      "url": "https://ytvanced.pro/privacy-policy",
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
            "name": "Privacy Policy",
            "item": "https://ytvanced.pro/privacy-policy"
          }
        ]
      },
      "mainEntity": {
        "@type": "Article",
        "headline": "Privacy Policy - YouTube Vanced APK Website",
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
        <title>Privacy Policy - YouTube Vanced APK Website | Data Protection & Security</title>
        <meta name="description" content="Privacy policy for YouTube Vanced APK website. Learn how we collect, use, and protect your personal information." />
        <meta name="keywords" content="privacy policy, data protection, youtube vanced privacy, personal information, cookies, data security" />
        <meta property="og:title" content="Privacy Policy - YouTube Vanced APK Website" />
        <meta property="og:description" content="Privacy policy for YouTube Vanced APK website. Learn how we collect, use, and protect your personal information." />
        <meta property="og:url" content="https://ytvanced.pro/privacy-policy" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Privacy Policy - YouTube Vanced APK Website" />
        <meta name="twitter:description" content="Privacy policy for YouTube Vanced APK website. Learn how we collect, use, and protect your personal information." />
        <script type="application/ld+json">
          {JSON.stringify(generatePrivacyPolicySchema())}
        </script>
      </Helmet>
    
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Last updated: March 2025
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <div className="prose prose-lg max-w-none dark:prose-invert">
            
            <h2>1. Information We Collect</h2>
            <p>
              We are committed to protecting your privacy. This Privacy Policy explains how we collect, 
              use, and safeguard information when you visit our YouTube Vanced APK website.
            </p>
            
            <h3>Information You Provide</h3>
            <ul>
              <li>Contact form submissions (name, email, message)</li>
              <li>Newsletter subscription email addresses</li>
              <li>User reviews and testimonials (if submitted)</li>
            </ul>
            
            <h3>Automatically Collected Information</h3>
            <ul>
              <li>Website usage analytics (page views, time spent, referring sites)</li>
              <li>Device information (browser type, operating system, IP address)</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use the collected information for the following purposes:</p>
            <ul>
              <li>Responding to your inquiries and providing customer support</li>
              <li>Sending newsletters and updates about YouTube Vanced APK (with your consent)</li>
              <li>Improving our website functionality and user experience</li>
              <li>Analyzing website traffic and usage patterns</li>
              <li>Detecting and preventing fraud or abuse</li>
            </ul>

            <h2>3. Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. 
              We may share information in the following limited circumstances:
            </p>
            <ul>
              <li>With service providers who help us operate our website (analytics, hosting)</li>
              <li>When required by law or to protect our legal rights</li>
              <li>In connection with a business transfer or merger</li>
              <li>With your explicit consent</li>
            </ul>

            <h2>4. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your information against 
              unauthorized access, alteration, disclosure, or destruction. However, no method 
              of transmission over the internet is 100% secure.
            </p>

            <h2>5. Cookies and Tracking</h2>
            <p>
              Our website uses cookies to enhance your browsing experience. You can control 
              cookie settings through your browser preferences. Disabling cookies may affect 
              website functionality.
            </p>

            <h3>Types of Cookies We Use</h3>
            <ul>
              <li><strong>Essential Cookies:</strong> Required for website functionality</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
              <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
            </ul>

            <h2>6. Third-Party Services</h2>
            <p>Our website may contain links to third-party services including:</p>
            <ul>
              <li>Google Analytics for website analytics</li>
              <li>Social media platforms</li>
              <li>External download sources</li>
            </ul>
            <p>
              These third parties have their own privacy policies. We are not responsible 
              for their privacy practices.
            </p>

            <h2>7. Your Rights</h2>
            <p>Depending on your location, you may have the following rights:</p>
            <ul>
              <li>Access to your personal information</li>
              <li>Correction of inaccurate information</li>
              <li>Deletion of your personal information</li>
              <li>Withdrawal of consent for data processing</li>
              <li>Data portability</li>
            </ul>

            <h2>8. Children's Privacy</h2>
            <p>
              Our website is not intended for children under 13. We do not knowingly collect 
              personal information from children under 13. If you believe we have collected 
              such information, please contact us immediately.
            </p>

            <h2>9. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than 
              your country of residence. We ensure appropriate safeguards are in place for 
              such transfers.
            </p>

            <h2>10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of 
              any changes by posting the new policy on this page with an updated revision date.
            </p>

            <h2>11. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, 
              please contact us:
            </p>
            <ul>
              <li>Email: privacy@ytvanced.pro</li>
              <li>Contact Form: <a href="/contact" className="text-blue-600 dark:text-blue-400">Visit our Contact Page</a></li>
            </ul>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4 mt-8">
              <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2">
                Important Disclaimer
              </h3>
              <p className="text-blue-700 dark:text-blue-400 text-sm">
                This website provides information about YouTube Vanced APK. We are not affiliated 
                with Google, YouTube, or the original Vanced development team. Users download and 
                use YouTube Vanced APK at their own risk and discretion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default PrivacyPolicy;