import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const NewsletterSection: React.FC = () => {
  return (
    <section className="section bg-primary-700 text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <Mail className="h-12 w-12 mx-auto mb-6 text-primary-300" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated with Our Newsletter</h2>
            <p className="text-primary-200 text-lg mb-8">
              Get the latest courses, articles, and learning resources delivered straight to your inbox.
            </p>
            
            <form className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-lg text-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary-300"
                  required
                />
                <motion.button
                  type="submit"
                  className="bg-secondary-500 hover:bg-secondary-600 text-white font-medium px-6 py-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-secondary-400"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
              <p className="text-xs text-primary-300 mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;