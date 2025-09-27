import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Download from './pages/Download';
import Features from './pages/Features';
import Documentation from './pages/Documentation';
import InstallationGuide from './pages/InstallationGuide';
import Blog from './pages/Blog';
import Community from './pages/Community';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Disclaimer from './pages/Disclaimer';
import ArticleOne from './pages/ArticleOne';
import ArticleTwo from './pages/ArticleTwo';
import ArticleThree from './pages/ArticleThree';
import AndroidGuide from './pages/AndroidGuide';
import YouTubeMusicGuide from './pages/YouTubeMusicGuide';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/download" element={<Download />} />
            <Route path="/features" element={<Features />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/installation" element={<InstallationGuide />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/community" element={<Community />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/youtube-vanced-apk-2025-complete-download-installation-guide" element={<ArticleOne />} />
            <Route path="/youtube-vanced-apk-download-official-sources-safety-guide" element={<ArticleTwo />} />
            <Route path="/youtube-vanced-apk-vs-youtube-premium-ultimate-comparison-2025" element={<ArticleThree />} />
            <Route path="/youtube-vanced-apk-android-installation-compatibility-guide" element={<AndroidGuide />} />
            <Route path="/youtube-music-vanced-apk-features-download-guide-2025" element={<YouTubeMusicGuide />} />
            {/* Legacy routes for SEO */}
            <Route path="/guides" element={<Documentation />} />
            <Route path="/alternatives" element={<Blog />} />
            <Route path="/support" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
