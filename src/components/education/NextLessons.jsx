// src/components/education/NextLessons.jsx
import React from 'react';
import { ArrowRight } from 'lucide-react';

const LessonCard = ({ icon, tag, title, action }) => (
  <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all cursor-pointer">
    <div className="text-3xl mb-4">{icon}</div>
    <div className="text-sm text-purple-600 mb-2">{tag}</div>
    <h3 className="font-semibold text-gray-800 mb-2">{title}</h3>
    <div className="flex items-center text-purple-600 text-sm font-medium">
      {action}
      <ArrowRight className="w-4 h-4 ml-1" />
    </div>
  </div>
);

const NextLessons = () => {
  const lessons = [
    {
      icon: '🎯',
      tag: 'Week 24',
      title: 'Understanding Baby\'s Movement',
      action: 'Start Learning'
    },
    {
      icon: '💪',
      tag: 'Exercise',
      title: 'Safe Pregnancy Exercises',
      action: 'Continue Learning'
    },
    {
      icon: '🧘‍♀️',
      tag: 'Wellness',
      title: 'Prenatal Yoga Basics',
      action: 'Start Learning'
    }
  ];

  return (
    <div className="mb-12">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Your Next Lessons</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {lessons.map((lesson, index) => (
          <LessonCard key={index} {...lesson} />
        ))}
      </div>
    </div>
  );
};

export default NextLessons;