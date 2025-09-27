import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import RelatedContent from '../components/RelatedContent';

const Documentation = () => {
  const generateDocumentationSchema = () => {
    return {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "YouTube Vanced Documentation - Complete Guide",
      "description": "Complete documentation for YouTube Vanced APK installation, features, troubleshooting, and device compatibility guide.",
      "url": "https://ytvanced.pro/documentation",
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
            "name": "Documentation",
            "item": "https://ytvanced.pro/documentation"
          }
        ]
      },
      "mainEntity": {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How to get started with YouTube Vanced?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Download YouTube Vanced APK and MicroG, install MicroG first, then install YouTube Vanced APK, open and enjoy premium features."
            }
          },
          {
            "@type": "Question",
            "name": "What features does YouTube Vanced provide?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "YouTube Vanced provides ad-blocking, background playback, picture-in-picture mode, SponsorBlock integration, return dislike button, and custom themes."
            }
          },
          {
            "@type": "Question",
            "name": "How to troubleshoot YouTube Vanced installation issues?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Enable Unknown Sources, ensure sufficient storage, install MicroG first, clear cache if needed, and verify Android version compatibility."
            }
          }
        ]
      }
    };
  };

  const [activeSection, setActiveSection] = useState('getting-started');

  const sections = [
    { id: 'getting-started', title: 'Getting Started', icon: '🚀' },
    { id: 'installation', title: 'Installation Guide', icon: '⚙️' },
    { id: 'features', title: 'Features Overview', icon: '🔧' },
    { id: 'troubleshooting', title: 'Troubleshooting', icon: '📖' },
    { id: 'compatibility', title: 'Device Compatibility', icon: '📱' },
    { id: 'safety', title: 'Safety & Security', icon: '🔍' }
  ];

  const content = {
    'getting-started': {
      title: 'Getting Started with YouTube Vanced APK',
      content: (
        <div className="space-y-6">
          <p>Welcome to YouTube Vanced APK! This guide will help you download, install, and use YouTube Vanced on your Android device.</p>
          
          <h3 className="text-xl font-semibold">What is YouTube Vanced?</h3>
          <p>YouTube Vanced is a modified version of the official YouTube app that provides premium features like ad-blocking, background playback, Picture-in-Picture mode, and much more - completely free.</p>
          
          <h3 className="text-xl font-semibold">Quick Setup</h3>
          <div className="bg-gray-900 rounded-lg p-4 text-green-400">
            <pre>{`1. Download YouTube Vanced APK
2. Download Vanced MicroG (required for login)
3. Install MicroG first
4. Install YouTube Vanced APK
5. Open and enjoy premium features!`}</pre>
          </div>
          
          <h3 className="text-xl font-semibold">What You'll Get</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>📵 No ads on any videos</li>
            <li>🎵 Background playback when app is closed</li>
            <li>📱 Picture-in-Picture mode for multitasking</li>
            <li>⚡ SponsorBlock integration to skip sponsored segments</li>
            <li>👎 Return YouTube Dislike button</li>
            <li>🎨 Custom themes (Dark, Black, AMOLED)</li>
            <li>⚙️ Advanced video settings and controls</li>
          </ul>
        </div>
      )
    },
    'installation': {
      title: 'Installation Guide',
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">Prerequisites</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Android 4.4+ (API level 19 or higher)</li>
            <li>At least 100MB free storage</li>
            <li>Enable 'Unknown Sources' in device settings</li>
          </ul>
          
          <h3 className="text-xl font-semibold">Download Required Files</h3>
          
          <h4 className="text-lg font-medium">Step 1: Download Vanced MicroG</h4>
          <div className="bg-gray-900 rounded-lg p-4 text-green-400">
            <pre>{`# Download MicroG APK first
# This enables Google account login`}</pre>
          </div>
          
          <h4 className="text-lg font-medium">Step 2: Download YouTube Vanced APK</h4>
          <div className="bg-gray-900 rounded-lg p-4 text-green-400">
            <pre>{`# Download the latest YouTube Vanced APK
# Choose your preferred theme (Dark/Black)`}</pre>
          </div>
          
          <h4 className="text-lg font-medium">Step 3: Install in Correct Order</h4>
          <div className="bg-gray-900 rounded-lg p-4 text-green-400">
            <pre>{`1. Install MicroG APK first
2. Install YouTube Vanced APK
3. Grant all required permissions
4. Sign in with Google account`}</pre>
          </div>
        </div>
      )
    },
    'features': {
      title: 'Features Overview',
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">Ad-Free Experience</h3>
          <p>Enjoy YouTube without any interruptions:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>No video ads before, during, or after videos</li>
            <li>No banner ads or overlay ads</li>
            <li>No promotional pop-ups</li>
            <li>Clean, distraction-free viewing experience</li>
          </ul>
          
          <h3 className="text-xl font-semibold">Background Playback</h3>
          <p>Continue listening when the app is closed:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Audio continues when switching apps</li>
            <li>Works with screen locked</li>
            <li>Perfect for music and podcasts</li>
            <li>Battery-optimized background mode</li>
          </ul>
          
          <h3 className="text-xl font-semibold">Picture-in-Picture Mode</h3>
          <p>Multitask while watching videos:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Floating video window</li>
            <li>Resizable and movable</li>
            <li>Works with any app</li>
            <li>Minimized controls</li>
          </ul>
          
          <h3 className="text-xl font-semibold">Advanced Features</h3>
          <div className="bg-gray-900 rounded-lg p-4 text-green-400">
            <pre>{`• SponsorBlock: Auto-skip sponsored segments
• Return Dislike: See dislike counts
• Custom Themes: Dark, Black, AMOLED
• Video Quality: Override max resolution
• Playback Speed: 0.25x to 2x controls
• Swipe Controls: Brightness & volume`}</pre>
          </div>
        </div>
      )
    },
    'troubleshooting': {
      title: 'Troubleshooting',
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">Common Installation Issues</h3>
          
          <h4 className="text-lg font-medium">Installation Failed Error</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>Ensure 'Unknown Sources' is enabled</li>
            <li>Check available storage space (need 100MB+)</li>
            <li>Clear Package Installer cache</li>
            <li>Restart device and try again</li>
          </ul>
          
          <h4 className="text-lg font-medium">App Crashes on Startup</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>Install Vanced MicroG first</li>
            <li>Clear YouTube Vanced app data</li>
            <li>Reinstall in correct order (MicroG → Vanced)</li>
            <li>Check Android version compatibility</li>
          </ul>
          
          <h4 className="text-lg font-medium">Cannot Sign Into Google Account</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>Verify MicroG is properly installed</li>
            <li>Grant all permissions to MicroG</li>
            <li>Clear MicroG cache and data</li>
            <li>Add account through MicroG settings first</li>
          </ul>
          
          <h4 className="text-lg font-medium">Ads Still Showing</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>Ensure you downloaded official Vanced APK</li>
            <li>Check ad-blocking settings in Vanced Settings</li>
            <li>Clear app cache and restart</li>
            <li>Update to latest version</li>
          </ul>
          
          <h3 className="text-xl font-semibold">Reset & Reinstall</h3>
          <div className="bg-gray-900 rounded-lg p-4 text-green-400">
            <pre>{`1. Uninstall YouTube Vanced
2. Uninstall Vanced MicroG
3. Clear all cached data
4. Download fresh APK files
5. Install MicroG first
6. Install YouTube Vanced
7. Configure settings`}</pre>
          </div>
        </div>
      )
    },

    'safety': {
      title: 'Safety & Security',
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">Download Safety</h3>
          <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-400 p-4">
            <h4 className="font-semibold text-red-800 dark:text-red-300 mb-2">🛡️ Important Safety Guidelines</h4>
            <ul className="text-sm text-red-700 dark:text-red-400 space-y-1">
              <li>• Only download from trusted and verified sources</li>
              <li>• Always scan APK files with antivirus software</li>
              <li>• Verify file checksums when available</li>
              <li>• Enable 'Unknown Sources' only temporarily</li>
              <li>• Keep your device security patches updated</li>
            </ul>
          </div>
          
          <h3 className="text-xl font-semibold">Account Security</h3>
          <p>Protect your Google account when using YouTube Vanced:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Consider using a secondary Google account</li>
            <li>Enable 2-factor authentication</li>
            <li>Monitor account activity regularly</li>
            <li>Use strong, unique passwords</li>
          </ul>
          
          <h3 className="text-xl font-semibold">Privacy Considerations</h3>
          <div className="bg-gray-900 rounded-lg p-4 text-green-400">
            <pre>{`• YouTube Vanced is community-maintained
• Not affiliated with Google/YouTube
• May collect usage analytics
• Review privacy policies
• Use at your own discretion`}</pre>
          </div>
          
          <h3 className="text-xl font-semibold">Legal Notice</h3>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4">
            <p className="text-yellow-800 dark:text-yellow-300 text-sm">
              <strong>Disclaimer:</strong> YouTube Vanced is a modified version of the official YouTube app. 
              While generally safe, it violates YouTube's Terms of Service. Use responsibly and understand 
              the potential risks. We are not responsible for any account issues or security problems.
            </p>
          </div>
          
          <h3 className="text-xl font-semibold">Best Practices</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>🔄 Keep the app updated to latest version</li>
            <li>🛡️ Run regular antivirus scans</li>
            <li>📱 Don't grant unnecessary permissions</li>
            <li>🚫 Avoid using on work or sensitive devices</li>
            <li>💾 Backup important data before installation</li>
          </ul>
        </div>
      )
    }
  };

  return (
    <>
      <Helmet>
        <title>YouTube Vanced Documentation - Complete Installation & Feature Guide | YT Vanced APK</title>
        <meta name="description" content="Complete documentation for YouTube Vanced APK installation, features, troubleshooting, and device compatibility guide." />
        <meta name="keywords" content="youtube vanced documentation, installation guide, troubleshooting, features, android compatibility, vanced help" />
        <meta property="og:title" content="YouTube Vanced Documentation - Complete Guide" />
        <meta property="og:description" content="Complete documentation for YouTube Vanced APK installation, features, troubleshooting, and device compatibility guide." />
        <meta property="og:url" content="https://ytvanced.pro/documentation" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="YouTube Vanced Documentation - Complete Guide" />
        <meta name="twitter:description" content="Complete documentation for YouTube Vanced APK installation, features, troubleshooting, and device compatibility guide." />
        <script type="application/ld+json">
          {JSON.stringify(generateDocumentationSchema())}
        </script>
      </Helmet>
    
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            YouTube Vanced Documentation
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Complete guide to YouTube Vanced APK installation, features, and troubleshooting
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <nav className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 sticky top-20">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Contents</h3>
              <ul className="space-y-2">
                {sections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center space-x-2 ${
                        activeSection === section.id
                          ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      <span>{section.icon}</span>
                      <span>{section.title}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Content */}
          <div className="lg:w-3/4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                {content[activeSection].title}
              </h2>
              <div className="prose prose-lg max-w-none dark:prose-invert">
                {content[activeSection].content}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Content Section - SEO Internal Links */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RelatedContent currentPage="documentation" title="Additional Resources & Guides" />
        </div>
      </section>
    </div>
    </>
  );
};

export default Documentation;
