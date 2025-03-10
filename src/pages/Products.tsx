
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);

  const productCategories = [
    {
      id: 1,
      title: "Industrial Lubricants",
      description: "High-quality lubricants for industrial machinery and equipment",
      image: "https://images.unsplash.com/photo-1590959651373-a3db0f38a961?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      items: ["Hydraulic Oils", "Gear Oils", "Compressor Oils", "Turbine Oils"],
      details: "Our industrial lubricants are formulated to provide superior protection against wear, oxidation, and corrosion in demanding industrial environments. They offer excellent thermal stability, extended service life, and improved equipment reliability.",
      products: [
        { name: "Premium Hydraulic Oil", specs: "ISO VG 32, 46, 68", price: "Contact for pricing" },
        { name: "Heavy-Duty Gear Oil", specs: "ISO VG 150, 220, 320", price: "Contact for pricing" },
        { name: "Synthetic Compressor Oil", specs: "ISO VG 32, 46, 68", price: "Contact for pricing" },
        { name: "High-Temperature Turbine Oil", specs: "ISO VG 32, 46", price: "Contact for pricing" }
      ]
    },
    {
      id: 2,
      title: "Power Generation",
      description: "Reliable power generation solutions for various applications",
      image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      items: ["Generators", "Power Plants", "Alternators", "Control Systems"],
      details: "Our power generation solutions provide reliable, efficient, and cost-effective electricity for industrial, commercial, and residential applications. From small generators to complete power plants, we offer comprehensive solutions tailored to your specific needs.",
      products: [
        { name: "Industrial Generator", specs: "50-500 kW, Diesel/Gas", price: "Contact for pricing" },
        { name: "Modular Power Plant", specs: "1-10 MW capacity", price: "Contact for pricing" },
        { name: "High-Efficiency Alternator", specs: "100-1000 kVA", price: "Contact for pricing" },
        { name: "Advanced Control System", specs: "Digital monitoring and control", price: "Contact for pricing" }
      ]
    },
    {
      id: 3,
      title: "Industrial Batteries",
      description: "High-performance batteries for industrial applications",
      image: "https://images.unsplash.com/photo-1558316440-7e926c2c60e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      items: ["Deep Cycle Batteries", "Starting Batteries", "Stationary Batteries", "Traction Batteries"],
      details: "Our industrial batteries are designed to deliver reliable power for various applications in demanding environments. We offer a comprehensive range of batteries with superior cycle life, excellent charge acceptance, and minimal maintenance requirements.",
      products: [
        { name: "Deep Cycle Battery", specs: "12V, 100-250Ah", price: "Contact for pricing" },
        { name: "High-Cranking Starting Battery", specs: "12V, 1000-1500 CCA", price: "Contact for pricing" },
        { name: "Stationary VRLA Battery", specs: "2V cells, 100-3000Ah", price: "Contact for pricing" },
        { name: "Traction Battery Pack", specs: "24V/48V/80V systems", price: "Contact for pricing" }
      ]
    },
    {
      id: 4,
      title: "Safety Equipment",
      description: "Comprehensive range of safety equipment for industrial environments",
      image: "https://images.unsplash.com/photo-1580287825613-8d5bc605b1ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      items: ["Safety Helmets", "Protective Clothing", "Fall Protection", "Respiratory Protection"],
      details: "Our safety equipment is designed to protect workers in hazardous industrial environments. We offer high-quality products that meet or exceed international safety standards, providing reliable protection against various workplace hazards.",
      products: [
        { name: "Industrial Safety Helmet", specs: "ANSI Z89.1 certified", price: "Contact for pricing" },
        { name: "Flame-Resistant Coverall", specs: "NFPA 2112 compliant", price: "Contact for pricing" },
        { name: "Full-Body Harness", specs: "ANSI Z359.11 certified", price: "Contact for pricing" },
        { name: "Powered Air Purifying Respirator", specs: "NIOSH approved", price: "Contact for pricing" }
      ]
    }
  ];

  const toggleDetails = (id: number) => {
    if (expandedCategory === id) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(id);
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-200">
              Discover our comprehensive range of high-quality industrial products
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Product Categories</h2>
            <p className="text-lg text-steel max-w-3xl mx-auto">
              We offer a wide range of industrial products to meet your specific needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {productCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-md card-hover"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-navy mb-2">{category.title}</h3>
                  <p className="text-steel mb-4">{category.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-navy mb-2">Featured Products:</h4>
                    <ul className="list-disc pl-5 text-steel">
                      {category.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  {expandedCategory === category.id && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 mb-4 pt-4 border-t"
                    >
                      <p className="text-steel mb-4">{category.details}</p>
                      <h4 className="font-semibold text-navy mb-2">Available Products:</h4>
                      <div className="space-y-3">
                        {category.products.map((product, idx) => (
                          <div key={idx} className="p-3 bg-gray-50 rounded-md">
                            <h5 className="font-medium text-navy">{product.name}</h5>
                            <p className="text-sm text-steel">Specifications: {product.specs}</p>
                            <p className="text-sm font-medium text-navy mt-1">{product.price}</p>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 flex justify-end">
                        <Button 
                          className="bg-gold hover:bg-gold/90 text-navy font-semibold"
                          asChild
                        >
                          <Link to="/contact">Request Quote</Link>
                        </Button>
                      </div>
                    </motion.div>
                  )}
                  
                  <Button
                    variant="ghost"
                    className="text-navy hover:text-gold transition-colors group flex items-center"
                    onClick={() => toggleDetails(category.id)}
                  >
                    {expandedCategory === category.id ? "Show Less" : "View Details"}{" "}
                    <ArrowRight className={`ml-2 w-4 h-4 transition-transform ${
                      expandedCategory === category.id ? "rotate-90" : "group-hover:translate-x-1"
                    }`} />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
