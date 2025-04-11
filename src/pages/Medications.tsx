
import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Medication } from '@/types/medication';
import MedicationSearch from '@/components/medications/MedicationSearch';
import MedicationTabs from '@/components/medications/MedicationTabs';

const Medications = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  
  const [medications, setMedications] = useState<Medication[]>([
    {
      id: '1',
      name: 'Lisinopril',
      dosage: '10mg',
      frequency: 'Daily',
      time: '8:00 AM',
      notes: 'Take with food',
      status: 'taken',
    },
    {
      id: '2',
      name: 'Metoprolol',
      dosage: '25mg',
      frequency: 'Twice daily',
      time: '1:00 PM',
      status: 'upcoming',
      refillReminder: true,
      refillDate: '04/25/2025',
    },
    {
      id: '3',
      name: 'Atorvastatin',
      dosage: '20mg',
      frequency: 'Daily',
      time: '9:00 PM',
      notes: 'Take at bedtime',
      status: 'upcoming',
    },
    {
      id: '4',
      name: 'Vitamin D',
      dosage: '1000 IU',
      frequency: 'Daily',
      time: '8:00 AM',
      status: 'taken',
    },
    {
      id: '5',
      name: 'Aspirin',
      dosage: '81mg',
      frequency: 'Daily',
      time: '8:00 AM',
      status: 'taken',
    }
  ]);

  const handleMarkAsTaken = (id: string) => {
    setMedications(
      medications.map(med => 
        med.id === id ? { ...med, status: 'taken' as const } : med
      )
    );
    
    toast({
      title: "Medication taken",
      description: "Great job following your medication schedule!",
    });
  };

  const filteredMedications = medications.filter(med => 
    med.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container px-4 py-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Medications</h1>
          <p className="text-muted-foreground">
            Track and manage your medication schedule.
          </p>
        </div>
        <Button className="btn-guardian">
          <PlusCircle className="mr-2 h-4 w-4" />
          Add New Medication
        </Button>
      </div>

      <MedicationSearch 
        searchTerm={searchTerm} 
        onSearchChange={setSearchTerm} 
      />

      <MedicationTabs 
        medications={filteredMedications}
        onMarkAsTaken={handleMarkAsTaken}
      />
    </div>
  );
};

export default Medications;
