import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight, Battery, ShoppingBag, Zap } from "lucide-react";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container flex flex-col items-center text-center space-y-6 md:space-y-8">
          <div className="absolute w-full h-full">
            <svg className="absolute right-0 top-0 -z-10 h-full w-1/2 opacity-10" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="80" cy="20" r="20" fill="url(#grad1)"/>
              <circle cx="30" cy="70" r="30" fill="url(#grad2)"/>
              <defs>
                <linearGradient id="grad1" gradientTransform="rotate(45)">
                  <stop offset="0%" stopColor="#3b82f6"/>
                  <stop offset="100%" stopColor="#10b981"/>
                </linearGradient>
                <linearGradient id="grad2" gradientTransform="rotate(45)">
                  <stop offset="0%" stopColor="#3b82f6"/>
                  <stop offset="100%" stopColor="#10b981"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-500">ReGeN Core</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
            Rebirth of Batteries Begins Here
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button asChild size="lg" className="gap-2">
              <Link to="/battery-health">
                Check Battery Health <Battery className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2">
              <Link to="/marketplace">
                Explore Marketplace <ShoppingBag className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 container">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
            <div className="bg-blue-100 p-3 rounded-full mb-4">
              <Battery className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-medium mb-2">Check Battery Health</h3>
            <p className="text-muted-foreground">Evaluate your EV battery's condition and get recommendations for its second life.</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
            <div className="bg-green-100 p-3 rounded-full mb-4">
              <ShoppingBag className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-medium mb-2">Browse the Marketplace</h3>
            <p className="text-muted-foreground">Find batteries suited for your project needs or list your own for others to reuse.</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
            <div className="bg-purple-100 p-3 rounded-full mb-4">
              <Zap className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-medium mb-2">Give Batteries New Life</h3>
            <p className="text-muted-foreground">Contribute to sustainability by extending battery lifecycles and reducing e-waste.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-100">
        <div className="container text-center space-y-6">
          <h2 className="text-3xl font-bold">Ready to Give Batteries a Second Life?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our community of sustainability-minded individuals and businesses making a difference.
          </p>
          <Button asChild size="lg" className="mt-4">
            <Link to="/use-cases" className="flex items-center gap-2">
              Explore Use Cases <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;