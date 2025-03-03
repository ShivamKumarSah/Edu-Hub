import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Web Developer',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80',
    content: 'The courses on Edu Hub have completely transformed my career. I went from knowing basic HTML to building full-stack applications in just a few months. The instructors are knowledgeable and the content is always up-to-date with industry standards.',
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Data Scientist',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80',
    content: 'As someone transitioning into data science, I found the courses here incredibly valuable. The step-by-step approach and practical projects helped me build a strong portfolio that impressed employers. I landed my dream job thanks to these resources!',
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'UX Designer',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80',
    content: 'The UI/UX design courses here are exceptional. They cover both theory and practical application, which helped me develop a strong design thinking process. The community feedback on projects was invaluable for my growth as a designer.',
  },
];

const TestimonialSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section bg-primary-50">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-12">
          <h2 className="section-title">What Our Students Say</h2>
          <p className="section-subtitle">Hear from our community of learners</p>
        </AnimatedSection>
        
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[currentIndex].id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-card p-8 md:p-10"
            >
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="mb-6 md:mb-0 md:mr-8">
                  <div className="relative">
                    <img 
                      src={testimonials[currentIndex].avatar} 
                      alt={testimonials[currentIndex].name}
                      className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-primary-100"
                    />
                    <div className="absolute -top-2 -left-2 bg-primary-600 rounded-full p-2 text-white">
                      <Quote className="h-4 w-4" />
                    </div>
                  </div>
                </div>
                
                <div className="flex-1">
                  <p className="text-neutral-700 italic mb-6 text-lg">"{testimonials[currentIndex].content}"</p>
                  <div>
                    <h4 className="font-semibold text-lg">{testimonials[currentIndex].name}</h4>
                    <p className="text-neutral-500">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary-600' : 'bg-neutral-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md text-neutral-700 hover:text-primary-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md text-neutral-700 hover:text-primary-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;