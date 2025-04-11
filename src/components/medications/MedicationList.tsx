
import React from 'react';
import { Medication } from '@/types/medication';
import MedicationCard from './MedicationCard';

interface MedicationListProps {
  medications: Medication[];
  onMarkAsTaken: (id: string) => void;
}

const MedicationList: React.FC<MedicationListProps> = ({ medications, onMarkAsTaken }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {medications.map(medication => (
        <MedicationCard 
          key={medication.id} 
          medication={medication} 
          onMarkAsTaken={onMarkAsTaken} 
        />
      ))}
    </div>
  );
};

export default MedicationList;
