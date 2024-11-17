// src/components/education/LearningPath.jsx
import React from 'react';

const PathCard = ({ icon, title, description, progress }) => (
  <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all">
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-2xl">
        {icon}
      </div>
      <div className="ml-4">
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
      <div 
        className="bg-purple-600 h-2 rounded-full transition-all duration-300"
        style={{ width: `${progress}%` }}
      />
    </div>
    <div className="text-sm text-gray-600">{progress}% Complete</div>
  </div>
);

const LearningPaths = () => {
  const paths = [
    {
      icon: '📚',
      title: 'Pregnancy Basics',
      description: 'Essential knowledge for your pregnancy journey',
      progress: 75
    },
    {
      icon: '🍎',
      title: 'Nutrition Guide',
      description: 'Healthy eating for you and your baby',
      progress: 45
    },
    {
      icon: '🏃‍♀️',
      title: 'Exercise & Wellness',
      description: 'Safe activities during pregnancy',
      progress: 30
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {paths.map((path, index) => (
        <PathCard key={index} {...path} />
      ))}
    </div>
  );
};

export default LearningPaths;