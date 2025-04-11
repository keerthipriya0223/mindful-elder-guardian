
import React, { useState } from 'react';
import { Activity, Calendar, Clock, Heart, PlusCircle, Pill, ShieldCheck, Smile } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import StatusCard from '@/components/dashboard/StatusCard';
import ReminderCard, { Reminder } from '@/components/dashboard/ReminderCard';
import { useToast } from '@/components/ui/use-toast';

const Dashboard = () => {
  const { toast } = useToast();
  
  const [reminders, setReminders] = useState<Reminder[]>([
    {
      id: '1',
      title: 'Blood Pressure Medication',
      time: '8:00 AM',
      type: 'medication',
      status: 'completed',
    },
    {
      id: '2',
      title: 'Heart Medication',
      time: '1:00 PM',
      type: 'medication',
      status: 'upcoming',
    },
    {
      id: '3',
      title: 'Doctor Appointment',
      time: '3:30 PM',
      type: 'appointment',
      status: 'upcoming',
    },
    {
      id: '4',
      title: 'Evening Walk',
      time: '5:00 PM',
      type: 'task',
      status: 'upcoming',
    },
    {
      id: '5',
      title: 'Cholesterol Medication',
      time: '9:00 PM',
      type: 'medication',
      status: 'upcoming',
    }
  ]);

  const handleCompleteReminder = (id: string) => {
    setReminders(
      reminders.map(reminder => 
        reminder.id === id ? { ...reminder, status: 'completed' } : reminder
      )
    );
    
    toast({
      title: "Reminder completed",
      description: "Great job following your schedule!",
    });
  };

  return (
    <div className="container px-4 py-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Monitor your health and stay on track with your daily schedule.
          </p>
        </div>
        <Button className="btn-guardian">
          <PlusCircle className="mr-2 h-4 w-4" />
          Add New Reminder
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
        <StatusCard
          title="Heart Rate"
          value="72 BPM"
          icon={<Heart />}
          status="success"
        />
        <StatusCard
          title="Blood Pressure"
          value="128/85"
          icon={<Activity />}
          status="default"
        />
        <StatusCard
          title="Medication Adherence"
          value="92%"
          icon={<Pill />}
          status="success"
        />
        <StatusCard
          title="Well-being Score"
          value="Good"
          icon={<Smile />}
          status="success"
        />
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-12 mb-6">
        <Card className="col-span-1 md:col-span-8 card-guardian">
          <CardHeader>
            <CardTitle className="text-xl font-semibold flex items-center">
              <Calendar className="mr-2 h-5 w-5 text-guardian-purple" />
              Today's Schedule
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all">
              <TabsList className="mb-4">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="medications">Medications</TabsTrigger>
                <TabsTrigger value="tasks">Tasks</TabsTrigger>
                <TabsTrigger value="appointments">Appointments</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="space-y-4">
                {reminders.map(reminder => (
                  <ReminderCard
                    key={reminder.id}
                    reminder={reminder}
                    onComplete={handleCompleteReminder}
                  />
                ))}
              </TabsContent>
              
              <TabsContent value="medications" className="space-y-4">
                {reminders
                  .filter(r => r.type === 'medication')
                  .map(reminder => (
                    <ReminderCard
                      key={reminder.id}
                      reminder={reminder}
                      onComplete={handleCompleteReminder}
                    />
                  ))}
              </TabsContent>
              
              <TabsContent value="tasks" className="space-y-4">
                {reminders
                  .filter(r => r.type === 'task')
                  .map(reminder => (
                    <ReminderCard
                      key={reminder.id}
                      reminder={reminder}
                      onComplete={handleCompleteReminder}
                    />
                  ))}
              </TabsContent>
              
              <TabsContent value="appointments" className="space-y-4">
                {reminders
                  .filter(r => r.type === 'appointment')
                  .map(reminder => (
                    <ReminderCard
                      key={reminder.id}
                      reminder={reminder}
                      onComplete={handleCompleteReminder}
                    />
                  ))}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
        
        <Card className="col-span-1 md:col-span-4 card-guardian">
          <CardHeader>
            <CardTitle className="text-xl font-semibold flex items-center">
              <ShieldCheck className="mr-2 h-5 w-5 text-guardian-purple" />
              Safety Status
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium">Home Security</div>
              <div className="flex items-center text-guardian-success">
                <ShieldCheck className="mr-1 h-4 w-4" />
                <span>Secure</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium">Fall Detection</div>
              <div className="flex items-center text-guardian-success">
                <ShieldCheck className="mr-1 h-4 w-4" />
                <span>Active</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium">Location Tracking</div>
              <div className="flex items-center text-guardian-success">
                <ShieldCheck className="mr-1 h-4 w-4" />
                <span>Enabled</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium">Last Check-in</div>
              <div className="flex items-center text-muted-foreground">
                <Clock className="mr-1 h-4 w-4" />
                <span>10 min ago</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
