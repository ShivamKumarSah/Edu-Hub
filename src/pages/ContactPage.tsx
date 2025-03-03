import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after submission
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary-600" />,
      title: 'Email Us',
      details: 'info@eduhub.com',
      description: "We'll respond within 24 hours",
      action: 'Send an email',
      link: 'mailto:info@eduhub.com',
    },
    {
      icon: <Phone className="h-6 w-6 text-primary-600" />,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri from 9am to 5pm',
      action: 'Make a call',
      link: 'tel:+15551234567',
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary-600" />,
      title: 'Visit Us',
      details: '123 Education Street, Learning City, 10001',
      description: 'By appointment only',
      action: 'Get directions',
      link: 'https://maps.google.com',
    },
  ];
  
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-primary-700 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl text-primary-100 mb-8">
                Have questions or feedback? We'd love to hear from you.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-neutral-50 rounded-lg p-6 h-full flex flex-col">
                  <div className="bg-primary-50 rounded-full p-3 inline-flex mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="font-medium mb-1">{item.details}</p>
                  <p className="text-neutral-600 text-sm mb-4">{item.description}</p>
                  <a 
                    href={item.link} 
                    className="mt-auto text-primary-600 font-medium hover:text-primary-700 transition-colors inline-flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.action}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
              <p className="text-neutral-600 max-w-2xl mx-auto">
                Whether you have a question about our courses, articles, or anything else, our team is ready to answer all your questions.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-6 md:p-8">
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="inline-flex items-center justify-center p-3 bg-green-100 rounded-full mb-4">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                      <p className="text-neutral-600 mb-6">
                        Thank you for reaching out. We'll get back to you as soon as possible.
                      </p>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="text-primary-600 font-medium hover:text-primary-700 transition-colors"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                            Your Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder="John Doe"
                            required
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                            Your Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formState.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder="john@example.com"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">
                          Subject
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formState.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          required
                        >
                          <option value="">Select a subject</option>
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Course Question">Course Question</option>
                          <option value="Technical Support">Technical Support</option>
                          <option value="Partnership">Partnership</option>
                          <option value="Feedback">Feedback</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                          Your Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          rows={6}
                          className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="How can we help you?"
                          required
                        ></textarea>
                      </div>
                      
                      {error && (
                        <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg">
                          {error}
                        </div>
                      )}
                      
                      <div className="flex justify-end">
                        <motion.button
                          type="submit"
                          className="inline-flex items-center bg-primary-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-70"
                          disabled={isSubmitting}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Sending...
                            </>
                          ) : (
                            <>
                              Send Message
                              <Send className="ml-2 h-4 w-4" />
                            </>
                          )}
                        </motion.button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Find quick answers to common questions about Edu Hub.
            </p>
          </AnimatedSection>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: 'How do I enroll in a course?',
                  answer: 'To enroll in a course, simply navigate to the course page and click on the "View Course" button. This will redirect you to the course provider\'s website where you can complete the enrollment process.'
                },
                {
                  question: 'Are the courses free?',
                  answer: 'Edu Hub provides both free and paid courses. The price is clearly displayed on each course card. We partner with various educational platforms to offer a wide range of options for different budgets.'
                },
                {
                  question: 'Can I get a certificate after completing a course?',
                  answer: 'Yes, most courses offer certificates upon completion. The certificate details are provided on the specific course page before enrollment.'
                },
                {
                  question: 'How can I become an instructor?',
                  answer: 'We\'re always looking for expert instructors to join our platform. Please contact us through the form above with the subject "Partnership" to discuss potential collaboration opportunities.'
                },
                {
                  question: 'Do you offer refunds?',
                  answer: 'Refund policies vary by course provider. Please check the refund policy on the course provider\'s website before enrolling in a paid course.'
                }
              ].map((faq, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="bg-neutral-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                    <p className="text-neutral-600">{faq.answer}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Find Us</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Visit our headquarters or connect with us online.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 h-96">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30591910525!2d-74.25986432970718!3d40.697149422113014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1619826381244!5m2!1sen!2sca" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy"
                  title="Edu Hub Location"
                ></iframe>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;