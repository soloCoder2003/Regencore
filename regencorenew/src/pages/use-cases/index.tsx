import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Battery, Zap, Car, Home, Wind, Lightbulb, Bike, Cog, BarChart3, Server } from "lucide-react";
import { Link } from "react-router-dom";

interface UseCase {
  title: string;
  description: string;
  icon: React.ReactNode;
  recommended: boolean;
  examples: string[];
}

const UseCasesPage = () => {
  const useCases: UseCase[] = [
    {
      title: "Home Energy Storage",
      description: "Store energy from solar panels or during off-peak hours for residential use",
      icon: <Home className="h-10 w-10" />,
      recommended: true,
      examples: ["Backup power during outages", "Time-of-use energy optimization", "Solar energy storage"]
    },
    {
      title: "Grid Storage",
      description: "Large-scale energy storage for utility companies and microgrids",
      icon: <Server className="h-10 w-10" />,
      recommended: true,
      examples: ["Peak shaving", "Frequency regulation", "Renewable integration"]
    },
    {
      title: "E-Bike Conversion",
      description: "Power electric bicycles and mobility devices",
      icon: <Bike className="h-10 w-10" />,
      recommended: true,
      examples: ["DIY e-bike kits", "Mobility scooters", "Electric skateboards"]
    },
    {
      title: "Power Banks",
      description: "Portable power solutions for devices and small appliances",
      icon: <Battery className="h-10 w-10" />,
      recommended: false,
      examples: ["Emergency charging", "Camping power", "Event power supplies"]
    },
    {
      title: "Industrial Backup",
      description: "Backup power for critical industrial systems and processes",
      icon: <Cog className="h-10 w-10" />,
      recommended: false,
      examples: ["Factory equipment", "Data center backup", "Security systems"]
    },
    {
      title: "Solar Integration",
      description: "Complement solar panels for consistent energy availability",
      icon: <Zap className="h-10 w-10" />,
      recommended: true,
      examples: ["Off-grid solar systems", "Solar street lighting", "Remote power stations"]
    },
    {
      title: "Electric Farm Equipment",
      description: "Power for agricultural machinery and equipment",
      icon: <Wind className="h-10 w-10" />,
      recommended: false,
      examples: ["Small tractors", "Irrigation systems", "Processing equipment"]
    },
    {
      title: "Educational Projects",
      description: "Resources for STEM education and research",
      icon: <Lightbulb className="h-10 w-10" />,
      recommended: false,
      examples: ["University research", "DIY electronics", "Renewable energy education"]
    },
    {
      title: "E-Scooter Fleet",
      description: "Power source for commercial electric scooter operations",
      icon: <Car className="h-10 w-10" />,
      recommended: true,
      examples: ["Urban mobility solutions", "Campus transportation", "Tourism rentals"]
    },
    {
      title: "Energy Monitoring",
      description: "Repurpose battery management systems for energy monitoring",
      icon: <BarChart3 className="h-10 w-10" />,
      recommended: false,
      examples: ["Smart home integration", "Energy optimization", "Consumption analysis"]
    }
  ];

  return (
    <div className="container py-12">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">Second Life Use Cases</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the many ways EV batteries can be repurposed for sustainable energy solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <Card key={index} className={useCase.recommended ? "border-green-200 bg-green-50/30" : ""}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="p-3 rounded-lg bg-slate-100">{useCase.icon}</div>
                  {useCase.recommended && (
                    <span className="inline-flex items-center rounded-full border border-green-600/20 bg-green-50 px-2.5 py-0.5 text-xs font-semibold text-green-700">
                      Recommended
                    </span>
                  )}
                </div>
                <CardTitle className="mt-4">{useCase.title}</CardTitle>
                <CardDescription>{useCase.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Common Examples:</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground pl-2 space-y-1">
                    {useCase.examples.map((example, i) => (
                      <li key={i}>{example}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center bg-slate-50 py-10 px-4 rounded-lg mt-10">
          <h2 className="text-2xl font-bold mb-4">Ready to Find Your Perfect Battery Match?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Browse our marketplace to find batteries that suit your specific use case needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/marketplace">Explore Marketplace</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/battery-health">Check Battery Health</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCasesPage;