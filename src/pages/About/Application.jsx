import React from "react";
import { motion } from "framer-motion";
import { FaIndustry, FaBuilding, FaFlask } from "react-icons/fa";

const Applications = () => {
  const applications = [
    {
      icon: <FaIndustry size={50} className="text-blue-500 mb-4" />,
      title: "Industrial Waste Management",
      description: `
        MFCs are used in industries to treat organic waste while generating electricity. 
        They help reduce waste management costs and promote sustainable practices.
      `,
    },
    {
      icon: <FaBuilding size={50} className="text-green-500 mb-4" />,
      title: "Urban Water Treatment",
      description: `
        MFCs are applied in urban wastewater treatment plants to clean water and recover energy, 
        supporting eco-friendly urban development.
      `,
    },
    {
      icon: <FaFlask size={50} className="text-yellow-500 mb-4" />,
      title: "Research and Innovation",
      description: `
        Researchers are exploring MFCs for advanced applications, including powering small devices 
        and bio-sensors, showcasing their versatility and potential.
      `,
    },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-20 text-center">
        <motion.h2
        className="text-4xl font-bold text-[#3aa699] mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Applications of Microbial Fuel Cells
        </motion.h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
          Microbial Fuel Cells are transforming multiple industries by offering innovative solutions for 
          energy generation and resource recovery. Here are some of the key applications.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {applications.map((application, index) => (
            <motion.div
              key={index}
              className="p-8 bg-gray-100 shadow-lg rounded-lg text-center transform transition duration-300 hover:scale-105 hover:bg-[#29615a] hover:text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.3 }}
            >
              {application.icon}
              <h3 className="text-2xl font-semibold text-blue-600 mb-3 hover:text-white">
                {application.title}
              </h3>
              <p className="text-gray-600 leading-relaxed hover:text-gray-200">
                {application.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Applications;
