
import React, { useState } from 'react';
import { 
  PhoneCall, 
  UserPlus, 
  AlertTriangle, 
  Map, 
  Home,
  Info
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import EmergencyButton from '@/components/emergency/EmergencyButton';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface EmergencyContact {
  id: string;
  name: string;
  relation: string;
  phone: string;
}

const Emergency = () => {
  const [contacts] = useState<EmergencyContact[]>([
    {
      id: '1',
      name: 'John Smith',
      relation: 'Son',
      phone: '(555) 123-4567',
    },
    {
      id: '2',
      name: 'Mary Johnson',
      relation: 'Daughter',
      phone: '(555) 987-6543',
    },
    {
      id: '3',
      name: 'Dr. Robert Lee',
      relation: 'Primary Physician',
      phone: '(555) 456-7890',
    },
  ]);

  return (
    <div className="container px-4 py-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Emergency Assistance</h1>
        <p className="text-muted-foreground">
          Quick access to emergency help and important contacts.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-7 space-y-6">
          <Card className="card-guardian border-guardian-emergency/30">
            <CardHeader>
              <CardTitle className="text-xl font-semibold flex items-center text-guardian-emergency">
                <AlertTriangle className="mr-2 h-5 w-5" />
                Emergency Help
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Press the emergency button below if you need immediate assistance. 
                This will alert your emergency contacts and share your current location.
              </p>
              
              <EmergencyButton />
              
              <div className="text-xs text-muted-foreground mt-2 text-center">
                For life-threatening emergencies, please call 911 directly.
              </div>
            </CardContent>
          </Card>

          <Card className="card-guardian">
            <CardHeader>
              <CardTitle className="text-xl font-semibold flex items-center">
                <Home className="mr-2 h-5 w-5 text-guardian-purple" />
                Home Address
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                This address will be shared with emergency services if you activate the emergency alert.
              </p>
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <p className="font-medium">123 Maple Street</p>
                <p>Apartment 4B</p>
                <p>New York, NY 10001</p>
              </div>
              <div className="mt-4 flex justify-end">
                <Button variant="outline" className="text-guardian-purple">
                  <Map className="mr-2 h-4 w-4" />
                  View on Map
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="md:col-span-5 space-y-6">
          <Card className="card-guardian">
            <CardHeader>
              <CardTitle className="text-xl font-semibold flex items-center">
                <PhoneCall className="mr-2 h-5 w-5 text-guardian-purple" />
                Emergency Contacts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {contacts.map((contact) => (
                <div key={contact.id} className="flex items-start justify-between p-3 bg-card border border-border rounded-lg">
                  <div>
                    <div className="font-medium">{contact.name}</div>
                    <div className="text-sm text-muted-foreground">{contact.relation}</div>
                  </div>
                  <Button size="sm" className="bg-guardian-purple hover:bg-guardian-dark-purple">
                    <PhoneCall className="mr-2 h-4 w-4" />
                    {contact.phone}
                  </Button>
                </div>
              ))}
              
              <Button variant="outline" className="w-full">
                <UserPlus className="mr-2 h-4 w-4" />
                Add Contact
              </Button>
            </CardContent>
          </Card>
          
          <Card className="card-guardian">
            <CardHeader>
              <CardTitle className="text-xl font-semibold flex items-center">
                <Info className="mr-2 h-5 w-5 text-guardian-purple" />
                Emergency Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Medical Conditions</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Hypertension</li>
                      <li>Type 2 Diabetes</li>
                      <li>Osteoarthritis</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Allergies</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Penicillin</li>
                      <li>Shellfish</li>
                      <li>Peanuts</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Current Medications</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Lisinopril 10mg</li>
                      <li>Metformin 500mg</li>
                      <li>Atorvastatin 20mg</li>
                      <li>Aspirin 81mg</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Blood Type</AccordionTrigger>
                  <AccordionContent>
                    <p>O Positive</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Emergency;
