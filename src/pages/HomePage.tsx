import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import CategorySection from '../components/CategorySection';
import CourseCard from '../components/CourseCard';
import ArticleCard from '../components/ArticleCard';
import TestimonialSection from '../components/TestimonialSection';
import NewsletterSection from '../components/NewsletterSection';
import StatisticsSection from '../components/StatisticsSection';
import AnimatedSection from '../components/AnimatedSection';
import { courses } from '../data/courses';
import { articles } from '../data/articles';

const HomePage: React.FC = () => {
  // Get featured courses (first 3)
  const featuredCourses = courses.slice(0, 3);
  
  // Get latest articles (first 3)
  const latestArticles = articles.slice(0, 3);
  
  return (
    <div>
      <HeroSection />
      
      <CategorySection />
      
      {/* Featured Courses Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="section-title">Featured Courses</h2>
              <p className="section-subtitle">Expand your skills with our top-rated courses</p>
            </div>
            <Link 
              to="/courses" 
              className="text-primary-600 font-medium hover:text-primary-700 transition-colors mt-4 md:mt-0"
            >
              View All Courses
              <svg className="w-4 h-4 ml-1 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course, index) => (
              <AnimatedSection key={course.id} delay={index * 0.1}>
                <CourseCard {...course} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      <StatisticsSection />
      
      {/* Latest Articles Section */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="section-title">Latest Articles</h2>
              <p className="section-subtitle">Insights and tutorials to help you learn</p>
            </div>
            <Link 
              to="/articles" 
              className="text-primary-600 font-medium hover:text-primary-700 transition-colors mt-4 md:mt-0"
            >
              View All Articles
              <svg className="w-4 h-4 ml-1 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestArticles.map((article, index) => (
              <AnimatedSection key={article.id} delay={index * 0.1}>
                <ArticleCard {...article} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      <TestimonialSection />
      
      {/* CTA Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl overflow-hidden shadow-xl">
            <div className="px-6 py-12 md:p-12 text-center md:text-left md:flex md:items-center md:justify-between">
              <div className="md:w-2/3 mb-8 md:mb-0">
                <AnimatedSection>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Learning?</h2>
                  <p className="text-primary-100 text-lg">
                    Explore our courses and take the next step in your educational journey.
                  </p>
                </AnimatedSection>
              </div>
              <div className="md:w-1/3 text-center">
                <AnimatedSection delay={0.2}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link 
                      to="/courses" 
                      className="inline-block bg-white text-primary-700 font-bold px-8 py-4 rounded-lg shadow-md hover:bg-neutral-100 transition-colors"
                    >
                      Browse Courses
                    </Link>
                  </motion.div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <NewsletterSection />
    </div>
  );
};

export default HomePage;