
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  link?: string;
}

const ServiceCard = ({ title, description, icon, link = "/services" }: ServiceCardProps) => {
  return (
    <Card className="card-hover relative overflow-hidden animate-fade-in">
      <CardHeader className="pb-3">
        <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-accent/20 text-accent">
          <img src={icon} alt={title} className="w-6 h-6" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-foreground/80">{description}</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" asChild>
          <Link to={link}>Learn More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
