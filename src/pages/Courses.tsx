
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CourseCard from '@/components/course/CourseCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search } from 'lucide-react';

// Sample courses data
const allCourses = [
  {
    id: '1',
    title: 'Introduction to Web Development',
    description: 'Learn the basics of HTML, CSS, and JavaScript to build modern websites from scratch.',
    instructor: 'Sarah Johnson',
    thumbnail: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
    duration: '12 hours',
    totalLessons: 24,
    category: 'web',
  },
  {
    id: '2',
    title: 'Data Science Fundamentals',
    description: 'Discover how to analyze and interpret complex data using Python and popular libraries.',
    instructor: 'Michael Chen',
    thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
    duration: '15 hours',
    totalLessons: 30,
    category: 'data',
  },
  {
    id: '3',
    title: 'UI/UX Design Principles',
    description: 'Master the fundamental principles of creating user-friendly and visually appealing interfaces.',
    instructor: 'Alex Thompson',
    thumbnail: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
    duration: '10 hours',
    totalLessons: 18,
    category: 'design',
  },
  {
    id: '4',
    title: 'Python Programming Masterclass',
    description: 'Comprehensive course covering Python from basics to advanced concepts with real-world projects.',
    instructor: 'David Wilson',
    thumbnail: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
    duration: '20 hours',
    totalLessons: 42,
    category: 'programming',
  },
  {
    id: '5',
    title: 'Digital Marketing Strategies',
    description: 'Learn proven marketing techniques to grow your business online and reach more customers.',
    instructor: 'Emma Roberts',
    thumbnail: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
    duration: '8 hours',
    totalLessons: 16,
    category: 'marketing',
  },
  {
    id: '6',
    title: 'Mobile App Development with React Native',
    description: 'Build cross-platform mobile applications for iOS and Android using React Native framework.',
    instructor: 'James Lee',
    thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
    duration: '18 hours',
    totalLessons: 32,
    category: 'mobile',
  },
  {
    id: '7',
    title: 'JavaScript for Beginners',
    description: 'Start your programming journey with JavaScript, the language of the web.',
    instructor: 'Lisa Wong',
    thumbnail: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
    duration: '10 hours',
    totalLessons: 22,
    category: 'web',
  },
  {
    id: '8',
    title: 'Advanced CSS and Sass',
    description: 'Take your CSS skills to the next level with advanced techniques and Sass.',
    instructor: 'Thomas Brown',
    thumbnail: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
    duration: '12 hours',
    totalLessons: 25,
    category: 'web',
  },
];

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredCourses = allCourses.filter(course => {
    return (
      (activeCategory === 'all' || course.category === activeCategory) &&
      (searchQuery === '' || 
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Explore Our Courses</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Discover a wide range of courses designed to help you master new skills and advance your career.
            </p>
          </div>
          
          {/* Search and Filter */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input 
                  type="search"
                  placeholder="Search for courses..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                />
              </div>
              <div>
                <Button onClick={() => setSearchQuery('')} variant="outline">Clear</Button>
              </div>
            </div>
          </div>
          
          {/* Category Tabs */}
          <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory} className="mb-6">
            <TabsList className="grid grid-cols-4 md:grid-cols-7 w-full">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="web">Web</TabsTrigger>
              <TabsTrigger value="programming">Programming</TabsTrigger>
              <TabsTrigger value="design">Design</TabsTrigger>
              <TabsTrigger value="data">Data</TabsTrigger>
              <TabsTrigger value="marketing">Marketing</TabsTrigger>
              <TabsTrigger value="mobile">Mobile</TabsTrigger>
            </TabsList>
          </Tabs>
          
          {/* Course Cards Grid */}
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  id={course.id}
                  title={course.title}
                  description={course.description}
                  instructor={course.instructor}
                  thumbnail={course.thumbnail}
                  duration={course.duration}
                  totalLessons={course.totalLessons}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium text-gray-600">No courses found</h3>
              <p className="mt-2 text-gray-500">Try adjusting your search or filter criteria</p>
              <Button variant="outline" className="mt-4" onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}>
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Courses;
