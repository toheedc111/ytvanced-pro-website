import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [expandedItems, setExpandedItems] = useState(new Set());
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredQuestions, setFilteredQuestions] = useState([]);

  const toggleItem = (id) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  // Search functionality
  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredQuestions([]);
      return;
    }

    const allQuestions = Object.values(categories).flatMap(category => 
      category.questions.map(q => ({ ...q, category: category.title }))
    );

    const filtered = allQuestions.filter(q => 
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (q.keywords && q.keywords.some(keyword => 
        keyword.toLowerCase().includes(searchTerm.toLowerCase())
      ))
    );

    setFilteredQuestions(filtered);
  }, [searchTerm]);

  // Generate structured data for featured snippets
  const generateStructuredData = () => {
    const featuredQuestions = Object.values(categories)
      .flatMap(category => category.questions)
      .filter(q => q.featured);

    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": featuredQuestions.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer.replace(/\n/g, ' ').replace(/•/g, '•')
        }
      }))
    };
  };

  const categories = {
    general: {
      title: "General Questions",
      icon: "❓",
      questions: [
        {
          id: "what-is-vanced",
          question: "What is YouTube Vanced APK?",
          answer: "YouTube Vanced APK is a modified version of the official YouTube app that provides premium features like ad-blocking, background playback, picture-in-picture mode, SponsorBlock integration, and return YouTube dislike - completely free. It's designed to enhance your YouTube experience without requiring a YouTube Premium subscription. The APK file can be downloaded and installed on Android devices to access these premium features.",
          featured: true,
          keywords: ["youtube vanced apk", "what is youtube vanced", "vanced features"]
        },
        {
          id: "is-vanced-safe",
          question: "Is YouTube Vanced APK safe to download and use?",
          answer: "Yes, YouTube Vanced APK is generally safe when downloaded from trusted sources like our website. However, since it's a modified app, follow these safety guidelines:\n\n• Download only from official or reputable sources\n• Scan APK files with antivirus software before installation\n• Enable 'Unknown Sources' only temporarily during installation\n• Keep your Android device updated with latest security patches\n• Use a secondary Google account if you're concerned about account safety\n\nWhile no confirmed account bans have been reported, YouTube Vanced violates YouTube's Terms of Service, so use at your own discretion.",
          featured: true,
          keywords: ["youtube vanced apk safe", "vanced security", "is vanced safe"]
        },
        {
          id: "vanced-discontinued",
          question: "Is YouTube Vanced discontinued?",
          answer: "Yes, the official YouTube Vanced project was discontinued in March 2022 due to legal pressure from Google. However, the existing versions still work, and community forks continue to maintain and update the app. The versions available here are community-maintained releases."
        },
        {
          id: "account-ban-risk",
          question: "Will my Google account get banned for using Vanced?",
          answer: "There have been no confirmed reports of Google accounts being banned specifically for using YouTube Vanced. However, since it violates YouTube's Terms of Service, there's always a theoretical risk. Use Vanced at your own discretion and consider using a secondary account if you're concerned."
        },
        {
          id: "download",
          question: "Where to download YouTube Vanced APK latest version 2025?",
          answer: "Download the latest YouTube Vanced APK 2025 from our official download page. We provide:\n\n📦 **Latest Versions Available:**\n• YouTube Vanced v18.43.45 (Latest stable)\n• YouTube Music Vanced v5.21.52\n• Vanced MicroG v0.2.24.220220 (Required)\n\n🔒 **Safe Download Sources:**\n• Our official website (trusted and verified)\n• Direct APK links with SHA-256 verification\n• Virus-scanned files updated regularly\n• No fake or malicious versions\n\n📱 **Supported Devices:**\n• Android 4.4+ (API level 19+)\n• ARM64, ARM, and x86 architectures\n• Samsung, OnePlus, Xiaomi, and all Android brands\n\nAlways download from trusted sources to avoid malware and ensure you get authentic YouTube Vanced APK files.",
          keywords: ["youtube vanced apk download", "latest version 2025", "where to download vanced"]
        },
        {
          id: "vanced-vs-premium",
          question: "YouTube Vanced APK vs YouTube Premium - Which is better?",
          answer: "YouTube Vanced APK vs YouTube Premium comparison:\n\n🆓 **YouTube Vanced APK (Free)**\n✓ Ad-free videos\n✓ Background playback\n✓ Picture-in-Picture mode\n✓ SponsorBlock (skip sponsor segments)\n✓ Return YouTube Dislike\n✓ Custom themes and UI tweaks\n✓ Higher video quality options\n✓ Audio-only mode\n✓ Completely free\n\n💰 **YouTube Premium ($11.99/month)**\n✓ Official Google support\n✓ YouTube Music included\n✓ Downloads for offline viewing\n✓ YouTube Originals\n✓ Cross-device sync\n✓ No installation complexity\n\n**Verdict:** Vanced offers more features for free, while Premium provides official support and YouTube Music. Choose Vanced for advanced features and customization, or Premium for simplicity and official support.",
          featured: true,
          keywords: ["vanced vs premium", "youtube vanced vs youtube premium", "free vs paid youtube"]
        }
      ]
    },
    installation: {
      title: "Installation & Setup",
      icon: "⚙️",
      questions: [
        {
          id: "how-to-install",
          question: "How to install YouTube Vanced APK on Android?",
          answer: "To install YouTube Vanced APK on Android:\n\n1. Enable 'Unknown Sources' in Android Settings > Security & Privacy\n2. Download Vanced MicroG APK first (required for Google account login)\n3. Install MicroG by tapping the downloaded APK file\n4. Download YouTube Vanced APK (latest version)\n5. Install YouTube Vanced APK by tapping the file\n6. Open YouTube Vanced and sign in with your Google account\n7. Configure settings in Vanced Settings for optimal experience\n\nNote: Installation requires Android 4.4+ and approximately 100MB of storage space.",
          featured: true,
          keywords: ["how to install youtube vanced apk", "install vanced android", "vanced installation guide"]
        },
        {
          id: "uninstall-youtube",
          question: "Do I need to uninstall the regular YouTube app?",
          answer: "It's recommended but not required. You can keep both apps installed simultaneously. However, uninstalling the original YouTube app may improve performance and prevent conflicts. Some users prefer to disable the original app instead of uninstalling it."
        },
        {
          id: "microg-required",
          question: "What is microG and why do I need it?",
          answer: "microG is a free and open-source replacement for Google Play Services. It's required for YouTube Vanced to access Google services like account login, subscriptions, and playlists. Without microG, you can only use Vanced without signing in to your Google account."
        },
        {
          id: "installation-failed",
          question: "Installation failed. What should I do?",
          answer: "Common solutions:\n• Ensure 'Unknown Sources' is enabled\n• Clear cache and data of Package Installer\n• Restart your device\n• Try installing in this order: microG → Vanced Manager → YouTube Vanced\n• Check if you have enough storage space\n• Disable any antivirus apps temporarily during installation"
        }
      ]
    },
    features: {
      title: "Features & Usage",
      icon: "🎯",
      questions: [
        {
          id: "what-features",
          question: "What features does YouTube Vanced APK offer?",
          answer: "YouTube Vanced APK includes premium features:\n\n🚫 **Ad-Free Experience**\n• No video ads, banner ads, or overlay ads\n• Skip all promotional content automatically\n\n🎵 **Audio Features**\n• Background playbook (continue playing when app is closed)\n• Audio-only mode for music videos\n• Enhanced audio quality options\n\n📱 **Interface Enhancements**\n• Picture-in-Picture mode for multitasking\n• Custom themes (Dark, Black, AMOLED)\n• Swipe controls for brightness and volume\n• Override max resolution settings\n\n⚡ **Advanced Features**\n• SponsorBlock integration (auto-skip sponsor segments)\n• Return YouTube Dislike button\n• Video speed controls (0.25x to 2x)\n• Repeat videos automatically\n• Force HDR mode\n• Casting controls\n\nAll these features work exactly like YouTube Premium but completely free.",
          featured: true,
          keywords: ["youtube vanced features", "vanced apk features", "youtube premium features free"]
        },
        {
          id: "sponsorblock-what",
          question: "What is SponsorBlock and how does it work?",
          answer: "SponsorBlock is a community-driven feature that automatically skips sponsor segments, intros, outros, interaction reminders, and other unwanted content in YouTube videos. It uses crowd-sourced data where users submit timestamps of segments to skip. You can customize which types of segments to skip in Vanced settings."
        },
        {
          id: "background-playback",
          question: "How do I enable background playback?",
          answer: "Background playback is automatically enabled in YouTube Vanced. Simply start playing a video, then press the home button or switch to another app. The audio will continue playing in the background. You can control playback from the notification panel or lock screen."
        },
        {
          id: "custom-themes",
          question: "How do I change themes in Vanced?",
          answer: "To change themes:\n1. Open YouTube Vanced\n2. Tap your profile picture\n3. Go to Settings > Vanced Settings > Theme\n4. Choose from Dark, Black (AMOLED), or other available themes\n5. The theme will apply immediately without restarting the app"
        }
      ]
    },
    troubleshooting: {
      title: "Troubleshooting",
      icon: "🔧",
      questions: [
        {
          id: "vanced-not-working",
          question: "YouTube Vanced stopped working. How do I fix it?",
          answer: "Try these solutions:\n• Clear Vanced cache and data in App Settings\n• Restart your device\n• Update to the latest version if available\n• Reinstall microG and Vanced\n• Check if your device OS was recently updated\n• Ensure you have a stable internet connection\n• Try signing out and back into your Google account"
        },
        {
          id: "login-issues",
          question: "I can't sign into my Google account in Vanced.",
          answer: "Login issues are usually related to microG:\n• Ensure microG is installed and updated\n• Grant all necessary permissions to microG\n• Clear microG cache and data\n• Try adding your account through microG first, then open Vanced\n• Restart your device after installing microG\n• Check if device administrator privileges are needed"
        },
        {
          id: "videos-not-loading",
          question: "Videos won't load or keep buffering.",
          answer: "For video loading issues:\n• Check your internet connection\n• Clear Vanced cache\n• Try changing video quality settings\n• Disable VPN if you're using one\n• Update Vanced to the latest version\n• Try using a different DNS (like 8.8.8.8)\n• Check if YouTube itself is experiencing outages"
        },
        {
          id: "ads-still-showing",
          question: "I'm still seeing ads in Vanced.",
          answer: "If ads appear:\n• Ensure you downloaded the official Vanced (not a fake)\n• Check Vanced Settings > Ad settings and enable all ad-blocking options\n• Clear app cache and restart\n• Some promotional content within videos may not be blocked\n• Update to the latest version\n• Reinstall Vanced if the issue persists"
        }
      ]
    },
    updates: {
      title: "Updates & Versions",
      icon: "🔄",
      questions: [
        {
          id: "how-to-update",
          question: "How do I update YouTube Vanced?",
          answer: "Since Vanced is discontinued, automatic updates are no longer available. To update:\n1. Check for new community releases on trusted sources\n2. Download the latest APK version\n3. Install over the existing version (no need to uninstall)\n4. Your settings and login will be preserved\n\nNote: Always backup your settings before major updates."
        },
        {
          id: "which-version",
          question: "Which version should I download?",
          answer: "For most users:\n• Latest version (18.43.45) for newest features\n• ARM64 version for modern devices (better performance)\n• Universal version if unsure about your device architecture\n• Older versions (17.x) for better stability on older devices\n\nCheck your device's architecture in Settings > About Phone > Build Number."
        },
        {
          id: "version-history",
          question: "Where can I find older versions?",
          answer: "Older versions are available in our download section under 'Older Versions' tab. Popular stable versions include:\n• v18.20.39 - Stable and reliable\n• v17.45.36 - Good for older devices\n• v16.29.39 - Maximum compatibility\n\nOlder versions may lack newer features but offer better stability."
        },
        {
          id: "beta-versions",
          question: "Are beta versions available?",
          answer: "Beta versions are occasionally released by community developers. These versions may include:\n• Experimental features\n• Bug fixes before stable release\n• Compatibility improvements\n\nBeta versions may be less stable and are recommended for advanced users only."
        }
      ]
    },
    alternatives: {
      title: "Alternatives & Related",
      icon: "🔄",
      questions: [
        {
          id: "vanced-alternatives",
          question: "What are the best alternatives to YouTube Vanced?",
          answer: "Popular alternatives include:\n• NewPipe - Open-source YouTube client\n• YouTube ReVanced - Community continuation of Vanced\n• SkyTube - Open-source ad-free YouTube\n• YouTube Premium - Official Google subscription\n• Browser-based solutions with ad blockers\n\nEach has different features and limitations compared to Vanced."
        },
        {
          id: "youtube-music-vanced",
          question: "Is there a YouTube Music Vanced?",
          answer: "Yes! YouTube Music Vanced provides:\n• Ad-free music streaming\n• Background playback\n• Higher audio quality options\n• Custom themes\n• All YouTube Music premium features free\n\nDownload it separately from the main YouTube Vanced app."
        },
        {
          id: "ios-version",
          question: "Is there a YouTube Vanced for iOS?",
          answer: "No, YouTube Vanced is not available for iOS devices. iOS alternatives include:\n• YouTube++ (requires jailbreak)\n• Cercube (sideloading required)\n• Browser-based YouTube with ad blockers\n• YouTube Premium (official option)\n\niOS's restrictions make modded apps much more difficult to install and use."
        },
        {
          id: "smart-tv-vanced",
          question: "Can I install Vanced on Android TV or Smart TV?",
          answer: "Yes, with limitations:\n• Android TV: Install APK via sideloading\n• Use a file manager or ADB commands\n• Navigation may require a mouse or special remote\n• Some features may not work perfectly with TV interface\n• Consider Smart YouTube TV as an alternative designed for TVs"
        }
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>YouTube Vanced APK FAQ - Installation, Features & Troubleshooting Guide 2025</title>
        <meta name="description" content="Complete FAQ for YouTube Vanced APK. Learn how to install, troubleshoot issues, and use all features. Safe download links and step-by-step guides for Android devices." />
        <meta name="keywords" content="youtube vanced apk faq, how to install youtube vanced, vanced troubleshooting, youtube vanced features, vanced vs premium" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="YouTube Vanced APK FAQ - Complete Guide 2025" />
        <meta property="og:description" content="Find answers to all YouTube Vanced APK questions. Installation guides, troubleshooting, features, and safe download information." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ytvanced.pro/faq" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:title" content="YouTube Vanced APK FAQ - Complete Guide 2025" />
        <meta name="twitter:description" content="Find answers to all YouTube Vanced APK questions. Installation guides, troubleshooting, features, and safe download information." />
        
        {/* Structured data for featured snippets */}
        <script type="application/ld+json">
          {JSON.stringify(generateStructuredData())}
        </script>
        
        {/* Additional structured data for breadcrumbs */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
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
                "name": "FAQ",
                "item": "https://ytvanced.pro/faq"
              }
            ]
          })}
        </script>
      </Helmet>
    
    <div className="min-h-screen py-12">
      <Helmet>
        <title>YouTube Vanced APK FAQ - Installation, Features & Troubleshooting Guide 2025</title>
        <meta name="description" content="Complete FAQ for YouTube Vanced APK. Learn how to install, troubleshoot issues, and use all features. Safe download links and step-by-step guides for Android devices." />
        <meta name="keywords" content="youtube vanced apk faq, how to install youtube vanced, vanced troubleshooting, youtube vanced features, vanced vs premium" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="YouTube Vanced APK FAQ - Complete Guide 2025" />
        <meta property="og:description" content="Find answers to all YouTube Vanced APK questions. Installation guides, troubleshooting, features, and safe download information." />
        <meta property="og:type" content="website" />
        
        {/* Structured data for featured snippets */}
        <script type="application/ld+json">
          {JSON.stringify(generateStructuredData())}
        </script>
        
        {/* Additional structured data for breadcrumbs */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
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
                "name": "FAQ",
                "item": "https://ytvanced.pro/faq"
              }
            ]
          })}
        </script>
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            YouTube Vanced APK FAQ
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
            Complete guide to YouTube Vanced APK installation, features, troubleshooting, and safety. 
            Find answers to the most frequently asked questions about YouTube Vanced in 2025.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <span>📱 Android 4.4+</span>
            <span>🆓 100% Free</span>
            <span>🚫 Ad-Free</span>
            <span>⚡ Premium Features</span>
            <span>🔒 Safe Download</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search FAQ... (e.g., 'how to install', 'features', 'safe')"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-10 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-400">🔍</span>
              </div>
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Category Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sticky top-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Categories</h3>
              <nav className="space-y-2">
                {Object.entries(categories).map(([key, category]) => (
                  <button
                    key={key}
                    onClick={() => setActiveCategory(key)}
                    className={`w-full text-left px-3 py-2 rounded-lg font-medium transition-colors flex items-center space-x-3 ${
                      activeCategory === key
                        ? 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    <span>{category.icon}</span>
                    <span className="text-sm">{category.title}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* FAQ Content */}
          <div className="lg:col-span-3">
            {/* Search Results */}
            {searchTerm && filteredQuestions.length > 0 && (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Search Results for "{searchTerm}" ({filteredQuestions.length} found)
                </h2>
                <div className="space-y-4">
                  {filteredQuestions.map((faq) => (
                    <div key={faq.id} className="border border-gray-200 dark:border-gray-700 rounded-lg">
                      <button
                        onClick={() => toggleItem(faq.id)}
                        className="w-full text-left px-6 py-4 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-inset"
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                              {faq.question}
                            </h3>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              From: {faq.category}
                            </span>
                          </div>
                          <span className={`text-xl transform transition-transform ${expandedItems.has(faq.id) ? 'rotate-180' : ''}`}>
                            ▼
                          </span>
                        </div>
                      </button>
                      {expandedItems.has(faq.id) && (
                        <div className="px-6 pb-4">
                          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                            <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {searchTerm && filteredQuestions.length === 0 && (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8 text-center">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  No results found for "{searchTerm}"
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Try different keywords or browse categories below.
                </p>
                <button
                  onClick={() => setSearchTerm('')}
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Clear Search
                </button>
              </div>
            )}

            {/* Category Content */}
            {!searchTerm && (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <span className="text-2xl">{categories[activeCategory].icon}</span>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {categories[activeCategory].title}
                  </h2>
                </div>

                <div className="space-y-4">
                  {categories[activeCategory].questions.map((faq) => (
                    <div key={faq.id} className="border border-gray-200 dark:border-gray-700 rounded-lg">
                      <button
                        onClick={() => toggleItem(faq.id)}
                        className="w-full text-left px-6 py-4 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-inset"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-start">
                            <h3 className="font-semibold text-gray-900 dark:text-white">
                              {faq.question}
                            </h3>
                            {faq.featured && (
                              <span className="ml-3 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium px-2 py-1 rounded">
                                Featured
                              </span>
                            )}
                          </div>
                          <span className={`text-xl transform transition-transform ${expandedItems.has(faq.id) ? 'rotate-180' : ''}`}>
                            ▼
                          </span>
                        </div>
                      </button>
                      {expandedItems.has(faq.id) && (
                        <div className="px-6 pb-4">
                          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                            <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Contact Support */}
            <div className="mt-8 bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 rounded-xl p-8">
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Still Need Help?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Can't find the answer you're looking for? Join our community or contact support.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                    Join Community
                  </button>
                  <button className="border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors">
                    Contact Support
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default FAQ;