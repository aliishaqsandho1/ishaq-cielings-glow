
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  // Sample data - replace with actual content
  const services = [
    {
      title: "POP Ceiling Design",
      description: "Beautiful Plaster of Paris ceiling designs customized to your space and style preferences.",
      icon: "/placeholder.svg",
    },
    {
      title: "Gypsum Ceilings",
      description: "Modern and versatile gypsum board ceilings for residential and commercial spaces.",
      icon: "/placeholder.svg",
    },
    {
      title: "Decorative Ceilings",
      description: "Custom decorative ceiling designs that add elegance and character to any room.",
      icon: "/placeholder.svg",
    },
    {
      title: "Commercial Projects",
      description: "Specialized false ceiling solutions for offices, hotels, restaurants and other commercial spaces.",
      icon: "/placeholder.svg",
    },
  ];

  const stats = [
    { value: "10+", label: "Years of Experience" },
    { value: "500+", label: "Projects Completed" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "50+", label: "Expert Team Members" },
  ];

  return (
    <div className="min-h-screen">
      <HeroSection
        title="Transform Your Space With Premium False Ceilings"
        subtitle="Islamabad's leading false ceiling specialists, providing exceptional POP and gypsum ceiling installations with elegant designs and superior craftsmanship."
        backgroundImage="https://images.unsplash.com/photo-1603862018788-39e9acaa1b28?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
        showScrollIndicator={true}
      />
      
      {/* About Section */}
      <section className="section bg-secondary/30">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Islamabad's Trusted <span className="text-gradient">False Ceiling Specialists</span>
              </h2>
              <p className="text-lg mb-6 text-foreground/80">
                ISHAQ CIELINGS has been transforming spaces across Islamabad with exquisite false ceiling designs since 2010. We specialize in high-quality Plaster of Paris (POP) ceiling installations that combine functionality with stunning aesthetics.
              </p>
              <p className="text-lg mb-8 text-foreground/80">
                Our team of skilled craftsmen brings years of experience and a keen eye for detail to every project, ensuring flawless execution and outstanding results.
              </p>
              <Button asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="w-full lg:w-1/2 animate-fade-in delay-200">
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-full h-full border-2 border-accent rounded-lg"></div>
                <img
                  src="https://images.unsplash.com/photo-1584893572938-757e6c603046?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
                  alt="Our work"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="text-gradient">Premium Services</span>
            </h2>
            <p className="text-lg text-foreground/80">
              We offer a comprehensive range of false ceiling solutions tailored to enhance the beauty and functionality of your space.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className={`delay-${index * 100}`}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="section bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in">
                <p className="text-4xl md:text-5xl font-bold text-accent mb-3">{stat.value}</p>
                <p className="text-primary-foreground/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section bg-accent/10">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-lg mb-8 text-foreground/80">
              Contact us today for a free consultation and quote. Our team is ready to bring your vision to life with our expertise in false ceiling design and installation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/projects">View Our Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
