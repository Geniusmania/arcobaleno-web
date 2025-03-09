
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Products = () => {
  const productCategories = [
    {
      id: 1,
      title: "Industrial Lubricants",
      description: "High-quality lubricants for industrial machinery and equipment",
      image: "https://images.unsplash.com/photo-1590959651373-a3db0f38a961?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      items: ["Hydraulic Oils", "Gear Oils", "Compressor Oils", "Turbine Oils"]
    },
    {
      id: 2,
      title: "Power Generation",
      description: "Reliable power generation solutions for various applications",
      image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      items: ["Generators", "Power Plants", "Alternators", "Control Systems"]
    },
    {
      id: 3,
      title: "Industrial Batteries",
      description: "High-performance batteries for industrial applications",
      image: "https://images.unsplash.com/photo-1558316440-7e926c2c60e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      items: ["Deep Cycle Batteries", "Starting Batteries", "Stationary Batteries", "Traction Batteries"]
    },
    {
      id: 4,
      title: "Safety Equipment",
      description: "Comprehensive range of safety equipment for industrial environments",
      image: "https://images.unsplash.com/photo-1580287825613-8d5bc605b1ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      items: ["Safety Helmets", "Protective Clothing", "Fall Protection", "Respiratory Protection"]
    }
  ];

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
                  <Button
                    variant="ghost"
                    className="text-navy hover:text-gold transition-colors group"
                  >
                    View Details{" "}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
