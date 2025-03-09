
import { motion } from "framer-motion";
import { Battery, Hammer, Shield, Truck, Wrench, Settings } from "lucide-react";

const Services = () => {
  const servicesList = [
    {
      icon: Wrench,
      title: "Maintenance & Repairs",
      description: "Professional maintenance and repair services for industrial equipment",
      details: [
        "Preventive maintenance programs",
        "Emergency repair services",
        "Equipment overhaul and reconditioning",
        "Performance testing and analysis"
      ]
    },
    {
      icon: Truck,
      title: "Supply & Importation",
      description: "Efficient logistics and supply chain solutions for industrial products",
      details: [
        "International procurement",
        "Custom clearance services",
        "Just-in-time delivery",
        "Inventory management"
      ]
    },
    {
      icon: Settings,
      title: "Installation Services",
      description: "Expert installation services for industrial equipment and systems",
      details: [
        "Equipment assembly and setup",
        "System integration",
        "Commissioning and testing",
        "Operator training"
      ]
    },
    {
      icon: Shield,
      title: "Warranty & Support",
      description: "Comprehensive warranty and support services for all our products",
      details: [
        "Extended warranty options",
        "24/7 technical support",
        "Remote monitoring",
        "Service level agreements"
      ]
    },
    {
      icon: Hammer,
      title: "Customization Services",
      description: "Tailored solutions to meet your specific industrial requirements",
      details: [
        "Custom equipment design",
        "System modification",
        "Process optimization",
        "Retrofit solutions"
      ]
    },
    {
      icon: Battery,
      title: "Battery Services",
      description: "Specialized services for industrial batteries and power systems",
      details: [
        "Battery testing and analysis",
        "Reconditioning and refurbishment",
        "Charging system optimization",
        "Battery management systems"
      ]
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-200">
              Comprehensive industrial services tailored to your business needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Our Service Offerings</h2>
            <p className="text-lg text-steel max-w-3xl mx-auto">
              We provide a wide range of industrial services to support your operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md card-hover"
              >
                <service.icon className="w-12 h-12 text-gold mb-4" />
                <h3 className="text-xl font-semibold text-navy mb-2">{service.title}</h3>
                <p className="text-steel mb-4">{service.description}</p>
                <div>
                  <h4 className="font-semibold text-navy mb-2">Service Includes:</h4>
                  <ul className="list-disc pl-5 text-steel">
                    {service.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Our Service Process</h2>
            <p className="text-lg text-steel max-w-3xl mx-auto">
              A streamlined approach to delivering exceptional service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { step: 1, title: "Consultation", description: "We begin by understanding your specific needs and requirements" },
              { step: 2, title: "Assessment", description: "Our experts assess your current systems and identify opportunities for improvement" },
              { step: 3, title: "Implementation", description: "We implement the agreed-upon solutions with minimal disruption to your operations" },
              { step: 4, title: "Follow-up", description: "We provide ongoing support and follow-up to ensure optimal performance" }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white p-6 rounded-lg shadow-md h-full">
                  <div className="absolute -top-4 -left-4 bg-gold text-navy w-8 h-8 rounded-full flex items-center justify-center font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-navy mb-2 mt-2">{step.title}</h3>
                  <p className="text-steel">{step.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 text-3xl text-gray-300">
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
