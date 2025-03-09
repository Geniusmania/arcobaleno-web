
import { motion } from "framer-motion";

const About = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Arcobaleno Decov</h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-200">
              Your trusted partner in industrial solutions for over two decades
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-navy mb-6">Our Story</h2>
              <p className="text-steel mb-6">
                Founded in 2002, Arcobaleno Decov has grown from a small supplier of industrial parts to a comprehensive 
                solutions provider for businesses across multiple industries. Our journey has been marked by a commitment 
                to quality, innovation, and customer satisfaction.
              </p>
              <p className="text-steel">
                Today, we pride ourselves on offering high-quality industrial products and services, 
                including lubricants, power plants, generators, and batteries. Our expertise extends to 
                importation, repairs, supply, maintenance, and installation services, making us a one-stop 
                solution for all industrial needs.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden shadow-xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Industrial facility" 
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Our Mission & Values</h2>
            <p className="text-lg text-steel max-w-3xl mx-auto">
              We are guided by our commitment to excellence and integrity in everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold text-navy mb-4">Excellence</h3>
              <p className="text-steel">
                We strive for excellence in every product we deliver and every service we provide. 
                Our commitment to quality is unwavering, ensuring that our clients receive nothing but the best.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold text-navy mb-4">Innovation</h3>
              <p className="text-steel">
                We embrace innovation and continuously seek new ways to improve our products and services. 
                By staying at the forefront of technological advancements, we help our clients stay ahead.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold text-navy mb-4">Integrity</h3>
              <p className="text-steel">
                We conduct our business with the highest levels of integrity and transparency. 
                Our clients can trust us to deliver on our promises and to always act in their best interest.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
