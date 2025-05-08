
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Book, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  instructor: string;
  thumbnail: string;
  duration: string;
  totalLessons: number;
  progress?: number;
}

const CourseCard = ({
  id,
  title,
  description,
  instructor,
  thumbnail,
  duration,
  totalLessons,
  progress,
}: CourseCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={thumbnail} 
          alt={title} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>
      <CardContent className="pt-6">
        <h3 className="text-xl font-bold tracking-tight text-gray-900 line-clamp-2">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">{instructor}</p>
        <p className="mt-2 text-sm text-gray-600 line-clamp-3">{description}</p>
        
        <div className="flex items-center mt-4 text-sm text-gray-500">
          <Clock className="h-4 w-4 mr-1" />
          <span>{duration}</span>
          <span className="mx-2">•</span>
          <Book className="h-4 w-4 mr-1" />
          <span>{totalLessons} lessons</span>
        </div>
        
        {progress !== undefined && (
          <div className="mt-4">
            <div className="flex justify-between text-sm mb-1">
              <span className="font-medium">Progress</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Link to={`/courses/${id}`} className="w-full">
          <Button className="w-full">
            {progress !== undefined && progress > 0 ? 'Continue Learning' : 'Start Course'}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
