import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { name: 'Download APK', href: '/download', icon: '📥' },
    { name: 'Installation Guide', href: '/installation', icon: '🔧' },
    { name: 'Features', href: '/features', icon: '⭐' },
    { name: 'FAQ', href: '/faq', icon: '❓' },
    { name: 'Contact Support', href: '/contact', icon: '💬' }
  ];

  const resources = [
    { name: 'Documentation', href: '/documentation' },
    { name: 'Blog & Updates', href: '/blog' },
    { name: 'Community', href: '/community' },
    { name: 'Troubleshooting', href: '/faq' },
    { name: 'System Requirements', href: '/documentation' }
  ];

  // SEO-focused blog article links for better internal linking
  const featuredArticles = [
    { name: 'YouTube Vanced vs Premium 2025', href: '/blog/youtube-vanced-apk-vs-youtube-premium-ultimate-comparison-2025' },
    { name: 'Complete Installation Guide', href: '/blog/youtube-vanced-apk-2025-complete-download-installation-guide' },
    { name: 'YouTube Music Vanced Guide', href: '/blog/youtube-music-vanced-apk-features-download-guide-2025' },
    { name: 'Android Compatibility Guide', href: '/blog/youtube-vanced-apk-android-installation-compatibility-guide' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
    { name: 'Disclaimer', href: '/disclaimer' },
    { name: 'Legal Notice', href: '/disclaimer' }
  ];

  const socialMedia = [
    { name: 'Telegram', icon: '📱', href: '#', color: 'bg-blue-500 hover:bg-blue-600' },
    { name: 'Discord', icon: '💬', href: '#', color: 'bg-purple-500 hover:bg-purple-600' },
    { name: 'Reddit', icon: '🟠', href: '#', color: 'bg-orange-500 hover:bg-orange-600' },
    { name: 'YouTube', icon: '📺', href: '#', color: 'bg-red-500 hover:bg-red-600' },
    { name: 'Twitter', icon: '🐦', href: '#', color: 'bg-blue-400 hover:bg-blue-500' }
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-red-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">YT</span>
              </div>
              <div>
                <span className="font-bold text-xl text-gray-900 dark:text-white">YT Vanced APK</span>
                <div className="text-xs text-gray-500 dark:text-gray-400">Premium YouTube Free</div>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
              Experience YouTube like never before with ad-free viewing, background playback, 
              Picture-in-Picture mode, and advanced customization - all completely free.
            </p>
            
            {/* Social Media */}
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Follow Us</h4>
            <div className="flex space-x-3">
              {socialMedia.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center text-white transition-colors ${social.color}`}
                  title={social.name}
                >
                  <span className="text-sm">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                  >
                    <span className="text-sm">{link.icon}</span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              {resources.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Featured Articles - SEO Internal Links */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Featured Guides</h3>
            <ul className="space-y-3">
              {featuredArticles.map((article) => (
                <li key={article.name}>
                  <Link 
                    to={article.href} 
                    className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors text-sm leading-tight"
                  >
                    {article.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Download Stats */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600 mb-1">50M+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Downloads</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">4.8★</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">User Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">100%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Virus Free</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 mb-1">24/7</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Support</div>
            </div>
          </div>
        </div>
        
        {/* Copyright & Disclaimers */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                © 2025 YT Vanced APK Website. All rights reserved.
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500">
                This website is not affiliated with Google Inc., YouTube LLC, or the original Vanced development team.
              </p>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-3">
                <p className="text-xs text-yellow-800 dark:text-yellow-300">
                  <strong>Disclaimer:</strong> YouTube Vanced APK is a modified application. Use at your own risk and discretion. 
                  May violate YouTube's Terms of Service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
