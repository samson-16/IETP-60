import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const OrderNow = () => {
  return (
       <div className="p-4 ">
         <section className="py-16 bg-gradient-to-br rounded-lg from-blue-700 to-green-400 text-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-extrabold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Ready to Harness the Power of MFCs?
        </motion.h2>
        <motion.p
          className="mt-4 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Explore our wide range of Microbial Fuel Cells designed to meet your
          needs. Join us in driving innovation and sustainability with cutting-edge
          clean energy solutions.
        </motion.p>
        <motion.div
          className="mt-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
         <div className="mt-14">
         <NavLink to="/products">
            <button className="px-8 py-6 mb-14 bg-white text-blue-700 font-semibold text-lg rounded-lg shadow-md hover:bg-gray-200 transition">
              Explore Products
            </button>
          </NavLink>
         </div>
        </motion.div>
      </div>
    </section>
       </div>
  );
};

export default OrderNow;
