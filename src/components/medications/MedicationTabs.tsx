
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Medication } from '@/types/medication';
import MedicationList from './MedicationList';

interface MedicationTabsProps {
  medications: Medication[];
  onMarkAsTaken: (id: string) => void;
}

const MedicationTabs: React.FC<MedicationTabsProps> = ({ medications, onMarkAsTaken }) => {
  return (
    <Tabs defaultValue="all" className="mb-6">
      <TabsList>
        <TabsTrigger value="all">All</TabsTrigger>
        <TabsTrigger value="today">Today</TabsTrigger>
        <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
        <TabsTrigger value="taken">Taken</TabsTrigger>
      </TabsList>
      
      <TabsContent value="all" className="mt-4">
        <MedicationList 
          medications={medications}
          onMarkAsTaken={onMarkAsTaken}
        />
      </TabsContent>
      
      <TabsContent value="today" className="mt-4">
        <MedicationList 
          medications={medications.filter(med => med.time.includes('AM') || med.time.includes('PM'))}
          onMarkAsTaken={onMarkAsTaken}
        />
      </TabsContent>
      
      <TabsContent value="upcoming" className="mt-4">
        <MedicationList 
          medications={medications.filter(med => med.status === 'upcoming')}
          onMarkAsTaken={onMarkAsTaken}
        />
      </TabsContent>
      
      <TabsContent value="taken" className="mt-4">
        <MedicationList 
          medications={medications.filter(med => med.status === 'taken')}
          onMarkAsTaken={onMarkAsTaken}
        />
      </TabsContent>
    </Tabs>
  );
};

export default MedicationTabs;
