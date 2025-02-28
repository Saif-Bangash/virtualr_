import React from "react";
import { pricingOptions } from "../../Constants";
import { CheckCircle2 } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"; // Import Framer Motion for scroll animations

const Pricing = () => {
  return (
    <section className="bg-gray-900 py-8">
      {/* Section Header */}
      <div className="flex justify-center items-center mb-12">
        <h1 className="text-amber-600 text-3xl font-extrabold">PRICING</h1>
      </div>

      {/* Pricing Cards */}
      <div className="flex flex-wrap justify-center gap-8">
        {pricingOptions.map((option, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-80 h-[380px]" // Fixed width and height
            initial={{ opacity: 0, scale: 0.9, y: 50 }} // Initial state
            whileInView={{ opacity: 1, scale: 1, y: 0 }} // Final state when in view
            transition={{
              opacity: { duration: 0.5, ease: "easeOut" },
              scale: { duration: 0.6, ease: "easeOut" },
              y: { duration: 0.5, ease: "easeOut" },
              delay: index * 0.1, // Staggered effect for each card
            }}
            viewport={{ once: false, amount: 0.2 }} // Trigger when 20% of the card is in view
          >
            {/* Plan Title */}
            <div className="text-center mb-6">
              <p className="text-2xl font-semibold mb-2">
                {option.title}
                {option.title === "pro" && (
                  <span className="text-xl bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text">
                    ( Most Popular)
                  </span>
                )}
              </p>
            </div>

            {/* Price */}
            <div className="text-center mb-6">
              <p className="text-4xl font-bold">
                <span>{option.price}</span>
                <span className="text-sm">/Month</span>
              </p>
            </div>

            {/* Features List */}
            <ul className="mb-6 space-y-4">
              {option.features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <CheckCircle2 className="text-amber-600" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Call to Action Button */}
            <div className="text-center mt-auto">
              <button className="bg-amber-600 text-white w-full py-2 px-6 rounded-lg text-lg font-semibold hover:bg-amber-700 transition duration-300">
                Choose Plan
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
