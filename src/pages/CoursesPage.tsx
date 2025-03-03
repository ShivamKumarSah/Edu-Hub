import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, X } from 'lucide-react';
import CourseCard from '../components/CourseCard';
import AnimatedSection from '../components/AnimatedSection';
import { courses } from '../data/courses';

const CoursesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Get unique categories
  const categories = Array.from(new Set(courses.map(course => course.category)));
  
  // Get unique levels
  const levels = Array.from(new Set(courses.map(course => course.level)));
  
  // Filter courses based on search term and filters
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          course.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory ? course.category === selectedCategory : true;
    const matchesLevel = selectedLevel ? course.level === selectedLevel : true;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });
  
  const clearFilters = () => {
    setSelectedCategory(null);
    setSelectedLevel(null);
  };
  
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Our Courses</h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Discover high-quality courses taught by industry experts to help you advance your skills and career.
          </p>
        </AnimatedSection>
        
        {/* Search and Filter Bar */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search for courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-500" />
            </div>
            
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="md:hidden flex items-center justify-center gap-2 px-4 py-3 bg-neutral-100 rounded-lg text-neutral-700 hover:bg-neutral-200 transition-colors"
            >
              <Filter className="h-5 w-5" />
              Filters
            </button>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters - Desktop */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-lg">Filters</h3>
                  {(selectedCategory || selectedLevel) && (
                    <button
                      onClick={clearFilters}
                      className="text-sm text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      Clear All
                    </button>
                  )}
                </div>
                
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Categories</h4>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <div key={category} className="flex items-center">
                        <input
                          type="radio"
                          id={`category-${category}`}
                          name="category"
                          checked={selectedCategory === category}
                          onChange={() => setSelectedCategory(category)}
                          className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                        />
                        <label htmlFor={`category-${category}`} className="ml-2 text-neutral-700">
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-3">Level</h4>
                  <div className="space-y-2">
                    {levels.map(level => (
                      <div key={level} className="flex items-center">
                        <input
                          type="radio"
                          id={`level-${level}`}
                          name="level"
                          checked={selectedLevel === level}
                          onChange={() => setSelectedLevel(level)}
                          className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                        />
                        <label htmlFor={`level-${level}`} className="ml-2 text-neutral-700">
                          {level}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Filters - Mobile */}
          {isFilterOpen && (
            <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ duration: 0.3 }}
                className="bg-white w-4/5 h-full overflow-y-auto"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-semibold text-lg">Filters</h3>
                    <button
                      onClick={() => setIsFilterOpen(false)}
                      className="text-neutral-500 hover:text-neutral-700"
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </div>
                  
                  {(selectedCategory || selectedLevel) && (
                    <button
                      onClick={clearFilters}
                      className="mb-4 text-sm text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      Clear All Filters
                    </button>
                  )}
                  
                  <div className="mb-6">
                    <h4 className="font-medium mb-3">Categories</h4>
                    <div className="space-y-2">
                      {categories.map(category => (
                        <div key={category} className="flex items-center">
                          <input
                            type="radio"
                            id={`mobile-category-${category}`}
                            name="mobile-category"
                            checked={selectedCategory === category}
                            onChange={() => setSelectedCategory(category)}
                            className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                          />
                          <label htmlFor={`mobile-category-${category}`} className="ml-2 text-neutral-700">
                            {category}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-medium mb-3">Level</h4>
                    <div className="space-y-2">
                      {levels.map(level => (
                        <div key={level} className="flex items-center">
                          <input
                            type="radio"
                            id={`mobile-level-${level}`}
                            name="mobile-level"
                            checked={selectedLevel === level}
                            onChange={() => setSelectedLevel(level)}
                            className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                          />
                          <label htmlFor={`mobile-level-${level}`} className="ml-2 text-neutral-700">
                            {level}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setIsFilterOpen(false)}
                    className="w-full py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    Apply Filters
                  </button>
                </div>
              </motion.div>
            </div>
          )}
          
          {/* Course Grid */}
          <div className="flex-grow">
            {/* Active Filters */}
            {(selectedCategory || selectedLevel) && (
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedCategory && (
                  <div className="inline-flex items-center bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm">
                    Category: {selectedCategory}
                    <button
                      onClick={() => setSelectedCategory(null)}
                      className="ml-2 text-primary-600 hover:text-primary-800"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                )}
                
                {selectedLevel && (
                  <div className="inline-flex items-center bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm">
                    Level: {selectedLevel}
                    <button
                      onClick={() => setSelectedLevel(null)}
                      className="ml-2 text-primary-600 hover:text-primary-800"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>
            )}
            
            {filteredCourses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCourses.map((course, index) => (
                  <AnimatedSection key={course.id} delay={index * 0.05}>
                    <CourseCard {...course} />
                  </AnimatedSection>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <AnimatedSection>
                  <div className="mb-4">
                    <Search className="h-12 w-12 mx-auto text-neutral-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">No courses found</h3>
                  <p className="text-neutral-600">
                    Try adjusting your search or filters to find what you're looking for.
                  </p>
                  <button
                    onClick={clearFilters}
                    className="mt-4 text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    Clear all filters
                  </button>
                </AnimatedSection>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;