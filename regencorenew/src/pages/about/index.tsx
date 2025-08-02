import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Mail, MessageSquare } from "lucide-react";

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Founder & Battery Specialist",
      bio: "Former Tesla battery engineer with 8+ years of experience in EV battery systems.",
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop"
    },
    {
      name: "Maya Rodriguez",
      role: "Sustainability Director",
      bio: "Environmental scientist passionate about circular economy solutions for e-waste.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop"
    },
    {
      name: "Raj Patel",
      role: "Tech Lead",
      bio: "Software engineer specializing in energy systems modeling and battery diagnostics.",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=100&auto=format&fit=crop"
    },
    {
      name: "Sarah Johnson",
      role: "Operations Manager",
      bio: "Supply chain expert with experience in renewable energy sector logistics.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=100&auto=format&fit=crop"
    }
  ];

  return (
    <div className="container py-12">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">About ReGeN Core</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our mission is to extend the lifecycle of EV batteries and reduce environmental impact
          </p>
        </div>
        
        {/* Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Our Mission</h2>
            <p className="text-muted-foreground">
              At ReGeN Core, we believe that EV batteries have much more to offer beyond their primary use in vehicles. 
              As electric vehicles become more prevalent, the need for sustainable solutions for used batteries grows. 
            </p>
            <p className="text-muted-foreground">
              Our platform connects battery suppliers with potential second-life applications, extending battery lifecycles 
              by 5-10 years and reducing the environmental impact of battery production.
            </p>
            <div className="pt-2">
              <h3 className="font-medium mb-2">What we aim to achieve:</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 pl-2">
                <li>Reduce e-waste from discarded EV batteries</li>
                <li>Create affordable energy storage solutions</li>
                <li>Support renewable energy integration</li>
                <li>Build a circular economy for battery technologies</li>
              </ul>
            </div>
          </div>
          <div className="bg-slate-100 rounded-lg p-6 md:p-10">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg">Founded</h3>
                <p>2025</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Team</h3>
                <p>Moonwalkers404</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Batteries Repurposed</h3>
                <p>2,500+</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Carbon Offset</h3>
                <p>~18,000 tons CO₂</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Team Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-center">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index}>
                <CardHeader className="pb-2">
                  <div className="flex justify-center mb-4">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="rounded-full h-24 w-24 object-cover border-4 border-slate-100" 
                    />
                  </div>
                  <CardTitle className="text-center">{member.name}</CardTitle>
                  <CardDescription className="text-center">{member.role}</CardDescription>
                </CardHeader>
                <CardContent className="text-center text-sm text-muted-foreground">
                  <p>{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Vision & Values */}
        <div className="bg-slate-50 rounded-lg p-8 md:p-12">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-2xl font-bold text-center">Our Vision & Values</h2>
            <p className="text-center text-muted-foreground">
              We envision a future where every EV battery finds its perfect second-life application, 
              creating a sustainable cycle that benefits both the environment and the economy.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center space-y-2">
                <div className="bg-green-100 text-green-700 h-12 w-12 rounded-full flex items-center justify-center mx-auto">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                  </svg>
                </div>
                <h3 className="font-medium">Sustainability</h3>
                <p className="text-sm text-muted-foreground">Minimizing waste and maximizing resource efficiency</p>
              </div>
              
              <div className="text-center space-y-2">
                <div className="bg-blue-100 text-blue-700 h-12 w-12 rounded-full flex items-center justify-center mx-auto">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-medium">Innovation</h3>
                <p className="text-sm text-muted-foreground">Finding creative solutions for battery reuse</p>
              </div>
              
              <div className="text-center space-y-2">
                <div className="bg-purple-100 text-purple-700 h-12 w-12 rounded-full flex items-center justify-center mx-auto">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="font-medium">Community</h3>
                <p className="text-sm text-muted-foreground">Building a network of eco-conscious collaborators</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact CTA */}
        <div className="text-center space-y-6">
          <h2 className="text-2xl font-bold">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions or want to join our mission? We'd love to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="gap-2">
              <Mail className="h-4 w-4" /> Contact Us
            </Button>
            <Button variant="outline" className="gap-2">
              <Github className="h-4 w-4" /> GitHub
            </Button>
            <Button variant="secondary" className="gap-2">
              <MessageSquare className="h-4 w-4" /> Community Forum
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;