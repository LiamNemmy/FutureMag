import { Article } from '../types';
import { Clock, ArrowRight } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {article.trending && (
          <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center">
            <span className="animate-pulse mr-2 h-2 w-2 rounded-full bg-white"></span>
            TRENDING
          </div>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <div className="text-white">
            <div className="flex items-center space-x-2 mb-3">
              <div className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-purple-600/90 backdrop-blur-sm">
                {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
              </div>
              <span className="text-sm opacity-75">{article.date}</span>
            </div>
            <h3 className="text-xl font-bold mb-2 line-clamp-2">
              {article.title}
            </h3>
            <p className="text-sm opacity-90 line-clamp-2 mb-4">
              {article.excerpt}
            </p>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 group-hover:text-purple-600 dark:group-hover:text-cyan-400 transition-colors line-clamp-2">
          {article.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
          {article.excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <Clock size={16} className="mr-2" />
            {article.readTime} min read
          </div>
          <div className="flex items-center text-purple-600 dark:text-cyan-400 font-medium">
            Read More
            <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-2 transition-transform" />
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-600 dark:group-hover:border-cyan-400 rounded-xl transition-colors duration-300 pointer-events-none" />
    </div>
  );
};

export default ArticleCard;