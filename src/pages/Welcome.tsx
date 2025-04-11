
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Heart, ShieldCheck, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();

  const agents = [
    {
      title: "Daily Reminder Agent",
      description: "Provides timely reminders for medications, appointments, and daily activities to maintain regular routines.",
      icon: <Calendar className="h-12 w-12 text-guardian-purple" />,
      linkTo: "/tasks"
    },
    {
      title: "Health Monitoring Agent",
      description: "Tracks vital signs and health metrics, detecting abnormal conditions and providing health insights.",
      icon: <Heart className="h-12 w-12 text-guardian-purple" />,
      linkTo: "/medications"
    },
    {
      title: "Safety Monitoring Agent",
      description: "Ensures user safety by detecting unusual inactivity, falls, and responding to emergency triggers.",
      icon: <ShieldCheck className="h-12 w-12 text-guardian-purple" />,
      linkTo: "/emergency"
    }
  ];

  return (
    <div className="container px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to Elder Guardian</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A multi-agent AI system designed to provide comprehensive support for elderly care and independence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {agents.map((agent, index) => (
          <Card key={index} className="card-guardian">
            <CardHeader className="text-center pb-2">
              <div className="mx-auto mb-4">{agent.icon}</div>
              <CardTitle className="text-xl">{agent.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-6">{agent.description}</p>
              <Button 
                className="btn-guardian"
                onClick={() => navigate(agent.linkTo)}
              >
                Explore <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Button 
          size="lg" 
          className="btn-guardian"
          onClick={() => navigate('/dashboard')}
        >
          Go to Dashboard
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default Welcome;
