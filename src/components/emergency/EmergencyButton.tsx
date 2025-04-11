
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { AlertCircle, AlertTriangle, PhoneCall } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { useToast } from '@/components/ui/use-toast';

const EmergencyButton = () => {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const [isActivated, setIsActivated] = useState(false);

  const handleEmergency = () => {
    setIsActivated(true);
    toast({
      title: "Emergency Alert Sent",
      description: "Your emergency contacts have been notified",
      variant: "destructive",
    });
    
    // In a real app, this would call emergency contacts
    setTimeout(() => {
      setIsActivated(false);
    }, 5000);
  };

  return (
    <>
      <Button
        size="lg"
        className={`w-full p-8 text-xl rounded-lg ${
          isActivated 
            ? 'bg-guardian-emergency/80 animate-pulse-slow' 
            : 'bg-guardian-emergency hover:bg-guardian-emergency/90'
        }`}
        onClick={() => setOpen(true)}
      >
        <AlertTriangle className="mr-2 h-6 w-6" />
        Emergency Help
      </Button>

      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-guardian-emergency flex items-center">
              <AlertCircle className="mr-2 h-5 w-5" />
              Confirm Emergency Alert
            </AlertDialogTitle>
            <AlertDialogDescription>
              This will send an emergency alert to all your designated emergency contacts. 
              Continue only if you need immediate assistance.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              className="bg-guardian-emergency hover:bg-guardian-emergency/90 text-white"
              onClick={handleEmergency}
            >
              <PhoneCall className="mr-2 h-4 w-4" />
              Send Emergency Alert
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default EmergencyButton;
