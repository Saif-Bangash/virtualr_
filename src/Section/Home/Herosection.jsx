import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";  

const Herosection = () => {
  return (
    <main className="bg-gray-900 text-white">
      <div className="h-100 flex items-center justify-center">
        <div className="text-center px-4 sm:px-8 md:px-12 lg:px-16">
          {/* Hero Title Animation */}
          <motion.h1
            className="text-4xl sm:text-5xl font-extrabold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.2 }} // Trigger when 20% is visible
          >
            Virtualr - Build Tools{" "}
            <span className="text-amber-600">for Developers</span>
          </motion.h1>

          {/* Hero Text Animation */}
          <motion.p
            className="text-lg sm:text-xl mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            reiciendis eius nisi?
          </motion.p>

          {/* Button Animation */}
          <div className="flex justify-center gap-6">
            <motion.button
              className="bg-amber-600 text-white text-sm p-4 rounded-lg text-lg font-semibold hover:bg-amber-700 transition duration-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              Start for free
            </motion.button>

            <motion.button
              className="border-2 border-amber-600 text-amber-600 px-2 rounded-lg text-lg font-semibold hover:bg-amber-600 hover:text-white transition duration-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              Documentation
            </motion.button>
          </div>
        </div>
      </div>

      {/* Video Section Animation */}
      <motion.div
        className="flex flex-col lg:flex-row justify-center items-center gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.div
          className="w-80 border-2 border-amber-600 sm:w-96 md:w-1/2 lg:w-1/3 xl:w-1/3"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 50, delay: 2.5 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <video
            autoPlay
            loop
            muted
            className="w-full h-auto rounded-lg shadow-lg"
          >
            <source src="src/assets/video1.mp4" type="video/mp4" />
          </video>
        </motion.div>

        <motion.div
          className="w-80 border-2 border-amber-600 sm:w-96 md:w-1/2 lg:w-1/3 xl:w-1/3"
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 50, delay: 3 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <video
            autoPlay
            loop
            muted
            className="w-full h-auto rounded-xl shadow-lg"
          >
            <source src="src/assets/video2.mp4" type="video/mp4" />
          </video>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default Herosection;
