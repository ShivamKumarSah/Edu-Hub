import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { articles } from '../data/articles';

const ArticleDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // Find the article with the matching ID
  const article = articles.find(article => article.id === id);
  
  // Get related articles (same category, excluding current article)
  const relatedArticles = articles
    .filter(a => a.category === article?.category && a.id !== id)
    .slice(0, 3);
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // If article not found, redirect to articles page
    if (!article && id) {
      navigate('/articles');
    }
  }, [article, id, navigate]);
  
  if (!article) {
    return null; // Will redirect in useEffect
  }
  
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        {/* Back Button */}
        <AnimatedSection className="mb-8">
          <Link 
            to="/articles" 
            className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Articles
          </Link>
        </AnimatedSection>
        
        {/* Article Header */}
        <AnimatedSection className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
              {article.category}
            </span>
            <div className="flex items-center text-neutral-500 text-sm">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center text-neutral-500 text-sm">
              <Clock className="h-4 w-4 mr-1" />
              <span>{article.readTime}</span>
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{article.title}</h1>
          
          <div className="flex items-center">
            <img 
              src={article.author.avatar} 
              alt={article.author.name} 
              className="w-12 h-12 rounded-full object-cover mr-4"
            />
            <div>
              <h3 className="font-medium">{article.author.name}</h3>
              <p className="text-sm text-neutral-600">{article.author.bio}</p>
            </div>
          </div>
        </AnimatedSection>
        
        {/* Featured Image */}
        <AnimatedSection className="mb-8">
          <img 
            src={article.image} 
            alt={article.title} 
            className="w-full h-96 object-cover rounded-xl"
          />
        </AnimatedSection>
        
        {/* Article Content */}
        <div className="max-w-3xl mx-auto">
          <AnimatedSection className="prose prose-lg max-w-none mb-12">
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </AnimatedSection>
          
          {/* Tags */}
          <AnimatedSection className="mb-12">
            <div className="flex flex-wrap gap-2">
              {article.tags.map(tag => (
                <div 
                  key={tag} 
                  className="flex items-center bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full text-sm"
                >
                  <Tag className="h-3 w-3 mr-1" />
                  {tag}
                </div>
              ))}
            </div>
          </AnimatedSection>
          
          {/* Author Bio */}
          <AnimatedSection className="bg-neutral-50 rounded-xl p-6 mb-12">
            <div className="flex flex-col md:flex-row md:items-center">
              <img 
                src={article.author.avatar} 
                alt={article.author.name} 
                className="w-20 h-20 rounded-full object-cover mb-4 md:mb-0 md:mr-6"
              />
              <div>
                <h3 className="text-xl font-semibold mb-2">About {article.author.name}</h3>
                <p className="text-neutral-600 mb-4">{article.author.bio}</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-primary-600 hover:text-primary-700 transition-colors">
                    Twitter
                  </a>
                  <a href="#" className="text-primary-600 hover:text-primary-700 transition-colors">
                    LinkedIn
                  </a>
                  <a href="#" className="text-primary-600 hover:text-primary-700 transition-colors">
                    Website
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
        
        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div>
            <AnimatedSection className="mb-8">
              <h2 className="text-2xl font-bold">Related Articles</h2>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((relatedArticle, index) => (
                <AnimatedSection key={relatedArticle.id} delay={index * 0.1}>
                  <Link to={`/articles/${relatedArticle.id}`} className="block group">
                    <div className="bg-white rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                      <img 
                        src={relatedArticle.image} 
                        alt={relatedArticle.title} 
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="font-semibold mb-2 group-hover:text-primary-600 transition-colors">
                          {relatedArticle.title}
                        </h3>
                        <p className="text-sm text-neutral-600 line-clamp-2">
                          {relatedArticle.excerpt}
                        </p>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticleDetailPage;