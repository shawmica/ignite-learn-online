
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CourseList from '@/components/course/CourseList';

// Sample data
const featuredCourses = [
  {
    id: '1',
    title: 'Introduction to Web Development',
    description: 'Learn the basics of HTML, CSS, and JavaScript to build modern websites from scratch.',
    instructor: 'Sarah Johnson',
    thumbnail: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
    duration: '12 hours',
    totalLessons: 24,
  },
  {
    id: '2',
    title: 'Data Science Fundamentals',
    description: 'Discover how to analyze and interpret complex data using Python and popular libraries.',
    instructor: 'Michael Chen',
    thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
    duration: '15 hours',
    totalLessons: 30,
  },
  {
    id: '3',
    title: 'UI/UX Design Principles',
    description: 'Master the fundamental principles of creating user-friendly and visually appealing interfaces.',
    instructor: 'Alex Thompson',
    thumbnail: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
    duration: '10 hours',
    totalLessons: 18,
  },
];

const popularcourses = [
  {
    id: '4',
    title: 'Python Programming Masterclass',
    description: 'Comprehensive course covering Python from basics to advanced concepts with real-world projects.',
    instructor: 'David Wilson',
    thumbnail: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
    duration: '20 hours',
    totalLessons: 42,
  },
  {
    id: '5',
    title: 'Digital Marketing Strategies',
    description: 'Learn proven marketing techniques to grow your business online and reach more customers.',
    instructor: 'Emma Roberts',
    thumbnail: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
    duration: '8 hours',
    totalLessons: 16,
  },
  {
    id: '6',
    title: 'Mobile App Development with React Native',
    description: 'Build cross-platform mobile applications for iOS and Android using React Native framework.',
    instructor: 'James Lee',
    thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
    duration: '18 hours',
    totalLessons: 32,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-100 to-primary-200 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-8 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Elevate Your Skills with <span className="text-primary-600">Expert-Led</span> Online Courses
                </h1>
                <p className="mt-6 text-lg text-gray-700 max-w-2xl">
                  Discover courses taught by industry experts and advance your career with hands-on projects and interactive learning experiences.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link to="/courses">
                    <Button size="lg" className="w-full sm:w-auto">
                      Explore Courses
                    </Button>
                  </Link>
                  <Link to="/signup">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto">
                      Sign Up Free
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                  alt="Students learning" 
                  className="rounded-lg shadow-xl w-full max-w-md object-cover"
                  style={{ height: '400px' }}
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Why Choose Ignite Learn?</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Our platform provides everything you need to enhance your skills and advance your career.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                  <Book className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Expert Instructors</h3>
                <p className="mt-2 text-gray-600">
                  Learn from industry professionals with years of real-world experience in their fields.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Flexible Learning</h3>
                <p className="mt-2 text-gray-600">
                  Study at your own pace with unlimited access to course materials from anywhere.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                  <Play className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Interactive Content</h3>
                <p className="mt-2 text-gray-600">
                  Engage with hands-on projects, quizzes, and assessments to reinforce your learning.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Courses */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CourseList title="Featured Courses" courses={featuredCourses} />
            <CourseList title="Popular Courses" courses={popularcourses} />
            <div className="mt-12 text-center">
              <Link to="/courses">
                <Button variant="outline" size="lg">
                  View All Courses
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">What Our Students Say</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Thousands of students have transformed their careers with Ignite Learn.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <p className="italic text-gray-600">
                  "The Web Development course helped me transition from a non-technical role to becoming a frontend developer in just 6 months. The projects were practical and built my confidence."
                </p>
                <div className="mt-4 flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-300"></div>
                  <div className="ml-3">
                    <h4 className="font-medium text-gray-900">Rachel Kim</h4>
                    <p className="text-sm text-gray-500">Frontend Developer</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <p className="italic text-gray-600">
                  "I've taken several data science courses, and Ignite Learn's was by far the most comprehensive. The instructor explained complex concepts in an easy-to-understand way."
                </p>
                <div className="mt-4 flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-300"></div>
                  <div className="ml-3">
                    <h4 className="font-medium text-gray-900">Thomas Rodriguez</h4>
                    <p className="text-sm text-gray-500">Data Analyst</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <p className="italic text-gray-600">
                  "The UI/UX Design course transformed how I approach design projects. The practical assignments and instructor feedback helped me build an impressive portfolio."
                </p>
                <div className="mt-4 flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-300"></div>
                  <div className="ml-3">
                    <h4 className="font-medium text-gray-900">Sofia Martinez</h4>
                    <p className="text-sm text-gray-500">UX Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-16 bg-primary-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white">Ready to start your learning journey?</h2>
            <p className="mt-4 text-lg text-primary-100 max-w-2xl mx-auto">
              Join thousands of students already learning on Ignite Learn.
            </p>
            <div className="mt-8">
              <Link to="/signup">
                <Button variant="secondary" size="lg">
                  Get Started For Free
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
