import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import RelatedContent from '../components/RelatedContent';

const Blog = () => {
  const generateBlogPageSchema = () => {
    return {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "YouTube Vanced APK Blog - Installation Guides & Tips",
      "description": "Latest YouTube Vanced APK articles, installation guides, troubleshooting tips, and feature updates. Stay updated with the YouTube Vanced community.",
      "url": "https://ytvanced.pro/blog",
      "publisher": {
        "@type": "Organization",
        "name": "YouTube Vanced APK Website",
        "url": "https://ytvanced.pro"
      },
      "inLanguage": "en-US",
      "blogPost": [
        {
          "@type": "BlogPosting",
          "headline": "YouTube Vanced APK 2025: Complete Download & Installation Guide",
          "url": "https://ytvanced.pro/blog/youtube-vanced-apk-2025-complete-download-installation-guide",
          "datePublished": "2025-09-25",
          "dateModified": "2025-09-25",
          "author": {
            "@type": "Organization",
            "name": "YouTube Vanced Team"
          }
        },
        {
          "@type": "BlogPosting",
          "headline": "YouTube Vanced vs YouTube Premium: Ultimate Comparison 2025",
          "url": "https://ytvanced.pro/blog/youtube-vanced-apk-vs-youtube-premium-ultimate-comparison-2025",
          "datePublished": "2025-09-15",
          "dateModified": "2025-09-15",
          "author": {
            "@type": "Organization",
            "name": "Analysis Team"
          }
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
          "name": "Blog",
          "item": "https://ytvanced.pro/blog"
        }
      ]
    };
  };

  const [searchParams, setSearchParams] = useSearchParams();
  const currentCategory = searchParams.get('category') || 'All';

  // Enhanced blog categories with SEO metadata
  const categories = {
    'All': {
      name: 'All Articles',
      description: 'Browse all YouTube Vanced APK articles and guides',
      icon: '📚',
      count: 0
    },
    'Installation': {
      name: 'Installation Guides',
      description: 'Step-by-step YouTube Vanced APK installation tutorials',
      icon: '🔧',
      count: 0
    },
    'Features': {
      name: 'Features & Tips',
      description: 'Discover YouTube Vanced APK features and advanced tips',
      icon: '✨',
      count: 0
    },
    'Comparison': {
      name: 'Comparisons',
      description: 'YouTube Vanced vs alternatives and feature comparisons',
      icon: '⚖️',
      count: 0
    },
    'Troubleshooting': {
      name: 'Troubleshooting',
      description: 'Fix YouTube Vanced APK issues and common problems',
      icon: '🛠️',
      count: 0
    },
    'Security': {
      name: 'Security & Safety',
      description: 'YouTube Vanced APK security tips and safe download guides',
      icon: '🔒',
      count: 0
    },
    'Updates': {
      name: 'News & Updates',
      description: 'Latest YouTube Vanced APK updates and announcements',
      icon: '📰',
      count: 0
    },
    'Advanced': {
      name: 'Advanced Usage',
      description: 'Advanced YouTube Vanced APK customization and settings',
      icon: '⚙️',
      count: 0
    }
  };

  const posts = [
    {
      id: 1,
      title: "YouTube Vanced APK 2025: Complete Download & Installation Guide",
      slug: "youtube-vanced-apk-2025-complete-download-installation-guide",
      excerpt: "Complete guide to downloading and installing YouTube Vanced APK 2025. Get premium features free: ad-blocking, background play, PiP mode with step-by-step instructions.",
      content: "Full article content here...",
      author: "YouTube Vanced Team",
      authorImage: "🎬",
      date: "2025-09-25",
      readTime: "15 min read",
      category: "Installation",
      tags: ["youtube vanced apk", "installation", "android", "2025"],
      image: "🔧",
      featured: true,
      views: "25.3K",
      seoTitle: "YouTube Vanced APK 2025: Complete Download & Installation Guide",
      seoDescription: "Download YouTube Vanced APK 2025 with our complete installation guide. Get premium features free: ad-blocking, background playback, Picture-in-Picture mode."
    },
    {
      id: 2,
      title: "YouTube Vanced APK Download: Official Sources & Safety Guide",
      slug: "youtube-vanced-apk-download-official-sources-safety-guide",
      excerpt: "Safe YouTube Vanced APK download guide 2025. Official sources, security tips, malware protection. Download YouTube Vanced safely with verified links.",
      content: "Full article content here...",
      author: "Security Team",
      authorImage: "🛡️",
      date: "2025-09-20",
      readTime: "12 min read",
      category: "Security",
      tags: ["youtube vanced download", "safety", "security", "official sources"],
      image: "🔒",
      featured: false,
      views: "18.7K",
      seoTitle: "YouTube Vanced APK Download: Official Sources & Safety Guide 2025",
      seoDescription: "Download YouTube Vanced APK safely from official sources. Complete security guide with verified links and malware protection tips."
    },
    {
      id: 3,
      title: "YouTube Vanced vs YouTube Premium: Ultimate Comparison 2025",
      slug: "youtube-vanced-apk-vs-youtube-premium-ultimate-comparison-2025",
      excerpt: "Complete comparison: YouTube Vanced APK vs YouTube Premium 2025. Features, pricing, pros/cons. Discover why millions choose free YouTube Vanced over Premium.",
      content: "Full article content here...",
      author: "Analysis Team",
      authorImage: "📊",
      date: "2025-09-15",
      readTime: "18 min read",
      category: "Comparison",
      tags: ["youtube vanced vs premium", "comparison", "features", "pricing"],
      image: "⚖️",
      featured: true,
      views: "32.1K",
      seoTitle: "YouTube Vanced APK vs YouTube Premium: Ultimate Comparison 2025",
      seoDescription: "Detailed comparison between YouTube Vanced APK and YouTube Premium. Features, costs, benefits analyzed. Make the right choice for your viewing experience."
    },
    {
      id: 4,
      title: "YouTube Vanced APK for Android: Installation & Compatibility Guide",
      slug: "youtube-vanced-apk-android-installation-compatibility-guide",
      excerpt: "Master YouTube Vanced APK installation on Android devices. Comprehensive compatibility guide for all Android versions with step-by-step instructions.",
      content: "Full article content here...",
      author: "Android Team",
      authorImage: "🤖",
      date: "2025-09-10",
      readTime: "20 min read",
      category: "Installation",
      tags: ["youtube vanced android", "compatibility", "android guide"],
      image: "📱",
      featured: false,
      views: "15.8K",
      seoTitle: "YouTube Vanced APK for Android: Installation & Compatibility Guide 2025",
      seoDescription: "Complete YouTube Vanced APK Android guide. Download, install & optimize YouTube Vanced for all Android devices. Step-by-step compatibility instructions."
    },
    {
      id: 5,
      title: "YouTube Music Vanced APK: Features & Download Guide 2025",
      slug: "youtube-music-vanced-apk-features-download-guide-2025",
      excerpt: "Experience YouTube Music Vanced APK 2025 with premium features at no cost. Ad-free music streaming, background playback, offline downloads.",
      content: "Full article content here...",
      author: "Music Team",
      authorImage: "🎵",
      date: "2025-09-05",
      readTime: "14 min read",
      category: "Features",
      tags: ["youtube music vanced", "music streaming", "premium features"],
      image: "🎵",
      featured: false,
      views: "12.4K",
      seoTitle: "YouTube Music Vanced APK: Features & Download Guide 2025",
      seoDescription: "Get YouTube Music Vanced APK 2025. Premium music features free: ad-free streaming, background playback, offline downloads. Complete setup guide."
    },
    {
      id: 6,
      title: "Fix YouTube Vanced APK Not Working: Complete Troubleshooting Guide",
      slug: "fix-youtube-vanced-apk-not-working-troubleshooting-guide",
      excerpt: "Solve YouTube Vanced APK issues with our comprehensive troubleshooting guide. Fix crashes, installation failures, login problems, and more.",
      content: "Full article content here...",
      author: "Support Team",
      authorImage: "🔧",
      date: "2025-08-30",
      readTime: "16 min read",
      category: "Troubleshooting",
      tags: ["youtube vanced issues", "troubleshooting", "fix problems"],
      image: "🛠️",
      featured: false,
      views: "8.9K",
      seoTitle: "Fix YouTube Vanced APK Not Working: Complete Troubleshooting Guide 2025",
      seoDescription: "Solve YouTube Vanced APK issues with our troubleshooting guide. Fix crashes, installation failures, login problems with step-by-step solutions."
    },
    {
      id: 7,
      title: "Advanced YouTube Vanced APK Settings & Customization Guide",
      slug: "advanced-youtube-vanced-apk-settings-customization-guide",
      excerpt: "Master YouTube Vanced APK's advanced settings, custom themes, playback controls, and hidden features for the ultimate viewing experience.",
      content: "Full article content here...",
      author: "Advanced Team",
      authorImage: "⚙️",
      date: "2025-08-25",
      readTime: "22 min read",
      category: "Advanced",
      tags: ["youtube vanced settings", "customization", "advanced features"],
      image: "⚙️",
      featured: false,
      views: "11.2K",
      seoTitle: "Advanced YouTube Vanced APK Settings & Customization Guide 2025",
      seoDescription: "Master YouTube Vanced APK's advanced settings, themes, and customization options. Unlock hidden features for the ultimate YouTube experience."
    },
    {
      id: 8,
      title: "YouTube Vanced APK Latest Updates & New Features 2025",
      slug: "youtube-vanced-apk-latest-updates-new-features-2025",
      excerpt: "Discover the latest YouTube Vanced APK updates and new features for 2025. Enhanced ad-blocking, improved performance, and exciting additions.",
      content: "Full article content here...",
      author: "News Team",
      authorImage: "📰",
      date: "2025-08-20",
      readTime: "10 min read",
      category: "Updates",
      tags: ["youtube vanced updates", "new features", "changelog"],
      image: "📰",
      featured: false,
      views: "9.7K",
      seoTitle: "YouTube Vanced APK Latest Updates & New Features 2025",
      seoDescription: "Stay updated with the latest YouTube Vanced APK features and improvements. Discover what's new in 2025 with enhanced functionality."
    }
  ];

  // Calculate category counts
  Object.keys(categories).forEach(categoryKey => {
    if (categoryKey === 'All') {
      categories[categoryKey].count = posts.length;
    } else {
      categories[categoryKey].count = posts.filter(post => post.category === categoryKey).length;
    }
  });

  const filteredPosts = currentCategory === 'All' 
    ? posts 
    : posts.filter(post => post.category === currentCategory);

  const featuredPost = posts.find(post => post.featured) || posts[0];
  const regularPosts = posts.filter(post => !post.featured);

  const handleCategoryChange = (category) => {
    if (category === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  const currentCategoryData = categories[currentCategory] || categories['All'];

  const generateStructuredData = () => {
    return {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "YouTube Vanced APK Blog",
      "description": "Latest guides, tips, and updates for YouTube Vanced APK users",
      "url": "https://ytvanced.pro/blog",
      "author": {
        "@type": "Organization",
        "name": "YouTube Vanced Team"
      },
      "blogPost": posts.map(post => ({
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt,
        "author": {
          "@type": "Person",
          "name": post.author
        },
        "datePublished": post.date,
        "url": `https://ytvanced.pro/blog/${post.slug}`,
        "articleSection": post.category,
        "keywords": post.tags?.join(', ')
      }))
    };
  };

  return (
    <>
      <Helmet>
        <title>{currentCategory === 'All' ? 'YouTube Vanced APK Blog - Latest Guides & Tutorials 2025' : `${currentCategoryData.name} - YouTube Vanced APK Blog`}</title>
        <meta name="description" content={currentCategory === 'All' ? 'Latest YouTube Vanced APK guides, installation tutorials, features, and tips. Expert articles for ad-free YouTube experience.' : currentCategoryData.description} />
        <meta name="keywords" content="youtube vanced blog, youtube vanced guides, youtube vanced tutorials, youtube vanced apk articles, youtube vanced tips, installation guides, troubleshooting, features, android" />
        <link rel="canonical" href={`https://ytvanced.pro/blog${currentCategory !== 'All' ? `?category=${currentCategory}` : ''}`} />
        <meta property="og:title" content={currentCategory === 'All' ? 'YouTube Vanced APK Blog - Latest Guides & Tutorials' : `${currentCategoryData.name} - YouTube Vanced Blog`} />
        <meta property="og:description" content={currentCategory === 'All' ? 'Latest YouTube Vanced APK guides and tutorials for the ultimate ad-free YouTube experience.' : currentCategoryData.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://ytvanced.pro/blog${currentCategory !== 'All' ? `?category=${currentCategory}` : ''}`} />
        
        <script type="application/ld+json">
          {JSON.stringify(generateStructuredData())}
        </script>
        
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
                "name": "Blog",
                "item": "https://ytvanced.pro/blog"
              },
              ...(currentCategory !== 'All' ? [{
                "@type": "ListItem",
                "position": 3,
                "name": currentCategoryData.name,
                "item": `https://ytvanced.pro/blog?category=${currentCategory}`
              }] : [])
            ]
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
            <Link to="/" className="hover:text-red-600 dark:hover:text-red-400">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-red-600 dark:hover:text-red-400">Blog</Link>
            {currentCategory !== 'All' && (
              <>
                <span>/</span>
                <span className="text-gray-900 dark:text-white font-medium">{currentCategoryData.name}</span>
              </>
            )}
          </nav>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {currentCategory === 'All' ? 'YouTube Vanced APK Blog' : `${currentCategoryData.name}`}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {currentCategory === 'All' ? 'Latest guides, tips, and updates for YouTube Vanced APK users' : currentCategoryData.description}
            </p>
            {currentCategory !== 'All' && (
              <div className="mt-4">
                <span className="inline-flex items-center bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                  {currentCategoryData.icon} {currentCategoryData.count} articles
                </span>
              </div>
            )}
          </div>

          {/* Enhanced Category Filter */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Browse by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {Object.entries(categories).map(([categoryKey, categoryData]) => (
                <button
                  key={categoryKey}
                  onClick={() => handleCategoryChange(categoryKey)}
                  className={`p-4 rounded-xl text-center transition-all duration-200 transform hover:scale-105 ${
                    currentCategory === categoryKey
                      ? 'bg-gradient-to-r from-red-500 to-purple-600 text-white shadow-lg'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
                  }`}
                >
                  <div className="text-2xl mb-2">{categoryData.icon}</div>
                  <div className="font-medium text-sm mb-1">{categoryData.name}</div>
                  <div className="text-xs opacity-75">{categoryData.count} articles</div>
                </button>
              ))}
            </div>
          </div>

          {/* Featured Post */}
          {currentCategory === 'All' && featuredPost && (
            <div className="mb-16">
              <div className="bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative max-w-4xl">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                      🔥 Featured Article
                    </span>
                    <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                      {featuredPost.category}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-xl mb-6 opacity-90 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center space-x-4 mb-6 text-sm">
                    <span className="flex items-center space-x-1">
                      <span>{featuredPost.authorImage}</span>
                      <span>By {featuredPost.author}</span>
                    </span>
                    <span>•</span>
                    <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                    <span>•</span>
                    <span>{featuredPost.readTime}</span>
                    <span>•</span>
                    <span>👀 {featuredPost.views} views</span>
                  </div>
                  <Link
                    to={`/${featuredPost.slug}`}
                    className="inline-flex items-center bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
                  >
                    Read Complete Guide
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Articles Grid */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {currentCategory === 'All' ? 'Latest Articles' : `${currentCategoryData.name}`}
              </h2>
              <span className="text-gray-600 dark:text-gray-400">
                {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl">{post.image}</span>
                      <div className="flex items-center space-x-2">
                        <span className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-medium">
                          {post.category}
                        </span>
                        {post.featured && (
                          <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">
                            ⭐ Featured
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 hover:text-red-600 dark:hover:text-red-400 transition-colors">
                      <Link to={`/${post.slug}`}>{post.title}</Link>
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    {post.tags && (
                      <div className="flex flex-wrap gap-1 mb-4">
                        {post.tags.slice(0, 3).map((tag, index) => (
                          <span key={index} className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <div className="flex items-center space-x-2">
                        <span>{post.authorImage}</span>
                        <span>By {post.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Link
                        to={`/${post.slug}`}
                        className="inline-flex items-center text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 font-medium group"
                      >
                        Read Full Article
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                      {post.views && (
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          👀 {post.views}
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
            
            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📝</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  No articles found
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  No articles available in this category yet. Check back soon for new content!
                </p>
                <Link
                  to="/blog"
                  className="inline-flex items-center text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 font-medium"
                >
                  Browse All Articles
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            )}
          </div>

          {/* Newsletter Signup */}
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900 rounded-2xl p-8 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Never Miss a YouTube Vanced Update
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Get the latest YouTube Vanced APK guides, installation tutorials, and feature updates delivered straight to your inbox. Join 50,000+ subscribers!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg">
                  Subscribe Free
                </button>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
                No spam, unsubscribe anytime. We respect your privacy.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Content Section - SEO Internal Links */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RelatedContent currentPage="blog" title="More YouTube Vanced Resources" />
        </div>
      </section>
    </>
  );
};

export default Blog;