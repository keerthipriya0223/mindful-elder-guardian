
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Heart, ShieldCheck, ArrowRightLeft, Bell } from 'lucide-react';

const AgentInteractionCard = () => {
  return (
    <Card className="card-guardian col-span-1 md:col-span-12">
      <CardHeader>
        <CardTitle className="text-xl font-semibold flex items-center">
          <ArrowRightLeft className="mr-2 h-5 w-5 text-guardian-purple" />
          Multi-Agent System Status
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative">
          {/* Agent Visualization */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="flex flex-col items-center justify-center text-center p-4 bg-blue-50 rounded-lg border border-blue-100">
              <Calendar className="h-8 w-8 text-blue-600 mb-2" />
              <h3 className="font-semibold text-blue-800">Daily Reminder Agent</h3>
              <p className="text-sm text-muted-foreground mt-2">Monitoring 5 tasks and medications</p>
              <div className="mt-3 flex justify-center">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs flex items-center">
                  <Bell className="h-3 w-3 mr-1" /> Active
                </span>
              </div>
            </div>
            
            <div className="flex flex-col items-center justify-center text-center p-4 bg-pink-50 rounded-lg border border-pink-100">
              <Heart className="h-8 w-8 text-pink-600 mb-2" />
              <h3 className="font-semibold text-pink-800">Health Monitoring Agent</h3>
              <p className="text-sm text-muted-foreground mt-2">Tracking vital signs and health status</p>
              <div className="mt-3 flex justify-center">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs flex items-center">
                  <Bell className="h-3 w-3 mr-1" /> Active
                </span>
              </div>
            </div>
            
            <div className="flex flex-col items-center justify-center text-center p-4 bg-amber-50 rounded-lg border border-amber-100">
              <ShieldCheck className="h-8 w-8 text-amber-600 mb-2" />
              <h3 className="font-semibold text-amber-800">Safety Monitoring Agent</h3>
              <p className="text-sm text-muted-foreground mt-2">Ensuring home safety and emergency response</p>
              <div className="mt-3 flex justify-center">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs flex items-center">
                  <Bell className="h-3 w-3 mr-1" /> Active
                </span>
              </div>
            </div>
          </div>

          {/* Agent Communication Visualization */}
          <div className="p-4 bg-muted rounded-lg">
            <h4 className="font-medium mb-2 text-center">Recent Agent Communications</h4>
            <div className="space-y-2">
              <div className="flex items-start p-2 bg-white rounded border">
                <Heart className="h-5 w-5 text-pink-600 mr-2 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Health Monitoring Agent → Daily Reminder Agent</p>
                  <p className="text-xs text-muted-foreground">Blood pressure reading slightly elevated. Suggested medication reminder.</p>
                </div>
              </div>
              <div className="flex items-start p-2 bg-white rounded border">
                <Calendar className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Daily Reminder Agent → Safety Monitoring Agent</p>
                  <p className="text-xs text-muted-foreground">User hasn't responded to medication reminder. Consider activity check.</p>
                </div>
              </div>
              <div className="flex items-start p-2 bg-white rounded border">
                <ShieldCheck className="h-5 w-5 text-amber-600 mr-2 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Safety Monitoring Agent → Health Monitoring Agent</p>
                  <p className="text-xs text-muted-foreground">Normal activity detected in living room. User is active and safe.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AgentInteractionCard;
