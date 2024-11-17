// src/components/dashboard/ProgressTracker.jsx
import React from 'react';
import { Baby } from 'lucide-react';

const ProgressTracker = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
      <div className="flex justify-between items-start mb-6">
        <div>
          <div className="text-2xl font-bold text-purple-600">Week 24</div>
          <div className="text-gray-600">Second Trimester</div>
        </div>
        <div className="text-right">
          <div className="text-gray-600">Due Date: February 15, 2025</div>
          <div className="text-sm text-gray-500">Last Updated: 2 hours ago</div>
        </div>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
        <div 
          className="bg-purple-600 h-2.5 rounded-full transition-all duration-300" 
          style={{ width: '60%' }} 
        />
      </div>
      
      <div className="flex items-center justify-center space-x-2 text-gray-600">
        <Baby className="w-5 h-5" />
        <span>Your baby is now the size of a corn 🌽</span>
      </div>
    </div>
  );
};

export default ProgressTracker;