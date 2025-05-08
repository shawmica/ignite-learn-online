import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CourseModuleSection from '@/components/course/CourseModuleSection';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Clock, Book, FileText, Check } from 'lucide-react';
import { toast } from 'sonner';

// Define the correct types for Lesson and Module
interface Lesson {
  id: string;
  title: string;
  duration: string;
  type: "video" | "document";
  isCompleted: boolean;
}

interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

// Sample course data
const courseData = {
  id: '1',
  title: 'Introduction to Web Development',
  description: 'Learn the basics of HTML, CSS, and JavaScript to build modern websites from scratch. This comprehensive course will take you from a beginner to being able to create your own responsive websites with modern design principles. By the end of this course, you\'ll have built multiple projects that you can add to your portfolio.',
  instructor: 'Sarah Johnson',
  instructorTitle: 'Senior Web Developer at Tech Co.',
  instructorBio: 'Sarah has over 8 years of experience as a web developer and has worked with companies like Google, Facebook, and Amazon. She\'s passionate about teaching and has helped over 10,000 students learn web development.',
  thumbnail: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
  duration: '12 hours',
  totalLessons: 24,
  progress: 65,
  enrolled: true,
  rating: 4.8,
  reviewCount: 354,
  modules: [
    {
      id: 'm1',
      title: 'Getting Started with HTML',
      lessons: [
        {
          id: 'l1',
          title: 'Introduction to HTML',
          duration: '10 min',
          type: "video" as const,
          isCompleted: true,
        },
        {
          id: 'l2',
          title: 'Basic HTML Tags',
          duration: '15 min',
          type: "video" as const,
          isCompleted: true,
        },
        {
          id: 'l3',
          title: 'HTML Document Structure',
          duration: '12 min',
          type: "video" as const,
          isCompleted: true,
        },
        {
          id: 'l4',
          title: 'HTML Exercise',
          duration: 'Exercise',
          type: "document" as const,
          isCompleted: true,
        },
      ],
    },
    {
      id: 'm2',
      title: 'CSS Fundamentals',
      lessons: [
        {
          id: 'l5',
          title: 'Introduction to CSS',
          duration: '14 min',
          type: "video" as const,
          isCompleted: true,
        },
        {
          id: 'l6',
          title: 'Selectors and Properties',
          duration: '18 min',
          type: "video" as const,
          isCompleted: true,
        },
        {
          id: 'l7',
          title: 'Box Model',
          duration: '16 min',
          type: "video" as const,
          isCompleted: true,
        },
        {
          id: 'l8',
          title: 'CSS Exercise',
          duration: 'Exercise',
          type: "document" as const,
          isCompleted: false,
        },
        {
          id: 'l9',
          title: 'CSS Quiz',
          duration: '10 questions',
          type: "document" as const,
          isCompleted: false,
        },
      ],
    },
    {
      id: 'm3',
      title: 'JavaScript Basics',
      lessons: [
        {
          id: 'l10',
          title: 'Introduction to JavaScript',
          duration: '15 min',
          type: "video" as const,
          isCompleted: false,
        },
        {
          id: 'l11',
          title: 'Variables and Data Types',
          duration: '20 min',
          type: "video" as const,
          isCompleted: false,
        },
        {
          id: 'l12',
          title: 'Functions and Control Flow',
          duration: '25 min',
          type: "video" as const,
          isCompleted: false,
        },
        {
          id: 'l13',
          title: 'DOM Manipulation',
          duration: '22 min',
          type: "video" as const,
          isCompleted: false,
        },
        {
          id: 'l14',
          title: 'JavaScript Exercise',
          duration: 'Exercise',
          type: "document" as const,
          isCompleted: false,
        },
      ],
    },
  ] as Module[],
};

// Mock video content
const videoContent = 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4';

const CourseDetail = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const [activeTab, setActiveTab] = useState('content');
  const [activeModuleId, setActiveModuleId] = useState('m1');
  const [activeLessonId, setActiveLessonId] = useState('l1');

  const handleSelectLesson = (moduleId: string, lessonId: string) => {
    setActiveModuleId(moduleId);
    setActiveLessonId(lessonId);
  };

  const handleCompleteLessonClick = () => {
    toast.success('Lesson marked as complete!', {
      description: 'Your progress has been updated.',
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Video Player */}
              <div className="bg-black rounded-lg overflow-hidden aspect-video mb-6">
                <video
                  src={videoContent}
                  controls
                  className="w-full h-full"
                  poster={courseData.thumbnail}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              
              {/* Lesson Title and Navigation */}
              <div className="bg-white rounded-lg shadow p-4 mb-6">
                <div className="flex justify-between items-center flex-wrap gap-4">
                  <h2 className="text-xl font-bold">
                    {courseData.modules.find(m => m.id === activeModuleId)?.lessons.find(l => l.id === activeLessonId)?.title || 'Lesson Title'}
                  </h2>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Previous</Button>
                    <Button variant="outline" size="sm">Next</Button>
                    <Button 
                      size="sm" 
                      onClick={handleCompleteLessonClick}
                      className="flex items-center"
                    >
                      <Check className="mr-1 h-4 w-4" /> Mark Complete
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Tabs for Content and Info */}
              <div className="bg-white rounded-lg shadow mb-6">
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="w-full">
                    <TabsTrigger value="content" className="flex-1">Lesson Content</TabsTrigger>
                    <TabsTrigger value="about" className="flex-1">About Course</TabsTrigger>
                  </TabsList>
                  <div className="p-6">
                    <TabsContent value="content">
                      <div className="prose max-w-none">
                        <h3>Lesson: Introduction to HTML</h3>
                        <p>
                          HTML (Hypertext Markup Language) is the standard markup language for documents designed to be displayed in a web browser. It defines the meaning and structure of web content.
                        </p>
                        <p>
                          In this lesson, we'll cover:
                        </p>
                        <ul>
                          <li>Basic structure of an HTML document</li>
                          <li>Common HTML elements and their purpose</li>
                          <li>How to create links and add images</li>
                          <li>Best practices for writing clean, semantic HTML</li>
                        </ul>
                        <p>
                          By the end of this lesson, you'll be able to create a simple webpage using HTML.
                        </p>
                        
                        <h4>Resources:</h4>
                        <ul>
                          <li>
                            <a href="#" className="text-primary-600 hover:underline flex items-center">
                              <FileText className="h-4 w-4 mr-1" /> HTML Cheat Sheet
                            </a>
                          </li>
                          <li>
                            <a href="#" className="text-primary-600 hover:underline flex items-center">
                              <FileText className="h-4 w-4 mr-1" /> Exercise Files
                            </a>
                          </li>
                        </ul>
                      </div>
                    </TabsContent>
                    <TabsContent value="about">
                      <div>
                        <h3 className="text-xl font-bold">Course Description</h3>
                        <p className="mt-2 text-gray-700">{courseData.description}</p>
                        
                        <div className="mt-6">
                          <h3 className="text-lg font-semibold">What You'll Learn</h3>
                          <ul className="mt-2 space-y-1">
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-green-500 mr-2" />
                              <span>Build responsive websites using HTML, CSS, and JavaScript</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-green-500 mr-2" />
                              <span>Understand web development fundamentals</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-green-500 mr-2" />
                              <span>Create modern user interfaces with CSS</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-green-500 mr-2" />
                              <span>Add interactivity to your websites with JavaScript</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="mt-6">
                          <h3 className="text-lg font-semibold">About the Instructor</h3>
                          <div className="mt-2 flex items-start">
                            <div className="h-12 w-12 rounded-full bg-gray-300"></div>
                            <div className="ml-3">
                              <h4 className="font-medium">{courseData.instructor}</h4>
                              <p className="text-sm text-gray-500">{courseData.instructorTitle}</p>
                              <p className="mt-1 text-sm text-gray-700">{courseData.instructorBio}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </div>
                </Tabs>
              </div>
            </div>
            
            {/* Sidebar - Course Progress and Modules */}
            <div>
              {/* Course Progress */}
              <div className="bg-white rounded-lg shadow p-5 mb-6">
                <h3 className="font-semibold">Course Progress</h3>
                <div className="mt-2">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Your progress</span>
                    <span>{courseData.progress}%</span>
                  </div>
                  <Progress value={courseData.progress} className="h-2" />
                </div>
                <div className="mt-4 flex justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{courseData.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Book className="h-4 w-4 mr-1" />
                    <span>{courseData.totalLessons} lessons</span>
                  </div>
                </div>
              </div>
              
              {/* Course Modules */}
              <div className="sticky top-4">
                <h3 className="font-semibold mb-3">Course Content</h3>
                <CourseModuleSection 
                  modules={courseData.modules}
                  onSelectLesson={handleSelectLesson}
                  activeModuleId={activeModuleId}
                  activeLessonId={activeLessonId}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CourseDetail;
