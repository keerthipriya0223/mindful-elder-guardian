import React, { useState } from 'react';
import { 
  CheckCircle2,
  Clock, 
  PlusCircle,
  Calendar,
  Search,
  ListChecks
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';

interface Task {
  id: string;
  title: string;
  description?: string;
  time: string;
  date: string;
  status: 'completed' | 'pending' | 'missed';
  priority: 'low' | 'medium' | 'high';
}

const Tasks = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      title: 'Morning Walk',
      description: '20 minute walk around the neighborhood',
      time: '7:30 AM',
      date: 'Today',
      status: 'completed',
      priority: 'high',
    },
    {
      id: '2',
      title: 'Water Plants',
      time: '10:00 AM',
      date: 'Today',
      status: 'completed',
      priority: 'low',
    },
    {
      id: '3',
      title: 'Call Son',
      description: 'Weekly check-in',
      time: '2:00 PM',
      date: 'Today',
      status: 'pending',
      priority: 'medium',
    },
    {
      id: '4',
      title: 'Evening Stretches',
      description: '15 minutes of gentle stretching',
      time: '7:00 PM',
      date: 'Today',
      status: 'pending',
      priority: 'high',
    },
    {
      id: '5',
      title: 'Read Book',
      time: '8:30 PM',
      date: 'Today',
      status: 'pending',
      priority: 'low',
    }
  ]);

  const handleMarkAsCompleted = (id: string) => {
    setTasks(
      tasks.map(task => 
        task.id === id ? { ...task, status: 'completed' as const } : task
      )
    );
    
    toast({
      title: "Task completed",
      description: "Great job completing your task!",
    });
  };

  const filteredTasks = tasks.filter(task => 
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const statusColorMap = {
    completed: 'bg-guardian-success/20 text-guardian-success',
    missed: 'bg-guardian-emergency/20 text-guardian-emergency',
    pending: 'bg-blue-100 text-blue-800',
  };

  const priorityColorMap = {
    low: 'bg-green-100 text-green-800',
    medium: 'bg-amber-100 text-amber-800',
    high: 'bg-red-100 text-red-800',
  };

  return (
    <div className="container px-4 py-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Daily Tasks</h1>
          <p className="text-muted-foreground">
            Keep track of your daily activities and routines.
          </p>
        </div>
        <Button className="btn-guardian">
          <PlusCircle className="mr-2 h-4 w-4" />
          Add New Task
        </Button>
      </div>

      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search tasks..."
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
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredTasks.map(task => (
              <Card key={task.id} className="card-guardian">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl font-semibold">{task.title}</CardTitle>
                    <div className="flex gap-2">
                      <Badge className={priorityColorMap[task.priority]}>
                        {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
                      </Badge>
                      <Badge className={statusColorMap[task.status]}>
                        {task.status.charAt(0).toUpperCase() + task.status.slice(1)}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="space-y-2">
                    {task.description && (
                      <div className="text-sm text-muted-foreground">
                        {task.description}
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{task.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{task.time}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-2">
                  {task.status !== 'completed' && (
                    <Button 
                      className="w-full btn-guardian"
                      onClick={() => handleMarkAsCompleted(task.id)}
                    >
                      <CheckCircle2 className="mr-2 h-4 w-4" />
                      Mark as Completed
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        {/* Other tab content would follow the same pattern */}
        <TabsContent value="today" className="mt-4">
          {/* Similar content filtered for today */}
        </TabsContent>
        
        <TabsContent value="completed" className="mt-4">
          {/* Similar content filtered for completed */}
        </TabsContent>
        
        <TabsContent value="pending" className="mt-4">
          {/* Similar content filtered for pending */}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Tasks;
