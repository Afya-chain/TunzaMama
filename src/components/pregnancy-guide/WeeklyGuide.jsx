// src/components/pregnancy-guide/WeeklyGuide.jsx
import React from 'react';
import WeekSelector from './WeekSelector.jsx';
import DevelopmentMilestones from './DevelopmentMilestones.jsx';
import WeeklyChecklist from './WeeklyChecklist.jsx';
import ResourceSection from './ResourceSection.jsx';

const WeeklyGuide = () => {
  return (
    <div className="flex gap-8">
      <WeekSelector currentWeek="24" />
      <div className="flex-1">
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Week 24: Your Baby's Development
          </h1>
          <p className="text-gray-600 mb-6">
            Your baby's facial features are becoming more defined. The inner ear is now developed 
            enough to start functioning, and your baby may be able to hear your voice!
          </p>
        </div>
        <DevelopmentMilestones />
        <WeeklyChecklist />
        <ResourceSection />
      </div>
    </div>
  );
};

export default WeeklyGuide;