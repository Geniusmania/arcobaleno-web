import { Facebook, Twitter, Linkedin, Mail, MapPin, Phone, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
    // Add your newsletter subscription logic here
  };
  
  return (
    <footer className="bg-navy text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Information */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-gold">Arcobaleno
            Decov</h3>
            <p className="mb-6 text-white/80">
              Providing high-quality industrial power solutions for over 25 years, 
              ensuring reliability and performance for businesses worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="https://web.facebook.com/arcobaleno.deco.7/?_rdc=1&_rdr#" aria-label="Facebook" className="text-white/70 hover:text-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" aria-label="Twitter" className="text-white/70 hover:text-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="text-white/70 hover:text-gold transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-gold">Quick Links</h3>
            <ul className="space-y-3">
              {["Products", "Services", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(/\s+/g, "-")}`} className="text-white/80 hover:text-gold transition-colors inline-block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-gold">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-gold shrink-0 mt-0.5" />
                <span className="text-white/80">
                ARCOBALENO SERVICE<br />
                PO Box: TN 1423<br />
                Teshie Nungua,<br/>
                Greater Accra
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-gold shrink-0" />
                <a href="tel:+1234567890" className="text-white/80 hover:text-gold transition-colors">
                  +233 (234) 567-890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-gold shrink-0" />
                <a href="mailto:info@powertech.com" className="text-white/80 hover:text-gold transition-colors">
                info@arcobalenodecov.com

</a>
              </li>
              <li className="flex items-center">
                <Clock className="mr-3 h-5 w-5 text-gold shrink-0" />
                <span className="text-white/80">Mon-Fri: 8AM - 6PM</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-gold">Newsletter</h3>
            <p className="mb-4 text-white/80">
              Subscribe to our newsletter for the latest updates on products and industry news.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white/10 text-white border-white/20 focus:border-gold placeholder:text-white/50"
              />
              <Button 
                type="submit" 
                className="w-full bg-gold hover:bg-gold/90 text-navy font-semibold"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Powered by alltech. All rights reserved.
          </p>
          {/* <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-white/60 hover:text-gold text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-white/60 hover:text-gold text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/sitemap" className="text-white/60 hover:text-gold text-sm transition-colors">
              Sitemap
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;