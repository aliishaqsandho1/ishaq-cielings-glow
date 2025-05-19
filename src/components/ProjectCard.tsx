
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  onClick?: () => void;
}

const ProjectCard = ({ title, category, image, onClick }: ProjectCardProps) => {
  const [isHovering, setIsHovering] = useState(false);
  
  return (
    <Card 
      className="overflow-hidden transition-all duration-500 cursor-pointer animate-fade-in"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={onClick}
    >
      <div className="relative overflow-hidden h-72">
        <img 
          src={image} 
          alt={title} 
          className={`w-full h-full object-cover transition-all duration-500 ${isHovering ? 'scale-110' : 'scale-100'}`} 
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-70'}`}></div>
        <CardContent className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <p className="text-sm font-medium text-accent mb-1">{category}</p>
          <h3 className="text-xl font-bold">{title}</h3>
        </CardContent>
      </div>
    </Card>
  );
};

export default ProjectCard;
