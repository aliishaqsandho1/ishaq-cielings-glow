
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Ishaq Ahmed",
      position: "Founder & Chief Ceiling Designer",
      image: "/placeholder.svg",
    },
    {
      name: "Farhan Khan",
      position: "Project Manager",
      image: "/placeholder.svg",
    },
    {
      name: "Adeel Malik",
      position: "Senior Craftsman",
      image: "/placeholder.svg",
    },
  ];

  const values = [
    {
      title: "Quality Craftsmanship",
      description:
        "We take pride in our meticulous attention to detail and superior workmanship on every project we undertake.",
    },
    {
      title: "Customer Satisfaction",
      description:
        "Our clients' needs and expectations are our top priority, guiding our approach to every project.",
    },
    {
      title: "Integrity & Reliability",
      description:
        "We maintain the highest standards of honesty, transparency, and reliability in all our business dealings.",
    },
    {
      title: "Innovation",
      description:
        "We continuously explore new designs, techniques, and materials to provide cutting-edge ceiling solutions.",
    },
  ];

  return (
    <div className="min-h-screen">
      <HeroSection
        title="About ISHAQ CIELINGS"
        subtitle="Learn about our journey, our team, and our commitment to excellence in false ceiling design and installation."
        backgroundImage="https://images.unsplash.com/photo-1617311149065-34078f5f13eb?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
      />

      {/* Our Story Section */}
      <section className="section">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="text-gradient">Story</span>
              </h2>
              <p className="text-lg mb-6 text-foreground/80">
                ISHAQ CIELINGS was founded in 2010 by Ishaq Ahmed, a master craftsman with a passion for creating beautiful ceiling designs. What began as a small operation has grown into one of Islamabad's most trusted false ceiling companies.
              </p>
              <p className="text-lg mb-6 text-foreground/80">
                Over the years, we've had the privilege of transforming thousands of spaces, from residential homes to commercial establishments, with our exquisite Plaster of Paris (POP) and gypsum ceiling installations.
              </p>
              <p className="text-lg mb-8 text-foreground/80">
                Today, we continue to uphold our founder's commitment to quality craftsmanship and exceptional customer service as we help clients across Islamabad enhance their spaces with beautiful ceiling designs.
              </p>
            </div>
            <div className="w-full lg:w-1/2 animate-fade-in delay-200">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg overflow-hidden h-64">
                  <img
                    src="https://images.unsplash.com/photo-1604014056465-3b1fa31e3827?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
                    alt="Our journey"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden h-64 mt-8">
                  <img
                    src="https://images.unsplash.com/photo-1594033579016-2e2a0116e6c9?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
                    alt="Our work"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden h-64">
                  <img
                    src="https://images.unsplash.com/photo-1571843439991-dd2b8e051966?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
                    alt="Our expertise"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden h-64 mt-8">
                  <img
                    src="https://images.unsplash.com/photo-1614701675597-83a1e1533c18?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
                    alt="Our team"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="section bg-secondary/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="text-gradient">Core Values</span>
            </h2>
            <p className="text-lg text-foreground/80">
              These principles guide everything we do at ISHAQ CIELINGS.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="flex items-start p-6 rounded-lg bg-background shadow-sm animate-fade-in delay-100"
              >
                <div className="mr-4 mt-1">
                  <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                    <Check className="h-5 w-5 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-foreground/80">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Meet Our <span className="text-gradient">Expert Team</span>
            </h2>
            <p className="text-lg text-foreground/80">
              The skilled professionals behind our exceptional ceiling installations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-background rounded-lg shadow-sm overflow-hidden animate-fade-in delay-200"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-foreground/70">{member.position}</p>
                </div>
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
              Let's Work Together
            </h2>
            <p className="text-lg mb-8 text-foreground/80">
              Ready to enhance your space with our expert false ceiling solutions? Contact us today for a consultation and let's bring your vision to life.
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

export default About;
