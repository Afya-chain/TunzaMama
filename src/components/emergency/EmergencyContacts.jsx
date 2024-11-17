// src/components/emergency/EmergencyContacts.jsx
import React from 'react';
import { Phone, Truck, Building2, AlertCircle } from 'lucide-react';

const EmergencyContacts = () => {
  const contacts = [
    {
      icon: Truck,
      label: 'Emergency Ambulance',
      number: '911',
      description: 'Available 24/7 for immediate medical assistance'
    },
    {
      icon: Building2,
      label: 'Hospital Emergency',
      number: '+254 700 123 456',
      description: 'Direct line to City Hospital Emergency Department'
    },
    {
      icon: Phone,
      label: 'On-Call Doctor',
      number: '+254 700 789 012',
      description: 'Your assigned doctor for urgent consultations'
    }
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
      <div className="flex items-center gap-2 mb-6">
        <AlertCircle className="w-6 h-6 text-red-600" />
        <h2 className="text-xl font-bold text-gray-800">Emergency Contacts</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {contacts.map((contact, index) => {
          const Icon = contact.icon;
          return (
            <button 
              key={index}
              className="bg-red-50 hover:bg-red-100 transition-colors p-6 rounded-xl text-left"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Icon className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{contact.label}</h3>
                  <div className="text-xl font-bold text-red-600 mb-1">{contact.number}</div>
                  <p className="text-sm text-gray-600">{contact.description}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default EmergencyContacts;