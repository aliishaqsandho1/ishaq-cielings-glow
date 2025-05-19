import { useState } from "react";
import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  // Sample data - replace with actual content
  const projects = [
    {
      id: 1,
      title: "Luxury Villa Ceiling",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1615529162924-f8605388461d?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      description: "Elegant POP ceiling design for a luxury villa in F-10, Islamabad. This project featured intricate moldings and a central medallion.",
      client: "Private Residence",
      location: "F-10, Islamabad",
      completionDate: "June 2023",
    },
    {
      id: 2,
      title: "Modern Office Ceiling",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      description: "Clean, contemporary gypsum ceiling design for a corporate office with integrated lighting solutions.",
      client: "Tech Solutions Inc.",
      location: "Blue Area, Islamabad",
      completionDate: "March 2023",
    },
    {
      id: 3,
      title: "Restaurant Ambiance",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1530229540764-5f6ab595fdbe?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      description: "Theme-based decorative ceiling for a fine dining restaurant, creating an immersive atmosphere for diners.",
      client: "Flavor Haven Restaurant",
      location: "Centaurus Mall, Islamabad",
      completionDate: "November 2022",
    },
    {
      id: 4,
      title: "Apartment Complex Hallway",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      description: "Sleek, modern ceiling design for the common areas of a luxury apartment complex.",
      client: "Heights Residence",
      location: "DHA Phase II, Islamabad",
      completionDate: "January 2023",
    },
    {
      id: 5,
      title: "Hotel Lobby Transformation",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1536407078615-9fd5968c77e4?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      description: "Opulent ceiling design creating a grand entrance experience for hotel guests.",
      client: "Grand Plaza Hotel",
      location: "Jinnah Avenue, Islamabad",
      completionDate: "August 2022",
    },
    {
      id: 6,
      title: "Contemporary Home Remodel",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      description: "Minimalist ceiling design complementing the modern interior of a renovated home.",
      client: "Private Residence",
      location: "E-7, Islamabad",
      completionDate: "April 2023",
    },
  ];

  const openProjectDetails = (project: any) => {
    setSelectedProject(project);
  };

  return (
    <div className="min-h-screen">
      <HeroSection
        title="Our Projects"
        subtitle="Explore our portfolio of stunning false ceiling installations across Islamabad."
        backgroundImage="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
      />

      {/* Projects Gallery Section */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="text-gradient">Portfolio</span>
            </h2>
            <p className="text-lg text-foreground/80">
              Browse through our completed projects to see the quality and variety of our false ceiling work.
            </p>
          </div>

          <Tabs defaultValue="all" className="mb-12 animate-fade-in">
            <div className="flex justify-center">
              <TabsList>
                <TabsTrigger value="all">All Projects</TabsTrigger>
                <TabsTrigger value="residential">Residential</TabsTrigger>
                <TabsTrigger value="commercial">Commercial</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="all" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                  <div key={project.id} onClick={() => openProjectDetails(project)}>
                    <ProjectCard
                      title={project.title}
                      category={project.category}
                      image={project.image}
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="residential" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects
                  .filter((project) => project.category === "Residential")
                  .map((project) => (
                    <div key={project.id} onClick={() => openProjectDetails(project)}>
                      <ProjectCard
                        title={project.title}
                        category={project.category}
                        image={project.image}
                      />
                    </div>
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="commercial" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects
                  .filter((project) => project.category === "Commercial")
                  .map((project) => (
                    <div key={project.id} onClick={() => openProjectDetails(project)}>
                      <ProjectCard
                        title={project.title}
                        category={project.category}
                        image={project.image}
                      />
                    </div>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Project Details Dialog */}
      {selectedProject && (
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
              <DialogDescription className="text-accent">
                {selectedProject.category}
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-auto rounded-lg mb-6"
              />
              <div className="space-y-4">
                <p className="text-lg">{selectedProject.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                  <div>
                    <h4 className="font-medium text-foreground/70 mb-1">Client</h4>
                    <p>{selectedProject.client}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground/70 mb-1">Location</h4>
                    <p>{selectedProject.location}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground/70 mb-1">Completed</h4>
                    <p>{selectedProject.completionDate}</p>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* CTA Section */}
      <section className="section bg-accent/10">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready for Your Own Stunning Ceiling?
            </h2>
            <p className="text-lg mb-8 text-foreground/80">
              Let us transform your space with our expert false ceiling solutions. Contact us today to discuss your project.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
