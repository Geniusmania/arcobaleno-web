
import { ArrowRight, Battery, Power, Wrench, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Index = () => {
  const features = [
    {
      icon: Battery,
      title: "Industrial Batteries",
      description: "High-performance batteries for industrial applications",
      link: "/products",
    },
    {
      icon: Power,
      title: "Power Solutions",
      description: "Reliable power generation and distribution systems",
      link: "/services",
    },
    {
      icon: Wrench,
      title: "Maintenance",
      description: "Professional maintenance and repair services",
      link: "/services",
    },
    {
      icon: Truck,
      title: "Supply Chain",
      description: "Efficient logistics and supply chain solutions",
      link: "/services",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] hero-pattern overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-navy/70" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            >
              Powering Industry with Innovation
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl mb-8 text-gray-200"
            >
              Leading provider of industrial solutions, from power generation to
              maintenance services. Experience excellence in every solution.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                className="bg-gold hover:bg-gold/90 text-navy font-semibold"
              >
                Explore Solutions
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Contact Us
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">
              Complete Industrial Solutions
            </h2>
            <p className="text-lg text-steel max-w-2xl mx-auto">
              We provide comprehensive industrial solutions tailored to your needs,
              ensuring optimal performance and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-lg border bg-white shadow-sm card-hover"
              >
                <feature.icon className="w-12 h-12 text-gold mb-4" />
                <h3 className="text-xl font-semibold text-navy mb-2">
                  {feature.title}
                </h3>
                <p className="text-steel mb-4">{feature.description}</p>
                <Button
                  variant="ghost"
                  className="text-navy hover:text-gold transition-colors group flex items-center"
                  asChild
                >
                  <a href={feature.link}>
                    Learn More{" "}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
