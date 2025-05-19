
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  showScrollIndicator?: boolean;
}

const HeroSection = ({
  title,
  subtitle,
  backgroundImage,
  showScrollIndicator = false,
}: HeroSectionProps) => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight - 100,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="relative h-screen flex items-center justify-center text-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 hero-gradient" />
      
      <div className="relative z-10 px-4 md:px-8 max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          <span className="text-gradient">{title}</span>
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link to="/contact">Get a Free Quote</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/projects">View Our Work</Link>
          </Button>
        </div>
      </div>
      
      {showScrollIndicator && (
        <div
          className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce-light cursor-pointer"
          onClick={scrollToContent}
        >
          <ChevronDown className="h-8 w-8 text-accent" />
        </div>
      )}
    </div>
  );
};

export default HeroSection;
