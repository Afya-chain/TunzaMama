// src/components/pregnancy-guide/WeekSelector.jsx
import React from 'react';

const WeekSelector = ({ currentWeek }) => {
  const trimesterWeeks = [
    { title: 'First Trimester', weeks: ['1-4', '5-8', '9-13'] },
    { title: 'Second Trimester', weeks: ['14-17', '18-22', '24', '25-27'] },
    { title: 'Third Trimester', weeks: ['28-31', '32-35', '36-40'] }
  ];

  return (
    <div className="w-64 bg-white rounded-xl shadow-sm p-4">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Pregnancy Timeline</h2>
      {trimesterWeeks.map((trimester, idx) => (
        <div key={idx} className="mb-4">
          <div className="text-sm font-semibold text-purple-600 mb-2">
            {trimester.title}
          </div>
          {trimester.weeks.map((week) => (
            <button
              key={week}
              className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                week === currentWeek 
                  ? 'bg-purple-100 text-purple-700 font-medium'
                  : 'hover:bg-gray-50 text-gray-600'
              }`}
            >
              Week {week}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default WeekSelector;