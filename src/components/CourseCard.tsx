import React from 'react';
import { Star, Users, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  rating: number;
  reviewCount: number;
  students: number;
  duration: string;
  level: string;
  price: string;
  category: string;
  udemy_link: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  id,
  title,
  description,
  image,
  rating,
  reviewCount,
  students,
  duration,
  level,
  price,
  category,
  udemy_link,
}) => {
  const handleViewCourse = () => {
    // Open Udemy link in a new tab
    window.open(udemy_link, '_blank');
  };

  return (
    <motion.div 
      className="card h-full flex flex-col"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 left-3 bg-primary-600 text-white text-xs font-semibold px-2 py-1 rounded">
          {category}
        </div>
      </div>
      <div className="p-5 flex-grow flex flex-col">
        <div className="flex items-center mb-2">
          <div className="flex items-center text-yellow-500">
            <Star className="h-4 w-4 fill-current" />
            <span className="ml-1 text-sm font-medium">{rating.toFixed(1)}</span>
          </div>
          <span className="mx-2 text-neutral-400 text-sm">({reviewCount} reviews)</span>
        </div>
        <h3 className="text-lg font-semibold mb-2 line-clamp-2">{title}</h3>
        <p className="text-neutral-600 text-sm mb-4 line-clamp-3">{description}</p>
        
        <div className="mt-auto">
          <div className="flex items-center justify-between text-sm text-neutral-500 mb-4">
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              <span>{students} students</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{duration}</span>
            </div>
            <span className="text-neutral-600 font-medium">{level}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-neutral-900">{price}</span>
            <button 
              onClick={handleViewCourse}
              className="btn-secondary py-2 px-4 text-sm"
            >
              View Course
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;