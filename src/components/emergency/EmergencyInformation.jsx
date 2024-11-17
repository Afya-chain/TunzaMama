// src/components/emergency/EmergencyInformation.jsx
import React from 'react';
import { FileText, User, Activity, AlertCircle } from 'lucide-react';

const InfoCard = ({ icon: Icon, title, content }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
        <Icon className="w-5 h-5 text-purple-600" />
      </div>
      <h3 className="font-semibold text-gray-800">{title}</h3>
    </div>
    <div className="space-y-2">
      {Object.entries(content).map(([key, value], index) => (
        <div key={index} className="flex justify-between text-sm">
          <span className="text-gray-600">{key}</span>
          <span className="font-medium text-gray-800">{value}</span>
        </div>
      ))}
    </div>
  </div>
);

const EmergencyInformation = () => {
  const personalInfo = {
    'Full Name': 'Sarah Johnson',
    'Blood Type': 'O+',
    'Age': '28',
    'Due Date': 'February 15, 2025'
  };

  const medicalInfo = {
    'Allergies': 'Penicillin',
    'Conditions': 'None',
    'Medications': 'Prenatal vitamins',
    'Insurance ID': 'INS123456789'
  };

  const emergencyContacts = {
    'Primary Contact': 'John Johnson (Husband)',
    'Phone': '+254 700 123 456',
    'Secondary': 'Mary Smith (Mother)',
    'Phone 2': '+254 700 987 654'
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <InfoCard 
        icon={User} 
        title="Personal Information" 
        content={personalInfo} 
      />
      <InfoCard 
        icon={Activity} 
        title="Medical Information" 
        content={medicalInfo} 
      />
      <InfoCard 
        icon={FileText} 
        title="Emergency Contacts" 
        content={emergencyContacts} 
      />
    </div>
  );
};

export default EmergencyInformation;