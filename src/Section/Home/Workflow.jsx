import React from "react";
import { checklistItems } from "../../Constants";
import { FaRegCheckCircle } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"; // Import Framer Motion

const Workflow = () => {
  return (
    <section className="bg-gray-900 py-16">
      {/* Section Header */}
      <div className="flex flex-wrap justify-center items-center text-center mb-10">
        <motion.h1
          className="text-3xl sm:text-4xl lg:text-5xl text-white font-extrabold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Accelerate your{" "}
          <span className="text-amber-600">coding workflow</span>
        </motion.h1>
      </div>

      {/* Workflow Content */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-12 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image */}
          <motion.div
            className="flex justify-center items-center mb-8 lg:mb-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            viewport={{ once: false, amount: 0.2 }} // Trigger animation when 20% of the element is visible
          >
            <img
              src="src/assets/code.jpg"
              alt="code"
              className="w-full h-full rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Checklist Items */}
          <div>
            {checklistItems.map((checklist, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }} // Animate when the item comes into view
                transition={{
                  delay: 0.5 + index * 0.2, // Staggered animation delay
                  duration: 0.8,
                  type: "spring",
                }}
                viewport={{ once: false, amount: 0.2 }} // Trigger animation when 20% of the element is visible
              >
                <div className="flex items-center mb-4">
                  <FaRegCheckCircle className="text-amber-600 text-3xl mr-3" />
                  <h3 className="text-xl font-semibold text-white">
                    {checklist.title}
                  </h3>
                </div>
                <p className="text-gray-400">{checklist.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
