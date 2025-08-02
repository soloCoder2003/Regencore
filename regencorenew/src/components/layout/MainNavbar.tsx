import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const MainNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Battery Health', path: '/battery-health' },
    { name: 'Marketplace', path: '/marketplace' },
    { name: 'Use Cases', path: '/use-cases' },
  ];

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-500 rounded-md"></div>
          <span className="text-xl font-bold tracking-tight">ReGeN Core</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-6">
          {navItems.map((item) => (
            <Link 
              key={item.name}
              to={item.path}
              className="text-md font-medium transition-colors hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col space-y-4 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-lg font-medium transition-colors hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default MainNavbar;