import React from "react";
import { testimonials } from "../../Constants";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"; // Import Framer Motion

const Testimonial = () => {
  return (
    <section className="bg-gray-900 py-16">
      {/* Section Header */}
      <div className="flex flex-wrap justify-center items-center mb-12">
        <h2 className="text-5xl text-white font-extrabold">What People are Saying</h2>
      </div>

      {/* Testimonial Cards */}
      <div className="flex flex-wrap justify-center gap-8 px-4 sm:px-8 md:px-12">
        {testimonials.map((teste, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              opacity: { duration: 0.4, ease: "easeOut" },
              scale: { duration: 0.6, ease: "easeOut" },
              y: { duration: 0.5, ease: "easeOut" },
              delay: index * 0.1, // Create a staggered effect based on index
            }}
            viewport={{ amount: 0.2, once: false }} // Trigger when 20% of the card is in view
          >
            {/* Testimonial Text */}
            <div className="mb-6">
              <p className="text-sm italic text-gray-400">"{teste.text}"</p>
            </div>

            {/* User Info */}
            <div className="flex items-center space-x-4 mt-auto">
              <img
                src={teste.image}
                alt="user"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold">{teste.user}</h3>
                <span className="text-sm text-gray-400">{teste.company}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
