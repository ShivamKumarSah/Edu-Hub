import React, { useState } from 'react';
import { Search } from 'lucide-react';
import ArticleCard from '../components/ArticleCard';
import AnimatedSection from '../components/AnimatedSection';
import { articles } from '../data/articles';

const ArticlesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Get unique categories
  const categories = Array.from(new Set(articles.map(article => article.category)));
  
  // Filter articles based on search term and category
  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory ? article.category === selectedCategory : true;
    
    return matchesSearch && matchesCategory;
  });
  
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Articles & Tutorials</h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Explore our collection of articles, tutorials, and insights to enhance your learning journey.
          </p>
        </AnimatedSection>
        
        {/* Search Bar */}
        <div className="mb-12">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-500" />
            </div>
          </div>
        </div>
        
        {/* Category Tabs */}
        <div className="mb-12 overflow-x-auto">
          <div className="flex space-x-2 min-w-max pb-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === null
                  ? 'bg-primary-600 text-white'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              All
            </button>
            
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Articles Grid */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <AnimatedSection key={article.id} delay={index * 0.05}>
                <ArticleCard {...article} />
              </AnimatedSection>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <AnimatedSection>
              <div className="mb-4">
                <Search className="h-12 w-12 mx-auto text-neutral-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">No articles found</h3>
              <p className="text-neutral-600">
                Try adjusting your search or category filter to find what you're looking for.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory(null);
                }}
                className="mt-4 text-primary-600 hover:text-primary-700 transition-colors"
              >
                Clear all filters
              </button>
            </AnimatedSection>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticlesPage;