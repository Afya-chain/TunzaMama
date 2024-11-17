// src/components/education/EducationContainer.jsx
import React from 'react';
import { Search } from 'lucide-react';
import LearningPaths from './LearningPaths.jsx';
import FeaturedContent from './FeaturedContent.jsx';
import ExpertsSection from './ExpertsSection.jsx';
import NextLessons from './NextLessons.jsx';

const SearchBar = () => (
  <div className="relative mb-8">
    <input
      type="text"
      placeholder="Search for topics, lessons, or experts..."
      className="w-full px-4 py-3 pl-12 bg-white rounded-xl shadow-sm focus:ring-2 focus:ring-purple-200 focus:border-purple-500 transition-all"
    />
    <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
  </div>
);

const EducationContainer = () => {
  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Educational Hub</h1>
        <p className="text-gray-600">Your comprehensive guide to pregnancy and motherhood</p>
      </div>

      {/* Search */}
      <SearchBar />

      {/* Learning Paths */}
      <LearningPaths />

      {/* Featured Content */}
      <FeaturedContent />

      {/* Experts Section */}
      <ExpertsSection />

      {/* Next Lessons */}
      <NextLessons />
    </div>
  );
};

export default EducationContainer;