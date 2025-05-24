import { Article } from '../types';

interface FeaturedArticleProps {
  article: Article;
}

const FeaturedArticle = ({ article }: FeaturedArticleProps) => {
  return (
    <div className="relative h-[80vh] mb-12 overflow-hidden group">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url(${article.imageUrl})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
      
      <div className="absolute inset-0 flex items-end">
        <div className="container mx-auto px-4 pb-12 md:pb-24">
          <div className="max-w-4xl animate-slideUp opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            <div className="flex items-center space-x-4 mb-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-600 text-white">
                {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
              </div>
              <div className="w-8 h-[1px] bg-white/30" />
              <div className="text-white/70">{article.date}</div>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {article.title}
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed">
              {article.excerpt}
            </p>
            
            <div className="flex items-center text-white space-x-6">
              <div className="flex items-center">
                <span className="opacity-90 font-medium">{article.author}</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-white/30" />
              <div className="opacity-70">{article.readTime} min read</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-30 bg-gradient-to-l from-purple-600 via-transparent to-transparent mix-blend-overlay" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/3 opacity-20 bg-gradient-to-t from-cyan-400 via-transparent to-transparent mix-blend-overlay" />
    </div>
  );
};

export default FeaturedArticle;