
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CourseList from '@/components/course/CourseList';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

// Sample data for enrolled courses
const enrolledCourses = [
  {
    id: '1',
    title: 'Introduction to Web Development',
    description: 'Learn the basics of HTML, CSS, and JavaScript to build modern websites from scratch.',
    instructor: 'Sarah Johnson',
    thumbnail: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
    duration: '12 hours',
    totalLessons: 24,
    progress: 75,
  },
  {
    id: '2',
    title: 'Data Science Fundamentals',
    description: 'Discover how to analyze and interpret complex data using Python and popular libraries.',
    instructor: 'Michael Chen',
    thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
    duration: '15 hours',
    totalLessons: 30,
    progress: 40,
  },
  {
    id: '3',
    title: 'UI/UX Design Principles',
    description: 'Master the fundamental principles of creating user-friendly and visually appealing interfaces.',
    instructor: 'Alex Thompson',
    thumbnail: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
    duration: '10 hours',
    totalLessons: 18,
    progress: 20,
  },
];

// Sample data for learning stats
const weeklyLearningData = [
  { day: 'Mon', minutes: 30 },
  { day: 'Tue', minutes: 45 },
  { day: 'Wed', minutes: 60 },
  { day: 'Thu', minutes: 20 },
  { day: 'Fri', minutes: 50 },
  { day: 'Sat', minutes: 120 },
  { day: 'Sun', minutes: 90 },
];

const courseDistributionData = [
  { name: 'Web Development', value: 45 },
  { name: 'Data Science', value: 30 },
  { name: 'UI/UX Design', value: 25 },
];

const COLORS = ['#7E69AB', '#6E59A5', '#483591'];

const Dashboard = () => {
  // This would come from authentication in a real app
  const [userRole] = useState('student');
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          
          <Tabs defaultValue={userRole} className="mt-6">
            <TabsList className="grid w-full grid-cols-2 max-w-md">
              <TabsTrigger value="student">Student</TabsTrigger>
              <TabsTrigger value="instructor">Instructor</TabsTrigger>
            </TabsList>
            
            <div className="mt-6">
              {/* Student Dashboard */}
              <TabsContent value="student" className="space-y-8">
                {/* Overview Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-gray-500">Total Learning Time</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">24.5 hours</div>
                      <p className="text-sm text-green-600 mt-1">+2.5 hours this week</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-gray-500">Courses Enrolled</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">3 courses</div>
                      <p className="text-sm text-gray-500 mt-1">1 completed</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-gray-500">Certificates Earned</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">1</div>
                      <p className="text-sm text-purple-600 mt-1">2 in progress</p>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Learning Activity Chart */}
                <Card>
                  <CardHeader>
                    <CardTitle>Weekly Learning Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={weeklyLearningData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="day" />
                          <YAxis name="Minutes" />
                          <Tooltip />
                          <Line 
                            type="monotone" 
                            dataKey="minutes" 
                            stroke="#7E69AB" 
                            activeDot={{ r: 8 }}
                            name="Minutes"
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Course Distribution */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Course Distribution</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={courseDistributionData}
                              cx="50%"
                              cy="50%"
                              labelLine={false}
                              outerRadius={80}
                              fill="#8884d8"
                              dataKey="value"
                              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                            >
                              {courseDistributionData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                              ))}
                            </Pie>
                            <Tooltip />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Course Progress</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {enrolledCourses.map(course => (
                          <div key={course.id} className="space-y-2">
                            <div className="flex justify-between">
                              <span className="font-medium text-sm">{course.title}</span>
                              <span className="text-sm text-gray-500">{course.progress}%</span>
                            </div>
                            <Progress value={course.progress} className="h-2" />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Enrolled Courses */}
                <CourseList title="Your Enrolled Courses" courses={enrolledCourses} />
              </TabsContent>
              
              {/* Instructor Dashboard */}
              <TabsContent value="instructor">
                <div className="flex items-center justify-center h-64">
                  <div className="text-center">
                    <h3 className="text-xl font-medium text-gray-700">Instructor Dashboard</h3>
                    <p className="mt-2 text-gray-500">
                      This section is available for instructors. Please switch to an instructor account to access these features.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
