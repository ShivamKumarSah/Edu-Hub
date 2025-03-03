import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

interface ArticleCardProps {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    avatar: string;
  };
  category: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  id,
  title,
  excerpt,
  image,
  date,
  readTime,
  author,
  category,
}) => {
  return (
    <motion.div 
      className="card h-full flex flex-col"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Link to={`/articles/${id}`} className="block">
        <div className="relative">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-3 left-3 bg-secondary-500 text-white text-xs font-semibold px-2 py-1 rounded">
            {category}
          </div>
        </div>
      </Link>
      <div className="p-5 flex-grow flex flex-col">
        <div className="flex items-center mb-3">
          <img 
            src={author.avatar} 
            alt={author.name} 
            className="w-8 h-8 rounded-full object-cover mr-2"
          />
          <span className="text-sm text-neutral-600">{author.name}</span>
        </div>
        
        <Link to={`/articles/${id}`} className="block">
          <h3 className="text-lg font-semibold mb-2 hover:text-primary-600 transition-colors line-clamp-2">{title}</h3>
        </Link>
        
        <p className="text-neutral-600 text-sm mb-4 line-clamp-3">{excerpt}</p>
        
        <div className="mt-auto">
          <div className="flex items-center justify-between text-sm text-neutral-500 mb-3">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{readTime}</span>
            </div>
          </div>
          
          <Link 
            to={`/articles/${id}`}
            className="text-primary-600 font-medium hover:text-primary-700 transition-colors inline-flex items-center"
          >
            Read More
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ArticleCard;