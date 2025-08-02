import { useState, useEffect } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Battery, Search } from "lucide-react";
import batteryData from "@/data/batteries.json";

interface Battery {
  id: string;
  capacity: number;
  cyclesCompleted: number;
  healthPercentage: number;
  suggestedUse: string;
  price: number;
  manufacturer: string;
  originalVehicle: string;
  yearManufactured: number;
  location: string;
}

const MarketplacePage = () => {
  const [batteries, setBatteries] = useState<Battery[]>([]);
  const [filteredBatteries, setFilteredBatteries] = useState<Battery[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [healthFilter, setHealthFilter] = useState("all-health");
  const [useFilter, setUseFilter] = useState("all-uses");

  // Get unique suggested uses for filter options
  const suggestedUses = [...new Set(batteries.map(b => b.suggestedUse))];

  // Load battery data
  useEffect(() => {
    setBatteries(batteryData as Battery[]);
    setFilteredBatteries(batteryData as Battery[]);
  }, []);

  // Apply filters when search or filter values change
  useEffect(() => {
    let filtered = batteries;
    
    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(battery => 
        battery.id.toLowerCase().includes(query) || 
        battery.manufacturer.toLowerCase().includes(query) ||
        battery.location.toLowerCase().includes(query) ||
        battery.suggestedUse.toLowerCase().includes(query)
      );
    }
    
    // Apply health filter
    if (healthFilter && healthFilter !== "all-health") {
      const [min, max] = healthFilter.split('-').map(Number);
      filtered = filtered.filter(battery => 
        battery.healthPercentage >= min && 
        battery.healthPercentage <= max
      );
    }
    
    // Apply use case filter
    if (useFilter && useFilter !== "all-uses") {
      filtered = filtered.filter(battery => 
        battery.suggestedUse === useFilter
      );
    }
    
    setFilteredBatteries(filtered);
  }, [searchQuery, healthFilter, useFilter, batteries]);

  const getHealthColor = (health: number) => {
    if (health >= 85) return "bg-green-100 text-green-700";
    if (health >= 70) return "bg-blue-100 text-blue-700";
    if (health >= 50) return "bg-amber-100 text-amber-700";
    return "bg-red-100 text-red-700";
  };

  return (
    <div className="container py-12">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">Battery Marketplace</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse available batteries for your second-life projects
          </p>
        </div>
        
        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by ID, manufacturer, location..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <Select value={healthFilter} onValueChange={setHealthFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Health Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-health">All Health Ranges</SelectItem>
              <SelectItem value="85-100">Excellent (85-100%)</SelectItem>
              <SelectItem value="70-84">Good (70-84%)</SelectItem>
              <SelectItem value="50-69">Fair (50-69%)</SelectItem>
              <SelectItem value="0-49">Poor (0-49%)</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={useFilter} onValueChange={setUseFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Suggested Use" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-uses">All Uses</SelectItem>
              {suggestedUses.map((use) => (
                <SelectItem key={use} value={use}>{use}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBatteries.length > 0 ? (
            filteredBatteries.map((battery) => (
              <Card key={battery.id} className="overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-lg flex items-center gap-2">
                        <Battery className="h-4 w-4" />
                        {battery.id}
                      </h3>
                      <p className="text-sm text-muted-foreground">{battery.manufacturer} {battery.originalVehicle}</p>
                    </div>
                    <Badge className={getHealthColor(battery.healthPercentage)}>
                      {battery.healthPercentage}%
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <p className="text-muted-foreground">Capacity</p>
                      <p className="font-medium">{battery.capacity} kWh</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Cycles</p>
                      <p className="font-medium">{battery.cyclesCompleted}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Suggested Use</p>
                      <p className="font-medium">{battery.suggestedUse}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Year</p>
                      <p className="font-medium">{battery.yearManufactured}</p>
                    </div>
                  </div>
                  <div className="mt-3 text-sm">
                    <p className="text-muted-foreground">Location</p>
                    <p className="font-medium">{battery.location}</p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between pt-0">
                  <p className="text-lg font-bold">${battery.price}</p>
                  <Button>Contact Seller</Button>
                </CardFooter>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <h3 className="text-lg font-medium">No batteries found</h3>
              <p className="text-muted-foreground">Try adjusting your filters</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MarketplacePage;