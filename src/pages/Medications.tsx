import React, { useState } from 'react';
import { 
  Clock, 
  PlusCircle, 
  Pill, 
  Calendar, 
  AlertTriangle,
  Search,
  CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';

interface Medication {
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

  const statusColorMap = {
    taken: 'bg-guardian-success/20 text-guardian-success',
    missed: 'bg-guardian-emergency/20 text-guardian-emergency',
    upcoming: 'bg-blue-100 text-blue-800',
  };

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

      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search medications..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <Tabs defaultValue="all" className="mb-6">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="today">Today</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="taken">Taken</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredMedications.map(med => (
              <Card key={med.id} className="card-guardian">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl font-semibold">{med.name}</CardTitle>
                    <Badge className={statusColorMap[med.status]}>
                      {med.status.charAt(0).toUpperCase() + med.status.slice(1)}
                    </Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">{med.dosage}</div>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{med.frequency}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{med.time}</span>
                    </div>
                    {med.notes && (
                      <div className="text-sm text-muted-foreground">
                        Note: {med.notes}
                      </div>
                    )}
                    {med.refillReminder && (
                      <div className="flex items-center gap-2 text-amber-600">
                        <AlertTriangle className="h-4 w-4" />
                        <span className="text-sm">Refill by {med.refillDate}</span>
                      </div>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="pt-2">
                  {med.status !== 'taken' && (
                    <Button 
                      className="w-full btn-guardian"
                      onClick={() => handleMarkAsTaken(med.id)}
                    >
                      <CheckCircle2 className="mr-2 h-4 w-4" />
                      Mark as Taken
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="today" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredMedications
              .filter(med => med.time.includes('AM') || med.time.includes('PM'))
              .map(med => (
                <Card key={med.id} className="card-guardian">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl font-semibold">{med.name}</CardTitle>
                      <Badge className={statusColorMap[med.status]}>
                        {med.status.charAt(0).toUpperCase() + med.status.slice(1)}
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">{med.dosage}</div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{med.frequency}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{med.time}</span>
                      </div>
                      {med.notes && (
                        <div className="text-sm text-muted-foreground">
                          Note: {med.notes}
                        </div>
                      )}
                      {med.refillReminder && (
                        <div className="flex items-center gap-2 text-amber-600">
                          <AlertTriangle className="h-4 w-4" />
                          <span className="text-sm">Refill by {med.refillDate}</span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="pt-2">
                    {med.status !== 'taken' && (
                      <Button 
                        className="w-full btn-guardian"
                        onClick={() => handleMarkAsTaken(med.id)}
                      >
                        <CheckCircle2 className="mr-2 h-4 w-4" />
                        Mark as Taken
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>
        
        <TabsContent value="upcoming" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredMedications
              .filter(med => med.status === 'upcoming')
              .map(med => (
                <Card key={med.id} className="card-guardian">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl font-semibold">{med.name}</CardTitle>
                      <Badge className={statusColorMap[med.status]}>
                        {med.status.charAt(0).toUpperCase() + med.status.slice(1)}
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">{med.dosage}</div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{med.frequency}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{med.time}</span>
                      </div>
                      {med.notes && (
                        <div className="text-sm text-muted-foreground">
                          Note: {med.notes}
                        </div>
                      )}
                      {med.refillReminder && (
                        <div className="flex items-center gap-2 text-amber-600">
                          <AlertTriangle className="h-4 w-4" />
                          <span className="text-sm">Refill by {med.refillDate}</span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="pt-2">
                    {med.status !== 'taken' && (
                      <Button 
                        className="w-full btn-guardian"
                        onClick={() => handleMarkAsTaken(med.id)}
                      >
                        <CheckCircle2 className="mr-2 h-4 w-4" />
                        Mark as Taken
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>
        
        <TabsContent value="taken" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredMedications
              .filter(med => med.status === 'taken')
              .map(med => (
                <Card key={med.id} className="card-guardian">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl font-semibold">{med.name}</CardTitle>
                      <Badge className={statusColorMap[med.status]}>
                        {med.status.charAt(0).toUpperCase() + med.status.slice(1)}
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">{med.dosage}</div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{med.frequency}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{med.time}</span>
                      </div>
                      {med.notes && (
                        <div className="text-sm text-muted-foreground">
                          Note: {med.notes}
                        </div>
                      )}
                      {med.refillReminder && (
                        <div className="flex items-center gap-2 text-amber-600">
                          <AlertTriangle className="h-4 w-4" />
                          <span className="text-sm">Refill by {med.refillDate}</span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Medications;
