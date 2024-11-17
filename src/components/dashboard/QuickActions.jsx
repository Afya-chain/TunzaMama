// src/components/dashboard/QuickActions.jsx
import React from 'react';
import { Activity, Baby, Scale, Clock } from 'lucide-react';

const QuickAction = ({ icon: Icon, title, subtitle }) => (
  <button className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mb-2 mx-auto">
      <Icon className="w-5 h-5 text-purple-600" />
    </div>
    <div className="text-center">
      <div className="font-semibold text-gray-800">{title}</div>
      <div className="text-sm text-gray-600">{subtitle}</div>
    </div>
  </button>
);

const QuickActions = () => {
  const actions = [
    { icon: Activity, title: 'Track Symptoms', subtitle: 'Log how you feel' },
    { icon: Baby, title: 'Kick Counter', subtitle: 'Monitor movements' },
    { icon: Scale, title: 'Weight Log', subtitle: 'Track changes' },
    { icon: Clock, title: 'Medications', subtitle: 'View and track' }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
      {actions.map((action, index) => (
        <QuickAction key={index} {...action} />
      ))}
    </div>
  );
};

export default QuickActions;