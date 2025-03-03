export interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  rating: number;
  reviewCount: number;
  students: number;
  duration: string;
  level: string;
  price: string;
  category: string;
  udemy_link: string;
}

export const courses: Course[] = [
  {
    id: '1',
    title: 'Complete Web Development Bootcamp',
    description: 'Learn HTML, CSS, JavaScript, React, Node.js and more. Build real-world projects and become a full-stack developer.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    reviewCount: 1254,
    students: 15420,
    duration: '42 hours',
    level: 'Beginner to Advanced',
    price: '$94.99',
    category: 'Web Development',
    udemy_link: 'https://www.udemy.com/course/the-complete-web-development-bootcamp/',
  },
  {
    id: '2',
    title: 'Data Science and Machine Learning Bootcamp',
    description: 'Learn Python, NumPy, Pandas, Matplotlib, Seaborn, Scikit-Learn, Machine Learning, and more through hands-on projects.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80',
    rating: 4.7,
    reviewCount: 982,
    students: 12350,
    duration: '36 hours',
    level: 'Intermediate',
    price: '$89.99',
    category: 'Data Science',
    udemy_link: 'https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/',
  },
  {
    id: '3',
    title: 'UI/UX Design Masterclass',
    description: 'Master the principles of UI/UX design. Learn Figma, user research, wireframing, prototyping, and design systems.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80',
    rating: 4.9,
    reviewCount: 756,
    students: 8920,
    duration: '28 hours',
    level: 'All Levels',
    price: '$79.99',
    category: 'UI/UX Design',
    udemy_link: 'https://www.udemy.com/course/ui-ux-web-design-using-adobe-xd/',
  },
  {
    id: '4',
    title: 'Flutter & Dart: Complete Mobile App Development',
    description: 'Build iOS and Android apps with a single codebase. Learn Dart programming and Flutter framework from scratch.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80',
    rating: 4.6,
    reviewCount: 632,
    students: 7840,
    duration: '32 hours',
    level: 'Beginner to Advanced',
    price: '$84.99',
    category: 'Mobile Development',
    udemy_link: 'https://www.udemy.com/course/flutter-bootcamp-with-dart/',
  },
  {
    id: '5',
    title: 'Digital Marketing Masterclass',
    description: 'Learn SEO, social media marketing, email marketing, Google Ads, Facebook Ads, content marketing, and analytics.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80',
    rating: 4.5,
    reviewCount: 528,
    students: 6230,
    duration: '24 hours',
    level: 'All Levels',
    price: '$69.99',
    category: 'Business & Marketing',
    udemy_link: 'https://www.udemy.com/course/digital-marketing-masterclass/',
  },
  {
    id: '6',
    title: 'Deep Learning A-Z: Neural Networks in Python',
    description: 'Learn to create Deep Learning Algorithms in Python. Build artificial neural networks and deep learning models.',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80',
    rating: 4.7,
    reviewCount: 874,
    students: 9120,
    duration: '30 hours',
    level: 'Advanced',
    price: '$99.99',
    category: 'AI & Machine Learning',
    udemy_link: 'https://www.udemy.com/course/deeplearning/',
  },
  {
    id: '7',
    title: 'JavaScript: The Complete Guide',
    description: 'Master JavaScript with the most comprehensive course. Projects, challenges, quizzes, and ES6+ features.',
    image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    reviewCount: 1120,
    students: 14250,
    duration: '40 hours',
    level: 'All Levels',
    price: '$89.99',
    category: 'Web Development',
    udemy_link: 'https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/',
  },
  {
    id: '8',
    title: 'AWS Certified Solutions Architect',
    description: 'Prepare for the AWS Certified Solutions Architect Associate exam. Learn to design and deploy scalable systems on AWS.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80',
    rating: 4.7,
    reviewCount: 932,
    students: 10840,
    duration: '26 hours',
    level: 'Intermediate to Advanced',
    price: '$94.99',
    category: 'Cloud Computing',
    udemy_link: 'https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c02/',
  },
];