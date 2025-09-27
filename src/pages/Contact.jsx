import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  const generateContactPageSchema = () => {
    return {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact YouTube Vanced Support Team",
      "description": "Get support for YouTube Vanced APK installation, troubleshooting, and technical assistance from our community team.",
      "url": "https://ytvanced.pro/contact",
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
            "name": "Contact",
            "item": "https://ytvanced.pro/contact"
          }
        ]
      },
      "mainEntity": {
        "@type": "Organization",
        "name": "YouTube Vanced Community Support",
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+1-555-123-4567",
            "contactType": "technical support",
            "email": "support@ytvanced.pro",
            "availableLanguage": "English",
            "hoursAvailable": "Mo-Fr 09:00-18:00"
          },
          {
            "@type": "ContactPoint",
            "email": "community@ytvanced.pro",
            "contactType": "community support",
            "availableLanguage": "English"
          }
        ]
      }
    };
  };

  const generateFAQSchema = () => {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do I install YouTube Vanced APK?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Follow our step-by-step installation guide: 1) Download MicroG first, 2) Install MicroG, 3) Download YouTube Vanced APK, 4) Install Vanced, 5) Open and enjoy!"
          }
        },
        {
          "@type": "Question",
          "name": "Is YouTube Vanced safe to use?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, when downloaded from trusted sources. Always scan APK files and only enable 'Unknown Sources' temporarily during installation."
          }
        },
        {
          "@type": "Question",
          "name": "Which Android versions are supported?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "YouTube Vanced works on Android 4.4+ (API 19). Newer versions (Android 8+) have the best compatibility and performance."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use my Google account with Vanced?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! Install MicroG first to enable Google account login. This allows access to your subscriptions, playlists, and history."
          }
        },
        {
          "@type": "Question",
          "name": "Why are ads still showing after installation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Check that you downloaded official Vanced APK, verify ad-blocking is enabled in Vanced Settings, and clear app cache if needed."
          }
        }
      ]
    };
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  const contactMethods = [
    {
      icon: "📧",
      title: "Email Support",
      description: "Get help from our support team",
      contact: "support@ytvanced.pro",
      response: "Within 24 hours"
    },
    {
      icon: "💬",
      title: "Live Chat",
      description: "Chat with us in real-time",
      contact: "Available on website",
      response: "Instant response"
    },
    {
      icon: "📞",
      title: "Phone Support",
      description: "Speak directly with our team",
      contact: "+1 (555) 123-4567",
      response: "Mon-Fri, 9AM-6PM PST"
    },
    {
      icon: "🎫",
      title: "Support Tickets",
      description: "Submit detailed technical issues",
      contact: "support.ytvanced.pro",
      response: "Within 12 hours"
    }
  ];

  const offices = [
    {
      city: "Community Hub",
      address: "Online Community\nDiscord & Telegram",
      phone: "Community Support Only",
      email: "community@ytvanced.pro"
    },
    {
      city: "Development Team",
      address: "Open Source Project\nGitHub Repository",
      phone: "Issue Tracker Only", 
      email: "dev@ytvanced.pro"
    },
    {
      city: "User Support",
      address: "Global Remote Support\nMultiple Time Zones",
      phone: "Email Support Only",
      email: "support@ytvanced.pro"
    }
  ];

  const faqs = [
    {
      question: "How do I install YouTube Vanced APK?",
      answer: "Follow our step-by-step installation guide: 1) Download MicroG first, 2) Install MicroG, 3) Download YouTube Vanced APK, 4) Install Vanced, 5) Open and enjoy!"
    },
    {
      question: "Is YouTube Vanced safe to use?",
      answer: "Yes, when downloaded from trusted sources. Always scan APK files and only enable 'Unknown Sources' temporarily during installation."
    },
    {
      question: "Which Android versions are supported?",
      answer: "YouTube Vanced works on Android 4.4+ (API 19). Newer versions (Android 8+) have the best compatibility and performance."
    },
    {
      question: "Can I use my Google account with Vanced?",
      answer: "Yes! Install MicroG first to enable Google account login. This allows access to your subscriptions, playlists, and history."
    },
    {
      question: "Why are ads still showing after installation?",
      answer: "Check that you downloaded official Vanced APK, verify ad-blocking is enabled in Vanced Settings, and clear app cache if needed."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact YouTube Vanced Support - Get Help & Technical Assistance | YT Vanced APK</title>
        <meta name="description" content="Get support for YouTube Vanced APK installation, troubleshooting, and technical assistance from our community team." />
        <meta name="keywords" content="youtube vanced support, contact vanced team, installation help, technical support, vanced troubleshooting" />
        <meta property="og:title" content="Contact YouTube Vanced Support - Get Help & Technical Assistance" />
        <meta property="og:description" content="Get support for YouTube Vanced APK installation, troubleshooting, and technical assistance from our community team." />
        <meta property="og:url" content="https://ytvanced.pro/contact" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Contact YouTube Vanced Support - Get Help & Technical Assistance" />
        <meta name="twitter:description" content="Get support for YouTube Vanced APK installation, troubleshooting, and technical assistance from our community team." />
        <script type="application/ld+json">
          {JSON.stringify(generateContactPageSchema())}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(generateFAQSchema())}
        </script>
      </Helmet>
    
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Need Help with YouTube Vanced?
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get support for installation, troubleshooting, and using YouTube Vanced APK. Our community-driven support team is here to help.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">{method.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{method.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{method.description}</p>
              <p className="text-blue-600 dark:text-blue-400 font-medium text-sm mb-1">{method.contact}</p>
              <p className="text-gray-500 dark:text-gray-400 text-xs">{method.response}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="technical">Installation Support</option>
                  <option value="technical">Technical Issues</option>
                  <option value="features">Feature Requests</option>
                  <option value="feedback">Feedback & Suggestions</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us how we can help you..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Office Locations & FAQ */}
          <div className="space-y-8">
            {/* Office Locations */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Our Offices</h2>
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-b-0">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{office.city}</h3>
                    <div className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                      <p className="whitespace-pre-line">{office.address}</p>
                      <p>📞 {office.phone}</p>
                      <p>📧 {office.email}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-b-0">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{faq.question}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Emergency Contact */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
            <p className="mb-6 opacity-90">Stay connected and get updates on our latest features</p>
            <div className="flex justify-center space-x-4">
              {['Twitter', 'LinkedIn', 'GitHub', 'YouTube'].map((platform) => (
                <button key={platform} className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors">
                  {platform}
                </button>
              ))}
            </div>
          </div>
          
          <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-red-800 dark:text-red-300 mb-4">Emergency Support</h3>
            <p className="text-red-700 dark:text-red-400 mb-4">
              For critical issues affecting production systems
            </p>
            <p className="text-red-600 dark:text-red-400 font-semibold">📞 +1 (555) 911-HELP</p>
            <p className="text-red-500 dark:text-red-500 text-sm mt-2">Available 24/7 for Enterprise customers</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;
