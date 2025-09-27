import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header />
      <main className="flex-1 bg-white dark:bg-gray-900">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
