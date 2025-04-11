
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Calendar, Heart, ShieldCheck } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  
  // Determine which agent is active based on the current route
  const getActiveAgent = () => {
    const path = location.pathname;
    if (path.includes('/tasks')) {
      return {
        name: 'Daily Reminder Agent',
        icon: <Calendar className="h-4 w-4 mr-2" />,
        color: 'bg-blue-100 text-blue-800'
      };
    } else if (path.includes('/medications')) {
      return {
        name: 'Health Monitoring Agent',
        icon: <Heart className="h-4 w-4 mr-2" />,
        color: 'bg-pink-100 text-pink-800'
      };
    } else if (path.includes('/emergency')) {
      return {
        name: 'Safety Monitoring Agent',
        icon: <ShieldCheck className="h-4 w-4 mr-2" />,
        color: 'bg-amber-100 text-amber-800'
      };
    }
    return null;
  };
  
  const activeAgent = getActiveAgent();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {activeAgent && (
        <div className="border-b border-border py-2">
          <div className="container px-4 flex justify-center">
            <Badge className={`py-1 px-3 ${activeAgent.color} flex items-center`}>
              {activeAgent.icon}
              {activeAgent.name} Active
            </Badge>
          </div>
        </div>
      )}
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
