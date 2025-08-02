import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t bg-background mt-auto">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-blue-500 rounded-md"></div>
              <span className="text-lg font-bold tracking-tight">ReGeN Core</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Rebirth of Batteries Begins Here
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">Home</Link>
              <Link to="/battery-health" className="text-sm text-muted-foreground hover:text-foreground">Battery Health</Link>
              <Link to="/marketplace" className="text-sm text-muted-foreground hover:text-foreground">Marketplace</Link>
              <Link to="/use-cases" className="text-sm text-muted-foreground hover:text-foreground">Use Cases</Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground">About</Link>
            </nav>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Connect</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Contact</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">GitHub</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Twitter</a>
            </nav>
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Moonwalkers404. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;