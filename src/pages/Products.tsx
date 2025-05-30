
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Products = () => {
  // Change from single selection to array of selected categories
  const [expandedCategories, setExpandedCategories] = useState<number[]>([]);

  const productCategories = [
    {
      id: 1,
      title: "Industrial Lubricants",
      description: "High-quality lubricants for industrial machinery and equipment",
      image: "/uploads/gen_lub11.jpg",
      items: ["Hydraulic Oils", "Gear Oils", "Compressor Oils", "Turbine Oils"],
      details: "Our industrial lubricants are formulated to provide superior protection against wear, oxidation, and corrosion in demanding industrial environments. They offer excellent thermal stability, extended service life, and improved equipment reliability.",
      products: [
        { 
          name: "Premium Hydraulic Oil", 
          specs: "ISO VG 32, 46, 68", 
          price: "Contact for pricing",
          image: "/uploads/lub21.jpg"
        },
        { 
          name: "Heavy-Duty Gear Oil", 
          specs: "ISO VG 150, 220, 320", 
          price: "Contact for pricing",
          image: "/uploads/lub21.jpg"
        },
        { 
          name: "Synthetic Compressor Oil", 
          specs: "ISO VG 32, 46, 68", 
          price: "Contact for pricing",
          image: "/uploads/lub123.jpg"
        },
        { 
          name: "High-Temperature Turbine Oil", 
          specs: "ISO VG 32, 46", 
          price: "Contact for pricing",
          image: "/uploads/lub12.jpg"
        }
      ]
    },
    {
      id: 2,
      title: "Power Generation",
      description: "Reliable power generation solutions for various applications",
      image: "/uploads/power_gen.jpg",
      items: ["Generators", "Power Plants", "Alternators", "Control Systems"],
      details: "Our power generation solutions provide reliable, efficient, and cost-effective electricity for industrial, commercial, and residential applications. From small generators to complete power plants, we offer comprehensive solutions tailored to your specific needs.",
      products: [
        { 
          name: "Industrial Generator", 
          specs: "50-500 kW, Diesel/Gas", 
          price: "Contact for pricing",
          image: "/uploads/power21.jpg"
        },
        { 
          name: "Modular UPS", 
          specs: "1-10 MW capacity", 
          price: "Contact for pricing",
          image: "/uploads/ups1.jpg"
        },
        { 
          name: "High-Efficiency UPS", 
          specs: "100-1000 kVA", 
          price: "Contact for pricing",
          image: "/uploads/ups12.jpg"
        },
        { 
          name: "Advanced Control System", 
          specs: "Digital monitoring and control", 
          price: "Contact for pricing",
          image: "/uploads/power21.jpg"
        }
      ]
    },
    {
      id: 3,
      title: "Industrial Batteries",
      description: "High-performance batteries for industrial applications",
      image: "/uploads/battery12.jpg",
      items: ["Deep Cycle Batteries", "Starting Batteries", "Stationary Batteries", "Traction Batteries"],
      details: "Our industrial batteries are designed to deliver reliable power for various applications in demanding environments. We offer a comprehensive range of batteries with superior cycle life, excellent charge acceptance, and minimal maintenance requirements.",
      products: [
        { 
          name: "Deep Cycle Battery", 
          specs: "12V, 100-250Ah", 
          price: "Contact for pricing",
          image: "/uploads/battery11.jpg"
        },
        { 
          name: "High-Cranking Starting Battery", 
          specs: "12V, 1000-1500 CCA", 
          price: "Contact for pricing",
          image: "/uploads/battery13.jpg"
        },
        { 
          name: "Stationary VRLA Battery", 
          specs: "2V cells, 100-3000Ah", 
          price: "Contact for pricing",
          image: "/uploads/battery12.jpg"
        },
        { 
          name: "Traction Battery Pack", 
          specs: "24V/48V/80V systems", 
          price: "Contact for pricing",
          image: "/uploads/battery12.jpg"
        }
      ]
    },
    {
      id: 4,
      title: "Pumps",
      description: "High-performance pumps for industrial and commercial applications",
      image: "/uploads/pump123.jpg",
      items: ["Centrifugal Pumps", "Submersible Pumps", "Diaphragm Pumps", "Peristaltic Pumps"],
      details: "Our pumps are designed to handle a variety of industrial and commercial fluid transfer needs. With advanced engineering and durable materials, these pumps ensure efficiency, reliability, and long-lasting performance.",
      products: [
        { 
          name: "Centrifugal Water Pump", 
          specs: "High-flow rate, corrosion-resistant", 
          price: "Contact for pricing",
          image: "/uploads/pump123.jpg"
        },
        { 
          name: "Submersible Sewage Pump", 
          specs: "Heavy-duty, stainless steel construction", 
          price: "Contact for pricing",
          image: "/uploads/pump.jpg"
        },
        { 
          name: "Air-Operated Diaphragm Pump", 
          specs: "Chemical-resistant, self-priming", 
          price: "Contact for pricing",
          image: "/uploads/pump123.jpg"
        },
        { 
          name: "Peristaltic Metering Pump", 
          specs: "Precise dosing, low maintenance", 
          price: "Contact for pricing",
          image: "/uploads/pump.jpg"
        }
      ]
    },
    // {
    //   id: 5,
    //   title: "UPS Systems",
    //   description: "Uninterruptible Power Supply systems for continuous power protection",
    //   image: "/lovable-uploads/2b1278f5-4805-413e-a72a-49a81d2d581f.png",
    //   icon: <BatteryCharging className="w-6 h-6 text-gold" />,
    //   items: ["Online UPS", "Line-Interactive UPS", "Standby UPS", "Industrial UPS"],
    //   details: "Our UPS systems provide reliable backup power and protection against power disturbances for critical equipment and processes. From small office setups to large industrial facilities, our UPS solutions ensure continuous operation during power outages and protect against surges, sags, and other power quality issues.",
    //   // products: [
    //   //   { 
    //   //     name: "Enterprise Online UPS", 
    //   //     specs: "10-200 kVA, True double conversion", 
    //   //     price: "Contact for pricing",
    //   //     image: "/lovable-uploads/d481cf98-00b8-4f19-b5ae-9f01913228f8.png"
    //   //   },
    //   //   { 
    //   //     name: "Industrial-Grade UPS", 
    //   //     specs: "5-100 kVA, Ruggedized design", 
    //   //     price: "Contact for pricing",
    //   //     image: "/lovable-uploads/4408391e-4951-49d9-8aa2-0dc539720d0f.png"
    //   //   },
    //   //   { 
    //   //     name: "Line-Interactive UPS", 
    //   //     specs: "1-10 kVA, Automatic Voltage Regulation", 
    //   //     price: "Contact for pricing",
    //   //     image: "/lovable-uploads/fa70a2e9-c4f7-4e91-b9a7-a80f8a977302.png"
    //   //   },
    //   //   { 
    //   //     name: "Modular UPS System", 
    //   //     specs: "25-500 kVA, Scalable architecture", 
    //   //     price: "Contact for pricing",
    //   //     image: "/lovable-uploads/f5c9ca6f-a4ce-4fd2-9633-9899c08953fd.png"
    //   //   }
    //   // ]
    // }
  ];

  // Modified to toggle multiple categories
  const toggleDetails = (id: number) => {
    if (expandedCategories.includes(id)) {
      setExpandedCategories(expandedCategories.filter(catId => catId !== id));
    } else {
      setExpandedCategories([...expandedCategories, id]);
    }
  };

  // New function to toggle all categories at once
  const toggleAllDetails = () => {
    if (expandedCategories.length === productCategories.length) {
      setExpandedCategories([]);
    } else {
      setExpandedCategories(productCategories.map(cat => cat.id));
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
            
            {/* Added toggle all button */}
            <Button 
              onClick={toggleAllDetails} 
              variant="outline" 
              className="mt-4 border-gold text-navy hover:bg-gold/10"
            >
              {expandedCategories.length === productCategories.length ? "Collapse All Categories" : "Expand All Categories"}
            </Button>
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
                {/* Enhanced image display */}
                <div className="h-72 overflow-hidden relative">
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    style={{ filter: 'contrast(1.1) brightness(1.1)' }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-navy/30 backdrop-blur-sm py-2 px-4">
                    <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                  </div>
                </div>
                
                <div className="p-4">
                  <p className="text-steel mb-4 text-sm">{category.description}</p>
                  
                  {/* Show content if category is in expanded array */}
                  {expandedCategories.includes(category.id) && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 mb-4 pt-4 border-t"
                    >
                      <p className="text-steel mb-4 text-sm">{category.details}</p>
                      <h4 className="font-semibold text-navy mb-3 text-sm">Available Products:</h4>
                      
                      {/* Enhanced product grid with larger images */}
                      <div className="grid grid-cols-2 gap-3">
                        {category.products.map((product, idx) => (
                          <div key={idx} className="overflow-hidden rounded-md flex flex-col border border-gray-200">
                            <div className="h-48 overflow-hidden">
                              <AspectRatio ratio={4/3} className="bg-slate-50">
                                <img 
                                  src={product.image} 
                                  alt={product.name}
                                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                                  style={{ filter: 'contrast(1.1) brightness(1.1)' }}
                                />
                              </AspectRatio>
                            </div>
                            <div className="p-2 bg-white/90">
                              <h5 className="font-medium text-navy text-sm truncate">{product.name}</h5>
                              <p className="text-xs text-steel truncate">Specs: {product.specs}</p>
                            </div>
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
                    {expandedCategories.includes(category.id) ? "Show Less" : "View Products"}{" "}
                    <ArrowRight className={`ml-2 w-4 h-4 transition-transform ${
                      expandedCategories.includes(category.id) ? "rotate-90" : "group-hover:translate-x-1"
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
