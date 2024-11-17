// src/components/community/OnlineExperts.jsx
import React from 'react';
import { UserCheck } from 'lucide-react';

const ExpertCard = ({ avatar, name, title, isOnline }) => (
  <div className="flex items-center space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
    <div className="relative">
      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
        <span className="text-2xl">{avatar}</span>
      </div>
      {isOnline && (
        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></div>
      )}
    </div>
    <div>
      <h3 className="font-semibold text-gray-800">{name}</h3>
      <p className="text-sm text-gray-500">{title}</p>
    </div>
  </div>
);

const OnlineExperts = () => {
  const experts = [
    { avatar: '👩‍⚕️', name: 'Dr. Sarah Johnson', title: 'OB/GYN', isOnline: true },
    { avatar: '👩‍⚕️', name: 'Nurse Mary', title: 'Midwife', isOnline: true },
    { avatar: '👩‍⚕️', name: 'Dr. Emily Chen', title: 'Pediatrician', isOnline: false }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center mb-6">
        <UserCheck className="w-6 h-6 mr-2 text-purple-600" />
        <h2 className="text-xl font-bold text-gray-800">Online Experts</h2>
      </div>
      <div className="space-y-2">
        {experts.map((expert, index) => (
          <ExpertCard key={index} {...expert} />
        ))}
      </div>
    </div>
  );
};

export default OnlineExperts;