import { useState } from 'react';
import { Article } from '../types';
import ArticleView from './ArticleView';
import { Flame, ArrowRight } from 'lucide-react';

interface TrendingSectionProps {
  articles: Article[];
}

const TrendingSection = ({ articles }: TrendingSectionProps) => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const trendingArticles = articles.filter(article => article.trending);
  
  if (trendingArticles.length === 0) return null;
  
  return (
    <section className="py-12 bg-gradient-to-br from-gray-100 to-white dark:from-gray-800/50 dark:to-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-12">
          <Flame className="text-red-500 w-6 h-6 mr-3 animate-pulse" />
          <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-purple-600 dark:from-red-400 dark:to-purple-500">
            Trending Now
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trendingArticles.map((article, index) => (
            <div 
              key={article.id} 
              className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
              style={{ 
                transform: `translateY(${index * 20}px)`,
                animation: `slideUp 0.6s ease-out ${index * 0.2}s forwards`
              }}
              onClick={() => setSelectedArticle(article)}
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>
              
              <div className="p-6 relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-red-500 text-white">
                      {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
                    </div>
                    <div className="flex items-center text-red-500">
                      <span className="animate-pulse mr-2 h-2 w-2 rounded-full bg-red-500"></span>
                      <span className="text-xs font-medium">TRENDING</span>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{article.date}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-purple-600 dark:group-hover:text-cyan-400 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500 dark:text-gray-400">{article.readTime} min read</span>
                  <div className="flex items-center text-purple-600 dark:text-cyan-400 font-medium">
                    Read More
                    <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-600 dark:group-hover:border-cyan-400 rounded-xl transition-colors duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>

      {selectedArticle && (
        <ArticleView
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
        />
      )}
    </section>
  );
};

export default TrendingSection;