// src/components/health-records/HealthRecordsContainer.jsx
import React from 'react';
import VitalStats from './VitalStats.jsx';
import RecordsList from './RecordsList.jsx';

const HealthRecordsContainer = () => {
  return (
    <div>
      <VitalStats />
      <RecordsList />
    </div>
  );
};

export default HealthRecordsContainer;