
export interface Medication {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  time: string;
  notes?: string;
  status: 'taken' | 'missed' | 'upcoming';
  refillReminder?: boolean;
  refillDate?: string;
}
