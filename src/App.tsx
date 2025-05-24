import { useState, useEffect } from 'react';
import Header from './components/Header';
import FeaturedArticle from './components/FeaturedArticle';
import ArticleGrid from './components/ArticleGrid';
import TrendingSection from './components/TrendingSection';
import ArticleView from './components/ArticleView';
import Footer from './components/Footer';
import { articles, categories } from './data/articles';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  
  // Initialize dark mode based on user preference
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
  }, []);
  
  // Apply dark mode class to body
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);
  
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  
  const featuredArticle = articles.find(article => article.featured);
  const nonFeaturedArticles = articles.filter(article => !article.featured);
  
  // Prevent scrolling when article is open
  useEffect(() => {
    if (selectedArticle) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedArticle]);
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      
      <main>
        {/* Featured Article */}
        <div className="pt-16">
          {featuredArticle && (
            <div onClick={() => setSelectedArticle(featuredArticle)} className="cursor-pointer">
              <FeaturedArticle article={featuredArticle} />
            </div>
          )}
        </div>
        
        {/* Trending Section */}
        <TrendingSection articles={articles} />
        
        {/* Article Grid */}
        <div className="py-8">
          <ArticleGrid
            articles={nonFeaturedArticles}
            categories={categories}
          />
        </div>
      </main>
      
      <Footer />
      
      {/* Article View */}
      {selectedArticle && (
        <ArticleView
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
        />
      )}
    </div>
  );
}

export default App;