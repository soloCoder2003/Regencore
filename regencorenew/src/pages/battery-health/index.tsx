import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertCircle } from "lucide-react";

// Form schema definition
const formSchema = z.object({
  batteryId: z.string().min(4, { message: "Battery ID must be at least 4 characters." }),
  capacity: z.coerce.number().min(10, { message: "Capacity must be at least 10 kWh." }).max(200, { message: "Capacity must be at most 200 kWh." }),
  cyclesCompleted: z.coerce.number().min(0, { message: "Cycles must be a positive number." }).max(5000, { message: "Cycles must be at most 5000." })
});

type FormValues = z.infer<typeof formSchema>;

interface HealthResult {
  batteryId: string;
  healthPercentage: number;
  healthStatus: string;
  suggestedUse: string[];
  message: string;
}

const BatteryHealthPage = () => {
  const [result, setResult] = useState<HealthResult | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      batteryId: "",
      capacity: 80,
      cyclesCompleted: 1000
    }
  });

  // Calculate health based on input values (simplified model)
  const calculateHealth = (values: FormValues): HealthResult => {
    const { batteryId, capacity, cyclesCompleted } = values;
    
    // Simple health calculation algorithm (for demo purposes)
    const baseHealth = Math.max(0, 100 - (cyclesCompleted / 50));
    const capacityFactor = capacity / 100;
    const healthPercentage = Math.min(100, Math.round(baseHealth * capacityFactor));
    
    let healthStatus = "Unknown";
    let suggestedUse: string[] = [];
    let message = "";
    
    if (healthPercentage >= 85) {
      healthStatus = "Excellent";
      suggestedUse = ["Home Energy Storage", "E-Bike Conversion", "E-Scooter Fleet"];
      message = "This battery is in excellent condition and suitable for high-demand applications.";
    } else if (healthPercentage >= 70) {
      healthStatus = "Good";
      suggestedUse = ["Grid Storage", "Power Banks", "Solar Integration"];
      message = "This battery has good health and is suitable for moderate energy demands.";
    } else if (healthPercentage >= 50) {
      healthStatus = "Fair";
      suggestedUse = ["Industrial Backup", "Low-power Electronics", "Educational Projects"];
      message = "This battery is showing wear but still useful for less demanding applications.";
    } else {
      healthStatus = "Poor";
      suggestedUse = ["Recycling", "Material Recovery"];
      message = "This battery has significant degradation and should be considered for recycling.";
    }
    
    return {
      batteryId,
      healthPercentage,
      healthStatus,
      suggestedUse,
      message
    };
  };

  const onSubmit = (values: FormValues) => {
    // Simulate processing delay
    setTimeout(() => {
      const healthResult = calculateHealth(values);
      setResult(healthResult);
    }, 600);
  };

  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto space-y-10">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">Battery Health Checker</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Enter your EV battery details to evaluate its health and discover potential second-life applications.
          </p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Battery Details</CardTitle>
            <CardDescription>
              Provide information about your battery to get a health assessment
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="batteryId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Battery ID</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. BT12345" {...field} />
                      </FormControl>
                      <FormDescription>
                        Enter the identification number of your battery
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="capacity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Capacity (kWh)</FormLabel>
                      <FormControl>
                        <div className="flex items-center gap-4">
                          <Input type="number" min="10" max="200" {...field} />
                          <span className="text-sm font-medium">kWh</span>
                        </div>
                      </FormControl>
                      <FormDescription>
                        The maximum energy capacity of the battery
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="cyclesCompleted"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cycles Completed</FormLabel>
                      <FormControl>
                        <div className="flex flex-col space-y-2 pt-2">
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">0</span>
                            <span className="text-sm text-muted-foreground">{field.value}</span>
                            <span className="text-sm text-muted-foreground">5000</span>
                          </div>
                          <Slider
                            min={0}
                            max={5000}
                            step={50}
                            defaultValue={[field.value]}
                            onValueChange={(vals) => field.onChange(vals[0])}
                          />
                        </div>
                      </FormControl>
                      <FormDescription>
                        The number of charge-discharge cycles the battery has undergone
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full">Check Battery Health</Button>
              </form>
            </Form>
          </CardContent>
        </Card>
        
        {result && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                Battery Health Results
                {result.healthPercentage >= 50 ? (
                  <CheckCircle className="h-5 w-5 text-green-500" />
                ) : (
                  <AlertCircle className="h-5 w-5 text-amber-500" />
                )}
              </CardTitle>
              <CardDescription>
                Results for Battery ID: {result.batteryId}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Health Status</span>
                  <Badge variant={
                    result.healthStatus === "Excellent" ? "default" :
                    result.healthStatus === "Good" ? "outline" :
                    result.healthStatus === "Fair" ? "secondary" : "destructive"
                  }>
                    {result.healthStatus}
                  </Badge>
                </div>
                <Progress value={result.healthPercentage} className="h-2" />
                <div className="flex justify-between text-sm">
                  <span>0%</span>
                  <span className="font-medium">{result.healthPercentage}%</span>
                  <span>100%</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <span className="font-medium">Suggested Uses</span>
                <div className="flex flex-wrap gap-2">
                  {result.suggestedUse.map((use, i) => (
                    <Badge key={i} variant="secondary">{use}</Badge>
                  ))}
                </div>
              </div>
              
              <div className="rounded-lg bg-slate-50 p-4 text-sm">
                <p>{result.message}</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" onClick={() => setResult(null)}>
                Check Another Battery
              </Button>
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  );
};

export default BatteryHealthPage;