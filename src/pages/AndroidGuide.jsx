import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Shield, 
  Download, 
  Smartphone, 
  CheckCircle, 
  AlertTriangle, 
  Settings, 
  Battery, 
  Wifi,
  Monitor,
  User,
  Clock,
  Star,
  ArrowRight,
  PlayCircle,
  Lock,
  Zap,
  Globe
} from 'lucide-react';

const AndroidGuide = () => {
  const generateAndroidGuideSchema = () => {
    return {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "YouTube Vanced APK for Android: Complete Installation & Compatibility Guide 2025",
      "description": "Complete guide for YouTube Vanced APK on Android devices. Learn about compatibility, installation steps, and device-specific tips for Samsung, OnePlus, Xiaomi, and more.",
      "image": "https://ytvanced.pro/images/android-guide.jpg",
      "datePublished": "2025-09-10",
      "dateModified": "2025-09-22",
      "author": {
        "@type": "Organization",
        "name": "YouTube Vanced Community"
      },
      "publisher": {
        "@type": "Organization",
        "name": "YouTube Vanced APK Website",
        "logo": {
          "@type": "ImageObject",
          "url": "https://ytvanced.pro/images/logo.png"
        },
        "url": "https://ytvanced.pro"
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://ytvanced.pro/android-guide"
      },
      "articleSection": "Installation Guides",
      "wordCount": 2500,
      "keywords": "YouTube Vanced APK, Android installation, device compatibility, Samsung, OnePlus, Xiaomi"
    };
  };

  const generateBreadcrumbSchema = () => {
    return {
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
          "name": "Blog",
          "item": "https://ytvanced.pro/blog"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Android Guide",
          "item": "https://ytvanced.pro/android-guide"
        }
      ]
    };
  };

  return (
    <>
      <Helmet>
        <title>YouTube Vanced APK for Android: Installation & Compatibility Guide 2025 | Complete Android Setup</title>
        <meta name="description" content="Complete YouTube Vanced APK Android guide 2025. Download, install & optimize YouTube Vanced for all Android devices. Step-by-step compatibility instructions." />
        <meta name="keywords" content="youtube vanced apk android, youtube vanced android download, youtube vanced apk install android, android youtube vanced, youtube vanced android compatibility, youtube vanced android guide 2025" />
        <link rel="canonical" href="https://ytvanced.pro/youtube-vanced-apk-android-installation-compatibility-guide" />
        <meta property="og:title" content="YouTube Vanced APK for Android: Complete Installation & Compatibility Guide 2025" />
        <meta property="og:description" content="Ultimate YouTube Vanced APK Android guide. Download, install & optimize for all Android versions. Complete compatibility instructions & troubleshooting." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://ytvanced.pro/youtube-vanced-apk-android-installation-compatibility-guide" />
        <meta property="article:published_time" content="2025-09-10T10:00:00Z" />
        <meta property="article:modified_time" content="2025-09-10T10:00:00Z" />
        <meta property="article:author" content="YouTube Vanced Team" />
        <meta property="article:section" content="Android Guides" />
        <meta property="article:tag" content="YouTube Vanced APK" />
        <meta property="article:tag" content="Android Installation" />
        <meta property="article:tag" content="Android Compatibility" />
        <script type="application/ld+json">
          {JSON.stringify(generateAndroidGuideSchema())}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(generateBreadcrumbSchema())}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 text-white">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                <Smartphone className="h-5 w-5 mr-2" />
                <span className="text-sm font-medium">Android Compatibility Guide 2025</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                YouTube Vanced APK for Android
                <span className="block text-3xl md:text-5xl bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Complete Installation & Compatibility Guide
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
                Master YouTube Vanced APK installation on Android devices. Comprehensive compatibility guide for all Android versions with step-by-step instructions, troubleshooting, and optimization tips.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center">
                  <Download className="h-5 w-5 mr-2" />
                  Download for Android
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors flex items-center">
                  <PlayCircle className="h-5 w-5 mr-2" />
                  Watch Installation Video
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: Smartphone, label: "Android Devices", value: "2.5B+ Supported", color: "from-green-500 to-emerald-500" },
              { icon: Download, label: "Total Downloads", value: "500M+ Android", color: "from-blue-500 to-cyan-500" },
              { icon: Star, label: "Android Rating", value: "4.8/5 Stars", color: "from-yellow-500 to-orange-500" },
              { icon: Shield, label: "Security", value: "100% Safe", color: "from-purple-500 to-pink-500" }
            ].map((stat, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.color} mb-4`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{stat.label}</h3>
                <p className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Article Content */}
            <div className="lg:col-span-2">
              {/* Introduction */}
              <article className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  What is YouTube Vanced APK for Android?
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  YouTube Vanced APK for Android is the ultimate modified version of the official YouTube app, specifically optimized for Android devices. With over 500 million downloads across Android platforms, YouTube Vanced APK has become the go-to solution for Android users seeking premium YouTube features without subscription costs.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  The Android version of YouTube Vanced APK offers comprehensive compatibility across Android 4.4 (KitKat) to Android 14, supporting over 2.5 billion Android devices worldwide. This extensive Android compatibility makes YouTube Vanced APK the most accessible premium YouTube experience for Android users globally.
                </p>
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                    Why Choose YouTube Vanced APK for Android?
                  </h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-center"><ArrowRight className="h-4 w-4 text-blue-500 mr-2" />Universal Android compatibility (4.4+)</li>
                    <li className="flex items-center"><ArrowRight className="h-4 w-4 text-blue-500 mr-2" />Optimized for Android performance</li>
                    <li className="flex items-center"><ArrowRight className="h-4 w-4 text-blue-500 mr-2" />Android-specific features & settings</li>
                    <li className="flex items-center"><ArrowRight className="h-4 w-4 text-blue-500 mr-2" />Regular Android security updates</li>
                  </ul>
                </div>
              </article>

              {/* Android Compatibility Guide */}
              <article className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Android Compatibility Requirements
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  YouTube Vanced APK Android compatibility spans across all major Android versions, ensuring maximum device support. Understanding Android compatibility requirements is crucial for successful YouTube Vanced APK installation and optimal performance on your Android device.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                      Supported Android Versions
                    </h3>
                    <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                      <li className="flex items-center justify-between">
                        <span>Android 14 (API 34)</span>
                        <span className="text-green-600 font-semibold">✓ Fully Supported</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Android 13 (API 33)</span>
                        <span className="text-green-600 font-semibold">✓ Fully Supported</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Android 12/12L (API 31-32)</span>
                        <span className="text-green-600 font-semibold">✓ Fully Supported</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Android 11 (API 30)</span>
                        <span className="text-green-600 font-semibold">✓ Fully Supported</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Android 10 (API 29)</span>
                        <span className="text-green-600 font-semibold">✓ Fully Supported</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Android 9 Pie (API 28)</span>
                        <span className="text-green-600 font-semibold">✓ Fully Supported</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Android 8.0/8.1 (API 26-27)</span>
                        <span className="text-green-600 font-semibold">✓ Fully Supported</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Android 7.0/7.1 (API 24-25)</span>
                        <span className="text-green-600 font-semibold">✓ Fully Supported</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Android 6.0 (API 23)</span>
                        <span className="text-blue-600 font-semibold">✓ Supported</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Android 5.0/5.1 (API 21-22)</span>
                        <span className="text-blue-600 font-semibold">✓ Supported</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Android 4.4 (API 19)</span>
                        <span className="text-yellow-600 font-semibold">⚡ Basic Support</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                      <Settings className="h-6 w-6 text-blue-500 mr-2" />
                      Hardware Requirements
                    </h3>
                    <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                      <li className="flex items-center justify-between">
                        <span>RAM Memory</span>
                        <span className="font-semibold">2GB+ Recommended</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Storage Space</span>
                        <span className="font-semibold">100MB+ Free</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Processor</span>
                        <span className="font-semibold">ARMv7/ARM64</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Screen Resolution</span>
                        <span className="font-semibold">480p+ Display</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Internet</span>
                        <span className="font-semibold">WiFi/Mobile Data</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>Architecture</span>
                        <span className="font-semibold">32-bit/64-bit</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl p-6 border border-yellow-200 dark:border-yellow-800">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                    <AlertTriangle className="h-6 w-6 text-yellow-500 mr-2" />
                    Android Compatibility Notes
                  </h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• Android 4.4 devices may experience limited functionality</li>
                    <li>• Android 6.0+ required for full MicroG integration</li>
                    <li>• Android 8.0+ recommended for optimal performance</li>
                    <li>• Some features require Android 10+ for full functionality</li>
                  </ul>
                </div>
              </article>

              {/* Installation Guide */}
              <article className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Step-by-Step Android Installation Guide
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  Installing YouTube Vanced APK on Android devices requires following specific steps to ensure compatibility and security. This comprehensive Android installation guide covers all Android versions and device types for successful YouTube Vanced APK installation.
                </p>

                <div className="space-y-8">
                  {/* Step 1 */}
                  <div className="relative">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        1
                      </div>
                      <div className="ml-6 flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                          Check Android Device Compatibility
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                          Before installing YouTube Vanced APK, verify your Android device meets compatibility requirements. Check Android version, available storage, and system specifications.
                        </p>
                        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">How to Check Android Version:</h4>
                          <ol className="list-decimal list-inside space-y-1 text-gray-700 dark:text-gray-300">
                            <li>Open Android Settings app</li>
                            <li>Scroll to "About Phone" or "About Device"</li>
                            <li>Find "Android Version" information</li>
                            <li>Verify compatibility with YouTube Vanced APK requirements</li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="relative">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        2
                      </div>
                      <div className="ml-6 flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                          Enable Unknown Sources on Android
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                          Android security settings require enabling "Unknown Sources" to install YouTube Vanced APK. This Android security setting allows installation of apps from sources other than Google Play Store.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Android 8.0+ Method:</h4>
                            <ol className="list-decimal list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                              <li>Open Android Settings</li>
                              <li>Go to "Apps & Notifications"</li>
                              <li>Select "Special App Access"</li>
                              <li>Choose "Install Unknown Apps"</li>
                              <li>Enable for your browser/file manager</li>
                            </ol>
                          </div>
                          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Android 7.1- Method:</h4>
                            <ol className="list-decimal list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                              <li>Open Android Settings</li>
                              <li>Go to "Security" section</li>
                              <li>Find "Unknown Sources"</li>
                              <li>Toggle switch to enable</li>
                              <li>Confirm security warning</li>
                            </ol>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="relative">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        3
                      </div>
                      <div className="ml-6 flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                          Download YouTube Vanced APK for Android
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                          Download the official YouTube Vanced APK file specifically designed for your Android device architecture and version. Always use official sources to ensure Android security and compatibility.
                        </p>
                        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                            <Shield className="h-5 w-5 text-blue-500 mr-2" />
                            Official Android Download Options:
                          </h4>
                          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                            <li>• YouTube Vanced APK (Root) - For rooted Android devices</li>
                            <li>• YouTube Vanced APK (Non-Root) - For standard Android devices</li>
                            <li>• YouTube Vanced APK (ARM64) - For 64-bit Android devices</li>
                            <li>• YouTube Vanced APK (ARM) - For 32-bit Android devices</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="relative">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        4
                      </div>
                      <div className="ml-6 flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                          Install YouTube Vanced APK on Android
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                          Complete the Android installation process by following device-specific steps. The YouTube Vanced APK Android installation varies slightly between Android versions and device manufacturers.
                        </p>
                        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Android Installation Steps:</h4>
                          <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                            <li>Locate downloaded YouTube Vanced APK file in Android file manager</li>
                            <li>Tap on YouTube Vanced APK file to begin installation</li>
                            <li>Review Android app permissions carefully</li>
                            <li>Confirm installation when prompted by Android system</li>
                            <li>Wait for Android installation completion notification</li>
                            <li>Launch YouTube Vanced from Android app drawer</li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 5 */}
                  <div className="relative">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        5
                      </div>
                      <div className="ml-6 flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                          Configure YouTube Vanced Android Settings
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                          Optimize YouTube Vanced APK settings for your specific Android device and preferences. Proper Android configuration ensures optimal performance and battery efficiency.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Essential Android Settings:</h4>
                            <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                              <li>• Background playback permissions</li>
                              <li>• Android notification settings</li>
                              <li>• Battery optimization exclusions</li>
                              <li>• Android data usage preferences</li>
                            </ul>
                          </div>
                          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Performance Optimization:</h4>
                            <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                              <li>• Android codec preferences</li>
                              <li>• Video quality settings</li>
                              <li>• Android auto-rotation settings</li>
                              <li>• Gesture navigation setup</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                {/* Quick Download */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                    <Download className="h-6 w-6 text-blue-500 mr-2" />
                    Quick Android Download
                  </h3>
                  <div className="space-y-3">
                    <button className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-red-600 hover:to-red-700 transition-colors">
                      Download for Android
                    </button>
                    <button className="w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white py-3 px-4 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                      Android Setup Guide
                    </button>
                  </div>
                </div>

                {/* Table of Contents */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Android Guide Contents
                  </h3>
                  <nav className="space-y-2">
                    <a href="#android-intro" className="block text-blue-600 dark:text-blue-400 hover:underline">Android Compatibility</a>
                    <a href="#android-requirements" className="block text-blue-600 dark:text-blue-400 hover:underline">System Requirements</a>
                    <a href="#android-installation" className="block text-blue-600 dark:text-blue-400 hover:underline">Installation Steps</a>
                    <a href="#android-troubleshooting" className="block text-blue-600 dark:text-blue-400 hover:underline">Troubleshooting</a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AndroidGuide;