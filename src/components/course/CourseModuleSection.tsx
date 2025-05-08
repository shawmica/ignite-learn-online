
import React, { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Check, Play, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Lesson {
  id: string;
  title: string;
  duration: string;
  type: 'video' | 'document';
  isCompleted?: boolean;
}

interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

interface CourseModuleSectionProps {
  modules: Module[];
  onSelectLesson: (moduleId: string, lessonId: string) => void;
  activeModuleId?: string;
  activeLessonId?: string;
}

const LessonIcon = ({ type, isCompleted }: { type: 'video' | 'document', isCompleted?: boolean }) => {
  if (isCompleted) {
    return <Check className="w-4 h-4 text-green-500" />;
  }
  
  return type === 'video' 
    ? <Play className="w-4 h-4 text-primary-400" />
    : <FileText className="w-4 h-4 text-primary-400" />;
};

const CourseModuleSection = ({ 
  modules, 
  onSelectLesson, 
  activeModuleId, 
  activeLessonId 
}: CourseModuleSectionProps) => {
  const [openItems, setOpenItems] = useState<string[]>([activeModuleId || '']);
  
  const handleToggle = (value: string) => {
    setOpenItems((prev) => 
      prev.includes(value)
        ? prev.filter(item => item !== value)
        : [...prev, value]
    );
  };
  
  return (
    <div className="bg-white rounded-md shadow">
      <Accordion 
        type="multiple" 
        value={openItems}
        className="w-full"
      >
        {modules.map(module => (
          <AccordionItem key={module.id} value={module.id}>
            <AccordionTrigger 
              onClick={() => handleToggle(module.id)}
              className="px-4 py-3 hover:bg-gray-50"
            >
              <div className="flex items-center text-left">
                <div>
                  <h4 className="font-medium text-gray-900">{module.title}</h4>
                  <p className="text-sm text-gray-500 mt-0.5">{module.lessons.length} lessons</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-3">
              <ul className="space-y-1">
                {module.lessons.map(lesson => (
                  <li key={lesson.id}>
                    <button
                      onClick={() => onSelectLesson(module.id, lesson.id)}
                      className={cn(
                        "w-full flex items-center justify-between px-3 py-2 rounded text-sm hover:bg-gray-50 transition-colors",
                        module.id === activeModuleId && lesson.id === activeLessonId
                          ? "bg-primary-100 text-primary-800"
                          : "text-gray-700"
                      )}
                    >
                      <div className="flex items-center">
                        <div className="mr-2">
                          <LessonIcon type={lesson.type} isCompleted={lesson.isCompleted} />
                        </div>
                        <span>{lesson.title}</span>
                      </div>
                      <span className="text-xs text-gray-500">{lesson.duration}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default CourseModuleSection;
