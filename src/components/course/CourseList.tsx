
import React from 'react';
import CourseCard from './CourseCard';

interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  thumbnail: string;
  duration: string;
  totalLessons: number;
  progress?: number;
}

interface CourseListProps {
  title: string;
  courses: Course[];
}

const CourseList = ({ title, courses }: CourseListProps) => {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            id={course.id}
            title={course.title}
            description={course.description}
            instructor={course.instructor}
            thumbnail={course.thumbnail}
            duration={course.duration}
            totalLessons={course.totalLessons}
            progress={course.progress}
          />
        ))}
      </div>
    </div>
  );
};

export default CourseList;
