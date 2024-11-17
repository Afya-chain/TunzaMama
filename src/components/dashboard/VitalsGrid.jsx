// src/components/dashboard/VitalsGrid.jsx
import React from 'react';
import { Heart, Activity, Scale, Clock } from 'lucide-react';

const VitalCard = ({ icon: Icon, label, value, status }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm">
    <div className="flex items-center mb-2">
      <Icon className="w-5 h-5 text-purple-600 mr-2" />
      <span className="text-gray-600">{label}</span>
    </div>
    <div className="text-2xl font-bold mb-1">{value}</div>
    <div className="text-sm text-green-600">{status}</div>
  </div>
);

const VitalsGrid = () => {
  const vitals = [
    { icon: Heart, label: 'Blood Pressure', value: '120/80', status: 'Normal Range' },
    { icon: Activity, label: 'Heart Rate', value: '75 bpm', status: 'Normal Range' },
    { icon: Scale, label: 'Weight', value: '65 kg', status: '+0.5 kg this week' },
    { icon: Clock, label: 'Sleep', value: '7.5 hrs', status: 'Good' }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
      {vitals.map((vital, index) => (
        <VitalCard key={index} {...vital} />
      ))}
    </div>
  );
};

export default VitalsGrid;