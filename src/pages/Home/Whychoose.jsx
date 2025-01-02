import React from "react";
import { motion } from "framer-motion";

const WhyChooseMFCs = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.section
      className="py-16 bg-gray-100 text-center"
      id="why-choose-mfcs"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.h2
        className="text-4xl font-bold text-blue-700"
        variants={itemVariants}
      >
        Why Choose MFCs?
      </motion.h2>
      <motion.p
        className="mt-4 text-gray-600 max-w-3xl mx-auto"
        variants={itemVariants}
      >
        Microbial Fuel Cells (MFCs) offer groundbreaking advantages in clean energy,
        wastewater treatment, and innovative technology.
      </motion.p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Sustainability */}
        <motion.div
          className="p-6 bg-white shadow-lg rounded-lg text-center"
          variants={itemVariants}
        >
          <div className="text-blue-600 text-5xl mb-4">🌱</div>
          <h3 className="text-xl font-semibold text-blue-600">Sustainability</h3>
          <p className="mt-2 text-gray-600">
            MFCs reduce environmental pollution by converting organic waste into clean energy,
            supporting a sustainable future.
          </p>
        </motion.div>

        {/* Cost-Effectiveness */}
        <motion.div
          className="p-6 bg-white shadow-lg rounded-lg text-center"
          variants={itemVariants}
        >
          <div className="text-blue-600 text-5xl mb-4">💰</div>
          <h3 className="text-xl font-semibold text-blue-600">Cost-Effectiveness</h3>
          <p className="mt-2 text-gray-600">
            MFCs are a dual-purpose system that treats wastewater while generating renewable energy,
            reducing operational costs.
          </p>
        </motion.div>

        {/* Innovation */}
        <motion.div
          className="p-6 bg-white shadow-lg rounded-lg text-center"
          variants={itemVariants}
        >
          <div className="text-blue-600 text-5xl mb-4">🚀</div>
          <h3 className="text-xl font-semibold text-blue-600">Innovative Technology</h3>
          <p className="mt-2 text-gray-600">
            MFCs leverage cutting-edge microbial technology to provide eco-friendly and efficient energy solutions.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhyChooseMFCs;
