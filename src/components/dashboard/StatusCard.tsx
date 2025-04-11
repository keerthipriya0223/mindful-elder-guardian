
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface StatusCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  status?: 'default' | 'warning' | 'danger' | 'success';
  className?: string;
}

const StatusCard: React.FC<StatusCardProps> = ({
  title,
  value,
  icon,
  status = 'default',
  className,
}) => {
  const statusClasses = {
    default: 'bg-card',
    warning: 'border-guardian-warning/50 bg-guardian-warning/10',
    danger: 'border-guardian-emergency/50 bg-guardian-emergency/10',
    success: 'border-guardian-success/50 bg-guardian-success/10',
  };

  return (
    <Card className={cn('card-guardian border', statusClasses[status], className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="h-5 w-5 text-muted-foreground">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
      </CardContent>
    </Card>
  );
};

export default StatusCard;
