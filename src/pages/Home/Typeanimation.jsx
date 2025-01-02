import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const TypingAnimation = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      className="text-lg md:text-[40px] text-[#318078] font-extrabold mt-8 max-w-2xl text-center"
    >
      <TypeAnimation
        sequence={[
          "From Our Store to Your Door", // First string
          2000, // Pause for 2 seconds
          "Fast, Reliable, and Sustainable", // Second string
          2000, // Pause for 2 seconds
        ]}
        speed={50} // Typing speed
        wrapper="p" // The HTML tag used to wrap the animation
        repeat={Infinity} // Infinite loop
        style={{
          display: "inline-block", // Keeps the animation aligned properly
        }}
      />
    </motion.div>
  );
};

export default TypingAnimation;
