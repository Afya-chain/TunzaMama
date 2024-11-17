// src/components/health-records/RecordsList.jsx
import React, { useState } from 'react';
import { Plus, Activity, FileText, Heart } from 'lucide-react';
import RecordCard from './RecordCard.jsx';

const TabButton = ({ active, children, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
      active 
        ? 'bg-purple-100 text-purple-700' 
        : 'text-gray-600 hover:bg-gray-100'
    }`}
  >
    {children}
  </button>
);

const FilterButton = ({ active, children, onClick }) => (
  <button
    onClick={onClick}
    className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
      active 
        ? 'bg-purple-100 text-purple-700' 
        : 'text-gray-600 hover:bg-gray-100'
    }`}
  >
    {children}
  </button>
);

const RecordsList = () => {
  const [activeTab, setActiveTab] = useState('results');
  const [activeFilter, setActiveFilter] = useState('all');

  const mockRecords = [
    {
      type: 'test',
      icon: Activity,
      title: 'Complete Blood Count',
      date: 'October 25, 2024',
      status: 'normal',
      results: [
        { label: 'Hemoglobin', value: '12.5 g/dL' },
        { label: 'Blood Sugar', value: '95 mg/dL' }
      ]
    },
    {
      type: 'test',
      icon: Heart,
      title: 'Blood Pressure Log',
      date: 'October 23, 2024',
      status: 'attention',
      results: [
        { label: 'Morning', value: '120/80 mmHg' },
        { label: 'Evening', value: '118/78 mmHg' }
      ]
    },
    {
      type: 'document',
      icon: FileText,
      title: 'Ultrasound Report',
      date: 'October 20, 2024',
      status: 'normal'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">Health Records</h2>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 flex items-center">
          <Plus className="w-4 h-4 mr-2" />
          Add Record
        </button>
      </div>

      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-2">
          <TabButton 
            active={activeTab === 'results'} 
            onClick={() => setActiveTab('results')}
          >
            Test Results
          </TabButton>
          <TabButton 
            active={activeTab === 'appointments'} 
            onClick={() => setActiveTab('appointments')}
          >
            Appointments
          </TabButton>
          <TabButton 
            active={activeTab === 'documents'} 
            onClick={() => setActiveTab('documents')}
          >
            Documents
          </TabButton>
        </div>

        <div className="flex space-x-2">
          <FilterButton 
            active={activeFilter === 'all'} 
            onClick={() => setActiveFilter('all')}
          >
            All Records
          </FilterButton>
          <FilterButton 
            active={activeFilter === 'month'} 
            onClick={() => setActiveFilter('month')}
          >
            Last Month
          </FilterButton>
          <FilterButton 
            active={activeFilter === 'important'} 
            onClick={() => setActiveFilter('important')}
          >
            Important
          </FilterButton>
        </div>
      </div>

      <div className="space-y-4">
        {mockRecords.map((record, index) => (
          <RecordCard 
            key={index} 
            {...record}
            onView={() => console.log('View details', record.title)}
            onShare={() => console.log('Share', record.title)}
          />
        ))}
      </div>
    </div>
  );
};

export default RecordsList;