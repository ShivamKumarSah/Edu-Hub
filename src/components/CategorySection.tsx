import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Smartphone, PenTool, TrendingUp, Brain } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

interface Category {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const categories: Category[] = [
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Learn to build modern, responsive websites and web applications.',
    icon: <Code className="h-6 w-6" />,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    id: 'data-science',
    title: 'Data Science',
    description: 'Master data analysis, visualization, and machine learning techniques.',
    icon: <Database className="h-6 w-6" />,
    color: 'bg-purple-100 text-purple-600',
  },
  {
    id: 'mobile-dev',
    title: 'Mobile Development',
    description: 'Create native and cross-platform mobile applications.',
    icon: <Smartphone className="h-6 w-6" />,
    color: 'bg-green-100 text-green-600',
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    description: 'Design beautiful, intuitive interfaces and user experiences.',
    icon: <PenTool className="h-6 w-6" />,
    color: 'bg-pink-100 text-pink-600',
  },
  {
    id: 'business',
    title: 'Business & Marketing',
    description: 'Develop essential business skills and marketing strategies.',
    icon: <TrendingUp className="h-6 w-6" />,
    color: 'bg-orange-100 text-orange-600',
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    description: 'Explore artificial intelligence and machine learning concepts.',
    icon: <Brain className="h-6 w-6" />,
    color: 'bg-indigo-100 text-indigo-600',
  },
];

const CategorySection: React.FC = () => {
  return (
    <section className="section bg-neutral-50">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-12">
          <h2 className="section-title">Explore Categories</h2>
          <p className="section-subtitle">Browse our wide range of courses across different categories</p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <AnimatedSection key={category.id} delay={index * 0.1}>
              <motion.div 
                className="bg-white rounded-lg p-6 shadow-card hover:shadow-card-hover transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className={`inline-flex items-center justify-center p-3 rounded-lg mb-4 ${category.color}`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-neutral-600">{category.description}</p>
                <a 
                  href="#" 
                  className="mt-4 inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
                >
                  Explore Courses
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;