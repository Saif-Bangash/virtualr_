import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";  
import { features } from "../../Constants";

const Featuresection = () => {
  return (
    <section className="bg-gray-900 py-20">
      {/* Section Heading */}
      <div className="flex flex-col justify-center items-center text-center text-white px-4 sm:px-8 md:px-12">
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-3xl font-extrabold text-amber-600 mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.2 }} // Trigger animation when 20% of the element is visible
        >
          FEATURES
        </motion.h2>
        <motion.p
          className="text-lg sm:text-xl lg:text-4xl mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          Easily build <span className="text-amber-600">your projects</span>{" "}
        </motion.p>
      </div>

      {/* Features List with Flex */}
      <motion.div
        className="flex flex-wrap justify-center gap-6 px-4 sm:px-8 md:px-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        {features.map((item, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4"
            initial={{ opacity: 0, y: 50 }}  
            whileInView={{ opacity: 1, y: 0 }}  
            transition={{
              delay: 1.2 + index * 0.2, 
              duration: 0.8,
              type: "spring",  
            }}
            viewport={{ once: false, amount: 0.2 }}  
          >
            <div className="flex mb-4">
              {/* Icon with fixed width */}
              <div className="text-amber-600 text-3xl mr-3">{item.icon}</div>

              {/* Title and Description */}
              <div className="px-2">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.text}
                </h3>
                <p className="text-gray-400 text-base">{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Featuresection;
