
import HeroSection from "@/components/HeroSection";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-8 w-8 text-accent" />,
      title: "Phone",
      details: ["+92 XXX XXXXXXX", "+92 XXX XXXXXXX"],
    },
    {
      icon: <Mail className="h-8 w-8 text-accent" />,
      title: "Email",
      details: ["info@ishaqcielings.com", "sales@ishaqcielings.com"],
    },
    {
      icon: <MapPin className="h-8 w-8 text-accent" />,
      title: "Office Address",
      details: ["123 Main Street", "Islamabad, Pakistan"],
    },
    {
      icon: <Clock className="h-8 w-8 text-accent" />,
      title: "Working Hours",
      details: ["Monday - Saturday", "9:00 AM - 7:00 PM"],
    },
  ];

  return (
    <div className="min-h-screen">
      <HeroSection
        title="Contact Us"
        subtitle="Reach out to us for a free consultation or to discuss your false ceiling project."
        backgroundImage="https://images.unsplash.com/photo-1611175694989-4870fafa4494?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
      />

      {/* Contact Info Section */}
      <section className="section">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-lg text-foreground/80">
              We're here to answer any questions you may have and help you transform your space with our expert false ceiling solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-secondary/30 text-center animate-fade-in"
              >
                <div className="mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                {item.details.map((detail, idx) => (
                  <p
                    key={idx}
                    className={idx === 0 ? "text-foreground/80" : "text-foreground/70"}
                  >
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              <ContactForm />
            </div>
            <div className="animate-fade-in delay-200">
              <h3 className="text-2xl font-bold mb-6">Our Location</h3>
              <div className="w-full h-[400px] rounded-lg overflow-hidden">
                {/* Replace with actual map embed code */}
                <div className="w-full h-full bg-secondary flex items-center justify-center">
                  <p className="text-lg">Map Placeholder - Replace with actual map embed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-secondary/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-lg text-foreground/80">
              Find answers to common questions about our services and process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in delay-100">
            {[
              {
                question: "How long does it typically take to install a false ceiling?",
                answer:
                  "The time required depends on the size and complexity of the project. A standard room ceiling usually takes 3-5 days to complete, while more elaborate designs may take longer.",
              },
              {
                question: "Do you provide free consultations?",
                answer:
                  "Yes, we offer free initial consultations to understand your requirements and provide expert advice on the best ceiling solutions for your space.",
              },
              {
                question: "What areas of Islamabad do you serve?",
                answer:
                  "We provide our services throughout Islamabad and surrounding areas, including Rawalpindi. We're available for projects in all sectors and neighborhoods.",
              },
              {
                question: "Do you offer warranties on your work?",
                answer:
                  "Yes, we stand behind our craftsmanship with a comprehensive warranty. Our false ceiling installations come with a 2-year warranty covering workmanship and installation defects.",
              },
            ].map((faq, index) => (
              <div key={index} className="p-6 rounded-lg bg-background shadow-sm">
                <h4 className="text-lg font-bold mb-3">{faq.question}</h4>
                <p className="text-foreground/80">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
