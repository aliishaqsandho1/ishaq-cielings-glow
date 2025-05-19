
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gradient">ISHAQ CIELINGS</h3>
            <p className="text-primary-foreground/80 max-w-xs">
              Transforming spaces with exquisite false ceiling designs in Islamabad and beyond. Quality craftsmanship since 2010.
            </p>
          </div>
          
          <div className="space-y-4">
            <h5 className="text-lg font-semibold">Quick Links</h5>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Services</Link></li>
              <li><Link to="/projects" className="hover:text-accent transition-colors">Projects</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h5 className="text-lg font-semibold">Services</h5>
            <ul className="space-y-2">
              <li><Link to="/services" className="hover:text-accent transition-colors">Plaster of Paris Ceilings</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Gypsum Ceilings</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Decorative Ceilings</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Commercial Projects</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h5 className="text-lg font-semibold">Contact Us</h5>
            <address className="not-italic text-primary-foreground/80">
              <p>Islamabad, Pakistan</p>
              <p className="mt-2">Email: info@ishaqcielings.com</p>
              <p className="mt-1">Phone: +92 XXX XXXXXXX</p>
            </address>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/70 text-sm">
              © {currentYear} ISHAQ CIELINGS. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex items-center space-x-6">
              <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
