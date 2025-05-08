
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Book, Clock, Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const InstructorDashboard = () => {
  const navigate = useNavigate();
  const userString = localStorage.getItem('user');
  const user = userString ? JSON.parse(userString) : { firstName: 'Instructor' };

  // Mock instructor courses
  const instructorCourses = [
    {
      id: '1',
      title: 'Introduction to Web Development',
      students: 42,
      published: true,
      lastUpdated: '2023-09-15',
      thumbnail: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
    },
    {
      id: '2',
      title: 'Advanced JavaScript Concepts',
      students: 28,
      published: true,
      lastUpdated: '2023-10-20',
      thumbnail: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
    },
    {
      id: '3',
      title: 'Responsive UI Design',
      students: 15,
      published: false,
      lastUpdated: '2023-11-05',
      thumbnail: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Welcome, {user.firstName}
              </h1>
              <p className="mt-1 text-gray-600">Manage your courses and students</p>
            </div>
            <Button onClick={() => navigate('/create-course')}>
              Create New Course
            </Button>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">
                  Total Courses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{instructorCourses.length}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">
                  Total Students
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">
                  {instructorCourses.reduce((acc, course) => acc + course.students, 0)}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">
                  Published Courses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">
                  {instructorCourses.filter(course => course.published).length}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">
                  Draft Courses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">
                  {instructorCourses.filter(course => !course.published).length}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Courses Table */}
          <div className="bg-white shadow rounded-lg overflow-hidden mb-8">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800">Your Courses</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Course
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Students
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Last Updated
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {instructorCourses.map((course) => (
                    <tr key={course.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-10 w-16 flex-shrink-0 bg-gray-300 rounded overflow-hidden">
                            <img src={course.thumbnail} alt={course.title} className="h-full w-full object-cover" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{course.title}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{course.students} students</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          course.published ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {course.published ? 'Published' : 'Draft'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {course.lastUpdated}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Button variant="outline" size="sm" className="mr-2" onClick={() => navigate(`/edit-course/${course.id}`)}>
                          Edit
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => navigate(`/course-students/${course.id}`)}>
                          Students
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InstructorDashboard;
