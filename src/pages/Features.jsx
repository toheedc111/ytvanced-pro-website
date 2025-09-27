import React from 'react';
import { Helmet } from 'react-helmet-async';
import RelatedContent from '../components/RelatedContent';

const Features = () => {
  const generateFeaturesPageSchema = () => {
    return {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "YouTube Vanced Features - Premium Features Free",
      "description": "Discover all YouTube Vanced features including ad blocking, background play, picture-in-picture mode, and premium features for free.",
      "url": "https://ytvanced.pro/features",
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
            "name": "Features",
            "item": "https://ytvanced.pro/features"
          }
        ]
      },
      "mainEntity": {
        "@type": "ItemList",
        "name": "YouTube Vanced Features",
        "description": "Complete list of YouTube Vanced premium features",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Ad Blocking",
            "description": "Block all video and banner ads for uninterrupted viewing"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Background Playback",
            "description": "Continue playing videos when the app is minimized"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Picture-in-Picture Mode",
            "description": "Watch videos in a floating window while using other apps"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "SponsorBlock Integration",
            "description": "Automatically skip sponsored segments and unwanted content"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "Return YouTube Dislike",
            "description": "See dislike counts on videos again with integrated feature"
          },
          {
            "@type": "ListItem",
            "position": 6,
            "name": "Custom Themes",
            "description": "Personalize interface with custom themes and colors"
          }
        ]
      }
    };
  };

  const features = [
    {
      title: "Ad-Free Experience",
      description: "Enjoy YouTube without any ads, pop-ups, or interruptions for a clean viewing experience.",
      icon: "🚫",
      details: [
        "No video ads before, during, or after videos",
        "No banner ads or overlay advertisements",
        "No promotional pop-ups or notifications",
        "Clean, distraction-free interface"
      ]
    },
    {
      title: "Background Playback",
      description: "Continue listening to videos and music when the app is closed or screen is locked.",
      icon: "🎵",
      details: [
        "Audio continues when switching to other apps",
        "Works with screen locked for battery saving",
        "Perfect for music, podcasts, and lectures",
        "Battery-optimized background processing"
      ]
    },
    {
      title: "Picture-in-Picture Mode",
      description: "Watch videos in a floating window while using other apps for true multitasking.",
      icon: "📱",
      details: [
        "Resizable floating video window",
        "Drag and position anywhere on screen",
        "Works with any Android app",
        "Minimized playback controls"
      ]
    },
    {
      title: "SponsorBlock Integration",
      description: "Automatically skip sponsored segments, intros, outros, and other unwanted content.",
      icon: "⚡",
      details: [
        "Community-driven sponsor detection",
        "Skip intros, outros, and non-music sections",
        "Customizable segment categories",
        "Saves time and improves viewing experience"
      ]
    },
    {
      title: "Return YouTube Dislike",
      description: "See dislike counts on videos again with the integrated Return YouTube Dislike feature.",
      icon: "👎",
      details: [
        "View dislike counts on all videos",
        "Community-maintained dislike database",
        "Helps identify low-quality content",
        "Integrated seamlessly into the interface"
      ]
    },
    {
      title: "Custom Themes & Interface",
      description: "Personalize your YouTube experience with custom themes and advanced interface options.",
      icon: "🎨",
      details: [
        "Dark, Black, and AMOLED themes",
        "Custom accent colors",
        "Interface layout customization",
        "Hide unwanted UI elements"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>YouTube Vanced Features - Premium Features Free | YT Vanced APK</title>
        <meta name="description" content="Discover all YouTube Vanced features including ad blocking, background play, picture-in-picture mode, and premium features for free." />
        <meta name="keywords" content="youtube vanced features, ad blocker, background play, picture in picture, premium features, free youtube premium" />
        <meta property="og:title" content="YouTube Vanced Features - Premium Features Free" />
        <meta property="og:description" content="Discover all YouTube Vanced features including ad blocking, background play, picture-in-picture mode, and premium features for free." />
        <meta property="og:url" content="https://ytvanced.pro/features" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="YouTube Vanced Features - Premium Features Free" />
        <meta name="twitter:description" content="Discover all YouTube Vanced features including ad blocking, background play, picture-in-picture mode, and premium features for free." />
        <script type="application/ld+json">
          {JSON.stringify(generateFeaturesPageSchema())}
        </script>
      </Helmet>
    
      <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Premium YouTube Features - Completely Free
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover all the premium features that YouTube Vanced APK provides without any subscription fees. 
            Get the complete YouTube Premium experience and more with advanced customization options.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl">{feature.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Demo Section */}
        <div className="mt-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              See YouTube Vanced in Action
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Experience the difference with our interactive feature showcase and real user demonstrations.
            </p>
          </div>
          
          {/* Feature Showcase */}
          <div className="bg-gradient-to-r from-red-600 to-purple-600 rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Why Choose YouTube Vanced?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3">✓</span>
                    All YouTube Premium features included
                  </li>
                  <li className="flex items-center">
                    <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3">✓</span>
                    Additional features not available in Premium
                  </li>
                  <li className="flex items-center">
                    <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3">✓</span>
                    Completely free with no subscription required
                  </li>
                  <li className="flex items-center">
                    <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3">✓</span>
                    Open-source and community-driven
                  </li>
                  <li className="flex items-center">
                    <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3">✓</span>
                    Regular updates and new features
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/10 rounded-xl p-6">
                <h4 className="text-xl font-semibold mb-4">📊 Feature Comparison</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Ad-free videos:</span>
                    <span className="text-green-300">✓ Included</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Background playback:</span>
                    <span className="text-green-300">✓ Included</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Picture-in-Picture:</span>
                    <span className="text-green-300">✓ Included</span>
                  </div>
                  <div className="flex justify-between">
                    <span>SponsorBlock:</span>
                    <span className="text-blue-300">✓ Bonus Feature</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Return Dislike:</span>
                    <span className="text-blue-300">✓ Bonus Feature</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Custom themes:</span>
                    <span className="text-blue-300">✓ Bonus Feature</span>
                  </div>
                  <div className="flex justify-between border-t border-white/20 pt-2 mt-2">
                    <span className="font-semibold">Monthly cost:</span>
                    <span className="text-green-300 font-bold">🆓 FREE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Content Section - SEO Internal Links */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RelatedContent currentPage="features" title="Learn More About YouTube Vanced" />
        </div>
      </section>
      </div>
    </>
  );
};

export default Features;
