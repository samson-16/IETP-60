import React from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaWater, FaGlobe } from "react-icons/fa";

const Benefits = () => {
  const benefits = [
    {
      icon: <FaLeaf size={50} className="mb-4" />,
      title: "Clean Energy",
      description: `
        Microbial Fuel Cells offer a renewable energy solution by utilizing organic waste. 
        They reduce our dependency on fossil fuels, lower greenhouse gas emissions, 
        and pave the way for a cleaner, more sustainable energy future.
      `,
      background: "bg-[#318078]",
      textColor: "text-white",
    },
    {
      icon: <FaWater size={50} className="text-blue-500 mb-4" />,
      title: "Wastewater Treatment",
      description: `
        MFCs not only generate energy but also efficiently purify wastewater. 
        By breaking down organic matter in waste streams, they produce clean water, 
        making them a dual-purpose solution for energy generation and resource recovery.
      `,
      background: "bg-gray-200",
      textColor: "text-gray-800",
    },
    {
      icon: <FaGlobe size={50} className="mb-4" />,
      title: "Sustainable Solutions",
      description: `
        With low environmental impact and high efficiency, MFCs contribute to 
        sustainable development. They enable industries and communities to 
        adopt eco-friendly practices, driving a greener and more balanced world.
      `,
      background: "bg-[#318078]",
      textColor: "text-white",
    },
  ];

  return (
    <div className="py-16 bg-gradient-to-r from-gray-100 via-white to-gray-100">
      <div className="container mx-auto px-6 lg:px-20 text-center">
        <motion.h2
          className="text-4xl font-bold text-[#318078] mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Benefits of Microbial Fuel Cells
        </motion.h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
          Microbial Fuel Cells (MFCs) provide innovative solutions for energy generation and 
          environmental protection. Learn how MFCs drive sustainability and improve resource 
          management in various industries.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className={`p-8 rounded-lg text-center transform transition-transform duration-300 hover:scale-105 shadow-lg ${benefit.background}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.3 }}
            >
              <div className={`${benefit.textColor}`}>{benefit.icon}</div>
              <h3 className={`text-2xl font-semibold mb-4 ${benefit.textColor}`}>
                {benefit.title}
              </h3>
              <p className={`leading-relaxed ${benefit.textColor}`}>
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
