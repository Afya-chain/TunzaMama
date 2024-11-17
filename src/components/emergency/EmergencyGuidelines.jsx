// src/components/emergency/EmergencyGuidelines.jsx
import React from 'react';
import { AlertTriangle, Info } from 'lucide-react';

const WarningSign = ({ sign, description }) => (
  <div className="bg-orange-50 p-4 rounded-lg">
    <h4 className="font-semibold text-orange-700 mb-1">{sign}</h4>
    <p className="text-sm text-orange-600">{description}</p>
  </div>
);

const Guideline = ({ title, content }) => (
  <div className="border-l-4 border-blue-500 pl-4 py-2">
    <h4 className="font-semibold text-gray-800 mb-1">{title}</h4>
    <p className="text-sm text-gray-600">{content}</p>
  </div>
);

const EmergencyGuidelines = () => {
  const warningSignsData = [
    {
      sign: 'Severe Abdominal Pain',
      description: 'Persistent or severe pain in your abdomen'
    },
    {
      sign: 'Vaginal Bleeding',
      description: 'Any vaginal bleeding during pregnancy'
    },
    {
      sign: 'Reduced Movement',
      description: 'Significant decrease in baby\'s movement'
    },
    {
      sign: 'Severe Headache',
      description: 'Persistent headache with vision changes'
    }
  ];

  const guidelinesData = [
    {
      title: 'Stay Calm',
      content: 'Take deep breaths and try to remain as calm as possible'
    },
    {
      title: 'Call for Help',
      content: 'Contact emergency services or your healthcare provider immediately'
    },
    {
      title: 'Document Symptoms',
      content: 'Note down when symptoms started and their severity'
    }
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
      <div className="flex items-center gap-2 mb-6">
        <AlertTriangle className="w-6 h-6 text-orange-500" />
        <h2 className="text-xl font-bold text-gray-800">Warning Signs & Guidelines</h2>
      </div>

      {/* Warning Signs */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Warning Signs to Watch For</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {warningSignsData.map((item, index) => (
            <WarningSign key={index} {...item} />
          ))}
        </div>
      </div>

      {/* Guidelines */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">What to Do in an Emergency</h3>
        <div className="space-y-4">
          {guidelinesData.map((item, index) => (
            <Guideline key={index} {...item} />
          ))}
        </div>
      </div>

      {/* Important Note */}
      <div className="mt-6 bg-blue-50 p-4 rounded-lg flex gap-3">
        <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-blue-700">
          Always err on the side of caution. If you're unsure about any symptoms, 
          it's better to contact your healthcare provider for guidance.
        </p>
      </div>
    </div>
  );
};

export default EmergencyGuidelines;