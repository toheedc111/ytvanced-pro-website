import React, { useState } from 'react';
import { FaPlay, FaDownload, FaCheckCircle, FaExclamationTriangle, FaAndroid, FaShieldAlt, FaCog, FaPlayCircle } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import RelatedContent from '../components/RelatedContent';

const InstallationGuide = () => {
  const generateInstallationGuideSchema = () => {
    return {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Install YouTube Vanced APK on Android 2025",
      "description": "Complete step-by-step video guide to install YouTube Vanced APK safely on Android devices with all premium features.",
      "image": "https://ytvanced.pro/images/installation-guide.jpg",
      "totalTime": "PT15M",
      "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": "USD",
        "value": "0"
      },
      "tool": [
        {
          "@type": "HowToTool",
          "name": "Android Device"
        },
        {
          "@type": "HowToTool",
          "name": "YouTube Vanced APK"
        },
        {
          "@type": "HowToTool",
          "name": "Vanced MicroG APK"
        }
      ],
      "step": [
        {
          "@type": "HowToStep",
          "name": "Enable Unknown Sources",
          "text": "Allow installation of apps from unknown sources in Android settings",
          "url": "https://ytvanced.pro/installation-guide#step1",
          "image": "https://ytvanced.pro/images/enable-unknown-sources.jpg"
        },
        {
          "@type": "HowToStep",
          "name": "Download Required Files",
          "text": "Download Vanced Manager or APK files directly from trusted sources",
          "url": "https://ytvanced.pro/installation-guide#step2",
          "image": "https://ytvanced.pro/images/download-files.jpg"
        },
        {
          "@type": "HowToStep",
          "name": "Install Vanced MicroG",
          "text": "Install MicroG first for Google account functionality",
          "url": "https://ytvanced.pro/installation-guide#step3",
          "image": "https://ytvanced.pro/images/install-microg.jpg"
        },
        {
          "@type": "HowToStep",
          "name": "Install YouTube Vanced",
          "text": "Install the main YouTube Vanced application",
          "url": "https://ytvanced.pro/installation-guide#step4",
          "image": "https://ytvanced.pro/images/install-vanced.jpg"
        },
        {
          "@type": "HowToStep",
          "name": "Configure Settings",
          "text": "Set up YouTube Vanced with your preferred settings",
          "url": "https://ytvanced.pro/installation-guide#step5",
          "image": "https://ytvanced.pro/images/configure-settings.jpg"
        },
        {
          "@type": "HowToStep",
          "name": "Final Setup & Testing",
          "text": "Complete setup and test all features",
          "url": "https://ytvanced.pro/installation-guide#step6",
          "image": "https://ytvanced.pro/images/final-setup.jpg"
        }
      ]
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
          "name": "Installation Guide",
          "item": "https://ytvanced.pro/installation-guide"
        }
      ]
    };
  };

  const [selectedVersion, setSelectedVersion] = useState('vanced');
  const [currentStep, setCurrentStep] = useState(0);

  const versions = {
    vanced: {
      name: 'YouTube Vanced',
      description: 'Complete YouTube replacement with all premium features',
      requirements: 'Android 4.4+ (API 19+)',
      size: '89.7 MB'
    },
    music: {
      name: 'YouTube Music Vanced',
      description: 'Ad-free music streaming with background playback',
      requirements: 'Android 5.0+ (API 21+)',
      size: '34.2 MB'
    },
    microg: {
      name: 'Vanced MicroG',
      description: 'Required for Google account sign-in functionality',
      requirements: 'Android 4.4+ (API 19+)',
      size: '2.8 MB'
    }
  };

  const installationSteps = [
    {
      title: 'Enable Unknown Sources',
      description: 'Allow installation of apps from unknown sources in Android settings',
      videoId: 'enable-unknown-sources',
      duration: '1:30',
      instructions: [
        'Open Android Settings on your device',
        'Navigate to Security & Privacy (or Security)',
        'Find "Install unknown apps" or "Unknown sources"',
        'Enable the toggle for your browser or file manager',
        'Confirm the action when prompted'
      ],
      warning: 'Only enable this temporarily for installation'
    },
    {
      title: 'Download Required Files',
      description: 'Download Vanced Manager or APK files directly',
      videoId: 'download-files',
      duration: '2:15',
      instructions: [
        'Visit our official download page',
        'Choose your preferred installation method',
        'Download Vanced Manager (recommended) or APK files',
        'Wait for download to complete',
        'Verify file integrity (optional but recommended)'
      ],
      warning: 'Always download from trusted sources only'
    },
    {
      title: 'Install Vanced MicroG',
      description: 'Install MicroG first for Google account functionality',
      videoId: 'install-microg',
      duration: '1:45',
      instructions: [
        'Locate the downloaded MicroG APK file',
        'Tap on the APK file to start installation',
        'Grant necessary permissions when prompted',
        'Wait for installation to complete',
        'Open MicroG and configure basic settings'
      ],
      warning: 'MicroG must be installed before YouTube Vanced'
    },
    {
      title: 'Install YouTube Vanced',
      description: 'Install the main YouTube Vanced application',
      videoId: 'install-vanced',
      duration: '2:30',
      instructions: [
        'Locate the downloaded YouTube Vanced APK',
        'Tap on the APK file to begin installation',
        'Review and accept permissions',
        'Wait for the installation process to finish',
        'Do not open the app yet'
      ],
      warning: 'Grant all requested permissions for full functionality'
    },
    {
      title: 'Configure Settings',
      description: 'Set up YouTube Vanced with your preferred settings',
      videoId: 'configure-settings',
      duration: '3:00',
      instructions: [
        'Open YouTube Vanced from your app drawer',
        'Sign in with your Google account (if desired)',
        'Navigate to Vanced Settings',
        'Configure ad-blocking preferences',
        'Set up background playback and PiP mode',
        'Customize theme and layout options'
      ],
      warning: 'Some features may require additional permissions'
    },
    {
      title: 'Final Setup & Testing',
      description: 'Complete setup and test all features',
      videoId: 'final-setup',
      duration: '2:00',
      instructions: [
        'Test video playback functionality',
        'Verify ad-blocking is working',
        'Test background playback feature',
        'Check Picture-in-Picture mode',
        'Ensure SponsorBlock is functioning',
        'Disable "Unknown Sources" for security'
      ],
      warning: 'Remember to disable unknown sources after installation'
    }
  ];

  const troubleshootingTips = [
    {
      issue: 'Installation Failed',
      solution: 'Ensure sufficient storage space and try clearing cache of package installer'
    },
    {
      issue: 'App Crashes on Startup',
      solution: 'Install Vanced MicroG first, then reinstall YouTube Vanced'
    },
    {
      issue: 'Cannot Sign In',
      solution: 'Make sure Vanced MicroG is installed and properly configured'
    },
    {
      issue: 'Ads Still Showing',
      solution: 'Check Vanced Settings > Ad Settings and ensure all options are enabled'
    },
    {
      issue: 'Background Play Not Working',
      solution: 'Enable background playback in Vanced Settings > Background & Downloads'
    }
  ];

  const VideoPlayer = ({ videoId, title, duration }) => (
    <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden aspect-video mb-6 group cursor-pointer hover:scale-[1.02] transition-transform duration-300">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-red-500 transition-colors">
            <FaPlay className="text-white text-2xl ml-1" />
          </div>
          <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
          <span className="text-gray-300 text-sm bg-black/50 px-3 py-1 rounded-full">
            <FaPlayCircle className="inline mr-2" />
            {duration}
          </span>
        </div>
      </div>
      <div className="absolute top-4 right-4">
        <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-medium">
          HD Video Guide
        </span>
      </div>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>YouTube Vanced Installation Guide 2025 - Step by Step Video Tutorial | YT Vanced APK</title>
        <meta name="description" content="Complete step-by-step video guide to install YouTube Vanced APK safely on Android devices with all premium features." />
        <meta name="keywords" content="youtube vanced installation, install vanced apk, android installation guide, video tutorial, step by step, microg install" />
        <meta property="og:title" content="YouTube Vanced Installation Guide 2025 - Video Tutorial" />
        <meta property="og:description" content="Complete step-by-step video guide to install YouTube Vanced APK safely on Android devices with all premium features." />
        <meta property="og:url" content="https://ytvanced.pro/installation-guide" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="YouTube Vanced Installation Guide 2025 - Video Tutorial" />
        <meta name="twitter:description" content="Complete step-by-step video guide to install YouTube Vanced APK safely on Android devices with all premium features." />
        <script type="application/ld+json">
          {JSON.stringify(generateInstallationGuideSchema())}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(generateBreadcrumbSchema())}
        </script>
      </Helmet>
    
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            YouTube Vanced Installation Guide
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Complete step-by-step video tutorials to install YouTube Vanced APK safely on your Android device. 
            Follow our comprehensive guides for a seamless installation experience.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-blue-100">
            <span className="flex items-center"><FaAndroid className="mr-2" /> Android 4.4+</span>
            <span className="flex items-center"><FaShieldAlt className="mr-2" /> 100% Safe</span>
            <span className="flex items-center"><FaCog className="mr-2" /> Easy Setup</span>
            <span className="flex items-center"><FaCheckCircle className="mr-2" /> Tested</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Version Selection */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Choose Your Installation
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(versions).map(([key, version]) => (
              <div
                key={key}
                onClick={() => setSelectedVersion(key)}
                className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                  selectedVersion === key
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                    : 'border-gray-200 dark:border-gray-600 hover:border-blue-300'
                }`}
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {version.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {version.description}
                </p>
                <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                  <div>Requirements: {version.requirements}</div>
                  <div>Size: {version.size}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Installation Steps */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Video Section */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Video Installation Guides
            </h2>
            
            {installationSteps.map((step, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  currentStep === index ? 'opacity-100' : 'opacity-60 hover:opacity-80'
                }`}
              >
                <VideoPlayer
                  videoId={step.videoId}
                  title={`Step ${index + 1}: ${step.title}`}
                  duration={step.duration}
                />
                
                {currentStep === index && (
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                    <div className="flex items-start mb-4">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          {step.description}
                        </p>
                      </div>
                    </div>
                    
                    {step.warning && (
                      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 mb-4">
                        <div className="flex items-center">
                          <FaExclamationTriangle className="text-yellow-600 mr-2" />
                          <span className="text-yellow-800 dark:text-yellow-300 font-medium">
                            {step.warning}
                          </span>
                        </div>
                      </div>
                    )}
                    
                    <ol className="space-y-3">
                      {step.instructions.map((instruction, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-6 h-6 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">
                            {idx + 1}
                          </span>
                          <span className="text-gray-700 dark:text-gray-300">
                            {instruction}
                          </span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Step Navigation & Info */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 sticky top-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Installation Progress
              </h3>
              
              <div className="space-y-4">
                {installationSteps.map((step, index) => (
                  <div
                    key={index}
                    onClick={() => setCurrentStep(index)}
                    className={`p-4 rounded-lg border cursor-pointer transition-all duration-300 ${
                      currentStep === index
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                        : 'border-gray-200 dark:border-gray-600 hover:border-blue-300'
                    }`}
                  >
                    <div className="flex items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 ${
                        currentStep === index
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300'
                      }`}>
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {step.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {step.duration}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-600">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                  Quick Download Links
                </h4>
                <div className="space-y-3">
                  <a
                    href="/download"
                    className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                  >
                    <span className="text-blue-600 dark:text-blue-300 font-medium">
                      YouTube Vanced APK
                    </span>
                    <FaDownload className="text-blue-600 dark:text-blue-300" />
                  </a>
                  <a
                    href="/download"
                    className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors"
                  >
                    <span className="text-green-600 dark:text-green-300 font-medium">
                      Vanced MicroG
                    </span>
                    <FaDownload className="text-green-600 dark:text-green-300" />
                  </a>
                </div>
              </div>
            </div>

            {/* Troubleshooting */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Troubleshooting Guide
              </h3>
              <div className="space-y-4">
                {troubleshootingTips.map((tip, index) => (
                  <details key={index} className="group">
                    <summary className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                      <span className="font-medium text-gray-900 dark:text-white">
                        {tip.issue}
                      </span>
                      <span className="text-gray-500 group-open:rotate-180 transition-transform">
                        ▼
                      </span>
                    </summary>
                    <div className="p-4 text-gray-700 dark:text-gray-300 bg-gray-25 dark:bg-gray-750 rounded-b-lg">
                      {tip.solution}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Safety Notice */}
        <div className="mt-16 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl p-8 border border-orange-200 dark:border-orange-800">
          <div className="flex items-start">
            <FaShieldAlt className="text-orange-600 dark:text-orange-400 text-2xl mr-4 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-orange-900 dark:text-orange-100 mb-2">
                Important Safety Information
              </h3>
              <ul className="space-y-2 text-orange-800 dark:text-orange-200">
                <li>• Always download YouTube Vanced APK from official or trusted sources only</li>
                <li>• Scan all APK files with antivirus software before installation</li>
                <li>• Only enable "Unknown Sources" temporarily during installation</li>
                <li>• Keep your Android device updated with latest security patches</li>
                <li>• YouTube Vanced is a community-maintained project, not affiliated with Google</li>
              </ul>
            </div>
          </div>
        </div>

        {/* SEO Content */}
        <div className="mt-16 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Complete YouTube Vanced APK Installation Tutorial 2025
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
            <p>
              This comprehensive guide covers everything you need to know about installing YouTube Vanced APK 
              on Android devices. Our step-by-step video tutorials make the installation process simple and safe, 
              even for beginners.
            </p>
            <p>
              YouTube Vanced APK offers premium features like ad-blocking, background playback, Picture-in-Picture 
              mode, and SponsorBlock integration without requiring a YouTube Premium subscription. Follow our 
              detailed installation instructions to enjoy these features on your Android device.
            </p>
            <p>
              Our installation guide is regularly updated for 2025 and covers all Android versions from 4.4 to 
              the latest Android 14. Whether you're installing on Samsung, OnePlus, Xiaomi, or any other Android 
              device, these tutorials will work for you.
            </p>
          </div>
        </div>
      </div>
    </div>
    
    {/* Related Content Section - SEO Internal Links */}
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RelatedContent currentPage="installation" title="Additional Installation Resources" />
      </div>
    </section>
    </>
  );
};

export default InstallationGuide;