
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
      image: "/lovable-uploads/1c0525f3-8b13-4604-a2d2-bc107da6a1b2.png",
      items: ["Hydraulic Oils", "Gear Oils", "Compressor Oils", "Turbine Oils"],
      details: "Our industrial lubricants are formulated to provide superior protection against wear, oxidation, and corrosion in demanding industrial environments. They offer excellent thermal stability, extended service life, and improved equipment reliability.",
      products: [
        { 
          name: "Premium Hydraulic Oil", 
          specs: "ISO VG 32, 46, 68", 
          price: "Contact for pricing",
          image: "/lovable-uploads/c7357c10-91c2-4883-b618-f5946e03a591.png"
        },
        { 
          name: "Heavy-Duty Gear Oil", 
          specs: "ISO VG 150, 220, 320", 
          price: "Contact for pricing",
          image: "/lovable-uploads/db6eccf0-b054-4716-9026-e5bdec24c4b6.png"
        },
        { 
          name: "Synthetic Compressor Oil", 
          specs: "ISO VG 32, 46, 68", 
          price: "Contact for pricing",
          image: "/lovable-uploads/f70338e4-fcce-4671-855a-c6e33c97f4bb.png"
        },
        { 
          name: "High-Temperature Turbine Oil", 
          specs: "ISO VG 32, 46", 
          price: "Contact for pricing",
          image: "/lovable-uploads/6d305c97-bd29-455e-9274-b0957bc0771d.png"
        }
      ]
    },
    {
      id: 2,
      title: "Power Generation",
      description: "Reliable power generation solutions for various applications",
      image: "/lovable-uploads/e23ac95e-9be3-42f7-a213-8bac9ed249d4.png",
      items: ["Generators", "Power Plants", "Alternators", "Control Systems"],
      details: "Our power generation solutions provide reliable, efficient, and cost-effective electricity for industrial, commercial, and residential applications. From small generators to complete power plants, we offer comprehensive solutions tailored to your specific needs.",
      products: [
        { 
          name: "Industrial Generator", 
          specs: "50-500 kW, Diesel/Gas", 
          price: "Contact for pricing",
          image: "/lovable-uploads/f5c9ca6f-a4ce-4fd2-9633-9899c08953fd.png"
        },
        { 
          name: "Modular Power Plant", 
          specs: "1-10 MW capacity", 
          price: "Contact for pricing",
          image: "/lovable-uploads/196194c4-12c4-44f0-84e7-30f1ae7fe626.png"
        },
        { 
          name: "High-Efficiency Alternator", 
          specs: "100-1000 kVA", 
          price: "Contact for pricing",
          image: "/lovable-uploads/3b06df88-d5f8-43c9-a026-4d5c6cdaa9c4.png"
        },
        { 
          name: "Advanced Control System", 
          specs: "Digital monitoring and control", 
          price: "Contact for pricing",
          image: "/lovable-uploads/7e69820c-92a7-4314-8f52-416eaa873b45.png"
        }
      ]
    },
    {
      id: 3,
      title: "Industrial Batteries",
      description: "High-performance batteries for industrial applications",
      image: "/lovable-uploads/2b1278f5-4805-413e-a72a-49a81d2d581f.png",
      items: ["Deep Cycle Batteries", "Starting Batteries", "Stationary Batteries", "Traction Batteries"],
      details: "Our industrial batteries are designed to deliver reliable power for various applications in demanding environments. We offer a comprehensive range of batteries with superior cycle life, excellent charge acceptance, and minimal maintenance requirements.",
      products: [
        { 
          name: "Deep Cycle Battery", 
          specs: "12V, 100-250Ah", 
          price: "Contact for pricing",
          image: "/lovable-uploads/d481cf98-00b8-4f19-b5ae-9f01913228f8.png"
        },
        { 
          name: "High-Cranking Starting Battery", 
          specs: "12V, 1000-1500 CCA", 
          price: "Contact for pricing",
          image: "/lovable-uploads/fa70a2e9-c4f7-4e91-b9a7-a80f8a977302.png"
        },
        { 
          name: "Stationary VRLA Battery", 
          specs: "2V cells, 100-3000Ah", 
          price: "Contact for pricing",
          image: "/lovable-uploads/4408391e-4951-49d9-8aa2-0dc539720d0f.png"
        },
        { 
          name: "Traction Battery Pack", 
          specs: "24V/48V/80V systems", 
          price: "Contact for pricing",
          image: "/lovable-uploads/d3e19a9b-69c6-4732-bbfd-74d1deb48d0c.png"
        }
      ]
    },
    {
      "id": 4,
      "title": "Pumps",
      "description": "High-performance pumps for industrial and commercial applications",
      "image": "/lovable-uploads/b2a8e7a8-5e58-41c4-86da-ddd8a0bde62c.png",
      "items": ["Centrifugal Pumps", "Submersible Pumps", "Diaphragm Pumps", "Peristaltic Pumps"],
      "details": "Our pumps are designed to handle a variety of industrial and commercial fluid transfer needs. With advanced engineering and durable materials, these pumps ensure efficiency, reliability, and long-lasting performance.",
      "products": [
        { 
          "name": "Centrifugal Water Pump", 
          "specs": "High-flow rate, corrosion-resistant", 
          "price": "Contact for pricing",
          "image": "/lovable-uploads/db6eccf0-b054-4716-9026-e5bdec24c4b6.png"
        },
        { 
          "name": "Submersible Sewage Pump", 
          "specs": "Heavy-duty, stainless steel construction", 
          "price": "Contact for pricing",
          "image": "/lovable-uploads/17dae553-e83d-474c-92ab-17bbb9a946ef.png"
        },
        { 
          "name": "Air-Operated Diaphragm Pump", 
          "specs": "Chemical-resistant, self-priming", 
          "price": "Contact for pricing",
          "image": "/lovable-uploads/2dd2c83f-7dc2-4835-bca1-6dbde75b0ed6.png"
        },
        { 
          "name": "Peristaltic Metering Pump", 
          "specs": "Precise dosing, low maintenance", 
          "price": "Contact for pricing",
          "image": "/lovable-uploads/54126bb1-5d1b-4c82-ac86-b2f442088a62.png"
        }
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
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {category.products.map((product, idx) => (
                          <div key={idx} className="p-3 bg-gray-50 rounded-md flex flex-col">
                            <div className="h-40 mb-3 overflow-hidden rounded-md">
                              <img 
                                src={product.image} 
                                alt={product.name}
                                className="w-full h-full object-contain" 
                              />
                            </div>
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
