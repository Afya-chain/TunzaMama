// src/components/emergency/EmergencyQuickActions.jsx
import React from 'react';
import { MapPin, Share2, Download, Printer } from 'lucide-react';

const ActionButton = ({ icon: Icon, label, onClick, variant = 'primary' }) => {
  const baseStyles = "flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium transition-colors";
  const variants = {
    primary: "bg-red-600 text-white hover:bg-red-700",
    secondary: "bg-gray-100 text-gray-700 hover:bg-gray-200"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]}`}
      onClick={onClick}
    >
      <Icon className="w-5 h-5" />
      {label}
    </button>
  );
};

const EmergencyQuickActions = () => {
  const actions = [
    {
      icon: MapPin,
      label: 'Find Nearest Hospital',
      variant: 'primary',
      onClick: () => console.log('Finding nearest hospital')
    },
    {
      icon: Share2,
      label: 'Share Location',
      variant: 'primary',
      onClick: () => console.log('Sharing location')
    },
    {
      icon: Download,
      label: 'Download Info',
      variant: 'secondary',
      onClick: () => console.log('Downloading info')
    },
    {
      icon: Printer,
      label: 'Print Details',
      variant: 'secondary',
      onClick: () => console.log('Printing details')
    }
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {actions.map((action, index) => (
          <ActionButton key={index} {...action} />
        ))}
      </div>
    </div>
  );
};

export default EmergencyQuickActions;