import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import RelatedContent from '../components/RelatedContent';

const Download = () => {
  const [activeTab, setActiveTab] = useState('latest');
  
  const generateDownloadPageSchema = () => {
    return {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Download YouTube Vanced APK - Latest Version 2025",
      "description": "Download YouTube Vanced APK latest version with premium features free. Safe, verified downloads with installation guide and 24/7 support.",
      "url": "https://ytvanced.pro/download",
      "mainEntity": {
        "@type": "SoftwareApplication",
        "name": "YouTube Vanced APK",
        "operatingSystem": "Android",
        "applicationCategory": "MultimediaApplication",
        "downloadUrl": "https://ytvanced.pro/download",
        "softwareVersion": "20.29.37",
        "fileSize": "101.2MB",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        }
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://ytvanced.pro/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Download",
            "item": "https://ytvanced.pro/download"
          }
        ]
      }
    };
  };

  const generateSoftwareListSchema = () => {
    return {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "YouTube Vanced APK Downloads",
      "description": "Complete list of YouTube Vanced APK versions and related applications",
      "numberOfItems": downloads.latest.length,
      "itemListElement": downloads.latest.map((download, index) => ({
        "@type": "SoftwareApplication",
        "position": index + 1,
        "name": download.name,
        "version": download.version,
        "fileSize": download.size,
        "operatingSystem": "Android",
        "downloadUrl": download.downloadUrl,
        "description": download.description
      }))
    };
  };
  
  const downloads = {
    latest: [
      {
        name: "YouTube Vanced APK",
        version: "20.29.37",
        size: "101.2 MB",
        architecture: "Universal",
        description: "Latest YouTube Vanced APK with enhanced ad-blocking and premium features",
        downloadUrl: "https://github.com/vancedapp/vancedapp.github.io/releases/download/v20.29.37/youtube-vanced-v20.29.37-universal.apk",
        icon: "📺",
        popular: true,
        changelog: "• Enhanced ad-blocking algorithms\n• Improved background playback stability\n• Better SponsorBlock integration\n• Fixed Android 14 compatibility issues",
        verified: true,
        downloadCount: "2.1M"
      },
      {
        name: "YouTube Vanced (ARM64)",
        version: "20.29.37",
        size: "97.8 MB",
        architecture: "ARM64-v8a",
        description: "Optimized for modern 64-bit Android devices - Best Performance",
        downloadUrl: "https://github.com/vancedapp/vancedapp.github.io/releases/download/v20.29.37/youtube-vanced-v20.29.37-arm64.apk",
        icon: "📺",
        recommended: true,
        downloadCount: "1.8M"
      },
      {
        name: "YouTube Vanced (ARM32)",
        version: "20.29.37",
        size: "94.3 MB",
        architecture: "armeabi-v7a",
        description: "Compatible with older 32-bit Android devices",
        downloadUrl: "https://github.com/vancedapp/vancedapp.github.io/releases/download/v20.29.37/youtube-vanced-v20.29.37-arm32.apk",
        icon: "📺",
        downloadCount: "950K"
      },
      {
        name: "Vanced Manager",
        version: "2.6.2",
        size: "15.2 MB", 
        architecture: "Universal",
        description: "Official manager to install and update Vanced apps easily",
        downloadUrl: "https://github.com/vancedapp/vancedapp.github.io/releases/download/manager-v2.6.2/vanced-manager-v2.6.2.apk",
        icon: "⚙️",
        downloadCount: "3.2M"
      },
      {
        name: "YouTube Music Vanced",
        version: "6.45.72",
        size: "68.3 MB",
        architecture: "ARM64",
        description: "YouTube Music with ad blocking and premium features",
        downloadUrl: "https://github.com/vancedapp/vancedapp.github.io/releases/download/music-v6.45.72/youtube-music-vanced-v6.45.72-arm64.apk",
        icon: "🎵",
        downloadCount: "1.2M"
      },
      {
        name: "microG for Vanced",
        version: "0.3.1.4",
        size: "8.7 MB",
        architecture: "Universal", 
        description: "Required for Google account login in Vanced apps",
        downloadUrl: "https://github.com/vancedapp/vancedapp.github.io/releases/download/microg-v0.3.1.4/microg-vanced-v0.3.1.4.apk",
        icon: "🔐",
        downloadCount: "2.8M"
      }
    ],
    older: [
      {
        name: "YouTube Vanced APK",
        version: "18.20.39",
        size: "85.2 MB",
        architecture: "Universal",
        description: "Stable older version - recommended for older devices",
        downloadUrl: "#",
        icon: "📺"
      },
      {
        name: "YouTube Vanced APK",
        version: "17.45.36",
        size: "78.9 MB",
        architecture: "Universal",
        description: "Legacy version with proven stability",
        downloadUrl: "#",
        icon: "📺"
      }
    ]
  };

  const requirements = [
    "Android 5.0 (API level 21) or higher",
    "At least 100MB free storage space",
    "Unknown sources enabled in settings",
    "Uninstall official YouTube app (recommended)"
  ];

  // Download tracking function
  const handleDownload = (url, appName, version) => {
    // Track download analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', 'download', {
        'event_category': 'APK Downloads',
        'event_label': `${appName} v${version}`,
        'value': 1
      });
    }
    
    // Show safety warning before download
    const confirmed = window.confirm(
      `You are about to download ${appName} v${version}.\n\n` +
      "⚠️ Important Safety Information:\n" +
      "• Only download from trusted sources\n" +
      "• Scan APK files with antivirus software\n" +
      "• Enable 'Unknown Sources' in Android Settings\n" +
      "• This is a community-maintained version\n\n" +
      "Do you want to continue with the download?"
    );
    
    if (confirmed) {
      // Create download link
      const link = document.createElement('a');
      link.href = url;
      link.download = `${appName.replace(/\s+/g, '-').toLowerCase()}-v${version}.apk`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Show post-download instructions
      setTimeout(() => {
        alert(
          "✅ Download Started!\n\n" +
          "Next Steps:\n" +
          "1. Check your Downloads folder\n" +
          "2. Enable 'Unknown Sources' in Settings\n" +
          "3. Install the APK file\n" +
          "4. Follow our installation guide if needed\n\n" +
          "Need help? Check our FAQ section!"
        );
      }, 1000);
    }
  };

  const installationSteps = [
    {
      step: 1,
      title: "Enable Unknown Sources",
      description: "Go to Settings > Security > Unknown Sources and enable it",
      icon: "🔓"
    },
    {
      step: 2,
      title: "Download Required Files",
      description: "Download Vanced Manager, microG, and YouTube Vanced APK",
      icon: "📥"
    },
    {
      step: 3,
      title: "Install microG First",
      description: "Install microG for Vanced to enable Google account login",
      icon: "🔐"
    },
    {
      step: 4,
      title: "Install Vanced Manager",
      description: "Install the Vanced Manager app to manage installations",
      icon: "⚙️"
    },
    {
      step: 5,
      title: "Install YouTube Vanced",
      description: "Use Vanced Manager or install the APK directly",
      icon: "📺"
    },
    {
      step: 6,
      title: "Setup & Enjoy",
      description: "Open Vanced, sign in with your Google account and enjoy!",
      icon: "🎉"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Download YouTube Vanced APK - Latest Version 2025 | Free Premium Features</title>
        <meta name="description" content="Download YouTube Vanced APK latest version with premium features free. Safe, verified downloads with installation guide and 24/7 support." />
        <meta name="keywords" content="youtube vanced apk download, youtube vanced latest version, vanced manager download, youtube vanced apk 2025, download youtube vanced" />
        <link rel="canonical" href="https://ytvanced.pro/download" />
        <meta property="og:title" content="Download YouTube Vanced APK - Latest Version 2025" />
        <meta property="og:description" content="Get YouTube Vanced APK with premium features free. Verified downloads, installation guide, and full support." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ytvanced.pro/download" />
        
        {/* Download Page Schema */}
        <script type="application/ld+json">
          {JSON.stringify(generateDownloadPageSchema())}
        </script>
        
        {/* Software List Schema */}
        <script type="application/ld+json">
          {JSON.stringify(generateSoftwareListSchema())}
        </script>
      </Helmet>
      
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Trust Signals */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Download YouTube Vanced APK
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
            Get the latest version of YouTube Vanced with ad blocking, background play, 
            and all premium features completely free.
          </p>
          
          {/* Download Counter & Trust Badges */}
          <div className="flex justify-center items-center space-x-8 mb-8 text-sm">
            <div className="flex items-center space-x-2 bg-green-100 dark:bg-green-900 px-4 py-2 rounded-full">
              <span className="text-green-600 dark:text-green-400">📊</span>
              <span className="font-semibold text-green-800 dark:text-green-200">50M+ Downloads</span>
            </div>
            <div className="flex items-center space-x-2 bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded-full">
              <span className="text-blue-600 dark:text-blue-400">🛡️</span>
              <span className="font-semibold text-blue-800 dark:text-blue-200">Virus Free</span>
            </div>
            <div className="flex items-center space-x-2 bg-yellow-100 dark:bg-yellow-900 px-4 py-2 rounded-full">
              <span className="text-yellow-600 dark:text-yellow-400">⭐</span>
              <span className="font-semibold text-yellow-800 dark:text-yellow-200">4.8/5 Rating</span>
            </div>
          </div>
        </div>

        {/* QR Code Download Section */}
        <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 rounded-xl p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Quick Mobile Download
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Scan the QR code with your phone camera to download YouTube Vanced APK directly to your device.
              </p>
              <div className="flex space-x-4">
                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  Generate QR Code
                </button>
                <button className="border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors">
                  Send Link via SMS
                </button>
              </div>
            </div>
            <div className="text-center">
              <div className="w-48 h-48 bg-white dark:bg-gray-800 rounded-xl shadow-lg mx-auto flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600">
                <div className="text-center">
                  <span className="text-6xl mb-4 block">📱</span>
                  <p className="text-sm text-gray-500 dark:text-gray-400">QR Code will appear here</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Warning Banner */}
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg p-4 mb-8">
          <div className="flex">
            <span className="text-yellow-400 text-xl mr-3">⚠️</span>
            <div>
              <h3 className="text-yellow-800 dark:text-yellow-200 font-semibold mb-1">
                Important Notice
              </h3>
              <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                YouTube Vanced is no longer officially supported. These are community-maintained versions. 
                Download at your own risk and always scan files before installation.
              </p>
            </div>
          </div>
        </div>

        {/* Version Tabs */}
        <div className="mb-8">
          <div className="flex space-x-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
            <button
              onClick={() => setActiveTab('latest')}
              className={`flex-1 py-2 px-4 rounded-md font-medium transition-colors ${
                activeTab === 'latest'
                  ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Latest Versions
            </button>
            <button
              onClick={() => setActiveTab('older')}
              className={`flex-1 py-2 px-4 rounded-md font-medium transition-colors ${
                activeTab === 'older'
                  ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Older Versions
            </button>
          </div>
        </div>

        {/* Downloads Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {downloads[activeTab].map((app, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow relative">
              {/* Popular/Recommended Badges */}
              {app.popular && (
                <div className="absolute -top-2 -right-2 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  🔥 Popular
                </div>
              )}
              {app.recommended && (
                <div className="absolute -top-2 -right-2 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  ⭐ Recommended
                </div>
              )}
              
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl">{app.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {app.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      v{app.version} • {app.size} • {app.architecture}
                    </p>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {app.description}
              </p>
              
              {app.changelog && (
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">What's New:</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-300 whitespace-pre-line">
                    {app.changelog}
                  </p>
                </div>
              )}
              
              <div className="flex space-x-3">
                <button 
                  onClick={() => handleDownload(app.downloadUrl, app.name, app.version)}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                >
                  <span>📥</span>
                  <span>Download APK</span>
                  {app.verified && <span className="text-xs bg-green-500 px-1 rounded">✓</span>}
                </button>
                <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  ℹ️
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Installation Requirements */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            System Requirements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Minimum Requirements
              </h3>
              <ul className="space-y-2">
                {requirements.map((req, index) => (
                  <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    {req}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Supported Devices
              </h3>
              <div className="space-y-2 text-gray-600 dark:text-gray-300">
                <p>✅ Android phones and tablets</p>
                <p>✅ Android TV boxes (with sideloading)</p>
                <p>✅ Fire TV devices</p>
                <p>❌ iOS devices (not supported)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Installation Guide */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Step-by-Step Installation Guide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {installationSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {step.step}
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl mb-2">{step.icon}</div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {step.description}
                    </p>
                  </div>
                </div>
                {index < installationSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-5 left-full w-full h-0.5 bg-gray-200 dark:bg-gray-700 transform translate-x-6"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Video Installation Guide Placeholder */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-8 mb-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Video Installation Guide
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Watch our step-by-step video guide for easy installation
            </p>
            <div className="w-full max-w-2xl mx-auto bg-gray-200 dark:bg-gray-700 rounded-xl h-64 flex items-center justify-center">
              <div className="text-center">
                <span className="text-6xl mb-4 block">🎥</span>
                <p className="text-gray-600 dark:text-gray-300">Installation video coming soon</p>
                <button className="mt-4 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  Watch Tutorial
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Is YouTube Vanced safe to use?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Yes, YouTube Vanced is safe when downloaded from trusted sources. However, always scan APK files with antivirus software before installation.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Will my Google account get banned?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                There have been no confirmed cases of account bans due to using YouTube Vanced. However, use at your own discretion.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Do I need to uninstall regular YouTube?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                It's recommended but not required. You can run both apps simultaneously, but uninstalling the original YouTube may improve performance.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                How do I update YouTube Vanced?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Since Vanced is discontinued, you'll need to manually download and install newer community versions when available.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Content Section - SEO Internal Links */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RelatedContent currentPage="download" title="Related Download Resources" />
        </div>
      </section>
    </div>
    </>
  );
};

export default Download;