// src/components/pregnancy-guide/WeeklyChecklist.jsx
import React from 'react';

const WeeklyChecklist = () => {
  const tasks = [
    { id: 1, text: 'Take prenatal vitamins', completed: true },
    { id: 2, text: 'Record baby movements', completed: false },
    { id: 3, text: 'Schedule glucose screening test', completed: false },
    { id: 4, text: 'Start planning nursery', completed: false }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Weekly Checklist</h2>
      <div className="space-y-3">
        {tasks.map((task) => (
          <div key={task.id} className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={task.completed}
              className="w-5 h-5 text-purple-600 rounded border-gray-300 focus:ring-purple-500"
              readOnly
            />
            <span className={`${task.completed ? 'text-gray-400 line-through' : 'text-gray-700'}`}>
              {task.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyChecklist;