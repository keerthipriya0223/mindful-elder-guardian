
import React from 'react';
import { 
  Clock, 
  Calendar, 
  AlertTriangle,
  CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Medication } from '@/types/medication';

interface MedicationCardProps {
  medication: Medication;
  onMarkAsTaken: (id: string) => void;
}

const statusColorMap = {
  taken: 'bg-guardian-success/20 text-guardian-success',
  missed: 'bg-guardian-emergency/20 text-guardian-emergency',
  upcoming: 'bg-blue-100 text-blue-800',
};

const MedicationCard: React.FC<MedicationCardProps> = ({ medication, onMarkAsTaken }) => {
  return (
    <Card key={medication.id} className="card-guardian">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-semibold">{medication.name}</CardTitle>
          <Badge className={statusColorMap[medication.status]}>
            {medication.status.charAt(0).toUpperCase() + medication.status.slice(1)}
          </Badge>
        </div>
        <div className="text-sm text-muted-foreground">{medication.dosage}</div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{medication.frequency}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{medication.time}</span>
          </div>
          {medication.notes && (
            <div className="text-sm text-muted-foreground">
              Note: {medication.notes}
            </div>
          )}
          {medication.refillReminder && (
            <div className="flex items-center gap-2 text-amber-600">
              <AlertTriangle className="h-4 w-4" />
              <span className="text-sm">Refill by {medication.refillDate}</span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        {medication.status !== 'taken' && (
          <Button 
            className="w-full btn-guardian"
            onClick={() => onMarkAsTaken(medication.id)}
          >
            <CheckCircle2 className="mr-2 h-4 w-4" />
            Mark as Taken
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default MedicationCard;
