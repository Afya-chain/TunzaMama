// src/components/pregnancy-guide/DevelopmentMilestones.jsx
import React from 'react';
import { Baby, Scale, Heart } from 'lucide-react';

const DevelopmentMilestones = () => {
  const milestones = [
    {
      icon: Baby,
      title: 'Size',
      value: '30 centimeters',
      description: 'About the size of a corn'
    },
    {
      icon: Scale,
      title: 'Weight',
      value: '600 grams',
      description: 'Growing steadily'
    },
    {
      icon: Heart,
      title: 'Heart Rate',
      value: '120-160 bpm',
      description: 'Normal range'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Development Milestones</h2>
      <div className="grid grid-cols-3 gap-6">
        {milestones.map((milestone, index) => {
          const Icon = milestone.icon;
          return (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-800">{milestone.title}</h3>
              <div className="text-purple-600 font-bold">{milestone.value}</div>
              <p className="text-sm text-gray-500">{milestone.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DevelopmentMilestones;