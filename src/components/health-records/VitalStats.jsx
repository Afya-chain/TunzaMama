// src/components/health-records/RecordCard.jsx
import React from 'react';
import { Activity, FileText, Download, Share2 } from 'lucide-react';

const RecordCard = ({ 
  type = 'test',
  icon: Icon = Activity,
  title, 
  date, 
  status = 'normal',
  results = [],
  onView,
  onShare
}) => {
  const getStatusColor = (status) => {
    const colors = {
      normal: 'bg-green-100 text-green-800',
      attention: 'bg-yellow-100 text-yellow-800',
      urgent: 'bg-red-100 text-red-800'
    };
    return colors[status] || colors.normal;
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4">
            <Icon className="w-5 h-5 text-purple-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">{title}</h3>
            <p className="text-sm text-gray-500">{date}</p>
          </div>
        </div>
        <span className={`px-2.5 py-1 rounded-full text-sm font-medium ${getStatusColor(status)}`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </div>

      {results.length > 0 && (
        <div className="grid grid-cols-2 gap-4 mb-4">
          {results.map((result, index) => (
            <div key={index} className="bg-gray-50 p-3 rounded-lg">
              <div className="text-sm text-gray-500">{result.label}</div>
              <div className="font-semibold text-gray-800">{result.value}</div>
            </div>
          ))}
        </div>
      )}

      <div className="flex justify-end space-x-2">
        <button 
          onClick={onView}
          className="px-4 py-2 text-sm font-medium text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
        >
          View Details
        </button>
        <button 
          onClick={onShare}
          className="px-4 py-2 text-sm font-medium text-purple-600 hover:bg-purple-50 rounded-lg transition-colors"
        >
          Share
        </button>
      </div>
    </div>
  );
};

export default RecordCard;