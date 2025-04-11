
import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useToast } from '@/components/ui/use-toast';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const { toast } = useToast();
  const isMobile = useIsMobile();
  
  const handleNotifications = () => {
    toast({
      title: "Notifications",
      description: "You have no new notifications",
    });
  };
  
  const navItems = [
    { label: 'Dashboard', path: '/' },
    { label: 'Medications', path: '/medications' },
    { label: 'Tasks', path: '/tasks' },
    { label: 'Emergency', path: '/emergency' },
  ];
  
  const renderNavItems = () => (
    <ul className="flex flex-col lg:flex-row gap-4 lg:gap-8">
      {navItems.map((item) => (
        <li key={item.path}>
          <Link 
            to={item.path} 
            className="text-foreground hover:text-guardian-purple transition-colors font-medium"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
  
  return (
    <header className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {isMobile && (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[250px]">
                <div className="pt-6">
                  {renderNavItems()}
                </div>
              </SheetContent>
            </Sheet>
          )}
          <Link to="/" className="text-xl font-bold text-guardian-purple">Elder Guardian</Link>
        </div>
        
        {!isMobile && (
          <nav className="hidden lg:block">
            {renderNavItems()}
          </nav>
        )}
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={handleNotifications}>
            <Bell className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
