import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', icon: '🏠' },
    { name: 'Download', href: '/download', icon: '📥', featured: true },
    { name: 'Features', href: '/features', icon: '⭐' },
    { name: 'Installation Guide', href: '/installation', icon: '🔧' },
    { name: 'Documentation', href: '/documentation', icon: '📖' },
    { name: 'Blog', href: '/blog', icon: '📝' },
    { name: 'FAQ', href: '/faq', icon: '❓' },
    { name: 'Contact', href: '/contact', icon: '💬' },
  ];

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-red-700 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">YT</span>
            </div>
            <div>
              <span className="font-bold text-xl text-gray-900 dark:text-white">YT Vanced</span>
              <div className="text-xs text-gray-500 dark:text-gray-400">Premium Free</div>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg font-medium transition-colors ${
                  location.pathname === item.href
                    ? 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300'
                    : item.featured
                    ? 'bg-red-600 hover:bg-red-700 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                <span className="text-sm">{item.icon}</span>
                <span>{item.name}</span>
                {item.featured && (
                  <span className="bg-yellow-400 text-yellow-900 text-xs px-2 py-1 rounded-full font-bold animate-pulse">
                    FREE
                  </span>
                )}
              </Link>
            ))}
          </nav>
          
          {/* Mobile menu button and theme toggle */}
          <div className="flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {isDark ? '☀️' : '🌙'}
            </button>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <span className="sr-only">Open menu</span>
              {isMenuOpen ? '❌' : '☰'}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 dark:border-gray-700 py-4">
            <nav className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300'
                      : item.featured
                      ? 'bg-red-600 hover:bg-red-700 text-white'
                      : 'text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  <span>{item.icon}</span>
                  <span>{item.name}</span>
                  {item.featured && (
                    <span className="bg-yellow-400 text-yellow-900 text-xs px-2 py-1 rounded-full font-bold">
                      FREE
                    </span>
                  )}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
