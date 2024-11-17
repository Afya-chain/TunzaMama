// src/components/pregnancy-guide/ResourceSection.jsx
import React from 'react';
import { Play, FileText, Target } from 'lucide-react';

const ResourceSection = () => {
  const resources = [
    {
      icon: Play,
      type: 'Video Guide',
      title: 'Week 24 Development',
      action: 'Watch Now'
    },
    {
      icon: FileText,
      type: 'Article',
      title: 'Nutrition Tips',
      action: 'Read More'
    },
    {
      icon: Target,
      type: 'Exercise',
      title: 'Safe Workouts',
      action: 'Start Now'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Additional Resources</h2>
      <div className="grid grid-cols-3 gap-4">
        {resources.map((resource, index) => {
          const Icon = resource.icon;
          return (
            <button 
              key={index} 
              className="text-left p-4 rounded-lg hover:bg-purple-50 transition-colors"
            >
              <Icon className="w-6 h-6 text-purple-600 mb-2" />
              <div className="text-sm text-purple-600">{resource.type}</div>
              <div className="font-medium text-gray-800 mb-2">{resource.title}</div>
              <div className="text-sm text-purple-600">{resource.action} →</div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ResourceSection;