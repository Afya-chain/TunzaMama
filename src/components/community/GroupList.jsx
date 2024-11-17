// src/components/community/GroupList.jsx
import React from 'react';
import { Users } from 'lucide-react';

const GroupCard = ({ icon, title, members }) => (
  <div className="bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-all">
    <div className="flex items-center space-x-4">
      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
        <span className="text-2xl">{icon}</span>
      </div>
      <div>
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500">{members} members</p>
      </div>
    </div>
  </div>
);

const GroupList = () => {
  const groups = [
    { icon: '👶', title: 'First Time Moms', members: 326 },
    { icon: '🏥', title: 'Nairobi Moms', members: 1245 },
    { icon: '🌟', title: 'Natural Birth', members: 528 }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-800 flex items-center">
          <Users className="w-6 h-6 mr-2 text-purple-600" />
          My Groups
        </h2>
        <button className="text-purple-600 hover:text-purple-700 font-medium">
          View All
        </button>
      </div>
      <div className="space-y-4">
        {groups.map((group, index) => (
          <GroupCard key={index} {...group} />
        ))}
      </div>
    </div>
  );
};

export default GroupList;