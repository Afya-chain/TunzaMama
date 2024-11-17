// src/components/community/PopularTopics.jsx
import React from 'react';
import { Hash } from 'lucide-react';

const TopicTag = ({ name }) => (
  <button className="px-4 py-2 bg-purple-50 text-purple-600 rounded-full hover:bg-purple-100 transition-colors">
    #{name}
  </button>
);

const PopularTopics = () => {
  const topics = [
    'FirstTrimester',
    'MorningTips',
    'NutritionAdvice',
    'Exercise',
    'BirthStories',
    'PregnancyHealth',
    'BabyGear'
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
      <div className="flex items-center mb-6">
        <Hash className="w-6 h-6 mr-2 text-purple-600" />
        <h2 className="text-xl font-bold text-gray-800">Popular Topics</h2>
      </div>
      <div className="flex flex-wrap gap-2">
        {topics.map((topic, index) => (
          <TopicTag key={index} name={topic} />
        ))}
      </div>
    </div>
  );
};

export default PopularTopics;