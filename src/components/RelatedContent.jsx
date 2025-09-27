import React from 'react';
import { Link } from 'react-router-dom';

const RelatedContent = ({ currentPage, title = "Related Content", className = "" }) => {
  // Define comprehensive content relationships based on SEO pillar-cluster strategy
  const contentMap = {
    home: {
      title: "Explore More About YouTube Vanced",
      items: [
        {
          title: "Download YouTube Vanced APK",
          url: "/download",
          description: "Get the latest YouTube Vanced APK files safely",
          type: "Primary",
          icon: "📥"
        },
        {
          title: "Installation Guide",
          url: "/installation-guide",
          description: "Step-by-step installation tutorial",
          type: "Guide",
          icon: "🔧"
        },
        {
          title: "Features Overview",
          url: "/features",
          description: "Discover all premium features",
          type: "Info",
          icon: "⭐"
        },
        {
          title: "FAQ & Support",
          url: "/faq",
          description: "Common questions and troubleshooting",
          type: "Support",
          icon: "❓"
        }
      ]
    },
    download: {
      title: "Complete Your YouTube Vanced Setup",
      items: [
        {
          title: "Installation Guide",
          url: "/installation-guide",
          description: "Follow our detailed installation tutorial",
          type: "Essential",
          icon: "🔧"
        },
        {
          title: "Android Compatibility Guide",
          url: "/android-guide",
          description: "Android-specific installation instructions",
          type: "Guide",
          icon: "🤖"
        },
        {
          title: "Troubleshooting Guide",
          url: "/faq",
          description: "Fix common installation issues",
          type: "Support",
          icon: "🛠️"
        },
        {
          title: "Safety Guidelines",
          url: "/article-two",
          description: "Download safely from verified sources",
          type: "Security",
          icon: "🔒"
        }
      ]
    },
    features: {
      title: "Learn More About YouTube Vanced",
      items: [
        {
          title: "Download Latest Version",
          url: "/download",
          description: "Get YouTube Vanced with all these features",
          type: "Action",
          icon: "📥"
        },
        {
          title: "How to Install",
          url: "/installation-guide",
          description: "Setup guide for all features",
          type: "Guide",
          icon: "🔧"
        },
        {
          title: "YouTube Music Vanced",
          url: "/youtube-music-guide",
          description: "Premium music features for free",
          type: "Related",
          icon: "🎵"
        },
        {
          title: "Vanced vs Premium",
          url: "/article-three",
          description: "Feature comparison and benefits",
          type: "Compare",
          icon: "⚖️"
        }
      ]
    },
    "installation-guide": {
      title: "Essential Installation Resources",
      items: [
        {
          title: "Download APK Files",
          url: "/download",
          description: "Get the required files for installation",
          type: "Required",
          icon: "📥"
        },
        {
          title: "Android Setup Guide",
          url: "/android-guide", 
          description: "Device-specific installation tips",
          type: "Guide",
          icon: "📱"
        },
        {
          title: "Installation Troubleshooting",
          url: "/faq",
          description: "Solve common installation problems",
          type: "Support",
          icon: "🔧"
        },
        {
          title: "Safety Best Practices",
          url: "/article-two",
          description: "Install securely and safely",
          type: "Security",
          icon: "🛡️"
        }
      ]
    },
    documentation: {
      title: "Comprehensive YouTube Vanced Guides",
      items: [
        {
          title: "Quick Start Installation",
          url: "/installation-guide",
          description: "Get started with video tutorials",
          type: "Tutorial",
          icon: "🚀"
        },
        {
          title: "Feature Documentation",
          url: "/features",
          description: "Complete features overview",
          type: "Reference",
          icon: "📋"
        },
        {
          title: "Advanced Settings Guide",
          url: "/article-one",
          description: "Customize YouTube Vanced settings",
          type: "Advanced",
          icon: "⚙️"
        },
        {
          title: "Community Support",
          url: "/community",
          description: "Get help from other users",
          type: "Community",
          icon: "👥"
        }
      ]
    },
    blog: {
      title: "Popular YouTube Vanced Articles",
      items: [
        {
          title: "Complete Installation Guide 2025",
          url: "/article-one",
          description: "Step-by-step installation tutorial",
          type: "Featured",
          icon: "🔧"
        },
        {
          title: "Safe Download Sources",
          url: "/article-two",
          description: "How to download safely and securely",
          type: "Security",
          icon: "🔒"
        },
        {
          title: "Vanced vs YouTube Premium",
          url: "/article-three",
          description: "Feature comparison and value analysis",
          type: "Comparison",
          icon: "⚖️"
        },
        {
          title: "Android Compatibility Guide",
          url: "/android-guide",
          description: "Installation for Android devices",
          type: "Guide",
          icon: "🤖"
        }
      ]
    },
    faq: {
      title: "Additional Help & Resources",
      items: [
        {
          title: "Installation Guide",
          url: "/installation-guide",
          description: "Visual step-by-step tutorials",
          type: "Tutorial",
          icon: "📺"
        },
        {
          title: "Download Center",
          url: "/download",
          description: "Get the latest APK files",
          type: "Download",
          icon: "📥"
        },
        {
          title: "Community Support",
          url: "/community",
          description: "Ask questions and get help",
          type: "Community",
          icon: "💬"
        },
        {
          title: "Contact Support",
          url: "/contact",
          description: "Direct technical assistance",
          type: "Support",
          icon: "📞"
        }
      ]
    },
    contact: {
      title: "Self-Help Resources",
      items: [
        {
          title: "Frequently Asked Questions",
          url: "/faq",
          description: "Quick answers to common questions",
          type: "Self-Help",
          icon: "❓"
        },
        {
          title: "Installation Troubleshooting",
          url: "/installation-guide",
          description: "Fix installation issues yourself",
          type: "Tutorial",
          icon: "🔧"
        },
        {
          title: "Community Forums",
          url: "/community",
          description: "Get help from experienced users",
          type: "Community",
          icon: "👥"
        },
        {
          title: "Documentation Library",
          url: "/documentation",
          description: "Complete guides and references",
          type: "Reference",
          icon: "📖"
        }
      ]
    },
    community: {
      title: "Getting Started Resources",
      items: [
        {
          title: "Download YouTube Vanced",
          url: "/download",
          description: "Get started with the latest version",
          type: "Start",
          icon: "📥"
        },
        {
          title: "Installation Tutorial",
          url: "/installation-guide",
          description: "Learn how to install step-by-step",
          type: "Learn",
          icon: "🎓"
        },
        {
          title: "FAQ & Support",
          url: "/faq",
          description: "Find answers to common questions",
          type: "Help",
          icon: "❓"
        },
        {
          title: "Latest Blog Posts",
          url: "/blog",
          description: "Stay updated with news and tips",
          type: "News",
          icon: "📰"
        }
      ]
    },
    // Article-specific related content
    "article-one": {
      title: "Related Installation Resources",
      items: [
        {
          title: "Download APK Files",
          url: "/download",
          description: "Get the files needed for installation",
          type: "Download",
          icon: "📥"
        },
        {
          title: "Video Installation Guide",
          url: "/installation-guide",
          description: "Visual step-by-step tutorials",
          type: "Tutorial",
          icon: "📺"
        },
        {
          title: "Android Setup Guide",
          url: "/android-guide",
          description: "Android-specific instructions",
          type: "Guide",
          icon: "🤖"
        },
        {
          title: "Installation Troubleshooting",
          url: "/faq",
          description: "Fix common installation issues",
          type: "Support",
          icon: "🛠️"
        }
      ]
    },
    "article-two": {
      title: "Security & Safety Resources",
      items: [
        {
          title: "Official Download Page",
          url: "/download",
          description: "Safe, verified APK downloads",
          type: "Secure",
          icon: "🔒"
        },
        {
          title: "Installation Best Practices",
          url: "/installation-guide",
          description: "Install safely and securely",
          type: "Guide",
          icon: "🛡️"
        },
        {
          title: "FAQ & Troubleshooting",
          url: "/faq",
          description: "Common security questions",
          type: "Support",
          icon: "❓"
        },
        {
          title: "Community Guidelines",
          url: "/community",
          description: "Safe community practices",
          type: "Community",
          icon: "👥"
        }
      ]
    },
    "article-three": {
      title: "Compare & Decide",
      items: [
        {
          title: "Download YouTube Vanced",
          url: "/download",
          description: "Experience the free alternative",
          type: "Action",
          icon: "📥"
        },
        {
          title: "Features Comparison",
          url: "/features",
          description: "See all available features",
          type: "Compare",
          icon: "⚖️"
        },
        {
          title: "Installation Guide",
          url: "/installation-guide",
          description: "Get started in minutes",
          type: "Setup",
          icon: "🚀"
        },
        {
          title: "User Reviews & FAQ",
          url: "/faq",
          description: "What users are saying",
          type: "Social Proof",
          icon: "💭"
        }
      ]
    },
    "android-guide": {
      title: "Android Installation Resources",
      items: [
        {
          title: "Download for Android",
          url: "/download",
          description: "Get Android-compatible APK files",
          type: "Download",
          icon: "📥"
        },
        {
          title: "Video Installation Guide",
          url: "/installation-guide",
          description: "Watch step-by-step installation",
          type: "Tutorial",
          icon: "📺"
        },
        {
          title: "Android Troubleshooting",
          url: "/faq",
          description: "Fix Android-specific issues",
          type: "Support",
          icon: "🔧"
        },
        {
          title: "General Installation Guide",
          url: "/article-one",
          description: "Complete installation tutorial",
          type: "Guide",
          icon: "📖"
        }
      ]
    },
    "youtube-music-guide": {
      title: "Music Streaming Resources",
      items: [
        {
          title: "Download Music Vanced",
          url: "/download",
          description: "Get YouTube Music Vanced APK",
          type: "Download",
          icon: "🎵"
        },
        {
          title: "Music Installation Guide",
          url: "/installation-guide",
          description: "Install YouTube Music Vanced",
          type: "Setup",
          icon: "🔧"
        },
        {
          title: "All Vanced Features",
          url: "/features",
          description: "Compare video and music features",
          type: "Features",
          icon: "⭐"
        },
        {
          title: "Music FAQ & Support",
          url: "/faq",
          description: "Music-specific questions",
          type: "Support",
          icon: "❓"
        }
      ]
    }
  };

  const content = contentMap[currentPage];
  
  if (!content) {
    return null;
  }

  const getTypeStyles = (type) => {
    const styles = {
      Primary: "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300",
      Essential: "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-300",
      Required: "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-300",
      Featured: "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300",
      Action: "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300",
      Download: "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300",
      Secure: "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300",
      Tutorial: "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300",
      Guide: "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300",
      Support: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300",
      Security: "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300",
      Community: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/20 dark:text-indigo-300",
      Info: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
      default: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
    };
    return styles[type] || styles.default;
  };

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 ${className}`}>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
        <span className="text-2xl mr-2">🔗</span>
        {title || content.title}
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {content.items.map((item, index) => (
          <Link
            key={index}
            to={item.url}
            className="group p-4 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-200 hover:shadow-md bg-gray-50 dark:bg-gray-700/50 hover:bg-white dark:hover:bg-gray-700"
          >
            <div className="flex items-start space-x-3">
              <span className="text-2xl flex-shrink-0 mt-1">{item.icon}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h4>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${getTypeStyles(item.type)}`}>
                    {item.type}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200">
                  {item.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedContent;