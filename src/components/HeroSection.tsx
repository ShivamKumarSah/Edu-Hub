import React from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-primary-700 to-primary-900 text-white pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-white"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-white"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Learn. Explore. Grow.
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-primary-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover high-quality courses and resources to advance your skills and career.
          </motion.p>
          
          <motion.div
            className="max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative">
              <input
                type="text"
                placeholder="What do you want to learn today?"
                className="w-full px-6 py-4 rounded-full text-neutral-800 focus:outline-none focus:ring-4 focus:ring-primary-400/50 shadow-lg"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary-600 text-white p-3 rounded-full hover:bg-primary-700 transition-colors">
                <Search className="h-5 w-5" />
              </button>
            </div>
            
            <div className="mt-6 flex flex-wrap justify-center gap-2 text-sm">
              <span className="text-primary-200">Popular searches:</span>
              <a href="#" className="text-white hover:text-primary-200 transition-colors">Web Development</a>
              <span className="text-primary-400">•</span>
              <a href="#" className="text-white hover:text-primary-200 transition-colors">Data Science</a>
              <span className="text-primary-400">•</span>
              <a href="#" className="text-white hover:text-primary-200 transition-colors">UI/UX Design</a>
              <span className="text-primary-400">•</span>
              <a href="#" className="text-white hover:text-primary-200 transition-colors">Machine Learning</a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;