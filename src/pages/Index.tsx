
import { ArrowRight, Battery, Power, Wrench, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const Index = () => {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);
  
  // Hero slider data
  const heroSlides = [
    {
      image: "/uploads/battery11.jpg",
      headline: "Industrial Batteries for Every Need",
      description: "High-performance batteries designed for demanding industrial applications"
    },
    {
      image: "/uploads/power_gen.jpg",
      headline: "Powerful Generation Solutions",
      description: "Reliable power systems to keep your business running smoothly"
    },
    {
      image: "/uploads/ups11.jpg",
      headline: "Uninterrupted Power Supply",
      description: "Protect your critical systems with our advanced UPS technology"
    },
    {
      image: "/uploads/gen_lub1.jpg",
      headline: "Premium Maintenance Services",
      description: "Professional maintenance keeping your equipment at peak performance"
    }
  ];
  
  // Autoplay functionality
  useEffect(() => {
    if (!api) return;
    
    // Set up the interval for autoplay
    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);
    
    // Cleanup on unmount
    return () => clearInterval(interval);
  }, [api]);
  
  // Update current slide index when the carousel changes
  useEffect(() => {
    if (!api) return;
    
    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };
    
    api.on("select", onSelect);
    
    // Cleanup
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

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
      {/* Hero Section with Carousel */}
      <section className="relative h-[90vh] overflow-hidden">
        <Carousel 
          setApi={setApi} 
          className="h-full w-full"
          opts={{
            loop: true,
            align: "start",
          }}
        >
          <CarouselContent className="h-full">
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index} className="h-full w-full">
                <div className="relative h-full w-full">
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center" 
                    style={{ backgroundImage: `url(${slide.image})` }}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-navy/70" />
                  
                  {/* Content */}
                  <div className="relative h-full flex items-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-white max-w-3xl"
                      >
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                          {slide.headline}
                        </h1>
                        <p className="text-lg sm:text-xl mb-8 text-gray-200">
                          {slide.description}
                        </p>
                        <div className="flex flex-wrap gap-4">
                          <Button
                            size="lg"
                            className="bg-gold hover:bg-gold/90 text-navy font-semibold"
                            asChild
                          >
                            <Link to="/products">Explore Solutions</Link>
                          </Button>
                          <Button
                            size="lg"
                            variant="outline"
                            className="border-white text-white hover:bg-white/10"
                            asChild
                          >
                            <Link to="/contact">Contact Us</Link>
                          </Button>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Navigation Controls */}
          <div className="absolute z-10 bottom-10 left-0 right-0 flex justify-center gap-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  current === index ? "bg-gold w-8" : "bg-white/50 hover:bg-white"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          <CarouselPrevious className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white border-none" />
          <CarouselNext className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white border-none" />
        </Carousel>
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
                  <Link to={feature.link}>
                    Learn More{" "}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
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
