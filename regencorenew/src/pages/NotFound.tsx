import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[80vh] py-12">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-muted-foreground">404</h1>
        <h2 className="text-2xl font-semibold">Page Not Found</h2>
        <p className="text-muted-foreground max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild>
          <Link to="/" className="gap-2">
            <ArrowLeft className="h-4 w-4" /> Go back home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;