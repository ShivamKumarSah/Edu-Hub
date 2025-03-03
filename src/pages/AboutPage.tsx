import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, BookOpen, Globe, CheckCircle } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import NewsletterSection from '../components/NewsletterSection';

const AboutPage: React.FC = () => {
  const stats = [
    {
      icon: <Users className="h-8 w-8 text-primary-600" />,
      value: '10,000+',
      label: 'Happy Students',
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary-600" />,
      value: '500+',
      label: 'Quality Courses',
    },
    {
      icon: <Award className="h-8 w-8 text-primary-600" />,
      value: '50+',
      label: 'Expert Instructors',
    },
    {
      icon: <Globe className="h-8 w-8 text-primary-600" />,
      value: '100+',
      label: 'Countries Reached',
    },
  ];
  
  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      bio: 'Former educator with a passion for making quality education accessible to everyone.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Michael Chen',
      role: 'Chief Technology Officer',
      bio: 'Tech enthusiast with a background in computer science and educational technology.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Content Director',
      bio: 'Curriculum developer with expertise in creating engaging learning experiences.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'David Kim',
      role: 'Head of Partnerships',
      bio: 'Building relationships with educational institutions and industry leaders.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ];
  
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-primary-700 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Edu Hub</h1>
              <p className="text-xl text-primary-100 mb-8">
                We're on a mission to make quality education accessible to everyone, everywhere.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" 
                alt="Team collaboration" 
                className="rounded-xl shadow-lg"
              />
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-neutral-700">
                <p>
                  Edu Hub was founded in 2023 with a simple yet powerful vision: to break down barriers to education and provide high-quality learning resources to students worldwide.
                </p>
                <p>
                  What started as a small collection of tutorials has grown into a comprehensive platform offering hundreds of courses across various disciplines, from web development and data science to design and business.
                </p>
                <p>
                  Our team of passionate educators and technologists works tirelessly to curate the best educational content and create an engaging learning experience for our community of over 10,000 students.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We're proud of the difference we're making in the educational journey of students worldwide.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={index} delay={index * 0.1} className="text-center">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="inline-flex items-center justify-center p-3 bg-primary-50 rounded-full mb-4">
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-neutral-900 mb-2">{stat.value}</h3>
                  <p className="text-neutral-600">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Mission & Values */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-6">Our Mission & Values</h2>
              <p className="text-neutral-700 mb-8">
                At Edu Hub, we believe that education is a fundamental right, not a privilege. Our mission is to democratize learning by providing affordable, accessible, and high-quality educational resources to learners worldwide.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mt-1 mr-4">
                    <CheckCircle className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Accessibility</h3>
                    <p className="text-neutral-600">Making education available to everyone, regardless of location or background.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4">
                    <CheckCircle className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Quality</h3>
                    <p className="text-neutral-600">Curating the best courses and resources to ensure effective learning outcomes.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4">
                    <CheckCircle className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Innovation</h3>
                    <p className="text-neutral-600">Continuously improving our platform and content to enhance the learning experience.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-4">
                    <CheckCircle className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Community</h3>
                    <p className="text-neutral-600">Fostering a supportive environment where learners can connect and grow together.</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <img 
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" 
                alt="Students learning" 
                className="rounded-xl shadow-lg"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              The passionate individuals behind Edu Hub who are dedicated to transforming education.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <img 
                    src={member.avatar} 
                    alt={member.name} 
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                    <p className="text-neutral-600">{member.bio}</p>
                    
                    <div className="mt-4 flex space-x-3">
                      <a href="#" className="text-neutral-500 hover:text-primary-600 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                        </svg>
                      </a>
                      <a href="#" className="text-neutral-500 hover:text-primary-600 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                        </svg>
                      </a>
                      <a href="#" className="text-neutral-500 hover:text-primary-600 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Partners Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Partners</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We collaborate with leading educational institutions and companies to bring you the best learning resources.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <AnimatedSection className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80" 
                alt="Partner logo" 
                className="h-12 opacity-70 hover:opacity-100 transition-opacity"
              />
            </AnimatedSection>
            <AnimatedSection className="flex justify-center" delay={0.1}>
              <img 
                src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80" 
                alt="Partner logo" 
                className="h-12 opacity-70 hover:opacity-100 transition-opacity"
              />
            </AnimatedSection>
            <AnimatedSection className="flex justify-center" delay={0.2}>
              <img 
                src="https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80" 
                alt="Partner logo" 
                className="h-12 opacity-70 hover:opacity-100 transition-opacity"
              />
            </AnimatedSection>
            <AnimatedSection className="flex justify-center" delay={0.3}>
              <img 
                src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80" 
                alt="Partner logo" 
                className="h-12 opacity-70 hover:opacity-100 transition-opacity"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      <NewsletterSection />
    </div>
  );
};

export default AboutPage;