// src/components/emergency/EmergencyContainer.jsx
import React from 'react';
import EmergencyContacts from './EmergencyContacts.jsx';
import EmergencyGuidelines from './EmergencyGuidelines.jsx';
import EmergencyInformation from './EmergencyInformation.jsx';
import EmergencyQuickActions from './EmergencyQuickActions.jsx';

const EmergencyContainer = () => {
  console.log('Rendering EmergencyContainer'); // Debug log

  return (
    <div className="space-y-8">
      <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-lg font-medium text-red-800">Emergency Services</h3>
            <p className="text-red-700 mt-1">
              Call emergency services immediately if you experience any severe symptoms
            </p>
          </div>
        </div>
      </div>

      {/* Emergency Contacts */}
      <EmergencyContacts />

      {/* Quick Actions */}
      <EmergencyQuickActions />

      {/* Emergency Information */}
      <EmergencyInformation />

      {/* Guidelines */}
      <EmergencyGuidelines />
    </div>
  );
};

export default EmergencyContainer;