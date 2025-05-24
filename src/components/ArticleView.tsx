import { useState } from 'react';
import { Article } from '../types';
import { ArrowLeft } from 'lucide-react';

interface ArticleViewProps {
  article: Article;
  onClose: () => void;
}

const ArticleView = ({ article, onClose }: ArticleViewProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  
  return (
    <div className="fixed inset-0 bg-white dark:bg-gray-900 z-50 overflow-auto">
      <button
        onClick={onClose}
        className="fixed top-4 left-4 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/90 dark:bg-gray-800/90 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        aria-label="Back"
      >
        <ArrowLeft size={20} />
      </button>
      
      <div className="relative h-[50vh] overflow-hidden">
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
            isImageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${article.imageUrl})` }}
        />
        <img
          src={article.imageUrl}
          alt={article.title}
          className="opacity-0 absolute"
          onLoad={() => setIsImageLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      </div>
      
      <div className="relative -mt-20 bg-white dark:bg-gray-900 rounded-t-3xl p-6 md:p-12">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-600 text-white mb-4">
            {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight dark:text-white">
            {article.title}
          </h1>
          
          <div className="flex items-center text-gray-600 dark:text-gray-400 mb-8">
            <span className="mr-4">{article.author}</span>
            <span className="mr-4">•</span>
            <span className="mr-4">{article.date}</span>
            <span className="mr-4">•</span>
            <span>{article.readTime} min read</span>
          </div>
          
          <div 
            className="prose dark:prose-invert prose-lg max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </div>
    </div>
  );
};

export default ArticleView;