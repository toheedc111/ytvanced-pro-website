import React from 'react';
import { Helmet } from 'react-helmet-async';

const Community = () => {
  const generateCommunityPageSchema = () => {
    return {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "YouTube Vanced Community - Join Users Worldwide",
      "description": "Join the YouTube Vanced community with 500,000+ users worldwide. Share tips, get installation help, and connect with fellow Vanced users.",
      "url": "https://ytvanced.pro/community",
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
            "name": "Community",
            "item": "https://ytvanced.pro/community"
          }
        ]
      },
      "mainEntity": {
        "@type": "Organization",
        "name": "YouTube Vanced Community",
        "description": "Global community of YouTube Vanced users sharing knowledge and providing support",
        "memberOf": {
          "@type": "Organization",
          "name": "YouTube Vanced Project"
        },
        "member": {
          "@type": "QuantitativeValue",
          "value": 500000,
          "unitText": "users"
        }
      }
    };
  };

  const stats = [
    { label: "Active Users", value: "500,000+", icon: "👥" },
    { label: "Successful Installs", value: "10M+", icon: "📱" },
    { label: "Countries", value: "150+", icon: "🌍" },
    { label: "Support Channels", value: "25+", icon: "💬" }
  ];

  const discussions = [
    {
      title: "Installation guide for Android 14 - Step by step",
      author: "Vanced Helper",
      replies: 42,
      likes: 89,
      time: "1 hour ago",
      category: "Installation"
    },
    {
      title: "Best themes and settings for AMOLED displays",
      author: "Theme Master",
      replies: 28,
      likes: 56,
      time: "3 hours ago",
      category: "Customization"
    },
    {
      title: "SponsorBlock not working - troubleshooting solutions",
      author: "Tech Support",
      replies: 35,
      likes: 67,
      time: "5 hours ago",
      category: "Troubleshooting"
    }
  ];

  const events = [
    {
      title: "YouTube Vanced Installation Workshop: Beginner to Pro",
      date: "2025-04-15",
      time: "2:00 PM UTC",
      type: "Online Workshop",
      attendees: 150
    },
    {
      title: "Community Meetup: Android Customization Tips",
      date: "2025-04-20",
      time: "6:00 PM PST",
      type: "In-Person",
      attendees: 50
    },
    {
      title: "Community Event: YouTube Vanced Tips & Tricks",
      date: "2025-05-01",
      time: "9:00 AM UTC",
      type: "Virtual Event",
      attendees: 300
    }
  ];

  return (
    <>
      <Helmet>
        <title>YouTube Vanced Community - Join 500k+ Users Worldwide | YT Vanced APK</title>
        <meta name="description" content="Join the YouTube Vanced community with 500,000+ users worldwide. Share tips, get installation help, and connect with fellow Vanced users." />
        <meta name="keywords" content="youtube vanced community, vanced users, discord, telegram, support, help, installation tips" />
        <meta property="og:title" content="YouTube Vanced Community - Join Users Worldwide" />
        <meta property="og:description" content="Join the YouTube Vanced community with 500,000+ users worldwide. Share tips, get installation help, and connect with fellow Vanced users." />
        <meta property="og:url" content="https://ytvanced.pro/community" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="YouTube Vanced Community - Join Users Worldwide" />
        <meta name="twitter:description" content="Join the YouTube Vanced community with 500,000+ users worldwide. Share tips, get installation help, and connect with fellow Vanced users." />
        <script type="application/ld+json">
          {JSON.stringify(generateCommunityPageSchema())}
        </script>
      </Helmet>
    
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Join Our YouTube Vanced Community
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Connect with YouTube Vanced users worldwide, share installation tips, and get help with troubleshooting
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Discussion Forums */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Recent Discussions</h2>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                  Start Discussion
                </button>
              </div>
              
              <div className="space-y-4">
                {discussions.map((discussion, index) => (
                  <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-b-0">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          {discussion.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-300">
                          <span>by {discussion.author}</span>
                          <span>•</span>
                          <span>{discussion.time}</span>
                          <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                            {discussion.category}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center space-x-1">
                          <span>💬</span>
                          <span>{discussion.replies}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <span>❤️</span>
                          <span>{discussion.likes}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Community Guidelines */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Community Guidelines</h2>
              <div className="space-y-3 text-gray-600 dark:text-gray-300">
                <div className="flex items-start space-x-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <p>Be respectful and constructive in all interactions</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <p>Share knowledge and help others learn</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <p>Provide detailed context when asking for help</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-500 mt-1">✓</span>
                  <p>Give credit where credit is due</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Links */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Quick Links</h3>
              <div className="space-y-3">
                <a href="#" className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  <span>💬</span>
                  <span>Discord Server</span>
                </a>
                <a href="#" className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  <span>📱</span>
                  <span>Telegram Group</span>
                </a>
                <a href="#" className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  <span>🐦</span>
                  <span>Twitter</span>
                </a>
                <a href="#" className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  <span>📺</span>
                  <span>YouTube Channel</span>
                </a>
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Upcoming Events</h3>
              <div className="space-y-4">
                {events.map((event, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{event.title}</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">
                      {new Date(event.date).toLocaleDateString()} at {event.time}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">{event.type}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">{event.attendees} attending</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contributors */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Top Contributors</h3>
              <div className="space-y-3">
                {['Sarah Chen', 'Mike Rodriguez', 'Emily Wang', 'David Kim', 'Alex Johnson'].map((name, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 text-sm">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Join?</h2>
          <p className="text-xl mb-6 opacity-90">
            Become part of a thriving community of YouTube Vanced users enjoying ad-free premium features.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Join Telegram
            </button>
            <button className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Join Discord
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Community;
