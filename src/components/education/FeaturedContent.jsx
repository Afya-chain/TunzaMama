// src/components/education/FeaturedContent.jsx
import React, { useState } from 'react';
import { Play, FileText, Layout } from 'lucide-react';

const FilterPill = ({ active, children, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
      active
        ? 'bg-purple-100 text-purple-700'
        : 'text-gray-600 hover:bg-gray-100'
    }`}
  >
    {children}
  </button>
);

const ContentCard = ({ type, image, title, duration }) => {
  const icons = {
    Video: Play,
    Article: FileText,
    Interactive: Layout
  };
  const Icon = icons[type] || FileText;

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all">
      <div className="h-40 bg-purple-100 flex items-center justify-center text-4xl">
        {image}
      </div>
      <div className="p-4">
        <div className="flex items-center text-sm text-purple-600 mb-2">
          <Icon className="w-4 h-4 mr-1" />
          {type}
        </div>
        <h3 className="font-semibold text-gray-800 mb-1">{title}</h3>
        <p className="text-sm text-gray-500">{duration}</p>
      </div>
    </div>
  );
};

const FeaturedContent = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const content = [
    {
      type: 'Video',
      image: '📺',
      title: 'Understanding Your First Trimester',
      duration: '15 min watch'
    },
    {
      type: 'Article',
      image: '📝',
      title: 'Essential Nutrients During Pregnancy',
      duration: '10 min read'
    },
    {
      type: 'Interactive',
      image: '🎮',
      title: 'Baby Development Timeline',
      duration: 'Interactive Guide'
    }
  ];

  return (
    <div className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">Featured Content</h2>
        <button className="text-purple-600 hover:text-purple-700 font-medium">
          View All
        </button>
      </div>

      <div className="flex space-x-2 mb-6">
        {['All', 'Videos', 'Articles', 'Interactive Guides'].map((filter) => (
          <FilterPill
            key={filter}
            active={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </FilterPill>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {content.map((item, index) => (
          <ContentCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedContent;