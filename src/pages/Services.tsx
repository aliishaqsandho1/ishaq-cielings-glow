
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  // Sample data - replace with actual content
  const mainServices = [
    {
      title: "Plaster of Paris (POP) Ceilings",
      description: "Our specialty is creating stunning POP ceilings that add elegance and character to any space. We craft custom designs ranging from simple, clean styles to elaborate, ornate patterns.",
      image: "https://images.unsplash.com/photo-1603193795627-5e32ef0dca18?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      features: [
        "Custom designs tailored to your preferences",
        "Seamless installation with premium materials",
        "Variety of textures and finishes available",
        "Durable and long-lasting results",
        "Perfect for creating unique focal points",
      ],
    },
    {
      title: "Gypsum Board Ceilings",
      description: "Modern and versatile, our gypsum board ceilings offer excellent acoustic properties and clean aesthetics. They're perfect for both residential and commercial applications.",
      image: "https://images.unsplash.com/photo-1585128792020-803d29415281?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      features: [
        "Lightweight and easy to install",
        "Excellent fire resistance properties",
        "Superior sound insulation",
        "Smooth finish for modern interiors",
        "Ideal for incorporating recessed lighting",
      ],
    },
    {
      title: "Decorative Ceiling Installations",
      description: "Transform your space with our decorative ceiling installations, including cornices, medallions, and custom moldings that add architectural interest and charm.",
      image: "https://images.unsplash.com/photo-1612965607446-25e1332775b6?ixlib=rb-4.0.3&auto=format&fit=crop&q=80",
      features: [
        "Wide range of ornamental designs",
        "Handcrafted details and precision",
        "Classical and contemporary styles",
        "Perfect for creating elegant atmosphere",
        "Customizable to match your interior design",
      ],
    },
  ];

  const additionalServices = [
    {
      title: "Commercial Ceilings",
      description: "Specialized false ceiling solutions for offices, retail stores, restaurants, and other commercial establishments.",
    },
    {
      title: "Ceiling Renovation",
      description: "Refresh and repair existing ceilings to restore their beauty or update their appearance with modern designs.",
    },
    {
      title: "Ceiling Lighting Integration",
      description: "Expert integration of various lighting systems within your false ceiling for optimal illumination and aesthetics.",
    },
    {
      title: "Acoustic Ceilings",
      description: "Specialized sound-absorbing ceiling solutions perfect for home theaters, studios, and office conference rooms.",
    },
  ];

  return (
    <div className="min-h-screen">
      <HeroSection
        title="Our Services"
        subtitle="Discover our comprehensive range of false ceiling solutions designed to transform your space."
        backgroundImage="https://images.unsplash.com/photo-1601675622585-55852a56f978?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
      />

      {/* Main Services Section */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="text-gradient">Premium Services</span>
            </h2>
            <p className="text-lg text-foreground/80">
              We offer comprehensive false ceiling solutions tailored to your specific needs and preferences, using only the highest quality materials.
            </p>
          </div>

          <div className="space-y-24">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 items-center animate-fade-in`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-lg overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {service.title}
                  </h3>
                  <p className="text-lg mb-6 text-foreground/80">
                    {service.description}
                  </p>
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mr-4">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10 3L4.5 8.5L2 6"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-accent"
                            />
                          </svg>
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button asChild>
                    <Link to="/contact">Get a Quote</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="section bg-secondary/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Additional <span className="text-gradient">Services</span>
            </h2>
            <p className="text-lg text-foreground/80">
              Beyond our core offerings, we provide specialized solutions to meet diverse needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="card-hover animate-fade-in delay-100">
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="outline" asChild>
                    <Link to="/contact">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="text-gradient">Process</span>
            </h2>
            <p className="text-lg text-foreground/80">
              Our streamlined approach ensures a smooth experience from consultation to completion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description:
                  "We begin with a detailed discussion to understand your vision, requirements, and preferences.",
              },
              {
                step: "02",
                title: "Design & Planning",
                description:
                  "Our designers create custom ceiling plans tailored to your space and aesthetic preferences.",
              },
              {
                step: "03",
                title: "Installation",
                description:
                  "Our skilled craftsmen execute the installation with precision and attention to detail.",
              },
              {
                step: "04",
                title: "Final Inspection",
                description:
                  "We thoroughly inspect the completed work to ensure it meets our high standards of quality.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center animate-fade-in delay-200">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-xl font-bold text-accent">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-foreground/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-accent/10">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 animate-fade-in">
            <div className="w-full lg:w-2/3">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to transform your space?
              </h2>
              <p className="text-lg text-foreground/80">
                Contact us today for a consultation and get started on your custom ceiling project.
              </p>
            </div>
            <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
              <Button size="lg" asChild>
                <Link to="/contact">Request a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
