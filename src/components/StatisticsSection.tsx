import React from 'react';
import { Users, BookOpen, Award, Globe } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

interface Stat {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const stats: Stat[] = [
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

const StatisticsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AnimatedSection key={index} delay={index * 0.1} className="text-center">
              <div className="flex flex-col items-center">
                <div className="mb-4 p-4 bg-primary-50 rounded-full">
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
  );
};

export default StatisticsSection;