
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface Reminder {
  id: string;
  title: string;
  time: string;
  type: 'medication' | 'task' | 'appointment';
  status: 'upcoming' | 'overdue' | 'completed';
}

interface ReminderCardProps {
  reminder: Reminder;
  onComplete: (id: string) => void;
  className?: string;
}

const ReminderCard: React.FC<ReminderCardProps> = ({
  reminder,
  onComplete,
  className,
}) => {
  const { id, title, time, type, status } = reminder;

  const statusStyles = {
    upcoming: 'bg-blue-100 text-blue-800',
    overdue: 'bg-guardian-emergency/20 text-guardian-emergency',
    completed: 'bg-guardian-success/20 text-guardian-success',
  };

  const typeLabels = {
    medication: 'Medicine',
    task: 'Task',
    appointment: 'Appointment',
  };

  const typeStyles = {
    medication: 'bg-guardian-purple/20 text-guardian-purple',
    task: 'bg-amber-100 text-amber-800',
    appointment: 'bg-indigo-100 text-indigo-800',
  };

  return (
    <Card className={cn('card-guardian', className)}>
      <CardHeader className="flex flex-row items-start justify-between pb-2">
        <div>
          <CardTitle className="text-base font-medium">{title}</CardTitle>
          <div className="flex items-center gap-1 mt-1">
            <Clock className="h-3 w-3 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">{time}</span>
          </div>
        </div>
        <div className="flex gap-2">
          <Badge className={cn('text-xs', typeStyles[type])}>
            {typeLabels[type]}
          </Badge>
          <Badge className={cn('text-xs', statusStyles[status])}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-2">
        {status !== 'completed' && (
          <Button 
            size="sm" 
            onClick={() => onComplete(id)}
            className="w-full mt-2 bg-guardian-purple hover:bg-guardian-dark-purple"
          >
            <CheckCircle2 className="mr-2 h-4 w-4" />
            Mark as Done
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default ReminderCard;
