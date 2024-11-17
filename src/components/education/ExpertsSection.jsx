// src/components/education/ExpertsSection.jsx
import React from 'react';
import { Award } from 'lucide-react';

const ExpertCard = ({ avatar, name, title, badges }) => (
  <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all">
    <div className="flex items-start space-x-4">
      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-3xl">
        {avatar}
      </div>
      <div>
        <h3 className="font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-500 mb-3">{title}</p>
        <div className="flex space-x-2">
          {badges.map((badge, index) => (
            <div 
              key={index}
              className="w-8 h-8 bg-purple-50 rounded-full flex items-center justify-center text-xl"
            >
              {badge}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const ExpertsSection = () => {
  const experts = [
    {
      avatar: '👩‍⚕️',
      name: 'Dr. Sarah Johnson',
      title: 'OB/GYN Specialist',
      badges: ['🏆', '⭐', '📚']
    },
    {
      avatar: '👩‍⚕️',
      name: 'Nurse Mary Williams',
      title: 'Midwife Specialist',
      badges: ['🏆', '💝', '📚']
    }
  ];

  return (
    <div className="mb-12">
      <div className="flex items-center mb-6">
        <Award className="w-6 h-6 text-purple-600 mr-2" />
        <h2 className="text-xl font-bold text-gray-800">Learn from Experts</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {experts.map((expert, index) => (
          <ExpertCard key={index} {...expert} />
        ))}
      </div>
    </div>
  );
};

export default ExpertsSection;