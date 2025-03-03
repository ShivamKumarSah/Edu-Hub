import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, Users, Clock, ArrowLeft, CheckCircle, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import { courses } from '../data/courses';

const CourseDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // Find the course with the matching ID
  const course = courses.find(course => course.id === id);
  
  // Get related courses (same category, excluding current course)
  const relatedCourses = courses
    .filter(c => c.category === course?.category && c.id !== id)
    .slice(0, 3);
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // If course not found, redirect to courses page
    if (!course && id) {
      navigate('/courses');
    }
  }, [course, id, navigate]);
  
  if (!course) {
    return null; // Will redirect in useEffect
  }
  
  const handleEnrollNow = () => {
    // Open Udemy link in a new tab
    window.open(course.udemy_link, '_blank');
  };
  
  // Mock course details
  const courseDetails = {
    description: `
      This comprehensive course will take you from beginner to advanced level. You'll learn through hands-on projects and real-world examples.
      
      Whether you're just starting out or looking to enhance your existing skills, this course provides a structured learning path with practical exercises and challenges to reinforce your knowledge.
      
      By the end of this course, you'll have built several portfolio-worthy projects and gained the confidence to tackle real-world problems in ${course.category}.
    `,
    whatYouWillLearn: [
      'Master the fundamentals and advanced concepts',
      'Build real-world projects for your portfolio',
      'Learn best practices and industry standards',
      'Understand how to solve complex problems',
      'Develop critical thinking and problem-solving skills',
      'Stay updated with the latest trends and technologies',
    ],
    requirements: [
      'Basic computer skills',
      'No prior experience in this field is required',
      'A computer with internet access',
      'Enthusiasm and willingness to learn',
    ],
    instructors: [
      {
        name: 'Dr. Sarah Johnson',
        role: 'Senior Instructor',
        bio: '15+ years of industry experience. PhD in Computer Science.',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Michael Chen',
        role: 'Co-Instructor',
        bio: 'Software Engineer with 10+ years of experience in leading tech companies.',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    ],
  };
  
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        {/* Back Button */}
        <AnimatedSection className="mb-8">
          <Link 
            to="/courses" 
            className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Courses
          </Link>
        </AnimatedSection>
        
        {/* Course Header */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <AnimatedSection className="lg:col-span-2">
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <img 
                src={course.image} 
                alt={course.title} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium mr-3">
                    {course.category}
                  </span>
                  <span className="bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full text-sm font-medium">
                    {course.level}
                  </span>
                </div>
                
                <h1 className="text-2xl md:text-3xl font-bold mb-4">{course.title}</h1>
                
                <div className="flex items-center mb-4">
                  <div className="flex items-center text-yellow-500 mr-4">
                    <Star className="h-5 w-5 fill-current" />
                    <span className="ml-1 font-medium">{course.rating.toFixed(1)}</span>
                  </div>
                  <span className="text-neutral-500">({course.reviewCount} reviews)</span>
                </div>
                
                <div className="flex flex-wrap gap-4 text-sm text-neutral-600 mb-6">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{course.students} students</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{course.duration}</span>
                  </div>
                </div>
                
                <p className="text-neutral-700">{course.description}</p>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <div className="bg-white rounded-xl overflow-hidden shadow-md sticky top-24">
              <div className="p-6">
                <div className="text-3xl font-bold text-neutral-900 mb-6">{course.price}</div>
                
                <motion.button
                  onClick={handleEnrollNow}
                  className="w-full bg-secondary-500 hover:bg-secondary-600 text-white font-bold py-3 px-4 rounded-lg mb-4 flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Enroll Now
                  <ExternalLink className="h-4 w-4 ml-2" />
                </motion.button>
                
                <p className="text-sm text-neutral-500 text-center mb-6">
                  30-Day Money-Back Guarantee
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Full lifetime access</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Access on mobile and desktop</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Certificate of completion</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span>Downloadable resources</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
        
        {/* Course Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <AnimatedSection className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-4">Course Description</h2>
              <div className="text-neutral-700 space-y-4">
                {courseDetails.description.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </AnimatedSection>
            
            {/* What You'll Learn */}
            <AnimatedSection className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-4">What You'll Learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {courseDetails.whatYouWillLearn.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            
            {/* Requirements */}
            <AnimatedSection className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-4">Requirements</h2>
              <ul className="list-disc list-inside space-y-2 text-neutral-700">
                {courseDetails.requirements.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </AnimatedSection>
            
            {/* Instructors */}
            <AnimatedSection className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-6">Instructors</h2>
              <div className="space-y-6">
                {courseDetails.instructors.map((instructor, index) => (
                  <div key={index} className="flex flex-col md:flex-row md:items-center">
                    <img 
                      src={instructor.avatar} 
                      alt={instructor.name} 
                      className="w-20 h-20 rounded-full object-cover mb-4 md:mb-0 md:mr-6"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">{instructor.name}</h3>
                      <p className="text-primary-600 mb-2">{instructor.role}</p>
                      <p className="text-neutral-600">{instructor.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
        
        {/* Related Courses */}
        {relatedCourses.length > 0 && (
          <div>
            <AnimatedSection className="mb-8">
              <h2 className="text-2xl font-bold">Related Courses</h2>
              <p className="text-neutral-600">You might also be interested in these courses</p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedCourses.map((relatedCourse, index) => (
                <AnimatedSection key={relatedCourse.id} delay={index * 0.1}>
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <img 
                      src={relatedCourse.image} 
                      alt={relatedCourse.title} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold mb-2">{relatedCourse.title}</h3>
                      <div className="flex items-center text-yellow-500 mb-2">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="ml-1 text-sm">{relatedCourse.rating.toFixed(1)}</span>
                        <span className="ml-1 text-xs text-neutral-500">({relatedCourse.reviewCount})</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-bold">{relatedCourse.price}</span>
                        <Link 
                          to={`/courses/${relatedCourse.id}`}
                          className="text-primary-600 hover:text-primary-700 transition-colors text-sm font-medium"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseDetailPage;