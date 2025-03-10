
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
      image: "https://arcobalenodecov.com/wp-content/uploads/2015/05/photo_5951768514484354680_x.jpg",
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
      image: "https://americasgenerators.com/wp-content/uploads/2022/07/110-kW-Triton-Diesel-Generator-TP-JD110-T4F-Tier-4-Final-L.png",
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
      image: "https://arcobalenodecov.com/wp-content/uploads/2015/05/photo_5951768514484354679_x-500x380.jpg",
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
      "id": 4,
      "title": "Pumps",
      "description": "High-performance pumps for industrial and commercial applications",
      "image": "data:image/jpeg;base64,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",
      "items": ["Centrifugal Pumps", "Submersible Pumps", "Diaphragm Pumps", "Peristaltic Pumps"],
      "details": "Our pumps are designed to handle a variety of industrial and commercial fluid transfer needs. With advanced engineering and durable materials, these pumps ensure efficiency, reliability, and long-lasting performance.",
      "products": [
        { "name": "Centrifugal Water Pump", "specs": "High-flow rate, corrosion-resistant", "price": "Contact for pricing" },
        { "name": "Submersible Sewage Pump", "specs": "Heavy-duty, stainless steel construction", "price": "Contact for pricing" },
        { "name": "Air-Operated Diaphragm Pump", "specs": "Chemical-resistant, self-priming", "price": "Contact for pricing" },
        { "name": "Peristaltic Metering Pump", "specs": "Precise dosing, low maintenance", "price": "Contact for pricing" }
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
